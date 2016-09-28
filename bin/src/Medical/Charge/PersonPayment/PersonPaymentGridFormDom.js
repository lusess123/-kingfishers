var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "./../../../01core/event", "react", "./PersonPaymentRowDom", "./../../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, eventFile, React, row, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var PersonPaymentGridFormDom;
    (function (PersonPaymentGridFormDom) {
        var PersonPaymentGridFormDomAction = (function (_super) {
            __extends(PersonPaymentGridFormDomAction, _super);
            function PersonPaymentGridFormDomAction() {
                _super.apply(this, arguments);
            }
            return PersonPaymentGridFormDomAction;
        }(domCore.DomAction));
        PersonPaymentGridFormDom.PersonPaymentGridFormDomAction = PersonPaymentGridFormDomAction;
        var PersonPaymentGridFormDomReact = (function (_super) {
            __extends(PersonPaymentGridFormDomReact, _super);
            function PersonPaymentGridFormDomReact() {
                _super.apply(this, arguments);
                this.state = new PersonPaymentGridFormDomStates();
            }
            PersonPaymentGridFormDomReact.prototype.pSender = function () {
                return React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, this.props.Vm.AllCheck.intoDom()), React.createElement("th", null, "体检人"), React.createElement("th", null, "体检时间"), React.createElement("th", null, "缴费时间"), React.createElement("th", {className: "text-right"}, "缴费金额（元）"), React.createElement("th", null, "单位"), React.createElement("th", null, "状态"))), React.createElement("tbody", null, this.props.Vm.RowItemList ?
                    this.props.Vm.RowItemList.map(function (row, index) {
                        return row.intoDom();
                    }) : null));
            };
            PersonPaymentGridFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return PersonPaymentGridFormDomReact;
        }(domCore.DomReact));
        PersonPaymentGridFormDom.PersonPaymentGridFormDomReact = PersonPaymentGridFormDomReact;
        var PersonPaymentGridFormDomVm = (function (_super) {
            __extends(PersonPaymentGridFormDomVm, _super);
            function PersonPaymentGridFormDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = PersonPaymentGridFormDomReact;
                this.RowItemList = new Array();
                if (config) {
                    this.List = config.Data;
                    this.UniId = eventFile.App.getUniId().toString();
                    this.List.map(function (data, number) {
                        var rowdata = { data: data, number: number + 1, Unid: _this.UniId };
                        var rowVm = new row.PersonPaymentRowDom.PersonPaymentRowDomVm(rowdata);
                        _this.RowItemList.push(rowVm);
                    });
                }
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                this.AllCheck.ChangeEventFun = function (val, col) {
                    _this.allselect(val);
                    return true;
                };
                this.listenAppEvent("medical/personpayment/Row", this.UniId, function () {
                    _this.IsMulit = true;
                    _this.IsChange = true;
                    _this.forceUpdate("");
                });
            }
            PersonPaymentGridFormDomVm.prototype.allselect = function (select) {
                var val;
                if (select == "true") {
                    val = "1";
                }
                else if (select == "false") {
                    val = "0";
                }
                this.List.forEach(function (a) {
                    a.isSelect = val;
                });
                this.RowItemList.forEach(function (a) {
                    if (val == "1") {
                        a.AllCheck.dataValueSet("true");
                    }
                    else if (val == "0") {
                        a.AllCheck.dataValueSet("false");
                    }
                });
            };
            return PersonPaymentGridFormDomVm;
        }(domCore.DomVm));
        PersonPaymentGridFormDom.PersonPaymentGridFormDomVm = PersonPaymentGridFormDomVm;
        var PersonPaymentGridFormDomStates = (function (_super) {
            __extends(PersonPaymentGridFormDomStates, _super);
            function PersonPaymentGridFormDomStates() {
                _super.apply(this, arguments);
            }
            return PersonPaymentGridFormDomStates;
        }(domCore.DomStates));
        PersonPaymentGridFormDom.PersonPaymentGridFormDomStates = PersonPaymentGridFormDomStates;
        var PersonPaymentGridFormDomProps = (function (_super) {
            __extends(PersonPaymentGridFormDomProps, _super);
            function PersonPaymentGridFormDomProps() {
                _super.apply(this, arguments);
            }
            return PersonPaymentGridFormDomProps;
        }(domCore.DomProps));
        PersonPaymentGridFormDom.PersonPaymentGridFormDomProps = PersonPaymentGridFormDomProps;
    })(PersonPaymentGridFormDom = exports.PersonPaymentGridFormDom || (exports.PersonPaymentGridFormDom = {}));
});
