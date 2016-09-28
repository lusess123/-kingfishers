/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../../typings/0type/type.d.ts" />

import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import urlFile = require("./../../01core/Url");
import imageSize = require("./ImageSizeItem");
import imageShowItem = require("./ImageShowItem");
import singleImageUpload = require("./SingleImageUpload");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {

    export class ImagePreviewShowAction extends BaseColAction {
       
    }

    export class ImagePreviewShowReact extends BaseColReact<ImagePreviewShowProps, ImagePreviewShowStates, ImagePreviewShowAction> implements domFile.Core.IReact {
        private _jcrop;
        
        private fOnClick(e) {
            if (this.props.Vm.Location.h == 0 && this.props.Vm.Location.w == 0) {
                alert("请截取要上传的图片");
            } else {
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

               urlFile.Core .AkPost(
                    "/core/SimpleCutImage/CutImageJcrop",
                     _data,
                    (a)=> { //剪切成功后的事件
                        this.props.Vm.IsChange = true;
                        this.props.Vm.IsModalShow = false;

                        this.props.Vm.UploadObj.ResourceInfoList = [];
                        this.props.Vm.UploadObj.ResourceInfoList.push(a);

                        var _item = new imageShowItem.ui.ImageShowItemVm();
                        _item.ResourceInfo = a;
                        _item.UploadObj = this.props.Vm.UploadObj;
                        _item.IsMulti = false;
                        this.props.Vm.UploadObj.ShowItemList = new Array<imageShowItem.ui.ImageShowItemVm>();
                        this.props.Vm.UploadObj.ShowItemList.push(_item);

                        var _resStr = JSON.stringify({
                            CoverIndex: this.props.Vm.UploadObj.CoverIndex,
                            ResourceInfoList: this.props.Vm.UploadObj.ResourceInfoList
                        });
                         
                        if (!this.props.Vm.UploadObj.reactDataValueSet(_resStr)) {
                            this.props.Vm.UploadObj.ShowItemList.forEach((x) => {
                                x.IsChange = true;
                            });
                            this.props.Vm.UploadObj.forceUpdate("");
                        }
                    }
                );
            }
        
        }

        private onClose() {
            this.props.Vm.UploadObj.ResourceInfoList = [];
        }

        public pSender(): React.ReactElement<any> {
            super.pSender();

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

            var _content2 = <div style={{ width: "100%", height: "50%" }}
                            className="ACT-PREVIEW-SHOW" ref="imgPreview"> 
                                <div className="ACT-CUT-IMAGE cut-image">
                                    <a className="ACT-SURE-CUT sure-cut btn btn-xs btn-primary" href="javascript:"
                                        onClick={(e) => { this.fOnClick(e); return false; } }>
                                        <span>确定</span></a>
                                        <span className="imgSize"></span>
                                        <div>
                                               <table>
                                                    <tr>
                                                          <td style={{ width: "450px" }}>
                                                                <div className="ACT-LEFT-IMAGE left-image acsImgWidthNone"
                                                        style={{ width: "450px" }}>
                                                                <img className="ACT-ORIGINAL-IMAGE original-image" src={this.props.Vm.ImgUrl}></img>
                                                            </div>
                                                              </td>  
                                                            <td>
                                                                <div className="ACT-RIGHT-IMAGE right-image acsImgWidthNone"
                                                                style={{ width: this.props.Vm.rImgWidth, height: this.props.Vm.rImgHeight }}>
                                                                    <img className="ACT-PREVIEW-IMAGE preview-image" src={this.props.Vm.ImgUrl}></img>
                                                            </div>
                                                            </td>
                                                     </tr>
                                                </table>
                                          </div>
                                </div>
                            </div>

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

            return <div>
                <div className={ "Hm-modals-bg Hg-width Hg-max-width Hg-overflow-auto Hc-control-modal " + (this.props.Vm.IsModalShow ? "show" : "hide") }>
                    <div className={ "Hm-modals Hg-relative Hg-default-top Hm-modals-shape Hs-fff " + (this.props.Vm.IsModalShow ? "show" : "hide") }>
                        <a className="Hu-close Hu-pointer pull-right"
                            onClick={(a) => {
                                this.setState((s, p) => {
                                    this.props.Vm.IsChange = true;
                                    this.props.Vm.IsModalShow = false;
                                    return s;
                                });
                            } }>
                            <i className="icon-ewmove fa fa-close" onClick={() => { this.onClose() } }></i>
                        </a>
                        <div className="Hm-modals Hm-modals-content clearfix">
                            <h4>请截取要上传的图片</h4>
                                {_content2}
                        </div>
                </div>
                </div>
                   </div>
           
        }

        protected pComponentWillMount(): void {
            super.pComponentWillMount();
        }

        protected  pComponentDidUpdate(prevProps: ImagePreviewShowProps, prevState: ImagePreviewShowStates, prevContext: any): void {
            super.pComponentDidUpdate(prevProps, prevState, prevContext);

            if (this._jcrop) {
                this._jcrop.setImage(this.props.Vm.ImgUrl);
                this._jcrop.setSelect([0, 0, this.props.Vm.UploadObj.Width, this.props.Vm.UploadObj.Height]);
            }
        }

        protected pComponentWillUnmount(): void {
            super.pComponentWillUnmount();

            this._jcrop.destroy();
        }

        protected pComponentDidMount(): void {
            super.pComponentDidMount();
            
            var __this = this;
            var _imgPreview = this.fGetImagePreviewDom("imgPreview");
           utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/jcrop/js/jquery.Jcrop.js",
                "/AtawStatic/lib/03Extend/jcrop/css/jquery.Jcrop.css"], ()=> {
                    _imgPreview.find(".ACT-ORIGINAL-IMAGE").Jcrop({
                        onChange: (coords) => {
                            this.fShowPreviewFun(coords);
                        },
                        onSelect: (coords) => {
                            this.fShowPreviewFun(coords);
                        },
                        onRelease: () => {
                            this.fHidePreviewFun();
                        },
                        aspectRatio: this.props.Vm.UploadObj.Width / this.props.Vm.UploadObj.Height,
                        setSelect: [0, 0, this.props.Vm.UploadObj.Width, this.props.Vm.UploadObj.Height]
                    }, function () {
                        __this._jcrop = this;
                    });

                    alert("上传成功，请截图");
                });
        }


        private fHidePreviewFun() {
            var _imgPreview = this.fGetImagePreviewDom("imgPreview");
            _imgPreview.find(".ACT-PREVIEW-IMAGE").stop().fadeOut('fast');
        };
   
        //裁剪预览图片
        private fShowPreviewFun(coords) {
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

        private fGetImagePreviewDom(ref: string): JQuery {
            var _reactObj = this.refs[ref];
            var _dom = ReactDOM.findDOMNode(_reactObj);
            var _$dom = $(_dom);
            return _$dom;
        }

    }

    export class ImagePreviewShowProps extends BaseColProps<ImagePreviewShowVm>{

    }

    export class ImagePreviewShowStates extends BaseColStates {
        
    }

    export class ImagePreviewShowVm extends BaseColVm {
        public ReactType: any = ImagePreviewShowReact;

        public ImgUrl: string;
        public rImgWidth: number=100;
        public rImgHeight: number=100;
        public Location: { h: number, w: number,x:number,y:number };
        public UploadObj: singleImageUpload.ui.SingleImageUploadVm = null;
        public IsModalShow: boolean = false;
    }


}