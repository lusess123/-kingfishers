var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../04page/BaseWebPage", "./../../02col/01single/Detail", "react", "react-dom", "./../../01core/PromiseTest"], function (require, exports, iocFile, basewedPageFile, detailFile, React, ReactDOM, PromiseTestFile) {
    "use strict";
    var Test;
    (function (Test) {
        var TestAction = (function (_super) {
            __extends(TestAction, _super);
            function TestAction() {
                _super.apply(this, arguments);
            }
            return TestAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        Test.TestAction = TestAction;
        var TestReact = (function (_super) {
            __extends(TestReact, _super);
            function TestReact() {
                _super.apply(this, arguments);
                this.state = new TestStates();
            }
            TestReact.prototype.fun_click = function () {
                var ff = new PromiseTestFile.PromiseTest();
                ff.ff();
                //urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", {json:"class1.json"}, (a) => {
                //    alert(JSON.stringify(a));
                //});
            };
            TestReact.prototype.fun_Pclick = function () {
                this.props.Vm.SendPageActor({ ToPanelName: "" }, new Date().toString());
            };
            TestReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", null, React.createElement("button", {onClick: function () { _this.fun_click(); }})), React.createElement("div", null, React.createElement("button", {onClick: function () { _this.fun_Pclick(); }}, "页面通信")), React.createElement("div", null, " ", this.props.Vm.Is1 ? this.props.Vm.DetailVm1.intoDom() : this.props.Vm.DetailVm2.intoDom(), " "), React.createElement("div", null, React.createElement("button", {className: "button", onClick: function () {
                    _this.props.Vm.Is1 = !_this.props.Vm.Is1;
                    _this.props.Vm.DetailVm1.IsChange = true;
                    _this.props.Vm.DetailVm2.IsChange = true;
                    //$.post("/RightCloud/SysFeed/GetFeed", (d) => {
                    //    alert(JSON.stringify(d));
                    //    this.props.Vm.forceUpdate("");
                    //});
                    _this.fun_click();
                }}, "切换"), React.createElement("button", {onClick: function () { _this.props.Vm.testEvent(); }}, "事件处理"), React.createElement("button", {onClick: function () { _this.props.Vm.testBind(); }}, "绑定"), React.createElement("button", {onClick: function () { _this.props.Vm.testUnBind(); }}, "解绑")), React.createElement("ul", {className: "dropdown menu", "data-dropdown-menu": true}, React.createElement("li", null, React.createElement("a", {href: "#"}, "Item 1"), React.createElement("ul", {class: "menu"}, React.createElement("li", null, React.createElement("a", {href: "#"}, "Item 1A")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Item 2A")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Item 3A")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Item 4A")))), React.createElement("li", null, React.createElement("a", {href: "#"}, "Item 2")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Item 3")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Item 4"))));
            };
            TestReact.prototype.pComponentDidMount = function () {
                //    alert(123);
                var elem = ReactDOM.findDOMNode(this);
                // var _$th = $(elem);
                _super.prototype.pComponentDidMount.call(this);
                //_$th.foundation();
            };
            return TestReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        Test.TestReact = TestReact;
        var TestVm = (function (_super) {
            __extends(TestVm, _super);
            function TestVm() {
                _super.call(this);
                this.ReactType = TestReact;
                this.DetailVm1 = new detailFile.ui.DetailVm();
                this.DetailVm1.initDataValue("111");
                this.DetailVm2 = new detailFile.ui.DetailVm();
                this.DetailVm2.initDataValue("222");
                this.EventObj = $({});
            }
            TestVm.prototype.testEvent = function () {
                this.EventObj.trigger("click", ["data123"]);
            };
            TestVm.prototype.testBind = function () {
                this.EventObj.on("click", function (a, b, c) {
                    alert(b);
                });
            };
            TestVm.prototype.testUnBind = function () {
                this.EventObj.unbind();
            };
            return TestVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        Test.TestVm = TestVm;
        var TestStates = (function (_super) {
            __extends(TestStates, _super);
            function TestStates() {
                _super.apply(this, arguments);
            }
            return TestStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        Test.TestStates = TestStates;
        var TestProps = (function (_super) {
            __extends(TestProps, _super);
            function TestProps() {
                _super.apply(this, arguments);
            }
            return TestProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        Test.TestProps = TestProps;
        iocFile.Core.Ioc.Current().RegisterType("TEST", basewedPageFile.Web.BaseWebPageVm, TestVm);
        iocFile.Core.Ioc.Current().RegisterType("ORG", basewedPageFile.Web.BaseWebPageVm, TestVm);
    })(Test = exports.Test || (exports.Test = {}));
});
