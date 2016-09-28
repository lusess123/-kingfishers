import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import kvFile = require("./../../07data/Kv");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {
    export class StarScoreAction extends BaseColAction {
    }

    export class StarScoreReact extends BaseColReact<StarScoreProps, StarScoreStates, StarScoreAction> implements domCore.IReact {

        public onMouseOver(a: kvFile.data.PV) {
            //将在前面的星星的图片路径都替换掉
            for (var i = 0; i < parseInt(a.Value); i++) {
                this.props.Vm.ItemList[i].isSelect = true;
            }

            if (parseInt(a.Value) != this.props.Vm.ItemList.length) {
                for (var i = parseInt(a.Value); i < this.props.Vm.ItemList.length; i++) {
                    this.props.Vm.ItemList[i].isSelect = false;
                }
            }

            this.props.Vm.IsChange = true;
            this.forceUpdate();
        }

        public ulOnMouseLeave() {
            var value: string = this.props.Vm.dataValueGet();
            if (value == "0") {
                for (var i = 0; i < this.props.Vm.ItemList.length; i++) {
                    this.props.Vm.ItemList[i].isSelect = false;
                }
            }
            else {
                for (var i = 0; i < parseInt(value); i++) {
                    this.props.Vm.ItemList[i].isSelect = true;
                }

                if (value != this.props.Vm.ItemList.length.toString()) {
                    for (var i = parseInt(value); i < this.props.Vm.ItemList.length; i++) {
                        this.props.Vm.ItemList[i].isSelect = false;
                    }
                }
            }
            this.props.Vm.IsChange = true;
            this.forceUpdate();
        }

        public click(a: kvFile.data.PV) {
            this.props.Vm.dataValueSet(a.Value);
            this.forceUpdate();
        }

        public state = new StarScoreStates();

        public pSender(): React.ReactElement<any> {   
              
            return <div className="clear">
                        <ul className="nav nav-pills Hc-star-score clearfix" onMouseLeave={() => { this.ulOnMouseLeave() } }>
                            {
                            this.props.Vm.ItemList.map((a) => {
                                return <li className="nav-item" value={a.Value} >
                                    <i className={a.isSelect ? " icon-star fa fa-star" :"  icon-star-empty fa fa-star-o"} value={a.Value}
                                                 onMouseOver={() => { this.onMouseOver(a) } }
                                                 onClick={() => { this.click(a) } }
                                                 ></i>
                                    </li>
                            })
                            }
                            </ul>
                </div>
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }
    export class StarScoreVm extends BaseColVm {
        public ReactType = StarScoreReact;
        protected pRegName = "星星评分控件";
        //public offPath = "/AtawStatic/lib/03Extend/jRating/icons/star-off-big.png";
        //public onPath = "/AtawStatic/lib/03Extend/jRating/icons/star-on-big.png";
        //这是默认选择几个星星 这就是默认值咯
        public average = "0";
        //星星的长度
        public length = "5";
        //最大显示背景
        public rateMax = "";
        public ItemList: Array<kvFile.data.PV> = [];

        public static Test(num?: number): StarScoreVm {
            var bean = new StarScoreVm();
            bean.ItemList = [{ Value: "1", isSelect: false }, { Value: "2", isSelect: false },
                { Value: "3", isSelect: false }, { Value: "4", isSelect: false },
                { Value: "5", isSelect: false }]
            bean.initDataValue("0");
            return bean;
        }

        public pOnchange(val: string): boolean
        {
            var isCheck: boolean = super.pOnchange(val);
            if (isCheck) {
                this.pDataValue = val;
                for (var i = 0; i < this.ItemList.length; i++) {
                    if (val == "0") {
                        for (var i = 0; i < this.ItemList.length; i++) {
                            this.ItemList[i].isSelect = false;
                        }
                    }
                    else {
                        for (var i = 0; i < parseInt(val); i++) {
                            this.ItemList[i].isSelect = true;
                        }

                        if (val != this.ItemList.length.toString()) {
                            for (var i = parseInt(val); i < this.ItemList.length; i++) {
                                this.ItemList[i].isSelect = false;
                            }
                        }
                    }
                }
            }
            return isCheck;   
        }
    }
    export class StarScoreStates extends BaseColStates {
    }


    export class StarScoreProps extends BaseColProps<StarScoreVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("StarScoreVm", BaseColVm, StarScoreVm);
}
