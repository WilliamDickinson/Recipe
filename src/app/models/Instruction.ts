import { Timer } from './Timer';

export class Instruction{
    id:number;
    stepOrder:number;
    priorStepId:number;
    isSub:boolean;
    description:string;
    duration:number;

    constructor(id:number,stepOrder:number,priorStepId:number,isSub:boolean,description:string,duration:number){
        this.id = id;
        this.stepOrder = stepOrder;
        this.priorStepId = priorStepId;
        this.isSub = isSub;
        this.description = description;
        this.duration = duration;
    }
}