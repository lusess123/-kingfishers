var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Url", "react", "./../../../../05tool/Modal/ModalDom", "./EditMoneySettingPage"], function (require, exports, domFile, urlFile, React, modalFile, EditMoneySettingPageFile) {
    "use strict";
    var domCore = domFile.Core;
    var MoneySettingRow;
    (function (MoneySettingRow) {
        var MoneySettingRowAction = (function (_super) {
            __extends(MoneySettingRowAction, _super);
            function MoneySettingRowAction() {
                _super.apply(this, arguments);
            }
            return MoneySettingRowAction;
        }(domCore.DomAction));
        MoneySettingRow.MoneySettingRowAction = MoneySettingRowAction;
        var MoneySettingRowReact = (function (_super) {
            __extends(MoneySettingRowReact, _super);
            function MoneySettingRowReact() {
                _super.apply(this, arguments);
                this.state = new MoneySettingRowStates();
            }
            MoneySettingRowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", null, React.createElement("td", null, this.props.Vm.UserData.TrueName), React.createElement("td", null, this.props.Vm.Fnumber), React.createElement("td", null, this.props.Vm.UserData.PositionName), React.createElement("td", null, React.createElement("a", {className: "text-primary", onClick: function () { _this.NewOpt(_this.props.Vm.UserData.UserId); }}, "薪资设定")), this.props.Vm.ModalObj.intoDom());
            };
            MoneySettingRowReact.prototype.NewOpt = function (vals) {
                this.props.Vm.openModal(vals);
            };
            MoneySettingRowReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return MoneySettingRowReact;
        }(domCore.DomReact));
        MoneySettingRow.MoneySettingRowReact = MoneySettingRowReact;
        var MoneySettingRowVm = (function (_super) {
            __extends(MoneySettingRowVm, _super);
            function MoneySettingRowVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = MoneySettingRowReact;
                this.UserData = { UserId: "", TrueName: "", PositionName: "", DisplayName: "", DeptName: "" };
                this.SalaryItemSetDataList = [];
                if (config) {
                    //this.dataList = config.derpartData.List;
                    this.UserData = config.Data;
                    if (config.Data) {
                        urlFile.Core.AkPost("/HospPerformance/HumanResource/SalaryGetUsreFNumber", { userID: this.UserData.UserId }, function (a) {
                            _this.Fnumber = a;
                            _this.forceUpdate("");
                        });
                    }
                    this.UniId = config.Unid;
                    this.SalaryItemData = config.SalaryItemData;
                    this.SalaryItemValue = config.SalaryItemValue;
                    if (config.SalaryItemValue)
                        this.SalaryItemSetDataList.push(config.SalaryItemValue);
                }
                this.listenAppEvent("ItemListToMoneySetting", this.UniId, function (item) {
                    //var selectedValue = this.SelectorDom.UserListboxObj.dataValueGet();
                    _this.SalaryItemData = item;
                    _this.IsMulit = true;
                    _this.IsChange = true;
                    _this.forceUpdate("");
                });
                //弹出
                var modal = {
                    Title: "薪资设定",
                    ModalShowingFun: function (a, callback) {
                        var _config = { Data: [{ FID: "", Name: "", Fileds: "", Detail: "", Type: "" }], DataValue: _this.SalaryItemValue, Unid: _this.UniId, UserId: a.UniId, UserName: "" };
                        _this.SalaryItemSetDataList.map(function (s) {
                            if (a.UniId == s.UserID) {
                                _config.DataValue = s;
                            }
                            else if (s.UserID == "all") {
                                _config.DataValue = s;
                            }
                        });
                        _config.UserName = _this.UserData.TrueName;
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
                this.listenAppEvent("EditMoneyValues", this.UniId, function (item) {
                    //var selectedValue = this.SelectorDom.UserListboxObj.dataValueGet();
                    _this.ModalObj.close();
                    _this.SalaryItemSetDataList.push(item);
                    if (item.UserID == "all") {
                        _this.SalaryItemSetDataList.map(function (s) {
                            s.UserID = "all";
                            s.SalaryItemValue = item.SalaryItemValue;
                        });
                    }
                    //this.SalaryItemData=item;
                    _this.IsMulit = true;
                    _this.IsChange = true;
                    _this.forceUpdate("");
                });
            }
            MoneySettingRowVm.prototype.openModal = function (vals) {
                this.ModalObj.UniId = vals;
                //this.Unitid=vals;
                this.ModalObj.open();
            };
            return MoneySettingRowVm;
        }(domCore.DomVm));
        MoneySettingRow.MoneySettingRowVm = MoneySettingRowVm;
        var MoneySettingRowStates = (function (_super) {
            __extends(MoneySettingRowStates, _super);
            function MoneySettingRowStates() {
                _super.apply(this, arguments);
            }
            return MoneySettingRowStates;
        }(domCore.DomStates));
        MoneySettingRow.MoneySettingRowStates = MoneySettingRowStates;
        var MoneySettingRowProps = (function (_super) {
            __extends(MoneySettingRowProps, _super);
            function MoneySettingRowProps() {
                _super.apply(this, arguments);
            }
            return MoneySettingRowProps;
        }(domCore.DomProps));
        MoneySettingRow.MoneySettingRowProps = MoneySettingRowProps;
    })(MoneySettingRow = exports.MoneySettingRow || (exports.MoneySettingRow = {}));
});
