Ext.define("LumenisTraining.view.ProgressBarView", {
  extend: "Ext.Container",
  xtype: "progressbarview",
  config: {
    styleHtmlContent: true,
    padding: 0,
    width:788,
    height:22,
    padding: '20px 0',
    layout: {
      type: 'vbox',
      pack: 'center',
      align: 'center'
    },
    items: [
      {
        html: '<div style="background:#1c466b; width:788px; height:22px; position:relative; border-radius:12px"><img src="images/progressOverlay.png" style="position:absolute; top:0; left:0; z-index:1; width:788px; height:22px" class="noDropShadow noBorderRadius"/><div id="progressBar" style="background:#3b97ce; width:0px; height:22px; position:absolute; top:0; left:0; z-index:0"></div></div>'
      },
      {
        html: '0% Complete',
        style: 'color:white; font-size:15px; font-weight:bold' 
      }
    ]

  }
  
  
  });