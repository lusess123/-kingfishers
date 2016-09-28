var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Ioc", "./../../01core/Util", "react", "react-dom"], function (require, exports, basecolFile, iocFile, utilFile, React, ReactDOM) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var DateAction = (function (_super) {
            __extends(DateAction, _super);
            function DateAction() {
                _super.apply(this, arguments);
            }
            return DateAction;
        }(BaseColAction));
        ui.DateAction = DateAction;
        var DateReact = (function (_super) {
            __extends(DateReact, _super);
            function DateReact() {
                _super.apply(this, arguments);
            }
            DateReact.prototype.pInputOnChange = function (e) {
                //生成action ,并且广播
                var _val = e.target["value"];
                var _ac = new DateAction();
                _ac.DataValue = _val;
                this.pDispatcher(_ac);
                //调用Object的设置
                this.props.Vm.reactDataValueSet(_val);
            };
            DateReact.prototype.getLegalMsgDom = function () {
                var _dom = ReactDOM.findDOMNode(this);
                return $(_dom).find("input").parent();
            };
            DateReact.prototype.getInputDom = function () {
                var _dom = ReactDOM.findDOMNode(this);
                return $(_dom).find("input");
            };
            DateReact.prototype.pSender = function () {
                this.dateChange(this.props.Vm.reactDataValueGet());
                //return React.DOM.div(null, React.DOM.input({
                //    ref: "date",
                //    placeholder:"请选择日期...",
                //    value: this.props.Vm.reactDataValueGet()
                //    //,
                //    //onChange: (e) => { this.pInputOnChange(e) }
                //}, ""));
                return React.createElement("div", null, React.createElement("input", {ref: "date", placeholder: "选择...", value: this.props.Vm.reactDataValueGet()}));
            };
            DateReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
                var _val = this.props.Vm.reactDataValueGet();
                var __this = this;
                utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/lhgcalendar/lhgcalendar.min.js", "/AtawStatic/lib/03Extend/lhgcalendar/skins/lhgcalendar.css"], function () {
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
            ;
            DateReact.prototype.dateChange = function (dateVal) {
                if (dateVal == "" || dateVal == null || utilFile.Core.Util.isDateTime(dateVal) || utilFile.Core.Util.isDate(dateVal)) {
                    //  var _bean: DateVm = new DateVm();
                    //   _bean.dataValueSet(dateVal);
                    //   this.DataValue.setValue(dateVal);
                    //   this.triggerChangeEvent();
                    var _ac = new DateAction();
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
            };
            DateReact.prototype.fGetDateDom = function () {
                var _reactObj = this.refs["date"];
                var _dom = ReactDOM.findDOMNode(_reactObj);
                var _$dom = $(_dom);
                return _$dom;
            };
            DateReact.prototype.pComponentWillUnmount = function () {
                _super.prototype.pComponentWillUnmount.call(this);
                // this.fGetDateDom().trigger("autosize.destroy");
            };
            ;
            return DateReact;
        }(BaseColReact));
        ui.DateReact = DateReact;
        var DateProps = (function (_super) {
            __extends(DateProps, _super);
            function DateProps() {
                _super.apply(this, arguments);
            }
            return DateProps;
        }(BaseColProps));
        ui.DateProps = DateProps;
        var DateStates = (function (_super) {
            __extends(DateStates, _super);
            function DateStates() {
                _super.apply(this, arguments);
            }
            return DateStates;
        }(BaseColStates));
        ui.DateStates = DateStates;
        var DateVm = (function (_super) {
            __extends(DateVm, _super);
            function DateVm(config) {
                _super.call(this);
                this.ReactType = DateReact;
                this.pRegName = "日期控件";
                if (config) {
                    if (config.IsInAndAfterToday) {
                        this.IsInAndAfterToday = config.IsInAndAfterToday;
                    }
                }
            }
            DateVm.Test = function () {
                var _bean = new DateVm();
                //var dateVal = new Date().toLocaleDateString();
                //dateVal = dateVal.replace(/\//g, "-");
                //_bean.dataValueSet(dateVal);
                return _bean;
            };
            return DateVm;
        }(BaseColVm));
        ui.DateVm = DateVm;
        iocFile.Core.Ioc.Current().RegisterType("DateVm", BaseColVm, DateVm);
    })(ui = exports.ui || (exports.ui = {}));
});
