import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

export module KityMinderDom {
    export class KityMinderDomAction extends domCore.DomAction {
    }

    export interface IKMData
    {
        text: string;
        Image?: string;
        imageSize?: any;
        priority?: number;
        hyperlink?: string;
        expandState?: string;
        progress?: number;
    }
    export interface IKMNode
    {
        data: IKMData;
        children: IKMNode[];
    }

    export interface IKMTree
    {
        root: IKMNode;
    }

    export class KityMinderDomReact extends domCore.DomReact<KityMinderDomProps, KityMinderDomStates, KityMinderDomAction> implements domCore.IReact {

        public state = new KityMinderDomStates();

        public pSender(): React.ReactElement<any> {
            return <div><div className="KityMinderDom" style={{ height: 800 }}>
                <div>正在载入KityMinderDom的组件......</div>
                <div>{this.fError ? <span>{this.fError}</span>:""}</div>
                    </div></div>;
        }



        private fError: string;
        private fKityMinderInit()
        {
            this.fError = null;
            var _$dom = $(ReactDOM.findDOMNode(this)).find(".KityMinderDom");
            if (this.props.Vm.MDTreeObj && _$dom.length > 0) {
                _$dom.html("");
              //  urlFile.Core.AkPost("/right/Menu/GetAllTree?regname=MenuTreeCodeTable", {}, (a: any) => {
                  //  var _data: ITreeCodeTableModel = a;
                   // var _o = convertToKMNodeByTreeNode(_data);
                   // _o.data.text = "平台菜单";
                   // _o.data.expandState = "";
                    utilFile.Core.Util.AsyncJs([
                        "/AtawStatic/lib/03Extend/kityMinder/kity.min.js",
                        "/AtawStatic/lib/03Extend/kityMinder/kityMinder.core.css",
                        "/AtawStatic/lib/03Extend/kityMinder/kityMinder.core.js"],
                        () => {
                            try {
                                var km = window["km"] = new window["kityminder"].Minder({ renderTo: _$dom[0] });
                                km.importJson(this.props.Vm.MDTreeObj);
                            }
                            catch (ex) {
                                console.error(ex);
                                this.fError = ex;
                                
                                this.forceUpdate();
                            }

                        });
            }
        }

        protected pInstall() {
            super.pInstall();
           // this.fKityMinderInit();
        }

        protected pComponentDidMount(): void {
            super.pComponentDidMount();
            this.fKityMinderInit();
        }


    }

    export interface IReactKityMinderDomVm extends domCore.DomVm {
        MDTreeObj: IKMTree;
    }

    export interface IKityMinderDomConfig {
        MDTreeObj?: IKMTree;

    }

    export interface ITreeCodeTableModel {
        CODE_VALUE: string;
        CODE_TEXT: string;
        Children?: Array<ITreeCodeTableModel>;
        arrange?: string;
    }

    export var convertToKMNodeByTreeNode = function (node: ITreeCodeTableModel): IKMNode{
        var _km: IKMNode = { data: { text: node.CODE_TEXT, expandState: "collapse" }, children: [] };
        if (node.Children && node.Children.length > 0) {
            node.Children.forEach((n) => {
                var km = convertToKMNodeByTreeNode(n);
                _km.children.push(km);
            });
        }

        return _km;
    }

   // var fconvertToKMNodeByTreeNode = function (node: ITreeCodeTableModel):

    export class KityMinderDomVm extends domCore.DomVm implements IReactKityMinderDomVm {
        public ReactType = KityMinderDomReact;
        public MDTreeObj: IKMTree;
        public constructor(config?: IKityMinderDomConfig) {
            super();
            if (config) {
                if (config.MDTreeObj) {
                    this.MDTreeObj = config.MDTreeObj;
                }
            }
        }

    }

    export class KityMinderDomStates extends domCore.DomStates {
    }

    export class KityMinderDomProps extends domCore.DomProps<IReactKityMinderDomVm>{
    }



}


