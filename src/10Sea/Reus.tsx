
import iocFile = require("./../01core/Ioc");
import utilFile = require("./../01core/Util");
iocFile; utilFile;
import baseWedPage = require("./../04page/BaseWebPage");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export interface IOpenPage {
    xml: string,
    pageStyle: string,
    ids: string[]
}

export class Reus {


    public static OpenWinPage(config: IOpenPage): void {
        $.AKjs.AppGet().openUrl("$windefault$" + (config.xml).substring(0, config.xml.indexOf('.xml')) + "$" + config.pageStyle + "$" + config.ids.join(","));
    }


    public static maker($dom: JQuery, name: string, p1: string, p2: string, p3: string) {
        iocFile.Core.Ioc.Current().FetchAsyInstance<baseWedPage.Web.BaseWebPageVm>(
            name,
            baseWedPage.Web.BaseWebPageVm,
            (_page: baseWedPage.Web.BaseWebPageVm) => {
                if (_page) {
                    _page.Reset(p1, p2, p3);
                    _page.IsChange = true;
                    _page.ModuleName = name;
                    var isPanel: boolean = false;
                    _page.sysPage_load((a?: Function) => {
                        if ($dom.length > 0) {
                            ReactDOM.render(_page.intoDom(), $dom[0], () => {
                                if (a) a();
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

            },
            (a) => {
                alert(a + "错误");
            });
    }



}