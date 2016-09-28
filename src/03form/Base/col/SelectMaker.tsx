import domFile = require("./../../../01core/0Dom");
import BaseColumn = require("./../BaseColumn");
import BaseForm = require("./../BaseForm");
import PageView = require("./../../07data/PageView");
import iocFile = require("./../../../01core/Ioc");
import kvFile = require("./../../../07data/Kv");

import baseSelectMaker = require("./BaseSelectMaker");

export module ui {
    export class Selector extends baseSelectMaker.ui.BaseSelectMaker
    {
    }

    export class DefaultSelector extends Selector
    {

    }

    iocFile.Core.Ioc.Current().RegisterType("Selector", "IColMaker", DefaultSelector);

}