import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import domCore = domFile.Core;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import formSelectot = require("./FormSelector");
import urlFile = require("./../../01core/Url");
import pageView = require("./../../07data/PageView");
import basepage = require("./../../03form/Base/BasePage");
import viewPage = require("./../../04page/Viewpage");
import listPage = require("./../../04page/ListPage");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {

    export class FormSingleSelectorAction extends formSelectot.ui.FormSelectorAction {

    }

    export class FormSingleSelectorReact extends formSelectot.ui.FormSelectorReact<FormSingleSelectorProps, FormSingleSelectorState, FormSingleSelectorAction> implements domFile.Core.IReact {

        public state = new FormSingleSelectorState();

        public pSender(): React.ReactElement<any> {
            return super.pSender();
        }

        protected pComponentDidMount(): void {
            super.pComponentDidMount();
        }

        public onButtonClick() {
            super.onButtonClick();
        }


    }

    export class FormSingleSelectorState extends formSelectot.ui.FormSelectorState {

    }

    export class FormSingleSelectorProps extends formSelectot.ui.FormSelectorProps<FormSingleSelectorVm>
    {

    }   

    export class FormSingleSelectorVm extends formSelectot.ui.FormSelectorVm {

        protected pRegName = "单列选择器";
        public ReactType = FormSingleSelectorReact;
        public static Test(): FormSingleSelectorVm {
            var _bean = new FormSingleSelectorVm();
            var _beanReact = new FormSingleSelectorReact();
            _bean.Content.isSingleCheck = true;
            _bean.Content.isSelecor = true;
            _bean.ModuleXml = "module/workflow/workflowDef";
            _bean.RegName = "WorkflowDef";
            _bean.Content.IDSign = "WD_ID";
            _bean.Content.SingleSelectEvent = () => {
                _beanReact.SingleSelectClick(_beanReact);
            }
            _bean.isSingleSelect = true;
            return _bean;
        }

     

    }


    iocFile.Core.Ioc.Current().RegisterType("FormSingleSelectorVm", BaseColVm, FormSingleSelectorVm);
}