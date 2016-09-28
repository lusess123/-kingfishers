import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
import baseUpload = require("./BaseUploadMaker");

export module ui {
    export class SingleFileUploadMaker extends baseUpload.ui.BaseUpload {

    }

    export class DefaultSingleFileUploadMaker extends SingleFileUploadMaker {

    }

    iocFile.Core.Ioc.Current().RegisterType("SingleFileUpload", "IColMaker", DefaultSingleFileUploadMaker);
}