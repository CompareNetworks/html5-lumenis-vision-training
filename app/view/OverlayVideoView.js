Ext.define("LumenisTraining.view.OverlayVideoView", {
  extend: "Ext.Panel",
  xtype: "overlayvideoview",
  config: {
    title: "Overlay Video",
    id: "overlayVideoView",
    styleHtmlContent: true,
    modal: true,
    centered: true,
    hideOnMaskTap: true,
    hidden: true,
    layout: 'card',
    width: 840,
    height: 483,
    items: [
      {
        xtype: 'video',
        width: 840,
        height: 473,
        id: 'overlayVideoPlayer'
      }
    ]

  }
  
  
  });