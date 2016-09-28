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

import RadioFile = require("./../../../../02col/01single/Radio");
import Radio = RadioFile.ui.RadioReact;
import RadioVm = RadioFile.ui.RadioVm;

import ComboFile = require("./../../../../02col/02Mulite/Combo");
import Combo = ComboFile.ui.ComboReact;
import ComboVm = ComboFile.ui.ComboVm;

import SingleCheckBoxFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import SingleCheckBox = SingleCheckBoxFile.ui.SingleCheckBoxReact;
import SingleCheckBoxVm = SingleCheckBoxFile.ui.SingleCheckBoxVm;

import data = require("./Data");

export module DBPage {
    export class DBPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class DBPageReact extends basewedPageFile.Web.BaseWebPageReact<DBPageProps, DBPageStates, DBPageAction> implements domCore.IReact {

        public state = new DBPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>          
                <div className="well"><h6 className="Hu-title Hs-fw ">基础设置</h6><span></span></div>     
                <table className="table table-hover">
                    {this._initThead() }

                    {this._initTbody() }
                </table>
                <div className="text-center"><a className="btn btn-primary btn-sm">保存</a></div>
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
                <tr>
                    <td><i className="fa fa-circle Hu-pointer"></i></td>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "New" }) }></ESpan></td>
                    <td>
                        Data Source=<ESpan children={null} Vm={new ESpanVm({ Content: "192.168.66.3" }) }></ESpan>;
                        Initial Catalog=<ESpan children={null} Vm={new ESpanVm({ Content: "Dev_Ataw_Ez_Office" }) }></ESpan>;
                        User ID=<ESpan children={null} Vm={new ESpanVm({ Content: "dev" }) }></ESpan>;
                        Pwd=<ESpan children={null} Vm={new ESpanVm({ Content: "dev" }) }></ESpan>;
                    </td>
                    <td><i className="fa fa-minus-circle Hu-pointer" ></i></td>
                </tr>
                <tr>
                    <td><i className="fa fa-circle-o Hu-pointer"></i></td>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "Invoicing" }) }></ESpan></td>
                    <td>
                        Data Source=<ESpan children={null} Vm={new ESpanVm({ Content: "192.168.66.5" }) }></ESpan>;
                        Initial Catalog=<ESpan children={null} Vm={new ESpanVm({ Content: "InvoicingTest" }) }></ESpan>;
                        User ID=<ESpan children={null} Vm={new ESpanVm({ Content: "sa" }) }></ESpan>;
                        Pwd=<ESpan children={null} Vm={new ESpanVm({ Content: "Testsql665" }) }></ESpan>;
                    </td>
                    <td><i className="fa fa-minus-circle Hu-pointer" ></i></td>
                </tr>
                <tr>
                    <td><i className="fa fa-circle-o Hu-pointer"></i></td>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "MedicalCenter" }) }></ESpan></td>
                    <td>
                        Data Source=<ESpan children={null} Vm={new ESpanVm({ Content: "192.168.66.3" }) }></ESpan>;
                        Initial Catalog=<ESpan children={null} Vm={new ESpanVm({ Content: "Dev_Ataw_MedicalCenter" }) }></ESpan>;
                        User ID=<ESpan children={null} Vm={new ESpanVm({ Content: "dev" }) }></ESpan>;
                        Pwd=<ESpan children={null} Vm={new ESpanVm({ Content: "dev" }) }></ESpan>;
                    </td>
                    <td><i className="fa fa-minus-circle Hu-pointer" ></i></td>
                </tr>
                <tr className={this.props.Vm.RowHidden ? " " :" hide"}>
                    <td><i className="fa fa-circle-o Hu-pointer"></i></td>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "请输入..." }) }></ESpan></td>
                    <td>
                        Data Source=<ESpan children={null} Vm={new ESpanVm({ Content: "请输入..." }) }></ESpan>;
                        Initial Catalog=<ESpan children={null} Vm={new ESpanVm({ Content: "请输入..." }) }></ESpan>;
                        User ID=<ESpan children={null} Vm={new ESpanVm({ Content: "请输入..." }) }></ESpan>;
                        Pwd=<ESpan children={null} Vm={new ESpanVm({ Content: "请输入..." }) }></ESpan>;
                    </td>
                    <td><i className="fa fa-minus-circle Hu-pointer" ></i></td>
                </tr>
                
            </tbody>;
        } 

        public fun_addRow() {
            this.props.Vm.RowHidden = !this.props.Vm.RowHidden;
            this.forceUpdate();
        }

    }

    export interface IReactDBPageVm extends basewedPageFile.Web.BaseWebPageVm {
         RowHidden: boolean;
    }

    export interface IDBPageConfig {


    }
    export class DBPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactDBPageVm {
        public ReactType = DBPageReact;
        public Title: string = "DBPage页面;";
        public RowHidden: boolean;

        public constructor(config?: IDBPageConfig) {
            super();
        }

        private init(config: IDBPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class DBPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class DBPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactDBPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("DBPAGE", basewedPageFile.Web.BaseWebPageVm, DBPageVm);

}
