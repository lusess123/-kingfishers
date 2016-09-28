var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "./../../01core/Util", "react", "react-dom"], function (require, exports, domFile, utilFile, React, ReactDOM) {
    "use strict";
    var domCore = domFile.Core;
    var MonacoEditor;
    (function (MonacoEditor) {
        var MonacoEditorAction = (function (_super) {
            __extends(MonacoEditorAction, _super);
            function MonacoEditorAction() {
                _super.apply(this, arguments);
            }
            return MonacoEditorAction;
        }(domCore.DomAction));
        MonacoEditor.MonacoEditorAction = MonacoEditorAction;
        (function (CodeType) {
            CodeType[CodeType["html"] = 1] = "html";
            CodeType[CodeType["csharp"] = 2] = "csharp";
            CodeType[CodeType["xml"] = 3] = "xml";
            CodeType[CodeType["javascript"] = 4] = "javascript";
            CodeType[CodeType["typescript"] = 5] = "typescript";
            CodeType[CodeType["sql"] = 6] = "sql";
        })(MonacoEditor.CodeType || (MonacoEditor.CodeType = {}));
        var CodeType = MonacoEditor.CodeType;
        var MonacoEditorReact = (function (_super) {
            __extends(MonacoEditorReact, _super);
            function MonacoEditorReact() {
                _super.apply(this, arguments);
                this.state = new MonacoEditorStates();
                //HTML, XML, PHP, C#, C++, Razor, Markdown, Diff, Java, VB, CoffeeScript,
                //Handlebars, Batch, Jade, F#, Lua, Powershell,
                //Python, SASS, R, Objective-C
                this.fIsInit = false;
            }
            MonacoEditorReact.prototype.getHeight = function () {
                return $(window).height() - 8 * 20;
            };
            MonacoEditorReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: "MonacoEditor", style: { width: "100%", height: this.getHeight(), border: " 1px solid grey" }}));
            };
            MonacoEditorReact.prototype.fInit = function () {
                var _this = this;
                var _$dom = $(ReactDOM.findDOMNode(this)).find(".MonacoEditor");
                if (_$dom.length > 0) {
                    _$dom.html("");
                    requirejs.config({
                        paths: { "vs": "/AtawStatic/lib/03Extend/monaco-editor/min/vs" }
                    });
                    utilFile.Core.Util.AsyncJs([
                        "/AtawStatic/lib/03Extend/monaco-editor/min/vs/loader.js"], function () {
                        require(['vs/editor/editor.main'], function () {
                            // alert();
                            var editor = window["monaco"].editor.create(_$dom[0], {
                                value: _this.props.Vm.ContentList.join('\n'),
                                language: _this.props.Vm.getCodeTypeStr(),
                                theme: "vs"
                            });
                        });
                    });
                }
            };
            MonacoEditorReact.prototype.pInstall = function () {
                _super.prototype.pInstall.call(this);
                if (this.fInit) {
                    this.fInit();
                }
            };
            MonacoEditorReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
                if (!this.fIsInit) {
                    this.fIsInit = true;
                    this.fInit();
                }
            };
            return MonacoEditorReact;
        }(domCore.DomReact));
        MonacoEditor.MonacoEditorReact = MonacoEditorReact;
        var MonacoEditorVm = (function (_super) {
            __extends(MonacoEditorVm, _super);
            function MonacoEditorVm(config) {
                _super.call(this);
                this.ReactType = MonacoEditorReact;
                this.CodeType = CodeType.javascript;
                this.ContentList = [];
                if (config) {
                    if (config.CodeType) {
                        this.CodeType = config.CodeType;
                    }
                    if (config.ContentList) {
                        this.ContentList = config.ContentList;
                    }
                }
            }
            MonacoEditorVm.prototype.getCodeTypeStr = function () {
                switch (this.CodeType) {
                    case CodeType.csharp:
                        return "c#";
                    case CodeType.sql:
                        return "sql";
                    default:
                        return CodeType[this.CodeType];
                }
            };
            return MonacoEditorVm;
        }(domCore.DomVm));
        MonacoEditor.MonacoEditorVm = MonacoEditorVm;
        var MonacoEditorStates = (function (_super) {
            __extends(MonacoEditorStates, _super);
            function MonacoEditorStates() {
                _super.apply(this, arguments);
            }
            return MonacoEditorStates;
        }(domCore.DomStates));
        MonacoEditor.MonacoEditorStates = MonacoEditorStates;
        var MonacoEditorProps = (function (_super) {
            __extends(MonacoEditorProps, _super);
            function MonacoEditorProps() {
                _super.apply(this, arguments);
            }
            return MonacoEditorProps;
        }(domCore.DomProps));
        MonacoEditor.MonacoEditorProps = MonacoEditorProps;
    })(MonacoEditor = exports.MonacoEditor || (exports.MonacoEditor = {}));
});
