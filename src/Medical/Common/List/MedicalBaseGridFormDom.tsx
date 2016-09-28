import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import thFile = require("./../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import gridRowFile = require("./MedicalBaseGridRowDom");
import rowButtonFile = require("./MedicalBaseRowButtonDom");
import singleCheckFile = require("./../../../02col/02Mulite/SingleCheckBox");


export module MedicalBaseGridFormDom {

    export class MedicalBaseGridFormDomAction extends domCore.DomAction {
    }


  
    export class MedicalBaseGridFormDomReact<P extends MedicalBaseGridFormDomProps<MedicalBaseGridFormDomVm>, S extends MedicalBaseGridFormDomStates, A extends MedicalBaseGridFormDomAction> extends domCore.DomReact<P, S, A>{
        public pSender(): React.ReactElement<any> {
            var theader = <thead className="thead-default">
                {this.initHeader() }
            </thead>
            var tbody = this.initBody();
            var table = <table className="table table-hover">{theader}{tbody}</table>;
            return <div className="Hm-table"  onScroll={(e) => { this.fun_Scroll(e); } }>{table}</div>;
        }

        private fun_Scroll(e: React.UIEvent) {
            var _$obj = $(e.target);
            this.props.Vm.ScrollAuto(_$obj.scrollLeft());
        }

        protected initHeader(): React.ReactElement<any> {
            return null;
        };

        public initBody(): React.ReactElement<any> {
            return <tbody>
                {
                    this.props.Vm.RowList.map((row, index) => {
                        return [row.intoDom(), this.props.Vm.RowButtonList[index].intoDom()];
                    })
                }</tbody>;
        };

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

        protected getThDomVM(w?: number) {
            var _ther = new thFile.Web.ThDomVm();
            if (w) {
                _ther.Width = w;
            }
            return _ther;
        }

     
    }


    export interface IMedicalBaseGridFormDomConfig {
        UniId: string;
    }

    export class MedicalBaseGridFormDomVm extends domCore.DomVm {
        public ReactType = MedicalBaseGridFormDomReact;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public RowList: gridRowFile.MedicalBaseGridRowDom.MedicalBaseGridRowDomVm[];
        public RowButtonList: rowButtonFile.MedicalBaseRowButtonDom.MedicalBaseRowButtonDomVm[];
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public FormData = [];

        public constructor(config?: IMedicalBaseGridFormDomConfig) {
            super();

        }

        public ScrollAuto(left: number) {
            this.IsAcsRelative = left > 0;
            this.LeftNum = left;
            this.forceUpdate("");
        }

    }
    export class MedicalBaseGridFormDomStates extends domCore.DomStates {
    }


    export class MedicalBaseGridFormDomProps<V extends MedicalBaseGridFormDomVm > extends domCore.DomProps<V>{
    }



}


