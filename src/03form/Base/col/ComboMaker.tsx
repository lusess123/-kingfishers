import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
import baseBoxMaker = require("./BaseBoxMaker");


export module ui {

    export class ComboMaker extends baseBoxMaker.ui.BaseBoxMaker {

    }

    export class DafaultComboMaker extends ComboMaker {

    }

    iocFile.Core.Ioc.Current().RegisterType("Combo", "IColMaker", DafaultComboMaker);
}