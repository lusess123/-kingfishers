var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var TabDom;
    (function (TabDom) {
        var TabDomAction = (function (_super) {
            __extends(TabDomAction, _super);
            function TabDomAction() {
                _super.apply(this, arguments);
            }
            return TabDomAction;
        }(domCore.DomAction));
        TabDom.TabDomAction = TabDomAction;
        var TabDomReact = (function (_super) {
            __extends(TabDomReact, _super);
            function TabDomReact() {
                _super.apply(this, arguments);
                this.state = new TabDomStates();
            }
            TabDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "Hm-workflow-tab clearfix YSm-tab"}, React.createElement("ul", {className: "nav nav-tabs pull-left"}, this.props.Vm.TabDomItemList.map(function (item) {
                    return React.createElement("li", {className: "nav-item Hu-pointer" + (item.IsActive ? " active" : " "), onClick: function () { _this.fun_TabsClick(item); }}, item.Title);
                })), React.createElement("ul", {className: "nav nav-pills pull-right hide"}, React.createElement("li", {className: "nav-item"}, React.createElement("i", {className: "Hu-pointer icon-repeat fa fa-repeat"})), React.createElement("li", {className: "nav-item"}, React.createElement("i", {className: "Hu-pointer" + ("icon-" + (this.props.Vm.IsHide ? "chevron-up " : "chevron-down ")) + ("fa fa-" + (this.props.Vm.IsHide ? "chevron-up " : "chevron-down ")), onClick: function () { _this.fun_WorkShow(); }})), React.createElement("li", {className: "nav-item"}, React.createElement("i", {className: "Hu-pointer  icon-resize-full fa fa-expand"})))), React.createElement("div", {className: (this.props.Vm.IsHide ? "hide" : "")}, this.props.Vm.TabDomItemList.map(function (item) {
                    return React.createElement("div", {className: "tab-content " + (item.IsActive ? "" : " hide")}, _this._tDom(item.DomObj, { nullNode: React.createElement("span", null, React.createElement("i", {className: "icon-spinner icon-spin a  fa-spinner fa-spin "}), "等待载入选项卡...") }));
                })));
            };
            TabDomReact.prototype.fun_TabsClick = function (item) {
                this.props.Vm.tabActive(item);
                this.forceUpdate();
            };
            TabDomReact.prototype.fun_WorkShow = function () {
                this.props.Vm.IsHide = !this.props.Vm.IsHide;
                this.forceUpdate();
            };
            TabDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return TabDomReact;
        }(domCore.DomReact));
        TabDom.TabDomReact = TabDomReact;
        var TabDomVm = (function (_super) {
            __extends(TabDomVm, _super);
            function TabDomVm(config) {
                _super.call(this);
                this.ReactType = TabDomReact;
                this.IsHide = false;
                if (config) {
                    if (config.Items) {
                        this.TabDomItemList = config.Items;
                    }
                }
            }
            TabDomVm.prototype.tabActive = function (item) {
                this.TabDomItemList.forEach(function (n) {
                    n.IsActive = false;
                });
                item.IsActive = true;
                if (item.ReloadFun) {
                    item.ReloadFun(item);
                }
                item.IsNoFirst = true;
            };
            return TabDomVm;
        }(domCore.DomVm));
        TabDom.TabDomVm = TabDomVm;
        var TabDomStates = (function (_super) {
            __extends(TabDomStates, _super);
            function TabDomStates() {
                _super.apply(this, arguments);
            }
            return TabDomStates;
        }(domCore.DomStates));
        TabDom.TabDomStates = TabDomStates;
        var TabDomProps = (function (_super) {
            __extends(TabDomProps, _super);
            function TabDomProps() {
                _super.apply(this, arguments);
            }
            return TabDomProps;
        }(domCore.DomProps));
        TabDom.TabDomProps = TabDomProps;
    })(TabDom = exports.TabDom || (exports.TabDom = {}));
});
