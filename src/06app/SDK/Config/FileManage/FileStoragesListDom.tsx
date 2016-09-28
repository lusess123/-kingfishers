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

export module FileStoragesListDom {
    export class FileStoragesListDomAction extends domCore.DomAction {
    }

    export class FileStoragesListDomReact extends domCore.DomReact<FileStoragesListDomProps, FileStoragesListDomStates, FileStoragesListDomAction> implements domCore.IReact {

        public state = new FileStoragesListDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                { this.props.Vm.FileStorages.map((a) => {
                    return this.PerSendServer(a);
                }) }
            </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
        //  <div className="text-center"><a className="btn btn-primary btn-sm"  onClick={() => { this.props.Vm.dataValue() } }>保存</a></div>

        public PerSendServer(a: ConfigData.ConfigData.FileStoragesData) {

            return <div className="col-lg-4 col-md-4">
                <div className="p-a">
                    <div className="">
                        <label>名称：</label>
                        <ESpan children={null} Vm={new ESpanVm({ Content: a.Name }) }></ESpan>
                    </div>
                    <div className="">
                        <label>文件路径ID：</label>
                        <ESpan children={null} Vm={new ESpanVm({ Content: a.FileRootID }) }></ESpan>
                    </div>
                    <div className="">
                        <label>文件名称格式：</label>
                        <ESpan children={null} Vm={new ESpanVm({ Content: a.FileNameFormat }) }></ESpan>
                    </div>
                    <div className="">
                        <label>文件路径格式: </label>
                        <ESpan children={null} Vm={new ESpanVm({ Content: a.FilePathFormat }) }></ESpan>
                    </div>
                </div>

            </div>


        }


    }

    export interface IReactFileStoragesListDomVm extends domCore.DomVm {
        StoragesData: ConfigData.ConfigData.FileStoragesData;
        FileStorages: Array<Data.ConfigData.FileStoragesData>;
        psenderAppSetting: (Text: string) => {};
    }

    export interface IFileStoragesListDomConfig {
        FileStorages: Array<Data.ConfigData.FileStoragesData>;
    }

    export class FileStoragesListDomVm extends domCore.DomVm implements IReactFileStoragesListDomVm {
        StoragesData: ConfigData.ConfigData.FileStoragesData;
        public ReactType = FileStoragesListDomReact;
        public FileStorages: Array<Data.ConfigData.FileStoragesData>;
        public EditText: EditSpanFile.EditSpan.EditSpanVm;
        public constructor(config?: IFileStoragesListDomConfig) {
            super();
            if (config.FileStorages) {
                this.FileStorages = config.FileStorages;
            }
        }

        public psenderAppSetting(Value: string) {
            this.EditText = new EditSpanFile.EditSpan.EditSpanVm();
            this.EditText.Content = Value;
            return this.EditText.intoDom();
        }
        public submitClick() {
            return this.FileStorages;
        }

    }

    export class FileStoragesListDomStates extends domCore.DomStates {
    }


    export class FileStoragesListDomProps extends domCore.DomProps<IReactFileStoragesListDomVm>{
    }



}


