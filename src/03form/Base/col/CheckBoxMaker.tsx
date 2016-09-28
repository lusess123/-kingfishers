import domFile = require("./../01core/0Dom"); import basecolFile = require("./../02col/00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../../01core/Ioc");
import kvFile = require("./../../../07data/Kv");
import baseColMaker = require("./BaseColMaker")

export module ui{
    export class CheckBoxMaker extends baseColMaker.ui.BaseColMaker<BaseColVm>
    {
        public maker()
        {
            var temp: any = this.BaseColVm;
            this.ColVm = temp;
            var tv = this.ColVm;
            var c = this.ColumnConfig;
            var _pageView = this.PageView;
            //var val = this.Val;
            var _val: string = null;

            if (tv!=null&&c.Options.RegName) {
                var kvs: Array<kvFile.data.KVS> = [];
                var _cd = _pageView.Data[c.Options.RegName];
                var _kv =
                    _cd.forEach((cdr, cdi) => {
                        kvs.push({
                            Text: cdr["CODE_TEXT"].toString(),
                            Value: cdr["CODE_VALUE"].toString(),
                            Select: false
                        });
                    });
                tv["ItemList"] = kvs;
            }

            super.maker();
        }
    }
    
    export class DafaultCheckBoxMaker extends CheckBoxMaker
    {

    }

    iocFile.Core.Ioc.Current().RegisterType("CheckBox", "IColMaker", DafaultCheckBoxMaker);
}