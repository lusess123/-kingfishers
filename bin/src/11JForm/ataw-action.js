define(["require", "exports"], function (require, exports) {
    "use strict";
    //import postdata = require("./ataw-postdataset");
    var Ataw_ActionType;
    (function (Ataw_ActionType) {
        Ataw_ActionType[Ataw_ActionType["Alert"] = 1] = "Alert";
        Ataw_ActionType[Ataw_ActionType["Reload"] = 2] = "Reload";
        Ataw_ActionType[Ataw_ActionType["Url"] = 3] = "Url";
        Ataw_ActionType[Ataw_ActionType["Object"] = 4] = "Object";
        Ataw_ActionType[Ataw_ActionType["Noty"] = 5] = "Noty";
        Ataw_ActionType[Ataw_ActionType["NoGotoUrl"] = 6] = "NoGotoUrl";
        Ataw_ActionType[Ataw_ActionType["JsonObject"] = 7] = "JsonObject";
        Ataw_ActionType[Ataw_ActionType["JsAjaxFun"] = 8] = "JsAjaxFun";
    })(Ataw_ActionType || (Ataw_ActionType = {}));
    exports.ActionCommond = {
        Alert: function (aRR) {
            // Ataw.msgbox.show(aRR.Content);
            $.AKjs.AppGet().notifyMesg(aRR.Content);
        },
        Reload: function (aRR) {
            window.location.reload();
        },
        Url: function (aRR) {
            $.AKjs.AppGet().M.IsRouteEvent = false;
            window.location.href = aRR.Content;
        },
        Object: function (aRR, obj_Fun) {
            if (obj_Fun) {
                obj_Fun(aRR.Obj);
            }
            return aRR.Obj;
        },
        NoGotoUrl: function (aRR) {
            $.AKjs.AppGet().openUrl(aRR.Content);
        },
        JsonObject: function (aRR, obj_Fun) {
            var obj = $.parseJSON(aRR.Obj);
            obj_Fun(obj);
            return obj;
        },
        JsAjaxFun: function (aRR, obj_Fun) {
            //$.HideAjax();
            if (aRR.Content && aRR.Content != "") {
                var _fun = $.AKjs.JsAjaxFun[aRR.Content];
                if (_fun) {
                    var obj = aRR.Obj;
                    var _res = $.AKjs.JsAjaxFun[aRR.Content](obj);
                    if (_res) {
                        obj_Fun(_res);
                    }
                }
                else {
                    alert("找不到js函数 $.AKjs.JsAjaxFun." + aRR.Content);
                    throw "找不到js函数 $.AKjs.JsAjaxFun." + aRR.Content;
                }
            }
            else {
                alert("js函数 $.AKjs.JsAjaxFun.名不能为空吧！");
                throw "js函数 $.AKjs.JsAjaxFun.名不能为空吧！";
            }
        }
    };
    function ActionResponse_Commond_Fun(aRR, obj_Fun) {
        var _Ataw_ActionType = Ataw_ActionType[aRR.ActionType];
        if (_Ataw_ActionType == undefined) {
            _Ataw_ActionType = exports.ActionCommond[aRR.ActionType];
            if (_Ataw_ActionType)
                _Ataw_ActionType = aRR.ActionType;
        }
        if (_Ataw_ActionType) {
            var _ActionCommond = exports.ActionCommond[_Ataw_ActionType];
            if (_ActionCommond) {
                return _ActionCommond(aRR, obj_Fun);
            }
            else {
                alert("不存在的命令定义： " + _ActionCommond);
            }
        }
        else
            alert("不存在的命令值 " + aRR.ActionType);
    }
    exports.ActionResponse_Commond_Fun = ActionResponse_Commond_Fun;
});
