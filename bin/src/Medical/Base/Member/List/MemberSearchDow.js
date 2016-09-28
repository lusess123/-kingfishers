var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var MemberSearchDow;
    (function (MemberSearchDow) {
        var MemberSearchDowAction = (function (_super) {
            __extends(MemberSearchDowAction, _super);
            function MemberSearchDowAction() {
                _super.apply(this, arguments);
            }
            return MemberSearchDowAction;
        }(domCore.DomAction));
        MemberSearchDow.MemberSearchDowAction = MemberSearchDowAction;
        var MemberSearchDowReact = (function (_super) {
            __extends(MemberSearchDowReact, _super);
            function MemberSearchDowReact() {
                _super.apply(this, arguments);
                this.state = new MemberSearchDowStates();
            }
            MemberSearchDowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-search-panel"}, React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "姓名：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {className: "form-control", placeholder: "..", type: "text", value: this.props.Vm.SearchSimpleCode, onChange: function (e) { _this.fun_linkCode(e); }}))), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "联系方式：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {className: "form-control", placeholder: "..", type: "text", value: this.props.Vm.SearchName, onChange: function (e) { _this.fun_linkName(e); }}))), React.createElement("div", {className: "col-xs-12 text-center"}, React.createElement("a", {className: "btn btn-primary btn-sm", onClick: function () { _this.fun_searchBtn(); }}, "搜索"), React.createElement("a", {className: "btn btn-primary btn-sm " + (this.props.Vm.IsHideClearBtn ? " hide" : ""), onClick: function () { _this.fun_seachClearBtn(); }}, "清空"))));
            };
            MemberSearchDowReact.prototype.fun_linkCode = function (e) {
                var _val = e.target["value"];
                this.props.Vm.SearchSimpleCode = _val;
                if (!_val || _val == "") {
                    this.props.Vm.IsHideClearBtn = true;
                }
                else {
                    this.props.Vm.IsHideClearBtn = false;
                }
                this.forceUpdate();
            };
            MemberSearchDowReact.prototype.fun_linkName = function (e) {
                var _val = e.target["value"];
                this.props.Vm.SearchName = _val;
                if (!_val || _val == "") {
                    this.props.Vm.IsHideClearBtn = true;
                }
                else {
                    this.props.Vm.IsHideClearBtn = false;
                }
                this.forceUpdate();
            };
            MemberSearchDowReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.SearchSimpleCode = "";
                this.props.Vm.SearchName = "";
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
                this.forceUpdate();
            };
            MemberSearchDowReact.prototype.fun_searchBtn = function () {
                this.props.Vm.loadPageData(0);
            };
            MemberSearchDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MemberSearchDowReact;
        }(domCore.DomReact));
        MemberSearchDow.MemberSearchDowReact = MemberSearchDowReact;
        var MemberSearchDowVm = (function (_super) {
            __extends(MemberSearchDowVm, _super);
            function MemberSearchDowVm(config) {
                _super.call(this);
                this.ReactType = MemberSearchDowReact;
                this.IsHideClearBtn = true;
                this.UniId = "";
                this.UniId = config.UniId;
            }
            ;
            MemberSearchDowVm.prototype.loadPageData = function (pageIndex) {
                this.emitAppEvent("loadMemberpagedata", this.UniId, pageIndex);
            };
            return MemberSearchDowVm;
        }(domCore.DomVm));
        MemberSearchDow.MemberSearchDowVm = MemberSearchDowVm;
        var MemberSearchDowStates = (function (_super) {
            __extends(MemberSearchDowStates, _super);
            function MemberSearchDowStates() {
                _super.apply(this, arguments);
            }
            return MemberSearchDowStates;
        }(domCore.DomStates));
        MemberSearchDow.MemberSearchDowStates = MemberSearchDowStates;
        var MemberSearchDowProps = (function (_super) {
            __extends(MemberSearchDowProps, _super);
            function MemberSearchDowProps() {
                _super.apply(this, arguments);
            }
            return MemberSearchDowProps;
        }(domCore.DomProps));
        MemberSearchDow.MemberSearchDowProps = MemberSearchDowProps;
    })(MemberSearchDow = exports.MemberSearchDow || (exports.MemberSearchDow = {}));
});
