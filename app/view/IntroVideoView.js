Ext.define("LumenisTraining.view.IntroVideoView", {
  extend: "Ext.Carousel",
  xtype: "introvideoview",
  config: {
    title: "Intro Video",
    id: "introVideoView",
    styleHtmlContent: true,
    documents: [],
    items: [
        {
          xtype: 'container',
          layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'
          },
          padding: 0,
          cls: "sixUp lightGrey",
          documents: [],
          items: [
            {
              html: '<h1>Problems</h1>',
            },
            {
              xtype: 'container',
              layout: {
                type: 'hbox',
                pack: 'center',
                align: 'start'
              },
              width: '100%',
              items: [
                {
                  html: '<img src="images/safety-slide2-1.jpg" width="258"/><h2>Limited breadth of capabilities</h2>',
                  flex: 1
                },
                {
                  html: '<img src="images/safety-slide2-2.jpg" width="258"/><h2>Limited hemostasis capability thorn prick</h2>',
                  flex: 1
                }
              ]
            },
            {
              xtype: 'container',
              layout: {
                type: 'hbox',
                pack: 'center',
                align: 'start'
              },
              width: '100%',
              items: [
                {
                  html: '<img src="images/safety-slide2-4.jpg" width="258"/><h2>Minimal control of the incision quality and thermal impact of tissue</h2>',
                  flex: 1
                },
                {
                  html: '<img src="images/safety-slide2-5.jpg" width="258"/><h2>Limited ability to treat delicate tissues like the vocal cords</h2>',
                  flex: 1
                }
              ]
            }
          ]
        },
        {
          xtype: 'container',
          layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'
          },
          padding: 0,
          cls: "sixUp lightGrey",
          documents: [],
          items: [
            {
              html: '<h1>Consequences</h1>',
            },
            {
              xtype: 'container',
              layout: {
                type: 'hbox',
                pack: 'center',
                align: 'start'
              },
              width: '100%',
              items: [
                {
                  html: '<img src="images/safety-slide2-1.jpg" width="258"/><h2>Less desirable clinical outcomes</h2>',
                  flex: 1
                },
                {
                  html: '<img src="images/safety-slide2-2.jpg" width="258"/><h2>Poor margin recognition</h2>',
                  flex: 1
                }
              ]
            },
            {
              xtype: 'container',
              layout: {
                type: 'hbox',
                pack: 'center',
                align: 'start'
              },
              width: '100%',
              items: [
                {
                  html: '<img src="images/safety-slide2-4.jpg" width="258"/><h2>Limited access to treat diseased areas</h2>',
                  flex: 1
                },
                {
                  html: '<img src="images/safety-slide2-5.jpg" width="258"/><h2>Less Predictable tissue interaction</h2>',
                  flex: 1
                }
              ]
            }
          ]
        },
        /*3a*/
        {
          xtype: 'container',
          layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'
          },
          cls: 'lightGrey',
          documents: [],
          items: [
            {
              html: "<h1>Consequences</h1>"
            },
            {
              xtype: 'container',
              layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'
              },
              padding: 0,
              cls: 'lightGrey',
              documents: [],
              items: [
                {
                  xtype: 'container',
                  html : '<div class="twoUp left"><img src="images/rentvsown-chairs.jpg" width="400"/><img src="images/rentvsown-chairs.jpg" width="400"/></div>',
                  flex: 1
                },
                {
                  xtype: 'container',
                  html : '<div class="twoUp right"><ul><li>Less patient satisfaction</li><li>A variety of hand pieces to support various procedures</li><li>May have to refer patients out</li></ul></div>',
                  flex: 1
                }
              ]
            }
          ]
        },
        /*3a*/
        {
          xtype: 'container',
          layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'
          },
          cls: 'lightGrey',
          documents: [],
          items: [
            {
              html: "<h1>Solutions</h1>"
            },
            {
              xtype: 'container',
              layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'
              },
              padding: 0,
              cls: 'lightGrey',
              documents: [],
              items: [
                {
                  xtype: 'container',
                  html : '<div class="twoUp left"><img src="images/rentvsown-chairs.jpg" width="400"/><div style="padding:0; margin:15px 0 0 0"><img src="images/rentvsown-pencil.jpg" width="190" style="margin-right:20px"/><img src="images/rentvsown-truckOnMap.jpg" width="190"/></div></div>',
                  flex: 1
                },
                {
                  xtype: 'container',
                  html : '<div class="twoUp right"><p>C02 lasers provide and efficient source of energy for cutting and ablating tissue. Superior incision and ablation capabilites with minimal thermal damage.</p></div>',
                  flex: 1
                }
              ]
            }
          ]
        }
    ]
  }
  
  });