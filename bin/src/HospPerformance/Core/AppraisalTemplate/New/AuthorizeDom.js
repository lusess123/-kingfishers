var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Url", "react", "./../../../../05tool/Modal/ModalDom", "./AppraisalTemplateAuthUserSelectorDom"], function (require, exports, domFile, urlFile, React, modalFile, userSelectorFile) {
    "use strict";
    var domCore = domFile.Core;
    var AuthorizeObjectDom;
    (function (AuthorizeObjectDom) {
        var AuthorizeObjectDomAction = (function (_super) {
            __extends(AuthorizeObjectDomAction, _super);
            function AuthorizeObjectDomAction() {
                _super.apply(this, arguments);
            }
            return AuthorizeObjectDomAction;
        }(domCore.DomAction));
        AuthorizeObjectDom.AuthorizeObjectDomAction = AuthorizeObjectDomAction;
        var AuthorizeObjectDomReact = (function (_super) {
            __extends(AuthorizeObjectDomReact, _super);
            function AuthorizeObjectDomReact() {
                _super.apply(this, arguments);
                this.state = new AuthorizeObjectDomStates();
            }
            AuthorizeObjectDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this._initContent(), this.props.Vm.ModalObj.intoDom());
            };
            AuthorizeObjectDomReact.prototype._initContent = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "YSm-table-btngroup"}, React.createElement("b", null, "授权对象"), React.createElement("a", {className: "btn btn-sm btn-primary pull-right", onClick: function () { _this.newOpt("new"); }}, "添加")), React.createElement("div", {className: "p-a YSu-default-border"}, this.props.Vm.SelectedUserList.map(function (a) {
                    return React.createElement("span", {className: "YSu-checked"}, a.DisplayName, React.createElement("i", {className: "fa fa-remove", onClick: function () { _this.deleteItem(a.UserId); }}), React.createElement("span", null, "    "));
                })));
            };
            AuthorizeObjectDomReact.prototype.deleteItem = function (id) {
                this.props.Vm.SelectedUserList = this.props.Vm.SelectedUserList.filter(function (row) {
                    return row.UserId != id;
                });
                this.forceUpdate();
            };
            AuthorizeObjectDomReact.prototype.newOpt = function (vals) {
                this.props.Vm.openModal();
            };
            AuthorizeObjectDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AuthorizeObjectDomReact;
        }(domCore.DomReact));
        AuthorizeObjectDom.AuthorizeObjectDomReact = AuthorizeObjectDomReact;
        var AuthorizeObjectDomVm = (function (_super) {
            __extends(AuthorizeObjectDomVm, _super);
            function AuthorizeObjectDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = AuthorizeObjectDomReact;
                this.ColVmObjList = {};
                this.SelectedUserList = [];
                var selectorDomObjConfig = {};
                if (config) {
                    this.UniId = config.UniId;
                    selectorDomObjConfig = { UserSelectorData: config.UserSelectorData, UniId: this.UniId };
                }
                this.SelectorDom = new userSelectorFile.AppraisalTemplateAuthUserSelectorDom.AppraisalTemplateAuthUserSelectorDomVm(selectorDomObjConfig);
                this.init(config);
                var mconfig = {
                    Title: "选择人员",
                    ModalShowingFun: function (a, callback) {
                        a.DomObj = _this.SelectorDom;
                        callback();
                    },
                    ModalCloseFun: function (a) {
                        a.DomObj = null;
                    },
                    Width: "65%"
                };
                this.ModalObj = new modalFile.ModalDom.ModalDomVm(mconfig);
                this.listenAppEvent("AppraisalTemplateAuthUserSelectorSave", this.UniId, function () {
                    var selectedValue = _this.SelectorDom.UserListboxObj.dataValueGet();
                    _this.ModalObj.close();
                    urlFile.Core.AkPost("/HospPerformance/UserSelector/FetchSelectedUsers", { userIds: selectedValue }, function (data) {
                        var _data = data.Data;
                        if (_data) {
                            _this.SelectedUserList = _data;
                            _this.forceUpdate("");
                        }
                    });
                });
            }
            AuthorizeObjectDomVm.prototype.init = function (config) {
                if (config.SelectedUserList) {
                    this.SelectedUserList = config.SelectedUserList;
                    var valueList = [];
                    this.SelectedUserList.forEach(function (a) {
                        valueList.push("'" + a.UserId + "'");
                    });
                    this.SelectedValue = valueList.join(",");
                }
                this.SelectorDom.initListBox({ SelectedValue: this.SelectedValue });
            };
            AuthorizeObjectDomVm.prototype.openModal = function () {
                this.ModalObj.open();
            };
            AuthorizeObjectDomVm.prototype.getData = function () {
                var idList = [];
                this.SelectedUserList.forEach(function (a) {
                    idList.push(a.UserId);
                });
                return idList;
            };
            return AuthorizeObjectDomVm;
        }(domCore.DomVm));
        AuthorizeObjectDom.AuthorizeObjectDomVm = AuthorizeObjectDomVm;
        var AuthorizeObjectDomStates = (function (_super) {
            __extends(AuthorizeObjectDomStates, _super);
            function AuthorizeObjectDomStates() {
                _super.apply(this, arguments);
            }
            return AuthorizeObjectDomStates;
        }(domCore.DomStates));
        AuthorizeObjectDom.AuthorizeObjectDomStates = AuthorizeObjectDomStates;
        var AuthorizeObjectDomProps = (function (_super) {
            __extends(AuthorizeObjectDomProps, _super);
            function AuthorizeObjectDomProps() {
                _super.apply(this, arguments);
            }
            return AuthorizeObjectDomProps;
        }(domCore.DomProps));
        AuthorizeObjectDom.AuthorizeObjectDomProps = AuthorizeObjectDomProps;
    })(AuthorizeObjectDom = exports.AuthorizeObjectDom || (exports.AuthorizeObjectDom = {}));
});
