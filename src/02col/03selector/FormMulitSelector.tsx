import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import formSelectot = require("./FormSelector");
import urlFile = require("./../../01core/Url");
import listPage = require("./../../04page/ListPage");
import pageView = require("./../../07data/PageView");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {

    export class FormMulitSelectorAction extends formSelectot.ui.FormSelectorAction {

    }

    export class FormMulitSelectorReact extends formSelectot.ui.FormSelectorReact<FormMulitSelectorProps, FormMulitSelectorState, FormMulitSelectorAction> implements domFile.Core.IReact {
        public state = new FormMulitSelectorState();
        public pSender(): React.ReactElement<any> {
            return super.pSender();
        }
        protected pComponentDidMount(): void {
            super.pComponentDidMount();
            
        }

        public onButtonClick() {
            super.onButtonClick();
        }

        //public SaveButtonClick() {
        //    alert(this.props.Vm.Content.getSelectKeysByListForm().toString());
        //    this.setState((s, p) => {
        //        this.props.Vm.IsChange = true;
        //        s.IsModalShow = false;
        //        p.Vm.dataValueSet(p.Vm.Content.getSelectKeysByListForm().toString());
        //        p.Vm.Text = p.Vm.Content.getSelectKeysByListForm().toString();
        //        return s;
        //    })
        //}
    }

    export class FormMulitSelectorState extends formSelectot.ui.FormSelectorState {

    }

    export class FormMulitSelectorProps extends formSelectot.ui.FormSelectorProps<FormMulitSelectorVm>
    {

    }

    export class FormMulitSelectorVm extends formSelectot.ui.FormSelectorVm {
        protected pRegName = "列表多选选控件"

        public ReactType = FormMulitSelectorReact;

 

        //public _Content = listPage.ui.ListPageVm.prototype;
         
        //public 
        public static Test(): FormMulitSelectorVm {
            var _bean = new FormMulitSelectorVm();
            _bean.Content.isSingleCheck = false;
            _bean.Content.isSelecor = true;
            _bean.ModuleXml = "module/AllControls/AllControls";
            _bean.RegName = "WorkflowDef";
            _bean.Content.IDSign = "FID";
            _bean.isSingleSelect = false;
            return _bean;
        }
    }

    iocFile.Core.Ioc.Current().RegisterType("FormMulitSelectorVm", BaseColVm, FormMulitSelectorVm);
}