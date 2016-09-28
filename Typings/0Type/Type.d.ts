/// <reference path="../jquery/jquery.d.ts" />


declare class KindEditor {
    public static create(a, b): KindEditor;
    public remove($a:JQuery): void;
    public html(str?: string): string;
    public sync(): void;
}


interface IPCAS {
    (arg0?, arg1?, arg2?, arg3?, arg4?, arg5?): void;
}
declare var PCAS: IPCAS;


interface  JQuery { 
    autosize(): void;
    calendar(a:any): void;
    foundation(sign?: string): void;
    hashchange(a: Function): void;
    html5_upload(any): void;
    Jcrop(a: any, fun: Function): void;
    AtawControl();
    poshytip(a?: any);
    qtip(a?: any, b?: any);
    clear(isClear?:boolean);
    SwitchClass(c1: string, c2: string, isT: boolean);

    //-------
    AtawSnsUserCard(a: any);
    AtawSnsClubCard(a: any);
    MyDigitClock(a: any): void;

    qqFace(a:any):void;
} 

interface JQueryStatic {
    sticky(a?: string): void;
    AKjs: any;
    toJSON(a:any): string;

}

//declare class Amount {
//    public static atoc(numberValue): string;
//    public static formatValue(val): string;
//}

 interface Iatoc
{
    (numberValue: number): string;
}

interface IformatValue {
    (val: string): string;
 }

declare var atoc: Iatoc;
declare var formatValue: IformatValue;

declare class art {
    public static dialog(a:any):void;
}
