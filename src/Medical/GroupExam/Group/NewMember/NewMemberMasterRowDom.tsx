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
import Selector = require("./../../../../02col/03selector/selector");
import PickSelector = require("./../../../../02col/03selector/PickSingleSelector");
export module NewMemberMasterRowDom {
    export class NewMemberMasterRowDomAction extends domCore.DomAction {
    }

    export class NewMemberMasterRowDomReact extends domCore.DomReact<NewMemberMasterRowDomProps, NewMemberMasterRowDomStates, NewMemberMasterRowDomAction> implements domCore.IReact {

        public state = new NewMemberMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="YSm-modal-body clearfix">
                <form className="">
                    <div className="form-group  form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label  text-right required">组名：</label>
                        <div className="col-md-7 col-sm-9">
                            {this.props.Vm.ColVmObjList["GroupName"].intoDom() }
                        </div>
                    </div>
                    <div className="form-group  form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label text-right required">姓名：</label>
                        <div className="col-md-7 col-sm-9">
                            {this.props.Vm.ColVmObjList["Name"].intoDom() }
                        </div>
                    </div>
                    <div className="form-group  form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label text-right required">身份证：</label>
                        <div className="col-md-7 col-sm-9">
                            {this.props.Vm.ColVmObjList["IDCard"].intoDom() }
                        </div>
                    </div>
                    <div className="form-group  form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label text-right required">年龄：</label>
                        <div className="col-md-7 col-sm-9">
                            {this.props.Vm.ColVmObjList["Age"].intoDom() }
                        </div>
                    </div>
                    <div className="form-group  form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label text-right required">性别：</label>
                        <div className="col-md-7 col-sm-9">
                            {this.props.Vm.ColVmObjList["Gender"].intoDom() }
                       </div>
                    </div>
                    <div className="form-group  form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label text-right required">婚姻状态：</label>
                        <div className="col-md-7 col-sm-9 form-control-label">
                            {this.props.Vm.ColVmObjList["MaritalStatus"].intoDom()}
                        </div>
                    </div>
                    <div className="form-group  form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label text-right required">职业：</label>
                        <div className="col-md-7 col-sm-9 form-control-label">
                            {this.props.Vm.ColVmObjList["Job"].intoDom() }
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

    export interface INewMemberMasterRowDomConfig {
        selectId: string
        batchId: string;

    }
    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }
    export class NewMemberMasterRowDomVm extends domCore.DomVm {
        public ReactType = NewMemberMasterRowDomReact;
        public IsDetailHide: boolean;
        public ColVmObjList: IColVmDic = {};
        public RowData: DataFile.Group.IMember = {};
        public selectId: string;
        public batchId: string;
        public constructor(config?: INewMemberMasterRowDomConfig) {
            super();
            if (config)
            {
                this.selectId = config.selectId;
                this.batchId = config.batchId
                this.initColVm("GroupName", "SelectorVm", "notNull");
                this.initColVm("Name", "SelectorVm", "notNull");
                this.initColVm("IDCard", "TextVm", "IDCardLegal");
                this.initColVm("Age", "TextVm", "notNull");
                this.initColVm("Gender", "ComboVm");
                this.initColVm("MaritalStatus", "ComboVm");
                this.initColVm("Job", "ComboVm");
            }

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
            if (this.RowData[colName] != undefined || this.RowData[colName] != null) {
                _exciteBean.dataValueSet(this.RowData[colName]);
            }
            if (!isexcite) {
                var _exciteBean = iocFile.Core.Ioc.Current().FetchInstance<baseColFile.Core.BaseColVm>(colType, baseColFile.Core.BaseColVm);
                _exciteBean.Tag = colName;
                _exciteBean.IsChange = true
                _exciteBean.LegalObj.Kind = legal ? legal : "";
                _exciteBean.onChangeHandle((val) => {
                    this.RowData[colName] = val;
                    return true;
                });
                if (colType == "ComboVm") {
                    this.initCombo(colName, utilFile.Core.Util.Cast<comboFile.ui.ComboVm>(_exciteBean));
                }
                if (colType == "SelectorVm") {
                    this.initSelector(colName, utilFile.Core.Util.Cast<Selector.ui.SelectorVm>(_exciteBean));
                }
                this.ColVmObjList[_name] = _exciteBean;
            }
        }

