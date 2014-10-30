Ext.define("LumenisTraining.view.QuizCataractView", {
  extend: "Ext.form.Panel",
  xtype: "quizcataractview",
  config: {
    id: "quizCataractView",
    cls: "quizModule",
    styleHtmlContent: true,
    fullscreen: true,
    padding: 0,
    items: [
      {
        html: "<h1>Cataract Module Quiz</h1>"
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>1. The greatest incidence of cataracts occurs as a result of?</h2>"
          },
          {
              xtype: 'radiofield',
              name : 'q1',
              value: 'a',
              label: 'Trauma'
          },
          {
              xtype: 'radiofield',
              name : 'q1',
              value: 'b',
              label: 'Diabetes'
          },
          {
              xtype: 'radiofield',
              name : 'q1',
              value: 'c',
              label: 'Age'
          },
          {
              xtype: 'radiofield',
              name : 'q1',
              value: 'd',
              label: 'Medications'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>2. Name the type of laser that is used to treat a posterior capsular haze?</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q2',
            value: 'a',
            label: 'Photocoagulator'
          },
          {
            xtype: 'radiofield',
            name : 'q2',
            value: 'b',
            label: 'Photodisruptor'
          },
          {
            xtype: 'radiofield',
            name : 'q2',
            value: 'c',
            label: 'Diode'
          },
          {
            xtype: 'radiofield',
            name : 'q2',
            value: 'd',
            label: 'Excimer'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>3. What laser procedures can be performed with an ophthalmic &ldquo;photodisruptor&rdquo; laser?</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q3',
            value: 'a',
            label: 'Trabeculoplasty'
          },
          {
            xtype: 'radiofield',
            name : 'q3',
            value: 'b',
            label: 'Iridotomy'
          },
          {
            xtype: 'radiofield',
            name : 'q3',
            value: 'c',
            label: 'Capsulotomy'
          },
          {
            xtype: 'radiofield',
            name : 'q3',
            value: 'd',
            label: '1 & 2'
          },
          {
            xtype: 'radiofield',
            name : 'q3',
            value: 'e',
            label: '2 & 3'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>4. What type of glaucoma can be managed with an ophthalmic &ldquo;photodisrutpor&rdquo; laser?  As part of the overall management; although not the sole treatment</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q4',
            value: 'a',
            label: 'Closed'
          },
          {
            xtype: 'radiofield',
            name : 'q4',
            value: 'b',
            label: 'Open'
          },
          {
            xtype: 'radiofield',
            name : 'q4',
            value: 'c',
            label: 'Pigmentary'
          },
          {
            xtype: 'radiofield',
            name : 'q4',
            value: 'd',
            label: 'Inflamatory'
          },
          {
            xtype: 'radiofield',
            name : 'q4',
            value: 'e',
            label: 'Neovascular'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>5. Why is focusing the aiming beam/treatment beam so critical when performing a YAG laser capsulotomy?</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q5',
            value: 'a',
            label: 'Pitting of IOL'
          },
          {
            xtype: 'radiofield',
            name : 'q5',
            value: 'b',
            label: 'Cracking of IOL'
          },
          {
            xtype: 'radiofield',
            name : 'q5',
            value: 'c',
            label: 'Damage to vitreous'
          },
          {
            xtype: 'radiofield',
            name : 'q5',
            value: 'd',
            label: '1 & 2'
          },
          {
            xtype: 'radiofield',
            name : 'q5',
            value: 'e',
            label: '1, 2 & 3'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>6. What function(s) does the laser contact lens serve during a capsulotomy?</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q6',
            value: 'a',
            label: 'Improves visualization'
          },
          {
            xtype: 'radiofield',
            name : 'q6',
            value: 'b',
            label: 'Stabilizes eye'
          },
          {
            xtype: 'radiofield',
            name : 'q6',
            value: 'c',
            label: 'Prevents blinking'
          },
          {
            xtype: 'radiofield',
            name : 'q6',
            value: 'd',
            label: 'Increases beam convergence'
          },
          {
            xtype: 'radiofield',
            name : 'q6',
            value: 'e',
            label: 'Decreases spot size'
          },
          {
            xtype: 'radiofield',
            name : 'q6',
            value: 'f',
            label: 'All of the above'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>7. What is/are currently the most common and convenient method to perform cataract surgery?</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q7',
            value: 'a',
            label: 'Couching'
          },
          {
            xtype: 'radiofield',
            name : 'q7',
            value: 'b',
            label: 'Intracapsular surgery'
          },
          {
            xtype: 'radiofield',
            name : 'q7',
            value: 'c',
            label: 'Extracapsular surgery'
          },
          {
            xtype: 'radiofield',
            name : 'q7',
            value: 'd',
            label: 'Phacoemulsification'
          },
          {
            xtype: 'radiofield',
            name : 'q7',
            value: 'e',
            label: '3 & 4'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>8. Can a person develop a &ldquo;true&rdquo; secondary cataract after they have had their crystaline lens removed and an IOL implanted?</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q8',
            value: 'a',
            label: 'True'
          },
          {
            xtype: 'radiofield',
            name : 'q8',
            value: 'b',
            label: 'False'
          }
        ]
      },
      {
        xtype: 'button',
        id: 'quizCataractButton',
        text: 'Done'
      }
    ]
  }
  
});