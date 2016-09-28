/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/


//declare var Router;
import React = require("react");
import ReactDOM = require("react-dom");
import { TodoModel } from "./todoModel";
import { TodoFooter } from "./footer";
import { TodoItem } from "./todoItem";
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS, ENTER_KEY } from "./constants";
import eventFile = require("./../../01core/Event");
export class TodoApp extends React.Component<IAppProps, IAppState> {

  public state : IAppState;

  constructor(props : IAppProps) {
    super(props);
    this.state = {
      nowShowing: ALL_TODOS,
      editing: null
    };
  }

  public componentDidMount() {
    var setState = this.setState;
    //var router = Router({
    //  '/': setState.bind(this, {nowShowing: ALL_TODOS}),
    //  '/active': setState.bind(this, {nowShowing: ACTIVE_TODOS}),
    //  '/completed': setState.bind(this, {nowShowing: COMPLETED_TODOS})
    //});
    //router.init('/');

    eventFile.App.GetAppEvent().addListener("all" + uniId,
        () => { this.setState({ nowShowing: ALL_TODOS }) }
    );

    eventFile.App.GetAppEvent().addListener("active" + uniId,
        () => { this.setState({ nowShowing: ACTIVE_TODOS }) }
    );

    eventFile.App.GetAppEvent().addListener("completed" + uniId,
        () => { this.setState({ nowShowing: COMPLETED_TODOS }) }
    );


  }

  public handleNewTodoKeyDown(event : __React.KeyboardEvent) {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    var val = ReactDOM.findDOMNode<HTMLInputElement>(this.refs["newField"]).value.trim();

    if (val) {
      this.props.model.addTodo(val);
      ReactDOM.findDOMNode<HTMLInputElement>(this.refs["newField"]).value = '';
    }
  }

  public toggleAll(event : __React.FormEvent) {
    var target : any = event.target;
    var checked = target.checked;
    this.props.model.toggleAll(checked);
  }

  public toggle(todoToToggle : ITodo) {
    this.props.model.toggle(todoToToggle);
  }

  public destroy(todo : ITodo) {
    this.props.model.destroy(todo);
  }

  public edit(todo : ITodo) {
    this.setState({editing: todo.id});
  }

  public save(todoToSave : ITodo, text : String) {
    this.props.model.save(todoToSave, text);
    this.setState({editing: null});
  }

  public cancel() {
    this.setState({editing: null});
  }

  public clearCompleted() {
    this.props.model.clearCompleted();
  }

  public render() {
    var footer;
    var main;
    const todos = this.props.model.todos;

    var shownTodos = todos.filter((todo) => {
      switch (this.state.nowShowing) {
      case ACTIVE_TODOS:
        return !todo.completed;
      case COMPLETED_TODOS:
        return todo.completed;
      default:
        return true;
      }
    });

    var todoItems = shownTodos.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={this.toggle.bind(this, todo)}
          onDestroy={this.destroy.bind(this, todo)}
          onEdit={this.edit.bind(this, todo)}
          editing={this.state.editing === todo.id}
          onSave={this.save.bind(this, todo)}
          onCancel={ e => this.cancel() }
        />
      );
    });

    // Note: It's usually better to use immutable data structures since they're
    // easier to reason about and React works very well with them. That's why
    // we use map(), filter() and reduce() everywhere instead of mutating the
    // array or todo items themselves.
    var activeTodoCount = todos.reduce(function (accum, todo) {
      return todo.completed ? accum : accum + 1;
    }, 0);

    var completedCount = todos.length - activeTodoCount;

    if (activeTodoCount || completedCount) {
      footer =
        <TodoFooter
          count={activeTodoCount}
          completedCount={completedCount}
          nowShowing={this.state.nowShowing}
          onClearCompleted={ e=> this.clearCompleted() }
        />;
    }

    if (todos.length) {
        main = (
            <div className="todoapp-main">
          <input
            className="toggle-all"
            type="checkbox"
            onChange={ e => this.toggleAll(e) }
            checked={activeTodoCount === 0}
          />
          <ul className="todo-list">
            {todoItems}
          </ul>
            </div>
      );
    }

    return (
        <div className="todoapp">
        <header className="header">
          <h1>小树苗</h1>
          <input
            ref="newField"
            className="new-todo"
            placeholder="给我浇水?"
            onKeyDown={ e => this.handleNewTodoKeyDown(e) }
            autoFocus={true}
          />
        </header>
        {main}
        {footer}
      </div>
    );
  }
}

export var model = new TodoModel('react-todos');

function render() {
    ReactDOM.render(
    <TodoApp model={model}/>,
    document.getElementsByClassName('todoapp')[0]
  );
}

export var uniId = eventFile.App.getUniId();

model.subscribe(() => {
    eventFile.App.GetAppEvent().emit("todolist" + uniId );
});
//render();
