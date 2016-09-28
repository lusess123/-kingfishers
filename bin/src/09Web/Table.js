var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../01core/0Dom", "./../09Web/dom/ThDom", "./../02col/02Mulite/SingleCheckBox", "react"], function (require, exports, domFile, thdomFile, singleCheckBoxFile, React) {
    "use strict";
    var domCore = domFile.Core;
    //import tableFile = require("./Table");
    var Web;
    (function (Web) {
        var TableAction = (function (_super) {
            __extends(TableAction, _super);
            function TableAction() {
                _super.apply(this, arguments);
            }
            return TableAction;
        }(domCore.DomAction));
        Web.TableAction = TableAction;
        var TableReact = (function (_super) {
            __extends(TableReact, _super);
            function TableReact() {
                _super.apply(this, arguments);
            }
            TableReact.prototype.pSender = function () {
                var _content = React.createElement("div", null, "大家好，我叫黄小菜");
                var _btn = (React.createElement("div", null, React.createElement("button", {className: "hollow button"}, React.createElement("i", {className: "fa fa-"}))));
                var _table = (React.createElement("div", {className: "table-overflow"}, React.createElement("table", {className: this.props.Vm.WidthCss}, React.createElement("tr", null, this.props.Vm.Thers.map(function (th, i) {
                    return th.intoDom();
                })), React.createElement("tr", null, this.props.Vm.Thers.map(function (th) {
                    return React.createElement("td", null);
                })), React.createElement("tr", null, this.props.Vm.Thers.map(function (th) {
                    return React.createElement("td", null);
                })), "  ", React.createElement("tr", null, this.props.Vm.Thers.map(function (th) {
                    return React.createElement("td", null);
                })), "  ", React.createElement("tr", null, this.props.Vm.Thers.map(function (th) {
                    return React.createElement("td", null);
                })), React.createElement("tr", null, this.props.Vm.Thers.map(function (th) {
                    return React.createElement("td", null);
                }))), React.createElement("div", {className: "acsModalBg " + (this.props.Vm.IsModalShow ? "show" : "hide")}, _content)));
                return _table;
                //<div className={"acsModalBg " + (this.state.IsModalShow ? "show" : "hide") }
                //    style={{ top: this.state.ModalTop.toString() + "px" }}>
                //    {_content}
                //    <a className="Hu-close"
                //        onClick={() => {
                //            this.setState((s, p) => {
                //                this.props.Vm.IsChange = true;
                //                s.IsModalShow = false;
                //                return s;
                //            })
                //        } }>
                //                        <i className="fa fa-close Hu-pointer "></i>
                //        </a>
                //</div>
                // </div>
            };
            TableReact.prototype.initModalContent = function (content) {
                return React.DOM.div({
                    className: "row"
                }, React.DOM.h4(null, "大家好，我是黄小菜 :"), content);
            };
            ;
            TableReact.prototype.onButtonClick = function () {
                var __this = this;
                this.props.Vm.IsModalShow = true;
                this.forceUpdate();
                //this.setState((s, p) => {
                //    this.props.Vm.IsChange = true;
                //    s.IsModalShow = true;
                //    var st = $(document).scrollTop();//滚动条距顶部的距离    
                //    var ch = $(window).height();//屏幕的高度   
                //    var objT = Number(st);
                //    s.ModalTop = (Number(ch)) * 0.05;
                //    return s;
                //});
            };
            return TableReact;
        }(domCore.DomReact));
        Web.TableReact = TableReact;
        var TableVm = (function (_super) {
            __extends(TableVm, _super);
            function TableVm() {
                _super.apply(this, arguments);
                this.ReactType = TableReact;
                this.singleCheckBoxVm0 = null;
                this.singleCheckBoxVm1 = null;
                this.singleCheckBoxVm2 = null;
                this.singleCheckBoxVm3 = null;
                this.IsModalShow = false;
                this.ModalTop = 0;
                this.w1 = 0;
                this.WidthCss = "";
                this.Thers = new Array();
            }
            TableVm.prototype.init = function () {
                var _this = this;
                this.singleCheckBoxVm0 = singleCheckBoxFile.ui.SingleCheckBoxVm.Test();
                this.singleCheckBoxVm1 = singleCheckBoxFile.ui.SingleCheckBoxVm.Test();
                this.singleCheckBoxVm2 = singleCheckBoxFile.ui.SingleCheckBoxVm.Test();
                this.singleCheckBoxVm3 = singleCheckBoxFile.ui.SingleCheckBoxVm.Test();
                //var _ints = [0..4];
                [0, 1, 2, 3, 4].forEach(function (i) {
                    var _th = new thdomFile.Web.ThDomVm();
                    _th.Text = "我是一个列头" + i.toString();
                    _th.Width = 0;
                    _this.Thers = _this.Thers.concat(_th);
                });
                this.Thers.forEach(function (ther, i) {
                    //ther.getEmit().addListener("table_width", () => {
                    //    this.WidthCss = "w110";
                    //    this.forceUpdate("");
                    //});
                    _this.Thers.forEach(function (ther0, i0) {
                        if (i != i0) {
                            ther.getEmit().addListener("width_fix", function () {
                                ther0.fixWidth();
                                ther0.forceUpdate("");
                            });
                        }
                    });
                });
            };
            return TableVm;
        }(domCore.DomVm));
        Web.TableVm = TableVm;
        var TableStates = (function (_super) {
            __extends(TableStates, _super);
            function TableStates() {
                _super.apply(this, arguments);
            }
            return TableStates;
        }(domCore.DomStates));
        Web.TableStates = TableStates;
        var TableProps = (function (_super) {
            __extends(TableProps, _super);
            function TableProps() {
                _super.apply(this, arguments);
            }
            return TableProps;
        }(domCore.DomProps));
        Web.TableProps = TableProps;
    })(Web = exports.Web || (exports.Web = {}));
});
