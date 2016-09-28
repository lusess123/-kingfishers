var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../02col/02Mulite/Combo", "./../../../02col/01single/Text"], function (require, exports, domFile, React, comboFile, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var Right;
    (function (Right) {
        var MenuUpdateMasterAction = (function (_super) {
            __extends(MenuUpdateMasterAction, _super);
            function MenuUpdateMasterAction() {
                _super.apply(this, arguments);
            }
            return MenuUpdateMasterAction;
        }(domCore.DomAction));
        Right.MenuUpdateMasterAction = MenuUpdateMasterAction;
        var MenuUpdateMasterReact = (function (_super) {
            __extends(MenuUpdateMasterReact, _super);
            function MenuUpdateMasterReact() {
                _super.apply(this, arguments);
                this.state = new MenuUpdateMasterStates();
            }
            MenuUpdateMasterReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.MenuData[fName] = _val;
                this.forceUpdate();
            };
            MenuUpdateMasterReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            MenuUpdateMasterReact.prototype.inputMenuName = function () {
                var _this = this;
                var _vm = this.getInputVm(this.props.Vm.MenuData.MenuName, "notNull");
                this.props.Vm.MenuNameTextVm = _vm;
                _vm.onChangeHandle(function (str) {
                    _this.props.Vm.MenuData.MenuName = str;
                    return true;
                });
                return _vm.intoDom();
            };
            MenuUpdateMasterReact.prototype.inputMenuKey = function () {
                var _this = this;
                var _vm = this.getInputVm(this.props.Vm.MenuData.Key, "notNull");
                this.props.Vm.MenuKeyTextVm = _vm;
                _vm.onChangeHandle(function (str) {
                    _this.props.Vm.MenuData.Key = str;
                    _this.props.Vm.modifyParentKeyValue(str);
                    return true;
                });
                return _vm.intoDom();
            };
            MenuUpdateMasterReact.prototype.getInputVm = function (val, legalKind, fun) {
                var _bean = new textFile.ui.TextVm();
                _bean.setOriValue(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            MenuUpdateMasterReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "1"}, React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "菜单", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse" + (this.props.Vm.IsMasterHide ? " hide" : "")}, React.createElement("div", {className: "content active "}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "菜单名:")), React.createElement("div", {className: "Hu-input"}, this.inputMenuName())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "上级菜单: ")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.MenuData.ParentName))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", null, "权值:")), React.createElement("div", {className: "Hu-input"}, this.inputMenuKey())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "菜单类别:")), React.createElement("div", {className: "Hu-input"}, this.props.Vm.MenuTypeCombo.intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "排序编号:")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", placeholder: "..", type: "text", value: this.props.Vm.MenuData.OrderId, onChange: function (e) { _this.fun_OnChange(e, "OrderId"); }}))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "菜单描述:")), React.createElement("div", {className: "Hu-input"}, React.createElement("textarea", {placeholder: "..", value: this.props.Vm.MenuData.RightDesc, onChange: function (e) { _this.fun_OnChange(e, "RightDesc"); }})))))))));
            };
            MenuUpdateMasterReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MenuUpdateMasterReact;
        }(domCore.DomReact));
        Right.MenuUpdateMasterReact = MenuUpdateMasterReact;
        var MenuUpdateMasterVm = (function (_super) {
            __extends(MenuUpdateMasterVm, _super);
            // public IsDetailHide: boolean;
            function MenuUpdateMasterVm(config) {
                _super.call(this);
                this.ReactType = MenuUpdateMasterReact;
                this.OrderOgi = 0;
                this.UniId = "";
                this.fIsChangeRow = false;
                // this.ParentSelector = new treeSelectorFile.ui.TreeSingleSelectorVm();
                this.MenuTypeCombo = new comboFile.ui.ComboVm();
                var itemList = [];
                itemList.push({ Value: 0, Text: "产品" });
                itemList.push({ Value: 1, Text: "模块" });
                itemList.push({ Value: 2, Text: "页面" });
                this.MenuTypeCombo.ItemList = itemList;
                if (config) {
                    this.MenuData = config.MenuData;
                    this.OrderOgi = this.MenuData.OrderId;
                    this.DescOgi = this.MenuData.RightDesc;
                    this.MenuTypeCombo.dataValueSet(this.MenuData.MenuKindId);
                    if (config.UniId) {
                        this.UniId = config.UniId;
                    }
                }
                //this.MenuData = { FID: "", RightDesc: "", MenuKindId: "", MenuKindName: "", MenuName: "", ParentName: "", ParentId: "", OrderId: 0, Key: "", MenuButtonList: [] };
                //this.MenuData.MenuButtonList.push({ FID: "", FName: "新增", FKey: "Insert", FValue: "2", OrderId: "1" });
                //this.MenuData.MenuButtonList.push({ FID: "", FName: "编辑", FKey: "Update", FValue: "4", OrderId: "2" });
                //this.MenuData.MenuButtonList.push({ FID: "", FName: "删除", FKey: "Delete", FValue: "8", OrderId: "3" });
                //this.MenuData.MenuButtonList.push({ FID: "", FName: "详情", FKey: "Detail", FValue: "16", OrderId: "4" });
            }
            MenuUpdateMasterVm.prototype.modifyParentKeyValue = function (val) {
                this.emitAppEvent("modifyParentKeyValue", this.UniId, val);
            };
            MenuUpdateMasterVm.prototype.legal = function () {
                var l1 = this.MenuNameTextVm.legal();
                var l2 = this.MenuKeyTextVm.legal();
                var _res = l1 && l2;
                //this.MenuButtonRowList.forEach((r) => {
                //    _res = r.legal() && _res;
                //    //var _d = r.getData();
                //    //alert(JSON.stringify(_d));
                //});
                //alert(JSON.stringify(this.getData()));
                return _res;
            };
            MenuUpdateMasterVm.prototype.getData = function (isDetailChange) {
                var _this = this;
                var _obj = {};
                //菜单名称
                this.MenuNameTextVm.getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.MenuName = val;
                    }
                });
                //父节点
                //this.ParentSelector.setChangeValFun((isChange, val) => {
                //    if (isChange) {
                //        this.fIsChangeRow = true;
                //        _obj.ParentId = val;
                //    }
                //});
                //权值
                this.MenuKeyTextVm.getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.Key = val;
                    }
                });
                //菜单类别
                this.MenuTypeCombo.getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.MenuKindId = val;
                    }
                });
                //排序编号
                if (this.MenuData.OrderId != this.OrderOgi) {
                    this.fIsChangeRow = true;
                    _obj.OrderId = this.MenuData.OrderId;
                }
                //描述
                if (this.MenuData.RightDesc != this.DescOgi) {
                    this.fIsChangeRow = true;
                    _obj.RightDesc = this.MenuData.RightDesc;
                }
                //  debugger
                //if (this.MenuData.DeleteButtonList.length > 0)
                //{
                //    _obj.DeleteButtonList = this.MenuData.DeleteButtonList;
                //}
                if (this.fIsChangeRow || isDetailChange) {
                    _obj.FID = this.MenuData.FID;
                }
                this.fIsChangeRow = false;
                return _obj;
            };
            return MenuUpdateMasterVm;
        }(domCore.DomVm));
        Right.MenuUpdateMasterVm = MenuUpdateMasterVm;
        var MenuUpdateMasterStates = (function (_super) {
            __extends(MenuUpdateMasterStates, _super);
            function MenuUpdateMasterStates() {
                _super.apply(this, arguments);
            }
            return MenuUpdateMasterStates;
        }(domCore.DomStates));
        Right.MenuUpdateMasterStates = MenuUpdateMasterStates;
        var MenuUpdateMasterProps = (function (_super) {
            __extends(MenuUpdateMasterProps, _super);
            function MenuUpdateMasterProps() {
                _super.apply(this, arguments);
            }
            return MenuUpdateMasterProps;
        }(domCore.DomProps));
        Right.MenuUpdateMasterProps = MenuUpdateMasterProps;
    })(Right = exports.Right || (exports.Right = {}));
});
