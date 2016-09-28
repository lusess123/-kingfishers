import baseRerFile = require("./../../core/mcrv/AkBaseRenderer");
import urlFile = require("./../../../01core/Url");
import cFile = require("./PublisherCer");
import utilFile = require("./../../../01core/Util");

import seaFile = require("./../../sea");

export class PublisherRer extends baseRerFile.AkBaseRenderer {

    public AkName = "PublisherCer";
    public $Active = null;
    public $All = null;
    public IsFocus = false;
    public IsText = false;
    public Data = null;


    public getCer(): cFile.PublisherCer {
        return utilFile.Core.Util.Cast<cFile.PublisherCer>(this.getCer());
    }


    public init(mylogo, res) {
        var _this = this;
        this.Data = res;
        this.$Active = $('<div class="ask-publisher-detail panel"/>');
        this.$All = $('<div class="col-md-12 ask-padding  publishall"/>');
        this.$JObj.html("");
        this.initActive();
        this.initAll();
        $.AKjs.App.bindPageEvent(this.$JObj);
    };

    public initAll() {
        var _this = this;
        this.$All.html("");
        var $category, item, $child, businessItem, businessItem, $child2;
        var publishercolor = ["blue", "blue", "blue", "blue"];
        for (var i = 0; i < this.Data.Roots.length; i++) {
            item = this.Data.Roots[i];
            businessItem = [];
            var businessItem2 = [];
            for (var j = 0; j < item.Children.length; j++) {
                if (item.Children[j].IsSpecial) {
                    $child = this.createBusinessItem(item.Children[j]);
                    businessItem.push($child);
                    $child2 = $('<div class="new-tag fl "> <i class="' + item.Children[j].IconClass + '"></i>' + item.Children[j].DisplayName + ' </div>');
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
                this.$All.append(_$album);
            } else {
                var _$album = $('<div class="ask-bus-panel"><a class="ACT-A-HREF"  href ="' + item.Href + '"><div class="ask-publisher ACT-PUB-CONTENT2"><div class="publisher-box ACT-PUB-CONTENT"></div></div></a></div>');
                $category = $('<div class="' + publishercolor[i % 4] + '"><i class="' + item.IconClass + ' icon-4x ask-white"></i><h3>' + item.DisplayName + '</div>');
                _$album.find(".ACT-PUB-CONTENT").append($category);
                this.$All.append(_$album);
            }
        }
        $.AKjs.App.bindPageEvent(this.$All);
        this.$JObj.append(this.$All);
    }

    public initActive() {
        var _this = this;
        this.$Active.html("");

        //文字发布框
        var $textwrapper = $('<div class="import-area clear"></div>');
        var $avatar = $('<img class="IMG-LIST ACT-SELF" src="' + $.AKjs.Logo + '"/>');
        var $textarea = $('<textarea type="text" placeholder="我正在做什么呢....."></textarea>');
        var $submit = $('<a class="">发布消息</a>');

        $textwrapper.append($avatar);
        $textwrapper.append($textarea);
        $textwrapper.append($submit);

        //按钮组
        var $toolBar = $('<div class="w-tools-sel clear"></div>');
        var $toolsbtn = $('<ul class="nav navbar-nav"></ul>');
        //var $toolsbtn = $('<div class="w-tools-btn"></div>');
        this.createBusiness($toolsbtn);
        $toolsbtn.find("[regname='MicrText']").remove();
        $toolBar.append($toolsbtn);

        //上传控件 上传结果
        var $upload = $('<div class = "ACT-UPLOAD" ><div class="ACT-IMAGE w-files " style="display: none;"></div><div class="ACT-FILE w-files "  style="display: none;"></div></div>');
        var $uploadresult = $("<div class='w-files-cont clearfix'><div class='ACT-UPLOAD-RESULT upload-result'></div></div>");

        $submit.unbind("click").bind("click", function () {
            var $content = $textarea;
            var content = $content.val();

            var _obj = $limit.AtawControl();
            var shareData = _obj.dataValue();

            if (_this.getCer().IsImage) {
                var _imgObj = $upload.find(".ACT-IMAGE").AtawControl();
                if (_imgObj != null) {
                    var _val = _imgObj.dataValue();
                    var _valjson = $.parseJSON(_val);
                    if (_valjson && _valjson.ResourceInfoList && _valjson.ResourceInfoList.length > 0 || content.trim() !== "") {
                        _this.getCer().publicImage(_val, content, shareData, _this.publishComplete());
                        return;
                    }
                }
            } else if (_this.getCer().IsFile) {
                var _fileObj = $upload.find(".ACT-FILE").AtawControl();
                if (_fileObj != null) {
                    var _val = _fileObj.dataValue();
                    var _valjson = $.parseJSON(_val);
                    if (_valjson && _valjson.ResourceInfoList && _valjson.ResourceInfoList.length > 0 || content.trim() !== "") {
                        _this.getCer().publicFile(_val, content, shareData, _this.publishComplete());
                        return;
                    }
                }
            } else if (content.trim() !== "") {
                _this.getCer().publicText(content, shareData, _this.publishComplete());
                return;
            }
            $content.val("");
            $content[0].focus();
        });


        //分享控件
        var $rightToolbar = $('<div class="acs-publish-toolBar-active-right"></div>');
        var $limit = $('<div class="ACT-LIMIT"/>');
        $limit["AtawShareControl"]();
        $rightToolbar.append($limit);


        //取消按钮
        var $cancel = $('<a class="btn btn-default" id="ACT-PUBLISH-CANCLE" >取消发布</a>');
        $cancel.unbind("click").bind("click", function () {
            _this.canceltip();
        });

        this.$Active.append($textwrapper).append($toolBar);
        this.$Active.append($upload).append($uploadresult);
        this.$Active.append($rightToolbar).append($cancel);

        this.$Active.hide();
        this.$JObj.append(this.$Active);
    }

    //生成按钮组方法
    public createBusiness($contain) {
        var _this = this;
        var _root = this.Data.Roots;
        var item, $btngroup:JQuery, href, regname, $li, $a, businessItem, $child;
        for (var i = 0; i < _root.length; i++) {
            item = _root[i];
            businessItem = [];
            for (var j = 0; j < item.Children.length; j++) {
                if (item.Children[j].IsSpecial) {
                    $child = this.createBusinessItem(item.Children[j]);
                    businessItem.push($child);
                }
            }
            if (item.IsSpecial) {          //按钮组
                if (businessItem.length > 0) {
                     $btngroup = $('<li><a class="btn dropdown-toggle" data-toggle="dropdown"><i class="   ' + item.IconClass + '">' + item.DisplayName + '</i> <span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');
                    var $li;
                    for (var j = 0; j < businessItem.length; j++) {
                        $li = $("<li/>");
                        $btngroup.find("ul").append($li.append(businessItem[j]));
                    }
                    $contain.append($btngroup);
                } else {
                    var $item = this.createBusinessItem(item)
                    //$item.addClass("btn");
                    $contain.append($item);
                }
            } else {                        //单按钮
                if (businessItem.length > 0) {
                    for (var j = 0; j < businessItem.length; j++) {
                        //businessItem[j].addClass("btn");
                        $contain.append(businessItem[j]);
                    }
                }
            }
        }
        var $allItem = $('<li><a class="btn" href="javascript:void(0)"> 其他</a></li>');
        $allItem.click(function () {
            _this.clickPublisher("All");
        })
        $contain.append($allItem);
    };
    public createBusinessItem(item) {
        var _this = this;
        var $a;
       var  href = item.Href ? item.Href : "javascript:void(0)";
       var regname = item.RegName;
        if (regname) {
            $a = $('<li><a class="ACT-PUBLISHER-BTN" href="javascript:void(0)" regname="' + regname + '"><i class="' + item.IconClass + '"/>' + item.DisplayName + '</a></li>');
            (function (currentRegname) {
                $a.click(function () {
                    _this.clickPublisher(currentRegname);
                    _this.$All.hide();
                    _this.$Active.show();
                })
            })(regname)
        } else {
            $a = $('<li><a class="ACT-A-HREF" href="' + href + '"><i class="' + item.IconClass + '"/>' + item.DisplayName + '</a></li>');
        }
        return $a;
    };

    //按钮方法
    public clickPublisher(regName) {
        var _cFun = this.getCer()[regName];
        if (_cFun) {

            this.getCer()[regName]();
        }
        else {
            alert("找不到该方法");
        }
    };

    public canceltip() {
        var _this = this;
        var _$text = _this.$Active.find("textarea");
        var _$result = _this.$Active.find(".ACT-UPLOAD-RESULT").children();
        if (_$text[0].value != "" || _$result.length != 0) {
            var bln = window.confirm("确定退出编辑吗?");
            if (bln) {
                _this.cancleText();
            }
        } else {
            _this.cancleText();
        }
    };

    public All() {
        this.canceltip();
    };

    public publishComplete() {
        var _this = this;
        return function (res) {
            if (res.res > 0) {
                window["Ataw"].msgbox.show("发布成功", 4, 5000);
                _this.cancleText();
                _this.getCer().afterPublisher();
            };
        };
    };

    public showTextEdit() {
        this.$Active.find(".ACT-IMAGE").css("display", "none");
        this.$Active.find(".ACT-FILE").css("display", "none");
        this.IsFocus = false;
        this.$Active.show(500);
        this.$Active.find("textarea").focus();
    };
    public showImage() {
        this.$Active.find(".ACT-IMAGE").css("display", "block");
        this.$Active.find(".ACT-FILE").css("display", "none");
        this.$Active.find(".ACT-IMAGE").AtawMultiImageUpload(
            {
                IsSimple: true,
                IsCut: false,
                StorageName: "Temp",
                UploadName: "ImageUpload",
                FileExtension: "*.jpeg;*.jpg;*.bmp;*.gif;*.png",
                $JObj_Result: this.$Active.find(".ACT-UPLOAD-RESULT")

            });

        this.$Active.find("[regName='PublicImage']").hide();
        this.$Active.find("[regName='PublicFile']").show();

    };
    public showFile() {
        this.$Active.find(".ACT-IMAGE").css("display", "none");
        this.$Active.find(".ACT-FILE").css("display", "block");
        this.$Active.find(".ACT-FILE").AtawMultiFileUpload(
            {
                IsSimple: true,
                IsCut: false,
                StorageName: "Temp",
                UploadName: "FileUpload",
                FileExtension: "*.*",
                $JObj_Result: this.$Active.find(".ACT-UPLOAD-RESULT")
            });
        this.$Active.find("[regName='PublicFile']").hide();
        this.$Active.find("[regName='PublicImage']").show();
    };
    public cancleText() {
        var _this = this;
        var _$text = _this.$Active.find("textarea");
        _this.$JObj.find("[regName='PublicImage']").show();
        _this.$JObj.find("[regName='PublicFile']").show();
        _this.$Active.hide();
        _this.$All.show();
        _this.IsFocus = false;
        _this.getCer().IsText = false;
        _this.getCer().IsImage = false;
        _this.getCer().IsFile = false;
        _this.$Active.find(".ACT-IMAGE").html("");
        _this.$Active.find(".ACT-FILE").html("");
        _$text.val("");
        _this.clearupload();
    };

    //清除掉上一个图片或文档上传的样式，防止在下次加载的时候重复
    public clearupload() {
        this.$JObj.find(".SINGLE_FILE_UPLOAD").clear();
        this.$JObj.find(".ACT-UPLOAD-RESULT").clear();
    };
}