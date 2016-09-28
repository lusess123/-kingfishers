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

export module ResultCommonInsertMasterRowDom {
    export class ResultCommonInsertMasterRowDomAction extends domCore.DomAction {
    }

    export class ResultCommonInsertMasterRowDomReact extends domCore.DomReact<ResultCommonInsertMasterRowDomProps, ResultCommonInsertMasterRowDomStates, ResultCommonInsertMasterRowDomAction> implements domCore.IReact {

        public state = new ResultCommonInsertMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className="panel">
                <div className="panel-heading" >
                    <h4 className="panel-title">
                        <a onClick={() => { this.fun_titleMasterClick(); } }>体检结果<i className={"fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down") }></i></a>
                    </h4>
                </div>
                <div className="panel-collapse collapse in">
                    <div className={"content active " + (this.props.Vm.IsMasterHide ? "hide" : "") }  >
                        <div className="Hm-form clearfix" >
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required">简码：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["SimpleCode"].intoDom() } 
                                </div>
                            </div>        
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required">体检项目：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["ItemId"].intoDom() } 
                                </div>
                            </div>  
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">体检结果：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["Result"].intoDom() } 
                                </div>
                            </div>  
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">序号：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["OrderNum"].intoDom() } 
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
    export interface ITextVmDic {
        [name: string]: textFile.ui.TextVm;
    }
    export interface IResultCommonInsertMasterRowDomConfig {


    }

    export class ResultCommonInsertMasterRowDomVm extends domCore.DomVm {
        public ReactType = ResultCommonInsertMasterRowDomReact;
        public IsMasterHide: boolean;
        public RowData: dataFile.ResultCommon.IResultCommonData = {};
        public ItemVm: textFile.ui.TextVm;
        public SimpleCodeVm: textFile.ui.TextVm;
        public ResultVm: textFile.ui.TextVm;
        public OrderNumVm: textFile.ui.TextVm;
        public TextVmObjList: ITextVmDic = {};

        public constructor(config?: IResultCommonInsertMasterRowDomConfig) {
                super();    
                this.initTextVm("SimpleCode", "notNull");
                this.initTextVm("ItemId", "notNull");
                this.initTextVm("Result");
                this.initTextVm("OrderNum");
        } 
        public legal(): boolean {
            var l1 = this.TextVmObjList["ItemId"].legal();
            var l2 = this.TextVmObjList["SimpleCode"].legal();
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
    export class ResultCommonInsertMasterRowDomStates extends domCore.DomStates {
    }


    export class ResultCommonInsertMasterRowDomProps extends domCore.DomProps<ResultCommonInsertMasterRowDomVm>{
    }



}


