var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./PackageSelectorFormDom", "./ItemSelectorFormDom"], function (require, exports, domFile, React, packageFormFile, itemFormFile) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var ExamPackageSelectorDomDom;
    (function (ExamPackageSelectorDomDom) {
        var ExamPackageSelectorDomAction = (function (_super) {
            __extends(ExamPackageSelectorDomAction, _super);
            function ExamPackageSelectorDomAction() {
                _super.apply(this, arguments);
            }
            return ExamPackageSelectorDomAction;
        }(domCore.DomAction));
        ExamPackageSelectorDomDom.ExamPackageSelectorDomAction = ExamPackageSelectorDomAction;
        var ExamPackageSelectorDomReact = (function (_super) {
            __extends(ExamPackageSelectorDomReact, _super);
            function ExamPackageSelectorDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamPackageSelectorDomStates();
            }
            ExamPackageSelectorDomReact.prototype.fun_radioChange = function (e) {
                var _val = e.target["value"];
                if (_val == "1") {
                    this.props.Vm.isRadioSel = true;
                }
                else if (_val == "2") {
                    this.props.Vm.isRadioSel = false;
                }
                this.props.Vm.radioClick();
                this.forceUpdate();
            };
            ExamPackageSelectorDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "YSm-modals"}, React.createElement("div", {className: "YSm-modal-header clearfix"}, React.createElement("div", {className: "pull-left"}, React.createElement("div", {className: "radio"}, React.createElement("label", null, React.createElement("input", {type: "radio", name: "type", value: "1", onChange: function (a) { _this.fun_radioChange(a); }, checked: this.props.Vm.isRadioSel}), "套餐类型"))), React.createElement("div", {className: "pull-left"}, React.createElement("div", {className: "radio"}, React.createElement("label", null, React.createElement("input", {type: "radio", name: "type", onChange: function (a) { _this.fun_radioChange(a); }, value: "2", checked: !this.props.Vm.isRadioSel}), "体检项目")))), React.createElement("div", {className: "YSm-modal-body clearfix"}, React.createElement("div", {className: this.props.Vm.isRadioSel ? "" : " hide "}, this._tDom(this.props.Vm.PackageFormVm, { nullNode: React.createElement("span", null, "请载入表单") })), React.createElement("div", {className: this.props.Vm.isRadioSel ? " hide " : ""}, "  ", this._tDom(this.props.Vm.ItemFormVm)))));
            };
            //创建选择框
            //public createCheckBox(obj?: any): React.ReactElement<any> {
            //    var singleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
            //    singleCheckVm.Tag = obj;
            //    this.props.Vm.CheckBoxList.push(singleCheckVm);
            //    singleCheckVm.ChangeEventFun = ((val, col) => {
            //        this.props.Vm.checkCheckBox(val, col);
            //        return true;
            //    });
            //    return singleCheckVm.intoDom();
            //}
            //套餐表格 
            //public createMealTable(): React.ReactElement<any> {
            //    return (
            //        <div className="Hm-table table-responsive">
            //            <table className="table table-striped table-bordered table-hover">
            //                <thead>
            //                    <tr>
            //                        <td>{this.props.Vm.AllCheck.intoDom() }</td>
            //                        <td>套餐</td>
            //                        <td>套餐项目</td>
            //                        <td>价格（元）</td>
            //                    </tr>
            //                </thead>
            //                {this.initMealBody() }
            //            </table>
            //        </div>
            //    )
            //}
            //public initMealBody(): React.ReactElement<any> {
            //    return (
            //        <tbody>
            //            {this.props.Vm.RowMealList.map((data) => {
            //                var rowVm = this.createMealRow(data);
            //                return rowVm;
            //            }) }
            //        </tbody>
            //    )
            //}
            ////项目表格
            //public createProjTable(): React.ReactElement<any> {
            //    return (
            //        <div className="Hm-table table-responsive">
            //            <table className="table table-striped table-bordered table-hover">
            //                <thead>
            //                    <tr>
            //                        <td>{this.props.Vm.AllCheck.intoDom() }</td>
            //                        <td>科室</td>
            //                        <td>项目</td>
            //                        <td>价格（元）</td>
            //                    </tr>
            //                </thead>
            //                {this.initProjBody() }
            //            </table>
            //        </div>
            //    )
            //}
            //public initProjBody(): React.ReactElement<any> {
            //    return (
            //        <tbody>
            //            {this.props.Vm.RowProjList.map((data) => {
            //                var rowVm = this.createProjRow(data);
            //                return rowVm;
            //            }) }
            //        </tbody>
            //    )
            //}
            ////创建套餐表格行
            //public createMealRow(data: any): React.ReactElement<any> {
            //    var rowVm = new mealGridRowFile.MealGridRowDom.MealGridRowDomVm();
            //    rowVm.RowData = data;
            //    rowVm.MealDomObj = this.props.Vm;
            //    this.props.Vm.RowMealList.push(rowVm);
            //    rowVm.SingleCheckboxVm.ChangeEventFun = ((val, col) => {
            //        this.props.Vm.checkCheckBox(val, col);
            //        rowVm.forceUpdate("");
            //        return true;
            //    });
            //    return rowVm.intoDom();
            //}
            ////创建体检项目表格行
            //public createProjRow(data: any): React.ReactElement<any> {
            //    var rowVm = new projGridRowFile.ProjGridRowDom.ProjGridRowDomVm();
            //    rowVm.RowData = data;
            //    rowVm.ProjDomObj = this.props.Vm;
            //    this.props.Vm.RowProjList.push(rowVm);
            //    rowVm.SingleCheckboxVm.ChangeEventFun = ((val, col) => {
            //        this.props.Vm.checkCheckBox(val, col);
            //        rowVm.forceUpdate("");
            //        return true;
            //    })
            //    return rowVm.intoDom();
            //}
            ExamPackageSelectorDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamPackageSelectorDomReact;
        }(domCore.DomReact));
        ExamPackageSelectorDomDom.ExamPackageSelectorDomReact = ExamPackageSelectorDomReact;
        var ExamPackageSelectorDomVm = (function (_super) {
            __extends(ExamPackageSelectorDomVm, _super);
            // public IsPackageChecked: boolean = true;
            function ExamPackageSelectorDomVm(config) {
                _super.call(this);
                this.ReactType = ExamPackageSelectorDomReact;
                this.isRadioSel = true;
                this.CheckBoxList = new Array(); //选择框
                if (config) {
                    this.UniId = config.UniId;
                    if (config.PackagePagerListData && config.ItemPagerListData) {
                        this.init(config);
                    }
                }
                //if (config) {
                //    this.tableData.data1 = config.data1;
                //    this.tableData.data2 = config.data2;
                //}
                //this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                //this.AllCheck.ChangeEventFun = ((val, col) => {
                //    this.allCheckChecked(val, col);
                //    return true;
                //});
            }
            ExamPackageSelectorDomVm.prototype.radioClick = function () {
                if (this.isRadioSel) {
                    this.emitAppEvent("pickerSelect-HideOrShow", this.UniId, false);
                }
                else {
                    this.emitAppEvent("pickerSelect-HideOrShow", this.UniId, true);
                }
            };
            ExamPackageSelectorDomVm.prototype.init = function (config) {
                //if (config&&config.UniId)
                //{
                //    this.UniId = config.UniId;
                //}
                this.PackageFormVm = new packageFormFile.PackageSelectorFormDom.PackageSelectorFormDomVm({
                    PagerListData: config.PackagePagerListData,
                    UniId: this.UniId,
                    IsGroup: config.IsGroup
                });
                this.ItemFormVm = new itemFormFile.ItemSelectorFormDom.ItemSelectorFormDomVm({
                    PagerListData: config.ItemPagerListData,
                    UniId: this.UniId
                });
            };
            return ExamPackageSelectorDomVm;
        }(domCore.DomVm));
        ExamPackageSelectorDomDom.ExamPackageSelectorDomVm = ExamPackageSelectorDomVm;
        var ExamPackageSelectorDomStates = (function (_super) {
            __extends(ExamPackageSelectorDomStates, _super);
            function ExamPackageSelectorDomStates() {
                _super.apply(this, arguments);
            }
            return ExamPackageSelectorDomStates;
        }(domCore.DomStates));
        ExamPackageSelectorDomDom.ExamPackageSelectorDomStates = ExamPackageSelectorDomStates;
        var ExamPackageSelectorDomProps = (function (_super) {
            __extends(ExamPackageSelectorDomProps, _super);
            function ExamPackageSelectorDomProps() {
                _super.apply(this, arguments);
            }
            return ExamPackageSelectorDomProps;
        }(domCore.DomProps));
        ExamPackageSelectorDomDom.ExamPackageSelectorDomProps = ExamPackageSelectorDomProps;
    })(ExamPackageSelectorDomDom = exports.ExamPackageSelectorDomDom || (exports.ExamPackageSelectorDomDom = {}));
});
