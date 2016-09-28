import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import BaseMDMasterDomFile = require("./../../Base/BaseMDMasterDom");

import NormalRowFile = require("./../../../03form/Norml/NormalRow");
import NormalCoumnFile = require("./../../../03form/Norml/NormalColumn");
import DetailFile = require("./../../../02col/01single/Detail");
import TextFile = require("./../../../02col/01single/Text");

import RightNormalColumDomFile = require("./../../Base/RightNormalColumDom");

export module OrgDetailMasterDom {
   

    export class OrgDetailMasterDomReact extends BaseMDMasterDomFile.BaseMDMasterDom.BaseMDMasterDomReact{

        public vm(): OrgDetailMasterDomVm
        {
            var _anyVm: any = this.props.Vm;
            var _newVm: OrgDetailMasterDomVm = _anyVm;
            return _newVm;
        }

        public pSender(): React.ReactElement<any> {
            return this.vm().RowDomVm.intoDom();
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }
    export class OrgDetailMasterDomVm extends BaseMDMasterDomFile.BaseMDMasterDom.BaseMDMasterDomVm {
        public ReactType = OrgDetailMasterDomReact;

        public Data: any = {};

        public RowDomVm: NormalRowFile.ui.NormalRowVm;

        public constructor()
        {
            super();
            this.createNormalRow();
        }

        private createNormalRow()
        {
            var normalRow: NormalRowFile.ui.NormalRowVm = new NormalRowFile.ui.NormalRowVm();
            for (var i: number = 0; i < 10; i++) {
                var columnObj: RightNormalColumDomFile.RightNormalColumDom.RightNormalColumDomVm = new RightNormalColumDomFile.RightNormalColumDom.RightNormalColumDomVm();
                columnObj.ColumnConfig = { Name: "ACT"+i.toString(), DisplayName: "显示名称"+ i.toString(), ShowType:2 };
                normalRow.ColumnObjList.push(columnObj);
            }
            this.RowDomVm = normalRow;

            this.RowDomVm.ColumnObjList.forEach((obj,i) => {
                this.Data["column" + i] = "值" + i;
                obj.ControlObj = new TextFile.ui.TextVm();
                obj.ControlObj.LegalObj.Kind = "notNull"; 
                obj.ControlObj.vmdataValue(this.Data["column" + i]);
                obj.onChangeHandle((val) => {
                    this.Data["column" + i] = val;
                    return true;
                }); 
            });


        }

        private legal(): boolean
        {
            var isSuccess :boolean = true;
            this.RowDomVm.ColumnObjList.forEach((obj, i) => {
                if (!obj.ControlObj.legal())
                {
                    isSuccess = false;
                }
            });
            return isSuccess;
        }
        public submit():boolean 
        {
            return this.legal();
        }

    }
   



}


