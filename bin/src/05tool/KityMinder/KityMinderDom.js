var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "./../../01core/Util", "react", "react-dom"], function (require, exports, domFile, utilFile, React, ReactDOM) {
    "use strict";
    var domCore = domFile.Core;
    var KityMinderDom;
    (function (KityMinderDom) {
        var KityMinderDomAction = (function (_super) {
            __extends(KityMinderDomAction, _super);
            function KityMinderDomAction() {
                _super.apply(this, arguments);
            }
            return KityMinderDomAction;
        }(domCore.DomAction));
        KityMinderDom.KityMinderDomAction = KityMinderDomAction;
        var KityMinderDomReact = (function (_super) {
            __extends(KityMinderDomReact, _super);
            function KityMinderDomReact() {
                _super.apply(this, arguments);
                this.state = new KityMinderDomStates();
            }
            KityMinderDomReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: "KityMinderDom", style: { height: 800 }}, React.createElement("div", null, "正在载入KityMinderDom的组件......"), React.createElement("div", null, this.fError ? React.createElement("span", null, this.fError) : "")));
            };
            KityMinderDomReact.prototype.fKityMinderInit = function () {
                var _this = this;
                this.fError = null;
                var _$dom = $(ReactDOM.findDOMNode(this)).find(".KityMinderDom");
                if (this.props.Vm.MDTreeObj && _$dom.length > 0) {
                    _$dom.html("");
                    //  urlFile.Core.AkPost("/right/Menu/GetAllTree?regname=MenuTreeCodeTable", {}, (a: any) => {
                    //  var _data: ITreeCodeTableModel = a;
                    // var _o = convertToKMNodeByTreeNode(_data);
                    // _o.data.text = "平台菜单";
                    // _o.data.expandState = "";
                    utilFile.Core.Util.AsyncJs([
                        "/AtawStatic/lib/03Extend/kityMinder/kity.min.js",
                        "/AtawStatic/lib/03Extend/kityMinder/kityMinder.core.css",
                        "/AtawStatic/lib/03Extend/kityMinder/kityMinder.core.js"], function () {
                        try {
                            var km = window["km"] = new window["kityminder"].Minder({ renderTo: _$dom[0] });
                            km.importJson(_this.props.Vm.MDTreeObj);
                        }
                        catch (ex) {
                            console.error(ex);
                            _this.fError = ex;
                            _this.forceUpdate();
                        }
                    });
                }
            };
            KityMinderDomReact.prototype.pInstall = function () {
                _super.prototype.pInstall.call(this);
                // this.fKityMinderInit();
            };
            KityMinderDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
                this.fKityMinderInit();
            };
            return KityMinderDomReact;
        }(domCore.DomReact));
        KityMinderDom.KityMinderDomReact = KityMinderDomReact;
        KityMinderDom.convertToKMNodeByTreeNode = function (node) {
            var _km = { data: { text: node.CODE_TEXT, expandState: "collapse" }, children: [] };
            if (node.Children && node.Children.length > 0) {
                node.Children.forEach(function (n) {
                    var km = KityMinderDom.convertToKMNodeByTreeNode(n);
                    _km.children.push(km);
                });
            }
            return _km;
        };
        // var fconvertToKMNodeByTreeNode = function (node: ITreeCodeTableModel):
        var KityMinderDomVm = (function (_super) {
            __extends(KityMinderDomVm, _super);
            function KityMinderDomVm(config) {
                _super.call(this);
                this.ReactType = KityMinderDomReact;
                if (config) {
                    if (config.MDTreeObj) {
                        this.MDTreeObj = config.MDTreeObj;
                    }
                }
            }
            return KityMinderDomVm;
        }(domCore.DomVm));
        KityMinderDom.KityMinderDomVm = KityMinderDomVm;
        var KityMinderDomStates = (function (_super) {
            __extends(KityMinderDomStates, _super);
            function KityMinderDomStates() {
                _super.apply(this, arguments);
            }
            return KityMinderDomStates;
        }(domCore.DomStates));
        KityMinderDom.KityMinderDomStates = KityMinderDomStates;
        var KityMinderDomProps = (function (_super) {
            __extends(KityMinderDomProps, _super);
            function KityMinderDomProps() {
                _super.apply(this, arguments);
            }
            return KityMinderDomProps;
        }(domCore.DomProps));
        KityMinderDom.KityMinderDomProps = KityMinderDomProps;
    })(KityMinderDom = exports.KityMinderDom || (exports.KityMinderDom = {}));
});
