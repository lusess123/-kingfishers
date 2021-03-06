﻿import rerFile = require("./../../../core/mcrv/AkBaseRenderer");
import cerFile = require("./AKDocumentPageController");
import utilFile = require("./../../../../01core/Util");
export class AKDocumentPageRenderer extends rerFile.AkBaseRenderer {
    public getC(): cerFile.AKDocumentPageController {
        return utilFile.Core.Util.Cast<cerFile.AKDocumentPageController>(this.C);
    }
    
        public Option = null;
        public Key = null;
        public UserId = null;
        public PageObj = null;
        public initR () {
            this.getC().getWithinPageC(this.Option);
        }
        //public initialize = function (config) {
        //    this.Option = config;
        //    me.superclass.initialize.call(this, config);
        //}
        public constructor(config?:any) {
            super();
            this.Option = config;
            
        }
        public creategetWithinPageR (res) {
            if (res.ExtData.PageState != null) {
                var param = $.parseJSON(window["Base64"].decode(res.ExtData.PageState));
                if (param.search != null) {
                    if (param.search.UserID != null) {
                        this.UserId = param.search.UserID;
                    }
                }
            }

            if (this.UserId != "") {
                var nav = res.Forms.View_SNS_ALLDocuments.NavigationColumns;
                for (var i = 0; i < nav.length; i++) {
                    if (nav[i].Name == "PID") {
                        nav[i].Options.RegName = "FlieCodeTable-" + this.UserId;
                    }
                }
            }
            var _this = this;

            res.FunAfterInit = function (page) {
                page.Tag = _this.UserId;
                _this.PageObj = page;
                var _formObj = page.FormObjs["View_SNS_ALLDocuments"];
                _formObj.SetCustomSearchDataFun = _this.setCustomSearchData();
                //                page.FormObj.SetCustomSearchDataFun = _this.setCusomSearchData();
                page.AfterSearchCustomFun = _this.AfterSearchCustom();
                var $img = _this.$JObj.find(".icon-folder-close");
                $img.off("dblclick").on("dblclick", function () {
                    _this.Key = $(this).attr("key");
                    page.FormObj.searchDataList(1);
                });
            }

           

            this.$JObj["Ataw" + this.Option.pageStyle + "Page"](res);
            var mainObj = this.$JObj.AtawControl();
            if (this.Option.paramObj.afterPageFun) {
                var afterPageFun = new Function(this.Option.paramObj.afterPageFun);
                afterPageFun()(mainObj);
            }
        }


        public AfterSearchCustom() {
            var _this = this;
            return function () {
                var $img = _this.$JObj.find(".icon-folder-close");
                $img.off("dblclick").on("dblclick", function () {
                    _this.Key = $(this).attr("key");
                    _this.PageObj.FormObj.searchDataList(1);
                });
            }
        }

        public setCustomSearchData() {
            var _this = this;
            return function (ds) {
                var _dt = ds["View_SNS_ALLDocuments_Search"];
                if (_dt == null) {
                    ds["View_SNS_ALLDocuments_Search"] = [$.extend({}, { UserID: _this.UserId })];
                }
                else if (_dt[0] != null) {
                    ds["View_SNS_ALLDocuments_Search"] = [$.extend({}, _dt[0], { UserID: _this.UserId })];
                }
                return ds;
            }
        }
        
}