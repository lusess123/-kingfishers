import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

export module FillMenuDom {
    export class FillMenuDomAction extends domCore.DomAction {
    }

    export class FillMenuDomReact extends domCore.DomReact<FillMenuDomProps, FillMenuDomStates, FillMenuDomAction> implements domCore.IReact {

        public state = new FillMenuDomStates();
        protected pIsSetScreenMaxHeight: boolean = true;
        private onClickLiSetValue(item: ISelectorItem) {
            this.props.Vm.onSelected({ Key: item.Key, Text: this._text(item.Text) });
        }

        private onMoreFun() {
            this.props.Vm.onMore();
        }
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
        public pSender(): React.ReactElement<any> {

           
            return <ul className="col-lg-9 col-md-8 col-sm-8 Hu-select-content Hz-scroll ACT-FillMenuDom">
                    {this.props.Vm.SelectorItemList.map(
                        (a) => {
                            return <li
                                dangerouslySetInnerHTML={{ __html: a.Text }}
                                className={"Hu-pointer " + (a.Key == this.props.Vm.Key ? "active" : "") }
                                key={a.Key}
                                onClick={() => { this.onClickLiSetValue(a); return false; } }>
                            </li>;
                        })
                    }
                    <li className="Hu-pointer " ><a  onClick={() => { this.onMoreFun(); return false; } }>查看更多...</a></li>
                   </ul>;
        }

        private fclickFun: (eventObject: JQueryEventObject) => any;

        protected pComponentWillUnmount(): void {
            super.pComponentWillUnmount();
            $("body").unbind("click", this.fclickFun);

        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
            this.fclickFun = (a: JQueryEventObject) => {
                var _$tar = $(a.target);
                //  alert(2);
                if (!_$tar.hasClass("ACT-FillMenuDom") && !_$tar.parents().hasClass("ACT-FillMenuDom") && !_$tar.hasClass("ACT-SELECTOR-INPUT")) {
                    this.props.Vm.onClose();
                }
                return true;
            };
            $("body").bind("click", this.fclickFun);
        }


    }

    export interface IReactFillMenuDomVm extends domCore.DomVm {
        SelectorItemList: ISelectorItem[];
        Key: string;
        onSelected(item: ISelectorItem);
        onClose();
        onMore();
    }     

    export interface IFillMenuDomConfig {
        SelectorItemList: ISelectorItem[];
        UniId?: string;
    }

    export interface ISelectorItem {
        Key: string;
        Text: string;
        IsSelect?: boolean;
    }

  
    export class FillMenuDomVm extends domCore.DomVm implements IReactFillMenuDomVm {
        public ReactType = FillMenuDomReact;
        public SelectorItemList: ISelectorItem[];
        public Key: string;

        public onSelected(item: ISelectorItem) {
            this.emitAppEvent("FillMenuDom-onSelected", this.UniId, { Key: item.Key, Text: item.Text });
        }
        public onClose() {
            this.emitAppEvent("FillMenuDom-onClose", this.UniId);
        }
        public onMore() {
            alert(123);
            this.emitAppEvent("PickDom-ModalOpen", this.UniId);
           // this.onClose();
        }
        public registSelected(fun: (item: ISelectorItem)=>void, dom: domCore.DomVm) {
            this.pRegistAppEventByDom({
                Fun: fun,
                Name: "FillMenuDom-onSelected",
                //UniId: this.UniId,
                DomObj:dom
            });
        }
        public registClose(fun: ()=>void, dom: domCore.DomVm) {
            this.pRegistAppEventByDom({
                Fun: fun,
                Name: "FillMenuDom-onSelected",
                //UniId: this.UniId,
                DomObj: dom
            });
        }

        public constructor(config?: IFillMenuDomConfig) {
            super();
            if (config) {
                if (config.SelectorItemList) {
                    this.SelectorItemList = config.SelectorItemList.map((a) => {
                        return a ;
                    });
                }
                if (config.UniId) {
                    this.UniId = config.UniId;
                }
            }
        }

    }
    export class FillMenuDomStates extends domCore.DomStates {
    }


    export class FillMenuDomProps extends domCore.DomProps<IReactFillMenuDomVm>{
    }



}


