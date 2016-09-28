var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var AllDom;
    (function (AllDom) {
        var AllDomAction = (function (_super) {
            __extends(AllDomAction, _super);
            function AllDomAction() {
                _super.apply(this, arguments);
            }
            return AllDomAction;
        }(domCore.DomAction));
        AllDom.AllDomAction = AllDomAction;
        var AllDomReact = (function (_super) {
            __extends(AllDomReact, _super);
            function AllDomReact() {
                _super.apply(this, arguments);
                this.state = new AllDomStates();
            }
            AllDomReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hg-relative"}, this._initPlugTable());
            };
            AllDomReact.prototype._initPlugTimeline = function () {
                return React.createElement("div", {className: "Hm-plug-timeline"}, React.createElement("div", {className: "Hu-main-timelime"}, React.createElement("p", {className: "text-right"}, "ms")), this.divfor());
            };
            AllDomReact.prototype._initPlugTable = function () {
                return React.createElement("div", {className: "Hm-plug-table"}, React.createElement("table", {className: "table"}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "名称"), React.createElement("th", null, "时间"))), this._initInitialize(), this._initAssemblyTable(), this._initRegisterA()));
            };
            AllDomReact.prototype._initInitialize = function () {
                return React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "日志初始化"), React.createElement("td", null, "7.0004ms")), React.createElement("tr", null, React.createElement("td", null, "消息总线初始化"), React.createElement("td", null, "1.0001ms")), React.createElement("tr", null, React.createElement("td", null, "程序集开始检查"), React.createElement("td", null)));
            };
            AllDomReact.prototype._initAssemblyTable = function () {
                return React.createElement("tbody", null, React.createElement("table", {className: "table"}, this._initAssemblyThead(), this._initAssemblyTbody(), this._initLoading(), this._initAssemblyTbody(), this._initAssemblyTbody()));
            };
            AllDomReact.prototype._initLoading = function () {
                return React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null), React.createElement("td", {colSpan: "4", className: "Hs-red"}, React.createElement("b", {className: "m-r"}, React.createElement("i", {className: "Hs-red fa fa-exclamation-triangle"}), "dll载入异常记录"), "未能加载文件或程序集“Antlr3.Runtime, Version=3.4.1.9004, Culture=neutral, PublicKeyToken=eb42632606e9261f”或它的某一个依赖项。系统找不到指定的文件。")));
            };
            AllDomReact.prototype._initAssemblyThead = function () {
                return React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null), React.createElement("th", null, "程序集名称"), React.createElement("th", null, "版本号"), React.createElement("th", null, "检查的类型"), React.createElement("th", null, "耗时")));
            };
            AllDomReact.prototype._initAssemblyTbody = function () {
                return React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null, "WebActivatorEx"), React.createElement("td", null, "Version=2.0.0.0"), React.createElement("td", null, this._initAssemblyTableN()), React.createElement("td", null, "15.0006ms")));
            };
            AllDomReact.prototype._initAssemblyTableN = function () {
                var _this = this;
                return React.createElement("table", {className: "table"}, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "Aspose.Cells.Attributes.PoweredByAttribute")), React.createElement("tr", null, React.createElement("td", null, "ns0.Class0")), React.createElement("tr", null, React.createElement("td", null, "ns0.Class1")), React.createElement("tr", null, React.createElement("td", null, "Ataw.Framework.Core.ContextLegal ", React.createElement("i", {className: "m-l Hu-pointer fa fa-sort-down", onClick: function () { _this.fun_AssemblyClick(); }}))), React.createElement("tr", {className: this.props.Vm.IsAssemblyHidden ? " hide" : " "}, React.createElement("td", null, this._initAssemblyTableNt()))));
            };
            AllDomReact.prototype._initAssemblyTableNt = function () {
                return React.createElement("table", {className: "table" + (this.props.Vm.IsAssemblyHidden ? " hide" : " ")}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "注册名"), React.createElement("th", null, "基类"), React.createElement("th", null, "实例类"), React.createElement("th", null, "路径"), React.createElement("th", null, "作者"), React.createElement("th", null, "描述"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "ContextLegal"), React.createElement("td", null, "Ataw.Framework.Core.IServerLegal"), React.createElement("td", null, "Ataw.Framework.Core.ContextLegal"), React.createElement("td", null, "Ataw.Framework.Core.dll"), React.createElement("td", null, "zgl"), React.createElement("td", null, "服务端验证备注插件"))));
            };
            AllDomReact.prototype.fun_AssemblyClick = function () {
                this.props.Vm.IsAssemblyHidden = !this.props.Vm.IsAssemblyHidden;
                this.forceUpdate();
            };
            AllDomReact.prototype.fun_AssemblyTClick = function () {
                this.props.Vm.IsAssemblyTHidden = !this.props.Vm.IsAssemblyTHidden;
                this.forceUpdate();
            };
            AllDomReact.prototype.fun_AssemblyFClick = function () {
                this.props.Vm.IsAssemblyFHidden = !this.props.Vm.IsAssemblyFHidden;
                this.forceUpdate();
            };
            AllDomReact.prototype.fun_AssemblyTypeClick = function () {
                this.props.Vm.IsAssemblyTypeHidden = !this.props.Vm.IsAssemblyTypeHidden;
                this.forceUpdate();
            };
            AllDomReact.prototype.fun_AssemblyTypeFClick = function () {
                this.props.Vm.IsAssemblyTypeFHidden = !this.props.Vm.IsAssemblyTypeFHidden;
                this.forceUpdate();
            };
            AllDomReact.prototype._initRegisterA = function () {
                var _this = this;
                return React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "程序集插件注册"), React.createElement("td", null, "402.0229ms")), React.createElement("tr", null, React.createElement("td", null, "执行全局配置的宏插件"), React.createElement("td", null, "1.0001ms")), React.createElement("tr", null, React.createElement("td", null, "app配置注册"), React.createElement("td", null, "0ms")), React.createElement("tr", null, React.createElement("td", null, "固定接口注册"), React.createElement("td", null, "24.0014ms")), React.createElement("tr", null, React.createElement("td", null, "XML代码表注册", React.createElement("i", {className: "m-l Hu-pointer fa fa-sort-" + (this.props.Vm.IsRegisterHidden ? "down" : "up"), onClick: function () { _this.fun_RegisterClick(); }})), React.createElement("td", null, "51.0029ms")), this._initRegister(), React.createElement("tr", null, React.createElement("td", null, "XML数据字典注册"), React.createElement("td", null, "14.0008ms")), React.createElement("tr", null, React.createElement("td", null, "自定义js注册"), React.createElement("td", null, "0ms")), React.createElement("tr", null, React.createElement("td", null, "全局插件"), React.createElement("td", null, "17.001ms")));
            };
            AllDomReact.prototype._initRegister = function () {
                return React.createElement("div", {className: this.props.Vm.IsRegisterHidden ? "" : "hide"}, React.createElement("div", {className: "Hm-plug-table m-a"}, React.createElement("table", {className: "table"}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "注册名"), React.createElement("th", null, "基类"), React.createElement("th", null, "实例类"), React.createElement("th", null, "路径"), React.createElement("th", null, "作者"), React.createElement("th", null, "描述"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "ML"), React.createElement("td", null, "Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]"), React.createElement("td", null, "Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]"), React.createElement("td", null, "Ataw.Framework.Core.dll"), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, "Color"), React.createElement("td", null, "Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]"), React.createElement("td", null, "Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]"), React.createElement("td", null, "Ataw.Framework.Core.dll"), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, "Leve"), React.createElement("td", null, "Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]"), React.createElement("td", null, "Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]"), React.createElement("td", null, "Ataw.Framework.Core.dll"), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, "Hard"), React.createElement("td", null, "Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]"), React.createElement("td", null, "Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]"), React.createElement("td", null, "Ataw.Framework.Core.dll"), React.createElement("td", null), React.createElement("td", null))))));
            };
            AllDomReact.prototype.fun_RegisterClick = function () {
                this.props.Vm.IsRegisterHidden = !this.props.Vm.IsRegisterHidden;
                this.forceUpdate();
            };
            AllDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            AllDomReact.prototype.divfor = function () {
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
            return AllDomReact;
        }(domCore.DomReact));
        AllDom.AllDomReact = AllDomReact;
        var AllDomVm = (function (_super) {
            __extends(AllDomVm, _super);
            function AllDomVm(config) {
                _super.call(this);
                this.ReactType = AllDomReact;
            }
            return AllDomVm;
        }(domCore.DomVm));
        AllDom.AllDomVm = AllDomVm;
        var AllDomStates = (function (_super) {
            __extends(AllDomStates, _super);
            function AllDomStates() {
                _super.apply(this, arguments);
            }
            return AllDomStates;
        }(domCore.DomStates));
        AllDom.AllDomStates = AllDomStates;
        var AllDomProps = (function (_super) {
            __extends(AllDomProps, _super);
            function AllDomProps() {
                _super.apply(this, arguments);
            }
            return AllDomProps;
        }(domCore.DomProps));
        AllDom.AllDomProps = AllDomProps;
    })(AllDom = exports.AllDom || (exports.AllDom = {}));
});
