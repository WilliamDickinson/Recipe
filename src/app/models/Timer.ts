export class Timer{
    timetotal:number;
    timeleft:number;
    timelast:number;
    ispaused:boolean;

    constructor(timetotal:number){
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
        let curTime:number = (new Date()).getTime();

        this.timeleft -= (curTime-this.timelast);
        this.timelast = curTime;
    }
}