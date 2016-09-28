var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../05tool/EditSpan"], function (require, exports, domFile, React, EditSpanFile) {
    "use strict";
    var domCore = domFile.Core;
    var ESpan = EditSpanFile.EditSpan.EditSpanReact;
    var ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
    var OrgEdit;
    (function (OrgEdit) {
        var OrgEditAction = (function (_super) {
            __extends(OrgEditAction, _super);
            function OrgEditAction() {
                _super.apply(this, arguments);
            }
            return OrgEditAction;
        }(domCore.DomAction));
        OrgEdit.OrgEditAction = OrgEditAction;
        var OrgEditReact = (function (_super) {
            __extends(OrgEditReact, _super);
            function OrgEditReact() {
                _super.apply(this, arguments);
                this.state = new OrgEditStates();
            }
            OrgEditReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hm-org-edit"}, React.createElement("div", {className: "Hu-org-title clearfix"}, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "上海商务有限公司" })}), React.createElement("b", null, "编码：", React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Bussniss Company" })})), React.createElement("a", {className: "btn btn-xs btn-secondary"}, "保存")));
            };
            OrgEditReact.prototype.fun_EditClick = function () {
                this.props.Vm.IsOrgEditShow = !this.props.Vm.IsOrgEditShow;
                this.forceUpdate();
            };
            OrgEditReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return OrgEditReact;
        }(domCore.DomReact));
        OrgEdit.OrgEditReact = OrgEditReact;
        var OrgEditVm = (function (_super) {
            __extends(OrgEditVm, _super);
            function OrgEditVm() {
                _super.call(this);
                this.ReactType = OrgEditReact;
                this.IsOrgEditShow = false;
                this.MetaShowData = {
                    Name: "组织机构编辑",
                    Content: " 可以对组织机构进行编辑修改、保存或删除 ",
                    List: ["张奇", "王梦辉"]
                };
            }
            return OrgEditVm;
        }(domCore.DomVm));
        OrgEdit.OrgEditVm = OrgEditVm;
        var OrgEditStates = (function (_super) {
            __extends(OrgEditStates, _super);
            function OrgEditStates() {
                _super.apply(this, arguments);
            }
            return OrgEditStates;
        }(domCore.DomStates));
        OrgEdit.OrgEditStates = OrgEditStates;
        var OrgEditProps = (function (_super) {
            __extends(OrgEditProps, _super);
            function OrgEditProps() {
                _super.apply(this, arguments);
            }
            return OrgEditProps;
        }(domCore.DomProps));
        OrgEdit.OrgEditProps = OrgEditProps;
    })(OrgEdit = exports.OrgEdit || (exports.OrgEdit = {}));
});
