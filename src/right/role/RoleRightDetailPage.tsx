import domFile = require("./../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import iocFile = require("./../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import treeFile = require("./../../02col/03selector/TreeSelector");
import baseTreeFile = require("./../../02col/03selector/BaseTree");

export module RoleRightDetailPage {
    export class RoleRightDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class RoleRightDetailPageReact extends basewedPageFile.Web.BaseWebPageReact<RoleRightDetailPageProps, RoleRightDetailPageStates, RoleRightDetailPageAction> implements domCore.IReact {

        public state = new RoleRightDetailPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="acs-modals-panel"><h4>查看角色权限</h4>
                <div>
                    {this.initRightTree() }
                </div>
            </div>;
        }
        //public rightPage() {
        //    urlFile.Core.AkUrl.Current().openUrl("$panelrolegrant$" + this.props.Vm.Param1 + "$", true);
        //}
        private initRightTree(): React.ReactElement<any> {
            var treeVm = this.props.Vm.RightTree = new baseTreeFile.ui.BaseTreeVm();
            treeVm.Tree.IsMultiSelect = true;
            treeVm.RegName = "RoleTreeCodeTable" + "-" + this.props.Vm.RoleRightIds;
            var newArr = [];
            //还要再发送一次请求 将Role中的权限带过来


            this.props.Vm.RoleRightIds.forEach((id) => {
                newArr.push("\"" + id + "\"");
            });
            //treeVm.dataValueSet(newArr.join(","));
            return treeVm.intoDom();

        };
    }
    export interface IRoleRightDetailPageConfig {


    }
    export class RoleRightDetailPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = RoleRightDetailPageReact;
        public RightTree: baseTreeFile.ui.BaseTreeVm;
        public RoleRightIds: Array<string>;

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/RightCloud/User/GetUserRole", { userid: this.Param1 }, (a) => {
                // var _data: menuDataFile.Menu.MenuPagerListData = a.Data;
                // this.getData(_data);var bToObj=JSON.parse(b);
                this.RoleRightIds = a.Data;
                alert(this.RoleRightIds);
                if (callback) {
                    callback();
                }
            });
        }
    }
    export class RoleRightDetailPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class RoleRightDetailPageProps extends basewedPageFile.Web.BaseWebPageProps<RoleRightDetailPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("ROLERIGHTDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, RoleRightDetailPageVm);

}

