var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./ExamItemCategoryUpdateRowDom"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, updateRowFile) {
    "use strict";
    var ExamItemCategoryUpdatePage;
    (function (ExamItemCategoryUpdatePage) {
        var ExamItemCategoryUpdatePageAction = (function (_super) {
            __extends(ExamItemCategoryUpdatePageAction, _super);
            function ExamItemCategoryUpdatePageAction() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryUpdatePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamItemCategoryUpdatePage.ExamItemCategoryUpdatePageAction = ExamItemCategoryUpdatePageAction;
        var ExamItemCategoryUpdatePageReact = (function (_super) {
            __extends(ExamItemCategoryUpdatePageReact, _super);
            function ExamItemCategoryUpdatePageReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemCategoryUpdatePageStates();
            }
            ExamItemCategoryUpdatePageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", {className: "Hc-modals-list"}, this.props.Vm.RowList.map(function (row, i) {
                    row.Index = i;
                    return row.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            ExamItemCategoryUpdatePageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return ExamItemCategoryUpdatePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ExamItemCategoryUpdatePage.ExamItemCategoryUpdatePageReact = ExamItemCategoryUpdatePageReact;
        var ExamItemCategoryUpdatePageVm = (function (_super) {
            __extends(ExamItemCategoryUpdatePageVm, _super);
            function ExamItemCategoryUpdatePageVm(config) {
                _super.call(this);
                this.ReactType = ExamItemCategoryUpdatePageReact;
                this.RowList = [];
                this.Title = "编辑体检用户分类";
                if (config) {
                    this.init(config);
                }
            }
            ExamItemCategoryUpdatePageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new updateRowFile.ExamItemCategoryUpdateRowDom.ExamItemCategoryUpdateRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            ExamItemCategoryUpdatePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/ExamItemCategory/FctchExamItemCategory", { fids: this.Param1 }, function (a) {
                    if (a) {
                        var rowConfigList = [];
                        a.Data.map(function (data, index) {
                            var masterData = data;
                            var masterConfig = { RowData: masterData };
                            rowConfigList.push({ MasterConfig: masterConfig });
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
            ExamItemCategoryUpdatePageVm.prototype.legal = function () {
                var _isRes = true;
                this.RowList.forEach(function (row) {
                    if (!row.legal()) {
                        _isRes = false;
                    }
                });
                return _isRes;
            };
            ExamItemCategoryUpdatePageVm.prototype.getData = function () {
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
            ExamItemCategoryUpdatePageVm.prototype.submit = function () {
                if (this.legal()) {
                    var dt = this.getData();
                    if (dt) {
                        var str = JSON.stringify(dt);
                        urlFile.Core.AkPost("/MedicalCenter/ExamItemCategory/ModifyExamItemCategory", { examcate: str }, function (a) {
                            if (a.Content == "ok") {
                                var _list = a.Data;
                                if (_list.length > 0) {
                                    var _strs = _list.join(",");
                                    utilFile.Core.Util.Noty("数据编辑成功");
                                    urlFile.Core.AkUrl.Current().openUrl("$EXAMITEMCATEGORYLISTPAGE$" + _strs + "$", false, function () {
                                        urlFile.Core.AkUrl.Current().openUrl("$EXAMITEMCATEGORYDETAILPAGE$" + _strs + "$", true);
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
            return ExamItemCategoryUpdatePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ExamItemCategoryUpdatePage.ExamItemCategoryUpdatePageVm = ExamItemCategoryUpdatePageVm;
        var ExamItemCategoryUpdatePageStates = (function (_super) {
            __extends(ExamItemCategoryUpdatePageStates, _super);
            function ExamItemCategoryUpdatePageStates() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryUpdatePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamItemCategoryUpdatePage.ExamItemCategoryUpdatePageStates = ExamItemCategoryUpdatePageStates;
        var ExamItemCategoryUpdatePageProps = (function (_super) {
            __extends(ExamItemCategoryUpdatePageProps, _super);
            function ExamItemCategoryUpdatePageProps() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryUpdatePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ExamItemCategoryUpdatePage.ExamItemCategoryUpdatePageProps = ExamItemCategoryUpdatePageProps;
        iocFile.Core.Ioc.Current().RegisterType("ExamItemCategoryUpdatePage", basewedPageFile.Web.BaseWebPageVm, ExamItemCategoryUpdatePageVm);
    })(ExamItemCategoryUpdatePage = exports.ExamItemCategoryUpdatePage || (exports.ExamItemCategoryUpdatePage = {}));
});
