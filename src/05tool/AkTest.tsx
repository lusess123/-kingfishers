import domFile = require("./../01core/0Dom"); import basecolFile = require("./../02col/00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../01core/Ioc");
import utilFile = require("./../01core/Util");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module test {
    
    export class TestAction extends domFile.Core.DomAction {
       // LogList: Array<string>;
    }
    export class TestStates extends domFile.Core.DomStates {
       // LogList: Array<string>;
        IsShow: boolean = false;
    }
    export class TestReact extends domFile.Core.DomReact<TestProps, TestStates, TestAction> implements domFile.Core.IReact{

        public state: TestStates =  new TestStates();

        private fun_btn_getOri()
        {
            this.props.Vm.SetValByColObjOriValue();
        }

        private fun_btn_getColObjValue()
        {
            this.props.Vm.SetValByColObjValue();
        } 
        
        private fun_btn_setVal()
        {
            this.props.Vm.SetColVal();
        }
        private fun_btn_legal()
        {
            this.props.Vm.ControlObj.legal();
        }
        private fun_btn_clear()
        {
            this.props.Vm.LogList = [];
            this.forceUpdate();
        }
        private fun_textareaChange(e:React.FormEvent)
        {
            var _val: string = e.target["value"];
            this.props.Vm.ValTxt = _val;
            this.props.Vm.forceUpdate("");
        }

        public pSender(): React.ReactElement<any> {

            var _ul = this.props.Vm.LogList.map((a) => {

                return React.DOM.div(null, a);
            });
            var _btn = <div className="Hg-margin-t btn-group-sm">
                <button role="button" className="btn btn-sm btn-primary"
                                onClick={() => { this.fun_btn_getOri(); return false; } }
                                >获取原始值</button>
                <button role="button" className="btn btn-sm btn-success"
                                onClick={() => { this.fun_btn_getColObjValue(); return false; } }
                                >获取值</button>
                            <button role="button" className="btn btn-sm btn-primary"
                                onClick={() => { this.fun_btn_setVal(); return false; } }
                                >设置值</button>
                            <button role="button" className="btn btn-sm btn-primary"
                                onClick={() => { this.fun_btn_setVal(); return false; } }
                                >设置值</button>
                            <button role="button" className="btn btn-sm btn-primary"
                                onClick={() => { this.fun_btn_legal(); return false; } }
                                 >验证</button>
                            <button  className="btn btn-sm btn-primary">销毁</button>
                            <button  className="btn btn-sm btn-primary">重建</button>
                            <button role="button" className="btn btn-sm btn-primary"onClick={() => { this.fun_btn_clear() } }>清空日志</button>
                </div>;

            return <div className="panel">
               <div className="Hc-list-num">{this.props.children}</div>
                      <div className="Hu-pointer" onClick={() => { this.fun_PanelShow()}}>
                          <h6 className="panel-title">
                        <a  className={(this.props.Vm.IsShow ? " icon-caret-up fa fa-caret-square-o-up" : " icon-caret-down fa fa-caret-square-o-down") + "  "}>
                            { this.props.Vm.ControlObj.getRegName() + " (" + this.props.Vm.VmName + ")"}
                            </a>
                          </h6>
                      </div>
                      <div className={("Hc-list-item " + (this.props.Vm.IsShow ? " " : "hide")) }>
                          <div>{ this.props.Vm.ControlObj.intoDom() }
                            {_btn}
                       <div className="panel">
                            <textarea
                                value = {this.props.Vm.ValTxt}
                                onChange={ (e) => { this.fun_textareaChange(e);return false;}
                                }>
                                </textarea>
                       </div>
                         </div>
                            </div>
                    <ul>{_ul}</ul>
                </div>;
          
        }
        public fun_PanelShow() {
            this.props.Vm.IsShow = !this.props.Vm.IsShow;
            this.forceUpdate();
        }

    }
    export class TestVm extends domFile.Core.DomVm {
        public ReactType = TestReact;

        public IsShow : boolean;

      public ControlObj: BaseColVm;
      public LogList: Array<string> = new Array<string>();
      public ValTxt: string = "";
      public VmName: string = "";
      constructor(controlObj: BaseColVm) {
            super();
            this.ControlObj = controlObj;
            this.pRegName = "测试控件的控件";
          //  var _this = this;
            this.ControlObj.ChangeEventFun = (val: string, col: domFile.Core.DomVm) => {
                var _val = val;
                //alert(_val);
                this.LogList = this.LogList.concat("于" + new Date().toLocaleString() + "   更新了新值:  " + _val);
                this.forceUpdate("");
                return true;
            };  

      }
        public SetValByColObjOriValue() {
            var _val = this.ControlObj.getOriValue();
            //   alert(_val);
            this.ValTxt = _val;
            this.LogList = this.LogList.concat("该控件的原始值是：  " + _val);
            this.forceUpdate("");
        }
        public  SetValByColObjValue(){
            var _val = this.ControlObj.vmDataValueGet();
         //   alert(_val);
           this.ValTxt = _val;
           this.forceUpdate("");
        }

        public SetColVal() {
            this.ControlObj.vmDataValueSet(this.ValTxt);
            this.forceUpdate("");
        }
    }
    export class TestProps extends domFile.Core.DomProps< TestVm>{

    


    }
}