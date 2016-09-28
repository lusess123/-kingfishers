var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var SearchFormDom;
    (function (SearchFormDom) {
        var SearchFormDomAction = (function (_super) {
            __extends(SearchFormDomAction, _super);
            function SearchFormDomAction() {
                _super.apply(this, arguments);
            }
            return SearchFormDomAction;
        }(domCore.DomAction));
        SearchFormDom.SearchFormDomAction = SearchFormDomAction;
        var SearchFormDomReact = (function (_super) {
            __extends(SearchFormDomReact, _super);
            function SearchFormDomReact() {
                _super.apply(this, arguments);
                this.state = new SearchFormDomStates();
            }
            SearchFormDomReact.prototype.fun_searchBtn = function () {
            };
            SearchFormDomReact.prototype.fun_seachClearBtn = function () {
            };
            SearchFormDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-search-panel"}, React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "搜索文本：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {type: "text", placeholder: ".."}))), React.createElement("div", {className: "col-xs-12 text-center"}, React.createElement("a", {className: "btn btn-primary btn-sm", onClick: function () { _this.fun_searchBtn(); }}, "搜索"), React.createElement("a", {className: "btn btn-primary btn-sm " + (this.props.Vm.IsHideClearBtn ? "hide" : ""), onClick: function () { _this.fun_seachClearBtn(); }}, "清空"))));
            };
            SearchFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return SearchFormDomReact;
        }(domCore.DomReact));
        SearchFormDom.SearchFormDomReact = SearchFormDomReact;
        var SearchFormDomVm = (function (_super) {
            __extends(SearchFormDomVm, _super);
            function SearchFormDomVm() {
                _super.apply(this, arguments);
                this.ReactType = SearchFormDomReact;
            }
            return SearchFormDomVm;
        }(domCore.DomVm));
        SearchFormDom.SearchFormDomVm = SearchFormDomVm;
        var SearchFormDomStates = (function (_super) {
            __extends(SearchFormDomStates, _super);
            function SearchFormDomStates() {
                _super.apply(this, arguments);
            }
            return SearchFormDomStates;
        }(domCore.DomStates));
        SearchFormDom.SearchFormDomStates = SearchFormDomStates;
        var SearchFormDomProps = (function (_super) {
            __extends(SearchFormDomProps, _super);
            function SearchFormDomProps() {
                _super.apply(this, arguments);
            }
            return SearchFormDomProps;
        }(domCore.DomProps));
        SearchFormDom.SearchFormDomProps = SearchFormDomProps;
    })(SearchFormDom = exports.SearchFormDom || (exports.SearchFormDom = {}));
});
