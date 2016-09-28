import domFile = require("./../../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import rowDomFile = require("./RowDom");
import menuDataFile = require("./../Data");
export module MenuDetailPage {
    export class MenuDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class MenuDetailPageReact extends basewedPageFile.Web.BaseWebPageReact<MenuDetailPageProps, MenuDetailPageStates, MenuDetailPageAction> implements domCore.IReact {

        public state = new MenuDetailPageStates();
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
    export class MenuDetailPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = MenuDetailPageReact;
        public RowList: rowDomFile.Row.RowVm[] = [];
        public Title: string = "菜单详情";
        
        protected loadPage(callback?: () => any) {

            var _keys = this.Param1;
            urlFile.Core.AkPost("/RightCloud/Menu/getMenuDetail", { fids: _keys }, (data) => {
                var _data: menuDataFile.Menu.IMenuDetailData[] = data.Data;
                if (_data) {
                    this.RowList = [];
                    _data.forEach((r, index) => {
                        this.Title = this.Title + "-" + r.MenuName;
                        var _row: rowDomFile.Row.RowVm = new rowDomFile.Row.RowVm();


                        _row.MasterDomObj.Data = r;
                        _row.Index = index;
                        index == 0 ? _row.IsItemFormHide = false : _row.IsItemFormHide = true;

                        if (r.MenuButtonList) {
                            _row.MenuButtonList = r.MenuButtonList;
                        }

                        this.RowList.push(_row);
                    });
                    callback();
                }

            });
        }

    }
    export class MenuDetailPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class MenuDetailPageProps extends basewedPageFile.Web.BaseWebPageProps<MenuDetailPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("menudetail", basewedPageFile.Web.BaseWebPageVm, MenuDetailPageVm);

}

