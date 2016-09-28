import pageCerFile = require("./../BasePageCer");
import mFile = require("./DeskMer");
import rFile = require("./DeskRer");
import utilFile = require("./../../../01core/Util");

export class DeskCer extends pageCerFile.BasePageCer {
    public AkName = "DeskCer";
    public LayOutName = "TTV";

    public getM(): mFile.DeskMer {
        return utilFile.Core.Util.Cast<mFile.DeskMer>(this.M);
    }

    public getR(): rFile.DeskRer {
        return utilFile.Core.Util.Cast<rFile.DeskRer>(this.R);
    }

    public init() {
        var _this = this;
        _this.getR()["init"]();
        this.getM()["getPanelInfoM"](function (res) {
            _this.getR()["getData"](res);
        });
    }

    public loadPanelBoards(res) {
        this.getR()["loadRow"](0);
        for (var i = 0, j = 0, total = 12; i < res.length; i++) {
            var showtype = res[i].ShowType;
            if (showtype == 0) {
                total = total - 12;
                if (total < 0) {
                    j++;
                    total = 12;
                    this.getR()["loadRow"](j);
                }
                this.getR()["loadOnePanel"](i, j);
            }
            if (showtype == 1) {
                total = total - 3;
                if (total < 0) {
                    j++;
                    total = 9;
                    this.getR()["loadRow"](j);
                }
                this.getR()["loadThreePanel"](i, j);
            }
            if (showtype == 2) {
                total = total - 6;
                if (total < 0) {
                    j++;
                    total = 6;
                    this.getR()["loadRow"](j);
                }
                this.getR()["loadSixPanel"](i, j);
            }
            if (showtype == 3) {
                total = total - 9;
                if (total < 0) {
                    j++;
                    total = 3;
                    this.getR()["loadRow"](j);
                }
                this.getR()["loadNinePanel"](i, j);
            }
        }
    }

    public getpanelbody($dom, href) {
        var _this = this;
        this.getM().getPanelBody(href, function (res) {
            _this.getR().fillBodyData($dom, res);
        });
    }

    public refreshpanelbody($dom, href) {
        var _this = this;
        this.getM().getPanelBody(href, function (res) {
            _this.getR().refreshBodyData($dom, res);
        });
    }

    public setModel(p1, p2, p3) {
    };
    public clearPage() {
    };
    public loadMenu() {
        $.AKjs.AppGet().Menu.gotoMenuLoction("$desk$");
    };
}