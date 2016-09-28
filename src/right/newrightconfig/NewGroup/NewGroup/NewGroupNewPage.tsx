import domFile = require("./../../../../01core/0Dom"); import React = require("react");

import iocFile = require("./../../../../01core/Ioc");


import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import groupNewRowFile = require("./NewGroupNewRow");

export module Right {
    export class NewGroupNewPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class NewGroupNewPageReact extends basewedPageFile.Web.BaseWebPageReact<NewGroupNewPageProps, NewGroupNewPageStates, NewGroupNewPageAction> implements domCore.IReact {

        public state = new NewGroupNewPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals"><h4>新增组织机构</h4>
                <div>{this.props.Vm.GroupRowList.map((l) => {
                    return l.intoDom();
                }) }</div>
                <div className="text-center"><span className="btn btn-xs btn-primary" onClick={() => { this.fun_submitBtn(); } } >提交</span></div>
            </div>;
        }

        private fun_submitBtn() {
            this.props.Vm.submit();
        }

    }
    export class NewGroupNewPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = NewGroupNewPageReact;
        public GroupRowList: groupNewRowFile.NewGroupNewRow.NewGroupNewRowVm[] = [];

        constructor() {
            super();
            this.GroupRowList.push(new groupNewRowFile.NewGroupNewRow.NewGroupNewRowVm());
        }

        public submit() {
            var postData = [];
            var groupInsertRow = this.GroupRowList[0].GroupMasterObj;
            var groupData = groupInsertRow.GroupData;
            groupData.PID = groupInsertRow.ParentSelector.vmDataValueGet();
            groupData.RCG_Code = groupInsertRow.GroupCodeTextVm.vmDataValueGet();
            groupData.RCG_Name = groupInsertRow.GroupNameTextVm.vmDataValueGet();
            //groupData.ProductFIDs = groupInsertRow.GroupProductSelect.vmDataValueGet();
            postData.push(groupData);
            var groups = JSON.stringify(postData);
            var name = groupData.RCG_Name;
            var Code = groupData.RCG_Code;
            var PID = groupData.PID;
            var is = groupData
            var _res = true;
            // alert(menus);
            var _isSuccess = groupInsertRow.legal();
            if (_isSuccess) {
                
                //提交按钮
                urlFile.Core.AkPost("/RightCloud/NewRightConfig/Groupsubmit",
                    {
                        group: groups
                    },
                    (a) => {
                        if (a =="0") {
                            urlFile.Core.AkUrl.Current().openUrl("$NewRightMainPage$", true);
                            utilFile.Core.Util.Noty("数据新增成功");
                        } else if (a == "1") {
                            utilFile.Core.Util.Noty("机构名称已存在");
                        }
                        else if (a == "2") {
                            utilFile.Core.Util.Noty("机构编码已存在");
                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }
                        //if (a.Content == "ok") {
                        //    var _list: string[] = a.Data;
                        //    var _strs: string = _list.join(",");
                        //    urlFile.Core.AkUrl.Current().openUrl("$winroledetail$" + _strs + "$", true);
                        //    urlFile.Core.AkUrl.Current().openUrl("$group$" + _strs + "$", false);
                        //}
                        //else {
                        //    utilFile.Core.Util.Noty("数据新增失败");
                        //}
                    });
            }
        }

    }
    export class NewGroupNewPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class NewGroupNewPageProps extends basewedPageFile.Web.BaseWebPageProps<NewGroupNewPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("NewGroupNewPage", basewedPageFile.Web.BaseWebPageVm, NewGroupNewPageVm);

}

