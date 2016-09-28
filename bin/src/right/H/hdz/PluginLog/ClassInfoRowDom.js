var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var ClassInfoRowDom;
    (function (ClassInfoRowDom) {
        var ClassInfoRowDomAction = (function (_super) {
            __extends(ClassInfoRowDomAction, _super);
            function ClassInfoRowDomAction() {
                _super.apply(this, arguments);
            }
            return ClassInfoRowDomAction;
        }(domCore.DomAction));
        ClassInfoRowDom.ClassInfoRowDomAction = ClassInfoRowDomAction;
        var ClassInfoRowDomReact = (function (_super) {
            __extends(ClassInfoRowDomReact, _super);
            function ClassInfoRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ClassInfoRowDomStates();
            }
            ClassInfoRowDomReact.prototype.pSender = function () {
                return React.createElement("tr", null, React.createElement("td", null, this.props.Vm.RegName), React.createElement("td", null, this.props.Vm.BaseClass), React.createElement("td", null, this.props.Vm.Author), React.createElement("td", null, this.props.Vm.CreatTime), React.createElement("td", null, this.props.Vm.Mesg), React.createElement("td", null, this.props.Vm.ClassInfoError));
            };
            ClassInfoRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ClassInfoRowDomReact;
        }(domCore.DomReact));
        ClassInfoRowDom.ClassInfoRowDomReact = ClassInfoRowDomReact;
        var ClassInfoRowDomVm = (function (_super) {
            __extends(ClassInfoRowDomVm, _super);
            function ClassInfoRowDomVm(config) {
                _super.call(this);
                this.ReactType = ClassInfoRowDomReact;
                if (config) {
                    if (config.RegName) {
                        this.RegName = config.RegName;
                    }
                    if (config.BaseClass) {
                        this.BaseClass = config.BaseClass;
                    }
                    if (config.Author) {
                        this.Author = config.Author;
                    }
                    if (config.CreatTime) {
                        this.CreatTime = config.CreatTime;
                    }
                    if (config.Mesg) {
                        this.Mesg = config.Mesg;
                    }
                    if (config.ClassInfoError) {
                        this.ClassInfoError = config.ClassInfoError;
                    }
                }
            }
            return ClassInfoRowDomVm;
        }(domCore.DomVm));
        ClassInfoRowDom.ClassInfoRowDomVm = ClassInfoRowDomVm;
        var ClassInfoRowDomStates = (function (_super) {
            __extends(ClassInfoRowDomStates, _super);
            function ClassInfoRowDomStates() {
                _super.apply(this, arguments);
            }
            return ClassInfoRowDomStates;
        }(domCore.DomStates));
        ClassInfoRowDom.ClassInfoRowDomStates = ClassInfoRowDomStates;
        var ClassInfoRowDomProps = (function (_super) {
            __extends(ClassInfoRowDomProps, _super);
            function ClassInfoRowDomProps() {
                _super.apply(this, arguments);
            }
            return ClassInfoRowDomProps;
        }(domCore.DomProps));
        ClassInfoRowDom.ClassInfoRowDomProps = ClassInfoRowDomProps;
    })(ClassInfoRowDom = exports.ClassInfoRowDom || (exports.ClassInfoRowDom = {}));
});
