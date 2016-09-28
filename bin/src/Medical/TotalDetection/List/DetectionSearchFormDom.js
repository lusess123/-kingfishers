var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/0Dom"], function (require, exports, React, domFile) {
    "use strict";
    var domCore = domFile.Core;
    var DetectionSearchFormDom;
    (function (DetectionSearchFormDom) {
        var DetectionSearchFormDomAction = (function (_super) {
            __extends(DetectionSearchFormDomAction, _super);
            function DetectionSearchFormDomAction() {
                _super.apply(this, arguments);
            }
            return DetectionSearchFormDomAction;
        }(domCore.DomAction));
        DetectionSearchFormDom.DetectionSearchFormDomAction = DetectionSearchFormDomAction;
        var DetectionSearchFormDomReact = (function (_super) {
            __extends(DetectionSearchFormDomReact, _super);
            function DetectionSearchFormDomReact() {
                _super.apply(this, arguments);
                this.state = new DetectionSearchFormDomStates();
            }
            DetectionSearchFormDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-handle clearfix"}, React.createElement("div", {className: "col-lg-8 col-md-8 YSm-search"}, React.createElement("input", {className: "col-lg-11 col-md-10 YSu-border-blue ", type: "text", placeholder: "输入体检号查询", value: this.props.Vm.SearchName, onChange: function (e) { _this.props.Vm.fun_linkName(e); }}), React.createElement("a", {className: "col-lg-1 col-md-2 btn btn-primary", onClick: function () { _this.fun_searchBtn(); }}, "查询")));
            };
            //private fun_linkCode(e) {
            //    var _val = e.target["value"];
            //    this.props.Vm.SearchSimpleCode = _val;
            //    if (!_val || _val == "") {
            //        this.props.Vm.IsHideClearBtn = true;
            //    }
            //    else {
            //        this.props.Vm.IsHideClearBtn = false;
            //    }
            //    this.forceUpdate();
            //}
            //private fun_linkName(e) {
            //    var _val = e.target["value"];
            //    this.props.Vm.SearchName = _val;
            //    if (!_val || _val == "") {
            //        this.props.Vm.IsHideClearBtn = true;
            //    }
            //    else {
            //        this.props.Vm.IsHideClearBtn = false;
            //    }
            //    this.forceUpdate();
            //}
            //private fun_seachClearBtn() {
            //    this.props.Vm.SearchSimpleCode = "";
            //    this.props.Vm.SearchName = "";
            //    this.props.Vm.IsHideClearBtn = true;
            //    this.props.Vm.loadPageData(0);
            //}
            DetectionSearchFormDomReact.prototype.fun_searchBtn = function () {
                this.props.Vm.loadPageData(0);
            };
            DetectionSearchFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DetectionSearchFormDomReact;
        }(domCore.DomReact));
        DetectionSearchFormDom.DetectionSearchFormDomReact = DetectionSearchFormDomReact;
        var DetectionSearchFormDomVm = (function (_super) {
            __extends(DetectionSearchFormDomVm, _super);
            function DetectionSearchFormDomVm(config) {
                _super.call(this);
                this.ReactType = DetectionSearchFormDomReact;
                this.IsHideClearBtn = true;
                this.UniId = "";
                if (config) {
                    this.UniId = config.UniId;
                }
            }
            DetectionSearchFormDomVm.prototype.loadPageData = function (pageIndex) {
                this.emitAppEvent("medical/base/anomaly/list/loadpagedata", this.UniId, pageIndex, this.SearchName);
            };
            DetectionSearchFormDomVm.prototype.fun_linkName = function (e) {
                var _val = e.target["value"];
                this.SearchName = _val;
                if (!_val || _val == "") {
                    this.IsHideClearBtn = true;
                }
                else {
                    this.IsHideClearBtn = false;
                }
                this.forceUpdate("");
            };
            return DetectionSearchFormDomVm;
        }(domCore.DomVm));
        DetectionSearchFormDom.DetectionSearchFormDomVm = DetectionSearchFormDomVm;
        var DetectionSearchFormDomStates = (function (_super) {
            __extends(DetectionSearchFormDomStates, _super);
            function DetectionSearchFormDomStates() {
                _super.apply(this, arguments);
            }
            return DetectionSearchFormDomStates;
        }(domCore.DomStates));
        DetectionSearchFormDom.DetectionSearchFormDomStates = DetectionSearchFormDomStates;
        var DetectionSearchFormDomProps = (function (_super) {
            __extends(DetectionSearchFormDomProps, _super);
            function DetectionSearchFormDomProps() {
                _super.apply(this, arguments);
            }
            return DetectionSearchFormDomProps;
        }(domCore.DomProps));
        DetectionSearchFormDom.DetectionSearchFormDomProps = DetectionSearchFormDomProps;
    })(DetectionSearchFormDom = exports.DetectionSearchFormDom || (exports.DetectionSearchFormDom = {}));
});
