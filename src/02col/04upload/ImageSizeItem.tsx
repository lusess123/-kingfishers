
import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {

    export class ImageSizeItemAction extends BaseColAction {
    }

    export class ImageSizeItemReact extends BaseColReact<ImageSizeItemProps, ImageSizeItemStates, ImageSizeItemAction> implements domFile.Core.IReact {

        public pSender(): React.ReactElement<any> {

            //return React.DOM.li(null,React.DOM.a({className:this.props.Vm.aClassName},this.props.Vm.aContent));
            //return React.DOM.option({
            //    value: this.props.Vm.ItemValue,
            //    key: this.props.Vm.Itemkey
            //}, this.props.Vm.ItemValue);

            return <option value={this.props.Vm.ItemValue}
                key={this.props.Vm.Itemkey}>{this.props.Vm.ItemValue}</option>

            
        }

    }

    export class ImageSizeItemProps extends BaseColProps<ImageSizeItemVm> {

    }

    export class ImageSizeItemStates extends BaseColStates {

    }

    export class ImageSizeItemVm extends BaseColVm {
        public ReactType: any = ImageSizeItemReact;       
        public aClassName: string;
        public ItemValue: string;
        public Itemkey: number;
       
    }

}


