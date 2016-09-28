import cer = require("./../BasePageCer");
import mer = require("./WorkflowGuideMer");
import rer = require("./WorkflowGuideRer");
import util = require("./../../../01core/Util");

export class WorkflowGuideCer extends cer.BasePageCer {
    public AppCer = null;
    public WorkflowDefName = "";

    public getM(): mer.WorkflowGuideMer {
        return util.Core.Util.Cast<mer.WorkflowGuideMer>(this.M);
    }

    public getR(): rer.WorkflowGuideRer {
        return util.Core.Util.Cast<rer.WorkflowGuideRer>(this.R);
    }

    public init() {
        var _this = this;
        _this.getM().getModuleXmlPageDataM(this.WorkflowDefName, function (res) {
            if (res.type === 1 && res.guideXml) {
                _this.getR().loadModuleXmlMainR({ WorkflowDefName: _this.WorkflowDefName, GuideXml: res.guideXml, DisplayName: res.displayName });
                _this.loadMenu();
            } else {
                alert("未配置向导页");
            }

        });

    }


    public setModel(p1, p2, p3) {
        this.WorkflowDefName = p1;
    };

    public loadMenu() {
    };

    public clearPage() {
        $.AKjs.AppGet().hideNavi();
        $.AKjs.AppGet().clearWindow();
    };


}