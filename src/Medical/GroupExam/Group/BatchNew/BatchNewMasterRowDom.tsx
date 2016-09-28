import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import eventFile = require("./../../../../01core/Event");
import DataFile = require("./../Data");
import comboFile = require("./../../../../02col/02Mulite/Combo");
import constantData = require("./../../../Common/Data");
import baseColFile = require("./../../../../02col/00core/BaseCol");
import dateFile = require("./../../../../02col/01single/Date");
import textFile = require("./../../../../02col/01single/Text");
import dateTimeFile = require("./../../../../02col/01single/DateTime");

export module BatchNewMasterRowDom {
    export class BatchNewMasterRowDomAction extends domCore.DomAction {
    }

    export class BatchNewMasterRowDomReact extends domCore.DomReact<BatchNewMasterRowDomProps, BatchNewMasterRowDomStates, BatchNewMasterRowDomAction> implements domCore.IReact {

        public state = new BatchNewMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="YSm-modal-body clearfix">
                <form className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                    <div className="form-group  form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label  text-right">批次名称：</label>
                        <div className="col-md-7 col-sm-9">
                            {this.props.Vm.ColVmObjList["Name"].intoDom() }
                        </div>
                    </div>
                    <div className="form-group  form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label text-right">开始时间：</label>
                        <div className="col-md-7 col-sm-9">
                            {this.props.Vm.ColVmObjList["BeginDate"].intoDom() }
                        </div>
                    </div>
                    <div className="form-group  form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label text-right">体检人数：</label>
                        <div className="col-md-7 col-sm-9">
                            {this.props.Vm.ColVmObjList["PreNumber"].intoDom() }
                        </div>
                    </div>
                    <div className="form-group  form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label text-right">结算方式：</label>
                        <div className="col-md-7 col-sm-9">
                            {this.props.Vm.ColVmObjList["BanlanceKind"].intoDom() }
                       </div>
                    </div>
                </form>
            </div>
        }




        private fun_detailTitleClick() {
            this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
            this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IBatchNewMasterRowDomConfig {


    }
    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }
    export class BatchNewMasterRowDomVm extends domCore.DomVm {
        public ReactType = BatchNewMasterRowDomReact;
        public IsDetailHide: boolean;
        public ColVmObjList: IColVmDic = {};
        public RowData: DataFile.Group.IBatch = {};

        public constructor(config?: IBatchNewMasterRowDomConfig) {
            super();
            this.initColVm("Name", "TextVm", "notNull");
            this.initColVm("BeginDate", "DateTimeVm", "custom");
            //this.initColVm("EndDate", "DateTimeVm", "custom");           
            this.initColVm("PreNumber", "TextVm", "SeatLegal");
            this.initColVm("BanlanceKind", "ComboVm");
           // this.initColVm("Status", "ComboVm");
        }

        private initColVm(colName: string, colType: string, legal?: string) {
            var _name = colName.toString()
            var isexcite = false;

            for (var vn in this.ColVmObjList) {
                var _obj = this.ColVmObjList[_name];
                if (_obj) {
                    isexcite = true;
                    _exciteBean = _obj;
                }
            }
            if (!isexcite) {
                var _exciteBean = iocFile.Core.Ioc.Current().FetchInstance<baseColFile.Core.BaseColVm>(colType, baseColFile.Core.BaseColVm);
                _exciteBean.Tag = colName;
                _exciteBean.LegalObj.Kind = legal ? legal : "";
                _exciteBean.onChangeHandle((val) => {
                    this.RowData[colName] = val;
                    return true;
                });
                if (legal == "custom")
                {
                    _exciteBean.LegalObj.CustomLegalFun = (col) => {
                        return this.compareSize(colName,_exciteBean.TempDataValue,utilFile.Core.Util.Cast<textFile.ui.TextVm>(_exciteBean) );
                    }   
                }
                if (colName == "BeginDate") {
                    var dateTimeT = utilFile.Core.Util.Cast<dateTimeFile.ui.DateTimeVm>(_exciteBean)
                    dateTimeT.IsInAndAfterToday = false;
                }
                if (colType == "ComboVm") {
                    this.initCombo(colName, utilFile.Core.Util.Cast<comboFile.ui.ComboVm>(_exciteBean));
                }
                this.ColVmObjList[_name] = _exciteBean;
            }
        }


        public  FormatDate(strTime) {
        var date = new Date(strTime);
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
         }
        public compareSize(colName:string,endDate: string, textVm: textFile.ui.TextVm): string {
            if (colName == "BeginDate")
            {
                if (endDate == undefined || endDate == "") {
                    textVm.LegalObj.LegalResult = true;
                    textVm.LegalObj.ErrMsg = "开始时间不能为空"
                    return "开始时间不能为空！";

                }
                var date =new Date(endDate);
                var today = new Date();
                if (date <= today) {
                    textVm.LegalObj.LegalResult = true;
                    textVm.LegalObj.ErrMsg = "开始时间大于现在时间"
                    return "开始时间大于现在时间！";
                }
                else {
                    textVm.LegalObj.LegalResult = false;
                    textVm.showLegal();
                    return "";
                }
            }
        }
        public initCombo(colName: string, comboVm: comboFile.ui.ComboVm) {
            switch (colName)
            {
                case "BanlanceKind":
                    comboVm.ItemList = constantData.Data.ExamBanlanceKindData;
                    this.RowData[colName] = "0";
                    break;
                //case "Status":
                //    comboVm.ItemList = constantData.Data.ExamStatusData;
                //    this.RowData[colName] = "0";
                //    break;
                default:
                    break;
            }
        }
        public toChange() {
            this.IsChange = true;
            for (var n in this.ColVmObjList) {
                this.ColVmObjList[n].IsChange = true;
            }
        }
        public legal(): boolean {
            var _res = true;
            for (var vn in this.ColVmObjList) {
                var _obj = this.ColVmObjList[vn];
                if (_obj) {
                    _res = _res && _obj.legal();
                }
            }
            return _res;
        }   

    }
    export class BatchNewMasterRowDomStates extends domCore.DomStates {
    }


    export class BatchNewMasterRowDomProps extends domCore.DomProps<BatchNewMasterRowDomVm>{
    }



}

