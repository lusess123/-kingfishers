
import domFile = require("./../../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");

import baseMDPageFile = require("./../../Base/BaseMDPage");
import baseMDRowDomFile = require("./../../Base/BaseMDRowDom");
import OrgDetailMasterDomFile = require("./OrgDetailMasterDom");

export module OrgDetailPage {
    export class OrgDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class OrgDetailPageReact extends baseMDPageFile.BaseMDPage.BaseMDPageReact<OrgDetailPageProps, OrgDetailPageStates, OrgDetailPageAction > {

        public state = new OrgDetailPageStates();
        

        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals"><h4>{this.props.Vm.Title}</h4>
                <div>
                    {this.props.Vm.RowList.map((row) => {
                        return row.intoDom();
                    }) }
                </div>
              
            </div>;
        }




    }
    export class OrgDetailPageVm extends baseMDPageFile.BaseMDPage.BaseMDPageVm {
        public ReactType = OrgDetailPageReact;

        public constructor()
        {
            super();
            
            for (var i: number = 0; i < 10; i++) {
                var _newrow = new baseMDRowDomFile.BaseMDRowDom.BaseMDRowDomVm();
                _newrow.MasterTitle = "组织机构";
                _newrow.HasNoDetail = true;
                _newrow.BaseMDRowShell.Index = i + 1;
                _newrow.BaseMDRowReactHook.ThReactList = [];
                _newrow.MasterObj = new OrgDetailMasterDomFile.OrgDetailMasterDom.OrgDetailMasterDomVm();
                this.RowList.push(_newrow);
            }
        }
        protected submit() {
            super.submit();
            var _success: boolean = true;
            var rows = [];
            this.RowList.forEach((row) => {
                var _master = utilFile.Core.Util.Cast<OrgDetailMasterDomFile.OrgDetailMasterDom.OrgDetailMasterDomVm>(row.MasterObj);
                //alert((row.MasterObj.constructor).toString() + "   " + (_master.constructor).toString());
                //alert(utilFile.Core.Util.GetClassName(row.MasterObj) + "   " + utilFile.Core.Util.GetClassName(_master));

                if (_master.submit && !_master.submit()) {
                    _success = false;
                }
                rows.push(_master.Data);

            });
            alert(JSON.stringify(rows));
            return _success;

        }
       

    }
    export class OrgDetailPageStates extends baseMDPageFile.BaseMDPage.BaseMDPageStates {
    }


    export class OrgDetailPageProps extends baseMDPageFile.BaseMDPage.BaseMDPageProps{
    }


    iocFile.Core.Ioc.Current().RegisterType("ORGDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, OrgDetailPageVm);

}
