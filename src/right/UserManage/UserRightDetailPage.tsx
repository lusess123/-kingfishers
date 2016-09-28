import domFile = require("./../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../01core/Ioc");
 
   
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc"); 
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");

import treeFile = require("./../../02col/03selector/TreeSelector");
import baseTreeFile = require("./../../02col/03selector/BaseTree");


export module UserRightDetailPage {
    export class UserRightDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class UserRightDetailPageReact extends basewedPageFile.Web.BaseWebPageReact<UserRightDetailPageProps, UserRightDetailPageStates, UserRightDetailPageAction> implements domCore.IReact {
        public state = new UserRightDetailPageStates();

        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals"><h4>查看角色权限</h4>
                <div>
                    {this.initRightTree() }
                </div>
                <div className="text-center"><span className="btn btn-sm btn-primary" onClick={() => { this.rightPage() } } >分配权限</span>
                </div>
            </div>;
        }

        public rightPage() {
            urlFile.Core.AkUrl.Current().openUrl("$panelrolegrant$" + this.props.Vm.Param1 + "$", true);
        }
        private initRightTree(): React.ReactElement<any> {
            var treeVm = this.props.Vm.RightTree = new baseTreeFile.ui.BaseTreeVm();
            treeVm.Tree.IsMultiSelect = true;
            treeVm.RegName = "RoleTreeCodeTable" + "-" + this.props.Vm.UserRightIds;
            //var newArr = [];
            //this.props.Vm.UserRight.forEach((id) => {
            //    newArr.push("\"" + id + "\"");
            //});
            //treeVm.dataValueSet(newArr.join(","));

            if (this.props.Vm.UserRightIds) {
                return treeVm.intoDom();
            } else {
                return <div>用户无权限</div>
            }
            
        };
    }

    export interface IUserRightDetailPageConfig { }

    export class UserRightDetailPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = UserRightDetailPageReact;

        public RightTree: baseTreeFile.ui.BaseTreeVm;
        public UserRightIds: string;
        public UserRight: Array<string>;
        protected loadPage(callback?: () => any) {
            //改成User
            urlFile.Core.AkPost("/RightCloud/User/GetUserRole", { userid: this.Param1 }, (a) => {
                this.UserRightIds = a.Data;
                alert(this.UserRightIds);

                if (callback) {
                    callback();
                }
                //urlFile.Core.AkPost("/RightCloud/Role/GetRoleRightsList", { roleid: this.UserRightIds }, (b) => {
                //    this.UserRight = b.Data;
                //    alert(this.UserRight);
                   
                //});
            });
        }

        public constructor(config: IUserRightDetailPageConfig) {
            super();
        }
    }

    export class UserRightDetailPageStates extends basewedPageFile.Web.BaseWebPageStates { }

    export class UserRightDetailPageProps extends basewedPageFile.Web.BaseWebPageProps<UserRightDetailPageVm> { }

    iocFile.Core.Ioc.Current().RegisterType("USERRIGHTDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, UserRightDetailPageVm);
}