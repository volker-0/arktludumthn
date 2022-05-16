var Panel = {
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
    //this.container.closeFor(client);
    this.window.setAsGameOverlay(true)
    this.container.openFor(client, this.window);
  },

  close: function(client){
    this.container.closeFor(client);
  },
};

let TimeStop =  function(time, enabled){
  
};