var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../04page/BaseWebPage", "react", "./CommentListDom", "./AddCommentDom", "./Comment"], function (require, exports, iocFile, basewedPageFile, React, listFile, addFile, dataFile) {
    "use strict";
    var CommentPage;
    (function (CommentPage) {
        var CommentPageAction = (function (_super) {
            __extends(CommentPageAction, _super);
            function CommentPageAction() {
                _super.apply(this, arguments);
            }
            return CommentPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        CommentPage.CommentPageAction = CommentPageAction;
        var CommentPageReact = (function (_super) {
            __extends(CommentPageReact, _super);
            function CommentPageReact() {
                _super.apply(this, arguments);
                this.state = new CommentPageStates();
            }
            CommentPageReact.prototype.pSender = function () {
                return React.createElement("div", null, this.props.Vm.Comment.intoDom());
            };
            CommentPageReact.prototype.fun_isComment = function () {
                this.props.Vm.IsComment = !this.props.Vm.IsComment;
                this.forceUpdate();
            };
            return CommentPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        CommentPage.CommentPageReact = CommentPageReact;
        var CommentPageVm = (function (_super) {
            __extends(CommentPageVm, _super);
            function CommentPageVm(config) {
                _super.call(this);
                this.ReactType = CommentPageReact;
                this.Title = "CommentPage页面;";
                this.IsComment = false;
                this.CommentData = new listFile.CommentListDom.CommentListDomVm();
                this.AddComment = new addFile.AddCommentDom.AddCommentDomVm();
                this.Comment = new dataFile.Comment.CommentVm();
            }
            CommentPageVm.prototype.init = function (config) {
            };
            CommentPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return CommentPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        CommentPage.CommentPageVm = CommentPageVm;
        var CommentPageStates = (function (_super) {
            __extends(CommentPageStates, _super);
            function CommentPageStates() {
                _super.apply(this, arguments);
            }
            return CommentPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        CommentPage.CommentPageStates = CommentPageStates;
        var CommentPageProps = (function (_super) {
            __extends(CommentPageProps, _super);
            function CommentPageProps() {
                _super.apply(this, arguments);
            }
            return CommentPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        CommentPage.CommentPageProps = CommentPageProps;
        iocFile.Core.Ioc.Current().RegisterType("COMMENTPAGE", basewedPageFile.Web.BaseWebPageVm, CommentPageVm);
    })(CommentPage = exports.CommentPage || (exports.CommentPage = {}));
});
