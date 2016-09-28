

import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");
import todolistApp = require("./app");
import TodoApp = todolistApp.TodoApp;
export module TodoListPage {
    export class TodoListPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class TodoListPageReact extends basewedPageFile.Web.BaseWebPageReact<TodoListPageProps, TodoListPageStates, TodoListPageAction> implements domCore.IReact {

        public state = new TodoListPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="todoapp-body"><TodoApp model={todolistApp.model}></TodoApp></div>;
        }






    }

    export interface IReactTodoListPageVm extends basewedPageFile.Web.BaseWebPageVm {

    }

    export interface ITodoListPageConfig {


    }
    export class TodoListPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactTodoListPageVm {
        public ReactType = TodoListPageReact;
        public Title: string = "TodoListPage的页面";
        public constructor(config?: ITodoListPageConfig) {
            super();
            this.listenAppEvent("todolist", todolistApp.uniId.toString(), () => {
                this.forceUpdate("");
            });
        }

        private init(config: ITodoListPageConfig) {
        }

        protected loadPage(callback?: () => any) {
           
            utilFile.Core.Util.AsyncJs(["/ts/src/06app/TodoList/css/index.css"], () => {
                if (callback) {
                    callback();
                }
            });
        }

    }
    export class TodoListPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class TodoListPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactTodoListPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("TODOLISTPAGE", basewedPageFile.Web.BaseWebPageVm, TodoListPageVm);
    iocFile.Core.Ioc.Current().RegisterType("littletree", basewedPageFile.Web.BaseWebPageVm, TodoListPageVm);
}

