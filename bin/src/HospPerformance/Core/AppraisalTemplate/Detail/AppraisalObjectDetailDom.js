var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var AppraisalObjectDetailDom;
    (function (AppraisalObjectDetailDom) {
        var AppraisalObjectDetailDomAction = (function (_super) {
            __extends(AppraisalObjectDetailDomAction, _super);
            function AppraisalObjectDetailDomAction() {
                _super.apply(this, arguments);
            }
            return AppraisalObjectDetailDomAction;
        }(domCore.DomAction));
        AppraisalObjectDetailDom.AppraisalObjectDetailDomAction = AppraisalObjectDetailDomAction;
        var AppraisalObjectDetailDomReact = (function (_super) {
            __extends(AppraisalObjectDetailDomReact, _super);
            function AppraisalObjectDetailDomReact() {
                _super.apply(this, arguments);
                this.state = new AppraisalObjectDetailDomStates();
            }
            AppraisalObjectDetailDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this._initContent());
            };
            AppraisalObjectDetailDomReact.prototype._initContent = function () {
                return React.createElement("div", null, React.createElement("div", {className: "YSm-table-btngroup"}, React.createElement("b", null, "考核对象")), React.createElement("div", {className: "p-a YSu-default-border"}, this.props.Vm.SelectedUserList.map(function (a) {
                    return React.createElement("span", {className: "YSu-checked"}, a.DisplayName, "    ");
                })));
            };
            AppraisalObjectDetailDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AppraisalObjectDetailDomReact;
        }(domCore.DomReact));
        AppraisalObjectDetailDom.AppraisalObjectDetailDomReact = AppraisalObjectDetailDomReact;
        var AppraisalObjectDetailDomVm = (function (_super) {
            __extends(AppraisalObjectDetailDomVm, _super);
            function AppraisalObjectDetailDomVm(config) {
                _super.call(this);
                this.ReactType = AppraisalObjectDetailDomReact;
                this.ColVmObjList = {};
                this.RowData = {};
                this.SelectedUserList = [];
                if (config) {
                    this.UniId = config.UniId;
                    if (config.SelectedUserList) {
                        this.SelectedUserList = config.SelectedUserList;
                    }
                }
            }
            return AppraisalObjectDetailDomVm;
        }(domCore.DomVm));
        AppraisalObjectDetailDom.AppraisalObjectDetailDomVm = AppraisalObjectDetailDomVm;
        var AppraisalObjectDetailDomStates = (function (_super) {
            __extends(AppraisalObjectDetailDomStates, _super);
            function AppraisalObjectDetailDomStates() {
                _super.apply(this, arguments);
            }
            return AppraisalObjectDetailDomStates;
        }(domCore.DomStates));
        AppraisalObjectDetailDom.AppraisalObjectDetailDomStates = AppraisalObjectDetailDomStates;
        var AppraisalObjectDetailDomProps = (function (_super) {
            __extends(AppraisalObjectDetailDomProps, _super);
            function AppraisalObjectDetailDomProps() {
                _super.apply(this, arguments);
            }
            return AppraisalObjectDetailDomProps;
        }(domCore.DomProps));
        AppraisalObjectDetailDom.AppraisalObjectDetailDomProps = AppraisalObjectDetailDomProps;
    })(AppraisalObjectDetailDom = exports.AppraisalObjectDetailDom || (exports.AppraisalObjectDetailDom = {}));
});
