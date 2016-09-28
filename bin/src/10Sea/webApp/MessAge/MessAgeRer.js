var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseRenderer", "./../../../01core/Ioc", "./../../core/IPage"], function (require, exports, baseRerFile, iocFile, iPageFile) {
    "use strict";
    var MessAgeRer = (function (_super) {
        __extends(MessAgeRer, _super);
        function MessAgeRer() {
            _super.apply(this, arguments);
            this.$dvContain = null;
            this.MessageType = null;
        }
        MessAgeRer.prototype.initR = function (Type) {
            this.MessageType = Type;
            this.$dvContain = $('<div class="panel panel-default">'
                + '<div class="panel-body">'
                + '<div class="row">'
                + '<div class="col-md-3"><div class="ACT-MESSAGE-TYPE"></div></div>'
                + '<div class="col-md-6"><div class="ACT-MESSAGE-CONTENT"></div></div>'
                + '</div></div></div>');
            this.$JObj.append(this.$dvContain);
            this.initContentContain();
        };
        MessAgeRer.prototype.initContentContain = function () {
            var _this = this;
            var $content = this.$dvContain.find(".ACT-MESSAGE-CONTENT");
            if (!this.MessageType) {
                this.MessageType = "todo";
            }
            var mrc = this.MessageType + "mrc";
            iocFile.Core.Ioc.Current().FetchAsyInstance(mrc, iPageFile.PageFace, function (a) { _this.initR(a); }, function () {
                alert("sea组件: " + mrc + "  不存在（" + new Date() + "）");
            });
            //var Creator = require.async(mrc, function (sea) {
            //    if (sea !=null){
            //        var _creator = new sea();
            //        _creator.init($content);
            //    }
            //});
        };
        ;
        MessAgeRer.prototype.bindEvent = function ($dom) {
            $.AKjs.App.bindPageEvent($dom);
        };
        MessAgeRer.prototype.initMsgTypeContain = function (res) {
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
        ;
        return MessAgeRer;
    }(baseRerFile.AkBaseRenderer));
    exports.MessAgeRer = MessAgeRer;
});
