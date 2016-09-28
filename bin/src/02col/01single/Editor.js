var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Ioc", "./../../01core/Util", "react"], function (require, exports, basecolFile, iocFile, utilFile, React) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var EditorAction = (function (_super) {
            __extends(EditorAction, _super);
            function EditorAction() {
                _super.apply(this, arguments);
            }
            return EditorAction;
        }(BaseColAction));
        ui.EditorAction = EditorAction;
        var EditorReact = (function (_super) {
            __extends(EditorReact, _super);
            function EditorReact() {
                _super.apply(this, arguments);
                this.pNoNeedUpdate = true;
                this.fNoFirst = false;
                this.fSelfUpdate = false;
                this.fCurrentNumber = 0;
            }
            EditorReact.prototype.fGetAreaId = function () {
                return this.fCurrentNumber.toString();
            };
            EditorReact.prototype.fSetAreaId = function () {
                this.fCurrentNumber = EditorReact.fNumber = EditorReact.fNumber + 1;
                return this.fCurrentNumber.toString();
                ;
            };
            EditorReact.prototype.pSender = function () {
                // alert("s :" + this.props.Vm.reactDataValueGet());
                //return React.DOM.div(null,
                //    React.DOM.textarea(
                //        {
                //            id: "Editor" + this.fSetAreaId(),
                //            value: this.props.Vm.reactDataValueGet()
                //        }
                //        , null));
                return React.createElement("div", null, React.createElement("textarea", {id: "Editor" + this.fSetAreaId(), value: this.props.Vm.reactDataValueGet()}));
            };
            //----------
            EditorReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
                //  var _dom = ReactDOM.findDOMNode(this);
                //   alert($(_dom).html());
                // var __this = this;
                // alert();
                //   alert("d");
                var _id = this.fGetAreaId();
                var _val = this.props.Vm.reactDataValueGet();
                var __this = this;
                utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/kindeditor/kindeditor-min.js"], function () {
                    // alert(_id);
                    // debugger;
                    var myConfig = {
                        items: null,
                        urlType: "relative",
                        width: "100%",
                        resizeType: 0,
                        autoHeightMode: true,
                        themeType: 'default',
                        useContextmenu: true,
                        filterMode: !1,
                        afterCreate: function () {
                            this.loadPlugin('autoheight'); //死变态的kindEditor,只有“autoheight”插件是需要手动加载的，其他都可以自动加载进来，靠！
                        },
                        afterChange: function () {
                            if (__this.fEditorObj && __this.fNoFirst) {
                                var _val = __this.fEditorObj.html();
                                var _reactvl = __this.props.Vm.reactDataValueGet();
                                if (_reactvl == null)
                                    _reactvl = "";
                                if (_val != _reactvl) {
                                    //alert("gb");
                                    var _ac = new EditorAction();
                                    _ac.DataValue = _val;
                                    //_ac.Obj = this.props.Obj;
                                    __this.pDispatcher(_ac);
                                    //alert(" 调用Object的设置");
                                    __this.fSelfUpdate = true;
                                    __this.props.Vm.reactDataValueSet(_val);
                                }
                            }
                            if (!__this.fNoFirst) {
                                __this.fNoFirst = true;
                            }
                        },
                        uploadJson: '/core/Uploader/UploadKindFile'
                    };
                    myConfig.items = ['cut', 'copy', 'paste', 'plainpaste', 'source', 'table', '|', 'image', 'flash', 'insertfile', 'emoticons', '|', 'about'];
                    var _editor = KindEditor.create($("#Editor" + _id), myConfig); //_jObjControl.xheditor(myConfig);
                    _editor.sync();
                    __this.fEditorObj = _editor;
                });
            };
            ;
            EditorReact.prototype.pComponentWillUnmount = function () {
                _super.prototype.pComponentWillUnmount.call(this);
                if (this.fEditorObj && this.fEditorObj.remove)
                    this.fEditorObj.remove($("#Editor" + this.fGetAreaId()));
            };
            ;
            EditorReact.prototype.pFunForceUpdate = function () {
                // super.pFunForceUpdate();
                //  alert(this.fSelfUpdate);
                if (this.fSelfUpdate) {
                    this.fSelfUpdate = false;
                }
                else {
                    // this.fSelfUpdate = true;
                    // if (this.fEditorObj.html() != this.props.Vm.reactDataValueGet()) {
                    //  alert();
                    this.fEditorObj.html(this.props.Vm.reactDataValueGet());
                }
            };
            ;
            EditorReact.fNumber = 0;
            return EditorReact;
        }(BaseColReact));
        ui.EditorReact = EditorReact;
        var EditorProps = (function (_super) {
            __extends(EditorProps, _super);
            function EditorProps() {
                _super.apply(this, arguments);
            }
            return EditorProps;
        }(BaseColProps));
        ui.EditorProps = EditorProps;
        var EditorVm = (function (_super) {
            __extends(EditorVm, _super);
            function EditorVm() {
                _super.apply(this, arguments);
                this.ReactType = EditorReact;
                this.pRegName = "编辑器控件";
            }
            EditorVm.Test = function () {
                var _bean = new EditorVm();
                _bean.initDataValue("gfgfg文本");
                // _bean.pRegName = "文本";
                // _bean.TopDom = top;
                return _bean;
            };
            return EditorVm;
        }(BaseColVm));
        ui.EditorVm = EditorVm;
        var EditorStates = (function (_super) {
            __extends(EditorStates, _super);
            function EditorStates() {
                _super.apply(this, arguments);
            }
            return EditorStates;
        }(BaseColStates));
        ui.EditorStates = EditorStates;
        iocFile.Core.Ioc.Current().RegisterType("EditorVm", BaseColVm, EditorVm);
    })(ui = exports.ui || (exports.ui = {}));
});
