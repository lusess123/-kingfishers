var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Ioc", "./../../01core/Util", "./Date", "react", "react-dom"], function (require, exports, basecolFile, iocFile, utilFile, dateFile, React, ReactDOM) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var DateTimeAction = (function (_super) {
            __extends(DateTimeAction, _super);
            function DateTimeAction() {
                _super.apply(this, arguments);
            }
            return DateTimeAction;
        }(BaseColAction));
        ui.DateTimeAction = DateTimeAction;
        var DateTimeReact = (function (_super) {
            __extends(DateTimeReact, _super);
            function DateTimeReact() {
                _super.apply(this, arguments);
            }
            DateTimeReact.prototype.pInputOnChange = function (e) {
                //生成action ,并且广播
                var _val = e.target["value"];
                var _ac = new DateTimeAction();
                _ac.DataValue = _val;
                this.pDispatcher(_ac);
                //调用Object的设置
                this.props.Vm.reactDataValueSet(_val);
            };
            DateTimeReact.prototype.pSender = function () {
                this.dateTimeChange(this.props.Vm.reactDataValueGet());
                //return React.DOM.div(null, React.DOM.input({
                //    ref: "dateTime",
                //    placeholder: "请选择日期时间...",
                //    value: this.props.Vm.reactDataValueGet()
                //    //,
                //    //onChange: (e) => { this.pInputOnChange(e) }
                //}, ""));
                return React.createElement("div", null, React.createElement("input", {ref: "dateTime", className: "ACT-DATETIME", placeholder: "选择...", value: this.props.Vm.reactDataValueGet()}));
            };
            DateTimeReact.prototype.getLegalMsgDom = function () {
                var _dom = ReactDOM.findDOMNode(this);
                return $(_dom).find("input").parent();
            };
            DateTimeReact.prototype.getInputDom = function () {
                var _dom = ReactDOM.findDOMNode(this);
                return $(_dom).find("input");
            };
            DateTimeReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
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
                });
                __this.fGetDateTimeDom().addClass("runcode");
            };
            ;
            DateTimeReact.prototype.dateTimeChange = function (dateVal) {
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
                    var _ac = new dateFile.ui.DateAction();
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
            };
            DateTimeReact.prototype.fGetDateTimeDom = function () {
                //var _reactObj = this.refs["dateTime"];
                var _dom = ReactDOM.findDOMNode(this);
                var _$dom = $(_dom);
                return _$dom.find(".ACT-DATETIME");
            };
            DateTimeReact.prototype.pComponentWillUnmount = function () {
                _super.prototype.pComponentWillUnmount.call(this);
                //this.fGetDateTimeDom().trigger("autosize.destroy");
            };
            ;
            return DateTimeReact;
        }(BaseColReact));
        ui.DateTimeReact = DateTimeReact;
        var DateTimeProps = (function (_super) {
            __extends(DateTimeProps, _super);
            function DateTimeProps() {
                _super.apply(this, arguments);
            }
            return DateTimeProps;
        }(BaseColProps));
        ui.DateTimeProps = DateTimeProps;
        var DateTimeStates = (function (_super) {
            __extends(DateTimeStates, _super);
            function DateTimeStates() {
                _super.apply(this, arguments);
            }
            return DateTimeStates;
        }(BaseColStates));
        ui.DateTimeStates = DateTimeStates;
        var DateTimeVm = (function (_super) {
            __extends(DateTimeVm, _super);
            function DateTimeVm(config) {
                _super.call(this);
                this.ReactType = DateTimeReact;
                this.pRegName = "日期时间控件";
                if (config) {
                    if (config.IsInAndAfterToday) {
                        this.IsInAndAfterToday = config.IsInAndAfterToday;
                    }
                }
            }
            DateTimeVm.Test = function () {
                var _bean = new DateTimeVm();
                //var dateVal = new Date().toLocaleDateString();
                //dateVal = dateVal.replace(/\//g, "-");
                //_bean.dataValueSet(dateVal);
                return _bean;
            };
            return DateTimeVm;
        }(BaseColVm));
        ui.DateTimeVm = DateTimeVm;
        iocFile.Core.Ioc.Current().RegisterType("DateTimeVm", BaseColVm, DateTimeVm);
    })(ui = exports.ui || (exports.ui = {}));
});
