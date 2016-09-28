import domFile = require("./../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import iocFile = require("./../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import treeFile = require("./../../02col/03selector/TreeSelector");
import baseTreeFile = require("./../../02col/03selector/BaseTree");

export module Role {
    export class RoleGrantPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class RoleGrantPageReact extends basewedPageFile.Web.BaseWebPageReact<RoleGrantPageProps, RoleGrantPageStates, RoleGrantPageAction> implements domCore.IReact {

        public state = new RoleGrantPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals"><h4>分配角色权限</h4>
                <div className="">
                    {this.initRightTree() }
                </div>
                <div className="text-center"><span className="btn btn-sm btn-primary" onClick={() => { this.fun_submitBtn(); } } >提交</span>
                </div>
            </div>;
        }

        private fun_submitBtn() {
            this.props.Vm.submit();
        }

        private fun_returnBtn() {
            //this.props.Vm.submit();
        }

        private initRightTree(): React.ReactElement<any> {
            var treeVm = this.props.Vm.RightTree = new baseTreeFile.ui.BaseTreeVm();
            treeVm.Tree.IsMultiSelect = true;
            treeVm.Tree.IsYesParent = true;
            treeVm.Tree.IsNoChild = true;

            treeVm.RegName = "RoleTreeCodeTable" + "-" + this.props.Vm.Param1;
            var newArr = [];
            this.props.Vm.RoleRightIds.forEach((id) => {
                newArr.push("\"" + id + "\"");
            });
            treeVm.dataValueSet(newArr.join(","));
            return treeVm.intoDom();

        };
    }




    export class RoleGrantPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = RoleGrantPageReact;
        public RightTree: baseTreeFile.ui.BaseTreeVm;
        public RoleRightIds: Array<string>;

        public constructor() {
            super();

        }

        protected loadPage(callback?: () => any) {

            urlFile.Core.AkPost("/RightCloud/Role/GetRoleRightsList", { roleid: this.Param1 }, (a) => {
                // var _data: menuDataFile.Menu.MenuPagerListData = a.Data;
                // this.getData(_data);var bToObj=JSON.parse(b);
                this.RoleRightIds = a.Data;
                if (callback) {
                    callback();
                }
            });
        }

        public submit() {
            var selectedVal = this.RightTree.vmDataValueGet();
            var rightIds = [];
            selectedVal.split(",").forEach((id) => {
                rightIds.push(id.replace(/\"/g, ""));
            });
            urlFile.Core.AkPost("/RightCloud/Role/RoleGrant",
                {
                    rightIds: rightIds.join(","),
                    roleId: this.Param1
                },
                (a) => {
                    if (a.Content == "ok") {
                        utilFile.Core.Util.Noty("分配成功");
                        urlFile.Core.AkUrl.Current().openUrl("$role$", false);
                    }
                    else {
                        utilFile.Core.Util.Noty("分配权限失败");
                    }


                });
        }
    }
    export class RoleGrantPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class RoleGrantPageProps extends basewedPageFile.Web.BaseWebPageProps<RoleGrantPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("ROLEGRANT", basewedPageFile.Web.BaseWebPageVm, RoleGrantPageVm);
}



