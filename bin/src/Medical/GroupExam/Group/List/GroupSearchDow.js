var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Url", "react"], function (require, exports, domFile, urlFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var GroupSearchDow;
    (function (GroupSearchDow) {
        var GroupSearchDowAction = (function (_super) {
            __extends(GroupSearchDowAction, _super);
            function GroupSearchDowAction() {
                _super.apply(this, arguments);
            }
            return GroupSearchDowAction;
        }(domCore.DomAction));
        GroupSearchDow.GroupSearchDowAction = GroupSearchDowAction;
        var GroupSearchDowReact = (function (_super) {
            __extends(GroupSearchDowReact, _super);
            function GroupSearchDowReact() {
                _super.apply(this, arguments);
                this.state = new GroupSearchDowStates();
            }
            GroupSearchDowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-handle"}, React.createElement("div", {className: "col-lg-6 col-md-6 YSm-search"}, React.createElement("input", {className: "col-lg-11 col-md-10 YSu-border-blue ", type: "text", placeholder: "输入单位信息查询", value: this.props.Vm.SearchName, onChange: function (e) { _this.fun_linkName(e); }}), React.createElement("a", {className: "col-lg-1 col-md-2 btn btn-primary", onClick: function () { _this.props.Vm.Search(); }}, "查询")), React.createElement("a", {className: "btn btn-primary", href: "#$NewGroupPage$"}, React.createElement("i", {className: "fa fa-plus"}), "新增团体预约"));
            };
            GroupSearchDowReact.prototype.fun_linkCode = function (e) {
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
            GroupSearchDowReact.prototype.fun_linkName = function (e) {
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
            GroupSearchDowReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.SearchSimpleCode = "";
                this.props.Vm.SearchName = "";
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
                this.forceUpdate();
            };
            GroupSearchDowReact.prototype.fun_searchBtn = function () {
                this.props.Vm.loadPageData(0);
            };
            GroupSearchDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return GroupSearchDowReact;
        }(domCore.DomReact));
        GroupSearchDow.GroupSearchDowReact = GroupSearchDowReact;
        var GroupSearchDowVm = (function (_super) {
            __extends(GroupSearchDowVm, _super);
            function GroupSearchDowVm(config) {
                _super.call(this);
                this.ReactType = GroupSearchDowReact;
                this.IsHideClearBtn = true;
                this.UniId = "";
                this.SearchName = "";
                if (config) {
                    this.UniId = config.UniId;
                }
            }
            GroupSearchDowVm.prototype.loadPageData = function (pageIndex) {
                this.emitAppEvent("loadGrouppagedata", this.UniId, pageIndex);
            };
            GroupSearchDowVm.prototype.Search = function () {
                var vals = this.SearchName;
                urlFile.Core.AkUrl.Current().openUrl("$winInitGroupTreePage$" + vals + "$", true);
            };
            return GroupSearchDowVm;
        }(domCore.DomVm));
        GroupSearchDow.GroupSearchDowVm = GroupSearchDowVm;
        var GroupSearchDowStates = (function (_super) {
            __extends(GroupSearchDowStates, _super);
            function GroupSearchDowStates() {
                _super.apply(this, arguments);
            }
            return GroupSearchDowStates;
        }(domCore.DomStates));
        GroupSearchDow.GroupSearchDowStates = GroupSearchDowStates;
        var GroupSearchDowProps = (function (_super) {
            __extends(GroupSearchDowProps, _super);
            function GroupSearchDowProps() {
                _super.apply(this, arguments);
            }
            return GroupSearchDowProps;
        }(domCore.DomProps));
        GroupSearchDow.GroupSearchDowProps = GroupSearchDowProps;
    })(GroupSearchDow = exports.GroupSearchDow || (exports.GroupSearchDow = {}));
});
