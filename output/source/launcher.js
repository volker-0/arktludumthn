ModAPI.addAPICallback("KernelExtension", function(api) {
  if(
      typeof api.getKEXVersionCode === "function" &&
      api.getKEXVersionCode() >= 300
  ) {
      Launch({ KEX: api });
  }
});