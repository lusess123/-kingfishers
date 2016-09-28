

import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
//import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");
import ConfigData = require("./MvcData");
import row = require("./MvcConfigRowDom");

export module MvcConfigGridFrom {
    export class MvcConfigGridFromAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class MvcConfigGridFromReact extends basewedPageFile.Web.BaseWebPageReact<MvcConfigGridFromProps, MvcConfigGridFromStates, MvcConfigGridFromAction> implements domCore.IReact {

        public state = new MvcConfigGridFromStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="text-center"><a className="btn btn-primary btn-sm"  onClick={() => { this.props.Vm.AddAppSetting() } }>添加</a></div>
                <table className="table  table-hover">
                    {this._initDBThead() }
                    {this._initDBTbody() }
                </table>
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

    export interface IReactMvcConfigGridFromVm extends basewedPageFile.Web.BaseWebPageVm {
        
        //RowList: Array<row.AppSettingRowDom.AppSettingRowDomVm>
        Data: Array<ConfigData.ConfigData.RoutesDate>;
        RowList: Array<row.MvcConfigRowDom.MvcConfigRowDomVm>;

        AddAppSetting: Function;
    }

    export interface IMvcConfigGridFromConfig {
        Data: Array<ConfigData.ConfigData.RoutesDate>;
        Unid?: string;

    }
    export class MvcConfigGridFromVm extends basewedPageFile.Web.BaseWebPageVm implements IReactMvcConfigGridFromVm {
        public ReactType = MvcConfigGridFromReact;
        public Data: Array<ConfigData.ConfigData.RoutesDate> = [];
        public RowList: Array<row.MvcConfigRowDom.MvcConfigRowDomVm> = [];
        public Row: row.MvcConfigRowDom.MvcConfigRowDomVm;
       
        public Title: string = "MvcConfigGridFrom页面;";
        public constructor(config?: IMvcConfigGridFromConfig) {
            super();
            if (config.Unid) {
                this.UniId = config.Unid;
            }
            if (config.Data) {
                this.Data = config.Data;

                this.Data.forEach((a, number) => {
                    var config: row.MvcConfigRowDom.IMvcConfigRowDomConfig = { Data: a, Number: number + 1, Unid: this.UniId }
                    var newRow = new row.MvcConfigRowDom.MvcConfigRowDomVm(config);
                    this.RowList.push(newRow);
                })
            }
            this.listenAppEvent("app/SDK/Config/MvcConfig/RowDelete", this.UniId, (Text: String) => {
                if (confirm("确定要删除？")) {
                    this.Data.forEach((a, number) => {
                        if (a.Name == Text) {
                            this.Data.splice(number, 1);
                        }
                    })

                    this.RowList.forEach((a, number) => {
                        if (a.Data.ControlName == Text) {
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
                var submitData: ConfigData.ConfigData.MvcConfigSubmit = {
                    Name: a.Name, ControlName: a.ControlName,
                    ActionName: a.ActionName, AreaName: a.AreaName,
                    NameSpace: a.NameSpace, Param: a.Param, RegName: a.RegName
                };
                ListSubmitData.push(submitData);
            })

            return ListSubmitData;

        }

        public AddAppSetting() {
            var data: ConfigData.ConfigData.RoutesDate = { Name: "empty" + this.Data.length, ControlName: "empty" + this.Data.length, ActionName: "empty" + this.Data.length, AreaName: "empty" + this.Data.length, NameSpace: "empty" + this.Data.length, Param: "empty" + this.Data.length, RegName: "empty" + this.Data.length};

            this.Data.push(data);

            var config: row.MvcConfigRowDom.IMvcConfigRowDomConfig = { Data: data, Number: this.Data.length, Unid: this.UniId }
            this.Row = new row.MvcConfigRowDom.MvcConfigRowDomVm(config); 
            this.RowList.push(this.Row)

            this.IsMulit = true;
            this.RowList.forEach((a) => { a.IsChange = true; })
            this.forceUpdate("");
        }



    }
    export class MvcConfigGridFromStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class MvcConfigGridFromProps extends basewedPageFile.Web.BaseWebPageProps<IReactMvcConfigGridFromVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("MVCCONFIGGRIDFROM", basewedPageFile.Web.BaseWebPageVm, MvcConfigGridFromVm);

}

