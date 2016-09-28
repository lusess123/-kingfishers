var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../09Web/dom/ThDom"], function (require, exports, domFile, React, thFile) {
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
                return React.createElement("div", null, React.createElement("p", null, "已选项目："), this._initTable());
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
            MoneyProjectDomReact.prototype.initHeader = function () {
                return React.createElement("tr", null, React.createElement("th", null, "项目名称"), React.createElement("th", null, "类型"), React.createElement("th", null, "值或计算公式"), React.createElement("th", null, "项目说明"));
            };
            ;
            MoneyProjectDomReact.prototype.initBody = function () {
                return React.createElement("tbody", null, this.props.Vm.SalaryItemValueOrCount.map(function (a) {
                    return React.createElement("tr", null, React.createElement("td", null, a.Name), React.createElement("td", null, a.Type), React.createElement("td", null, a.ValueOrCount), React.createElement("td", null, a.Detail));
                }));
            };
            ;
            MoneyProjectDomReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            //public NewOpt(vals: string) {
            //    this.props.Vm.openModal();
            //}
            MoneyProjectDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MoneyProjectDomReact;
        }(domCore.DomReact));
        MoneyProjectDom.MoneyProjectDomReact = MoneyProjectDomReact;
        var MoneyProjectDomVm = (function (_super) {
            __extends(MoneyProjectDomVm, _super);
            //public openModal() {
            //    this.ModalObj.open();
            //}
            function MoneyProjectDomVm(config) {
                _super.call(this);
                this.ReactType = MoneyProjectDomReact;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.SalaryItemData = [];
                if (config) {
                    //this.SalaryItemData = config.SalaryItemData;
                    this.UniId = config.UniId;
                    if (config.SalaryItemData) {
                        this.SalaryItemData = config.SalaryItemData;
                    }
                    if (config.SalaryItemValueOrCount) {
                        this.SalaryItemValueOrCount = config.SalaryItemValueOrCount;
                    }
                }
                //this.SelectorDom = new DetaiMoneyProjectPageFile.DetailMoneyTemplatePage.DetailMoneyTemplatePageVm({ ItemSelectData: config ? config.ItemSelectData : {}, UniId: this.UniId, SelectedValue: this.SelectedValue });
                //var modal: modalFile.ModalDom.IModalDomConfig = {
                //    Title: "薪资项目",
                //    ModalShowingFun: (a, callback) => {
                //        a.DomObj = this.SelectorDom;
                //        callback();
                //    },
                //    ModalCloseFun: (a) => {
                //        a.DomObj = null;
                //    }
                //};
                //this.ModalObj = new  modalFile.ModalDom.ModalDomVm(modal);
                //this.listenAppEvent("SalaryTemplateItemSelectorSave", this.UniId, () => {
                //    var selectedValue = this.SelectorDom.ColVmObjList["MoneyProject"].dataValueGet();
                //    this.ModalObj.close();
                //    urlFile.Core.AkPost("/HospPerformance/HumanResource/SalaryItemModel", { fids: selectedValue }, (data) => {
                //        var _data = data.Data;
                //        if (_data) {
                //            this.SalaryItemData = _data;
                //            if (_data.length>0)
                //            this.emitAppEvent("ItemListToMoneySetting", this.UniId, _data);
                //            this.forceUpdate("");
                //        }
                //    });
                //});
            }
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
