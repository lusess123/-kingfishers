import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");

import EditSpanFile = require("./../../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;

export module FileMConfigPage {
    export class FileMConfigPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class FileMConfigPageReact extends basewedPageFile.Web.BaseWebPageReact<FileMConfigPageProps, FileMConfigPageStates, FileMConfigPageAction> implements domCore.IReact {

        public state = new FileMConfigPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="Hm-file-mconfig clearfix">
                    <p className="Hs-fw ">文件</p>
                    <table className="table table-hover">
                        {this._initThead() }
                        {this._initTbody() }
                    </table>
                </div>

                {this._initFileUpload() }

                {this._initFileStorage()}
               
            </div>;
        }      

        private _initThead(): React.ReactElement<any> {
            return <thead>
                <tr>
                    <th>序号</th>
                    <th><ESpan children={null} Vm={new ESpanVm({ Content: "文件名称" }) }></ESpan></th>
                    <th><ESpan children={null} Vm={new ESpanVm({ Content: "ID" }) }></ESpan></th>
                    <th><ESpan children={null} Vm={new ESpanVm({ Content: "物理路径" }) }></ESpan></th>
                    <th><ESpan children={null} Vm={new ESpanVm({ Content: "FTP路径" }) }></ESpan></th>
                    <th><ESpan children={null} Vm={new ESpanVm({ Content: "HTTP路径" }) }></ESpan></th>
                    <th><ESpan children={null} Vm={new ESpanVm({ Content: "MMS路径" }) }></ESpan></th>
                </tr>
            </thead>;
        }

        private _initTbody(): React.ReactElement<any> {
            return <tbody>
                <tr>
                    <td></td>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "Core" }) }></ESpan></td>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "-1" }) }></ESpan></td>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "\\192.168.66.11\zyk\WebFile\Core\\", Type:"textarea" }) }></ESpan></td>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "" }) }></ESpan></td>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "http://192.168.66.11:99/Core/", Type:"textarea" }) }></ESpan></td>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "" }) }></ESpan></td>                    
                </tr>
                <tr>
                    <td></td>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "HospPerformance" }) }></ESpan></td>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "1" }) }></ESpan></td>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "\\192.168.66.11\zyk\WebFile\HospPerformance\\", Type:"textarea" }) }></ESpan></td>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "" }) }></ESpan></td>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "http://192.168.66.11:99/HospPerformance/", Type:"textarea" }) }></ESpan></td>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "" }) }></ESpan></td>
                </tr>

            </tbody>;
        } 

        private _initFileUpload(): React.ReactElement<any> {
            return <div className="Hm-file-mconfig clearfix">
                <p className="Hs-fw ">文件上传<i className={"fa " + (this.props.Vm.IsFileUploadHidden ? "fa-caret-down " : "fa-caret-up")} onClick={() => { this.fun_FileUpload() } }></i></p>
                <div className={this.props.Vm.IsFileUploadHidden ?"hide":" "}>
                <div className="col-lg-4 col-md-4">
                    <div className="p-a">
                        <div className="">
                            <label>名称：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "CoreUserlogo" }) }></ESpan>
                        </div>
                        <div className="">
                            <label>最大值：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "1048576" }) }></ESpan>
                        </div>
                        <div className="">
                                <label>允许的扩展名（例：*.txt; *.doc）：</label>
                                <ESpan children={null} Vm={new ESpanVm({ Content: "*.jpeg;*.jpg;*.bmp;*.gif;*.png", Type:"textarea" }) }></ESpan>
                        </div>
                        <div className="">
                            <label>文件保存路径: </label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "(空)" }) }></ESpan>
                        </div>
                        <div className="">
                            <label>图片裁剪后的宽度: </label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "60" }) }></ESpan>
                        </div>
                        <div className="">
                            <label>图片裁剪名称: </label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "Core_User" }) }></ESpan>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="p-a">
                        <div className="">
                            <label>名称：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "BarCodeUpload" }) }></ESpan>
                        </div>
                        <div className="">
                            <label>最大值：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "1048576" }) }></ESpan>
                        </div>
                        <div className="">
                                <label>允许的扩展名（例：*.txt; *.doc）：</label>
                                <ESpan children={null} Vm={new ESpanVm({ Content: "*.jpeg;*.jpg;*.bmp;*.gif;*.png", Type:"textarea" }) }></ESpan>
                        </div>
                        <div className="">
                            <label>文件保存路径: </label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "(空)" }) }></ESpan>
                        </div>
                        <div className="">
                            <label>图片裁剪后的宽度: </label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "60" }) }></ESpan>
                        </div>
                        <div className="">
                            <label>图片裁剪名称: </label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "BarCode" }) }></ESpan>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="p-a">
                        <div className="">
                            <label>名称：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "ExcelUpload" }) }></ESpan>
                        </div>
                        <div className="">
                            <label>最大值：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "1048576" }) }></ESpan>
                        </div>
                        <div className="">
                            <label>允许的扩展名（例：*.txt; *.doc）：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "*.xls" }) }></ESpan>
                        </div>
                        <div className="">
                            <label>文件保存路径: </label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "(空)" }) }></ESpan>
                        </div>
                        <div className="">
                            <label>图片裁剪后的宽度: </label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "60" }) }></ESpan>
                        </div>
                        <div className="">
                            <label>图片裁剪名称: </label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "(空)" }) }></ESpan>
                        </div>
                    </div>
                </div>
               </div>
            </div>;
        }

        private _initFileStorage(): React.ReactElement<any> {
            return <div className="Hm-file-mconfig clearfix">
                <p className="Hs-fw ">文件存储<i className={"fa " + (this.props.Vm.IsFileStorageHidden ? "fa-caret-down " : "fa-caret-up") } onClick={() => { this.fun_FileStorage() } }></i></p>
                <div className={this.props.Vm.IsFileStorageHidden ? "hide" : " "}>
                <div className="col-lg-4 col-md-4">
                    <div className="p-a">
                        <div className="">
                            <label>名称：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "CoreUserlogo" }) }></ESpan>
                        </div>
                        <div className="">
                            <label>文件路径ID：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "-1" }) }></ESpan>
                        </div>
                        <div className="">
                            <label>文件名称格式：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "{0}.jpg" }) }></ESpan>
                        </div>
                        <div className="">
                            <label>文件路径格式: </label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "User/logo/" }) }></ESpan>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="p-a">
                        <div className="">
                            <label>名称：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "BarCodeStorage" }) }></ESpan>
                        </div>
                        <div className="">
                            <label>文件路径ID：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "1" }) }></ESpan>
                        </div>
                        <div className="">
                            <label>文件名称格式：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "{0}.png" }) }></ESpan>
                        </div>
                        <div className="">
                                <label>文件路径格式: </label>
                                <ESpan children={null} Vm={new ESpanVm({ Content: "BarCode/Image/{0:0000/00/00/}File/", Type:"textarea" }) }></ESpan>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="p-a">
                        <div className="">
                            <label>名称：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "ExcelStorage" }) }></ESpan>
                        </div>
                        <div className="">
                            <label>文件路径ID：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "1" }) }></ESpan>
                        </div>
                        <div className="">
                            <label>文件名称格式：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "{0}.xls" }) }></ESpan>
                        </div>
                        <div className="">
                                <label>文件路径格式: </label>
                                <ESpan children={null} Vm={new ESpanVm({ Content: "Excel/{0:0000/00/00/}File/", Type:"textarea" }) }></ESpan>
                        </div>
                    </div>
                </div>
                </div>
            </div>;
        }

        public fun_FileUpload() {
            this.props.Vm.IsFileUploadHidden = !this.props.Vm.IsFileUploadHidden;
            this.forceUpdate();
        }

        public fun_FileStorage() {
            this.props.Vm.IsFileStorageHidden = !this.props.Vm.IsFileStorageHidden;
            this.forceUpdate();
        }

    }


    export interface IReactFileMConfigPageVm extends basewedPageFile.Web.BaseWebPageVm {
        IsFileUploadHidden: boolean;
        IsFileStorageHidden: boolean;
    }

    export interface IFileMConfigPageConfig {


    }
    export class FileMConfigPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactFileMConfigPageVm {
        public ReactType = FileMConfigPageReact;
        public Title: string = "FileMConfigPage页面;";

        public IsFileUploadHidden: boolean;
        public IsFileStorageHidden: boolean;
        public constructor(config?: IFileMConfigPageConfig) {
            super();

        }

        private init(config: IFileMConfigPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class FileMConfigPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class FileMConfigPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactFileMConfigPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("FILEMCONFIGPAGE", basewedPageFile.Web.BaseWebPageVm, FileMConfigPageVm);

}
