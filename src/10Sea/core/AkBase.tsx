export class AkBase {
    public AkName = "AkBase";

   public dispose() {
        for (var _pro in this) {

            this[_pro] = null;
            delete (this[_pro]);
        }
    };
}