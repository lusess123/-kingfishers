var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../01core/Util", "./MenuButtonRow", "./MenuUpdateMaster", "./../../../01core/Event"], function (require, exports, domFile, React, utilFile, menuButtonRowFile, menuInsertRowFile, eventFile) {
    "use strict";
    var domCore = domFile.Core;
    var MenuUpdateRow;
    (function (MenuUpdateRow) {
        var MenuUpdateRowAction = (function (_super) {
            __extends(MenuUpdateRowAction, _super);
            function MenuUpdateRowAction() {
                _super.apply(this, arguments);
            }
            return MenuUpdateRowAction;
        }(domCore.DomAction));
        MenuUpdateRow.MenuUpdateRowAction = MenuUpdateRowAction;
        var MenuUpdateRowReact = (function (_super) {
            __extends(MenuUpdateRowReact, _super);
            function MenuUpdateRowReact() {
                _super.apply(this, arguments);
                this.state = new MenuUpdateRowStates();
            }
            MenuUpdateRowReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            MenuUpdateRowReact.prototype.fun_masterTitleClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            MenuUpdateRowReact.prototype.fun_addNewButtonRow = function () {
                // this.props.Vm.MenuButtonRowList = [];
                this.props.Vm.addButtonRow();
                //this.props.Vm.MenuButtonRowList.pi
                //this.props.Vm.MenuMasterObj.MenuData.MenuButtonList.push({ FID: "", FName: "", FKey: "", FValue: "", OrderId: "" });
                //this.forceUpdate();
            };
            MenuUpdateRowReact.prototype.createMenuButtonRow = function (data, index) {
                var _this = this;
                var buttonRow = new menuButtonRowFile.MenuButtonRow.MenuButtonRowVm();
                buttonRow.ButtonData = data;
                buttonRow.RowNumber = index;
                buttonRow.MenuRow = _this.props.Vm;
                if (index > 0) {
                    buttonRow.PreviousButton = this.props.Vm.MenuButtonRowList[index - 1].ButtonData;
                }
                this.props.Vm.MenuButtonRowList.push(buttonRow);
                // buttonRow.MenuRow = this.props.Vm;
                return buttonRow.intoDom();
            };
            ;
            MenuUpdateRowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "Hu-row-title Hu-pointer", onClick: function () { _this.fun_masterTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsMasterHide ? "right" : "down")})), React.createElement("div", {className: this.props.Vm.IsMasterHide ? "hide" : ""}, this.props.Vm.MenuMasterObj.intoDom(), React.createElement("div", {className: "2"}, React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_detailTitleClick(); }}, "菜单按钮", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsDetailHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse" + (this.props.Vm.IsDetailHide ? " hide" : "")}, React.createElement("div", {className: "content active"}, React.createElement("div", {className: "table-responsive"}, React.createElement("table", {className: "table table-bordered table-striped"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll acsTextC", style: { width: "1em" }}), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement("th", null, React.createElement("span", null, "按钮名称")), React.createElement("th", null, React.createElement("span", null, "按钮值")), React.createElement("th", null, React.createElement("span", null, "编码")), React.createElement("th", null, React.createElement("span", null, "排序编号")), React.createElement("th", null, React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_addNewButtonRow(); }})))), React.createElement("tbody", null, this.props.Vm.MenuButtonRowList.map(function (row, i) {
                    row.RowNumber = i;
                    return row.intoDom();
                }))))))))));
            };
            MenuUpdateRowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MenuUpdateRowReact;
        }(domCore.DomReact));
        MenuUpdateRow.MenuUpdateRowReact = MenuUpdateRowReact;
        var MenuUpdateRowVm = (function (_super) {
            __extends(MenuUpdateRowVm, _super);
            function MenuUpdateRowVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = MenuUpdateRowReact;
                //public ParentSelector: treeSelectorFile.ui.TreeSingleSelectorVm;
                //public MenuTypeCombo: comboFile.ui.ComboVm;
                this.MenuButtonRowList = [];
                this.MenuMasterObj = new menuInsertRowFile.Right.MenuUpdateMasterVm();
                this.DelFidList = [];
                this.UniId = "";
                this.UniId = eventFile.App.getUniId().toString();
                if (config) {
                    config.MenuMasterConfig.UniId = this.UniId;
                    this.MenuMasterObj = new menuInsertRowFile.Right.MenuUpdateMasterVm(config.MenuMasterConfig);
                    config.MenuButtonRowConfigList.forEach(function (btRow, i) {
                        btRow.UniId = _this.UniId;
                        var _btnr = new menuButtonRowFile.MenuButtonRow.MenuButtonRowVm(btRow);
                        _btnr.RowNumber = i;
                        _this.MenuButtonRowList.push(_btnr);
                    });
                }
                this.listenAppEvent("right/menu/update/MenuButtonRow", this.UniId, function (rowIndex) {
                    _this.delMenuButtonRowByIndex(rowIndex);
                });
            }
            MenuUpdateRowVm.prototype.delMenuButtonRowByIndex = function (rowIndex) {
                // alert(rowIndex);
                var _id = this.MenuButtonRowList[rowIndex].ButtonData.FID;
                if (_id) {
                    this.DelFidList.push(_id);
                }
                this.MenuButtonRowList.splice(rowIndex, 1);
                this.MenuButtonRowList.forEach(function (r, i) {
                    if (i >= rowIndex) {
                        r.toChange();
                    }
                });
                this.forceUpdate("");
            };
            MenuUpdateRowVm.prototype.legal = function () {
                var _isres = this.MenuMasterObj.legal();
                this.MenuButtonRowList.forEach(function (r) {
                    _isres = _isres && r.legal();
                });
                return _isres;
            };
            MenuUpdateRowVm.prototype.getData = function () {
                var _list = [];
                this.MenuButtonRowList.forEach(function (r) {
                    var _obj = r.getData();
                    if (!utilFile.Core.Util.IsPure(_obj)) {
                        _list.push(_obj);
                    }
                });
                //  _data.MenuButtonList =
                var _data = this.MenuMasterObj.getData(_list.length > 0 || this.DelFidList.length > 0);
                if (this.DelFidList.length > 0) {
                    _data.DeleteButtonList = this.DelFidList;
                }
                if (_list.length > 0) {
                    _data.MenuButtonList = _list;
                }
                return _data;
            };
            MenuUpdateRowVm.prototype.addButtonRow = function () {
                var _val = 1;
                if (this.MenuButtonRowList.length > 0) {
                    var _lastrow = this.MenuButtonRowList[this.MenuButtonRowList.length - 1];
                    _val = this.getNextValue(parseInt(_lastrow.ButtonData.FValue));
                }
                var _data = { FID: null, FName: "", FKey: "", FValue: _val.toString(), OrderId: "0", ParentRightValue: this.MenuMasterObj.MenuData.Key };
                var _btRow = new menuButtonRowFile.MenuButtonRow.MenuButtonRowVm({ ButtonData: _data, IsNew: true, UniId: this.UniId });
                this.MenuButtonRowList.push(_btRow);
                this.forceUpdate("");
            };
            MenuUpdateRowVm.prototype.getNextValue = function (lastNumber) {
                var _n = (Math.log(lastNumber) / Math.log(2));
                return Math.pow(2, _n + 1);
            };
            return MenuUpdateRowVm;
        }(domCore.DomVm));
        MenuUpdateRow.MenuUpdateRowVm = MenuUpdateRowVm;
        var MenuUpdateRowStates = (function (_super) {
            __extends(MenuUpdateRowStates, _super);
            function MenuUpdateRowStates() {
                _super.apply(this, arguments);
            }
            return MenuUpdateRowStates;
        }(domCore.DomStates));
        MenuUpdateRow.MenuUpdateRowStates = MenuUpdateRowStates;
        var MenuUpdateRowProps = (function (_super) {
            __extends(MenuUpdateRowProps, _super);
            function MenuUpdateRowProps() {
                _super.apply(this, arguments);
            }
            return MenuUpdateRowProps;
        }(domCore.DomProps));
        MenuUpdateRow.MenuUpdateRowProps = MenuUpdateRowProps;
    })(MenuUpdateRow = exports.MenuUpdateRow || (exports.MenuUpdateRow = {}));
});
