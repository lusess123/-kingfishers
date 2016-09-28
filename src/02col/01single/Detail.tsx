import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {


    export class DetailAction extends BaseColAction {

    }


    export class DetailReact extends BaseColReact<DetailProps, DetailStates, DetailAction> implements domFile.Core.IReact {


        public pSender(): React.ReactElement<any> {
            var _val = this.props.Vm.reactDataValueGet();
            if (_val== "" || _val == null || (_val.trim && _val.trim() == "")) {
                _val = "(♘)";
            }
           
            return <div
                onDragStart ={
            (e) => {
               // e.preventDefault();
                    // e.dataTransfer.setData("sdom", $(ev.target));
                window["tempObj"] = $(e.target);
                window["temp"] = $(e.target).html();
                }
                }
                onDrop={
            (e) => {
                e.preventDefault();
                window["tempObj"].html($(e.target).html());
                $(e.target).html(window["temp"]);
                $(e.target).removeClass("Hs-orange");
                }
                }
                onDragOver={
            (e) => {
                e.preventDefault();
                $(e.target).addClass("Hs-orange");
                }
                }
                onDragLeave ={
            (e) => {
                e.preventDefault();
                $(e.target).removeClass("Hs-orange");
                }
                } 
                draggable={true}
                dangerouslySetInnerHTML={{ __html: _val }}></div>;
        }

        protected pComponentDidMount() {
          //  alert(1);
            super.pComponentDidMount();

        }
    }

    export class DetailProps extends BaseColProps<DetailVm> {



    }

    export class DetailVm extends BaseColVm {
        public ReactType: any = DetailReact;
        protected pRegName = "详细控件";

        public constructor() {
            super();

        }
        public static Test(): DetailVm {
            var _bean: DetailVm = new DetailVm();
            _bean.initDataValue("(空)");
           
            return _bean;

        }

    }
    export class DetailStates extends BaseColStates {

    }

   iocFile. Core.Ioc.Current().RegisterType("DetailVm", BaseColVm, DetailVm);
}


