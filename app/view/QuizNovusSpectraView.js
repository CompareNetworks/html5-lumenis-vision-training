Ext.define("LumenisTraining.view.QuizNovusSpectraView", {
  extend: "Ext.form.Panel",
  xtype: "quiznovusspectraview",
  config: {
    id: "quizNovusSpectraView",
    cls: "quizModule",
    styleHtmlContent: true,
    fullscreen: true,
    padding: 0,
    items: [
      {
        html: "<h1>Novus Spectra Module Quiz</h1>"
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>1. The Novus Spectra delivers:</h2>"
          },
          {
              xtype: 'radiofield',
              name : 'q1',
              value: 'a',
              label: 'The spectrum of laser'
          },
          {
              xtype: 'radiofield',
              name : 'q1',
              value: 'b',
              label: 'Green laser'
          },
          {
              xtype: 'radiofield',
              name : 'q1',
              value: 'c',
              label: 'True yellow laser'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>2. Spectra DP is:</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q2',
            value: 'a',
            label: 'Data process capable'
          },
          {
            xtype: 'radiofield',
            name : 'q2',
            value: 'b',
            label: 'Dual port'
          },
          {
            xtype: 'radiofield',
            name : 'q2',
            value: 'c',
            label: 'Dio-phased'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>3. Ophthalmic applications for the Novus Spectra include:</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q3',
            value: 'a',
            label: 'Retinal photocoagulation'
          },
          {
            xtype: 'radiofield',
            name : 'q3',
            value: 'b',
            label: 'Trabeculoplasty'
          },
          {
            xtype: 'radiofield',
            name : 'q3',
            value: 'c',
            label: 'Iridotomy'
          },
          {
            xtype: 'radiofield',
            name : 'q3',
            value: 'd',
            label: 'Both b and c'
          },
          {
            xtype: 'radiofield',
            name : 'q3',
            value: 'e',
            label: 'a, b and c'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>4. The delivery devices that are compatible with Novus Spectra include:</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q4',
            value: 'a',
            label: 'LumeProbe'
          },
          {
            xtype: 'radiofield',
            name : 'q4',
            value: 'b',
            label: 'LIO Heine'
          },
          {
            xtype: 'radiofield',
            name : 'q4',
            value: 'c',
            label: 'LIO Keeler'
          },
          {
            xtype: 'radiofield',
            name : 'q4',
            value: 'd',
            label: 'All of the above'
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
        id: 'quizNovusSpectraButton',
        text: 'Done'
      }
    ]
  }
  
});