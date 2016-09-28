var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var AssemblyDom;
    (function (AssemblyDom) {
        var AssemblyDomAction = (function (_super) {
            __extends(AssemblyDomAction, _super);
            function AssemblyDomAction() {
                _super.apply(this, arguments);
            }
            return AssemblyDomAction;
        }(domCore.DomAction));
        AssemblyDom.AssemblyDomAction = AssemblyDomAction;
        var AssemblyDomReact = (function (_super) {
            __extends(AssemblyDomReact, _super);
            function AssemblyDomReact() {
                _super.apply(this, arguments);
                this.state = new AssemblyDomStates();
            }
            AssemblyDomReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hm-plug-table Hg-relative"}, this._initAssemblyTable());
            };
            AssemblyDomReact.prototype._initAssemblyTable = function () {
                return React.createElement("table", {className: "table"}, this._initAssemblyThead(), this._initAssemblyTbody(), this._initLoading(), this._initAssemblyTbody(), this._initAssemblyTbody());
            };
            AssemblyDomReact.prototype._initLoading = function () {
                return React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null), React.createElement("td", {colSpan: "4", className: "Hs-red"}, React.createElement("b", {className: "m-r"}, React.createElement("i", {className: "Hs-red fa fa-exclamation-triangle"}), "dll载入异常记录"), "未能加载文件或程序集“Antlr3.Runtime, Version=3.4.1.9004, Culture=neutral, PublicKeyToken=eb42632606e9261f”或它的某一个依赖项。系统找不到指定的文件。")));
            };
            AssemblyDomReact.prototype._initAssemblyThead = function () {
                return React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null), React.createElement("th", null, "程序集名称"), React.createElement("th", null, "版本号"), React.createElement("th", null, "检查的类型"), React.createElement("th", null, "路径"), React.createElement("th", null, "耗时")));
            };
            AssemblyDomReact.prototype._initAssemblyTbody = function () {
                return React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null, "WebActivatorEx"), React.createElement("td", null, "Version=2.0.0.0"), React.createElement("td", null, this._initAssemblyTableN()), React.createElement("td", null, "Ataw.Framework.Core.dll"), React.createElement("td", null, "15.0006ms")));
            };
            AssemblyDomReact.prototype._initAssemblyTableN = function () {
                var _this = this;
                return React.createElement("table", {className: "table"}, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "Aspose.Cells.Attributes.PoweredByAttribute")), React.createElement("tr", null, React.createElement("td", null, "ns0.Class0")), React.createElement("tr", null, React.createElement("td", null, "ns0.Class1")), React.createElement("tr", null, React.createElement("td", null, "Ataw.Framework.Core.ContextLegal ", React.createElement("i", {className: "m-l Hu-pointer fa fa-sort-down", onClick: function () { _this.fun_AssemblyClick(); }}))), React.createElement("tr", {className: this.props.Vm.IsAssemblyHidden ? " hide" : " "}, React.createElement("td", null, this._initAssemblyTableNt()))));
            };
            AssemblyDomReact.prototype._initAssemblyTableNt = function () {
                return React.createElement("table", {className: "table" + (this.props.Vm.IsAssemblyHidden ? " hide" : " ")}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "注册名"), React.createElement("th", null, "基类"), React.createElement("th", null, "作者"), React.createElement("th", null, "描述"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "ContextLegal"), React.createElement("td", null, "Ataw.Framework.Core.IServerLegal"), React.createElement("td", null, "zgl"), React.createElement("td", null, "服务端验证备注插件"))));
            };
            AssemblyDomReact.prototype.fun_AssemblyClick = function () {
                this.props.Vm.IsAssemblyHidden = !this.props.Vm.IsAssemblyHidden;
                this.forceUpdate();
            };
            AssemblyDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            AssemblyDomReact.prototype.divfor = function () {
                var array = [];
                var html = [];
                for (var i = 0; i < 30; i++) {
                    array.push(i);
                }
                array.map(function (i, number) {
                    var left = 3.4 * i;
                    var ms = i * 20;
                    html.push(React.createElement("div", {className: "Hu-vertical-timelime", style: { "left": left + "%" }}, React.createElement("p", null, ms), React.createElement("em", {style: { "left": 5 }})));
                });
                return html.map(function (a) { return a; });
            };
            return AssemblyDomReact;
        }(domCore.DomReact));
        AssemblyDom.AssemblyDomReact = AssemblyDomReact;
        var AssemblyDomVm = (function (_super) {
            __extends(AssemblyDomVm, _super);
            function AssemblyDomVm(config) {
                _super.call(this);
                this.ReactType = AssemblyDomReact;
            }
            return AssemblyDomVm;
        }(domCore.DomVm));
        AssemblyDom.AssemblyDomVm = AssemblyDomVm;
        var AssemblyDomStates = (function (_super) {
            __extends(AssemblyDomStates, _super);
            function AssemblyDomStates() {
                _super.apply(this, arguments);
            }
            return AssemblyDomStates;
        }(domCore.DomStates));
        AssemblyDom.AssemblyDomStates = AssemblyDomStates;
        var AssemblyDomProps = (function (_super) {
            __extends(AssemblyDomProps, _super);
            function AssemblyDomProps() {
                _super.apply(this, arguments);
            }
            return AssemblyDomProps;
        }(domCore.DomProps));
        AssemblyDom.AssemblyDomProps = AssemblyDomProps;
    })(AssemblyDom = exports.AssemblyDom || (exports.AssemblyDom = {}));
});
