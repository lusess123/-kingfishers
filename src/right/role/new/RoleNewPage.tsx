


import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import iocFile = require("./../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import roleRowFile = require("./RoleInsertRow");
import dataFile = require("./../Data");

export module Role {
    export class RoleNewPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class RoleNewPageReact extends basewedPageFile.Web.BaseWebPageReact<RoleNewPageProps, RoleNewPageStates, RoleNewPageAction> implements domCore.IReact {

        public state = new RoleNewPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals">
                <div>{this.props.Vm.RowList.map((l) => {
                  return  l.intoDom();
                }) }</div>
                <div className="text-center"><span className="btn btn-sm btn-primary" onClick={() => { this.fun_submitBtn();}} >提交</span></div>
                   </div>;
        }

          private fun_submitBtn() {
          this.props.Vm.submit();
        }

    }
    export interface IMainPageConfig {
        RoleConfig: roleRowFile.RoleInsertRow.IRolePageConfig;
    }
    export class RoleNewPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = RoleNewPageReact;
        public RowList: roleRowFile.RoleInsertRow.RoleInsertRowVm[] = [];
        constructor() {
            super();
            this.RowList.push(new roleRowFile.RoleInsertRow.RoleInsertRowVm());
        }
        public Title: string = "新增角色";

        protected loadPage(callback?: () => any) {
            //var _keys = this.Param1;
            //if (_keys == undefined || _keys == "")
            //{
            //    _keys = "1";
            //}
           var  _keys = "1";
            urlFile.Core.AkPost("/RightCloud/Group/getGroup", { fids: _keys }, (data) => {
                var _data = data.Data;
                if (_data) {
                    this.RowList = [];
                    _data.forEach((r, index) => {

                        var _row: roleRowFile.RoleInsertRow.RoleInsertRowVm = new roleRowFile.RoleInsertRow.RoleInsertRowVm();
                        var newrow = { FControlUnitID: r.GroupID, FControlUnitName: r.GroupName} 
                        _row.RowData = newrow;
                        this.RowList.push(_row);
                        _row.init();

                    });
                    callback();
                }
            });
        }
         public submit(){
            var postData=[];
            var roleInsertRow=this.RowList[0];
            var rowData = roleInsertRow.RowData;
            rowData.FControlUnitID = roleInsertRow.OrgSelector.vmDataValueGet(); 
            postData.push(rowData);
            var strData=JSON.stringify(postData);
            //alert(strData);
            var _isSuccess = roleInsertRow.legal();
            if (_isSuccess) {
                urlFile.Core.AkPost("/RightCloud/Role/newRole",
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
                            utilFile.Core.Util.Noty("数据新增失败");
                        }


                    });
            }
        }

    }
    export class RoleNewPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class RoleNewPageProps extends basewedPageFile.Web.BaseWebPageProps<RoleNewPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("ROLENEW", basewedPageFile.Web.BaseWebPageVm, RoleNewPageVm);

}

