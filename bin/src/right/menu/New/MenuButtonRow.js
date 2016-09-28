var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../02col/01single/Text", "./../../../02col/01single/Detail"], function (require, exports, domFile, React, textFile, DetailFile) {
    "use strict";
    var domCore = domFile.Core;
    var MenuButtonRow;
    (function (MenuButtonRow) {
        var MenuButtonRowAction = (function (_super) {
            __extends(MenuButtonRowAction, _super);
            function MenuButtonRowAction() {
                _super.apply(this, arguments);
            }
            return MenuButtonRowAction;
        }(domCore.DomAction));
        MenuButtonRow.MenuButtonRowAction = MenuButtonRowAction;
        var MenuButtonRowReact = (function (_super) {
            __extends(MenuButtonRowReact, _super);
            function MenuButtonRowReact() {
                _super.apply(this, arguments);
                this.state = new MenuButtonRowStates();
            }
            MenuButtonRowReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.ButtonData[fName] = _val;
                this.forceUpdate();
            };
            MenuButtonRowReact.prototype.fun_delButtonRow = function () {
                this.props.Vm.MenuRow.MenuMasterObj.MenuButtonRowList = [];
                this.props.Vm.MenuRow.MenuMasterObj.MenuData.MenuButtonList.splice(this.props.Vm.RowNumber > 0 ? this.props.Vm.RowNumber : 0, 1);
                this.props.Vm.MenuRow.forceUpdate("");
            };
            MenuButtonRowReact.prototype.initDetailTextData = function (colName, legal) {
                var _bean = new DetailFile.ui.DetailVm();
                _bean.Tag = colName;
                var value = 1;
                for (var i = 0; i < this.props.Vm.RowNumber; i++) {
                    value = value * 2;
                }
                //var dd = ((this.props.Vm.RowNumber + 1) * 2).toString();
                _bean.dataValueSet(value.toString());
                return _bean.intoDom();
            };
            MenuButtonRowReact.prototype.initTextBindData = function (colName, legal) {
                var _this = this;
                var _bean = new textFile.ui.TextVm();
                _bean.Tag = colName;
                var model = this.props.Vm.ButtonData[colName];
                debugger;
                if (colName == "FValue") {
                    var value = 1;
                    for (var i = 0; i < this.props.Vm.RowNumber; i++) {
                        value = value * 2;
                    }
                    //var dd = ((this.props.Vm.RowNumber + 1) * 2).toString();
                    _bean.dataValueSet(value.toString());
                }
                else {
                    _bean.dataValueSet(this.props.Vm.ButtonData[colName]);
                }
                _bean.LegalObj.Kind = legal ? legal : "notNull";
                _bean.onChangeHandle(function (val) {
                    _this.props.Vm.ButtonData[colName] = val;
                    return true;
                });
                this.props.Vm.TextVmObjList.push(_bean);
                return _bean.intoDom();
            };
            MenuButtonRowReact.prototype.pSender = function () {
                var _this = this;
                this.props.Vm.TextVmObjList = [];
                return React.createElement("tr", null, React.createElement("td", null, this.props.Vm.RowNumber + 1), React.createElement("td", null, this.initTextBindData("FName")), React.createElement("td", null, this.initTextBindData("FKey")), React.createElement("td", null, this.initDetailTextData("FValue", "SeatLegal")), React.createElement("td", null, this.initTextBindData("OrderId", "SeatLegal")), React.createElement("td", null, React.createElement("i", {className: "fa fa-minus-circle Hu-pointer red", onClick: function (e) { _this.fun_delButtonRow(); }})));
            };
            MenuButtonRowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MenuButtonRowReact;
        }(domCore.DomReact));
        MenuButtonRow.MenuButtonRowReact = MenuButtonRowReact;
        var MenuButtonRowVm = (function (_super) {
            __extends(MenuButtonRowVm, _super);
            function MenuButtonRowVm() {
                _super.apply(this, arguments);
                this.ReactType = MenuButtonRowReact;
            }
            MenuButtonRowVm.prototype.legal = function () {
                var _res = true;
                this.TextVmObjList.forEach(function (n) {
                    _res = n.legal() && _res;
                });
                return _res;
            };
            MenuButtonRowVm.prototype.checkRow = function () {
                //this.TextVmObjList.forEach((txtObj) => {
                //    alert(txtObj + "  已经修改了 " + (txtObj.vmDataValueGet() != txtObj.getOriValue()));
                //});
            };
            return MenuButtonRowVm;
        }(domCore.DomVm));
        MenuButtonRow.MenuButtonRowVm = MenuButtonRowVm;
        var MenuButtonRowStates = (function (_super) {
            __extends(MenuButtonRowStates, _super);
            function MenuButtonRowStates() {
                _super.apply(this, arguments);
            }
            return MenuButtonRowStates;
        }(domCore.DomStates));
        MenuButtonRow.MenuButtonRowStates = MenuButtonRowStates;
        var MenuButtonRowProps = (function (_super) {
            __extends(MenuButtonRowProps, _super);
            function MenuButtonRowProps() {
                _super.apply(this, arguments);
            }
            return MenuButtonRowProps;
        }(domCore.DomProps));
        MenuButtonRow.MenuButtonRowProps = MenuButtonRowProps;
    })(MenuButtonRow = exports.MenuButtonRow || (exports.MenuButtonRow = {}));
});
