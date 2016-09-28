var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../04page/BaseWebPage", "react", "./TeamDetailTableDom"], function (require, exports, iocFile, urlFile, basewedPageFile, React, Table) {
    "use strict";
    var TeamDetailPage;
    (function (TeamDetailPage) {
        var TeamDetailPageAction = (function (_super) {
            __extends(TeamDetailPageAction, _super);
            function TeamDetailPageAction() {
                _super.apply(this, arguments);
            }
            return TeamDetailPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        TeamDetailPage.TeamDetailPageAction = TeamDetailPageAction;
        var TeamDetailPageReact = (function (_super) {
            __extends(TeamDetailPageReact, _super);
            function TeamDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new TeamDetailPageStates();
            }
            TeamDetailPageReact.prototype.pSender = function () {
                return React.createElement("div", null, this._tDom(this.props.Vm.table));
            };
            return TeamDetailPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        TeamDetailPage.TeamDetailPageReact = TeamDetailPageReact;
        var TeamDetailPageVm = (function (_super) {
            __extends(TeamDetailPageVm, _super);
            function TeamDetailPageVm(config) {
                _super.call(this);
                this.ReactType = TeamDetailPageReact;
                this.Title = "团体详情";
            }
            TeamDetailPageVm.prototype.init = function (config) { };
            TeamDetailPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/TeamCharge/GetMemberData", { ChagreID: this.Param1 }, function (a) {
                    var config = { Data: a.Data };
                    _this.table = new Table.TeamDetailTableDom.TeamDetailTableDomVm(config);
                    //this.table.RowList.forEach(a => a.IsChange = true);
                    //this.table.IsMulit = true;
                    //this.table.forceUpdate("");
                    if (callback) {
                        callback();
                    }
                });
            };
            return TeamDetailPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        TeamDetailPage.TeamDetailPageVm = TeamDetailPageVm;
        var TeamDetailPageStates = (function (_super) {
            __extends(TeamDetailPageStates, _super);
            function TeamDetailPageStates() {
                _super.apply(this, arguments);
            }
            return TeamDetailPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        TeamDetailPage.TeamDetailPageStates = TeamDetailPageStates;
        var TeamDetailPageProps = (function (_super) {
            __extends(TeamDetailPageProps, _super);
            function TeamDetailPageProps() {
                _super.apply(this, arguments);
            }
            return TeamDetailPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        TeamDetailPage.TeamDetailPageProps = TeamDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("TEAMDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, TeamDetailPageVm);
    })(TeamDetailPage = exports.TeamDetailPage || (exports.TeamDetailPage = {}));
});
