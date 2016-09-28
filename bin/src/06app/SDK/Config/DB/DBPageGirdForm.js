var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Util", "./../../../../01core/Url", "react", "./../../../../05tool/EditSpan", "./DBPageRowDom"], function (require, exports, domFile, utilFile, urlFile, React, EditSpanFile, row) {
    "use strict";
    var domCore = domFile.Core;
    var ESpan = EditSpanFile.EditSpan.EditSpanReact;
    var ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
    var DBPageGirdForm;
    (function (DBPageGirdForm) {
        var DBPageGirdFormAction = (function (_super) {
            __extends(DBPageGirdFormAction, _super);
            function DBPageGirdFormAction() {
                _super.apply(this, arguments);
            }
            return DBPageGirdFormAction;
        }(domCore.DomAction));
        DBPageGirdForm.DBPageGirdFormAction = DBPageGirdFormAction;
        var DBPageGirdFormReact = (function (_super) {
            __extends(DBPageGirdFormReact, _super);
            function DBPageGirdFormReact() {
                _super.apply(this, arguments);
                this.state = new DBPageGirdFormStates();
            }
            DBPageGirdFormReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("table", {className: "table table-hover"}, this._initThead(), this._initTbody()), this.initSubmit());
            };
            DBPageGirdFormReact.prototype._initThead = function () {
                var _this = this;
                return React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "名称" })})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "数据库连接字符串" })})), React.createElement("th", null, React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_addRow(); }}))));
            };
            DBPageGirdFormReact.prototype._initTbody = function () {
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (a) {
                    return a.intoDom();
                }));
            };
            DBPageGirdFormReact.prototype.initSubmit = function () {
                var _this = this;
                return React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-primary btn-sm", onClick: function () { _this.props.Vm.submitClick(); }}, "保存"));
            };
            DBPageGirdFormReact.prototype.fun_addRow = function () {
                this.props.Vm.fun_addRow();
            };
            DBPageGirdFormReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DBPageGirdFormReact;
        }(domCore.DomReact));
        DBPageGirdForm.DBPageGirdFormReact = DBPageGirdFormReact;
        var DBPageGirdFormVm = (function (_super) {
            __extends(DBPageGirdFormVm, _super);
            function DBPageGirdFormVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DBPageGirdFormReact;
                this.Data = [];
                this.RowList = [];
                this.Items = [];
                if (config.Unid) {
                    this.UniId = config.Unid;
                }
                if (config.Data) {
                    this.Data = config.Data;
                    this.Data.forEach(function (a, number) {
                        _this.init(a, number);
                    });
                }
                this.listenAppEvent("app/SDK/Config/DB/RowDelete", this.UniId, function (text) {
                    if (confirm("确定要删除吗？")) {
                        _this.Data.forEach(function (a, number) {
                            if (a.Name == text) {
                                _this.Data.splice(number, 1);
                            }
                        });
                        _this.RowList.forEach(function (a, number) {
                            if (a.Data.Name == text) {
                                _this.RowList.splice(number, 1);
                            }
                        });
                        _this.IsMulit = true;
                        _this.RowList.forEach(function (a) { a.IsChange = true; });
                        _this.forceUpdate("");
                    }
                });
            }
            DBPageGirdFormVm.prototype.init = function (a, number) {
                var b = a.ConnectionString.trim();
                var array = b.split(';');
                //把分割好的字符串进行二次分割并合并成数组
                for (var i = 0; i < 4; i++) {
                    var arrayItem = array[i].split('=');
                    var model;
                    if (arrayItem[0] == "Data Source") {
                        model = { DataSource: arrayItem[1] };
                    }
                    if (arrayItem[0] == "Initial Catalog") {
                        model = { InitialCatalog: arrayItem[1] };
                    }
                    if (arrayItem[0] == "User ID") {
                        model = { UserID: arrayItem[1] };
                    }
                    if (arrayItem[0] == "Pwd") {
                        model = { PassWord: arrayItem[1] };
                    }
                    this.Items.push(model);
                }
                var rowConfig = { Data: a, Item: this.Items, Number: number, Unid: this.UniId };
                this.Row = new row.DBPageRowDom.DBPageRowDomVm(rowConfig);
                this.RowList.push(this.Row);
            };
            DBPageGirdFormVm.prototype.submitClick = function () {
                var _this = this;
                var ListSubmitData = [];
                this.Data.forEach(function (a, number) {
                    var connstr = _this.getConnectionString(number);
                    var submitData = {
                        Name: a.Name, IsDefault: a.IsDefault, ConnectionString: connstr
                    };
                    ListSubmitData.push(submitData);
                });
                var isdefault = [];
                ListSubmitData.forEach(function (a) {
                    if (a.IsDefault == true) {
                        isdefault.push(a.IsDefault);
                    }
                });
                var Submit = {};
                if (isdefault.length == 1) {
                    urlFile.Core.AkPost("/Dev/DB/SaveDBXml", { submit: JSON.stringify(ListSubmitData) }, function (a) {
                        if (a) {
                            utilFile.Core.Util.ToggleLoading(true);
                            urlFile.Core.AkUrl.Current().refresh();
                            alert("保存成功！");
                        }
                    });
                }
                else {
                    alert("只能选择一个默认连接！");
                }
            };
            DBPageGirdFormVm.prototype.getConnectionString = function (number) {
                var connstr = "";
                var b = this.Items;
                connstr = "Data Source=" + this.Items[number * 4].DataSource + ";" + "Initial Catalog=" + this.Items[number * 4 + 1].InitialCatalog + ";" + "User ID=" + this.Items[number * 4 + 2].UserID + ";" + "Pwd=" + this.Items[number * 4 + 3].PassWord + ";";
                return connstr;
            };
            DBPageGirdFormVm.prototype.fun_addRow = function () {
                var a = "请输入...";
                var b = "Data Source=请输入...;Initial Catalog=请输入...;User ID=请输入...;Pwd=请输入...;";
                var c = false;
                var empreydata = {
                    Name: a, IsDefault: c, ConnectionString: b, RegName: a
                };
                this.Data.push(empreydata);
                this.init(empreydata, this.Data.length - 1);
                this.IsMulit = true;
                this.forceUpdate("");
            };
            return DBPageGirdFormVm;
        }(domCore.DomVm));
        DBPageGirdForm.DBPageGirdFormVm = DBPageGirdFormVm;
        var DBPageGirdFormStates = (function (_super) {
            __extends(DBPageGirdFormStates, _super);
            function DBPageGirdFormStates() {
                _super.apply(this, arguments);
            }
            return DBPageGirdFormStates;
        }(domCore.DomStates));
        DBPageGirdForm.DBPageGirdFormStates = DBPageGirdFormStates;
        var DBPageGirdFormProps = (function (_super) {
            __extends(DBPageGirdFormProps, _super);
            function DBPageGirdFormProps() {
                _super.apply(this, arguments);
            }
            return DBPageGirdFormProps;
        }(domCore.DomProps));
        DBPageGirdForm.DBPageGirdFormProps = DBPageGirdFormProps;
    })(DBPageGirdForm = exports.DBPageGirdForm || (exports.DBPageGirdForm = {}));
});
