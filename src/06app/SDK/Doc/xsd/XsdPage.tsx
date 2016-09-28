import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
//import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");
import BaseTreeFile = require("./../../../../02col/03selector/BaseTree");
import TreeFile = require("./../../../../05tool/Tree");
import TreeReact = TreeFile.ui.TreeReact;
import TreeNodeVm =TreeFile.ui.TreeNodeVm;

export module XsdPage {
    export class XsdPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class XsdPageReact extends basewedPageFile.Web.BaseWebPageReact<XsdPageProps, XsdPageStates, XsdPageAction> implements domCore.IReact {

        public state = new XsdPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="m-t">
                <ul className="col-lg-3 col-md-3 col-sm-3 Hm-xsd-list">
                    <li>图标说明：</li>
                    <li><i className="xsd-icon-qjjd fa-2x"></i><span>枚举类型定义</span></li>
                    <li><i className="xsd-icon-qjfz fa-2x"></i><span>复杂类型定义</span></li>
                    <li><i className="xsd-icon-qjtx fa-2x"></i><span>属性成员</span></li>
                    <li><i className="xsd-icon-qjmx2 fa-2x"></i><span>复杂类型成员对象</span></li>
                    <li><i className="xsd-icon-qjmx1 fa-2x"></i><span>简单类型成员对象</span></li>
                    <li>名称前面加 [] 表示这个是集合成员</li>
                    <li>名称前面加 1 表示该元素出现一次</li>
                </ul>
                <div className="col-lg-6 col-md-6 col-sm-6">{this._tDom(this.props.Vm.XsdTreeObj) }</div>
            </div>;
        }






    }

    export interface IReactXsdPageVm extends basewedPageFile.Web.BaseWebPageVm {
        XsdTreeObj: BaseTreeFile.ui.BaseTreeVm;
        NoteIsHidden: boolean;
    }

    export interface IXsdPageConfig {


    }

    export interface IXsdNodeData
    {
        XsdItmTypeStr: string;
        Name: string;
        Text: string;
        DataType: string; 
    }

    export class XsdPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactXsdPageVm {
        public ReactType = XsdPageReact;
        public Title: string = "XsdPage页面;";
        public XsdTreeObj: BaseTreeFile.ui.BaseTreeVm;
        private XsdName: string = "";
        public NoteIsHidden: boolean = false;


        public fun_NoteClick(nodeVm: TreeFile.ui.TreeNodeVm) {
            this.NoteIsHidden = !this.NoteIsHidden;
            this.XsdTreeObj.IsChange = true;
            nodeVm.IsChange = true;
            nodeVm.forceUpdate("");
        }

        public constructor(config?: IXsdPageConfig) {
            super();

        }

        private init(config: IXsdPageConfig) {
            if (this.Param1 && this.Param1 != "") {
                this.XsdName = this.Param1;
            }

            this.XsdTreeObj = new BaseTreeFile.ui.BaseTreeVm({
                RegName: "XsdCodeTable-"+this.XsdName,
                IsRootExpand: true
                
            });


            this.XsdTreeObj.Tree.StyleName = "Base";

            this.XsdTreeObj.Tree.NodeTplFun = (a) => {
                return [a.ExtData["Info"]];
            }

            this.XsdTreeObj.Tree.NNodeTplFun = (a) => {
                switch (a.ExtData["XsdItmTypeStr"]) {
                    case "AttriObj":
                        a.ExtData.Icon = "xsd-icon-qjtx";
                        //xsd-icon-qjys
                        break;
                    case "ComplexObj":
                        a.ExtData.Icon = "xsd-icon-qjmx2";
                        break;
                    case "SimpleObj":
                        a.ExtData.Icon = "xsd-icon-qjmx1";
                        break;
                    case "EnumObj":
                        a.ExtData.Icon = "xsd-icon-qjmx1";
                        break;
                    case "EnumObjDef":
                        a.ExtData.Icon = "xsd-icon-qjjd";
                        break;
                    default:
                        a.ExtData.Icon = "xsd-icon-qjfz";
                        break;
                }
                //if (a.IsRoot) {

                //} else {
                    if (a.ExtData["Text"])
                        return [(
                            <span className="Hu-note Hu-pointer" onClick={() => { this.fun_NoteClick(a); } }>
                                {a.ExtData["Text"]}
                            </span>
                        )];
                    else {
                        return null;
                    }
               // }

            };
            
        }

        protected loadPage(callback?: () => any) {

            if (callback) {
                this.init(null);
                callback();
            }
        }

    }
    export class XsdPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class XsdPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactXsdPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("XSDPAGE", basewedPageFile.Web.BaseWebPageVm, XsdPageVm);

}

