var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../04page/BaseWebPage", "./RowDom"], function (require, exports, React, iocFile, urlFile, basewedPageFile, rowDomFile) {
    "use strict";
    var GroupDetailPage;
    (function (GroupDetailPage) {
        var GroupDetailPageAction = (function (_super) {
            __extends(GroupDetailPageAction, _super);
            function GroupDetailPageAction() {
                _super.apply(this, arguments);
            }
            return GroupDetailPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        GroupDetailPage.GroupDetailPageAction = GroupDetailPageAction;
        var GroupDetailPageReact = (function (_super) {
            __extends(GroupDetailPageReact, _super);
            function GroupDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new GroupDetailPageStates();
            }
            GroupDetailPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("div", {className: "Hg-overflow-auto"}, this.props.Vm.RowList.map(function (_row) { return _row.intoDom(); })));
            };
            return GroupDetailPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        GroupDetailPage.GroupDetailPageReact = GroupDetailPageReact;
        var GroupDetailPageVm = (function (_super) {
            __extends(GroupDetailPageVm, _super);
            function GroupDetailPageVm() {
                _super.apply(this, arguments);
                this.ReactType = GroupDetailPageReact;
                this.RowList = [];
                this.Title = "组织机构详情";
            }
            GroupDetailPageVm.prototype.fun_grantRight = function () {
                urlFile.Core.AkUrl.Current().openUrl("$panelGROUPGRANT$" + this.Param1 + "$");
            };
            GroupDetailPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                var _keys = this.Param1;
                urlFile.Core.AkPost("/RightCloud/Group/getGroupDetail", { fids: _keys }, function (data) {
                    var _data = data.Data;
                    if (_data) {
                        _this.RowList = [];
                        _data.forEach(function (r, index) {
                            var _row = new rowDomFile.Row.RowVm({
                                GroupRightDetail: {
                                    RightTree: {
                                        RegName: "RightByOrgIdCodeTable-" + r.GroupID,
                                        NullReactFun: function (vm) {
                                            return React.createElement("div", null, "该组织未分配权限");
                                        }
                                    }
                                }
                            });
                            _row.MasterDomObj.Data = r;
                            _row.Index = index;
                            index == 0 ? _row.IsItemFormHide = false : _row.IsItemFormHide = true;
                            _this.RowList.push(_row);
                        });
                        callback();
                    }
                });
            };
            return GroupDetailPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        GroupDetailPage.GroupDetailPageVm = GroupDetailPageVm;
        var GroupDetailPageStates = (function (_super) {
            __extends(GroupDetailPageStates, _super);
            function GroupDetailPageStates() {
                _super.apply(this, arguments);
            }
            return GroupDetailPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        GroupDetailPage.GroupDetailPageStates = GroupDetailPageStates;
        var GroupDetailPageProps = (function (_super) {
            __extends(GroupDetailPageProps, _super);
            function GroupDetailPageProps() {
                _super.apply(this, arguments);
            }
            return GroupDetailPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        GroupDetailPage.GroupDetailPageProps = GroupDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("groupdetail", basewedPageFile.Web.BaseWebPageVm, GroupDetailPageVm);
    })(GroupDetailPage = exports.GroupDetailPage || (exports.GroupDetailPage = {}));
});
