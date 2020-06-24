import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            t: {
                min: 7,
                sec: 0,
                ms: 1000,
                status: "off" //off, running, paused
            },
            lastTime: (new Date()).getTime(),
            end: false,
            mode: this.props.mode,
            verbals: true
        }
    }


    tUpdate() {
        var timeup = false;
        var timeDif = (new Date()).getTime() - this.state.lastTime;
		this.state.t.ms -= timeDif;
		this.state.lastTime = (new Date()).getTime();
		if(this.state.t.ms <= 0) {
			this.state.t.sec--;
			this.state.t.ms += 1000;

			//IMP Verbal Cues
			if(this.state.mode == 3 && this.state.verbals) {
				if(this.state.t.min==6 && this.state.t.sec==30) {
					var audio = new Audio('data/Imp 30 Seconds Verbal.wav');
					audio.play();
				}
				if(this.state.t.min==6 && this.state.t.sec==0) {
					var audio = new Audio('data/Imp 1 Minute Verbal.wav');
					audio.play();
				}
				if(this.state.t.min==5 && this.state.t.sec==30) {
					var audio = new Audio('data/Imp 130 Warning Verbal.wav');
					audio.play();
					this.state.verbals = false;
				}
			}

		}
        if(this.state.t.sec<0){
            this.state.t.sec = 59;
            this.state.t.min--;
        }
        if(this.state.t.min<0){
            this.state.t.sec = 0;
            this.state.t.min = 0;
			this.state.t.ms = 0;
        }
        if(this.state.t.min+this.state.t.sec==0){
			this.state.t.ms = 0;
            timeup = true;
        }

        return timeup;
    }

    tUpdateOver() {
        var timeDif = (new Date()).getTime() - this.state.lastTime;
		this.state.t.ms += timeDif;
		this.state.lastTime = (new Date()).getTime();
		if(this.state.t.ms >= 1000) {
			this.state.t.sec++;
			this.state.t.ms -= 1000;
		}
		if(this.state.t.sec > 59) {
			this.state.t.sec = 0;
			this.state.t.min++;
		}
		if(this.state.t.min > 9) {
			this.state.t.min = 9;
			this.state.t.sec = 59;
		}
    }

    render() {
        return (
            <p>Timer App Instance</p>
        )
    }
}

export default Timer;
