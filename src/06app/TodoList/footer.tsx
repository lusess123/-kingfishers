/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React */

import React = require("react");
import ReactDOM = require("react-dom");
import classNames from "classnames";
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from "./constants";
import { Utils } from "./utils";
import eventFile = require("./../../01core/Event");
import appFile = require("./app");
class TodoFooter extends React.Component<ITodoFooterProps, {}> {

    private gotto(sign: string) {
        eventFile.App.GetAppEvent().emit(sign + appFile.uniId);
    }
  public render() {
    var activeTodoWord = Utils.pluralize(this.props.count, '项');
    var clearButton = null;

    if (this.props.completedCount > 0) {
      clearButton = (
        <button
          className="clear-completed"
          onClick={this.props.onClearCompleted}>
          清空已完成
        </button>
      );
    }

    const nowShowing = this.props.nowShowing;
    return (
        <div className="todoapp-footer">
        <span className="todo-count">
         总共 <strong>{this.props.count}</strong> {activeTodoWord}
        </span>
        <ul className="filters">
                <li>
                    <a onClick={() => { this.gotto("all"); } }

              className={classNames({selected: nowShowing === ALL_TODOS})}>
                所有
            </a>
          </li>
          {' '}
          <li>
            <a
             onClick={() => { this.gotto("active"); } }
              className={classNames({selected: nowShowing === ACTIVE_TODOS})}>
                未完成
            </a>
          </li>
          {' '}
          <li>
            <a
           onClick={() => { this.gotto("completed"); } }
              className={classNames({selected: nowShowing === COMPLETED_TODOS})}>
                已完成
            </a>
          </li>
        </ul>
        {clearButton}
        </div>
    );
  }
}

export { TodoFooter };
