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

export module NewBatchPage {
    export class NewBatchPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class NewBatchPageReact extends basewedPageFile.Web.BaseWebPageReact<NewBatchPageProps, NewBatchPageStates, NewBatchPageAction> implements domCore.IReact {

        public state = new NewBatchPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="YSm-modals">
                <h4 className="YSu-modal-title">套餐选择</h4>
                <div className="YSm-modal-body clearfix">
                    <div>
                        <div className="YSm-search">
                            <label className=" YSu-modal-label">检索</label>
                            <input type="text" className="Hg-width"/>
                        </div>
                        {this._initTable() }

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
                    {this._initTableHeader() }
                    {this._initTableBody() }
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

    export interface IReactNewBatchPageVm extends basewedPageFile.Web.BaseWebPageVm {

    }

    export interface INewBatchPageConfig {


    }
    export class NewBatchPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactNewBatchPageVm {
        public ReactType = NewBatchPageReact;

        public constructor(config?: INewBatchPageConfig) {
            super();

        }
        private init(config: INewBatchPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class NewBatchPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class NewBatchPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactNewBatchPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("NewBatchPage", basewedPageFile.Web.BaseWebPageVm, NewBatchPageVm);

}

