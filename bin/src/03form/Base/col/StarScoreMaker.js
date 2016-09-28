var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./BaseColMaker"], function (require, exports, iocFile, baseBoxMaker) {
    "use strict";
    var ui;
    (function (ui) {
        var StarScoreMaker = (function (_super) {
            __extends(StarScoreMaker, _super);
            function StarScoreMaker() {
                _super.apply(this, arguments);
            }
            StarScoreMaker.prototype.maker = function () {
                var temp = this.BaseColVm;
                this.ColVm = temp;
                var tv = this.ColVm;
                var c = this.ColumnConfig;
                var _pageView = this.PageView;
                if (tv != null) {
                    var PV = [];
                    //获得星星控件的参数 然后将数组传递过去
                    this.Val = c.Options["average"];
                    var Length = c.Options["length"];
                    for (var i = 1; i <= Length; i++) {
                        if (i < parseInt(this.Val)) {
                            PV.push({ Value: i.toString(), isSelect: true });
                        }
                        else {
                            PV.push({ Value: i.toString(), isSelect: false });
                        }
                    }
                    //tv.dataValueSet(average);
                    tv["length"] = c.Options["length"];
                    tv["ItemList"] = PV;
                }
                _super.prototype.maker.call(this);
            };
            return StarScoreMaker;
        }(baseBoxMaker.ui.BaseColMaker));
        ui.StarScoreMaker = StarScoreMaker;
        var DefaultStarScoreMaker = (function (_super) {
            __extends(DefaultStarScoreMaker, _super);
            function DefaultStarScoreMaker() {
                _super.apply(this, arguments);
            }
            return DefaultStarScoreMaker;
        }(StarScoreMaker));
        ui.DefaultStarScoreMaker = DefaultStarScoreMaker;
        iocFile.Core.Ioc.Current().RegisterType("StarScore", "IColMaker", DefaultStarScoreMaker);
    })(ui = exports.ui || (exports.ui = {}));
});
