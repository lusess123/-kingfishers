import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
import baseUpload = require("./BaseUploadMaker");

export module ui
{
    export class SingleImageUploadMaker extends baseUpload.ui.BaseUpload
    {

    }

    export class DefaultSingleImageUploadMaker extends SingleImageUploadMaker
    {

    }

    iocFile.Core.Ioc.Current().RegisterType("SingleImageUpload", "IColMaker", DefaultSingleImageUploadMaker);
}