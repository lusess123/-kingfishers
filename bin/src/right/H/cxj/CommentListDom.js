var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./AddCommentDom"], function (require, exports, domFile, React, addFile) {
    "use strict";
    var domCore = domFile.Core;
    var CommentListDom;
    (function (CommentListDom) {
        var CommentListDomAction = (function (_super) {
            __extends(CommentListDomAction, _super);
            function CommentListDomAction() {
                _super.apply(this, arguments);
            }
            return CommentListDomAction;
        }(domCore.DomAction));
        CommentListDom.CommentListDomAction = CommentListDomAction;
        var CommentListDomReact = (function (_super) {
            __extends(CommentListDomReact, _super);
            function CommentListDomReact() {
                _super.apply(this, arguments);
                this.state = new CommentListDomStates();
            }
            CommentListDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("span", {onClick: function () { _this.fun_isShow(); }}, React.createElement("a", {className: "btn btn-sm"}, this.props.Vm.IsShow ? "展开列表" : "收起列表"), React.createElement("i", {className: "icon-caret-" + (this.props.Vm.IsShow ? "right" : "down") +
                    " fa fa-caret-" + (this.props.Vm.IsShow ? "right" : "down") + " Hu-pointer"})), React.createElement("div", {className: "Hm-comment-list" + (this.props.Vm.IsShow ? " hide" : "")}, React.createElement("div", {className: "Hm-item"}, React.createElement("div", {className: "Hu-head-img"}, React.createElement("img", {src: "../lib/akCss/images/user.jpg"})), React.createElement("div", {className: "Hu-comment-detail"}, React.createElement("div", {className: "clearfix"}, React.createElement("a", null, "信使系统管理员"), React.createElement("span", {className: "pull-right"}, "2016年9月18日16: 03")), React.createElement("div", null, React.createElement("p", null, "阿里已将未来的目标着眼于全球：“为一千万家企业提供生存、成长和发展的平台，为全世界创造一亿就业机会，为全世界二十亿消费者服务。\"")), React.createElement("div", {className: "clearfix"}, React.createElement("a", {className: "pull-right m-l"}, "删除"), React.createElement("a", {className: "pull-right", onClick: function () { _this.fun_isReplya(); }}, this.props.Vm.IsReplya ? "取消回复" : "回复")), React.createElement("div", {className: this.props.Vm.IsReplya ? "Hu-content " : "hide"}, this.props.Vm.ReplyComment.intoDom()))), React.createElement("div", {className: "Hm-item"}, React.createElement("div", {className: "Hu-head-img"}, React.createElement("img", {src: "../lib/akCss/images/user.jpg"})), React.createElement("div", {className: "Hu-comment-detail"}, React.createElement("div", {className: "clearfix"}, React.createElement("a", null, "一叶知秋"), React.createElement("span", {className: "pull-right"}, "2016年9月18日15: 03")), React.createElement("div", null, React.createElement("p", null, "阿里已将未来的目标着眼于全球：“为一千万家企业提供生存、成长和发展的平台，为全世界创造一亿就业机会，为全世界二十亿消费者服务。\"")), React.createElement("div", {className: "clearfix"}, React.createElement("a", {className: "pull-right m-l hide"}, "删除"), React.createElement("a", {className: "pull-right", onClick: function () { _this.fun_isReplyb(); }}, this.props.Vm.IsReplyb ? "取消回复" : "回复(2)")), React.createElement("div", {className: this.props.Vm.IsAddReplyShow ? "Hu-content " : "hide"}, this.props.Vm.ReplyComment.intoDom()), React.createElement("div", null, React.createElement("p", null, React.createElement("a", null, "moumou"), React.createElement("span", null, "回复"), React.createElement("a", null, "一叶知秋"), "：", React.createElement("span", null, "伽马射线暴是来自宇宙空间的伽马射线短时间突然增强的现象。"), React.createElement("a", {onClick: function () { _this.fun_isAddReplyShow(); }}, this.props.Vm.IsAddReplyShow ? "取消回复" : "回复")), React.createElement("p", null, React.createElement("a", null, "信使系统管理员"), React.createElement("span", null, "回复"), React.createElement("a", null, "一叶知秋"), "：", React.createElement("span", null, "placeholder 属性规定描述文本区域预期值的简短提示。"), React.createElement("a", null, "删除"))))), React.createElement("div", {className: "Hm-item"}, React.createElement("div", {className: "Hu-head-img"}, React.createElement("img", {src: "../lib/akCss/images/user.jpg"})), React.createElement("div", {className: "Hu-comment-detail"}, React.createElement("div", {className: "clearfix"}, React.createElement("a", null, "一叶知秋"), React.createElement("span", {className: "pull-right"}, "2016年9月18日15: 03")), React.createElement("div", null, React.createElement("p", null, "阿里已将未来的目标着眼于全球：“为一千万家企业提供生存、成长和发展的平台，为全世界创造一亿就业机会，为全世界二十亿消费者服务。\"")), React.createElement("div", {className: "clearfix"}, React.createElement("a", {className: "pull-right m-l hide"}, "删除"), React.createElement("a", {className: "pull-right", onClick: function () { _this.fun_isReplyc(); }}, this.props.Vm.IsReplyc ? "取消回复" : "回复")), React.createElement("div", {className: this.props.Vm.IsReplyc ? "Hu-content" : "hide"}, this.props.Vm.ReplyComment.intoDom())))));
            };
            CommentListDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            CommentListDomReact.prototype.fun_isReplya = function () {
                this.props.Vm.IsReplya = !this.props.Vm.IsReplya;
                this.forceUpdate();
            };
            CommentListDomReact.prototype.fun_isReplyb = function () {
                this.props.Vm.IsReplyb = !this.props.Vm.IsReplyb;
                this.forceUpdate();
            };
            CommentListDomReact.prototype.fun_isReplyc = function () {
                this.props.Vm.IsReplyc = !this.props.Vm.IsReplyc;
                this.forceUpdate();
            };
            CommentListDomReact.prototype.fun_isAddReplyShow = function () {
                this.props.Vm.IsAddReplyShow = !this.props.Vm.IsAddReplyShow;
                this.forceUpdate();
            };
            CommentListDomReact.prototype.fun_isShow = function () {
                this.props.Vm.IsShow = !this.props.Vm.IsShow;
                this.forceUpdate();
            };
            return CommentListDomReact;
        }(domCore.DomReact));
        CommentListDom.CommentListDomReact = CommentListDomReact;
        var CommentListDomVm = (function (_super) {
            __extends(CommentListDomVm, _super);
            function CommentListDomVm(config) {
                _super.call(this);
                this.ReactType = CommentListDomReact;
                this.IsReplya = false;
                this.IsReplyb = false;
                this.IsReplyc = false;
                this.IsAddReplyShow = false;
                this.IsShow = false;
                this.ReplyComment = new addFile.AddCommentDom.AddCommentDomVm();
            }
            return CommentListDomVm;
        }(domCore.DomVm));
        CommentListDom.CommentListDomVm = CommentListDomVm;
        var CommentListDomStates = (function (_super) {
            __extends(CommentListDomStates, _super);
            function CommentListDomStates() {
                _super.apply(this, arguments);
            }
            return CommentListDomStates;
        }(domCore.DomStates));
        CommentListDom.CommentListDomStates = CommentListDomStates;
        var CommentListDomProps = (function (_super) {
            __extends(CommentListDomProps, _super);
            function CommentListDomProps() {
                _super.apply(this, arguments);
            }
            return CommentListDomProps;
        }(domCore.DomProps));
        CommentListDom.CommentListDomProps = CommentListDomProps;
    })(CommentListDom = exports.CommentListDom || (exports.CommentListDom = {}));
});
