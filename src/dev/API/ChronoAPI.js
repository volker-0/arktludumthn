class TimeStopClock{
  constructor(time){
    let click = this.window.getContent();
    Logger.Log(JSON.stringify(click.clicker))
    click.elements.btn.clicker = 
      {onClick: function(){
        TimeStop(time)}
      }
  };
  _this = this;
  window = new UI.Window({
    location: {
      x:950,
      y:225,
      width:50,
      height:50
    },
    elements: {
      btn: {type: "button", bitmap: "button_time_stop", bitmap2: "button_time_stop", x: 0, y: 0, scale: 50, clicker:{}}
    },
    drawing: []
  });

  container = new ItemContainer();
  
  time;

  open = function(client){
    if (!this.container.getClientContainerTypeName()) {
			this.container.setClientContainerTypeName("chronometer.ui");
		}
    this.window.setAsGameOverlay(true);
		this.container.openFor(client, "chronometer");
  };

  close = function(client){
    this.container.closeFor(client);
  };
};

let TimeStop =  function(time){
  runOnMainThread(function(){java.lang.Thread.currentThread().sleep(time);})
};