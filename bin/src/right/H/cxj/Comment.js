var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./CommentListDom", "./AddCommentDom"], function (require, exports, domFile, React, listFile, addFile) {
    "use strict";
    var domCore = domFile.Core;
    var Comment;
    (function (Comment) {
        var CommentAction = (function (_super) {
            __extends(CommentAction, _super);
            function CommentAction() {
                _super.apply(this, arguments);
            }
            return CommentAction;
        }(domCore.DomAction));
        Comment.CommentAction = CommentAction;
        var CommentReact = (function (_super) {
            __extends(CommentReact, _super);
            function CommentReact() {
                _super.apply(this, arguments);
                this.state = new CommentStates();
            }
            CommentReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "clearfix"}, React.createElement("a", {className: "btn btn-xs btn-primary pull-right", onClick: function () { _this.fun_isComment(); }}, "评论"), React.createElement("a", {className: "btn btn-xs pull-right m-r"}, "3")), React.createElement("div", {className: "Hu-content clearfix " + (this.props.Vm.IsComment ? "" : " hide")}, this.props.Vm.AddComment.intoDom()), this.props.Vm.CommentData.intoDom());
            };
            CommentReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            CommentReact.prototype.fun_isComment = function () {
                this.props.Vm.IsComment = !this.props.Vm.IsComment;
                this.forceUpdate();
            };
            return CommentReact;
        }(domCore.DomReact));
        Comment.CommentReact = CommentReact;
        var CommentVm = (function (_super) {
            __extends(CommentVm, _super);
            function CommentVm(config) {
                _super.call(this);
                this.ReactType = CommentReact;
                this.IsComment = false;
                this.CommentData = new listFile.CommentListDom.CommentListDomVm();
                this.AddComment = new addFile.AddCommentDom.AddCommentDomVm();
            }
            return CommentVm;
        }(domCore.DomVm));
        Comment.CommentVm = CommentVm;
        var CommentStates = (function (_super) {
            __extends(CommentStates, _super);
            function CommentStates() {
                _super.apply(this, arguments);
            }
            return CommentStates;
        }(domCore.DomStates));
        Comment.CommentStates = CommentStates;
        var CommentProps = (function (_super) {
            __extends(CommentProps, _super);
            function CommentProps() {
                _super.apply(this, arguments);
            }
            return CommentProps;
        }(domCore.DomProps));
        Comment.CommentProps = CommentProps;
    })(Comment = exports.Comment || (exports.Comment = {}));
});
