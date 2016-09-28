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

import row = require("./MvcSettingRowDom");
export module MvcSettingGridFrom {
    export class MvcSettingGridFromAction extends domCore.DomAction {
    }

    export class MvcSettingGridFromReact extends domCore.DomReact<MvcSettingGridFromProps,
        MvcSettingGridFromStates, MvcSettingGridFromAction> implements domCore.IReact {

        public state = new MvcSettingGridFromStates();

        public pSender(): React.ReactElement<any> {
            return<div>
                <div className="text-center"><a className="btn btn-primary btn-sm"  onClick={() => { this.props.Vm.AddMvcSetting() } }>添加</a></div>
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
                    <th><span>路由配置名称</span></th>
                    <th><span>控制器名称</span></th>
                    <th><span>方法名称</span></th>
                    <th><span>Area名称</span></th>
                    <th><span>参数</span></th>
                    <th><span>命名空间</span></th>
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

    export interface IReactMvcSettingGridFromVm extends domCore.DomVm {
        Data: Array<ConfigData.ConfigData.DataRouteData>
        RowList: Array<row.MvcSettingRowDom.MvcSettingRowDomVm>
        AddMvcSetting: Function;
    }

    export interface IMvcSettingGridFromConfig {
        Routes:ConfigData.ConfigData.RoutesData;
        Data: Array<ConfigData.ConfigData.DataRouteData>;
        Unid?: string;
    }

    export class MvcSettingGridFromVm extends domCore.DomVm implements IReactMvcSettingGridFromVm {
        public ReactType = MvcSettingGridFromReact;
        public Data: Array<ConfigData.ConfigData.DataRouteData> = [];
        public RowList: Array<row.MvcSettingRowDom.MvcSettingRowDomVm> = [];
        public Row: row.MvcSettingRowDom.MvcSettingRowDomVm;
        public Routes:ConfigData.ConfigData.RoutesData
        public constructor(config?: IMvcSettingGridFromConfig) {
            super();

            if (config.Unid) {
                this.UniId = config.Unid;
            }
            if (config.Data) {
                this.Data = config.Data;
                this.Routes = config.Routes;
                this.Data.forEach((a) => {
                    var config: row.MvcSettingRowDom.IMvcSettingRowDomConfig = {Routes:this.Routes, Data: a,Unid: this.UniId }
                    this.Row = new row.MvcSettingRowDom.MvcSettingRowDomVm(config);
                    this.RowList.push(this.Row)
                })
            }

            this.listenAppEvent("app/SDK/Config/Mvc/RowDelete", this.UniId, (Text: String) => {
                if (confirm("确定要删除？")) {
                    this.Data.forEach((a, Name) => {
                        if (a.Name == Text) {
                            this.Data.splice(Name, 1);
                        }
                    })

                    this.RowList.forEach((a, Name) => {
                        if (a.Data.Name == Text) {
                            this.RowList.splice(Name, 1);
                        }
                    });


                    this.IsMulit = true;
                    this.RowList.forEach((a) => { a.IsChange = true; })
                    this.forceUpdate("");
                }
            });
        }

        public submitClick()    
        {
            var ListSubmitData = [];
            this.Data.forEach((a, number) => {                
                var submitData: ConfigData.ConfigData.MvcsettingSubmit = {
                    Name: a.Name, ControlName: a.ControlName, ActionName: a.ActionName, AreaName: a.AreaName, Param:
                    a.Param, NameSpace: a.NameSpace,IsUser:a.IsUser
              };
                ListSubmitData.push(submitData);
            })

            return ListSubmitData;
            
        }

        public AddMvcSetting() {
            var data: ConfigData.ConfigData.DataRouteData = { Name: "empty" + this.Data.length, ControlName: "empty" + this.Data.length, ActionName: "empty" + this.Data.length, AreaName: "empty" + this.Data.length, Param: "empty" + this.Data.length, NameSpace: "empty" + this.Data.length, IsUser: true };

            this.Data.push(data);

            var config: row.MvcSettingRowDom.IMvcSettingRowDomConfig = { Routes: this.Routes, Data: data, Unid: this.UniId }
            this.Row = new row.MvcSettingRowDom.MvcSettingRowDomVm(config);
            this.RowList.push(this.Row)

            this.IsMulit = true;
            this.RowList.forEach((a) => { a.IsChange = true; })
            this.forceUpdate("");
        }
    }

    export class MvcSettingGridFromStates extends domCore.DomStates {
    }


    export class MvcSettingGridFromProps extends domCore.DomProps<IReactMvcSettingGridFromVm>{
    }



}


