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
import constantData = require("./../../../Common/Data")

export module UnitUpdateMasterRowDom {
    export class UnitUpdateMasterRowDomAction extends domCore.DomAction {
    }

    export class UnitUpdateMasterRowDomReact extends domCore.DomReact<UnitUpdateMasterRowDomProps, UnitUpdateMasterRowDomStates, UnitUpdateMasterRowDomAction> implements domCore.IReact {

        public state = new UnitUpdateMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className="panel">
                <div className="panel-heading" >
                    <h4 className="panel-title">
                        <a onClick={() => { this.fun_titleMasterClick(); } }>单位信息<i className={"fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down") }></i></a>
                    </h4>
                </div>
                <div className="panel-collapse collapse in">
                    <div className={"content active " + (this.props.Vm.IsMasterHide ? "hide" : "") }  >
                        <div className="Hm-form clearfix" >
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required">单位编码：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["Code"].intoDom() }
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required">单位名称：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["Name"].intoDom() }

                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required">单位联系人：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["ContactPerson"].intoDom() }

                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required">联系电话：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["Phone"].intoDom() }
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required">传真：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["Fax"].intoDom() }

                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required">邮箱：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["Email"].intoDom() }
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required">单位类型：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {  this.props.Vm.TypeCombo.intoDom() }
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required">单位地址：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["Address"].intoDom() }
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">单位简介：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <textarea placeholder=".."  value={this.props.Vm.RowData.Description} onChange={(e) => { this.fun_OnChange(e, "Description"); } }></textarea>
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
    export interface IUnitUpdateMasterRowDomConfig {
        UniId: string;
        RowData: dataFile.Unit.IUnitData;
    }

    export class UnitUpdateMasterRowDomVm extends domCore.DomVm {
        public ReactType = UnitUpdateMasterRowDomReact;
        public IsMasterHide: boolean;
        public RowData: dataFile.Unit.IUnitData = {};
        public TextVmObjList: ITextVmDic = {};
        public DescriptionOgi: string;
        public TypeOrgin: number;
        public TypeCombo: comboFile.ui.ComboVm;
        public constructor(config?: IUnitUpdateMasterRowDomConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
                this.DescriptionOgi = this.RowData.Description;
                this.TypeOrgin = this.RowData.Type;
                this.TypeCombo = new comboFile.ui.ComboVm();
                var List = constantData.Data.UnitTypeData;
                var itemList = [];
                for (var index = 0; index < List.length; index++) {
                    itemList.push(List[index])
                }
                this.TypeCombo.ItemList = itemList;
                this.TypeCombo.dataValue(this.TypeOrgin.toString());
                this.initTextVm("Code", "notNull");
                this.initTextVm("Name", "notNull");
                this.initTextVm("Phone", "MobilePhoneLegal");
                this.initTextVm("ContactPerson", "notNull");
                this.initTextVm("Fax", "FaxLegalNull");
                this.initTextVm("Email", "EmailLegalNull");
                this.initTextVm("Address");
            }
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
            var l2 = this.TextVmObjList["Code"].legal();
            var l3 = this.TextVmObjList["Phone"].legal();
            var l4 = this.TextVmObjList["ContactPerson"].legal();
            var l5 = this.TextVmObjList["Fax"].legal();
            var l6 = this.TextVmObjList["Email"].legal();
            var _res = l1 && l2 && l3 && l4 && l5 　&& l6;
            return _res;
        } 
        private fIsChangeRow: boolean = false;

        public getData(): dataFile.Unit.IUnitData {
            var _obj: dataFile.Unit.IUnitData = {};
            _obj.Type = this.RowData.Type;

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
            this.TextVmObjList["ContactPerson"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.ContactPerson = val;
                }
            });
            this.TextVmObjList["Phone"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.Phone = val;
                }
            });
            this.TextVmObjList["Fax"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.Fax = val;
                }
            });
            this.TextVmObjList["Address"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.Address = val;
                }
            });
            this.TextVmObjList["Email"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.Email = val;
                }
            });

            this.TypeCombo.getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.Type = Number(val);
                }
            });
            _obj.Description = this.DescriptionOgi;

            if (this.RowData.Description != this.DescriptionOgi)
            {
                this.fIsChangeRow = true;
                _obj.Description = this.RowData.Description;
            }
            if (this.fIsChangeRow) {

                _obj.FID = this.RowData.FID;
            }

            this.fIsChangeRow = false;
            return _obj;
        }
    }
    export class UnitUpdateMasterRowDomStates extends domCore.DomStates {
    }


    export class UnitUpdateMasterRowDomProps extends domCore.DomProps<UnitUpdateMasterRowDomVm>{
    }



}


