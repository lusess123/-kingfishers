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

export module PersonalNewPage {
    export class PersonalNewPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class PersonalNewPageReact extends basewedPageFile.Web.BaseWebPageReact<PersonalNewPageProps, PersonalNewPageStates, PersonalNewPageAction> implements domCore.IReact {

        public state = new PersonalNewPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="YSm-modals">
                <h4 className="YSu-modal-title">新增体检项</h4>
                <div className="YSm-modal-header clearfix">
                    <div className="pull-left"><div className="radio"><label><input type="radio" value=""/>套餐类型</label></div></div>
                    <div className="pull-left"><div className="radio"><label><input type="radio" value=""/>体检项目</label></div></div>
                </div>
                <div className="YSm-modal-body clearfix">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 YSm-modal-left">
                        <div className="YSm-search">
                            <label className=" YSu-modal-label">检索</label>
                            <input type="text" className="Hg-width"/>
                        </div>
                        {this._initTable() }

                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 YSm-modal-right">
                        <p className="YSu-title">已选择项目</p>
                        <ul className="nav">
                            <li className="nav-item"><a>血常规<i className="fa fa-close"></i></a></li>
                            <li className="nav-item"><a>内科<i className="fa fa-close"></i></a></li>
                            <li className="nav-item"><a>泌尿<i className="fa fa-close"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="YSm-modal-footer text-center">
                    <a className="btn btn-sm btn-secondary">取消</a>
                    <a className="btn btn-sm btn-primary">保存</a>
                </div>
            </div>;
        }


        public _initTable(): React.ReactElement<any> {
            return <div className="Hm-table table-responsive">
                <table className="table table-striped table-bordered table-hover">
                    {this._initTableHeader()}
                    {this._initTableBody()}
                </table>
            </div>;
        }

        public _initTableHeader(): React.ReactElement<any> {
            return <thead className="thead-default">
                <tr>
                    <th>选择</th>
                    <th>科室</th>
                    <th>项目</th>
                    <th>价格（元）</th>
                </tr>
            </thead>;
        }

        public _initTableBody(): React.ReactElement<any> {
            return <tbody>
                <tr>
                    <td></td>
                    <td>2B猴科</td>
                    <td>心、肝、舌、耳</td>
                    <td>108.00</td>
                </tr>
                <tr>
                    <td></td>
                    <td>2B猴科</td>
                    <td>心、肝、舌、耳</td>
                    <td>108.00</td>
                </tr>
                <tr>
                    <td></td>
                    <td>2B猴科</td>
                    <td>心、肝、舌、耳</td>
                    <td>108.00</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>;
        }

  
}
    export interface IReactPersonalNewPageVm extends basewedPageFile.Web.BaseWebPageVm {

    }

    export interface IPersonalNewPageConfig {


    }
    export class PersonalNewPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactPersonalNewPageVm {
        public ReactType = PersonalNewPageReact;

        public constructor(config?: IPersonalNewPageConfig) {
            super();

        }

        private init(config: IPersonalNewPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class PersonalNewPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class PersonalNewPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactPersonalNewPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("PERSONALNEWPAGE", basewedPageFile.Web.BaseWebPageVm, PersonalNewPageVm);

}
