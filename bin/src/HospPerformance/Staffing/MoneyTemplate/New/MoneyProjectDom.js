var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Url", "react", "./../../../../09Web/dom/ThDom", "./../../../../05tool/Modal/ModalDom", "./NewMoneyProjectPage", "./../../../../02col/01single/Text", "./MoneyProjectRowDom"], function (require, exports, domFile, urlFile, React, thFile, modalFile, NewMoneyProjectPageFile, textFile, MoneyProjectRowDom) {
    "use strict";
    var domCore = domFile.Core;
    var MoneyProjectDom;
    (function (MoneyProjectDom) {
        var MoneyProjectDomAction = (function (_super) {
            __extends(MoneyProjectDomAction, _super);
            function MoneyProjectDomAction() {
                _super.apply(this, arguments);
            }
            return MoneyProjectDomAction;
        }(domCore.DomAction));
        MoneyProjectDom.MoneyProjectDomAction = MoneyProjectDomAction;
        var MoneyProjectDomReact = (function (_super) {
            __extends(MoneyProjectDomReact, _super);
            function MoneyProjectDomReact() {
                _super.apply(this, arguments);
                this.state = new MoneyProjectDomStates();
            }
            MoneyProjectDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("p", null, "已选项目：*公式提示：[]中括号里面添加项目名称，例如:[基本工资]+[福利补贴]，[加班工时]*50", React.createElement("a", {className: "btn btn-sm btn-primary pull-right", onClick: function () { {
                    _this.NewOpt("new");
                } }}, "添加")), this._initTable(), this.props.Vm.ModalObj.intoDom());
            };
            MoneyProjectDomReact.prototype._initTable = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-striped table-bordered table-hover"}, theader, tbody);
                return React.createElement("div", {className: "table-responsive", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            MoneyProjectDomReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            MoneyProjectDomReact.prototype.inputValue = function (value, fid) {
                var _this = this;
                var textvalue = value;
                this.props.Vm.ItemValueOrcount.map(function (s) {
                    if (s.FID == fid) {
                        textvalue = s.ValueOrCount;
                    }
                });
                if (!this.props.Vm.textVm) {
                    var _vm = this.getInputVm(textvalue, "notNull");
                    this.props.Vm.textVm = _vm;
                    _vm.onChangeHandle(function (str) {
                        value = str;
                        _this.props.Vm.ItemValueOrcount.map(function (a) {
                            if (a.FID == fid) {
                                a.ValueOrCount = value;
                            }
                        });
                        return true;
                    });
                }
                return this.props.Vm.textVm.intoDom();
            };
            MoneyProjectDomReact.prototype.getInputVm = function (val, legalKind, fun) {
                var _bean = new textFile.ui.TextVm();
                _bean.dataValueSet(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            MoneyProjectDomReact.prototype.initHeader = function () {
                return React.createElement("tr", null, React.createElement("th", null, "项目名称"), React.createElement("th", null, "类型"), React.createElement("th", null, "值或计算公式"), React.createElement("th", null, "项目说明"));
            };
            ;
            MoneyProjectDomReact.prototype.initBody = function () {
                return React.createElement("tbody", null, this.props.Vm.ItemValueOrcountList.map(function (a) {
                    return a.intoDom();
                }));
            };
            ;
            //获得输入框的对应的值
            MoneyProjectDomReact.prototype.getInputValues = function () {
                var _list = [];
                this.props.Vm.ItemValueOrcountList.map(function (r) {
                    _list.unshift(r);
                });
                this.forceUpdate();
                return _list;
            };
            MoneyProjectDomReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            MoneyProjectDomReact.prototype.NewOpt = function (vals) {
                this.props.Vm.openModal();
            };
            MoneyProjectDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MoneyProjectDomReact;
        }(domCore.DomReact));
        MoneyProjectDom.MoneyProjectDomReact = MoneyProjectDomReact;
        var MoneyProjectDomVm = (function (_super) {
            __extends(MoneyProjectDomVm, _super);
            function MoneyProjectDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = MoneyProjectDomReact;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.SalaryItemData = [];
                this.ItemValueOrcount = [];
                this.ItemValueOrcountList = [];
                //this.ItemValueOrcount = [{ FID: "", Type: "", ValueOrCount:"" }]
                if (config) {
                    this.SalaryItemData = config.SalaryItemData;
                    this.UniId = config.UniId;
                    if (config.SalaryItemData) {
                        this.SalaryItemData = config.SalaryItemData;
                        var valueList = [];
                        this.SalaryItemData.forEach(function (a) {
                            valueList.push("'" + a.FID + "'");
                        });
                        this.SelectedValue = valueList.join(",");
                    }
                    if (config.SalaryItemValueOrCount) {
                        this.ItemValueOrcount = config.SalaryItemValueOrCount;
                    }
                    else {
                        this.ItemValueOrcount = this.SalaryItemData;
                    }
                    this.ItemValueOrcount.map(function (s) {
                        var rowconfig = { Data: s, Unid: _this.UniId };
                        var rowDom = new MoneyProjectRowDom.MoneyProjectRowDom.MoneyProjectRowDomVm(rowconfig);
                        rowDom.IsChange = true;
                        rowDom.IsMulit = true;
                        _this.ItemValueOrcountList.push(rowDom);
                    });
                }
                this.SelectorDom = new NewMoneyProjectPageFile.NewMoneyProjectPage.NewMoneyProjectPageVm({ ItemSelectData: config ? config.ItemSelectData : {}, UniId: this.UniId, SelectedValue: this.SelectedValue });
                var modal = {
                    Title: "薪资项目",
                    ModalShowingFun: function (a, callback) {
                        a.DomObj = _this.SelectorDom;
                        callback();
                    },
                    ModalCloseFun: function (a) {
                        a.DomObj = null;
                    }
                };
                this.ModalObj = new modalFile.ModalDom.ModalDomVm(modal);
                this.listenAppEvent("SalaryTemplateItemSelectorSave", this.UniId, function () {
                    var selectedValue = _this.SelectorDom.ColVmObjList["MoneyProject"].dataValueGet();
                    _this.ModalObj.close();
                    urlFile.Core.AkPost("/HospPerformance/HumanResource/SalaryItemModel", { fids: selectedValue }, function (data) {
                        var _data = data.Data;
                        if (_data) {
                            var sss = _this.ItemValueOrcount;
                            _this.ItemValueOrcountList = _this.ItemValueOrcountList.filter(function (row) {
                                return false;
                            });
                            _this.ItemValueOrcount = _this.ItemValueOrcount.filter(function (row) {
                                return false;
                            });
                            _this.SalaryItemData = _data;
                            _this.SalaryItemData.map(function (i) {
                                var count = { FID: i.FID, Fileds: i.Fileds, Detail: i.Detail, Name: i.Name, Type: i.Type, ValueOrCount: "" };
                                sss.map(function (n) {
                                    if (n.FID == i.FID) {
                                        count.ValueOrCount = n.ValueOrCount;
                                    }
                                });
                                _this.ItemValueOrcount.push(count);
                            });
                            _this.ItemValueOrcount.map(function (s) {
                                var rowconfig = { Data: s, Unid: _this.UniId };
                                var rowDom = new MoneyProjectRowDom.MoneyProjectRowDom.MoneyProjectRowDomVm(rowconfig);
                                rowDom.IsChange = true;
                                rowDom.IsMulit = true;
                                _this.ItemValueOrcountList.push(rowDom);
                            });
                            if (_data.length > 0)
                                _this.emitAppEvent("ItemListToMoneySetting", _this.UniId, _data);
                            _this.forceUpdate("");
                        }
                    });
                });
            }
            MoneyProjectDomVm.prototype.openModal = function () {
                this.ModalObj.open();
            };
            MoneyProjectDomVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            MoneyProjectDomVm.prototype.getData = function () {
                var idList = [];
                this.SalaryItemData.forEach(function (a) {
                    idList.push(a.FID);
                });
                return idList;
            };
            return MoneyProjectDomVm;
        }(domCore.DomVm));
        MoneyProjectDom.MoneyProjectDomVm = MoneyProjectDomVm;
        var MoneyProjectDomStates = (function (_super) {
            __extends(MoneyProjectDomStates, _super);
            function MoneyProjectDomStates() {
                _super.apply(this, arguments);
            }
            return MoneyProjectDomStates;
        }(domCore.DomStates));
        MoneyProjectDom.MoneyProjectDomStates = MoneyProjectDomStates;
        var MoneyProjectDomProps = (function (_super) {
            __extends(MoneyProjectDomProps, _super);
            function MoneyProjectDomProps() {
                _super.apply(this, arguments);
            }
            return MoneyProjectDomProps;
        }(domCore.DomProps));
        MoneyProjectDom.MoneyProjectDomProps = MoneyProjectDomProps;
    })(MoneyProjectDom = exports.MoneyProjectDom || (exports.MoneyProjectDom = {}));
});
