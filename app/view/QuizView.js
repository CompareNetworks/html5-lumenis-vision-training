Ext.define("LumenisTraining.view.QuizView", {
  extend: "Ext.form.Panel",
  xtype: "quizview",
  config: {
    id: "quizView",
    styleHtmlContent: true,
    fullscreen: true,
    items: [
      {
        xtype: 'container',
        layout: 'vbox',
        padding: '10px 50px',
        items: [
          {
            html: "<p>This is a descriptions.</p>"
          },
          {
              xtype: 'radiofield',
              name : 'color',
              value: 'red',
              label: 'Red'
          },
          {
              xtype: 'radiofield',
              name : 'color',
              value: 'green',
              label: 'Green'
          },
          {
              xtype: 'radiofield',
              name : 'color',
              value: 'blue',
              label: 'Blue'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        padding: '10px 50px',
        items: [
          {
              xtype: 'radiofield',
              name : 'color2',
              value: 'red',
              label: 'Red'
          },
          {
              xtype: 'radiofield',
              name : 'color2',
              value: 'green',
              label: 'Green'
          },
          {
              xtype: 'radiofield',
              name : 'color2',
              value: 'blue',
              label: 'Blue'
          }
        ]
      },
      {
        xtype: 'button',
        name: 'Submit',
        label: 'Submit',
        value: 'Submit',
        text: 'Submit'
      }
    ]
  }
  
});