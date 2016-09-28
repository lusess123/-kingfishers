var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../01core/Url", "./../../04page/BaseWebPage", "react", "react-dom", "./../../02col/03selector/BaseTree", "./ColFiterDom", "./../../01core/Event"], function (require, exports, iocFile, urlFile, basewedPageFile, React, ReactDOM, TreeFile, ColFilterDomFile, eventFile) {
    "use strict";
    var ReportPage;
    (function (ReportPage) {
        var ReportPageAction = (function (_super) {
            __extends(ReportPageAction, _super);
            function ReportPageAction() {
                _super.apply(this, arguments);
            }
            return ReportPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ReportPage.ReportPageAction = ReportPageAction;
        var ReportPageReact = (function (_super) {
            __extends(ReportPageReact, _super);
            function ReportPageReact() {
                _super.apply(this, arguments);
                this.state = new ReportPageStates();
            }
            ReportPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "col-lg-2"}, this._tDom(this.props.Vm.ModuleTreeObj)), this.props.Vm.IsLoading ? React.createElement("div", null, "正在载入......") : null, React.createElement("div", {className: "col-lg-10"}, React.createElement("div", null, this._tDom(this.props.Vm.FilterDom)), this.props.Vm.IsLoading ? (React.createElement("div", {className: "Hu-loader"})) : (null), React.createElement("iframe", {src: this.props.Vm.Url + "&colhidejson=" + this.props.Vm.ColumnHideJson, className: "ACT-IFRAME Hg-width", onLoad: function () { _this.iframeLoadingFun(); }})));
            };
            ReportPageReact.prototype.iframeLoadingFun = function () {
                this.props.Vm.IsLoading = false;
                this.forceUpdate();
            };
            ReportPageReact.prototype.pComponentDidMount = function () {
                //this.props.Vm.offEvent_ChangeEmit(this.fEventFun);
                // var _msd = this.props.Vm.MetaShowData;
                // if (!_msd) _msd = {Name : this.props.Vm.getRegName()};
                //  if (_msd) {
                var _dom = ReactDOM.findDOMNode(this);
                if (_dom) {
                    $(_dom).find(".ACT-IFRAME").height($(window).height() - 60 - 30 - 30);
                }
            };
            return ReportPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ReportPage.ReportPageReact = ReportPageReact;
        var ReportPageVm = (function (_super) {
            __extends(ReportPageVm, _super);
            function ReportPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ReportPageReact;
                this.Title = "ReportPage页面;";
                this.UniId = "reportPage" + eventFile.App.getUniId();
                // this.init(config);
                this.Url = "http://192.168.68.16:6777/html/report?regName=GridTplReportCreator$module/plug";
                this.listenAppEvent("clickLi-check-json", this.UniId, function (json) {
                    _this.ColumnHideJson = json;
                    // this.IsLoading = true;
                    _this.forceUpdate("");
                });
            }
            ReportPageVm.prototype.init = function (config) {
                var _this = this;
                this.ModuleTreeObj = new TreeFile.ui.BaseTreeVm({
                    RegName: "ModuleXmlTreeCodeTable",
                    IsRootExpand: true
                });
                // this.ModuleTreeObj.Tree.isr
                this.ModuleTreeObj.Tree.IsOnlyLeafCanSelect = true;
                this.ModuleTreeObj.Tree.onReactNodeClick(function (n) {
                    // alert(n.Value + "  " + n.Text);
                    _this.Url = "http://192.168.68.16:6777/html/report?regName=GridTplReportCreator$" + n.Value;
                    _this.IsLoading = true;
                    urlFile.Core.AkPost("/core/WebService/MethodList?resolvers=ColumnMethod&xml=" + n.Value, {}, function (a) {
                        var _items = a.ColumnMethod;
                        _this.FilterDom = new ColFilterDomFile.ColFiterDom.ColFiterDomVm({
                            Items: _items.map(function (item) {
                                return {
                                    Name: item.Name,
                                    Text: item.DisplayName,
                                    IsNoCheck: false
                                };
                            }),
                            UniId: _this.UniId
                        });
                        _this.forceUpdate("");
                    });
                    return true;
                });
            };
            ReportPageVm.prototype.loadPage = function (callback) {
                this.init(null);
                if (callback) {
                    callback();
                }
            };
            return ReportPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ReportPage.ReportPageVm = ReportPageVm;
        var ReportPageStates = (function (_super) {
            __extends(ReportPageStates, _super);
            function ReportPageStates() {
                _super.apply(this, arguments);
            }
            return ReportPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ReportPage.ReportPageStates = ReportPageStates;
        var ReportPageProps = (function (_super) {
            __extends(ReportPageProps, _super);
            function ReportPageProps() {
                _super.apply(this, arguments);
            }
            return ReportPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ReportPage.ReportPageProps = ReportPageProps;
        iocFile.Core.Ioc.Current().RegisterType("REPORTPAGE", basewedPageFile.Web.BaseWebPageVm, ReportPageVm);
    })(ReportPage = exports.ReportPage || (exports.ReportPage = {}));
});
