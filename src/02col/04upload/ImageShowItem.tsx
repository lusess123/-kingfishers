/// <reference path="../../../typings/0type/type.d.ts" />

import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import imageSize = require("./ImageSizeItem");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");

export module ui {

    export class ImageShowItemAction extends BaseColAction {

    }

    export class ImageShowItemReact extends BaseColReact<ImageShowItemProps, ImageShowItemStates, ImageShowItemAction> implements domFile.Core.IReact {

        private fOnChange(e) {
            var _op = e.target.options[e.target.selectedIndex];

            this.props.Vm.SelectValue = _op.value;

            var n = _op.value.replace("*", "-");
            this.props.Vm.imgHref = this.fSetSizeUrl(n);

            this.forceUpdate();

        }

        private fViewOnClick(e) {
            var _$pic = $("<div><a href=''  target='_bank'><img  class='img-responsive'  /></a><div><button isleft='1' class='btn btn-sm bant-primary ACT-RIGHT icon-repeat fa fa-repeat acsRotateBtn '></button></div></div");
            _$pic.find("img").attr("src", this.props.Vm.ResourceInfo.HttpPath);
            _$pic.find("a").attr("href", this.props.Vm.ResourceInfo.HttpPath);
            _$pic.find("img").data("raval", 0);
            _$pic.find("button").on("click", () => {
                utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/rotate/jquery.rotate.js"], () => {
                    var _ra: any = _$pic.find("img").data("raval");
                    if ($(this).attr("isleft") != "0") {
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
                "/AtawStatic/lib/03Extend/artDialog/skins/blue.css"], () => {

                    art.dialog({


                        title: '原图（鼠标拖拽，右下方边框可以拉伸）',
                        width: 100,
                        height: 100,
                        content: _$pic[0]
                    });
                });

            return false;
        }

        private static RanNumber: number = 0;
        private static GetRanNumber() {
            ImageShowItemReact.RanNumber++;
            return ImageShowItemReact.RanNumber;
        }

        private fViewOnClick1(e) {
            if ($("#append_parent").length == 0) {
                $("body").append($('<div id="append_parent"></div>'));
            }
            var _$this = $(e.target);
            var n = ImageShowItemReact.GetRanNumber().toString();
            utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/imgdiscuz/js/common.js", "/AtawStatic/lib/03Extend/imgdiscuz/js/forum_viewthread.js", "/AtawStatic/lib/03Extend/imgdiscuz/js/common_extra.js", "/AtawStatic/lib/03Extend/imgdiscuz/img/style_1_forum_viewthread.css"], () => {
                //window["zoomstatus"] = parseInt("1");
                //window["imagemaxwidth"] = '500';
                window["IMGDIR"] = 'AtawStatic/lib/03Extend/imgdiscuz/img/', window["VERHASH"] = 'zfhf', window["JSPATH"] = 'AtawStatic/lib/03Extend/imgdiscuz/js/';

                _$this.attr("zoomfile", this.props.Vm.imgHref);
                _$this.attr("file", this.props.Vm.imgHref);
                _$this.attr("aid", n);

                window["aimgcount"] = new Array();
                window["aimgcount"][1000] = [n];
                window["attachimggroup"](1000);
                window["attachimgshow"](1000);
                var aimgfid = 0;

                window["zoom"](_$this[0], this.props.Vm.ResourceInfo.HttpPath, 0, 0, 0);
            });
        }

        private fDeleteOnClick(e) {
            if (this.props.Vm.isAbleEdit) {
                //alert(this.props.Vm.itemIndex);
                this.props.Vm.UploadObj.ShowItemList.splice(this.props.Vm.itemIndex, 1);
                this.props.Vm.UploadObj.ResourceInfoList.splice(this.props.Vm.itemIndex, 1);

                var _resStr = JSON.stringify({
                    CoverIndex: this.props.Vm.UploadObj.CoverIndex,
                    ResourceInfoList: this.props.Vm.UploadObj.ResourceInfoList
                });

                this.props.Vm.UploadObj.dataValueSet(_resStr);

                this.props.Vm.UploadObj.ShowItemList.forEach((x) => {
                    x.IsChange = true;
                });
                this.forceUpdate();
            }
        }

