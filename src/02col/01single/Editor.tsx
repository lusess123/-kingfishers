import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {


    export class EditorAction extends BaseColAction {

    }


    export class EditorReact extends BaseColReact<EditorProps, EditorStates, EditorAction> implements domFile.Core.IReact {

        protected pNoNeedUpdate: boolean = true;
        private fNoFirst: boolean = false;
        private fEditorObj: KindEditor;
        private fSelfUpdate:boolean = false;
        private static fNumber:number = 0; 
        private fCurrentNumber: number = 0; 
        private fGetAreaId()
        {
            return this.fCurrentNumber.toString();
        }
        private fSetAreaId() {
            this.fCurrentNumber = EditorReact.fNumber = EditorReact.fNumber + 1;
            return this.fCurrentNumber.toString();;
            
        }

        public pSender(): React.ReactElement<any> {
           // alert("s :" + this.props.Vm.reactDataValueGet());
            //return React.DOM.div(null,
            //    React.DOM.textarea(
            //        {
            //            id: "Editor" + this.fSetAreaId(),
            //            value: this.props.Vm.reactDataValueGet()
            //        }
            //        , null));
            return <div>
                        <textarea id={"Editor" + this.fSetAreaId() }
                                   value={this.props.Vm.reactDataValueGet() }
                          >
                        </textarea>
                    </div>
        }

        //----------
        protected pComponentDidMount(): void {
            super.pComponentDidMount();
          //  var _dom = ReactDOM.findDOMNode(this);
         //   alert($(_dom).html());
           
           // var __this = this;
           // alert();
         //   alert("d");
            var _id = this.fGetAreaId();
            var _val = this.props.Vm.reactDataValueGet();
          
            var __this = this;
          utilFile.  Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/kindeditor/kindeditor-min.js"], function () {
               // alert(_id);
               // debugger;
                var myConfig = {
                    items: null,
                    urlType: "relative"
                    , width: "100%"
                // , height: 100
                    , resizeType: 0
                    , autoHeightMode: true
                    , themeType: 'default'
                    , useContextmenu: true,
                    filterMode: !1,
                     afterCreate: function () {
                        this.loadPlugin('autoheight');  //死变态的kindEditor,只有“autoheight”插件是需要手动加载的，其他都可以自动加载进来，靠！
                    },
                     afterChange: function () {
                         
                        if (__this.fEditorObj && __this.fNoFirst) {
                            var _val: string = __this.fEditorObj.html();
                            var _reactvl = __this.props.Vm.reactDataValueGet();
                            if (_reactvl == null) _reactvl = "";
                            if (_val != _reactvl)
                        {
                            //alert("gb");
                            var _ac: EditorAction = new EditorAction();
                            _ac.DataValue = _val;
                            //_ac.Obj = this.props.Obj;
                            __this.pDispatcher(_ac);

                            //alert(" 调用Object的设置");
                            __this.fSelfUpdate = true;
                            __this.props.Vm.reactDataValueSet(_val);
                            }
                            // $ ["r"]["pdom"] = this.props;
                         //  _val =  Core.Util.StringToHex(_val);
                            
                         }
                        if (!__this.fNoFirst) {
                            __this.fNoFirst = true;
                        }
                    },
                    uploadJson: '/core/Uploader/UploadKindFile'
                };
                myConfig.items = ['cut', 'copy', 'paste', 'plainpaste', 'source', 'table', '|', 'image', 'flash', 'insertfile', 'emoticons', '|', 'about'];
                var _editor:KindEditor = KindEditor.create($("#Editor" + _id), myConfig); //_jObjControl.xheditor(myConfig);
              
                _editor.sync();

                __this.fEditorObj = _editor;

            });

        };
        protected  pComponentWillUnmount(): void {

            super.pComponentWillUnmount();
            if (this.fEditorObj && this.fEditorObj.remove)
            this.fEditorObj.remove($("#Editor"+ this.fGetAreaId()));
        };

        protected pFunForceUpdate() {
           // super.pFunForceUpdate();
          //  alert(this.fSelfUpdate);
            if (this.fSelfUpdate) {
                this.fSelfUpdate = false;
            // alert(this.fSelfUpdate);
                //$["vv"] = this;
            }
            else {
               // this.fSelfUpdate = true;
               // if (this.fEditorObj.html() != this.props.Vm.reactDataValueGet()) {
                  //  alert();
                    this.fEditorObj.html(this.props.Vm.reactDataValueGet());
               // }
                
            }

        };

       
    }


    export class EditorProps extends BaseColProps<EditorVm> {



    }

    export class EditorVm extends BaseColVm {
        public ReactType: any = EditorReact;
        protected pRegName = "编辑器控件";
        public static Test(): EditorVm {
            var _bean: EditorVm = new EditorVm();
            _bean.initDataValue("gfgfg文本");
            // _bean.pRegName = "文本";
            // _bean.TopDom = top;
            return _bean;

        }

    }

    export class EditorStates extends BaseColStates {
      
    }

  iocFile.Core.Ioc.Current().RegisterType("EditorVm", BaseColVm, EditorVm);
} 