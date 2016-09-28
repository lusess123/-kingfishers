/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "classnames", "./constants", "./utils", "./../../01core/Event", "./app"], function (require, exports, React, classnames_1, constants_1, utils_1, eventFile, appFile) {
    "use strict";
    var TodoFooter = (function (_super) {
        __extends(TodoFooter, _super);
        function TodoFooter() {
            _super.apply(this, arguments);
        }
        TodoFooter.prototype.gotto = function (sign) {
            eventFile.App.GetAppEvent().emit(sign + appFile.uniId);
        };
        TodoFooter.prototype.render = function () {
            var _this = this;
            var activeTodoWord = utils_1.Utils.pluralize(this.props.count, '项');
            var clearButton = null;
            if (this.props.completedCount > 0) {
                clearButton = (React.createElement("button", {className: "clear-completed", onClick: this.props.onClearCompleted}, "清空已完成"));
            }
            var nowShowing = this.props.nowShowing;
            return (React.createElement("div", {className: "todoapp-footer"}, React.createElement("span", {className: "todo-count"}, "总共 ", React.createElement("strong", null, this.props.count), " ", activeTodoWord), React.createElement("ul", {className: "filters"}, React.createElement("li", null, React.createElement("a", {onClick: function () { _this.gotto("all"); }, className: classnames_1["default"]({ selected: nowShowing === constants_1.ALL_TODOS })}, "所有")), ' ', React.createElement("li", null, React.createElement("a", {onClick: function () { _this.gotto("active"); }, className: classnames_1["default"]({ selected: nowShowing === constants_1.ACTIVE_TODOS })}, "未完成")), ' ', React.createElement("li", null, React.createElement("a", {onClick: function () { _this.gotto("completed"); }, className: classnames_1["default"]({ selected: nowShowing === constants_1.COMPLETED_TODOS })}, "已完成"))), clearButton));
        };
        return TodoFooter;
    }(React.Component));
    exports.TodoFooter = TodoFooter;
});
