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

export module ExamItemUpdateMasterRowDom {
    export class ExamItemUpdateMasterRowDomAction extends domCore.DomAction {
    }

    export class ExamItemUpdateMasterRowDomReact extends domCore.DomReact<ExamItemUpdateMasterRowDomProps, ExamItemUpdateMasterRowDomStates, ExamItemUpdateMasterRowDomAction> implements domCore.IReact {

        public state = new ExamItemUpdateMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className= "panel" >
                <div className="panel-heading" >
                    <h4 className="panel-title">
                        <a onClick={() => { this.fun_titleMasterClick(); } }>体检项目<i className={"fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down") }></i></a>
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
                                    {this.props.Vm.TextVmObjList["SimpleCode"].intoDom() }
                            </div>
                        </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label">项目代码：</label>
                            </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["ItemCode"].intoDom() }
                            </div>
                        </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label">项目名称：</label>
                            </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["Name"].intoDom() }
                            </div>
                        </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label">所属科室：</label>
                            </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["DepartmentId"].intoDom() }
                            </div>
                        </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label">项目分类：</label>
                            </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["ItemCategory"].intoDom() }
                            </div>
                        </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label">单位：</label>
                            </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["Unit"].intoDom() }
                            </div>
                        </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label">参考上限：</label>
                            </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["UpperLimit"].intoDom() }
                            </div>
                        </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label">参考下限：</label>
                            </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["LowerLimit"].intoDom() }
                            </div>
                        </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label">价格：</label>
                            </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["Price"].intoDom() }
                            </div>
                        </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label">序号：</label>
                            </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["Order"].intoDom() }
                            </div>
                        </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label">体检结果类型：</label>
                            </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["ResultClass"].intoDom() }
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

    export interface IExamItemUpdateMasterRowDomConfig {
        UniId: string;
        RowData: dataFile.ExamItem.IExamItemData;    
    }

    export interface ITextVmDic {
        [name: string]: textFile.ui.TextVm;
    }

    export class ExamItemUpdateMasterRowDomVm extends domCore.DomVm {
        public ReactType = ExamItemUpdateMasterRowDomReact;
        public IsMasterHide: boolean;
        public RowData: dataFile.ExamItem.IExamItemData = {};
        public TextVmObjList: ITextVmDic = {};

        public constructor(config?: IExamItemUpdateMasterRowDomConfig) {
            super();
            if (config)
            {
                this.RowData = config.RowData;

                this.initTextVm("SimpleCode", "notNull");
                this.initTextVm("ItemCode", "notNull");
                this.initTextVm("Name");
                this.initTextVm("DepartmentId");
                this.initTextVm("ItemCategory");
                this.initTextVm("Unit");
                this.initTextVm("UpperLimit");
                this.initTextVm("LowerLimit");
                this.initTextVm("Price");
                this.initTextVm("Order");
                this.initTextVm("ResultClass");
                this.initTextVm("Remark");
            }       
        }

                public toChange() {
            this.IsChange = true;
            for (var n in this.TextVmObjList) {
                this.TextVmObjList[n].IsChange = true;
            }
        }

        public legal(): boolean {
            var l1 = this.TextVmObjList["SimpleCode"].legal();
            var l2 = this.TextVmObjList["ItemCode"].legal();
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
                _exciteBean.dataValueSet(this.RowData[colName]);
                _exciteBean.LegalObj.Kind = legal ? legal : "";
                _exciteBean.onChangeHandle((val) => {
                    this.RowData[colName] = val;
                    return true;
                });
                this.TextVmObjList[_name] = _exciteBean;
            }
        }

        private fIsChangeRow: boolean = false;

        public getData(): dataFile.ExamItem.IExamItemData {
            var _obj: dataFile.ExamItem.IExamItemData = {};
            this.TextVmObjList["SimpleCode"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.SimpleCode = val;
                }
            });

            this.TextVmObjList["ItemCode"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.ItemCode= val;
                }
            });
            this.TextVmObjList["Name"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.Name = val;
                }
            });
            this.TextVmObjList["DepartmentId"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.DepartmentId = val;
                }
            });
            this.TextVmObjList["ItemCategory"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.ItemCategory = val;
                }
            });
            this.TextVmObjList["Unit"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.Unit = val;
                }
            });
            this.TextVmObjList["UpperLimit"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.UpperLimit = Number(val);
                }
            });

            this.TextVmObjList["LowerLimit"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.LowerLimit = Number(val);
                }
            });

            this.TextVmObjList["Price"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.Price = Number(val);
                }
            });


            this.TextVmObjList["Order"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.Order = val;
                }
            });

            this.TextVmObjList["ResultClass"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.ResultClass = val;
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
    export class ExamItemUpdateMasterRowDomStates extends domCore.DomStates {
    }


    export class ExamItemUpdateMasterRowDomProps extends domCore.DomProps<ExamItemUpdateMasterRowDomVm>{
    }



}


