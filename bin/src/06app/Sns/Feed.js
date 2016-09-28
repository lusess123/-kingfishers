var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../04page/BaseWebPage", "./New", "react"], function (require, exports, iocFile, basewedPageFile, newFile, React) {
    "use strict";
    var Feed;
    (function (Feed) {
        var FeedAction = (function (_super) {
            __extends(FeedAction, _super);
            function FeedAction() {
                _super.apply(this, arguments);
            }
            return FeedAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        Feed.FeedAction = FeedAction;
        var FeedReact = (function (_super) {
            __extends(FeedReact, _super);
            function FeedReact() {
                _super.apply(this, arguments);
                this.state = new FeedStates();
            }
            FeedReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "acsMargin3 Hz-scroll Hg-overflow-auto", style: { height: (($(window).height() - 135)) }}, this.props.Vm.List.map(function (a) { return [a.intoDom(), React.createElement("br", null)]; }), React.createElement("div", {className: "text-center"}, React.createElement("i", {className: "fa fa-arrow-circle-o-down fa-2 Hu-pointer ", onClick: function () {
                    _this.props.Vm.loadData();
                    _this.forceUpdate();
                }}, "下拉加载更多...")));
            };
            FeedReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return FeedReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        Feed.FeedReact = FeedReact;
        var FeedVm = (function (_super) {
            __extends(FeedVm, _super);
            function FeedVm() {
                _super.call(this);
                this.ReactType = FeedReact;
                this.List = [];
                this.pIsHullAutoHide = true;
                this.loadData();
            }
            FeedVm.prototype.loadData = function () {
                for (var i = 0; i < 10; i++) {
                    this.List.push(new newFile.Sns.NewVm());
                }
            };
            FeedVm.prototype.loadPage = function (callback) {
                // super.loadPage();
                this.loadData();
                // this.forceUpdate("");
                callback();
            };
            FeedVm.prototype.ReceivePageSend = function (config, obj) {
                // alert( fromName + " to "+  panelName);
                _super.prototype.ReceivePageSend.call(this, config, obj);
                alert("来源:" + config.FromModulename + "目标:" + config.ToModuleName + " 信息 ：" + obj);
            };
            return FeedVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        Feed.FeedVm = FeedVm;
        var FeedStates = (function (_super) {
            __extends(FeedStates, _super);
            function FeedStates() {
                _super.apply(this, arguments);
            }
            return FeedStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        Feed.FeedStates = FeedStates;
        var FeedProps = (function (_super) {
            __extends(FeedProps, _super);
            function FeedProps() {
                _super.apply(this, arguments);
            }
            return FeedProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        Feed.FeedProps = FeedProps;
        iocFile.Core.Ioc.Current().RegisterType("CENTERINFO", basewedPageFile.Web.BaseWebPageVm, FeedVm);
        iocFile.Core.Ioc.Current().RegisterType("ORGDETAIL", basewedPageFile.Web.BaseWebPageVm, FeedVm);
    })(Feed = exports.Feed || (exports.Feed = {}));
});
