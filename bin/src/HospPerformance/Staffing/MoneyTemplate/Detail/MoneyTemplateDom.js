var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../02col/01single/Text"], function (require, exports, domFile, React, TextFile) {
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
                return React.createElement("div", null, this._initContent());
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
                return React.createElement("div", null, React.createElement("div", {className: "YSm-table-btngroup"}, React.createElement("b", null, "包含人员")), React.createElement("div", null, this.props.Vm.SelectedUserList.map(function (a) {
                    return React.createElement("span", null, a.DisplayName, React.createElement("span", null, "    "));
                })));
            };
            //public NewOpt(vals: string) {
            //    this.props.Vm.openModal();
            //}
            MoneyTemplateDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MoneyTemplateDomReact;
        }(domCore.DomReact));
        MoneyTemplateDom.MoneyTemplateDomReact = MoneyTemplateDomReact;
        var MoneyTemplateDomVm = (function (_super) {
            __extends(MoneyTemplateDomVm, _super);
            //public openModal() {
            //    this.ModalObj.open();
            //}
            function MoneyTemplateDomVm(config) {
                _super.call(this);
                this.ReactType = MoneyTemplateDomReact;
                this.TextObj = new TextFile.ui.TextVm;
                this.SelectedUserList = [];
                if (config) {
                    this.UniId = config.UniId;
                    if (config.SelectedUserList) {
                        // this.SelectedUserList = config.SelectedUserList;
                        //var valueList = [];
                        //this.SelectedUserList.forEach(a => {
                        //    valueList.push("'" + a.UserId + "'");
                        //});
                        this.SelectedUserList = config.SelectedUserList;
                    }
                }
                //var UsersIds = "";
                ////弹出
                //this.SelectorDom = new NewAppraisalObjectPageFile.AppraisalTemplateUserSelectorDom.AppraisalTemplateUserSelectorDomVm({ UserSelectorData: config ? config.UserSelectorData : {}, UniId: this.UniId, SelectedValue: this.SelectedValue });
                //var modal: modalFile.ModalDom.IModalDomConfig = {
                //    Title: "添加人员",
                //    ModalShowingFun: (a, callback) => {
                //        a.DomObj = this.SelectorDom;
                //        callback();
                //    },
                //    ModalCloseFun: (a) => {
                //        a.DomObj = null;
                //    }
                //};
                //this.ModalObj = new modalFile.ModalDom.ModalDomVm(modal);
                //this.listenAppEvent("AppraisalTemplateUserSelectorSave", this.UniId, () => {
                //    var selectedValue = this.SelectorDom.UserListboxObj.dataValueGet();
                //    this.ModalObj.close();
                //    urlFile.Core.AkPost("/HospPerformance/UserSelector/FetchSelectedUsers", { userIds: selectedValue }, (data) => {
                //        var _data = data.Data;                    
                //        if (_data) {
                //            this.SelectedUserList = _data;
                //            if (_data.length > 0)
                //                this.ActionToMoneySetting(_data);
                //            this.forceUpdate("");
                //        }
                //    });
                //});
            }
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
