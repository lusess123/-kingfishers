import domFile = require("./../../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import userRoleDomFile = require("./UserRoleDom");
import usermanageDataFile = require("./../Data")

export module UserManageUpdatePage {
    export class UserManageUpdatePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }


    export class UserManageUpdatePageReact extends basewedPageFile.Web.BaseWebPageReact<UserManageUpdatePageProps, UserManageUpdatePageStates, UserManageUpdatePageAction> implements domCore.IReact {

    

        public pSender(): React.ReactElement<any> {
            return <div className={"Hm-modals"}>
                <div className="Hc-modals-list">
                    {this.props.Vm.userManagerRowList.map((l) => {
                        return l.intoDom();
                    }) }
                </div>
                <div className="text-center"><span className="btn btn-sm btn-primary" onClick={() => { this.fun_submitBtn(); } } >提交</span></div>
                </div>;
        }

        private fun_submitBtn() {
            this.props.Vm.submit();
        }
    }

    export class UserManageUpdatePageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = UserManageUpdatePageReact;
        public userManagerRowList: userRoleDomFile.UserRoleDom.UserRoleDomVm[] = [];
        public isload = true;
        public Title: string = "编辑用户管理信息";


        //在这里初始化的时候 将请求发送过去 然后数据赋值到控件里面的数据
        constructor() {
            super();
            //要将请求发送出去
        }

        protected loadPage(callback?: () => any) {
            var _keys = this.Param1;
            urlFile.Core.AkPost("/RightCloud/user/getUser", { fids: _keys }, (data) => {

                var _data: usermanageDataFile.UserManager.UserManagerDetail[] = data.Data;
                if (_data) {
                    this.userManagerRowList = [];
                    _data.forEach((r, index) => {
                        var _row: userRoleDomFile.UserRoleDom.UserRoleDomVm = new userRoleDomFile.UserRoleDom.UserRoleDomVm();
                        _row.master.Data = r;
                        _row.master.Data.CreaterName = $(r.CreaterName).text();
                        _row.Index = index;
                        if (r.RoleNames) {
       
                            _row.RoleList = r.RoleNames;
                        }
                        _row.FControlUnitID = r.FControlUnitID;
                        index == 0 ? _row.IsItemFormHide = false : _row.IsItemFormHide = true;
                        this.userManagerRowList.push(_row);
                        _row.initData();
                    });
                    callback();
                }
            });

        }

        public submit() {
            var postData = [];
            this.userManagerRowList.forEach((row) => {
                var userManagerData = row.master.Data;
                // var userroledata : usermanageDataFile.UserManager.userroleData[]=[];
                userManagerData.UserID = row.master.UserID.dataValueGet();//用户的字段
                userManagerData.NickName = row.master.UserNickName.vmDataValueGet();
                userManagerData.UserName = row.master.UserUserName.vmDataValueGet();
                userManagerData.Area = row.master.Area.vmDataValueGet();
                userManagerData.UserKindId = row.master.UserKind.vmDataValueGet();
                userManagerData.IsActive = row.master.isActive.dataValueGet() == "true" ? true : false;
                userManagerData.Remark = row.master.Remark.vmDataValueGet();//MEID
                userManagerData.MEID = row.master.MEID.dataValueGet();//MEID
                userManagerData.FControlUnitID = row.master.FControlUnitID.vmDataValueGet();

                //角色
                userManagerData.userRoles = [];
                row.RoleUserList.map((r) => {
                    if (r.ActionType == "remove" || r.ActionType == "add" || r.changeValue != r.originalValue) {
                        var data = new usermanageDataFile.UserManager.userroleData;
                        data.ActionType = r.ActionType;
                        data.changeValue = r.Role.dataValueGet();
                        data.originalValue = r.originalValue;
                        userManagerData.userRoles.push(data);
                    }
                })



                postData.push(userManagerData);
            })

            var userManagerData = JSON.stringify(postData);
            urlFile.Core.AkPost("/RightCloud/User/updateuser",
                {
                    users: userManagerData
                },
                (a) => {
                    if (a.Content == "ok") {
                        var _list: string[] = a.Data;
                        var _strs: string = _list.join(",");
                        urlFile.Core.AkUrl.Current().openUrl("$UserManagerPage$" + _strs + "$", true);
                        urlFile.Core.AkUrl.Current().openUrl("$UserManagerPage$" + _strs + "$", false);
                        utilFile.Core.Util.Noty("更新成功!");
                    }
                    else {
                        utilFile.Core.Util.Noty("数据更新失败");
                    }

                });
        }
    }

    export class UserManageUpdatePageStates extends basewedPageFile.Web.BaseWebPageStates {

    }



    export class UserManageUpdatePageProps extends basewedPageFile.Web.BaseWebPageProps<UserManageUpdatePageVm>{
    }

    iocFile.Core.Ioc.Current().RegisterType("UserManageUpdate", basewedPageFile.Web.BaseWebPageVm, UserManageUpdatePageVm);




}

