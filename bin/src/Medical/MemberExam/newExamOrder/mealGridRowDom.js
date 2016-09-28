var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, React, singleCheckFile) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var MealGridRowDom;
    (function (MealGridRowDom) {
        var MealGridRowDomAction = (function (_super) {
            __extends(MealGridRowDomAction, _super);
            function MealGridRowDomAction() {
                _super.apply(this, arguments);
            }
            return MealGridRowDomAction;
        }(domCore.DomAction));
        MealGridRowDom.MealGridRowDomAction = MealGridRowDomAction;
        var MealGridRowDomReact = (function (_super) {
            __extends(MealGridRowDomReact, _super);
            function MealGridRowDomReact() {
                _super.apply(this, arguments);
                this.state = new MealGridRowDomStates();
            }
            MealGridRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("tr", null, React.createElement("td", null, this.createRadioCheck()), React.createElement("td", null, this.props.Vm.RowData.Name), React.createElement("td", null, this.props.Vm.RowData.Desc), React.createElement("td", {className: "text-right"}, this.props.Vm.RowData.IndividualPrice), React.createElement("td", {className: "text-right"}, this.props.Vm.RowData.GroupPrice), React.createElement("td", null, React.createElement("a", {onClick: function () { _this.viewClick(); }}, "查看"))));
            };
            MealGridRowDomReact.prototype.createRadioCheck = function () {
                var _this = this;
                //return this.props.Vm.SingleCheckboxVm.intoDom();
                return React.createElement("span", null, React.createElement("i", {className: " fa fa-circle-o", onClick: function () { _this.trClick_fun(); }}));
            };
            MealGridRowDomReact.prototype.viewClick = function () {
                this.props.Vm.showAllItems();
            };
            MealGridRowDomReact.prototype.trClick_fun = function () {
                this.props.Vm.clickItem();
            };
            //public createRow(): React.ReactElement<any> {
            //    return (
            //        <tr>
            //            <td>1111</td>
            //            <td>{this.props.Vm.RowData.Name}</td>
            //            <td>{this.props.Vm.RowData.Items}</td>
            //            <td>1111</td>
            //        </tr>
            //        )
            //}
            MealGridRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MealGridRowDomReact;
        }(domCore.DomReact));
        MealGridRowDom.MealGridRowDomReact = MealGridRowDomReact;
        var MealGridRowDomVm = (function (_super) {
            __extends(MealGridRowDomVm, _super);
            function MealGridRowDomVm(config) {
                _super.call(this);
                this.ReactType = MealGridRowDomReact;
                this.SingleCheckboxVm = new singleCheckFile.ui.SingleCheckBoxVm();
                this.IsGroup = false; //是否团体
                if (config) {
                    this.UniId = config.UniId;
                    //this.RowData.data.ItemCode = config.data.ItemCode;
                    //this.RowData.data.mealID = config.data.mealID;
                    //this.RowData.data.Price = config.data.Price;
                    this.RowData = config.RowData;
                    if (config.IsGroup) {
                        this.IsGroup = config.IsGroup;
                    }
                }
            }
            MealGridRowDomVm.prototype.showAllItems = function () {
                this.emitAppEvent("memberexam-packageselector", this.UniId, this.RowData.FID);
            };
            MealGridRowDomVm.prototype.clickItem = function () {
                var item = {
                    Key: this.RowData.FID,
                    Text: this.RowData.Name,
                    IsSelect: this.RowData.IsSelect
                };
                //  this.RowData.FID 
                if (!item.IsSelect) {
                    this.RowData.IsSelect = true;
                    this.forceUpdate("");
                    this.emitAppEvent("pickerContainerAddItem", this.UniId, { Text: item.Text, Key: item.Key });
                }
                else {
                    //  item.IsSelect = false;
                    //this.forceUpdate("");
                    this.RowData.IsSelect = false;
                    this.forceUpdate("");
                    this.emitAppEvent("pickerContainerDelItem", this.UniId, item.Key);
                }
                this.emitAppEvent("modal-close", this.UniId);
                this.emitAppEvent("ExamPackageItemsDisplay", this.UniId, item);
            };
            return MealGridRowDomVm;
        }(domCore.DomVm));
        MealGridRowDom.MealGridRowDomVm = MealGridRowDomVm;
        var MealGridRowDomStates = (function (_super) {
            __extends(MealGridRowDomStates, _super);
            function MealGridRowDomStates() {
                _super.apply(this, arguments);
            }
            return MealGridRowDomStates;
        }(domCore.DomStates));
        MealGridRowDom.MealGridRowDomStates = MealGridRowDomStates;
        var MealGridRowDomProps = (function (_super) {
            __extends(MealGridRowDomProps, _super);
            function MealGridRowDomProps() {
                _super.apply(this, arguments);
            }
            return MealGridRowDomProps;
        }(domCore.DomProps));
        MealGridRowDom.MealGridRowDomProps = MealGridRowDomProps;
    })(MealGridRowDom = exports.MealGridRowDom || (exports.MealGridRowDom = {}));
});
