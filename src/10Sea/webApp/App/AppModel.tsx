
import akmerFile = require("./../../core/mcrv/AkBaseModel");
export class AppModel extends   akmerFile.AkBaseModel
{
     public LayOutName = "TTT";

  public SignUrl = "";
  public All$url: any;

 public ModeName = "Default";
  public Param1 = "";
  public Param2 = "List";
  public Param3 = "";

 public History = [];

 public MenuData = null;
 public CurrentMenuKey = "";
 public IsRouteEvent = false;

 public AppListData = {};
 public PagerObj = null;

 public Xml = "";
 public PageStyle = "";
 public Ds = null;
 public ParamObj = null;
 public UrlObj = null;
 public WinObj = null;

 public FirstUrl: boolean;

 public getMenuByKey = function (key:string) {
    if (!key) return null;
    function _fun(menuData) {
        if (menuData) {
            if ((menuData.CODE_VALUE && menuData.CODE_VALUE.toUpperCase()&&
                menuData.CODE_VALUE === key.toUpperCase())
                ||
                (menuData.ExtData && menuData.ExtData.RightValue && menuData.ExtData.RightValue.toUpperCase() === key.toUpperCase())
            )
            {
                return menuData;
            }
            for (var i = 0; i < menuData.Children.length; i++) {
                var returnMenuData = _fun(menuData.Children[i]);
                if (returnMenuData) {
                    return returnMenuData;
                }
            }
        }
    }
    return _fun(this.MenuData);

};

public updateUserScreenMode  (a) {
    // $.AKjs.getJSON("/Right/Users/SetUserScreenMode", { screenMode: a });
};

 public getUserScreenMode = function (callBack:Function) {
    $.AKjs.getJSON("/Right/Users/GetUserScreenMode", {}, callBack);
};
 public getMenuData = function (callBack:Function) {
    $.AKjs.getJSON("/right/Menu/GetAllTree?regname=MenuTreeCodeTable", {}, callBack);
};

public  PageHelp = function (_fun, _LocationUrl) {
    $.AKjs.getJSON("/SNS/PageHelp/returnmenu", { url: _LocationUrl }, _fun);
};



}