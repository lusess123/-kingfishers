var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./AnomalyUpdateRowDom"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, updateRowFile) {
    "use strict";
    var AnomalyUpdatePage;
    (function (AnomalyUpdatePage) {
        var AnomalyUpdatePageAction = (function (_super) {
            __extends(AnomalyUpdatePageAction, _super);
            function AnomalyUpdatePageAction() {
                _super.apply(this, arguments);
            }
            return AnomalyUpdatePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        AnomalyUpdatePage.AnomalyUpdatePageAction = AnomalyUpdatePageAction;
        var AnomalyUpdatePageReact = (function (_super) {
            __extends(AnomalyUpdatePageReact, _super);
            function AnomalyUpdatePageReact() {
                _super.apply(this, arguments);
                this.state = new AnomalyUpdatePageStates();
            }
            AnomalyUpdatePageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", {className: "Hc-modals-list"}, this.props.Vm.RowList.map(function (row, i) {
                    row.Index = i;
                    return row.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            AnomalyUpdatePageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return AnomalyUpdatePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        AnomalyUpdatePage.AnomalyUpdatePageReact = AnomalyUpdatePageReact;
        var AnomalyUpdatePageVm = (function (_super) {
            __extends(AnomalyUpdatePageVm, _super);
            function AnomalyUpdatePageVm(config) {
                _super.call(this);
                this.ReactType = AnomalyUpdatePageReact;
                this.RowList = [];
                this.Title = "编辑异常";
                if (config) {
                    this.init(config);
                }
            }
            AnomalyUpdatePageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new updateRowFile.AnomalyUpdateRowDom.AnomalyUpdateRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            AnomalyUpdatePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/Anomaly/FetchAnomalyDetailList", { fids: this.Param1 }, function (a) {
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
            AnomalyUpdatePageVm.prototype.legal = function () {
                var _isRes = true;
                this.RowList.forEach(function (row) {
                    if (!row.legal()) {
                        _isRes = false;
                    }
                });
                return _isRes;
            };
            AnomalyUpdatePageVm.prototype.getData = function () {
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
            AnomalyUpdatePageVm.prototype.submit = function () {
                if (this.legal()) {
                    var dt = this.getData();
                    if (dt) {
                        var str = JSON.stringify(dt);
                        urlFile.Core.AkPost("/MedicalCenter/Anomaly/ModifyAnomalies", { anomalies: str }, function (a) {
                            if (a.Content == "ok") {
                                var _list = a.Data;
                                if (_list.length > 0) {
                                    var _strs = _list.join(",");
                                    utilFile.Core.Util.Noty("数据编辑成功");
                                    urlFile.Core.AkUrl.Current().openUrl("$anomalylistpage$" + _strs + "$", false, function () {
                                        urlFile.Core.AkUrl.Current().openUrl("$panelanomalydetailpage$" + _strs + "$", true);
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
            return AnomalyUpdatePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        AnomalyUpdatePage.AnomalyUpdatePageVm = AnomalyUpdatePageVm;
        var AnomalyUpdatePageStates = (function (_super) {
            __extends(AnomalyUpdatePageStates, _super);
            function AnomalyUpdatePageStates() {
                _super.apply(this, arguments);
            }
            return AnomalyUpdatePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        AnomalyUpdatePage.AnomalyUpdatePageStates = AnomalyUpdatePageStates;
        var AnomalyUpdatePageProps = (function (_super) {
            __extends(AnomalyUpdatePageProps, _super);
            function AnomalyUpdatePageProps() {
                _super.apply(this, arguments);
            }
            return AnomalyUpdatePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        AnomalyUpdatePage.AnomalyUpdatePageProps = AnomalyUpdatePageProps;
        iocFile.Core.Ioc.Current().RegisterType("ANOMALYUPDATEPAGE", basewedPageFile.Web.BaseWebPageVm, AnomalyUpdatePageVm);
    })(AnomalyUpdatePage = exports.AnomalyUpdatePage || (exports.AnomalyUpdatePage = {}));
});
