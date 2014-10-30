Ext.define("LumenisTraining.view.SalesView", {
  extend: "Ext.Container",
  xtype: "salesview",
  config: {
    title: "Sales & Strategy Training",
    id: "salesView",
    styleHtmlContent: true,
    padding: 0,
    style: 'background:#276397',
    layout: {
      type: 'vbox',
      pack: 'center',
      align: 'center'
    },
    items: [
      {
        xtype: 'container',
        layout: {
          type: 'vbox',
          pack: 'center',
          align: 'center'
        },
        padding: 0,
        items: [
        /*
            {
              xtype: 'button',
              text: 'Physiology & Anatomy',
              id: 'slideButtonPhysiologyAnatomy',
              cls: 'splashButton light'
            },
            */
            {
              html: "<h1 style='color:white; font-size:30px'>Under Construction</h1>"
            }
        ]
      }
    ]

  }
  
  
  });