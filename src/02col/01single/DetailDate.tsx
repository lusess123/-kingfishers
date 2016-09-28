import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {
    export class DetailDateAction extends BaseColAction {

    }

    export class DetailDateReact extends BaseColReact<DetailDateProps, DetailDateStates, DetailDateAction> implements domFile.Core.IReact {

        protected pInputOnChange(e: React.FormEvent) {
            //生成action ,并且广播
            var _val = e.target["value"];
            var _ac: DetailDateAction = new DetailDateAction();
            _ac.DataValue = _val;
            this.pDispatcher(_ac);
            //调用Object的设置
            this.props.Vm.reactDataValueSet(_val);
        }

        public pSender(): React.ReactElement<any> {

            //return React.DOM.div(null, React.DOM.label ({
            //    ref: "detaildate",
            //    readOnly:true
            //}, this.fValueFormat(this.props.Vm.reactDataValueGet())));

            return <div>
                        <label ref="detaildate" readOnly="true">
                            {this.fValueFormat(this.props.Vm.reactDataValueGet())}
                        </label>
                    </div>
        }

        private fValueFormat(val)
        { 
            if (utilFile. Core.Util.isDate(val)){
                var _dateVal = utilFile. Core.Util.parse(val);
                var _res = _dateVal.getFullYear() + "年" + (_dateVal.getMonth() + 1) + "月" + _dateVal.getDate() + "日";
                return _res.toString();
            }
            else {
                return "(空)";
            }
        }
    }

    export class DetailDateProps extends BaseColProps<DetailDateVm> {

    }

    export class DetailDateStates extends BaseColStates {

    }

    export class DetailDateVm extends BaseColVm {
        public ReactType: any = DetailDateReact;
        protected pRegName = "日期显示控件";

        public constructor() {
            super();

        }
        public static Test(): DetailDateVm {
            var _bean: DetailDateVm = new DetailDateVm();
            _bean.initDataValue(new Date().toLocaleDateString());
            return _bean;

        }

    }

   iocFile. Core.Ioc.Current().RegisterType("DetailDateVm", BaseColVm, DetailDateVm);
} 