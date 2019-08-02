import { Timer } from './Timer';

export class Instruction{
    description:string;
    option:boolean;
    timer:Timer;

    constructor(description:string,option:boolean,duration:number,timerarray:Array<Timer>){
        this.description = description;
        this.option = option;

        if(duration != null){
            this.timer = new Timer(duration);
            console.log("Timer was created");
            timerarray.push(this.timer);
            console.log(timerarray);
        }
    }
}