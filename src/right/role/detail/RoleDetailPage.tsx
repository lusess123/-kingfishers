import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import iocFile = require("./../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import rowDomFile = require("./RowDom");
import dataFile = require("./../Data");
export module Role {
    export class RoleDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class RoleDetailPageReact extends basewedPageFile.Web.BaseWebPageReact<RoleDetailPageProps, RoleDetailPageStates, RoleDetailPageAction> implements domCore.IReact {

        public state = new RoleDetailPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals">

                <div>
                    {this.props.Vm.RowList.map((_row) => {
                        return _row.intoDom();
                    })
                    }
                </div>

            </div>;
        }






    }
    export class RoleDetailPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = RoleDetailPageReact;
        public RowList: rowDomFile.Row.RowVm[] = [];
        public Title: string = "角色详情";

        protected loadPage(callback?: () => any) {

            var _keys = this.Param1;
            urlFile.Core.AkPost("/RightCloud/Role/getRole", { fids: _keys }, (data) => {
                var _data: dataFile.Role.IRoleData[] = data.Data;
                if (_data) {
                    this.RowList = [];
                    _data.forEach((r, index) => {

                        var _row: rowDomFile.Row.RowVm = new rowDomFile.Row.RowVm();

                        _row.Data = r;
                       // _row.MasterDomObj.Data = r;
                        _row.Index = index;
                        index == 0 ? _row.IsItemFormHide = false : _row.IsItemFormHide = true;

                        //if (r.MenuButtonList) {
                        //    _row.MenuButtonList = r.MenuButtonList;
                        //}

                        this.RowList.push(_row);
                    });
                    callback();
                }

            });
        }

    }
    export class RoleDetailPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class RoleDetailPageProps extends basewedPageFile.Web.BaseWebPageProps<RoleDetailPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("roledetail", basewedPageFile.Web.BaseWebPageVm, RoleDetailPageVm);

}

