var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Ioc", "react", "./EditMoneyRow"], function (require, exports, domFile, iocFile, React, EditMoneyRow) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var EditMoneySettingPage;
    (function (EditMoneySettingPage) {
        var EditMoneySettingPageAction = (function (_super) {
            __extends(EditMoneySettingPageAction, _super);
            function EditMoneySettingPageAction() {
                _super.apply(this, arguments);
            }
            return EditMoneySettingPageAction;
        }(domCore.DomAction));
        EditMoneySettingPage.EditMoneySettingPageAction = EditMoneySettingPageAction;
        var EditMoneySettingPageReact = (function (_super) {
            __extends(EditMoneySettingPageReact, _super);
            function EditMoneySettingPageReact() {
                _super.apply(this, arguments);
                this.state = new EditMoneySettingPageStates();
            }
            EditMoneySettingPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "p-a-md"}, React.createElement("p", null, "薪资人员：", this.props.Vm.UserName), this._initTable(), React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.Submit(); }}, "保存")));
            };
            EditMoneySettingPageReact.prototype._initTable = function () {
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-striped table-bordered table-hover"}, theader, tbody);
                return React.createElement("div", {className: "table-responsive"}, table);
            };
            EditMoneySettingPageReact.prototype.initHeader = function () {
                return React.createElement("tr", null, React.createElement("th", null, "薪资项目"), React.createElement("th", null, "值"));
            };
            ;
            EditMoneySettingPageReact.prototype.initBody = function () {
                return React.createElement("tbody", null, this.props.Vm.SalaryItemRowList.map(function (r) {
                    return r.intoDom();
                }));
            };
            ;
            //获得输入框的对应的值
            EditMoneySettingPageReact.prototype.getInputValues = function () {
                var _list = [];
                this.props.Vm.SalaryItemRowList.map(function (r) {
                    _list.unshift(r.SalaryItemValue);
                });
                this.forceUpdate();
                return _list;
            };
            EditMoneySettingPageReact.prototype.Submit = function () {
                //this.getInputValues();
                this.props.Vm.Submit(this.getInputValues());
            };
            //public GridRowVm:  EditMoneyRow.EditMoneyRow.EditMoneyRowVm;
            ////根据数据创建每一行
            //public createGridRow(data: any): React.ReactElement<any> {
            //    var rowVm = new EditMoneyRow.EditMoneyRow.EditMoneyRowVm();
            //    rowVm.salaryItemData = data;
            //    rowVm.rowObj = this.props.Vm;            
            //    this.props.Vm.SalaryItemRowList.push(rowVm);
            //    //分页
            //    rowVm.IsChange = true;
            //    this.GridRowVm = rowVm;
            //    return rowVm.intoDom();
            //}
            EditMoneySettingPageReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return EditMoneySettingPageReact;
        }(domCore.DomReact));
        EditMoneySettingPage.EditMoneySettingPageReact = EditMoneySettingPageReact;
        var EditMoneySettingPageVm = (function (_super) {
            __extends(EditMoneySettingPageVm, _super);
            function EditMoneySettingPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = EditMoneySettingPageReact;
                this.SalaryItemRowList = [];
                this.SalaryItemSetData = { UserID: "", SalaryItemValue: [{ SalaryItemID: { FID: "", Fileds: "", Name: "", Detail: "", Type: "" }, Value: "" }] };
                if (config) {
                    this.UniId = config.Unid;
                    this.salaryItemData = config.Data;
                    this.UserID = config.UserId;
                    this.UserName = config.UserName == "all" || config.UserName == "" ? "全体人员" : config.UserName;
                    if (config.DataValue) {
                        this.SalaryItemValue = config.DataValue;
                        var value = "";
                        if (config.Data.length > 0) {
                            this.salaryItemData.map(function (v) {
                                if (v.Type == "输入项") {
                                    var rowconfig = { Data: { SalaryItemID: v, Value: "" }, Unid: _this.UniId };
                                    _this.SalaryItemValue.SalaryItemValue.map(function (s) {
                                        if (v.FID == s.SalaryItemID.FID) {
                                            rowconfig.Data.Value = s.Value;
                                        }
                                    });
                                    var rowDom = new EditMoneyRow.EditMoneyRow.EditMoneyRowVm(rowconfig);
                                    rowDom.IsChange = true;
                                    rowDom.IsMulit = true;
                                    _this.SalaryItemRowList.push(rowDom);
                                }
                            });
                        }
                        else {
                            this.SalaryItemValue.SalaryItemValue.map(function (a) {
                                if (a.SalaryItemID.Type == "输入项") {
                                    var rowconfig = { Data: { SalaryItemID: a.SalaryItemID, Value: a.Value }, Unid: _this.UniId };
                                    var rowDom = new EditMoneyRow.EditMoneyRow.EditMoneyRowVm(rowconfig);
                                    rowDom.IsChange = true;
                                    rowDom.IsMulit = true;
                                    _this.SalaryItemRowList.push(rowDom);
                                }
                            });
                        }
                    }
                    else {
                        this.salaryItemData.map(function (a) {
                            if (a.Type == "输入项") {
                                var rowconfig = { Data: { SalaryItemID: a, Value: "" }, Unid: _this.UniId };
                                var rowDom = new EditMoneyRow.EditMoneyRow.EditMoneyRowVm(rowconfig);
                                rowDom.IsChange = true;
                                rowDom.IsMulit = true;
                                _this.SalaryItemRowList.push(rowDom);
                            }
                        });
                    }
                }
            }
            EditMoneySettingPageVm.prototype.legal = function () {
                var _isRes = true;
                this.SalaryItemRowList.forEach(function (row) {
                    if (!row.legal()) {
                        _isRes = false;
                    }
                });
                return _isRes;
            };
            EditMoneySettingPageVm.prototype.Submit = function (data) {
                if (this.legal()) {
                    this.SalaryItemSetData.UserID = this.UserID;
                    this.SalaryItemSetData.SalaryItemValue = data;
                    this.emitAppEvent("EditMoneyValues", this.UniId, this.SalaryItemSetData);
                    this.IsChange = true;
                    this.forceUpdate("");
                }
            };
            return EditMoneySettingPageVm;
        }(domCore.DomVm));
        EditMoneySettingPage.EditMoneySettingPageVm = EditMoneySettingPageVm;
        var EditMoneySettingPageStates = (function (_super) {
            __extends(EditMoneySettingPageStates, _super);
            function EditMoneySettingPageStates() {
                _super.apply(this, arguments);
            }
            return EditMoneySettingPageStates;
        }(domCore.DomStates));
        EditMoneySettingPage.EditMoneySettingPageStates = EditMoneySettingPageStates;
        var EditMoneySettingPageProps = (function (_super) {
            __extends(EditMoneySettingPageProps, _super);
            function EditMoneySettingPageProps() {
                _super.apply(this, arguments);
            }
            return EditMoneySettingPageProps;
        }(domCore.DomProps));
        EditMoneySettingPage.EditMoneySettingPageProps = EditMoneySettingPageProps;
        iocFile.Core.Ioc.Current().RegisterType("EditMoneySettingPage", domCore.DomVm, EditMoneySettingPageVm);
    })(EditMoneySettingPage = exports.EditMoneySettingPage || (exports.EditMoneySettingPage = {}));
});
