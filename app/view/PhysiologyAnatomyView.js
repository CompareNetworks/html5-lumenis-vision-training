Ext.define("LumenisTraining.view.PhysiologyAnatomyView", {
  extend: "Ext.Carousel",
  xtype: "physiologyanatomyview",
  config: {
    title: "Physiology & Anatomy",
    id: "physiologyAnatomyView",
    styleHtmlContent: true,
    documents: [
    ],
    items: [
        {
          xtype: 'container',
          layout: {
            type: 'hbox',
            pack: 'center',
            align: 'center'
          },
          cls: "lightGrey",
          documents: [],
          items: [
            {
              html: '<img src="images/equation.jpg" /><div style="margin-top:15px"><img src="images/roi.jpg" style="margin:0 27px 0 0"/><img src="images/signs.jpg" /></div>',
              style: "width:507px"
            },
            {
              html: '<h2 class="mediumText">There will be always be a <strong>difficult learning curve</strong> when introducing a new technology in to a practice. How long that learning curve is can be controlled by choosing the right partner.</h2><ul class="mediumText"><li>Long term return of your investment</li><li>Guess work to treat your patients</li><li>No presets or recommendations</li></ul>',
              style: "width:390px; padding-left:27px"
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
          cls: "thumbnails lightGrey",
          documents: [],
          items: [
            {
              xtype: 'container',
              layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'
              },
              width: '100%',
              cls: 'centered',
              items: [
                {
                  html: '<img src="images/fallingChartWide.jpg" width="500"/><h2 class="mediumText">Is the machine easy to use? Are the settings easy to choose and the results reproducible? Lost revenue, frustrated staff and unhappy patients can all stem from a steep learning curve.</h2>'
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
                  html: '<img src="images/unhappy.jpg" width="150"/><p>Unhappy patients</p>',
                  cls: 'centered',
                  flex: 1
                },
                {
                  html: '<img src="images/frustrated.jpg" width="150"/><p>Frustrated staff</p>',
                  cls: 'centered',
                  flex: 1
                },
                {
                  html: '<img src="images/guessing.jpg" width="150"/><p>Inconsistent treatment parameters - guessing as your guide</p>',
                  cls: 'centered',
                  flex: 1
                }
              ]
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
          cls: "purple",
          documents: [],
          items: [
            {
              html: "<img src='images/darts.jpg' width='420' class='noDropShadow'/><img src='images/piggy.jpg' width='420' style='margin:10px 0 0 0' class='noDropShadow'/>",
              cls: 'centered',
              flex: 1
            },
            {
              html: '<h1>Success made simple</h1><ul class="mediumText"><li>Preset treatment parameters eliminates guessing</li><li>Filter recognition software</li><li>Pulse technology: OPT</li><li>Continuous contact cooling</li><li>Multi language interface</li><li>Touch screen interface</ul>',
              flex: 1
            }
          ]
        },
    ]
  }
  
  });