import domFile = require("./../../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import groupNewRowFile = require("./GroupNewRow");
import groupDataFile = require("./../Data");

export module Right {
    export class GroupNewPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class GroupNewPageReact extends basewedPageFile.Web.BaseWebPageReact<GroupNewPageProps, GroupNewPageStates, GroupNewPageAction> implements domCore.IReact {

        public state = new GroupNewPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals">
                <div>{this.props.Vm.GroupRowList.map((l) => {
                    return l.intoDom();
                }) }</div>
                <br/>
                <div className="text-center"><span className="btn btn-sm btn-primary" onClick={() => { this.fun_submitBtn(); } } >提交</span></div>
                </div>;
        }

        private fun_submitBtn() {
            this.props.Vm.submit();
        }

    }
    export class GroupNewPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = GroupNewPageReact;
        public GroupRowList: groupNewRowFile.GroupNewRow.GroupNewRowVm[] = [];

        public Title: string = "新增组织机构";

        constructor() {
            super();
            this.GroupRowList.push(new groupNewRowFile.GroupNewRow.GroupNewRowVm());
        }
        protected loadPage(callback?: () => any) {
            debugger
            var _keys = this.Param1;
            if (_keys == undefined || _keys == "")
            {
                _keys = "1";
            }
            urlFile.Core.AkPost("/RightCloud/Group/getGroup", { fids: _keys }, (data) => {
                var _data: groupDataFile.Group.IGroupDetailData[] = data.Data;
                if (_data) {
                    this.GroupRowList = [];
                    _data.forEach((r, index) => {
                        var _row: groupNewRowFile.GroupNewRow.GroupNewRowVm = new groupNewRowFile.GroupNewRow.GroupNewRowVm();
                        //_row.GroupMasterObj.GroupData.GroupID = _keys;
                        debugger
                        _row.GroupMasterObj.GroupData.FParentFName = r.GroupName;
                        this.GroupRowList.push(_row);
                        _row.GroupMasterObj.init();
                    });
                    callback();
                }
            });
        }

        public submit() {
            var postData = [];
            var groupInsertRow = this.GroupRowList[0].GroupMasterObj;
            var groupData = groupInsertRow.GroupData;
            groupData.FParentFID = groupInsertRow.ParentSelector.vmDataValueGet();
            //获取加载时得到的FParentFID
            if (groupData.FParentFID == "" || groupData.FParentFID == undefined) {
                groupData.FParentFID = this.Param1;
            }
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
                            //urlFile.Core.AkUrl.Current().openUrl("$GROUP$", false);
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


    iocFile.Core.Ioc.Current().RegisterType("GROUPNEW", basewedPageFile.Web.BaseWebPageVm, GroupNewPageVm);

}

