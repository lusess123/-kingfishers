var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../05tool/Button"], function (require, exports, React, domFile, buttonFile) {
    "use strict";
    var domCore = domFile.Core;
    var CensusDoctorRowButtonDom;
    (function (CensusDoctorRowButtonDom) {
        var CensusDoctorRowButtonDomAction = (function (_super) {
            __extends(CensusDoctorRowButtonDomAction, _super);
            function CensusDoctorRowButtonDomAction() {
                _super.apply(this, arguments);
            }
            return CensusDoctorRowButtonDomAction;
        }(domCore.DomAction));
        CensusDoctorRowButtonDom.CensusDoctorRowButtonDomAction = CensusDoctorRowButtonDomAction;
        var CensusDoctorRowButtonDomReact = (function (_super) {
            __extends(CensusDoctorRowButtonDomReact, _super);
            function CensusDoctorRowButtonDomReact() {
                _super.apply(this, arguments);
                this.state = new CensusDoctorRowButtonDomStates();
            }
            CensusDoctorRowButtonDomReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}, React.createElement("td", {colSpan: "1000", className: "ACT-ROW-BUTTON well ButtonBar"}, this.props.Vm.BtnList.map(function (btn) {
                    return btn.intoDom();
                })));
            };
            CensusDoctorRowButtonDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return CensusDoctorRowButtonDomReact;
        }(domCore.DomReact));
        CensusDoctorRowButtonDom.CensusDoctorRowButtonDomReact = CensusDoctorRowButtonDomReact;
        var CensusDoctorRowButtonDomVm = (function (_super) {
            __extends(CensusDoctorRowButtonDomVm, _super);
            function CensusDoctorRowButtonDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = CensusDoctorRowButtonDomReact;
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
                        _this.emitAppEvent("medical/base/CensusDoctor/rowbtnclick", _this.UniId, a.Name, _this.Row.RowData.FID);
                    };
                });
            }
            return CensusDoctorRowButtonDomVm;
        }(domCore.DomVm));
        CensusDoctorRowButtonDom.CensusDoctorRowButtonDomVm = CensusDoctorRowButtonDomVm;
        var CensusDoctorRowButtonDomStates = (function (_super) {
            __extends(CensusDoctorRowButtonDomStates, _super);
            function CensusDoctorRowButtonDomStates() {
                _super.apply(this, arguments);
            }
            return CensusDoctorRowButtonDomStates;
        }(domCore.DomStates));
        CensusDoctorRowButtonDom.CensusDoctorRowButtonDomStates = CensusDoctorRowButtonDomStates;
        var CensusDoctorRowButtonDomProps = (function (_super) {
            __extends(CensusDoctorRowButtonDomProps, _super);
            function CensusDoctorRowButtonDomProps() {
                _super.apply(this, arguments);
            }
            return CensusDoctorRowButtonDomProps;
        }(domCore.DomProps));
        CensusDoctorRowButtonDom.CensusDoctorRowButtonDomProps = CensusDoctorRowButtonDomProps;
    })(CensusDoctorRowButtonDom = exports.CensusDoctorRowButtonDom || (exports.CensusDoctorRowButtonDom = {}));
});
