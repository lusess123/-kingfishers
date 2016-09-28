// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import baseWebPageFile = require("./../../../../04page/BaseWebPage");
import dataFile = require("./../Data");
import textFile = require("./../../../../02col/01single/Text");
import React = require("react");

import ReactDOM = require("react-dom");

import comboFile = require("./../../../../02col/02Mulite/Combo");

export module xbgUpdatePage {
    export class xbgUpdatePageAction extends baseWebPageFile.Web.BaseWebPageAction {
    }

    export class xbgUpdatePageReact extends baseWebPageFile.Web.BaseWebPageReact<xbgUpdatePageProps, xbgUpdatePageStates, xbgUpdatePageAction> implements domFile.Core.IReact {

        public state = new xbgUpdatePageStates();

        private inputRoleName(): React.ReactElement<any> {
            if (!this.props.Vm.RoleNameTextVm) {
                var _vm = this.getInputVm(this.props.Vm.RoleData.RoleName, "notNull");
                this.props.Vm.RoleNameTextVm = _vm;

                _vm.onChangeHandle((str) => {
                    this.props.Vm.RoleData.RoleName = str;
                    return true;
                });
            }

            return this.props.Vm.RoleNameTextVm.intoDom();
        }

        private inputRoleSign(): React.ReactElement<any> {
            if (!this.props.Vm.RoleSignTextVm) {
                var _vm = this.getInputVm(this.props.Vm.RoleData.RoleSign, "notNull");
                this.props.Vm.RoleSignTextVm = _vm;

                _vm.onChangeHandle((str) => {
                    this.props.Vm.RoleData.RoleSign = str;
                    return true;
                });
            }
            return this.props.Vm.RoleSignTextVm.intoDom();
        }


        private getInputVm(val: string, legalKind: string, fun?: Function): textFile.ui.TextVm {

            var _bean = new textFile.ui.TextVm();
            _bean.dataValueSet(val);
            _bean.LegalObj.Kind = legalKind;

            return _bean;
        }

        public pSender(): React.ReactElement<any> {
            return (<div className="1">
                <div className="panel" >
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a onClick={() => { this.fun_titleMasterClick(); } }>角色<i className={"fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down") }></i></a>
                        </h4>
                    </div>
                    <div className="panel-collapse collapse in">
                        <div className={"content active " + (this.props.Vm.IsMasterHide ? "hide" : "") }>
                            <div className="Hm-form clearfix" >
                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <div className="col-xs-4">
                                        <label className="pull-right">角色标识：</label>
                                    </div>
                                    <div className="col-xs-8">
                                        {this.inputRoleSign() }
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <div className="col-xs-4">
                                        <label className="pull-right">角色名称：</label>
                                    </div>
                                    <div className="col-xs-8">
                                        {this.inputRoleName() }
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <div className="col-xs-4">
                                        <label className="pull-right">组织机构：</label>
                                    </div>
                                    <div className="col-xs-8">
                                        {this.props.Vm.FControlUnitNameCombo.intoDom() }
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <div className="col-xs-4">
                                        <label className="pull-right">描述：</label>
                                    </div>
                                    <div className="col-xs-8">
                                        <textarea placeholder=".."></textarea>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <div className="col-xs-4">
                                        <label className="pull-right">日期：</label>
                                    </div>
                                    <div className="col-xs-8">
                                        <input ref="date" placeholder="请选择日期..."
                                            value={this.props.Vm.reactDataValueGet() }>
                                        </input>
                                    </div>
                                </div>
                                <span className="btn btn-primary" onClick={() => { this.Submits(); } }>保存</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            );
        }
        //是否隐藏div
        private fun_titleMasterClick() {
            this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
            this.forceUpdate();

        }
        //提交
        public Submits() {
            var roleName = this.props.Vm.RoleData.RoleName;
            var date = this.props.Vm.RoleData.Date;
            var roleSign = this.props.Vm.RoleData.RoleSign;
            var ff = this.props.Vm.FControlUnitNameCombo.vmDataValueGet();

            urlFile.Core.AkPost("/RightCloud/RightConfig/GroupSubmit", { RoleName: roleName, Date: date, RoleSign: roleSign }, (data) => {
                alert("dd");
                alert(ff);
                utilFile.Core.Util.Noty("数据编辑成功");
                //urlFile.Core.AkUrl.Current().openUrl('', false, () => { })
                //页面刷新
                urlFile.Core.AkUrl.Current().openUrl(
                    "$xbgTestPage$",
                    false,
                    () => { }
                );
            })
        }
        //日期控件
        protected pComponentDidMount(): void {
            super.pComponentDidMount();
            var _val = this.props.Vm.reactDataValueGet();

            var __this = this;
            utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/lhgcalendar/lhgcalendar.min.js", "/AtawStatic/lib/03Extend/lhgcalendar/skins/lhgcalendar.css"], function () {
                var _$dom = __this.fGetDateDom();
                _$dom.calendar({
                    format: "yyyy-MM-dd",
                    btnBar: false,
                    onSetDate: function () {
                        __this.props.Vm.RoleData.Date = this.getDate('date');//获取时间的值
                        return false;
                    }
                });
            });
            __this.fGetDateDom().addClass("runcode");
        };
        private fGetDateDom(): JQuery {
            var _reactObj = this.refs["date"];
            var _dom = ReactDOM.findDOMNode(_reactObj);
            var _$dom = $(_dom);
            return _$dom;
        }

    }




    export class xbgUpdatePageVm extends baseWebPageFile.Web.BaseWebPageVm {
        public ReactType = xbgUpdatePageReact;
        public ListData: dataFile.Role.RolePagerListData;
        public RoleData: dataFile.Role.IRoleData;
        public RoleNameTextVm: textFile.ui.TextVm;
        public RoleSignTextVm: textFile.ui.TextVm;
        public IsMasterHide: boolean;
        public FControlUnitNameCombo: comboFile.ui.ComboVm;

        constructor() {
            super();
            this.RoleData = { RoleID: "", RoleSign: "", RoleName: "", FControlUnitName: "11", Description: "", FControlUnitID: "11", Date: "" };
            this.FControlUnitNameCombo = new comboFile.ui.ComboVm();
            var items = [];
            items.push({ Value: 1, Text: "你好" });
            items.push({ Value: 2, Text: "他好" });
            items.push({ Value: 3, Text: "我好" });
            this.FControlUnitNameCombo.ItemList = items;


        }

        public initData() {
            this.ListData = { Pager: { PageNo: 0, PageSize: 2, TotalCount: 0, TableName: "", IsASC: false, DataTime: null, SortName: "" }, List: [] };
        }

        
    }
    export class xbgUpdatePageStates extends baseWebPageFile.Web.BaseWebPageStates {
    }
    export class xbgUpdatePageProps extends baseWebPageFile.Web.BaseWebPageProps<xbgUpdatePageVm>{
    }

    iocFile.Core.Ioc.Current().RegisterType("xbgUpdatePage", baseWebPageFile.Web.BaseWebPageVm, xbgUpdatePageVm);
}