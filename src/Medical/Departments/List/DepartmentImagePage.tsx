import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom"); 
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc"); 
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import imageupload = require("./../../../02col/04upload/MultiImageUpload");
import React = require("react");
import ReactDOM = require("react-dom");
import dataFile = require("./../data");
export module DepartmentImagePage {
    export class DepartmentImagePageAction extends basewedPageFile.Web.BaseWebPageStates { public DataValue: string; public Id: string; public Vm: any; }

    export class DepartmentImagePageReact extends basewedPageFile.Web.BaseWebPageReact<DepartmentImagePageProps, DepartmentImagePageStates, DepartmentImagePageAction> implements domCore.IReact {

        public state = new DepartmentImagePageStates(); public pSender(): React.ReactElement<any> {
            return <div className="p-a">
                <div>{this._tDom(this.props.Vm.upload) }</div>
                <a className="btn btn-sm btn-primary" onClick={() => { this.props.Vm.UploadImage() } }>确定</a>
            </div>;
        }
    }

    export interface IReactDepartmentImagePageVm extends basewedPageFile.Web.BaseWebPageVm { }

    export interface IDepartmentImagePageConfig { }

    export class DepartmentImagePageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactDepartmentImagePageVm {
        public ReactType = DepartmentImagePageReact;
        public upload: imageupload.ui.MultiImageUploadVm;
        public Title: string = "上传图片";
        public Itemdata: dataFile.Result.IMemberExamItemData;
        public constructor(config?: IDepartmentImagePageConfig) {
            super();

        }

        private init(config: IDepartmentImagePageConfig) {

        }

        public UploadImage() {
            var imageValue = this.upload.dataValueGet();
            var obj = JSON.parse(imageValue);
            var PageCount = obj["ResourceInfoList"].length;
            this.Itemdata.Picture = imageValue;
            this.Itemdata.PictureCount = PageCount;
            this.SendPageActor({ ToPanelName: "", ToModuleName: "DepartmentEntryPage" }, { Select: this.Itemdata });
            this.closePage();
        }


        protected loadPage(callback?: () => any) {
            if (this.Param1) {
                this.Itemdata = JSON.parse(this.Param1);

                this.upload = new imageupload.ui.MultiImageUploadVm();
                if (this.Itemdata.Picture) {
                    this.upload.dataValueSet(this.Itemdata.Picture);
                }
                this.upload.StorageName = "DeptStorage";//MedicalDepartStorage
                this.upload.UploadName = "DeptCodeUpload";//MedicalDepart
                this.upload.FileExtension = "*.jpeg;*.jpg;*.bmp;*.gif;*.png";
            }
            if (callback) { callback(); }
        }
    }

    export class DepartmentImagePageStates extends basewedPageFile.Web.BaseWebPageStates { }

    export class DepartmentImagePageProps extends basewedPageFile.Web.BaseWebPageProps<DepartmentImagePageVm> { }


    iocFile.Core.Ioc.Current().RegisterType("DEPARTMENTIMAGEPAGE", basewedPageFile.Web.BaseWebPageVm, DepartmentImagePageVm);
}