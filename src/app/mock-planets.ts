import { UrlTree } from "@angular/router";
import { Planet } from "./planet";

export const PLANETS: Planet[] = [

    {
    id:1, title: "Sonne",
    Masse: "330000 Erdmassen",
    Durchmesser:1400000, //km
    Abstand_zur_Sonne: 0, //km
    img: './assets/sonne.png'
    },
    {
        id:2,
    title: "Merkur",
    Masse: "0.055 Erdmassen",
    Durchmesser:4880,
    Abstand_zur_Sonne: 58000000,
    img: './assets/merkur.jpg'
    },
    {
        id:3,
    title: "Venus",
    Masse: "1 Erdmassen",
    Durchmesser:12742, //km
    Abstand_zur_Sonne: 150000000, //km
    img: './assets/venus.jpg'
    },
    {
        id:4,
    title: "Mars",
    Masse: "0.107 Erdmassen",
    Durchmesser: 6779,
    Abstand_zur_Sonne: 228000000,
    img: './assets/mars.jpg'
    },
    {
    id:5,
    title: "Jupiter",
    Masse: "318 Erdmassen",
    Durchmesser:139820,
    Abstand_zur_Sonne: 779000000,
    img: './assets/jupiter.jpg'
},
    {
        id:6,
    title: "Saturn",
    Masse: "95.16 Erdmassen",
    Durchmesser: 116460,
    Abstand_zur_Sonne: 1432000000,
    img: './assets/saturn.jpg'
    },
    {
        id:7,
    title: "Uranus",
    Masse: "14.5 Erdmassen",
    Durchmesser: 50724,
    Abstand_zur_Sonne: 2884000000,
    img: './assets/uranus.jpg'
    },
    {id:8,
    title: "Neptun",
    Masse: "17.1 Erdmassen",
    Durchmesser:49244,
    Abstand_zur_Sonne: 4495000000,
    img: './assets/neptun.jpg'
    }
];