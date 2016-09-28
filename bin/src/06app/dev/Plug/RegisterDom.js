var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var RegisterDom;
    (function (RegisterDom) {
        var RegisterDomAction = (function (_super) {
            __extends(RegisterDomAction, _super);
            function RegisterDomAction() {
                _super.apply(this, arguments);
            }
            return RegisterDomAction;
        }(domCore.DomAction));
        RegisterDom.RegisterDomAction = RegisterDomAction;
        var RegisterDomReact = (function (_super) {
            __extends(RegisterDomReact, _super);
            function RegisterDomReact() {
                _super.apply(this, arguments);
                this.state = new RegisterDomStates();
            }
            RegisterDomReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hg-relative"}, this._initPlugTable());
            };
            RegisterDomReact.prototype._initPlugTimeline = function () {
                return React.createElement("div", {className: "Hm-plug-timeline"}, React.createElement("div", {className: "Hu-main-timelime"}, React.createElement("p", {className: "text-right"}, "ms")), this.divfor());
            };
            RegisterDomReact.prototype._initPlugTable = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-plug-table"}, React.createElement("table", {className: "table"}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "名称"), React.createElement("th", null, "时间"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "程序集插件注册"), React.createElement("td", null, "402.0229ms")), React.createElement("tr", null, React.createElement("td", null, "执行全局配置的宏插件"), React.createElement("td", null, "1.0001ms")), React.createElement("tr", null, React.createElement("td", null, "app配置注册"), React.createElement("td", null, "0ms")), React.createElement("tr", null, React.createElement("td", null, "固定接口注册"), React.createElement("td", null, "24.0014ms")), React.createElement("tr", null, React.createElement("td", null, "XML代码表注册", React.createElement("i", {className: "m-l Hu-pointer fa fa-sort-" + (this.props.Vm.IsRegisterHidden ? "down" : "up"), onClick: function () { _this.fun_RegisterClick(); }})), React.createElement("td", null, "51.0029ms")), this._initRegister(), React.createElement("tr", null, React.createElement("td", null, "XML数据字典注册"), React.createElement("td", null, "14.0008ms")), React.createElement("tr", null, React.createElement("td", null, "自定义js注册"), React.createElement("td", null, "0ms")), React.createElement("tr", null, React.createElement("td", null, "全局插件"), React.createElement("td", null, "17.001ms")))));
            };
            RegisterDomReact.prototype._initRegister = function () {
                return React.createElement("div", {className: this.props.Vm.IsRegisterHidden ? "" : "hide"}, React.createElement("div", {className: "Hm-plug-table m-a"}, React.createElement("table", {className: "table"}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "注册名"), React.createElement("th", null, "基类"), React.createElement("th", null, "实例类"), React.createElement("th", null, "路径"), React.createElement("th", null, "作者"), React.createElement("th", null, "描述"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "ML"), React.createElement("td", null, "Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]"), React.createElement("td", null, "Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]"), React.createElement("td", null, "Ataw.Framework.Core.dll"), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, "Color"), React.createElement("td", null, "Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]"), React.createElement("td", null, "Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]"), React.createElement("td", null, "Ataw.Framework.Core.dll"), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, "Leve"), React.createElement("td", null, "Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]"), React.createElement("td", null, "Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]"), React.createElement("td", null, "Ataw.Framework.Core.dll"), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, "Hard"), React.createElement("td", null, "Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]"), React.createElement("td", null, "Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]"), React.createElement("td", null, "Ataw.Framework.Core.dll"), React.createElement("td", null), React.createElement("td", null))))));
            };
            RegisterDomReact.prototype.fun_RegisterClick = function () {
                this.props.Vm.IsRegisterHidden = !this.props.Vm.IsRegisterHidden;
                this.forceUpdate();
            };
            RegisterDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            RegisterDomReact.prototype.divfor = function () {
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
            return RegisterDomReact;
        }(domCore.DomReact));
        RegisterDom.RegisterDomReact = RegisterDomReact;
        var RegisterDomVm = (function (_super) {
            __extends(RegisterDomVm, _super);
            function RegisterDomVm(config) {
                _super.call(this);
                this.ReactType = RegisterDomReact;
            }
            return RegisterDomVm;
        }(domCore.DomVm));
        RegisterDom.RegisterDomVm = RegisterDomVm;
        var RegisterDomStates = (function (_super) {
            __extends(RegisterDomStates, _super);
            function RegisterDomStates() {
                _super.apply(this, arguments);
            }
            return RegisterDomStates;
        }(domCore.DomStates));
        RegisterDom.RegisterDomStates = RegisterDomStates;
        var RegisterDomProps = (function (_super) {
            __extends(RegisterDomProps, _super);
            function RegisterDomProps() {
                _super.apply(this, arguments);
            }
            return RegisterDomProps;
        }(domCore.DomProps));
        RegisterDom.RegisterDomProps = RegisterDomProps;
    })(RegisterDom = exports.RegisterDom || (exports.RegisterDom = {}));
});
