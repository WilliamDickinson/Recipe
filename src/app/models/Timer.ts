export class Timer{
    i_id:number;
    timetotal:number;
    timeleft:number;
    timelast:number;
    ispaused:boolean;

    constructor(i_id:number,timetotal:number){
        this.i_id = i_id;
        this.timetotal = timetotal;
        this.timeleft = timetotal;
        this.timelast = (new Date()).getTime();
        this.ispaused = true;
    }

    public togglePause(){
        this.ispaused = !this.ispaused;
        if(!this.ispaused){
            this.timelast = (new Date()).getTime();
        }
    }

    public updateTime(){
        if(!this.ispaused){
            let curTime:number = (new Date()).getTime();

            this.timeleft -= (curTime-this.timelast);
            this.timelast = curTime;

            if(this.timeleft <= 0){
                this.ispaused = true;
                this.timeleft = this.timetotal;
                alert("A timer has finished.");
            }
        }
    }
}