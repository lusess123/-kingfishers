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

import row = require("./DBPageRowDom");
export module DBPageGirdForm {
    export class DBPageGirdFormAction extends domCore.DomAction {
    }

    export class DBPageGirdFormReact extends domCore.DomReact<DBPageGirdFormProps, DBPageGirdFormStates, DBPageGirdFormAction> implements domCore.IReact {

        public state = new DBPageGirdFormStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <table className="table table-hover">
                    {this._initThead() }
                    {this._initTbody() }
                </table>
                {this.initSubmit() }
            </div>;
        }

        private _initThead(): React.ReactElement<any> {
            return <thead>
                <tr>
                    <th></th>
                    <th><ESpan children={null} Vm={new ESpanVm({ Content: "名称" }) }></ESpan></th>
                    <th><ESpan children={null} Vm={new ESpanVm({ Content: "数据库连接字符串" }) }></ESpan></th>
                    <th><i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_addRow() } }></i></th>
                </tr>
            </thead>;
        }

        private _initTbody(): React.ReactElement<any> {
            return <tbody>
                {this.props.Vm.RowList.map((a) => {
                    return a.intoDom();
                })
                }
            </tbody>

        }

        public initSubmit(): React.ReactElement<any> {
            return <div className="text-center">
                <a className="btn btn-primary btn-sm"  onClick={() => { this.props.Vm.submitClick() } }>保存</a>
            </div>
        }

        public fun_addRow() {
            this.props.Vm.fun_addRow();
        }


        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

    }
    export interface IReactDBPageGirdFormVm extends domCore.DomVm {
        Data: Array<ConfigData.ConfigData.DBSubmit>;
        RowList: Array<row.DBPageRowDom.DBPageRowDomVm>
        submitClick: Function;
        fun_addRow: Function;
    }

    export interface IDBPageGirdFormConfig {
        Data: Array<ConfigData.ConfigData.DBSubmit>;
        Unid?: string;
    }

    export class DBPageGirdFormVm extends domCore.DomVm   {
        public ReactType = DBPageGirdFormReact;

        public Data: Array<ConfigData.ConfigData.DBSubmit> = [];

        public RowList: Array< row.DBPageRowDom.DBPageRowDomVm> = [];
        public Row: row.DBPageRowDom.DBPageRowDomVm;
        public Items = [];


        public constructor(config?: IDBPageGirdFormConfig) {
            super();

            if (config.Unid) {
                this.UniId = config.Unid;
            }
            if (config.Data) {
                this.Data = config.Data;
                this.Data.forEach((a, number) => {
                    this.init(a, number);
                });
            }
            this.listenAppEvent("app/SDK/Config/DB/RowDelete", this.UniId, (text: String) => {
                if (confirm("确定要删除吗？")) {
                    this.Data.forEach((a, number) => {
                        if (a.Name == text) {
                            this.Data.splice(number, 1);
                        }
                    })

                    this.RowList.forEach((a, number) => {
                        if (a.Data.Name == text) {
                            this.RowList.splice(number, 1);
                        }
                    })

                    this.IsMulit = true;
                    this.RowList.forEach((a) => { a.IsChange = true; })
                    this.forceUpdate("");
                }
            });
        }

        public init(a: ConfigData.ConfigData.DBSubmit, number: number) {
           var b = a.ConnectionString.trim();
            var array = b.split(';');
            //把分割好的字符串进行二次分割并合并成数组
            for (var i = 0; i < 4; i++) {
                var arrayItem = array[i].split('=');
                var model;
                if (arrayItem[0] == "Data Source") {
                    model = { DataSource: arrayItem[1] };
                }
                if (arrayItem[0] == "Initial Catalog") {
                    model = { InitialCatalog: arrayItem[1] };            
                }
                if (arrayItem[0] == "User ID") {
                    model = { UserID: arrayItem[1] };
                }
                if (arrayItem[0] == "Pwd") {
                    model = { PassWord: arrayItem[1] };
                }        
                this.Items.push(model);
            }
            var rowConfig: row.DBPageRowDom.IDBPageRowDomConfig = { Data: a, Item: this.Items, Number: number, Unid: this.UniId };
            this.Row = new row.DBPageRowDom.DBPageRowDomVm(rowConfig);
            this.RowList.push(this.Row);

        }


        public submitClick() {
            var ListSubmitData = [];
            this.Data.forEach((a, number) => {
                var connstr = this.getConnectionString(number);
                var submitData: ConfigData.ConfigData.DBSubmit = {
                    Name: a.Name, IsDefault: a.IsDefault, ConnectionString: connstr
                };
                ListSubmitData.push(submitData);
            })
            var isdefault = [];
            ListSubmitData.forEach((a) => {
                if (a.IsDefault == true) {
                    isdefault.push(a.IsDefault);
                }             
            });
            var Submit = {}
            if (isdefault.length == 1) {
                urlFile.Core.AkPost("/Dev/DB/SaveDBXml", { submit: JSON.stringify(ListSubmitData) }, (a) => {
                    if (a) {
                        utilFile.Core.Util.ToggleLoading(true);
                        urlFile.Core.AkUrl.Current().refresh();
                        alert("保存成功！")
                    }
                })
            } else {
                alert("只能选择一个默认连接！");
            }

        }

        public getConnectionString(number: number) {
            var connstr = "";
            var b = this.Items;
            connstr = "Data Source=" + this.Items[number*4].DataSource + ";" + "Initial Catalog=" + this.Items[number*4 + 1].InitialCatalog + ";" + "User ID=" + this.Items[number*4 + 2].UserID + ";" + "Pwd=" + this.Items[number*4 + 3].PassWord + ";";
            return connstr;
        }

        public fun_addRow() {
            var a = "请输入...";
            var b = "Data Source=请输入...;Initial Catalog=请输入...;User ID=请输入...;Pwd=请输入...;";
            var c = false;
            var empreydata: ConfigData.ConfigData.DBSubmit = {
                Name: a, IsDefault: c, ConnectionString: b, RegName: a
            }
            this.Data.push(empreydata);
            this.init(empreydata, this.Data.length-1);
            this.IsMulit = true;
            this.forceUpdate("");
        }              
    }

    export class DBPageGirdFormStates extends domCore.DomStates {
    }


    export class DBPageGirdFormProps extends domCore.DomProps<IReactDBPageGirdFormVm>{
    }



}


