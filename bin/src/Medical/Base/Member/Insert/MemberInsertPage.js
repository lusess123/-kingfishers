var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./MemberInsertRowDom"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, insertRowFile) {
    "use strict";
    var MemberInsertPage;
    (function (MemberInsertPage) {
        var MemberInsertPageAction = (function (_super) {
            __extends(MemberInsertPageAction, _super);
            function MemberInsertPageAction() {
                _super.apply(this, arguments);
            }
            return MemberInsertPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        MemberInsertPage.MemberInsertPageAction = MemberInsertPageAction;
        var MemberInsertPageReact = (function (_super) {
            __extends(MemberInsertPageReact, _super);
            function MemberInsertPageReact() {
                _super.apply(this, arguments);
                this.state = new MemberInsertPageStates();
            }
            MemberInsertPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.InsertRowList.map(function (row) {
                    return row.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            MemberInsertPageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return MemberInsertPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        MemberInsertPage.MemberInsertPageReact = MemberInsertPageReact;
        var MemberInsertPageVm = (function (_super) {
            __extends(MemberInsertPageVm, _super);
            function MemberInsertPageVm(config) {
                _super.call(this);
                this.ReactType = MemberInsertPageReact;
                this.InsertRowList = [];
                this.Title = "新增会员";
                var insertRow = new insertRowFile.MemberInsertRowDom.MemberInsertRowDomVm();
                this.InsertRowList.push(insertRow);
            }
            MemberInsertPageVm.prototype.init = function (config) {
            };
            MemberInsertPageVm.prototype.submit = function () {
                var postData = [];
                var masterRow = this.InsertRowList[0].MasterRow;
                var resultcommonData = masterRow.RowData;
                postData.push(resultcommonData);
                var jsonData = JSON.stringify(postData);
                var _isSuccess = masterRow.legal();
                if (_isSuccess) {
                    urlFile.Core.AkPost("/MedicalCenter/Member/AddMembers", {
                        members: jsonData
                    }, function (a) {
                        if (a.Content == "ok") {
                            var _list = a.Data;
                            //var _strs: string = _list.join(",");
                            //urlFile.Core.AkUrl.Current().openUrl(
                            //    "$panelMemberdetailpage$" + _strs + "$",
                            //    true,
                            //    () => {
                            //        urlFile.Core.AkUrl.Current().openUrl("$Memberlistpage$" + _strs + "$", false);
                            //    }
                            //);
                            urlFile.Core.AkUrl.Current().openUrl("$Memberlistpage$", false);
                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }
                    });
                }
            };
            MemberInsertPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return MemberInsertPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        MemberInsertPage.MemberInsertPageVm = MemberInsertPageVm;
        var MemberInsertPageStates = (function (_super) {
            __extends(MemberInsertPageStates, _super);
            function MemberInsertPageStates() {
                _super.apply(this, arguments);
            }
            return MemberInsertPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        MemberInsertPage.MemberInsertPageStates = MemberInsertPageStates;
        var MemberInsertPageProps = (function (_super) {
            __extends(MemberInsertPageProps, _super);
            function MemberInsertPageProps() {
                _super.apply(this, arguments);
            }
            return MemberInsertPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        MemberInsertPage.MemberInsertPageProps = MemberInsertPageProps;
        iocFile.Core.Ioc.Current().RegisterType("MemberINSERTPAGE", basewedPageFile.Web.BaseWebPageVm, MemberInsertPageVm);
    })(MemberInsertPage = exports.MemberInsertPage || (exports.MemberInsertPage = {}));
});
