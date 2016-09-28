import domFile = require("./../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import iocFile = require("./../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import urlFile = require("./../../01core/Url");
import groupDataFile = require("./Data");
import basewedPageFile = require("./../../04page/BaseWebPage");
import treeFile = require("./../../02col/03selector/TreeSelector");
import baseTreeFile = require("./../../02col/03selector/BaseTree");
export module GroupGrantPage {
    export class GroupGrantPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class GroupGrantPageReact extends basewedPageFile.Web.BaseWebPageReact<GroupGrantPageProps, GroupGrantPageStates, GroupGrantPageAction> implements domCore.IReact {

        public state = new GroupGrantPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals"><h4>分配组织权限</h4>
                    {this.initRightTree() }
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
            var treeVm = this.props.Vm.RightTree = new baseTreeFile.ui.BaseTreeVm({ IsAllTree: true  });

            treeVm.Tree.IsMultiSelect = true;
            treeVm.Tree.IsYesParent = true;
            treeVm.Tree.IsYesChild = true;
            treeVm.Tree.IsNoChild = true;
            //treeVm.isa
            treeVm.RegName = "RightCloudGroupColdeTable";
            var newArr = [];
            this.props.Vm.GroupsRightIds.forEach((id) => {      
                newArr.push(id.RightID);
            });
            treeVm.dataValueSet(newArr.join(","));

            return treeVm.intoDom();

        };
    }




    export class GroupGrantPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = GroupGrantPageReact;
        public RightTree: baseTreeFile.ui.BaseTreeVm;
        public GroupsRightIds: Array<groupDataFile.Group.IGroupButtonData>;

        public constructor() {
            super();

        }

        protected loadPage(callback?: () => any) {
            //urlFile.Core.AkPost("/RightCloud/Group/InitRightsTree", null, (a) => {
            //    // var _data: menuDataFile.Menu.MenuPagerListData = a.Data;
            //    // this.getData(_data);
            //}); 

            urlFile.Core.AkPost("/RightCloud/Group/GetGroupRightTree", { fControlUnitID: this.Param1, onlyId: true }, (a) => {
                this.GroupsRightIds =a.Data.List;
                if (callback) {
                    callback();
                }
            })

            //还要将他原来的权限给拿过来  
        }

        public submit() {
            var selectedVal = this.RightTree.vmDataValueGet();
            //var rightIds = [];
            //selectedVal.split(",").forEach((id) => {
            //    rightIds.push(id.replace(/\"/g, ""));
            //});
           // alert(rightIds);
            urlFile.Core.AkPost("/RightCloud/Group/GroupGrant",
                {
                    rightIds: selectedVal.replace(/\"/g,"'"),
                    //权限的ID 传过去
                    groupIds: this.Param1
                },
                (a) => {
                    if (a.Data == "ok") {
                        utilFile.Core.Util.Noty("分配成功");
                        urlFile.Core.AkUrl.Current().openUrl("$panelGROUPRIGHTDETAILPAGE$" + this.Param1 + "$");
                    }
                    else {
                        utilFile.Core.Util.Noty("分配权限失败 " + a.Content);
                    }
                });
        }
    }
    export class GroupGrantPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class GroupGrantPageProps extends basewedPageFile.Web.BaseWebPageProps<GroupGrantPageVm>{
    }

    iocFile.Core.Ioc.Current().RegisterType("GROUPGRANT", basewedPageFile.Web.BaseWebPageVm, GroupGrantPageVm);
}


