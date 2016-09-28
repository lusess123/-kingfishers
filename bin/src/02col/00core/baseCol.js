//import akDispatcher = require("./../../01core/AkDispatcher");
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../08legal/BaseLegal", "./../../01core/Util", "./../../01core/0Dom", "react-dom"], function (require, exports, AkBaseLegal, utilFile, domFile, ReactDOM) {
    "use strict";
    var DomReact = domFile.Core.DomReact;
    var DomVm = domFile.Core.DomVm;
    var DomProps = domFile.Core.DomProps;
    var DomStates = domFile.Core.DomStates;
    var DomAction = domFile.Core.DomAction;
    var Core;
    (function (Core) {
        var BaseColReact = (function (_super) {
            __extends(BaseColReact, _super);
            function BaseColReact() {
                _super.apply(this, arguments);
            }
            BaseColReact.prototype.getState = function () {
                if (this.state == null) {
                    var s = new BaseColStates();
                    this.state = s;
                }
                return this.state;
            };
            BaseColReact.prototype.pInstall = function () {
                var _this = this;
                _super.prototype.pInstall.call(this);
                if (this.props.Vm.LegalObj) {
                    this.props.Vm.LegalObj.ControlObj = this.props.Vm;
                    this.props.Vm.getEmit("React").addListener("legal", function (msg) {
                        // this.getState().ErrMsg = msg;
                        // this.getState().LegalResult = false;
                        _this.legal(msg);
                    });
                    this.props.Vm.getEmit("React").addListener("cancleLegal", function () {
                        // alert($(_dom).html());
                        _this.cancleLegalSender();
                        //  }
                    });
                }
            };
            ;
            BaseColReact.prototype.legal = function (msg) {
                //this.forceUpdate();
                //var _dom = ReactDOM.findDOMNode (this);
                this.legalSender();
                this.legalShowMsg(msg);
            };
            BaseColReact.prototype.getLegalMsgDom = function () {
                try {
                    //if(this.isMounted)
                    var _dom = ReactDOM.findDOMNode(this);
                    return $(_dom);
                }
                catch (ee) {
                    return $("<div></div>");
                }
            };
            BaseColReact.prototype.getInputDom = function () {
                try {
                    var _dom = ReactDOM.findDOMNode(this);
                    return $(_dom);
                }
                catch (ee) {
                    return $("<div></div>");
                }
            };
            BaseColReact.prototype.legalShowMsg = function (msg) {
                var _this = this;
                var _cal = $.fn["calendar"];
                //autosize
                var _autosize = $.fn["autosize"];
                utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/qtip/jquery.qtip.min.js", "/AtawStatic/lib/03Extend/qtip/jquery.qtip.min.css"], function () {
                    $.fn["calendar"] = _cal;
                    $.fn["autosize"] = _autosize;
                    var _$dom = _this.getLegalMsgDom();
                    var _$domP = _$dom;
                    if (!_$dom.is("div") && !_$dom.is("span")) {
                        _$domP = _$domP.parent();
                    }
                    _$dom.qtip({
                        position: {
                            my: 'top center',
                            at: 'bottom left',
                            container: _$domP,
                            adjust: {
                                x: (_$dom.width() / 2)
                            }
                        },
                        content: msg,
                        show: {
                            event: 'click'
                        },
                        hide: {
                            event: 'click'
                        }
                    });
                    _$dom.qtip('toggle', true);
                    //  $(_dom).poshytip("show");
                });
            };
            BaseColReact.prototype.legalSender = function () {
                this.getInputDom().addClass("Hs-red-border");
            };
            BaseColReact.prototype.cancleLegalSender = function () {
                var _this = this;
                this.getInputDom().removeClass("Hs-red-border");
                var _cal = $.fn["calendar"];
                utilFile.Core.Util.AsyncJs([
                    "/AtawStatic/lib/03Extend/qtip/jquery.qtip.min.js", "/AtawStatic/lib/03Extend/qtip/jquery.qtip.min.css"], function () {
                    $.fn["calendar"] = _cal;
                    _this.getLegalMsgDom().qtip('toggle', false);
                    _this.getLegalMsgDom().qtip('destroy', true);
                });
            };
            return BaseColReact;
        }(DomReact));
        Core.BaseColReact = BaseColReact;
        var BaseColVm = (function (_super) {
            __extends(BaseColVm, _super);
            function BaseColVm() {
                _super.apply(this, arguments);
                this.LegalObj = new AkBaseLegal.Core.BaseLegal();
            }
            BaseColVm.prototype.showLegal = function () {
                if (!this.LegalObj.LegalResult) {
                    this.getEmit("React").emit("legal", this.LegalObj.ErrMsg);
                }
                else {
                    this.getEmit("React").emit("cancleLegal");
                }
            };
            BaseColVm.prototype.legal = function () {
                if (this.LegalObj) {
                    this.LegalObj.legal();
                    if (!this.LegalObj.LegalResult) {
                        this.getEmit("React").emit("legal", this.LegalObj.ErrMsg);
                    }
                    else {
                        this.getEmit("React").emit("cancleLegal");
                    }
                    return this.LegalObj.LegalResult;
                }
                return true;
                //this.getEmit().emit("legal",mesg);
            };
            BaseColVm.prototype.pOnchange = function (val) {
                var res = _super.prototype.pOnchange.call(this, val);
                if (this.legal()) {
                    this.IsDataValueChange = true;
                    this.getEmit().emit("BaseColVm_change", this);
                }
                return res;
            };
            BaseColVm.prototype.getChangeValFun = function (changeValFun) {
                var _val = this.getChangeVal();
                changeValFun(_val != null, this.vmDataValueGet(), this);
            };
            BaseColVm.prototype.getChangeVal = function () {
                var _val = this.vmDataValueGet();
                var _ori = this.getOriValue();
                if (_val == _ori) {
                    return null;
                }
                else {
                    return _val;
                }
            };
            BaseColVm.prototype.makerInNavi = function (config) {
                this.pMakerInNavi(config);
            };
            BaseColVm.prototype.pMakerInNavi = function (config) {
            };
            return BaseColVm;
        }(DomVm));
        Core.BaseColVm = BaseColVm;
        var BaseColProps = (function (_super) {
            __extends(BaseColProps, _super);
            function BaseColProps() {
                _super.apply(this, arguments);
            }
            return BaseColProps;
        }(DomProps));
        Core.BaseColProps = BaseColProps;
        var BaseColStates = (function (_super) {
            __extends(BaseColStates, _super);
            function BaseColStates() {
                _super.apply(this, arguments);
            }
            return BaseColStates;
        }(DomStates));
        Core.BaseColStates = BaseColStates;
        var BaseColAction = (function (_super) {
            __extends(BaseColAction, _super);
            function BaseColAction() {
                _super.apply(this, arguments);
            }
            return BaseColAction;
        }(DomAction));
        Core.BaseColAction = BaseColAction;
    })(Core = exports.Core || (exports.Core = {}));
});
