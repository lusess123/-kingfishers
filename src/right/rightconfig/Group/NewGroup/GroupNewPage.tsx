import domFile = require("./../../../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import groupNewRowFile = require("./GroupNewRow");

export module Right {
    export class GroupNewPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class GroupNewPageReact extends basewedPageFile.Web.BaseWebPageReact<GroupNewPageProps, GroupNewPageStates, GroupNewPageAction> implements domCore.IReact {

        public state = new GroupNewPageStates();
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
    export class GroupNewPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = GroupNewPageReact;
        public GroupRowList: groupNewRowFile.GroupNewRow.GroupNewRowVm[] = [];

        constructor() {
            super();
            this.GroupRowList.push(new groupNewRowFile.GroupNewRow.GroupNewRowVm());
        }

        public submit() {
            var postData = [];
            var groupInsertRow = this.GroupRowList[0].GroupMasterObj;
            var groupData = groupInsertRow.GroupData;
            groupData.FParentFID = groupInsertRow.ParentSelector.vmDataValueGet();
            groupData.GroupCode = groupInsertRow.GroupCodeTextVm.vmDataValueGet();
            groupData.GroupName = groupInsertRow.GroupNameTextVm.vmDataValueGet();
            //groupData.ProductFIDs = groupInsertRow.GroupProductSelect.vmDataValueGet();
            postData.push(groupData);
            var groups = JSON.stringify(postData);
            // alert(menus);
            var _isSuccess = groupInsertRow.legal();
            if (_isSuccess) {
                urlFile.Core.AkPost("/RightCloud/Group/newGroup",
                    {
                        group: groups
                    },
                    (a) => {
                        if (a.Content == "ok") {
                            var _list: string[] = a.Data;
                            var _strs: string = _list.join(",");
                            urlFile.Core.AkUrl.Current().openUrl("$wingroupdetail$" + _strs + "$", true);
                            urlFile.Core.AkUrl.Current().openUrl("$group$" + _strs + "$", false);
                            utilFile.Core.Util.Noty("数据新增成功");
                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }
                    });
            }
        }

    }
    export class GroupNewPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class GroupNewPageProps extends basewedPageFile.Web.BaseWebPageProps<GroupNewPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("GROUPORGNEW", basewedPageFile.Web.BaseWebPageVm, GroupNewPageVm);

}

