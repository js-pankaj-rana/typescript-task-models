import { Sync } from "./Sync";
import { UserInterface } from "./UserInterface";


export class User {
    public sync:Sync<UserInterface>;
    constructor(public url: string){
        this.sync = new Sync(this.url)
    }
}