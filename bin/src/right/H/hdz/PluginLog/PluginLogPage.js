var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "react", "./../../../../05tool/TabDom", "./TimePointDom", "./DllInfoDom"], function (require, exports, iocFile, urlFile, basewedPageFile, React, tabDomFile, timePointFile, dllInfoFile) {
    "use strict";
    var PluginLogPage;
    (function (PluginLogPage) {
        var PluginLogPageAction = (function (_super) {
            __extends(PluginLogPageAction, _super);
            function PluginLogPageAction() {
                _super.apply(this, arguments);
            }
            return PluginLogPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        PluginLogPage.PluginLogPageAction = PluginLogPageAction;
        var PluginLogPageReact = (function (_super) {
            __extends(PluginLogPageReact, _super);
            function PluginLogPageReact() {
                _super.apply(this, arguments);
                this.state = new PluginLogPageStates();
            }
            PluginLogPageReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 Hm-workflow"}, this.props.Vm.TabDomObj.intoDom()));
            };
            return PluginLogPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        PluginLogPage.PluginLogPageReact = PluginLogPageReact;
        var PluginLogPageVm = (function (_super) {
            __extends(PluginLogPageVm, _super);
            function PluginLogPageVm(config) {
                _super.call(this);
                this.ReactType = PluginLogPageReact;
                this.Title = "PluginLogPage页面;";
            }
            PluginLogPageVm.prototype.init = function (config) {
            };
            PluginLogPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "dev/PluginLogData.json" }, function (a) {
                    _this.PluginLog = a;
                    var TimePointRowConfig = { TimePointRowList: _this.PluginLog.TimePointList };
                    _this.TimePointDomObj = new timePointFile.TimePointDom.TimePointDomVm(TimePointRowConfig);
                    var DllInfoRowConfig = { DllInfoRowList: _this.PluginLog.DllInfoList };
                    _this.DllInfoDomObj = new dllInfoFile.DllInfoDom.DllInfoDomVm(DllInfoRowConfig);
                    _this.TabDomObj = new tabDomFile.TabDom.TabDomVm({
                        Items: [
                            {
                                Name: "timePoint",
                                Title: "时间",
                                IsActive: true,
                                //ReloadFun: (vm) => {
                                //    utilFile.Core.Util.Cast<feedFile.Feed.FeedVm>(vm.DomObj).sysPage_load(() => {
                                //        vm.DomObj.forceUpdate("");
                                //    });
                                //},
                                DomObj: _this.TimePointDomObj
                            },
                            {
                                Name: "dllInfo",
                                Title: "dll程序集信息",
                                IsActive: false,
                                //ReloadFun: (vm) => {
                                //    utilFile.Core.Util.Cast<feedFile.Feed.FeedVm>(vm.DomObj).sysPage_load(() => {
                                //        vm.DomObj.forceUpdate("");
                                //    });
                                //},
                                DomObj: _this.DllInfoDomObj
                            }
                        ]
                    });
                    if (callback) {
                        callback();
                    }
                });
            };
            return PluginLogPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        PluginLogPage.PluginLogPageVm = PluginLogPageVm;
        var PluginLogPageStates = (function (_super) {
            __extends(PluginLogPageStates, _super);
            function PluginLogPageStates() {
                _super.apply(this, arguments);
            }
            return PluginLogPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        PluginLogPage.PluginLogPageStates = PluginLogPageStates;
        var PluginLogPageProps = (function (_super) {
            __extends(PluginLogPageProps, _super);
            function PluginLogPageProps() {
                _super.apply(this, arguments);
            }
            return PluginLogPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        PluginLogPage.PluginLogPageProps = PluginLogPageProps;
        iocFile.Core.Ioc.Current().RegisterType("PLUGINLOGPAGE", basewedPageFile.Web.BaseWebPageVm, PluginLogPageVm);
    })(PluginLogPage = exports.PluginLogPage || (exports.PluginLogPage = {}));
});
