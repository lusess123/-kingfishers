define(["require", "exports"], function (require, exports) {
    "use strict";
    var AppMenu = (function () {
        function AppMenu(app) {
            this.App = null;
            this.App = app;
        }
        AppMenu.prototype.loadMenu = function (fun) {
            // alert(1);
            function _fun(res) {
                _this.App.getM().MenuData = res;
                _this.App.getR().bindMenu(res, fun);
            }
            ;
            this.App.getM().getMenuData(_fun);
            var _this = this;
        };
        ;
        AppMenu.prototype.gotoMenuLoction = function (key) {
            var menu = this.App.getM().getMenuByKey(key);
            if (!menu) {
                //alert(key + " 不存在");
                if (key == "$desk$") {
                    this.App.getR().avtiveDeskHeader();
                }
                menu = {
                    Arrange: "000", CODE_VALUE: "0"
                };
            }
            //-------
            this.App.getR().openMenu(menu);
            this.App.getM().CurrentMenuKey = menu.CODE_VALUE;
        };
        return AppMenu;
    }());
    exports.AppMenu = AppMenu;
});
