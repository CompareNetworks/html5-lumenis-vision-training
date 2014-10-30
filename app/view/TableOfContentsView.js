Ext.define("LumenisTraining.view.TableOfContentsView", {
  extend: "Ext.Panel",
  xtype: "tableofcontentsview",
  config: {
    title: "Problems",
    id: "tableOfContentsView",
    styleHtmlContent: true,
    left: 0,
    padding: 10,
    modal:true,
    minWidth: '400px',
    minHeight: '340px',
    hideOnMaskTap: true,
    layout: {
      type: 'vbox',
      pack: 'center',
      align: 'center'
    },
    scrollable: true,
    cls: 'tableOfContents',
    items: [
            {
              xtype: 'button',
              text: 'Overview',
              id: 'tocButtonIntroOverview',
              cls: 'txtLink'
            },
            {
              xtype: 'button',
              text: 'Intro Video',
              id: 'tocButtonIntroVideo',
              cls: 'txtLink'
            },
            {
              xtype: 'button',
              text: 'Physiology & Anatomy',
              id: 'tocButtonPhysiologyAnatomy',
              cls: 'txtLink'
            },
            {
              xtype: 'button',
              text: 'Glaucoma',
              id: 'tocButtonGlaucoma',
              cls: 'txtLink'
            },
            {
              xtype: 'button',
              text: 'Lumenis SLT',
              id: 'tocButtonSLT',
              cls: 'txtLink'
            },
            {
              xtype: 'button',
              text: 'Lumenis Photocoagulators',
              id: 'tocButtonPhotocoagulators',
              cls: 'txtLink'
            },
            {
              xtype: 'button',
              text: 'YAG',
              id: 'tocButtonYAG',
              cls: 'txtLink'
            },
            {
              xtype: 'button',
              text: 'Slit Lamp',
              id: 'tocButtonSlitLamp',
              cls: 'txtLink'
            },
            {
              xtype: 'button',
              text: 'Competitive Landscape - Product',
              id: 'tocButtonCompetitiveLandscapeProduct',
              cls: 'txtLink'
            },
            {
              xtype: 'button',
              text: 'Interactive Video',
              id: 'tocButtonInteractiveVideo',
              cls: 'txtLink'
            },
            {
              xtype: 'button',
              text: 'SLT vs Meds',
              id: 'tocButtonAnimatedGraph',
              cls: 'txtLink'
            },
            {
              xtype: 'button',
              text: 'Competitive Landscape - Sales',
              id: 'tocButtonCompetitiveLandscapeSales',
              cls: 'txtLink'
            }
    ]
        
  }
  
  });