var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "react", "./BatchNewRowDom"], function (require, exports, iocFile, urlFile, basewedPageFile, React, BatchNewRowDom) {
    "use strict";
    var BatchNewPage;
    (function (BatchNewPage) {
        var BatchNewPageAction = (function (_super) {
            __extends(BatchNewPageAction, _super);
            function BatchNewPageAction() {
                _super.apply(this, arguments);
            }
            return BatchNewPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        BatchNewPage.BatchNewPageAction = BatchNewPageAction;
        var BatchNewPageReact = (function (_super) {
            __extends(BatchNewPageReact, _super);
            function BatchNewPageReact() {
                _super.apply(this, arguments);
                this.state = new BatchNewPageStates();
            }
            BatchNewPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-modals"}, React.createElement("h4", {className: "YSu-modal-title"}, "添加批次"), React.createElement("div", {className: "YSm-modal-header"}), this.props.Vm.BatchNewRowDomVm.intoDom(), React.createElement("div", {className: "YSm-modal-footer text-center"}, React.createElement("a", {className: "btn btn-sm btn-secondary", onClick: function () { _this.cancel(); }}, "取消"), React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.submit(); }}, "提交")));
            };
            BatchNewPageReact.prototype.cancel = function () {
                this.props.Vm.Cancel();
            };
            BatchNewPageReact.prototype.submit = function () {
                this.props.Vm.SubmitData();
            };
            return BatchNewPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        BatchNewPage.BatchNewPageReact = BatchNewPageReact;
        var BatchNewPageVm = (function (_super) {
            __extends(BatchNewPageVm, _super);
            function BatchNewPageVm(config) {
                _super.call(this);
                this.ReactType = BatchNewPageReact;
                this.pIsHullAutoHide = true;
            }
            BatchNewPageVm.prototype.SubmitData = function () {
                var _this = this;
                var master = this.BatchNewRowDomVm.MasterRow;
                var postData = [];
                var resultcommonData = master.RowData;
                postData.push(resultcommonData);
                var jsonData = JSON.stringify(postData);
                var isSuccess = master.legal();
                if (isSuccess) {
                    var str = JSON.stringify("");
                    var list = this.Param1.split("|");
                    var Unit = list[0];
                    var flag = list[1];
                    urlFile.Core.AkPost("/MedicalCenter/NewGroup/AddBatchUnit", { batch: jsonData, unid: Unit }, function (a) {
                        if (a.Content == "ok") {
                            var num = a.Data[0];
                            if (flag != "EditPage") {
                                _this.SendPageActor({ ToPanelName: "", ToModuleName: "NEWGROUPPAGE" }, { BatchData: master.RowData, num: num });
                            }
                            else {
                                var str = Unit.split(",");
                                urlFile.Core.AkUrl.Current().openUrl("$EDITGROUPPAGE$#$EDITGROUPPAGE$" + num + "$" + str[1], false);
                            }
                            _this.closePage();
                        }
                    });
                }
            };
            BatchNewPageVm.prototype.Cancel = function () {
                this.closePage();
            };
            BatchNewPageVm.prototype.init = function (config) {
            };
            BatchNewPageVm.prototype.loadPage = function (callback) {
                this.BatchNewRowDomVm = new BatchNewRowDom.BatchNewRowDom.BatchNewRowDomVm();
                if (callback) {
                    callback();
                }
            };
            return BatchNewPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        BatchNewPage.BatchNewPageVm = BatchNewPageVm;
        var BatchNewPageStates = (function (_super) {
            __extends(BatchNewPageStates, _super);
            function BatchNewPageStates() {
                _super.apply(this, arguments);
            }
            return BatchNewPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        BatchNewPage.BatchNewPageStates = BatchNewPageStates;
        var BatchNewPageProps = (function (_super) {
            __extends(BatchNewPageProps, _super);
            function BatchNewPageProps() {
                _super.apply(this, arguments);
            }
            return BatchNewPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        BatchNewPage.BatchNewPageProps = BatchNewPageProps;
        iocFile.Core.Ioc.Current().RegisterType("BATCHNEWPAGE", basewedPageFile.Web.BaseWebPageVm, BatchNewPageVm);
    })(BatchNewPage = exports.BatchNewPage || (exports.BatchNewPage = {}));
});
