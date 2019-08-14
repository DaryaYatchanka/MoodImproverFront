export class Mood {
    name: string;
    submoods: Mood[];
    color:string;

    constructor(name:string, color:string = "primary") {
        this.name = name;
        this.color = color;
    }
}
