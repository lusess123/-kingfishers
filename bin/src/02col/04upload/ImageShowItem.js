/// <reference path="../../../typings/0type/type.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Util", "./ImageSizeItem", "react", "react-dom"], function (require, exports, basecolFile, utilFile, imageSize, React, ReactDOM) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var ImageShowItemAction = (function (_super) {
            __extends(ImageShowItemAction, _super);
            function ImageShowItemAction() {
                _super.apply(this, arguments);
            }
            return ImageShowItemAction;
        }(BaseColAction));
        ui.ImageShowItemAction = ImageShowItemAction;
        var ImageShowItemReact = (function (_super) {
            __extends(ImageShowItemReact, _super);
            function ImageShowItemReact() {
                _super.apply(this, arguments);
            }
            ImageShowItemReact.prototype.fOnChange = function (e) {
                var _op = e.target.options[e.target.selectedIndex];
                this.props.Vm.SelectValue = _op.value;
                var n = _op.value.replace("*", "-");
                this.props.Vm.imgHref = this.fSetSizeUrl(n);
                this.forceUpdate();
            };
            ImageShowItemReact.prototype.fViewOnClick = function (e) {
                var _this = this;
                var _$pic = $("<div><a href=''  target='_bank'><img  class='img-responsive'  /></a><div><button isleft='1' class='btn btn-sm bant-primary ACT-RIGHT icon-repeat fa fa-repeat acsRotateBtn '></button></div></div");
                _$pic.find("img").attr("src", this.props.Vm.ResourceInfo.HttpPath);
                _$pic.find("a").attr("href", this.props.Vm.ResourceInfo.HttpPath);
                _$pic.find("img").data("raval", 0);
                _$pic.find("button").on("click", function () {
                    utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/rotate/jquery.rotate.js"], function () {
                        var _ra = _$pic.find("img").data("raval");
                        if ($(_this).attr("isleft") != "0") {
                            _$pic.css('rotate', _ra + 90);
                            _$pic.find("img").data("raval", _ra + 90);
                        }
                        else {
                            _$pic.css('rotate', _ra - 90);
                            _$pic.find("img").data("raval", _ra - 90);
                        }
                        return false;
                    });
                });
                utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/artDialog/jquery.artDialog.js?skin=default",
                    "/AtawStatic/lib/03Extend/artDialog/skins/blue.css"], function () {
                    art.dialog({
                        title: '原图（鼠标拖拽，右下方边框可以拉伸）',
                        width: 100,
                        height: 100,
                        content: _$pic[0]
                    });
                });
                return false;
            };
            ImageShowItemReact.GetRanNumber = function () {
                ImageShowItemReact.RanNumber++;
                return ImageShowItemReact.RanNumber;
            };
            ImageShowItemReact.prototype.fViewOnClick1 = function (e) {
                var _this = this;
                if ($("#append_parent").length == 0) {
                    $("body").append($('<div id="append_parent"></div>'));
                }
                var _$this = $(e.target);
                var n = ImageShowItemReact.GetRanNumber().toString();
                utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/imgdiscuz/js/common.js", "/AtawStatic/lib/03Extend/imgdiscuz/js/forum_viewthread.js", "/AtawStatic/lib/03Extend/imgdiscuz/js/common_extra.js", "/AtawStatic/lib/03Extend/imgdiscuz/img/style_1_forum_viewthread.css"], function () {
                    //window["zoomstatus"] = parseInt("1");
                    //window["imagemaxwidth"] = '500';
                    window["IMGDIR"] = 'AtawStatic/lib/03Extend/imgdiscuz/img/', window["VERHASH"] = 'zfhf', window["JSPATH"] = 'AtawStatic/lib/03Extend/imgdiscuz/js/';
                    _$this.attr("zoomfile", _this.props.Vm.imgHref);
                    _$this.attr("file", _this.props.Vm.imgHref);
                    _$this.attr("aid", n);
                    window["aimgcount"] = new Array();
                    window["aimgcount"][1000] = [n];
                    window["attachimggroup"](1000);
                    window["attachimgshow"](1000);
                    var aimgfid = 0;
                    window["zoom"](_$this[0], _this.props.Vm.ResourceInfo.HttpPath, 0, 0, 0);
                });
            };
            ImageShowItemReact.prototype.fDeleteOnClick = function (e) {
                if (this.props.Vm.isAbleEdit) {
                    //alert(this.props.Vm.itemIndex);
                    this.props.Vm.UploadObj.ShowItemList.splice(this.props.Vm.itemIndex, 1);
                    this.props.Vm.UploadObj.ResourceInfoList.splice(this.props.Vm.itemIndex, 1);
                    var _resStr = JSON.stringify({
                        CoverIndex: this.props.Vm.UploadObj.CoverIndex,
                        ResourceInfoList: this.props.Vm.UploadObj.ResourceInfoList
                    });
                    this.props.Vm.UploadObj.dataValueSet(_resStr);
                    this.props.Vm.UploadObj.ShowItemList.forEach(function (x) {
                        x.IsChange = true;
                    });
                    this.forceUpdate();
                }
            };
            ImageShowItemReact.prototype.fCoverSetOnClick = function (e) {
                if (this.props.Vm.IsCover) {
                    alert("已是封面");
                }
                else {
                    this.props.Vm.IsCover = true;
                    this.props.Vm.UploadObj.CoverIndex = this.props.Vm.itemIndex;
                    var _resStr = JSON.stringify({
                        CoverIndex: this.props.Vm.UploadObj.CoverIndex,
                        ResourceInfoList: this.props.Vm.UploadObj.ResourceInfoList
                    });
                    if (!this.props.Vm.UploadObj.reactDataValueSet(_resStr)) {
                        this.props.Vm.UploadObj.ShowItemList.forEach(function (x) {
                            x.IsChange = true;
                        });
                        this.props.Vm.UploadObj.forceUpdate("");
                    }
                }
                //this.forceUpdate();
            };
            ImageShowItemReact.prototype.pSender = function () {
                var _this = this;
                _super.prototype.pSender.call(this);
                this.props.Vm.Title = this.props.Vm.ResourceInfo.FileNameTitle + this.props.Vm.ResourceInfo.ExtName + "(" + this.props.Vm.ResourceInfo.FileSizeK + "K)";
                this.props.Vm.ImageSizeItemList = new Array();
                this.fInitContent();
                return React.createElement("div", {ref: "fileItem", className: "Hc-images-item pull-left clearfix"}, React.createElement("div", {className: "Hu-images-pic"}, React.createElement("div", {className: "Hu-images"}, this.props.Vm.IsSimple ?
                    React.createElement("a", {style: true}, React.createElement("img", {src: this.props.Vm.ResourceInfo.HttpPath})) :
                    React.createElement("img", {src: this.props.Vm.imgHref, id: "aimg_156139", className: "zoom", title: this.props.Vm.imgTitle}), React.createElement("a", {className: "Hu-close Hu-pointer", onClick: function (e) { _this.fDeleteOnClick(e); return false; }}, React.createElement("i", {className: " icon-remove-sign fa fa-times-circle " + (this.props.Vm.isAbleEdit ? "" : " hide ")})), React.createElement("p", {className: "Hu-name"}, utilFile.Core.Util.InterceptStringDisplay(this.props.Vm.imgTitle, 5)))), React.createElement("div", {className: "Hu-images-icon"}, this.props.Vm.IsDetail ? null :
                    this.props.Vm.IsMulti ? React.createElement("a", {onClick: function (e) { _this.fCoverSetOnClick(e); return false; }}) : null, React.createElement("a", {onClick: function (e) { _this.fViewOnClick1(e); }}, "查看原图")), this.props.Vm.IsSimple ? null :
                    React.createElement("div", {className: "Hu-all-images-size"}, React.createElement("select", {ref: "sizeSelect", value: this.props.Vm.SelectValue, onChange: function (e) { _this.fOnChange(e); return false; }}, this.props.Vm.ImageSizeItemList.map(function (item, i) { return item.intoDom(); }))), this.props.Vm.IsCover ? React.createElement("div", {className: "Hu-images-cover"}) : null);
            };
            ImageShowItemReact.prototype.pComponentWillMount = function () {
                _super.prototype.pComponentWillMount.call(this);
                if (this.props.Vm.ResourceInfo && this.props.Vm.ResourceInfo.IsCover) {
                    this.props.Vm.IsCover = this.props.Vm.ResourceInfo.IsCover;
                }
                if (this.props.Vm.UploadObj && this.props.Vm.UploadObj.IsSimple) {
                    this.props.Vm.IsSimple = true;
                }
            };
            ImageShowItemReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            ImageShowItemReact.prototype.fSetCover = function (isCover) {
                this.props.Vm.IsCover = isCover;
                this.props.Vm.ResourceInfo.IsCover = isCover;
            };
            ImageShowItemReact.prototype.fGetImageItemDom = function (ref) {
                var _reactObj = this.refs[ref];
                var _dom = ReactDOM.findDOMNode(_reactObj);
                var _$dom = $(_dom);
                return _$dom;
            };
            ImageShowItemReact.prototype.fInitContent = function () {
                var _this = this;
                if (!this.props.Vm.IsSimple) {
                    $.each(this.props.Vm.ResourceInfo.ExtendList, function (i, n) {
                        var _f = _this.fSetSizeUrl(n);
                        if (n == "0-0") {
                            n = "实际截图大小";
                        }
                        var _sizeItem = new imageSize.ui.ImageSizeItemVm();
                        _sizeItem.ItemValue = n.replace(/-/g, "*");
                        _sizeItem.Itemkey = i;
                        if (_this.props.Vm.IsDefualt) {
                            _this.props.Vm.IsDefualt = false;
                            _this.props.Vm.SelectValue = _sizeItem.ItemValue;
                            _this.props.Vm.imgHref = _f;
                            _this.props.Vm.imgTitle = _this.props.Vm.Title;
                        }
                        _this.props.Vm.ImageSizeItemList.push(_sizeItem);
                    });
                }
            };
            ImageShowItemReact.prototype.fSetSizeUrl = function (wh) {
                return utilFile.Core.Util.AddUrlFileName(this.props.Vm.ResourceInfo.HttpPath, wh);
            };
            ImageShowItemReact.RanNumber = 0;
            return ImageShowItemReact;
        }(BaseColReact));
        ui.ImageShowItemReact = ImageShowItemReact;
        var ImageShowItemProps = (function (_super) {
            __extends(ImageShowItemProps, _super);
            function ImageShowItemProps() {
                _super.apply(this, arguments);
            }
            return ImageShowItemProps;
        }(BaseColProps));
        ui.ImageShowItemProps = ImageShowItemProps;
        var ImageShowItemStates = (function (_super) {
            __extends(ImageShowItemStates, _super);
            function ImageShowItemStates() {
                _super.apply(this, arguments);
            }
            return ImageShowItemStates;
        }(BaseColStates));
        ui.ImageShowItemStates = ImageShowItemStates;
        var ImageShowItemVm = (function (_super) {
            __extends(ImageShowItemVm, _super);
            function ImageShowItemVm() {
                _super.apply(this, arguments);
                this.ReactType = ImageShowItemReact;
                this.ResourceInfo = null;
                this.UploadObj = null;
                this.IsDetail = false;
                this.Title = "";
                this.IsCover = false;
                this.IsSimple = false;
                this.IsFile = false;
                this.ImageSizeItemList = new Array();
                this.SelectValue = null;
                this.IsDefualt = true;
                //public CoverTitle: string = "设为封面";
                this.IsMulti = true;
                this.itemIndex = 0;
                //是否不可编辑
                this.isAbleEdit = true;
            }
            return ImageShowItemVm;
        }(BaseColVm));
        ui.ImageShowItemVm = ImageShowItemVm;
    })(ui = exports.ui || (exports.ui = {}));
});
