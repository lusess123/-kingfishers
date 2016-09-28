import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
import baseBoxMaker = require("./BaseColMaker");
import detailFile = require("./../../../02col/01single/Detail");

export module ui {

    export class DetailMaker extends baseBoxMaker.ui.BaseColMaker<detailFile.ui.DetailVm> {
        public maker() {
            var temp: any = this.BaseColVm;
            this.ColVm = temp;
            var tv = this.ColVm;
            var c = this.ColumnConfig;
            var _pageView = this.PageView;
            var res = "";
            var isRes = false;
            var _isTb = false;
            if (tv != null && c.Options.RegName) {
                _isTb = true;
                var _dt = _pageView.Data[c.Options.RegName];
                //_dt[this.Val]


                if (_dt) {
                    if (this.Val)
                    {
                        this.Val = this.Val.toString();
                    }
                    if (this.Val && this.Val.indexOf("\"") != -1) {
                        if (this.Val.indexOf(":") != -1) {
                            this.Val = this.Val.split(":")[0];
                        }
                        var _arr = this.Val.replace(/\"/g, "").split(',');
                        for (var i = 0; i < _arr.length; i++) {
                            _dt.forEach((r) => {
                                if (r["CODE_VALUE"] == _arr[i]) {
                                    res = res + r["CODE_TEXT"].toString() + ",";
                                    if (!isRes)
                                        isRes = true;
                                    return;
                                }
                            });
                        }
                    } else {
                        _dt.forEach((r) => {
                            if (r["CODE_VALUE"] == this.Val) {
                                res = r["CODE_TEXT"].toString();
                                if (!isRes)
                                    isRes = true;
                                return;
                            }
                        })
                    }
                }
            }
            if (!isRes) {
                res = this.Val;
                if (_isTb) {
                    if (res && res.length > 6) {
                        if (res.length > 6) {
                            res = "_" + res.substring(0, 3) + ".." + res.substring(res.length - 4, res.length - 1);
                        }
                        //else
                        //    res = "_" + res.substring(0, 3) ;
                    }
                }
            } else {
                this.Val = res;
            }
            super.maker();
        }
    }

    export class DafaultDetailMaker extends DetailMaker {

    }

    iocFile.Core.Ioc.Current().RegisterType("Detail", "IColMaker", DafaultDetailMaker);
}