        private fCoverSetOnClick(e) {
            if (this.props.Vm.IsCover) {
                alert("已是封面");
            } else {
                this.props.Vm.IsCover = true;
                this.props.Vm.UploadObj.CoverIndex = this.props.Vm.itemIndex;

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
            //this.forceUpdate();
        }

        public pSender(): React.ReactElement<any> {

            super.pSender();

            this.props.Vm.Title = this.props.Vm.ResourceInfo.FileNameTitle + this.props.Vm.ResourceInfo.ExtName + "(" + this.props.Vm.ResourceInfo.FileSizeK + "K)";
            this.props.Vm.ImageSizeItemList = new Array<imageSize.ui.ImageSizeItemVm>();

            this.fInitContent();
            return <div ref="fileItem" className="Hc-images-item pull-left clearfix">
                <div className="Hu-images-pic">
                    <div className="Hu-images">
                        {this.props.Vm.IsSimple ?
                            <a style>
                                <img src={this.props.Vm.ResourceInfo.HttpPath} />
                            </a> :
                            <img src={this.props.Vm.imgHref} id="aimg_156139" className="zoom" title={this.props.Vm.imgTitle} />
                        }
                        <a className="Hu-close Hu-pointer" onClick={(e) => { this.fDeleteOnClick(e); return false } } >
                            <i className={" icon-remove-sign fa fa-times-circle " + (this.props.Vm.isAbleEdit ? "" : " hide ")}></i>
                        </a>
                        <p className="Hu-name">{utilFile.Core.Util.InterceptStringDisplay(this.props.Vm.imgTitle, 5) }</p>
                    </div>
                </div>

                <div className="Hu-images-icon">
                    {
                        this.props.Vm.IsDetail ? null :
                            this.props.Vm.IsMulti ? <a onClick={(e) => { this.fCoverSetOnClick(e); return false; } }></a> : null
                    }
                    <a onClick={(e) => { this.fViewOnClick1(e) } }>查看原图</a>
                </div>
                {
                    this.props.Vm.IsSimple ? null :
                        <div className="Hu-all-images-size">
                            <select ref="sizeSelect" value={this.props.Vm.SelectValue} onChange={(e) => { this.fOnChange(e); return false; } }>
                                {
                                    this.props.Vm.ImageSizeItemList.map((item, i) => { return item.intoDom() })
                                }
                            </select>
                        </div>
                }

                { this.props.Vm.IsCover ? <div className="Hu-images-cover"></div> : null}
            </div>
        }

        protected pComponentWillMount(): void {
            super.pComponentWillMount();
            if (this.props.Vm.ResourceInfo && this.props.Vm.ResourceInfo.IsCover) {
                this.props.Vm.IsCover = this.props.Vm.ResourceInfo.IsCover;
            }
            if (this.props.Vm.UploadObj && this.props.Vm.UploadObj.IsSimple) {
                this.props.Vm.IsSimple = true;
            }
        }

        protected pComponentDidMount(): void {

            super.pComponentDidMount();


        }

        private fSetCover(isCover) {
            this.props.Vm.IsCover = isCover;
            this.props.Vm.ResourceInfo.IsCover = isCover;
        }

        private fGetImageItemDom(ref: string): JQuery {
            var _reactObj = this.refs[ref];
            var _dom = ReactDOM.findDOMNode(_reactObj);
            var _$dom = $(_dom);
            return _$dom;
        }


        private fInitContent() {

            if (!this.props.Vm.IsSimple) {
                $.each(this.props.Vm.ResourceInfo.ExtendList, (i, n) => {
                    var _f = this.fSetSizeUrl(n);

                    if (n == "0-0") {
                        n = "实际截图大小";
                    }

                    var _sizeItem = new imageSize.ui.ImageSizeItemVm();
                    _sizeItem.ItemValue = n.replace(/-/g, "*");
                    _sizeItem.Itemkey = i;
                    if (this.props.Vm.IsDefualt) {
                        this.props.Vm.IsDefualt = false;
                        this.props.Vm.SelectValue = _sizeItem.ItemValue;
                        this.props.Vm.imgHref = _f;
                        this.props.Vm.imgTitle = this.props.Vm.Title;
                    }

                    this.props.Vm.ImageSizeItemList.push(_sizeItem);
                });
            }
        }

        private fSetSizeUrl(wh) {
            return utilFile.Core.Util.AddUrlFileName(this.props.Vm.ResourceInfo.HttpPath, wh);
        }
    }

    export class ImageShowItemProps extends BaseColProps<ImageShowItemVm>{

    }

    export class ImageShowItemStates extends BaseColStates {

    }

    export class ImageShowItemVm extends BaseColVm {
        public ReactType: any = ImageShowItemReact;

        public ResourceInfo = null;
        public UploadObj = null;
        public IsDetail = false;
        public Title = "";
        public IsCover = false;
        public IsSimple = false;
        public IsFile = false;
        public ImageSizeItemList: Array<imageSize.ui.ImageSizeItemVm> = new Array<imageSize.ui.ImageSizeItemVm>();
        public SelectValue: string = null;
        public IsDefualt = true;
        public imgHref: string;
        public imgTitle: string;
        //public CoverTitle: string = "设为封面";
        public IsMulti: boolean = true;
        public itemIndex = 0;


        //是否不可编辑
        public isAbleEdit = true;
    }


}