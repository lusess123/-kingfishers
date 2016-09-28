var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../09Web/dom/ThDom"], function (require, exports, domFile, React, thFile) {
    "use strict";
    var domCore = domFile.Core;
    var MedicalBaseGridFormDom;
    (function (MedicalBaseGridFormDom) {
        var MedicalBaseGridFormDomAction = (function (_super) {
            __extends(MedicalBaseGridFormDomAction, _super);
            function MedicalBaseGridFormDomAction() {
                _super.apply(this, arguments);
            }
            return MedicalBaseGridFormDomAction;
        }(domCore.DomAction));
        MedicalBaseGridFormDom.MedicalBaseGridFormDomAction = MedicalBaseGridFormDomAction;
        var MedicalBaseGridFormDomReact = (function (_super) {
            __extends(MedicalBaseGridFormDomReact, _super);
            function MedicalBaseGridFormDomReact() {
                _super.apply(this, arguments);
            }
            MedicalBaseGridFormDomReact.prototype.pSender = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                return React.createElement("div", {className: "Hm-table", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            MedicalBaseGridFormDomReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            MedicalBaseGridFormDomReact.prototype.initHeader = function () {
                return null;
            };
            ;
            MedicalBaseGridFormDomReact.prototype.initBody = function () {
                var _this = this;
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return [row.intoDom(), _this.props.Vm.RowButtonList[index].intoDom()];
                }));
            };
            ;
            MedicalBaseGridFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            MedicalBaseGridFormDomReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            return MedicalBaseGridFormDomReact;
        }(domCore.DomReact));
        MedicalBaseGridFormDom.MedicalBaseGridFormDomReact = MedicalBaseGridFormDomReact;
        var MedicalBaseGridFormDomVm = (function (_super) {
            __extends(MedicalBaseGridFormDomVm, _super);
            function MedicalBaseGridFormDomVm(config) {
                _super.call(this);
                this.ReactType = MedicalBaseGridFormDomReact;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.CheckBoxList = new Array();
                this.FormData = [];
            }
            MedicalBaseGridFormDomVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return MedicalBaseGridFormDomVm;
        }(domCore.DomVm));
        MedicalBaseGridFormDom.MedicalBaseGridFormDomVm = MedicalBaseGridFormDomVm;
        var MedicalBaseGridFormDomStates = (function (_super) {
            __extends(MedicalBaseGridFormDomStates, _super);
            function MedicalBaseGridFormDomStates() {
                _super.apply(this, arguments);
            }
            return MedicalBaseGridFormDomStates;
        }(domCore.DomStates));
        MedicalBaseGridFormDom.MedicalBaseGridFormDomStates = MedicalBaseGridFormDomStates;
        var MedicalBaseGridFormDomProps = (function (_super) {
            __extends(MedicalBaseGridFormDomProps, _super);
            function MedicalBaseGridFormDomProps() {
                _super.apply(this, arguments);
            }
            return MedicalBaseGridFormDomProps;
        }(domCore.DomProps));
        MedicalBaseGridFormDom.MedicalBaseGridFormDomProps = MedicalBaseGridFormDomProps;
    })(MedicalBaseGridFormDom = exports.MedicalBaseGridFormDom || (exports.MedicalBaseGridFormDom = {}));
});
