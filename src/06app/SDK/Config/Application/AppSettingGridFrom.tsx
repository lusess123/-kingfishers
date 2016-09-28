import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import EditSpanFile = require("./../../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;

import ConfigData = require("./../Data");

import row = require("./AppSettingRowDom");
export module AppSettingGridFrom {
    export class AppSettingGridFromAction extends domCore.DomAction {
    }

    export class AppSettingGridFromReact extends domCore.DomReact<AppSettingGridFromProps, AppSettingGridFromStates, AppSettingGridFromAction> implements domCore.IReact {

        public state = new AppSettingGridFromStates();

        public pSender(): React.ReactElement<any> {
            return <div className="col-lg-12 col-md-12  p-a">  
                <table className="table  table-hover">
                    {this._initDBThead() }
                    {this._initDBTbody() }
                </table>
                <div className="text-left"><a className="btn btn-sm"  onClick={() => { this.props.Vm.AddAppSetting() } }><i className="fa fa-plus"></i>添加</a></div>
            </div>;
        }

        private _initDBThead(): React.ReactElement<any> {
            return <thead>
                <tr>
                    <th></th>
                    <th><span>Key</span></th>
                    <th><span>Vaule</span></th>
                    <th><span>NeedPares</span></th>
                    <th><span> 编辑</span></th>
                </tr>
            </thead>;
        }

        private _initDBTbody(): React.ReactElement<any> {
            return <tbody>
                {this.props.Vm.RowList.map((a) => {
                    return a.intoDom();
                })
                }
            </tbody>

        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactAppSettingGridFromVm extends domCore.DomVm {
        Data: Array<ConfigData.ConfigData.AppSettingsData>
        RowList: Array<row.AppSettingRowDom.AppSettingRowDomVm>
        AddAppSetting: Function;
    }

    export interface IAppSettingGridFromConfig {
        Data: Array<ConfigData.ConfigData.AppSettingsData>;
        Unid?: string;
    }

    export class AppSettingGridFromVm extends domCore.DomVm implements IReactAppSettingGridFromVm {
        public ReactType = AppSettingGridFromReact;
        public Data: Array<ConfigData.ConfigData.AppSettingsData> = [];
        public RowList: Array<row.AppSettingRowDom.AppSettingRowDomVm> = [];
        public Row: row.AppSettingRowDom.AppSettingRowDomVm;
        public constructor(config?: IAppSettingGridFromConfig) {
            super();

            if (config.Unid) {
                this.UniId = config.Unid;
            }
            if (config.Data) {
                this.Data = config.Data;

                this.Data.forEach((a, number) => {
                    var config: row.AppSettingRowDom.IAppSettingRowDomConfig = { Data: a, Number: number + 1, Unid: this.UniId }
                    this.Row = new row.AppSettingRowDom.AppSettingRowDomVm(config);
                    this.RowList.push(this.Row)
                })
            }


            this.listenAppEvent("app/SDK/Config/Application/RowDelete", this.UniId, (Text: String) => {
                if (confirm("确定要删除？")) {
                    this.Data.forEach((a, number) => {
                        if (a.Key == Text) {
                            this.Data.splice(number, 1);
                        }
                    })

                    this.RowList.forEach((a, number) => {
                        if (a.Data.Key == Text) {
                            this.RowList.splice(number, 1);
                        }
                    })


                    this.IsMulit = true;
                    this.RowList.forEach((a) => { a.IsChange = true; })
                    this.forceUpdate("");
                }
            });
        }

        public submitClick() {
            var ListSubmitData = [];
            this.Data.forEach((a, number) => {
                var submitData: ConfigData.ConfigData.AppsettingSubmit = {
                    Text: a.Key, Value: a.Value, NeedPares: a.NeedParse
                };
                ListSubmitData.push(submitData);
            })

            return ListSubmitData;
        }

        public AddAppSetting() {
            var data: ConfigData.ConfigData.AppSettingsData = { Key: "empty" + this.Data.length, NeedParse: "true", RegName: "empty" + this.Data.length, Value: "empty" + this.Data.length };

            this.Data.push(data);

            var config: row.AppSettingRowDom.IAppSettingRowDomConfig = { Data: data, Number: this.Data.length, Unid: this.UniId }
            this.Row = new row.AppSettingRowDom.AppSettingRowDomVm(config);
            this.RowList.push(this.Row)

            this.IsMulit = true;
            this.RowList.forEach((a) => { a.IsChange = true; })
            this.forceUpdate("");
        }
    }

    export class AppSettingGridFromStates extends domCore.DomStates {
    }


    export class AppSettingGridFromProps extends domCore.DomProps<IReactAppSettingGridFromVm>{
    }



}


