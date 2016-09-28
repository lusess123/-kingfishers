import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import ModalFile = require("./../../05tool/Modal/ModalDom");
import basecolFile = require("./../00core/baseCol");
import BaseColReact = basecolFile.Core.BaseColReact;
import BaseColVm = basecolFile.Core.BaseColVm;
import BaseColProps = basecolFile.Core.BaseColProps;
import BaseColStates = basecolFile.Core.BaseColStates;
import BaseColAction = basecolFile.Core.BaseColAction;
import pageViewFile = require("./../../07data/PageView");
import FillMenuDomFile = require("./FillMenuDom");
import Entity = require("./../../../Typings/0Type/Entity");
import eventFile = require("./../../01core/Event");

import pickItemDomFile = require("./../../05tool/Picker/PickItemDom");
import PickerContainerFile = require("./../../05tool/Picker/PickerContainer");

import PickListBaseDomFile = require("./../../05tool/Picker/PickListBaseDom");
import PickProtalBaseDomFile = require("./../../05tool/Picker/PickProtalBaseDom");

export module Selector2 {
    export class Selector2Action extends BaseColAction {
    }

    export class Selector2React extends BaseColReact<Selector2Props, Selector2States, Selector2Action> implements domCore.IReact {

        public state = new Selector2States();
        private _text(str): string {
          try {
                var _texts = $(str).text();
                if (_texts == "") {
                    return str;
                }
                else
                    return _texts;
            }
            catch (ff) {
                return str;
            }
        }

        protected pInputOnChange(e: React.FormEvent) {
            var _val = e.target["value"];
            this.props.Vm.Text = _val ;
            this.props.Vm.fillMenuLoadData();
        }
        protected onButtonClick() {
            this.props.Vm.ModalObj.open();
            //this.forceUpdate();
        }

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="ACT-M-PARENT clearfix">
                    <input className="col-lg-8 col-md-7 col-sm-6 col-xs-6 ACT-INPUT  ACT-SELECTOR-INPUT "
                        value = {this.props.Vm.Text}
                        onChange={(e) => { this.pInputOnChange(e) } }
                        onFocus ={(e) => { this.pInputOnChange(e) } }
                        ></input>
                    <a  onClick={(a) => { this.onButtonClick(); return false; } } className="col-lg-2 col-md-2 col-sm-2 input-group-addon Hu-selector-btn">
                        <i className="fa fa-external-link-square"></i>
                    </a>
                </div>
                {this._tDom(this.props.Vm.ModalObj) }
                {this._tDom(this.props.Vm.FillMenuDomObj) }
            </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactSelector2Vm extends BaseColVm {
        Text: string;
        FillMenuDomObj: FillMenuDomFile.FillMenuDom.FillMenuDomVm;
        fillMenuLoadData(): void;
        ModalObj: ModalFile.ModalDom.ModalDomVm;
    }

    export interface ISelector2Config   {

        UniId?: string;
    }

    export class Selector2Vm extends BaseColVm implements IReactSelector2Vm {
        public ReactType = Selector2React;
        protected pRegName: string = "新选择器控件";
        public ModalObj: ModalFile.ModalDom.ModalDomVm;
        public RegName: string = "MRPUserCodeData";
        public Text: string;
        public OnPostDataSetFun: (ds: any) => pageViewFile.data.IDataSet;
        public FillMenuDomObj: FillMenuDomFile.FillMenuDom.FillMenuDomVm;
 

        public constructor(config?: ISelector2Config) {
            super();
            if (config) {
                if (config.UniId) {
                    this.UniId = config.UniId;
                }
            }
            if (!this.UniId)
                this.UniId = "Selector2Vm" + eventFile.App.getUniId();
            this.listenAppEvent("FillMenuDom-onSelected", this.UniId, (a: ISelectorItem) => {
                this.Text = a.Text;
                this.TempDataValue = a.Key;
                this.FillMenuDomObj = null;
                this.forceUpdate("");
            });

            this.listenAppEvent("FillMenuDom-onClose", this.UniId, () => {
                this.FillMenuDomObj = null;
                this.forceUpdate("");
            });

            this.ModalObj = new ModalFile.ModalDom.ModalDomVm({
                IsDebug: false,
                DomObj: null,
                ModalShowingFun: (a, b) => {
                    if (!a.DomObj) {
                        
                        a.DomObj = new PickerContainerFile.PickerContainer.PickerContainerVm(
                            {
                                IsSingle: true,
                                UniId: this.UniId,
                                LeftDomVmObj: new PickListBaseDomFile.PickListBaseDom.PickListBaseDomVm({
                                    UniId: this.UniId 
                                }),
                                PickItemList: [
                                    { Key: "key1", Text: "文本项1" },
                                    { Key: "key22", Text: "文本项22" },
                                    { Key: "key13", Text: "文本项13" }
                                ]
                                
                            });
                        // a.DomObj.
                        //a.IsModalShow = true;
                        this.forceUpdate("");
                    }
                }                 
            });
        }
        public static Test(): Selector2Vm {
            var _bean: Selector2Vm = new Selector2Vm();
            return _bean;
        }

        public getPostDataSetFun(): string {
            var str = "";
            var ds = {};
            if (this.OnPostDataSetFun) {
                var _ds = this.OnPostDataSetFun(ds);
                str = JSON.stringify(_ds);
            }

            return str;
        }

        public fillMenuLoadData() {
            urlFile.Core.AkPost("/core/Selector/AutoComplete",
                {
                    RegName: this.RegName,
                    key: this.Text,
                    ds: this.getPostDataSetFun()
                },
                (a) => {
                var _data: CodeDataModel[] = a;
                var _list = _data.map((b) => {
                    var _bean = { Key: b.CODE_VALUE, Text: b.CODE_TEXT };
                   
                    return _bean;
                });
              //  alert(_list.length);
                if (_list.length > 0) {
                    this.FillMenuDomObj = new FillMenuDomFile.FillMenuDom.FillMenuDomVm({
                        SelectorItemList: _list,
                        UniId: this.UniId 
                    });
                    this.FillMenuDomObj.IsChange = true;
                } else {
                    
                    this.FillMenuDomObj = null;
                }

                this.forceUpdate("");
               
            });
        }


    }



    export interface ISelectorItem {
         Key: string;
         Text: string;
         IsSelect?: boolean ;
    }
    export class Selector2States extends BaseColStates {
    }


    export class Selector2Props extends BaseColProps<IReactSelector2Vm>{
    }

    iocFile.Core.Ioc.Current().RegisterType("Selector2Vm", BaseColVm, Selector2Vm);

}


