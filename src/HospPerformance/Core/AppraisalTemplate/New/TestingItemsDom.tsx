import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import thFile = require("./../../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;


export module TestingItemsDom {
    export class TestingItemsDomAction extends domCore.DomAction {
    }

    export class TestingItemsDomReact extends domCore.DomReact<TestingItemsDomProps, TestingItemsDomStates, TestingItemsDomAction> implements domCore.IReact {

        public state = new TestingItemsDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <p>已选项目：<a className="btn btn-sm btn-primary pull-right">添加</a></p>
                {this._initTable() }
            </div>;
        }

        public _initTable(): React.ReactElement<any> {
            var theader = <thead className="thead-default">
                {this.initHeader() }
            </thead>
            var tbody = this.initBody();

            var table = <table className="table table-striped table-bordered table-hover">{theader}{tbody}</table>;
            return <div className="table-responsive"  onScroll={(e) => { this.fun_Scroll(e); } }>{table}</div>;
                
               
        }
        private fun_Scroll(e: React.UIEvent) {
            var _$obj = $(e.target);
            this.props.Vm.ScrollAuto(_$obj.scrollLeft());
        }
        public initHeader(): React.ReactElement<any> {
            return <tr>
                <th>项目代码</th>
                <th>项目名称</th>
                <th>项目类型</th>
                <th>客观取数项目</th>
                <th>分值</th>
                <th>最大分值</th>
                <th>操作</th>
            </tr>
        };
        public initBody(): React.ReactElement<any> {
            return <tbody>
                <tr>
                    <td>saddgr</td>
                    <td>考核名称1112</td>
                    <td>普通考核</td>
                    <td></td>
                    <td>10</td>
                    <td>10</td>
                    <td><a className="text-primary">编辑</a><a className="text-danger">删除</a></td>
                </tr>
                <tr>
                    <td>saddgr</td>
                    <td>考核名称1112</td>
                    <td>普通考核</td>
                    <td></td>
                    <td>10</td>
                    <td>10</td>
                    <td><a className="text-primary">编辑</a><a className="text-danger">删除</a></td>
                </tr>
                <tr>
                    <td>saddgr</td>
                    <td>考核名称1112</td>
                    <td>普通考核</td>
                    <td></td>
                    <td>10</td>
                    <td>10</td>
                    <td><a className="text-primary">编辑</a><a className="text-danger">删除</a></td>
                </tr>
                <tr>
                    <td>saddgr</td>
                    <td>考核名称1112</td>
                    <td>普通考核</td>
                    <td></td>
                    <td>10</td>
                    <td>10</td>
                    <td><a className="text-primary">编辑</a><a className="text-danger">删除</a></td>
                </tr>
            </tbody>;
        };

        private getThDomVM(w?: number) {
            var _ther = new thFile.Web.ThDomVm();
            if (w) {
                _ther.Width = w;
            }
            return _ther;
        }


        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactTestingItemsDomVm extends domCore.DomVm {
        ScrollAuto(left: number);
    }

    export interface ITestingItemsDomConfig {


    }

    export class TestingItemsDomVm extends domCore.DomVm implements IReactTestingItemsDomVm {
        public ReactType = TestingItemsDomReact;

        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;

        public constructor(config?: ITestingItemsDomConfig) {
            super();

        }

        public ScrollAuto(left: number) {
            this.IsAcsRelative = left > 0;
            this.LeftNum = left;
            this.forceUpdate("");
        }

    }
    export class TestingItemsDomStates extends domCore.DomStates {
    }


    export class TestingItemsDomProps extends domCore.DomProps<IReactTestingItemsDomVm>{
    }



}


