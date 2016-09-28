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
import ConfigData = require("./../Data");

import FileLoadList = require("./FileLoadListDom");
import FileStoragesList = require("./FileStoragesListDom");
import EditSpanFile = require("./../../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
import eventFile = require("./../../../../01core/Event");
import row = require("./FileRootsRowDom");

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

                {this._initFileStorage() }

                <div className="text-center">
                    <a className="btn btn-primary btn-sm"  onClick={() => { this.props.Vm.allsubmitClick() } }>保存</a></div>


            </div>;

        }

        private _initThead(): React.ReactElement<any> {

            return <thead>
                <tr>
                    <th>序号</th>
                    <th><span>文件名称</span></th>
                    <th><span>ID</span></th>
                    <th><span>物理路径</span></th>
                    <th><span>FTP路径</span></th>
                    <th><span>HTTP路径</span></th>
                    <th><span>MMS路径</span></th>
                </tr>
            </thead>;
        }

        private _initTbody(): React.ReactElement<any> {
            var a = this.props.Vm.Data
            return <tbody>
                {this.props.Vm.RowList.map((a) => {
                    return a.intoDom();
                })
                }
            </tbody>;
        }

        private _initFileUpload(): React.ReactElement<any> {
            return <div className="Hm-file-mconfig clearfix">
                <p className="Hs-fw ">文件上传<i className={"fa " + (this.props.Vm.IsFileUploadHidden ? "fa-caret-down " : "fa-caret-up") } onClick={() => { this.fun_FileUpload() } }></i></p>
                <div className={this.props.Vm.IsFileUploadHidden ? "hide" : " "}>
                    {this.props.Vm.FileLoadList.intoDom() }
                </div>
            </div>;
        }

        private _initFileStorage(): React.ReactElement<any> {
            return <div className="Hm-file-mconfig clearfix">
                <p className="Hs-fw ">文件存储<i className={"fa " + (this.props.Vm.IsFileStorageHidden ? "fa-caret-down " : "fa-caret-up") } onClick={() => { this.fun_FileStorage() } }></i></p>
                <div className={this.props.Vm.IsFileStorageHidden ? "hide" : " "}>
                    {this.props.Vm.FileStoragesList.intoDom() }
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


    export interface IReactFileMConfigPageVm extends domCore.DomVm {

        Data: Array<ConfigData.ConfigData.FileRootsData>;
        RowList: Array<row.FileRootsRowDom.FileRootsRowDomVm>;
    }

    export interface IReactFileMConfigPageVm extends basewedPageFile.Web.BaseWebPageVm {
        IsFileUploadHidden: boolean;
        IsFileStorageHidden: boolean;
        allsubmitClick: Function;
        FileManage: ConfigData.ConfigData.FileManageData;
        FileLoadList: FileLoadList.FileLoadListDom.FileLoadListDomVm;
        FileStoragesList: FileStoragesList.FileStoragesListDom.FileStoragesListDomVm;
        changerEvent: any;
        isAppNameEdit: string;
    }

    export interface IFileMConfigPageConfig {
        Data: Array<ConfigData.ConfigData.FileRootsData>;
    }

    export class FileMConfigPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactFileMConfigPageVm {
        FileLoadList: FileLoadList.FileLoadListDom.FileLoadListDomVm;
        FileStoragesList: FileStoragesList.FileStoragesListDom.FileStoragesListDomVm;
        FileManage: ConfigData.ConfigData.FileManageData;
        Data: Array<ConfigData.ConfigData.FileRootsData> = [];
        loadData: ConfigData.ConfigData.FileManageData;
        public submits: Array<ConfigData.ConfigData.submit> = [];
        public ReactType = FileMConfigPageReact;

        public RowList: Array<row.FileRootsRowDom.FileRootsRowDomVm> = [];
        public Row: row.FileRootsRowDom.FileRootsRowDomVm;
        public constructor(config?: IFileMConfigPageConfig) {
            super();
            //if (config.Data) {
            //    this.Data = config.Data;

            //    this.Data.forEach((a, number) => {
            //        var config: row.FileRootsRowDom.IFileRootsRowDomConfig = { Data: a, Number: number + 1, Unid: this.UniId }
            //        this.Row = new row.FileRootsRowDom.FileRootsRowDomVm(config);
            //        this.RowList.push(this.Row)
            //    })
            //}


        }
        public Title: string = "FileMConfigPage页面;";

        public IsFileUploadHidden: boolean;
        public IsFileStorageHidden: boolean;

        private init(config: IFileMConfigPageConfig) {
        }

        public isAppNameEdit: string = "";
        public changerEvent() {
            this.isAppNameEdit = "Hs-edit";
        }

        protected loadPage(callback?: () => any) {
            this.UniId = eventFile.App.getUniId().toString();
            urlFile.Core.AkPost("/Dev/App/GetFileManageXml", {}, (a) => {

                this.loadData = a;
                var LoadlistConfig: FileLoadList.FileLoadListDom.IFileLoadListDomConfig = { FileUpLode: this.loadData.FileUploads }
                this.FileLoadList = new FileLoadList.FileLoadListDom.FileLoadListDomVm(LoadlistConfig);
                this.Data = this.loadData.FileRoots;
                this.loadData.FileRoots.forEach((a, number) => {
                    var config: row.FileRootsRowDom.IFileRootsRowDomConfig = { Data: a, Number: number + 1, Unid: this.UniId }
                    this.Row = new row.FileRootsRowDom.FileRootsRowDomVm(config);
                    this.RowList.push(this.Row)
                })

                var StorageslistConfig: FileStoragesList.FileStoragesListDom.IFileStoragesListDomConfig = { FileStorages: this.loadData.FileStorages }
                this.FileStoragesList = new FileStoragesList.FileStoragesListDom.FileStoragesListDomVm(StorageslistConfig);
                if (callback) {
                    callback();
                }
            })

        }

        public submitClicks() {
            var ListSubmitData = [];
            this.Data.forEach((a, number) => {
                var submitData: ConfigData.ConfigData.FileRootsSubmit = {
                    Name: a.Name, ID: a.ID, PhysicalPath: a.PhysicalPath, HttpPath: a.HttpPath, FtpPath: a.FtpPath, MMSPath: a.MMSPath
                };
                ListSubmitData.push(submitData);
            })

            return ListSubmitData;

        }

        public allsubmitClick() {

            var submit = this.submitClicks();
            var FileLoadList = this.FileLoadList.submitClick();
            var FileStoragesList = this.FileStoragesList.submitClick();

            var submitData: ConfigData.ConfigData.submitDatas = { FileRoots: submit, FileUploads: FileLoadList, FileStorages: FileStoragesList }
           
            urlFile.Core.AkPost("/Dev/FileMConfig/SaveFileManageXml", { submit: JSON.stringify(submitData)},(a) => {
                if (a) {
                    utilFile.Core.Util.ToggleLoading(true);
                    urlFile.Core.AkUrl.Current().refresh();
                }
            });
        }

        //向集合中添加
        public AddSubmit(Name: string, Val: string, Xpath: string) {
            var isAdd = true;
            var submit: ConfigData.ConfigData.submit = { Xpath: Xpath, Text: Name, Value: Val }
            this.submits.map((a) => {
                if (a.Text == Name) {
                    isAdd = false;
                }
            })
            if (isAdd) {

                this.submits.push(submit);
            }
        }
        //向集合中删去
        public SubSubmit(name: string, val: any) {
            if (this.submits.length == 0) return;
            else {
                this.submits.forEach((a, number) => {
                    if (a.Text = name) {
                        this.submits.splice(number, 1);
                    }
                })
            }
        }

    }

    export class FileMConfigPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }

    export class FileMConfigPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactFileMConfigPageVm>{
    }

    iocFile.Core.Ioc.Current().RegisterType("FileManageConfigPage", basewedPageFile.Web.BaseWebPageVm, FileMConfigPageVm);

}

