import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export namespace ui {
    export class DateAction extends BaseColAction {

    }

    export class DateReact extends BaseColReact<DateProps, DateStates, DateAction> implements domFile.Core.IReact {

        protected pInputOnChange(e: React.FormEvent) {
            //生成action ,并且广播
            var _val = e.target["value"];
            var _ac: DateAction = new DateAction();
            _ac.DataValue = _val;
            this.pDispatcher(_ac);
            //调用Object的设置
            this.props.Vm.reactDataValueSet(_val);
        }
        protected getLegalMsgDom(): JQuery {
            var _dom = ReactDOM.findDOMNode(this);
            return $(_dom).find("input").parent();
        }
        protected getInputDom(): JQuery {
            var _dom = ReactDOM.findDOMNode(this);
            return $(_dom).find("input");
        }
        public pSender(): React.ReactElement<any> {
            this.dateChange(this.props.Vm.reactDataValueGet());
            //return React.DOM.div(null, React.DOM.input({
            //    ref: "date",
            //    placeholder:"请选择日期...",
            //    value: this.props.Vm.reactDataValueGet()
            //    //,
            //    //onChange: (e) => { this.pInputOnChange(e) }

            //}, ""));

            return <div>
                        <input ref="date" placeholder="选择..."
                                value={this.props.Vm.reactDataValueGet()}>
                          </input>
                    </div>
        }

        protected pComponentDidMount(): void {
            super.pComponentDidMount();
            var _val = this.props.Vm.reactDataValueGet();
            
            var __this = this;
           utilFile. Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/lhgcalendar/lhgcalendar.min.js", "/AtawStatic/lib/03Extend/lhgcalendar/skins/lhgcalendar.css"], function () {
               var _$dom = __this.fGetDateDom();
               if (__this.props.Vm.IsInAndAfterToday == false || __this.props.Vm.IsInAndAfterToday == true) {
                   _$dom.calendar({
                       format: "yyyy-MM-dd",
                       btnBar: false,
                       minDate: '%y-%M-%d',
                       noToday: __this.props.Vm.IsInAndAfterToday,
                       onSetDate: function () { __this.dateChange(this.getDate('dateTime')); }
                   });
               }
               else {
                   _$dom.calendar({
                       format: "yyyy-MM-dd",
                       btnBar: false,
                       onSetDate: function () { __this.dateChange(this.getDate('dateTime')); }
                   });
               }
            });
            __this.fGetDateDom().addClass("runcode");
        };

        private dateChange(dateVal: string) {
            if (dateVal == "" || dateVal == null || utilFile. Core.Util.isDateTime(dateVal) ||utilFile. Core.Util.isDate(dateVal)) {
              //  var _bean: DateVm = new DateVm();
             //   _bean.dataValueSet(dateVal);

             //   this.DataValue.setValue(dateVal);
             //   this.triggerChangeEvent();

                var _ac: DateAction = new DateAction();
                _ac.DataValue = dateVal;
                _ac.Vm = this.props.Vm;
                this.pDispatcher(_ac);

                //调用Object的设置
                this.props.Vm.reactDataValueSet(dateVal);

            }
            else {
                alert("日期控件的格式不对");
                this.fGetDateDom().val("");
                this.props.Vm.reactDataValueSet("");
            }
        }
        
        private fGetDateDom(): JQuery {
            var _reactObj = this.refs["date"];
            var _dom = ReactDOM.findDOMNode(_reactObj);
            var _$dom = $(_dom);
            return _$dom;
        }

        protected  pComponentWillUnmount(): void {

            super.pComponentWillUnmount();

           // this.fGetDateDom().trigger("autosize.destroy");
        };
    }

    export class DateProps extends BaseColProps<DateVm> {

    }

    export class DateStates extends BaseColStates {

    }
    export interface IDateVmConfig {
        IsInAndAfterToday?: boolean;
    }
    export class DateVm extends BaseColVm {
        public ReactType: any = DateReact;
        protected pRegName = "日期控件";
        public IsInAndAfterToday: boolean;

        public constructor(config?: IDateVmConfig) {
            super();
            if (config) {
                if (config.IsInAndAfterToday) {
                    this.IsInAndAfterToday = config.IsInAndAfterToday;
                }
            }

        }
        public static Test(): DateVm {
            var _bean: DateVm = new DateVm();
            //var dateVal = new Date().toLocaleDateString();
            //dateVal = dateVal.replace(/\//g, "-");
            //_bean.dataValueSet(dateVal);
            return _bean;

        }

    }

   iocFile. Core.Ioc.Current().RegisterType("DateVm", BaseColVm, DateVm);
} 