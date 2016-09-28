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
        var DetailAreaAction = (function (_super) {
            __extends(DetailAreaAction, _super);
            function DetailAreaAction() {
                _super.apply(this, arguments);
            }
            return DetailAreaAction;
        }(BaseColAction));
        ui.DetailAreaAction = DetailAreaAction;
        var DetailAreaReact = (function (_super) {
            __extends(DetailAreaReact, _super);
            function DetailAreaReact() {
                _super.apply(this, arguments);
            }
            DetailAreaReact.prototype.pInputOnChange = function (e) {
                //生成action ,并且广播
                var _val = e.target["value"];
                var _ac = new DetailAreaAction();
                _ac.DataValue = _val;
                this.pDispatcher(_ac);
                //调用Object的设置
                this.props.Vm.reactDataValueSet(_val);
            };
            DetailAreaReact.prototype.pSender = function () {
                //return React.DOM.div(null, React.DOM.textarea({
                //    ref: "detailarea",
                //    readOnly:true,
                //    value: this.props.Vm.reactDataValueGet(),
                //    onChange: (e) => { this.pInputOnChange(e) }
                var _this = this;
                //}, ""));
                return React.createElement("div", null, React.createElement("textarea", {className: "Hc-detail-area", ref: "detailarea", readOnly: "true", value: this.props.Vm.reactDataValueGet(), onChange: function (e) { _this.pInputOnChange(e); return false; }}));
            };
            DetailAreaReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
                var _val = this.props.Vm.reactDataValueGet();
                var __this = this;
                utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/autosize/jquery.autosize.js"], function () {
                    var _$dom = __this.fGetDetailAreaDom();
                    //_$dom["autosize"]();
                    _$dom.autosize();
                });
            };
            ;
            DetailAreaReact.prototype.fGetDetailAreaDom = function () {
                var _reactObj = this.refs["detailarea"];
                var _dom = ReactDOM.findDOMNode(_reactObj);
                var _$dom = $(_dom);
                return _$dom;
            };
            return DetailAreaReact;
        }(BaseColReact));
        ui.DetailAreaReact = DetailAreaReact;
        var DetailAreaProps = (function (_super) {
            __extends(DetailAreaProps, _super);
            function DetailAreaProps() {
                _super.apply(this, arguments);
            }
            return DetailAreaProps;
        }(BaseColProps));
        ui.DetailAreaProps = DetailAreaProps;
        var DetailAreaStates = (function (_super) {
            __extends(DetailAreaStates, _super);
            function DetailAreaStates() {
                _super.apply(this, arguments);
            }
            return DetailAreaStates;
        }(BaseColStates));
        ui.DetailAreaStates = DetailAreaStates;
        var DetailAreaVm = (function (_super) {
            __extends(DetailAreaVm, _super);
            function DetailAreaVm() {
                _super.call(this);
                this.ReactType = DetailAreaReact;
                this.pRegName = "多文本详情控件";
            }
            DetailAreaVm.Test = function () {
                var _bean = new DetailAreaVm();
                var str = "风筝象征着心灵上的救赎。一个夏天的午后，父亲生前的好友拉辛汗打电话给阿米尔，告诉了他，哈桑和阿米尔竟然是同父异母的兄弟，并给他指明了方向： “那儿有再次成为好人的路。”阿米尔最终战胜懦弱，冒着生命危险回到被塔利班占领的喀布尔去解救哈桑的儿子，将他带回美国，收为养子。这是他在成长的生命历程中，第一次主动采取行动来挽救自己曾经犯下的错误，并非逃避。";
                _bean.initDataValue(str);
                // _bean.pRegName = "文本";
                // _bean.TopDom = top;
                return _bean;
            };
            return DetailAreaVm;
        }(BaseColVm));
        ui.DetailAreaVm = DetailAreaVm;
        iocFile.Core.Ioc.Current().RegisterType("DetailAreaVm", BaseColVm, DetailAreaVm);
    })(ui = exports.ui || (exports.ui = {}));
});
