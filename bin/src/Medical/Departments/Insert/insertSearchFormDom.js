var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/0Dom"], function (require, exports, React, domFile) {
    "use strict";
    var domCore = domFile.Core;
    var InsertSearchFormDom;
    (function (InsertSearchFormDom) {
        var InsertSearchFormDomAction = (function (_super) {
            __extends(InsertSearchFormDomAction, _super);
            function InsertSearchFormDomAction() {
                _super.apply(this, arguments);
            }
            return InsertSearchFormDomAction;
        }(domCore.DomAction));
        InsertSearchFormDom.InsertSearchFormDomAction = InsertSearchFormDomAction;
        var InsertSearchFormDomReact = (function (_super) {
            __extends(InsertSearchFormDomReact, _super);
            function InsertSearchFormDomReact() {
                _super.apply(this, arguments);
                this.state = new InsertSearchFormDomStates();
            }
            InsertSearchFormDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-handle clearfix"}, React.createElement("div", {className: "col-lg-8 col-md-8 YSm-search"}, React.createElement("input", {className: "col-lg-11 col-md-10 YSu-border-blue ", type: "text", placeholder: "输入体检号查询", value: this.props.Vm.SearchName, onChange: function (e) { _this.fun_linkName(e); }}), React.createElement("a", {className: "col-lg-1 col-md-2 btn btn-primary", onClick: function () { _this.fun_searchBtn(); }}, "查询")));
            };
            InsertSearchFormDomReact.prototype.fun_linkCode = function (e) {
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
            InsertSearchFormDomReact.prototype.fun_linkName = function (e) {
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
            InsertSearchFormDomReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.SearchSimpleCode = "";
                this.props.Vm.SearchName = "";
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
            };
            InsertSearchFormDomReact.prototype.fun_searchBtn = function () {
                this.props.Vm.loadPageData(0);
            };
            InsertSearchFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return InsertSearchFormDomReact;
        }(domCore.DomReact));
        InsertSearchFormDom.InsertSearchFormDomReact = InsertSearchFormDomReact;
        var InsertSearchFormDomVm = (function (_super) {
            __extends(InsertSearchFormDomVm, _super);
            function InsertSearchFormDomVm(config) {
                _super.call(this);
                this.ReactType = InsertSearchFormDomReact;
                this.IsHideClearBtn = true;
                this.UniId = "";
                if (config) {
                    this.UniId = config.UniId;
                }
            }
            InsertSearchFormDomVm.prototype.loadPageData = function (pageIndex) {
                this.emitAppEvent("medical/base/anomaly/list/Sreach", this.UniId, this.SearchName);
            };
            return InsertSearchFormDomVm;
        }(domCore.DomVm));
        InsertSearchFormDom.InsertSearchFormDomVm = InsertSearchFormDomVm;
        var InsertSearchFormDomStates = (function (_super) {
            __extends(InsertSearchFormDomStates, _super);
            function InsertSearchFormDomStates() {
                _super.apply(this, arguments);
            }
            return InsertSearchFormDomStates;
        }(domCore.DomStates));
        InsertSearchFormDom.InsertSearchFormDomStates = InsertSearchFormDomStates;
        var InsertSearchFormDomProps = (function (_super) {
            __extends(InsertSearchFormDomProps, _super);
            function InsertSearchFormDomProps() {
                _super.apply(this, arguments);
            }
            return InsertSearchFormDomProps;
        }(domCore.DomProps));
        InsertSearchFormDom.InsertSearchFormDomProps = InsertSearchFormDomProps;
    })(InsertSearchFormDom = exports.InsertSearchFormDom || (exports.InsertSearchFormDom = {}));
});
