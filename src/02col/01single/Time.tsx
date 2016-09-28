import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import domCore = domFile.Core;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {
    export class TimeAction extends BaseColAction {
    }

    export class TimeProps extends BaseColProps<TimeVm>
    {

    }

    export class TimeStates extends BaseColStates {
        //一共两个属性分和秒 默认值为当前时间的小时和分钟
        public min: number=12;
        public huor: number=22;
        
        public IsDataOK: boolean = true;//看输入的数据是否正确
        public isOpenData: boolean = false;//当文本框获得焦点的时候为ture

    }

    export class TimeVm extends BaseColVm {

        public ReactType: any = TimeReact;
        public value: string = "";
        protected pRegName = "时间控件";

        public constructor() {
            super();
        }

        public static Test(): TimeVm {
            var _bean: TimeVm = new TimeVm();

            return _bean;
        }

        protected pOnchange(val: string): boolean {
            var isCheck: boolean = super.pOnchange(val);
            if (isCheck) {
                this.pDataValue = val;
                this.value = val;
            }
            return isCheck;
        }
    }

    export class TimeReact extends BaseColReact<TimeProps, TimeStates, TimeAction> implements domCore.IReact {

        public states: TimeStates = this.initStates();
        //初始化状态
        public initStates(): TimeStates
        {
            var _bean = new TimeStates;
            var hours = new Date().getHours();
            var min = new Date().getMinutes();
            _bean.huor = hours;
            _bean.min = min;
            return _bean;
        }

        //增加数据
        public AddTimeClick(a:string)
        {
            if (a == "hour") {
                this.states.huor = this.states.huor + 1;

                if (this.states.huor == 60) {
                    this.states.huor = 0;
                }
            } else
            {
                this.states.min = this.states.min + 1;

                if (this.states.min == 60) {
                    this.states.min = 0;
                }
            }
           
          
            this.forceUpdate();
        }

        //减少数据
        public SubStrTimeClick(a:string)
        {
            
            if (a == "hour") {
                this.states.huor = this.states.huor - 1;

                if (this.states.huor == 0) {
                    this.states.huor = 59;
                }
            } else {

                this.states.min = this.states.min - 1;

                if (this.states.min == 0) {
                    this.states.min = 59;
                }}
            
            this.forceUpdate();
        }

        //将时间拼接起来
        public Timejoint():string
        {
            return this.states.huor.toString() + ":" + this.states.min.toString();
        }

        //确定键按下
        public OnButtonClick()
        {
            this.props.Vm.value = this.Timejoint();
            this.props.Vm.dataValueSet(this.props.Vm.value);
            this.states.isOpenData = false;
            this.forceUpdate();
        }

        //取消键
        public CancleClick()
        {
            this.states.isOpenData = false;
            this.forceUpdate();
        }

        //文本框获得焦点之后显示div
        public onFocusText()
        {
            this.states.isOpenData = true;
            this.forceUpdate();
        }

        public onBlueText()
        {
            this.states.isOpenData = false;
            this.forceUpdate();
        }
        public pSender(): React.ReactElement<any> {
            //var date = React.DOM.div(null,
            //    React.DOM.div(null,
            //        React.DOM.ul(null
            //            , React.DOM.li(null,
            //                React.DOM.button({ className: "btn-xs btn-primary icon-caret-up icon-large", onClick: () => { this.AddTimeClick("hour"); } }))
            //            , React.DOM.li(null, React.DOM.input({value: this.states.huor.toString() }))
            //            , React.DOM.li(null, React.DOM.button({ className: "btn-xs btn-primary icon-caret-down icon-large", onClick: () => {this.SubStrTimeClick("hour")}}))
            //        )),

            //    React.DOM.div(null,
            //        React.DOM.ul(null
            //            , React.DOM.li(null, React.DOM.button({ className: "btn-xs btn-primary icon-caret-up icon-large", onClick: () => {this.AddTimeClick("min")} }))
            //            , React.DOM.li(null, React.DOM.input({value: this.states.min.toString() }))
            //            , React.DOM.li(null, React.DOM.button({ className: "btn-xs btn-primary icon-caret-down icon-large", onClick: () => { this.SubStrTimeClick("min")} }))
            //        )),
            //    React.DOM.div(null,
            //        React.DOM.button({ value: "确定", onClick: () => { this.OnButtonClick()}}),
            //        React.DOM.button({ text: "取消", onClick: () => { this.CancleClick()}  })
            //    )
            //);
            if (this.props.Vm.dataValueGet())
            {
                this.props.Vm.value = this.props.Vm.dataValueGet();
            }

            var date = (<div className="Hc-time">
                                <ul className="nav">
                                    <li className="nav-item">
                                         <span>时：</span>
                                         <a className=" btn btn-xs btn-primary " onClick={() => { this.AddTimeClick("hour"); return false; } }><i className=" icon-plus fa fa-plus"></i></a>
                                         <input className="" value={this.states.huor.toString() }></input>
                                         <a className=" btn btn-xs btn-primary " onClick={() => { this.SubStrTimeClick("hour"); return false; } }><i className=" icon-minus fa fa-minus"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <span>分：</span>
                                        <a className="btn btn-xs btn-primary " onClick={() => { this.AddTimeClick("min"); return false; } }><i className=" icon-plus fa fa-plus"></i></a>
                                        <input  className="" value={this.states.min.toString() }></input>
                                        <a  className="btn btn-xs btn-primary " onClick={() => { this.SubStrTimeClick("min"); return false; } }><i className=" icon-minus fa fa-minus"></i></a>
                                    </li>
                                 </ul>
                             <div>
                    <button className="btn btn-xs btn-primary" value="确定" onClick={() => { this.OnButtonClick(); return false; } }>确定</button>
                    <button className="btn btn-xs btn-primary" value="取消" onClick={() => { this.CancleClick(); return false; } }>取消</button>
                                </div>
                        </div>)




            return React.DOM.div(null,
                React.DOM.input({ className:"form-control", placeholder: "请选择时间..",value: this.props.Vm.value, onFocus: () => { this.onFocusText(); return false; }})
                , this.states.isOpenData ? date : ""
            );
        }
    }


    iocFile.Core.Ioc.Current().RegisterType("TimeVm", BaseColVm, TimeVm);
} 