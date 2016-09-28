import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import treeSelectorFile = require("./../../../02col/03selector/TreeSelector");
import comboFile = require("./../../../02col/02Mulite/Combo");
import dataFile = require("./../Data");
import menuButtonRowFile = require("./MenuButtonRow");

import textFile = require("./../../../02col/01single/Text");
import kvFile = require("./../../../07data/Kv");

export module Right {
    export class MenuUpdateMasterAction extends domCore.DomAction {
    }

    export class MenuUpdateMasterReact extends domCore.DomReact<MenuUpdateMasterProps, MenuUpdateMasterStates, MenuUpdateMasterAction> implements domCore.IReact {


        private fun_OnChange(e, fName: string) {
            var _val = e.target["value"];
            this.props.Vm.MenuData[fName] = _val;
            this.forceUpdate();
        }

        public state = new MenuUpdateMasterStates();

        private fun_titleMasterClick() {
            this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
            this.forceUpdate();
        }


        private inputMenuName(): React.ReactElement<any> {
            var _vm = this.getInputVm(this.props.Vm.MenuData.MenuName, "notNull");
            this.props.Vm.MenuNameTextVm = _vm;
            _vm.onChangeHandle((str) => {
                this.props.Vm.MenuData.MenuName = str;
                return true;
            });
            return _vm.intoDom();
        }

        private inputMenuKey(): React.ReactElement<any> {
            var _vm = this.getInputVm(this.props.Vm.MenuData.Key, "notNull");
            this.props.Vm.MenuKeyTextVm = _vm;

            _vm.onChangeHandle((str) => {
                this.props.Vm.MenuData.Key = str;
                this.props.Vm.modifyParentKeyValue(str);

                return true;
            });

            return _vm.intoDom();
        }


        private getInputVm(val: string, legalKind: string, fun?: Function): textFile.ui.TextVm {

            var _bean = new textFile.ui.TextVm();
            _bean.setOriValue(val);
            _bean.LegalObj.Kind = legalKind;

            return _bean;
        }

