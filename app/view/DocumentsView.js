Ext.define("LumenisTraining.view.DocumentsView", {
  extend: "Ext.Panel",
  xtype: "documentsview",
  config: {
    title: "Documents",
    id: "documentsView",
    styleHtmlContent: true,
    left: 0,
    padding: 10,
    modal:true,
    hideOnMaskTap: true
    //items added dynamically with controller
        
  }
  
  });