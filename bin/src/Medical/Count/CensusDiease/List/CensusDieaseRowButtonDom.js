var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../05tool/Button"], function (require, exports, React, domFile, buttonFile) {
    "use strict";
    var domCore = domFile.Core;
    var CensusDieaseRowButtonDom;
    (function (CensusDieaseRowButtonDom) {
        var CensusDieaseRowButtonDomAction = (function (_super) {
            __extends(CensusDieaseRowButtonDomAction, _super);
            function CensusDieaseRowButtonDomAction() {
                _super.apply(this, arguments);
            }
            return CensusDieaseRowButtonDomAction;
        }(domCore.DomAction));
        CensusDieaseRowButtonDom.CensusDieaseRowButtonDomAction = CensusDieaseRowButtonDomAction;
        var CensusDieaseRowButtonDomReact = (function (_super) {
            __extends(CensusDieaseRowButtonDomReact, _super);
            function CensusDieaseRowButtonDomReact() {
                _super.apply(this, arguments);
                this.state = new CensusDieaseRowButtonDomStates();
            }
            CensusDieaseRowButtonDomReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}, React.createElement("td", {colSpan: "1000", className: "ACT-ROW-BUTTON well ButtonBar"}, this.props.Vm.BtnList.map(function (btn) {
                    return btn.intoDom();
                })));
            };
            CensusDieaseRowButtonDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return CensusDieaseRowButtonDomReact;
        }(domCore.DomReact));
        CensusDieaseRowButtonDom.CensusDieaseRowButtonDomReact = CensusDieaseRowButtonDomReact;
        var CensusDieaseRowButtonDomVm = (function (_super) {
            __extends(CensusDieaseRowButtonDomVm, _super);
            function CensusDieaseRowButtonDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = CensusDieaseRowButtonDomReact;
                this.UniId = "";
                if (config) {
                    this.Row = config.Row;
                    this.Row.RowButtonExpand.ExpandCustomFun = (function (vm) { _this.forceUpdate(""); });
                    this.UniId = config.UniId;
                }
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
                        _this.emitAppEvent("medical/base/CensusDiease/rowbtnclick", _this.UniId, a.Name, _this.Row.RowData.FID);
                    };
                });
            }
            return CensusDieaseRowButtonDomVm;
        }(domCore.DomVm));
        CensusDieaseRowButtonDom.CensusDieaseRowButtonDomVm = CensusDieaseRowButtonDomVm;
        var CensusDieaseRowButtonDomStates = (function (_super) {
            __extends(CensusDieaseRowButtonDomStates, _super);
            function CensusDieaseRowButtonDomStates() {
                _super.apply(this, arguments);
            }
            return CensusDieaseRowButtonDomStates;
        }(domCore.DomStates));
        CensusDieaseRowButtonDom.CensusDieaseRowButtonDomStates = CensusDieaseRowButtonDomStates;
        var CensusDieaseRowButtonDomProps = (function (_super) {
            __extends(CensusDieaseRowButtonDomProps, _super);
            function CensusDieaseRowButtonDomProps() {
                _super.apply(this, arguments);
            }
            return CensusDieaseRowButtonDomProps;
        }(domCore.DomProps));
        CensusDieaseRowButtonDom.CensusDieaseRowButtonDomProps = CensusDieaseRowButtonDomProps;
    })(CensusDieaseRowButtonDom = exports.CensusDieaseRowButtonDom || (exports.CensusDieaseRowButtonDom = {}));
});
