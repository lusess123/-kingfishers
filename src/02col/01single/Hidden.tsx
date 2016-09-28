import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import textFile = require("./Text");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");

export module ui {

    export class HiddenReact extends BaseColReact<textFile.ui.TextProps, textFile.ui.TextStates, textFile.ui.TextAction> implements domFile.Core.IReact {
        //-----------
        protected pInputOnChange(e: React.FormEvent) {

            //生成action ,并且广播
            var _val = e.target["value"];
            var _ac: textFile.ui.TextAction = new textFile.ui. TextAction();
            _ac.DataValue = _val;
            this.pDispatcher(_ac);

            //调用Object的设置
            this.props.Vm.reactDataValueSet(_val);
        }

        public pSender(): React.ReactElement<any> {

            //return React.DOM.div(null, React.DOM.input({
            //    value: this.props.Vm.reactDataValueGet(),
            //    onChange: (e) => { this.pInputOnChange(e) },
            //    type: "hidden"


            //}, ""));
            return <div>
                        <input value={this.props.Vm.reactDataValueGet() }
                             onChange={(e) => { this.pInputOnChange(e); return false;  } }
                                type="hidden"
                           >
                            </input>
                    </div>
        }
    }

    export class HiddenVm extends BaseColVm {
        public ReactType: any = HiddenReact;
        protected pRegName = "隐藏控件";

        public constructor() {
            super();

        }

        public static Test(): HiddenVm {
            var _bean: HiddenVm = new HiddenVm();
            _bean.initDataValue("我隐藏了");
            return _bean;

        }

        //public static Token: string = Core.AkDispatcher.Current().register(
        //    (a) => {
        //        var f = typeof a.Vm;
        //        window.console.log(a.Vm.getRegName());

        //    }
        //    );
    }

   iocFile. Core.Ioc.Current().RegisterType("HiddenVm", BaseColVm, HiddenVm);
}


