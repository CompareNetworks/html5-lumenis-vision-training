Ext.define("LumenisTraining.view.IntroOverviewView", {
  extend: "Ext.Carousel",
  xtype: "introoverviewview",
  config: {
    title: "Intro Overview",
    id: "introOverviewView",
    styleHtmlContent: true,
    documents: [],
    items: [
        //two up with header. remove header if desired
        {
          xtype: 'container',
          layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'
          },
          cls: 'lightGrey',
          items: [
            //header
            {
              html: "<h1>Header</h1>"
            },
            {
              xtype: 'container',
              layout: {
                type: 'hbox',
                pack: 'center',
                align: 'start'
              },
              items: [
                //flexible left/right columns
                {
                  xtype: 'container',
                  html : '<img src="images/dice.jpg" width="400"/>',
                  flex: 1
                },
                {
                  xtype: 'container',
                  html : '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>',
                  flex: 1
                }
              ]
            }
          ]
        },
        //six up. remove header if necessary
        {
          xtype: 'container',
          layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'
          },
          padding: 0,
          cls: "sixUp lightGrey",
          items: [
            //header
            {
              html: '<h1>Header</h1>',
            },
            {
              xtype: 'container',
              layout: {
                type: 'hbox',
                pack: 'center',
                align: 'start'
              },
              width: '100%',
              //top row
              items: [
                {
                  html: '<img src="images/concernedBlonde.jpg" width="260"/><h2>Can&rsquo;t accurately target tissue-less precision</h2>',
                  flex: 1
                },
                {
                  html: '<img src="images/concernedBlonde.jpg" width="260"/><h2>Unreliable and unpredictable results</h2>',
                  flex: 1
                },
                {
                  html: '<img src="images/concernedBlonde.jpg" width="260"/><h2>Poor results</h2>',
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
              //bottom row
              items: [
                {
                  html: '<img src="images/concernedBlonde.jpg" width="260"/><h2>Increased treatment times</h2>',
                  flex: 1
                },
                {
                  html: '<img src="images/concernedBlonde.jpg" width="260"/><h2>Increaed costs</h2>',
                  flex: 1
                },
                {
                  html: '<img src="images/concernedBlonde.jpg" width="260"/><h2>Suboptimal results - less patient satisfaction</h2>',
                  flex: 1
                }
              ]
            }
          ]
        },
        //five up. remove header if necessary
        {
          xtype: 'container',
          layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'
          },
          padding: 0,
          cls: "sixUp lightGrey",
          items: [
            //header
            {
              html: '<h1>Header</h1>',
            },
            {
              xtype: 'container',
              layout: {
                type: 'hbox',
                pack: 'center',
                align: 'start'
              },
              width: '100%',
              //top row
              items: [
                {
                  html: '<img src="images/concernedBlonde.jpg" width="260"/><h2>Can&rsquo;t accurately target tissue-less precision</h2>',
                  flex: 1
                },
                {
                  html: '<img src="images/concernedBlonde.jpg" width="260"/><h2>Unreliable and unpredictable results</h2>',
                  flex: 1
                },
                {
                  html: '<img src="images/concernedBlonde.jpg" width="260"/><h2>Poor results</h2>',
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
              //bottom row
              items: [
                {
                  html: '<img src="images/concernedBlonde.jpg" width="260"/><h2>Increased treatment times</h2>',
                  flex: 1
                },
                {
                  html: '<img src="images/concernedBlonde.jpg" width="260"/><h2>Increaed costs</h2>',
                  flex: 1
                }
              ]
            }
          ]
        },
        //four up. remove header if necessary
        {
          xtype: 'container',
          layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'
          },
          padding: 0,
          cls: "sixUp lightGrey",
          items: [
            //header
            {
              html: '<h1>Header</h1>',
            },
            {
              xtype: 'container',
              layout: {
                type: 'hbox',
                pack: 'center',
                align: 'start'
              },
              width: '100%',
              //top row
              items: [
                {
                  html: '<img src="images/concernedBlonde.jpg" width="260"/><h2>Can&rsquo;t accurately target tissue-less precision</h2>',
                  flex: 1
                },
                {
                  html: '<img src="images/concernedBlonde.jpg" width="260"/><h2>Unreliable and unpredictable results</h2>',
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
              //bottom row
              items: [
                {
                  html: '<img src="images/concernedBlonde.jpg" width="260"/><h2>Increased treatment times</h2>',
                  flex: 1
                },
                {
                  html: '<img src="images/concernedBlonde.jpg" width="260"/><h2>Increaed costs</h2>',
                  flex: 1
                }
              ]
            }
          ]
        },
        //modified two-up
        {
          xtype: 'container',
          layout: {
            type: 'hbox',
            pack: 'center',
            align: 'center'
          },
          cls: "lightGrey",
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
        //two up with inline styles
        {
          xtype: 'container',
          layout: {
            type: 'hbox',
            pack: 'center',
            align: 'center'
          },
          cls: "lightGrey",
          items: [
            {
              html: '<img src="images/headache.jpg" /><div style="margin-top:15px"><img src="images/fallingChartSmall.jpg" style="margin:0 27px 0 0"/><img src="images/bullseye.jpg" /></div>',
              style: "width:507px"
            },
            {
              html: '<h2 class="mediumText"><strong>Uncomfortable treatments</strong> means<br/>a negative experience for<br/>your patients</h2><ul><li>Your revenue and reputation are negatively impacted.</li><li>Inconsistent delivery of energy affects your results.</li><li>Without pulse control, the chances of minimizing pain for your patients and achieving treatment target is reduced.</li></ul>',
              style: "width:390px; padding-left:27px"
            }
          ]
        },
        //two up with stacked images and colored background
        {
          xtype: 'container',
          layout: {
            type: 'hbox',
            pack: 'center',
            align: 'center'
          },
          cls: "purple",
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
        //large top image & 3 small images
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
              html: '<img src="images/fallingChartWide.jpg" width="500"/><h2 class="mediumText">Header</h2>',
              cls: "centered"
            },
            {
              xtype: 'container',
              layout: {
                type: 'hbox',
                pack: 'center',
                align: 'start'
              },
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
                  html: '<img src="images/guessing.jpg" width="150"/><p>Inconsistent treatment parameters</p>',
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