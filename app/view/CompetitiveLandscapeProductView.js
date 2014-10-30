Ext.define("LumenisTraining.view.CompetitiveLandscapeProductView", {
  extend: "Ext.Carousel",
  xtype: "competitivelandscapeproductview",
  config: {
    title: "Competitive Landscape",
    id: "competitiveLandscapeProductView",
    styleHtmlContent: true,
    documents:[
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
              html: '<img src="images/paperFamily.jpg" width="767" />'
            },
            {
              html: '<h1 class="pink">Your patients are everything to you!</h1><h2 class="pink">And thus <strong>safety should be your top concern</strong><br/>when purchasing an aesthetic technology.</h2>'
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
          cls: "lightGrey",
          documents: [],
          items: [
            {
              html: '<img src="images/familyDoctor.jpg" /><h2 class="pink">Protect your patients,<br/>and practice reputation</h2>',
              cls: 'centered',
              flex: 1
            },
            {
              html: '<img src="images/crossKey.jpg" /><h2 class="pink">Scrutinizing the safety<br/>features of your investment.</h2>',
              cls: 'centered',
              flex: 1
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
          cls: "lightGrey",
          documents: [],
          items: [
            {
              html: '<img src="images/skinTypes.jpg" />'
            },
            {
              html: '<ul class="largeText"><li>Is it safe <strong>for all skin types?</strong></li><li>Is it <strong>easy to use?</strong></li><li>Is there <strong>training</strong> and <strong>continued education?</strong></li></ul>'
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
          cls: "lightGrey",
          documents: [],
          items: [
            {
              html: '<img src="images/error.jpg" /><div style="margin-top:15px"><img src="images/arms.jpg" style="margin:0 27px 0 0"/><img src="images/toothache.jpg" /></div>',
              style: "width:507px"
            },
            {
              html: '<ul class="mediumText"><li>Risk of burning patients</li><li>Lack of experience<br/>and reliability</li><li>Error factor on settings<br/>and filter use</li><li>Higher fluences</li><li>Absence of cooling and increased pain to the patient</li></ul>',
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
          cls: "purple",
          documents: [],
          items: [
            {
              html: '<img src="images/puzzleSmall.jpg" class="noDropShadow"/>'
            },
            {
              html: '<h1>A multi-application system and compact solution for light-based skin treatments</h1>',
              cls: "centered"
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
          cls: "lightGrey",
          documents: [],
          items: [
            {
              html: '<img src="images/runnerLarge.jpg" /><div style="margin-top:15px"><img src="images/arms.jpg" style="margin:0 27px 0 0"/><img src="images/toothache.jpg" /></div>',
              style: "width:507px"
            },
            {
              html: '<ul class="mediumText"><li>Pre-loaded treatment parameters based on skin type and lesion characteristics</li><li>Touch-screen and multi-language color interface</li><li>Software filter recognition</li></ul>',
              style: "width:390px; padding-left:27px"
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
          cls: "lightGrey",
          documents: [],
          items: [
            {
              html: '<img src="images/pretty.jpg" />',
              cls: 'centered',
              flex: 1
            },
            {
              html: '<ul class="mediumText"><li>Lower fluences for safe and effective treatment<br/></li><li>OPT<ul class="mediumText" style="list-style-type:none; line-height:150%"><li style="list-style-type:none">- Eliminates energy peak at the beginning of a pulse</li><li style="list-style-type:none">- Allows for skin cooling between pulses without sacrificing efficacy</li><li style="list-style-type:none">- Reduced chance of skin damage</li><li style="list-style-type:none">- Safely treat Skin Type I &mdash; V</li></ul></li></ul>',
              flex: 1
            }
          ]
        },


    ]
  }
  
  });