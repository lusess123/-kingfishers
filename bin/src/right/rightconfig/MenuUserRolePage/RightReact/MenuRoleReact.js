var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../01core/Url", "./../../../../05tool/EditSpan"], function (require, exports, domFile, React, urlFile, EditSpanFile) {
    "use strict";
    var domCore = domFile.Core;
    var ESpan = EditSpanFile.EditSpan.EditSpanReact;
    var ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
    var Menu;
    (function (Menu_1) {
        var MenuRoleReact = (function (_super) {
            __extends(MenuRoleReact, _super);
            function MenuRoleReact() {
                _super.apply(this, arguments);
                this.EspanVMIndex = 0;
            }
            MenuRoleReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tbody", {className: (this.props.Vm.IsMenuRoleBodyHide ? "hide" : "")}, this.props.Vm.MenuData.map(function (a) {
                    _this.props.Vm._arry = [];
                    _this.props.Vm.Level = 0;
                    return _this.iterate(a, _this.props.Vm._arry, _this.props.Vm.Level);
                }));
            };
            MenuRoleReact.prototype.iterate = function (a, _arry, Level) {
                var _this = this;
                var espanvm = new ESpanVm({
                    Content: a.MenuName, ChangeEvent: function (vm, ischage) {
                        _this.props.Vm.UpdateMenu(a, vm.Content);
                    }
                });
                var _arr = React.createElement("tr", {className: a.ParentVm == undefined || a.ParentVm.IsHidden == false ? "" : "hide"}, React.createElement("td", {className: this.tdclass(Level, a), style: this.props.Vm.thstyle}, React.createElement("i", {className: this.iclass(a), onClick: function () { _this.isHideChildern(a); }}, " "), React.createElement(ESpan, {Vm: this.Em(a.MenuName, function (c, b) {
                    _this.props.Vm.UpdateMenu(a, c.Content);
                }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.props.Vm.addMenuPage(a); }}), React.createElement("i", {className: "fa fa-times Hu-pointer", onClick: function () { _this.props.Vm.deleteMenu(a); }})), this.props.Vm.RoleData.map(function (b) {
                    return React.createElement("td", {className: _this.isCheck(a.FID, b.FID) ? "Hs-td-checked" : (b.ActionType == "Del" || a.ActionType == "Del" ? "Hs-delete" : (a.ActionType == "Add" || b.ActionType == "Add" ? "Hs-new-col" : (a.ActionType == "Update" || b.ActionType == "Update" ? "Hs-update" : "")))}, React.createElement("input", {type: "checkbox", checked: _this.isCheck(a.FID, b.FID), onChange: function (c) { return _this.changeCheck(b, a, null, c); }}));
                }));
                _arry.push(_arr);
                Level++;
                if (a.Children) {
                    a.Children.forEach(function (b) {
                        b.ParentVm = a;
                        _this.iterate(b, _arry, Level);
                    });
                }
                if (a.ButtonList) {
                    a.ButtonList.forEach(function (c) {
                        c.ParentVm = a;
                        _this.AddButton(c, _arry, Level);
                    });
                }
                return _arry;
            };
            MenuRoleReact.prototype.AddButton = function (BS, _arry, Level) {
                var _this = this;
                _arry.push(React.createElement("tr", {className: BS.ParentVm == undefined || BS.ParentVm.IsHidden == false ? "" : "hide", index: Level}, React.createElement("td", {className: "item-" + (Level + 1) + (BS.ActionType == "Add" ? " Hs-new-col" : (BS.ActionType == "Update" ? " Hs-update" : ""))}, React.createElement("i", {className: "fa fa-square Hu-pointer"}), React.createElement(ESpan, {children: null, Vm: this.Em(BS.ButtonName, function (c, b) {
                    _this.props.Vm.UpdateMenuButton(BS, c.Content);
                })})), this.props.Vm.RoleData.map(function (b) {
                    return React.createElement("td", {className: _this.isCheck(BS.FID, b.FID) ? "Hs-td-checked" : (b.ActionType == "Del" ? "hs-delete" : (BS.ActionType == "Add" ? "Hs-new-col" : (BS.ActionType == "Update" ? "Hs-update" : "")))}, React.createElement("input", {type: "checkbox", checked: _this.isCheck(BS.FID, b.FID), onChange: function (c) { return _this.changeCheck(b, null, BS, c); }}));
                })));
            };
            MenuRoleReact.prototype.tdclass = function (Level, a) {
                var classname = "Hu-item-" + (Level + 1) + (a.ActionType == "Del" ? " Hs-delete " : (a.ActionType == "Add" ? " Hs-new-col" : (a.ActionType == "Update" ? " Hs-update" : ""))) + this.props.Vm.thclass;
                return classname;
            };
            MenuRoleReact.prototype.iclass = function (a) {
                var classname = a.isLeaft ? "fa fa-file-o Hu-pointer" : ("Hu-pointer fa fa-" + (a.IsHidden ? "plus-square" : "minus-square"));
                return classname;
            };
            MenuRoleReact.prototype.otherclass = function (b, a) {
                var classname = b.ActionType == "Del" || a.ActionType == "Del" ? "Hs-delete" : (a.ActionType == "Add" || b.ActionType == "Add" ? "Hs-new-col" : (a.ActionType == "Update" || b.ActionType == "Update" ? "Hs-update" : ""));
                return;
            };
            MenuRoleReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            MenuRoleReact.prototype.isCheck = function (Menu, Role) {
                return this.props.Vm.fun_isCheckMenu(Menu, Role);
            };
            MenuRoleReact.prototype.isHideChildern = function (a) {
                a.IsHidden = !a.IsHidden;
                this.forceUpdate();
            };
            MenuRoleReact.prototype.EditSpanEvent = function (vm, isChange, a) {
                if (isChange) {
                    a.MenuName = vm.Content;
                }
            };
            MenuRoleReact.prototype.changeCheck = function (Role, Menu, button, event) {
                if (Menu != null && (Role.ActionType == "Del" || Menu.ActionType == "Del")) {
                    alert("该节点已被删除!");
                }
                else {
                    this.props.Vm.fun_changeCheck(Role, Menu, button, event);
                }
            };
            MenuRoleReact.prototype.Em = function (content, changeEvent, config) {
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
            //这要进行判断  看节点下面是不是 子节点 还是按钮
            MenuRoleReact.prototype.addMenu = function (a) {
                var _this = this;
                if (a.ActionType == "Del") {
                    alert("该节点已被删除");
                }
                else {
                    this.props.Vm.MenuEditData = a;
                    //首先将菜单节点展开
                    urlFile.Core.AkPost("/RightCloud/RightConfig/RoleexportMenu", { Menu: a.FID }, function (b) {
                        a.Children = b.MenuUserTable.MenuData.Children;
                        a.ButtonList = b.MenuUserTable.MenuData.ButtonList;
                        _this.forceUpdate();
                        if (a.Children && a.Children.length > 0) {
                            //有子节点  
                            urlFile.Core.AkUrl.Current().openUrl("$winADDMENUORBUTTONPAGE$" + 1 + "$", true);
                        }
                        else if (a.ButtonList && a.ButtonList.length > 0) {
                            //有按钮
                            urlFile.Core.AkUrl.Current().openUrl("$winADDMENUORBUTTONPAGE$" + 2 + "$", true);
                        }
                        else {
                            //两种情况
                            urlFile.Core.AkUrl.Current().openUrl("$winADDMENUORBUTTONPAGE$" + 3 + "$", true);
                        }
                    });
                }
                //urlFile.Core.AkUrl.Current().openUrl("$winNewNodePage$", true);
            };
            return MenuRoleReact;
        }(domCore.DomReact));
        Menu_1.MenuRoleReact = MenuRoleReact;
    })(Menu = exports.Menu || (exports.Menu = {}));
});
