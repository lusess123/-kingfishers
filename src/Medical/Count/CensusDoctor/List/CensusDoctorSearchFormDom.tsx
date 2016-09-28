import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import baseColFile = require("./../../../../02col/00core/BaseCol");
import Selector = require("./../../../../02col/03selector/selector");

export module CensusDoctorSearchFormDom {
    export class CensusDoctorSearchFormDomAction extends domCore.DomAction {
    }

    export class CensusDoctorSearchFormDomReact extends domCore.DomReact<CensusDoctorSearchFormDomProps, CensusDoctorSearchFormDomStates, CensusDoctorSearchFormDomAction> implements domCore.IReact {

        public state = new CensusDoctorSearchFormDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="Hm-search-panel">
                <form className="clearfix">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                        <label className="col-md-5 col-sm-3 form-control-label  text-right" >部门：</label>
                        <div className="col-md-7 col-sm-9">
                            {this.props.Vm.ColVmObjList["Department"].intoDom() }

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                        <label className="col-md-5 col-sm-3 form-control-label  text-right" >体检医生：</label>
                        <div className="col-md-7 col-sm-9">
                            {this.props.Vm.ColVmObjList["Name"].intoDom() }
 
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                        <label className="col-md-5 col-sm-3 form-control-label text-right" >开始时间：</label>
                        <div className="col-md-7 col-sm-9">
                            {this.props.Vm.ColVmObjList["BeginDate"].intoDom() }

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                        <label className="col-md-5 col-sm-3 form-control-label text-right" >结束时间：</label>
                        <div className="col-md-7 col-sm-9">
                            {this.props.Vm.ColVmObjList["EndDate"].intoDom() }
                        </div>
                    </div>
                    <div className="col-xs-12 text-center">
                        <a  className="btn btn-primary btn-sm" onClick={() => { this.fun_searchBtn(); } }>统计</a>
                        <a  className={"btn btn-primary btn-sm " } onClick={() => { this.fun_seachClearBtn(); } } >清空</a>
                    </div>
                </form>
            </div>
        }

        private fun_linkCode(e) {
            var _val = e.target["value"];
            this.props.Vm.SearchSimpleCode = _val;
            if (!_val || _val == "") {
                this.props.Vm.IsHideClearBtn = true;
            }
            else {
                this.props.Vm.IsHideClearBtn = false;
            }
            this.forceUpdate();
        }

        private fun_linkName(e) {
            var _val = e.target["value"];
            this.props.Vm.SearchName = _val;
            if (!_val || _val == "") {
                this.props.Vm.IsHideClearBtn = true;
            }
            else {
                this.props.Vm.IsHideClearBtn = false;
            }
            this.forceUpdate();
        }

        private fun_seachClearBtn() {
            urlFile.Core.AkUrl.Current().openUrl("$eee$", false);
            urlFile.Core.AkUrl.Current().openUrl("$CensusDoctorListPage$", false);

        }

        private fun_searchBtn() {
            this.props.Vm.loadPageData(0);
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
        

    }
    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }
    export interface ICensusDoctorSearchFormDomConfig {

        UniId: string;
    }
    export interface SearchData {
        Name?: string;
        BeginDate?: string;
        EndDate?: string;
        Department?: string;
    }
    export class CensusDoctorSearchFormDomVm extends domCore.DomVm {
        public ReactType = CensusDoctorSearchFormDomReact;
        public SearchSimpleCode: string;
        public SearchName: string;
        public IsHideClearBtn: boolean = true;
        public UniId: string = "";
        public ColVmObjList: IColVmDic = {};
        public RowData: SearchData;
        public constructor(config?: ICensusDoctorSearchFormDomConfig) {
            super();
            if (config) {
                this.RowData = {}
                this.UniId = config.UniId;
                this.initColVm("Department", "SelectorVm", "notNull");
                this.initColVm("Name", "SelectorVm", "notNull");
                this.initColVm("BeginDate", "DateTimeVm", "notNull");
                this.initColVm("EndDate", "DateTimeVm", "notNull");
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
            if (!isexcite) {
                var _exciteBean = iocFile.Core.Ioc.Current().FetchInstance<baseColFile.Core.BaseColVm>(colType, baseColFile.Core.BaseColVm);
                _exciteBean.Tag = colName;
                _exciteBean.IsChange = true
                _exciteBean.LegalObj.Kind = legal ? legal : "";
                _exciteBean.onChangeHandle((val) => {
                    this.RowData[colName] = val;
                    return true;
                });

                if (colType == "SelectorVm") {
                    this.initSelector(colName, utilFile.Core.Util.Cast<Selector.ui.SelectorVm>(_exciteBean));
                }
                this.ColVmObjList[_name] = _exciteBean;
            }
        }

        public initSelector(colName: string, selectVm: Selector.ui.SelectorVm) {
            if (colName == "Name") {
                selectVm.RegName = "DoctorsCodeTable";
                selectVm.HasCanEdit = false;
            }
            else if (colName == "Department")
            {
                selectVm.RegName = "MedicalDepartmentTreeCodeTable";
                selectVm.HasCanEdit = false;
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
        public loadPageData(pageIndex: number) {
            this.emitAppEvent("medical/base/CensusDoctor/list/loadpagedata", this.UniId, pageIndex);
        }

    }
    export class CensusDoctorSearchFormDomStates extends domCore.DomStates {
    }


    export class CensusDoctorSearchFormDomProps extends domCore.DomProps<CensusDoctorSearchFormDomVm>{
    }



}


