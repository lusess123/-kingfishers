var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./ResultCommonUpdateRowDom"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, updateRowFile) {
    "use strict";
    var ResultCommonUpdatePage;
    (function (ResultCommonUpdatePage) {
        var ResultCommonUpdatePageAction = (function (_super) {
            __extends(ResultCommonUpdatePageAction, _super);
            function ResultCommonUpdatePageAction() {
                _super.apply(this, arguments);
            }
            return ResultCommonUpdatePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ResultCommonUpdatePage.ResultCommonUpdatePageAction = ResultCommonUpdatePageAction;
        var ResultCommonUpdatePageReact = (function (_super) {
            __extends(ResultCommonUpdatePageReact, _super);
            function ResultCommonUpdatePageReact() {
                _super.apply(this, arguments);
                this.state = new ResultCommonUpdatePageStates();
            }
            ResultCommonUpdatePageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", {className: "acsModalList"}, this.props.Vm.RowList.map(function (row, i) {
                    row.Index = i;
                    return row.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            ResultCommonUpdatePageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return ResultCommonUpdatePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ResultCommonUpdatePage.ResultCommonUpdatePageReact = ResultCommonUpdatePageReact;
        var ResultCommonUpdatePageVm = (function (_super) {
            __extends(ResultCommonUpdatePageVm, _super);
            function ResultCommonUpdatePageVm(config) {
                _super.call(this);
                this.ReactType = ResultCommonUpdatePageReact;
                this.RowList = [];
                this.Title = "编辑常规体检结果";
                if (config) {
                    this.init(config);
                }
            }
            ResultCommonUpdatePageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new updateRowFile.ResultCommonUpdateRowDom.ResultCommonUpdateRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            ResultCommonUpdatePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/ResultCommon/FetchResultCommonsList", { fids: this.Param1 }, function (a) {
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
            ResultCommonUpdatePageVm.prototype.legal = function () {
                var _isRes = true;
                this.RowList.forEach(function (row) {
                    if (!row.legal()) {
                        _isRes = false;
                    }
                });
                return _isRes;
            };
            ResultCommonUpdatePageVm.prototype.getData = function () {
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
            ResultCommonUpdatePageVm.prototype.submit = function () {
                if (this.legal()) {
                    var dt = this.getData();
                    if (dt) {
                        var str = JSON.stringify(dt);
                        urlFile.Core.AkPost("/MedicalCenter/ResultCommon/ModifyResultCommons", { resultcommons: str }, function (a) {
                            if (a.Content == "ok") {
                                var _list = a.Data;
                                if (_list.length > 0) {
                                    var _strs = _list.join(",");
                                    utilFile.Core.Util.Noty("数据编辑成功");
                                    urlFile.Core.AkUrl.Current().openUrl("$CommonResultListPage$" + _strs + "$", false, function () {
                                        urlFile.Core.AkUrl.Current().openUrl("$CommonResultdetailpage$" + _strs + "$", true);
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
            return ResultCommonUpdatePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ResultCommonUpdatePage.ResultCommonUpdatePageVm = ResultCommonUpdatePageVm;
        var ResultCommonUpdatePageStates = (function (_super) {
            __extends(ResultCommonUpdatePageStates, _super);
            function ResultCommonUpdatePageStates() {
                _super.apply(this, arguments);
            }
            return ResultCommonUpdatePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ResultCommonUpdatePage.ResultCommonUpdatePageStates = ResultCommonUpdatePageStates;
        var ResultCommonUpdatePageProps = (function (_super) {
            __extends(ResultCommonUpdatePageProps, _super);
            function ResultCommonUpdatePageProps() {
                _super.apply(this, arguments);
            }
            return ResultCommonUpdatePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ResultCommonUpdatePage.ResultCommonUpdatePageProps = ResultCommonUpdatePageProps;
        iocFile.Core.Ioc.Current().RegisterType("CommonResultUPDATEPAGE", basewedPageFile.Web.BaseWebPageVm, ResultCommonUpdatePageVm);
    })(ResultCommonUpdatePage = exports.ResultCommonUpdatePage || (exports.ResultCommonUpdatePage = {}));
});
