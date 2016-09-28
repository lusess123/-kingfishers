var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../../01core/0Dom", "react", "./../../../../../05tool/EditSpan"], function (require, exports, domFile, React, EditSpanFile) {
    "use strict";
    var domCore = domFile.Core;
    var ESpan = EditSpanFile.EditSpan.EditSpanReact;
    var ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
    var Menu;
    (function (Menu) {
        var MenuOrgReact = (function (_super) {
            __extends(MenuOrgReact, _super);
            function MenuOrgReact() {
                _super.apply(this, arguments);
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
                a.IsHidden = !a.IsHidden;
                this.forceUpdate();
            };
            MenuOrgReact.prototype.isCheck = function (Org, Fid) {
                return this.props.Vm.fun_isCheck(Org, Fid);
            };
            MenuOrgReact.prototype.delMenu = function (a) {
                var flag = false;
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
                        this.props.Vm.fun_delMenu(a);
                    }
                }
                else if (a.ButtonList) {
                    alert("先删除子节点");
                }
                else {
                    this.props.Vm.fun_delMenu(a);
                }
            };
            MenuOrgReact.prototype.iterateBtn = function (a, isDelete, _arry, Level) {
                var _this = this;
                _arry.push(React.createElement("tr", null, React.createElement("td", {className: "item-" + (Level + 1) + (isDelete ? " acs-delete" : "")}, React.createElement("i", {className: "fa fa-square acsPointer"}, " "), React.createElement(ESpan, {Vm: new ESpanVm({ Content: a.ButtonName, ChangeEvent: function (vm, ischange) { _this.props.Vm.fun_updateBtn(a, vm.Content); } }), children: null})), this.props.Vm.OrgData.map(function (b) {
                    return React.createElement("td", {className: isDelete ? "acs-delete" : ""}, React.createElement("input", {type: "checkbox", value: b.FID, checked: _this.isCheck(a.Org, b.FID), onClick: function () { return _this.props.Vm.changeBtnState(a, b.FID); }}));
                })));
                return _arry;
            };
            MenuOrgReact.prototype.iterate = function (a, _arry, Level) {
                var _this = this;
                _arry.push(React.createElement("tr", null, React.createElement("td", {className: "item-" + (Level + 1) + (a.isDelete ? " acs-delete" : (a.FID ? "" : " acs-new-col"))}, React.createElement("i", {className: a.isLeaft ? "fa fa-file-o acsPointer" : ("acsPointer fa fa-" + (a.IsHidden ? "plus-square" : "minus-square")), onClick: function () { _this.isHideChildern(a); }}, " "), React.createElement(ESpan, {Vm: new ESpanVm({ Content: a.MenuName, ChangeEvent: function (vm, ischange) { _this.props.Vm.fun_updateMenu(a, vm.Content); } }), children: null}), React.createElement("i", {className: "fa fa-plus-circle acsPointer", onClick: function () { _this.props.Vm.fun_AddMenu(a); }}), React.createElement("i", {className: "fa fa-times acsPointer", onClick: function () { _this.delMenu(a); }})), this.props.Vm.OrgData.map(function (b) {
                    return React.createElement("td", {className: a.isDelete ? "acs-delete" : (b.FID && a.FID ? "" : "acs-new-row")}, React.createElement("input", {type: "checkbox", value: b.FID, checked: _this.isCheck(a.Org, b.FID), onClick: function () { return _this.props.Vm.changeState(a, b.FID); }}));
                })));
                Level++;
                if (a.IsHidden) { }
                else {
                    if (a.Children) {
                        a.Children.map(function (b) {
                            b.ParentVm = a;
                            _this.iterate(b, _arry, Level);
                        });
                    }
                    if (a.ButtonList) {
                        a.ButtonList.map(function (x) {
                            _this.iterateBtn(x, a.isDelete, _arry, Level);
                        });
                    }
                }
                return _arry;
            };
            MenuOrgReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MenuOrgReact;
        }(domCore.DomReact));
        Menu.MenuOrgReact = MenuOrgReact;
    })(Menu = exports.Menu || (exports.Menu = {}));
});
