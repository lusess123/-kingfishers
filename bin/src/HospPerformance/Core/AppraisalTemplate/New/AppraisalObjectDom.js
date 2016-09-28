var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Url", "react", "./../../../../05tool/Modal/ModalDom", "./AppraisalTemplateUserSelectorDom", "./../../../../02col/01single/DetailArea"], function (require, exports, domFile, urlFile, React, modalFile, userSelectorFile, textAreaFile) {
    "use strict";
    var domCore = domFile.Core;
    var AppraisalObjectDom;
    (function (AppraisalObjectDom) {
        var AppraisalObjectDomAction = (function (_super) {
            __extends(AppraisalObjectDomAction, _super);
            function AppraisalObjectDomAction() {
                _super.apply(this, arguments);
            }
            return AppraisalObjectDomAction;
        }(domCore.DomAction));
        AppraisalObjectDom.AppraisalObjectDomAction = AppraisalObjectDomAction;
        var AppraisalObjectDomReact = (function (_super) {
            __extends(AppraisalObjectDomReact, _super);
            function AppraisalObjectDomReact() {
                _super.apply(this, arguments);
                this.state = new AppraisalObjectDomStates();
            }
            AppraisalObjectDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this._initContent(), this.props.Vm.ModalObj.intoDom());
            };
            AppraisalObjectDomReact.prototype._initContent = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "YSm-table-btngroup"}, React.createElement("b", null, "考核对象"), React.createElement("a", {className: "btn btn-sm btn-primary pull-right", onClick: function () { _this.newOpt("new"); }}, "添加")), React.createElement("div", {className: "p-a YSu-default-border"}, this.props.Vm.SelectedUserList.map(function (a) {
                    return React.createElement("span", {className: "YSu-checked"}, a.DisplayName, React.createElement("i", {className: "fa fa-remove", onClick: function () { _this.deleteItem(a.UserId); }}), React.createElement("span", null, "    "));
                })));
            };
            AppraisalObjectDomReact.prototype.newOpt = function (vals) {
                this.props.Vm.openModal();
            };
            AppraisalObjectDomReact.prototype.deleteItem = function (id) {
                this.props.Vm.SelectedUserList = this.props.Vm.SelectedUserList.filter(function (row) {
                    return row.UserId != id;
                });
                this.forceUpdate();
            };
            AppraisalObjectDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AppraisalObjectDomReact;
        }(domCore.DomReact));
        AppraisalObjectDom.AppraisalObjectDomReact = AppraisalObjectDomReact;
        var AppraisalObjectDomVm = (function (_super) {
            __extends(AppraisalObjectDomVm, _super);
            function AppraisalObjectDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = AppraisalObjectDomReact;
                this.ColVmObjList = {};
                this.RowData = {};
                this.SelectedUserList = [];
                if (config) {
                    this.UniId = config.UniId;
                    if (config.SelectedUserList) {
                        this.SelectedUserList = config.SelectedUserList;
                        var valueList = [];
                        this.SelectedUserList.forEach(function (a) {
                            valueList.push("'" + a.UserId + "'");
                        });
                        this.SelectedValue = valueList.join(",");
                    }
                    this.UserSelectorData = config.UserSelectorData;
                }
                this.SelectorDom = new userSelectorFile.AppraisalTemplateUserSelectorDom.AppraisalTemplateUserSelectorDomVm({ UserSelectorData: config ? config.UserSelectorData : {}, UniId: this.UniId, SelectedValue: this.SelectedValue });
                this.SelectedTextArea = new textAreaFile.ui.DetailAreaVm();
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
                this.listenAppEvent("AppraisalTemplateUserSelectorSave", this.UniId, function () {
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
            AppraisalObjectDomVm.prototype.openModal = function () {
                this.ModalObj.open();
            };
            AppraisalObjectDomVm.prototype.getData = function () {
                var idList = [];
                this.SelectedUserList.forEach(function (a) {
                    idList.push(a.UserId);
                });
                return idList;
            };
            return AppraisalObjectDomVm;
        }(domCore.DomVm));
        AppraisalObjectDom.AppraisalObjectDomVm = AppraisalObjectDomVm;
        var AppraisalObjectDomStates = (function (_super) {
            __extends(AppraisalObjectDomStates, _super);
            function AppraisalObjectDomStates() {
                _super.apply(this, arguments);
            }
            return AppraisalObjectDomStates;
        }(domCore.DomStates));
        AppraisalObjectDom.AppraisalObjectDomStates = AppraisalObjectDomStates;
        var AppraisalObjectDomProps = (function (_super) {
            __extends(AppraisalObjectDomProps, _super);
            function AppraisalObjectDomProps() {
                _super.apply(this, arguments);
            }
            return AppraisalObjectDomProps;
        }(domCore.DomProps));
        AppraisalObjectDom.AppraisalObjectDomProps = AppraisalObjectDomProps;
    })(AppraisalObjectDom = exports.AppraisalObjectDom || (exports.AppraisalObjectDom = {}));
});
