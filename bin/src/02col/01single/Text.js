var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Ioc", "./../../08legal/TextLegal", "react", "react-dom"], function (require, exports, basecolFile, iocFile, textLegalFile, React, ReactDOM) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var TextAction = (function (_super) {
            __extends(TextAction, _super);
            function TextAction() {
                _super.apply(this, arguments);
            }
            return TextAction;
        }(BaseColAction));
        ui.TextAction = TextAction;
        var TextReact = (function (_super) {
            __extends(TextReact, _super);
            function TextReact() {
                _super.apply(this, arguments);
            }
            //-----------
            TextReact.prototype.pInputOnChange = function (e) {
                //生成action ,并且广播
                var _val = e.target["value"];
                // $ ["r"]["pdom"] = this.props;
                var _ac = new TextAction();
                _ac.DataValue = _val;
                _ac.Vm = this.props.Vm;
                //_ac.Obj = this.props.Obj;
                this.pDispatcher(_ac);
                //调用Object的设置
                this.props.Vm.reactDataValueSet(_val);
            };
            TextReact.prototype.pSender = function () {
                //return React.DOM.div(null, React.DOM.input({
                //    value: this.props.Vm.reactDataValueGet(),
                //    onChange: (e) => { this.pInputOnChange(e) },
                //    className:"Hg-width"
                var _this = this;
                //}, ""));
                return React.createElement("div", null, React.createElement("input", {value: this.props.Vm.reactDataValueGet(), onChange: function (e) { _this.pInputOnChange(e); return false; }, className: "Hg-width form-control "}));
            };
            TextReact.prototype.getLegalMsgDom = function () {
                var _dom = ReactDOM.findDOMNode(this);
                return $(_dom).find("input").parent();
            };
            TextReact.prototype.getInputDom = function () {
                var _dom = ReactDOM.findDOMNode(this);
                return $(_dom).find("input");
            };
            return TextReact;
        }(BaseColReact));
        ui.TextReact = TextReact;
        var TextProps = (function (_super) {
            __extends(TextProps, _super);
            function TextProps() {
                _super.apply(this, arguments);
            }
            return TextProps;
        }(BaseColProps));
        ui.TextProps = TextProps;
        var TextVm = (function (_super) {
            __extends(TextVm, _super);
            function TextVm() {
                _super.call(this);
                this.ReactType = TextReact;
                this.pRegName = "文本控件";
                this.LegalObj = new textLegalFile.Code.TextLegal();
            }
            TextVm.Test = function () {
                var _bean = new TextVm();
                _bean.initDataValue("初始化的文本");
                _bean.LegalObj.Kind = "email";
                //_bean.LegalObj = new legalFile.Core.BaseLegal();
                // _bean.pRegName = "文本";
                // _bean.TopDom = top;
                return _bean;
            };
            return TextVm;
        }(BaseColVm));
        ui.TextVm = TextVm;
        var TextStates = (function (_super) {
            __extends(TextStates, _super);
            function TextStates() {
                _super.apply(this, arguments);
            }
            return TextStates;
        }(BaseColStates));
        ui.TextStates = TextStates;
        iocFile.Core.Ioc.Current().RegisterType("TextVm", BaseColVm, TextVm);
    })(ui = exports.ui || (exports.ui = {}));
});
