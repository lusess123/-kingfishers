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
        var DetailAction = (function (_super) {
            __extends(DetailAction, _super);
            function DetailAction() {
                _super.apply(this, arguments);
            }
            return DetailAction;
        }(BaseColAction));
        ui.DetailAction = DetailAction;
        var DetailReact = (function (_super) {
            __extends(DetailReact, _super);
            function DetailReact() {
                _super.apply(this, arguments);
            }
            DetailReact.prototype.pSender = function () {
                var _val = this.props.Vm.reactDataValueGet();
                if (_val == "" || _val == null || (_val.trim && _val.trim() == "")) {
                    _val = "(♘)";
                }
                return React.createElement("div", {onDragStart: function (e) {
                    // e.preventDefault();
                    // e.dataTransfer.setData("sdom", $(ev.target));
                    window["tempObj"] = $(e.target);
                    window["temp"] = $(e.target).html();
                }, onDrop: function (e) {
                    e.preventDefault();
                    window["tempObj"].html($(e.target).html());
                    $(e.target).html(window["temp"]);
                    $(e.target).removeClass("Hs-orange");
                }, onDragOver: function (e) {
                    e.preventDefault();
                    $(e.target).addClass("Hs-orange");
                }, onDragLeave: function (e) {
                    e.preventDefault();
                    $(e.target).removeClass("Hs-orange");
                }, draggable: true, dangerouslySetInnerHTML: { __html: _val }});
            };
            DetailReact.prototype.pComponentDidMount = function () {
                //  alert(1);
                _super.prototype.pComponentDidMount.call(this);
            };
            return DetailReact;
        }(BaseColReact));
        ui.DetailReact = DetailReact;
        var DetailProps = (function (_super) {
            __extends(DetailProps, _super);
            function DetailProps() {
                _super.apply(this, arguments);
            }
            return DetailProps;
        }(BaseColProps));
        ui.DetailProps = DetailProps;
        var DetailVm = (function (_super) {
            __extends(DetailVm, _super);
            function DetailVm() {
                _super.call(this);
                this.ReactType = DetailReact;
                this.pRegName = "详细控件";
            }
            DetailVm.Test = function () {
                var _bean = new DetailVm();
                _bean.initDataValue("(空)");
                return _bean;
            };
            return DetailVm;
        }(BaseColVm));
        ui.DetailVm = DetailVm;
        var DetailStates = (function (_super) {
            __extends(DetailStates, _super);
            function DetailStates() {
                _super.apply(this, arguments);
            }
            return DetailStates;
        }(BaseColStates));
        ui.DetailStates = DetailStates;
        iocFile.Core.Ioc.Current().RegisterType("DetailVm", BaseColVm, DetailVm);
    })(ui = exports.ui || (exports.ui = {}));
});
