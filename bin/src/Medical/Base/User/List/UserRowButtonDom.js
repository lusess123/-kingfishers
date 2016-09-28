var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../05tool/Button"], function (require, exports, React, domFile, buttonFile) {
    "use strict";
    var domCore = domFile.Core;
    var UserRowButtonDom;
    (function (UserRowButtonDom) {
        var UserRowButtonDomAction = (function (_super) {
            __extends(UserRowButtonDomAction, _super);
            function UserRowButtonDomAction() {
                _super.apply(this, arguments);
            }
            return UserRowButtonDomAction;
        }(domCore.DomAction));
        UserRowButtonDom.UserRowButtonDomAction = UserRowButtonDomAction;
        var UserRowButtonDomReact = (function (_super) {
            __extends(UserRowButtonDomReact, _super);
            function UserRowButtonDomReact() {
                _super.apply(this, arguments);
                this.state = new UserRowButtonDomState();
            }
            UserRowButtonDomReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}, React.createElement("td", {colSpan: "1000", className: "ACT-ROW-BUTTON well ButtonBar ta1"}, this.props.Vm.BtnList.map(function (btn) {
                    return btn.intoDom();
                })));
            };
            UserRowButtonDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UserRowButtonDomReact;
        }(domCore.DomReact));
        UserRowButtonDom.UserRowButtonDomReact = UserRowButtonDomReact;
        var UserRowButtonDomVm = (function (_super) {
            __extends(UserRowButtonDomVm, _super);
            function UserRowButtonDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = UserRowButtonDomReact;
                this.BtnList = new Array();
                var btnVm1 = new buttonFile.ui.ButtonVm();
                btnVm1.DisplayName = "删除";
                btnVm1.IsNoBg = true;
                btnVm1.IconCss = "trash";
                btnVm1.Name = "del";
                var btnVm2 = new buttonFile.ui.ButtonVm();
                btnVm2.DisplayName = "详情";
                btnVm2.IsNoBg = true;
                btnVm2.IconCss = "table";
                btnVm2.Name = "view";
                var btnVm3 = new buttonFile.ui.ButtonVm();
                btnVm3.DisplayName = "编辑";
                btnVm3.IsNoBg = true;
                btnVm3.IconCss = "edit";
                btnVm3.Name = "update";
                this.BtnList.push(btnVm1);
                this.BtnList.push(btnVm2);
                this.BtnList.push(btnVm3);
                if (config) {
                    this.Row = config.Row;
                    this.UniId = config.UniId;
                    this.Row.RowButtonExpand.ExpandCustomFun = (function (vm) { _this.forceUpdate(""); });
                }
                this.BtnList.forEach(function (btn) {
                    btn.ClickFun = function (a) {
                        _this.emitAppEvent("medical/base/users/rowbtnclick", _this.UniId, a.Name, _this.Row.RowData.FID);
                    };
                });
            }
            return UserRowButtonDomVm;
        }(domCore.DomVm));
        UserRowButtonDom.UserRowButtonDomVm = UserRowButtonDomVm;
        var UserRowButtonDomState = (function (_super) {
            __extends(UserRowButtonDomState, _super);
            function UserRowButtonDomState() {
                _super.apply(this, arguments);
            }
            return UserRowButtonDomState;
        }(domCore.DomStates));
        UserRowButtonDom.UserRowButtonDomState = UserRowButtonDomState;
        var UserRowButtonDomProps = (function (_super) {
            __extends(UserRowButtonDomProps, _super);
            function UserRowButtonDomProps() {
                _super.apply(this, arguments);
            }
            return UserRowButtonDomProps;
        }(domCore.DomProps));
        UserRowButtonDom.UserRowButtonDomProps = UserRowButtonDomProps;
    })(UserRowButtonDom = exports.UserRowButtonDom || (exports.UserRowButtonDom = {}));
});
