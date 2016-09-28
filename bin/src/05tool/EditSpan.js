var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var EditSpan;
    (function (EditSpan) {
        var EditSpanAction = (function (_super) {
            __extends(EditSpanAction, _super);
            function EditSpanAction() {
                _super.apply(this, arguments);
            }
            return EditSpanAction;
        }(domCore.DomAction));
        EditSpan.EditSpanAction = EditSpanAction;
        var EditSpanReact = (function (_super) {
            __extends(EditSpanReact, _super);
            function EditSpanReact() {
                _super.apply(this, arguments);
                this.state = new EditSpanStates();
            }
            EditSpanReact.prototype.fun_txtChange = function (e) {
                var _val = e.target["value"];
                this.props.Vm.Content = _val;
                this.forceUpdate();
            };
            EditSpanReact.prototype.fun_SpanClick = function () {
                this.props.Vm.spanClick();
            };
            EditSpanReact.prototype.fun_PencilClick = function () {
                this.props.Vm.IsEdit = true;
                this.forceUpdate();
            };
            //private _initEditor(): React.ReactElement<any>
            //{
            //    return <div className="Hc-edit-span">
            //        <input type="text" 
            //            value={this.props.Vm.Content} placeholder="请输入.."
            //            onChange={(e) => { this.fun_txtChange(e); } }
            //            onBlur={() => { this.fun_SpanClick(); }}
            //            ></input>
            //        <i className="icon-share-alt fa fa-share Hu-pointer" onClick={() => { this.fun_SpanClick();}}></i>
            //    </div>;
            //}
            EditSpanReact.prototype._initEditor = function () {
                var _this = this;
                if (this.props.Vm.Type == "") {
                    return React.createElement("div", {className: "Hc-edit-span"}, React.createElement("input", {type: "text", value: this.props.Vm.Content, placeholder: "请输入..", onChange: function (e) { _this.fun_txtChange(e); }, onBlur: function () { _this.fun_SpanClick(); }}), React.createElement("i", {className: "icon-share-alt fa fa-share Hu-pointer", onClick: function () { _this.fun_SpanClick(); }}));
                }
                else if (this.props.Vm.Type == "textarea") {
                    return React.createElement("div", {className: "Hc-edit-span"}, React.createElement("textarea", {value: this.props.Vm.Content, placeholder: "请输入..", onChange: function (e) { _this.fun_txtChange(e); }, onBlur: function () { _this.fun_SpanClick(); }}), React.createElement("i", {className: "icon-share-alt fa fa-share Hu-pointer", onClick: function () { _this.fun_SpanClick(); }}));
                }
            };
            EditSpanReact.prototype._initSpan = function () {
                if (this.props.Vm.Content == "") {
                    return React.createElement("i", {className: "icon-pencil fa fa-pencil Hu-pointer"});
                }
                else
                    return this.props.Vm.Content;
            };
            EditSpanReact.prototype.pSender = function () {
                var _this = this;
                if (this.props.Vm.IsEdit)
                    return this._initEditor();
                else
                    return React.createElement("span", {className: "Hc-edit-span-text " + this.props.Vm.ClassName, onClick: function () { _this.fun_PencilClick(); }}, this._initSpan(), React.createElement("i", {className: "icon-pencil fa fa-pencil Hu-pointer"}));
            };
            EditSpanReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return EditSpanReact;
        }(domCore.DomReact));
        EditSpan.EditSpanReact = EditSpanReact;
        var EditSpanVm = (function (_super) {
            __extends(EditSpanVm, _super);
            function EditSpanVm(config) {
                _super.call(this);
                this.ReactType = EditSpanReact;
                this.Content = "";
                this.Placeholder = "";
                this.OriContent = "";
                this.IsEdit = false;
                this.Type = "";
                this.ClassName = "";
                this.TextEditName = "";
                if (config) {
                    if (config.Content) {
                        this.OriContent = this.Content = config.Content;
                    }
                    if (config.Type) {
                        this.Type = config.Type;
                    }
                    if (config.ChangeEvent) {
                        this.ChangeEvent = config.ChangeEvent;
                        this.onChangeValueEvent(this.ChangeEvent);
                    }
                    if (config.ClassName) {
                        this.ClassName = config.ClassName;
                    }
                    if (config.TextEditName) {
                        this.TextEditName = config.TextEditName;
                    }
                }
            }
            EditSpanVm.prototype.spanClick = function () {
                this.IsEdit = false;
                this.getEmit().emit("changeValue", this, this.Content != this.OriContent);
                this.ClassName = " Hs-edit";
                this.forceUpdate("");
            };
            EditSpanVm.prototype.onChangeValueEvent = function (fun) {
                this.getEmit().addListener("changeValue", fun);
            };
            return EditSpanVm;
        }(domCore.DomVm));
        EditSpan.EditSpanVm = EditSpanVm;
        var EditSpanStates = (function (_super) {
            __extends(EditSpanStates, _super);
            function EditSpanStates() {
                _super.apply(this, arguments);
            }
            return EditSpanStates;
        }(domCore.DomStates));
        EditSpan.EditSpanStates = EditSpanStates;
        var EditSpanProps = (function (_super) {
            __extends(EditSpanProps, _super);
            function EditSpanProps() {
                _super.apply(this, arguments);
            }
            return EditSpanProps;
        }(domCore.DomProps));
        EditSpan.EditSpanProps = EditSpanProps;
    })(EditSpan = exports.EditSpan || (exports.EditSpan = {}));
});
