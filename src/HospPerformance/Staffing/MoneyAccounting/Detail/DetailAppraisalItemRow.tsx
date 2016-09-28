import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import dataFile = require("./../data");
import DetailAppraisalUserItemRow = require("./DetailAppraisalUserItemRow");


export module DetailAppraisalItemRow {
    export class DetailAppraisalItemRowAction extends domCore.DomAction { }


    export class DetailAppraisalItemRowReact extends domCore.DomReact<DetailAppraisalItemRowProps, DetailAppraisalItemRowStates, DetailAppraisalItemRowAction> implements domCore.IReact {
        public state = new DetailAppraisalItemRowStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                {this._initTable() }
            </div>
        }
        public initHeader(): React.ReactElement<any> {
            return <tr>
                <th>姓名</th>
                {this.props.Vm.AppraisalItemValue.map(r => {
                    return <th>{r.Name}</th>
                }) }
                <th>综合</th>
            </tr>
        };
        public initBody(): React.ReactElement<any> {
            return <tbody>
                {this.props.Vm.AppraisalRowList.map(r => {
                    return r.intoDom()
                }) }
            </tbody>;
        };
        public _initTable(): React.ReactElement<any> {
            var theader = <thead className="thead-default">
                <p>考核项目：{this.props.Vm.AppraisalItem.AppraisalTitle}</p>
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
        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactDetailAppraisalItemRowVm extends domCore.DomVm {
        AppraisalItem: dataFile.Data.AppraisalItem;
        AppraisalRowList: DetailAppraisalUserItemRow.DetailAppraisalUserItemRow.DetailAppraisalUserItemRowVm[];
        AppraisalItemValue: dataFile.Data.IAppraisalItemValue[];
        //GetValue(b: string): string;
    }

    export interface IDetailAppraisalItemRowConfig {
        DataValue?: dataFile.Data.AppraisalItem;
        UserData: dataFile.Data.IUsersData[];
        Unid?: string;

    }

    export class DetailAppraisalItemRowVm extends domCore.DomVm implements IReactDetailAppraisalItemRowVm {
        public ReactType = DetailAppraisalItemRowReact;

        //public ItemTitle: dataFile.Data.IAppraisalItemValue[] = [];
        public UserData: dataFile.Data.IUsersData[];
        public AppraisalItem: dataFile.Data.AppraisalItem;
        public AppraisalItemValue: dataFile.Data.IAppraisalItemValue[] = [];
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public AppraisalRowList: DetailAppraisalUserItemRow.DetailAppraisalUserItemRow.DetailAppraisalUserItemRowVm[] = [];

        public constructor(config?: IDetailAppraisalItemRowConfig) {
            super();
            if (config) {

                this.AppraisalItem = config.DataValue;
                this.UniId = config.Unid;
                this.UserData = config.UserData;
                this.UserData.map(u => {
                    this.AppraisalItem.AppraisalItemValue.map(b => {
                        if (u.UserId == b.UserId && this.AppraisalItem.ApparaisalId == b.ApparaisalId) {
                            this.AppraisalItemValue = this.AppraisalItemValue.filter(r => {
                                return r.FID != b.FID;
                            });
                            this.AppraisalItemValue.push(b);
                        }
                    })
                    
                    var _config: DetailAppraisalUserItemRow.DetailAppraisalUserItemRow.IDetailAppraisalUserItemRowConfig = {
                        UserName: u.TrueName, DataValue: this.AppraisalItemValue, ItemData: this.AppraisalItem, Unid: this.UniId
                    }
                    var _dom = new DetailAppraisalUserItemRow.DetailAppraisalUserItemRow.DetailAppraisalUserItemRowVm(_config);
                    _dom.IsChange = true;
                    _dom.IsMulit = true;
                    this.AppraisalRowList.push(_dom);

                })
            }

        }

        public ScrollAuto(left: number) {
            this.IsAcsRelative = left > 0;
            this.LeftNum = left;
            this.forceUpdate("");
        }
        //public GetValue(b: string) {
        //    var value = "待计算";
        //    this.AppraisalItemSet.AppraisalItemValue.map(v => {
        //        if (v.FID == b) {
        //            value = v.Result;
        //        }
        //    })
        //    return value;
        //}
    }

    export class DetailAppraisalItemRowStates extends domCore.DomStates {

    }

    export class DetailAppraisalItemRowProps extends domCore.DomProps<DetailAppraisalItemRowVm> { }
}