import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {


    export class ThumbnailItemAction extends BaseColAction {
    }

    export class ThumbnailItemReact extends BaseColReact<ThumbnailItemProps, ThumbnailItemStates, ThumbnailItemAction> implements domFile.Core.IReact {

        public pSender(): React.ReactElement<any> {
            //var ss = JSON.stringify(this.props.Vm.divStyle);
            //alert(this.props.Vm.imgClassName+":"+ss);
            //return React.DOM.div({ className: "thumbnail", style: this.props.Vm.divStyle},
            //    React.DOM.a({ rel: "sexylightbox", target: "_blank", href: this.props.Vm.href },
            //        React.DOM.img({ className: this.props.Vm.imgClassName, style: this.props.Vm.imgStyle, src: this.props.Vm.href})),
            //    React.DOM.label({ className: "ACT-IMAGE-TITLE", title: this.props.Vm.imgTitle }, utilFile.Core.Util.InterceptStringDisplay(this.props.Vm.imgTitle,5))//,
            //    //React.DOM.a({ className: "ACT_SET_MAIN_ITEM pull-right", title: "设置为封面" },
            //    //    React.DOM.i({ className:"fa fa-save (alias)"}))
            //);

            return <div className="thumbnail" style={this.props.Vm.divStyle}>
                            <a ref="sexylightbox" target="_blank" href={this.props.Vm.href}>
                                <img className={this.props.Vm.imgClassName} style={this.props.Vm.imgStyle}
                                        src={this.props.Vm.href}
                                        >
                                        <label className="ACT-IMAGE-TITLE" title={this.props.Vm.imgTitle}>
                                            {utilFile.Core.Util.InterceptStringDisplay(this.props.Vm.imgTitle, 5)}
                                        </label>
                                    </img>
                                </a>
                            </div>
        }

    }

    export class ThumbnailItemProps extends BaseColProps<ThumbnailItemVm> {

    }

    export class ThumbnailItemStates extends BaseColStates {

    }

    export class ThumbnailItemVm extends BaseColVm {
        public ReactType: any = ThumbnailItemReact;
        public href: string;
        public imgStyle: Object;
        public divStyle: Object;
        public imgClassName: string;
        public imgsize: string;
        public imgTitle: string;
    }

}


