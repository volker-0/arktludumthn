LIBRARY({
  name: "RechargeLib",
  version: 1.0,
  shared: true,
  api: "CoreEngine",
});

let RechargeLib = {
  Items: {},
  addRechargeble: function(item, rechargeTime){
    this.Items[item]= rechargeTime;
  },
};

Callback.addCallback()