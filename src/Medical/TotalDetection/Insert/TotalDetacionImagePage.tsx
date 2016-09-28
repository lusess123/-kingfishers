import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom"); 
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import React = require("react");
import ImageShowFile = require("./../../../02col/04upload/ImageShowItem");
import imageupload = require("./../../../02col/04upload/MultiImageUpload");
import ReactDOM = require("react-dom");

export module TotalDetacionImagePage {
    export class TotalDetacionImagePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class TotalDetacionImagePageReact extends basewedPageFile.Web.BaseWebPageReact<TotalDetacionImagePageProps, TotalDetacionImagePageStates, TotalDetacionImagePageAction> implements domCore.IReact {
        public state = new TotalDetacionImagePageStates(); public pSender(): React.ReactElement<any> {
            return <div>{this._tDom(this.props.Vm.upload) }</div>;
        }
    }

    export interface IReactTotalDetacionImagePageVm extends basewedPageFile.Web.BaseWebPageVm { }

    export interface ITotalDetacionImagePageConfig { }

    export class TotalDetacionImagePageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactTotalDetacionImagePageVm {
        public ReactType = TotalDetacionImagePageReact;
        public imageshow: ImageShowFile.ui.ImageShowItemVm;
        public Title: string = "显示图片";
        public upload: imageupload.ui.MultiImageUploadVm;
        public constructor(config?: ITotalDetacionImagePageConfig) {
            super();
        }

        private init(config: ITotalDetacionImagePageConfig) { }

        protected loadPage(callback?: () => any) {
            this.imageshow = new ImageShowFile.ui.ImageShowItemVm();
            this.upload = new imageupload.ui.MultiImageUploadVm();
            this.upload.isAbleEdit = false;
            if (this.Param1) {
                var imageobj = JSON.parse(this.Param1);
                //this.imageshow.ResourceInfo = imageobj["ResourceInfoList"];
                this.upload.dataValueSet(this.Param1);
            }
            
            this.upload.StorageName = "CoreUserlogo";//MedicalDepartStorage
            this.upload.UploadName = "CoreUserlogo";//MedicalDepart
            this.upload.FileExtension = "*.jpeg;*.jpg;*.bmp;*.gif;*.png";
            this.forceUpdate("");
            if (callback) { callback(); }
        }
    }

    export class TotalDetacionImagePageStates extends basewedPageFile.Web.BaseWebPageStates { }

    export class TotalDetacionImagePageProps extends basewedPageFile.Web.BaseWebPageProps<TotalDetacionImagePageVm> { }

    iocFile.Core.Ioc.Current().RegisterType("TOTALDETACIONIMAGEPAGE", basewedPageFile.Web.BaseWebPageVm, TotalDetacionImagePageVm);
}