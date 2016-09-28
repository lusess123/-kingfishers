var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../02col/03selector/TreeSelector", "./../../../02col/02Mulite/Combo", "./../../../02col/01single/Text", "./../../../02col/01single/TextArea"], function (require, exports, domFile, React, treeSelectorFile, comboFile, textFile, textAreaFile) {
    "use strict";
    var domCore = domFile.Core;
    var Right;
    (function (Right) {
        var MenuNewMasterAction = (function (_super) {
            __extends(MenuNewMasterAction, _super);
            function MenuNewMasterAction() {
                _super.apply(this, arguments);
            }
            return MenuNewMasterAction;
        }(domCore.DomAction));
        Right.MenuNewMasterAction = MenuNewMasterAction;
        var MenuNewMasterReact = (function (_super) {
            __extends(MenuNewMasterReact, _super);
            function MenuNewMasterReact() {
                _super.apply(this, arguments);
                this.state = new MenuNewMasterStates();
            }
            MenuNewMasterReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.MenuData[fName] = _val;
                this.forceUpdate();
            };
            MenuNewMasterReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            MenuNewMasterReact.prototype.inputMenuName = function () {
                var _this = this;
                if (!this.props.Vm.MenuNameTextVm) {
                    var _vm = this.getInputVm(this.props.Vm.MenuData.MenuName, "notNull");
                    this.props.Vm.MenuNameTextVm = _vm;
                    _vm.onChangeHandle(function (str) {
                        _this.props.Vm.MenuData.MenuName = str;
                        return true;
                    });
                }
                return this.props.Vm.MenuNameTextVm.intoDom();
            };
            MenuNewMasterReact.prototype.inputMenuKey = function () {
                var _this = this;
                if (!this.props.Vm.MenuKeyTextVm) {
                    var _vm = this.getInputVm(this.props.Vm.MenuData.Key, "notNull");
                    this.props.Vm.MenuKeyTextVm = _vm;
                    _vm.onChangeHandle(function (str) {
                        _this.props.Vm.MenuData.Key = str;
                        return true;
                    });
                }
                return this.props.Vm.MenuKeyTextVm.intoDom();
            };
            MenuNewMasterReact.prototype.getInputVm = function (val, legalKind, fun) {
                var _bean = new textFile.ui.TextVm();
                _bean.dataValueSet(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            MenuNewMasterReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "菜单", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse" + (this.props.Vm.IsMasterHide ? " hide" : "")}, React.createElement("div", {className: "content active "}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "菜单名:")), React.createElement("div", {className: "Hu-input"}, this.inputMenuName())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "上级菜单:")), React.createElement("div", {className: "Hu-input"}, this.props.Vm.ParentSelector.intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "权值:")), React.createElement("div", {className: "Hu-input"}, this.inputMenuKey())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "菜单类别:")), React.createElement("div", {className: "Hu-input"}, this.props.Vm.MenuTypeCombo.intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "排序编号:")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", placeholder: "..", type: "text", value: this.props.Vm.MenuData.OrderId, onChange: function (e) { _this.fun_OnChange(e, "OrderId"); }}))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "菜单描述:")), React.createElement("div", {className: "Hu-input"}, this.props.Vm.intoTextAreaVm().intoDom())))))));
            };
            MenuNewMasterReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MenuNewMasterReact;
        }(domCore.DomReact));
        Right.MenuNewMasterReact = MenuNewMasterReact;
        var MenuNewMasterVm = (function (_super) {
            __extends(MenuNewMasterVm, _super);
            // public IsDetailHide: boolean;
            function MenuNewMasterVm() {
                _super.call(this);
                this.ReactType = MenuNewMasterReact;
                this.MenuButtonRowList = new Array();
                this.ParentSelector = new treeSelectorFile.ui.TreeSingleSelectorVm();
                this.MenuTypeCombo = new comboFile.ui.ComboVm();
                var itemList = [];
                itemList.push({ Value: 0, Text: "产品" });
                itemList.push({ Value: 1, Text: "模块" });
                itemList.push({ Value: 2, Text: "页面" });
                this.MenuTypeCombo.ItemList = itemList;
                this.MenuData = { FID: "", RightDesc: "", MenuKindId: "", MenuKindName: "", MenuName: "", ParentName: "", ParentId: "", OrderId: 0, Key: "", MenuButtonList: [] };
                this.MenuData.MenuButtonList.push({ FID: "", FName: "新增", FKey: "Insert", FValue: "2", OrderId: "1" });
                this.MenuData.MenuButtonList.push({ FID: "", FName: "编辑", FKey: "Update", FValue: "4", OrderId: "2" });
                this.MenuData.MenuButtonList.push({ FID: "", FName: "删除", FKey: "Delete", FValue: "8", OrderId: "3" });
                this.MenuData.MenuButtonList.push({ FID: "", FName: "详情", FKey: "Detail", FValue: "16", OrderId: "4" });
            }
            MenuNewMasterVm.prototype.intoTextAreaVm = function () {
                var _this = this;
                if (!this.RightAreaVm) {
                    this.RightAreaVm = new textAreaFile.ui.TextAreaVm();
                    this.RightAreaVm.vmDataValueSet(this.MenuData.RightDesc);
                    this.RightAreaVm.onChangeHandle(function (str) {
                        _this.MenuData.RightDesc = str;
                        return true;
                    });
                }
                return this.RightAreaVm;
            };
            MenuNewMasterVm.prototype.legal = function () {
                var l1 = this.MenuNameTextVm.legal();
                var l2 = this.MenuKeyTextVm.legal();
                var _res = l1 && l2;
                this.MenuButtonRowList.forEach(function (r) {
                    _res = r.legal() && _res;
                });
                return _res;
            };
            MenuNewMasterVm.prototype.initData = function (data) {
                // debugger 
                // alert(data.Name);
                this.ParentSelector.dataValueSet(data.fid);
                this.ParentSelector.Text = data.Name;
                this.forceUpdate("");
            };
            return MenuNewMasterVm;
        }(domCore.DomVm));
        Right.MenuNewMasterVm = MenuNewMasterVm;
        var MenuNewMasterStates = (function (_super) {
            __extends(MenuNewMasterStates, _super);
            function MenuNewMasterStates() {
                _super.apply(this, arguments);
            }
            return MenuNewMasterStates;
        }(domCore.DomStates));
        Right.MenuNewMasterStates = MenuNewMasterStates;
        var MenuNewMasterProps = (function (_super) {
            __extends(MenuNewMasterProps, _super);
            function MenuNewMasterProps() {
                _super.apply(this, arguments);
            }
            return MenuNewMasterProps;
        }(domCore.DomProps));
        Right.MenuNewMasterProps = MenuNewMasterProps;
    })(Right = exports.Right || (exports.Right = {}));
});
