var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    var DomReact = (function (_super) {
        __extends(DomReact, _super);
        function DomReact() {
            _super.apply(this, arguments);
        }
        DomReact.prototype.render = function () {
            return this.pRender();
        };
        DomReact.prototype.pRender = function () {
            return null;
        };
        return DomReact;
    }(React.Component));
    exports.DomReact = DomReact;
    var DomVm = (function () {
        function DomVm() {
        }
        return DomVm;
    }());
    exports.DomVm = DomVm;
    var TestDomReact = (function (_super) {
        __extends(TestDomReact, _super);
        function TestDomReact() {
            _super.apply(this, arguments);
        }
        TestDomReact.prototype.pRender = function () {
            return React.createElement("div", null, this.props.Vm.TestDomVm);
        };
        ;
        return TestDomReact;
    }(DomReact));
    exports.TestDomReact = TestDomReact;
    var TestDomVm = (function (_super) {
        __extends(TestDomVm, _super);
        function TestDomVm() {
            _super.apply(this, arguments);
            this.TestDomVm = "hahahaha";
        }
        return TestDomVm;
    }(DomVm));
    exports.TestDomVm = TestDomVm;
});
