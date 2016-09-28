import baseRerFile = require("./../../core/mcrv/AkBaseRenderer");
import urlFile = require("./../../../01core/Url");
import cFile = require("./MessAgeCer");
import utilFile = require("./../../../01core/Util");

import seaFile = require("./../../sea");
import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");

export class MessAgeRer extends baseRerFile.AkBaseRenderer {
    public $dvContain = null;
    public MessageType = null;

    public initR(Type?:any) {
        this.MessageType = Type;
        this.$dvContain = $('<div class="panel panel-default">'
            + '<div class="panel-body">'
            + '<div class="row">'
            + '<div class="col-md-3"><div class="ACT-MESSAGE-TYPE"></div></div>'
            + '<div class="col-md-6"><div class="ACT-MESSAGE-CONTENT"></div></div>'
            + '</div></div></div>');
        this.$JObj.append(this.$dvContain);
        this.initContentContain();
    }

    public initContentContain() {
        var $content = this.$dvContain.find(".ACT-MESSAGE-CONTENT");
        if (!this.MessageType) {
            this.MessageType = "todo";
        }
        var mrc = this.MessageType + "mrc";
        iocFile.Core.Ioc.Current().FetchAsyInstance<iPageFile.IPage>(
            mrc, iPageFile.PageFace, (a) => { this.initR(a) }, () => {
                alert("sea组件: " + mrc + "  不存在（" + new Date() + "）");
            });
        //var Creator = require.async(mrc, function (sea) {
        //    if (sea !=null){
        //        var _creator = new sea();
        //        _creator.init($content);
        //    }
        //});
    };

    public bindEvent($dom) {
        $.AKjs.App.bindPageEvent($dom);
    }

    public initMsgTypeContain(res) {
        var $ul = $("<ul></ul>");
        for (var i = 0; i < res.length; i++) {
            var _$li = $("<li type='" + res[i].Value.toLowerCase() + "'><a class='ACT-A-HREF' href='$message$" + res[i].Value.toLowerCase() + "'>" + res[i].Name + "</a></li>");
            $ul.append(_$li);
        }
        this.$dvContain.find(".ACT-MESSAGE-TYPE").append($ul);
        $ul.find("li>a").css("color", "");
        if (this.MessageType) {
            var type = this.MessageType.toLowerCase();
            $ul.find("li[type='" + type + "']>a").css("color", "red");
        }
        else {
            $ul.find("li[type='todo']>a").css("color", "red");
        }
        this.bindEvent($ul);
    };
}
  
