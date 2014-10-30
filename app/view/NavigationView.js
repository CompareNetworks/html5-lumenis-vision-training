Ext.define("LumenisTraining.view.NavigationView", {
  extend: "Ext.Toolbar",
  xtype: "navigationview",
  config: {
    id: "navigationView",
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
        id: 'slideTitle'
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
              id: 'startButton',
              text: 'Start'
          },
          {
              xtype: 'button',
              id: 'tableOfContentsButton',
              text: 'Chapters'
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
            xtype: 'button',
            id: 'documentsButton',
            text: 'Documents',
            cls: 'documentsButton'
          } 
        ]
      },
    ]
  }
  
  });