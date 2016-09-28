
export interface IPage {
    setModel(p1, p2, p3):void;

    loadMain($dom: JQuery): void;

    loadLeft($dom: JQuery): void;

    loadRight($dom: JQuery): void;

    loadMenu($dom: JQuery): void;

    clearPage($dom: JQuery): void;

    loadLayOut(): void;

    init($dom: JQuery): void;

}

export class PageFace implements IPage
{
    setModel(p1, p2, p3): void { }

    loadMain($dom: JQuery): void { }

    loadLeft($dom: JQuery): void { }

    loadRight($dom: JQuery): void { }

    loadMenu($dom: JQuery): void { }

    clearPage($dom: JQuery): void { }

    loadLayOut(): void { }
    init($dom: JQuery): void { }
}