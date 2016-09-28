import domFile = require("./../../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");

import menuUpdateRowFile = require("./MenuUpdateRow");
import menuDataFile = require("./../Data");

export module MenuUpdatePage {
    export class MenuUpdatePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class MenuUpdatePageReact extends basewedPageFile.Web.BaseWebPageReact<MenuUpdatePageProps, MenuUpdatePageStates, MenuUpdatePageAction> implements domCore.IReact {

        public state = new MenuUpdatePageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals">
                <div className="Hc-modals-list">
                    {this.props.Vm.MenuRowList.map((row, i) => {
                        row.Index = i ;
                        return row.intoDom();
                    }) }
                </div>
                <div className="text-center"><span className="btn btn-sm btn-primary" onClick={() => { this.fun_submitBtn(); } } >提交</span></div>
            </div>;
        }

        private fun_submitBtn() {
            this.props.Vm.submit();
        }




    }

    export interface IMenuUpdatePageConfig
    {
        MenuRowConfigList: menuUpdateRowFile.MenuUpdateRow.IMenuUpdateRowConfig[];
    }

    export class MenuUpdatePageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = MenuUpdatePageReact;
        public MenuRowList: menuUpdateRowFile.MenuUpdateRow.MenuUpdateRowVm[] = [];

        public Title: string = "编辑菜单";




        private init(config?: IMenuUpdatePageConfig)
        {
            config.MenuRowConfigList.forEach((r,l) => {
               // this.MenuRowList.push(new );
                var _row = new menuUpdateRowFile.MenuUpdateRow.MenuUpdateRowVm(r);
                _row.Index = l;
                this.MenuRowList.push(_row);

            });
        }

        public constructor(config: IMenuUpdatePageConfig)
        {
            super();
            if (config) {
                this.init(config);
            }
        }

        protected loadPage(callback?: () => any) {

            var _keys = this.Param1;
            urlFile.Core.AkPost("/RightCloud/Menu/getMenuDetail", { fids: _keys }, (data) => {
                var _data: menuDataFile.Menu.IMenuDetailData[] = data.Data;
                if (_data) {
                    
                    this.MenuRowList = [];
                    var _config: IMenuUpdatePageConfig = { MenuRowConfigList:[]};
                    _config.MenuRowConfigList = _data.map((r, index) => {
                        if (!r.MenuButtonList) r.MenuButtonList = [];
                       return (
                           {
                               MenuButtonRowConfigList: (r.MenuButtonList.map((bt) => {
                                   return {
                                       ButtonData: {
                                           FID: bt.FID,
                                           FName: bt.FName,
                                           FKey: bt.FKey,
                                           FValue: bt.FValue,
                                           OrderId: bt.OrderId,
                                           ParentRightValue : bt.ParentRightValue
                                       }
                                   };
                                                        })),
                               MenuMasterConfig: {
                                   MenuData:
                                   {
                                       FID: r.FID,
                                       MenuName: r.MenuName,
                                       ParentId: r.ParentId,
                                       ParentName: r.ParentName,
                                       MenuKindId: r.MenuKindId,
                                       MenuKindName: r.MenuKindName,
                                       Key: r.Key,
                                       OrderId: r.OrderId,
                                       RightDesc:r.RightDesc
                                       
                                   }
                               }
                           });
                        

                        
                    });

                    this.init(_config);

                    callback();
                }

            });
        }

        public legal(): boolean {
            var _isRes: boolean = true;
            this.MenuRowList.forEach((row) => {
                if (!row.legal()) {
                    _isRes = false;
                }
            });
            return _isRes;

        }

        public submit() {
            if (this.legal()) {
                var dt = this.getData();
                if (dt) {
                    var str = JSON.stringify(dt);
                  //  alert(str);
                    urlFile.Core.AkPost("/RightCloud/Menu/updateMenu", { menus: str }, (a) => {
                        if (a.Content == "ok") {
                            var _list: string[] = a.Data;
                            if (_list.length > 0) {
                                var _strs: string = _list.join(",");
                                utilFile.Core.Util.Noty("数据编辑成功");
                                urlFile.Core.AkUrl.Current().openUrl(
                                    "$menuPage$" + _strs + "$",
                                    false,
                                    () => {
                                        urlFile.Core.AkUrl.Current().openUrl("$panelmenudetail$" + _strs + "$", true);
                                    }
                                );
                                
                            }
                            else
                            {
                                utilFile.Core.Util.Noty("数据未更新");
                            }
                        }
                        else {
                            utilFile.Core.Util.Noty("数据编辑失败");
                        }
                    });
                }
                else
                {
                    utilFile.Core.Util.Noty("没有可提交的数据");
                }
            }
        }

        public getData(): any {
            var _ds = [];
            this.MenuRowList.forEach((row) => {
                var _o = row.getData();
                if (!utilFile.Core.Util.IsPure(_o)) {
                    _ds.push(_o);
                }
            });
            if (_ds.length == 0)
            {
                return null; 
            }
            //alert(JSON.stringify(_ds));
            return _ds;
        }

        public postUpdateData(menus: menuDataFile.Menu.IMenuDetailData[]) {
            if (menus.length > 0) {
                var _str: string = JSON.stringify(menus);
                urlFile.Core.AkPost("/RightCloud/Menu/updateMenu", { menus: _str }, (d) => {
                    alert(JSON.stringify(d));
                });
            }
        }


    }
    export class MenuUpdatePageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class MenuUpdatePageProps extends basewedPageFile.Web.BaseWebPageProps<MenuUpdatePageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("MENUUPDATE", basewedPageFile.Web.BaseWebPageVm, MenuUpdatePageVm);

}

