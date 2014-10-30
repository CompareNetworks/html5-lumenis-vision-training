Ext.application({
  name: "LumenisTraining",
  controllers: ["MainController"],
  views: [
    "NavigationView",
    "ModuleView", 
    "ContentView", 
    "TableOfContentsView", 
    "DocumentsView", 
    "SplashView",
    /*slide decks*/
    //intro section
    "IntroView",
    //medical training section
    "MedicalView",
    "PosteriorSegmentView",
    "RetinalPathologiesView",
    "VitrectomyView",
    "AnteriorSegmentView",
    "GlaucomaView",
    "CataractView",
    //product training section
    "ProductView",
    "PhotocoagulatorsView",
    "NovusSpectraView",
    "SLTView",
    "YAGView",
    "SlitLampView",
    "TestimonialsView",
    "TopTenView",
    //sales strategy & training section - no content yet
    "SalesView",
    //helper views
    "QuizCataractView",
    "QuizSlitLampsView",
    "QuizNovusSpectraView",
    "QuizPhotocoagulatorsView",
    "QuizSelectaView",
    "ProgressBarView",
    //overlay video
    "OverlayVideoView"
  ],

  models: [
    "Progress"
  ],
  stores: [
    "ProgressStore"
  ],
 
  launch: function () {

     Ext.create('Ext.Container', {
         fullscreen: true,
         layout: 'fit',
         items: [
             {
               xtype: "navigationview"
             },
             {
               xtype: "moduleview"
             },
             {
               //content nested in content view as cards
               xtype: "contentview"
             },
             //hidden modal container for overlay videos
             {
                xtype: "overlayvideoview"
             }
         ]
     });

     //the previous container fits over the whole screen, obscuring this one until it's prompted by buttons
     Ext.create('Ext.Container', {
      fullscreen: false,
      layout: 'hbox',
      items: [
        {
          xtype: 'tableofcontentsview'
        }
      ]
     });

     //the previous container fits over the whole screen, obscuring this one until it's prompted by buttons
     Ext.create('Ext.Container', {
      fullscreen: false,
      layout: 'hbox',
      items: [
        {
          xtype: 'documentsview'
        }
      ]
     });


    macs.initApi(function(result) {
        //alert("Found macs module api. Api level is " + result.apiLevel);
    });
   
  }

});