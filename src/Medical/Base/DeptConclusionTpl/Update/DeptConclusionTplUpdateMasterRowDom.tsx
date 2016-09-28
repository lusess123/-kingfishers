import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import dataFile = require("./../Data");
import textFile = require("./../../../../02col/01single/Text");
import textAreaFile = require("./../../../../02col/01single/TextArea");
import baseColFile = require("./../../../../02col/00core/BaseCol");

export module DeptConclusionTplUpdateMasterRowDom {
    export class DeptConclusionTplUpdateMasterRowDomAction extends domCore.DomAction {
    }

    export class DeptConclusionTplUpdateMasterRowDomReact extends domCore.DomReact<DeptConclusionTplUpdateMasterRowDomProps, DeptConclusionTplUpdateMasterRowDomStates, DeptConclusionTplUpdateMasterRowDomAction> implements domCore.IReact {

        public state = new DeptConclusionTplUpdateMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className="panel">
                <div className="panel-heading">
                    <h4 className="panel-title"><a onClick={() => { this.fun_titleMasterClick(); } }>模板<i className={"fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down") }></i></a>
                        </h4>
                </div>
                <div className="panel-collapse collapse in">
                    <div className={"content active " + (this.props.Vm.IsMasterHide ? "hide" : "") }  >
                        <div className="Hm-form clearfix" >
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label">科室：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.ColVmObjList["DeptId"].intoDom() }
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label">名称：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.ColVmObjList["Name"].intoDom() }
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label ">小结内容：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.ColVmObjList["Content"].intoDom()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            );
        }

        private fun_OnChange(e, fName: string) {
            var _val = e.target["value"];
            this.props.Vm.RowData[fName] = _val;
            this.forceUpdate();
        }

        private fun_titleMasterClick() {
            this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
            this.forceUpdate();
        }


        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IDeptConclusionTplUpdateMasterRowDomConfig {
        UniId: string;
        RowData: dataFile.DeptConclusionTpl.IDeptConclusionTplData;
    }

    export interface ITextVmDic {
        [name: string]: textFile.ui.TextVm;
    }

    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }

    export class DeptConclusionTplUpdateMasterRowDomVm extends domCore.DomVm {
        public ReactType = DeptConclusionTplUpdateMasterRowDomReact;
        public IsMasterHide: boolean;
        public RowData: dataFile.DeptConclusionTpl.IDeptConclusionTplData = {};
        public SimpleCodeVm: textFile.ui.TextVm;
        public NameVm: textFile.ui.TextVm;
        public UniId: string;
        public TextVmObjList: ITextVmDic = {};
        public ContentTextAreaVm: textAreaFile.ui.TextAreaVm;
        public ColVmObjList: IColVmDic = {};


        public constructor(config?: IDeptConclusionTplUpdateMasterRowDomConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
                if (config.UniId) {
                    this.UniId = config.UniId;
                }

                this.initColVm("DeptId", "TextVm", "notNull");
                this.initColVm("Name", "TextVm", "notNull");
                this.initColVm("Content", "TextAreaVm", "notNull");

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
                _exciteBean.dataValueSet(this.RowData[colName]);
                _exciteBean.setOriValue(this.RowData[colName]);
                _exciteBean.LegalObj.Kind = legal ? legal : "";
                _exciteBean.onChangeHandle((val) => {
                    this.RowData[colName] = val;
                    return true;
                });
                this.ColVmObjList[_name] = _exciteBean;
            }
        }

        //public legal(): boolean {
        //    var l1 = this.TextVmObjList["DeptId"].legal();
        //    var l2 = this.TextVmObjList["Name"].legal();
        //    var l3 = this.ContentTextAreaVm.legal();
        //    var _res = l1 && l2&&l3;
        //    return _res;
        //}

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

        private fIsChangeRow: boolean = false;

        public getData(isDetailChange?: boolean): dataFile.DeptConclusionTpl.IDeptConclusionTplData {
            var _obj: dataFile.DeptConclusionTpl.IDeptConclusionTplData = {};

            //this.ColVmObjList["DeptId"].getChangeValFun((isChange, val) => {
            //    if (isChange) {
            //        this.fIsChangeRow = true;
            //        _obj.DeptId = val;
            //    }
            //});

            //this.ColVmObjList["Name"].getChangeValFun((isChange, val) => {
            //    if (isChange) {
            //        this.fIsChangeRow = true;
            //        _obj.Name = val;
            //    }
            //});

            //this.ColVmObjList["Content"].getChangeValFun((isChange, val) => {
            //    if (isChange) {
            //        this.fIsChangeRow = true;
            //        _obj.Name = val;
            //    }
            //});

            //this.ContentTextAreaVm.getChangeValFun((isChange, val) => {
            //    if (isChange) {
            //        this.fIsChangeRow = true;
            //        _obj.Content = val;
            //    }
            //});

            for (var vn in this.ColVmObjList) {
                var _colObj = this.ColVmObjList[vn];
                if (_colObj) {
                    _colObj.getChangeValFun((isChange, val) => {
                        if (isChange) {
                            this.fIsChangeRow = true;
                            _obj[vn] = val;
                        }
                    });
                }
            }


            if (this.fIsChangeRow || isDetailChange) {

                _obj.FID = this.RowData.FID;
            }

            this.fIsChangeRow = false;
            return _obj;
        }


    }
    export class DeptConclusionTplUpdateMasterRowDomStates extends domCore.DomStates {
    }


    export class DeptConclusionTplUpdateMasterRowDomProps extends domCore.DomProps<DeptConclusionTplUpdateMasterRowDomVm>{
    }



}


