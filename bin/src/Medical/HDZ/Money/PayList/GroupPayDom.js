var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./GroupPayTable"], function (require, exports, domFile, React, GroupPayTableFile) {
    "use strict";
    var domCore = domFile.Core;
    var GroupPayDom;
    (function (GroupPayDom) {
        var GroupPayDomAction = (function (_super) {
            __extends(GroupPayDomAction, _super);
            function GroupPayDomAction() {
                _super.apply(this, arguments);
            }
            return GroupPayDomAction;
        }(domCore.DomAction));
        GroupPayDom.GroupPayDomAction = GroupPayDomAction;
        var GroupPayDomReact = (function (_super) {
            __extends(GroupPayDomReact, _super);
            function GroupPayDomReact() {
                _super.apply(this, arguments);
                this.state = new GroupPayDomStates();
            }
            GroupPayDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this._initHandle(), this.props.Vm.GroupPayTableObj.intoDom());
            };
            GroupPayDomReact.prototype._initHandle = function () {
                return React.createElement("div", {className: "YSm-handle clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 YSm-search"}, React.createElement("input", {className: "col-lg-11 col-md-10", type: "text", placeholder: "输入身份证、体检号、档案号查询"}), React.createElement("a", {className: "col-lg-1 col-md-2 btn btn-primary"}, "查询")));
            };
            GroupPayDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return GroupPayDomReact;
        }(domCore.DomReact));
        GroupPayDom.GroupPayDomReact = GroupPayDomReact;
        var GroupPayDomVm = (function (_super) {
            __extends(GroupPayDomVm, _super);
            function GroupPayDomVm(config) {
                _super.call(this);
                this.ReactType = GroupPayDomReact;
                this.GroupPayTableObj = new GroupPayTableFile.GroupPayTable.GroupPayTableVm();
            }
            return GroupPayDomVm;
        }(domCore.DomVm));
        GroupPayDom.GroupPayDomVm = GroupPayDomVm;
        var GroupPayDomStates = (function (_super) {
            __extends(GroupPayDomStates, _super);
            function GroupPayDomStates() {
                _super.apply(this, arguments);
            }
            return GroupPayDomStates;
        }(domCore.DomStates));
        GroupPayDom.GroupPayDomStates = GroupPayDomStates;
        var GroupPayDomProps = (function (_super) {
            __extends(GroupPayDomProps, _super);
            function GroupPayDomProps() {
                _super.apply(this, arguments);
            }
            return GroupPayDomProps;
        }(domCore.DomProps));
        GroupPayDom.GroupPayDomProps = GroupPayDomProps;
    })(GroupPayDom = exports.GroupPayDom || (exports.GroupPayDom = {}));
});
