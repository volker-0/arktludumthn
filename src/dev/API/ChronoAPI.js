class TimeStopClock{
  constructor(time){
    let click = this.window.getContent();
    click.elements.btn.clicker = 
      {onClick: function(){
        TimeStop(time)}
      }
  };
  window = new UI.Window({
    location: {
      x:950,
      y:225,
      width:50,
      height:50
    },
    elements: {
      btn: {type: "button", bitmap: "button_time_stop", bitmap2: "button_time_stop_pressed", x: 0, y: 0, scale: 50, clicker:{}}
    },
    drawing: []
  });

  enabled = false;

  container = new UI.Container();

  open = function(){
    this.window.setAsGameOverlay(true);
		this.container.openAs(this.window);
  };

  close = function(){
    this.container.close();
  };
};

let TimeStop =  function(time){
  runOnMainThread(function(){java.lang.Thread.currentThread().sleep(time);})
};