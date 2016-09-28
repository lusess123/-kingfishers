var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, React, domFile, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var HomeRepairGridRowDom;
    (function (HomeRepairGridRowDom) {
        var HomeRepairGridRowDomAction = (function (_super) {
            __extends(HomeRepairGridRowDomAction, _super);
            function HomeRepairGridRowDomAction() {
                _super.apply(this, arguments);
            }
            return HomeRepairGridRowDomAction;
        }(domCore.DomAction));
        HomeRepairGridRowDom.HomeRepairGridRowDomAction = HomeRepairGridRowDomAction;
        var HomeRepairGridRowDomReact = (function (_super) {
            __extends(HomeRepairGridRowDomReact, _super);
            function HomeRepairGridRowDomReact() {
                _super.apply(this, arguments);
                this.state = new HomeRepairGridRowDomStates();
            }
            HomeRepairGridRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", {className: this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, this.props.Vm.ColList.map(function (col) {
                    return React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, " ", _this.props.Vm.RowData[col])));
                }));
            };
            HomeRepairGridRowDomReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            HomeRepairGridRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return HomeRepairGridRowDomReact;
        }(domCore.DomReact));
        HomeRepairGridRowDom.HomeRepairGridRowDomReact = HomeRepairGridRowDomReact;
        var HomeRepairGridRowDomVm = (function (_super) {
            __extends(HomeRepairGridRowDomVm, _super);
            function HomeRepairGridRowDomVm(config) {
                _super.call(this);
                this.ReactType = HomeRepairGridRowDomReact;
                this.SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                if (config) {
                    this.RowData = config.RowData;
                    this.IsAcsRelative = config.IsAcsRelative;
                    this.LeftNum = config.LeftNum;
                    this.RowNumber = config.RowNumber;
                    this.ColList = config.ColList;
                }
            }
            return HomeRepairGridRowDomVm;
        }(domCore.DomVm));
        HomeRepairGridRowDom.HomeRepairGridRowDomVm = HomeRepairGridRowDomVm;
        var HomeRepairGridRowDomStates = (function (_super) {
            __extends(HomeRepairGridRowDomStates, _super);
            function HomeRepairGridRowDomStates() {
                _super.apply(this, arguments);
            }
            return HomeRepairGridRowDomStates;
        }(domCore.DomStates));
        HomeRepairGridRowDom.HomeRepairGridRowDomStates = HomeRepairGridRowDomStates;
        var HomeRepairGridRowDomProps = (function (_super) {
            __extends(HomeRepairGridRowDomProps, _super);
            function HomeRepairGridRowDomProps() {
                _super.apply(this, arguments);
            }
            return HomeRepairGridRowDomProps;
        }(domCore.DomProps));
        HomeRepairGridRowDom.HomeRepairGridRowDomProps = HomeRepairGridRowDomProps;
    })(HomeRepairGridRowDom = exports.HomeRepairGridRowDom || (exports.HomeRepairGridRowDom = {}));
});
