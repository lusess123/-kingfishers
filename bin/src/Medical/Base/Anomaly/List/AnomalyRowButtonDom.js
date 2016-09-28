var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../05tool/Button"], function (require, exports, React, domFile, buttonFile) {
    "use strict";
    var domCore = domFile.Core;
    var AnomalyRowButtonDom;
    (function (AnomalyRowButtonDom) {
        var AnomalyRowButtonDomAction = (function (_super) {
            __extends(AnomalyRowButtonDomAction, _super);
            function AnomalyRowButtonDomAction() {
                _super.apply(this, arguments);
            }
            return AnomalyRowButtonDomAction;
        }(domCore.DomAction));
        AnomalyRowButtonDom.AnomalyRowButtonDomAction = AnomalyRowButtonDomAction;
        var AnomalyRowButtonDomReact = (function (_super) {
            __extends(AnomalyRowButtonDomReact, _super);
            function AnomalyRowButtonDomReact() {
                _super.apply(this, arguments);
                this.state = new AnomalyRowButtonDomStates();
            }
            AnomalyRowButtonDomReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}, React.createElement("td", {colSpan: "1000", className: "ACT-ROW-BUTTON well ButtonBar"}, this.props.Vm.BtnList.map(function (btn) {
                    return btn.intoDom();
                })));
            };
            AnomalyRowButtonDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AnomalyRowButtonDomReact;
        }(domCore.DomReact));
        AnomalyRowButtonDom.AnomalyRowButtonDomReact = AnomalyRowButtonDomReact;
        var AnomalyRowButtonDomVm = (function (_super) {
            __extends(AnomalyRowButtonDomVm, _super);
            function AnomalyRowButtonDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = AnomalyRowButtonDomReact;
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
                        _this.emitAppEvent("medical/base/anomaly/rowbtnclick", _this.UniId, a.Name, _this.Row.RowData.FID);
                    };
                });
            }
            return AnomalyRowButtonDomVm;
        }(domCore.DomVm));
        AnomalyRowButtonDom.AnomalyRowButtonDomVm = AnomalyRowButtonDomVm;
        var AnomalyRowButtonDomStates = (function (_super) {
            __extends(AnomalyRowButtonDomStates, _super);
            function AnomalyRowButtonDomStates() {
                _super.apply(this, arguments);
            }
            return AnomalyRowButtonDomStates;
        }(domCore.DomStates));
        AnomalyRowButtonDom.AnomalyRowButtonDomStates = AnomalyRowButtonDomStates;
        var AnomalyRowButtonDomProps = (function (_super) {
            __extends(AnomalyRowButtonDomProps, _super);
            function AnomalyRowButtonDomProps() {
                _super.apply(this, arguments);
            }
            return AnomalyRowButtonDomProps;
        }(domCore.DomProps));
        AnomalyRowButtonDom.AnomalyRowButtonDomProps = AnomalyRowButtonDomProps;
    })(AnomalyRowButtonDom = exports.AnomalyRowButtonDom || (exports.AnomalyRowButtonDom = {}));
});
