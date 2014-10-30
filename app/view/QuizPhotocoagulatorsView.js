Ext.define("LumenisTraining.view.QuizPhotocoagulatorsView", {
  extend: "Ext.form.Panel",
  xtype: "quizphotocoagulatorsview",
  config: {
    id: "quizPhotocoagulatorsView",
    cls: "quizModule",
    styleHtmlContent: true,
    fullscreen: true,
    padding: 0,
    items: [
      {
        html: "<h1>Photocoagulators Module Quiz</h1>"
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>1. With CaseSaver mode:</h2>"
          },
          {
              xtype: 'radiofield',
              name : 'q1',
              value: 'a',
              label: 'Physician can record the results of the treatment'
          },
          {
              xtype: 'radiofield',
              name : 'q1',
              value: 'b',
              label: 'Physician can call up the parameters of the previous treatment'
          },
          {
              xtype: 'radiofield',
              name : 'q1',
              value: 'c',
              label: 'Physician can switch to a different wavelength if one does not work'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>2. ClearView<sup>&trade;</sup> filter:</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q2',
            value: 'a',
            label: 'Eliminates color distortion'
          },
          {
            xtype: 'radiofield',
            name : 'q2',
            value: 'b',
            label: 'Brightens the physician&rsquo;s view'
          },
          {
            xtype: 'radiofield',
            name : 'q2',
            value: 'c',
            label: 'Optimizes the white light transmission'
          },
          {
            xtype: 'radiofield',
            name : 'q2',
            value: 'd',
            label: 'All of the above'
          }
        ]
      },
      //nn make into check boxes
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>3. On a Vision One laser, the FC port is for the connection of:</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q3',
            value: 'a',
            label: 'Lumenis Laser links'
          },
          {
            xtype: 'radiofield',
            name : 'q3',
            value: 'b',
            label: 'Lumenis Insight slit lamp'
          },
          {
            xtype: 'radiofield',
            name : 'q3',
            value: 'c',
            label: 'LumeProbes'
          },
          {
            xtype: 'radiofield',
            name : 'q3',
            value: 'd',
            label: 'LIO Keeler'
          },
          {
            xtype: 'radiofield',
            name : 'q3',
            value: 'e',
            label: 'a and b'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>4. On Vision One, the SMA port is for:</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q4',
            value: 'a',
            label: 'Improved power retention'
          },
          {
            xtype: 'radiofield',
            name : 'q4',
            value: 'b',
            label: 'Scanning Mode Attachment'
          },
          {
            xtype: 'radiofield',
            name : 'q4',
            value: 'c',
            label: 'Endoprobes'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>5. What is NOT a benefit of Vision One?</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q5',
            value: 'a',
            label: 'It is modular'
          },
          {
            xtype: 'radiofield',
            name : 'q5',
            value: 'b',
            label: 'Yellow 561nm wavelength can be added as a field upgrade'
          },
          {
            xtype: 'radiofield',
            name : 'q5',
            value: 'c',
            label: 'It is compatible with on-axis style slit lamp'
          },
          {
            xtype: 'radiofield',
            name : 'q5',
            value: 'd',
            label: 'It is compatible with InSight slit lamp'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>6. Which statement is true?</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q6',
            value: 'a',
            label: 'SmartFiber<sup>&trade;</sup> technology senses and identifies the delivery device connected to the port'
          },
          {
            xtype: 'radiofield',
            name : 'q6',
            value: 'b',
            label: 'SmartFiber<sup>&trade;</sup> technology identifies if a delivery device or accessory is installed incorrectly'
          },
          {
            xtype: 'radiofield',
            name : 'q6',
            value: 'c',
            label: 'Neither a or b'
          },
          {
            xtype: 'radiofield',
            name : 'q6',
            value: 'd',
            label: 'Both a and b'
          }
        ]
      },
      {
        xtype: 'button',
        id: 'quizPhotocoagulatorsButton',
        text: 'Done'
      }
    ]
  }
  
});