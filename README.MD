# ClickTime Challenge : Perfect Timing

<br/>Create two web-based stopwatches (one counting up and the other counting down), in a single web page written using JavaScript. 
You may use any JavaScript library you like, but please don't use any pre-written plugin that implements a clock or stopwatch.

<br/>Your solution should include:
* input field: in which the user can specify how many seconds to count up to / down from. (We'll call this the countTarget from now on.)
* read-only stopwatch displays: one counting up from 0 to countTarget, and the other counting down from countTarget to 0.
* 2 sets of stopwatch controls: one set of controls (start/pause button and reset button) for each stopwatch.

<br/><br/>Other Requirements :-

* When the user enters a number into the input field, it resets one stopwatch to 0 and the other to countTarget.
* The stopwatches always display in days, hours, minutes, and seconds (i.e. "3 days 1 hour 2 minutes 12 seconds").
* Each stopwatch obeys its own start/pause button and reset button.
* When a stopwatch reaches its target (either 0 or countTarget depending on which direction they are counting), the stopwatch stops counting and the start/pause button becomes disabled.
