import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import detailRowFile = require("./MemberDetailRowDom");
import dataFile = require("./../Data");

export module MemberDetailPage {
    export class MemberDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class MemberDetailPageReact extends basewedPageFile.Web.BaseWebPageReact<MemberDetailPageProps, MemberDetailPageStates, MemberDetailPageAction> implements domCore.IReact {

        public state = new MemberDetailPageStates();
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

    export interface IMemberDetailPageConfig {

        RowConfigList: detailRowFile.MemberDetailRowDom.IMemberDetailRowDomConfig[];
    }

    export class MemberDetailPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = MemberDetailPageReact;
        public RowList: detailRowFile.MemberDetailRowDom.MemberDetailRowDomVm[] = [];

        public constructor(config?: IMemberDetailPageConfig) {
            super();
            this.Title = "会员详细信息";
            if (config) {
                this.init(config);
            }

        }

        private init(config: IMemberDetailPageConfig) {
            config.RowConfigList.forEach((row, index) => {
                var _row = new detailRowFile.MemberDetailRowDom.MemberDetailRowDomVm(row);
                _row.Index = index;
                this.RowList.push(_row);
            });
        }

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/MedicalCenter/Member/FetchMembersList", { fids: this.Param1 }, (a) => {
                if (a) {
                    var rowConfigList = [];
                    a.Data.map((data, index) => {
                        var masterData: dataFile.Member.IMemberData = data;
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
    export class MemberDetailPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class MemberDetailPageProps extends basewedPageFile.Web.BaseWebPageProps<MemberDetailPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("MemberDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, MemberDetailPageVm);

}
