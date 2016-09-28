import domFile = require("./../../01core/0Dom");
import basecolFile = require("./../00core/baseCol");
import BaseColReact = basecolFile.Core.BaseColReact;
import BaseColVm = basecolFile.Core.BaseColVm;
import BaseColProps = basecolFile.Core.BaseColProps;
import BaseColStates = basecolFile.Core.BaseColStates;
import BaseColAction = basecolFile.Core.BaseColAction;
import domCore = domFile.Core;
import iocFile = require("./../../01core/Ioc");
import legalFile = require("./../../08legal/BaseLegal");
import textLegalFile = require("./../../08legal/TextLegal");
import React = require("react");
import ReactDOM = require("react-dom");
import baseForm = require("./../../03form/Base/BaseForm");
import pageView = require("./../../07data/PageView");
import maker = require("./../../03form/Base/col/JsonFormMaker");
import urlFile = require("./../../01core/Url");
import post = require("./../../01core/post");


export module ui {


    export class JsonFormAction extends BaseColAction {

    }


    export class JsonFormReact extends BaseColReact<JsonFormProps, JsonFormStates, JsonFormAction> implements domCore.IReact {


        public pSender(): React.ReactElement<any> {
            return <div>
                {this._tDom(this.props.Vm.Form) }
            </div>
        }

    }

    export class JsonFormProps extends BaseColProps<JsonFormVm> {

    }

    export class JsonFormVm extends BaseColVm {
        public ReactType: any = JsonFormReact;
        protected pRegName = "Json表单控件";
        public Form: baseForm.ui.BaseFormVm;
        public PageView: pageView.data.IPageView;

        public constructor() {
            super();
        }

        public initForm(val: string) {
            if (this.PageView) {
                var _maker = new maker.ui.JsonFormMaker();
                _maker.Val = val;
                this.initDataValue(val);
                _maker.BaseColVm = this;
                _maker.initForm();
            }
        }

        public vmDataValueSet(val: string) {
            super.vmDataValueSet(val);
            this.initForm(val);
        }

        public vmDataValueGet() {
            var isRes: boolean = true;
            var isChange: boolean = false;
            var sdList = new Array<post.Post.ISubmitData>();
            var form = this.Form;
            if (form.RowObjList) {
                form.RowObjList.forEach((row) => {
                    row.ColumnObjList.forEach((col) => {
                        if (col.ControlObj) {
                            var vl = col.ControlObj.vmDataValueGet();
                            if (col.ControlObj.getRegName() != "") {
                                sdList.push({
                                    SubmitSign: col.SubmitSign,
                                    DataValue: vl
                                });
                            }
                        }
                    })
                });
            }
            var ds = post.Post.Util.createDataSet(sdList);
            return JSON.stringify(ds);
        }

        public static Test(): JsonFormVm {
            var _maker = new maker.ui.JsonFormMaker();
            var _bean: JsonFormVm = new JsonFormVm();
            var _testVal = "{\"medical_base_Anomaly_Item_Condition\": [{\"FID\":\"\", \"GreaterThan\":\"1\", \"LessThan\":\"\", \"Unit\":\"\", \"IsPositive\":false, \"KeyWord\":\"\"}, {\"FID\":\"\", \"GreaterThan\":\"2\", \"LessThan\":\"\", \"Unit\":\"\", \"IsPositive\":false, \"KeyWord\":\"\"}]}";
            _maker.Val = _testVal;
            _bean.initDataValue(_testVal);
            urlFile.Core.AkPost("/module/Module", {
                xml: "module/Medical/Base/medical_base_Anomaly_Item_Condition",
                pageStyle: "Detail"
            }, (data) => {
                _bean.PageView = data;
                _maker.BaseColVm = _bean;
                _maker.initForm();
                _bean.forceUpdate("");
            });
            return _bean;

        }


    }
    export class JsonFormStates extends BaseColStates {

    }

    iocFile.Core.Ioc.Current().RegisterType("JsonFormVm", BaseColVm, JsonFormVm);

}


