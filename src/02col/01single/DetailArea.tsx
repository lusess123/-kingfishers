import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");

export module ui {
    export class DetailAreaAction extends BaseColAction {

    }

    export class DetailAreaReact extends BaseColReact<DetailAreaProps, DetailAreaStates, DetailAreaAction> implements domFile.Core.IReact {
        
        protected pInputOnChange(e: React.FormEvent) {
            //生成action ,并且广播
            var _val = e.target["value"];
            var _ac: DetailAreaAction = new DetailAreaAction();
            _ac.DataValue = _val;
            this.pDispatcher(_ac);

            //调用Object的设置
            this.props.Vm.reactDataValueSet(_val);
        }

        public pSender(): React.ReactElement<any> {

            //return React.DOM.div(null, React.DOM.textarea({
            //    ref: "detailarea",
            //    readOnly:true,
            //    value: this.props.Vm.reactDataValueGet(),
            //    onChange: (e) => { this.pInputOnChange(e) }

            //}, ""));

            return <div>
                        <textarea className="Hc-detail-area" ref="detailarea" readOnly="true"
                            value={this.props.Vm.reactDataValueGet()}
                            onChange={(e) => { this.pInputOnChange(e); return false;}}
                        >
                        </textarea>
                    </div>
        }

        protected pComponentDidMount(): void {
            super.pComponentDidMount();
            var _val = this.props.Vm.reactDataValueGet();

            var __this = this;
          utilFile.  Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/autosize/jquery.autosize.js"], function () {
              var _$dom = __this.fGetDetailAreaDom();
                //_$dom["autosize"]();
                _$dom.autosize();
            });

        };

        private fGetDetailAreaDom(): JQuery {
            var _reactObj = this.refs["detailarea"];
            var _dom = ReactDOM.findDOMNode(_reactObj);
            var _$dom = $(_dom);
            return _$dom;
        }
    }

    export class DetailAreaProps extends BaseColProps<DetailAreaVm> {

    }

    export class DetailAreaStates extends BaseColStates {

    }

    export class DetailAreaVm extends BaseColVm {
        public ReactType: any = DetailAreaReact;
        protected pRegName = "多文本详情控件";

        public constructor() {
            super();

        }
        public static Test(): DetailAreaVm {
            var _bean: DetailAreaVm = new DetailAreaVm();
            var str = "风筝象征着心灵上的救赎。一个夏天的午后，父亲生前的好友拉辛汗打电话给阿米尔，告诉了他，哈桑和阿米尔竟然是同父异母的兄弟，并给他指明了方向： “那儿有再次成为好人的路。”阿米尔最终战胜懦弱，冒着生命危险回到被塔利班占领的喀布尔去解救哈桑的儿子，将他带回美国，收为养子。这是他在成长的生命历程中，第一次主动采取行动来挽救自己曾经犯下的错误，并非逃避。";
            _bean.initDataValue(str);

            // _bean.pRegName = "文本";
            // _bean.TopDom = top;
            return _bean;

        }
    }

    iocFile.  Core.Ioc.Current().RegisterType("DetailAreaVm", BaseColVm, DetailAreaVm);
} 