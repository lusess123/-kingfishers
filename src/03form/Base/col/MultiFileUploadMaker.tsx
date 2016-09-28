import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
import baseUpload = require("./BaseUploadMaker");

export module ui {
    export class MultiFileUploadMaker extends baseUpload.ui.BaseUpload {

    }

    export class DefaultMultiFileUploadMaker extends MultiFileUploadMaker {

    }

    iocFile.Core.Ioc.Current().RegisterType("MultiFileUpload", "IColMaker", DefaultMultiFileUploadMaker);
}