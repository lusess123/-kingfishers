var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./ExamItemUpdateRowDom"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, updateRowFile) {
    "use strict";
    var ExamItemUpdatePage;
    (function (ExamItemUpdatePage) {
        var ExamItemUpdatePageAction = (function (_super) {
            __extends(ExamItemUpdatePageAction, _super);
            function ExamItemUpdatePageAction() {
                _super.apply(this, arguments);
            }
            return ExamItemUpdatePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamItemUpdatePage.ExamItemUpdatePageAction = ExamItemUpdatePageAction;
        var ExamItemUpdatePageReact = (function (_super) {
            __extends(ExamItemUpdatePageReact, _super);
            function ExamItemUpdatePageReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemUpdatePageStates();
            }
            ExamItemUpdatePageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", {className: "Hc-modals-list"}, this.props.Vm.RowList.map(function (row, i) {
                    row.Index = i;
                    return row.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            ExamItemUpdatePageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return ExamItemUpdatePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ExamItemUpdatePage.ExamItemUpdatePageReact = ExamItemUpdatePageReact;
        var ExamItemUpdatePageVm = (function (_super) {
            __extends(ExamItemUpdatePageVm, _super);
            function ExamItemUpdatePageVm(config) {
                _super.call(this);
                this.ReactType = ExamItemUpdatePageReact;
                this.RowList = [];
                this.Title = "编辑体检项目";
                if (config) {
                    this.init(config);
                }
            }
            ExamItemUpdatePageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new updateRowFile.ExamItemUpdateRowDom.ExamItemUpdateRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            ExamItemUpdatePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/ExamItem/FetchExamItem", { fids: this.Param1 }, function (a) {
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
            ExamItemUpdatePageVm.prototype.legal = function () {
                var _isRes = true;
                this.RowList.forEach(function (row) {
                    if (!row.legal()) {
                        _isRes = false;
                    }
                });
                return _isRes;
            };
            ExamItemUpdatePageVm.prototype.getData = function () {
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
            ExamItemUpdatePageVm.prototype.submit = function () {
                if (this.legal()) {
                    var dt = this.getData();
                    if (dt) {
                        var str = JSON.stringify(dt);
                        urlFile.Core.AkPost("/MedicalCenter/ExamItem/ModifyExamItem", { exam: str }, function (a) {
                            if (a.Content == "ok") {
                                var _list = a.Data;
                                if (_list.length > 0) {
                                    var _strs = _list.join(",");
                                    utilFile.Core.Util.Noty("数据编辑成功");
                                    urlFile.Core.AkUrl.Current().openUrl("$examitemListPage$" + _strs + "$", false, function () {
                                        urlFile.Core.AkUrl.Current().openUrl("$examitemdetailpage$" + _strs + "$", true);
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
            return ExamItemUpdatePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ExamItemUpdatePage.ExamItemUpdatePageVm = ExamItemUpdatePageVm;
        var ExamItemUpdatePageStates = (function (_super) {
            __extends(ExamItemUpdatePageStates, _super);
            function ExamItemUpdatePageStates() {
                _super.apply(this, arguments);
            }
            return ExamItemUpdatePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamItemUpdatePage.ExamItemUpdatePageStates = ExamItemUpdatePageStates;
        var ExamItemUpdatePageProps = (function (_super) {
            __extends(ExamItemUpdatePageProps, _super);
            function ExamItemUpdatePageProps() {
                _super.apply(this, arguments);
            }
            return ExamItemUpdatePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ExamItemUpdatePage.ExamItemUpdatePageProps = ExamItemUpdatePageProps;
        iocFile.Core.Ioc.Current().RegisterType("ExamItemUpdatePage", basewedPageFile.Web.BaseWebPageVm, ExamItemUpdatePageVm);
    })(ExamItemUpdatePage = exports.ExamItemUpdatePage || (exports.ExamItemUpdatePage = {}));
});
