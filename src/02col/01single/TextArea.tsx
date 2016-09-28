/// <reference path="../../../typings/jquery/jquery.d.ts" />

import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {
    export class TextAreaAction extends BaseColAction {

    }

    export class TextAreaReact extends BaseColReact<TextAreaProps, TextAreaStates, TextAreaAction> implements domFile.Core.IReact {

        protected pInputOnChange(e: React.FormEvent) {
            //生成action ,并且广播
            var _val = e.target["value"];
            var _ac: TextAreaAction = new TextAreaAction();
            _ac.DataValue = _val;
            this.pDispatcher(_ac);

            //调用Object的设置
            this.props.Vm.reactDataValueSet(_val);
        }

        public pSender(): React.ReactElement<any> {

            //return React.DOM.div(null, React.DOM.textarea({
            //    className:"Hg-width",
            //    ref:"textarea",
            //    value: this.props.Vm.reactDataValueGet(),

            //    onChange: (e) => { this.pInputOnChange(e) }

            //}, ""));

            return <div>
                <textarea className="Hg-width" ref="textarea"
                    value={this.props.Vm.reactDataValueGet() }
                    onChange={(e) => { this.onChangeEvent(e); } }
                    >
                </textarea>
            </div>
        }

        protected onChangeEvent(e: React.FormEvent) {
            this.props.Vm.isReadOnly ? null : this.pInputOnChange(e); return false;
        }

        protected pComponentDidMount(): void {
            super.pComponentDidMount();
            var _val = this.props.Vm.reactDataValueGet();

            var __this = this;
            utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/autosize/jquery.autosize.js"], function () {
                var _$dom = __this.fGetTextAreaDom();
                //_$dom["autosize"]();
                _$dom.autosize();
            });

        };

        private fGetTextAreaDom(): JQuery {
            var _reactObj = this.refs["textarea"];
            var _dom = ReactDOM.findDOMNode(_reactObj);
            var _$dom = $(_dom);
            return _$dom;
        }

        protected pComponentWillUnmount(): void {

            super.pComponentWillUnmount();

            this.fGetTextAreaDom().trigger("autosize.destroy");
        };
    }

    export class TextAreaProps extends BaseColProps<TextAreaVm> {

    }

    export class TextAreaStates extends BaseColStates {

    }

    export class TextAreaVm extends BaseColVm {
        public ReactType: any = TextAreaReact;
        protected pRegName = "多文本控件";
        public isReadOnly = false;
        public constructor() {
            super();

        }
        public static Test(): TextAreaVm {
            var _bean: TextAreaVm = new TextAreaVm();
            _bean.initDataValue("初始化的多文本");
            // _bean.pRegName = "文本";
            // _bean.TopDom = top;
            return _bean;

        }


    }

    iocFile.Core.Ioc.Current().RegisterType("TextAreaVm", BaseColVm, TextAreaVm);

} 