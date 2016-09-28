var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../09Web/dom/ThDom", "./MoneySettingRow"], function (require, exports, domFile, React, thFile, MoneySettingRow) {
    "use strict";
    var domCore = domFile.Core;
    var MoneySettingDom;
    (function (MoneySettingDom) {
        var MoneySettingDomAction = (function (_super) {
            __extends(MoneySettingDomAction, _super);
            function MoneySettingDomAction() {
                _super.apply(this, arguments);
            }
            return MoneySettingDomAction;
        }(domCore.DomAction));
        MoneySettingDom.MoneySettingDomAction = MoneySettingDomAction;
        var MoneySettingDomReact = (function (_super) {
            __extends(MoneySettingDomReact, _super);
            function MoneySettingDomReact() {
                _super.apply(this, arguments);
                this.state = new MoneySettingDomStates();
            }
            MoneySettingDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this._initTable());
            };
            MoneySettingDomReact.prototype._initTable = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-striped table-bordered table-hover"}, theader, tbody);
                return React.createElement("div", {className: "table-responsive", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            //public NewOpt(val: string) {
            //    this.props.Vm.openModal(val);
            //}
            MoneySettingDomReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            MoneySettingDomReact.prototype.initHeader = function () {
                return React.createElement("tr", null, React.createElement("th", null, "员工"), React.createElement("th", null, "员工编号"), React.createElement("th", null, "职位"), React.createElement("th", null, "操作"));
            };
            ;
            MoneySettingDomReact.prototype.initBody = function () {
                return React.createElement("tbody", null, this.props.Vm.UserRowList.map(function (r) {
                    return r.intoDom();
                }));
            };
            ;
            MoneySettingDomReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            //public NewOpt(vals: string) {
            //    this.props.Vm.openModal();
            //}
            MoneySettingDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MoneySettingDomReact;
        }(domCore.DomReact));
        MoneySettingDom.MoneySettingDomReact = MoneySettingDomReact;
        var MoneySettingDomVm = (function (_super) {
            __extends(MoneySettingDomVm, _super);
            //public openModal(val: string) {
            //    this.ModalObj.UniId = val;
            //    this.ModalObj.open();
            //}
            function MoneySettingDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = MoneySettingDomReact;
                //public ModalObj: modalFile.ModalDom.ModalDomVm;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.UserList = [];
                this.SalaryItemSetDataList = [];
                this.UserRowList = [];
                if (config) {
                    this.UniId = config.UniId;
                    if (config.UserList)
                        this.UserList = config.UserList;
                    if (config.SalaryItemSet)
                        this.SalaryItemSetDataList = config.SalaryItemSet;
                    this.UserList.map(function (a) {
                        _this.SalaryItemSetDataList.map(function (b) {
                            if (a.UserId == b.UserID) {
                                _this.SalaryItemValue = b;
                                var rowconfig = {
                                    Data: a,
                                    Unid: _this.UniId,
                                    SalaryItemValue: _this.SalaryItemValue
                                };
                                var rowDom = new MoneySettingRow.MoneySettingRow.MoneySettingRowVm(rowconfig);
                                rowDom.IsChange = true;
                                rowDom.IsMulit = true;
                                _this.UserRowList.push(rowDom);
                            }
                        });
                    });
                }
                //this.listenAppEvent("ItemListToMoneySetting", this.UniId, (item: dataFile.Data.ISalaryItem[]) => {
                //    //var selectedValue = this.SelectorDom.UserListboxObj.dataValueGet();
                //    this.SalaryItemData = item;
                //    this.IsMulit = true;
                //    this.IsChange = true;
                //    this.forceUpdate("");
                //});
                //var modal: modalFile.ModalDom.IModalDomConfig = {
                //    Title: "薪资设定",
                //    ModalShowingFun: (a, callback) => {
                //        var _config: EditMoneySettingPageFile.EditMoneySettingPage.IEditMoneySettingPageConfig = { DataValue: this.SalaryItemValue, Unid: this.UniId, UserId: a.UniId }
                //        this.SalaryItemSetDataList.map(s => {
                //            if (a.UniId == s.UserID) {
                //                _config.DataValue = s.SalaryItemValue;
                //            }
                //        })
                //        _config.Data = this.SalaryItemValue;
                //        a.DomObj = new EditMoneySettingPageFile.EditMoneySettingPage.EditMoneySettingPageVm(_config);
                //        callback();
                //    },
                //    ModalCloseFun: (a) => {
                //        a.DomObj = null;
                //    }
                //};
                //this.MoneyTemplateDom = new MoneyTemplateDom.MoneyTemplateDom.MoneyTemplateDomVm();
                //this.ModalObj = new modalFile.ModalDom.ModalDomVm(modal);
                //this.listenAppEvent("UsersListToMoneySetting", this.UniId, (item: dataFile.Data.IUsersData[]) => {
                //    this.UserList = item;
                //    this.UserRowList = this.UserRowList.filter(row => {
                //        return false;
                //    })
                //    item.forEach(a => {
                //        var rowconfig: MoneySettingRow.MoneySettingRow.IMoneySettingRowConfig = {
                //            Data: a,
                //            Unid: this.UniId,
                //            SalaryItemData: this.SalaryItemData
                //        }
                //        var rowDom = new MoneySettingRow.MoneySettingRow.MoneySettingRowVm(rowconfig);
                //        rowDom.IsChange = true;
                //        rowDom.IsMulit = true;
                //        this.UserRowList.push(rowDom);
                //    })
                //    this.IsMulit = true;
                //    this.IsChange = true;
                //    this.forceUpdate("");
                //});
                //this.listenAppEvent("EditMoneyValues", this.UniId, (item: dataFile.Data.ISalaryItemSet) => {
                //    //var selectedValue = this.SelectorDom.UserListboxObj.dataValueGet();
                //    this.ModalObj.close();
                //    this.SalaryItemSetDataList.push(item);
                //    //this.SalaryItemData=item;
                //    this.IsMulit = true;
                //    this.IsChange = true;
                //    this.forceUpdate("");
                //});
            }
            MoneySettingDomVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return MoneySettingDomVm;
        }(domCore.DomVm));
        MoneySettingDom.MoneySettingDomVm = MoneySettingDomVm;
        var MoneySettingDomStates = (function (_super) {
            __extends(MoneySettingDomStates, _super);
            function MoneySettingDomStates() {
                _super.apply(this, arguments);
            }
            return MoneySettingDomStates;
        }(domCore.DomStates));
        MoneySettingDom.MoneySettingDomStates = MoneySettingDomStates;
        var MoneySettingDomProps = (function (_super) {
            __extends(MoneySettingDomProps, _super);
            function MoneySettingDomProps() {
                _super.apply(this, arguments);
            }
            return MoneySettingDomProps;
        }(domCore.DomProps));
        MoneySettingDom.MoneySettingDomProps = MoneySettingDomProps;
    })(MoneySettingDom = exports.MoneySettingDom || (exports.MoneySettingDom = {}));
});
