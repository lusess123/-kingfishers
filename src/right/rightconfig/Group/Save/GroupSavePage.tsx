import domFile = require("./../../../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../../01core/Ioc");
 
   
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
//import iocFile = require("./../01core/Ioc"); 
//import treeFile = require("./../../../02col/03selector/TreeSelector");
//import baseTreeFile = require("./../../../02col/03selector/BaseTree");

import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
//import dataFile = require("./Data");
import EditSpanFile = require("./../../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
import dataFile = require("./../Data");

export module GroupSavePage {
    export class GroupSavePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }


    export class GroupSavePageReact extends basewedPageFile.Web.BaseWebPageReact<GroupSavePageProps, GroupSavePageStates, GroupSavePageAction> implements domCore.IReact {
        public state = new GroupSavePageStates();

        

        public pSender(): React.ReactElement<any> {
            return <div className="acs-org-edit">
                <div className="acsLightGrayBg acsBoxShadow acs-org-title clearfix">
                    {this.props.Vm.OrgNameESObj.intoDom()}
                    <b>编码：{this.props.Vm.OrgCodeESObj.intoDom()}</b>
                    <a className="button tiny default" onClick={this.fun_submit()}>保存</a>
                    </div>
                </div>;
        }
        public fun_submit() {
            alert("dd");
            urlFile.Core.AkPost("/RightCloud/RightConfig/GroupSubmit", { GroupName: "", GroupKey:""}, (data) => {

            })
        }

    }

    export class GroupSavePageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = GroupSavePageReact;
        public OrgNameESObj: EditSpanFile.EditSpan.EditSpanVm = new EditSpanFile.EditSpan.EditSpanVm();
        public OrgCodeESObj: EditSpanFile.EditSpan.EditSpanVm = new EditSpanFile.EditSpan.EditSpanVm();
        public GroupData: dataFile.GroupOrg.IGroupSavaData;
        public constructor() {
            super();

            this.OrgCodeESObj.ChangeEvent = (vm, ischange) => { alert(vm.Content) };
            this.OrgCodeESObj.ChangeEvent = (vm, ischage) => { alert(vm.Content) }
        }
        protected loadPage(callback?: () => any) {
            //var _keys = this.Param1;
            var _keys = "20160324111837400A2DCA6584B97D4C96A63E750A2CE969CA";
            urlFile.Core.AkPost("/RightCloud/Group/getGroupDetail", { fids: _keys}, (a) => {
                var _data: dataFile.GroupOrg.IGroupSavaData = a.Data;
                if (_data) {
                    this.OrgNameESObj.Content = _data[0].GroupName;
                    this.OrgCodeESObj.Content = _data[0].GroupCode;
                }
                super.loadPage(callback);
            });
        }
        
        public submit() {
            var postData = [];
            var groupDataName = this.GroupData[0].GroupName=this.OrgNameESObj.Content;
            var groupDataCode = this.GroupData[0].GroupCode=this.OrgCodeESObj.Content;
            postData.push(groupDataName);
            postData.push(groupDataCode);
            var groups = JSON.stringify(postData);
            //var _isSucccees = this.legal();
            //if (_isSucccees) {
                urlFile.Core.AkPost("/RightCloud/Group/Updata",
                    {
                        group: groups
                    },
                    (a) => {
                        if (a.Content == "ok") {
                            //var _list: string[] = a.Data;
                            //var _strs: string = _list.join(",");
                            //urlFile.Core.AkUrl.Current().openUrl("$wingroupdetail$" + _strs + "$", true);
                            //urlFile.Core.AkUrl.Current().openUrl("$group$" + _strs + "$", false);
                            utilFile.Core.Util.Noty("数据修改成功");
                        }
                        else {
                            utilFile.Core.Util.Noty("数据修改失败");
                        }
                    }
                )
            //}
        }
        //public legal(): boolean {
            //var orgName = this.orgName.legal();
            //var orgCode = this.orgCode.legal();
            //var _res = orgCode && orgName;
            //return _res;
            //return;
        //}
    }
    //export interface GroupSaveData {
    //    GroupID: string;
    //    FParentFName: string;
    //    GroupName: string;
    //    GroupCode: string;
    //}
    export class GroupSavePageStates extends basewedPageFile.Web.BaseWebPageStates { }

    export class GroupSavePageProps extends basewedPageFile.Web.BaseWebPageProps<GroupSavePageVm> { }

    iocFile.Core.Ioc.Current().RegisterType("GROUPSAVE", basewedPageFile.Web.BaseWebPageVm, GroupSavePageVm);
}