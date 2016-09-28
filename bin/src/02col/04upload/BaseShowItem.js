//import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
//import iocFile = require("./../../01core/Ioc");
//import utilFile = require("./../../01core/Util");
//export module ui {
//    export class BaseShowItemAction extends BaseColAction {
//    }
//    export class BaseShowItemReact<P extends BaseShowItemProps<BaseShowItemVm>, S extends BaseShowItemStates, A extends BaseShowItemAction> extends BaseColReact<P, S, A> implements domFile.Core.IReact {
//        protected pInputOnChange(e: React.FormEvent) {
//            //生成action ,并且广播
//            var _val = e.target["value"];
//            this.forceUpdate();
//            ////调用Object的设置
//            this.props.Vm.reactDataValueSet(_val);
//        }
//        public pSender(): React.ReactElement<any> {
//            this.pInitContent();
//            var __this = this;
//            if (!this.props.Vm.IsDetail) {
//                var _$del = null;
//                var _$JObj = this.pGetShowItemDom("ACT_FILE_ITEM");
//                var imghref = _$JObj.find(".ACT-IMAGE-HREF");
//                if (imghref.length == 0) {
//                    _$del = $("<a  href='###' class=\"ACT_DEL close\" title='删除'><i class='icon-remove'></i></a>");
//                    _$JObj.parent().addClass("upload");
//                    _$JObj.addClass("clear");
//                }
//                else {
//                    _$del = $("<a  href='###' class=\"ACT_DEL close\" title='删除'><i class='icon-trash'></i></a>");
//                }
//                _$JObj.append(_$del);
//                _$del.unbind("click").click(function () {
//                    __this.props.Vm.UploadObj.ResourceInfoList.remove(__this.props.Vm.ResourceInfo);
//                    _$JObj.remove();
//                    //__this.props.Vm.UploadObj.triggerChangeEvent();
//                });
//            }
//            this.fInitSetMainItem();
//            if (this.props.Vm.IsCover && !__this.props.Vm.IsSimple) {
//                _$JObj.find(".icon-save").css("color", "#ff0000");
//            }
//            return React.DOM.div({className:"showImage"},"showimage");
//        }
//        private fInitSetMainItem() {
//            var _$JObj = this.pGetShowItemDom("ACT_FILE_ITEM");
//            var _$dv = _$JObj.parent();
//            var __this = this;
//            if (!__this.props.Vm.IsDetail && !__this.props.Vm.IsSimple && !__this.props.Vm.IsFile) {
//                __this.props.Vm.$SetMainItem.off("click").on("click", function () {
//                    var _$dvs = _$dv.find(".ACT_FILE_ITEM");
//                    _$dvs.each(function () {
//                        //var _$item = $(this);
//                        _$dvs.find(".icon-save").removeAttr("style");
//                        _$dvs.find(".thumbnail").removeClass("active");
//                        //_$item.AtawControl().SetCover(false);
//                       this.pSetCover(false);
//                    })
//                    _$JObj.find(".icon-save").css("color", "#ff0000");
//                    __this.pSetCover(true);
//                    _$JObj.find(".thumbnail").addClass("active");
//                    alert("设置成功,请点击提交按钮确认设置!");
//                    __this.props.Vm.UploadObj.triggerChangeEvent();
//                });
//                var dsdsss = _$JObj.find(".thumbnail");
//                _$JObj.find(".thumbnail").append(this.props.Vm.$SetMainItem);
//            }
//        }
//        protected pComponentDidMount(): void {
//            super.pComponentDidMount();
//            if (this.props.Vm.ResourceInfo && this.props.Vm.ResourceInfo.IsCover) {
//                this.props.Vm.IsCover = this.props.Vm.ResourceInfo.IsCover;
//            }
//            if (this.props.Vm.UploadObj && this.props.Vm.UploadObj.IsSimple) {
//                this.props.Vm.IsSimple = true;
//            }
//            this.props.Vm.Title = this.props.Vm.ResourceInfo.FileNameTitle + this.props.Vm.ResourceInfo.ExtName + "(" + this.props.Vm.ResourceInfo.FileSizeK + "K)";
//        }
//        protected pInitContent() {
//        }
//        protected pSetCover(isCover) {
//            this.props.Vm.IsCover = isCover;
//            this.props.Vm.ResourceInfo.IsCover = isCover;
//        }
//        protected pGetShowItemDom(ref: string): JQuery {
//            var _reactObj = this.refs[ref];
//            var _dom = ReactDOM.findDOMNode(_reactObj);
//            var _$dom = $(_dom);
//            return _$dom;
//        }
//    }
//    export class BaseShowItemProps<V extends BaseShowItemVm> extends BaseColProps<V>{
//    }
//    export class BaseShowItemStates extends BaseColStates {
//    }
//    export class BaseShowItemVm extends BaseColVm {
//        public ResourceInfo = null;
//        public UploadObj = null;
//        public IsDetail = false;
//        public $Del = $("<a   class=\"ACT_DEL insearchBtn\"><span>删除</span></a>");
//        public $SetMainItem = $("<a  title='设置为封面' class=\"ACT_SET_MAIN_ITEM pull-right\"><i class='icon-save'></i></a>");
//        public Title = "";
//        public IsCover = false;
//        public IsSimple = false;
//        public IsFile = false;
//    }
//} 
