import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import iocFile = require("./../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import RoleUpdateRowFile = require("./RoleUpdateRow");
import dataFile = require("./../Data");

export module RoleUpdatePage {
    export class RoleUpdatePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class RoleUpdatePageReact extends basewedPageFile.Web.BaseWebPageReact<RoleUpdatePageProps, RoleUpdatePageStates, RoleUpdatePageAction> implements domCore.IReact {

        public state = new RoleUpdatePageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals">
                <div>{this.props.Vm.RowList.map((l) => {
                    return l.intoDom();
                }) }</div>
                <div className="text-center"><span className="btn btn-sm btn-primary" onClick={() => { this.fun_submitBtn(); } } >提交</span></div>
            </div>;
        }
        private fun_submitBtn() {
            this.props.Vm.submit();
        }
    }
    export interface IRoleUpdatePageConfig {


    }
    export class RoleUpdatePageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = RoleUpdatePageReact;
        public RowList: RoleUpdateRowFile.RoleUpdateRow.RoleUpdateRowVm[] = [];

        public constructor(config: IRoleUpdatePageConfig) {
            super();
            this.RowList.push(new RoleUpdateRowFile.RoleUpdateRow.RoleUpdateRowVm());
        }
        public Title: string = "编辑角色";

        public submit() {
            var postData = [];
            var _isAllSuccess = true;
            for (var i = 0; i < this.RowList.length;i++)
            {
                var roleUpdateRow = this.RowList[i];
                var rowData = roleUpdateRow.RowData;
                rowData.FControlUnitID = roleUpdateRow.OrgSelector.vmDataValueGet();
                postData.push(rowData);
                //alert(strData);
                var _isSuccess = roleUpdateRow.legal();
                if (_isSuccess == false)
                {
                    _isAllSuccess = false;
                }
            }
            var strData = JSON.stringify(postData);
            if (_isAllSuccess) {
                urlFile.Core.AkPost("/RightCloud/Role/update",
                    {
                        roles: strData
                    },
                    (a) => {
                        if (a.Content == "ok") {
                            var _list: string[] = a.Data;
                            var _strs: string = _list.join(",");
                            urlFile.Core.AkUrl.Current().openUrl("$winroledetail$" + _strs + "$", true);
                            urlFile.Core.AkUrl.Current().openUrl("$role$" + _strs + "$", false);
                        }
                        else {
                            utilFile.Core.Util.Noty("数据修改失败！");
                        }


                    });
            }
        }
        protected loadPage(callback?: () => any) {

            var _keys = this.Param1;
            urlFile.Core.AkPost("/RightCloud/Role/getRole", { fids: _keys }, (data) => {
                var _data: dataFile.Role.IRoleData[] = data.Data;
                if (_data) {
                    this.RowList = [];
                    _data.forEach((r, index) => {

                        var _row: RoleUpdateRowFile.RoleUpdateRow.RoleUpdateRowVm = new RoleUpdateRowFile.RoleUpdateRow.RoleUpdateRowVm ();                        
                        _row.RowData = r;
                        _row.Index = index;
                        index == 0 ? _row.IsItemFormHide = false : _row.IsItemFormHide = true;
                        _row.Index = index;  
                        this.RowList.push(_row);
                        _row.init();

                    });
                    callback();
                }

            });
        }
    }
    export class RoleUpdatePageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class RoleUpdatePageProps extends basewedPageFile.Web.BaseWebPageProps<RoleUpdatePageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("ROLEUPDATE", basewedPageFile.Web.BaseWebPageVm, RoleUpdatePageVm);

}

