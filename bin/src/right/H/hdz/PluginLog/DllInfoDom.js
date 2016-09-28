var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./DllInfoRowDom"], function (require, exports, domFile, React, dllInfoRow) {
    "use strict";
    var domCore = domFile.Core;
    var DllInfoDom;
    (function (DllInfoDom) {
        var DllInfoDomAction = (function (_super) {
            __extends(DllInfoDomAction, _super);
            function DllInfoDomAction() {
                _super.apply(this, arguments);
            }
            return DllInfoDomAction;
        }(domCore.DomAction));
        DllInfoDom.DllInfoDomAction = DllInfoDomAction;
        var DllInfoDomReact = (function (_super) {
            __extends(DllInfoDomReact, _super);
            function DllInfoDomReact() {
                _super.apply(this, arguments);
                this.state = new DllInfoDomStates();
            }
            DllInfoDomReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hg-relative"}, this._initPlugTable());
            };
            DllInfoDomReact.prototype._initPlugTable = function () {
                return React.createElement("div", {className: "Hm-plug-table"}, React.createElement("table", {className: "table"}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {style: { "width": "20rem" }}, "名称"), React.createElement("th", {style: { "width": "10rem" }}, "版本号"), React.createElement("th", null, "检查的类型"), React.createElement("th", {style: { "width": "10rem" }}, "错误信息"))), React.createElement("tbody", null, this.props.Vm.DllInfoRowList.map(function (a) { return a.intoDom(); }))));
            };
            DllInfoDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DllInfoDomReact;
        }(domCore.DomReact));
        DllInfoDom.DllInfoDomReact = DllInfoDomReact;
        var DllInfoDomVm = (function (_super) {
            __extends(DllInfoDomVm, _super);
            function DllInfoDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DllInfoDomReact;
                this.DllInfoRowList = [];
                if (config.DllInfoRowList) {
                    this.DallInfoData = config.DllInfoRowList;
                    this.DallInfoData.forEach(function (a) {
                        var dllInfoConfig = { Name: a.Name, ClassInfoList: a.ClassInfoList, DllError: a.Error };
                        _this.DllInfoRow = new dllInfoRow.DllInfoRowDom.DllInfoRowDomVm(dllInfoConfig);
                        _this.DllInfoRowList.push(_this.DllInfoRow);
                    });
                }
            }
            return DllInfoDomVm;
        }(domCore.DomVm));
        DllInfoDom.DllInfoDomVm = DllInfoDomVm;
        var DllInfoDomStates = (function (_super) {
            __extends(DllInfoDomStates, _super);
            function DllInfoDomStates() {
                _super.apply(this, arguments);
            }
            return DllInfoDomStates;
        }(domCore.DomStates));
        DllInfoDom.DllInfoDomStates = DllInfoDomStates;
        var DllInfoDomProps = (function (_super) {
            __extends(DllInfoDomProps, _super);
            function DllInfoDomProps() {
                _super.apply(this, arguments);
            }
            return DllInfoDomProps;
        }(domCore.DomProps));
        DllInfoDom.DllInfoDomProps = DllInfoDomProps;
    })(DllInfoDom = exports.DllInfoDom || (exports.DllInfoDom = {}));
});
