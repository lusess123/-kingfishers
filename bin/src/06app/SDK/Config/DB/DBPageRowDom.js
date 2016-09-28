var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../05tool/EditSpan"], function (require, exports, domFile, React, EditSpanFile) {
    "use strict";
    var domCore = domFile.Core;
    var DBPageRowDom;
    (function (DBPageRowDom) {
        var DBPageRowDomAction = (function (_super) {
            __extends(DBPageRowDomAction, _super);
            function DBPageRowDomAction() {
                _super.apply(this, arguments);
            }
            return DBPageRowDomAction;
        }(domCore.DomAction));
        DBPageRowDom.DBPageRowDomAction = DBPageRowDomAction;
        var DBPageRowDomReact = (function (_super) {
            __extends(DBPageRowDomReact, _super);
            function DBPageRowDomReact() {
                _super.apply(this, arguments);
                this.state = new DBPageRowDomStates();
            }
            DBPageRowDomReact.prototype.pSender = function () {
                var _this = this;
                var a = this.props.Vm.Data;
                var b = this.props.Vm.Item;
                var c = this.props.Vm.Number;
                return React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: this.fun_IsDefault(a.IsDefault), onClick: function () { _this.fun_Ischange(); }})), this.pSenderDBRow("Name", a.Name, a.Name), "DataSource=", this.pSenderDBRow("DataSource", b[c * 4].DataSource, b[c * 4].DataSource), ";" + ' ' + "InitialCatalog=", this.pSenderDBRow("InitialCatalog", b[c * 4 + 1].InitialCatalog, b[c * 4 + 1].InitialCatalog), ";" + ' ' + "UserID=", this.pSenderDBRow("UserID", b[c * 4 + 2].UserID, b[c * 4 + 2].UserID), ";" + ' ' + "PassWord=", this.pSenderDBRow("PassWord", b[c * 4 + 3].PassWord, b[c * 4 + 3].PassWord), ";", React.createElement("td", null, React.createElement("i", {className: "fa fa-minus-circle Hu-pointer", onClick: function () { _this.Delete(); }}))));
            };
            DBPageRowDomReact.prototype.fun_Ischange = function () {
                if (this.props.Vm.Data.IsDefault == false) {
                    this.props.Vm.Data.IsDefault = true;
                }
                else {
                    this.props.Vm.Data.IsDefault = false;
                }
                this.forceUpdate();
            };
            DBPageRowDomReact.prototype.fun_IsDefault = function (val) {
                if (val == false) {
                    this.props.Vm.IsDefault = "fa fa-circle-o Hu-pointer";
                }
                if (val == true) {
                    this.props.Vm.IsDefault = "fa fa-circle Hu-pointer";
                }
                return this.props.Vm.IsDefault;
            };
            DBPageRowDomReact.prototype.pSenderDBRow = function (Type, Key, value) {
                return React.createElement("td", null, this.props.Vm.pSenderDBRow(Type, Key, value));
            };
            DBPageRowDomReact.prototype.Delete = function () {
                this.props.Vm.Delete();
            };
            DBPageRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DBPageRowDomReact;
        }(domCore.DomReact));
        DBPageRowDom.DBPageRowDomReact = DBPageRowDomReact;
        var DBPageRowDomVm = (function (_super) {
            __extends(DBPageRowDomVm, _super);
            function DBPageRowDomVm(config) {
                _super.call(this);
                this.ReactType = DBPageRowDomReact;
                if (config.Data) {
                    this.Data = config.Data;
                    this.Item = config.Item;
                    if (config.Unid) {
                        this.UniId = config.Unid;
                    }
                }
                if (config.Number) {
                    this.Number = config.Number;
                }
                if (config.Number == 0) {
                    this.Number = 0;
                }
            }
            DBPageRowDomVm.prototype.pSenderDBRow = function (Type, Key, Val) {
                var _this = this;
                if (Val == "")
                    Val = "空";
                var num = this.Number;
                var config = {
                    Content: Val, ChangeEvent: function (v, ischage) {
                        if (Type == "Name") {
                            _this.Data.Name = v.Content;
                        }
                        if (Type == "DataSource") {
                            _this.Item[num * 4].DataSource = v.Content;
                        }
                        if (Type == "InitialCatalog") {
                            _this.Item[num * 4 + 1].InitialCatalog = v.Content;
                        }
                        if (Type == "UserID") {
                            _this.Item[num * 4 + 2].UserID = v.Content;
                        }
                        if (Type == "PassWord") {
                            _this.Item[num * 4 + 3].PassWord = v.Content;
                        }
                    }
                };
                this.EditText = new EditSpanFile.EditSpan.EditSpanVm(config);
                return this.EditText.intoDom();
            };
            DBPageRowDomVm.prototype.Delete = function () {
                this.emitAppEvent("app/SDK/Config/DB/RowDelete", this.UniId, this.Data.Name);
            };
            return DBPageRowDomVm;
        }(domCore.DomVm));
        DBPageRowDom.DBPageRowDomVm = DBPageRowDomVm;
        var DBPageRowDomStates = (function (_super) {
            __extends(DBPageRowDomStates, _super);
            function DBPageRowDomStates() {
                _super.apply(this, arguments);
            }
            return DBPageRowDomStates;
        }(domCore.DomStates));
        DBPageRowDom.DBPageRowDomStates = DBPageRowDomStates;
        var DBPageRowDomProps = (function (_super) {
            __extends(DBPageRowDomProps, _super);
            function DBPageRowDomProps() {
                _super.apply(this, arguments);
            }
            return DBPageRowDomProps;
        }(domCore.DomProps));
        DBPageRowDom.DBPageRowDomProps = DBPageRowDomProps;
    })(DBPageRowDom = exports.DBPageRowDom || (exports.DBPageRowDom = {}));
});
