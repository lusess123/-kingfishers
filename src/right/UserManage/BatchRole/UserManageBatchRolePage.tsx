import domFile = require("./../../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import usermanageDataFile = require("./../Data");
import selecotrFile = require("./../../../02col/03selector/selector");

export module UserManageBatchRolePage {

    export class UserManageBatchRolePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class UserManageBatchRolePageReact extends basewedPageFile.Web.BaseWebPageReact<UserManageBatchRolePageProps, UserManageBatchRolePageeStates, UserManageBatchRolePageAction> implements domCore.IReact {

        public state = new UserManageBatchRolePageeStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals">

                <div className="clearfix">
                    <div className="col-lg-12 col-sm-12 Hu-dashed-line">
                        <div className="Hu-label"><label for="right-label">角色：</label></div>
                        <div className="Hu-input">{this.props.Vm.RoleSelector.intoDom() }</div>
                    </div>

                    <div className="text-center"><span className="btn btn-sm btn-primary" onClick={() => { this.fun_submitBtn(); } } >提交</span></div>
                </div>

            </div>;
        }

        private fun_submitBtn()
        {
            this.props.Vm.fun_submitBtn(this.props.Vm.RoleSelector.dataValueGet());
        }


    }



    export class UserManageBatchRolePageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = UserManageBatchRolePageReact;
        public RoleSelector: selecotrFile.ui.SelectorVm;
        public UserIds: string;
        public FControlUnitID: string;
        public Title: string = "用户角色批量设置";

        constructor() {
            super();
            this.RoleSelector = new selecotrFile.ui.SelectorVm;
            this.RoleSelector.RegName = "RoleCodeTable";
            this.Param2;
            var fcontrolid = this.FControlUnitID;
            var _this = this;
            this.RoleSelector.OnPostDataSetFun = function (ds) {
                var _rows = ds["DromsTable"] = [];
                var _id = _this.FControlUnitID;//这个要靠前台返回
                if (_id == "" || _id == null) {
                    _id = "-1";
                }
                var _row = { FControlUnitID: _id };
                _rows.push(_row);
                return ds;
            }
        }

        public fun_submitBtn(val:string)
        {
            urlFile.Core.AkPost("/RightCloud/User/AddUserRoleBA", { fids: this.UserIds, rolid: val}, (data) => {
                if (data.Content == "ok")
                {
                    urlFile.Core.AkUrl.Current().openUrl("$winUserManagerPage$", true);
                }
            })
        }


        protected loadPage(callback?: () => any) {
            this.UserIds = this.Param1
            this.FControlUnitID = this.Param2;
            callback();
        }
    }


    export class UserManageBatchRolePageeStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class UserManageBatchRolePageProps extends basewedPageFile.Web.BaseWebPageProps<UserManageBatchRolePageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("UserManagBatchRole", basewedPageFile.Web.BaseWebPageVm, UserManageBatchRolePageVm);

}

