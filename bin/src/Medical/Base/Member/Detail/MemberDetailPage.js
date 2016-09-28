var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./MemberDetailRowDom"], function (require, exports, React, iocFile, urlFile, basewedPageFile, detailRowFile) {
    "use strict";
    var MemberDetailPage;
    (function (MemberDetailPage) {
        var MemberDetailPageAction = (function (_super) {
            __extends(MemberDetailPageAction, _super);
            function MemberDetailPageAction() {
                _super.apply(this, arguments);
            }
            return MemberDetailPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        MemberDetailPage.MemberDetailPageAction = MemberDetailPageAction;
        var MemberDetailPageReact = (function (_super) {
            __extends(MemberDetailPageReact, _super);
            function MemberDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new MemberDetailPageStates();
            }
            MemberDetailPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.RowList.map(function (_row) {
                    return _row.intoDom();
                })));
            };
            return MemberDetailPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        MemberDetailPage.MemberDetailPageReact = MemberDetailPageReact;
        var MemberDetailPageVm = (function (_super) {
            __extends(MemberDetailPageVm, _super);
            function MemberDetailPageVm(config) {
                _super.call(this);
                this.ReactType = MemberDetailPageReact;
                this.RowList = [];
                this.Title = "会员详细信息";
                if (config) {
                    this.init(config);
                }
            }
            MemberDetailPageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new detailRowFile.MemberDetailRowDom.MemberDetailRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            MemberDetailPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/Member/FetchMembersList", { fids: this.Param1 }, function (a) {
                    if (a) {
                        var rowConfigList = [];
                        a.Data.map(function (data, index) {
                            var masterData = data;
                            var masterConfig = { RowData: masterData };
                            rowConfigList.push({ MasterConfig: masterConfig });
                        });
                        var pageConfig = {
                            RowConfigList: rowConfigList
                        };
                        _this.init(pageConfig);
                    }
                    if (callback) {
                        callback();
                    }
                });
            };
            return MemberDetailPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        MemberDetailPage.MemberDetailPageVm = MemberDetailPageVm;
        var MemberDetailPageStates = (function (_super) {
            __extends(MemberDetailPageStates, _super);
            function MemberDetailPageStates() {
                _super.apply(this, arguments);
            }
            return MemberDetailPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        MemberDetailPage.MemberDetailPageStates = MemberDetailPageStates;
        var MemberDetailPageProps = (function (_super) {
            __extends(MemberDetailPageProps, _super);
            function MemberDetailPageProps() {
                _super.apply(this, arguments);
            }
            return MemberDetailPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        MemberDetailPage.MemberDetailPageProps = MemberDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("MemberDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, MemberDetailPageVm);
    })(MemberDetailPage = exports.MemberDetailPage || (exports.MemberDetailPage = {}));
});
