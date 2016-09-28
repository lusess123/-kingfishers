
import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import dataFile = require("./../Data");
import textFile = require("./../../../../02col/01single/Text");

export module DepartInsertMasterRowDom {
    export class DepartInsertMasterRowDomAction extends domCore.DomAction { }

    export class DepartInsertMasterRowDomReact extends domCore.DomReact<DepartInsertMasterRowDomProps, DepartInsertMasterRowDomStates, DepartInsertMasterRowDomAction> implements domCore.IReact {
        public state = new DepartInsertMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className="1">
                <ul className="tabs" >
                    <li className="tab-title active"><a onClick={() => { this.fun_titleMasterClick(); } }>科室<i className={"fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down") }></i></a></li>
                </ul>
                <div className="tabs-content">
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
                                    <label className="pull-right">简码：</label>
                                </div>
                                <div className="columns acs-input">
                                    {this.props.Vm.TextVmObjList["SimpleCode"].intoDom() }
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">类别：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["DeptType"].intoDom() }
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">描述：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["Description"].intoDom() }
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">备注：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["Remark"].intoDom() }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            );
        }

        private fun_OnChange(e, fName:string) {
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

    export interface ITextVmDic {
        [name: string]: textFile.ui.TextVm;
    }

    export interface DepartInsertMasterRowDomConfig { }

    export class DepartInsertMasterRowDomVm extends domCore.DomVm {
        public ReactType = DepartInsertMasterRowDomReact;

        public IsMasterHide: boolean;    

        public RowData: dataFile.MRP_Departments.Department = {};

        public TextVmObjList: ITextVmDic = {};

        public constructor(config?: DepartInsertMasterRowDomConfig) {
            super();
            this.initTextVm("FName", "notNull");
            this.initTextVm("FNumber", "notNull");
            this.initTextVm("SimpleCode");
            this.initTextVm("DeptType");
            this.initTextVm("Description");
            this.initTextVm("Remark");
        }  

        public legal(): boolean {
            var l1 = this.TextVmObjList["FName"].legal();
            var l2 = this.TextVmObjList["FNumber"].legal();
            var _res = l1 && l2;
            return _res;
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

    }

    export class DepartInsertMasterRowDomStates extends domCore.DomStates { }

    export class DepartInsertMasterRowDomProps extends domCore.DomProps<DepartInsertMasterRowDomVm>{ }

}
