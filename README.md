# Limited Preparation Timer Web Application

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs) [![GitHub Release](https://img.shields.io/github/release/jacobkrol/LP-Timer.svg?style=flat)]() [![Issues](https://img.shields.io/github/issues-raw/jacobkrol/LP-Timer.svg?maxAge=25000)](https://github.com/jacobkrol/LP-Timer/issues)

A simple timer application with time signals to help the forensics community. It is available at https://kroljs.com/LP-Timer

## Endpoints

### /#/

The root contains the button panel with links through the HashRouter to all other pages on the application.

### /#/ext

The `/#/ext` page contains a timer on the extemporaneous mode. This means visual signals fire for 5 seconds each at the times indicated on the `/#/about` page.

### /#/imp

The `/#/imp` page contains a timer on the impromptu mode. This means verbal signals fire every 30 seconds for the first 90 seconds, but can be muted via the button or hotkey. Visual signals fire for 5 seconds each at the times indicated on the `/#/about` page.

### /#/timer

The `/#/timer` page contains a timer on the plain timer mode. This means every second is counted down on the timer for the user. A toggle to view milliseconds is operational, but not yet implemented for the user.

### /#/guide

The `/#/guide` page contains useful information for how the application works, including much of the same information found in this README.

### /#/about

The `/#/about` page allows for the user to submit feedback and to learn more about the app's licensing and versioning.

### /#/terms

The `/#/terms` page contains the web app's terms of use.

### /#/privacy

The `/#/privacy` page contains the web app's privacy policy.

## Other Information

### Save the App

Saving the progressive web app locally to your mobile device is an extremely convenient way to carry the app with you all the time, regardless of an internet connection! Check the [latest release](https://github.com/jacobkrol/LP-Timer/releases) for the current version size.

Read simple instructions on how to save the app at https://kroljs.com/LP-Timer/#/about.

### Offer Feedback

I want to hear from you on how to make the app better for every user! Please feel free to submit an issue directly on this page, or submit feedback easily through the form found at https://kroljs.com/LP-Timer/#/about. All form submissions on that page are emailed to me securely, and they are additionally preserved in a Heroku database for a collective review.

*Jacob Krol (c) 2020-2021*
