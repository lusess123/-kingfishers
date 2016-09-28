import domFile = require("./../../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import menuNewRowFile = require("./MenuNewRow");
import dataFile = require("./../Data");

export module Right {
    export class MenuNewPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class MenuNewPageReact extends basewedPageFile.Web.BaseWebPageReact<MenuNewPageProps, MenuNewPageStates, MenuNewPageAction> implements domCore.IReact {

        public state = new MenuNewPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals">
                <div>{this.props.Vm.MenuRowList.map((l) => {
                  return  l.intoDom();
                }) }</div>
                <div className="text-center"><span className="btn btn-sm btn-primary" onClick={() => { this.fun_submitBtn();}} >提交</span></div>
                   </div>;
        }

          private fun_submitBtn() {
          this.props.Vm.submit();
        }

    }
    export class MenuNewPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = MenuNewPageReact;
        public MenuRowList: menuNewRowFile.MenuNewRow.MenuNewRowVm [] = [];

        constructor() {
            super();
            this.Title = "菜单新增";
            //this.MenuRowObj = new menuRowFile.MenuRow.MenuRowVm();
            //this.MenuRowObj.MenuDetaiObj = new menuDetailFile.MenuDetail.MenuDetailVm();
            this.MenuRowList.push(new menuNewRowFile.MenuNewRow.MenuNewRowVm());
            //this.MenuRowOList.push(new menuRowFile.MenuRow.MenuRowVm());
        }

         public submit(){
            var postData=[];
            var menuInsertRow=this.MenuRowList[0].MenuMasterObj;
            var menuData=menuInsertRow.MenuData;
            menuData.ParentId=menuInsertRow.ParentSelector.vmDataValueGet();
            menuData.MenuKindId=menuInsertRow.MenuTypeCombo.vmDataValueGet();
            menuData.MenuButtonList=[];
            menuInsertRow.MenuButtonRowList.forEach((btnRow)=>{
                 menuData.MenuButtonList.push(btnRow.ButtonData);
            });
            postData.push(menuData);
            var menus=JSON.stringify(postData);
           // alert(menus);
            var _isSuccess = menuInsertRow.legal();
            if (_isSuccess) {
                urlFile.Core.AkPost("/RightCloud/Menu/newMenu",
                    {
                        menus: menus
                    },
                    (a) => {
                        if (a.Content == "ok") {
                            var _list: string[] = a.Data;
                            var _strs: string = _list.join(",");
                            //urlFile.Core.AkUrl.Current().openUrl(
                            //    "$panelmenudetail$" + _strs + "$",
                            //    true,
                            //    () => {
                            //        urlFile.Core.AkUrl.Current().openUrl("$menu$" + _strs + "$", false);
                            //    }
                            //);
                            
                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }


                    });
            }
        }

         protected loadPage(callback?: () => any) {
             var _keys = this.Param1;
             urlFile.Core.AkPost("/RightCloud/Menu/getParentMenuDetail", { fids: _keys }, (data) => {
                 var _data: dataFile.Menu.IParentsMenuData = data.Data;
                 var _row: menuNewRowFile.MenuNewRow.MenuNewRowVm = new menuNewRowFile.MenuNewRow.MenuNewRowVm();
                 this.MenuRowList.push(_row);
                 _row.MenuMasterObj.initData(_data);

                 //_row.initData(_data);
             });
             callback();
         }

    }
    export class MenuNewPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class MenuNewPageProps extends basewedPageFile.Web.BaseWebPageProps<MenuNewPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("MENUNEW", basewedPageFile.Web.BaseWebPageVm, MenuNewPageVm);

}

