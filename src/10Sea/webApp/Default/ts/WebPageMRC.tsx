
import mFile = require("./TsMer");
import rFile = require("./TsRer");
import mrcFile = require("./../../BasePageMRC");
import iocFile = require("./../../../../01core/Ioc");
import iPageFile = require("./../../../core/IPage");

import pageCerFile = require("./../../BasePageCer");

import utilFile = require("./../../../../01core/Util");
export class WebPageMRC extends mrcFile.BasePageMRC<WebPageCer, mFile.TsMer, rFile.TsRer>
{
    public constructor() {
        var cer: WebPageCer = new WebPageCer();
        var mer: mFile.TsMer = new mFile.TsMer();
        var rer: rFile.TsRer = new rFile.TsRer();
        super(cer, mer, rer);
    }
    public getM(): mFile.TsMer {
        return utilFile.Core.Util.Cast<mFile.TsMer>(this.M);
    }
    public setRegName( regName:string)
    {
        if (regName.length > 3)
        {
            if (regName.substring(0, 3).toUpperCase() == "WIN") {
                regName = regName.substr(3);
                this.getM().IsWin = true;
            }
            else
            {
                if (regName.length > 5 && regName.substring(0, 5).toUpperCase() == "PANEL") {
                    regName = regName.substr(5);
                    this.getM().IsWin = true;
                }
            }
        }
        this.getM().PageName = regName;
    }
}

export class WebPageCer extends pageCerFile.BasePageCer
{
    public AppCer = null;
    public LayOutName = "";
    public getM(): mFile.TsMer {
        return utilFile.Core.Util.Cast<mFile.TsMer>(this.M);
    }
    public getR(): rFile.TsRer {
        return utilFile.Core.Util.Cast<rFile.TsRer>(this.R);
    }
    public init() {
        this.getR().initR();
    }
    public setModel(p1, p2, p3) {

       // this.getM().PageName = p1;
        this.getM().P1 = p1;
        this.getM().P2 = p2;

    };

    public loadMenu() {

        $.AKjs.AppGet().Menu.gotoMenuLoction("$" + this.getM().PageName + "$" + this.getM().P1);

    };
    public clearPage() {
        $.AKjs.AppGet().hideNavi();
        $.AKjs.AppGet().clearWindow();
    };
}