        public pSender(): React.ReactElement<any> {
            return (<div className="1">

                <div className="panel">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a onClick={() => { this.fun_titleMasterClick(); } }>菜单<i className={"fa fa-angle-" + (this.props.Vm.IsMasterHide ?"up":"down")}></i></a>
                        </h4>
                    </div>
                    <div className={"panel-collapse" + (this.props.Vm.IsMasterHide ? " hide" : "") }>
                        <div className="content active ">
                            <div className="Hm-form clearfix">
                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <div className="Hu-label"><label>菜单名:</label></div>
                                    <div className="Hu-input">{this.inputMenuName() }</div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <div className="Hu-label"><label >上级菜单: </label></div>
                                    <div className="Hu-input"><label className="form-control-label">{this.props.Vm.MenuData.ParentName}</label></div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <div className=" Hu-label"><label>权值:</label></div>
                                    <div className="Hu-input">{this.inputMenuKey() }</div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <div className="Hu-label"><label>菜单类别:</label></div>
                                    <div className="Hu-input">{this.props.Vm.MenuTypeCombo.intoDom() }</div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <div className="Hu-label"><label>排序编号:</label></div>
                                    <div className="Hu-input"><input className="Hg-width" placeholder=".." type="text" value={this.props.Vm.MenuData.OrderId} onChange={(e) => { this.fun_OnChange(e, "OrderId"); } }></input></div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <div className="Hu-label"><label>菜单描述:</label></div>
                                    <div className="Hu-input">
                                        <textarea placeholder=".."  value={this.props.Vm.MenuData.RightDesc} onChange={(e) => { this.fun_OnChange(e, "RightDesc"); } }></textarea>    
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                

            </div>

            );

        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IMenuDetailData {
        FID?: string;
        MenuName?: string;
        ParentId?: string;
        ParentName?: string;
        MenuKindId?: string;
        MenuKindName?: string;
        Key?: string;
        OrderId?: number;
        RightDesc?: string;
    }

    export interface IMenuUpdateMasterConfig
    {
        MenuData: IMenuDetailData;
        UniId?: string;
    }

    export class MenuUpdateMasterVm extends domCore.DomVm {
        public ReactType = MenuUpdateMasterReact;
       // public ParentSelector: treeSelectorFile.ui.TreeSingleSelectorVm;
        public MenuTypeCombo: comboFile.ui.ComboVm;
        public MenuData: IMenuDetailData;
        public MenuNameTextVm: textFile.ui.TextVm;
        public MenuKeyTextVm: textFile.ui.TextVm;

        public IsMasterHide: boolean;

        public OrderOgi: number = 0;
        public DescOgi: string;

        public UniId: string = "";
        // public IsDetailHide: boolean;

        public constructor(config?: IMenuUpdateMasterConfig) {
            super();
           // this.ParentSelector = new treeSelectorFile.ui.TreeSingleSelectorVm();
            this.MenuTypeCombo = new comboFile.ui.ComboVm();
            
            var itemList = [];
            itemList.push({ Value: 0, Text: "产品" });
            itemList.push({ Value: 1, Text: "模块" });
            itemList.push({ Value: 2, Text: "页面" });
            this.MenuTypeCombo.ItemList = itemList;
            if (config) {
                this.MenuData = config.MenuData;
                this.OrderOgi = this.MenuData.OrderId;
                this.DescOgi = this.MenuData.RightDesc;
                this.MenuTypeCombo.dataValueSet(this.MenuData.MenuKindId);
                if (config.UniId) {
                    this.UniId = config.UniId;
                }
            }

            //this.MenuData = { FID: "", RightDesc: "", MenuKindId: "", MenuKindName: "", MenuName: "", ParentName: "", ParentId: "", OrderId: 0, Key: "", MenuButtonList: [] };
            //this.MenuData.MenuButtonList.push({ FID: "", FName: "新增", FKey: "Insert", FValue: "2", OrderId: "1" });
            //this.MenuData.MenuButtonList.push({ FID: "", FName: "编辑", FKey: "Update", FValue: "4", OrderId: "2" });
            //this.MenuData.MenuButtonList.push({ FID: "", FName: "删除", FKey: "Delete", FValue: "8", OrderId: "3" });
            //this.MenuData.MenuButtonList.push({ FID: "", FName: "详情", FKey: "Detail", FValue: "16", OrderId: "4" });

        }

        public modifyParentKeyValue(val: string)
        {
            this.emitAppEvent("modifyParentKeyValue",this.UniId,val);
        }

        public legal(): boolean {
            var l1 = this.MenuNameTextVm.legal();
            var l2 = this.MenuKeyTextVm.legal();
            var _res = l1 && l2;
            //this.MenuButtonRowList.forEach((r) => {
            //    _res = r.legal() && _res;
            //    //var _d = r.getData();
            //    //alert(JSON.stringify(_d));
            //});

            //alert(JSON.stringify(this.getData()));
            return _res;
        }

        private fIsChangeRow: boolean = false;

        public getData(isDetailChange?:boolean): dataFile.Menu.IMenuDetailData
        {
            var _obj: dataFile.Menu.IMenuDetailData = {};
           
            //菜单名称
            this.MenuNameTextVm.getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.MenuName = val;
                }
            });
            //父节点
            //this.ParentSelector.setChangeValFun((isChange, val) => {
            //    if (isChange) {
            //        this.fIsChangeRow = true;
            //        _obj.ParentId = val;
            //    }
            //});
            //权值
            this.MenuKeyTextVm.getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.Key = val;
                }
            });
            //菜单类别
            this.MenuTypeCombo.getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.MenuKindId = val;
                }
            });
            //排序编号
            if (this.MenuData.OrderId != this.OrderOgi) {
                this.fIsChangeRow = true;
                _obj.OrderId = this.MenuData.OrderId;
            }

            //描述
            if (this.MenuData.RightDesc != this.DescOgi) {
                this.fIsChangeRow = true;
                _obj.RightDesc = this.MenuData.RightDesc;
            }

          //  debugger
            //if (this.MenuData.DeleteButtonList.length > 0)
            //{
            //    _obj.DeleteButtonList = this.MenuData.DeleteButtonList;
            //}

            if (this.fIsChangeRow || isDetailChange) {

                _obj.FID = this.MenuData.FID;
            }

            this.fIsChangeRow = false;
            return _obj;
        }

    }


    export class MenuUpdateMasterStates extends domCore.DomStates {
    }


    export class MenuUpdateMasterProps extends domCore.DomProps<MenuUpdateMasterVm>{
    }



}


