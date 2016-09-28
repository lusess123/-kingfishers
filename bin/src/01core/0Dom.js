var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "react-dom", "./Event"], function (require, exports, React, ReactDOM, eventFile) {
    "use strict";
    //import jqueryExtend = require("./JQueryExtend");
    var Core;
    (function (Core) {
        var DomReact = (function (_super) {
            __extends(DomReact, _super);
            function DomReact() {
                _super.apply(this, arguments);
                this.fIsNoChangeSign = false;
                this.pNoNeedUpdate = false;
                this.IsFirst = false;
                this.pIsSetScreenHeight = false;
                this.pIsSetScreenMaxHeight = false;
                this.ScreenDomName = "";
            }
            DomReact.prototype.vM = function () {
                return this.props.Vm;
            };
            DomReact.prototype._T_ = function (a, tplName) {
                if (tplName && tplName != "") {
                    if (this.props.Vm.TplFunDic && this.props.Vm.TplFunDic[tplName]) {
                        return this.props.Vm.TplFunDic[tplName](a, this.props.Vm);
                    }
                }
                else {
                    return a;
                }
            };
            DomReact.prototype._tDom = function (dom, config) {
                if (config && config.fun) {
                    return config.fun(dom);
                }
                else {
                    if (dom) {
                        return dom.intoDom();
                    }
                    else {
                        if (config) {
                            if (config.nullNode) {
                                return config.nullNode;
                            }
                            else {
                                return null;
                            }
                        }
                    }
                }
            };
            DomReact.prototype.setNoNeedUpdate = function (isNo) {
                this.pNoNeedUpdate = isNo;
            };
            DomReact.prototype.componentWillMount = function () {
                this.pComponentWillMount();
            };
            ;
            DomReact.prototype.componentWillUnmount = function () {
                this.pComponentWillUnmount();
            };
            ;
            DomReact.prototype.componentDidMount = function () {
                this.pComponentDidMount();
                this.IsFirst = true;
            };
            ;
            DomReact.prototype.pInstall = function () {
                //   if (this.props.Vm.getRegName() == "pick") debugger;
                var _this = this;
                this.fEventFun = this.props.Vm.onChangeHandle(function (val, callback) {
                    _this.pFunForceUpdate(callback);
                    return true;
                });
                this.props.Vm.getEmit("React").addListener("setChange", function (a) {
                    //  this.props.Vm.IsChange = a;
                    _this.fIsNoChangeSign = !a;
                });
            };
            ;
            DomReact.prototype.pUnInstall = function (vm) {
                if (vm) {
                    vm.getEmit("React").removeAllListeners();
                    vm.dispose();
                }
                else {
                    this.props.Vm.getEmit("React").removeAllListeners();
                    this.props.Vm.dispose();
                }
            };
            ;
            DomReact.prototype.componentDidUpdate = function (prevProps, prevState, prevContext) {
                this.pComponentDidUpdate(prevProps, prevState, prevContext);
            };
            DomReact.prototype.pComponentDidUpdate = function (prevProps, prevState, prevContext) {
                //更新后的
                if (!(prevProps.Vm === this.props.Vm)) {
                    this.pUnInstall(prevProps.Vm);
                    this.pInstall();
                    console.log(this.props.Vm.getRegName() + "重新注册");
                }
            };
            DomReact.prototype.pFunForceUpdate = function (callback) {
                console.log(this.props.Vm.getRegName() + "调用update");
                this.forceUpdate(callback);
            };
            ;
            DomReact.prototype.shouldComponentUpdate = function (nextProps, nextState, nextContext) {
                // if (nextProps.Vm["Text"] == "郑瑜琨") debugger;
                console.log(this.props.Vm.getRegName() + "  判断是否更新" + this.props.Vm.IsChange);
                if (!nextProps.Vm.IsMulit) {
                    if (!nextProps.Vm.NoNeedUpdate && !this.pNoNeedUpdate && nextProps.Vm.IsChange) {
                        nextProps.Vm.IsChange = false;
                        return true;
                    }
                    else
                        return false;
                }
                else {
                    return true;
                }
                // return true;
            };
            DomReact.prototype.pDispatcher = function (action) {
                //if (this.fDomDispatcher == null) {
                //    this.fDomDispatcher = AkDispatcher.Current();
                //}
                //action.Vm = this.props.Vm;
                //this.fDomDispatcher.dispatch(action);
                // utilFile.Core.Util.
            };
            ;
            DomReact.prototype.pComponentWillMount = function () {
                this.pInstall();
                //  var __this = this;
                console.log(this.props.Vm.getRegName() + "注册");
            };
            ;
            DomReact.prototype.pComponentWillUnmount = function () {
                // this.props.Vm.offEvent_ChangeEmit(this.fEventFun);
                this.pUnInstall();
            };
            ;
            DomReact.prototype.pComponentDidMount = function () {
                //this.props.Vm.offEvent_ChangeEmit(this.fEventFun);
                var _msd = this.props.Vm.MetaShowData;
                // if (!_msd) _msd = {Name : this.props.Vm.getRegName()};
                if (_msd) {
                    var _dom = ReactDOM.findDOMNode(this);
                    if (_dom) {
                        var _$dom = $(_dom);
                        if (_$dom) {
                            _$dom.on("mousedown", function (event) {
                                if (event["which"] == 3) {
                                    event.stopPropagation();
                                    var _$t = $(this);
                                    if (!_$t.hasClass("acs-module-warning")) {
                                        $(this).addClass("acs-module-warning");
                                        var _lis = "";
                                        if (_msd.List) {
                                            _msd.List.forEach(function (l) {
                                                _lis += ("<li>" + l + "</li>");
                                            });
                                        }
                                        var _$p = $("<div class='acs-module-warninHg-content'><h5>"
                                            + _msd.Name + "</h5><div>"
                                            + (_msd.Content ? _msd.Content : "未知组件") + "</div><ul class='list'>"
                                            + _lis + "</ul></div>");
                                        $("body").append(_$p);
                                        _$p.css({ top: event.clientY, left: event.clientX });
                                        _$t.data("div", _$p);
                                    }
                                    else {
                                        _$t.removeClass("acs-module-warning");
                                        _$t.data("div").remove();
                                    }
                                    return false;
                                }
                            });
                        }
                    }
                }
                if (this.pIsSetScreenHeight) {
                    var _dom = ReactDOM.findDOMNode(this);
                    if (_dom) {
                        var _$dom = $(_dom);
                        if (this.ScreenDomName && this.ScreenDomName != "") {
                            var _$dom = _$dom.find(this.ScreenDomName);
                        }
                        _$dom.height($(window).height() - 60 - 30 - 30 - 47);
                    }
                }
                if (this.pIsSetScreenMaxHeight) {
                    var _dom = ReactDOM.findDOMNode(this);
                    if (_dom) {
                        var _$dom = $(_dom);
                        if (this.ScreenDomName && this.ScreenDomName != "") {
                            var _$dom = _$dom.find(this.ScreenDomName);
                        }
                        _$dom.css("max-height", $(window).height() - 60 - 30 - 30 - 47);
                    }
                }
            };
            ;
            DomReact.prototype.pSender = function () {
                return React.DOM.div(null, this.props.Vm.getRegName());
            };
            ;
            DomReact.prototype.pGetErrorName = function () {
                return "【dom】 【" + this.props.Vm.getRegName() + "】 【" + this.props.Vm.Id + "】";
            };
            DomReact.prototype.render = function () {
                //$["r"]["pasend"] = this.props;
                //   AkDispatcher.SendCount++;
                // 
                console.log("【dom】：" + this.props.Vm.getRegName() + "  更新" + new Date().toLocaleTimeString());
                try {
                    if (this.props.Vm.Error != "") {
                        var _str = this.props.Vm.Error;
                        this.props.Vm.Error = "";
                        throw _str;
                    }
                    if (this.props.Vm.CustomRenderFun) {
                        return this.props.Vm.CustomRenderFun(this.props.Vm);
                    }
                    else {
                        var res = this.pSender();
                        //  console.info(res);
                        return res;
                    }
                }
                catch (ee) {
                    console.warn("组件异常：");
                    console.warn(this);
                    console.warn(ee);
                    // console.info(this);
                    //  alert();
                    var str = this.pGetErrorName() + "   " + ee.toString();
                    return React.DOM.span({ title: str, className: " fa fa-exclamation-triangle Hs-red " });
                }
            };
            return DomReact;
        }(React.Component));
        Core.DomReact = DomReact;
        var DomVm = (function () {
            function DomVm() {
                this.IsChange = true;
                this.fNoFirst = false;
                this.fOriValue = "";
                this.Id = "";
                this.Error = "";
                this.NoNeedUpdate = false;
                this.AppEventFunDic = {};
                // public $DomList: Array<React.Component<any, any>>;
                ///组件只读调用
                this.pDataValue = "";
                this.getRegName = function () {
                    //$["r"]["pgetregname"] = this;
                    return this.pRegName;
                };
            }
            DomVm.prototype.getOriValue = function () {
                return this.fOriValue;
            };
            DomVm.prototype.toChange = function () {
                this.IsChange = true;
            };
            DomVm.prototype.RegistAppEvent = function (regData) {
                this.listenAppEvent(regData.Name, this.UniId, regData.Fun);
            };
            DomVm.prototype.pRegistAppEventByDom = function (regData) {
                // this.RegistAppEvent(regData);
                if (regData.DomObj.UniId == this.UniId) {
                    regData.DomObj.RegistAppEvent(regData);
                }
                else {
                    alert("由于组件的unid不一致 ，导致无法注册 " + regData.Name + "  事件 ");
                }
            };
            DomVm.prototype.onCustomEvent = function (fun, sender) {
                this.pRegistAppEventByDom({ DomObj: sender, Fun: fun, Name: "123" });
            };
            DomVm.prototype.listenAppEvent = function (name, uniId, fun) {
                this.AppEventFunDic[name + uniId] = fun;
                eventFile.App.GetAppEvent().addListener(name + uniId, fun);
            };
            DomVm.prototype.emitAppEvent = function (name, sign) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                (_a = eventFile.App.GetAppEvent()).emit.apply(_a, [name + sign].concat(args));
                var _a;
            };
            DomVm.prototype.pGetEmit = function (name) {
                // if (this.fEmit == null) {
                if (this.fEventBus == null) {
                    this.fEventBus = new eventFile.Core.EventBus();
                }
                switch (name) {
                    case "Custom":
                        this.fEmit = this.fEventBus.CustomEvent;
                        break;
                    case "Hook":
                        this.fEmit = this.fEventBus.HookEvent;
                        break;
                    case "React":
                        this.fEmit = this.fEventBus.ReactEvent;
                        break;
                    case "Vm":
                    default:
                        this.fEmit = this.fEventBus.VmEvent;
                }
                //  }
                return this.fEmit;
            };
            DomVm.prototype.getEmit = function (name) {
                return this.pGetEmit(name);
            };
            DomVm.prototype.offEvent_ChangeEmit = function (fun) {
                //if (this.fEmit == null)
                //    this.fEmit = new EventEmitter2();
                this.pGetEmit("React").removeAllListeners(DomVm.fEVENT_CHANGE);
            };
            DomVm.prototype.onChangeHandle = function (fun) {
                //if (this.fEmit == null)
                //    this.fEmit = new EventEmitter2();
                var __this = this;
                var _fun = function () {
                    fun.apply(__this, arguments);
                };
                this.pGetEmit("React").addListener(DomVm.fEVENT_CHANGE, _fun);
                return _fun;
            };
            DomVm.prototype.intoDom = function (key) {
                var children = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    children[_i - 1] = arguments[_i];
                }
                if (this) {
                    if (key) {
                        this.key = key;
                    }
                    return React.createElement(this.ReactType, { Vm: this }, children);
                }
                else {
                    return React.DOM.span({ className: "fa fa-exclamation-triangle" }, "（空的元素）");
                }
            };
            DomVm.prototype.intoDomR = function (reactType, key, childrenNode) {
                if (key) {
                    this.key = key;
                }
                return React.createElement(reactType, { Vm: this }, childrenNode);
            };
            // protected pDataValue: string;
            DomVm.prototype.initDataValue = function (val) {
                this.TempDataValue = val;
                this.pDataValue = val;
            };
            DomVm.prototype.pDataValueSet = function (val) {
                return this.fDataValueSet(val);
            };
            DomVm.prototype.forceUpdate = function (val, callback) {
                this.IsChange = true;
                this.pGetEmit("React").emit(DomVm.fEVENT_CHANGE, val, callback);
            };
            //公共接口
            DomVm.prototype.pDataValueGet = function () {
                return this.pDataValue;
            };
            DomVm.prototype.pdataValue = function (val) {
                if (val === undefined) {
                    return this.pDataValueGet();
                }
                else {
                    this.pDataValueSet(val);
                }
            };
            DomVm.prototype.dataValue = function (val) {
                if (val === undefined) {
                    return this.dataValueGet();
                }
                else {
                    return this.dataValueSet(val);
                }
            };
            DomVm.prototype.setOriValue = function (val) {
                this.fOriValue = val;
                this.fDataValueSet(val);
            };
            DomVm.prototype.fDataValueSet = function (val) {
                //if (!this.fNoFirst) {
                //    this.fOriValue = val;
                //    this.fNoFirst = true;
                //}
                if (val != this.pDataValue) {
                    var _isCheck = this.pOnchange(val);
                    if (_isCheck) {
                        //广播事件
                        this.pDataValue = val;
                        this.pGetEmit("React").emit(DomVm.fEVENT_CHANGE, val);
                    }
                    return _isCheck;
                }
                return false;
            };
            DomVm.prototype.fDataValueGet = function () {
                return this.pDataValueGet();
            };
            DomVm.prototype.vmdataValue = function (val) {
                if (val === undefined) {
                    return this.vmDataValueGet();
                }
                else {
                    return this.vmDataValueSet(val);
                }
            };
            DomVm.prototype.vmDataValueGet = function () {
                return this.fDataValueGet();
            };
            DomVm.prototype.vmDataValueSet = function (val) {
                this.fDataValueSet(val);
            };
            DomVm.prototype.dataValueGet = function () {
                return this.fDataValueGet();
            };
            DomVm.prototype.dataValueSet = function (val) {
                this.fDataValueSet(val);
            };
            DomVm.prototype.reactDataValueGet = function () {
                return this.fDataValueGet();
            };
            DomVm.prototype.pOnchange = function (val) {
                //$["r"]["ppros"] = this;
                this.TempDataValue = val;
                var _isCheck = true;
                if (this.ChangeEventFun != null) {
                    _isCheck = this.ChangeEventFun(val, this);
                }
                return _isCheck;
            };
            //react 组件调用接口
            DomVm.prototype.reactDataValueSet = function (val) {
                return this.fDataValueSet(val);
            };
            DomVm.prototype.pDispose = function () {
                if (this.fEmit) {
                    this.fEmit.removeAllListeners();
                }
                if (this.AppEventFunDic) {
                    for (var n in this.AppEventFunDic) {
                        if (this.AppEventFunDic[n]) {
                            eventFile.App.GetAppEvent().removeListener(n, this.AppEventFunDic[n]);
                        }
                    }
                    this.AppEventFunDic = {};
                }
            };
            DomVm.prototype.dispose = function () {
                this.pDispose();
            };
            DomVm.fEVENT_CHANGE = "event_change";
            return DomVm;
        }());
        Core.DomVm = DomVm;
        var DomProps = (function () {
            function DomProps() {
            }
            // 只是为了可以点出来  
            DomProps.prototype.children = function () {
            };
            return DomProps;
        }());
        Core.DomProps = DomProps;
        var DomStates = (function () {
            function DomStates() {
            }
            return DomStates;
        }());
        Core.DomStates = DomStates;
        var DomAction = (function () {
            function DomAction() {
            }
            return DomAction;
        }());
        Core.DomAction = DomAction;
    })(Core = exports.Core || (exports.Core = {}));
});
