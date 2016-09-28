var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../05tool/EditSpan"], function (require, exports, domFile, React, EditSpanFile) {
    "use strict";
    var domCore = domFile.Core;
    var ServerListDom;
    (function (ServerListDom) {
        var ServerListDomAction = (function (_super) {
            __extends(ServerListDomAction, _super);
            function ServerListDomAction() {
                _super.apply(this, arguments);
            }
            return ServerListDomAction;
        }(domCore.DomAction));
        ServerListDom.ServerListDomAction = ServerListDomAction;
        var ServerListDomReact = (function (_super) {
            __extends(ServerListDomReact, _super);
            function ServerListDomReact() {
                _super.apply(this, arguments);
                this.state = new ServerListDomStates();
            }
            ServerListDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hg-w80 pull-left"}, this.props.Vm.ServerList.map(function (a, number) {
                    return _this.PerSendServer(number, a);
                }), React.createElement("a", {className: "btn btn-sm", onClick: function () { _this.props.Vm.Add(); }}, React.createElement("i", {className: "fa fa-plus"}), "添加服务地址"));
            };
            ServerListDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            ServerListDomReact.prototype.PerSendServer = function (number, Value) {
                var _this = this;
                return React.createElement("div", null, React.createElement("label", {className: "form-control-label text-right"}, "服务地址", number + 1, "："), this.props.Vm.psenderAppSetting(Value, number), React.createElement("i", {className: "fa fa-minus-circle", onClick: function () { _this.props.Vm.delete(Value); }}));
            };
            return ServerListDomReact;
        }(domCore.DomReact));
        ServerListDom.ServerListDomReact = ServerListDomReact;
        var ServerListDomVm = (function (_super) {
            __extends(ServerListDomVm, _super);
            function ServerListDomVm(config) {
                _super.call(this);
                this.ReactType = ServerListDomReact;
                if (config.ServerList) {
                    this.ServerList = config.ServerList;
                }
            }
            ServerListDomVm.prototype.psenderAppSetting = function (Value, number) {
                var _this = this;
                var config = {
                    Content: Value, ChangeEvent: function () {
                        _this.ServerList[number] = _this.EditText.Content;
                    }
                };
                this.EditText = new EditSpanFile.EditSpan.EditSpanVm(config);
                return this.EditText.intoDom();
            };
            ServerListDomVm.prototype.delete = function (Value) {
                var _this = this;
                if (confirm("确定删除？")) {
                    this.ServerList.forEach(function (a, number) {
                        if (a == Value) {
                            _this.ServerList.splice(number, 1);
                        }
                    });
                    this.IsMulit = true;
                    this.forceUpdate("");
                }
            };
            ServerListDomVm.prototype.Add = function () {
                this.ServerList.push("Emptry" + this.ServerList.length);
                this.IsMulit = true;
                this.forceUpdate("");
            };
            ServerListDomVm.prototype.submitClick = function () {
                return this.ServerList;
            };
            return ServerListDomVm;
        }(domCore.DomVm));
        ServerListDom.ServerListDomVm = ServerListDomVm;
        var ServerListDomStates = (function (_super) {
            __extends(ServerListDomStates, _super);
            function ServerListDomStates() {
                _super.apply(this, arguments);
            }
            return ServerListDomStates;
        }(domCore.DomStates));
        ServerListDom.ServerListDomStates = ServerListDomStates;
        var ServerListDomProps = (function (_super) {
            __extends(ServerListDomProps, _super);
            function ServerListDomProps() {
                _super.apply(this, arguments);
            }
            return ServerListDomProps;
        }(domCore.DomProps));
        ServerListDom.ServerListDomProps = ServerListDomProps;
    })(ServerListDom = exports.ServerListDom || (exports.ServerListDom = {}));
});
