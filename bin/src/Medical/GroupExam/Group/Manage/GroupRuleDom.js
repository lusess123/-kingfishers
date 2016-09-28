var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./GroupRuleTable"], function (require, exports, domFile, React, GroupRuleTableFile) {
    "use strict";
    var domCore = domFile.Core;
    var GroupRuleDom;
    (function (GroupRuleDom) {
        var GroupRuleDomAction = (function (_super) {
            __extends(GroupRuleDomAction, _super);
            function GroupRuleDomAction() {
                _super.apply(this, arguments);
            }
            return GroupRuleDomAction;
        }(domCore.DomAction));
        GroupRuleDom.GroupRuleDomAction = GroupRuleDomAction;
        var GroupRuleDomReact = (function (_super) {
            __extends(GroupRuleDomReact, _super);
            function GroupRuleDomReact() {
                _super.apply(this, arguments);
                this.state = new GroupRuleDomStates();
            }
            GroupRuleDomReact.prototype.pSender = function () {
                return React.createElement("div", {className: "YSm-group-rule"}, this.props.Vm.GroupRuleTableObj.intoDom());
            };
            GroupRuleDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return GroupRuleDomReact;
        }(domCore.DomReact));
        GroupRuleDom.GroupRuleDomReact = GroupRuleDomReact;
        var GroupRuleDomVm = (function (_super) {
            __extends(GroupRuleDomVm, _super);
            function GroupRuleDomVm(config) {
                _super.call(this);
                this.ReactType = GroupRuleDomReact;
                if (config.Data) {
                    this.Data = config.Data;
                    this.BatchId = config.BatchId;
                    this.UniId = config.UniId;
                    var config1 = { Data: this.Data, UniId: this.UniId, BatchId: this.BatchId };
                    this.GroupRuleTableObj = new GroupRuleTableFile.GroupRuleTable.GroupRuleTableVm(config1);
                }
            }
            return GroupRuleDomVm;
        }(domCore.DomVm));
        GroupRuleDom.GroupRuleDomVm = GroupRuleDomVm;
        var GroupRuleDomStates = (function (_super) {
            __extends(GroupRuleDomStates, _super);
            function GroupRuleDomStates() {
                _super.apply(this, arguments);
            }
            return GroupRuleDomStates;
        }(domCore.DomStates));
        GroupRuleDom.GroupRuleDomStates = GroupRuleDomStates;
        var GroupRuleDomProps = (function (_super) {
            __extends(GroupRuleDomProps, _super);
            function GroupRuleDomProps() {
                _super.apply(this, arguments);
            }
            return GroupRuleDomProps;
        }(domCore.DomProps));
        GroupRuleDom.GroupRuleDomProps = GroupRuleDomProps;
    })(GroupRuleDom = exports.GroupRuleDom || (exports.GroupRuleDom = {}));
});
