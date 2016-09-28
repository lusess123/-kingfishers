var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./AnomalyInsertRowDom"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, insertRowFile) {
    "use strict";
    var AnomalyInsertPage;
    (function (AnomalyInsertPage) {
        var AnomalyInsertPageAction = (function (_super) {
            __extends(AnomalyInsertPageAction, _super);
            function AnomalyInsertPageAction() {
                _super.apply(this, arguments);
            }
            return AnomalyInsertPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        AnomalyInsertPage.AnomalyInsertPageAction = AnomalyInsertPageAction;
        var AnomalyInsertPageReact = (function (_super) {
            __extends(AnomalyInsertPageReact, _super);
            function AnomalyInsertPageReact() {
                _super.apply(this, arguments);
                this.state = new AnomalyInsertPageStates();
            }
            AnomalyInsertPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.InsertRowList.map(function (row) {
                    return row.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            AnomalyInsertPageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return AnomalyInsertPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        AnomalyInsertPage.AnomalyInsertPageReact = AnomalyInsertPageReact;
        var AnomalyInsertPageVm = (function (_super) {
            __extends(AnomalyInsertPageVm, _super);
            function AnomalyInsertPageVm(config) {
                _super.call(this);
                this.ReactType = AnomalyInsertPageReact;
                this.InsertRowList = [];
                this.Title = "新增异常";
                var insertRow = new insertRowFile.AnomalyInsertRowDom.AnomalyInsertRowDomVm();
                this.InsertRowList.push(insertRow);
            }
            AnomalyInsertPageVm.prototype.init = function (config) {
            };
            AnomalyInsertPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            AnomalyInsertPageVm.prototype.submit = function () {
                var postData = [];
                var masterRow = this.InsertRowList[0].MasterRow;
                var anomalyData = masterRow.RowData;
                anomalyData.ItemList = [];
                this.InsertRowList[0].DetailRowList.forEach(function (detailRow) {
                    anomalyData.ItemList.push(detailRow.RowData);
                });
                postData.push(anomalyData);
                var jsonData = JSON.stringify(postData);
                var _isSuccess = this.InsertRowList[0].legal();
                if (_isSuccess) {
                    urlFile.Core.AkPost("/MedicalCenter/Anomaly/AddAnomalies", {
                        anomalies: jsonData
                    }, function (a) {
                        if (a.Content == "ok") {
                            var _list = a.Data;
                            var _strs = _list.join(",");
                            //urlFile.Core.AkUrl.Current().openUrl(
                            //    "$panelanomalydetailpage$" + _strs + "$",
                            //    true,
                            //    () => {
                            //        urlFile.Core.AkUrl.Current().openUrl("$anomalylistpage$" + _strs + "$", false);
                            //    }
                            //);
                            urlFile.Core.AkUrl.Current().openUrl("$anomalylistpage$", true);
                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }
                    });
                }
            };
            return AnomalyInsertPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        AnomalyInsertPage.AnomalyInsertPageVm = AnomalyInsertPageVm;
        var AnomalyInsertPageStates = (function (_super) {
            __extends(AnomalyInsertPageStates, _super);
            function AnomalyInsertPageStates() {
                _super.apply(this, arguments);
            }
            return AnomalyInsertPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        AnomalyInsertPage.AnomalyInsertPageStates = AnomalyInsertPageStates;
        var AnomalyInsertPageProps = (function (_super) {
            __extends(AnomalyInsertPageProps, _super);
            function AnomalyInsertPageProps() {
                _super.apply(this, arguments);
            }
            return AnomalyInsertPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        AnomalyInsertPage.AnomalyInsertPageProps = AnomalyInsertPageProps;
        iocFile.Core.Ioc.Current().RegisterType("ANOMALYINSERTPAGE", basewedPageFile.Web.BaseWebPageVm, AnomalyInsertPageVm);
    })(AnomalyInsertPage = exports.AnomalyInsertPage || (exports.AnomalyInsertPage = {}));
});
