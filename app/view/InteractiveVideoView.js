Ext.define("LumenisTraining.view.InteractiveVideoView", {
  extend: "Ext.Carousel",
  xtype: "interactivevideoview",
  config: {
    title: "Interactive Video",
    id: "interactiveVideoView",
    styleHtmlContent: true,
    documents: [
    ],
    items: [
        {
          xtype: 'container',
          layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'
          },
          cls: "centered lightGrey",
          documents: [],
          items: [
            {
              html: "<img src='images/dice.jpg' width='500' />"
            },
            {
              html: "<h2 class='mediumText'>Purchasing a <strong>SINGLE APPLICATION</strong> device rather than<br/>a universal platform system limits your profitability.</h2>"
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
          items: [
            {
              html: "<h1>By limiting the indications and type of patients you treat, can you lose revenue and profit?</h1>",
              cls: 'centered'
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
                  html: '<img src="images/roundHole.jpg" width="260"/><p>Limited treatment indications</p>',
                  cls: 'centered',
                  flex: 1
                },
                {
                  html: '<img src="images/concernedBlonde.jpg" width="260"/><p>Single indication treatment per visit</p>',
                  cls: 'centered',
                  flex: 1
                },
                {
                  html: '<img src="images/prohibited.jpg" width="260"/><p>Limited software guidelines for treatment</p>',
                  cls: 'centered',
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
                  html: '<img src="images/powerButton.jpg" width="260"/><p>System reboot</p>',
                  cls: 'centered',
                  flex: 1
                },
                {
                  html: '<img src="images/fallingChart.jpg" width="260"/><p>Can lose revenue and profit</p>',
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
            type: 'vbox',
            pack: 'center',
            align: 'center'
          },
          cls: "thumbnails purple",
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
                  html: '<img src="images/puzzlePiece.jpg" width="500" height="255" class="noDropShadow"/><h1>Multi-application device. Everything you need in one device.</h1>'
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
                  html: '<img src="images/runner.jpg" width="150" class="noDropShadow" /><p>Pre-loaded treatment parameters based on skin type and lesion characteristics</p>',
                  cls: 'centered',
                  flex: 1
                },
                {
                  html: '<img src="images/touch.jpg" width="150" class="noDropShadow"/><p>Touch-screen and multi-language color interface</p>',
                  cls: 'centered',
                  flex: 1
                },
                {
                  html: '<img src="images/menus.jpg" width="150" class="noDropShadow"/><p>Software filter recognition</p>',
                  cls: 'centered',
                  flex: 1
                }
              ]
            }
          ]
        }

    ]
  }
  
  });