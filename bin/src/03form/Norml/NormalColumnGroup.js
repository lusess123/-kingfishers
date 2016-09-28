var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../03form/Base/BaseColumnGroup", "react"], function (require, exports, iocFile, baseColumnGroup, React) {
    "use strict";
    var ui;
    (function (ui) {
        var NormalRowGroupAction = (function (_super) {
            __extends(NormalRowGroupAction, _super);
            function NormalRowGroupAction() {
                _super.apply(this, arguments);
            }
            return NormalRowGroupAction;
        }(baseColumnGroup.ui.BaseColumnGroupAction));
        ui.NormalRowGroupAction = NormalRowGroupAction;
        var NormalRowGroupReact = (function (_super) {
            __extends(NormalRowGroupReact, _super);
            function NormalRowGroupReact() {
                _super.apply(this, arguments);
                this.state = new NormalRowGroupStates();
            }
            NormalRowGroupReact.prototype.fun_itemTitleClick = function () {
                this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
                this.forceUpdate();
            };
            NormalRowGroupReact.prototype.initTitle = function () {
                var _this = this;
                return this.props.Vm.IsSingleRow ? null : (React.createElement("span", {className: "pull-right collapsed Hu-pointer", onClick: function () { _this.fun_itemTitleClick(); }}, React.createElement("i", {className: "icon-caret-" + (this.props.Vm.IsItemFormHide ? "right " : "down ") + "fa fa-caret-" + (this.props.Vm.IsItemFormHide ? "right" : "down")})));
            };
            NormalRowGroupReact.prototype.pSender = function () {
                //return <div>
                //            <h3>{this.props.Vm.title}</h3>
                //           {this.props.Vm.ControlList.map((a, i) => {
                //               var control: domFile.Core.BaseColVm = iocFile.Core.Ioc.Current().FetchInstance<domFile.Core.BaseColVm>(a + "Vm", domFile.Core.BaseColVm);
                //              return control.intoDom();
                //           }) }
                //    </div>
                return React.createElement("form", {className: "clearfix ", key: this.props.Vm.key}, React.createElement("fieldset", null, React.createElement("legend", null, this.props.Vm.ColumGroupCofing.DisplayName ? this.props.Vm.ColumGroupCofing.DisplayName : "其它 ", this.initTitle()), React.createElement("div", {className: this.props.Vm.IsItemFormHide ? "hide" : " "}, this.props.Vm.ColumnObjList.map(function (column, i) {
                    return column.intoDom();
                }))));
            };
            NormalRowGroupReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return NormalRowGroupReact;
        }(baseColumnGroup.ui.BaseColumnGroupReact));
        ui.NormalRowGroupReact = NormalRowGroupReact;
        var NormalRowGroupVm = (function (_super) {
            __extends(NormalRowGroupVm, _super);
            function NormalRowGroupVm() {
                _super.apply(this, arguments);
                //肯定要有个控件集合
                this.ReactType = NormalRowGroupReact;
                //用来装预定的控件
                this.ControlList = new Array();
                this.title = "";
                this.IsSingleRow = false;
            }
            return NormalRowGroupVm;
        }(baseColumnGroup.ui.BaseColumnGroupVm));
        ui.NormalRowGroupVm = NormalRowGroupVm;
        var NormalRowGroupStates = (function (_super) {
            __extends(NormalRowGroupStates, _super);
            function NormalRowGroupStates() {
                _super.apply(this, arguments);
            }
            return NormalRowGroupStates;
        }(baseColumnGroup.ui.BaseColumnGroupStates));
        ui.NormalRowGroupStates = NormalRowGroupStates;
        var NormalRowGroupProps = (function (_super) {
            __extends(NormalRowGroupProps, _super);
            function NormalRowGroupProps() {
                _super.apply(this, arguments);
            }
            return NormalRowGroupProps;
        }(baseColumnGroup.ui.BaseColumnGroupProps));
        ui.NormalRowGroupProps = NormalRowGroupProps;
        iocFile.Core.Ioc.Current().RegisterType("NormalColumnGroupVm", baseColumnGroup.ui.BaseColumnGroupVm, NormalRowGroupVm);
    })(ui = exports.ui || (exports.ui = {}));
});
