import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import dataFile = require("./../Data");
import textFile = require("./../../../../02col/01single/Text");
import baseColFile = require("./../../../../02col/00core/BaseCol");

export module AnomalyInsertMasterRowDom {
    export class AnomalyInsertMasterRowDomAction extends domCore.DomAction {
    }

    export class AnomalyInsertMasterRowDomReact extends domCore.DomReact<AnomalyInsertMasterRowDomProps, AnomalyInsertMasterRowDomStates, AnomalyInsertMasterRowDomAction> implements domCore.IReact {

        public state = new AnomalyInsertMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (
                <div className="panel">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a onClick={() => { this.fun_titleMasterClick(); } }>异常<i className={"fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down") }></i></a>
                        </h4>
                    </div>
                    <div className="panel-collapse collapse in">
                        <div className={"content active " + (this.props.Vm.IsMasterHide ? "hide" : "") }  >
                            <div className="Hm-form clearfix" >
                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <div className="pull-left Hu-label">
                                        <label className="pull-right required form-control-label">简码：</label>
                                    </div>
                                    <div className="pull-left Hu-input">
                                        {this.props.Vm.ColVmObjList["SimpleCode"].intoDom() }
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
                                        <label className="pull-right">序号：</label>
                                    </div>
                                    <div className="pull-left Hu-input">
                                        {this.props.Vm.ColVmObjList["OrderNumber"].intoDom() }
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <div className="pull-left Hu-label">
                                        <label className="pull-right">备注：</label>
                                    </div>
                                    <div className="pull-left Hu-input">
                                        {this.props.Vm.ColVmObjList["Remark"].intoDom()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            );
        }


        private fun_titleMasterClick() {
            this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
            this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IAnomalyInsertMasterRowDomConfig {

    }

    export interface ITextVmDic {
        [name: string]: textFile.ui.TextVm;
    }
    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }

    export class AnomalyInsertMasterRowDomVm extends domCore.DomVm {
        public ReactType = AnomalyInsertMasterRowDomReact;
        public IsMasterHide: boolean;
        public RowData: dataFile.Anomaly.IAnomalyData = {};
        //public SimpleCodeVm: textFile.ui.TextVm;
        //public NameVm: textFile.ui.TextVm;
        public TextVmObjList: ITextVmDic = {};
        public ColVmObjList: IColVmDic = {};

        public constructor(config?: IAnomalyInsertMasterRowDomConfig) {
            super();

            this.initColVm("SimpleCode", "TextVm", "notNull");
            this.initColVm("Name", "TextVm", "notNull");
            this.initColVm("OrderNumber", "TextVm");
            this.initColVm("Remark", "TextAreaVm");
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
                this.ColVmObjList[_name] = _exciteBean;
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
    export class AnomalyInsertMasterRowDomStates extends domCore.DomStates {
    }


    export class AnomalyInsertMasterRowDomProps extends domCore.DomProps<AnomalyInsertMasterRowDomVm>{
    }



}


