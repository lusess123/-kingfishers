var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./DepartUpdateRowDom"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, updateRowFile) {
    "use strict";
    var DepartUpdatePage;
    (function (DepartUpdatePage) {
        var DepartUpdatePageAction = (function (_super) {
            __extends(DepartUpdatePageAction, _super);
            function DepartUpdatePageAction() {
                _super.apply(this, arguments);
            }
            return DepartUpdatePageAction;
        }(basewedPageFile.Web.BaseWebPageAction));
        DepartUpdatePage.DepartUpdatePageAction = DepartUpdatePageAction;
        var DepartUpdatePageReact = (function (_super) {
            __extends(DepartUpdatePageReact, _super);
            function DepartUpdatePageReact() {
                _super.apply(this, arguments);
                this.state = new DepartUpdatePageSttes();
            }
            DepartUpdatePageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "acs-modals-panel"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", {className: "acsModalList"}, this.props.Vm.RowList.map(function (row, i) {
                    row.Index = i;
                    return row.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            DepartUpdatePageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return DepartUpdatePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        DepartUpdatePage.DepartUpdatePageReact = DepartUpdatePageReact;
        var DepartUpdatePageVm = (function (_super) {
            __extends(DepartUpdatePageVm, _super);
            function DepartUpdatePageVm(config) {
                _super.call(this);
                this.ReactType = DepartUpdatePageReact;
                this.RowList = [];
                this.Title = "编辑科室";
                if (config) {
                    this.init(config);
                }
            }
            DepartUpdatePageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new updateRowFile.DepartUpdateRowDom.DepartUpdateRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            DepartUpdatePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/Department/FetchDepartmentList", { fids: this.Param1 }, function (a) {
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
            DepartUpdatePageVm.prototype.legal = function () {
                var _isRes = true;
                this.RowList.forEach(function (row) {
                    if (!row.legal()) {
                        _isRes = false;
                    }
                });
                return _isRes;
            };
            DepartUpdatePageVm.prototype.getData = function () {
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
            DepartUpdatePageVm.prototype.submit = function () {
                if (this.legal()) {
                    var dt = this.getData();
                    if (dt) {
                        var str = JSON.stringify(dt);
                        urlFile.Core.AkPost("/MedicalCenter/Department/ModifyDeaprtment", { units: str }, function (a) {
                            if (a.Content == "ok") {
                                var _list = a.Data;
                                if (_list.length > 0) {
                                    var _strs = _list.join(",");
                                    utilFile.Core.Util.Noty("数据编辑成功");
                                    urlFile.Core.AkUrl.Current().openUrl("$departListPage$" + _strs + "$", false, function () {
                                        urlFile.Core.AkUrl.Current().openUrl("$departdetailpage$" + _strs + "$", true);
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
            return DepartUpdatePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        DepartUpdatePage.DepartUpdatePageVm = DepartUpdatePageVm;
        var DepartUpdatePageSttes = (function (_super) {
            __extends(DepartUpdatePageSttes, _super);
            function DepartUpdatePageSttes() {
                _super.apply(this, arguments);
            }
            return DepartUpdatePageSttes;
        }(basewedPageFile.Web.BaseWebPageStates));
        DepartUpdatePage.DepartUpdatePageSttes = DepartUpdatePageSttes;
        var DepartUpdatePageProps = (function (_super) {
            __extends(DepartUpdatePageProps, _super);
            function DepartUpdatePageProps() {
                _super.apply(this, arguments);
            }
            return DepartUpdatePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        DepartUpdatePage.DepartUpdatePageProps = DepartUpdatePageProps;
        iocFile.Core.Ioc.Current().RegisterType("DEPARTUPDATEPAGE", basewedPageFile.Web.BaseWebPageVm, DepartUpdatePageVm);
    })(DepartUpdatePage = exports.DepartUpdatePage || (exports.DepartUpdatePage = {}));
});
