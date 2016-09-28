import domFile = require("./../../../01core/0Dom"); import basecolFile = require("./../../../02col/00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../../01core/Ioc");
import baseBoxMaker = require("./BaseColMaker");
import kvFile = require("./../../../07data/Kv");
import starScoreFile = require("./../../../02col/01single/StarScore");

export module ui {
    export class StarScoreMaker extends baseBoxMaker.ui.BaseColMaker<BaseColVm>
    {
        public maker()
        {

            var temp: any = this.BaseColVm;
            this.ColVm = temp;

            var tv = this.ColVm;
            var c = this.ColumnConfig;
            var _pageView = this.PageView;

            if (tv != null) {
                var PV: Array<kvFile.data.PV> = [];
                //获得星星控件的参数 然后将数组传递过去
                this.Val = c.Options["average"];
                var Length = c.Options["length"];
                for (var i = 1; i <=Length; i++)
                {
                    if (i <parseInt(this.Val)) {
                        PV.push({ Value: i.toString(), isSelect: true });
                    } else {
                        PV.push({ Value: i.toString(), isSelect: false});
                    }
                     
                }
                //tv.dataValueSet(average);
                tv["length"] = c.Options["length"];
                tv["ItemList"] = PV;
            }

            super.maker();
        }
    }

    export class DefaultStarScoreMaker extends StarScoreMaker
    {

    }

    iocFile.Core.Ioc.Current().RegisterType("StarScore", "IColMaker", DefaultStarScoreMaker);
}