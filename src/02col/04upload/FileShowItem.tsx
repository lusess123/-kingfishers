import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {

    export class FileShowItemAction extends BaseColAction {

    }

    export class FileShowItemReact extends BaseColReact<FileShowItemProps, FileShowItemStates, FileShowItemAction> implements domFile.Core.IReact {

        private fDeleteOnClick(e) {
            
            this.props.Vm.UploadObj.ShowItemList.splice(this.props.Vm.itemIndex, 1);
            this.props.Vm.UploadObj.ResourceInfoList.splice(this.props.Vm.itemIndex, 1);

            var _resStr = JSON.stringify({
                CoverIndex: this.props.Vm.UploadObj.CoverIndex,
                ResourceInfoList: this.props.Vm.UploadObj.ResourceInfoList
            });

            this.props.Vm.UploadObj.dataValueSet(_resStr);

            this.props.Vm.UploadObj.ShowItemList.forEach((x) => {
                x.IsChange = true;
            });
            this.forceUpdate();
        }

        public pSender(): React.ReactElement<any> {
            this.props.Vm.Title = this.props.Vm.ResourceInfo.FileNameTitle + this.props.Vm.ResourceInfo.ExtName + "(" + this.props.Vm.ResourceInfo.FileSizeK + "K)";
            //return React.DOM.div({ ref: "fileItem", className: "acsUpLoad-result-href" },
            //    React.DOM.a({ target: "_blank", href: this.props.Vm.ResourceInfo.HttpPath }, this.props.Vm.Title),
            //    this.props.Vm.IsDetail ? null : React.DOM.i({ className: "fa fa-close", onClick: (e) => { this.fDeleteOnClick(e) } }));

            return <div ref="fileItem">
                        <a target="_blank" href={this.props.Vm.ResourceInfo.HttpPath }>
                            {this.props.Vm.Title}
                         </a>
                            {  this.props.Vm.IsDetail ? null : <i className="icon-remove fa fa-close"
                    onClick={(e) => { this.fDeleteOnClick(e); return false;  }}></i> }
                    </div>
        }
    }

    export class FileShowItemProps extends BaseColProps<FileShowItemVm>{

    }

    export class FileShowItemStates extends BaseColStates {

    }

    export class FileShowItemVm extends BaseColVm {
        public ReactType: any = FileShowItemReact;

        public ResourceInfo = null;
        public UploadObj = null;
        public Title = "";
        public itemIndex = 0;
        public IsDetail = false;
    }


}