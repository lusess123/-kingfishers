var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./DeptConclusionTplUpdateRowDom"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, updateRowFile) {
    "use strict";
    var DeptConclusionTplUpdatePage;
    (function (DeptConclusionTplUpdatePage) {
        var DeptConclusionTplUpdatePageAction = (function (_super) {
            __extends(DeptConclusionTplUpdatePageAction, _super);
            function DeptConclusionTplUpdatePageAction() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplUpdatePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        DeptConclusionTplUpdatePage.DeptConclusionTplUpdatePageAction = DeptConclusionTplUpdatePageAction;
        var DeptConclusionTplUpdatePageReact = (function (_super) {
            __extends(DeptConclusionTplUpdatePageReact, _super);
            function DeptConclusionTplUpdatePageReact() {
                _super.apply(this, arguments);
                this.state = new DeptConclusionTplUpdatePageStates();
            }
            DeptConclusionTplUpdatePageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", {className: "Hc-modals-list"}, this.props.Vm.RowList.map(function (row, i) {
                    row.Index = i;
                    return row.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            DeptConclusionTplUpdatePageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return DeptConclusionTplUpdatePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        DeptConclusionTplUpdatePage.DeptConclusionTplUpdatePageReact = DeptConclusionTplUpdatePageReact;
        var DeptConclusionTplUpdatePageVm = (function (_super) {
            __extends(DeptConclusionTplUpdatePageVm, _super);
            function DeptConclusionTplUpdatePageVm(config) {
                _super.call(this);
                this.ReactType = DeptConclusionTplUpdatePageReact;
                this.RowList = [];
                this.Title = "编辑模板";
                if (config) {
                    this.init(config);
                }
            }
            DeptConclusionTplUpdatePageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new updateRowFile.DeptConclusionTplUpdateRowDom.DeptConclusionTplUpdateRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            DeptConclusionTplUpdatePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/DeptConclusionTpl/FetchTemplateDetailList", { fids: this.Param1 }, function (a) {
                    if (a && a.Data) {
                        var rowConfigList = [];
                        a.Data.map(function (data, index) {
                            var masterData = data;
                            var masterConfig = { RowData: masterData };
                            var detailConfigList = [];
                            var detailListData = data.ItemList;
                            detailListData.map(function (detail, index) {
                                var detailConfig = { RowData: detail };
                                detailConfigList.push(detailConfig);
                            });
                            rowConfigList.push({ MasterConfig: masterConfig, DetailRowConfigList: detailConfigList });
                        });
                        var pageConfig = {
                            RowConfigList: rowConfigList
                        };
                        _this.init(pageConfig);
                    }
                    if (callback) {
                        callback();
                    }
                });
            };
            DeptConclusionTplUpdatePageVm.prototype.legal = function () {
                var _isRes = true;
                this.RowList.forEach(function (row) {
                    if (!row.legal()) {
                        _isRes = false;
                    }
                });
                return _isRes;
            };
            DeptConclusionTplUpdatePageVm.prototype.getData = function () {
                var _ds = [];
                this.RowList.forEach(function (row) {
                    var _o = row.getData();
                    if (!utilFile.Core.Util.IsPure(_o)) {
                        _ds.push(_o);
                    }
                });
                if (_ds.length == 0) {
                    return null;
                }
                return _ds;
            };
            DeptConclusionTplUpdatePageVm.prototype.submit = function () {
                if (this.legal()) {
                    var dt = this.getData();
                    if (dt) {
                        var str = JSON.stringify(dt);
                        urlFile.Core.AkPost("/MedicalCenter/DeptConclusionTpl/ModifyTemplates", { templates: str }, function (a) {
                            if (a.Content == "ok") {
                                var _list = a.Data;
                                if (_list.length > 0) {
                                    var _strs = _list.join(",");
                                    utilFile.Core.Util.Noty("数据编辑成功");
                                    urlFile.Core.AkUrl.Current().openUrl("$DeptConclusionTpllistpage$" + _strs + "$", false, function () {
                                        urlFile.Core.AkUrl.Current().openUrl("$panelDeptConclusionTpldetailpage$" + _strs + "$", true);
                                    });
                                }
                                else {
                                    utilFile.Core.Util.Noty("数据未更新");
                                }
                            }
                            else {
                                utilFile.Core.Util.Noty("数据编辑失败");
                            }
                        });
                    }
                    else {
                        utilFile.Core.Util.Noty("没有可提交的数据");
                    }
                }
            };
            return DeptConclusionTplUpdatePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        DeptConclusionTplUpdatePage.DeptConclusionTplUpdatePageVm = DeptConclusionTplUpdatePageVm;
        var DeptConclusionTplUpdatePageStates = (function (_super) {
            __extends(DeptConclusionTplUpdatePageStates, _super);
            function DeptConclusionTplUpdatePageStates() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplUpdatePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        DeptConclusionTplUpdatePage.DeptConclusionTplUpdatePageStates = DeptConclusionTplUpdatePageStates;
        var DeptConclusionTplUpdatePageProps = (function (_super) {
            __extends(DeptConclusionTplUpdatePageProps, _super);
            function DeptConclusionTplUpdatePageProps() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplUpdatePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        DeptConclusionTplUpdatePage.DeptConclusionTplUpdatePageProps = DeptConclusionTplUpdatePageProps;
        iocFile.Core.Ioc.Current().RegisterType("DEPTCONCLUSIONTPLUPDATEPAGE", basewedPageFile.Web.BaseWebPageVm, DeptConclusionTplUpdatePageVm);
    })(DeptConclusionTplUpdatePage = exports.DeptConclusionTplUpdatePage || (exports.DeptConclusionTplUpdatePage = {}));
});
