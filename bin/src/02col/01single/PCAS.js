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
        var PCASAction = (function (_super) {
            __extends(PCASAction, _super);
            function PCASAction() {
                _super.apply(this, arguments);
            }
            return PCASAction;
        }(BaseColAction));
        ui.PCASAction = PCASAction;
        var PCASReact = (function (_super) {
            __extends(PCASReact, _super);
            function PCASReact() {
                _super.apply(this, arguments);
                this.fProvince = "";
                this.fCity = "";
                this.fArea = "";
                this.fIsOnSelectChange = false;
            }
            PCASReact.prototype.fProvinceOnChange = function (e) {
                //生成action ,并且广播
                var _province = e.target["value"];
                var _ac = new PCASAction();
                _ac.DataValue = _province;
                this.pDispatcher(_ac);
                //调用Object的设置
                var _val = _province + "-全部地市-全部地区";
                this.fGetPCASDom("pcas").val(_val);
                this.props.Vm.reactDataValueSet(_val);
            };
            PCASReact.prototype.fCityOnChange = function (e) {
                //生成action ,并且广播
                var _city = e.target["value"];
                var _ac = new PCASAction();
                _ac.DataValue = _city;
                this.pDispatcher(_ac);
                //调用Object的设置
                var _val = this.fGetPCASDom("pcas").val();
                if (_val != null && _val != "") {
                    var arr = _val.split("-");
                    _val = arr[0] + "-" + _city + "-" + arr[2];
                    this.fGetPCASDom("pcas").val(_val);
                    this.props.Vm.reactDataValueSet(_val);
                }
            };
            PCASReact.prototype.fAreaOnChange = function (e) {
                //生成action ,并且广播
                var _area = e.target["value"];
                var _ac = new PCASAction();
                _ac.DataValue = _area;
                this.pDispatcher(_ac);
                //调用Object的设置
                var _val = this.fGetPCASDom("pcas").val();
                if (_val != null && _val != "") {
                    var arr = _val.split("-");
                    _val = arr[0] + "-" + arr[1] + "-" + _area;
                    this.fGetPCASDom("pcas").val(_val);
                    this.props.Vm.reactDataValueSet(_val);
                }
            };
            PCASReact.prototype.pSender = function () {
                var _this = this;
                _super.prototype.pSender.call(this);
                var val = this.props.Vm.reactDataValueGet();
                return React.createElement("div", null, React.createElement("input", {ref: "pcas", type: "hidden"}), React.createElement("select", {ref: "Province", name: "province", className: "Hu-pointer", style: { width: 150 + 'px' }, onChange: function (e) { _this.fIsOnSelectChange = true; _this.fAreaOnChange(e); return false; }}), React.createElement("select", {ref: "City", name: "city", className: "Hu-pointer", style: { width: 150 + 'px' }, onChange: function (e) { _this.fIsOnSelectChange = true; _this.fAreaOnChange(e); return false; }}), React.createElement("select", {ref: "Area", name: "area", className: "Hu-pointer", style: { width: 150 + 'px' }, onChange: function (e) { _this.fIsOnSelectChange = true; _this.fAreaOnChange(e); return false; }}));
            };
            PCASReact.prototype.pComponentDidUpdate = function (prevProps, prevState, prevContext) {
                _super.prototype.pComponentDidUpdate.call(this, prevProps, prevState, prevContext);
                if (this.fIsOnSelectChange) {
                    this.fIsOnSelectChange = false;
                }
                else {
                    this.fSetPCAS();
                }
            };
            PCASReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
                this.fSetPCAS();
            };
            ;
            PCASReact.prototype.fSetPCAS = function () {
                var _val = this.props.Vm.reactDataValueGet();
                var arr = [];
                var __this = this;
                utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/PCAS/pcasunzip.js"], function () {
                    if (_val != null && _val != "") {
                        arr = _val.split("-");
                        __this.fGetPCASDom("pcas").val(_val);
                        PCAS(__this.fGetPCASDom("Province").attr("name"), __this.fGetPCASDom("City").attr("name"), __this.fGetPCASDom("Area").attr("name"), arr[0], arr[1], arr[2]);
                        __this.fGetPCASDom("pcas").val(_val).addClass("Hu-pointer ");
                    }
                    else {
                        PCAS(__this.fGetPCASDom("Province").attr("name"), __this.fGetPCASDom("City").attr("name"), __this.fGetPCASDom("Area").attr("name"));
                        __this.fGetPCASDom("pcas").val("全国");
                    }
                });
            };
            PCASReact.prototype.fGetPCASDom = function (ref) {
                var _reactObj = this.refs[ref];
                var _dom = ReactDOM.findDOMNode(_reactObj);
                var _$dom = $(_dom);
                return _$dom;
            };
            return PCASReact;
        }(BaseColReact));
        ui.PCASReact = PCASReact;
        var PCASProps = (function (_super) {
            __extends(PCASProps, _super);
            function PCASProps() {
                _super.apply(this, arguments);
            }
            return PCASProps;
        }(BaseColProps));
        ui.PCASProps = PCASProps;
        var PCASStates = (function (_super) {
            __extends(PCASStates, _super);
            function PCASStates() {
                _super.apply(this, arguments);
            }
            return PCASStates;
        }(BaseColStates));
        ui.PCASStates = PCASStates;
        var PCASVm = (function (_super) {
            __extends(PCASVm, _super);
            function PCASVm() {
                _super.call(this);
                this.ReactType = PCASReact;
                this.pRegName = "省市县控件";
            }
            PCASVm.Test = function () {
                var _bean = new PCASVm();
                _bean.initDataValue("浙江省-杭州市-建德市");
                return _bean;
            };
            return PCASVm;
        }(BaseColVm));
        ui.PCASVm = PCASVm;
        iocFile.Core.Ioc.Current().RegisterType("PCASVm", BaseColVm, PCASVm);
    })(ui = exports.ui || (exports.ui = {}));
});
