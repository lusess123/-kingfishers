import cer = require("./../BasePageCer");
import mer = require("./WorkflowMer");
import rer = require("./WorkflowRer");
import util = require("./../../../01core/Util");


export class WorkflowCer extends cer.BasePageCer {
    public AppCer = null;
    public Type = "";
    public ID = "";
    public Xml = "";
    public SignUrl = "";
    public LayOutName = "TTV";
    public HaveSave = false;
    public HaveBack = false;
    public HaveUnlock = false;

    public getR(): rer.WorkflowRer {
        return util.Core.Util.Cast<rer.WorkflowRer>(this.R);
    }
    public getM(): mer.WorkflowMer {
        return util.Core.Util.Cast<mer.WorkflowMer>(this.M);
    };

    public init() {
        var _this = this;
        _this.R.initR();
        if (this.Type === "inst") {

            this.getM().getWorkflowInstPageDataM(this.ID, function (res) {

                if (res.ExtData) {
                    res.ExtData.DeskShortcutHref = _this.SignUrl;
                } else {
                    res.ExtData = { DeskShortcutHref: _this.SignUrl }
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
                    }
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

                } else {
                    // alert("不能操作");
                    res["AtawSubmitSetting"] = { befortPostDataFun: function (data, page) { alert(page.RegName); return true; } };
                    res["MvcFormUrlSetFun"] = function (mvcForm) {
                        return mvcForm.Url + "?id=" + _this.ID;
                    }
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
                } else {
                    res.ExtData = { DeskShortcutHref: _this.SignUrl }
                }
                res["AtawSubmitSetting"] = { befortPostDataFun: function (data, page) { alert(page.RegName); return true; } };
                res["MvcFormUrlSetFun"] = function (mvcForm) {
                    return mvcForm.Url + "?id=" + _this.ID;
                }
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
                    }
                    _this.getR().loadWorkflowInstDetailR(res);
                    _this.loadMenu();
                });
            }
        }
    };


    public setModel(p1, p2, p3) {
        this.Type = p1.toLowerCase();
        if (!p2 || p2 == "List") {
            p2 = "$$module/workflow/myWork";
        }
        this.Xml = p2;
        this.ID = p3;
        this.SignUrl = $.AKjs.AppGet().M.SignUrl;
    };

    public loadLeft() {

    };

    public loadRight() {

    };

    public loadMenu() {
    };

    public clearPage() {
        $.AKjs.AppGet().hideNavi();
        $.AKjs.AppGet().clearWindow();
    };


}