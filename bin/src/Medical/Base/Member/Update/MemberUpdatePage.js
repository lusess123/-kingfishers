var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./MemberUpdateRowDom"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, updateRowFile) {
    "use strict";
    var MemberUpdatePage;
    (function (MemberUpdatePage) {
        var MemberUpdatePageAction = (function (_super) {
            __extends(MemberUpdatePageAction, _super);
            function MemberUpdatePageAction() {
                _super.apply(this, arguments);
            }
            return MemberUpdatePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        MemberUpdatePage.MemberUpdatePageAction = MemberUpdatePageAction;
        var MemberUpdatePageReact = (function (_super) {
            __extends(MemberUpdatePageReact, _super);
            function MemberUpdatePageReact() {
                _super.apply(this, arguments);
                this.state = new MemberUpdatePageStates();
            }
            MemberUpdatePageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", {className: "acsModalList"}, this.props.Vm.RowList.map(function (row, i) {
                    row.Index = i;
                    return row.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            MemberUpdatePageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return MemberUpdatePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        MemberUpdatePage.MemberUpdatePageReact = MemberUpdatePageReact;
        var MemberUpdatePageVm = (function (_super) {
            __extends(MemberUpdatePageVm, _super);
            function MemberUpdatePageVm(config) {
                _super.call(this);
                this.ReactType = MemberUpdatePageReact;
                this.RowList = [];
                this.Title = "编辑会员信息";
                if (config) {
                    this.init(config);
                }
            }
            MemberUpdatePageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new updateRowFile.MemberUpdateRowDom.MemberUpdateRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            MemberUpdatePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                var str = this.Param1.split(",");
                var Fid = str[0];
                this.BatchId = str[1];
                urlFile.Core.AkPost("/MedicalCenter/Member/FetchMembersList", { fids: Fid }, function (a) {
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
            MemberUpdatePageVm.prototype.legal = function () {
                var _isRes = true;
                this.RowList.forEach(function (row) {
                    if (!row.legal()) {
                        _isRes = false;
                    }
                });
                return _isRes;
            };
            MemberUpdatePageVm.prototype.getData = function () {
                var _ds = [];
                this.RowList.forEach(function (row) {
                    var _o = row.getData();
                    if (!utilFile.Core.Util.IsPure(_o)) {
                        _ds.push(_o);
                    }
                });
                if (_ds.length == 0) {
                    return null;
                }
                return _ds;
            };
            MemberUpdatePageVm.prototype.submit = function () {
                var _this = this;
                if (this.legal()) {
                    var dt = this.getData();
                    if (dt) {
                        var str = JSON.stringify(dt);
                        urlFile.Core.AkPost("/MedicalCenter/Member/ModifyMembers", { Members: str }, function (a) {
                            if (a.Content == "ok") {
                                utilFile.Core.Util.Noty("数据编辑成功！");
                                _this.SendPageActor({ ToPanelName: "", ToModuleName: "GroupManagePage" }, { Select: "PersonalManage" });
                                _this.closePage();
                            }
                            else {
                                utilFile.Core.Util.Noty("数据编辑失败");
                            }
                        });
                    }
                    else {
                        utilFile.Core.Util.Noty("没有可提交的数据");
                    }
                }
            };
            return MemberUpdatePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        MemberUpdatePage.MemberUpdatePageVm = MemberUpdatePageVm;
        var MemberUpdatePageStates = (function (_super) {
            __extends(MemberUpdatePageStates, _super);
            function MemberUpdatePageStates() {
                _super.apply(this, arguments);
            }
            return MemberUpdatePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        MemberUpdatePage.MemberUpdatePageStates = MemberUpdatePageStates;
        var MemberUpdatePageProps = (function (_super) {
            __extends(MemberUpdatePageProps, _super);
            function MemberUpdatePageProps() {
                _super.apply(this, arguments);
            }
            return MemberUpdatePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        MemberUpdatePage.MemberUpdatePageProps = MemberUpdatePageProps;
        iocFile.Core.Ioc.Current().RegisterType("MemberUPDATEPAGE", basewedPageFile.Web.BaseWebPageVm, MemberUpdatePageVm);
    })(MemberUpdatePage = exports.MemberUpdatePage || (exports.MemberUpdatePage = {}));
});
