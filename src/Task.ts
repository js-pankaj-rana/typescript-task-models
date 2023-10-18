import { Sync } from "./Sync";
import {TaskInterface} from './TaskInterface'

export class Task {
    public sync:Sync<TaskInterface>;

    constructor(public rootUrl: string){
        this.sync = new Sync<TaskInterface>(this.rootUrl);
    }
} 