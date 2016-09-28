var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../core/mcrv/AkBaseRenderer", "./../../../01core/Util"], function (require, exports, rer, util) {
    "use strict";
    var InBoxRer = (function (_super) {
        __extends(InBoxRer, _super);
        function InBoxRer() {
            _super.apply(this, arguments);
            this.AkName = "InBoxRer";
            this.$dvContain = null;
            this.InBoxFormObj = null;
        }
        InBoxRer.prototype.getC = function () {
            return util.Core.Util.Cast(this.C);
        };
        InBoxRer.prototype.initR = function () {
            this.$dvContain = $("<div></div>");
            this.$JObj.append(this.$dvContain);
            this.getC().loadMainContent("");
        };
        InBoxRer.prototype.loadModuleXmlMainR = function (res) {
            var _this = this;
            res.FunAfterInit = function (page) {
                //var _$naviMenu = $("<div id='ACT-NAVI-MENU' class='panel-body AKJS ACT_CONTROL'></div>");
                //                            var _$div = $("<div class='panel panel-default acs-leftBasePannel'></div>");
                //                            $.AKjs.AppGet().R.getLeft$DomR().find("#ACT-NAVI-MENU").prepend(_$div);
                //                            _this.initUserMailAccountsNavi(_$div);
                _this.InBoxFormObj = page.FormObjs["MAIL_INBOX"];
                _this.InBoxFormObj.SetCustomSearchDataFun = _this.setCustomSearchData();
            };
            res.IsPart = true;
            this.$dvContain.AtawListPage(res);
        };
        InBoxRer.prototype.initUserMailAccountsNavi = function ($dom) {
            //            var _$div = $("<div class='panel panel-default acs-leftBasePannel'></div>");
            //            $dom.append(_$div);
            $dom.append("<div class='panel-heading'><a><i class='icon-caret-up'>帐户</i></a></div>");
            var _$body = $("<div class='panel-body'></div>");
            $dom.append(_$body);
            this.getC().loadUserMailAccounts(_$body);
        };
        InBoxRer.prototype.initMailAccountItems = function (res, $dom) {
            var _this = this;
            var groupName = "gn" + $.AKjs.getUniqueID();
            for (var i = 0; i < res.length; i++) {
                var _$radioItem = $("<div class='checkbox col-md-offset-0'>" +
                    "<input type='Radio' value='" + res[i].Account + "' name='" + groupName + "'>" + res[i].Account + "</div>");
                $dom.append(_$radioItem);
                if (res[i].IsDefault) {
                    _$radioItem.find("input").prop("checked", true);
                }
                _$radioItem.find("input").change(function () {
                    if ($(this).is(":checked")) {
                        //_this.InBoxFormObj.SetCustomSearchDataFun = _this.setCustomSearchData($(this).val());
                        //_this.InBoxFormObj.searchDataList(1);
                        _this.$dvContain.clear();
                        $.AKjs.AppGet().R.getLeft$DomR().find("#ACT-NAVI-MENU").clear();
                        var _ds = {};
                        var _dt = _ds["CUSTOM_SEARCH"] = [{ EMAILACCOUNT: $(this).val() }];
                        _this.getC().loadMainContent($.toJSON(_ds));
                    }
                });
            }
        };
        ;
        InBoxRer.prototype.setCustomSearchData = function () {
            var _this = this;
            var account = $.AKjs.AppGet().R.getLeft$DomR().find(".ACT-EMAILACCOUNT-LIST input:checked").val();
            return function (ds) {
                var _dt = ds["CUSTOM_SEARCH"] = [{ EMAILACCOUNT: account }];
                //                if (_dt != null)
                //                    ds["MAIL_INBOX_Search"] = [$.extend({}, _dt[0], { EMAILTO: account })];
                //                else {
                //                    ds["MAIL_INBOX_Search"] = [$.extend({}, { EMAILTO: account })];
                //                }
                return ds;
            };
        };
        ;
        InBoxRer.prototype.loadLeft = function ($dom) {
            var _$div = $("<div class='panel panel-default acs-leftBasePannel ACT-EMAILACCOUNT-LIST'></div>");
            $dom.find(".DESK-SYSTEM-NOTICE").after(_$div);
            this.initUserMailAccountsNavi(_$div);
            //_this.InBoxFormObj = _this.$dvContain.AtawControl().FormObjs["MAIL_INBOX"];
        };
        ;
        return InBoxRer;
    }(rer.AkBaseRenderer));
    exports.InBoxRer = InBoxRer;
});
