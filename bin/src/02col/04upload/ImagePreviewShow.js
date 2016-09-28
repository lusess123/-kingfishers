/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../../typings/0type/type.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Util", "./../../01core/Url", "./ImageShowItem", "react", "react-dom"], function (require, exports, basecolFile, utilFile, urlFile, imageShowItem, React, ReactDOM) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var ImagePreviewShowAction = (function (_super) {
            __extends(ImagePreviewShowAction, _super);
            function ImagePreviewShowAction() {
                _super.apply(this, arguments);
            }
            return ImagePreviewShowAction;
        }(BaseColAction));
        ui.ImagePreviewShowAction = ImagePreviewShowAction;
        var ImagePreviewShowReact = (function (_super) {
            __extends(ImagePreviewShowReact, _super);
            function ImagePreviewShowReact() {
                _super.apply(this, arguments);
            }
            ImagePreviewShowReact.prototype.fOnClick = function (e) {
                var _this = this;
                if (this.props.Vm.Location.h == 0 && this.props.Vm.Location.w == 0) {
                    alert("请截取要上传的图片");
                }
                else {
                    var _imgPreview = this.fGetImagePreviewDom("imgPreview");
                    var imgUrl = _imgPreview.find(".ACT-PREVIEW-IMAGE").attr("src");
                    var picWidth = _imgPreview.find(".ACT-ORIGINAL-IMAGE").width();
                    var picHeight = _imgPreview.find(".ACT-ORIGINAL-IMAGE").height();
                    var _json = JSON.stringify(this.props.Vm.UploadObj.ResourceInfoList);
                    var _data = {
                        imgUrl: imgUrl,
                        h: (this.props.Vm.Location.h > picHeight && this.props.Vm.Location.h != 0) ? picHeight : this.props.Vm.Location.h,
                        w: (this.props.Vm.Location.w > picWidth && this.props.Vm.Location.w != 0) ? picWidth : this.props.Vm.Location.w,
                        x: this.props.Vm.Location.x,
                        y: this.props.Vm.Location.y,
                        picWidth: picWidth,
                        picHeight: picHeight,
                        newWidth: this.props.Vm.Location.w,
                        newHeight: this.props.Vm.Location.h,
                        fileStorageName: this.props.Vm.UploadObj.StorageName,
                        ResourceInfoList: _json,
                        UploaderName: this.props.Vm.UploadObj.UploadName
                    };
                    urlFile.Core.AkPost("/core/SimpleCutImage/CutImageJcrop", _data, function (a) {
                        _this.props.Vm.IsChange = true;
                        _this.props.Vm.IsModalShow = false;
                        _this.props.Vm.UploadObj.ResourceInfoList = [];
                        _this.props.Vm.UploadObj.ResourceInfoList.push(a);
                        var _item = new imageShowItem.ui.ImageShowItemVm();
                        _item.ResourceInfo = a;
                        _item.UploadObj = _this.props.Vm.UploadObj;
                        _item.IsMulti = false;
                        _this.props.Vm.UploadObj.ShowItemList = new Array();
                        _this.props.Vm.UploadObj.ShowItemList.push(_item);
                        var _resStr = JSON.stringify({
                            CoverIndex: _this.props.Vm.UploadObj.CoverIndex,
                            ResourceInfoList: _this.props.Vm.UploadObj.ResourceInfoList
                        });
                        if (!_this.props.Vm.UploadObj.reactDataValueSet(_resStr)) {
                            _this.props.Vm.UploadObj.ShowItemList.forEach(function (x) {
                                x.IsChange = true;
                            });
                            _this.props.Vm.UploadObj.forceUpdate("");
                        }
                    });
                }
            };
            ImagePreviewShowReact.prototype.onClose = function () {
                this.props.Vm.UploadObj.ResourceInfoList = [];
            };
            ImagePreviewShowReact.prototype.pSender = function () {
                var _this = this;
                _super.prototype.pSender.call(this);
                //var _content = React.DOM.div({
                //    style: { width: "100%", height: "50%" },
                //    className: "ACT-PREVIEW-SHOW", ref: "imgPreview"
                //},
                //    React.DOM.div({ className: "ACT-CUT-IMAGE cut-image" },
                //        React.DOM.a({ className: "ACT-SURE-CUT sure-cut button", href: "javascript:", onClick: (e) => { this.fOnClick(e) } }, React.DOM.span(null, "确定")),
                //        React.DOM.span({ className: "imgSize" }),
                //        React.DOM.div(null,
                //            React.DOM.table(null,
                //                React.DOM.tr(null,
                //                    React.DOM.td({ style: { width: "450px" } },
                //                        React.DOM.div({ className: "ACT-LEFT-IMAGE left-image acsImgWidthNone", style: { width: "450px" } },
                //                            React.DOM.img({ className: "ACT-ORIGINAL-IMAGE original-image", src: this.props.Vm.ImgUrl }))),
                //                    React.DOM.td(null,
                //                        React.DOM.div({ className: "ACT-RIGHT-IMAGE right-image acsImgWidthNone", style: { width: this.props.Vm.rImgWidth, height: this.props.Vm.rImgHeight } },
                //                            React.DOM.img({ className: "ACT-PREVIEW-IMAGE preview-image", src: this.props.Vm.ImgUrl })))))))
                //);
                var _content2 = React.createElement("div", {style: { width: "100%", height: "50%" }, className: "ACT-PREVIEW-SHOW", ref: "imgPreview"}, React.createElement("div", {className: "ACT-CUT-IMAGE cut-image"}, React.createElement("a", {className: "ACT-SURE-CUT sure-cut btn btn-xs btn-primary", href: "javascript:", onClick: function (e) { _this.fOnClick(e); return false; }}, React.createElement("span", null, "确定")), React.createElement("span", {className: "imgSize"}), React.createElement("div", null, React.createElement("table", null, React.createElement("tr", null, React.createElement("td", {style: { width: "450px" }}, React.createElement("div", {className: "ACT-LEFT-IMAGE left-image acsImgWidthNone", style: { width: "450px" }}, React.createElement("img", {className: "ACT-ORIGINAL-IMAGE original-image", src: this.props.Vm.ImgUrl}))), React.createElement("td", null, React.createElement("div", {className: "ACT-RIGHT-IMAGE right-image acsImgWidthNone", style: { width: this.props.Vm.rImgWidth, height: this.props.Vm.rImgHeight }}, React.createElement("img", {className: "ACT-PREVIEW-IMAGE preview-image", src: this.props.Vm.ImgUrl}))))))));
                //return React.DOM.div( null,
                //    React.DOM.div({ className: "acsModalBg " + (this.props.Vm.IsModalShow ? "show" : "hide") }),
                //    React.DOM.div({
                //        className: (" large-12 medium-12 small-12 columns acsModalPanel acsModal acsPosition " + (this.props.Vm.IsModalShow ? "show" : "hide"))//,
                //        //style: { top: this.state.ModalTop.toString() + "px" }
                //    },
                //        React.DOM.div({ className: "row" }, React.DOM.h4(null, "请截取要上传的图片 :")),
                //        _content2,
                //        React.DOM.a({
                //            className: "Hu-close",
                //            onClick: (a) => {
                //                this.setState((s, p) => {
                //                    this.props.Vm.IsChange = true;
                //                    this.props.Vm.IsModalShow = false;
                //                    return s;
                //                });
                //            }
                //        }, React.DOM.i({
                //            className: "fa fa-close",
                //            onClick: (a) => {
                //                this.onClose();
                //            }
                //        })))
                //);
                return React.createElement("div", null, React.createElement("div", {className: "Hm-modals-bg Hg-width Hg-max-width Hg-overflow-auto Hc-control-modal " + (this.props.Vm.IsModalShow ? "show" : "hide")}, React.createElement("div", {className: "Hm-modals Hg-relative Hg-default-top Hm-modals-shape Hs-fff " + (this.props.Vm.IsModalShow ? "show" : "hide")}, React.createElement("a", {className: "Hu-close Hu-pointer pull-right", onClick: function (a) {
                    _this.setState(function (s, p) {
                        _this.props.Vm.IsChange = true;
                        _this.props.Vm.IsModalShow = false;
                        return s;
                    });
                }}, React.createElement("i", {className: "icon-ewmove fa fa-close", onClick: function () { _this.onClose(); }})), React.createElement("div", {className: "Hm-modals Hm-modals-content clearfix"}, React.createElement("h4", null, "请截取要上传的图片"), _content2))));
            };
            ImagePreviewShowReact.prototype.pComponentWillMount = function () {
                _super.prototype.pComponentWillMount.call(this);
            };
            ImagePreviewShowReact.prototype.pComponentDidUpdate = function (prevProps, prevState, prevContext) {
                _super.prototype.pComponentDidUpdate.call(this, prevProps, prevState, prevContext);
                if (this._jcrop) {
                    this._jcrop.setImage(this.props.Vm.ImgUrl);
                    this._jcrop.setSelect([0, 0, this.props.Vm.UploadObj.Width, this.props.Vm.UploadObj.Height]);
                }
            };
            ImagePreviewShowReact.prototype.pComponentWillUnmount = function () {
                _super.prototype.pComponentWillUnmount.call(this);
                this._jcrop.destroy();
            };
            ImagePreviewShowReact.prototype.pComponentDidMount = function () {
                var _this = this;
                _super.prototype.pComponentDidMount.call(this);
                var __this = this;
                var _imgPreview = this.fGetImagePreviewDom("imgPreview");
                utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/jcrop/js/jquery.Jcrop.js",
                    "/AtawStatic/lib/03Extend/jcrop/css/jquery.Jcrop.css"], function () {
                    _imgPreview.find(".ACT-ORIGINAL-IMAGE").Jcrop({
                        onChange: function (coords) {
                            _this.fShowPreviewFun(coords);
                        },
                        onSelect: function (coords) {
                            _this.fShowPreviewFun(coords);
                        },
                        onRelease: function () {
                            _this.fHidePreviewFun();
                        },
                        aspectRatio: _this.props.Vm.UploadObj.Width / _this.props.Vm.UploadObj.Height,
                        setSelect: [0, 0, _this.props.Vm.UploadObj.Width, _this.props.Vm.UploadObj.Height]
                    }, function () {
                        __this._jcrop = this;
                    });
                    alert("上传成功，请截图");
                });
            };
            ImagePreviewShowReact.prototype.fHidePreviewFun = function () {
                var _imgPreview = this.fGetImagePreviewDom("imgPreview");
                _imgPreview.find(".ACT-PREVIEW-IMAGE").stop().fadeOut('fast');
            };
            ;
            //裁剪预览图片
            ImagePreviewShowReact.prototype.fShowPreviewFun = function (coords) {
                var _imgPreview = this.fGetImagePreviewDom("imgPreview");
                this.props.Vm.Location = coords;
                if (parseInt(coords.w) > 0) {
                    var __rx = this.props.Vm.UploadObj.Width / coords.w;
                    var __ry = this.props.Vm.UploadObj.Height / coords.h;
                    _imgPreview.find(".imgSize").html(coords.h + 'px,' + coords.w + 'px');
                    _imgPreview.find(".ACT-PREVIEW-IMAGE").css({
                        width: Math.round(__rx * _imgPreview.find(".ACT-ORIGINAL-IMAGE").width()) + 'px',
                        height: Math.round(__ry * _imgPreview.find(".ACT-ORIGINAL-IMAGE").height()) + 'px',
                        marginLeft: '-' + Math.round(__rx * coords.x) + 'px',
                        marginTop: '-' + Math.round(__ry * coords.y) + 'px'
                    }).show();
                }
            };
            ;
            ImagePreviewShowReact.prototype.fGetImagePreviewDom = function (ref) {
                var _reactObj = this.refs[ref];
                var _dom = ReactDOM.findDOMNode(_reactObj);
                var _$dom = $(_dom);
                return _$dom;
            };
            return ImagePreviewShowReact;
        }(BaseColReact));
        ui.ImagePreviewShowReact = ImagePreviewShowReact;
        var ImagePreviewShowProps = (function (_super) {
            __extends(ImagePreviewShowProps, _super);
            function ImagePreviewShowProps() {
                _super.apply(this, arguments);
            }
            return ImagePreviewShowProps;
        }(BaseColProps));
        ui.ImagePreviewShowProps = ImagePreviewShowProps;
        var ImagePreviewShowStates = (function (_super) {
            __extends(ImagePreviewShowStates, _super);
            function ImagePreviewShowStates() {
                _super.apply(this, arguments);
            }
            return ImagePreviewShowStates;
        }(BaseColStates));
        ui.ImagePreviewShowStates = ImagePreviewShowStates;
        var ImagePreviewShowVm = (function (_super) {
            __extends(ImagePreviewShowVm, _super);
            function ImagePreviewShowVm() {
                _super.apply(this, arguments);
                this.ReactType = ImagePreviewShowReact;
                this.rImgWidth = 100;
                this.rImgHeight = 100;
                this.UploadObj = null;
                this.IsModalShow = false;
            }
            return ImagePreviewShowVm;
        }(BaseColVm));
        ui.ImagePreviewShowVm = ImagePreviewShowVm;
    })(ui = exports.ui || (exports.ui = {}));
});
