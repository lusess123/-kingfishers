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
        var StarScoreAction = (function (_super) {
            __extends(StarScoreAction, _super);
            function StarScoreAction() {
                _super.apply(this, arguments);
            }
            return StarScoreAction;
        }(BaseColAction));
        ui.StarScoreAction = StarScoreAction;
        var StarScoreReact = (function (_super) {
            __extends(StarScoreReact, _super);
            function StarScoreReact() {
                _super.apply(this, arguments);
                this.state = new StarScoreStates();
            }
            StarScoreReact.prototype.onMouseOver = function (a) {
                //将在前面的星星的图片路径都替换掉
                for (var i = 0; i < parseInt(a.Value); i++) {
                    this.props.Vm.ItemList[i].isSelect = true;
                }
                if (parseInt(a.Value) != this.props.Vm.ItemList.length) {
                    for (var i = parseInt(a.Value); i < this.props.Vm.ItemList.length; i++) {
                        this.props.Vm.ItemList[i].isSelect = false;
                    }
                }
                this.props.Vm.IsChange = true;
                this.forceUpdate();
            };
            StarScoreReact.prototype.ulOnMouseLeave = function () {
                var value = this.props.Vm.dataValueGet();
                if (value == "0") {
                    for (var i = 0; i < this.props.Vm.ItemList.length; i++) {
                        this.props.Vm.ItemList[i].isSelect = false;
                    }
                }
                else {
                    for (var i = 0; i < parseInt(value); i++) {
                        this.props.Vm.ItemList[i].isSelect = true;
                    }
                    if (value != this.props.Vm.ItemList.length.toString()) {
                        for (var i = parseInt(value); i < this.props.Vm.ItemList.length; i++) {
                            this.props.Vm.ItemList[i].isSelect = false;
                        }
                    }
                }
                this.props.Vm.IsChange = true;
                this.forceUpdate();
            };
            StarScoreReact.prototype.click = function (a) {
                this.props.Vm.dataValueSet(a.Value);
                this.forceUpdate();
            };
            StarScoreReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "clear"}, React.createElement("ul", {className: "nav nav-pills Hc-star-score clearfix", onMouseLeave: function () { _this.ulOnMouseLeave(); }}, this.props.Vm.ItemList.map(function (a) {
                    return React.createElement("li", {className: "nav-item", value: a.Value}, React.createElement("i", {className: a.isSelect ? " icon-star fa fa-star" : "  icon-star-empty fa fa-star-o", value: a.Value, onMouseOver: function () { _this.onMouseOver(a); }, onClick: function () { _this.click(a); }}));
                })));
            };
            StarScoreReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return StarScoreReact;
        }(BaseColReact));
        ui.StarScoreReact = StarScoreReact;
        var StarScoreVm = (function (_super) {
            __extends(StarScoreVm, _super);
            function StarScoreVm() {
                _super.apply(this, arguments);
                this.ReactType = StarScoreReact;
                this.pRegName = "星星评分控件";
                //public offPath = "/AtawStatic/lib/03Extend/jRating/icons/star-off-big.png";
                //public onPath = "/AtawStatic/lib/03Extend/jRating/icons/star-on-big.png";
                //这是默认选择几个星星 这就是默认值咯
                this.average = "0";
                //星星的长度
                this.length = "5";
                //最大显示背景
                this.rateMax = "";
                this.ItemList = [];
            }
            StarScoreVm.Test = function (num) {
                var bean = new StarScoreVm();
                bean.ItemList = [{ Value: "1", isSelect: false }, { Value: "2", isSelect: false },
                    { Value: "3", isSelect: false }, { Value: "4", isSelect: false },
                    { Value: "5", isSelect: false }];
                bean.initDataValue("0");
                return bean;
            };
            StarScoreVm.prototype.pOnchange = function (val) {
                var isCheck = _super.prototype.pOnchange.call(this, val);
                if (isCheck) {
                    this.pDataValue = val;
                    for (var i = 0; i < this.ItemList.length; i++) {
                        if (val == "0") {
                            for (var i = 0; i < this.ItemList.length; i++) {
                                this.ItemList[i].isSelect = false;
                            }
                        }
                        else {
                            for (var i = 0; i < parseInt(val); i++) {
                                this.ItemList[i].isSelect = true;
                            }
                            if (val != this.ItemList.length.toString()) {
                                for (var i = parseInt(val); i < this.ItemList.length; i++) {
                                    this.ItemList[i].isSelect = false;
                                }
                            }
                        }
                    }
                }
                return isCheck;
            };
            return StarScoreVm;
        }(BaseColVm));
        ui.StarScoreVm = StarScoreVm;
        var StarScoreStates = (function (_super) {
            __extends(StarScoreStates, _super);
            function StarScoreStates() {
                _super.apply(this, arguments);
            }
            return StarScoreStates;
        }(BaseColStates));
        ui.StarScoreStates = StarScoreStates;
        var StarScoreProps = (function (_super) {
            __extends(StarScoreProps, _super);
            function StarScoreProps() {
                _super.apply(this, arguments);
            }
            return StarScoreProps;
        }(BaseColProps));
        ui.StarScoreProps = StarScoreProps;
        iocFile.Core.Ioc.Current().RegisterType("StarScoreVm", BaseColVm, StarScoreVm);
    })(ui = exports.ui || (exports.ui = {}));
});
