var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../05tool/EditSpan"], function (require, exports, domFile, React, EditSpanFile) {
    "use strict";
    var domCore = domFile.Core;
    var ESpan = EditSpanFile.EditSpan.EditSpanReact;
    var ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
    var OrgMenu;
    (function (OrgMenu) {
        var OrgMenuAction = (function (_super) {
            __extends(OrgMenuAction, _super);
            function OrgMenuAction() {
                _super.apply(this, arguments);
            }
            return OrgMenuAction;
        }(domCore.DomAction));
        OrgMenu.OrgMenuAction = OrgMenuAction;
        var OrgMenuReact = (function (_super) {
            __extends(OrgMenuReact, _super);
            function OrgMenuReact() {
                _super.apply(this, arguments);
                this.state = new OrgMenuStates();
                this.EspanVMIndex = 0;
            }
            OrgMenuReact.prototype.pSender = function () {
                var _this = this;
                var menuOrg_theader = React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", {className: "acsWidth16"}, React.createElement("span", null, "菜单 / 组织机构")), React.createElement("th", null, React.createElement("span", null, "浙江省立同德医院"))));
                var NewNodePanel = React.createElement("div", {className: "Hm-modals-bg Hg-width Hg-max-width Hg-overflow-auto" + (this.props.Vm.IsModalShow ? " " : " hide")}, React.createElement("div", {className: "Hm-modals Hm-modals-shape Hg-relative "}, React.createElement("a", {className: "Hu-close Hu-pointer", onClick: function () { return _this.fun_ModalClick(); }}, React.createElement("i", {className: "fa fa-close"})), React.createElement("div", null, React.createElement("h4", null, "新增树节点"), React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {className: "required"}, "节点名称：")), React.createElement("div", {className: " Hu-input"}, React.createElement("input", {type: "text", placeholder: "请输入..."})))), React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-xs btn-primary"}, "确定")))));
                return React.createElement("table", {className: "table table-hover table-bordered table-striped Hm-table-tree"}, menuOrg_theader, this._initMenuOrgPanel(), NewNodePanel);
            };
            OrgMenuReact.prototype._initMenuOrgPanel = function () {
                var _this = this;
                return React.createElement("tbody", null, React.createElement("tr", {index: "1", className: true}, React.createElement("td", {className: "Hu-item-1" + (this.props.Vm.IsTdChange ? "acs-edit-check" : "")}, React.createElement("i", {className: "Hu-pointer fa fa-" + (this.props.Vm.IsTreeTableShow ? "plus-square" : "minus-square"), onClick: function () { return _this.fun_TreeTableClick(); }}), React.createElement(ESpan, {children: null, Vm: this.Em("报修管理")}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", {className: this.props.Vm.IsChecked ? "acs-td-checked" : " "}, React.createElement("input", {type: "checkbox", onClick: function () { _this.fun_IsChagneCheck(); }}))), React.createElement("tr", {index: "2", className: (this.props.Vm.IsTreeTableShow ? "hide" : "")}, React.createElement("td", {className: "Hu-item-2"}, React.createElement("i", {className: "Hu-pointer fa fa-" + (this.props.Vm.IsTreeTableShow1 ? "plus-square" : "minus-square"), onClick: function () { return _this.fun_TreeTableClick1(); }}), React.createElement(ESpan, {children: null, Vm: this.Em("基础信息")}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer"}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {index: "3", className: (this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") + (this.props.Vm.IsTreeNodeShow ? " hide" : "")}, React.createElement("td", {className: "Hu-item-3"}, React.createElement("i", {className: "fa fa-file-o Hu-pointer"}), React.createElement(ESpan, {children: null, Vm: this.Em("使用单位")}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer"}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {index: "4", className: (this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") + (this.props.Vm.IsTreeNodeShow ? " hide" : "")}, React.createElement("td", {className: "Hu-item-4"}, React.createElement("i", {className: "fa fa-square Hu-pointer"}), React.createElement(ESpan, {children: null, Vm: this.Em("新增")})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {index: "4", className: (this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") + (this.props.Vm.IsTreeNodeShow ? " hide" : "")}, React.createElement("td", {className: "Hu-item-4"}, React.createElement("i", {className: "fa fa-square Hu-pointer"}), React.createElement(ESpan, {children: null, Vm: this.Em("详情")})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {index: "4", className: (this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") + (this.props.Vm.IsTreeNodeShow ? " hide" : "")}, React.createElement("td", {className: "Hu-item-4"}, React.createElement("i", {className: "fa fa-square Hu-pointer"}), React.createElement(ESpan, {children: null, Vm: this.Em("编辑")})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {index: "3", className: (this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "")}, React.createElement("td", {className: "Hu-item-3"}, React.createElement("i", {className: "fa fa-file-o Hu-pointer"}), React.createElement(ESpan, {children: null, Vm: this.Em("用户管理")}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer"}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {index: "2", className: (this.props.Vm.IsTreeTableShow ? "hide" : "")}, React.createElement("td", {className: "Hu-item-2"}, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {children: null, Vm: this.Em("维修信息")}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer"}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {index: "2", className: (this.props.Vm.IsTreeTableShow ? "hide" : "")}, React.createElement("td", {className: "Hu-item-2"}, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {children: null, Vm: this.Em("设备信息")}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer"}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {index: "1"}, React.createElement("td", {className: "Hu-item-1"}, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {children: null, Vm: this.Em("弘正采购")}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer"}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {index: "1"}, React.createElement("td", {className: "Hu-item-1"}, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "会员信息" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer"}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {index: "1"}, React.createElement("td", {className: "Hu-item-1"}, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "新基础信息平台" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer"}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {index: "1"}, React.createElement("td", {className: "Hu-item-1"}, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "新权限管理" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer"}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))));
            };
            OrgMenuReact.prototype.fun_IsChagneCheck = function () {
                this.props.Vm.IsChecked = !this.props.Vm.IsChecked;
                this.forceUpdate();
            };
            OrgMenuReact.prototype.fun_ModalClick = function () {
                this.props.Vm.IsModalShow = !this.props.Vm.IsModalShow;
                this.forceUpdate();
            };
            OrgMenuReact.prototype.fun_TreeTableClick = function () {
                this.props.Vm.IsTreeTableShow = !this.props.Vm.IsTreeTableShow;
                this.forceUpdate();
            };
            OrgMenuReact.prototype.fun_TreeTableClick1 = function () {
                this.props.Vm.IsTreeTableShow1 = !this.props.Vm.IsTreeTableShow1;
                this.forceUpdate();
            };
            OrgMenuReact.prototype.fun_ESpanChange = function (ischange) {
                this.props.Vm.IsTdChange = ischange;
                this.props.Vm.forceUpdate("");
            };
            OrgMenuReact.prototype.Em = function (content, changeEvent, config) {
                this.EspanVMIndex++;
                if (config) {
                    config.Content = content;
                    if (changeEvent) {
                        config.ChangeEvent = changeEvent;
                    }
                }
                else {
                    config = { Content: content, ChangeEvent: changeEvent };
                }
                return this.props.Vm.getESpan("name" + this.EspanVMIndex, config);
            };
            OrgMenuReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return OrgMenuReact;
        }(domCore.DomReact));
        OrgMenu.OrgMenuReact = OrgMenuReact;
        var OrgMenuVm = (function (_super) {
            __extends(OrgMenuVm, _super);
            function OrgMenuVm() {
                _super.call(this);
                this.ReactType = OrgMenuReact;
                this.IsTreeTableShow = false;
                this.IsTreeTableShow1 = false;
                this.IsModalShow = false;
                this.IsTreeNodeShow = false;
                this.IsTdChange = false;
                this.IsChecked = false;
                this.ESpanDict = {};
                this.MetaShowData = {
                    Name: "分配菜单",
                    Content: " 为组织机构分配菜单 ",
                    List: ["张奇", "沈明明"]
                };
            }
            OrgMenuVm.prototype.getESpan = function (name, config) {
                var _espan = this.ESpanDict[name];
                if (_espan) {
                    return _espan;
                }
                else {
                    var _es = this.ESpanDict[name] = new ESpanVm(config);
                    return _es;
                }
            };
            return OrgMenuVm;
        }(domCore.DomVm));
        OrgMenu.OrgMenuVm = OrgMenuVm;
        var OrgMenuStates = (function (_super) {
            __extends(OrgMenuStates, _super);
            function OrgMenuStates() {
                _super.apply(this, arguments);
            }
            return OrgMenuStates;
        }(domCore.DomStates));
        OrgMenu.OrgMenuStates = OrgMenuStates;
        var OrgMenuProps = (function (_super) {
            __extends(OrgMenuProps, _super);
            function OrgMenuProps() {
                _super.apply(this, arguments);
            }
            return OrgMenuProps;
        }(domCore.DomProps));
        OrgMenu.OrgMenuProps = OrgMenuProps;
    })(OrgMenu = exports.OrgMenu || (exports.OrgMenu = {}));
});
