import domFile = require("./../../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import rowDomFile = require("./RowDom");
import groupDataFile = require("./../Data");

export module GroupDetailPage {
    export class GroupDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class GroupDetailPageReact extends basewedPageFile.Web.BaseWebPageReact<GroupDetailPageProps, GroupDetailPageStates, GroupDetailPageAction> implements domCore.IReact {

        public state = new GroupDetailPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals">
                        <div className="Hg-overflow-auto">{this.props.Vm.RowList.map((_row) => {return _row.intoDom();})}</div>
                    </div>;
        }
    }
    export class GroupDetailPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = GroupDetailPageReact;
        public RowList: rowDomFile.Row.RowVm[] = [];
        public Title: string = "组织机构详情";

        private fun_grantRight() {
            urlFile.Core.AkUrl.Current().openUrl("$panelGROUPGRANT$" + this.Param1 + "$");
        }

        protected loadPage(callback?: () => any) {
            var _keys = this.Param1;
            urlFile.Core.AkPost("/RightCloud/Group/getGroupDetail", { fids: _keys }, (data) => {
                var _data: groupDataFile.Group.IGroupDetailData[] = data.Data;
                if (_data) {
                    this.RowList = [];
                    _data.forEach((r, index) => {
                        var _row: rowDomFile.Row.RowVm = new rowDomFile.Row.RowVm(
                            {
                                GroupRightDetail:{
                                    RightTree: {
                                        RegName: "RightByOrgIdCodeTable-" + r.GroupID,
                                        NullReactFun: (vm) => {
                                            return <div>该组织未分配权限</div>;
                                        }
                                    }
                                   
                                }
                            }
                        );
                        _row.MasterDomObj.Data = r;
                        _row.Index = index;
                        index == 0 ? _row.IsItemFormHide = false : _row.IsItemFormHide = true;
                        this.RowList.push(_row);
                    });
                    callback();
                }

            });
        }

    }
    export class GroupDetailPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class GroupDetailPageProps extends basewedPageFile.Web.BaseWebPageProps<GroupDetailPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("groupdetail", basewedPageFile.Web.BaseWebPageVm, GroupDetailPageVm);

}

