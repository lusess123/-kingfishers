var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Ioc", "react"], function (require, exports, basecolFile, iocFile, React) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var TimeAction = (function (_super) {
            __extends(TimeAction, _super);
            function TimeAction() {
                _super.apply(this, arguments);
            }
            return TimeAction;
        }(BaseColAction));
        ui.TimeAction = TimeAction;
        var TimeProps = (function (_super) {
            __extends(TimeProps, _super);
            function TimeProps() {
                _super.apply(this, arguments);
            }
            return TimeProps;
        }(BaseColProps));
        ui.TimeProps = TimeProps;
        var TimeStates = (function (_super) {
            __extends(TimeStates, _super);
            function TimeStates() {
                _super.apply(this, arguments);
                //一共两个属性分和秒 默认值为当前时间的小时和分钟
                this.min = 12;
                this.huor = 22;
                this.IsDataOK = true; //看输入的数据是否正确
                this.isOpenData = false; //当文本框获得焦点的时候为ture
            }
            return TimeStates;
        }(BaseColStates));
        ui.TimeStates = TimeStates;
        var TimeVm = (function (_super) {
            __extends(TimeVm, _super);
            function TimeVm() {
                _super.call(this);
                this.ReactType = TimeReact;
                this.value = "";
                this.pRegName = "时间控件";
            }
            TimeVm.Test = function () {
                var _bean = new TimeVm();
                return _bean;
            };
            TimeVm.prototype.pOnchange = function (val) {
                var isCheck = _super.prototype.pOnchange.call(this, val);
                if (isCheck) {
                    this.pDataValue = val;
                    this.value = val;
                }
                return isCheck;
            };
            return TimeVm;
        }(BaseColVm));
        ui.TimeVm = TimeVm;
        var TimeReact = (function (_super) {
            __extends(TimeReact, _super);
            function TimeReact() {
                _super.apply(this, arguments);
                this.states = this.initStates();
            }
            //初始化状态
            TimeReact.prototype.initStates = function () {
                var _bean = new TimeStates;
                var hours = new Date().getHours();
                var min = new Date().getMinutes();
                _bean.huor = hours;
                _bean.min = min;
                return _bean;
            };
            //增加数据
            TimeReact.prototype.AddTimeClick = function (a) {
                if (a == "hour") {
                    this.states.huor = this.states.huor + 1;
                    if (this.states.huor == 60) {
                        this.states.huor = 0;
                    }
                }
                else {
                    this.states.min = this.states.min + 1;
                    if (this.states.min == 60) {
                        this.states.min = 0;
                    }
                }
                this.forceUpdate();
            };
            //减少数据
            TimeReact.prototype.SubStrTimeClick = function (a) {
                if (a == "hour") {
                    this.states.huor = this.states.huor - 1;
                    if (this.states.huor == 0) {
                        this.states.huor = 59;
                    }
                }
                else {
                    this.states.min = this.states.min - 1;
                    if (this.states.min == 0) {
                        this.states.min = 59;
                    }
                }
                this.forceUpdate();
            };
            //将时间拼接起来
            TimeReact.prototype.Timejoint = function () {
                return this.states.huor.toString() + ":" + this.states.min.toString();
            };
            //确定键按下
            TimeReact.prototype.OnButtonClick = function () {
                this.props.Vm.value = this.Timejoint();
                this.props.Vm.dataValueSet(this.props.Vm.value);
                this.states.isOpenData = false;
                this.forceUpdate();
            };
            //取消键
            TimeReact.prototype.CancleClick = function () {
                this.states.isOpenData = false;
                this.forceUpdate();
            };
            //文本框获得焦点之后显示div
            TimeReact.prototype.onFocusText = function () {
                this.states.isOpenData = true;
                this.forceUpdate();
            };
            TimeReact.prototype.onBlueText = function () {
                this.states.isOpenData = false;
                this.forceUpdate();
            };
            TimeReact.prototype.pSender = function () {
                //var date = React.DOM.div(null,
                //    React.DOM.div(null,
                //        React.DOM.ul(null
                //            , React.DOM.li(null,
                //                React.DOM.button({ className: "btn-xs btn-primary icon-caret-up icon-large", onClick: () => { this.AddTimeClick("hour"); } }))
                //            , React.DOM.li(null, React.DOM.input({value: this.states.huor.toString() }))
                //            , React.DOM.li(null, React.DOM.button({ className: "btn-xs btn-primary icon-caret-down icon-large", onClick: () => {this.SubStrTimeClick("hour")}}))
                //        )),
                var _this = this;
                //    React.DOM.div(null,
                //        React.DOM.ul(null
                //            , React.DOM.li(null, React.DOM.button({ className: "btn-xs btn-primary icon-caret-up icon-large", onClick: () => {this.AddTimeClick("min")} }))
                //            , React.DOM.li(null, React.DOM.input({value: this.states.min.toString() }))
                //            , React.DOM.li(null, React.DOM.button({ className: "btn-xs btn-primary icon-caret-down icon-large", onClick: () => { this.SubStrTimeClick("min")} }))
                //        )),
                //    React.DOM.div(null,
                //        React.DOM.button({ value: "确定", onClick: () => { this.OnButtonClick()}}),
                //        React.DOM.button({ text: "取消", onClick: () => { this.CancleClick()}  })
                //    )
                //);
                if (this.props.Vm.dataValueGet()) {
                    this.props.Vm.value = this.props.Vm.dataValueGet();
                }
                var date = (React.createElement("div", {className: "Hc-time"}, React.createElement("ul", {className: "nav"}, React.createElement("li", {className: "nav-item"}, React.createElement("span", null, "时："), React.createElement("a", {className: " btn btn-xs btn-primary ", onClick: function () { _this.AddTimeClick("hour"); return false; }}, React.createElement("i", {className: " icon-plus fa fa-plus"})), React.createElement("input", {className: "", value: this.states.huor.toString()}), React.createElement("a", {className: " btn btn-xs btn-primary ", onClick: function () { _this.SubStrTimeClick("hour"); return false; }}, React.createElement("i", {className: " icon-minus fa fa-minus"}))), React.createElement("li", {className: "nav-item"}, React.createElement("span", null, "分："), React.createElement("a", {className: "btn btn-xs btn-primary ", onClick: function () { _this.AddTimeClick("min"); return false; }}, React.createElement("i", {className: " icon-plus fa fa-plus"})), React.createElement("input", {className: "", value: this.states.min.toString()}), React.createElement("a", {className: "btn btn-xs btn-primary ", onClick: function () { _this.SubStrTimeClick("min"); return false; }}, React.createElement("i", {className: " icon-minus fa fa-minus"})))), React.createElement("div", null, React.createElement("button", {className: "btn btn-xs btn-primary", value: "确定", onClick: function () { _this.OnButtonClick(); return false; }}, "确定"), React.createElement("button", {className: "btn btn-xs btn-primary", value: "取消", onClick: function () { _this.CancleClick(); return false; }}, "取消"))));
                return React.DOM.div(null, React.DOM.input({ className: "form-control", placeholder: "请选择时间..", value: this.props.Vm.value, onFocus: function () { _this.onFocusText(); return false; } }), this.states.isOpenData ? date : "");
            };
            return TimeReact;
        }(BaseColReact));
        ui.TimeReact = TimeReact;
        iocFile.Core.Ioc.Current().RegisterType("TimeVm", BaseColVm, TimeVm);
    })(ui = exports.ui || (exports.ui = {}));
});
