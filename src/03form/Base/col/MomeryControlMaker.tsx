
import domFile = require("./../../../01core/0Dom");
import BaseColumn = require("./../BaseColumn");
import BaseForm = require("./../BaseForm");
import PageView = require("./../../07data/PageView");
import iocFile = require("./../../../01core/Ioc");
import kvFile = require("./../../../07data/Kv");

import baseSelectMaker = require("./BaseSelectMaker");

export module ui {
    export class MomeryControl extends baseSelectMaker.ui.BaseSelectMaker {
    }

    export class DefaultMomeryControl extends MomeryControl {

    }

    iocFile.Core.Ioc.Current().RegisterType("MomeryControl", "IColMaker", DefaultMomeryControl);

}