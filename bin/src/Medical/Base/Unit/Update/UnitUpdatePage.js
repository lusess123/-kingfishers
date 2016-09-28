var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./UnitUpdateRowDom"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, updateRowFile) {
    "use strict";
    var UnitUpdatePage;
    (function (UnitUpdatePage) {
        var UnitUpdatePageAction = (function (_super) {
            __extends(UnitUpdatePageAction, _super);
            function UnitUpdatePageAction() {
                _super.apply(this, arguments);
            }
            return UnitUpdatePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        UnitUpdatePage.UnitUpdatePageAction = UnitUpdatePageAction;
        var UnitUpdatePageReact = (function (_super) {
            __extends(UnitUpdatePageReact, _super);
            function UnitUpdatePageReact() {
                _super.apply(this, arguments);
                this.state = new UnitUpdatePageStates();
            }
            UnitUpdatePageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", {className: "acsModalList"}, this.props.Vm.RowList.map(function (row, i) {
                    row.Index = i;
                    return row.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            UnitUpdatePageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return UnitUpdatePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        UnitUpdatePage.UnitUpdatePageReact = UnitUpdatePageReact;
        var UnitUpdatePageVm = (function (_super) {
            __extends(UnitUpdatePageVm, _super);
            function UnitUpdatePageVm(config) {
                _super.call(this);
                this.ReactType = UnitUpdatePageReact;
                this.RowList = [];
                this.Title = "编辑单位信息";
                if (config) {
                    this.init(config);
                }
            }
            UnitUpdatePageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new updateRowFile.UnitUpdateRowDom.UnitUpdateRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            UnitUpdatePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/Unit/FetchUnitsList", { fids: this.Param1 }, function (a) {
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
            UnitUpdatePageVm.prototype.legal = function () {
                var _isRes = true;
                this.RowList.forEach(function (row) {
                    if (!row.legal()) {
                        _isRes = false;
                    }
                });
                return _isRes;
            };
            UnitUpdatePageVm.prototype.getData = function () {
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
            UnitUpdatePageVm.prototype.submit = function () {
                if (this.legal()) {
                    var dt = this.getData();
                    if (dt) {
                        var str = JSON.stringify(dt);
                        urlFile.Core.AkPost("/MedicalCenter/Unit/ModifyUnits", { units: str }, function (a) {
                            if (a.Content == "ok") {
                                var _list = a.Data;
                                if (_list.length > 0) {
                                    var _strs = _list.join(",");
                                    utilFile.Core.Util.Noty("数据编辑成功");
                                    urlFile.Core.AkUrl.Current().openUrl("$GroupManagePage$" + _strs + "$", false, function () {
                                        urlFile.Core.AkUrl.Current().openUrl("$Unitdetailpage$" + _strs + "$", true);
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
            return UnitUpdatePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        UnitUpdatePage.UnitUpdatePageVm = UnitUpdatePageVm;
        var UnitUpdatePageStates = (function (_super) {
            __extends(UnitUpdatePageStates, _super);
            function UnitUpdatePageStates() {
                _super.apply(this, arguments);
            }
            return UnitUpdatePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        UnitUpdatePage.UnitUpdatePageStates = UnitUpdatePageStates;
        var UnitUpdatePageProps = (function (_super) {
            __extends(UnitUpdatePageProps, _super);
            function UnitUpdatePageProps() {
                _super.apply(this, arguments);
            }
            return UnitUpdatePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        UnitUpdatePage.UnitUpdatePageProps = UnitUpdatePageProps;
        iocFile.Core.Ioc.Current().RegisterType("UnitUPDATEPAGE", basewedPageFile.Web.BaseWebPageVm, UnitUpdatePageVm);
    })(UnitUpdatePage = exports.UnitUpdatePage || (exports.UnitUpdatePage = {}));
});
