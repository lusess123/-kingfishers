import domFile = require("./../../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");

import groupUpdateRowFile = require("./GroupUpdateRow");
import groupDataFile = require("./../Data");

export module GroupUpdatePage {
    export class GroupUpdatePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class MenuUpdatePageReact extends basewedPageFile.Web.BaseWebPageReact<GroupUpdatePageProps, GroupUpdatePageStates, GroupUpdatePageAction> implements domCore.IReact {

        public state = new GroupUpdatePageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals">
                <div className="Hc-modals-list">
                    {this.props.Vm.GroupRowList.map((row) => {return row.intoDom();})}
                </div>
                <div className="text-center"><span className="btn btn-sm btn-primary" onClick={() => { this.fun_submitBtn(); } } >提交</span></div>
                </div>;
        }

        private fun_submitBtn() {
            this.props.Vm.submit();
        }

    }
    export class GroupUpdatePageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = MenuUpdatePageReact;
        public GroupRowList: groupUpdateRowFile.GroupUpdateRow.GroupUpdateRowVm[] = [];

        public Title: string = "编辑组织机构";
        constructor() {
            super();
            this.GroupRowList.push(new groupUpdateRowFile.GroupUpdateRow.GroupUpdateRowVm());
        }
        public submit() {
            var postData = [];
            var _isAllSuccess = true;
            for (var i = 0; i < this.GroupRowList.length; i++)
            {
                var groupInsertRow = this.GroupRowList[i].GroupMasterObj;
                var groupData = groupInsertRow.GroupData;
                groupData.GroupID = groupInsertRow.FID.dataValueGet();
                groupData.FParentFID = groupInsertRow.ParentSelector.vmDataValueGet();
                groupData.GroupName = groupInsertRow.GroupNameTextVm.vmDataValueGet();
                postData.push(groupData);
                var _isAllSuccess = groupInsertRow.legal();
                if (_isAllSuccess == false)
                {
                    _isAllSuccess = false;
                }
            }
            //var groupInsertRow = this.GroupRowList[0].GroupMasterObj;
            //var groupData = groupInsertRow.GroupData;
            //groupData.GroupID = groupInsertRow.FID.dataValueGet();
            //groupData.FParentFID = groupInsertRow.ParentSelector.vmDataValueGet();
            ////groupData.GroupCode = groupInsertRow.GroupCodeTextVm.vmDataValueGet();
            //groupData.GroupName = groupInsertRow.GroupNameTextVm.vmDataValueGet();
            //postData.push(groupData);
            //var groups = JSON.stringify(postData);
            //   var _isSuccess = groupInsertRow.legal();

            var strData = JSON.stringify(postData);
            if (_isAllSuccess) {
                urlFile.Core.AkPost("/RightCloud/Group/Updata",
                    {
                        group: strData
                    },
                    (a) => {
                        if (a.Content == "ok") {
                            var _list: string[] = a.Data;
                            var _strs: string = _list.join(",");
                            urlFile.Core.AkUrl.Current().openUrl("$wingroupdetail$" + _strs + "$", true);
                            urlFile.Core.AkUrl.Current().openUrl("$group$" + _strs + "$", false);
                            utilFile.Core.Util.Noty("数据修改成功");
                        }
                        else {
                            utilFile.Core.Util.Noty("数据修改失败");
                        }
                    });
            }
        }

        protected loadPage(callback?: () => any) {
            var _keys = this.Param1;
            urlFile.Core.AkPost("/RightCloud/Group/getGroupDetail", { fids: _keys }, (data) => {
                var _data: groupDataFile.Group.IGroupDetailData[] = data.Data;
                if (_data) {
                    this.GroupRowList = [];
                    _data.forEach((r, index) => {
                        var _row: groupUpdateRowFile.GroupUpdateRow.GroupUpdateRowVm = new groupUpdateRowFile.GroupUpdateRow.GroupUpdateRowVm();
                        _row.GroupData = r;
                        _row.GroupMasterObj.GroupData = r;
                        //_row.GroupMasterObj.GroupData.GroupID = _keys;
                        //_row.GroupData.GroupID = _keys;
                        _row.Index = index;
                        if (index == 0) {
                            _row.IsMasterHide = false;
                        } else {
                            _row.IsMasterHide = true;
                        }
                         index == 0 ? _row.IsMasterHide = false : _row.IsDetailHide = true;
                         this.GroupRowList.push(_row);
                         _row.GroupMasterObj.init();

                    });
                    callback();
                }

            });
        }

    }
    export class GroupUpdatePageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class GroupUpdatePageProps extends basewedPageFile.Web.BaseWebPageProps<GroupUpdatePageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("GROUPUPDATE", basewedPageFile.Web.BaseWebPageVm, GroupUpdatePageVm);

}

