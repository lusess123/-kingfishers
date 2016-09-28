import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import insertRowFile = require("./MemberInsertRowDom");


export module MemberInsertPage {
    export class MemberInsertPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class MemberInsertPageReact extends basewedPageFile.Web.BaseWebPageReact<MemberInsertPageProps, MemberInsertPageStates, MemberInsertPageAction> implements domCore.IReact {

        public state = new MemberInsertPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals"><h4>{this.props.Vm.Title}</h4>
                <div>{this.props.Vm.InsertRowList.map((row) => {
                    return row.intoDom();
                }) }</div>
                <div className="text-center"><span className="btn btn-xs btn-primary" onClick={() => { this.fun_submitBtn(); } } >提交</span></div>
            </div>
        }

        private fun_submitBtn() {
            this.props.Vm.submit();
        }

    }

     

    export interface IMemberInsertPageConfig {

       }

    export class MemberInsertPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = MemberInsertPageReact;
        public InsertRowList: insertRowFile.MemberInsertRowDom.MemberInsertRowDomVm[] = [];

        public constructor(config?: IMemberInsertPageConfig) {
            super();
            this.Title = "新增会员";
            var insertRow = new insertRowFile.MemberInsertRowDom.MemberInsertRowDomVm();
            this.InsertRowList.push(insertRow);
        }

        private init(config: IMemberInsertPageConfig) {
        }

        public submit() {
            var postData = [];
            var masterRow = this.InsertRowList[0].MasterRow;
            var resultcommonData = masterRow.RowData;
            postData.push(resultcommonData);
            var jsonData = JSON.stringify(postData);
            var _isSuccess = masterRow.legal();
            if (_isSuccess) {
                urlFile.Core.AkPost("/MedicalCenter/Member/AddMembers",
                    {
                        members: jsonData
                    },
                    (a) => {
                        if (a.Content == "ok") {
                            var _list: string[] = a.Data;
                            //var _strs: string = _list.join(",");
                            //urlFile.Core.AkUrl.Current().openUrl(
                            //    "$panelMemberdetailpage$" + _strs + "$",
                            //    true,
                            //    () => {
                            //        urlFile.Core.AkUrl.Current().openUrl("$Memberlistpage$" + _strs + "$", false);
                            //    }
                            //);
                            urlFile.Core.AkUrl.Current().openUrl("$Memberlistpage$", false);
                        }
                        else {
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
    export class MemberInsertPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class MemberInsertPageProps extends basewedPageFile.Web.BaseWebPageProps<MemberInsertPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("MemberINSERTPAGE", basewedPageFile.Web.BaseWebPageVm, MemberInsertPageVm);

}
