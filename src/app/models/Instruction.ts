import { Timer } from './Timer';

export class Instruction{
    id:number;
    previousinstruction:number;
    issub:boolean;
    description:string;
    timer:Timer;

    constructor(id:number,previousinstruction:number,issub:boolean,description:string,duration:number){
        this.id = id;
        this.previousinstruction = previousinstruction;
        this.issub = issub;
        this.description = description;

        if(duration === null){
            this.timer = null;
        }
        else{
            this.timer = new Timer(duration);
        }
    }
}