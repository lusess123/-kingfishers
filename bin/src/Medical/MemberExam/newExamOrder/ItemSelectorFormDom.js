var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "./../../../01core/Url", "./../../../05tool/Pagination", "react", "./projGridRowDom"], function (require, exports, domFile, urlFile, pagination, React, rowFile) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var ItemSelectorFormDom;
    (function (ItemSelectorFormDom) {
        var ItemSelectorFormDomAction = (function (_super) {
            __extends(ItemSelectorFormDomAction, _super);
            function ItemSelectorFormDomAction() {
                _super.apply(this, arguments);
            }
            return ItemSelectorFormDomAction;
        }(domCore.DomAction));
        ItemSelectorFormDom.ItemSelectorFormDomAction = ItemSelectorFormDomAction;
        var ItemSelectorFormDomReact = (function (_super) {
            __extends(ItemSelectorFormDomReact, _super);
            function ItemSelectorFormDomReact() {
                _super.apply(this, arguments);
                this.state = new ItemSelectorFormDomStates();
            }
            ItemSelectorFormDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-modal-left"}, React.createElement("div", {className: "YSm-search"}, React.createElement("div", {className: "input-group"}, React.createElement("input", {type: "text", className: "Hg-width YSu-border-blue ", placeholder: "输入科室、项目查询", value: this.props.Vm.SearchText, onChange: function (e) { _this.fun_linkText(e); }}), React.createElement("div", {className: "input-group-addon"}, React.createElement("i", {className: "fa fa-search", onClick: function () { return _this.searchClick(); }})))), React.createElement("div", {className: "Hm-table table-responsive"}, React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, "选择"), React.createElement("th", null, "科室"), React.createElement("th", null, "项目"), React.createElement("th", null, "价格（元）"))), this.props.Vm.RowList.map(function (r) {
                    return r.intoDom();
                })), React.createElement("div", {className: "bottomPager"}, this._tDom(this.props.Vm.PaginationVm))));
            };
            ItemSelectorFormDomReact.prototype.searchClick = function () {
                this.props.Vm.search(0);
            };
            ItemSelectorFormDomReact.prototype.fun_linkText = function (e) {
                var _val = e.target["value"];
                this.props.Vm.SearchText = _val;
                this.forceUpdate();
            };
            ItemSelectorFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ItemSelectorFormDomReact;
        }(domCore.DomReact));
        ItemSelectorFormDom.ItemSelectorFormDomReact = ItemSelectorFormDomReact;
        var ItemSelectorFormDomVm = (function (_super) {
            __extends(ItemSelectorFormDomVm, _super);
            function ItemSelectorFormDomVm(config) {
                _super.call(this);
                this.ReactType = ItemSelectorFormDomReact;
                this.RowList = [];
                if (config) {
                    this.UniId = config.UniId;
                    this.init(config);
                }
            }
            ItemSelectorFormDomVm.prototype.init = function (config) {
                var _this = this;
                this.PagerListData = config.PagerListData;
                this.PaginationVm = new pagination.tool.PaginationVm();
                var pager = this.PagerListData.Pager;
                this.PaginationVm.PageNo = pager.PageNo;
                this.PaginationVm.PageSize = pager.PageSize;
                this.PaginationVm.TotalCount = pager.TotalCount;
                this.PaginationVm.isPartHidden = true;
                this.PaginationVm.PageClickEvent = function (pageIndex) {
                    _this.search(pageIndex);
                };
                if (this.PagerListData.ListData) {
                    this.RowList = [];
                    this.PagerListData.ListData.forEach(function (data) {
                        var rowVm = new rowFile.ProjGridRowDom.ProjGridRowDomVm({ RowData: data, UniId: _this.UniId });
                        _this.RowList.push(rowVm);
                    });
                }
            };
            ItemSelectorFormDomVm.prototype.search = function (pageIndex) {
                var _this = this;
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/MedicalCenter/PackageSelector/SearchExamItems", {
                    searchText: this.SearchText,
                    pager: JSON.stringify(_page)
                }, function (a) {
                    if (a && a.Data) {
                        var pageConfig = { PagerListData: a.Data, UniId: _this.UniId };
                        _this.init(pageConfig);
                        _this.IsChange = true;
                        _this.forceUpdate("");
                    }
                });
            };
            return ItemSelectorFormDomVm;
        }(domCore.DomVm));
        ItemSelectorFormDom.ItemSelectorFormDomVm = ItemSelectorFormDomVm;
        var ItemSelectorFormDomStates = (function (_super) {
            __extends(ItemSelectorFormDomStates, _super);
            function ItemSelectorFormDomStates() {
                _super.apply(this, arguments);
            }
            return ItemSelectorFormDomStates;
        }(domCore.DomStates));
        ItemSelectorFormDom.ItemSelectorFormDomStates = ItemSelectorFormDomStates;
        var ItemSelectorFormDomProps = (function (_super) {
            __extends(ItemSelectorFormDomProps, _super);
            function ItemSelectorFormDomProps() {
                _super.apply(this, arguments);
            }
            return ItemSelectorFormDomProps;
        }(domCore.DomProps));
        ItemSelectorFormDom.ItemSelectorFormDomProps = ItemSelectorFormDomProps;
    })(ItemSelectorFormDom = exports.ItemSelectorFormDom || (exports.ItemSelectorFormDom = {}));
});
