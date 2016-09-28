import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");


export module OrgTree {
    export class OrgTreeAction extends domCore.DomAction {
    }

    export class OrgTreeReact extends domCore.DomReact<OrgTreeProps, OrgTreeStates, OrgTreeAction> implements domCore.IReact {

        public state = new OrgTreeStates();

        public pSender(): React.ReactElement<any> {

            return <div>
            <div>组织机构</div>
            <div className="Hc-tree-naiv Hz-scroll Hg-overflow-auto">
                    {this._initOrgTree()}
                    </div>
                </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

        private fun_del()
        {
            this.props.Vm.AddName = null;
            this.forceUpdate();
        }

        private fAddLi(): React.ReactElement<any>
        {
            if (this.props.Vm.AddName) {
                return <li className="Hg-relative Hu-item  acsFadeInLeftAnimate ">
                                    <a className="Hu-pointer Hu-title Hu-none"><span>{this.props.Vm.AddName}</span>
                                    <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick(); } }></i>
                                    <i className="fa fa-times Hu-pointer"  onClick={() => { this.fun_del(); } }></i>
                            </a>
                    </li>;
            }
            else
            {
                return null;
            }
        }


        public _initOrgTree(): React.ReactElement<any> {
            return <ul className="nav Hu-prototype">
                    <li className="Hg-relative Hu-item  acsFadeInLeftAnimate ">
                        <a className="Hu-pointer Hu-title Hu-none">
                        <i className={"fa  fa-" + (this.props.Vm.IsTreeNodeShow ? "minus-circle" : "plus-circle") } onClick={() => { this.fun_TreeNodeShow() } }></i>
                        <span>杭州信使网络科技有限公司</span>
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick(); } }></i>
                        <i className="fa fa-times Hu-pointer"  onClick={() => { this.fun_DelTreeNodeClick() } }></i>
                        </a>
                        <ul className={"nav Hu-prototype " +(this.props.Vm.IsTreeNodeShow ? "" :" hide")}>
                            <li className="Hg-relative Hu-item  acsFadeInLeftAnimate ">
                            <a className="Hu-pointer Hu-title Hu-none"><span>测试中心</span>
                            <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick(); } }></i>
                            <i className="fa fa-times Hu-pointer"  onClick={() => { this.fun_DelTreeNodeClick() } }></i>
                            </a>
                            </li>
                            <li className="Hg-relative Hu-item  acsFadeInLeftAnimate ">
                             <a className="Hu-pointer Hu-title Hu-none">
                             <i className={"fa  fa-" + (!this.props.Vm.IsNode1Show ? "minus-circle" : "plus-circle") } onClick={() => { this.fun_TreeNodeShow1() } }></i>
                            <span>信使测试</span>
                            <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick(); } }></i>
                            <i className="fa fa-times Hu-pointer"  onClick={() => { this.fun_DelTreeNodeClick() } }></i>
                                </a>
                             <ul className={"nav nav-1 " + (this.props.Vm.IsNode1Show ? "hide" : "") }>
                                     <li className="Hg-relative Hu-item  acsFadeInLeftAnimate ">
                                    <a className="Hu-pointer Hu-title Hu-none">
                                    <span>上海商务有限公司</span>
                                    <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick(); } }></i>
                                    <i className="fa fa-times Hu-pointer"  onClick={() => { this.fun_DelTreeNodeClick() } }></i>
                                        </a>
                                         </li>
                                     <li className="Hg-relative Hu-item  acsFadeInLeftAnimate ">
                                    <a className="Hu-pointer Hu-title Hu-none"><span>计量测试</span>
                                    <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick(); } }></i>
                                    <i className="fa fa-times Hu-pointer"  onClick={() => { this.fun_DelTreeNodeClick() } }></i>
                                        </a>
                                         </li>
                                         {this.fAddLi()}
                                    

                                  </ul>
                            </li>
                            <li className="Hg-relative Hu-item  acsFadeInLeftAnimate ">
                            
                            <a className="Hu-pointer Hu-title Hu-none">
                            <i className={"fa  fa-" + (!this.props.Vm.IsNode2Show ? "minus-circle" : "plus-circle") } onClick={() => { this.fun_TreeNodeShow2() } }></i>
                            <span>测试网络</span>
                                <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick(); } }></i>
                                <i className="fa fa-times Hu-pointer"  onClick={() => { this.fun_DelTreeNodeClick() } }></i>
                                </a>
                          
                            <ul className={"nav nav-1 " + (this.props.Vm.IsNode2Show ? "hide" : "") }>
                                   <li className="Hg-relative Hu-item  acsFadeInLeftAnimate ">
                                   
                                    <a className="Hu-pointer Hu-title Hu-none"><span>测试</span>
                                         <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick(); } }></i>
                                         <i className="fa fa-times Hu-pointer"  onClick={() => { this.fun_DelTreeNodeClick() } }></i>
                                        </a>
                                      
                                        </li>
                             </ul>
                                </li>
                         <li className="Hg-relative Hu-item  acsFadeInLeftAnimate ">
                          
                            <a className="Hu-pointer Hu-title Hu-none"><span>进销存总公司</span>
                                <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick(); } }></i>
                                <i className="fa fa-times Hu-pointer"  onClick={() => { this.fun_DelTreeNodeClick() } }></i>
                                </a>
                            
                            </li>
                         <li className="Hg-relative Hu-item  acsFadeInLeftAnimate ">                            
                            <a className="Hu-pointer Hu-title Hu-none"><span>浙江移动商城</span>
                                <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick(); } }></i>
                                <i className="fa fa-times Hu-pointer"  onClick={() => { this.fun_DelTreeNodeClick() } }></i>
                                </a>                            
                            </li>
                        </ul>
                    </li>
                </ul>;
        }

        public fun_TreeNodeShow() {
            this.props.Vm.IsTreeNodeShow = !this.props.Vm.IsTreeNodeShow;
            this.forceUpdate();
        }
        public fun_TreeNodeShow1() {
            this.props.Vm.IsNode1Show = !this.props.Vm.IsNode1Show;
            this.forceUpdate();
        }
        public fun_TreeNodeShow2() {
            this.props.Vm.IsNode2Show = !this.props.Vm.IsNode2Show;
            this.forceUpdate();
        }
        public fun_ModalClick() {
            urlFile.Core.AkUrl.Current().openUrl("$winNewOrgPageS$" );
           
        }
        private fun_DelTreeNodeClick() {
            this.props.Vm.IsTreeNode3Show = !this.props.Vm.IsTreeNode3Show;
            this.forceUpdate();
        }
    }

    export class OrgTreeVm extends domCore.DomVm {
        public ReactType = OrgTreeReact;

        public IsTreeNodeShow: boolean = true;
        public IsNode1Show: boolean = false;
        public IsNode2Show: boolean = false;
        public IsModalShow: boolean = false;
        public IsTreeNode3Show: boolean;

        public AddName: string = null;


        public constructor()
        {
            super();
            this.MetaShowData = {
                Name: "组织树导航组件",
                Content: " 可以对以前的树组件扩展，也可以自己重新写 ",
                List: ["张奇", "王梦辉"]
            };

        }

        public addNodeByName (name:string)
        {
            this.AddName = name;
            this.forceUpdate("");
        }

    }
    export class OrgTreeStates extends domCore.DomStates {
    }


    export class OrgTreeProps extends domCore.DomProps<OrgTreeVm>{
    }



}


