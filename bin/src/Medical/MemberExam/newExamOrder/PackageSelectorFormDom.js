var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "./../../../01core/Url", "./../../../05tool/Pagination", "react", "./mealGridRowDom"], function (require, exports, domFile, urlFile, pagination, React, rowFile) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var PackageSelectorFormDom;
    (function (PackageSelectorFormDom) {
        var PackageSelectorFormDomAction = (function (_super) {
            __extends(PackageSelectorFormDomAction, _super);
            function PackageSelectorFormDomAction() {
                _super.apply(this, arguments);
            }
            return PackageSelectorFormDomAction;
        }(domCore.DomAction));
        PackageSelectorFormDom.PackageSelectorFormDomAction = PackageSelectorFormDomAction;
        var PackageSelectorFormDomReact = (function (_super) {
            __extends(PackageSelectorFormDomReact, _super);
            function PackageSelectorFormDomReact() {
                _super.apply(this, arguments);
                this.state = new PackageSelectorFormDomStates();
            }
            PackageSelectorFormDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "clearfix"}, React.createElement("div", {className: "col-lg-8 col-md-8 YSm-modal-left"}, React.createElement("div", {className: "YSm-search"}, React.createElement("div", {className: "input-group"}, React.createElement("input", {type: "text", className: "Hg-width", placeholder: "输入套餐名、简码查询", value: this.props.Vm.SearchText, onChange: function (e) { _this.fun_linkText(e); }}), React.createElement("div", {className: "input-group-addon"}, React.createElement("i", {className: "fa fa-search", onClick: function () { return _this.searchClick(); }})))), React.createElement("div", {className: "Hm-table table-responsive"}, React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, "选择"), React.createElement("th", null, "套餐"), React.createElement("th", null, "套餐描述"), React.createElement("th", null, "个人价格（元）"), React.createElement("th", null, "团体价格（元）"), React.createElement("th", null, "套餐项目"))), this.props.Vm.RowList.map(function (r) {
                    return r.intoDom();
                })), React.createElement("div", {className: "bottomPager"}, this._tDom(this.props.Vm.PaginationVm)))), React.createElement("div", {className: "col-lg-4 col-md-4 YSm-modal-right"}, React.createElement("p", {className: "YSu-title"}, "套餐项目"), React.createElement("ul", {className: "nav nav-pills"}, this.props.Vm.PackageItemList.map(function (item) {
                    return React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link"}, item.Name));
                }))));
            };
            PackageSelectorFormDomReact.prototype.searchClick = function () {
                this.props.Vm.search(0);
            };
            PackageSelectorFormDomReact.prototype.fun_linkText = function (e) {
                var _val = e.target["value"];
                this.props.Vm.SearchText = _val;
                this.forceUpdate();
            };
            PackageSelectorFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return PackageSelectorFormDomReact;
        }(domCore.DomReact));
        PackageSelectorFormDom.PackageSelectorFormDomReact = PackageSelectorFormDomReact;
        var PackageSelectorFormDomVm = (function (_super) {
            __extends(PackageSelectorFormDomVm, _super);
            function PackageSelectorFormDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = PackageSelectorFormDomReact;
                this.RowList = [];
                this.PackageItemList = [];
                if (config) {
                    this.UniId = config.UniId;
                    this.init(config);
                }
                this.listenAppEvent("memberexam-packageselector", this.UniId, function (packageId) {
                    urlFile.Core.AkPost("/MedicalCenter/PackageSelector/FetchPackageExamItems", { packageId: packageId }, function (data) {
                        var _data = data.Data;
                        if (_data) {
                            _this.PackageItemList = _data;
                            _this.forceUpdate("");
                        }
                    });
                });
            }
            PackageSelectorFormDomVm.prototype.init = function (config) {
                var _this = this;
                this.PagerListData = config.PagerListData;
                this.PaginationVm = new pagination.tool.PaginationVm();
                var pager = this.PagerListData.Pager;
                this.PaginationVm.PageNo = pager.PageNo;
                this.PaginationVm.PageSize = pager.PageSize;
                this.PaginationVm.TotalCount = pager.TotalCount;
                this.PaginationVm.isPartHidden = true;
                this.PaginationVm.IsPageSizeHidden = true;
                this.PaginationVm.PageClickEvent = function (pageIndex) {
                    _this.search(pageIndex);
                };
                if (this.PagerListData.ListData) {
                    this.RowList = [];
                    this.PagerListData.ListData.forEach(function (data) {
                        var rowVm = new rowFile.MealGridRowDom.MealGridRowDomVm({ RowData: data, UniId: _this.UniId, IsGroup: config.IsGroup });
                        _this.RowList.push(rowVm);
                    });
                }
            };
            PackageSelectorFormDomVm.prototype.search = function (pageIndex) {
                var _this = this;
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/MedicalCenter/PackageSelector/SearchExamPackages", {
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
            return PackageSelectorFormDomVm;
        }(domCore.DomVm));
        PackageSelectorFormDom.PackageSelectorFormDomVm = PackageSelectorFormDomVm;
        var PackageSelectorFormDomStates = (function (_super) {
            __extends(PackageSelectorFormDomStates, _super);
            function PackageSelectorFormDomStates() {
                _super.apply(this, arguments);
            }
            return PackageSelectorFormDomStates;
        }(domCore.DomStates));
        PackageSelectorFormDom.PackageSelectorFormDomStates = PackageSelectorFormDomStates;
        var PackageSelectorFormDomProps = (function (_super) {
            __extends(PackageSelectorFormDomProps, _super);
            function PackageSelectorFormDomProps() {
                _super.apply(this, arguments);
            }
            return PackageSelectorFormDomProps;
        }(domCore.DomProps));
        PackageSelectorFormDom.PackageSelectorFormDomProps = PackageSelectorFormDomProps;
    })(PackageSelectorFormDom = exports.PackageSelectorFormDom || (exports.PackageSelectorFormDom = {}));
});
