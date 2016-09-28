var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var DiseaseCheckBoxDom;
    (function (DiseaseCheckBoxDom) {
        var DiseaseCheckBoxDomAction = (function (_super) {
            __extends(DiseaseCheckBoxDomAction, _super);
            function DiseaseCheckBoxDomAction() {
                _super.apply(this, arguments);
            }
            return DiseaseCheckBoxDomAction;
        }(domCore.DomAction));
        DiseaseCheckBoxDom.DiseaseCheckBoxDomAction = DiseaseCheckBoxDomAction;
        var DiseaseCheckBoxDomReact = (function (_super) {
            __extends(DiseaseCheckBoxDomReact, _super);
            function DiseaseCheckBoxDomReact() {
                _super.apply(this, arguments);
                this.state = new DiseaseCheckBoxDomStates();
            }
            DiseaseCheckBoxDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-medical-content"}, React.createElement("div", {className: "YSm-item clearfix"}, React.createElement("ul", {className: "nav nav-pills"}, this.props.Vm.DataList.map(function (a) {
                    return React.createElement("li", {className: "nav-item"}, React.createElement("input", {type: "checkbox", onChange: function (b) { _this.props.Vm.textBoxClick(b, a); }, checked: a.isSelect == "1" ? "checked" : ""}), a.Name);
                }))));
            };
            DiseaseCheckBoxDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return DiseaseCheckBoxDomReact;
        }(domCore.DomReact));
        DiseaseCheckBoxDom.DiseaseCheckBoxDomReact = DiseaseCheckBoxDomReact;
        var DiseaseCheckBoxDomVm = (function (_super) {
            __extends(DiseaseCheckBoxDomVm, _super);
            function DiseaseCheckBoxDomVm(config) {
                _super.call(this);
                this.ReactType = DiseaseCheckBoxDomReact;
                this.DataList = [];
                this.DiseaseList = [];
                this.DataList = new Array();
                if (config) {
                    this.DataList = config.Data;
                }
            }
            DiseaseCheckBoxDomVm.prototype.textBoxClick = function (a, b) {
                var isselect = a.target["checked"];
                if (isselect == true) {
                    b.isSelect = "1";
                }
                else {
                    b.isSelect = "0";
                }
                this.forceUpdate("");
            };
            DiseaseCheckBoxDomVm.prototype.submit = function () {
                var _this = this;
                this.DiseaseList = [];
                this.DataList.forEach(function (a) {
                    if (a.isSelect != a.isNativeSelect) {
                        _this.DiseaseList.push(a.FID + "," + a.isSelect);
                    }
                });
                return this.DiseaseList;
            };
            return DiseaseCheckBoxDomVm;
        }(domCore.DomVm));
        DiseaseCheckBoxDom.DiseaseCheckBoxDomVm = DiseaseCheckBoxDomVm;
        var DiseaseCheckBoxDomStates = (function (_super) {
            __extends(DiseaseCheckBoxDomStates, _super);
            function DiseaseCheckBoxDomStates() {
                _super.apply(this, arguments);
            }
            return DiseaseCheckBoxDomStates;
        }(domCore.DomStates));
        DiseaseCheckBoxDom.DiseaseCheckBoxDomStates = DiseaseCheckBoxDomStates;
        var DiseaseCheckBoxDomProps = (function (_super) {
            __extends(DiseaseCheckBoxDomProps, _super);
            function DiseaseCheckBoxDomProps() {
                _super.apply(this, arguments);
            }
            return DiseaseCheckBoxDomProps;
        }(domCore.DomProps));
        DiseaseCheckBoxDom.DiseaseCheckBoxDomProps = DiseaseCheckBoxDomProps;
    })(DiseaseCheckBoxDom = exports.DiseaseCheckBoxDom || (exports.DiseaseCheckBoxDom = {}));
});
