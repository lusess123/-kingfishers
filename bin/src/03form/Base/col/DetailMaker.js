var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./BaseColMaker"], function (require, exports, iocFile, baseBoxMaker) {
    "use strict";
    var ui;
    (function (ui) {
        var DetailMaker = (function (_super) {
            __extends(DetailMaker, _super);
            function DetailMaker() {
                _super.apply(this, arguments);
            }
            DetailMaker.prototype.maker = function () {
                var _this = this;
                var temp = this.BaseColVm;
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
                        if (this.Val) {
                            this.Val = this.Val.toString();
                        }
                        if (this.Val && this.Val.indexOf("\"") != -1) {
                            if (this.Val.indexOf(":") != -1) {
                                this.Val = this.Val.split(":")[0];
                            }
                            var _arr = this.Val.replace(/\"/g, "").split(',');
                            for (var i = 0; i < _arr.length; i++) {
                                _dt.forEach(function (r) {
                                    if (r["CODE_VALUE"] == _arr[i]) {
                                        res = res + r["CODE_TEXT"].toString() + ",";
                                        if (!isRes)
                                            isRes = true;
                                        return;
                                    }
                                });
                            }
                        }
                        else {
                            _dt.forEach(function (r) {
                                if (r["CODE_VALUE"] == _this.Val) {
                                    res = r["CODE_TEXT"].toString();
                                    if (!isRes)
                                        isRes = true;
                                    return;
                                }
                            });
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
                        }
                    }
                }
                else {
                    this.Val = res;
                }
                _super.prototype.maker.call(this);
            };
            return DetailMaker;
        }(baseBoxMaker.ui.BaseColMaker));
        ui.DetailMaker = DetailMaker;
        var DafaultDetailMaker = (function (_super) {
            __extends(DafaultDetailMaker, _super);
            function DafaultDetailMaker() {
                _super.apply(this, arguments);
            }
            return DafaultDetailMaker;
        }(DetailMaker));
        ui.DafaultDetailMaker = DafaultDetailMaker;
        iocFile.Core.Ioc.Current().RegisterType("Detail", "IColMaker", DafaultDetailMaker);
    })(ui = exports.ui || (exports.ui = {}));
});
