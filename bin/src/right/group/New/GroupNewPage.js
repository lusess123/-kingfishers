var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../01core/Util", "./../../../01core/Url", "./../../../04page/BaseWebPage", "./GroupNewRow"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, groupNewRowFile) {
    "use strict";
    var Right;
    (function (Right) {
        var GroupNewPageAction = (function (_super) {
            __extends(GroupNewPageAction, _super);
            function GroupNewPageAction() {
                _super.apply(this, arguments);
            }
            return GroupNewPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        Right.GroupNewPageAction = GroupNewPageAction;
        var GroupNewPageReact = (function (_super) {
            __extends(GroupNewPageReact, _super);
            function GroupNewPageReact() {
                _super.apply(this, arguments);
                this.state = new GroupNewPageStates();
            }
            GroupNewPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("div", null, this.props.Vm.GroupRowList.map(function (l) {
                    return l.intoDom();
                })), React.createElement("br", null), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-sm btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            GroupNewPageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return GroupNewPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        Right.GroupNewPageReact = GroupNewPageReact;
        var GroupNewPageVm = (function (_super) {
            __extends(GroupNewPageVm, _super);
            function GroupNewPageVm() {
                _super.call(this);
                this.ReactType = GroupNewPageReact;
                this.GroupRowList = [];
                this.Title = "新增组织机构";
                this.GroupRowList.push(new groupNewRowFile.GroupNewRow.GroupNewRowVm());
            }
            GroupNewPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                debugger;
                var _keys = this.Param1;
                if (_keys == undefined || _keys == "") {
                    _keys = "1";
                }
                urlFile.Core.AkPost("/RightCloud/Group/getGroup", { fids: _keys }, function (data) {
                    var _data = data.Data;
                    if (_data) {
                        _this.GroupRowList = [];
                        _data.forEach(function (r, index) {
                            var _row = new groupNewRowFile.GroupNewRow.GroupNewRowVm();
                            //_row.GroupMasterObj.GroupData.GroupID = _keys;
                            debugger;
                            _row.GroupMasterObj.GroupData.FParentFName = r.GroupName;
                            _this.GroupRowList.push(_row);
                            _row.GroupMasterObj.init();
                        });
                        callback();
                    }
                });
            };
            GroupNewPageVm.prototype.submit = function () {
                var postData = [];
                var groupInsertRow = this.GroupRowList[0].GroupMasterObj;
                var groupData = groupInsertRow.GroupData;
                groupData.FParentFID = groupInsertRow.ParentSelector.vmDataValueGet();
                //获取加载时得到的FParentFID
                if (groupData.FParentFID == "" || groupData.FParentFID == undefined) {
                    groupData.FParentFID = this.Param1;
                }
                groupData.GroupCode = groupInsertRow.GroupCodeTextVm.vmDataValueGet();
                groupData.GroupName = groupInsertRow.GroupNameTextVm.vmDataValueGet();
                //groupData.ProductFIDs = groupInsertRow.GroupProductSelect.vmDataValueGet();
                postData.push(groupData);
                var groups = JSON.stringify(postData);
                // alert(menus);
                var _isSuccess = groupInsertRow.legal();
                if (_isSuccess) {
                    urlFile.Core.AkPost("/RightCloud/Group/newGroup", {
                        group: groups
                    }, function (a) {
                        if (a.Content == "ok") {
                            var _list = a.Data;
                            var _strs = _list.join(",");
                            urlFile.Core.AkUrl.Current().openUrl("$wingroupdetail$" + _strs + "$", true);
                            urlFile.Core.AkUrl.Current().openUrl("$group$" + _strs + "$", false);
                            //urlFile.Core.AkUrl.Current().openUrl("$GROUP$", false);
                            utilFile.Core.Util.Noty("数据新增成功");
                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }
                    });
                }
            };
            return GroupNewPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        Right.GroupNewPageVm = GroupNewPageVm;
        var GroupNewPageStates = (function (_super) {
            __extends(GroupNewPageStates, _super);
            function GroupNewPageStates() {
                _super.apply(this, arguments);
            }
            return GroupNewPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        Right.GroupNewPageStates = GroupNewPageStates;
        var GroupNewPageProps = (function (_super) {
            __extends(GroupNewPageProps, _super);
            function GroupNewPageProps() {
                _super.apply(this, arguments);
            }
            return GroupNewPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        Right.GroupNewPageProps = GroupNewPageProps;
        iocFile.Core.Ioc.Current().RegisterType("GROUPNEW", basewedPageFile.Web.BaseWebPageVm, GroupNewPageVm);
    })(Right = exports.Right || (exports.Right = {}));
});
