Ext.define("LumenisTraining.view.ModuleView", {
  extend: "Ext.Toolbar",
  xtype: "moduleview",
  config: {
    id: "moduleView",
    title: null,
    docked: 'top',
    hidden: true,
    layout: {
      type: 'hbox',
      pack: 'start',
      align: 'center'
    },
    items: [
      {
        xtype: 'container',
        layout: 'hbox',
        padding: 0,
        margin:0,
        flex: 1,
        id: 'moduleTitle'
      },
      {
        xtype: 'container',
        layout: {
          type: 'hbox',
          pack: 'center',
          align: 'center'
        },
        padding: 0,
        margin:0,
        flex: 1,
        items: [
          {
              xtype: 'button',
              id: 'homeButton',
              text: 'Home'
          }
        ]
      },
      {
        xtype: 'container',
        layout: {
          type: 'hbox',
          pack: 'end',
          align: 'center'
        },
        margin: 0,
        padding: 0,
        flex: 1,
        items: [
          {
            html: ""
          } 
        ]
      },
    ]
  }
  
  });