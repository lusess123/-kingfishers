export interface IRegistRoute
{
    RegName: string,
    Src : string 
}

export interface UrlRedirect
{
    From: string,
    To:string 
}


export var RouteData: IRegistRoute[] = [
   
];

export var UrlRedirectData: UrlRedirect[] = [
    { From:"$$module/BiDa/business/bd_PayInfo.xml" ,To:""}
];