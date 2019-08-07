import { Instruction } from './Instruction';

export class Recipe{
    id:number;
    instructions:Array<Instruction>;

    constructor(id:number,instructions:Array<Instruction>){
        this.id = id;
        this.instructions = instructions;
        this.orderInstructions();
    }

    private orderInstructions(){
        let ia = this.instructions;
        let prevtofind = null;
        let currenti = 0;

        for(let i:number = 0;i<ia.length;i++){
            if(ia[i].previousinstruction === prevtofind){
                let element = ia[i];
                ia.splice(i,1);
                ia.splice(currenti++,0,element);
                prevtofind = element.id;
                i = prevtofind;
            }
        }
        this.instructions = ia;
    }
}