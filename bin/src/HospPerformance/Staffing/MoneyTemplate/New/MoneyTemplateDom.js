var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Url", "react", "./../../../../02col/01single/Text", "./../../../../05tool/Modal/ModalDom", "./../../../Core/AppraisalTemplate/New/AppraisalTemplateUserSelectorDom"], function (require, exports, domFile, urlFile, React, TextFile, modalFile, NewAppraisalObjectPageFile) {
    "use strict";
    var domCore = domFile.Core;
    var MoneyTemplateDom;
    (function (MoneyTemplateDom) {
        var MoneyTemplateDomAction = (function (_super) {
            __extends(MoneyTemplateDomAction, _super);
            function MoneyTemplateDomAction() {
                _super.apply(this, arguments);
            }
            return MoneyTemplateDomAction;
        }(domCore.DomAction));
        MoneyTemplateDom.MoneyTemplateDomAction = MoneyTemplateDomAction;
        var MoneyTemplateDomReact = (function (_super) {
            __extends(MoneyTemplateDomReact, _super);
            function MoneyTemplateDomReact() {
                _super.apply(this, arguments);
                this.state = new MoneyTemplateDomStates();
            }
            MoneyTemplateDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this._initContent(), this.props.Vm.ModalObj.intoDom());
            };
            //public _initForm(): React.ReactElement<any> {
            //    return <form className="clearfix">
            //        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
            //            <label className="col-md-5 col-sm-3 form-control-label text-right">模板名称：</label>
            //            <div className="col-md-7 col-sm-9">{this.props.Vm.TextObj.intoDom() }</div>
            //        </div>
            //    </form>;
            //}
            MoneyTemplateDomReact.prototype._initContent = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "YSm-table-btngroup"}, React.createElement("b", null, "包含人员"), React.createElement("a", {className: "btn btn-sm btn-primary pull-right", onClick: function () { _this.NewOpt("new"); }}, "添加人员")), React.createElement("div", null, this.props.Vm.SelectedUserList.map(function (a) {
                    return React.createElement("span", null, a.DisplayName, React.createElement("i", {className: "fa fa-remove", onClick: function () { _this.DeleteItem(a.UserId); }}), React.createElement("span", null, "    "));
                })));
            };
            MoneyTemplateDomReact.prototype.DeleteItem = function (userId) {
                this.props.Vm.SelectedUserList = this.props.Vm.SelectedUserList.filter(function (row) {
                    return row.UserId != userId;
                });
                this.forceUpdate();
                this.props.Vm.ActionToMoneySetting(this.props.Vm.SelectedUserList);
            };
            MoneyTemplateDomReact.prototype.NewOpt = function (vals) {
                this.props.Vm.openModal();
            };
            MoneyTemplateDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MoneyTemplateDomReact;
        }(domCore.DomReact));
        MoneyTemplateDom.MoneyTemplateDomReact = MoneyTemplateDomReact;
        var MoneyTemplateDomVm = (function (_super) {
            __extends(MoneyTemplateDomVm, _super);
            function MoneyTemplateDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = MoneyTemplateDomReact;
                this.TextObj = new TextFile.ui.TextVm;
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
                }
                var UsersIds = "";
                //弹出
                this.SelectorDom = new NewAppraisalObjectPageFile.AppraisalTemplateUserSelectorDom.AppraisalTemplateUserSelectorDomVm({ UserSelectorData: config ? config.UserSelectorData : {}, UniId: this.UniId, SelectedValue: this.SelectedValue });
                var modal = {
                    Title: "添加人员",
                    ModalShowingFun: function (a, callback) {
                        a.DomObj = _this.SelectorDom;
                        callback();
                    },
                    ModalCloseFun: function (a) {
                        a.DomObj = null;
                    }
                };
                this.ModalObj = new modalFile.ModalDom.ModalDomVm(modal);
                this.listenAppEvent("AppraisalTemplateUserSelectorSave", this.UniId, function () {
                    var selectedValue = _this.SelectorDom.UserListboxObj.dataValueGet();
                    _this.ModalObj.close();
                    urlFile.Core.AkPost("/HospPerformance/UserSelector/FetchSelectedUsers", { userIds: selectedValue }, function (data) {
                        var _data = data.Data;
                        if (_data) {
                            _this.SelectedUserList = _data;
                            if (_data.length > 0)
                                _this.ActionToMoneySetting(_this.SelectedUserList);
                            _this.forceUpdate("");
                        }
                    });
                });
            }
            MoneyTemplateDomVm.prototype.openModal = function () {
                this.ModalObj.open();
            };
            MoneyTemplateDomVm.prototype.ActionToMoneySetting = function (_data) {
                this.emitAppEvent("UsersListToMoneySetting", this.UniId, _data);
            };
            return MoneyTemplateDomVm;
        }(domCore.DomVm));
        MoneyTemplateDom.MoneyTemplateDomVm = MoneyTemplateDomVm;
        var MoneyTemplateDomStates = (function (_super) {
            __extends(MoneyTemplateDomStates, _super);
            function MoneyTemplateDomStates() {
                _super.apply(this, arguments);
            }
            return MoneyTemplateDomStates;
        }(domCore.DomStates));
        MoneyTemplateDom.MoneyTemplateDomStates = MoneyTemplateDomStates;
        var MoneyTemplateDomProps = (function (_super) {
            __extends(MoneyTemplateDomProps, _super);
            function MoneyTemplateDomProps() {
                _super.apply(this, arguments);
            }
            return MoneyTemplateDomProps;
        }(domCore.DomProps));
        MoneyTemplateDom.MoneyTemplateDomProps = MoneyTemplateDomProps;
    })(MoneyTemplateDom = exports.MoneyTemplateDom || (exports.MoneyTemplateDom = {}));
});
