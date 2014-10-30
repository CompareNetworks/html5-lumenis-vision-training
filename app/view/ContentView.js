Ext.define("LumenisTraining.view.ContentView", {
  extend: "Ext.Container",
  xtype: "contentview",
  id: "contentView",
  config: {
    layout: "card",

    items: [
      {
        xtype: "splashview"
      },
      {
        xtype: "medicalview"
      },
      {
        xtype: "productview"
      },
      {
        xtype: "salesview"
      },
      //content
      {
        xtype: "introview"
      }
      ]
    
  }
  });