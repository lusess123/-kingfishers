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
import textAreaFile = require("./../../../02col/01single/TextArea");

export module Right {
    export class MenuNewMasterAction extends domCore.DomAction {
    }

    export class MenuNewMasterReact extends domCore.DomReact<MenuNewMasterProps, MenuNewMasterStates, MenuNewMasterAction> implements domCore.IReact {


           private fun_OnChange(e,fName:string) {
            var _val = e.target["value"];
            this.props.Vm.MenuData[fName]=_val;
            this.forceUpdate();
        }

        public state = new MenuNewMasterStates();

        private fun_titleMasterClick()
        {
            this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
            this.forceUpdate();
        }


        private inputMenuName(): React.ReactElement<any>
        {
            if (!this.props.Vm.MenuNameTextVm) {
                var _vm = this.getInputVm(this.props.Vm.MenuData.MenuName, "notNull");
                this.props.Vm.MenuNameTextVm = _vm;
                _vm.onChangeHandle((str) => {
                    this.props.Vm.MenuData.MenuName = str;
                    return true;
                });
            }
           
            return this.props.Vm.MenuNameTextVm.intoDom();
        }

        private inputMenuKey(): React.ReactElement<any> {
            if (!this.props.Vm.MenuKeyTextVm) {
                var _vm = this.getInputVm(this.props.Vm.MenuData.Key, "notNull");
                this.props.Vm.MenuKeyTextVm = _vm;

                _vm.onChangeHandle((str) => {
                    this.props.Vm.MenuData.Key = str;
                    return true;
                });
            }

            return this.props.Vm.MenuKeyTextVm.intoDom();
        }


        private getInputVm(val: string, legalKind: string, fun?: Function): textFile.ui.TextVm {

            var _bean = new textFile.ui.TextVm();
            _bean.dataValueSet(val);
            _bean.LegalObj.Kind = legalKind;
         
            return _bean;
        }
          
        public pSender(): React.ReactElement<any> {
            return ( <div className="panel">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a onClick={() => { this.fun_titleMasterClick(); } }>菜单<i className={"fa fa-angle-" + (this.props.Vm.IsMasterHide?"up":"down")}></i></a>
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
                                <div className="Hu-label"><label>上级菜单:</label></div>
                                    <div className="Hu-input">{this.props.Vm.ParentSelector.intoDom() }</div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="Hu-label"><label>权值:</label></div>
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
                                    <div className="Hu-input">{this.props.Vm.intoTextAreaVm().intoDom() }</div>
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
    export class MenuNewMasterVm extends domCore.DomVm {
        public ReactType = MenuNewMasterReact;
        public ParentSelector:treeSelectorFile.ui.TreeSingleSelectorVm;
        public MenuTypeCombo:comboFile.ui.ComboVm;
        public MenuData:dataFile.Menu.IMenuDetailData;
        public MenuButtonRowList = new Array<menuButtonRowFile.MenuButtonRow.MenuButtonRowVm>();

        public MenuNameTextVm: textFile.ui.TextVm;
        public MenuKeyTextVm: textFile.ui.TextVm;
        public RightAreaVm: textAreaFile.ui.TextAreaVm;

        public IsMasterHide: boolean;
       // public IsDetailHide: boolean;

        public constructor() {
            super();
            this.ParentSelector=new treeSelectorFile.ui.TreeSingleSelectorVm();
             this.MenuTypeCombo=new comboFile.ui.ComboVm();
             var itemList=[];
             itemList.push({Value:0,Text:"产品"});
             itemList.push({Value:1,Text:"模块"});
             itemList.push({Value:2,Text:"页面"});
             this.MenuTypeCombo.ItemList=itemList;
             this.MenuData = { FID: "", RightDesc: "", MenuKindId: "", MenuKindName: "", MenuName: "", ParentName: "", ParentId: "", OrderId: 0, Key: "", MenuButtonList: [] };
             this.MenuData.MenuButtonList.push({ FID: "", FName: "新增", FKey: "Insert", FValue: "2", OrderId: "1" });
             this.MenuData.MenuButtonList.push({ FID: "", FName: "编辑", FKey: "Update", FValue: "4", OrderId: "2" });
             this.MenuData.MenuButtonList.push({ FID: "", FName: "删除", FKey: "Delete", FValue: "8", OrderId: "3" });
             this.MenuData.MenuButtonList.push({ FID: "", FName: "详情", FKey: "Detail", FValue: "16", OrderId: "4" });

            
             


        }

        public intoTextAreaVm(): textAreaFile.ui.TextAreaVm
        {
            if (!this.RightAreaVm) {
                this.RightAreaVm = new textAreaFile.ui.TextAreaVm();
                this.RightAreaVm.vmDataValueSet(this.MenuData.RightDesc);
                this.RightAreaVm.onChangeHandle((str) => {
                    this.MenuData.RightDesc = str;
                    return true;
                });
            }
            return this.RightAreaVm;
        }

        public legal():boolean
        {
           var l1 = this.MenuNameTextVm.legal();
           var l2 = this.MenuKeyTextVm.legal();
           var _res = l1 && l2;
           this.MenuButtonRowList.forEach((r) => {
               _res = r.legal()&&_res;
              
           });
           return _res;
        }

        public initData(data:dataFile.Menu.IParentsMenuData)
        {
           // debugger 
           // alert(data.Name);
            this.ParentSelector.dataValueSet(data.fid);
            this.ParentSelector.Text = data.Name;
            this.forceUpdate("");
        }

    }
     
     
    export class MenuNewMasterStates extends domCore.DomStates {
    }


    export class MenuNewMasterProps extends domCore.DomProps<MenuNewMasterVm>{
    }



}


