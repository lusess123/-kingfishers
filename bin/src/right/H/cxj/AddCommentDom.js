var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "./../../../01core/Util", "react", "react-dom"], function (require, exports, domFile, utilFile, React, ReactDOM) {
    "use strict";
    var domCore = domFile.Core;
    var AddCommentDom;
    (function (AddCommentDom) {
        var AddCommentDomAction = (function (_super) {
            __extends(AddCommentDomAction, _super);
            function AddCommentDomAction() {
                _super.apply(this, arguments);
            }
            return AddCommentDomAction;
        }(domCore.DomAction));
        AddCommentDom.AddCommentDomAction = AddCommentDomAction;
        var AddCommentDomReact = (function (_super) {
            __extends(AddCommentDomReact, _super);
            function AddCommentDomReact() {
                _super.apply(this, arguments);
                this.state = new AddCommentDomStates();
            }
            AddCommentDomReact.prototype.getEmotionDom = function () {
                var _dom = ReactDOM.findDOMNode(this);
                return $(_dom).find("span");
            };
            AddCommentDomReact.prototype.getTextareaDom = function () {
                var _dom = ReactDOM.findDOMNode(this);
                return $(_dom).find("textarea");
            };
            AddCommentDomReact.prototype.getSubmitDom = function () {
                var _dom = ReactDOM.findDOMNode(this);
                return $(_dom).find("a");
            };
            AddCommentDomReact.prototype.getShowDom = function () {
                var _dom = ReactDOM.findDOMNode(this);
                return $(_dom).find("div");
            };
            AddCommentDomReact.prototype.fReplace_emDom = function (str) {
                str = str.replace(/\</g, '&lt;');
                str = str.replace(/\>/g, '&gt;');
                str = str.replace(/\n/g, '<br/>');
                str = str.replace(/\[em_([0-9]*)\]/g, '<img src="/Content/images/face/$1.gif" border="0" />');
                return str;
            };
            AddCommentDomReact.prototype.pSender = function () {
                return React.createElement("div", {className: "clearfix"}, React.createElement("textarea", {ref: "saytext", id: "saytext", name: "saytext", className: " col-lg-12 col-md-12 col-sm-12 col-xs-12", placeholder: "说两句吧..."}), React.createElement("div", {className: "Hu-publish"}, React.createElement("span", {ref: "emotion", className: "Hu-pointer"}, React.createElement("i", {className: "fa-lg fa fa-smile-o"})), React.createElement("a", {ref: "submit", className: "btn btn-xs"}, "发表")), React.createElement("div", {id: "show", ref: "showqq"}));
            };
            AddCommentDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
                var __this = this;
                utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/emotion/jquery.qqFace.js"], function () {
                    var _txdom = __this.fGetTextareaDom();
                    var _spdom = __this.fGetEmotionDom();
                    var _submit = __this.fGetSubmitDom();
                    var _show = __this.fGetShowDom();
                    _spdom.qqFace({
                        id: "facebox",
                        assign: "saytext",
                        path: "/Content/images/face/"
                    });
                    _submit.click(function () {
                        var str = _txdom.val();
                        _show.html(__this.fReplace_emDom(str));
                    });
                });
            };
            AddCommentDomReact.prototype.fGetEmotionDom = function () {
                var _reactObj = this.refs["emotion"];
                var _dom = ReactDOM.findDOMNode(_reactObj);
                var _$dom = $(_dom);
                return _$dom;
            };
            AddCommentDomReact.prototype.fGetTextareaDom = function () {
                var _reactObj = this.refs["saytext"];
                var _dom = ReactDOM.findDOMNode(_reactObj);
                var _$dom = $(_dom);
                return _$dom;
            };
            AddCommentDomReact.prototype.fGetSubmitDom = function () {
                var _reactObj = this.refs["submit"];
                var _dom = ReactDOM.findDOMNode(_reactObj);
                var _$dom = $(_dom);
                return _$dom;
            };
            AddCommentDomReact.prototype.fGetShowDom = function () {
                var _reactObj = this.refs["showqq"];
                var _dom = ReactDOM.findDOMNode(_reactObj);
                var _$dom = $(_dom);
                return _$dom;
            };
            return AddCommentDomReact;
        }(domCore.DomReact));
        AddCommentDom.AddCommentDomReact = AddCommentDomReact;
        var AddCommentDomVm = (function (_super) {
            __extends(AddCommentDomVm, _super);
            function AddCommentDomVm(config) {
                _super.call(this);
                this.ReactType = AddCommentDomReact;
            }
            return AddCommentDomVm;
        }(domCore.DomVm));
        AddCommentDom.AddCommentDomVm = AddCommentDomVm;
        var AddCommentDomStates = (function (_super) {
            __extends(AddCommentDomStates, _super);
            function AddCommentDomStates() {
                _super.apply(this, arguments);
            }
            return AddCommentDomStates;
        }(domCore.DomStates));
        AddCommentDom.AddCommentDomStates = AddCommentDomStates;
        var AddCommentDomProps = (function (_super) {
            __extends(AddCommentDomProps, _super);
            function AddCommentDomProps() {
                _super.apply(this, arguments);
            }
            return AddCommentDomProps;
        }(domCore.DomProps));
        AddCommentDom.AddCommentDomProps = AddCommentDomProps;
    })(AddCommentDom = exports.AddCommentDom || (exports.AddCommentDom = {}));
});
