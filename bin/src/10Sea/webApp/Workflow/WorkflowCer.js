var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, cer, util) {
    "use strict";
    var WorkflowCer = (function (_super) {
        __extends(WorkflowCer, _super);
        function WorkflowCer() {
            _super.apply(this, arguments);
            this.AppCer = null;
            this.Type = "";
            this.ID = "";
            this.Xml = "";
            this.SignUrl = "";
            this.LayOutName = "TTV";
            this.HaveSave = false;
            this.HaveBack = false;
            this.HaveUnlock = false;
        }
        WorkflowCer.prototype.getR = function () {
            return util.Core.Util.Cast(this.R);
        };
        WorkflowCer.prototype.getM = function () {
            return util.Core.Util.Cast(this.M);
        };
        ;
        WorkflowCer.prototype.init = function () {
            var _this = this;
            _this.R.initR();
            if (this.Type === "inst") {
                this.getM().getWorkflowInstPageDataM(this.ID, function (res) {
                    if (res.ExtData) {
                        res.ExtData.DeskShortcutHref = _this.SignUrl;
                    }
                    else {
                        res.ExtData = { DeskShortcutHref: _this.SignUrl };
                    }
                    if (res.ExtData.FormType === "1") {
                        // alert("操作");
                        res["AtawSubmitSetting"] = {
                            befortPostDataFun: function (data, page) {
                                page.AtawSubmitSetting.Url = "/Workflow/MyWork/ProcessAsk?id=" + _this.ID;
                                //+ "&ds=" + $.toJSON(data)
                                return true;
                            }
                        };
                        res["MvcFormUrlSetFun"] = function (mvcForm) {
                            return mvcForm.Url + "?id=" + _this.ID;
                        };
                        res["NoChangeCheckFun"] = function () {
                            return true;
                        };
                        res.OtherButtonList = [];
                        if (res.ExtData && res.ExtData.HaveSave == "1") {
                            _this.HaveSave = true;
                            res.OtherButtonList.push({
                                Txt: "保存",
                                Url: "/Workflow/MyWork/ProcessSave?id=" + _this.ID
                            });
                        }
                        if (res.ExtData && res.ExtData.HaveBack == "1") {
                            _this.HaveBack = true;
                            res.OtherButtonList.push({
                                NoSubmit: true,
                                Txt: "回退",
                                Url: "/Workflow/MyWork/Back?id=" + _this.ID
                            });
                        }
                        if (res.ExtData && res.ExtData.HaveUnlock == "1") {
                            _this.HaveUnlock = true;
                            res.OtherButtonList.push({
                                NoSubmit: true,
                                Txt: "解锁",
                                Url: "/Workflow/MyWork/Unlock?id=" + _this.ID
                            });
                        }
                        _this.getR().loadWorkflowInstProcessR(res, _this.ID);
                    }
                    else {
                        // alert("不能操作");
                        res["AtawSubmitSetting"] = { befortPostDataFun: function (data, page) { alert(page.RegName); return true; } };
                        res["MvcFormUrlSetFun"] = function (mvcForm) {
                            return mvcForm.Url + "?id=" + _this.ID;
                        };
                        _this.getR().loadWorkflowInstDetailR(res);
                    }
                    _this.loadMenu();
                });
            }
            else if (this.Type === "insthis") {
                // alert("历史");
                this.getM().getWorkflowInstHisPageDataM(this.ID, function (res) {
                    if (res.ExtData) {
                        res.ExtData.DeskShortcutHref = _this.SignUrl;
                    }
                    else {
                        res.ExtData = { DeskShortcutHref: _this.SignUrl };
                    }
                    res["AtawSubmitSetting"] = { befortPostDataFun: function (data, page) { alert(page.RegName); return true; } };
                    res["MvcFormUrlSetFun"] = function (mvcForm) {
                        return mvcForm.Url + "?id=" + _this.ID;
                    };
                    _this.getR().loadWorkflowInstHisR(res);
                    _this.loadMenu();
                });
            }
            else {
                if (this.Type === "detail") {
                    // alert("查看");
                    this.getM().getWorkflowDetailPageDataM(this.ID, function (res) {
                        res["AtawSubmitSetting"] = { befortPostDataFun: function (data, page) { alert(page.RegName); return true; } };
                        res["MvcFormUrlSetFun"] = function (mvcForm) {
                            return mvcForm.Url + "?id=" + _this.ID;
                        };
                        _this.getR().loadWorkflowInstDetailR(res);
                        _this.loadMenu();
                    });
                }
            }
        };
        ;
        WorkflowCer.prototype.setModel = function (p1, p2, p3) {
            this.Type = p1.toLowerCase();
            if (!p2 || p2 == "List") {
                p2 = "$$module/workflow/myWork";
            }
            this.Xml = p2;
            this.ID = p3;
            this.SignUrl = $.AKjs.AppGet().M.SignUrl;
        };
        ;
        WorkflowCer.prototype.loadLeft = function () {
        };
        ;
        WorkflowCer.prototype.loadRight = function () {
        };
        ;
        WorkflowCer.prototype.loadMenu = function () {
        };
        ;
        WorkflowCer.prototype.clearPage = function () {
            $.AKjs.AppGet().hideNavi();
            $.AKjs.AppGet().clearWindow();
        };
        ;
        return WorkflowCer;
    }(cer.BasePageCer));
    exports.WorkflowCer = WorkflowCer;
});
