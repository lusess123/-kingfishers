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


export module AppraisalItemDetailDom {
    export class AppraisalItemDetailDomAction extends domCore.DomAction {
    }

    export class AppraisalItemDetailDomReact extends domCore.DomReact<AppraisalItemDetailDomProps, AppraisalItemDetailDomStates, AppraisalItemDetailDomAction> implements domCore.IReact {

        public state = new AppraisalItemDetailDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <p>已选项目：</p>
                {this._initTable() }
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

    export interface IReactAppraisalItemDetailDomVm extends domCore.DomVm {
        ScrollAuto(left: number);
        RowList: dataFile.Data.IAppraisalItemData[];
        CalculateTotalScore(): void;

    }

    export interface IAppraisalItemDetailDomConfig {
        UniId?: string;
        RowList?: dataFile.Data.IAppraisalItemData[];
    }

    export interface IPickItemDomConfig {
        Text: string;
        Key: string;

    }

    export class AppraisalItemDetailDomVm extends domCore.DomVm implements IReactAppraisalItemDetailDomVm {
        public ReactType = AppraisalItemDetailDomReact;

        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public RowList: dataFile.Data.IAppraisalItemData[] = [];
        public TotalScore: string = "0";
        public IsLoaded: boolean = false;


        public constructor(config?: IAppraisalItemDetailDomConfig) {
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
        }

        public CalculateTotalScore() {
            var totalScore = 0;
            this.RowList.forEach(a => {
                totalScore += parseFloat(a.MaxValue);
            });
            this.TotalScore = totalScore.toString();
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
    export class AppraisalItemDetailDomStates extends domCore.DomStates {
    }


    export class AppraisalItemDetailDomProps extends domCore.DomProps<IReactAppraisalItemDetailDomVm>{
    }



}


