var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseRenderer", "./../Activity/ActivityMRC"], function (require, exports, baseRerFile, activitymrc) {
    "use strict";
    var MyWorkRer = (function (_super) {
        __extends(MyWorkRer, _super);
        function MyWorkRer() {
            _super.apply(this, arguments);
            this.$Contain = null;
            this.activity = null;
            this.createBusinessItem = function (item) {
                var _this = this;
                var $a;
                var href = item.Href ? item.Href : "javascript:void(0)";
                var regname = item.RegName;
                if (regname) {
                    $a = $('<li><a class="ACT-PUBLISHER-BTN" href="javascript:void(0)" regname="' + regname + '"><i class="' + item.IconClass + '"/>' + item.DisplayName + '</a></li>');
                    (function (currentRegname) {
                        $a.click(function () {
                            _this.clickPublisher(currentRegname);
                            _this.$All.hide();
                            _this.$Active.show();
                        });
                    })(regname);
                }
                else {
                    $a = $('<li><a class="ACT-A-HREF" href="' + href + '"><i class="' + item.IconClass + '"/>' + item.DisplayName + '</a></li>');
                }
                return $a;
            };
        }
        MyWorkRer.prototype.initR = function ($dom) {
            this.$Contain = $('<div class="panel panel-default"><div class="panel-heading">事务</div><div class="panel-body"></div><div class="panel-footer"></div></div>');
            this.$JObj.html("").append(this.$Contain);
        };
        ;
        MyWorkRer.prototype.createMyWorkR = function (res) {
            var $myWorkContent = this.$Contain.find('.panel-footer');
            //var _per = require("activitymrc");
            //_per = new _per();
            this.activity = new activitymrc.ActivityMRC();
            this.activity.init($myWorkContent, { type: "MyWork", workflow: true });
            $.AKjs.AppGet().bindPageEvent(this.$JObj);
        };
        MyWorkRer.prototype.createBusinessR = function (res) {
            var $business = this.$Contain.find('.panel-body');
            $business.html("");
            var publishercolor = ["purple", "blue", "green", "red"];
            var $category, item, $child, businessItem;
            for (var i = 0; i < res.Roots.length; i++) {
                item = res.Roots[i];
                if (item.DisplayName !== "创建+分享" && item.DisplayName !== "写邮件") {
                    var $dv = $('<div class="ask-bus-panel"><div class="ask-publisher ACT-PUB-CONTENT2"></div></div>');
                    businessItem = [];
                    var businessItem2 = [];
                    for (var j = 0; j < item.Children.length; j++) {
                        if (item.Children[j].IsSpecial && !item.Children[j].RegName) {
                            $child = this.createBusinessItem(item.Children[j]);
                            businessItem.push($child);
                            var $child2 = $('<div class="new-tag fl "> <i class="' + item.Children[j].IconClass + '"></i>' + item.Children[j].DisplayName + ' </div>');
                            businessItem2.push($child2);
                        }
                    }
                    if (businessItem.length > 0) {
                        var _$album = $('<div class="ask-bus-panel"><div class="ask-publisher ACT-PUB-CONTENT2"><div class="publisher-box ACT-PUB-CONTENT"></div></div></div>');
                        $category = $('<div class="' + publishercolor[i % 4] + '"><i class="' + item.IconClass + ' icon-4x ask-white"></i><h3>' + item.DisplayName + '</h3></div>');
                        _$album.find(".ACT-PUB-CONTENT").append($category);
                        var _$footer = $('<div class="publisher-info-all"> <div class="publisher-info-title ACT-PUBLISH-FOOTER"></div></div>');
                        var _$footer2 = $('<div class="publisher-info"></div>');
                        for (var j = 0; j < businessItem.length; j++) {
                            _$footer.find(".ACT-PUBLISH-FOOTER").append(businessItem[j]);
                        }
                        for (var t = 0; t < 3; t++) {
                            _$footer2.append(businessItem2[t]);
                        }
                        if (businessItem2.length > 3) {
                            _$footer2.append('<p class="post-time fl"> ...</p>');
                        }
                        _$album.find(".ACT-PUB-CONTENT2").append(_$footer).append(_$footer2);
                        $dv.find(".ACT-PUB-CONTENT2").append(_$album);
                    }
                    else if (!item.RegName) {
                        var _$album = $('<div class="ask-bus-panel"><a class="ACT-A-HREF"  href ="' + item.Href + '"><div class="ask-publisher ACT-PUB-CONTENT2"><div class="publisher-box ACT-PUB-CONTENT"></div></div></a></div>');
                        $category = $('<div class="' + publishercolor[i % 4] + '"><i class="' + item.IconClass + ' icon-4x ask-white"></i><h3>' + item.DisplayName + '</div>');
                        _$album.find(".ACT-PUB-CONTENT").append($category);
                        $dv.find(".ACT-PUB-CONTENT2").append(_$album);
                    }
                    $business.append($dv);
                }
            }
        };
        return MyWorkRer;
    }(baseRerFile.AkBaseRenderer));
    exports.MyWorkRer = MyWorkRer;
});
