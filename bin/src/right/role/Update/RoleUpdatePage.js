var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../01core/Util", "./../../../01core/Url", "./../../../04page/BaseWebPage", "./RoleUpdateRow"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, RoleUpdateRowFile) {
    "use strict";
    var RoleUpdatePage;
    (function (RoleUpdatePage) {
        var RoleUpdatePageAction = (function (_super) {
            __extends(RoleUpdatePageAction, _super);
            function RoleUpdatePageAction() {
                _super.apply(this, arguments);
            }
            return RoleUpdatePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        RoleUpdatePage.RoleUpdatePageAction = RoleUpdatePageAction;
        var RoleUpdatePageReact = (function (_super) {
            __extends(RoleUpdatePageReact, _super);
            function RoleUpdatePageReact() {
                _super.apply(this, arguments);
                this.state = new RoleUpdatePageStates();
            }
            RoleUpdatePageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("div", null, this.props.Vm.RowList.map(function (l) {
                    return l.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-sm btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            RoleUpdatePageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return RoleUpdatePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        RoleUpdatePage.RoleUpdatePageReact = RoleUpdatePageReact;
        var RoleUpdatePageVm = (function (_super) {
            __extends(RoleUpdatePageVm, _super);
            function RoleUpdatePageVm(config) {
                _super.call(this);
                this.ReactType = RoleUpdatePageReact;
                this.RowList = [];
                this.Title = "编辑角色";
                this.RowList.push(new RoleUpdateRowFile.RoleUpdateRow.RoleUpdateRowVm());
            }
            RoleUpdatePageVm.prototype.submit = function () {
                var postData = [];
                var _isAllSuccess = true;
                for (var i = 0; i < this.RowList.length; i++) {
                    var roleUpdateRow = this.RowList[i];
                    var rowData = roleUpdateRow.RowData;
                    rowData.FControlUnitID = roleUpdateRow.OrgSelector.vmDataValueGet();
                    postData.push(rowData);
                    //alert(strData);
                    var _isSuccess = roleUpdateRow.legal();
                    if (_isSuccess == false) {
                        _isAllSuccess = false;
                    }
                }
                var strData = JSON.stringify(postData);
                if (_isAllSuccess) {
                    urlFile.Core.AkPost("/RightCloud/Role/update", {
                        roles: strData
                    }, function (a) {
                        if (a.Content == "ok") {
                            var _list = a.Data;
                            var _strs = _list.join(",");
                            urlFile.Core.AkUrl.Current().openUrl("$winroledetail$" + _strs + "$", true);
                            urlFile.Core.AkUrl.Current().openUrl("$role$" + _strs + "$", false);
                        }
                        else {
                            utilFile.Core.Util.Noty("数据修改失败！");
                        }
                    });
                }
            };
            RoleUpdatePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                var _keys = this.Param1;
                urlFile.Core.AkPost("/RightCloud/Role/getRole", { fids: _keys }, function (data) {
                    var _data = data.Data;
                    if (_data) {
                        _this.RowList = [];
                        _data.forEach(function (r, index) {
                            var _row = new RoleUpdateRowFile.RoleUpdateRow.RoleUpdateRowVm();
                            _row.RowData = r;
                            _row.Index = index;
                            index == 0 ? _row.IsItemFormHide = false : _row.IsItemFormHide = true;
                            _row.Index = index;
                            _this.RowList.push(_row);
                            _row.init();
                        });
                        callback();
                    }
                });
            };
            return RoleUpdatePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        RoleUpdatePage.RoleUpdatePageVm = RoleUpdatePageVm;
        var RoleUpdatePageStates = (function (_super) {
            __extends(RoleUpdatePageStates, _super);
            function RoleUpdatePageStates() {
                _super.apply(this, arguments);
            }
            return RoleUpdatePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        RoleUpdatePage.RoleUpdatePageStates = RoleUpdatePageStates;
        var RoleUpdatePageProps = (function (_super) {
            __extends(RoleUpdatePageProps, _super);
            function RoleUpdatePageProps() {
                _super.apply(this, arguments);
            }
            return RoleUpdatePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        RoleUpdatePage.RoleUpdatePageProps = RoleUpdatePageProps;
        iocFile.Core.Ioc.Current().RegisterType("ROLEUPDATE", basewedPageFile.Web.BaseWebPageVm, RoleUpdatePageVm);
    })(RoleUpdatePage = exports.RoleUpdatePage || (exports.RoleUpdatePage = {}));
});
