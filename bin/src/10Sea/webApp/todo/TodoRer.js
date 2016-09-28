var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseRenderer", "./../../../01core/Util"], function (require, exports, baseRerFile, utilFile) {
    "use strict";
    var TodoRer = (function (_super) {
        __extends(TodoRer, _super);
        function TodoRer() {
            _super.apply(this, arguments);
            this.AkName = "todorer";
            this.$dvContain = null;
        }
        TodoRer.prototype.getC = function () {
            return utilFile.Core.Util.Cast(this.C);
        };
        ;
        TodoRer.prototype.initR = function ($dom) {
            this.$dvContain = $('<div class="panel panel-default"><div class="panel-heading">待办事项</div>'
                + '<div class="panel-body ACT-BODY"></div></div>');
            this.$JObj.append(this.$dvContain);
            this.$dvContain.find(".ACT-BODY").append("<div class='ACT-TOPMYWORK'></div>");
            this.$dvContain.find(".ACT-BODY").append("<div class='ACT-TODO'></div>");
            //this.C.loadTopMyWork();
            this.getC().loadToDoData();
        };
        ;
        TodoRer.prototype.setTopMyWork = function (htmlData) {
            this.$dvContain.find(".ACT-TOPMYWORK").append(htmlData);
            this.bindEvent();
        };
        ;
        TodoRer.prototype.initToDoWork = function (res) {
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
        ;
        TodoRer.prototype.bindEvent = function () {
            $.AKjs.App.bindPageEvent(this.$dvContain);
        };
        return TodoRer;
    }(baseRerFile.AkBaseRenderer));
    exports.TodoRer = TodoRer;
});
