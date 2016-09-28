var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./GeneralExamTplUpdateRowDom"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, updateRowFile) {
    "use strict";
    var GeneralExamTplUpdatePage;
    (function (GeneralExamTplUpdatePage) {
        var GeneralExamTplUpdatePageAction = (function (_super) {
            __extends(GeneralExamTplUpdatePageAction, _super);
            function GeneralExamTplUpdatePageAction() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplUpdatePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        GeneralExamTplUpdatePage.GeneralExamTplUpdatePageAction = GeneralExamTplUpdatePageAction;
        var GeneralExamTplUpdatePageReact = (function (_super) {
            __extends(GeneralExamTplUpdatePageReact, _super);
            function GeneralExamTplUpdatePageReact() {
                _super.apply(this, arguments);
                this.state = new GeneralExamTplUpdatePageStates();
            }
            GeneralExamTplUpdatePageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", {className: "Hc-modals-list"}, this.props.Vm.RowList.map(function (row, i) {
                    row.Index = i;
                    return row.intoDom();
                })), React.createElement("div", {className: "acsTextC"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            GeneralExamTplUpdatePageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return GeneralExamTplUpdatePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        GeneralExamTplUpdatePage.GeneralExamTplUpdatePageReact = GeneralExamTplUpdatePageReact;
        var GeneralExamTplUpdatePageVm = (function (_super) {
            __extends(GeneralExamTplUpdatePageVm, _super);
            function GeneralExamTplUpdatePageVm(config) {
                _super.call(this);
                this.ReactType = GeneralExamTplUpdatePageReact;
                this.RowList = [];
                this.Title = "编辑模板";
                if (config) {
                    this.init(config);
                }
            }
            GeneralExamTplUpdatePageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new updateRowFile.GeneralExamTplUpdateRowDom.GeneralExamTplUpdateRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            GeneralExamTplUpdatePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/GeneralExamTpl/FetchTemplateDetailList", { fids: this.Param1 }, function (a) {
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
            GeneralExamTplUpdatePageVm.prototype.legal = function () {
                var _isRes = true;
                this.RowList.forEach(function (row) {
                    if (!row.legal()) {
                        _isRes = false;
                    }
                });
                return _isRes;
            };
            GeneralExamTplUpdatePageVm.prototype.getData = function () {
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
            GeneralExamTplUpdatePageVm.prototype.submit = function () {
                if (this.legal()) {
                    var dt = this.getData();
                    if (dt) {
                        var str = JSON.stringify(dt);
                        urlFile.Core.AkPost("/MedicalCenter/GeneralExamTpl/ModifyTemplates", { templates: str }, function (a) {
                            if (a.Content == "ok") {
                                var _list = a.Data;
                                if (_list.length > 0) {
                                    var _strs = _list.join(",");
                                    utilFile.Core.Util.Noty("数据编辑成功");
                                    urlFile.Core.AkUrl.Current().openUrl("$GeneralExamTpllistpage$" + _strs + "$", false, function () {
                                        urlFile.Core.AkUrl.Current().openUrl("$panelGeneralExamTpldetailpage$" + _strs + "$", true);
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
            return GeneralExamTplUpdatePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        GeneralExamTplUpdatePage.GeneralExamTplUpdatePageVm = GeneralExamTplUpdatePageVm;
        var GeneralExamTplUpdatePageStates = (function (_super) {
            __extends(GeneralExamTplUpdatePageStates, _super);
            function GeneralExamTplUpdatePageStates() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplUpdatePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        GeneralExamTplUpdatePage.GeneralExamTplUpdatePageStates = GeneralExamTplUpdatePageStates;
        var GeneralExamTplUpdatePageProps = (function (_super) {
            __extends(GeneralExamTplUpdatePageProps, _super);
            function GeneralExamTplUpdatePageProps() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplUpdatePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        GeneralExamTplUpdatePage.GeneralExamTplUpdatePageProps = GeneralExamTplUpdatePageProps;
        iocFile.Core.Ioc.Current().RegisterType("GENERALEXAMTPLUPDATEPAGE", basewedPageFile.Web.BaseWebPageVm, GeneralExamTplUpdatePageVm);
    })(GeneralExamTplUpdatePage = exports.GeneralExamTplUpdatePage || (exports.GeneralExamTplUpdatePage = {}));
});
