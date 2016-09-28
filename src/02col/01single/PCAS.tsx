import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
//import Jq = require("./../../../lib/jquery/jquery");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");

export module ui {
    export class PCASAction extends BaseColAction {

    }

    export class PCASReact extends BaseColReact<PCASProps, PCASStates, PCASAction> implements domFile.Core.IReact {

        private fProvince: string = "";
        private fCity: string = "";
        private fArea: string = "";
        private fIsOnSelectChange: boolean=false;

        private fProvinceOnChange(e) {
            //生成action ,并且广播
            var _province = e.target["value"];
            var _ac: PCASAction = new PCASAction();
            _ac.DataValue = _province;
            this.pDispatcher(_ac);

            //调用Object的设置
            var _val = _province + "-全部地市-全部地区";
            this.fGetPCASDom("pcas").val(_val);
            this.props.Vm.reactDataValueSet(_val);
        }

        private fCityOnChange(e) {
            //生成action ,并且广播
            var _city = e.target["value"];
            var _ac: PCASAction = new PCASAction();
            _ac.DataValue = _city;
            this.pDispatcher(_ac);

            //调用Object的设置
            var _val = this.fGetPCASDom("pcas").val();
            if (_val != null && _val != "") {
                var arr = _val.split("-");
                _val = arr[0]+"-"+_city+"-"+arr[2];
                this.fGetPCASDom("pcas").val(_val);
                this.props.Vm.reactDataValueSet(_val);
            }
            
        }

        private fAreaOnChange(e) {
            //生成action ,并且广播
            var _area = e.target["value"];
            var _ac: PCASAction = new PCASAction();
            _ac.DataValue = _area;
            this.pDispatcher(_ac);

            //调用Object的设置
            var _val = this.fGetPCASDom("pcas").val();
            if (_val != null && _val != "") {
                var arr = _val.split("-");
                _val = arr[0] + "-" +arr[1]+"-"+ _area;
                this.fGetPCASDom("pcas").val(_val);
                this.props.Vm.reactDataValueSet(_val);
            }
        }

        public pSender(): React.ReactElement<any> {
            super.pSender();
            var val = this.props.Vm.reactDataValueGet();

            return <div>
                        <input ref="pcas" type="hidden"></input>
                        <select ref="Province" name="province" className="Hu-pointer"
                                    style={{width:150+'px'}}
                                    onChange={(e) => { this.fIsOnSelectChange = true; this.fAreaOnChange(e);return false; }}
                              >
                            </select>

                       <select ref="City" name="city" className="Hu-pointer" 
                                style={{ width: 150 + 'px' }}
                                onChange={(e) => { this.fIsOnSelectChange = true; this.fAreaOnChange(e);return false;} }
                        >
                           </select>
                       <select ref="Area" name="area" className="Hu-pointer" 
                              style={{ width: 150 + 'px' }}
                              onChange={(e) => { this.fIsOnSelectChange = true; this.fAreaOnChange(e); return false; } }
                        >
                           </select>
                    </div>
        }

        protected pComponentDidUpdate(prevProps: PCASProps, prevState: PCASStates, prevContext: any) {
            super.pComponentDidUpdate(prevProps, prevState, prevContext);
            
            if (this.fIsOnSelectChange) {
                this.fIsOnSelectChange = false;
            } else {
                this.fSetPCAS();
            }
        }

        protected pComponentDidMount(): void {
            super.pComponentDidMount();

            this.fSetPCAS();
        };

        private fSetPCAS():void {
            var _val = this.props.Vm.reactDataValueGet();
            var arr = [];
            var __this = this;

            utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/PCAS/pcasunzip.js"], function () {
                if (_val != null && _val != "") {
                    arr = _val.split("-");
                    __this.fGetPCASDom("pcas").val(_val);
                    PCAS(__this.fGetPCASDom("Province").attr("name"), __this.fGetPCASDom("City").attr("name"), __this.fGetPCASDom("Area").attr("name"), arr[0], arr[1], arr[2]);
                    __this.fGetPCASDom("pcas").val(_val).addClass("Hu-pointer ");
                } else {
                    PCAS(__this.fGetPCASDom("Province").attr("name"), __this.fGetPCASDom("City").attr("name"), __this.fGetPCASDom("Area").attr("name"));
                    __this.fGetPCASDom("pcas").val("全国");
                }
            });
        }
        
        private fGetPCASDom(ref: string): JQuery{
            var _reactObj = this.refs[ref];
            var _dom = ReactDOM.findDOMNode(_reactObj);
            var _$dom = $(_dom);
            return _$dom;
        }
    }

    export class PCASProps extends BaseColProps<PCASVm> {

    }

    export class PCASStates extends BaseColStates {

    }

    export class PCASVm extends BaseColVm {
        public ReactType: any = PCASReact;
        protected pRegName = "省市县控件";

        public constructor() {
            super();

        }
        public static Test(): PCASVm {
            var _bean: PCASVm = new PCASVm();
            _bean.initDataValue("浙江省-杭州市-建德市");
            return _bean;

        }

    }

    iocFile.Core.Ioc.Current().RegisterType("PCASVm", BaseColVm, PCASVm);
} 