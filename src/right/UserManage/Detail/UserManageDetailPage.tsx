import domFile = require("./../../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import rowDomFile = require("./RoleDom");
import usermanageDataFile = require("./../Data");

export module UserManageDetailPage {

    export class UserManageDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class UserManageDetailPageReact extends basewedPageFile.Web.BaseWebPageReact<UserManageDetailPageProps, UserManageDetailPageStates, UserManageDetailPageAction> implements domCore.IReact {

        public state = new UserManageDetailPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals">

                <div className="Hc-modals-list">
                    {this.props.Vm.RowList.map((_row) => {
                        return _row.intoDom();
                    })
                    }
                </div>

            </div>;
        }






    }
    export class UserManageDetailPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = UserManageDetailPageReact;
        public RowList: rowDomFile.Row.RowVm[] = [];
        public Title: string = "用户信息";
        protected loadPage(callback?: () => any) {

            var _keys = this.Param1;
            urlFile.Core.AkPost("/RightCloud/user/getUser", { fids: _keys }, (data) => {
                var _data: usermanageDataFile.UserManager.UserManagerDetail[] = data.Data;
                if (_data) {
                    this.RowList = [];
                    _data.forEach((r, index) => {
                        var _row: rowDomFile.Row.RowVm = new rowDomFile.Row.RowVm();
                        _row.MasterDomObj.Data = r;
                        _row.RoleList = r.RoleNames;
                        _row.Index = index;
                        index == 0 ? _row.IsItemFormHide = false : _row.IsItemFormHide = true;
                        this.RowList.push(_row);
                    });
                    callback();
                }

            });
        }

    }
    export class UserManageDetailPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class UserManageDetailPageProps extends basewedPageFile.Web.BaseWebPageProps<UserManageDetailPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("usermanagedetail", basewedPageFile.Web.BaseWebPageVm, UserManageDetailPageVm);

}

