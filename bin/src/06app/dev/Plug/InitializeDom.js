var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var InitializeDom;
    (function (InitializeDom) {
        var InitializeDomAction = (function (_super) {
            __extends(InitializeDomAction, _super);
            function InitializeDomAction() {
                _super.apply(this, arguments);
            }
            return InitializeDomAction;
        }(domCore.DomAction));
        InitializeDom.InitializeDomAction = InitializeDomAction;
        var InitializeDomReact = (function (_super) {
            __extends(InitializeDomReact, _super);
            function InitializeDomReact() {
                _super.apply(this, arguments);
                this.state = new InitializeDomStates();
            }
            InitializeDomReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hg-relative"}, this._initPlugTable());
            };
            InitializeDomReact.prototype._initPlugTimeline = function () {
                return React.createElement("div", {className: "Hm-plug-timeline"}, React.createElement("div", {className: "Hu-main-timelime"}, React.createElement("p", {className: "text-right"}, "ms")), this.divfor());
            };
            InitializeDomReact.prototype._initPlugTable = function () {
                return React.createElement("div", {className: "Hm-plug-table"}, React.createElement("table", {className: "table"}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "名称"), React.createElement("th", null, "时间"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "日志初始化"), React.createElement("td", null, "7.0004ms")), React.createElement("tr", null, React.createElement("td", null, "消息总线初始化"), React.createElement("td", null, "1.0001ms")))));
            };
            InitializeDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            InitializeDomReact.prototype.divfor = function () {
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
            return InitializeDomReact;
        }(domCore.DomReact));
        InitializeDom.InitializeDomReact = InitializeDomReact;
        var InitializeDomVm = (function (_super) {
            __extends(InitializeDomVm, _super);
            function InitializeDomVm(config) {
                _super.call(this);
                this.ReactType = InitializeDomReact;
            }
            return InitializeDomVm;
        }(domCore.DomVm));
        InitializeDom.InitializeDomVm = InitializeDomVm;
        var InitializeDomStates = (function (_super) {
            __extends(InitializeDomStates, _super);
            function InitializeDomStates() {
                _super.apply(this, arguments);
            }
            return InitializeDomStates;
        }(domCore.DomStates));
        InitializeDom.InitializeDomStates = InitializeDomStates;
        var InitializeDomProps = (function (_super) {
            __extends(InitializeDomProps, _super);
            function InitializeDomProps() {
                _super.apply(this, arguments);
            }
            return InitializeDomProps;
        }(domCore.DomProps));
        InitializeDom.InitializeDomProps = InitializeDomProps;
    })(InitializeDom = exports.InitializeDom || (exports.InitializeDom = {}));
});
