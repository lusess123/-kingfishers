var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../05tool/Button"], function (require, exports, domFile, React, buttonFile) {
    "use strict";
    var domCore = domFile.Core;
    var MedicalBaseRowButtonDom;
    (function (MedicalBaseRowButtonDom) {
        var MedicalBaseRowButtonDomAction = (function (_super) {
            __extends(MedicalBaseRowButtonDomAction, _super);
            function MedicalBaseRowButtonDomAction() {
                _super.apply(this, arguments);
            }
            return MedicalBaseRowButtonDomAction;
        }(domCore.DomAction));
        MedicalBaseRowButtonDom.MedicalBaseRowButtonDomAction = MedicalBaseRowButtonDomAction;
        var MedicalBaseRowButtonDomReact = (function (_super) {
            __extends(MedicalBaseRowButtonDomReact, _super);
            function MedicalBaseRowButtonDomReact() {
                _super.apply(this, arguments);
            }
            MedicalBaseRowButtonDomReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}, React.createElement("td", {colSpan: "1000", className: "ACT-ROW-BUTTON well ButtonBar"}, this.props.Vm.BtnList.map(function (btn) {
                    return btn.intoDom();
                })));
            };
            MedicalBaseRowButtonDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MedicalBaseRowButtonDomReact;
        }(domCore.DomReact));
        MedicalBaseRowButtonDom.MedicalBaseRowButtonDomReact = MedicalBaseRowButtonDomReact;
        var MedicalBaseRowButtonDomVm = (function (_super) {
            __extends(MedicalBaseRowButtonDomVm, _super);
            function MedicalBaseRowButtonDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = MedicalBaseRowButtonDomReact;
                this.UniId = "";
                if (config) {
                    this.Row = config.Row;
                    this.Row.RowButtonExpand.ExpandCustomFun = (function (vm) { _this.forceUpdate(""); });
                    this.UniId = config.UniId;
                }
                this.initBtnList();
            }
            MedicalBaseRowButtonDomVm.prototype.initBtnList = function () {
                var _this = this;
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
                this.BtnList.forEach(function (a) {
                    a.ClickFun = function () {
                        _this.btnFunCommond(a.Name);
                    };
                });
            };
            MedicalBaseRowButtonDomVm.prototype.btnFunCommond = function (name) {
            };
            return MedicalBaseRowButtonDomVm;
        }(domCore.DomVm));
        MedicalBaseRowButtonDom.MedicalBaseRowButtonDomVm = MedicalBaseRowButtonDomVm;
        var MedicalBaseRowButtonDomStates = (function (_super) {
            __extends(MedicalBaseRowButtonDomStates, _super);
            function MedicalBaseRowButtonDomStates() {
                _super.apply(this, arguments);
            }
            return MedicalBaseRowButtonDomStates;
        }(domCore.DomStates));
        MedicalBaseRowButtonDom.MedicalBaseRowButtonDomStates = MedicalBaseRowButtonDomStates;
        var MedicalBaseRowButtonDomProps = (function (_super) {
            __extends(MedicalBaseRowButtonDomProps, _super);
            function MedicalBaseRowButtonDomProps() {
                _super.apply(this, arguments);
            }
            return MedicalBaseRowButtonDomProps;
        }(domCore.DomProps));
        MedicalBaseRowButtonDom.MedicalBaseRowButtonDomProps = MedicalBaseRowButtonDomProps;
    })(MedicalBaseRowButtonDom = exports.MedicalBaseRowButtonDom || (exports.MedicalBaseRowButtonDom = {}));
});
