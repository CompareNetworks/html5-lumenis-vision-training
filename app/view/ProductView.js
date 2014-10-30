Ext.define("LumenisTraining.view.ProductView", {
  extend: "Ext.Container",
  xtype: "productview",
  config: {
    title: "Product Training",
    id: "productView",
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
              text: '<span class="number">1</span><span class="buttonTitle">Photocoagulators</span>',
              id: 'slideButtonPhotocoagulators',
              cls: 'splashButton light',
              locked: false
            },
            {
              xtype: 'button',
              text: '<span class="number">2</span><span class="buttonTitle">Novus&reg; Spectra&trade;</span>',
              id: 'slideButtonNovusSpectra',
              cls: 'splashButton light x-item-disabled',
              locked: true
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
              text: '<span class="number">3</span><span class="buttonTitle">Slit Lamps</span>',
              id: 'slideButtonSlitLamp',
              cls: 'splashButton light x-item-disabled',
              locked: true
            },
            {
              xtype: 'button',
              text: '<span class="number">4</span><span class="buttonTitle">SLT</span>',
              id: 'slideButtonSLT',
              cls: 'splashButton light x-item-disabled',
              locked: true
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
              text: '<span class="number">5</span><span class="buttonTitle">YAG vs SLT</span>',
              id: 'slideButtonYAG',
              cls: 'splashButton light'
            },
            {
              xtype: 'button',
              text: '<span class="number">6</span><span class="buttonTitle">Testimonials</span>',
              id: 'slideButtonTestimonials',
              cls: 'splashButton light'
            }
        ]
      },
      {
        xtype: 'container',
        layout: {
          type: 'hbox',
          pack: 'start',
          align: 'start'
        },
        padding: 0,
        items: [
            {
              xtype: 'button',
              text: '<span class="number">7</span><span class="buttonTitle">Top Ten Reasons</span>',
              id: 'slideButtonTopTen',
              cls: 'splashButton light'
            },
        ]
      },
      {
        xtype: 'progressbarview',
        id: 'productProgressBar'
      }
    ]

  }
  
  
  });