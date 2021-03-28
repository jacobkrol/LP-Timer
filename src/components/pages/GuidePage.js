import React from 'react';
import '../../styles/GuidePage.css';
import { Link } from 'react-router-dom';
import { FaPlay, FaPause, FaStop, FaVolumeMute, FaHourglassEnd } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';
import { RiAddBoxLine } from 'react-icons/ri';
import { BsThreeDotsVertical } from 'react-icons/bs';
import LPLogo from '../../graphics/lp-logo.png';

function HowPage() {
    return (
        <div id="how-page">
            <h1>User Guide</h1>
            <h3>General Controls</h3>
                <p>Navigate to the <Link to="/">home page</Link> at any time using the <img id="logo-tiny" src={LPLogo} alt="logo" /> in the top left corner of every page.</p>
                <p>Click <FaPlay className="button" size={12} title="play" /> or press SPACE to begin or resume the timer. Click <FaPause className="button" size={12} title="pause" /> or press SPACE to pause the timer. Click <FaStop className="button" size={12} title="stop" /> to stop and reset the timer. Refreshing the page also resets the timer.</p>
                <p><strong>Status: Off</strong> represents a new timer.</p>
                <p><strong>Status: Starting</strong> is during a user-specified delay/countdown, after which your timer will begin.</p>
                <p><strong>Status: Previewing</strong> displays during a preview of the visual (and verbal, if applicable) signals you will receive when the timer is running.</p>
                <p><strong>Status: Running</strong> means the timer is running (even if you can't see it!)</p>
                <p><strong>Status: Paused</strong> represents a timer that has started, but has been paused by the user. When it is resumed, it will continue where it was when paused.</p>
                <p> The <FaHourglassEnd title="hourglass" size={12} /> in the top-left corner of each timer serves as an additional indicator that the timer is running.</p>

            <h3>Extemporaneous Timer</h3>
                <p><strong>Duration:</strong> 7 minutes</p>
                <p><strong>Visual Signals:</strong> 5 min, 4 min, 3 min, 2 min, 1 min, 30 sec, 15 sec, 5 sec, 4 sec, 3 sec, 2 sec, 1 sec, TIME UP</p>
            <h3>Impromptu Timer</h3>
                <p><strong>Duration:</strong> 7 minutes</p>
                <p><strong>Verbal Signals:</strong> 30 sec, 1 min, 1 min 30 sec</p>
                <p><strong>Visual Signals:</strong> 5 min, 4 min, 3 min, 2 min, 1 min, 30 sec, 15 sec, 5 sec, 4 sec, 3 sec, 2 sec, 1 sec, TIME UP</p>
                <p>Click <FaVolumeMute className="button" size={12} title="mute" /> or press ENTER to mute remaining verbal signals.</p>
            <h3>Plain Timer</h3>
                <p><strong>Duration:</strong> 7 minutes</p>
                <p>This mode acts as a regular timer, allowing the user to see every second (and millisecond, if desired) as it counts down.</p>
            <h3>Save This App</h3>
                <p>You can also locally save this app on your device! It appears like a regular app, so it can be easily launched from the home screen, requires no internet connection<sup>1</sup>, and takes up very little storage space<sup>2</sup>. To save the app...</p>
                <p><strong>iOS:</strong> Click <FiShare size={15} title="share" />, and then select "Add to Home Screen <span className="no-break"><RiAddBoxLine size={15} title="add icon" />"</span></p>
                <p><strong>Android:</strong> Click <BsThreeDotsVertical size={15} title="three dots for more" />, and then select "Add to Home screen"</p>
                <p><strong>Chrome (Windows):</strong> Click <BsThreeDotsVertical size={15} title="three dots for more" />, and then select "Install LimitedPrep Timer..."</p>
                <span className="fine-print">
                    <p><sup>1</sup>&nbsp;&nbsp;Excludes updates, feedback submission, and third-party links</p>
                    <p><sup>2</sup>&nbsp;&nbsp;&lt;1.0Mb. Check the <a href="https://github.com/jacobkrol/LP-Timer/releases" target="_blank" rel="noopener noreferrer">latest release</a> for a more accurate estimate.</p>
                </span>
            <h3>More Info</h3>
                <p>To submit a bug / feature request for review, or to read about nitty-gritty things like licencing and versioning, visit the <Link to="/about">about page</Link>.</p>
        </div>
    )
}

export default HowPage;
