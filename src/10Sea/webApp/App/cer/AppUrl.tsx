
import appFile = require("./../AppController");

export class AppUrl {

    public App: appFile.AppController = null;
    public IsAppFist: boolean = false;
    public constructor(app: appFile.AppController) {
        this.App = app;
    }
    //--------------

    public setUrlAnchor(anchor: string) {
        if (!anchor) return;

        location.hash = anchor;
        //alert();
        this.pushHistory(anchor);
    };

    public getUrl() {
        //--------
        this.App.getM().All$url = $["url"];
        this.App.getM().SignUrl = this.App.getM().All$url.attr("anchor");
    };

    public urlOpen() {
        // this.hideNavi();
        this.routeUrl(this.App.getM().SignUrl);

    };

    public openHasChangeUrl(newUrl, openFun, isRoutBt) {
        var _sign = newUrl.charAt(0);
        if (_sign == "#") {
            var _url = newUrl.substring(1);
            this.openUrl(_url, openFun, isRoutBt);
        }
    };

    public openUrl = function (newUrl, openFun?, isRoutBt?: boolean) {
        var _sign = newUrl.charAt(0);
        if (_sign == "/") {
            window.location = newUrl;
            return false;
        }
        else {
            if (_sign == "$") {
                this.App.M.SignUrl = newUrl;
                // this.hideNavi();
                this.routeUrl(newUrl, isRoutBt);
                // this.LoadStyle = 1;
                //                    if (!isRoutBt) {
                //                        this.SetHistoryInfo();
                //                    }
            }
        }
    }

    public routeUrl(newUrl, isRoutBt?: boolean) {
        if (typeof (isRoutBt == undefined)) {
            isRoutBt = false;
        }
        if (!newUrl || newUrl == "" || newUrl.indexOf("$") !== 0)
            newUrl = "$CenterInfo$MyWork";
        //if (newUrl.indexOf("$") !== 0) return;

        var _mode, _pageStyle, xml, param3;
        var _pams = newUrl.split("$");
        var _mode = _pams[1]; //= "module/workflow/myWork";
        if (_mode == "" || _mode == null)
            _mode = "default";

        if (_pams.length >= 3) {
            xml = _pams[2]; //= "List";
            if (xml == "" || xml == null) {
                // xml = "List";
            }
        }
        if (_pams.length >= 4) {
            _pageStyle = _pams[3];; //= "List";
            if (_pageStyle == "" || _pageStyle == null) {
                //  _pageStyle = "List";
            }
        }
        if (_pams.length >= 5) {
            param3 = _pams[4];; //= "List";
        }

        this.App.getM().ModeName = _mode;
        this.App.getM().Param1 = xml;
        this.App.getM().Param2 = _pageStyle;
        // ? _pageStyle : "List";
        this.App.getM().Param3 = param3;
        var _isCancle = false;
        if (_mode.length > 3) {
            var _sign = _mode.substring(0, 3).toUpperCase();
            //alert(_sign);
            if (_sign == "WIN" || _sign == "MEN") {
                _isCancle = true;
            }
        }
        // else {
        // alert(123);
        // this.App.M.IsRouteEvent = true;
        if (!_isCancle && !isRoutBt) {
            //alert("设置菜单");
            this.App.getM().IsRouteEvent = true;
            this.setUrlAnchor(newUrl);
        }
        // }

        // this.App.M.IsRouteEvent = true;
        this.App.exeCommand();
        // alert(1);
        // this.App.M.IsRouteEvent = false;

    };

    public pushHistory(anchor: string) {
        //--------
        if (!anchor) return;
        var hisLenth = this.App.getM().History.length;
        if (hisLenth == 0 || this.App.getM().History[hisLenth - 1] !== anchor) {
            this.App.getM().History.push(anchor);
            if (hisLenth > 0) {
                // var $back = this.$PinNavi.find(".icon-reply").parent().removeAttr("style");
            }
        }
    };
    public backHistory() {
        if (this.App.getM().History.length < 2) return;
        this.App.getM().History.pop();
        var anchor = this.App.getM().History[this.App.getM().History.length - 1];
        this.openUrl(anchor);
        this.SetHistoryInfo();
        //return this.App.M.History.length;
    };

    public SetHistoryInfo() {
        var _len = this.App.getM().History.length;
        this.App.getR().toggleHistoryBack(_len < 2);

    };



    public formartPageState(pagestyle, param) {
        var pageState: any = {}
        pageState.ds = {};
        if (pagestyle && param) {
            pagestyle = pagestyle.toUpperCase();

            param = $.parseJSON(window["Base64"].decode(param));

            if (param.afterPageFun) {
                pageState.afterPageFun = param.afterPageFun;
            }
            if (param.additionData) {
                pageState.additionData = param.additionData;
            }
            switch (pagestyle) {
                case "INSERT":
                    if (param.keys) {
                        var keys = param.keys.split(",");
                        pageState.ds["_KEY"] = [{ "KeyValue": keys[0] }];
                    }
                    break;
                case "UPDATE":
                case "DETAIL":
                    if (param.keys) {
                        var keys = param.keys.split(",");
                        pageState.ds["_KEY"] = [];
                        for (var i = 0; i < keys.length; i++) {
                            pageState.ds["_KEY"].push({ "KeyValue": keys[i] });
                        }
                    }
                    break;
                default:
                    if (param.tablename && (param.navi || param.search)) {
                        pageState.ds[param.tablename + "_SEARCH"] = [$.extend({}, param.navi, param.search)];
                    }
                    if (param && param.page) {
                        pageState.ds["PAGER"] = [param.page];
                    }
                    if (param && param.formType) {
                        pageState.formType = param.formType;
                    }
                    break;
            }
        }
        return pageState;
    };
}