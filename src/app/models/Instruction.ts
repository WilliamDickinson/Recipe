import { Timer } from './Timer';

export class Instruction{
    i_id:number;
    stepOrder:number;
    prior:number;
    isSub:boolean;
    description:string;
    duration:number;
    // timer:Timer;

    constructor(i_id:number,stepOrder:number,isSub:boolean,description:string,duration:number){
        this.i_id = i_id;
        this.stepOrder = stepOrder;
        this.isSub = isSub;
        this.description = description;
        this.duration = duration;

        // if(duration === null){
        //     this.timer = null;
        // }
        // else{
        //     this.timer = new Timer(duration);
        // }

    }
}