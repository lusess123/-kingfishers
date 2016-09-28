var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../Common/RowButtonExpandDom", "./../../../../02col/02Mulite/SingleCheckBox", "react", "./../../../Common/Data"], function (require, exports, domFile, expandFile, singleCheckFile, React, constantData) {
    "use strict";
    var domCore = domFile.Core;
    var GroupGridRowDow;
    (function (GroupGridRowDow) {
        var GroupGridRowDowAction = (function (_super) {
            __extends(GroupGridRowDowAction, _super);
            function GroupGridRowDowAction() {
                _super.apply(this, arguments);
            }
            return GroupGridRowDowAction;
        }(domCore.DomAction));
        GroupGridRowDow.GroupGridRowDowAction = GroupGridRowDowAction;
        var GroupGridRowDowReact = (function (_super) {
            __extends(GroupGridRowDowReact, _super);
            function GroupGridRowDowReact() {
                _super.apply(this, arguments);
                this.state = new GroupGridRowDowStates();
            }
            GroupGridRowDowReact.prototype.pSender = function () {
                return React.createElement("tr", null, React.createElement("td", null, this.props.Vm.RowData.GroupName), React.createElement("td", null, this.props.Vm.RowData.BatchName), React.createElement("td", null, this.props.Vm.RowData.Name), React.createElement("td", null, this.props.Vm.GetText(constantData.Data.GenderTypeData, this.props.Vm.RowData.Gender)), React.createElement("td", null, this.props.Vm.RowData.Phone), React.createElement("td", null, this.props.Vm.GetText(constantData.Data.ExamStatusData, this.props.Vm.RowData.Status)));
            };
            GroupGridRowDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            GroupGridRowDowReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            GroupGridRowDowReact.prototype.createRowButtonExpand = function () {
                return this.props.Vm.RowButtonExpand.intoDom();
            };
            return GroupGridRowDowReact;
        }(domCore.DomReact));
        GroupGridRowDow.GroupGridRowDowReact = GroupGridRowDowReact;
        var GroupGridRowDowVm = (function (_super) {
            __extends(GroupGridRowDowVm, _super);
            function GroupGridRowDowVm(config) {
                _super.call(this);
                this.ReactType = GroupGridRowDowReact;
                this.RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();
                this.SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                if (config) {
                    this.RowData = config.RowData;
                    this.IsAcsRelative = config.IsAcsRelative;
                    this.LeftNum = config.LeftNum;
                    this.RowNumber = config.RowNumber;
                }
            }
            GroupGridRowDowVm.prototype.GetText = function (List, Id) {
                for (var index = 0; index < List.length; index++) {
                    if (List[index].Value == Id) {
                        return List[index].Text;
                    }
                }
                return "";
            };
            return GroupGridRowDowVm;
        }(domCore.DomVm));
        GroupGridRowDow.GroupGridRowDowVm = GroupGridRowDowVm;
        var GroupGridRowDowStates = (function (_super) {
            __extends(GroupGridRowDowStates, _super);
            function GroupGridRowDowStates() {
                _super.apply(this, arguments);
            }
            return GroupGridRowDowStates;
        }(domCore.DomStates));
        GroupGridRowDow.GroupGridRowDowStates = GroupGridRowDowStates;
        var GroupGridRowDowProps = (function (_super) {
            __extends(GroupGridRowDowProps, _super);
            function GroupGridRowDowProps() {
                _super.apply(this, arguments);
            }
            return GroupGridRowDowProps;
        }(domCore.DomProps));
        GroupGridRowDow.GroupGridRowDowProps = GroupGridRowDowProps;
    })(GroupGridRowDow = exports.GroupGridRowDow || (exports.GroupGridRowDow = {}));
});
