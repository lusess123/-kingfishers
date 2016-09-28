
import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import imagePerview = require("./ImagePreviewShow");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {
    //alert("BaseUploadReact");
    export class BaseUploadAction extends BaseColAction {

    }
    export class BaseUploadReact<P extends BaseUploadProps<BaseUploadVm>, S extends BaseUploadStates, A extends BaseUploadAction> extends BaseColReact<P, S, A> implements domFile.Core.IReact {

        protected static pNumber: number = 0;
        protected pCurrentNumber: number = 0;
        protected pGetAreaId() {
            return this.pCurrentNumber.toString();
        }
        protected pSetAreaId() {
            this.pCurrentNumber = BaseUploadReact.pNumber = BaseUploadReact.pNumber + 1;
            return this.pCurrentNumber.toString();;

        }

        public pSender(): React.ReactElement<any> {

         


            return <div ref="ACT-FILE-UPLOAD"
                    id={"updload" + this.pGetAreaId() }>
                    <div ref="acs-uploadBox"  className="YSc-upload-box">
                        <ul>
                            <li ref="ACT-LEFT">
                            <form id="formUpload">
                                <label className={" Hc-upload " + (this.props.Vm.isAbleEdit ? "" : " hide ")}> 
                                            <input ref="fileUpload" type="file"
                                        accept={this.props.Vm.IsImageUpload ? "image/*" : ""} name="action"
                                        style={{ display: "none" }} onChange={() => { this.props.Vm.IsUpload = true; return false; } }   />
                                            {this.props.Vm.isLoadIcon ? (<i className={this.props.Vm.LoadIconName}></i>):""}   {this.props.Vm.LabelText}
                                        </label>
                                 </form>
                              </li>
                              <li ref="ACT-RIGHT"></li>  
                         </ul>
                      </div>
                    <div ref="ACT-UPLOAD-RESULT"
                    className={"Hc-upload-result clearfix " + (this.props.Vm.IsImageUpload ? "acsImagesPanel" : "acsFilePanel") }>
                        {
                         this.props.Vm.ShowItemList == null ? null :
                            this.props.Vm.ShowItemList.map((item, i) => {
                                    if (i == this.props.Vm.CoverIndex) {
                                        item.IsCover = true;
                                    } else {
                                        item.IsCover = false;
                                    }
                                        item.itemIndex = i;
                                        return item.intoDom()
                                    })
                        }
                        </div>
                        {this.props.Vm.PreviewShowItem == null ? null : this.props.Vm.PreviewShowItem.intoDom()}
                </div>
        }

        protected pComponentDidMount(): void {
            super.pComponentDidMount();

            if (!this.props.Vm.Uploader) {
                //this.props.Vm.Uploader = '/core/Uploader/UploadFile?fileStorageName=' + this.props.Vm.StorageName;
                this.props.Vm.Uploader = '/core/Uploader/UploadFileAndImage?fileStorageName=' + this.props.Vm.StorageName + '&uploadName=' + this.props.Vm.UploadName;
            }

           
            //var _valStr = this.fDataValue_Get();
            //alert(_valStr);
            var _valStr = this.props.Vm.reactDataValueGet();
            //alert(_valStr);
            //var _valStr = JSON.parse(_s);
            if (utilFile.Core.Util.isString(_valStr) && _valStr != "") {
                var _valObj = JSON.parse(_valStr);
                if (!_valObj) {
                    this.props.Vm.ResourceInfoList = [];
                }
                else {
                    if (_valObj.ResourceInfoList) {
                        this.props.Vm.ResourceInfoList = _valObj.ResourceInfoList;
                        this.props.Vm.CoverIndex = _valObj.CoverIndex;
                    }
                }
            }
            //else {
            //    if (_valStr && _valStr.ResourceInfoList) {
            //        this.props.Vm.ResourceInfoList = _valStr.ResourceInfoList;
            //        this.props.Vm.CoverIndex = _valStr.CoverIndex;
            //    }
            //}

            this.fInitNoSupportFlash();

            if (this.props.Vm.ResourceInfoList && this.props.Vm.ResourceInfoList.length > 0) {
                for (var i = 0; i < this.props.Vm.ResourceInfoList.length; i++) {
                    this.pInitUploadFile(this.props.Vm.ResourceInfoList[i]);
                }
            }
        }

        private fInitNoSupportFlash() {
            var __this = this;
            var _$JObjNoSupportFlash_File = __this.pGetUploadDom("fileUpload");

            if (this.props.Vm.Multi) {
                _$JObjNoSupportFlash_File.attr("multiple", "multiple");
            } else {
                _$JObjNoSupportFlash_File.removeAttr("multiple");
            }

            utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/html5upload/jquery.html5_upload.js"], () => {
                _$JObjNoSupportFlash_File.html5_upload({
                    sendBoundary: window["FormData"] || ($["browser"] && $["browser"]["mozilla"]),
                    url: this.props.Vm.Uploader,
                    onStartOne: (event, file, num, total) => {
                        var fileTypeExt = file.name || file.fileName;
                        var fileSize = file.size || file.fileSize;
                        var isExtValid = false;
                        if (fileTypeExt) {
                            if (this.props.Vm.FileExtension == null) {
                                isExtValid = true;                          
                            } else{
                                fileTypeExt = fileTypeExt.substring(fileTypeExt.lastIndexOf('.')).toLowerCase();
                                var fileTypeExts = this.props.Vm.FileExtension.split(';');
                                if (fileTypeExts.length === 0) isExtValid = true;
                                else {
                                    for (var i = 0; i < fileTypeExts.length; i++) {
                                        if (fileTypeExts[i].substring(fileTypeExts[i].lastIndexOf('.')).toLowerCase() === fileTypeExt) {
                                            isExtValid = true;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        if (!isExtValid) {
                            alert('请选择' + this.props.Vm.FileExtension + '格式的文件');
                            return false
                        }
                        if (this.props.Vm.FileSize < fileSize) {
                            alert('请选择小于' + this.props.Vm.FileSize + '大小的文件');
                            return false;
                        }
                        return true;
                    },
                    onFinishOne: this.pSuccessFun()
                });

            });
        }

        protected pSuccessFun() {

        }

        //重写获取值方法
        private fDataValue_Get() {
            var __this = this;
            var _$dvList = __this.pGetUploadDom("ACT-UPLOAD-RESULT").find(".ACT_FILE_ITEM");
            var _coverIndex = __this.props.Vm.CoverIndex ? __this.props.Vm.CoverIndex : 0;
            __this.props.Vm.ResourceInfoList = [];
            for (var i = 0; i < _$dvList.length; i++) {
                var _Obj = _$dvList.eq(i).AtawControl();
                __this.props.Vm.ResourceInfoList.push(_Obj.ResourceInfo);
                if (_Obj.IsCover) {
                    _coverIndex = i;
                }
            }
            var _resStr = JSON.stringify({
                CoverIndex: _coverIndex,
                ResourceInfoList: __this.props.Vm.ResourceInfoList
            });

            var _res = JSON.parse(_resStr);
            return _res;
        }

        protected pGetUploadDom(ref: string): JQuery {
            var _reactObj = this.refs[ref];
            var _dom = ReactDOM.findDOMNode(_reactObj);
            var _$dom = $(_dom);
            return _$dom;
        }

        protected pInitUploadFile(resObj) {

        }

        protected pComponentWillUnmount() {
            super.pComponentWillUnmount();
            utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/html5upload/jquery.html5_upload.js"], () => {
                this.pGetUploadDom("fileUpload").triggerHandler("html5_upload.destroy");
            });
        }

    }

    export class BaseUploadProps<V extends BaseUploadVm> extends BaseColProps<V>{

    }

    export class BaseUploadStates extends BaseColStates {
        public ShowItemArea: any;
    }




    export class BaseUploadVm extends BaseColVm {
        public ReactType: any = BaseUploadReact;
        public IsImageUpload = true;
        //public UploadFileType = "image/*";
        public Multi = true;
        public AfterUpLoadFun = null;
        public AfterDeleteFun = null;
        public ResourceInfoList: Array<Object> = [];
        public CoverIndex = 0;
        public FileExtension = null;
        public FileSize = 104857600;
        public StorageName = null;
        public UploadName = null;
        public Uploader = null;
        public IsSimple = false;
        public HasDocumentCenter = false;
        public IsDivInit = false;
        public LabelText = "请选择";
        public MinUploadCount = null;

        public LoadIconName: string;
        public isLoadIcon: boolean = false;
        //public ShowItemList: Array<ImageShowItemVm> = new Array<ImageShowItemVm>();
        public ShowItemList = null;
        public IsUpload: boolean = false; //是否上传更新
        public IsInitialValue: boolean = false; //是否初始值
        public $JObj_Show = null;

        //是否能修改
        public isAbleEdit = true;

        public PreviewShowItem: imagePerview.ui.ImagePreviewShowVm = null;
    }
}