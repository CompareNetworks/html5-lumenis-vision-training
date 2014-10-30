Ext.define("LumenisTraining.view.CataractView", {
  extend: "Ext.Carousel",
  xtype: "cataractview",
  config: {
    title: "Cataract",
    id: "cataractView",
    styleHtmlContent: true,
    documents: [],
    items: [{
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      items: [{
        html: '<h1>Crystalline Lens</h1>',
        style: 'margin-bottom:20px',
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
          html: '<ul>' + '<li>The lens is a transparent, biconvex (lentil-shaped) structure in the eye that, along with the cornea, helps to refract light to be focused on the retina.</li>' + '<li>In humans, the refractive power of the lens in its natural environment is roughly 1/3 of the eye’s total power</li>' + '</ul>',
          style: 'width:400px;padding-right:40px;'
        }, {
          html: '<img src="images/crystallineLens.jpg" />'
        }]
      }]
    },

    {
      xtype: 'container',
      layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [

      {
        xtype: 'container',
        layout: {
          type: 'vbox',
          pack: 'center',
          align: 'center'
        },
        cls: 'lightGrey',
        width: 400,
        items: [{
          html: '<h1>What is a cataract?</h1>',
          style: 'margin-bottom:20px',
        },

        {
          html: '<ul>' + '<li>A cataract is a clouding of the lens in the eye that affects vision</li>' + '<li>Most cataracts are related to aging</li>' + '<li>Treatment involves replacing the crystalline lens with a synthetic intra-ocular lens (IOL)</li>' + '</ul>'
        }]
      }, {
        html: '<img src="images/cataract1.jpg" width="280" /><br><img src="images/cataract2.jpg" width="280" />'


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
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1>Cataract Formation</h1>',
        style: 'margin-bottom:20px',
      },

      {
        html: '<ul>' + '<li>Most cataracts are due to age-related changes in the lens. However, other factors can contribute to their development</li>' + '<li><strong>Diabetes mellitus</strong> – Higher risk for cataracts at a younger age.</li>' + '<li><strong>Drugs</strong> - Certain medications have been found to be associated with the development of a cataract e.g. steroids</li>' + '<li><strong>Ultraviolet radiation</strong> - Studies have shown that there is an increased chance of cataract formation with unprotected exposure to ultraviolet (UV) radiation</li>' + '<li><strong>Smoking</strong> - An association between smoking and increased nuclear opacities has been reported</li>' + '<li><strong>Alcohol</strong> - Several studies have shown increased cataract formation in patients with higher alcohol consumption compared with people who have lower or no alcohol consumption'

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
      cls: 'lightGrey',
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
          html: '<img src="images/cataractLens.jpg" />'
        }

        ]
      }]
    },

    {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      items: [

      {
        xtype: 'container',
        layout: {
          type: 'hbox',
          pack: 'center',
          align: 'top'
        },

        items: [

        {
          html: '<img src="images/cataractLensclear.jpg" width="300" height="200" /><br><p><strong>A clear lens refracts light onto the retina and fine-tunes our focusing ability.</strong></p>',
          style: 'margin-right:20px; width:300px;'
        }, {
          html: '<img src="images/cataractLenscloudy.jpg" width="250" height="200" /><br><p><strong>A cloudy lens prevents light from focusing sharply on the retina</strong><p> ',
          style: 'width:300px;'
        }]



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
      cls: 'lightGrey',
      items: [{
        html: '<h1>Cataract Surgery</h1>',
        style: 'margin-bottom:20px',
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
          html: '<ul>' + '<li>Indication for surgery: <strong>elective</strong> – patient’s actual needs vs. physician judgment</li>' + '<li>Only medical solution: removal of cataract</li>' + '<li>Surgical developments</li>' + '<ul>' + '<li>Couching (800 BC)</li>' + '<li>Intracapsular cataract extraction (ICCE) - Large incision lens and capsular bag removed IOL placed in anterior chamber</li>' + '</ul>' + '</ul>',
          style: 'width:400px;padding-right:40px;'
        }, {
          html: '<img src="images/cataractSurgery.jpg" />'
        }]
      }]
    },

    {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1>Cataract Surgery</h1>',
        style: 'margin-bottom:20px',
      },

      {
        html: '<ul>' + '<li>Today the standard procedure is Extracapsular cataract extraction (ECCE) </li>' + '<li>The incision had shifted from a large incision such as in ICEE to very smaller incisions  </li>' + '<li>Manual fragmentation and removal of the lens has been replaced by Phacoemulsification</li>' + '<li>New to 2012 – Femtolaser capsulorhexsis and fragmentation of the lens ; still need to perform  phaco to complete lens removal</li>' + '<li>IOL (intra-ocular-lens) is either full size or foldable (inserted through a small incision)</li>'
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
      cls: 'lightGrey',
      items: [{
        html: '<h1>Cataract Surgery: Basic Steps</h1>',
        style: 'margin-bottom:20px',
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
          html: '<ul>' + '<li>Pupil dilation</li>' + '<li>Disinfection of eye/eyelids</li>' + '<li>Anesthesia of eye and eyelids. Placement of speculum.</li>' + '<li>Incision to the anterior chamber (AC)</li>' + '<li>Viscoelastic injection)</li>' + '<li>Incision to anterior capsule (Capsulorhexis; access to lens mass)</li>' + '<li>Lens nucleus removal</li>' + '<li>IOL insertion</li>' + '<li>Wound is sutured and closed </li>' + '</ul>',
          style: 'width:400px;padding-right:40px;'
        }, {
          html: '<img src="images/cataractSurgery2.jpg" />'
        }]
      }]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      items: [{
        html: '<h1>Cataract Surgery - Phacoemulsification</h1>',
        style: 'margin-bottom:20px',
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
          html: '<ul>' + '<li>A small incision is made close to the edge of the cornea.</li>' + '<li>A tiny, high-frequency ultrasound instrument is inserted that breaks up center of the lens</li>' + '<li>Broken-up cloudy lens material is removed through the incision</li>' + '</ul>',
          style: 'width:400px;padding-right:40px;'
        }, {
          html: '<img src="images/cataractSurgery3.jpg" />'
        }]
      }]
    },

    {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      items: [{
        html: '<h1>Femto laser + Phacoemulsification</h1>',
      }, {
        xtype: 'container',
        layout: {
          type: 'hbox',
          pack: 'center',
          align: 'top'
        },

        items: [

        {
          html: '<img src="images/femtoLaser1.jpg" width="300" /><br><p>Capsulorhexsis</p>',
          style: 'margin-right:20px; width:300px;text-align:center'
        }, {
          html: '<img src="images/femtoLaser2.jpg" width="300" /><br><p>Phaco/aspiration of lens</p> ',
          style: 'width:300px;text-align:center'
        }]



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
      cls: 'lightGrey',
      items: [{
        html: '<h1>Cataract Surgery – IOL Insertion</h1>',
        style: 'margin-bottom:20px',
      },

      {
        xtype: 'container',
        layout: {
          type: 'hbox',
          pack: 'center',
          align: 'top'
        },
        cls: "lightGrey",
        documents: [],
        items: [



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

            html: '<img src="images/cataractSurgery4.jpg" width="350"/>',
            style: 'padding-right:40px;'


          }, {
            html: '<img src="images/cataractSurgery5.jpg" width="150" height="150" style="margin-right:20px;vertical-align:top" /><img src="images/cataractSurgery6.jpg" width="150" />'

          }]
        },


        {
          html: '<ul>' + '<li>Intraocular lens (IOL) implant is inserted into the eye to replace the cloudy lens</li>' + '<li>IOL made of either PMMA, acrylic, silicon or other similar materials</li>' + '<li>IOL is customized for the individual eye; restores focusing power</li>' + '<li>High success rates</li>' + '</ul>',
          style: 'width:400px;'
        }]
      }]
    },

    {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      items: [{
        html: '<h1>Cataract Surgery Video - Phaco emulsification with Foldable IOL</h1>',
        style: 'margin-bottom:20px',
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
        items: [{
          xtype: 'container',
          width: 470,
          height: 360,
          items: [{
            xtype: 'video',
            width: 470,
            height: 360,
            url: "videos/CataractSurgery.mp4",
            posterUrl: 'images/cataractVideoThumb.jpg',
            autoPause: true
          }]
        }

        ]
      }]
    },

    {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1>Posterior Capsule Opacification (PCO)</h1>',
        style: 'margin-bottom:20px',
      },

      {
        html: '<ul>' + '<li>Most frequent postoperative complication of cataract surgery</li>' + '<li>Not true opacification: migration of endothelial cells towards the post capsule.</li>' + '<li>Occurrence: 30%-50% following cataract surgery</li>' + '<li>Differences in IOL’s (material + design) play a role in occurrence rate</li>' + '<li>Average onset period: 20-26 months following surgery</li>' + '<li>Treatment: removal of the central portion of the posterior opacified capsule membrane (can be determined by the pupil)</li>'
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
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1>Capsulotomy Technique</h1>',
        style: 'margin-bottom:20px',
      },

      {
        html: '<ul>' + '<strong>1. Focusing is absolute key to success:</strong>' + '<ul>' + '<li>What is the offset? Do you aim at or behind the  capsule?</li>' + '<li>Focus in front of the capsule = damage to IOL</li>' + '<li>Focus behind capsule = damage to vitreous</li>' + '</ul>' + '<strong>2. Use minimum energy necessary</strong>' + '<ul>' + '<li>Minimize damage to vitreous and IOL</li>' + '<li>Start with 0.5mJ and increase by 0.1mJ</li>' + '</ul>' + '<strong>3. Use the minimum number of shots</strong>' + '</ul>'
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
      cls: 'lightGrey',
      documents: [],
      items: [

      {
        xtype: 'container',
        layout: {
          type: 'vbox',
          pack: 'center',
          align: 'center'
        },
        cls: 'lightGrey',
        documents: [],
        items: [{
          html: '<h1>Capsulotomy Technique</h1>',
          style: 'margin-bottom:20px',
        },

        {
          html: '<ul>' + '<strong>4. Use a Laser contact lens (e.g. Abraham PC Lens)</strong>' + '<ul>' + '<li>Improves visualization of target</li>' + '<li>Stabilizes the eye</li>' + '<li>Eliminates inadvertent blinking</li>' + '<li>Increases beam convergence</li>' + '<li>Decreases beam spot size</li>' + '</ul>' + '<strong>5. Place first laser pulse off center</strong>' + '<ul>' + '<li>Above or below pupil center (test setting and actual location of plasma)</li>' + '</ul>' + '<strong>6. Identify and cut across capsular tension lines</strong>' + '</ul>'

        }]
      }, {
        html: '<img src="images/capsulotomyTechnique1.jpg" height="190" /><br><img src="images/capsulotomyTechnique2.jpg" height="280" />'


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
      cls: 'lightGrey',
      items: [{
        html: '<h1>Capsulotomy Technique</h1>',
        style: 'margin-bottom:20px',
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
          html: '<ul>' + '<strong>7.Perform a cruciate opening</strong>' + '<ul>' + '<li>Begin at 12 o’clock above center</li>' + '<li>Progress downwards toward 6 o’clock</li>' + '<li>Cut across from 3 to 9 o’clock</li>' + '</ul>' + '<strong>8.Opening should be the size of pupil in ambient light</strong> (note: size grows in time)' + '</ul>',
          style: 'width:400px',
        }, {
          html: '<img src="images/capsulotomyTechnique3.jpg" width="300"/>'
        }]
      }]
    },



    {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1>Lumenis lasers </h1>',
        style: 'margin-bottom:20px',
      },

      {
        html: '<ul>' + '<li><strong>ND:YAG (wavelength 1064nm)</strong></li>' + '<li><strong>Combination systems    ND:YAG + SLT</strong></li>' + '</ul>'

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
      cls: 'lightGrey',
      items: [{
        html: '<h1>Lumenis Photodisruptor(s)</h1>',
        style: 'margin-bottom:20px',
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
          html: '<ul>' + '<li><strong>Aura PT</strong>' + '<ul>' + '<li>Photodisruptor (Nd:Yag) only laser</li>' + '</ul></li>' + '<li><strong>Major applications:</strong>' + '<ul>' + '<li>Posterior capsulotomy </li>' + '<li>Iridotomy </li>' + '</ul></li>' + '</ul>'
        }, {
          html: '<img src="images/lumenisPhotodisruptor.jpg" width="300" />'
        }]
      }]
    },

    {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      items: [{
        html: '<h1>Selecta<sup>&reg;</sup> Duet<sup>&trade;</sup></h1>',
        style: 'margin-bottom:20px',
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
          html: '<ul>' + '<li>The newest combination product in the market (YAG + SLT) that offers excellent clinical solutions to all anterior-segment requirements' + '<ul>' + '<li>YAG Iridotomy</li>' + '<li>Posterior Capsulotomy</li>' + '<li>Selective Laser Trabeculoplasty (SLT)</li>' + '</ul></li>' + '<li>The only SLT + YAG combination product in the market that is upgradeable to a Trio (YAG + SLT + Photocoagulator)</li>' + '</ul>',
          style: 'width:400px',
        }, {
          html: '<img src="images/selecta.jpg" width="300" />'
        }]
      }]
    },

    {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      items: [{
        html: '<h1>Selecta<sup>&reg;</sup> Trio<sup>&trade;</sup> </h1>',
        style: 'margin-bottom:20px',
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
          html: '<ul>' + '<li>The only SLT + YAG + Photocoagulator combination product in the market!</li>' + '<li>Photocoagulator can be used at SL and OR</li>' + '<li>Combination product (YAG + SLT + PC) that offers excellent clinical solutions to all anterior AND Posterior segments requirements:' + '<ul>' + '<li>YAG or Argon Iridotomy</li>' + '<li>Posterior Capsulotomy</li>' + '<li>Selective Laser Trabeculoplasty (SLT)</li>' + '<li>Retinal photocoagulation</li>' + '</ul></li>' + '</ul>',
          style: 'width:400px',
        }, {
          html: '<img src="images/selecta.jpg" width="300" />'
        }]
      }]
    }, {
      xtype: 'quizcataractview'
    },

    ]
  }

});