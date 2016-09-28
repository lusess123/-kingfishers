import baseRerFile = require("./../../core/mcrv/AkBaseRenderer");
import urlFile = require("./../../../01core/Url");
import cFile = require("./TodoCer");
import utilFile = require("./../../../01core/Util");

import seaFile = require("./../../sea");
import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");


export class TodoRer extends baseRerFile.AkBaseRenderer {
  public AkName = "todorer";
  public $dvContain = null;
  public getC(): cFile.TodoCer {
      return utilFile.Core.Util.Cast<cFile.TodoCer>(this.C);
  };
public initR ($dom) {
    this.$dvContain = $('<div class="panel panel-default"><div class="panel-heading">待办事项</div>'
        + '<div class="panel-body ACT-BODY"></div></div>');
    this.$JObj.append(this.$dvContain);
    this.$dvContain.find(".ACT-BODY").append("<div class='ACT-TOPMYWORK'></div>");
    this.$dvContain.find(".ACT-BODY").append("<div class='ACT-TODO'></div>");
    //this.C.loadTopMyWork();
    this.getC().loadToDoData();
};

public setTopMyWork(htmlData) {
    this.$dvContain.find(".ACT-TOPMYWORK").append(htmlData);
    this.bindEvent();
};

 public initToDoWork (res) {
    if (res.length == 0) {
        this.$dvContain.find(".ACT-TODO").append("<p>暂无内容</p>");
        return;
    }
    var _$ul = $("<ul id=\"messageContain\"class=\"panel-collapse in\"></ul>");
    var temp = [];
    for (var i = 0; i < res.length; i++) {
        var id = "contain" + i.toString();
        var categoryName = res[i].CategoryName.isEmpty() ? "全部" : res[i].CategoryName;
        var _$li = $("<li><a data-parent=\"#messageContain\" href='#" + id + "' data-toggle=\"collapse\" data-toggle='collapse' title=\"点击折叠或打开\" class=\"\">" + categoryName + "</a></li>");
        _$ul.append(_$li);
        var _$itemul = $("<ul id='" + id + "'  class='panel-in in'></ul>");
        for (var j = 0; j < res[i].ItemList.length; j++) {
            _$itemul.append("<li>" + res[i].ItemList[j].Body + "<span class=\"text-muted\" style=\"float:right\">" + res[i].ItemList[j].CreateTime + "</span></li>");
        }
        _$li.append(_$itemul);

    }
    this.$dvContain.find(".ACT-TODO").append(_$ul);
    this.bindEvent();
};

public bindEvent() {
    $.AKjs.App.bindPageEvent(this.$dvContain);
}


}