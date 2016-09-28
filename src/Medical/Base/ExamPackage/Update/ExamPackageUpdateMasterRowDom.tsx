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

export module ExamPackageUpdateMasterRowDom {
    export class ExamPackageUpdateMasterRowDomAction extends domCore.DomAction {
    }

    export class ExamPackageUpdateMasterRowDomReact extends domCore.DomReact<ExamPackageUpdateMasterRowDomProps, ExamPackageUpdateMasterRowDomStates, ExamPackageUpdateMasterRowDomAction> implements domCore.IReact {

        public state = new ExamPackageUpdateMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className="panel">
                <div className="panel-heading" >
                    <h4 className="panel-title">
                        <a onClick={() => { this.fun_titleMasterClick(); } }>体检套餐<i className={"fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down") }></i></a>
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
                                    <label className="pull-right required">
                                        名称：
                                    </label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["Name"].intoDom() }
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required">
                                        团体价格	：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["GroupPrice"].intoDom() }
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required">
                                        个人价格：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["IndividualPrice"].intoDom() }
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required">
                                        年龄上限：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["AgeUpperLimit"].intoDom() }
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required">
                                        年龄下限：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {
                                        this.inputAgeLowerLimit()
                                    }
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required">
                                        适用性别：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.SexTypeCombo.intoDom() }
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">
                                        备注：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <textarea placeholder=".."  value={this.props.Vm.RowData.Remark} onChange={(e) => { this.fun_OnChange(e, "Remark"); } }></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            );
        }
        
        private inputAgeLowerLimit(): React.ReactElement<any> {
            var _vm = this.props.Vm.AgeLowerLimitVm;
            if (!_vm) {
                this.props.Vm.AgeLowerLimitVm = _vm = this.getInputVm(this.props.Vm.RowData.AgeLowerLimit, "custom");

                _vm.LegalObj.CustomLegalFun = (col) => {
                    return this.props.Vm.compareSize(this.props.Vm.RowData.AgeUpperLimit, _vm.TempDataValue, _vm);
                }

                _vm.onChangeHandle((str) => {
                    this.props.Vm.RowData.AgeLowerLimit = Number(str);

                    return true;
                });


            }
            return _vm.intoDom();
        }
        private getInputVm(val: number, legalKind: string, fun?: Function): textFile.ui.TextVm {
            var _bean = new textFile.ui.TextVm();
            var str = "";
            if (val == null || val == undefined) {
                str = "";
            }
            else {
                str = val.toString();
            }
            _bean.vmdataValue(str);
            _bean.LegalObj.Kind = legalKind;
            return _bean;
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

    export interface IExamPackageUpdateMasterRowDomConfig {
        UniId: string;
        RowData: dataFile.ExamPackage.IExamPackageData;
    }
    export interface ITextVmDic {
        [name: string]: textFile.ui.TextVm;
    }

    export class ExamPackageUpdateMasterRowDomVm extends domCore.DomVm {
        public ReactType = ExamPackageUpdateMasterRowDomReact;
        public IsMasterHide: boolean;
        public RowData: dataFile.ExamPackage.IExamPackageData = {};
        public TextVmObjList: ITextVmDic = {};
        public RemarkOgi: string;
        public GenderOgi: number;
        public inputAgeLowerOi: number;
        public SexTypeCombo: comboFile.ui.ComboVm;
        public UniId: string;
        public AgeLowerLimitVm: textFile.ui.TextVm
        public constructor(config?: IExamPackageUpdateMasterRowDomConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
                this.RemarkOgi = this.RowData.Remark;
                this.GenderOgi = this.RowData.Gender;
                this.inputAgeLowerOi = this.RowData.AgeLowerLimit;
                if (config.UniId) {
                    this.UniId = config.UniId;
                }
                this.SexTypeCombo = new comboFile.ui.ComboVm();
                var List = dataFile.ExamPackage.ExamPackageGenderData;
                var itemList = [];
                for (var index = 0; index < List.length; index++) {
                    itemList.push(List[index])
                }
                this.SexTypeCombo.ItemList = itemList;
                this.SexTypeCombo.dataValueSet(this.RowData.Gender.toString() );
                this.SexTypeCombo.onChangeHandle((str) => {
                    this.RowData.Gender =Number(str);
                    return true;
                })
                this.initTextVm("SimpleCode", "notNull");
                this.initTextVm("Name", "notNull");
                this.initTextVm("AgeUpperLimit", "SeatLegalNull");
                this.initTextVm("GroupPrice", "SeatLegal");
                this.initTextVm("IndividualPrice", "SeatLegal");
            }
        }
        public compareSize(num1: number, num2: string, textVm: textFile.ui.TextVm): string {
            var re = /^[0-9]*[1-9][0-9]*$/;
            if (!re.test(num2)) {
                textVm.LegalObj.LegalResult = true;
                textVm.LegalObj.ErrMsg = "输入整数"
                return "输入整数！";

            }

            var num = Number(num2)
            if (num1 > num) {
                textVm.LegalObj.LegalResult = true;
                textVm.LegalObj.ErrMsg = "年龄上限不能大于年龄下限"
                return "年龄下限大于年龄上限！";
            }
            else {
                textVm.LegalObj.LegalResult = false;
                textVm.showLegal();
                return "";
            }
        }
        private fIsChangeRow: boolean = false;

        public getData(isDetailChange?: boolean): dataFile.ExamPackage.IExamPackageData {
            var _obj: dataFile.ExamPackage.IExamPackageData = {};

            _obj.Remark = this.RowData.Remark;
            _obj.Gender = this.RowData.Gender;
            _obj.AgeLowerLimit = this.RowData.AgeLowerLimit;
            this.TextVmObjList["SimpleCode"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.SimpleCode = val;
                }
            });

            this.TextVmObjList["Name"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.Name = val;
                }
            });
            this.TextVmObjList["GroupPrice"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.GroupPrice =Number(val);
                }
            });
            this.TextVmObjList["IndividualPrice"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.IndividualPrice = Number(val);
                }
            });

            if (this.RowData.Remark != this.RemarkOgi) {
                this.fIsChangeRow = true;
                _obj.Remark = this.RowData.Remark;
            }

            if (this.RowData.Gender != this.GenderOgi) {
                this.fIsChangeRow = true;
                _obj.Gender = this.RowData.Gender;
            }

            this.TextVmObjList["AgeUpperLimit"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.AgeUpperLimit =Number(val);
                }
            });

            if (this.RowData.AgeLowerLimit != this.inputAgeLowerOi) {
                this.fIsChangeRow = true;
                _obj.AgeLowerLimit = this.RowData.AgeLowerLimit;
            }
            if (this.fIsChangeRow || isDetailChange) {

                _obj.FID = this.RowData.FID;
            }

            this.fIsChangeRow = false;
            return _obj;
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
            var l1 = this.TextVmObjList["Name"].legal();
            var l2 = this.TextVmObjList["SimpleCode"].legal();
            var l3 = this.TextVmObjList["GroupPrice"].legal();
            var l4 = this.TextVmObjList["IndividualPrice"].legal();
            var l5 = this.TextVmObjList["AgeUpperLimit"].legal();
            var l6 = this.AgeLowerLimitVm.legal();
            var _res = l1 && l2 && l3 && l4 && l5 && l6;
            return _res;
        }

    }
    export class ExamPackageUpdateMasterRowDomStates extends domCore.DomStates {
    }


    export class ExamPackageUpdateMasterRowDomProps extends domCore.DomProps<ExamPackageUpdateMasterRowDomVm>{
    }



}


