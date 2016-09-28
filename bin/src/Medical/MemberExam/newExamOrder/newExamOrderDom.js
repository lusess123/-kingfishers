var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../02col/02Mulite/SingleCheckBox", "./mealGridRowDom", "./projGridRowDom"], function (require, exports, domFile, React, singleCheckFile, mealGridRowFile, projGridRowFile) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var ExamNewDom;
    (function (ExamNewDom) {
        var ExamNewDomAction = (function (_super) {
            __extends(ExamNewDomAction, _super);
            function ExamNewDomAction() {
                _super.apply(this, arguments);
            }
            return ExamNewDomAction;
        }(domCore.DomAction));
        ExamNewDom.ExamNewDomAction = ExamNewDomAction;
        var ExamNewDomReact = (function (_super) {
            __extends(ExamNewDomReact, _super);
            function ExamNewDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamNewDomStates();
            }
            ExamNewDomReact.prototype.fun_radioChange = function (e) {
                var _val = e.target["value"];
                if (_val == "1") {
                    this.props.Vm.isRadioSel = true;
                }
                else if (_val == "2") {
                    this.props.Vm.isRadioSel = false;
                }
                this.forceUpdate();
            };
            ExamNewDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "YSm-modals"}, React.createElement("h4", {className: "YSu-modal-title"}, "新增体检项"), React.createElement("div", {className: "YSm-modal-header clearfix"}, React.createElement("div", {className: "pull-left"}, React.createElement("div", {className: "radio"}, React.createElement("label", null, React.createElement("input", {type: "radio", name: "type", value: "1", onChange: function (a) { _this.fun_radioChange(a); }, defaultChecked: true}), "套餐类型"))), React.createElement("div", {className: "pull-left"}, React.createElement("div", {className: "radio"}, React.createElement("label", null, React.createElement("input", {type: "radio", name: "type", onChange: function (a) { _this.fun_radioChange(a); }, value: "2"}), "体检项目")))), React.createElement("div", {className: "YSm-modal-body clearfix"}, React.createElement("div", {className: "col-lg-9 col-md-9 col-sm-9 col-xs-9 YSm-modal-left"}, React.createElement("div", {className: "YSm-search"}, React.createElement("label", {className: " YSu-modal-label"}, "检索"), React.createElement("input", {type: "text", className: "Hg-width"})), this.props.Vm.isRadioSel ? this.createMealTable() : this.createProjTable()), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-3 col-xs-3 YSm-modal-right"}, React.createElement("p", {className: "YSu-title"}, "已选择项目"), React.createElement("ul", {className: "nav"}, React.createElement("li", {className: "nav-item"}, React.createElement("a", null, "血常规", React.createElement("i", {className: "fa fa-close"}))), React.createElement("li", {className: "nav-item"}, React.createElement("a", null, "内科", React.createElement("i", {className: "fa fa-close"}))), React.createElement("li", {className: "nav-item"}, React.createElement("a", null, "泌尿", React.createElement("i", {className: "fa fa-close"})))))), React.createElement("div", {className: "YSm-modal-footer text-center"}, React.createElement("a", {className: "btn btn-sm btn-secondary"}, "取消"), React.createElement("a", {className: "btn btn-sm btn-primary"}, "保存"))));
            };
            //创建选择框
            ExamNewDomReact.prototype.createCheckBox = function (obj) {
                var _this = this;
                var singleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                singleCheckVm.Tag = obj;
                this.props.Vm.CheckBoxList.push(singleCheckVm);
                singleCheckVm.ChangeEventFun = (function (val, col) {
                    _this.props.Vm.checkCheckBox(val, col);
                    return true;
                });
                return singleCheckVm.intoDom();
            };
            //套餐表格 
            ExamNewDomReact.prototype.createMealTable = function () {
                return (React.createElement("div", {className: "Hm-table table-responsive"}, React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, this.props.Vm.AllCheck.intoDom()), React.createElement("th", null, "套餐"), React.createElement("th", null, "套餐项目"), React.createElement("th", null, "价格（元）"))), this.initMealBody())));
            };
            ExamNewDomReact.prototype.initMealBody = function () {
                var _this = this;
                return (React.createElement("tbody", null, this.props.Vm.RowMealList.map(function (data) {
                    var rowVm = _this.createMealRow(data);
                    return rowVm;
                })));
            };
            //项目表格
            ExamNewDomReact.prototype.createProjTable = function () {
                return (React.createElement("div", {className: "Hm-table table-responsive"}, React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, this.props.Vm.AllCheck.intoDom()), React.createElement("th", null, "科室"), React.createElement("th", null, "项目"), React.createElement("th", null, "价格（元）"))), this.initProjBody())));
            };
            ExamNewDomReact.prototype.initProjBody = function () {
                var _this = this;
                return (React.createElement("tbody", null, this.props.Vm.RowProjList.map(function (data) {
                    var rowVm = _this.createProjRow(data);
                    return rowVm;
                })));
            };
            //创建套餐表格行
            ExamNewDomReact.prototype.createMealRow = function (data) {
                var _this = this;
                var rowVm = new mealGridRowFile.MealGridRowDom.MealGridRowDomVm();
                rowVm.RowData = data;
                rowVm.MealDomObj = this.props.Vm;
                this.props.Vm.RowMealList.push(rowVm);
                rowVm.SingleCheckboxVm.ChangeEventFun = (function (val, col) {
                    _this.props.Vm.checkCheckBox(val, col);
                    rowVm.forceUpdate("");
                    return true;
                });
                return rowVm.intoDom();
            };
            //创建体检项目表格行
            ExamNewDomReact.prototype.createProjRow = function (data) {
                var _this = this;
                var rowVm = new projGridRowFile.ProjGridRowDom.ProjGridRowDomVm();
                rowVm.RowData = data;
                rowVm.ProjDomObj = this.props.Vm;
                this.props.Vm.RowProjList.push(rowVm);
                rowVm.SingleCheckboxVm.ChangeEventFun = (function (val, col) {
                    _this.props.Vm.checkCheckBox(val, col);
                    rowVm.forceUpdate("");
                    return true;
                });
                return rowVm.intoDom();
            };
            ExamNewDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamNewDomReact;
        }(domCore.DomReact));
        ExamNewDom.ExamNewDomReact = ExamNewDomReact;
        var ExamNewDomVm = (function (_super) {
            __extends(ExamNewDomVm, _super);
            function ExamNewDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ExamNewDomReact;
                this.isRadioSel = true;
                this.CheckBoxList = new Array(); //选择框
                this.RowMealList = new Array();
                this.RowProjList = new Array();
                //if (config) {
                //    this.tableData.data1 = config.data1;
                //    this.tableData.data2 = config.data2;
                //}
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                this.AllCheck.ChangeEventFun = (function (val, col) {
                    _this.allCheckChecked(val, col);
                    return true;
                });
            }
            //选择框
            ExamNewDomVm.prototype.checkCheckBox = function (val, checkDom) {
                window["isHand"] = true;
                var isCheck = false;
                var misAllCheck = true;
                var pisAllCheck = true;
                var checkCount = 0;
                if (val == "true") {
                    isCheck = true;
                }
                this.RowMealList.forEach(function (row) {
                    var chk = row.SingleCheckboxVm;
                    var _val = chk.dataValue();
                    if (_val == "true" && checkDom != chk) {
                        isCheck = true;
                        checkCount++;
                    }
                    if (checkDom == chk) {
                        if (val == "true") {
                            checkCount++;
                        }
                    }
                });
                this.RowProjList.forEach(function (row) {
                    var chk = row.SingleCheckboxVm;
                    var _val = chk.dataValue();
                    if (_val == "true" && checkDom != chk) {
                        isCheck = true;
                        checkCount++;
                    }
                    if (checkDom == chk) {
                        if (val == "true") {
                            checkCount++;
                        }
                    }
                });
                misAllCheck = this.RowMealList.length == checkCount ? true : false;
                pisAllCheck = this.RowProjList.length == checkCount ? true : false;
                this.AllCheck.vmDataValueSet(misAllCheck ? "true" : "false");
                this.AllCheck.vmDataValueSet(pisAllCheck ? "true" : "false");
                this.AllCheck.forceUpdate("", function () {
                    window["isHand"] = false;
                });
            };
            ExamNewDomVm.prototype.allCheckChecked = function (val, checkDom) {
                if (!window["isHand"]) {
                    this.CheckBoxList.forEach(function (chk) {
                        chk.reactDataValueSet(val);
                    });
                    //套餐全选
                    this.RowMealList.forEach(function (row) {
                        var chk = row.SingleCheckboxVm;
                        chk.reactDataValueSet(val);
                    });
                    //体检项目全选
                    this.RowProjList.forEach(function (row) {
                        var chk = row.SingleCheckboxVm;
                        chk.reactDataValueSet(val);
                    });
                }
            };
            return ExamNewDomVm;
        }(domCore.DomVm));
        ExamNewDom.ExamNewDomVm = ExamNewDomVm;
        var ExamNewDomStates = (function (_super) {
            __extends(ExamNewDomStates, _super);
            function ExamNewDomStates() {
                _super.apply(this, arguments);
            }
            return ExamNewDomStates;
        }(domCore.DomStates));
        ExamNewDom.ExamNewDomStates = ExamNewDomStates;
        var ExamNewDomProps = (function (_super) {
            __extends(ExamNewDomProps, _super);
            function ExamNewDomProps() {
                _super.apply(this, arguments);
            }
            return ExamNewDomProps;
        }(domCore.DomProps));
        ExamNewDom.ExamNewDomProps = ExamNewDomProps;
    })(ExamNewDom = exports.ExamNewDom || (exports.ExamNewDom = {}));
});
