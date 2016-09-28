var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./GeneralExamTplInsertRowDom"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, insertRowFile) {
    "use strict";
    var GeneralExamTplInsertPage;
    (function (GeneralExamTplInsertPage) {
        var GeneralExamTplInsertPageAction = (function (_super) {
            __extends(GeneralExamTplInsertPageAction, _super);
            function GeneralExamTplInsertPageAction() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplInsertPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        GeneralExamTplInsertPage.GeneralExamTplInsertPageAction = GeneralExamTplInsertPageAction;
        var GeneralExamTplInsertPageReact = (function (_super) {
            __extends(GeneralExamTplInsertPageReact, _super);
            function GeneralExamTplInsertPageReact() {
                _super.apply(this, arguments);
                this.state = new GeneralExamTplInsertPageStates();
            }
            GeneralExamTplInsertPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.InsertRowList.map(function (row) {
                    return row.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            GeneralExamTplInsertPageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return GeneralExamTplInsertPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        GeneralExamTplInsertPage.GeneralExamTplInsertPageReact = GeneralExamTplInsertPageReact;
        var GeneralExamTplInsertPageVm = (function (_super) {
            __extends(GeneralExamTplInsertPageVm, _super);
            function GeneralExamTplInsertPageVm(config) {
                _super.call(this);
                this.ReactType = GeneralExamTplInsertPageReact;
                this.InsertRowList = [];
                this.Title = "新增模板";
                var insertRow = new insertRowFile.GeneralExamTplInsertRowDom.GeneralExamTplInsertRowDomVm();
                this.InsertRowList.push(insertRow);
            }
            GeneralExamTplInsertPageVm.prototype.init = function (config) {
            };
            GeneralExamTplInsertPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            GeneralExamTplInsertPageVm.prototype.submit = function () {
                var postData = [];
                var masterRow = this.InsertRowList[0].MasterRow;
                var GeneralExamTplData = masterRow.RowData;
                GeneralExamTplData.ItemList = [];
                this.InsertRowList[0].DetailRowList.forEach(function (detailRow) {
                    GeneralExamTplData.ItemList.push(detailRow.RowData);
                });
                postData.push(GeneralExamTplData);
                var jsonData = JSON.stringify(postData);
                var _isSuccess = this.InsertRowList[0].legal();
                if (_isSuccess) {
                    urlFile.Core.AkPost("/MedicalCenter/GeneralExamTpl/AddTemplates", {
                        templates: jsonData
                    }, function (a) {
                        if (a.Content == "ok") {
                            var _list = a.Data;
                            var _strs = _list.join(",");
                            //urlFile.Core.AkUrl.Current().openUrl(
                            //    "$panelGeneralExamTpldetailpage$" + _strs + "$",
                            //    true,
                            //    () => {
                            //        urlFile.Core.AkUrl.Current().openUrl("$GeneralExamTpllistpage$" + _strs + "$", false);
                            //    }
                            //);
                            urlFile.Core.AkUrl.Current().openUrl("$GeneralExamTpllistpage$", true);
                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }
                    });
                }
            };
            return GeneralExamTplInsertPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        GeneralExamTplInsertPage.GeneralExamTplInsertPageVm = GeneralExamTplInsertPageVm;
        var GeneralExamTplInsertPageStates = (function (_super) {
            __extends(GeneralExamTplInsertPageStates, _super);
            function GeneralExamTplInsertPageStates() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplInsertPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        GeneralExamTplInsertPage.GeneralExamTplInsertPageStates = GeneralExamTplInsertPageStates;
        var GeneralExamTplInsertPageProps = (function (_super) {
            __extends(GeneralExamTplInsertPageProps, _super);
            function GeneralExamTplInsertPageProps() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplInsertPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        GeneralExamTplInsertPage.GeneralExamTplInsertPageProps = GeneralExamTplInsertPageProps;
        iocFile.Core.Ioc.Current().RegisterType("GENERALEXAMTPLINSERTPAGE", basewedPageFile.Web.BaseWebPageVm, GeneralExamTplInsertPageVm);
    })(GeneralExamTplInsertPage = exports.GeneralExamTplInsertPage || (exports.GeneralExamTplInsertPage = {}));
});
