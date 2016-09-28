var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Event", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "react", "./../Data", "./../../../../02col/01single/Radio", "./../../../../05tool/EditSpan", "./AppSettingGridFrom", "./ServerListDom"], function (require, exports, iocFile, utilFile, eventFile, urlFile, basewedPageFile, React, ConfigData, RadioFile, EditSpanFile, AppSettingFrom, ServerList) {
    "use strict";
    var ApplicationPage;
    (function (ApplicationPage) {
        var ApplicationPageAction = (function (_super) {
            __extends(ApplicationPageAction, _super);
            function ApplicationPageAction() {
                _super.apply(this, arguments);
            }
            return ApplicationPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ApplicationPage.ApplicationPageAction = ApplicationPageAction;
        var ApplicationPageReact = (function (_super) {
            __extends(ApplicationPageReact, _super);
            function ApplicationPageReact() {
                _super.apply(this, arguments);
                this.state = new ApplicationPageStates();
            }
            ApplicationPageReact.prototype.pSender = function () {
                var _this = this;
                var app = this.props.Vm.Application;
                return React.createElement("div", null, React.createElement("div", {className: "well"}, React.createElement("h6", {className: "Hu-title Hs-fw "}, "基础设置"), React.createElement("span", null)), React.createElement("div", {className: "col-lg-12 col-md-12 Hu-dashed-line p-a"}, this.psenderRaido("是否支持移动端", "IsSupportMobile", app.IsSupportMobile), this.psenderRaido("是否支持报表", "IsSupportReport", app.IsSupportReport), this.psenderRaido("是否显示帮助中心", "PageHelpStack", app.PageHelpStack), this.psenderRaido("是否推送签到消息", "SignStack", app.SignStack), this.psenderRaido("是否开启日志记录", "HasLogger", app.HasLogger), this.psenderRaido("是否开启异常堆栈信息提示", "ExceptionStack", app.ExceptionStack), this.psenderRaido("是否根据XML新增或更新数据库", "IsMigration", app.IsMigration)), React.createElement("div", {className: "col-lg-12 col-md-12 p-a"}, React.createElement("p", {className: "m-b-0 Hs-fw "}, "分布式缓存"), React.createElement("div", {className: "col-lg-4 col-md-4"}, React.createElement("label", {className: "form-control-label text-right pull-left"}, "基本设置："), this.psenderString("Init", app.Memcached.Init, "AtawApplicationConfig/Memcached/@Init"), this.psenderString("Min", app.Memcached.Min, "AtawApplicationConfig/Memcached/@Min"), this.psenderString("Max", app.Memcached.Max, "AtawApplicationConfig/Memcached/@Max")), React.createElement("div", {className: "col-lg-12 col-md-12"}, React.createElement("label", {className: "form-control-label text-right pull-left"}, "服务列表："), React.createElement("div", null, this.props.Vm.ServerList.intoDom()))), React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-primary btn-sm", onClick: function () { _this.props.Vm.submitClick(); }}, "保存")), this.props.Vm.AppSettFrom.intoDom(), React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-primary btn-sm", onClick: function () { _this.props.Vm.submitClick(); }}, "保存")));
            };
            ApplicationPageReact.prototype.psenderRaido = function (Text, name, value) {
                return React.createElement("div", {className: "col-lg-4 col-md-4"}, React.createElement("label", {className: "form-control-label text-right "}, Text), this.props.Vm.RadioSender(name, value));
            };
            ApplicationPageReact.prototype.psenderString = function (Text, value, Xpath) {
                return React.createElement("div", {className: "pull-left"}, React.createElement("label", {className: "form-control-label text-right "}, Text), this.props.Vm.psenderAppSetting(Text, value, Xpath));
            };
            return ApplicationPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ApplicationPage.ApplicationPageReact = ApplicationPageReact;
        var ApplicationPageVm = (function (_super) {
            __extends(ApplicationPageVm, _super);
            function ApplicationPageVm(config) {
                _super.call(this);
                this.ReactType = ApplicationPageReact;
                this.Title = "ApplicationPage页面;";
                this.submits = [];
            }
            ApplicationPageVm.prototype.init = function (config) {
            };
            ApplicationPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                this.UniId = eventFile.App.getUniId().toString();
                urlFile.Core.AkPost("/Dev/App/GetApplicationXml", {}, function (a) {
                    _this.Application = a;
                    var config = { Data: _this.Application.AppSettings, Unid: _this.UniId };
                    _this.AppSettFrom = new AppSettingFrom.AppSettingGridFrom.AppSettingGridFromVm(config);
                    var serverConfig = { ServerList: _this.Application.Memcached.ServerList };
                    _this.ServerList = new ServerList.ServerListDom.ServerListDomVm(serverConfig);
                    if (callback) {
                        callback();
                    }
                });
            };
            ApplicationPageVm.prototype.RadioSender = function (Name, Value) {
                var _this = this;
                this.Radio = new RadioFile.ui.RadioVm();
                this.Radio.ItemList = ConfigData.ConfigData.RodioData;
                var Xpath = 'AtawApplicationConfig/' + Name;
                if (Value) {
                    this.Radio.SelectText = "是";
                }
                else {
                    this.Radio.SelectText = "否";
                }
                this.Radio.ChangeEventFun = function (val, col) {
                    var isVal;
                    isVal = val == "0" ? "true" : "false";
                    if (_this.Application[Name] != (val == "0" ? true : false)) {
                        _this.AddSubmit(Name, isVal, Xpath);
                    }
                    else {
                        _this.SubSubmit(Name, isVal);
                    }
                    return true;
                };
                return this.Radio.intoDom();
            };
            ApplicationPageVm.prototype.psenderAppSetting = function (Name, Value, Xpath) {
                var _this = this;
                var config = {
                    Content: Value, ChangeEvent: function (v, ischage) {
                        if (v.OriContent != v.Content) {
                            _this.AddSubmit(Name, v.Content, Xpath);
                        }
                        else {
                            _this.SubSubmit(Name, v.Content);
                        }
                    }
                };
                this.EditText = new EditSpanFile.EditSpan.EditSpanVm(config);
                return this.EditText.intoDom();
            };
            ApplicationPageVm.prototype.submitClick = function () {
                var submit = this.AppSettFrom.submitClick();
                var ServerList = this.ServerList.submitClick();
                var submitData = { submits: this.submits, Appsettings: submit, ServerList: ServerList };
                var Submit = {};
                urlFile.Core.AkPost("/Dev/App/SaveApplicationXml", { submit: JSON.stringify(submitData) }, function (a) {
                    if (a) {
                        utilFile.Core.Util.ToggleLoading(true);
                        urlFile.Core.AkUrl.Current().refresh();
                    }
                });
            };
            //向集合中添加
            ApplicationPageVm.prototype.AddSubmit = function (Name, Val, Xpath) {
                var isAdd = true;
                var submit = { Xpath: Xpath, Text: Name, Value: Val };
                this.submits.map(function (a) {
                    if (a.Text == Name) {
                        isAdd = false;
                    }
                });
                if (isAdd) {
                    this.submits.push(submit);
                }
            };
            //向集合中删去
            ApplicationPageVm.prototype.SubSubmit = function (name, val) {
                var _this = this;
                if (this.submits.length == 0)
                    return;
                else {
                    this.submits.forEach(function (a, number) {
                        if (a.Text = name) {
                            _this.submits.splice(number, 1);
                        }
                    });
                }
            };
            return ApplicationPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ApplicationPage.ApplicationPageVm = ApplicationPageVm;
        var ApplicationPageStates = (function (_super) {
            __extends(ApplicationPageStates, _super);
            function ApplicationPageStates() {
                _super.apply(this, arguments);
            }
            return ApplicationPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ApplicationPage.ApplicationPageStates = ApplicationPageStates;
        var ApplicationPageProps = (function (_super) {
            __extends(ApplicationPageProps, _super);
            function ApplicationPageProps() {
                _super.apply(this, arguments);
            }
            return ApplicationPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ApplicationPage.ApplicationPageProps = ApplicationPageProps;
        iocFile.Core.Ioc.Current().RegisterType("SQAPPLICATIONPAGE", basewedPageFile.Web.BaseWebPageVm, ApplicationPageVm);
    })(ApplicationPage = exports.ApplicationPage || (exports.ApplicationPage = {}));
});
