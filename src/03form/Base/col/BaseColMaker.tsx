import domFile = require("./../../../01core/0Dom"); import basecolFile = require("./../../../02col/00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import BaseColumn = require("./../BaseColumn");
import BaseForm = require("./../BaseForm");
import PageView = require("./../../07data/PageView");
import iocFile = require("./../../../01core/Ioc");
import kvFile = require("./../../../07data/Kv");

export module ui {

    export interface IColMaker {
        BaseColVm: BaseColVm;
        Val: string | Number;
        ColumnVm: BaseColumn.ui.BaseColumnVm;
        ColumnConfig: PageView.data.IColumn;
        PageView: PageView.data.IPageView;
        //init();
        maker(): void;
    }


    export class BaseColMaker<C extends BaseColVm> implements IColMaker {
        public BaseColVm: BaseColVm;
        protected ColVm: C;
        public Val: string;
        public ColumnVm: BaseColumn.ui.BaseColumnVm;
        public ColumnConfig: PageView.data.IColumn;
        public PageView: PageView.data.IPageView;
        public maker() {
            var temp: any = this.BaseColVm;
            this.ColVm = temp;

            var tv = this.ColVm;
            
            var c = this.ColumnConfig;
            var _pageView = this.PageView;
               

            this.ColVm.initDataValue(this.Val ? this.Val.toString() : "");
            this.ColumnVm.ControlObj = this.ColVm;
            if (this.ColumnConfig.Options) {
                var _lg = this.ColumnConfig.Options.Legal;
                if (_lg) {
                    this.ColVm.LegalObj.initOpts(_lg.Kind, _lg.ErrMsg, _lg.CustomLegalFun, _lg.reg, _lg.LegalExpression);
                }
                //  }
            }
            
        }
    }

    export class DefaultBaseColMaker extends BaseColMaker<BaseColVm>{

    }

    iocFile.Core.Ioc.Current().RegisterType("BASECOL", "IColMaker", DefaultBaseColMaker);

}