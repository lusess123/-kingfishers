var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../03form/Base/BasePage", "./../../04page/ListPage", "./../../01core/Url", "react"], function (require, exports, basecolFile, basePage, listPage, urlFile, React) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var FormSelectorAction = (function (_super) {
            __extends(FormSelectorAction, _super);
            function FormSelectorAction() {
                _super.apply(this, arguments);
            }
            return FormSelectorAction;
        }(BaseColAction));
        ui.FormSelectorAction = FormSelectorAction;
        var FormSelectorReact = (function (_super) {
            __extends(FormSelectorReact, _super);
            function FormSelectorReact() {
                _super.apply(this, arguments);
                this._thisReact = this;
            }
            FormSelectorReact.prototype.pSender = function () {
                //this.props.Vm._content = new listPage.ui.ListPageVm;
                //ListPage 的
                var _this = this;
                return React.createElement("div", {className: "clearfix"}, React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 input-group Hm-input-group ACT-M-PARENT"}, React.createElement("input", {className: "form-control", value: this.props.Vm.Text, disabled: true}), React.createElement("span", {onClick: function (a) { _this.onButtonClick(); return false; }, className: "input-group-addon Hu-pointer"}, React.createElement("i", {className: "fa fa-external-link-square"}))), React.createElement("div", {className: " col-lg-12 col-md-12 col-sm-12 col-xs-12 " + (this.state.IsModalShow ? "Hm-modals-bg Hg-width Hg-max-width Hg-overflow-auto Hc-control-modal clearfix " : " "), style: { top: this.state.ModalTop.toString() + 'px' }}, this.props.Vm.Content ? this.props.Vm.Content.intoDom() : "正在加载中。。。。"));
            };
            FormSelectorReact.prototype.onButtonClick = function () {
                var _this = this;
                var thisFormSelector = this;
                urlFile.Core.AkPost("/core/Selector/LoadPage", {
                    ds: this.props.Vm.getPostDsStr, RegName: this.props.Vm.RegName, pageStyle: "List", xml: this.props.Vm.ModuleXml
                }, function (a) {
                    _this.props.Vm.PageView = a;
                    if (_this.props.Vm.PageView) {
                        _this.props.Vm.Content.create(_this.props.Vm.PageView);
                        _this.props.Vm.Content.SaveEvent = function () {
                            _this.SaveButtonClick();
                        };
                        _this.props.Vm.Content.SingleSelectEvent = function () {
                            //将React的值传进去
                            _this.SingleSelectClick(thisFormSelector);
                        };
                    }
                    _this.props.Vm.Content.IsChange = true;
                    _this.props.Vm.IsChange = true;
                    _this.forceUpdate();
                });
                this.setState(function (s, p) {
                    _this.props.Vm.IsChange = true;
                    s.IsModalShow = true;
                    var st = $(document).scrollTop(); //滚动条距顶部的距离    
                    var ch = $(window).height(); //屏幕的高度   
                    var objT = Number(st);
                    s.ModalTop = (Number(ch)) * 0.05;
                    return s;
                });
            };
            //多选时点击的按钮时候的事件
            FormSelectorReact.prototype.SaveButtonClick = function () {
                var _this = this;
                this.setState(function (s, p) {
                    _this.props.Vm.IsChange = true;
                    s.IsModalShow = false;
                    p.Vm.dataValueSet(p.Vm.Content.getSelectKeysByListForm().toString());
                    p.Vm.Text = p.Vm.Content.getSelectKeysByListForm().toString();
                    return s;
                });
            };
            FormSelectorReact.prototype.SingleSelectClick = function (e) {
                var _this = this;
                alert("单选");
                e.setState(function (s, p) {
                    _this.props.Vm.IsChange = true;
                    s.IsModalShow = false;
                    p.Vm.dataValueSet("默认值");
                    //只要将配置文件的中的列名去到就可以
                    p.Vm.Text = "默认值";
                    return s;
                });
            };
            FormSelectorReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return FormSelectorReact;
        }(BaseColReact));
        ui.FormSelectorReact = FormSelectorReact;
        var FormSelectorState = (function (_super) {
            __extends(FormSelectorState, _super);
            function FormSelectorState() {
                _super.apply(this, arguments);
                this.IsModalShow = false;
                this.ModalTop = 0;
                this.PageVm = new basePage.ui.BasePageVm;
            }
            return FormSelectorState;
        }(BaseColStates));
        ui.FormSelectorState = FormSelectorState;
        var FormSelectorProps = (function (_super) {
            __extends(FormSelectorProps, _super);
            function FormSelectorProps() {
                _super.apply(this, arguments);
            }
            return FormSelectorProps;
        }(BaseColProps));
        ui.FormSelectorProps = FormSelectorProps;
        var FormSelectorVm = (function (_super) {
            __extends(FormSelectorVm, _super);
            function FormSelectorVm() {
                _super.apply(this, arguments);
                //是否是选择器
                this.isSelector = true;
                //是否是多选
                this.isSingleSelect = false;
                //选中的值
                this.Text = "";
                this.getPostDsStr = "";
                //页面请求之后返回的数据
                this.PageView = null;
                this.Content = new listPage.ui.ListPageVm;
            }
            return FormSelectorVm;
        }(BaseColVm));
        ui.FormSelectorVm = FormSelectorVm;
    })(ui = exports.ui || (exports.ui = {}));
});
