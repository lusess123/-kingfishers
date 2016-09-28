var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var NewCircleDom;
    (function (NewCircleDom) {
        var NewCircleDomAction = (function (_super) {
            __extends(NewCircleDomAction, _super);
            function NewCircleDomAction() {
                _super.apply(this, arguments);
            }
            return NewCircleDomAction;
        }(domCore.DomAction));
        NewCircleDom.NewCircleDomAction = NewCircleDomAction;
        var NewCircleDomReact = (function (_super) {
            __extends(NewCircleDomReact, _super);
            function NewCircleDomReact() {
                _super.apply(this, arguments);
                this.state = new NewCircleDomStates();
            }
            NewCircleDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, this.props.Vm.NewCount == 0 ? "" :
                    React.createElement("div", {className: "label label-pill label-danger Hu-news-circle", onClick: function () { _this.props.Vm.clear(); }}, " ", React.createElement("em", {className: "u-news-num"}, this.props.Vm.NewCount)));
            };
            NewCircleDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return NewCircleDomReact;
        }(domCore.DomReact));
        NewCircleDom.NewCircleDomReact = NewCircleDomReact;
        var NewCircleDomVm = (function (_super) {
            __extends(NewCircleDomVm, _super);
            function NewCircleDomVm(config) {
                _super.call(this);
                this.ReactType = NewCircleDomReact;
                this.NewCount = 0;
            }
            NewCircleDomVm.prototype.clear = function () {
                this.NewCount = 0;
                this.forceUpdate("");
            };
            NewCircleDomVm.prototype.add = function () {
                this.NewCount++;
                this.forceUpdate("");
            };
            return NewCircleDomVm;
        }(domCore.DomVm));
        NewCircleDom.NewCircleDomVm = NewCircleDomVm;
        var NewCircleDomStates = (function (_super) {
            __extends(NewCircleDomStates, _super);
            function NewCircleDomStates() {
                _super.apply(this, arguments);
            }
            return NewCircleDomStates;
        }(domCore.DomStates));
        NewCircleDom.NewCircleDomStates = NewCircleDomStates;
        var NewCircleDomProps = (function (_super) {
            __extends(NewCircleDomProps, _super);
            function NewCircleDomProps() {
                _super.apply(this, arguments);
            }
            return NewCircleDomProps;
        }(domCore.DomProps));
        NewCircleDom.NewCircleDomProps = NewCircleDomProps;
    })(NewCircleDom = exports.NewCircleDom || (exports.NewCircleDom = {}));
});
