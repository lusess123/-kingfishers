var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../04page/BaseWebPage", "./../../05tool/TabDom", "react", "./Plug/AllDom", "./Plug/InitializeDom", "./Plug/AssemblyDom", "./Plug/RegisterDom"], function (require, exports, iocFile, basewedPageFile, tabDomFile, React, AllFile, InitializeFile, AssemblyFile, RegisterFile) {
    "use strict";
    var FileReadPluginPage;
    (function (FileReadPluginPage) {
        var FileReadPluginPageAction = (function (_super) {
            __extends(FileReadPluginPageAction, _super);
            function FileReadPluginPageAction() {
                _super.apply(this, arguments);
            }
            return FileReadPluginPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        FileReadPluginPage.FileReadPluginPageAction = FileReadPluginPageAction;
        var FileReadPluginPageReact = (function (_super) {
            __extends(FileReadPluginPageReact, _super);
            function FileReadPluginPageReact() {
                _super.apply(this, arguments);
                this.state = new FileReadPluginPageStates();
            }
            FileReadPluginPageReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 Hm-workflow"}, this.props.Vm.TabDomObj.intoDom()));
            };
            return FileReadPluginPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        FileReadPluginPage.FileReadPluginPageReact = FileReadPluginPageReact;
        var FileReadPluginPageVm = (function (_super) {
            __extends(FileReadPluginPageVm, _super);
            function FileReadPluginPageVm(config) {
                _super.call(this);
                this.ReactType = FileReadPluginPageReact;
                this.Title = "FileReadPluginPage页面;";
                this.AllObj = new AllFile.AllDom.AllDomVm();
                this.InitializeObj = new InitializeFile.InitializeDom.InitializeDomVm();
                this.AssemblyObj = new AssemblyFile.AssemblyDom.AssemblyDomVm();
                this.RegisterObj = new RegisterFile.RegisterDom.RegisterDomVm();
                this.TabDomObj = new tabDomFile.TabDom.TabDomVm({
                    Items: [
                        {
                            Name: "all",
                            Title: "全部",
                            IsActive: false,
                            //ReloadFun: (vm) => {
                            //    utilFile.Core.Util.Cast<feedFile.Feed.FeedVm>(vm.DomObj).sysPage_load(() => {
                            //        vm.DomObj.forceUpdate("");
                            //    });
                            //},
                            DomObj: this.AllObj
                        },
                        {
                            Name: "initialize",
                            Title: "初始化",
                            IsActive: false,
                            //ReloadFun: (vm) => {
                            //    utilFile.Core.Util.Cast<feedFile.Feed.FeedVm>(vm.DomObj).sysPage_load(() => {
                            //        vm.DomObj.forceUpdate("");
                            //    });
                            //},
                            DomObj: this.InitializeObj
                        },
                        {
                            Name: "assembly",
                            Title: "程序集",
                            IsActive: true,
                            //ReloadFun: (vm) => {
                            //    utilFile.Core.Util.Cast<feedFile.Feed.FeedVm>(vm.DomObj).sysPage_load(() => {
                            //        vm.DomObj.forceUpdate("");
                            //    });
                            //},
                            DomObj: this.AssemblyObj
                        },
                        {
                            Name: "register",
                            Title: "注册",
                            IsActive: false,
                            //ReloadFun: (vm) => {
                            //    utilFile.Core.Util.Cast<feedFile.Feed.FeedVm>(vm.DomObj).sysPage_load(() => {
                            //        vm.DomObj.forceUpdate("");
                            //    });
                            //},
                            DomObj: this.RegisterObj
                        }
                    ]
                });
            }
            FileReadPluginPageVm.prototype.init = function (config) {
            };
            FileReadPluginPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return FileReadPluginPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        FileReadPluginPage.FileReadPluginPageVm = FileReadPluginPageVm;
        var FileReadPluginPageStates = (function (_super) {
            __extends(FileReadPluginPageStates, _super);
            function FileReadPluginPageStates() {
                _super.apply(this, arguments);
            }
            return FileReadPluginPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        FileReadPluginPage.FileReadPluginPageStates = FileReadPluginPageStates;
        var FileReadPluginPageProps = (function (_super) {
            __extends(FileReadPluginPageProps, _super);
            function FileReadPluginPageProps() {
                _super.apply(this, arguments);
            }
            return FileReadPluginPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        FileReadPluginPage.FileReadPluginPageProps = FileReadPluginPageProps;
        iocFile.Core.Ioc.Current().RegisterType("FILEREADPLUGINPAGE", basewedPageFile.Web.BaseWebPageVm, FileReadPluginPageVm);
    })(FileReadPluginPage = exports.FileReadPluginPage || (exports.FileReadPluginPage = {}));
});
