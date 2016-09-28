var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../01core/Util", "./../../../01core/Url", "./../../../04page/BaseWebPage", "./RoleInsertRow"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, roleRowFile) {
    "use strict";
    var Role;
    (function (Role) {
        var RoleNewPageAction = (function (_super) {
            __extends(RoleNewPageAction, _super);
            function RoleNewPageAction() {
                _super.apply(this, arguments);
            }
            return RoleNewPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        Role.RoleNewPageAction = RoleNewPageAction;
        var RoleNewPageReact = (function (_super) {
            __extends(RoleNewPageReact, _super);
            function RoleNewPageReact() {
                _super.apply(this, arguments);
                this.state = new RoleNewPageStates();
            }
            RoleNewPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("div", null, this.props.Vm.RowList.map(function (l) {
                    return l.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-sm btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            RoleNewPageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return RoleNewPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        Role.RoleNewPageReact = RoleNewPageReact;
        var RoleNewPageVm = (function (_super) {
            __extends(RoleNewPageVm, _super);
            function RoleNewPageVm() {
                _super.call(this);
                this.ReactType = RoleNewPageReact;
                this.RowList = [];
                this.Title = "新增角色";
                this.RowList.push(new roleRowFile.RoleInsertRow.RoleInsertRowVm());
            }
            RoleNewPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                //var _keys = this.Param1;
                //if (_keys == undefined || _keys == "")
                //{
                //    _keys = "1";
                //}
                var _keys = "1";
                urlFile.Core.AkPost("/RightCloud/Group/getGroup", { fids: _keys }, function (data) {
                    var _data = data.Data;
                    if (_data) {
                        _this.RowList = [];
                        _data.forEach(function (r, index) {
                            var _row = new roleRowFile.RoleInsertRow.RoleInsertRowVm();
                            var newrow = { FControlUnitID: r.GroupID, FControlUnitName: r.GroupName };
                            _row.RowData = newrow;
                            _this.RowList.push(_row);
                            _row.init();
                        });
                        callback();
                    }
                });
            };
            RoleNewPageVm.prototype.submit = function () {
                var postData = [];
                var roleInsertRow = this.RowList[0];
                var rowData = roleInsertRow.RowData;
                rowData.FControlUnitID = roleInsertRow.OrgSelector.vmDataValueGet();
                postData.push(rowData);
                var strData = JSON.stringify(postData);
                //alert(strData);
                var _isSuccess = roleInsertRow.legal();
                if (_isSuccess) {
                    urlFile.Core.AkPost("/RightCloud/Role/newRole", {
                        roles: strData
                    }, function (a) {
                        if (a.Content == "ok") {
                            var _list = a.Data;
                            var _strs = _list.join(",");
                            urlFile.Core.AkUrl.Current().openUrl("$winroledetail$" + _strs + "$", true);
                            urlFile.Core.AkUrl.Current().openUrl("$role$" + _strs + "$", false);
                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }
                    });
                }
            };
            return RoleNewPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        Role.RoleNewPageVm = RoleNewPageVm;
        var RoleNewPageStates = (function (_super) {
            __extends(RoleNewPageStates, _super);
            function RoleNewPageStates() {
                _super.apply(this, arguments);
            }
            return RoleNewPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        Role.RoleNewPageStates = RoleNewPageStates;
        var RoleNewPageProps = (function (_super) {
            __extends(RoleNewPageProps, _super);
            function RoleNewPageProps() {
                _super.apply(this, arguments);
            }
            return RoleNewPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        Role.RoleNewPageProps = RoleNewPageProps;
        iocFile.Core.Ioc.Current().RegisterType("ROLENEW", basewedPageFile.Web.BaseWebPageVm, RoleNewPageVm);
    })(Role = exports.Role || (exports.Role = {}));
});
