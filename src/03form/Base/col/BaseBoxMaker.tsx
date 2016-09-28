import domFile = require("./../../../01core/0Dom"); import basecolFile = require("./../../../02col/00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import BaseColumn = require("./../BaseColumn");
import BaseForm = require("./../BaseForm");
import PageView = require("./../../07data/PageView");
import iocFile = require("./../../../01core/Ioc");
import kvFile = require("./../../../07data/Kv");

import baseColMaker = require("./BaseColMaker");



export module ui{
    

    export class BaseBoxMaker extends baseColMaker.ui.BaseColMaker<BaseColVm>
    {
        //要在子类中个父类传个值 将名字传到下面的方法中
        public maker() {
            var temp: any = this.BaseColVm;
            this.ColVm = temp;
            var tv = this.ColVm;
            var c = this.ColumnConfig;
            var _pageView = this.PageView;

            if (tv!=null&&c.Options.RegName) {
                var kv: Array<kvFile.data.KV> = [];
                var _cd = _pageView.Data[c.Options.RegName];
                var _kvs =
                    _cd.forEach((cdr, cdi) => {
                        kv.push({
                            Text: cdr["CODE_TEXT"].toString(),
                            Value: cdr["CODE_VALUE"].toString()
                        });
                    });
                tv["ItemList"] = kv;
            }

            super.maker();
        }
    }


    export class DefaultBaseBoxMaker extends baseColMaker.ui.DefaultBaseColMaker
    {

    }
}