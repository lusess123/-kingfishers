import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import ConfigData = require("./../Data");
import EditSpanFile = require("./../../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;


import Data = require("./../Data");

export module FileLoadListDom {
    export class FileLoadListDomAction extends domCore.DomAction {
    }

    export class FileLoadListDomReact extends domCore.DomReact<FileLoadListDomProps, FileLoadListDomStates, FileLoadListDomAction> implements domCore.IReact {

        public state = new FileLoadListDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                { this.props.Vm.FileUpLode.map((a) => {
                    return this.PerSendServer(a);

                }) }
            </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

        public PerSendServer(a: ConfigData.ConfigData.FileUploadsData) {
            //<ESpan children={null} Vm={new ESpanVm({ Content: a.MaxSize }) }></ESpan>
            // {this.psenderAppSetting("MaxSize", a.MaxSize) }
            return <div className="col-lg-4 col-md-4">
                <div className="p-a">
                    <div className="">
                        <label>名称：</label>
                        {this.psenderAppSetting("Name", a.Name) }
                    </div>
                    <div className="">
                        <label>最大值：</label>
                        {this.psenderAppSetting("MaxSize",a.MaxSize ) }
                    </div>
                    <div className="">
                        <label>允许的扩展名（例：*.txt; *.doc）：</label>
                        {this.psenderAppSetting("Extensions",a.Extensions) }
                    </div>
                    <div className="">
                        <label>文件保存路径: </label>
                        {this.psenderAppSetting( "FilePath",a.FilePath) }
                    </div>
                    <div className="">
                        <label>图片裁剪后的宽度: </label>
                        {this.psenderAppSetting("ImageSizeWidth",a.ImageSizeWidth ) }
                    </div>
                    <div className="">
                        <label>图片裁剪后的高度: </label>
                        {this.psenderAppSetting("ImageSizeHeight",a.ImageSizeHeight) }
                    </div>
                    <div className="">
                        <label>图片裁剪名称: </label>
                        {this.psenderAppSetting("ImageCutGroupName",a.ImageCutGroupName ) }
                    </div>
                </div>

            </div>
        }

        public psenderAppSetting(Value: string, type: string) {

            if (Value == "") { Value = "空"; }

            var config: EditSpanFile.EditSpan.IEditSpanVm = {
                Content: Value, ChangeEvent: (v, ischage) => {
                    if (type == "Name") {
                        this.props.Vm.LoadDatas.Name = v.Content;
                    }
                    if (type == "MaxSize") {
                        this.props.Vm.LoadDatas.MaxSize = v.Content;
                    }
                    if (type == "Extensions") {
                        this.props.Vm.LoadDatas.Extensions = v.Content;
                    }
                    if (type == "FilePath") {
                        this.props.Vm.LoadDatas.FilePath = v.Content;
                    }
                    if (type == "ImageSizeWidth") {
                        this.props.Vm.LoadDatas.ImageSizeWidth = v.Content;
                    }
                    if (type == "ImageSizeHeight") {
                        this.props.Vm.LoadDatas.ImageSizeHeight = v.Content;
                    }
                    if (type == "ImageCutGroupName") {
                        this.props.Vm.LoadDatas.ImageCutGroupName = v.Content;
                    }
                }

            }
            this.props.Vm.EditText = new EditSpanFile.EditSpan.EditSpanVm(config);

            return this.props.Vm.EditText.intoDom();
        }
    }
    export interface IReactFileLoadListDomVm extends domCore.DomVm {
        LoadDatas: ConfigData.ConfigData.FileUploadsData;
        FileUpLode: Array<Data.ConfigData.FileUploadsData>;
        EditText: EditSpanFile.EditSpan.EditSpanVm;
      
    }

    export interface IFileLoadListDomConfig {
        FileUpLode: Array<Data.ConfigData.FileUploadsData>;
    }

    export class FileLoadListDomVm extends domCore.DomVm implements IReactFileLoadListDomVm {
        LoadDatas: ConfigData.ConfigData.FileUploadsData;
        public ReactType = FileLoadListDomReact;
        public FileUpLode: Array<Data.ConfigData.FileUploadsData>;
        public EditText: EditSpanFile.EditSpan.EditSpanVm;
        public constructor(config?: IFileLoadListDomConfig) {
            super();
            if (config.FileUpLode) {
                this.FileUpLode = config.FileUpLode;

            }
        }


        public submitClick() {
            this.FileUpLode.push(this.LoadDatas);
            return this.FileUpLode;
        }

    }



    export class FileLoadListDomStates extends domCore.DomStates {
    }


    export class FileLoadListDomProps extends domCore.DomProps<IReactFileLoadListDomVm>{
    }



}


