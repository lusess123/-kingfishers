import domFile = require("./../../01core/0Dom"); import React = require("react");

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

import PaginationFile = require("./../../05tool/Pagination");

export module MenuUserPage {
    export class MenuUserPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class MenuUserPageReact extends basewedPageFile.Web.BaseWebPageReact<MenuUserPageProps, MenuUserPageStates, MenuUserPageAction> implements domCore.IReact {

        public state = new MenuUserPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="acsPaddingLR0-5 acsMarginT0-5 acsGrayBg acs-grids">
                <div className="acs-rightCloud-text">用户/角色/菜单 关系</div>
                <div className="acs-table">
                    <table className="acs-table acs-table-tree">
                        {this._initRole() }
                        {this._initMenuRole() }
                        {this._initRole() }
                        {this._initUserRole() }
                    </table>
                    {this._initPager() }
                </div>
            </div>;
        }

        private _initPager(): React.ReactElement<any> {
            return this.props.Vm.PagerObj.intoDom();
        }

        private _initMenuRole(): React.ReactElement<any> {
            return <tbody>
                <tr index="1" className>
                    <td>
                        <i className={"Hu-pointer fa fa-" + (this.props.Vm.IsTreeTableShow ? "plus-square" : "minus-square") } onClick={() => this.fun_TreeTableClick() }></i>
                        <ESpan   Vm={new ESpanVm({ Content: "报修管理" }) } children={null}     />

                    </td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>

                <tr index="2" className={(this.props.Vm.IsTreeTableShow ? "hide" : "") }>
                    <td className="acsPaddingL2-2">
                        <i className={"Hu-pointer fa fa-" + (this.props.Vm.IsTreeTableShow1 ? "plus-square" : "minus-square") } onClick={() => this.fun_TreeTableClick1() }></i>
                        <ESpan   Vm={new ESpanVm({ Content: "基础信息" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_RevealShowClick(); } }></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>

                <tr index="3" className={(this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") + (this.props.Vm.IsTreeNodeShow ? " hide" : "") }>
                    <td className="acsPaddingL3-8"><i className="fa fa-file-o Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "使用单位" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer"></i>
                        <i className="fa fa-times Hu-pointer"  onClick={() => { this.fun_DelTreeNodeClick() } }></i>
                    </td>
                    <td><input type="checkbox" />
                    </td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>

                <tr index="3" className={(this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") }>
                    <td className="acsPaddingL3-8"><i className="fa fa-file-o Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "用户管理" }) } children={null}     />
                    </td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>

                <tr index="2" className={(this.props.Vm.IsTreeTableShow ? "hide" : "") }>
                    <td className="acsPaddingL2-2"><i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "维修信息" }) } children={null}     />
                    </td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>

                <tr index="2" className={(this.props.Vm.IsTreeTableShow ? "hide" : "") }>
                    <td className="acsPaddingL2-2"><i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "设备信息" }) } children={null}     />
                    </td>
                    <td><input type="checkbox"  /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>

                <tr index="1" >
                    <td>
                        <i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "弘正采购" }) } children={null}     />
                    </td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>

                <tr index="1" >
                    <td>
                        <i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "会员信息" }) } children={null}     />
                    </td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>

                <tr index="1" >
                    <td>
                        <i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "新基础信息平台" }) } children={null}     />
                    </td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>

                <tr index="1" >
                    <td>
                        <i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "新权限管理" }) } children={null}     />
                    </td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>
            </tbody>;
        }

        private _initRole(): React.ReactElement<any> {
            return <thead>
                <tr>
                    <th><span>菜单 / 角色 / 用户</span></th>
                    <th><ESpan  children={null} Vm={new ESpanVm({ Content: "报修人员角色" }) }   /></th>
                    <th><ESpan  children={null} Vm={new ESpanVm({ Content: "维修人员角色" }) }   /></th>
                    <th><ESpan  children={null} Vm={new ESpanVm({ Content: "科长111" }) }   /></th>
                    <th><ESpan  children={null} Vm={new ESpanVm({ Content: "总服务台人员角色" }) }   /></th>
                    {this._initNewThList() }
                    <th><i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_AddTh() } }></i></th>
                </tr>
            </thead>;
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
            return <tbody>
                <tr>
                    <td><ESpan  children={null} Vm={new ESpanVm({ Content: "我的秘书" }) }   /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>
                <tr>
                    <td><ESpan  children={null} Vm={new ESpanVm({ Content: "测试号100" }) }   /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>
                <tr>
                    <td><ESpan  children={null} Vm={new ESpanVm({ Content: "小猫" }) }   /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    {this.initNewTD() }
                </tr>
                <tr>
                    <td><ESpan  children={null} Vm={new ESpanVm({ Content: "默认管理员" }) }   /></td>
                    <td className="hide"><input type="checkbox" /></td>
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
                _res.push(<th><input type="text" placeholder="请输入角色名称..."/></th>);
            }
            return _res;
        }

        private _initNewTrList(): React.ReactElement<any>[] {
            var _arry = [];
            for (var i: number = 0; i < this.props.Vm.NewTrIndex; i++) {

                _arry.push(<tr>{this._initNewTrTDList() }</tr>);

            }
            return _arry;
        }

        private _initNewTrTDList(): React.ReactElement<any>[] {
            var _arry = [];
            _arry.push(<td><input type='text' placeholder='请输入用户名称...'/></td>);
            for (var i: number = 0; i < this.props.Vm.NewThIndex + 5; i++) {
                _arry.push(<td><input type="checkbox"/></td>);
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

        private fun_RevealShowClick() {
            this.props.Vm.RevealPanel.prototype.IsModalShow = true;
            this.forceUpdate();
        }
    }
    export class MenuUserPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = MenuUserPageReact;
        public RevealPanel = RevealVm;

        public NewThIndex: number = 0;
        public NewTrIndex: number = 0;

        public IsTreeTableShow: boolean = true;
        public IsTreeTableShow1: boolean = true;
        public IsTreeNodeShow: boolean = false;

        public PagerObj: PaginationFile.tool.PaginationVm;


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
    export class MenuUserPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class MenuUserPageProps extends basewedPageFile.Web.BaseWebPageProps<MenuUserPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("MENUUSERPAGE", basewedPageFile.Web.BaseWebPageVm, MenuUserPageVm);

}

