var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../05tool/Button"], function (require, exports, React, domFile, buttonFile) {
    "use strict";
    var domCore = domFile.Core;
    var DepartRowButtonDom;
    (function (DepartRowButtonDom) {
        var DepartRowButtonDomAction = (function (_super) {
            __extends(DepartRowButtonDomAction, _super);
            function DepartRowButtonDomAction() {
                _super.apply(this, arguments);
            }
            return DepartRowButtonDomAction;
        }(domCore.DomAction));
        DepartRowButtonDom.DepartRowButtonDomAction = DepartRowButtonDomAction;
        var DepartRowButtonDomReact = (function (_super) {
            __extends(DepartRowButtonDomReact, _super);
            function DepartRowButtonDomReact() {
                _super.apply(this, arguments);
                this.state = new DepartRowButtonDomStates();
            }
            DepartRowButtonDomReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}, React.createElement("td", {colSpan: "1000", className: "ACT-ROW-BUTTON well ButtonBar"}, this.props.Vm.BtnList.map(function (a) {
                    return a.intoDom();
                })));
            };
            DepartRowButtonDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DepartRowButtonDomReact;
        }(domCore.DomReact));
        DepartRowButtonDom.DepartRowButtonDomReact = DepartRowButtonDomReact;
        var DepartRowButtonDomVm = (function (_super) {
            __extends(DepartRowButtonDomVm, _super);
            function DepartRowButtonDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DepartRowButtonDomReact;
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
                        _this.emitAppEvent("medical/base/department/rowbtnclick", _this.UniId, a.Name, _this.Row.RowData.FID);
                    };
                });
            }
            return DepartRowButtonDomVm;
        }(domCore.DomVm));
        DepartRowButtonDom.DepartRowButtonDomVm = DepartRowButtonDomVm;
        var DepartRowButtonDomStates = (function (_super) {
            __extends(DepartRowButtonDomStates, _super);
            function DepartRowButtonDomStates() {
                _super.apply(this, arguments);
            }
            return DepartRowButtonDomStates;
        }(domCore.DomStates));
        DepartRowButtonDom.DepartRowButtonDomStates = DepartRowButtonDomStates;
        var DepartRowButtonDomProps = (function (_super) {
            __extends(DepartRowButtonDomProps, _super);
            function DepartRowButtonDomProps() {
                _super.apply(this, arguments);
            }
            return DepartRowButtonDomProps;
        }(domCore.DomProps));
        DepartRowButtonDom.DepartRowButtonDomProps = DepartRowButtonDomProps;
    })(DepartRowButtonDom = exports.DepartRowButtonDom || (exports.DepartRowButtonDom = {}));
});
