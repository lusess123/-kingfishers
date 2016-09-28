import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import Text = require("./Text");
//import akDispatcher = require("./../../01core/AkDispatcher");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");

export module ui {
    
    export class PasswordReact extends BaseColReact<Text.ui.TextProps, Text.ui.TextStates, Text.ui.TextAction> implements domFile.Core.IReact {
        //-----------
        protected pInputOnChange(e: React.FormEvent) {

            //生成action ,并且广播
            var _val = e.target["value"];
            // $ ["r"]["pdom"] = this.props;
            var _ac: Text.ui.TextAction = new Text.ui.TextAction();
            _ac.DataValue = _val;
            //_ac.Obj = this.props.Obj;
            this.pDispatcher(_ac);

            //调用Object的设置
            this.props.Vm.reactDataValueSet(_val);
        }

        public pSender(): React.ReactElement<any> {

            //return React.DOM.div(null, React.DOM.input({
            //    className:"Hg-width",
            //    value: this.props.Vm.reactDataValueGet(),
            //    onChange: (e) => { this.pInputOnChange(e) },
            //    type: "password"
            //}, ""));

            return <div>
                        <input className="Hg-width"
                                value={this.props.Vm.reactDataValueGet() }
                                onChange={(e) => { this.pInputOnChange(e); return false;} }
                                type="password">
                        </input>
                     </div>
        }
    }

    export class PasswordVm extends BaseColVm {
        public ReactType: any = PasswordReact;
        protected pRegName = "密码控件";

        public constructor() {
            super();

        }
        public static Test(): PasswordVm {
            var _bean: PasswordVm = new PasswordVm();
            _bean.initDataValue("123456");
            return _bean;
            
        }
       
   
    }

    iocFile.Core.Ioc.Current().RegisterType("PasswordVm", BaseColVm, PasswordVm);

}


