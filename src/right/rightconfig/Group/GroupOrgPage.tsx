import domFile = require("./../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../01core/Ioc");
 
   
import domCore = domFile.Core;

import utilFile = require("./../../../01core/Util");

//import utilFile = require("./../../01core/Util");

//import iocFile = require("./../01core/Ioc"); 
//import treeFile = require("./../../../02col/03selector/TreeSelector");
import toolTreeFile = require("./../../../05tool/Tree");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import dataFile = require("./Data");

export module GroupOrgPage {
    export class GroupOrgPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }


    export class GroupOrgPageReact extends basewedPageFile.Web.BaseWebPageReact<GroupOrgPageProps, GroupOrgPageStates, GroupOrgPageAction> implements domCore.IReact {
        public state = new GroupOrgPageStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                    {this.props.Vm.NaviTree.intoDom()}
                </div>;
        }
        
    }

    export class GroupOrgPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = GroupOrgPageReact;
        public NaviTree: toolTreeFile.ui.TreeVm;
        public RowList = new Array<dataFile.GroupOrg.IGroupOrgData>();
        public constructor() {
            super();
            this.NaviTree = new toolTreeFile.ui.TreeVm();
            this.NaviTree.NodeTplFun = (node) => {
                return [(
                    <span>{node.Text}
                        <span onClick={this.newOpt() }>+</span>
                        <span>X</span></span>
                )];
            }
        }
        //新增
        public newOpt() {
            var _str = this.getNaviGroupTreeFId();
            urlFile.Core.AkUrl.Current().openUrl("$wingrouporgnew$" + _str + "$", true);
        }
        public delOpt() {
            //var _list = this.getSelectValues();
            //var _ids = _list.map((n) => n.FID).join(",");
            var _ids = this.Id;
            if (confirm("你确定要删除 所选中的数据吗 ？？")) {

                urlFile.Core.AkPost("/RightCloud/Group/delGroup", { fids: _ids }, (data) => {
                    var _data = data.Data;
                    if (_data == "ok") {
                        //urlFile.Core.AkUrl
                        //this.loadPageData(0);
                        utilFile.Core.Util.Noty("数据删除成功");
                    }
                });

            }
        }
        protected loadPage(callback?: () => any) {
            var _TreeFID = this.getNaviGroupTreeFId();
            this.RowList = [];
            urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "GroupOrg.json" }, (a) =>  {
                var _data: dataFile.GroupOrg.IGroupOrgData = a.GroupData;
                this.RowList = [];
                this.NaviTree.initTreeVm(_data);
                if (callback) {
                    callback();
                }
            });
        }
        public getNaviGroupTreeFId(): string {
            var _str: any = this.NaviTree.dataValue();
            return _str;
        }
    }
    
    export class GroupOrgPageStates extends basewedPageFile.Web.BaseWebPageStates { }

    export class GroupOrgPageProps extends basewedPageFile.Web.BaseWebPageProps<GroupOrgPageVm> { }

    iocFile.Core.Ioc.Current().RegisterType("GROUPORG", basewedPageFile.Web.BaseWebPageVm, GroupOrgPageVm);
}