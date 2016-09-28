var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "./../../01core/Util", "react", "react-dom"], function (require, exports, domFile, utilFile, React, ReactDOM) {
    "use strict";
    var domCore = domFile.Core;
    var QQEmotion;
    (function (QQEmotion) {
        var QQEmotionAction = (function (_super) {
            __extends(QQEmotionAction, _super);
            function QQEmotionAction() {
                _super.apply(this, arguments);
            }
            return QQEmotionAction;
        }(domCore.DomAction));
        QQEmotion.QQEmotionAction = QQEmotionAction;
        var QQEmotionReact = (function (_super) {
            __extends(QQEmotionReact, _super);
            function QQEmotionReact() {
                _super.apply(this, arguments);
                this.state = new QQEmotionStates();
            }
            QQEmotionReact.prototype.getEmotionDom = function () {
                var _dom = ReactDOM.findDOMNode(this);
                return $(_dom).find("span");
            };
            QQEmotionReact.prototype.getTextareaDom = function () {
                var _dom = ReactDOM.findDOMNode(this);
                return $(_dom).find("textarea");
            };
            QQEmotionReact.prototype.getSubmitDom = function () {
                var _dom = ReactDOM.findDOMNode(this);
                return $(_dom).find("a");
            };
            QQEmotionReact.prototype.getShowDom = function () {
                var _dom = ReactDOM.findDOMNode(this);
                return $(_dom).find("div");
            };
            QQEmotionReact.prototype.fReplace_emDom = function (str) {
                str = str.replace(/\</g, '&lt;');
                str = str.replace(/\>/g, '&gt;');
                str = str.replace(/\n/g, '<br/>');
                str = str.replace(/\[em_([0-9]*)\]/g, '<img src="/Content/images/face/$1.gif" border="0" />');
                return str;
            };
            QQEmotionReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hu-content "}, React.createElement("div", {className: "clearfix"}, React.createElement("div", {id: "show", ref: "showqq"}), React.createElement("textarea", {ref: "saytext", id: "saytext", name: "saytext", className: " col-lg-12 col-md-12 col-sm-10 col-xs-10", placeholder: "说两句吧..."}), React.createElement("div", {className: ""}, React.createElement("span", {ref: "emotion"}, React.createElement("i", {className: "fa-lg fa fa-smile-o"})), React.createElement("a", {ref: "submit", className: "btn btn-xs"}, "发表"))));
            };
            QQEmotionReact.prototype.pComponentDidMount = function () {
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
            QQEmotionReact.prototype.fGetEmotionDom = function () {
                var _reactObj = this.refs["emotion"];
                var _dom = ReactDOM.findDOMNode(_reactObj);
                var _$dom = $(_dom);
                return _$dom;
            };
            QQEmotionReact.prototype.fGetTextareaDom = function () {
                var _reactObj = this.refs["saytext"];
                var _dom = ReactDOM.findDOMNode(_reactObj);
                var _$dom = $(_dom);
                return _$dom;
            };
            QQEmotionReact.prototype.fGetSubmitDom = function () {
                var _reactObj = this.refs["submit"];
                var _dom = ReactDOM.findDOMNode(_reactObj);
                var _$dom = $(_dom);
                return _$dom;
            };
            QQEmotionReact.prototype.fGetShowDom = function () {
                var _reactObj = this.refs["showqq"];
                var _dom = ReactDOM.findDOMNode(_reactObj);
                var _$dom = $(_dom);
                return _$dom;
            };
            return QQEmotionReact;
        }(domCore.DomReact));
        QQEmotion.QQEmotionReact = QQEmotionReact;
        var QQEmotionVm = (function (_super) {
            __extends(QQEmotionVm, _super);
            function QQEmotionVm(config) {
                _super.call(this);
                this.ReactType = QQEmotionReact;
            }
            return QQEmotionVm;
        }(domCore.DomVm));
        QQEmotion.QQEmotionVm = QQEmotionVm;
        var QQEmotionStates = (function (_super) {
            __extends(QQEmotionStates, _super);
            function QQEmotionStates() {
                _super.apply(this, arguments);
            }
            return QQEmotionStates;
        }(domCore.DomStates));
        QQEmotion.QQEmotionStates = QQEmotionStates;
        var QQEmotionProps = (function (_super) {
            __extends(QQEmotionProps, _super);
            function QQEmotionProps() {
                _super.apply(this, arguments);
            }
            return QQEmotionProps;
        }(domCore.DomProps));
        QQEmotion.QQEmotionProps = QQEmotionProps;
    })(QQEmotion = exports.QQEmotion || (exports.QQEmotion = {}));
});
