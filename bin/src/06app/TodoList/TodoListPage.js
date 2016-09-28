var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../01core/Util", "./../../04page/BaseWebPage", "react", "./app"], function (require, exports, iocFile, utilFile, basewedPageFile, React, todolistApp) {
    "use strict";
    var TodoApp = todolistApp.TodoApp;
    var TodoListPage;
    (function (TodoListPage) {
        var TodoListPageAction = (function (_super) {
            __extends(TodoListPageAction, _super);
            function TodoListPageAction() {
                _super.apply(this, arguments);
            }
            return TodoListPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        TodoListPage.TodoListPageAction = TodoListPageAction;
        var TodoListPageReact = (function (_super) {
            __extends(TodoListPageReact, _super);
            function TodoListPageReact() {
                _super.apply(this, arguments);
                this.state = new TodoListPageStates();
            }
            TodoListPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "todoapp-body"}, React.createElement(TodoApp, {model: todolistApp.model}));
            };
            return TodoListPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        TodoListPage.TodoListPageReact = TodoListPageReact;
        var TodoListPageVm = (function (_super) {
            __extends(TodoListPageVm, _super);
            function TodoListPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = TodoListPageReact;
                this.Title = "TodoListPage的页面";
                this.listenAppEvent("todolist", todolistApp.uniId.toString(), function () {
                    _this.forceUpdate("");
                });
            }
            TodoListPageVm.prototype.init = function (config) {
            };
            TodoListPageVm.prototype.loadPage = function (callback) {
                utilFile.Core.Util.AsyncJs(["/ts/src/06app/TodoList/css/index.css"], function () {
                    if (callback) {
                        callback();
                    }
                });
            };
            return TodoListPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        TodoListPage.TodoListPageVm = TodoListPageVm;
        var TodoListPageStates = (function (_super) {
            __extends(TodoListPageStates, _super);
            function TodoListPageStates() {
                _super.apply(this, arguments);
            }
            return TodoListPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        TodoListPage.TodoListPageStates = TodoListPageStates;
        var TodoListPageProps = (function (_super) {
            __extends(TodoListPageProps, _super);
            function TodoListPageProps() {
                _super.apply(this, arguments);
            }
            return TodoListPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        TodoListPage.TodoListPageProps = TodoListPageProps;
        iocFile.Core.Ioc.Current().RegisterType("TODOLISTPAGE", basewedPageFile.Web.BaseWebPageVm, TodoListPageVm);
        iocFile.Core.Ioc.Current().RegisterType("littletree", basewedPageFile.Web.BaseWebPageVm, TodoListPageVm);
    })(TodoListPage = exports.TodoListPage || (exports.TodoListPage = {}));
});
