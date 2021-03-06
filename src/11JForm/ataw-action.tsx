﻿//import postdata = require("./ataw-postdataset");
enum Ataw_ActionType {
    Alert = 1,
    Reload,
    Url,
    Object,
    Noty,
    NoGotoUrl,
    JsonObject,
    JsAjaxFun
}
export var ActionCommond = {
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
        var obj = $.parseJSON(aRR.Obj)
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
interface IaRR {
    ActionType: string;
}

export function ActionResponse_Commond_Fun(aRR: IaRR, obj_Fun: any): void {
    var _Ataw_ActionType: any = Ataw_ActionType[aRR.ActionType];
    if (_Ataw_ActionType == undefined) {
        _Ataw_ActionType = ActionCommond[aRR.ActionType];
        if (_Ataw_ActionType)
            _Ataw_ActionType = aRR.ActionType;
    }
    if (_Ataw_ActionType) {
        var _ActionCommond = ActionCommond[_Ataw_ActionType];
        if (_ActionCommond) {
            return _ActionCommond(aRR, obj_Fun);
        } else {
            alert("不存在的命令定义： " + _ActionCommond);
        }
    }
    else
        alert("不存在的命令值 " + aRR.ActionType);
}