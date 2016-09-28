var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../01core/Url", "./../../04page/BaseWebPage", "react", "react-dom"], function (require, exports, iocFile, urlFile, basewedPageFile, React, ReactDOM) {
    "use strict";
    var TsPageBuilderPage;
    (function (TsPageBuilderPage) {
        var TsPageBuilderPageAction = (function (_super) {
            __extends(TsPageBuilderPageAction, _super);
            function TsPageBuilderPageAction() {
                _super.apply(this, arguments);
            }
            return TsPageBuilderPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        TsPageBuilderPage.TsPageBuilderPageAction = TsPageBuilderPageAction;
        var TsPageBuilderPageReact = (function (_super) {
            __extends(TsPageBuilderPageReact, _super);
            function TsPageBuilderPageReact() {
                _super.apply(this, arguments);
                this.state = new TsPageBuilderPageStates();
            }
            TsPageBuilderPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("input", {value: this.props.Vm.Text, onChange: function (e) { _this.pInputOnChange(e); return false; }, className: "Hg-width form-control "}), React.createElement("input", {value: this.props.Vm.PathString, onChange: function (e) { _this.pInputOnChange2(e); return false; }, className: "Hg-width form-control "}), React.createElement("a", {className: "btn btn-primary btn-sm m-b", onClick: function () { _this.Copy(); }}, " ", React.createElement("i", {className: "fa fa-files-o"}), "全部复制"), React.createElement("textarea", {className: "Hg-width ACT-TXT", ref: "textarea", value: this.props.Vm.CodeString}));
            };
            TsPageBuilderPageReact.prototype.Copy = function () {
                var _dom = ReactDOM.findDOMNode(this);
                if (_dom) {
                    var _$dom = $(_dom).find(".ACT-TXT");
                    var txt = this.props.Vm.CodeString;
                    _$dom[0]["select"]();
                    window.prompt("请使用快捷键 Ctrl+C 复制到剪切板", txt);
                }
            };
            TsPageBuilderPageReact.prototype.pInputOnChange = function (e) {
                var _val = e.target["value"];
                this.props.Vm.Text = _val;
                // this.forceUpdate();
                this.props.Vm.initPageCode();
            };
            TsPageBuilderPageReact.prototype.pInputOnChange2 = function (e) {
                var _val = e.target["value"];
                this.props.Vm.PathString = _val;
                // this.forceUpdate();
                this.props.Vm.initPageCode();
            };
            TsPageBuilderPageReact.prototype.pComponentDidMount = function () {
                var _dom = ReactDOM.findDOMNode(this);
                if (_dom) {
                    var _$dom = $(_dom).find(".ACT-TXT");
                    _$dom.height($(window).height() - 60 - 30 - 30);
                }
                this.props.Vm.initPageCode();
            };
            return TsPageBuilderPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        TsPageBuilderPage.TsPageBuilderPageReact = TsPageBuilderPageReact;
        var TsPageBuilderPageVm = (function (_super) {
            __extends(TsPageBuilderPageVm, _super);
            function TsPageBuilderPageVm(config) {
                _super.call(this);
                this.ReactType = TsPageBuilderPageReact;
                this.PathString = "../../";
                this.Title = "代码自动生成工具";
                this.PageName = "TypeScriptDom";
            }
            TsPageBuilderPageVm.prototype.init = function (config) {
            };
            TsPageBuilderPageVm.prototype.initPageCode = function () {
                var _this = this;
                urlFile.Core.AkPost("/areas/dev/text/" + this.PageName + ".aspx?c=" + this.Text + "&p=" + this.PathString, {}, function (a) {
                    // alert(a);
                    _this.CodeString = a;
                    _this.forceUpdate("");
                });
            };
            TsPageBuilderPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                this.Text = this.Param1;
                if (this.Param2 && this.Param2 != "") {
                    this.PageName = this.Param2;
                }
                urlFile.Core.AkPost("/areas/dev/text/" + this.PageName + ".aspx?c=" + this.Text, {}, function (a) {
                    // alert(a);
                    _this.CodeString = a;
                    //if()
                    if (callback) {
                        callback();
                    }
                });
            };
            return TsPageBuilderPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        TsPageBuilderPage.TsPageBuilderPageVm = TsPageBuilderPageVm;
        var TsPageBuilderPageStates = (function (_super) {
            __extends(TsPageBuilderPageStates, _super);
            function TsPageBuilderPageStates() {
                _super.apply(this, arguments);
            }
            return TsPageBuilderPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        TsPageBuilderPage.TsPageBuilderPageStates = TsPageBuilderPageStates;
        var TsPageBuilderPageProps = (function (_super) {
            __extends(TsPageBuilderPageProps, _super);
            function TsPageBuilderPageProps() {
                _super.apply(this, arguments);
            }
            return TsPageBuilderPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        TsPageBuilderPage.TsPageBuilderPageProps = TsPageBuilderPageProps;
        iocFile.Core.Ioc.Current().RegisterType("TSPAGEBUILDERPAGE", basewedPageFile.Web.BaseWebPageVm, TsPageBuilderPageVm);
    })(TsPageBuilderPage = exports.TsPageBuilderPage || (exports.TsPageBuilderPage = {}));
});