        public initSelector(colName: string, selectVm: Selector.ui.SelectorVm) {
            if (colName == "GroupName") {
                selectVm.RegName = "UnitDataTable";
                selectVm.HasCanEdit = false;
                var Id = this.batchId;
                selectVm.OnPostDataSetFun = function (ds) {
                    var _rows = ds["UnitGroupTable"] = [];
                    var _row = { UnitId: Id};
                    _rows.push(_row);
                    return ds;
                }
            }
            else if (colName == "Name") {
                selectVm.HasCanEdit = false
                selectVm.RegName = "SelectMemberCodeTable";
                var Id = this.selectId;
                var batchId = this.batchId;
                selectVm.OnPostDataSetFun = function (ds) {
                    var _rows = ds["MemberTable"] = [];
                    var _row = { UnitId: Id, batchId: batchId };
                   // this.RowData.flag = "select"
                    _rows.push(_row);
                    return ds;
                }
                selectVm.onChangeHandle((val) => {
                    this.RowData[colName] = val;
                    this.initMember(val)
                    return true;
                });     

            }
        }
        public initMember(key: string)
        {
                urlFile.Core.AkPost("/MedicalCenter/Member/FetchMembersList", { fids: key }, (a) => {
                    if (a) {
                        var data = a.Data[0];
                        this.RowData.IDCard = data.IDCard;
                        this.RowData.Age = data.Age;
                        this.RowData.Gender = data.Gender;
                        this.RowData.MaritalStatus = data.MaritalStatus;
                        this.RowData.Job = data.Job;
                        this.initColVm("IDCard", "TextVm", "notNull");
                        this.initColVm("Age", "TextVm", "notNull");
                        this.initColVm("Gender", "ComboVm");
                        this.initColVm("MaritalStatus", "ComboVm");
                        this.initColVm("Job", "ComboVm");
                        this.IsChange = true
                    }
                })

        }
        public initCombo(colName: string, comboVm: comboFile.ui.ComboVm) {
            switch (colName) {
                case "Gender":
                    comboVm.ItemList = constantData.Data.GenderTypeData;
                    comboVm.dataValue(String(this.RowData[colName]));
                    comboVm.setOriValue(String(this.RowData[colName]));
                    break;
                case "MaritalStatus":
                    comboVm.ItemList = constantData.Data.MaritalTypeData;
                    comboVm.dataValue(String(this.RowData[colName]));
                    comboVm.setOriValue(String(this.RowData[colName]));
                    break;
                case "Job":
                    comboVm.ItemList = constantData.Data.JobTypeData;
                    comboVm.dataValue(String(this.RowData[colName]));
                    comboVm.setOriValue(String(this.RowData[colName]));
                    break;
                case "Term":
                    comboVm.ItemList = constantData.Data.JobTypeData;
                    comboVm.dataValue(String(this.RowData[colName]));
                    comboVm.setOriValue(String(this.RowData[colName]));
                    break;
                case "Pay":
                    comboVm.ItemList = constantData.Data.ExamBanlanceKindData;
                    comboVm.dataValue(String(this.RowData[colName]));
                    comboVm.setOriValue(String(this.RowData[colName]));
                    break;
                case "Price":
                    comboVm.ItemList = constantData.Data.JobTypeData;
                    comboVm.dataValue(String(this.RowData[colName]));
                    comboVm.setOriValue(String(this.RowData[colName]));
                    break;
                default:
                    break;
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
    export class NewMemberMasterRowDomStates extends domCore.DomStates {
    }


    export class NewMemberMasterRowDomProps extends domCore.DomProps<NewMemberMasterRowDomVm>{
    }



}

