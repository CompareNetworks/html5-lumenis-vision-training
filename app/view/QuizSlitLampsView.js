Ext.define("LumenisTraining.view.QuizSlitLampsView", {
  extend: "Ext.form.Panel",
  xtype: "quizslitlampsview",
  config: {
    id: "quizSlitLampsView",
    cls: "quizModule",
    styleHtmlContent: true,
    fullscreen: true,
    padding: 0,
    items: [
      {
        html: "<h1>Slit Lamps Module Quiz</h1>"
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>1. When using a slit lamp, one can: </h2>"
          },
          {
              xtype: 'radiofield',
              name : 'q1',
              value: 'a',
              label: 'Focus the light to shin as a slit'
          },
          {
              xtype: 'radiofield',
              name : 'q1',
              value: 'b',
              label: 'Deliver the slit laser beam to the retina'
          },
          {
              xtype: 'radiofield',
              name : 'q1',
              value: 'c',
              label: 'Both a and b'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>2. The visualization through this type optics resembles the way the eyes focus on a close object and the image will have stereoscopic properties:</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q2',
            value: 'a',
            label: 'Parallel optics'
          },
          {
            xtype: 'radiofield',
            name : 'q2',
            value: 'b',
            label: 'Convergent optics'
          },
          {
            xtype: 'radiofield',
            name : 'q2',
            value: 'c',
            label: 'Parallel convergent optics'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>3. Stereoscopic visualization is:</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q3',
            value: 'a',
            label: '3D'
          },
          {
            xtype: 'radiofield',
            name : 'q3',
            value: 'b',
            label: 'Audio-visual'
          },
          {
            xtype: 'radiofield',
            name : 'q3',
            value: 'c',
            label: 'Double vision'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>4. This Lumenis slit lamp is a Zeiss-style slit lamp:</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q4',
            value: 'a',
            label: 'Lumenis 980'
          },
          {
            xtype: 'radiofield',
            name : 'q4',
            value: 'b',
            label: 'Lumenis 990'
          },
          {
            xtype: 'radiofield',
            name : 'q4',
            value: 'c',
            label: 'Lumenis 1000'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>5. True or False: A co-ob tube on a slit lamp allows an assistant to see the same stereoscopic view as the physician.</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q5',
            value: 'a',
            label: 'True'
          },
          {
            xtype: 'radiofield',
            name : 'q5',
            value: 'b',
            label: 'False'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>6. The InSight slit lamp is a style that is :</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q6',
            value: 'a',
            label: 'Unique to Zeiss'
          },
          {
            xtype: 'radiofield',
            name : 'q6',
            value: 'b',
            label: 'Unique to Haag Strait'
          },
          {
            xtype: 'radiofield',
            name : 'q6',
            value: 'c',
            label: 'Unique to Lumenis'
          }
        ]
      },
      {
        xtype: 'button',
        id: 'quizSlitLampsButton',
        text: 'Done'
      }
    ]
  }
  
});