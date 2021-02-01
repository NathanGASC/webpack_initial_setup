export class User{
    id:number;
    static lastId:number = 0;
    name:string;

    constructor(name:string){
        this.id = User.lastId++;
        this.name = name;
    }
}