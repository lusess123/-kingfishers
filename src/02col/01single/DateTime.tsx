import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import dateFile = require("./Date");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {
    export class DateTimeAction extends BaseColAction {

    }

    export class DateTimeReact extends BaseColReact<DateTimeProps, DateTimeStates, DateTimeAction> implements domFile.Core.IReact {

        protected pInputOnChange(e: React.FormEvent) {
            //生成action ,并且广播
            var _val = e.target["value"];
            var _ac: DateTimeAction = new DateTimeAction();
            _ac.DataValue = _val;
            this.pDispatcher(_ac);

            //调用Object的设置
            this.props.Vm.reactDataValueSet(_val);
        }

        public pSender(): React.ReactElement<any> {
            this.dateTimeChange(this.props.Vm.reactDataValueGet());
            //return React.DOM.div(null, React.DOM.input({
            //    ref: "dateTime",
            //    placeholder: "请选择日期时间...",
            //    value: this.props.Vm.reactDataValueGet()
            //    //,
            //    //onChange: (e) => { this.pInputOnChange(e) }

            //}, ""));
            return <div>
                <input ref="dateTime"  className="ACT-DATETIME"  placeholder="选择..."
                    value={this.props.Vm.reactDataValueGet() }
                    >
                </input>
            </div>

        }
        protected getLegalMsgDom(): JQuery {
            var _dom = ReactDOM.findDOMNode(this);
            return $(_dom).find("input").parent();
        }
        protected getInputDom(): JQuery {
            var _dom = ReactDOM.findDOMNode(this);
            return $(_dom).find("input");
        }
        protected pComponentDidMount(): void {
            super.pComponentDidMount();
            var _val = this.props.Vm.reactDataValueGet();
            var __this = this;
            utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/lhgcalendar/lhgcalendar.min.js", "/AtawStatic/lib/03Extend/lhgcalendar/skins/lhgcalendar.css"], function () {
                try {
                    var _$dom = __this.fGetDateTimeDom();
                    if (__this.props.Vm.IsInAndAfterToday == false || __this.props.Vm.IsInAndAfterToday == true) {
                        _$dom.calendar({
                            format: "yyyy-MM-dd HH:mm:ss",
                            btnBar: true,
                            minDate: '%y-%M-%d',
                            noToday: __this.props.Vm.IsInAndAfterToday,
                            onSetDate: function () { __this.dateTimeChange(this.getDate('dateTime')); }
                        });
                    }
                    else {
                        _$dom.calendar({
                            format: "yyyy-MM-dd HH:mm:ss",
                            btnBar: true,
                            onSetDate: function () { __this.dateTimeChange(this.getDate('dateTime')); }
                        });
                    }
                }

                catch (ex) {
                    console.log(ex);
                    alert(ex + " 时间控件出错了");
                }
            }

            );
            __this.fGetDateTimeDom().addClass("runcode");

        };

        private dateTimeChange(dateVal: string) {
            if (dateVal == "" || dateVal == null || utilFile.Core.Util.isDateTime(dateVal) || utilFile.Core.Util.isDate(dateVal)) {
                //var _bean: DateTimeVm = new DateTimeVm();
                //_bean.dataValueSet(dateVal);

                //this.DataValue.setValue(dateVal);
                //this.triggerChangeEvent();
                //编辑如果初始化日期小于今天日期
                //if (this.props.Vm.IsInAndAfterToday == true) {
                //    var now = new Date();
                //    var dateInput = new Date(dateVal)
                //    if (now > dateInput) {
                //        alert("请选择大于今天时间");
                //        this.fGetDateTimeDom().val("");
                //        this.props.Vm.reactDataValueSet("");
                //    }
                //}
                //else {
                //    var _ac: dateFile.ui.DateAction = new dateFile.ui.DateAction();
                //    _ac.DataValue = dateVal;
                //    _ac.Vm = this.props.Vm;
                //    this.pDispatcher(_ac);
                //    //调用Object的设置
                //    this.props.Vm.reactDataValueSet(dateVal);
                //}
                var _ac: dateFile.ui.DateAction = new dateFile.ui.DateAction();
                _ac.DataValue = dateVal;
                _ac.Vm = this.props.Vm;
                this.pDispatcher(_ac);
                //调用Object的设置
                this.props.Vm.reactDataValueSet(dateVal);
            }
            else {
                alert("日期控件的格式不对");
                this.fGetDateTimeDom().val("");
                this.props.Vm.reactDataValueSet("");
            }
        }

        private fGetDateTimeDom(): JQuery {
            //var _reactObj = this.refs["dateTime"];
            var _dom = ReactDOM.findDOMNode(this);
            var _$dom = $(_dom);
            return _$dom.find(".ACT-DATETIME");
        }

        protected pComponentWillUnmount(): void {

            super.pComponentWillUnmount();

            //this.fGetDateTimeDom().trigger("autosize.destroy");
        };
    }

    export class DateTimeProps extends BaseColProps<DateTimeVm> {

    }

    export class DateTimeStates extends BaseColStates {

    }

    export interface IDateTimeVmConfig {
        IsInAndAfterToday?: boolean;
    }

    export class DateTimeVm extends BaseColVm {
        public ReactType: any = DateTimeReact;
        protected pRegName = "日期时间控件";
        public IsInAndAfterToday: boolean;

        public constructor(config?: IDateTimeVmConfig) {
            super();
            if (config) {
                if (config.IsInAndAfterToday) {
                    this.IsInAndAfterToday = config.IsInAndAfterToday;
                }
            }

        }
        public static Test(): DateTimeVm {
            var _bean: DateTimeVm = new DateTimeVm();
            //var dateVal = new Date().toLocaleDateString();
            //dateVal = dateVal.replace(/\//g, "-");
            //_bean.dataValueSet(dateVal);
            return _bean;

        }

    }
    iocFile.Core.Ioc.Current().RegisterType("DateTimeVm", BaseColVm, DateTimeVm);
} 