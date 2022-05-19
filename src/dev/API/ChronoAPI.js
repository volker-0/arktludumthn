let Panel = {
  window: new UI.Window({
    location: {
      x:0,
      y:110,
      width:50,
      height:200
    },
    elements: {
      "0": {type: "button",  x: -1000, y: 0, size: 1000}
    },
    drawing: [
      { type: "bitmap", x: 0, y: 0, bitmap: "button_time_stop", width: 997, height:600 }
    ]
  }),

  container: new ItemContainer(),
  
  enabled: false,

  open: function(client){
    if (!this.container.getClientContainerTypeName()) {
			this.container.setClientContainerTypeName("chronometer.ui");
		}
    this.window.setAsGameOverlay(true);
		this.container.openFor(client, "chronometer");
    /*this.container.closeFor(client);
    this.window.setContainer(this.container)
    this.container.openFor(client, this.window);*/
  },

  close: function(client){
    this.container.closeFor(client);
  },
};

ItemContainer.registerScreenFactory("chronometer.ui", function(container, name) {
  return Panel.window;
});

let TimeStop =  function(time, enabled){
  
};