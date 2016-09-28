var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../04page/BaseWebPage", "./WorkBench/WorkBench", "react"], function (require, exports, iocFile, basewedPageFile, workBenchFile, React) {
    "use strict";
    var FeedPage;
    (function (FeedPage) {
        var FeedPageAction = (function (_super) {
            __extends(FeedPageAction, _super);
            function FeedPageAction() {
                _super.apply(this, arguments);
            }
            return FeedPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        FeedPage.FeedPageAction = FeedPageAction;
        var FeedPageReact = (function (_super) {
            __extends(FeedPageReact, _super);
            function FeedPageReact() {
                _super.apply(this, arguments);
                this.state = new FeedPageStates();
            }
            FeedPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hc-modals-list"}, this._tDom(this.props.Vm.DoorObj), this.props.Vm.WorkBenchObj.intoDom());
            };
            return FeedPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        FeedPage.FeedPageReact = FeedPageReact;
        var FeedPageVm = (function (_super) {
            __extends(FeedPageVm, _super);
            function FeedPageVm(config) {
                _super.call(this);
                this.ReactType = FeedPageReact;
                // this.DoorObj = new doorFile.Door.DoorVm();
                this.WorkBenchObj = new workBenchFile.WorkBench.WorkBenchVm();
            }
            FeedPageVm.prototype.loadPage = function (callback) {
                //urlFile.Core.AkPost("/RightCloud/SysFeed/getFirstFeed", {}, (a) => {
                //    this.Title = "动态消息";
                //    var data = a.Data;
                //    var _data: dataFile.Sns.FeedData = data;
                //    this.WorkBenchObj.FeedObj.loadData(_data);
                //    callback();
                //});
                this.WorkBenchObj.WorkflowItemObj.loadData(function () {
                    callback();
                });
                //this.loadData();
                // callback();
            };
            return FeedPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        FeedPage.FeedPageVm = FeedPageVm;
        var FeedPageStates = (function (_super) {
            __extends(FeedPageStates, _super);
            function FeedPageStates() {
                _super.apply(this, arguments);
            }
            return FeedPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        FeedPage.FeedPageStates = FeedPageStates;
        var FeedPageProps = (function (_super) {
            __extends(FeedPageProps, _super);
            function FeedPageProps() {
                _super.apply(this, arguments);
            }
            return FeedPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        FeedPage.FeedPageProps = FeedPageProps;
        iocFile.Core.Ioc.Current().RegisterType("FEEDPAGE", basewedPageFile.Web.BaseWebPageVm, FeedPageVm);
        iocFile.Core.Ioc.Current().RegisterType("FEED", basewedPageFile.Web.BaseWebPageVm, FeedPageVm);
    })(FeedPage = exports.FeedPage || (exports.FeedPage = {}));
});
