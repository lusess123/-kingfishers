var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "react", "./../../../../02col/00core/BaseCol", "./../../../../02col/02Mulite/Listbox"], function (require, exports, domFile, iocFile, utilFile, urlFile, React, baseColFile, ListBoxFile) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var NewMoneyProjectPage;
    (function (NewMoneyProjectPage) {
        var NewMoneyProjectPageAction = (function (_super) {
            __extends(NewMoneyProjectPageAction, _super);
            function NewMoneyProjectPageAction() {
                _super.apply(this, arguments);
            }
            return NewMoneyProjectPageAction;
        }(domCore.DomAction));
        NewMoneyProjectPage.NewMoneyProjectPageAction = NewMoneyProjectPageAction;
        var NewMoneyProjectPageReact = (function (_super) {
            __extends(NewMoneyProjectPageReact, _super);
            function NewMoneyProjectPageReact() {
                _super.apply(this, arguments);
                this.state = new NewMoneyProjectPageStates();
            }
            NewMoneyProjectPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, this.props.Vm.ColVmObjList["MoneyProject"].intoDom(), React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.Submit(); }}, "保存")));
            };
            //public _initSelect(): React.ReactElement<any> {
            //    return <div> {this.props.Vm.ItemListboxObj.intoDom() } </div>;
            //}
            NewMoneyProjectPageReact.prototype.Submit = function () {
                this.props.Vm.Submit();
            };
            return NewMoneyProjectPageReact;
        }(domCore.DomReact));
        NewMoneyProjectPage.NewMoneyProjectPageReact = NewMoneyProjectPageReact;
        var NewMoneyProjectPageVm = (function (_super) {
            __extends(NewMoneyProjectPageVm, _super);
            //public ItemSelectData: dataFile.Data.IItemSelectData;
            function NewMoneyProjectPageVm(config) {
                _super.call(this);
                this.ReactType = NewMoneyProjectPageReact;
                this.ColVmObjList = {};
                this.RowData = {};
                this.ItemListboxObj = new ListBoxFile.ui.ListboxVm;
                //this.ItemSelectData = [{ Select: false, Text: "", Value: "" }];
                if (config) {
                    //this.ItemSelectData = config.ItemData;
                    //this.ItemSelectData = config.ItemSelectData;
                    this.UniId = config.UniId;
                    if (config.SelectedValue) {
                        this.SelectedValue = config.SelectedValue;
                    }
                    if (config.ItemSelectData) {
                        this.SalaryItemData = config.ItemSelectData.SalaryItem;
                    }
                }
                this.initColVm("MoneyProject", "ListBoxVm", "notNull");
            }
            NewMoneyProjectPageVm.prototype.setUserItemList = function (sourceList) {
                var userItemList = [];
                if (sourceList) {
                    sourceList.forEach(function (a) {
                        userItemList.push({ Value: a.FID, Text: a.Name });
                    });
                }
                return userItemList;
            };
            //public initListBox(config?: INewMoneyProjectPageConfig) {
            //    if (config.SelectedValue) {
            //        this.ItemListboxObj.dataValueSet(config.SelectedValue);
            //    }
            //}
            NewMoneyProjectPageVm.prototype.Submit = function () {
                this.emitAppEvent("SalaryTemplateItemSelectorSave", this.UniId);
                //var selectData = this.ColVmObjList["MoneyProject"].dataValueGet();
                //this.emitAppEvent("TemplateItemToMoneySetting", this.UniId, selectData);
            };
            NewMoneyProjectPageVm.prototype.initColVm = function (colName, colType, legal) {
                var _this = this;
                var _name = colName.toString();
                var isexcite = false;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[_name];
                    if (_obj) {
                        isexcite = true;
                        _exciteBean = _obj;
                    }
                }
                if (!isexcite) {
                    var _exciteBean = iocFile.Core.Ioc.Current().FetchInstance(colType, baseColFile.Core.BaseColVm);
                    _exciteBean.Tag = colName;
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.IsMulit = true;
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                }
                if (colName == "MoneyProject") {
                    var typeListBoxVm = utilFile.Core.Util.Cast(_exciteBean);
                    urlFile.Core.AkPost("/HospPerformance/HumanResource/SalaryItemSelect", {}, function (a) {
                        typeListBoxVm.ItemList = _this.setUserItemList(a.Data);
                        if (_this.SelectedValue) {
                            typeListBoxVm.dataValueSet(_this.SelectedValue);
                        }
                    });
                }
                this.ColVmObjList[_name] = _exciteBean;
            };
            return NewMoneyProjectPageVm;
        }(domCore.DomVm));
        NewMoneyProjectPage.NewMoneyProjectPageVm = NewMoneyProjectPageVm;
        var NewMoneyProjectPageStates = (function (_super) {
            __extends(NewMoneyProjectPageStates, _super);
            function NewMoneyProjectPageStates() {
                _super.apply(this, arguments);
            }
            return NewMoneyProjectPageStates;
        }(domCore.DomStates));
        NewMoneyProjectPage.NewMoneyProjectPageStates = NewMoneyProjectPageStates;
        var NewMoneyProjectPageProps = (function (_super) {
            __extends(NewMoneyProjectPageProps, _super);
            function NewMoneyProjectPageProps() {
                _super.apply(this, arguments);
            }
            return NewMoneyProjectPageProps;
        }(domCore.DomProps));
        NewMoneyProjectPage.NewMoneyProjectPageProps = NewMoneyProjectPageProps;
    })(NewMoneyProjectPage = exports.NewMoneyProjectPage || (exports.NewMoneyProjectPage = {}));
});
