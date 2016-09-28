var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../01core/Util", "./../../../05tool/Tree", "./../../../01core/Url", "./../../../04page/BaseWebPage"], function (require, exports, React, iocFile, utilFile, toolTreeFile, urlFile, basewedPageFile) {
    "use strict";
    var GroupOrgPage;
    (function (GroupOrgPage) {
        var GroupOrgPageAction = (function (_super) {
            __extends(GroupOrgPageAction, _super);
            function GroupOrgPageAction() {
                _super.apply(this, arguments);
            }
            return GroupOrgPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        GroupOrgPage.GroupOrgPageAction = GroupOrgPageAction;
        var GroupOrgPageReact = (function (_super) {
            __extends(GroupOrgPageReact, _super);
            function GroupOrgPageReact() {
                _super.apply(this, arguments);
                this.state = new GroupOrgPageStates();
            }
            GroupOrgPageReact.prototype.pSender = function () {
                return React.createElement("div", null, this.props.Vm.NaviTree.intoDom());
            };
            return GroupOrgPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        GroupOrgPage.GroupOrgPageReact = GroupOrgPageReact;
        var GroupOrgPageVm = (function (_super) {
            __extends(GroupOrgPageVm, _super);
            function GroupOrgPageVm() {
                var _this = this;
                _super.call(this);
                this.ReactType = GroupOrgPageReact;
                this.RowList = new Array();
                this.NaviTree = new toolTreeFile.ui.TreeVm();
                this.NaviTree.NodeTplFun = function (node) {
                    return [(React.createElement("span", null, node.Text, React.createElement("span", {onClick: _this.newOpt()}, "+"), React.createElement("span", null, "X")))];
                };
            }
            //新增
            GroupOrgPageVm.prototype.newOpt = function () {
                var _str = this.getNaviGroupTreeFId();
                urlFile.Core.AkUrl.Current().openUrl("$wingrouporgnew$" + _str + "$", true);
            };
            GroupOrgPageVm.prototype.delOpt = function () {
                //var _list = this.getSelectValues();
                //var _ids = _list.map((n) => n.FID).join(",");
                var _ids = this.Id;
                if (confirm("你确定要删除 所选中的数据吗 ？？")) {
                    urlFile.Core.AkPost("/RightCloud/Group/delGroup", { fids: _ids }, function (data) {
                        var _data = data.Data;
                        if (_data == "ok") {
                            //urlFile.Core.AkUrl
                            //this.loadPageData(0);
                            utilFile.Core.Util.Noty("数据删除成功");
                        }
                    });
                }
            };
            GroupOrgPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                var _TreeFID = this.getNaviGroupTreeFId();
                this.RowList = [];
                urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "GroupOrg.json" }, function (a) {
                    var _data = a.GroupData;
                    _this.RowList = [];
                    _this.NaviTree.initTreeVm(_data);
                    if (callback) {
                        callback();
                    }
                });
            };
            GroupOrgPageVm.prototype.getNaviGroupTreeFId = function () {
                var _str = this.NaviTree.dataValue();
                return _str;
            };
            return GroupOrgPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        GroupOrgPage.GroupOrgPageVm = GroupOrgPageVm;
        var GroupOrgPageStates = (function (_super) {
            __extends(GroupOrgPageStates, _super);
            function GroupOrgPageStates() {
                _super.apply(this, arguments);
            }
            return GroupOrgPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        GroupOrgPage.GroupOrgPageStates = GroupOrgPageStates;
        var GroupOrgPageProps = (function (_super) {
            __extends(GroupOrgPageProps, _super);
            function GroupOrgPageProps() {
                _super.apply(this, arguments);
            }
            return GroupOrgPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        GroupOrgPage.GroupOrgPageProps = GroupOrgPageProps;
        iocFile.Core.Ioc.Current().RegisterType("GROUPORG", basewedPageFile.Web.BaseWebPageVm, GroupOrgPageVm);
    })(GroupOrgPage = exports.GroupOrgPage || (exports.GroupOrgPage = {}));
});
