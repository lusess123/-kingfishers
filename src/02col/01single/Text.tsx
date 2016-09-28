import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import domCore = domFile.Core;
import iocFile = require("./../../01core/Ioc");
import legalFile = require("./../../08legal/BaseLegal");
import textLegalFile = require("./../../08legal/TextLegal");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {


    export class TextAction extends BaseColAction {

    }
 
   
    export class TextReact extends BaseColReact<TextProps, TextStates, TextAction> implements domCore.IReact{
         //-----------

      

        protected pInputOnChange(e: React.FormEvent) {

            //生成action ,并且广播
             var _val = e.target["value"];
            // $ ["r"]["pdom"] = this.props;
             var _ac: TextAction = new TextAction();
             _ac.DataValue = _val;
             _ac.Vm = this.props.Vm;
             //_ac.Obj = this.props.Obj;
             this.pDispatcher(_ac);

            //调用Object的设置
             this.props.Vm.reactDataValueSet(_val);

        }



       public  pSender(): React.ReactElement<any> {
             
            //return React.DOM.div(null, React.DOM.input({
            //    value: this.props.Vm.reactDataValueGet(),
            //    onChange: (e) => { this.pInputOnChange(e) },
            //    className:"Hg-width"

            //}, ""));

           return <div>
                        <input value={this.props.Vm.reactDataValueGet() }
                               onChange={(e) => { this.pInputOnChange(e); return false; } }
                               className="Hg-width form-control "
                            >
                            </input>
                     </div>
        }

       protected getLegalMsgDom(): JQuery {
           var _dom = ReactDOM.findDOMNode(this);
           return $(_dom).find("input").parent();
       }
       protected getInputDom(): JQuery {
           var _dom = ReactDOM.findDOMNode(this);
           return $(_dom).find("input");
       }

       //protected legalSender($dom: JQuery) {
       //    $dom.find("input").addClass("acsRedBorder");
       //}
       //protected cancleLegalSender($dom: JQuery) {
       //    $dom.find("input").removeClass("acsRedBorder");
       //}
    }

    export class TextProps extends BaseColProps<TextVm> {
        
        

    }

    export class TextVm extends BaseColVm {
        public ReactType: any = TextReact;
        protected pRegName = "文本控件";

        public LegalObj: legalFile.Core.BaseLegal = new textLegalFile.Code.TextLegal();

       public constructor() {
            super();
           
        }
       public static Test(): TextVm {
            var _bean: TextVm = new TextVm();
            _bean.initDataValue("初始化的文本");
            _bean.LegalObj.Kind = "email";
            //_bean.LegalObj = new legalFile.Core.BaseLegal();
            // _bean.pRegName = "文本";
            // _bean.TopDom = top;
            return _bean;

       }

       


    }
    export class TextStates extends BaseColStates {

    }

    iocFile.Core.Ioc.Current().RegisterType("TextVm", BaseColVm, TextVm);

}


