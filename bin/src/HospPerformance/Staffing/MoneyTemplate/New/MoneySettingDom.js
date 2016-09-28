var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../09Web/dom/ThDom", "./../../../../05tool/Modal/ModalDom", "./EditMoneySettingPage", "./MoneySettingRow"], function (require, exports, domFile, React, thFile, modalFile, EditMoneySettingPageFile, MoneySettingRow) {
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
                var _this = this;
                return React.createElement("div", null, React.createElement("p", null, React.createElement("a", {className: "btn btn-sm btn-primary m-b", onClick: function () { _this.NewOpt("all"); }}, "批量设定"), "*更新人员之后请重新设定薪资"), this._initTable(), this.props.Vm.ModalObj.intoDom());
            };
            MoneySettingDomReact.prototype._initTable = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-striped table-bordered table-hover"}, theader, tbody);
                return React.createElement("div", {className: "table-responsive", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            MoneySettingDomReact.prototype.NewOpt = function (val) {
                this.props.Vm.openModal(val);
            };
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
            function MoneySettingDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = MoneySettingDomReact;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.UserList = [];
                this.SalaryItemData = [];
                this.SalaryItemSetDataList = [];
                this.UserRowList = [];
                if (config) {
                    this.UniId = config.UniId;
                    this.SalaryItemSetDataList = config.SalaryItemSet;
                    if (config.UserList)
                        this.UserList = config.UserList;
                    this.UserList.map(function (a) {
                        _this.SalaryItemSetDataList.map(function (b) {
                            if (a.UserId == b.UserID) {
                                _this.SalaryItemValue = b;
                                var rowconfig = {
                                    Data: a,
                                    Unid: _this.UniId,
                                    SalaryItemValue: _this.SalaryItemValue,
                                    SalaryItemData: _this.SalaryItemData
                                };
                                var rowDom = new MoneySettingRow.MoneySettingRow.MoneySettingRowVm(rowconfig);
                                rowDom.IsChange = true;
                                rowDom.IsMulit = true;
                                _this.UserRowList.push(rowDom);
                            }
                        });
                    });
                }
                this.listenAppEvent("ItemListToMoneySetting", this.UniId, function (item) {
                    //var selectedValue = this.SelectorDom.UserListboxObj.dataValueGet();
                    _this.SalaryItemData = item;
                    _this.IsMulit = true;
                    _this.IsChange = true;
                    _this.forceUpdate("");
                });
                var modal = {
                    Title: "薪资批量设定",
                    ModalShowingFun: function (a, callback) {
                        var _config = { Data: [{ FID: "", Name: "", Fileds: "", Detail: "", Type: "" }], DataValue: _this.SalaryItemValue, Unid: _this.UniId, UserId: a.UniId, UserName: "" };
                        _this.SalaryItemSetDataList.map(function (s) {
                            if (a.UniId == s.UserID) {
                                _config.DataValue = s;
                            }
                        });
                        _config.Data = _this.SalaryItemData;
                        a.DomObj = new EditMoneySettingPageFile.EditMoneySettingPage.EditMoneySettingPageVm(_config);
                        callback();
                    },
                    ModalCloseFun: function (a) {
                        a.DomObj = null;
                    }
                };
                //this.MoneyTemplateDom = new MoneyTemplateDom.MoneyTemplateDom.MoneyTemplateDomVm();
                this.ModalObj = new modalFile.ModalDom.ModalDomVm(modal);
                this.listenAppEvent("UsersListToMoneySetting", this.UniId, function (item) {
                    _this.UserList = item;
                    _this.UserRowList = _this.UserRowList.filter(function (row) {
                        return false;
                    });
                    item.forEach(function (a) {
                        var rowconfig = {
                            Data: a,
                            Unid: _this.UniId,
                            SalaryItemValue: _this.SalaryItemValue,
                            SalaryItemData: _this.SalaryItemData
                        };
                        var rowDom = new MoneySettingRow.MoneySettingRow.MoneySettingRowVm(rowconfig);
                        rowDom.IsChange = true;
                        rowDom.IsMulit = true;
                        _this.UserRowList.push(rowDom);
                    });
                    _this.IsMulit = true;
                    _this.IsChange = true;
                    _this.forceUpdate("");
                });
                this.listenAppEvent("EditMoneyValues", this.UniId, function (item) {
                    //var selectedValue = this.SelectorDom.UserListboxObj.dataValueGet();
                    _this.ModalObj.close();
                    _this.SalaryItemSetDataList.push(item);
                    //this.SalaryItemData=item;
                    _this.IsMulit = true;
                    _this.IsChange = true;
                    _this.forceUpdate("");
                });
            }
            MoneySettingDomVm.prototype.openModal = function (val) {
                this.ModalObj.UniId = val;
                this.ModalObj.open();
            };
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
