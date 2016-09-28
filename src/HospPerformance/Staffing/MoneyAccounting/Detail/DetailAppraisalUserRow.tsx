import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import dataFile = require("./../data");
import AppraisalItemRow = require("./DetailAppraisalItemRow");



export module DetailAppraisalUserRow {
    export class DetailAppraisalUserRowAction extends domCore.DomAction { }


    export class DetailAppraisalUserRowReact extends domCore.DomReact<DetailAppraisalUserRowProps, DetailAppraisalUserRowStates, DetailAppraisalUserRowAction> implements domCore.IReact {
        public state = new DetailAppraisalUserRowStates();

        public pSender(): React.ReactElement<any> {
            return <div className="p-a-md">
                {this.props.Vm.AppraisalRowList.map(r => {
                    return r.intoDom()
                }) }
            </div>;
        }
        
        private fun_Scroll(e: React.UIEvent) {
            var _$obj = $(e.target);
            this.props.Vm.ScrollAuto(_$obj.scrollLeft());
        }
        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactDetailAppraisalUserRowVm extends domCore.DomVm {
        ItemTitle: dataFile.Data.SalaryItemValueOrCount[];
        UserData: dataFile.Data.IUsersData;
        SalaryItemSet: dataFile.Data.ISalaryItemSet;
        AppraisalRowList: AppraisalItemRow.DetailAppraisalItemRow.DetailAppraisalItemRowVm[]
        ScrollAuto(left: number);
    }

    export interface IDetailAppraisalUserRowConfig {
        ItemData?: dataFile.Data.ISalaryItem;
        UserData?: dataFile.Data.IUsersData[];
        Unid?: string;
        SalaryData?: dataFile.Data.ISalaryData;
    }

    export class DetailAppraisalUserRowVm extends domCore.DomVm implements IReactDetailAppraisalUserRowVm {
        public ReactType = DetailAppraisalUserRowReact;

        public ItemTitle: dataFile.Data.SalaryItemValueOrCount[] = [];
        public UserData: dataFile.Data.IUsersData[];
        public SalaryItemSet: dataFile.Data.ISalaryItemSet;
        //public Month: string;
        public ItemData: dataFile.Data.ISalaryItem;
        public SalaryData: dataFile.Data.ISalaryData;
        public AppraisalItemSetList: dataFile.Data.IAppraisalItemSet[] = [];
        public AppraisalItemValues: dataFile.Data.IAppraisalItemValue[] = [];
        public AppraisalRowList: AppraisalItemRow.DetailAppraisalItemRow.DetailAppraisalItemRowVm[] = [];
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public constructor(config?: IDetailAppraisalUserRowConfig) {
            super();
            if (config) {
                this.UserData = config.UserData;
                this.ItemData = config.ItemData;
                this.SalaryData = config.SalaryData;
                var templateID = this.ItemData.AppraisalID;
                var month = this.SalaryData.Month;
                urlFile.Core.AkPost("/HospPerformance/HumanResource/GetAppraisalDetail", { templateID: templateID, month: month}, (r) => {
                    var _config: dataFile.Data.IAppraisalItemSet = r.Data;
                    _config.AppraisalItems.map(i => {
                        var _itemConifg: AppraisalItemRow.DetailAppraisalItemRow.IDetailAppraisalItemRowConfig = {
                            Unid: this.UniId, DataValue: i, UserData: this.UserData
                        }
                        var _rowDom = new AppraisalItemRow.DetailAppraisalItemRow.DetailAppraisalItemRowVm(_itemConifg);
                        _rowDom.IsChange = true;
                        _rowDom.IsMulit = true;

                        this.AppraisalRowList.push(_rowDom);
                    })
                });
            }

        }
        public ScrollAuto(left: number) {
            this.IsAcsRelative = left > 0;
            this.LeftNum = left;
            this.forceUpdate("");
        }

    }

    export class DetailAppraisalUserRowStates extends domCore.DomStates {

    }

    export class DetailAppraisalUserRowProps extends domCore.DomProps<DetailAppraisalUserRowVm> { }
}