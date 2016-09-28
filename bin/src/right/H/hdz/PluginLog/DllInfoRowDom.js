var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./ClassInfoRowDom"], function (require, exports, domFile, React, classInfoRow) {
    "use strict";
    var domCore = domFile.Core;
    var DllInfoRowDom;
    (function (DllInfoRowDom) {
        var DllInfoRowDomAction = (function (_super) {
            __extends(DllInfoRowDomAction, _super);
            function DllInfoRowDomAction() {
                _super.apply(this, arguments);
            }
            return DllInfoRowDomAction;
        }(domCore.DomAction));
        DllInfoRowDom.DllInfoRowDomAction = DllInfoRowDomAction;
        var DllInfoRowDomReact = (function (_super) {
            __extends(DllInfoRowDomReact, _super);
            function DllInfoRowDomReact() {
                _super.apply(this, arguments);
                this.state = new DllInfoRowDomStates();
            }
            DllInfoRowDomReact.prototype.pSender = function () {
                return React.createElement("tr", null, React.createElement("td", {className: this.props.Vm.NameIsNull ? "hide" : ""}, this.props.Vm.TrueName), React.createElement("td", {className: this.props.Vm.NameIsNull ? "hide" : ""}, this.props.Vm.VersionsName), React.createElement("td", {className: this.props.Vm.NameIsNull ? "hide" : " "}, this.props.Vm.RowIsNull ? "" : (this._initDllTable())), React.createElement("td", {colSpan: this.props.Vm.NameIsNull ? "4" : "", className: this.props.Vm.NameIsNull ? "Hs-red" : "", style: { "white-space": "normal" }}, React.createElement("i", {className: this.props.Vm.NameIsNull ? "fa fa-exclamation-triangle" : ""}), React.createElement("code", null, this.props.Vm.DllError)));
            };
            DllInfoRowDomReact.prototype._initDllTable = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "Hu-pointer", onClick: function () { _this.fun_TableClick(); }}, React.createElement("span", null, "展开查看详细"), React.createElement("i", {className: "fa fa-ellipsis-h Hu-pointer"}, " "), "(", this.props.Vm.ClassInfoList.length, ") "), React.createElement("table", {className: "table" + (this.props.Vm.TableIsHidden ? " " : " hide")}, this._initDllThead(), this._initDllTbody()));
            };
            DllInfoRowDomReact.prototype._initDllThead = function () {
                return React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "注册名"), React.createElement("th", null, "基类"), React.createElement("th", null, "作者"), React.createElement("th", null, "生成时间"), React.createElement("th", null, "提示信息"), React.createElement("th", null, "错误信息")));
            };
            DllInfoRowDomReact.prototype._initDllTbody = function () {
                return React.createElement("tbody", null, this.props.Vm.ClassInfoList.map(function (a) { return a.intoDom(); }));
            };
            DllInfoRowDomReact.prototype.fun_TableClick = function () {
                this.props.Vm.TableIsHidden = !this.props.Vm.TableIsHidden;
                this.forceUpdate();
            };
            DllInfoRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DllInfoRowDomReact;
        }(domCore.DomReact));
        DllInfoRowDom.DllInfoRowDomReact = DllInfoRowDomReact;
        var DllInfoRowDomVm = (function (_super) {
            __extends(DllInfoRowDomVm, _super);
            function DllInfoRowDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DllInfoRowDomReact;
                this.ClassInfoList = [];
                this.RowIsNull = false;
                this.NameIsNull = false;
                this.TableIsHidden = false;
                if (config.Name) {
                    this.TrueName = config.Name;
                    this.VersionsName = config.Name;
                    if (config.Name.length == 0) {
                        this.NameIsNull = true;
                    }
                    else {
                        this.TrueName = this.TrueName.substring(0, this.TrueName.lastIndexOf(','));
                        this.TrueName = this.TrueName.substring(0, this.TrueName.lastIndexOf(','));
                        this.TrueName = this.TrueName.substring(0, this.TrueName.lastIndexOf(','));
                        this.VersionsName = this.VersionsName.substring(0, this.VersionsName.lastIndexOf(','));
                        this.VersionsName = this.VersionsName.substring(0, this.VersionsName.lastIndexOf(','));
                        this.VersionsName = this.VersionsName.substr(this.VersionsName.indexOf(',') + 1, 100);
                        this.VersionsName = this.VersionsName.substr(9);
                    }
                }
                else {
                    this.NameIsNull = true;
                }
                if (config.DllError) {
                    this.DllError = config.DllError;
                    this.DllError = this.DllError.substring(0, this.DllError.indexOf('\r\n'));
                }
                if (config.ClassInfoList) {
                    this.Data = config.ClassInfoList;
                    if (this.Data.length == 0) {
                        this.RowIsNull = true;
                    }
                    else {
                        this.Data.forEach(function (a) {
                            var config = {
                                RegName: a.RegName, BaseClass: a.BaseClass, Author: a.Author,
                                CreatTime: a.CreateTime, Mesg: a.Mesg, ClassInfoError: a.Error
                            };
                            _this.Row = new classInfoRow.ClassInfoRowDom.ClassInfoRowDomVm(config);
                            _this.ClassInfoList.push(_this.Row);
                        });
                    }
                }
                else {
                    this.RowIsNull = true;
                }
            }
            return DllInfoRowDomVm;
        }(domCore.DomVm));
        DllInfoRowDom.DllInfoRowDomVm = DllInfoRowDomVm;
        var DllInfoRowDomStates = (function (_super) {
            __extends(DllInfoRowDomStates, _super);
            function DllInfoRowDomStates() {
                _super.apply(this, arguments);
            }
            return DllInfoRowDomStates;
        }(domCore.DomStates));
        DllInfoRowDom.DllInfoRowDomStates = DllInfoRowDomStates;
        var DllInfoRowDomProps = (function (_super) {
            __extends(DllInfoRowDomProps, _super);
            function DllInfoRowDomProps() {
                _super.apply(this, arguments);
            }
            return DllInfoRowDomProps;
        }(domCore.DomProps));
        DllInfoRowDom.DllInfoRowDomProps = DllInfoRowDomProps;
    })(DllInfoRowDom = exports.DllInfoRowDom || (exports.DllInfoRowDom = {}));
});
