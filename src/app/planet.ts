import { UrlTree } from "@angular/router";

export interface Planet {
    id:number,
    title: string;
    Masse:  string
    Durchmesser: number, //km
    Abstand_zur_Sonne: number, //km
    img: string,

}