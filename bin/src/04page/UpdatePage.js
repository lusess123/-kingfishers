var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../03form/Base/BasePage", "./../01core/Ioc", "./../01core/Url", "./../01core/Util", "react"], function (require, exports, basepage, iocFile, urlFile, utilFile, React) {
    "use strict";
    var ui;
    (function (ui) {
        var UpdatePageAction = (function (_super) {
            __extends(UpdatePageAction, _super);
            function UpdatePageAction() {
                _super.apply(this, arguments);
            }
            return UpdatePageAction;
        }(basepage.ui.BasePageAction));
        ui.UpdatePageAction = UpdatePageAction;
        var UpdatePageReact = (function (_super) {
            __extends(UpdatePageReact, _super);
            function UpdatePageReact() {
                _super.apply(this, arguments);
            }
            UpdatePageReact.prototype.pComponentWillMount = function () {
                _super.prototype.pComponentWillMount.call(this);
                // alert("List页面注册变更事件");
            };
            UpdatePageReact.prototype.pSender = function () {
                return _super.prototype.pSender.call(this);
            };
            ;
            UpdatePageReact.prototype.pSenderBottom = function () {
                //return React.DOM.div(
                //    {
                //        className: "tiny button",
                //        onClick: (e) => {
                //            // this.seachClick();
                //            var res = this.getPageSubmitData(this.props.Vm.FormObjList);
                //            // if (res.IsChange) {
                //            if (res.IsLegalResult) {
                var _this = this;
                //                if (res.IsChange) {
                //                    $(e.target).hide();
                //                    this.props.Vm.updateSubmitData(res.Ds);
                //                }
                //                else {
                //                    utilFile.Core.Util.Noty("数据没有变更，无法保存");
                //                }
                //                // e
                //            }
                //        }
                //    },
                //    "保存");
                return React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function (e) {
                    var res = _this.props.Vm.getPageSubmitData(_this.props.Vm.FormObjList);
                    // if (res.IsChange) {
                    if (res.IsLegalResult) {
                        if (res.IsChange) {
                            $(e.target).hide();
                            _this.props.Vm.updateSubmitData(res.Ds);
                        }
                        else {
                            utilFile.Core.Util.Noty("数据没有变更，无法保存");
                        }
                    }
                }}, "保存"));
            };
            return UpdatePageReact;
        }(basepage.ui.BasePageReact));
        ui.UpdatePageReact = UpdatePageReact;
        var UpdatePageProps = (function (_super) {
            __extends(UpdatePageProps, _super);
            function UpdatePageProps() {
                _super.apply(this, arguments);
            }
            return UpdatePageProps;
        }(basepage.ui.BasePageProps));
        ui.UpdatePageProps = UpdatePageProps;
        var UpdatePageVm = (function (_super) {
            __extends(UpdatePageVm, _super);
            function UpdatePageVm() {
                _super.apply(this, arguments);
                this.ReactType = UpdatePageReact;
                this.pRegName = "UpdatePage";
            }
            UpdatePageVm.prototype.updateSubmitData = function (ds) {
                var _sysPage = this.createSysPage("Update");
                ds["PAGE_SYS"] = [{ KeyValue: _sysPage.KeyValue, PageStyle: _sysPage.PageStyle }];
                var xml = this.Xml;
                urlFile.Core.AkPost("/module/ModuleMerge", {
                    xml: this.Xml,
                    ds: JSON.stringify(ds),
                    pageStyle: "Update"
                }, function (res) {
                    if (res.LegalException) {
                        utilFile.Core.Util.Noty(res.Error);
                    }
                    else {
                        utilFile.Core.Util.Noty("编辑保存成功");
                        urlFile.Core.AkUrl.Current().fEmit.emit("clearPanel");
                        urlFile.Core.AkUrl.Current().openUrl("$$" + xml);
                    }
                });
            };
            return UpdatePageVm;
        }(basepage.ui.BasePageVm));
        ui.UpdatePageVm = UpdatePageVm;
        var UpdatePageStates = (function (_super) {
            __extends(UpdatePageStates, _super);
            function UpdatePageStates() {
                _super.apply(this, arguments);
            }
            return UpdatePageStates;
        }(basepage.ui.BasePageStates));
        ui.UpdatePageStates = UpdatePageStates;
        iocFile.Core.Ioc.Current().RegisterType("UPDATE", basepage.ui.BasePageVm, UpdatePageVm);
    })(ui = exports.ui || (exports.ui = {}));
});
