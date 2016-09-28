var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var AnomalyCheckBoxDom;
    (function (AnomalyCheckBoxDom) {
        var AnomalyCheckBoxDomAction = (function (_super) {
            __extends(AnomalyCheckBoxDomAction, _super);
            function AnomalyCheckBoxDomAction() {
                _super.apply(this, arguments);
            }
            return AnomalyCheckBoxDomAction;
        }(domCore.DomAction));
        AnomalyCheckBoxDom.AnomalyCheckBoxDomAction = AnomalyCheckBoxDomAction;
        var AnomalyCheckBoxDomReact = (function (_super) {
            __extends(AnomalyCheckBoxDomReact, _super);
            function AnomalyCheckBoxDomReact() {
                _super.apply(this, arguments);
                this.state = new AnomalyCheckBoxDomStates();
            }
            AnomalyCheckBoxDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-medical-content"}, React.createElement("div", {className: "YSm-item clearfix"}, React.createElement("ul", {className: "nav nav-pills"}, this.props.Vm.DataList.map(function (a) {
                    return React.createElement("li", {className: "nav-item"}, React.createElement("input", {type: "checkbox", onChange: function (b) { _this.props.Vm.textBoxClick(b, a); }, checked: a.isSelect == "1" ? "checked" : ""}), a.Name);
                }))));
            };
            AnomalyCheckBoxDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return AnomalyCheckBoxDomReact;
        }(domCore.DomReact));
        AnomalyCheckBoxDom.AnomalyCheckBoxDomReact = AnomalyCheckBoxDomReact;
        var AnomalyCheckBoxDomVm = (function (_super) {
            __extends(AnomalyCheckBoxDomVm, _super);
            function AnomalyCheckBoxDomVm(config) {
                _super.call(this);
                this.ReactType = AnomalyCheckBoxDomReact;
                this.DataList = [];
                this.AnomalyList = [];
                this.DataList = new Array();
                if (config) {
                    this.DataList = config.Data;
                }
            }
            AnomalyCheckBoxDomVm.prototype.textBoxClick = function (a, b) {
                var isselect = a.target["checked"];
                if (isselect == true) {
                    b.isSelect = "1";
                }
                else {
                    b.isSelect = "0";
                }
                this.forceUpdate("");
            };
            AnomalyCheckBoxDomVm.prototype.submit = function () {
                var _this = this;
                this.AnomalyList = [];
                this.DataList.forEach(function (a) {
                    if (a.isSelect != a.isNativeSelect) {
                        _this.AnomalyList.push(a.FID + "," + a.isSelect);
                    }
                });
                return this.AnomalyList;
            };
            return AnomalyCheckBoxDomVm;
        }(domCore.DomVm));
        AnomalyCheckBoxDom.AnomalyCheckBoxDomVm = AnomalyCheckBoxDomVm;
        var AnomalyCheckBoxDomStates = (function (_super) {
            __extends(AnomalyCheckBoxDomStates, _super);
            function AnomalyCheckBoxDomStates() {
                _super.apply(this, arguments);
            }
            return AnomalyCheckBoxDomStates;
        }(domCore.DomStates));
        AnomalyCheckBoxDom.AnomalyCheckBoxDomStates = AnomalyCheckBoxDomStates;
        var AnomalyCheckBoxDomProps = (function (_super) {
            __extends(AnomalyCheckBoxDomProps, _super);
            function AnomalyCheckBoxDomProps() {
                _super.apply(this, arguments);
            }
            return AnomalyCheckBoxDomProps;
        }(domCore.DomProps));
        AnomalyCheckBoxDom.AnomalyCheckBoxDomProps = AnomalyCheckBoxDomProps;
    })(AnomalyCheckBoxDom = exports.AnomalyCheckBoxDom || (exports.AnomalyCheckBoxDom = {}));
});
