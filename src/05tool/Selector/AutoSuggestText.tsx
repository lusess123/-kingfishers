import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import pageViewFile = require("./../../07data/PageView");
import FillMenuDomFile = require("./FillMenuDom");
import Entity = require("./../../../Typings/0Type/Entity");
import eventFile = require("./../../01core/Event");

export module AutoSuggestText {
    export class AutoSuggestTextAction extends domCore.DomAction {
    }

    export class AutoSuggestTextReact extends domCore.DomReact<AutoSuggestTextProps, AutoSuggestTextStates, AutoSuggestTextAction> implements domCore.IReact {

        public state = new AutoSuggestTextStates();

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

       // private fIsSelector: boolean = false;
        protected pInputOnFocus(e: React.FormEvent) {
            if (this.props.Vm.TempDataValue && this.props.Vm.TempDataValue != "") {
               // alert(123);
                this.props.Vm.IsTxtSelector = true;
            }
            var _val = e.target["value"];
            //this.props.Vm.Text = _val;
            //this.props.Vm.TempDataValue = "";
            this.props.Vm.fillMenuLoadData(_val);
        }
        protected pInputOnChange(e: React.FormEvent) {
           
            var _val = e.target["value"];
           
            // alert(this.props.Vm.fIsSelector);
            //console.warn(_val);
            if (_val != this.props.Vm.Text) {
                this.props.Vm.IsTxtSelector = false;
                this.props.Vm.Text = _val;
                this.props.Vm.TempDataValue = "";
                this.props.Vm.sureSelect();
            }
            
            
            this.props.Vm.fillMenuLoadData(_val);
        }
        protected pInputOnBlur(e: React.FormEvent) {
            var _val = e.target["value"];
            // alert(this.fIsSelector);
            if ((this.props.Vm.TempDataValue != "" && this.props.Vm. IsTxtSelector) || _val == "") {
            }
            else {
                this.props.Vm.Text = "";
                //this.props.Vm.TempDataValue = "";
                this.props.Vm.FillMenuDomObj = null;
                this.props.Vm.sureSelect();
                this.forceUpdate();
            }
        }
        protected onButtonClick() {
           // this.props.Vm.ModalObj.open();
            //this.forceUpdate();
        }

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="ACT-M-PARENT clearfix">
                    <input className="col-lg-8 col-md-7 col-sm-6 col-xs-6 ACT-INPUT  ACT-SELECTOR-INPUT "
                        value = {this._text( this.props.Vm.Text)}
                        onChange={(e) => { this.pInputOnChange(e) } }
                        onFocus ={(e) => { this.pInputOnChange(e) } }
                        onBlur={(e) => { this.pInputOnBlur(e); } }
                        ></input>
                 
                </div>
                {this._tDom(this.props.Vm.FillMenuDomObj) }
            </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactAutoSuggestTextVm extends domCore.DomVm {
        Text: string;
        FillMenuDomObj: FillMenuDomFile.FillMenuDom.FillMenuDomVm;
        fillMenuLoadData(str: string): void;
        IsTxtSelector: boolean;
        sureSelect(): void;
    }

    export interface IAutoSuggestTextConfig {
        UniId?: string;
        HasOnlySelect?: boolean;//只允许选择
    }

    export class AutoSuggestTextVm extends domCore.DomVm implements IReactAutoSuggestTextVm {
        public ReactType = AutoSuggestTextReact;
        protected pRegName: string = "新选择器控件";
      //  public ModalObj: ModalFile.ModalDom.ModalDomVm;
        public RegName: string = "MRPUserCodeData";
        public Text: string;
        public OnPostDataSetFun: (ds: any) => pageViewFile.data.IDataSet;
        public FillMenuDomObj: FillMenuDomFile.FillMenuDom.FillMenuDomVm;
        public IsTxtSelector: boolean;

        public constructor(config?: IAutoSuggestTextConfig) {
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
                this.IsTxtSelector = true;
                this.sureSelect();
                this.forceUpdate("");
            });

            this.listenAppEvent("FillMenuDom-onClose", this.UniId, () => {
                this.FillMenuDomObj = null;
                this.forceUpdate("");
            });
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

        public  sureSelect()
        {
            this.emitAppEvent("AutoSuggestText-setValue", this.UniId, [{ Text: this.Text, Key: this.TempDataValue}]);
        }

        public fillMenuLoadData(str:string) {
            urlFile.Core.AkPost("/core/Selector/AutoComplete",
                {
                    RegName: this.RegName,
                    key: str,
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
        IsSelect?: boolean;
    }
    export class AutoSuggestTextStates extends domCore.DomStates {
    }


    export class AutoSuggestTextProps extends domCore.DomProps<IReactAutoSuggestTextVm>{
    }



}


