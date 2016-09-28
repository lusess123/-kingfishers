var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/0Dom", "./../../../05tool/Button"], function (require, exports, React, domFile, buttonFile) {
    "use strict";
    var domCore = domFile.Core;
    var DetectionListRowButtonDom;
    (function (DetectionListRowButtonDom) {
        var DetectionListRowButtonDomAction = (function (_super) {
            __extends(DetectionListRowButtonDomAction, _super);
            function DetectionListRowButtonDomAction() {
                _super.apply(this, arguments);
            }
            return DetectionListRowButtonDomAction;
        }(domCore.DomAction));
        DetectionListRowButtonDom.DetectionListRowButtonDomAction = DetectionListRowButtonDomAction;
        var DetectionListRowButtonDomReact = (function (_super) {
            __extends(DetectionListRowButtonDomReact, _super);
            function DetectionListRowButtonDomReact() {
                _super.apply(this, arguments);
                this.state = new DetectionListRowButtonDomStates();
            }
            DetectionListRowButtonDomReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}, React.createElement("td", {colSpan: "1000", className: "ACT-ROW-BUTTON well ButtonBar"}, this.props.Vm.BtnList.map(function (btn) {
                    return btn.intoDom();
                })));
            };
            DetectionListRowButtonDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DetectionListRowButtonDomReact;
        }(domCore.DomReact));
        DetectionListRowButtonDom.DetectionListRowButtonDomReact = DetectionListRowButtonDomReact;
        var DetectionListRowButtonDomVm = (function (_super) {
            __extends(DetectionListRowButtonDomVm, _super);
            function DetectionListRowButtonDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DetectionListRowButtonDomReact;
                this.UniId = "";
                if (config) {
                    this.Row = config.Row;
                    this.Row.RowButtonExpand.ExpandCustomFun = (function (vm) { _this.forceUpdate(""); });
                    this.UniId = config.UniId;
                }
                this.BtnList = new Array();
                var btnVm1 = new buttonFile.ui.ButtonVm();
                btnVm1.DisplayName = "总检";
                btnVm1.IsNoBg = true;
                btnVm1.IconCss = "trash";
                btnVm1.Name = "del";
                var btnVm2 = new buttonFile.ui.ButtonVm();
                btnVm2.DisplayName = "强制总检";
                btnVm2.IsNoBg = true;
                btnVm2.IconCss = "table";
                btnVm2.Name = "view";
                this.BtnList.push(btnVm1);
                this.BtnList.push(btnVm2);
                this.BtnList.forEach(function (a) {
                    a.ClickFun = function () {
                        _this.emitAppEvent("medical/base/anomaly/rowbtnclick", _this.UniId, a.Name, _this.Row.RowData.FID);
                    };
                });
            }
            return DetectionListRowButtonDomVm;
        }(domCore.DomVm));
        DetectionListRowButtonDom.DetectionListRowButtonDomVm = DetectionListRowButtonDomVm;
        var DetectionListRowButtonDomStates = (function (_super) {
            __extends(DetectionListRowButtonDomStates, _super);
            function DetectionListRowButtonDomStates() {
                _super.apply(this, arguments);
            }
            return DetectionListRowButtonDomStates;
        }(domCore.DomStates));
        DetectionListRowButtonDom.DetectionListRowButtonDomStates = DetectionListRowButtonDomStates;
        var DetectionListRowButtonDomProps = (function (_super) {
            __extends(DetectionListRowButtonDomProps, _super);
            function DetectionListRowButtonDomProps() {
                _super.apply(this, arguments);
            }
            return DetectionListRowButtonDomProps;
        }(domCore.DomProps));
        DetectionListRowButtonDom.DetectionListRowButtonDomProps = DetectionListRowButtonDomProps;
    })(DetectionListRowButtonDom = exports.DetectionListRowButtonDom || (exports.DetectionListRowButtonDom = {}));
});
