import domFile = require("./../../../../01core/0Dom"); import React = require("react");
import ReactDOM = require("react-dom");
import iocFile = require("./../../../../01core/Ioc");

import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
//import iocFile = require("./../01core/Ioc"); 
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
export module AddMenuorButtonPage {

    export class AddMenuorButtonPageAction extends basewedPageFile.Web.BaseWebPageStates { public DataValue: string; public Id: string; public Vm: any; }

    export class AddMenuorButtonPageReact extends basewedPageFile.Web.BaseWebPageReact<AddMenuorButtonPageProps, AddMenuorButtonPageStates, AddMenuorButtonPageAction> implements domCore.IReact {
        public state = new AddMenuorButtonPageStates();
        public pSender(): React.ReactElement<any> {
            var _Panel;
            if (this.props.Vm.AddType == "3") {
                _Panel = <div className="panel-collapse">
                    <div className="Hm-workflow-tab">
                        <ul className="nav nav-tabs">
                            <li className={"nav-item Hu-pointer" + (this.props.Vm.TabCurrentIndex == 0 ? " active" : " ") } onClick={() => { this.fun_TabsClick(0) } }>添加子节点</li>
                            <li className={"nav-item Hu-pointer" + (this.props.Vm.TabCurrentIndex == 1 ? " active" : " ") } onClick={() => { this.fun_TabsClick(1) } }>添加按钮</li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className={"Hm-form clearfix" + (this.props.Vm.TabCurrentIndex == 0 ? "" : " hide ") }>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="Hu-label">
                                    <label className="required" >节点名称：</label>
                                </div>
                                <div className="Hu-input">
                                    <input className="Hg-width" type="text" value={this.props.Vm.NodeName} onChange={(a) => { this.onChangeNodeName(a) } }/>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="Hu-label">
                                    <label className="required" >节点权值：</label>
                                </div>
                                <div className="Hu-input">
                                    <input className="Hg-width" type="text" value={this.props.Vm.NodeValue} onChange={(a) => { this.onChangeNodeVaue(a) } } />
                                </div>
                            </div>
                            <div className="text-center"><a className="btn btn-sm btn-primary"  onClick={(a) => { this.AddNode(); } }>确定12</a></div>
                        </div>


                        <div className={"Hm-form  clearfix" + (this.props.Vm.TabCurrentIndex == 1 ? "" : " hide ") }>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="Hu-label"><label className="required" >按钮名称：</label></div>
                                <div className="Hu-input">
                                    <input className="Hg-width" type="text" value={this.props.Vm.ButtonName} onChange={(a) => { this.onChangeButtonName(a) } }/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="Hu-label">
                                    <label className="required" >按钮权值：</label>
                                </div>
                                <div className="Hu-input">
                                    <input className="Hg-width" type="text" value={this.props.Vm.ButtonValue} onChange={(a) => { this.onChangeButtonVaue(a) } } />
                                </div>
                            </div>
                            <div className="text-center"><a className="btn btn-sm btn-primary"  onClick={(a) => { this.AddButton(); } }>确定11</a></div>
                        </div>
                    </div>

                </div>;
            } else if (this.props.Vm.AddType == "1") {
                _Panel = <div className="panel-collapse">
                    <div className="Hm-workflow-tab">
                        <ul className="nav nav-tabs">
                            <li className="nav-item Hu-pointer active">添加子节点</li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className="Hm-form clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="Hu-label">
                                    <label className="required" >节点名称：</label>
                                </div>
                                <div className="Hu-input">
                                    <input className="Hg-width" type="text" value={this.props.Vm.NodeName} onChange={(a) => { this.onChangeNodeName(a) } } />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="Hu-label">
                                    <label className="required" >节点权值：</label>
                                </div>
                                <div className="Hu-input">
                                    <input className="Hg-width" classID="aa" type="text" value={this.props.Vm.NodeValue} onChange={(a) => { this.onChangeNodeVaue(a) } }/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center"><a className="btn btn-sm btn-primary"  onClick={(a) => { this.AddNode(); } }>确定12</a></div>
                </div>;
            } else {
                _Panel = <div className="panel-collapse">
                    <div className="tab-content">
                        <div className="Hm-workflow-tab">
                            <ul className="nav nav-tabs">
                                <li className="nav-item Hu-pointer active">添加按钮</li>
                            </ul>
                        </div>
                        <div className="tab-content">
                            <div className="Hm-form clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="Hu-label"><label className="required" >按钮名称：</label></div>
                                    <div className="Hu-input">
                                        <input className="Hg-width" type="text" value={this.props.Vm.ButtonName} onChange={(a) => { this.onChangeButtonName(a) } } />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="Hu-label">
                                        <label className="required" >按钮权值：</label>
                                    </div>
                                    <div className="Hu-input">
                                        <input className="Hg-width" type="text" value={this.props.Vm.ButtonValue} onChange={(a) => { this.onChangeButtonVaue(a) } } />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center"><a className="btn btn-sm btn-primary"  onClick={(a) => { this.AddButton(); } }>确定11</a></div>
                </div>;
            }
            return <div className="Hm-modals">
                <h4>新增</h4>
                <div>{_Panel}</div>
            </div >;
        }


