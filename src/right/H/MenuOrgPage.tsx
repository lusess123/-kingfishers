import domFile = require("./../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");

import EditSpanFile = require("./../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
import RevealFile = require("./tool/Reveal");
import Reveal = RevealFile.Reveal.RevealReact;
import RevealVm = RevealFile.Reveal.RevealVm;

import alinkFile = require("./../../05tool/ALink");
import ALink = alinkFile.ui.ALinkReact;

import PaginationFile = require("./../../05tool/Pagination");
import  pageViewFile = require("./../../07data/PageView");

export module MenuOrgPage {
    export class MenuOrgPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class MenuOrgPageReact extends basewedPageFile.Web.BaseWebPageReact<MenuOrgPageProps, MenuOrgPageStates, MenuOrgPageAction> implements domCore.IReact {

        public state = new MenuOrgPageStates();

        public pSender(): React.ReactElement<any> {
            this.EspanVMIndex = 0;
            var menuPanel = <div className={"Hm-modals-bg Hg-width Hg-max-width" + (this.props.Vm.IsModalShow ? " show" : " hide") }>
                <div className="Hm-modals Hm-modals-shape Hg-relative">
                    <h4>新建菜单</h4>
                    <div className="Hm-form clearfix">
                        <div className="col-lg-4 col-sm-12 col-xs-12"><div className="pull-left Hu-label"><label className="form-control-label pull-right required">菜单名称：</label></div><div className="pull-left Hu-input"><input type="text" placeholder="请输入..."></input></div></div>
                        <a className="Hu-close Hu-pointer" onClick={() => this.fun_ModalClick() }><i className="fa fa-close"></i></a>
                    </div>

                    <div className="text-center"><a className="btn btn-xs btn-primary">提交</a></div>
                </div>
            </div>;

            var menuOrg_theader = <tr>
                <th><span>菜单 / 组织机构</span></th>
                <th><span>浙江省立同德医院</span></th>
            </tr>;


            return <div className="acsPaddingLR0-5 acsMarginT0-5 acsGrayBg">
                <div className="Hu-pointer" onClick={() => { this.fun_OpenUrl("df") } }><i className="fa fa-glass">角色筛选</i></div>
                        <div className="acs-tabs acs-grids">                            
                            <ul className="acs-tabs-titile">
                                <li className={"Hu-pointer" + (this.props.Vm.TabCurrentIndex == 0 ? " active":" ")} onClick={() => { this.fun_TabsClick(0)}}>为组织机构分配菜单权限</li>
                                <li className={"Hu-pointer" + (this.props.Vm.TabCurrentIndex == 1 ? " active":" ")} onClick={() => { this.fun_TabsClick(1) } }>菜单 / 角色 / 用户 关系</li>
                            </ul>
                            <div className="acs-tabs-content">
                                <div className={(this.props.Vm.TabCurrentIndex==0 ? "" : " hide") }>
                                    <div className="acs-table Hg-width">
                                        <table className="acs-table acs-table-tree">
                                            {menuOrg_theader}
                                            {this._initMenuOrgPanel() }
                                        </table>
                                    </div>                                    
                                    <div className="text-center">
                                        <a className="btn btn-sm btn-primary" onClick={() => { this.fun_OpenUrl2() } }>保存</a>
                                        <input type="button" value="保存" className="btn btn-sm pull-right" disabled="disabled"></input>
                                    </div>
                                </div>
                                <div className={(this.props.Vm.TabCurrentIndex == 1 ? "" : " hide") }>
                                {this._initPager() }
                                    <div className="acs-table Hg-width">
                                        <table className="acs-table Hm-table-tree">
                                            {this._initRole() }
                                            {this._initMenuRole() }
                                            {this._initRole1() }
                                            {this._initUserRole() }
                                        </table>
                                    </div>
                                    {this._initPager() }
                                    <div className="text-center">
                                        <a className="btn btn-xs btn-primary">确定</a>
                                    </div>
                                 </div>
                            </div>                           
                        </div>
                        {menuPanel}
            </div>;
        }


        private _initRevealShow(): React.ReactElement<any> {
            return <Reveal children={null} Vm={new RevealVm({ Title: "新建菜单", LabelName: "菜单名称:", IsModalShow: true }) } />;

        }

        public _initMenuOrgPanel(): React.ReactElement<any> {
            return <tbody>
                <tr index="1" className>
                    <td className={(this.props.Vm.IsTdChange ? "acs-edit-check" : "")}>
                        <i className={"Hu-pointer fa fa-" + (this.props.Vm.IsTreeTableShow ? "plus-square" : "minus-square") } onClick={() => this.fun_TreeTableClick() }></i>
                        <ESpan children={null} Vm={this.Em("报修管理") } />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick() } }></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td>
                </tr>

                <tr index="2" className={(this.props.Vm.IsTreeTableShow ? "hide" : "") }>
                    <td className="acsPaddingL2-2">
                        <i className={"Hu-pointer fa fa-" + (this.props.Vm.IsTreeTableShow1 ? "plus-square" : "minus-square") } onClick={() => this.fun_TreeTableClick1() }></i>
                        <ESpan children={null} Vm={this.Em("基础信息") } />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick(); } }></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td>
                </tr>

                <tr index="3" className={(this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") + (this.props.Vm.IsTreeNodeShow ? " hide" : "") }>
                    <td className="acsPaddingL3-8"><i className="fa fa-file-o Hu-pointer"></i>
                        <ESpan children={null} Vm={this.Em("使用单位") } />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick()}}></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td>
                </tr>

                <tr index="3" className={(this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") }>
                    <td className="acsPaddingL3-8"><i className="fa fa-file-o Hu-pointer"></i>
                        <ESpan children={null} Vm={this.Em("用户管理") } />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick() } }></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td>
                </tr>

                <tr index="2" className={(this.props.Vm.IsTreeTableShow ? "hide" : "") }>
                    <td className="acsPaddingL2-2"><i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan children={null} Vm={this.Em("维修信息") } />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick() } }></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td>
                </tr>

                <tr index="2" className={(this.props.Vm.IsTreeTableShow ? "hide" : "") }>
                    <td className="acsPaddingL2-2"><i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan children={null} Vm={this.Em("设备信息") } />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick() } }></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td>
                </tr>

                <tr index="1" >
                    <td>
                        <i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan children={null} Vm={this.Em("弘正采购") } />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick() } }></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td>
                </tr>

                <tr index="1" >
                    <td>
                        <i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "会员信息" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick() } }></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td>
                </tr>

                <tr index="1" >
                    <td>
                        <i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "新基础信息平台" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick() } }></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td>
                </tr>

                <tr index="1" >
                    <td>
                        <i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "新权限管理" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick() } }></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td>
                </tr>
            </tbody>;
        }

        private _initPager(): React.ReactElement<any> {
            return this.props.Vm.PagerObj.intoDom();
        }

        private _initMenuRole(): React.ReactElement<any> {
            return <tbody className={(this.props.Vm.IsTreeTableToggle ? "hide" : "") }>
                <tr index="1" className>
                    <td>
                        <i className={"Hu-pointer fa fa-" + (this.props.Vm.IsTreeTableShow ? "plus-square" : "minus-square") } onClick={() => this.fun_TreeTableClick() }></i>
                        <ESpan   Vm={new ESpanVm({ Content: "报修管理" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick() } }></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>

                <tr index="2" className={(this.props.Vm.IsTreeTableShow ? "hide" : "") }>
                    <td className="acsPaddingL2-2">
                        <i className={"Hu-pointer fa fa-" + (this.props.Vm.IsTreeTableShow1 ? "plus-square" : "minus-square") } onClick={() => this.fun_TreeTableClick1() }></i>
                        <ESpan   Vm={new ESpanVm({ Content: "基础信息" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick(); } }></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>

                <tr index="3" className={(this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") + (this.props.Vm.IsTreeNodeShow ? " hide" : "") }>
                    <td className="acsPaddingL3-8"><i className="fa fa-file-o Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "使用单位" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick();}}></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>

                <tr index="3" className={(this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") }>
                    <td className="acsPaddingL3-8"><i className="fa fa-file-o Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "用户管理" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick() } }></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>

                <tr index="2" className={(this.props.Vm.IsTreeTableShow ? "hide" : "") }>
                    <td className="acsPaddingL2-2"><i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "维修信息" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick() } }></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>

                <tr index="2" className={(this.props.Vm.IsTreeTableShow ? "hide" : "") }>
                    <td className="acsPaddingL2-2"><i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "设备信息" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick() } }></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>

                <tr index="1" >
                    <td>
                        <i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "弘正采购" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick() } }></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>

                <tr index="1" >
                    <td>
                        <i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "会员信息" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick() } }></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>

                <tr index="1" >
                    <td>
                        <i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "新基础信息平台" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick() } }></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>

                <tr index="1" >
                    <td>
                        <i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "新权限管理" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick() } }></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>
            </tbody>;
        }

        private _initRole(): React.ReactElement<any> {
            return <thead>
                <tr>
                    <th><span>菜单 / 角色 </span> <i className={"Hu-pointer fa fa-caret-" + (this.props.Vm.IsTreeTableToggle ? "up" :"down")} onClick={() => { this.fun_TreeTableToggle();}}></i></th>
                    <th><ESpan  children={null} Vm={this.Em("报修人员角色") }   /><span className="Hc-edit-spanV">EREUserRole</span></th>
                    <th><ESpan children={null} Vm={this.Em("维修人员角色") } /><span className="Hc-edit-spanV">EREServicemanRole</span></th>
                    <th><ESpan children={null} Vm={this.Em("科长") } /><span className="Hc-edit-spanV">ERESectionChiefRole</span></th>
                    <th><ESpan children={null} Vm={this.Em("总服务台人员角色") } /><span className="Hc-edit-spanV">EREFrontDesk StaffRole</span></th>
                    {this._initNewThList() }
                    <th><i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_AddTh() } }></i></th>
                </tr>
            </thead>;
        }
        private _initRole1(): React.ReactElement<any> {
            return <thead>
                <tr>
                    <th><span>角色 / 用户</span> <i className={"Hu-pointer fa fa-caret-" + (this.props.Vm.IsTreeTableToggle1 ? "up" : "down") } onClick={() => { this.fun_TreeTableToggle1(); } }></i></th>
                    <th><ESpan  children={null} Vm={new ESpanVm({ Content: "报修人员角色" }) }   /><span className="Hc-edit-spanV">EREUserRole</span></th>
                    <th><ESpan  children={null} Vm={new ESpanVm({ Content: "维修人员角色" }) }   /><span className="Hc-edit-spanV">EREServicemanRole</span></th>
                    <th><ESpan  children={null} Vm={new ESpanVm({ Content: "科长" }) }   /><span className="Hc-edit-spanV">ERESectionChiefRole</span></th>
                    <th><ESpan  children={null} Vm={new ESpanVm({ Content: "总服务台人员角色" }) }   /><span className="Hc-edit-spanV">EREFrontDesk StaffRole</span></th>
                    {this._initNewThList() }
                    <th><i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_AddTh() } }></i></th>
                </tr>
            </thead>;
        }

        private EspanVMIndex: number = 0;
        private Em(content: string, changeEvent?: EditSpanFile.EditSpan.IChangeEvent  ,config?: EditSpanFile.EditSpan.IEditSpanVm):ESpanVm
        {
            this.EspanVMIndex ++;
            if (config) {
                config.Content = content;
                if (changeEvent)
                {
                    config.ChangeEvent = changeEvent;
                }
            }
            else {
                config = {Content:content,ChangeEvent:changeEvent };
            }
            return this.props.Vm.getESpan("name" + this.EspanVMIndex ,config);
        }

        private _initUserRole(): React.ReactElement<any> {
            var addTr = <tr>
                <td><i className="fa fa-plus-circle Hu-pointer" onClick={() => this.fun_AddTr() }></i></td>
                <td><input type="checkbox" checked /></td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox" checked /></td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>
                {this.initNewTD() }
            </tr>;
            return <tbody className={(this.props.Vm.IsTreeTableToggle1 ? "hide" : "") }>
                <tr>
                    <td><ESpan  children={null} Vm={this.Em("我的秘书") }   /><span className="Hc-edit-spanH">mysecret</span></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>
                <tr>
                    <td><ESpan  children={null} Vm={this.Em("测试号100") }   /><span className="Hc-edit-spanH">测试号100</span></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>
                <tr>
                    <td className={(this.props.Vm.IsTdChange ? "acs-edit-check" : "") }><ESpan  children={null} Vm={this.Em("小猫", (vm, ischange) => { this.fun_ESpanChange(ischange); }) }   /><span className="Hc-edit-spanH">xiaomao</span></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>
                <tr className="acs-new-row">
                    <td><ESpan  children={null} Vm={new ESpanVm({ Content: "默认管理员" }) }   /><span className="Hc-edit-spanH">admin</span></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>
                {this._initNewTrList() }
                <tr>
                    <td><i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_AddTr() } }></i></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>
            </tbody>;
        }

        private _initNewThList(): React.ReactElement<any>[] {
            var _res = [];
            for (var i: number = 0; i < this.props.Vm.NewThIndex; i++) {
                _res.push(<th className="acs-new-col"><input type="text" placeholder="请输入角色名称..."/></th>);
            }
            return _res;
        }

        private _initNewTrList(): React.ReactElement<any>[] {
            var _arry = [];
            for (var i: number = 0; i < this.props.Vm.NewTrIndex; i++) {

                _arry.push(<tr className="acs-new-col">{this._initNewTrTDList() }</tr>);

            }
            return _arry;
        }

        private _initNewTrTDList(): React.ReactElement<any>[] {
            var _arry = [];
            _arry.push(<td><input type='text' placeholder='请输入用户名称...'/></td>);
            for (var i: number = 0; i < this.props.Vm.NewThIndex + 5; i++) {
                _arry.push(<td className="acs-new-row"><input type="checkbox"/></td>);
            }
            return _arry;
        }

        public initNewTD(): React.ReactElement<any>[] {

            var _arry = [];
            for (var i: number = 0; i < this.props.Vm.NewThIndex; i++) {
                _arry.push(<td><input type="checkbox"/></td>);
            }
            return _arry;
        };

        private fun_AddTh() {
            this.props.Vm.NewThIndex++;
            this.forceUpdate();
        }

        private fun_AddTr() {
            this.props.Vm.NewTrIndex++;
            this.forceUpdate();
        }


        private fun_TreeTableClick() {
            this.props.Vm.IsTreeTableShow = !this.props.Vm.IsTreeTableShow;
            this.forceUpdate();
        }
        private fun_TreeTableClick1() {
            this.props.Vm.IsTreeTableShow1 = !this.props.Vm.IsTreeTableShow1;
            this.forceUpdate();
        }

        private fun_DelTreeNodeClick() {
            this.props.Vm.IsTreeNodeShow = !this.props.Vm.IsTreeNodeShow;
            this.forceUpdate();
        }

        private fun_TabsClick(index) {
            this.props.Vm.TabCurrentIndex = index;
            this.forceUpdate();
        }

        private fun_ModalClick() {
            this.props.Vm.IsModalShow = !this.props.Vm.IsModalShow;
            this.forceUpdate();
        }

        private fun_TreeTableToggle() {
            this.props.Vm.IsTreeTableToggle = !this.props.Vm.IsTreeTableToggle;
            this.forceUpdate();
        }
        private fun_TreeTableToggle1() {
            this.props.Vm.IsTreeTableToggle1 = !this.props.Vm.IsTreeTableToggle1;
            this.forceUpdate();
        }

        private fun_OpenUrl(vals:string) {
            urlFile.Core.AkUrl.Current().openUrl("$winCustomColPage$" + vals + "$", true );
            //this.forceUpdate();
        } 

        private fun_OpenUrl2() {
            urlFile.Core.AkUrl.Current().openUrl("$MenuUserPage$");
            //this.forceUpdate();
        }

        private fun_ESpanChange(ischange:boolean)
        {
            this.props.Vm.IsTdChange = ischange;
            this.props.Vm.forceUpdate("");
        }

    }
    export class MenuOrgPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = MenuOrgPageReact;
        public RevealPanel = RevealVm;

        public IsTreeTableShow: boolean = false;
        public IsTreeTableShow1: boolean = false;
        public IsTdHoverShow: boolean = false;
        public IsTreeNodeShow: boolean;
        public IsModalShow: boolean = false;

        public IsTabShow: boolean = false;
        public IsTreeTableToggle: boolean = false;
        public IsTreeTableToggle1: boolean = false;

        public NewThIndex: number = 0;
        public NewTrIndex: number = 0;

        public PagerObj: PaginationFile.tool.PaginationVm;

        public ESpanVmTd1: ESpanVm;


        public IsTdChange: boolean = false;

        public TabCurrentIndex = 0;

        private ESpanDict: pageViewFile.data.IDict<ESpanVm> = {};

        public getESpan(name:string ,config: EditSpanFile.EditSpan.IEditSpanVm) {
            var _espan = this.ESpanDict[name];
            if (_espan) {
                return _espan;
            }
            else
            {
                var _es = this.ESpanDict[name] = new ESpanVm(config);
                return _es;
            }
        }

        public constructor() {
            super();
            var pagerVm = this.PagerObj = new PaginationFile.tool.PaginationVm();
            pagerVm.PageNo = 0;
            pagerVm.PageSize = 50;
            pagerVm.TotalCount = 5000;

            pagerVm.PageClickEvent = (pageIndex) => {
                //this.props.Vm.loadPageData(pageIndex);
                pagerVm.PageNo = pageIndex;
                pagerVm.IsChange = true;
                pagerVm.forceUpdate("");
            }


        }
    }
    export class MenuOrgPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class MenuOrgPageProps extends basewedPageFile.Web.BaseWebPageProps<MenuOrgPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("MENUORGPAGE", basewedPageFile.Web.BaseWebPageVm, MenuOrgPageVm);

}

