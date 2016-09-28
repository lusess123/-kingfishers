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

export module ExamItemInsertMasterRowDom {
    export class ExamItemInsertMasterRowDomAction extends domCore.DomAction {
    }

    export class ExamItemInsertMasterRowDomReact extends domCore.DomReact<ExamItemInsertMasterRowDomProps, ExamItemInsertMasterRowDomStates, ExamItemInsertMasterRowDomAction> implements domCore.IReact {

        public state = new ExamItemInsertMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className="panel">
                <div className="panel-heading" >
                    <h4 className="panel-title">
                        <a onClick={() => { this.fun_titleMasterClick(); } }>体检项目信息<i className={"fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down") }></i></a>
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
                                    <label className="pull-right">项目名称：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["Name"].intoDom() }
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">所属科室：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["DepartmentId"].intoDom() }
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">项目分类：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["ItemCategory"].intoDom() }
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">单位：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["Unit"].intoDom() }
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">参考上限：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["UpperLimit"].intoDom() }
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">参考下限：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["LowerLimit"].intoDom() }
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">价格：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["Price"].intoDom() }
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">序号：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["Order"].intoDom() }
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">体检结果类型：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["ResultClass"].intoDom() }
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

    export interface IExamItemInsertMasterRowDomConfig {


    }

    export class ExamItemInsertMasterRowDomVm extends domCore.DomVm {
        public ReactType = ExamItemInsertMasterRowDomReact;
        public IsMasterHide: boolean;
        public RowData: dataFile.ExamItem.IExamItemData = {};
        public TextVmObjList: ITextVmDic = {};

        public constructor(config?: IExamItemInsertMasterRowDomConfig) {
            super();
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

        public legal(): boolean {
            var l1 = this.TextVmObjList["SimpleCode"].legal();
            var l2 = this.TextVmObjList["ItemCode"].legal();
            var l3 = this.TextVmObjList["Name"].legal();
            var l4 = this.TextVmObjList["DepartmentId"].legal();
            var l5 = this.TextVmObjList["ItemCategory"].legal();
            var l6 = this.TextVmObjList["Unit"].legal();
            var l7 = this.TextVmObjList["UpperLimit"].legal();
            var l8 = this.TextVmObjList["LowerLimit"].legal();
            var l9 = this.TextVmObjList["Price"].legal();
            var l0 = this.TextVmObjList["Order"].legal();
            var l11 = this.TextVmObjList["ResultClass"].legal();
            var l12 = this.TextVmObjList["Remark"].legal();

            var _res = l1 && l2 && l3 && l4 && l5 && l6 && l7 && l8 && l9 && l0  && l11 && l12;
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
    export class ExamItemInsertMasterRowDomStates extends domCore.DomStates {
    }


    export class ExamItemInsertMasterRowDomProps extends domCore.DomProps<ExamItemInsertMasterRowDomVm>{
    }



}


