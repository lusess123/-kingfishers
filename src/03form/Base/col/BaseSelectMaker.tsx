import domFile = require("./../../../01core/0Dom"); import basecolFile = require("./../../../02col/00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import BaseColumn = require("./../BaseColumn");
import BaseForm = require("./../BaseForm");
import PageView = require("./../../07data/PageView");
import iocFile = require("./../../../01core/Ioc");
import kvFile = require("./../../../07data/Kv");

import baseColMaker = require("./BaseColMaker");

export module ui{

    export class BaseSelectMaker extends baseColMaker.ui.BaseColMaker<BaseColVm>
    {
        public maker()
        {
            var temp: any = this.BaseColVm;
            this.ColVm = temp;

            var tv = this.ColVm;
            var c = this.ColumnConfig;
            var _pageView = this.PageView;

            if (tv != null)
            {
                tv["RegName"] = c.Options.RegName;
            }


            super.maker();
        }
    }
    
}