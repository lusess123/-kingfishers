var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./UnitInsertRowDom"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, insertRowFile) {
    "use strict";
    var UnitInsertPage;
    (function (UnitInsertPage) {
        var UnitInsertPageAction = (function (_super) {
            __extends(UnitInsertPageAction, _super);
            function UnitInsertPageAction() {
                _super.apply(this, arguments);
            }
            return UnitInsertPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        UnitInsertPage.UnitInsertPageAction = UnitInsertPageAction;
        var UnitInsertPageReact = (function (_super) {
            __extends(UnitInsertPageReact, _super);
            function UnitInsertPageReact() {
                _super.apply(this, arguments);
                this.state = new UnitInsertPageStates();
            }
            UnitInsertPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.InsertRowList.map(function (row) {
                    return row.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            UnitInsertPageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return UnitInsertPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        UnitInsertPage.UnitInsertPageReact = UnitInsertPageReact;
        var UnitInsertPageVm = (function (_super) {
            __extends(UnitInsertPageVm, _super);
            function UnitInsertPageVm(config) {
                _super.call(this);
                this.ReactType = UnitInsertPageReact;
                this.InsertRowList = [];
                this.Title = "新增单位";
                var insertRow = new insertRowFile.UnitInsertRowDom.UnitInsertRowDomVm();
                this.InsertRowList.push(insertRow);
            }
            UnitInsertPageVm.prototype.init = function (config) {
            };
            UnitInsertPageVm.prototype.submit = function () {
                var postData = [];
                var masterRow = this.InsertRowList[0].MasterRow;
                var resultcommonData = masterRow.RowData;
                postData.push(resultcommonData);
                var jsonData = JSON.stringify(postData);
                var _isSuccess = masterRow.legal();
                if (_isSuccess) {
                    urlFile.Core.AkPost("/MedicalCenter/Unit/AddUnits", {
                        units: jsonData
                    }, function (a) {
                        if (a.Content == "ok") {
                            var _list = a.Data;
                            //var _strs: string = _list.join(",");
                            //urlFile.Core.AkUrl.Current().openUrl(
                            //    "$panelunitdetailpage$" + _strs + "$",
                            //    true,
                            //    () => {
                            //        urlFile.Core.AkUrl.Current().openUrl("$unitlistpage$" + _strs + "$", false);
                            //    }
                            //);
                            urlFile.Core.AkUrl.Current().openUrl("$unitlistpage$", false);
                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }
                    });
                }
            };
            UnitInsertPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return UnitInsertPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        UnitInsertPage.UnitInsertPageVm = UnitInsertPageVm;
        var UnitInsertPageStates = (function (_super) {
            __extends(UnitInsertPageStates, _super);
            function UnitInsertPageStates() {
                _super.apply(this, arguments);
            }
            return UnitInsertPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        UnitInsertPage.UnitInsertPageStates = UnitInsertPageStates;
        var UnitInsertPageProps = (function (_super) {
            __extends(UnitInsertPageProps, _super);
            function UnitInsertPageProps() {
                _super.apply(this, arguments);
            }
            return UnitInsertPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        UnitInsertPage.UnitInsertPageProps = UnitInsertPageProps;
        iocFile.Core.Ioc.Current().RegisterType("UnitINSERTPAGE", basewedPageFile.Web.BaseWebPageVm, UnitInsertPageVm);
    })(UnitInsertPage = exports.UnitInsertPage || (exports.UnitInsertPage = {}));
});
