var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var AppraisalItemSearchDom;
    (function (AppraisalItemSearchDom) {
        var AppraisalItemSearchDomAction = (function (_super) {
            __extends(AppraisalItemSearchDomAction, _super);
            function AppraisalItemSearchDomAction() {
                _super.apply(this, arguments);
            }
            return AppraisalItemSearchDomAction;
        }(domCore.DomAction));
        AppraisalItemSearchDom.AppraisalItemSearchDomAction = AppraisalItemSearchDomAction;
        var AppraisalItemSearchDomReact = (function (_super) {
            __extends(AppraisalItemSearchDomReact, _super);
            function AppraisalItemSearchDomReact() {
                _super.apply(this, arguments);
                this.state = new AppraisalItemSearchDomStates();
            }
            //public pSender(): React.ReactElement<any> {
            //    return <div className="Hm-search-panel">
            //        <form className="clearfix">
            //            <div className="large-6 small-12 columns">
            //                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            //                    <div className="pull-left Hu-label"><label  className="pull-right">项目名称：</label></div>
            //                    <div className="pull-left Hu-input"><input className="form-control" placeholder=".." type="text" value={this.props.Vm.SearchName} onChange={(e) => { this.fun_linkName(e); } }></input></div>
            //                </div>
            //            </div>
            //            <div className="col-xs-12 text-center">
            //                <a  className="btn btn-primary btn-sm" onClick={() => { this.fun_searchBtn(); } }>搜索</a>
            //                <a  className={"btn btn-primary btn-sm " + (this.props.Vm.IsHideClearBtn ? "hide" : "") } onClick={() => { this.fun_seachClearBtn(); } } >清空</a>
            //            </div>
            //        </form>
            //    </div>
            //}
            AppraisalItemSearchDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-search"}, React.createElement("div", {className: "input-group"}, React.createElement("input", {type: "text", className: "Hg-width YSu-border-blue ", placeholder: "输入分类名、项目名称查询", value: this.props.Vm.SearchName, onChange: function (e) { _this.fun_linkName(e); }}), React.createElement("div", {className: "input-group-addon", onClick: function () { return _this.fun_searchBtn(); }}, React.createElement("i", {className: "fa fa-search"}))));
            };
            AppraisalItemSearchDomReact.prototype.fun_linkName = function (e) {
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
            AppraisalItemSearchDomReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.SearchName = "";
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
                this.forceUpdate();
            };
            AppraisalItemSearchDomReact.prototype.fun_searchBtn = function () {
                this.props.Vm.loadPageData(0);
            };
            AppraisalItemSearchDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AppraisalItemSearchDomReact;
        }(domCore.DomReact));
        AppraisalItemSearchDom.AppraisalItemSearchDomReact = AppraisalItemSearchDomReact;
        var AppraisalItemSearchDomVm = (function (_super) {
            __extends(AppraisalItemSearchDomVm, _super);
            function AppraisalItemSearchDomVm(config) {
                _super.call(this);
                this.ReactType = AppraisalItemSearchDomReact;
                this.IsHideClearBtn = true;
                this.UniId = "";
                this.UniId = config.UniId;
            }
            AppraisalItemSearchDomVm.prototype.loadPageData = function (pageIndex) {
                this.emitAppEvent("AppraisalItemSelector/loadpagedata", this.UniId, pageIndex);
            };
            return AppraisalItemSearchDomVm;
        }(domCore.DomVm));
        AppraisalItemSearchDom.AppraisalItemSearchDomVm = AppraisalItemSearchDomVm;
        var AppraisalItemSearchDomStates = (function (_super) {
            __extends(AppraisalItemSearchDomStates, _super);
            function AppraisalItemSearchDomStates() {
                _super.apply(this, arguments);
            }
            return AppraisalItemSearchDomStates;
        }(domCore.DomStates));
        AppraisalItemSearchDom.AppraisalItemSearchDomStates = AppraisalItemSearchDomStates;
        var AppraisalItemSearchDomProps = (function (_super) {
            __extends(AppraisalItemSearchDomProps, _super);
            function AppraisalItemSearchDomProps() {
                _super.apply(this, arguments);
            }
            return AppraisalItemSearchDomProps;
        }(domCore.DomProps));
        AppraisalItemSearchDom.AppraisalItemSearchDomProps = AppraisalItemSearchDomProps;
    })(AppraisalItemSearchDom = exports.AppraisalItemSearchDom || (exports.AppraisalItemSearchDom = {}));
});
