define(["require", "exports", "./../01core/Ioc", "./../01core/Util", "./../04page/BaseWebPage", "react-dom"], function (require, exports, iocFile, utilFile, baseWedPage, ReactDOM) {
    "use strict";
    iocFile;
    utilFile;
    var Reus = (function () {
        function Reus() {
        }
        Reus.OpenWinPage = function (config) {
            $.AKjs.AppGet().openUrl("$windefault$" + (config.xml).substring(0, config.xml.indexOf('.xml')) + "$" + config.pageStyle + "$" + config.ids.join(","));
        };
        Reus.maker = function ($dom, name, p1, p2, p3) {
            iocFile.Core.Ioc.Current().FetchAsyInstance(name, baseWedPage.Web.BaseWebPageVm, function (_page) {
                if (_page) {
                    _page.Reset(p1, p2, p3);
                    _page.IsChange = true;
                    _page.ModuleName = name;
                    var isPanel = false;
                    _page.sysPage_load(function (a) {
                        if ($dom.length > 0) {
                            ReactDOM.render(_page.intoDom(), $dom[0], function () {
                                if (a)
                                    a();
                                var _app = $.AKjs.AppGet();
                                if (_app) {
                                    _app.LayOut.layOutTransFormPage("TTV");
                                }
                            });
                        }
                    });
                }
                else {
                    alert("不存在 " + name + " 的WebPage 页面");
                }
            }, function (a) {
                alert(a + "错误");
            });
        };
        return Reus;
    }());
    exports.Reus = Reus;
});
