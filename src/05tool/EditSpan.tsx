import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
import iocFile = require("./../01core/Ioc");
import urlFile = require("./../01core/Url");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module EditSpan {
    export class EditSpanAction extends domCore.DomAction {
    }

    export interface IChangeEvent {
        ( vm: EditSpanVm ,isChange:boolean ): void;
    }

    export class EditSpanReact extends domCore.DomReact<EditSpanProps, EditSpanStates, EditSpanAction> implements domCore.IReact {

        public state = new EditSpanStates();


        private fun_txtChange(e:React.FormEvent)
        {
            var _val = e.target["value"];
            this.props.Vm.Content = _val;            
            this.forceUpdate();
        }

        private fun_SpanClick()
        {
            this.props.Vm.spanClick();
        }

        private fun_PencilClick() {
            this.props.Vm.IsEdit = true;
            this.forceUpdate();
        }

        //private _initEditor(): React.ReactElement<any>
        //{
        //    return <div className="Hc-edit-span">
        //        <input type="text" 
        //            value={this.props.Vm.Content} placeholder="请输入.."
        //            onChange={(e) => { this.fun_txtChange(e); } }
        //            onBlur={() => { this.fun_SpanClick(); }}
        //            ></input>
        //        <i className="icon-share-alt fa fa-share Hu-pointer" onClick={() => { this.fun_SpanClick();}}></i>
        //    </div>;
            
        //}
        private _initEditor(): React.ReactElement<any> {
                                             
            if (this.props.Vm.Type == "") {
                return <div className="Hc-edit-span">
                    <input type="text"
                        value={this.props.Vm.Content} placeholder="请输入.."
                        onChange={(e) => { this.fun_txtChange(e); } }
                        onBlur={() => { this.fun_SpanClick(); } }
                        ></input>
                    <i className="icon-share-alt fa fa-share Hu-pointer" onClick={() => { this.fun_SpanClick(); } }></i>
                </div>;
            } else if (this.props.Vm.Type=="textarea") {
                return <div className="Hc-edit-span">
                    <textarea
                        value={this.props.Vm.Content} placeholder="请输入.."
                        onChange={(e) => { this.fun_txtChange(e); } }
                        onBlur={() => { this.fun_SpanClick(); } }
                        ></textarea>
                    <i className="icon-share-alt fa fa-share Hu-pointer" onClick={() => { this.fun_SpanClick(); } }></i>
                </div>;
            }

            
        }

        private _initSpan(): React.ReactElement<any>|string
        {
 
            if (this.props.Vm.Content == "") {
                return <i className="icon-pencil fa fa-pencil Hu-pointer"></i>;
            } else
                return  this.props.Vm.Content;
        }

        public pSender(): React.ReactElement<any> {
            if (this.props.Vm.IsEdit)
                return this._initEditor();
            else
                return <span className={"Hc-edit-span-text " + this.props.Vm.ClassName}  onClick={() => { this.fun_PencilClick(); } }>{this._initSpan() }<i className="icon-pencil fa fa-pencil Hu-pointer"></i></span>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

       


    }

    export interface IEditSpanVm
    {
        Content?: string;
        Placeholder?: string;
        ChangeEvent?: IChangeEvent;
        Type?: string;
        ClassName?: string;
        TextEditName?:string;
    }

    export class EditSpanVm extends domCore.DomVm {
        public ReactType = EditSpanReact;
        public Content: string = "";
        public Placeholder: string = "";
        public OriContent: string = "";
        public IsEdit: boolean = false;
        public ChangeEvent: IChangeEvent;
        public Type: string = "";
        public ClassName: string="";
        public TextEditName:string="";
        public constructor(config?:IEditSpanVm)
        {
            super();
            if (config) {
                if (config.Content) {
                   this.OriContent =  this.Content = config.Content;
                }
                if (config.Type) {
                    this.Type = config.Type;
                }
                if (config.ChangeEvent) {
                    this.ChangeEvent = config.ChangeEvent;
                    this.onChangeValueEvent(this.ChangeEvent);
                }

                if (config.ClassName)
                {
                    this.ClassName = config.ClassName;
                }
                if (config.TextEditName)
                {
                    this.TextEditName = config.TextEditName;
                }
            }

        }

        public spanClick()
        {
            this.IsEdit = false;
            this.getEmit().emit("changeValue", this, this.Content != this.OriContent);
            this.ClassName=" Hs-edit";
            this.forceUpdate("");
        }

        private onChangeValueEvent(fun: IChangeEvent) {
            this.getEmit().addListener("changeValue", fun);
        }

    }
    export class EditSpanStates extends domCore.DomStates {
    }


    export class EditSpanProps extends domCore.DomProps<EditSpanVm>{
    }



}


