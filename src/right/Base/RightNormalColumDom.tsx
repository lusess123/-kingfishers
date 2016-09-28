import domFile = require("./../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");

import NormalCoumnFile = require("./../../03form/Norml/NormalColumn");

export module RightNormalColumDom {
   

    export class RightNormalColumDomReact extends NormalCoumnFile.ui.NormalColumnReact {

        private vm(): RightNormalColumDomVm {
            var _vm: any = this.props.Vm;
            return _vm;
        }

        private hasLegal():boolean
        {
            return this.vm().LegalObj != null;
        }

        public pSender(): React.ReactElement<any> {
            return <div className={"col-" + this.props.Vm.getColumnsCols() +" col-sm-12 Hu-dashed-line"}>
                <div className="pull-left Hu-label">
                    <label className={"form-control-label pull-right " + this.hasLegal() ?"required":""}>{this.vm().ColumnConfig.DisplayName +"："}</label>
                  </div>
                <div className="pull-left Hu-input" data-act-post={ this.vm().SubmitSign}>
                    <label className="pull-left">{this.vm().ControlObj.intoDom()}</label>
                  </div>
               </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }
    export class RightNormalColumDomVm extends NormalCoumnFile.ui.NormalColumnVm {
        public ReactType = RightNormalColumDomReact;


    }
   



}


