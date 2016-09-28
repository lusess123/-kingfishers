import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");

import insertRowFile = require("./UsersInsertRowDom");

export module UsersInsertPage {
    export class UsersInsertPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class UsersInsertPageReact extends basewedPageFile.Web.BaseWebPageReact<UsersInsertPageProps, UsersInsertPageStates, UsersInsertPageAction> implements domCore.IReact {

        public state = new UsersInsertPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals"><h4>{this.props.Vm.Title}</h4>
                <div>{this.props.Vm.InsertRowList.map((row) => {
                    return row.intoDom();
                }) }</div>
                <div className="text-center"><span className="btn btn-xs btn-primary" onClick={() => { this.fun_submitBtn(); } } >提交</span></div>
            </div>;
        }



        public fun_submitBtn() {
            this.props.Vm.submit();
        }


    }
    export interface UsersInsertPageConfig {


    }
    export class UsersInsertPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = UsersInsertPageReact;
        public InsertRowList: insertRowFile.UsersInsertRowDom.UsersInsertRowDomVm[] = [];
        public constructor(config?: UsersInsertPageConfig) {
            super();
            this.Title = "新增用户";
            var insertRow = new insertRowFile.UsersInsertRowDom.UsersInsertRowDomVm();
            this.InsertRowList.push(insertRow);
        }

        private init(config: UsersInsertPageConfig) {
        }

        public submit() {
            var postData = [];
            var masterRow = this.InsertRowList[0].MasterRow;
            var resultcommonData = masterRow.RowData;
            postData.push(resultcommonData);
            var jsonData = JSON.stringify(postData);
            var _isSuccess = masterRow.legal();
            if (_isSuccess) {
                urlFile.Core.AkPost("/MedicalCenter/Users/AddUsers", {
                    user: jsonData
                }, (a) => {
                    if (a.Content == "ok") {
                        var _list: string[] = a.Data;

                        urlFile.Core.AkUrl.Current().openUrl("$userlistpage$", false);
                    } else {

                        utilFile.Core.Util.Noty("数据新增失败");
                    }

                });
            }
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class UsersInsertPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class UsersInsertPageProps extends basewedPageFile.Web.BaseWebPageProps<UsersInsertPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("USERSINSERTPAGE", basewedPageFile.Web.BaseWebPageVm, UsersInsertPageVm);

}
