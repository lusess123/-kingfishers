import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
import baseBoxMaker = require("./BaseBoxMaker");

export module ui {

    export class RadioMaker extends baseBoxMaker.ui.BaseBoxMaker {

    }

    export class DafaultRadioMaker extends RadioMaker {

    }

    iocFile.Core.Ioc.Current().RegisterType("Radio", "IColMaker", DafaultRadioMaker);
}