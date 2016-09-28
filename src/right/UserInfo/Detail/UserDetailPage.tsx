import domFile = require("./../../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import rowDomFile = require("./RowDom");
import userDataFile = require("./../Data");
export module UserDetailPage {
    export class UserDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class UserDetailPageReact extends basewedPageFile.Web.BaseWebPageReact<UserDetailPageProps, UserDetailPageStates, UserDetailPageAction> implements domCore.IReact {

        public state = new UserDetailPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals">
                    <div className="Hg-overflow-auto Hc-modals-list">
                  {this.props.Vm.RowList.map((_row) => {
                      return _row.intoDom();
                  })
                  }
                      </div>

                </div>;
        }
    }
    export class UserDetailPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = UserDetailPageReact;
        public RowList: rowDomFile.Row.RowVm[] = [];

        public Title: string = "用户详情";
        protected loadPage(callback?: () => any) {

            var _keys = this.Param1;
            urlFile.Core.AkPost("/RightCloud/UserDetail/getUserDetail", { fids: _keys }, (data) => {
                var _data: userDataFile.UserInfo.IUserDetailData[] = data.Data;
                //var _data: userDataFile.Menu.IMenuDetailData[] = data.Data;
                if (_data) {
                    this.RowList = [];
                    _data.forEach((r, index) => {
                        var _row: rowDomFile.Row.RowVm = new rowDomFile.Row.RowVm();
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
    export class UserDetailPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class UserDetailPageProps extends basewedPageFile.Web.BaseWebPageProps<UserDetailPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("userdetail", basewedPageFile.Web.BaseWebPageVm, UserDetailPageVm);

}

