var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./AppSettingRowDom"], function (require, exports, domFile, React, row) {
    "use strict";
    var domCore = domFile.Core;
    var AppSettingGridFrom;
    (function (AppSettingGridFrom) {
        var AppSettingGridFromAction = (function (_super) {
            __extends(AppSettingGridFromAction, _super);
            function AppSettingGridFromAction() {
                _super.apply(this, arguments);
            }
            return AppSettingGridFromAction;
        }(domCore.DomAction));
        AppSettingGridFrom.AppSettingGridFromAction = AppSettingGridFromAction;
        var AppSettingGridFromReact = (function (_super) {
            __extends(AppSettingGridFromReact, _super);
            function AppSettingGridFromReact() {
                _super.apply(this, arguments);
                this.state = new AppSettingGridFromStates();
            }
            AppSettingGridFromReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "col-lg-12 col-md-12  p-a"}, React.createElement("table", {className: "table  table-hover"}, this._initDBThead(), this._initDBTbody()), React.createElement("div", {className: "text-left"}, React.createElement("a", {className: "btn btn-sm", onClick: function () { _this.props.Vm.AddAppSetting(); }}, React.createElement("i", {className: "fa fa-plus"}), "添加")));
            };
            AppSettingGridFromReact.prototype._initDBThead = function () {
                return React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null), React.createElement("th", null, React.createElement("span", null, "Key")), React.createElement("th", null, React.createElement("span", null, "Vaule")), React.createElement("th", null, React.createElement("span", null, "NeedPares")), React.createElement("th", null, React.createElement("span", null, " 编辑"))));
            };
            AppSettingGridFromReact.prototype._initDBTbody = function () {
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (a) {
                    return a.intoDom();
                }));
            };
            AppSettingGridFromReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AppSettingGridFromReact;
        }(domCore.DomReact));
        AppSettingGridFrom.AppSettingGridFromReact = AppSettingGridFromReact;
        var AppSettingGridFromVm = (function (_super) {
            __extends(AppSettingGridFromVm, _super);
            function AppSettingGridFromVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = AppSettingGridFromReact;
                this.Data = [];
                this.RowList = [];
                if (config.Unid) {
                    this.UniId = config.Unid;
                }
                if (config.Data) {
                    this.Data = config.Data;
                    this.Data.forEach(function (a, number) {
                        var config = { Data: a, Number: number + 1, Unid: _this.UniId };
                        _this.Row = new row.AppSettingRowDom.AppSettingRowDomVm(config);
                        _this.RowList.push(_this.Row);
                    });
                }
                this.listenAppEvent("app/SDK/Config/Application/RowDelete", this.UniId, function (Text) {
                    if (confirm("确定要删除？")) {
                        _this.Data.forEach(function (a, number) {
                            if (a.Key == Text) {
                                _this.Data.splice(number, 1);
                            }
                        });
                        _this.RowList.forEach(function (a, number) {
                            if (a.Data.Key == Text) {
                                _this.RowList.splice(number, 1);
                            }
                        });
                        _this.IsMulit = true;
                        _this.RowList.forEach(function (a) { a.IsChange = true; });
                        _this.forceUpdate("");
                    }
                });
            }
            AppSettingGridFromVm.prototype.submitClick = function () {
                var ListSubmitData = [];
                this.Data.forEach(function (a, number) {
                    var submitData = {
                        Text: a.Key, Value: a.Value, NeedPares: a.NeedParse
                    };
                    ListSubmitData.push(submitData);
                });
                return ListSubmitData;
            };
            AppSettingGridFromVm.prototype.AddAppSetting = function () {
                var data = { Key: "empty" + this.Data.length, NeedParse: "true", RegName: "empty" + this.Data.length, Value: "empty" + this.Data.length };
                this.Data.push(data);
                var config = { Data: data, Number: this.Data.length, Unid: this.UniId };
                this.Row = new row.AppSettingRowDom.AppSettingRowDomVm(config);
                this.RowList.push(this.Row);
                this.IsMulit = true;
                this.RowList.forEach(function (a) { a.IsChange = true; });
                this.forceUpdate("");
            };
            return AppSettingGridFromVm;
        }(domCore.DomVm));
        AppSettingGridFrom.AppSettingGridFromVm = AppSettingGridFromVm;
        var AppSettingGridFromStates = (function (_super) {
            __extends(AppSettingGridFromStates, _super);
            function AppSettingGridFromStates() {
                _super.apply(this, arguments);
            }
            return AppSettingGridFromStates;
        }(domCore.DomStates));
        AppSettingGridFrom.AppSettingGridFromStates = AppSettingGridFromStates;
        var AppSettingGridFromProps = (function (_super) {
            __extends(AppSettingGridFromProps, _super);
            function AppSettingGridFromProps() {
                _super.apply(this, arguments);
            }
            return AppSettingGridFromProps;
        }(domCore.DomProps));
        AppSettingGridFrom.AppSettingGridFromProps = AppSettingGridFromProps;
    })(AppSettingGridFrom = exports.AppSettingGridFrom || (exports.AppSettingGridFrom = {}));
});
