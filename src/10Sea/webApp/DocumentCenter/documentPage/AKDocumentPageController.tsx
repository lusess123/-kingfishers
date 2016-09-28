import akcerFile = require("./../../../core/mcrv/AkBaseController");
import akrerFile = require("./AKDocumentPageRenderer");
import pageCerFile = require("./../../BasePageCer");
import utilFile = require("./../../../../01core/Util");
import akmFile = require("./AKDocumentPageModel");
export class AKDocumentPageController extends akcerFile.AkBaseController {
    public getR(): akrerFile.AKDocumentPageRenderer {
        return utilFile.Core.Util.Cast<akrerFile.AKDocumentPageRenderer>(this.R);
    }
    public getM(): akmFile.AKDocumentPageModel {
        return utilFile.Core.Util.Cast<akmFile.AKDocumentPageModel>(this.M);
    }
    public AkName = "AkBaseController-DocumentPage";
        public initC = function () {
            this.getR().initR();
        }
        //public initialize(config, renderer, model) {
        //    //me.superclass.initialize.call(this, config);
        //}
        public constructor() {
            super();
        }
        
        public getWithinPageC(option) {
            var _this = this;
            var ds:any = {};
            if (option && option.paramObj && option.paramObj.ds) {
                ds = option.paramObj.ds;
            }
            var postData = $.extend({}, { xml: option.xml, ds: $.toJSON(ds), pageStyle: option.pageStyle }, option.paramObj.additionData)

            _this.getM().getWithinPageM(postData, function (res) {
                if (res.ExtData) {
                    res.ExtData.PageState = option.param;
                } else {
                    res.ExtData = { PageState: option.param };
                }
                _this.getR().creategetWithinPageR(res);
            })
        }
}