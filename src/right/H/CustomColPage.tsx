import domFile = require("./../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import checkFile = require("./../../02col/02Mulite/CheckBox");

export module CustomColPage {
    export class CustomColPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class CustomColPageReact extends basewedPageFile.Web.BaseWebPageReact<CustomColPageProps, CustomColPageStates, CustomColPageAction> implements domCore.IReact {

        public state = new CustomColPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                    <h4>自定义列</h4>
                    <div className="acs-form clearfix acsCustomColPanel">
                        <div>
                            <strong>可用字段</strong>
                            {this.props.Vm.CheckBox.intoDom()}
                        </div>
                        <div>
                            <strong>当前字段</strong>
                            {this.props.Vm.CheckBox1.intoDom() }
                        </div>

                    </div>

                    <div className="acsTextC acsMarginT3"><a className="button">提交</a></div>
                </div>
            
        }


        private fun_ModalClick()
        {
            this.props.Vm.IsModalShow = !this.props.Vm.IsModalShow;
            this.forceUpdate();
        }



    }
    export class CustomColPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = CustomColPageReact;

        public CheckBox: checkFile.ui.CheckBoxVm;
        public CheckBox1: checkFile.ui.CheckBoxVm;

        public IsModalShow: boolean = false;

        public constructor() {
            super();
            this.CheckBox = checkFile.ui.CheckBoxVm.Test();
            this.CheckBox1 = new checkFile.ui.CheckBoxVm;
            this.CheckBox1.ItemList.push({ Value: "1", Text: "选项1", Select: true });
            this.CheckBox1.ItemList.push({ Value: "2", Text: "选项2", Select: true });
        }
    }
    export class CustomColPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class CustomColPageProps extends basewedPageFile.Web.BaseWebPageProps<CustomColPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("CUSTOMCOLPAGE", basewedPageFile.Web.BaseWebPageVm, CustomColPageVm);

}
