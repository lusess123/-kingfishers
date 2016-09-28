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

export module ExamItemCategoryUpdateMasterRowDom {
    export class ExamItemCategoryUpdateMasterRowDomAction extends domCore.DomAction {
    }

    export class ExamItemCategoryUpdateMasterRowDomReact extends domCore.DomReact<ExamItemCategoryUpdateMasterRowDomProps, ExamItemCategoryUpdateMasterRowDomStates, ExamItemCategoryUpdateMasterRowDomAction> implements domCore.IReact {

        public state = new ExamItemCategoryUpdateMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className= "1" >
                <div className="panel-heading" >
                    <h4 className="panel-title">
                        <a onClick={() => { this.fun_titleMasterClick(); } }>体检项目分类<i className={"fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down") }></i></a>
                    </h4>
                </div>
                <div className="panel-collapse collapse in">
                    <div className={"content active " + (this.props.Vm.IsMasterHide ? "hide" : "") }  >
                        <div className="Hm-form clearfix" >
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label">代码：</label>
                            </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["Code"].intoDom() }
                            </div>
                        </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label">名称：</label>
                            </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["Name"].intoDom() }
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

    export interface ITextVmDic {
        [name: string]: textFile.ui.TextVm;
    }

    export interface IExamItemCategoryUpdateMasterRowDomConfig {
        UniId: string;
        RowData: dataFile.ExamItemCategory.ExamItemCategoryData;

    }

    export class ExamItemCategoryUpdateMasterRowDomVm extends domCore.DomVm {
        public ReactType = ExamItemCategoryUpdateMasterRowDomReact;
        public IsMasterHide: boolean;
        public RowData: dataFile.ExamItemCategory.ExamItemCategoryData = {};
        public TextVmObjList: ITextVmDic = {};
        public UniId: string;
        public constructor(config?: IExamItemCategoryUpdateMasterRowDomConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
                this.initTextVm("Code", "notNull");
                this.initTextVm("Name", "notNull");
            }
        }

        private fIsChangeRow: boolean = false;

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
            var l1 = this.TextVmObjList["Name"].legal();
            var l2 = this.TextVmObjList["Code"].legal();
            var _res = l1 && l2;
            return _res;
        } 

        public getData(): dataFile.ExamItemCategory.ExamItemCategoryData {
            var _obj: dataFile.ExamItemCategory.ExamItemCategoryData = {};

            this.TextVmObjList["Code"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.Code = val;
                }
            });

            this.TextVmObjList["Name"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.Name = val;
                }
            });
            if (this.fIsChangeRow) {

                _obj.FID = this.RowData.FID;
            }

            this.fIsChangeRow = false;
            return _obj;
        }
    }
    export class ExamItemCategoryUpdateMasterRowDomStates extends domCore.DomStates {
    }


    export class ExamItemCategoryUpdateMasterRowDomProps extends domCore.DomProps<ExamItemCategoryUpdateMasterRowDomVm>{
    }



}


