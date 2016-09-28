var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../09Web/dom/ThDom"], function (require, exports, domFile, React, thFile) {
    "use strict";
    var domCore = domFile.Core;
    var TestingItemsDom;
    (function (TestingItemsDom) {
        var TestingItemsDomAction = (function (_super) {
            __extends(TestingItemsDomAction, _super);
            function TestingItemsDomAction() {
                _super.apply(this, arguments);
            }
            return TestingItemsDomAction;
        }(domCore.DomAction));
        TestingItemsDom.TestingItemsDomAction = TestingItemsDomAction;
        var TestingItemsDomReact = (function (_super) {
            __extends(TestingItemsDomReact, _super);
            function TestingItemsDomReact() {
                _super.apply(this, arguments);
                this.state = new TestingItemsDomStates();
            }
            TestingItemsDomReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("p", null, "已选项目：", React.createElement("a", {className: "btn btn-sm btn-primary pull-right"}, "添加")), this._initTable());
            };
            TestingItemsDomReact.prototype._initTable = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-striped table-bordered table-hover"}, theader, tbody);
                return React.createElement("div", {className: "table-responsive", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            TestingItemsDomReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            TestingItemsDomReact.prototype.initHeader = function () {
                return React.createElement("tr", null, React.createElement("th", null, "项目代码"), React.createElement("th", null, "项目名称"), React.createElement("th", null, "项目类型"), React.createElement("th", null, "客观取数项目"), React.createElement("th", null, "分值"), React.createElement("th", null, "最大分值"), React.createElement("th", null, "操作"));
            };
            ;
            TestingItemsDomReact.prototype.initBody = function () {
                return React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "saddgr"), React.createElement("td", null, "考核名称1112"), React.createElement("td", null, "普通考核"), React.createElement("td", null), React.createElement("td", null, "10"), React.createElement("td", null, "10"), React.createElement("td", null, React.createElement("a", {className: "text-primary"}, "编辑"), React.createElement("a", {className: "text-danger"}, "删除"))), React.createElement("tr", null, React.createElement("td", null, "saddgr"), React.createElement("td", null, "考核名称1112"), React.createElement("td", null, "普通考核"), React.createElement("td", null), React.createElement("td", null, "10"), React.createElement("td", null, "10"), React.createElement("td", null, React.createElement("a", {className: "text-primary"}, "编辑"), React.createElement("a", {className: "text-danger"}, "删除"))), React.createElement("tr", null, React.createElement("td", null, "saddgr"), React.createElement("td", null, "考核名称1112"), React.createElement("td", null, "普通考核"), React.createElement("td", null), React.createElement("td", null, "10"), React.createElement("td", null, "10"), React.createElement("td", null, React.createElement("a", {className: "text-primary"}, "编辑"), React.createElement("a", {className: "text-danger"}, "删除"))), React.createElement("tr", null, React.createElement("td", null, "saddgr"), React.createElement("td", null, "考核名称1112"), React.createElement("td", null, "普通考核"), React.createElement("td", null), React.createElement("td", null, "10"), React.createElement("td", null, "10"), React.createElement("td", null, React.createElement("a", {className: "text-primary"}, "编辑"), React.createElement("a", {className: "text-danger"}, "删除"))));
            };
            ;
            TestingItemsDomReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            TestingItemsDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return TestingItemsDomReact;
        }(domCore.DomReact));
        TestingItemsDom.TestingItemsDomReact = TestingItemsDomReact;
        var TestingItemsDomVm = (function (_super) {
            __extends(TestingItemsDomVm, _super);
            function TestingItemsDomVm(config) {
                _super.call(this);
                this.ReactType = TestingItemsDomReact;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
            }
            TestingItemsDomVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return TestingItemsDomVm;
        }(domCore.DomVm));
        TestingItemsDom.TestingItemsDomVm = TestingItemsDomVm;
        var TestingItemsDomStates = (function (_super) {
            __extends(TestingItemsDomStates, _super);
            function TestingItemsDomStates() {
                _super.apply(this, arguments);
            }
            return TestingItemsDomStates;
        }(domCore.DomStates));
        TestingItemsDom.TestingItemsDomStates = TestingItemsDomStates;
        var TestingItemsDomProps = (function (_super) {
            __extends(TestingItemsDomProps, _super);
            function TestingItemsDomProps() {
                _super.apply(this, arguments);
            }
            return TestingItemsDomProps;
        }(domCore.DomProps));
        TestingItemsDom.TestingItemsDomProps = TestingItemsDomProps;
    })(TestingItemsDom = exports.TestingItemsDom || (exports.TestingItemsDom = {}));
});
