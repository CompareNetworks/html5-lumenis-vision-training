Ext.define("LumenisTraining.view.MedicalView", {
  extend: "Ext.Container",
  xtype: "medicalview",
  config: {
    title: "Medical Training",
    id: "medicalView",
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
          type: 'hbox',
          pack: 'center',
          align: 'center'
        },
        padding: 0,
        items: [
            {
              xtype: 'button',
              text: '<span class="number">1</span><span class="buttonTitle">Posterior Segment</span>',
              id: 'slideButtonPosteriorSegment',
              cls: 'splashButton light'
            },
            {
              xtype: 'button',
              text: '<span class="number">2</span><span class="buttonTitle">Retinal Pathologies</span>',
              id: 'slideButtonRetinalPathologies',
              cls: 'splashButton light'
            }
        ]
      },
      {
        xtype: 'container',
        layout: {
          type: 'hbox',
          pack: 'center',
          align: 'center'
        },
        padding: 0,
        items: [
            {
              xtype: 'button',
              text: '<span class="number">3</span><span class="buttonTitle wrap">Vitreoretinal Disease</span>',
              id: 'slideButtonVitrectomy',
              cls: 'splashButton light'
            },
            {
              xtype: 'button',
              text: '<span class="number">4</span><span class="buttonTitle">Anterior Segment</span>',
              id: 'slideButtonAnteriorSegment',
              cls: 'splashButton light'
            }
        ]
      },
      {
        xtype: 'container',
        layout: {
          type: 'hbox',
          pack: 'center',
          align: 'center',
        },
        padding: 0,
        items: [
            {
              xtype: 'button',
              text: '<span class="number">5</span><span class="buttonTitle">Glaucoma</span>',
              id: 'slideButtonGlaucoma',
              cls: 'splashButton light'
            },
            {
              xtype: 'button',
              text: '<span class="number">6</span><span class="buttonTitle">Cataract</span>',
              id: 'slideButtonCataract',
              cls: 'splashButton light'
            }
        ]
      },
      {
        xtype: 'progressbarview',
        id: 'medicalProgressBar'
      }
    ]

  }
  
  
  });