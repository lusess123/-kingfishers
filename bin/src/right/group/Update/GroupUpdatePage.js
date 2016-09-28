var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../01core/Util", "./../../../01core/Url", "./../../../04page/BaseWebPage", "./GroupUpdateRow"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, groupUpdateRowFile) {
    "use strict";
    var GroupUpdatePage;
    (function (GroupUpdatePage) {
        var GroupUpdatePageAction = (function (_super) {
            __extends(GroupUpdatePageAction, _super);
            function GroupUpdatePageAction() {
                _super.apply(this, arguments);
            }
            return GroupUpdatePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        GroupUpdatePage.GroupUpdatePageAction = GroupUpdatePageAction;
        var MenuUpdatePageReact = (function (_super) {
            __extends(MenuUpdatePageReact, _super);
            function MenuUpdatePageReact() {
                _super.apply(this, arguments);
                this.state = new GroupUpdatePageStates();
            }
            MenuUpdatePageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("div", {className: "Hc-modals-list"}, this.props.Vm.GroupRowList.map(function (row) { return row.intoDom(); })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-sm btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            MenuUpdatePageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return MenuUpdatePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        GroupUpdatePage.MenuUpdatePageReact = MenuUpdatePageReact;
        var GroupUpdatePageVm = (function (_super) {
            __extends(GroupUpdatePageVm, _super);
            function GroupUpdatePageVm() {
                _super.call(this);
                this.ReactType = MenuUpdatePageReact;
                this.GroupRowList = [];
                this.Title = "编辑组织机构";
                this.GroupRowList.push(new groupUpdateRowFile.GroupUpdateRow.GroupUpdateRowVm());
            }
            GroupUpdatePageVm.prototype.submit = function () {
                var postData = [];
                var _isAllSuccess = true;
                for (var i = 0; i < this.GroupRowList.length; i++) {
                    var groupInsertRow = this.GroupRowList[i].GroupMasterObj;
                    var groupData = groupInsertRow.GroupData;
                    groupData.GroupID = groupInsertRow.FID.dataValueGet();
                    groupData.FParentFID = groupInsertRow.ParentSelector.vmDataValueGet();
                    groupData.GroupName = groupInsertRow.GroupNameTextVm.vmDataValueGet();
                    postData.push(groupData);
                    var _isAllSuccess = groupInsertRow.legal();
                    if (_isAllSuccess == false) {
                        _isAllSuccess = false;
                    }
                }
                //var groupInsertRow = this.GroupRowList[0].GroupMasterObj;
                //var groupData = groupInsertRow.GroupData;
                //groupData.GroupID = groupInsertRow.FID.dataValueGet();
                //groupData.FParentFID = groupInsertRow.ParentSelector.vmDataValueGet();
                ////groupData.GroupCode = groupInsertRow.GroupCodeTextVm.vmDataValueGet();
                //groupData.GroupName = groupInsertRow.GroupNameTextVm.vmDataValueGet();
                //postData.push(groupData);
                //var groups = JSON.stringify(postData);
                //   var _isSuccess = groupInsertRow.legal();
                var strData = JSON.stringify(postData);
                if (_isAllSuccess) {
                    urlFile.Core.AkPost("/RightCloud/Group/Updata", {
                        group: strData
                    }, function (a) {
                        if (a.Content == "ok") {
                            var _list = a.Data;
                            var _strs = _list.join(",");
                            urlFile.Core.AkUrl.Current().openUrl("$wingroupdetail$" + _strs + "$", true);
                            urlFile.Core.AkUrl.Current().openUrl("$group$" + _strs + "$", false);
                            utilFile.Core.Util.Noty("数据修改成功");
                        }
                        else {
                            utilFile.Core.Util.Noty("数据修改失败");
                        }
                    });
                }
            };
            GroupUpdatePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                var _keys = this.Param1;
                urlFile.Core.AkPost("/RightCloud/Group/getGroupDetail", { fids: _keys }, function (data) {
                    var _data = data.Data;
                    if (_data) {
                        _this.GroupRowList = [];
                        _data.forEach(function (r, index) {
                            var _row = new groupUpdateRowFile.GroupUpdateRow.GroupUpdateRowVm();
                            _row.GroupData = r;
                            _row.GroupMasterObj.GroupData = r;
                            //_row.GroupMasterObj.GroupData.GroupID = _keys;
                            //_row.GroupData.GroupID = _keys;
                            _row.Index = index;
                            if (index == 0) {
                                _row.IsMasterHide = false;
                            }
                            else {
                                _row.IsMasterHide = true;
                            }
                            index == 0 ? _row.IsMasterHide = false : _row.IsDetailHide = true;
                            _this.GroupRowList.push(_row);
                            _row.GroupMasterObj.init();
                        });
                        callback();
                    }
                });
            };
            return GroupUpdatePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        GroupUpdatePage.GroupUpdatePageVm = GroupUpdatePageVm;
        var GroupUpdatePageStates = (function (_super) {
            __extends(GroupUpdatePageStates, _super);
            function GroupUpdatePageStates() {
                _super.apply(this, arguments);
            }
            return GroupUpdatePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        GroupUpdatePage.GroupUpdatePageStates = GroupUpdatePageStates;
        var GroupUpdatePageProps = (function (_super) {
            __extends(GroupUpdatePageProps, _super);
            function GroupUpdatePageProps() {
                _super.apply(this, arguments);
            }
            return GroupUpdatePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        GroupUpdatePage.GroupUpdatePageProps = GroupUpdatePageProps;
        iocFile.Core.Ioc.Current().RegisterType("GROUPUPDATE", basewedPageFile.Web.BaseWebPageVm, GroupUpdatePageVm);
    })(GroupUpdatePage = exports.GroupUpdatePage || (exports.GroupUpdatePage = {}));
});
