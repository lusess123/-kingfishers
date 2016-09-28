var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../01core/Url"], function (require, exports, domFile, React, urlFile) {
    "use strict";
    var domCore = domFile.Core;
    var OrgTree;
    (function (OrgTree) {
        var OrgTreeAction = (function (_super) {
            __extends(OrgTreeAction, _super);
            function OrgTreeAction() {
                _super.apply(this, arguments);
            }
            return OrgTreeAction;
        }(domCore.DomAction));
        OrgTree.OrgTreeAction = OrgTreeAction;
        var OrgTreeReact = (function (_super) {
            __extends(OrgTreeReact, _super);
            function OrgTreeReact() {
                _super.apply(this, arguments);
                this.state = new OrgTreeStates();
            }
            OrgTreeReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", null, "组织机构"), React.createElement("div", {className: "Hc-tree-naiv Hz-scroll Hg-overflow-auto"}, this._initOrgTree()));
            };
            OrgTreeReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            OrgTreeReact.prototype.fun_del = function () {
                this.props.Vm.AddName = null;
                this.forceUpdate();
            };
            OrgTreeReact.prototype.fAddLi = function () {
                var _this = this;
                if (this.props.Vm.AddName) {
                    return React.createElement("li", {className: "Hg-relative Hu-item  acsFadeInLeftAnimate "}, React.createElement("a", {className: "Hu-pointer Hu-title Hu-none"}, React.createElement("span", null, this.props.Vm.AddName), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer", onClick: function () { _this.fun_del(); }})));
                }
                else {
                    return null;
                }
            };
            OrgTreeReact.prototype._initOrgTree = function () {
                var _this = this;
                return React.createElement("ul", {className: "nav Hu-prototype"}, React.createElement("li", {className: "Hg-relative Hu-item  acsFadeInLeftAnimate "}, React.createElement("a", {className: "Hu-pointer Hu-title Hu-none"}, React.createElement("i", {className: "fa  fa-" + (this.props.Vm.IsTreeNodeShow ? "minus-circle" : "plus-circle"), onClick: function () { _this.fun_TreeNodeShow(); }}), React.createElement("span", null, "杭州信使网络科技有限公司"), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer", onClick: function () { _this.fun_DelTreeNodeClick(); }})), React.createElement("ul", {className: "nav Hu-prototype " + (this.props.Vm.IsTreeNodeShow ? "" : " hide")}, React.createElement("li", {className: "Hg-relative Hu-item  acsFadeInLeftAnimate "}, React.createElement("a", {className: "Hu-pointer Hu-title Hu-none"}, React.createElement("span", null, "测试中心"), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer", onClick: function () { _this.fun_DelTreeNodeClick(); }}))), React.createElement("li", {className: "Hg-relative Hu-item  acsFadeInLeftAnimate "}, React.createElement("a", {className: "Hu-pointer Hu-title Hu-none"}, React.createElement("i", {className: "fa  fa-" + (!this.props.Vm.IsNode1Show ? "minus-circle" : "plus-circle"), onClick: function () { _this.fun_TreeNodeShow1(); }}), React.createElement("span", null, "信使测试"), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer", onClick: function () { _this.fun_DelTreeNodeClick(); }})), React.createElement("ul", {className: "nav nav-1 " + (this.props.Vm.IsNode1Show ? "hide" : "")}, React.createElement("li", {className: "Hg-relative Hu-item  acsFadeInLeftAnimate "}, React.createElement("a", {className: "Hu-pointer Hu-title Hu-none"}, React.createElement("span", null, "上海商务有限公司"), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer", onClick: function () { _this.fun_DelTreeNodeClick(); }}))), React.createElement("li", {className: "Hg-relative Hu-item  acsFadeInLeftAnimate "}, React.createElement("a", {className: "Hu-pointer Hu-title Hu-none"}, React.createElement("span", null, "计量测试"), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer", onClick: function () { _this.fun_DelTreeNodeClick(); }}))), this.fAddLi())), React.createElement("li", {className: "Hg-relative Hu-item  acsFadeInLeftAnimate "}, React.createElement("a", {className: "Hu-pointer Hu-title Hu-none"}, React.createElement("i", {className: "fa  fa-" + (!this.props.Vm.IsNode2Show ? "minus-circle" : "plus-circle"), onClick: function () { _this.fun_TreeNodeShow2(); }}), React.createElement("span", null, "测试网络"), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer", onClick: function () { _this.fun_DelTreeNodeClick(); }})), React.createElement("ul", {className: "nav nav-1 " + (this.props.Vm.IsNode2Show ? "hide" : "")}, React.createElement("li", {className: "Hg-relative Hu-item  acsFadeInLeftAnimate "}, React.createElement("a", {className: "Hu-pointer Hu-title Hu-none"}, React.createElement("span", null, "测试"), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer", onClick: function () { _this.fun_DelTreeNodeClick(); }}))))), React.createElement("li", {className: "Hg-relative Hu-item  acsFadeInLeftAnimate "}, React.createElement("a", {className: "Hu-pointer Hu-title Hu-none"}, React.createElement("span", null, "进销存总公司"), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer", onClick: function () { _this.fun_DelTreeNodeClick(); }}))), React.createElement("li", {className: "Hg-relative Hu-item  acsFadeInLeftAnimate "}, React.createElement("a", {className: "Hu-pointer Hu-title Hu-none"}, React.createElement("span", null, "浙江移动商城"), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer", onClick: function () { _this.fun_DelTreeNodeClick(); }}))))));
            };
            OrgTreeReact.prototype.fun_TreeNodeShow = function () {
                this.props.Vm.IsTreeNodeShow = !this.props.Vm.IsTreeNodeShow;
                this.forceUpdate();
            };
            OrgTreeReact.prototype.fun_TreeNodeShow1 = function () {
                this.props.Vm.IsNode1Show = !this.props.Vm.IsNode1Show;
                this.forceUpdate();
            };
            OrgTreeReact.prototype.fun_TreeNodeShow2 = function () {
                this.props.Vm.IsNode2Show = !this.props.Vm.IsNode2Show;
                this.forceUpdate();
            };
            OrgTreeReact.prototype.fun_ModalClick = function () {
                urlFile.Core.AkUrl.Current().openUrl("$winNewOrgPageS$");
            };
            OrgTreeReact.prototype.fun_DelTreeNodeClick = function () {
                this.props.Vm.IsTreeNode3Show = !this.props.Vm.IsTreeNode3Show;
                this.forceUpdate();
            };
            return OrgTreeReact;
        }(domCore.DomReact));
        OrgTree.OrgTreeReact = OrgTreeReact;
        var OrgTreeVm = (function (_super) {
            __extends(OrgTreeVm, _super);
            function OrgTreeVm() {
                _super.call(this);
                this.ReactType = OrgTreeReact;
                this.IsTreeNodeShow = true;
                this.IsNode1Show = false;
                this.IsNode2Show = false;
                this.IsModalShow = false;
                this.AddName = null;
                this.MetaShowData = {
                    Name: "组织树导航组件",
                    Content: " 可以对以前的树组件扩展，也可以自己重新写 ",
                    List: ["张奇", "王梦辉"]
                };
            }
            OrgTreeVm.prototype.addNodeByName = function (name) {
                this.AddName = name;
                this.forceUpdate("");
            };
            return OrgTreeVm;
        }(domCore.DomVm));
        OrgTree.OrgTreeVm = OrgTreeVm;
        var OrgTreeStates = (function (_super) {
            __extends(OrgTreeStates, _super);
            function OrgTreeStates() {
                _super.apply(this, arguments);
            }
            return OrgTreeStates;
        }(domCore.DomStates));
        OrgTree.OrgTreeStates = OrgTreeStates;
        var OrgTreeProps = (function (_super) {
            __extends(OrgTreeProps, _super);
            function OrgTreeProps() {
                _super.apply(this, arguments);
            }
            return OrgTreeProps;
        }(domCore.DomProps));
        OrgTree.OrgTreeProps = OrgTreeProps;
    })(OrgTree = exports.OrgTree || (exports.OrgTree = {}));
});
