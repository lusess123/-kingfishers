import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import thFile = require("./../../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import dataFile = require("./../data");
import pickLeftDomFile = require("./../ItemSelector/AppraisalItemPickListDom");
import PickDomFile = require("./../../../../05tool/Picker/PickDom");


export module AppraisalItemDom {
    export class AppraisalItemDomAction extends domCore.DomAction {
    }

    export class AppraisalItemDomReact extends domCore.DomReact<AppraisalItemDomProps, AppraisalItemDomStates, AppraisalItemDomAction> implements domCore.IReact {

        public state = new AppraisalItemDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <p>已选项目：<a className="btn btn-sm btn-primary pull-right" onClick={() => { this.selectItems() } }>添加</a></p>
                {this._initTable() }
                <div className="Hf-overflow" style={{ height: 1, width: 1 }}>{this.props.Vm.PickDomObj.intoDom() }</div>
            </div>;
        }

        public _initTable(): React.ReactElement<any> {
            var theader = <thead className="thead-default">
                {this.initHeader() }
            </thead>
            var tbody = this.initBody();

            var table = <table className="table table-striped table-bordered table-hover">{theader}{tbody}</table>;
            return <div className="table-responsive"  onScroll={(e) => { this.fun_Scroll(e); } }>{table}</div>;


        }

        private fun_Scroll(e: React.UIEvent) {
            var _$obj = $(e.target);
            this.props.Vm.ScrollAuto(_$obj.scrollLeft());
        }

        public initHeader(): React.ReactElement<any> {
            return <tr>
                <th>项目分类</th>
                <th>项目名称</th>
                <th>分值</th>
                <th>最大分值</th>
                <th>操作</th>
            </tr>
        };

        public initBody(): React.ReactElement<any> {
            return <tbody>
                {this.props.Vm.RowList.map((row) => {
                    return <tr>
                        <td>{row.CategoryName}</td>
                        <td>{row.Name}</td>
                        <td>{row.ObjectValue}</td>
                        <td>{row.MaxValue}</td>
                        <td><a className="text-danger" onClick={() => { this.deleteItem(row.FID) } }>删除</a></td>
                    </tr>
                }) }
            </tbody>;
        };

        private deleteItem(id: string) {
            this.props.Vm.RowList = this.props.Vm.RowList.filter((row) => {
                return row.FID != id
            });
            this.props.Vm.CalculateTotalScore();
            this.forceUpdate();
        }

        private selectItems() {
            this.props.Vm.selectItems();
        }

        private getThDomVM(w?: number) {
            var _ther = new thFile.Web.ThDomVm();
            if (w) {
                _ther.Width = w;
            }
            return _ther;
        }


        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactAppraisalItemDomVm extends domCore.DomVm {
        ScrollAuto(left: number);
        RowList: dataFile.Data.IAppraisalItemData[];
        PickDomObj: PickDomFile.PickDom.PickDomVm;
        selectItems(): void;
        CalculateTotalScore(): void;

    }

    export interface IAppraisalItemDomConfig {
        UniId?: string;
        RowList?: dataFile.Data.IAppraisalItemData[];
    }

    export interface IPickItemDomConfig {
        Text: string;
        Key: string;

    }

    export class AppraisalItemDomVm extends domCore.DomVm implements IReactAppraisalItemDomVm {
        public ReactType = AppraisalItemDomReact;

        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public RowList: dataFile.Data.IAppraisalItemData[] = [];
        public PickDomObj: PickDomFile.PickDom.PickDomVm;
        public TotalScore: string = "0";
        public ResultType: string;


        public constructor(config?: IAppraisalItemDomConfig) {
            super();
            if (config) {
                if (config.UniId) {
                    this.UniId = config.UniId;
                }
                if (config.RowList) {
                    this.RowList = config.RowList;
                    this.CalculateTotalScore();
                }
            }
            var _itemList: IPickItemDomConfig[] = [];
            var _LeftDomVmObj = new pickLeftDomFile.AppraisalItemPickListDom.AppraisalItemPickListDomVm({ UniId: this.UniId });
            this.PickDomObj = new PickDomFile.PickDom.PickDomVm(
                {

                    UniId: this.UniId,
                    PickItemList: _itemList,
                    PickerContainer:
                    {
                        UniId: this.UniId,
                        IsSingle: false,
                        LeftDomVmObj: _LeftDomVmObj,
                        IsPickSelectHide: false,
                        SetSureCustomerObjFun: (items) => {
                            return _LeftDomVmObj.getObjByItems(items);
                        }
                    }
                }
            );
            this.PickDomObj.modalObj.Width = "65%";
            this.listenAppEvent("picker-sure", this.UniId, (items: IPickItemDomConfig[]) => {
                var _list = [];
                items.forEach(a => {
                    _list.push(a.Key);
                });
                urlFile.Core.AkPost("/HospPerformance/AppraisalItem/FetchAppraisalItems", { itemIds: _list.join(",") }, (data) => {
                    var _data = data.Data;
                    if (_data) {
                        this.RowList = _data;
                        this.CalculateTotalScore();
                        this.forceUpdate("");

                    }
                });
            });
        }

        public CalculateTotalScore() {
            var totalScore = 0;
            this.RowList.forEach(a => {
                totalScore += parseFloat(a.MaxValue);
            });
            this.TotalScore = totalScore.toString();
        }

        public selectItems() {
            var pickItemList: IPickItemDomConfig[] = [];
            this.RowList.forEach(row => {
                pickItemList.push({ Key: row.FID, Text: row.Name });
            });
            this.PickDomObj.PortalNode.PickItemList = pickItemList;
            // this.emitAppEvent("FetchAppraisalItemsByResultType", this.UniId, this.ResultType);
            this.PickDomObj.modalObj.open();

        }

        public ScrollAuto(left: number) {
            this.IsAcsRelative = left > 0;
            this.LeftNum = left;
            this.forceUpdate("");
        }

        public getData() {
            var idList = [];
            this.RowList.forEach(a => {
                idList.push(a.FID)
            });
            return idList;
        }

    }
    export class AppraisalItemDomStates extends domCore.DomStates {
    }


    export class AppraisalItemDomProps extends domCore.DomProps<IReactAppraisalItemDomVm>{
    }



}


