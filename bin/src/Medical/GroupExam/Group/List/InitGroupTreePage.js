var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "react", "./../../../../05tool/Tree"], function (require, exports, iocFile, urlFile, basewedPageFile, React, toolTreeFile) {
    "use strict";
    var InitGroupTreePage;
    (function (InitGroupTreePage) {
        var InitGroupTreePageAction = (function (_super) {
            __extends(InitGroupTreePageAction, _super);
            function InitGroupTreePageAction() {
                _super.apply(this, arguments);
            }
            return InitGroupTreePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        InitGroupTreePage.InitGroupTreePageAction = InitGroupTreePageAction;
        var InitGroupTreePageReact = (function (_super) {
            __extends(InitGroupTreePageReact, _super);
            function InitGroupTreePageReact() {
                _super.apply(this, arguments);
                this.state = new InitGroupTreePageStates();
            }
            InitGroupTreePageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, "选择批次"), React.createElement("div", {className: ""}, this.props.Vm.NaviTree.intoDom()));
            };
            return InitGroupTreePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        InitGroupTreePage.InitGroupTreePageReact = InitGroupTreePageReact;
        var InitGroupTreePageVm = (function (_super) {
            __extends(InitGroupTreePageVm, _super);
            function InitGroupTreePageVm(config) {
                _super.call(this);
                this.ReactType = InitGroupTreePageReact;
                // this.NaviTree = new toolTreeFile.ui.TreeVm();
            }
            InitGroupTreePageVm.prototype.init = function (config) {
            };
            InitGroupTreePageVm.prototype.SubmitData = function (batchId) {
                var data = { batchId: batchId };
                this.SendPageActor({ ToPanelName: "", ToModuleName: "NEWGROUPPAGE" }, { BatchData: data });
                this.closePage();
            };
            InitGroupTreePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                this.NaviTree = new toolTreeFile.ui.TreeVm();
                this.NaviTree.onReactNodeClick(function (a) {
                    _this.SubmitData(a.Value);
                    return true;
                });
                this.NaviTree.NodeTplFun = function (node) {
                    return [(React.createElement("span", null, React.createElement("span", null, node.Text)))];
                };
                //var _data1 = { CODE_VALUE: "1", CODE_TEXT: "第一批" };
                //var _data2 = { CODE_VALUE: "1", CODE_TEXT: "11" };
                //this.NaviTree.initTreeVm(_data1);
                urlFile.Core.AkPost("/MedicalCenter/NewGroup/InitThree", { fids: this.Param1 }, function (a) {
                    if (a) {
                        var _data = a.Data;
                        _this.NaviTree.initTreeVm(_data);
                        if (callback) {
                            callback();
                        }
                    }
                });
            };
            InitGroupTreePageVm.prototype.getNaviGroupTreeFId = function () {
                if (this.NaviTree.SelectNodes[0]) {
                    var _str = this.NaviTree.SelectNodes[0].Value;
                    return _str;
                }
                return "";
            };
            return InitGroupTreePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        InitGroupTreePage.InitGroupTreePageVm = InitGroupTreePageVm;
        var InitGroupTreePageStates = (function (_super) {
            __extends(InitGroupTreePageStates, _super);
            function InitGroupTreePageStates() {
                _super.apply(this, arguments);
            }
            return InitGroupTreePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        InitGroupTreePage.InitGroupTreePageStates = InitGroupTreePageStates;
        var InitGroupTreePageProps = (function (_super) {
            __extends(InitGroupTreePageProps, _super);
            function InitGroupTreePageProps() {
                _super.apply(this, arguments);
            }
            return InitGroupTreePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        InitGroupTreePage.InitGroupTreePageProps = InitGroupTreePageProps;
        iocFile.Core.Ioc.Current().RegisterType("InitGroupTreePage", basewedPageFile.Web.BaseWebPageVm, InitGroupTreePageVm);
    })(InitGroupTreePage = exports.InitGroupTreePage || (exports.InitGroupTreePage = {}));
});
