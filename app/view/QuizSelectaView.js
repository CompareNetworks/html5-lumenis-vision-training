Ext.define("LumenisTraining.view.QuizSelectaView", {
  extend: "Ext.form.Panel",
  xtype: "quizselectaview",
  config: {
    id: "quizSelectaView",
    cls: "quizModule",
    styleHtmlContent: true,
    fullscreen: true,
    padding: 0,
    items: [
      {
        html: "<h1>Lumenis SLT Quiz Module</h1>"
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>1. True or False: Selective Laser Trabeculoplasty (SLT) and the Selecta II are FDA cleared for the reduction of Intra-Ocular Pressure (IOP) with open angle glaucoma</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q1',
            value: 'a',
            label: 'True'
          },
          {
            xtype: 'radiofield',
            name : 'q1',
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
            html: "<h2>2. True or False: SLT fairs best (i.e. optimal clinical outcomes achieved) when used as primary therapy in newly diagnosed patients</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q2',
            value: 'a',
            label: 'True'
          },
          {
            xtype: 'radiofield',
            name : 'q2',
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
            html: "<h2>3. Successful IOP reduction following the application of SLT has also been reported in patients with:</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q3',
            value: 'a',
            label: 'Ocular hypertension'
          },
          {
            xtype: 'radiofield',
            name : 'q3',
            value: 'b',
            label: 'Normal tension glaucoma'
          },
          {
            xtype: 'radiofield',
            name : 'q3',
            value: 'c',
            label: 'and in secondary glaucomas (i.e. Pseudo exfoliaiton, pigmentary or steroid induced glaucomas)'
          },
          {
            xtype: 'radiofield',
            name : 'q3',
            value: 'd',
            label: 'One and three'
          },
          {
            xtype: 'radiofield',
            name : 'q3',
            value: 'e',
            label: 'One, two aqnd three'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>4. Selective laser trabeculoplasty and patient selection:</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q4',
            value: 'a',
            label: 'Effective results can be achieved as adjunctive and replacement therapy'
          },
          {
            xtype: 'radiofield',
            name : 'q4',
            value: 'b',
            label: 'SLT fairs best (i.e. optimal clinical outcomes achieved) when used as primary therapy in newly diagnosed patients'
          },
          {
            xtype: 'radiofield',
            name : 'q4',
            value: 'c',
            label: 'Success rates appear to be higher when initial baseline IOP is relatively high'
          },
          {
            xtype: 'radiofield',
            name : 'q4',
            value: 'd',
            label: 'Optimal clinical outcomes achieved when following the more aggressive treatment protocol of 360° (100 pulses) versus 180° (50 pulses)'
          },
          {
            xtype: 'radiofield',
            name : 'q4',
            value: 'e',
            label: 'One, two and three'
          },
          {
            xtype: 'radiofield',
            name : 'q4',
            value: 'e',
            label: 'All of above'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>5. Although there are minimal observable side effects resulting from SLT treatment; some of these can be:</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q5',
            value: 'a',
            label: 'Mild discomfort during the procedure and tender eyes'
          },
          {
            xtype: 'radiofield',
            name : 'q5',
            value: 'b',
            label: 'Perhaps mild photophobia, for 2-3 days'
          },
          {
            xtype: 'radiofield',
            name : 'q5',
            value: 'c',
            label: 'In a small percentage of cases (<10%) some postoperative increase in IOP has been observed, usually appearing within the first 24 hours and disappearing within a further 24 hours'
          },
          {
            xtype: 'radiofield',
            name : 'q5',
            value: 'd',
            label: 'All of the above'
          },
          {
            xtype: 'radiofield',
            name : 'q5',
            value: 'e',
            label: 'None of the above'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>6. Follow up after SLT laser treatment is recommened to occur?</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q6',
            value: 'a',
            label: 'On a case by case basis: unique risk and/or patient accessibility to health-care provider'
          },
          {
            xtype: 'radiofield',
            name : 'q6',
            value: 'b',
            label: 'One hour post therapy to check for IOP level'
          },
          {
            xtype: 'radiofield',
            name : 'q6',
            value: 'c',
            label: 'Two weeks; six weeks; three months; and six months following therapy'
          },
          {
            xtype: 'radiofield',
            name : 'q6',
            value: 'd',
            label: 'Two and three'
          },
          {
            xtype: 'radiofield',
            name : 'q6',
            value: 'e',
            label: 'One, two and three'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>7. SLT fairs best (i.e. optimal clinical outcomes achieved) when used as primary therapy in newly diagnosed patients</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q7',
            value: 'a',
            label: 'True'
          },
          {
            xtype: 'radiofield',
            name : 'q7',
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
            html: "<h2>8. Successful IOP reduction following the application of SLT has also been reported in patients with:</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q8',
            value: 'a',
            label: 'Ocular hypertension'
          },
          {
            xtype: 'radiofield',
            name : 'q8',
            value: 'b',
            label: 'Normal tension glaucoma'
          },
          {
            xtype: 'radiofield',
            name : 'q8',
            value: 'c',
            label: 'and in secondary glaucomas (i.e. Pseudo exfoliaiton, pigmentary or steroid induced glaucomas)'
          },
          {
            xtype: 'radiofield',
            name : 'q8',
            value: 'd',
            label: 'One and three'
          },
          {
            xtype: 'radiofield',
            name : 'q8',
            value: 'e',
            label: 'All of the above'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>9. Although there are minimal observable side effects resulting from SLT treatment; some of these can be:</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q9',
            value: 'a',
            label: 'Mild discomfort during the procedure and tender eyes'
          },
          {
            xtype: 'radiofield',
            name : 'q9',
            value: 'b',
            label: 'Perhaps mild photophobia, for 2-3 days'
          },
          {
            xtype: 'radiofield',
            name : 'q9',
            value: 'c',
            label: 'In a small percentage of cases (<10%) some postoperative increase in IOP has been observed, usually appearing within the first 24 hours and disappearing within a further 24 hours'
          },
          {
            xtype: 'radiofield',
            name : 'q9',
            value: 'd',
            label: 'Appearing within the first 24 hours and disappearing within a further 24 hours'
          },
          {
            xtype: 'radiofield',
            name : 'q9',
            value: 'e',
            label: 'None of the above'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'vbox',
        items: [
          {
            html: "<h2>10. Follow up after SLT laser treatment is recommened to occur?</h2>"
          },
          {
            xtype: 'radiofield',
            name : 'q10',
            value: 'a',
            label: 'On a case by case basis: unique risk and/or patient accessibility to health-care providers'
          },
          {
            xtype: 'radiofield',
            name : 'q10',
            value: 'b',
            label: 'One hour post therapy to check for IOP level'
          },
          {
            xtype: 'radiofield',
            name : 'q10',
            value: 'c',
            label: 'Two weeks; six weeks; three months; and six months following therapy'
          },
          {
            xtype: 'radiofield',
            name : 'q10',
            value: 'd',
            label: 'Two and three'
          },
          {
            xtype: 'radiofield',
            name : 'q10',
            value: 'e',
            label: 'One, two and three'
          }
        ]
      },
      {
        xtype: 'button',
        id: 'quizSelectaButton',
        text: 'Done'
      }
    ]
  }
  
});