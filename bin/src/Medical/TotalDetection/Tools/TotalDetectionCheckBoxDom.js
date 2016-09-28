var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var TotalDetectionCheckBoxDom;
    (function (TotalDetectionCheckBoxDom) {
        var TotalDetectionCheckBoxDomAction = (function (_super) {
            __extends(TotalDetectionCheckBoxDomAction, _super);
            function TotalDetectionCheckBoxDomAction() {
                _super.apply(this, arguments);
            }
            return TotalDetectionCheckBoxDomAction;
        }(domCore.DomAction));
        TotalDetectionCheckBoxDom.TotalDetectionCheckBoxDomAction = TotalDetectionCheckBoxDomAction;
        var TotalDetectionCheckBoxDomReact = (function (_super) {
            __extends(TotalDetectionCheckBoxDomReact, _super);
            function TotalDetectionCheckBoxDomReact() {
                _super.apply(this, arguments);
                this.state = new TotalDetectionCheckBoxDomStates();
            }
            TotalDetectionCheckBoxDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-medical-content"}, React.createElement("div", {className: "YSm-item clearfix"}, React.createElement("ul", {className: "nav nav-pills"}, this.props.Vm.DataList.map(function (a) {
                    return React.createElement("li", {className: "nav-item"}, React.createElement("input", {type: "checkbox", onChange: function (b) { _this.props.Vm.textBoxClick(b, a); }}), a.Name);
                }))));
            };
            TotalDetectionCheckBoxDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return TotalDetectionCheckBoxDomReact;
        }(domCore.DomReact));
        TotalDetectionCheckBoxDom.TotalDetectionCheckBoxDomReact = TotalDetectionCheckBoxDomReact;
        var TotalDetectionCheckBoxDomVm = (function (_super) {
            __extends(TotalDetectionCheckBoxDomVm, _super);
            function TotalDetectionCheckBoxDomVm(config) {
                _super.call(this);
                this.ReactType = TotalDetectionCheckBoxDomReact;
                this.DataList = [];
                this.DiseaseList = [];
                this.DataList = new Array();
                if (config) {
                    this.DataList = config.Data;
                }
            }
            TotalDetectionCheckBoxDomVm.prototype.textBoxClick = function (a, b) {
                var isselect = a.target["checked"];
                if (isselect == true) {
                    b.isSelect = "1";
                }
                else {
                    b.isSelect = "0";
                }
            };
            TotalDetectionCheckBoxDomVm.prototype.submit = function () {
                var _this = this;
                this.DiseaseList = [];
                this.DataList.forEach(function (a) {
                    if (a.isSelect == "1") {
                        _this.DiseaseList.push(a.FID);
                    }
                });
                return this.DiseaseList;
            };
            return TotalDetectionCheckBoxDomVm;
        }(domCore.DomVm));
        TotalDetectionCheckBoxDom.TotalDetectionCheckBoxDomVm = TotalDetectionCheckBoxDomVm;
        var TotalDetectionCheckBoxDomStates = (function (_super) {
            __extends(TotalDetectionCheckBoxDomStates, _super);
            function TotalDetectionCheckBoxDomStates() {
                _super.apply(this, arguments);
            }
            return TotalDetectionCheckBoxDomStates;
        }(domCore.DomStates));
        TotalDetectionCheckBoxDom.TotalDetectionCheckBoxDomStates = TotalDetectionCheckBoxDomStates;
        var TotalDetectionCheckBoxDomProps = (function (_super) {
            __extends(TotalDetectionCheckBoxDomProps, _super);
            function TotalDetectionCheckBoxDomProps() {
                _super.apply(this, arguments);
            }
            return TotalDetectionCheckBoxDomProps;
        }(domCore.DomProps));
        TotalDetectionCheckBoxDom.TotalDetectionCheckBoxDomProps = TotalDetectionCheckBoxDomProps;
    })(TotalDetectionCheckBoxDom = exports.TotalDetectionCheckBoxDom || (exports.TotalDetectionCheckBoxDom = {}));
});
