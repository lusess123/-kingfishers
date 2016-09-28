var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./_title", "./_topbar", "./_makeup"], function (require, exports, domFile, React, titleFile, topbarFile, makeupFile) {
    "use strict";
    var domCore = domFile.Core;
    var titleVm = titleFile.title.titleVm;
    var topbarVm = topbarFile.topbar.topbarVm;
    var makeupVm = makeupFile.makeup.makeupVm;
    var head;
    (function (head) {
        var headAction = (function (_super) {
            __extends(headAction, _super);
            function headAction() {
                _super.apply(this, arguments);
            }
            return headAction;
        }(domCore.DomAction));
        head.headAction = headAction;
        var headReact = (function (_super) {
            __extends(headReact, _super);
            function headReact() {
                _super.apply(this, arguments);
                this.state = new headStates();
            }
            headReact.prototype.pSender = function () {
                return React.createElement("div", {className: "top-bar clearfix"}, this.props.Vm.TitleObj.intoDom(), this.props.Vm.TopbarObj.intoDom(), this.props.Vm.MakeupObj.intoDom());
            };
            headReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return headReact;
        }(domCore.DomReact));
        head.headReact = headReact;
        var headVm = (function (_super) {
            __extends(headVm, _super);
            function headVm() {
                _super.apply(this, arguments);
                this.ReactType = headReact;
                this.TitleObj = new titleVm();
                this.TopbarObj = new topbarVm();
                this.MakeupObj = new makeupVm();
            }
            return headVm;
        }(domCore.DomVm));
        head.headVm = headVm;
        var headStates = (function (_super) {
            __extends(headStates, _super);
            function headStates() {
                _super.apply(this, arguments);
            }
            return headStates;
        }(domCore.DomStates));
        head.headStates = headStates;
        var headProps = (function (_super) {
            __extends(headProps, _super);
            function headProps() {
                _super.apply(this, arguments);
            }
            return headProps;
        }(domCore.DomProps));
        head.headProps = headProps;
    })(head = exports.head || (exports.head = {}));
});
