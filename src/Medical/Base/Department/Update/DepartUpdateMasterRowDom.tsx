import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import dataFile = require("./../Data");
import textFile = require("./../../../../02col/01single/Text");
import comboFile = require("./../../../../02col/02Mulite/Combo");


export module DepartUpdateMasterRowDom {
    export class DepartUpdateMasterRowDomAction extends domCore.DomAction {
    }

    export class DepartUpdateMasterRowDomReact extends domCore.DomReact<DepartUpdateMasterRowDomProps, DepartUpdateMasterRowDomStates, DepartUpdateMasterRowDomAction> implements domCore.IReact {

        public state = new DepartUpdateMasterRowDomStates();
        public pSender(): React.ReactElement<any> {
            return (<div className= "panel" >
                <ul className="tabs" >
                    <li className="tab-title active"><a onClick={() => { this.fun_titleMasterClick(); } }>科室<i className={"fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down") }></i></a></li>
                </ul>
                <div className="panel-collapse collapse in">
                    <div className={"content active " + (this.props.Vm.IsMasterHide ? "hide" : "") }  >
                        <div className="Hm-form clearfix" >
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label">名称：</label>
                            </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["FName"].intoDom() }
                            </div>
                        </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label">代码：</label>
                            </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["FNumber"].intoDom() }
                            </div>
                        </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label">简码：</label>
                            </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["SimpleCode"].intoDom() }
                            </div>
                        </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label">类别：</label>
                            </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["DeptType"].intoDom() }
                            </div>
                        </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label">描述：</label>
                            </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["Description"].intoDom() }
                            </div>
                        </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label">备注：</label>
                            </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["Remark"].intoDom() }
                            </div>
                        </div>

                    </div>
                    </div>
                </div>

            </div >

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

    export interface DepartUpdateMasterRowDomConfig {
        UniId: string;
        RowData: dataFile.MRP_Departments.Department;
    }

    export interface ITextVmDic {
        [name: string]: textFile.ui.TextVm;
    }

    export class DepartUpdateMasterRowDomVm extends domCore.DomVm {
        public ReactType = DepartUpdateMasterRowDomReact;
        public IsMasterHide: boolean;
        public RowData: dataFile.MRP_Departments.Department = {};
        public TextVmObjList: ITextVmDic = {};

        public FNameVm: textFile.ui.TextVm;//名称
        public SimpleCodeVm: textFile.ui.TextVm;//简码
        public FNumberVm: textFile.ui.TextVm;//代码
        public DeptTypeVm: textFile.ui.TextVm;//类别
        public DescriptionVm: textFile.ui.TextVm;//描述
        public RemarkVm: textFile.ui.TextVm; //备注  

        public UniId: string;

        public constructor(config?: DepartUpdateMasterRowDomConfig) {
            super();
            this.initTextVm("FName", "notNull");
            this.initTextVm("FNumber");
            this.initTextVm("SimpleCode");
            this.initTextVm("DeptType");
            this.initTextVm("Description");
            this.initTextVm("Remark");

        }

        private initTextVm(colName: string, legal?: string) {
            var _name = colName.toString()
            var isexcite = false;

            for (var vn in this.TextVmObjList) {
                var _obj = this.TextVmObjList[_name];
                if (_obj) {
                    isexcite = true;
                    _exciteBean = _obj;
                }
            }
            if (!isexcite) {
                var _exciteBean: textFile.ui.TextVm = new textFile.ui.TextVm;
                _exciteBean.Tag = colName;
                _exciteBean.dataValueSet(this.RowData[colName]);
                _exciteBean.LegalObj.Kind = legal ? legal : "";
                _exciteBean.onChangeHandle((val) => {
                    this.RowData[colName] = val;
                    return true;
                });
                this.TextVmObjList[_name] = _exciteBean;
            }
        }

        public toChange() {
            this.IsChange = true;
            for (var n in this.TextVmObjList) {
                this.TextVmObjList[n].IsChange = true;
            }
        } 

        public legal(): boolean {
            var l1 = this.TextVmObjList["FName"].legal();
            var _res = l1;
            return _res;
        }
        private fIsChangeRow: boolean = false;

        public getData(): dataFile.MRP_Departments.Department {
            var _obj: dataFile.MRP_Departments.Department = {};

            this.TextVmObjList["FName"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.FName = val;
                }
            });

            this.TextVmObjList["FNumber"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.FNumber = val;
                }
            });
            this.TextVmObjList["SimpleCode"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.SimpleCode = val;
                }
            });
            this.TextVmObjList["DeptType"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.DeptType = val;
                }
            });
            this.TextVmObjList["Description"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.Description = val;
                }
            });
            this.TextVmObjList["Remark"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.Remark = val;
                }
            });
            if (this.fIsChangeRow) {

                _obj.FID = this.RowData.FID;
            }

            this.fIsChangeRow = false;
            return _obj;
        }

        } 

    export class DepartUpdateMasterRowDomStates extends domCore.DomStates {
    }


    export class DepartUpdateMasterRowDomProps extends domCore.DomProps<DepartUpdateMasterRowDomVm>{
    }



}


