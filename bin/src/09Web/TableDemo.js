var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../01core/0Dom", "react", "react-dom"], function (require, exports, domFile, React, ReactDOM) {
    "use strict";
    var domCore = domFile.Core;
    var Web;
    (function (Web) {
        var TableDemoAction = (function (_super) {
            __extends(TableDemoAction, _super);
            function TableDemoAction() {
                _super.apply(this, arguments);
            }
            return TableDemoAction;
        }(domCore.DomAction));
        Web.TableDemoAction = TableDemoAction;
        var TableDemoReact = (function (_super) {
            __extends(TableDemoReact, _super);
            function TableDemoReact() {
                _super.apply(this, arguments);
            }
            TableDemoReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("th", null, React.createElement("div", {onClick: function () { _this.fgetWidth(); }}, React.createElement("i", {className: "fa fa-caret-left"}), this.props.Vm.width00, React.createElement("i", {className: "fa fa-caret-right"}))), React.createElement("th", null, React.createElement("div", null, React.createElement("i", {className: "fa fa-caret-left"}), this.props.Vm.width01, React.createElement("i", {className: "fa fa-caret-right", draggable: true}))), React.createElement("th", null, this.props.Vm.width11), React.createElement("th", null, this.props.Vm.width12)), React.createElement("tr", null, React.createElement("td", null, React.createElement("div", null, React.createElement("i", {className: "fa fa-caret-left"}), React.createElement("i", {className: "fa fa-caret-right"}))), React.createElement("td", null, React.createElement("div", null, React.createElement("i", {className: "fa fa-caret-left"}), React.createElement("i", {className: "fa fa-caret-right"}))), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null)))));
            };
            TableDemoReact.prototype.fgetWidth = function () {
                var _this = this;
                var _dom = ReactDOM.findDOMNode(this);
                $(_dom).find("th").each(function (index, elem) {
                    switch (index) {
                        case 0:
                            //  alert($(elem).width());
                            _this.props.Vm.width00 = $(elem).width();
                            break;
                        case 1:
                            _this.props.Vm.width01 = $(elem).width();
                            break;
                        case 2:
                            _this.props.Vm.width11 = $(elem).width();
                            break;
                        case 3:
                            _this.props.Vm.width12 = $(elem).width();
                            break;
                        default:
                            break;
                    }
                });
                this.props.Vm.forceUpdate("");
                //  this.forceUpdate();
            };
            TableDemoReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
                this.fgetWidth();
                // var _dom = this.getDOMNode();
                // alert();
                this.forceUpdate();
            };
            return TableDemoReact;
        }(domCore.DomReact));
        Web.TableDemoReact = TableDemoReact;
        var TableDemoVm = (function (_super) {
            __extends(TableDemoVm, _super);
            function TableDemoVm() {
                _super.apply(this, arguments);
                this.ReactType = TableDemoReact;
                this.width00 = 123;
            }
            return TableDemoVm;
        }(domCore.DomVm));
        Web.TableDemoVm = TableDemoVm;
        var TableDemoStates = (function (_super) {
            __extends(TableDemoStates, _super);
            function TableDemoStates() {
                _super.apply(this, arguments);
            }
            return TableDemoStates;
        }(domCore.DomStates));
        Web.TableDemoStates = TableDemoStates;
        var TableDemoProps = (function (_super) {
            __extends(TableDemoProps, _super);
            function TableDemoProps() {
                _super.apply(this, arguments);
            }
            return TableDemoProps;
        }(domCore.DomProps));
        Web.TableDemoProps = TableDemoProps;
    })(Web = exports.Web || (exports.Web = {}));
});
