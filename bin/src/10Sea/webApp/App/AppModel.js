var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseModel"], function (require, exports, akmerFile) {
    "use strict";
    var AppModel = (function (_super) {
        __extends(AppModel, _super);
        function AppModel() {
            _super.apply(this, arguments);
            this.LayOutName = "TTT";
            this.SignUrl = "";
            this.ModeName = "Default";
            this.Param1 = "";
            this.Param2 = "List";
            this.Param3 = "";
            this.History = [];
            this.MenuData = null;
            this.CurrentMenuKey = "";
            this.IsRouteEvent = false;
            this.AppListData = {};
            this.PagerObj = null;
            this.Xml = "";
            this.PageStyle = "";
            this.Ds = null;
            this.ParamObj = null;
            this.UrlObj = null;
            this.WinObj = null;
            this.getMenuByKey = function (key) {
                if (!key)
                    return null;
                function _fun(menuData) {
                    if (menuData) {
                        if ((menuData.CODE_VALUE && menuData.CODE_VALUE.toUpperCase() &&
                            menuData.CODE_VALUE === key.toUpperCase())
                            ||
                                (menuData.ExtData && menuData.ExtData.RightValue && menuData.ExtData.RightValue.toUpperCase() === key.toUpperCase())) {
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
            this.getUserScreenMode = function (callBack) {
                $.AKjs.getJSON("/Right/Users/GetUserScreenMode", {}, callBack);
            };
            this.getMenuData = function (callBack) {
                $.AKjs.getJSON("/right/Menu/GetAllTree?regname=MenuTreeCodeTable", {}, callBack);
            };
            this.PageHelp = function (_fun, _LocationUrl) {
                $.AKjs.getJSON("/SNS/PageHelp/returnmenu", { url: _LocationUrl }, _fun);
            };
        }
        AppModel.prototype.updateUserScreenMode = function (a) {
            // $.AKjs.getJSON("/Right/Users/SetUserScreenMode", { screenMode: a });
        };
        ;
        return AppModel;
    }(akmerFile.AkBaseModel));
    exports.AppModel = AppModel;
});
