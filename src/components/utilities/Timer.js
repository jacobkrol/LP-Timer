import React from 'react';
import {
    FaPlay,
    FaPause,
    FaStop,
    FaVolumeMute,
    FaEye,
    FaHourglass,
    FaHourglassStart,
    FaHourglassHalf,
    FaHourglassEnd
} from 'react-icons/fa';
import '../../styles/Timer.css';
import Verbal30 from '../../audio/30-seconds-verbal.wav';
import Verbal60 from '../../audio/60-seconds-verbal.wav';
import Verbal90 from '../../audio/90-seconds-verbal.wav';

// ---- PROPS ----
// props.mode (req.) = "imp" "ext" "none" ["custom"] for timer mode
// props.min (req.) = integer representing number of minutes
// props.showMS (opt.) = default false, boolean

class Timer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            startT: 0,              //time stamp of timer start
            delayT: 0,              //time stamp of delay start
            previewT: 0,            //time stamp of preview start
            pauseT: 0,              //time stamp of most recent pause
            pauseSum: 0,            //sum of ms spent on pause
            updateInterval: null,   //holder for timer dom interval
            status: "off",          //off, running, paused, starting, previewing
            signalText: null,       //string of hand signals
            isOvertime: false,      //boolean flagging overtime
            isMuted: true,          //boolean to mute verbals
            playVerbal: 0,          //int 0,30,60,90 for last verbal given
            hourglass: 0,           //0 stopped, 1 - 3 moving
            delaySignals: false,    //override to toggle signal display
            previewMeta: null       //meta text for previewing
        };
    }

    componentDidMount() {
        //listen for hotkeys
        document.addEventListener("keydown",this.handleKeyPush);
        //unmute impromptu mode
        if(this.props.mode === "imp") this.setState({isMuted: false});
        //font debugging
        if(this.props.mode === "test") this.setState({signalText: "30 sec"});
    }

    componentWillUnmount() {
        //clear timer interval if exists
        if(this.state.updateInterval) {
            clearInterval(this.state.updateInterval);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        //if reaching new 30 sec interval &&
        //not muted
        if(this.state.playVerbal !== prevState.playVerbal && !this.state.isMuted) {
            let verbal;
            switch(this.state.playVerbal) {
                case 0:
                    break;
                case 30:
                    verbal = Verbal30;
                    break;
                case 60:
                    verbal = Verbal60;
                    break;
                case 90:
                    verbal = Verbal90;
                    this.setState({isMuted: true});
                    break;
                default:
                    break;
            }
            if(verbal) {
                this.player.src = verbal;
                this.player.play()
                    .catch(error => {
                        //catch playback error
                    });
            }
        }
    }

    startTimer = () => {
        let newStatus = undefined;
        //if timer has not yet started and has delay...
        if(this.state.status === "off" && this.props.delay > 0) {
            //start delay timer
            this.setState({
                delayT: (new Date()).getTime(),
                updateInterval: setInterval(this.updateDelay, 10),
                delaySignals: true
            });
            newStatus = "starting";
        //if timer has not yet started and no delay or delay has ended...
        } else if(["off","starting"].includes(this.state.status)) {
            //clear delay timer and start real timer
            clearInterval(this.state.updateInterval);
            this.setState({
                startT: (new Date()).getTime(),
                updateInterval: setInterval(this.updateTimer, 10),
                delaySignals: false
            });
            newStatus = "running";
        //if timer is being resumed...
        } else if(this.state.status === "paused") {
            //update sum of ms spent on pause
            this.setState({pauseSum: this.state.pauseSum+(new Date()).getTime()-this.state.pauseT});
            newStatus = "running";
        }

        //update timer status and print to DOM
        if(newStatus) {
            this.setState({status: newStatus}, () => {
                document.getElementById("timer-status").innerText = this.state.status[0].toUpperCase()+this.state.status.substr(1);
            });
        }

        // document.getElementById("timer-anim-fill").className = "run";
    }

    startPreview = () => {
        if(this.state.status === "off") {
            this.setState({
                status: "previewing",
                updateInterval: setInterval(this.updatePreview, 10),
                previewT: (new Date()).getTime()
            }, () => {
                document.getElementById("timer-status").innerText = this.state.status[0].toUpperCase()+this.state.status.substr(1);
            });
        }
    }

    pauseTimer = () => {
        //mark pause time mark &
        //update timer status and print to DOM
        this.setState({
            pauseT: (new Date()).getTime(),
            status: "paused",
            hourglass: 0
        }, () => {
            document.getElementById("timer-status").innerText = this.state.status[0].toUpperCase()+this.state.status.substr(1);
        });
        // document.getElementById("timer-anim-fill").className = "";
    }

    updateDelay = () => {
        const now = (new Date()).getTime();
        let sec;

        if(this.state.status === "starting") {
            sec = Math.ceil((this.props.delay*1000-(now-this.state.delayT))/1000);
            this.setState({signalText: sec});
            if(sec === 0) {
                this.setState({signalText: null});
                this.startTimer();
            }
        }
    }

    updatePreview = () => {
        if(this.state.status === "previewing") {
            const now = (new Date()).getTime();
            const ms = now-this.state.previewT;

            const verbalPreviews = [
                {
                    action: () => this.setState({previewMeta: "During prep, you will hear..."}),
                    duration: 2500
                },
                {
                    action: () => this.setState({previewMeta: null, playVerbal: 30}),
                    duration: 2000
                },
                {
                    action: () => this.setState({playVerbal: 60}),
                    duration: 2000
                },
                {
                    action: () => this.setState({playVerbal: 90}),
                    duration: 2000
                }
            ];
            const handPreviews = [
                {
                    action: () => this.setState({previewMeta: "While speaking, you will receive..."}),
                    duration: 2500
                },
                {
                    action: () => this.setState({previewMeta: null, signalText: "5 min"}),
                    duration: 1000
                },
                {
                    action: () => this.setState({signalText: "4 min"}),
                    duration: 1000
                },
                {
                    action: () => this.setState({signalText: "3 min"}),
                    duration: 1000
                },
                {
                    action: () => this.setState({signalText: "2 min"}),
                    duration: 1000
                },
                {
                    action: () => this.setState({signalText: "1 min"}),
                    duration: 1000
                },
                {
                    action: () => this.setState({signalText: "30 sec"}),
                    duration: 1000
                },
                {
                    action: () => this.setState({signalText: "15 sec"}),
                    duration: 1000
                },
                {
                    action: () => this.setState({signalText: "5 sec"}),
                    duration: 1000
                },
                {
                    action: () => this.setState({signalText: "4 sec"}),
                    duration: 1000
                },
                {
                    action: () => this.setState({signalText: "3 sec"}),
                    duration: 1000
                },
                {
                    action: () => this.setState({signalText: "2 sec"}),
                    duration: 1000
                },
                {
                    action: () => this.setState({signalText: "1 sec"}),
                    duration: 1000
                },
                {
                    action: () => this.setState({signalText: "TIME UP"}),
                    duration: 2000
                }
            ];
            const verbals = this.props.mode === "imp" ? verbalPreviews.concat(handPreviews) : handPreviews;
            let t=0;
            for(let i=0; i<verbals.length; i++) {
                //find sum of ms up to this verbal
                t += verbals[i].duration;
                //execute first verbal not exceeded
                if(ms < t) {
                    verbals[i].action();
                    break;
                }
                //if no new verbal to execute
                if(i === verbals.length-1) {
                    this.stopTimer();
                }
            }
        }
    }

    updateTimer = () => {
        //initialize values for calculation
        const now = (new Date()).getTime();
        let min, sec, ms;

        //update DOM with time remaining
        if(this.state.status === "running") {
            //calculate time remaining
            min = Math.floor((this.props.min*60*1000-(now-this.state.startT-this.state.pauseSum))/60/1000);
            sec = 61-Math.ceil((now-this.state.startT-this.state.pauseSum)/1000%60);
            if(sec === 60) { min++; sec=0 }
            sec = sec < 10 ? "0"+sec : sec;
            ms = 1000-Math.ceil((now-this.state.startT-this.state.pauseSum)%1000);
            ms = ms < 100 ? ms < 10 ? '00'+ms : '0'+ms : ms;

            //correct calculation if overtime
            if(min<0) {
                min = "+"+Math.abs(min+1);
                sec = 60-sec;
                sec = sec < 10 ? "0"+sec : sec;
                ms = 1000-ms;
                ms = Number(ms) > 999 ? '0' : Number(ms) < 100 ? Number(ms) < 10 ? `00${ms}` : `0${ms}` : ms;
            }

            const hourglassVal = Math.floor((now-this.state.startT-this.state.pauseSum)/750)%3+1;
            this.setState({hourglass: hourglassVal});

            if(this.props.mode==="none") {
                //print updated values to DOM
                document.getElementById("timer-display-min").innerText = min;
                document.getElementById("timer-display-sec").innerText = sec;
                if(this.props.showMS) document.getElementById("timer-display-ms").innerText = ms;
            } else {
                //set time signals
                if(!this.state.isOvertime) {
                    //verbal signals
                    if(Number(min) === this.props.min-1 && Number(sec) === 30) {
                        //trigger 30 second verbal
                        this.setState({playVerbal: 30});
                    } else if(Number(min) === this.props.min-1 && Number(sec) === 0) {
                        //trigger 60 second verbal
                        this.setState({playVerbal: 60});
                    } else if(Number(min) === this.props.min-2 && Number(sec) === 30) {
                        //trigger 90 second verbal
                        this.setState({playVerbal: 90});
                    }

                    //hand signals
                    if(Number(min) < 6 && Number(min) > 0 && Number(sec) === 0 && this.state.signalText === null) {
                        //whole minute signals
                        this.setState({signalText: Number(min)+" min"});
                    } else if(Number(min) < 5 && Number(sec) === 55 && this.state.signalText !== null) {
                        //hide after 5 seconds
                        this.setState({signalText: null});
                    } else if(Number(min) === 0 && [30,15,5,4,3,2,1].includes(Number(sec))) {
                        //30, 15, last 5 signals
                        this.setState({signalText: Number(sec)+" sec"});
                    } else if(Number(min) === 0 && [25,10].includes(Number(sec)) && this.state.signalText !== null) {
                        //hide after 5 seconds
                        this.setState({signalText: null});
                    } else if(Number(min) === 0 && Number(sec) === 0) {
                        //time up signal, flag overtime
                        this.setState({signalText: "TIME UP", isOvertime: true});
                    }
                }
            }

        }
    }

    stopTimer = () => {
        //cancel timer interval to avoid filling main thread
        clearInterval(this.state.updateInterval);
        //clear signal override
        this.setState({delaySignals: false}, () => {
            //clear timer display
            if(this.props.mode === "none") {
                document.getElementById("timer-display-min").innerText = this.props.min;
                document.getElementById("timer-display-sec").innerText = '00';
                if(this.props.showMS) document.getElementById("timer-display-ms").innerText = '000';
            } else {
                document.getElementById("timer-display-signal").innerText = null;
            }
        });
        //unmute if in impromptu mode
        if(this.props.mode === "imp") this.setState({isMuted: false});
        //clear all state values &
        //update timer status and print to DOM
        this.setState({
            startT: 0,
            pauseT: 0,
            pauseSum: 0,
            updateInterval: null,
            status: "off",
            hourglass: 0,
            previewMeta: null
        }, () => {
            document.getElementById("timer-status").innerText = this.state.status[0].toUpperCase()+this.state.status.substr(1);
        });
        // document.getElementById("timer-anim-fill").className = "";
    }

    handleKeyPush = (evt) => {
        switch(evt.keyCode) {
            case 32:
                //space bar
                this.state.status === "running" ? this.pauseTimer() : this.startTimer();
                break;
            case 13:
                //enter key
                if(this.state.isMuted === false) this.setState({isMuted: true});
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div id="timer-container">
                <audio ref={ref => this.player = ref} />
                <div id="timer-control-panel">
                    <p id="timer-status-container">Status: <span id="timer-status">Off</span></p>
                    <div>
                        {["running", "starting"].includes(this.state.status)
                            ? <FaPause id="pause-button" style={this.state.delaySignals ? {cursor: "not-allowed"} : {}} onClick={this.state.status === "running" ? this.pauseTimer : null} title="pause" size={30} />
                            : <FaPlay id="play-button" onClick={this.startTimer} title="play" size={30} />
                        }
                        <FaStop id="stop-button" onClick={this.stopTimer} title="stop" size={30} />
                        {!this.state.isMuted
                            ? <FaVolumeMute id="mute-button" onClick={() => this.setState({isMuted: true})} title="mute" size={30} />
                            : null
                        }
                        {["imp","ext"].includes(this.props.mode)
                            ? <FaEye id="preview-button" onClick={this.startPreview} title="preview signals" size={30} />
                            : null
                        }
                    </div>
                    <div id="timer-tip-panel">
                        <p>{this.state.delaySignals 
                            ? "Starting timer with delay..."
                            : this.state.status === "previewing"
                            ? "Previewing time signals..."
                            : `Press SPACE to ${this.state.status === "running" 
                                ? "pause"
                                : this.state.status === "off"
                                ? "start"
                                : this.state.status === "paused"
                                ? "resume"
                                : "[error]"}.`}</p>
                        <p>{this.state.isMuted ? null : "Press ENTER to mute remaining verbal signals."}</p>
                    </div>
                </div>
                <div id="timer-display">
                    {/* <div id="timer-anim-box">
                        <div id="timer-anim-fill"></div>
                    </div> */}
                    {this.state.hourglass === 0
                        ? <FaHourglass className="timer-anim" title="idle" size={30} />
                        : this.state.hourglass === 1
                        ? <FaHourglassStart className="timer-anim" title="running" size={30} />
                        : this.state.hourglass === 2
                        ? <FaHourglassHalf className="timer-anim" title="running" size={30} />
                        : <FaHourglassEnd className="timer-anim" title="running" size={30} />
                    }
                    <div id="timer-text">
                        {this.state.previewMeta
                            ?
                            <div id="timer-preview-overlay">
                                <p id="timer-preview-meta">{this.state.previewMeta}</p>
                            </div>
                        : null}
                        {this.props.mode === "none" && !this.state.delaySignals
                            ? this.props.showMS
                                ? <p><span id="timer-display-min">{this.props.min}</span><span id="timer-display-sec">00</span><span id="timer-display-ms">000</span></p>
                                : <p><span id="timer-display-min">{this.props.min}</span><span id="timer-display-sec">00</span></p>
                            : <p><span id="timer-display-signal">{this.state.signalText}</span></p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Timer;
