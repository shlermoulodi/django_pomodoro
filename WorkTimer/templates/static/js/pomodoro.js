/* A javascript application that handles setting a Promodoro Timer (https://en.wikipedia.org/wiki/Pomodoro_Technique)
 * The default timer is 25 minutes and 00 seconds.
 * You can also set a break, which is 5 minutes.
*/
var pomodoro_clock = {
    minutesObject : null,
    secondsObject : null,
    has_started : false,
    timeInterval : null,
    minutes : 0,
    seconds : 0,
    init : function(){
      // Constructor.
      var self = this;
      this.minutesObject = document.querySelector('#num_minutes');
      this.secondsObject = document.querySelector('#num_seconds');
      this.timeInterval = setInterval(function(){
        //runs every second (every 1000 milliseconds)
        self.counter.apply(self);
      }, 1000);
      //event handler for Start button
      document.querySelector('#start').onclick = function(){
        self.startPomodoroRound.apply(self);
      };

      //event handler for Break button
      document.querySelector('#break').onclick = function(){
        self.takeBreak.apply(self);
      };

      //event handler for Stop button
      document.querySelector('#stop').onclick = function(){
        self.stopClock.apply(self);
      };
    },

    resetTime : function(min, sec, is_started){
      /* Used to reset the time based on button clicks.
       * @param  {int} min  Minutes to run the timer for.
       * @param  {int} sec  Seconds to run the timer for.
       * @param  {Boolean} is_started  If the timer is started.
      */
      this.minutes = min;
      this.seconds = sec;
      this.has_started = is_started;
    },
    startPomodoroRound: function() {
      // Reset timer to 25 mins, default Pomodoro length.
      this.resetTime(25, 0, true);
    },
    takeBreak : function(){
      // Reset timer to 5 mins, default break length.
      this.resetTime(5, 0, true);
    },
    stopClock : function(){
      // Stops clock.
      this.resetTime(25, 0, false);
      this.updateHTMLObjects();
    },
    convertSingleToDouble : function(num){
    /* Right pad numbers.
     * @param  {int} num  Number to pad out.
    */
      if(num < 10) {
        return "0" + parseInt(num, 10);
      }
      return num;
    },
    updateHTMLObjects : function(){
      // Continuously update timer.
      this.minutesObject.innerHTML = this.convertSingleToDouble(this.minutes);
      this.secondsObject.innerHTML = this.convertSingleToDouble(this.seconds);
    },
    counter : function(){
      if(!this.has_started) return false;
      if(this.seconds == 0) {
        if(this.minutes == 0) {
          this.timerComplete();
          return;
        }
        this.seconds = 59;
        this.minutes--;
      } else {
        this.seconds--;
      }
      this.updateHTMLObjects();
    },
    timerComplete : function(){
      this.has_started = false;
    }
};
window.onload = function(){
  pomodoro_clock.init();
};