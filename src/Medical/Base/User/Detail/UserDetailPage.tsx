import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");

import dataFile = require("./../Data");
import detailRowFile = require("./UserDetailRowDom");

export module UserDetailPage {
    export class UserDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class XXXReact extends basewedPageFile.Web.BaseWebPageReact<UserDetailPageProps, UserDetailPageStates, UserDetailPageAction> implements domCore.IReact {

        public state = new UserDetailPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals">
                <h4>{this.props.Vm.Title}</h4>
                <div>
                    {this.props.Vm.RowList.map((_row) => {
                        return _row.intoDom();
                    })
                    }
                </div>

            </div>;
        }
    }
    export interface UserDetailPageConfig {

        RowConfigList: detailRowFile.UserDetailRowDom.UserDetailRowDomConfig[];
    }
    export class UserDetailPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = XXXReact;
        public RowList: detailRowFile.UserDetailRowDom.UserDetailRowDomVm[] = [];

        public constructor(config?: UserDetailPageConfig) {
            super();
            this.Title = "用户详细信息"
            if (config) {
                this.init(config);
            }
        }

        private init(config: UserDetailPageConfig) {
            config.RowConfigList.forEach((row, index) => {
                var _row = new detailRowFile.UserDetailRowDom.UserDetailRowDomVm(row)
                _row.Index = index;
                this.RowList.push(_row);
            });
        }

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/MedicalCenter/Users/FetchUsers", { fids: this.Param1 }, (a) => {
                if (a) {
                    var rowConfigList = [];
                    a.Data.map((data, index) => {
                        var masterData: dataFile.User.UserData = data;
                        var masterConfig = { RowData: masterData };
                        rowConfigList.push({ MasterConfig: masterConfig})
                    });
                    var pageConfig = {
                        RowConfigList: rowConfigList
                    }
                    this.init(pageConfig);

                }
                if (callback) {
                    callback();
                }
            })
        }

    }
    export class UserDetailPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class UserDetailPageProps extends basewedPageFile.Web.BaseWebPageProps<UserDetailPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("USERDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, UserDetailPageVm);

}
