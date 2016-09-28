var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../01core/Url", "./../../../../05tool/EditSpan"], function (require, exports, domFile, React, urlFile, EditSpanFile) {
    "use strict";
    var domCore = domFile.Core;
    var ESpan = EditSpanFile.EditSpan.EditSpanReact;
    var Menu;
    (function (Menu_1) {
        var MenuOrgReact = (function (_super) {
            __extends(MenuOrgReact, _super);
            function MenuOrgReact() {
                _super.apply(this, arguments);
                this.EspanVMIndex = 0;
            }
            MenuOrgReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tbody", {className: (this.props.Vm.IsMenuRoleBodyHide ? "hide" : "")}, this.props.Vm.MenuData.map(function (a) {
                    _this.props.Vm._arry = [];
                    _this.props.Vm.Level = 0;
                    return _this.iterate(a, _this.props.Vm._arry, _this.props.Vm.Level);
                }));
            };
            MenuOrgReact.prototype.isHideChildern = function (a) {
                //this.exportMenu(a);
                this.props.Vm.MenuOrgexport(a);
            };
            MenuOrgReact.prototype.exportMenu = function (a) {
                a.IsHidden = !a.IsHidden;
                this.forceUpdate();
            };
            MenuOrgReact.prototype.isCheck = function (Org, Fid) {
                return this.props.Vm.fun_isCheck(Org, Fid);
            };
            MenuOrgReact.prototype.delMenu = function (a) {
                var _this = this;
                var flag = false;
                urlFile.Core.AkPost("/RightCloud/RightConfig/CheckHasChild", { MenuID: a.FID }, function (b) {
                    if (b) {
                        alert("先删除子节点");
                    }
                    else {
                        if (a.Children) {
                            for (var num = 0; num < a.Children.length; num++) {
                                if (a.Children[num].isDelete != true) {
                                    flag = true;
                                    break;
                                }
                            }
                            if (flag) {
                                alert("先删除子节点");
                            }
                            else {
                                _this.props.Vm.fun_delMenu(a);
                            }
                        }
                        else {
                            _this.props.Vm.fun_delMenu(a);
                        }
                    }
                });
            };
            MenuOrgReact.prototype.iterateBtn = function (a, isDelete, _arry, Level) {
                var _this = this;
                _arry.push(React.createElement("tr", {className: a.ParentVm == undefined || a.ParentVm.IsHidden == false ? "" : "hide"}, React.createElement("td", {className: "Hu-item-" + (Level + 1) + (isDelete ? " Hs-delete" : "") + (a.ActionType == "Add" ? " Hs-new-row " : (a.ActionType == "Update" ? " Hs-update " : " "))}, React.createElement("i", {className: "fa fa-square Hu-pointer"}, " "), React.createElement(ESpan, {Vm: this.Em(a.ButtonName, function (c, b) {
                    _this.props.Vm.fun_updateBtn(a, c.Content);
                }), children: null})), this.props.Vm.OrgData.map(function (b) {
                    return React.createElement("td", {className: _this.isCheck(a.FID, b.FID) ? "Hs-td-checked" : (isDelete ? "Hs-delete" : (a.ActionType == "Update" ? "Hs-update" : (a.ActionType == "Add" ? "Hs-new-row" : "")))}, React.createElement("input", {type: "checkbox", value: b.FID, checked: _this.isCheck(a.FID, b.FID), onChange: function (c) { return _this.changeCheck(b, null, a, c); }}));
                })));
                return _arry;
            };
            MenuOrgReact.prototype.iterate = function (a, _arry, Level) {
                var _this = this;
                _arry.push(React.createElement("tr", {className: a.ParentVm == undefined || a.ParentVm.IsHidden == false ? "" : "hide"}, React.createElement("td", {className: "Hu-item-" + (Level + 1) + (a.isDelete ? " Hs-delete" : (a.ActionType == "Add" ? " Hs-new-row " : (a.ActionType == "Update" ? " Hs-update " : " ")))}, React.createElement("i", {className: a.isLeaft ? "fa fa-file-o Hu-pointer" : ("Hu-pointer fa fa-" + (a.IsHidden ? "plus-square" : "minus-square")), onClick: function () { _this.isHideChildern(a); }}, " "), React.createElement(ESpan, {Vm: this.Em(a.MenuName, function (c, b) {
                    _this.props.Vm.fun_updateMenu(a, c.Content);
                }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.props.Vm.fun_AddMenu(a); }}), React.createElement("i", {className: "fa fa-times Hu-pointer", onClick: function () { _this.delMenu(a); }})), this.props.Vm.OrgData.map(function (b) {
                    return React.createElement("td", {className: _this.isCheck(a.FID, b.FID) ? "Hs-td-checked" : (a.isDelete ? "Hs-delete" : (a.ActionType == "Add" ? " Hs-new-row " : (a.ActionType == "Update" ? " Hs-update " : " ")))}, React.createElement("input", {type: "checkbox", value: b.FID, checked: _this.isCheck(a.FID, b.FID), onChange: function (c) { return _this.changeCheck(b, a, null, c); }}));
                })));
                Level++;
                if (a.Children) {
                    a.Children.map(function (b) {
                        b.ParentVm = a;
                        _this.iterate(b, _arry, Level);
                    });
                }
                if (a.ButtonList) {
                    a.ButtonList.map(function (x) {
                        x.ParentVm = a;
                        _this.iterateBtn(x, a.isDelete, _arry, Level);
                    });
                }
                return _arry;
            };
            MenuOrgReact.prototype.Em = function (content, changeEvent, config) {
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
                return this.props.Vm.getESpan("orgname" + this.EspanVMIndex, config);
            };
            MenuOrgReact.prototype.changeCheck = function (Org, Menu, button, event) {
                if (Menu != null && Menu.ActionType == "Del") {
                    alert("该节点已被删除");
                }
                else {
                    this.props.Vm.fun_changeCheck(Org, Menu, button, event);
                }
            };
            MenuOrgReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MenuOrgReact;
        }(domCore.DomReact));
        Menu_1.MenuOrgReact = MenuOrgReact;
    })(Menu = exports.Menu || (exports.Menu = {}));
});
