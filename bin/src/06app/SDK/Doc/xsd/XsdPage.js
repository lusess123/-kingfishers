var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../04page/BaseWebPage", "react", "./../../../../02col/03selector/BaseTree"], function (require, exports, iocFile, basewedPageFile, React, TreeFile) {
    "use strict";
    var XsdPage;
    (function (XsdPage) {
        var XsdPageAction = (function (_super) {
            __extends(XsdPageAction, _super);
            function XsdPageAction() {
                _super.apply(this, arguments);
            }
            return XsdPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        XsdPage.XsdPageAction = XsdPageAction;
        var XsdPageReact = (function (_super) {
            __extends(XsdPageReact, _super);
            function XsdPageReact() {
                _super.apply(this, arguments);
                this.state = new XsdPageStates();
            }
            XsdPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "m-t"}, React.createElement("ul", {className: "col-lg-3 col-md-3 col-sm-3 Hm-xsd-list"}, React.createElement("li", null, "图标说明："), React.createElement("li", null, React.createElement("i", {className: "xsd-icon-qjjd fa-2x"}), React.createElement("span", null, "枚举类型定义")), React.createElement("li", null, React.createElement("i", {className: "xsd-icon-qjfz fa-2x"}), React.createElement("span", null, "复杂类型定义")), React.createElement("li", null, React.createElement("i", {className: "xsd-icon-qjtx fa-2x"}), React.createElement("span", null, "属性成员")), React.createElement("li", null, React.createElement("i", {className: "xsd-icon-qjmx2 fa-2x"}), React.createElement("span", null, "复杂类型成员对象")), React.createElement("li", null, React.createElement("i", {className: "xsd-icon-qjmx1 fa-2x"}), React.createElement("span", null, "简单类型成员对象")), React.createElement("li", null, "名称前面加 [] 表示这个是集合成员"), React.createElement("li", null, "名称前面加 1 表示该元素出现一次")), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-6"}, this._tDom(this.props.Vm.XsdTreeObj)));
            };
            return XsdPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        XsdPage.XsdPageReact = XsdPageReact;
        var XsdPageVm = (function (_super) {
            __extends(XsdPageVm, _super);
            function XsdPageVm(config) {
                _super.call(this);
                this.ReactType = XsdPageReact;
                this.Title = "XsdPage页面;";
                this.XsdName = "";
            }
            XsdPageVm.prototype.init = function (config) {
                if (this.Param1 && this.Param1 != "") {
                    this.XsdName = this.Param1;
                }
                this.XsdTreeObj = new TreeFile.ui.BaseTreeVm({
                    RegName: "XsdCodeTable-" + this.XsdName,
                    IsRootExpand: true
                });
                this.XsdTreeObj.Tree.StyleName = "Base";
                this.XsdTreeObj.Tree.NodeTplFun = function (a) {
                    return [a.ExtData["Info"]];
                };
                this.XsdTreeObj.Tree.NNodeTplFun = function (a) {
                    switch (a.ExtData["XsdItmTypeStr"]) {
                        case "AttriObj":
                            a.ExtData.Icon = "xsd-icon-qjtx";
                            //xsd-icon-qjys
                            break;
                        case "ComplexObj":
                            a.ExtData.Icon = "xsd-icon-qjmx2";
                            break;
                        case "SimpleObj":
                            a.ExtData.Icon = "xsd-icon-qjmx1";
                            break;
                        case "EnumObj":
                            a.ExtData.Icon = "xsd-icon-qjmx1";
                            break;
                        case "EnumObjDef":
                            a.ExtData.Icon = "xsd-icon-qjjd";
                            break;
                        default:
                            a.ExtData.Icon = "xsd-icon-qjfz";
                            break;
                    }
                    //if (a.IsRoot) {
                    //} else {
                    if (a.ExtData["Text"])
                        return [(React.createElement("span", {className: "Hu-note Hu-pointer", title: a.ExtData["Text"]}, a.ExtData["Text"]))];
                    else {
                        return null;
                    }
                    // }
                };
            };
            XsdPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    this.init(null);
                    callback();
                }
            };
            return XsdPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        XsdPage.XsdPageVm = XsdPageVm;
        var XsdPageStates = (function (_super) {
            __extends(XsdPageStates, _super);
            function XsdPageStates() {
                _super.apply(this, arguments);
            }
            return XsdPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        XsdPage.XsdPageStates = XsdPageStates;
        var XsdPageProps = (function (_super) {
            __extends(XsdPageProps, _super);
            function XsdPageProps() {
                _super.apply(this, arguments);
            }
            return XsdPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        XsdPage.XsdPageProps = XsdPageProps;
        iocFile.Core.Ioc.Current().RegisterType("XSDPAGE", basewedPageFile.Web.BaseWebPageVm, XsdPageVm);
    })(XsdPage = exports.XsdPage || (exports.XsdPage = {}));
});
