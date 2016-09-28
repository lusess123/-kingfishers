var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../04page/BaseWebPage", "./RowDom"], function (require, exports, React, iocFile, urlFile, basewedPageFile, rowDomFile) {
    "use strict";
    var Role;
    (function (Role) {
        var RoleDetailPageAction = (function (_super) {
            __extends(RoleDetailPageAction, _super);
            function RoleDetailPageAction() {
                _super.apply(this, arguments);
            }
            return RoleDetailPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        Role.RoleDetailPageAction = RoleDetailPageAction;
        var RoleDetailPageReact = (function (_super) {
            __extends(RoleDetailPageReact, _super);
            function RoleDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new RoleDetailPageStates();
            }
            RoleDetailPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("div", null, this.props.Vm.RowList.map(function (_row) {
                    return _row.intoDom();
                })));
            };
            return RoleDetailPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        Role.RoleDetailPageReact = RoleDetailPageReact;
        var RoleDetailPageVm = (function (_super) {
            __extends(RoleDetailPageVm, _super);
            function RoleDetailPageVm() {
                _super.apply(this, arguments);
                this.ReactType = RoleDetailPageReact;
                this.RowList = [];
                this.Title = "角色详情";
            }
            RoleDetailPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                var _keys = this.Param1;
                urlFile.Core.AkPost("/RightCloud/Role/getRole", { fids: _keys }, function (data) {
                    var _data = data.Data;
                    if (_data) {
                        _this.RowList = [];
                        _data.forEach(function (r, index) {
                            var _row = new rowDomFile.Row.RowVm();
                            _row.Data = r;
                            // _row.MasterDomObj.Data = r;
                            _row.Index = index;
                            index == 0 ? _row.IsItemFormHide = false : _row.IsItemFormHide = true;
                            //if (r.MenuButtonList) {
                            //    _row.MenuButtonList = r.MenuButtonList;
                            //}
                            _this.RowList.push(_row);
                        });
                        callback();
                    }
                });
            };
            return RoleDetailPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        Role.RoleDetailPageVm = RoleDetailPageVm;
        var RoleDetailPageStates = (function (_super) {
            __extends(RoleDetailPageStates, _super);
            function RoleDetailPageStates() {
                _super.apply(this, arguments);
            }
            return RoleDetailPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        Role.RoleDetailPageStates = RoleDetailPageStates;
        var RoleDetailPageProps = (function (_super) {
            __extends(RoleDetailPageProps, _super);
            function RoleDetailPageProps() {
                _super.apply(this, arguments);
            }
            return RoleDetailPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        Role.RoleDetailPageProps = RoleDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("roledetail", basewedPageFile.Web.BaseWebPageVm, RoleDetailPageVm);
    })(Role = exports.Role || (exports.Role = {}));
});