        public AddNode() {
            this.props.Vm.AddMenu();
        }

        public AddButton() {
            this.props.Vm.AddButton();
        }

        public onChangeNodeName(a: React.FormEvent) {
            var _val = a.target["value"];
            this.props.Vm.NodeName = _val;
            this.props.Vm.forceUpdate("");
        }

        public onChangeNodeVaue(a: React.FormEvent) {
            var _val = a.target["value"];
            this.props.Vm.NodeValue = _val;
            this.props.Vm.forceUpdate("");
        }

        public onChangeButtonName(a: React.FormEvent) {
            var _val = a.target["value"]
            this.props.Vm.ButtonName = _val;
            this.props.Vm.forceUpdate("");
        }
        public onChangeButtonVaue(a: React.FormEvent) {
            var _val = a.target["value"]
            this.props.Vm.ButtonValue = _val;
            this.props.Vm.forceUpdate("");
        }

        public fun_TabsClick(num: number) {
            this.props.Vm.TabCurrentIndex = num;
            this.props.Vm.forceUpdate("");
        }
    }

    export interface IAddMenuorButtonPageConfig { }

    export class AddMenuorButtonPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = AddMenuorButtonPageReact;
        public AddType: string;
        public TabCurrentIndex: number;

        public NodeName: string;
        public NodeValue: string;
        public ButtonName: string;
        public ButtonValue: string;

        public constrctor() {
        }

        protected loadPage(callback?: () => any) {
            this.AddType = this.Param1;
            if (this.AddType == "1") {
                this.TabCurrentIndex = 0;
            } else if (this.AddType == "2") {
                this.TabCurrentIndex = 1;
            } else {
                this.TabCurrentIndex = 0;
            }
            callback();
        }


        public AddMenu() {
            this.SendPageActor({ ToPanelName: "", ToModuleName: "NewRightMainPage" }, { MenuName: this.NodeName, MenuValue: this.NodeValue, Type: "Node" });
            this.closePage();
        }

        public AddButton() {
            this.SendPageActor({ ToPanelName: "", ToModuleName: "NewRightMainPage" }, { MenuName: this.ButtonName, MenuValue: this.ButtonValue,Type: "Button" });
            this.closePage();
        }
    }

    export class AddMenuorButtonPageStates extends basewedPageFile.Web.BaseWebPageStates { }

    export class AddMenuorButtonPageProps extends basewedPageFile.Web.BaseWebPageProps<AddMenuorButtonPageVm> {

    }

    iocFile.Core.Ioc.Current().RegisterType("ADDNEWMENUPAGE", basewedPageFile.Web.BaseWebPageVm, AddMenuorButtonPageVm);
}