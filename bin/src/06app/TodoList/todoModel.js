/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
define(["require", "exports", "./utils"], function (require, exports, utils_1) {
    "use strict";
    // Generic "model" object. You can use whatever
    // framework you want. For this application it
    // may not even be worth separating this logic
    // out, but we do this to demonstrate one way to
    // separate out parts of your application.
    var TodoModel = (function () {
        function TodoModel(key) {
            this.key = key;
            this.todos = utils_1.Utils.store(key);
            this.onChanges = [];
        }
        TodoModel.prototype.subscribe = function (onChange) {
            this.onChanges.push(onChange);
        };
        TodoModel.prototype.inform = function () {
            utils_1.Utils.store(this.key, this.todos);
            this.onChanges.forEach(function (cb) { cb(); });
        };
        TodoModel.prototype.addTodo = function (title) {
            this.todos = this.todos.concat({
                id: utils_1.Utils.uuid(),
                title: title,
                completed: false
            });
            this.inform();
        };
        TodoModel.prototype.toggleAll = function (checked) {
            // Note: It's usually better to use immutable data structures since they're
            // easier to reason about and React works very well with them. That's why
            // we use map(), filter() and reduce() everywhere instead of mutating the
            // array or todo items themselves.
            this.todos = this.todos.map(function (todo) {
                return utils_1.Utils.extend({}, todo, { completed: checked });
            });
            this.inform();
        };
        TodoModel.prototype.toggle = function (todoToToggle) {
            this.todos = this.todos.map(function (todo) {
                return todo !== todoToToggle ?
                    todo :
                    utils_1.Utils.extend({}, todo, { completed: !todo.completed });
            });
            this.inform();
        };
        TodoModel.prototype.destroy = function (todo) {
            this.todos = this.todos.filter(function (candidate) {
                return candidate !== todo;
            });
            this.inform();
        };
        TodoModel.prototype.save = function (todoToSave, text) {
            this.todos = this.todos.map(function (todo) {
                return todo !== todoToSave ? todo : utils_1.Utils.extend({}, todo, { title: text });
            });
            this.inform();
        };
        TodoModel.prototype.clearCompleted = function () {
            this.todos = this.todos.filter(function (todo) {
                return !todo.completed;
            });
            this.inform();
        };
        return TodoModel;
    }());
    exports.TodoModel = TodoModel;
});
