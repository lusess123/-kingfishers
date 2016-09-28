var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./ExamPackageUpdateRowDom"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, updateRowFile) {
    "use strict";
    var ExamPackageUpdatePage;
    (function (ExamPackageUpdatePage) {
        var ExamPackageUpdatePageAction = (function (_super) {
            __extends(ExamPackageUpdatePageAction, _super);
            function ExamPackageUpdatePageAction() {
                _super.apply(this, arguments);
            }
            return ExamPackageUpdatePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamPackageUpdatePage.ExamPackageUpdatePageAction = ExamPackageUpdatePageAction;
        var ExamPackageUpdatePageReact = (function (_super) {
            __extends(ExamPackageUpdatePageReact, _super);
            function ExamPackageUpdatePageReact() {
                _super.apply(this, arguments);
                this.state = new ExamPackageUpdatePageStates();
            }
            ExamPackageUpdatePageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", {className: "acsModalList"}, this.props.Vm.RowList.map(function (row, i) {
                    row.Index = i;
                    return row.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            ExamPackageUpdatePageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return ExamPackageUpdatePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ExamPackageUpdatePage.ExamPackageUpdatePageReact = ExamPackageUpdatePageReact;
        var ExamPackageUpdatePageVm = (function (_super) {
            __extends(ExamPackageUpdatePageVm, _super);
            function ExamPackageUpdatePageVm(config) {
                _super.call(this);
                this.ReactType = ExamPackageUpdatePageReact;
                this.RowList = [];
                this.Title = "编辑体检套餐";
                if (config) {
                    this.init(config);
                }
            }
            ExamPackageUpdatePageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new updateRowFile.ExamPackageUpdateRowDom.ExamPackageUpdateRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            ExamPackageUpdatePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/ExamPackage/FetchExamPackageDetailList", { fids: this.Param1 }, function (a) {
                    if (a) {
                        var rowConfigList = [];
                        a.Data.map(function (data, index) {
                            var masterData = data;
                            var masterConfig = { RowData: masterData };
                            var detailConfigList = [];
                            var detailListData = data.DetailListData;
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
            ExamPackageUpdatePageVm.prototype.legal = function () {
                var _isRes = true;
                this.RowList.forEach(function (row) {
                    if (!row.legal()) {
                        _isRes = false;
                    }
                });
                return _isRes;
            };
            ExamPackageUpdatePageVm.prototype.getData = function () {
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
            ExamPackageUpdatePageVm.prototype.submit = function () {
                if (this.legal()) {
                    var dt = this.getData();
                    if (dt) {
                        var str = JSON.stringify(dt);
                        urlFile.Core.AkPost("/MedicalCenter/ExamPackage/ModifyExamPackages", { exampackages: str }, function (a) {
                            if (a.Content == "ok") {
                                var _list = a.Data;
                                if (_list.length > 0) {
                                    var _strs = _list.join(",");
                                    utilFile.Core.Util.Noty("数据编辑成功");
                                    urlFile.Core.AkUrl.Current().openUrl("$exampackageListPage$" + _strs + "$", false, function () {
                                        urlFile.Core.AkUrl.Current().openUrl("$exampackagedetailpage$" + _strs + "$", true);
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
            return ExamPackageUpdatePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ExamPackageUpdatePage.ExamPackageUpdatePageVm = ExamPackageUpdatePageVm;
        var ExamPackageUpdatePageStates = (function (_super) {
            __extends(ExamPackageUpdatePageStates, _super);
            function ExamPackageUpdatePageStates() {
                _super.apply(this, arguments);
            }
            return ExamPackageUpdatePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamPackageUpdatePage.ExamPackageUpdatePageStates = ExamPackageUpdatePageStates;
        var ExamPackageUpdatePageProps = (function (_super) {
            __extends(ExamPackageUpdatePageProps, _super);
            function ExamPackageUpdatePageProps() {
                _super.apply(this, arguments);
            }
            return ExamPackageUpdatePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ExamPackageUpdatePage.ExamPackageUpdatePageProps = ExamPackageUpdatePageProps;
        iocFile.Core.Ioc.Current().RegisterType("ExamPackageUPDATEPAGE", basewedPageFile.Web.BaseWebPageVm, ExamPackageUpdatePageVm);
    })(ExamPackageUpdatePage = exports.ExamPackageUpdatePage || (exports.ExamPackageUpdatePage = {}));
});
