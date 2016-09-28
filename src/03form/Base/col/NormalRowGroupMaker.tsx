import domFile = require("./../../../01core/0Dom"); import basecolFile = require("./../../../02col/00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../../01core/Ioc");
import kvFile = require("./../../../07data/Kv");
import baseColMaker = require("./BaseColMaker")

export module ui {
    export class NormalRowGroupMaker extends baseColMaker.ui.BaseColMaker<BaseColVm>
    {
        public maker() {
            var temp: any = this.BaseColVm;
            this.ColVm = temp;
            var tv = this.ColVm;
            var c = this.ColumnConfig;
            var _pageView = this.PageView;
            //var val = this.Val;
            var _val: string = null;

            //将配置中标题和包含的控件名称都放到NormalRowGroup中

            super.maker();
        }
    }

    export class DafaultNormalRowGroupMaker extends NormalRowGroupMaker {

    }

    iocFile.Core.Ioc.Current().RegisterType("NormalRowGroup", "IColMaker", NormalRowGroupMaker);
}