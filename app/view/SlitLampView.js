Ext.define("LumenisTraining.view.SlitLampView", {
  extend: "Ext.Carousel",
  xtype: "slitlampview",
  config: {
    title: "Slit Lamps",
    id: "slitLampView",
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
		  cls: 'lightGrey',
		  items: [
			{
			  html: '<h1>What is a Slit Lamp?</h1>',
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
               html: '<ul>'
           + '<li>It is a diagnostic instrument</li>'
           + '<li>Uses a binocular microscope for stereoscopic ("3D") visualization</li>'
           + '<li>It provides variable magnification</li>'
           + '<li>Consists of a  high-intensity light source</li>'
           + '<li>Allows manipulation of light as it is focused to shine as a slit</li>'
           + '</ul>'
             },
       {
         html: '<img src="images/sltlamp1.jpg" />'
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
	     cls: 'lightGrey',
	     items: [
       {
         html: '<h1>Optics: Convergent and Parallel</h1>',
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
                html: '<ul>'
            + '<li>With <strong>convergent</strong> optics, the optical paths from the two oculars converge at the focal point.  This resembles the way the eyes focus on a close object and the image will have stereoscopic properties. Haag Strait slit lamps have convergent optics.  </li>'
            + '<li>With <strong>parallel</strong> optics, the optical paths from the two oculars are parallel. The paths are altered by the objective lens and converge at the focal point.  You will also see this called parallel convergent. This resembles the way the eye focuses on a distant object and for some users, this more relaxed, infinity focus lessens eye strain. </li>'
            + '</ul>'
            + 'Source:<a href=" http://www.genmedhealth.com" target="_blank"> http://www.genmedhealth.com</a>',
                style: 'width:500px;'

              },
        {
          html: '<img src="images/optics.jpg" />'
        },
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
	     cls: 'lightGrey',
	     items: [
       {
         html: '<h1>Illumination: On-Axis and Off-Axis</h1>',
       },
         {
           xtype: 'container',
           layout: {
             type: 'hbox',
             pack: 'center',
             align: 'top'
           },

           items: [

             {
               html: '<img src="images/illumination1.jpg" /><br><p>In <strong>on-axis illumination</strong> style slit lamps, Illumination source is from above, and is reflected off a mirror to be on the same plane as the user’s visual pathway</p>',
               style: 'margin-right:20px; width:300px;'
             },
             {
               html: '<img src="images/illumination2.jpg" /><br><p>In <strong>off-axis illumination</strong> style slit lamps, illumination source is from below, and is reflected off a mirror.</p> ',
               style: 'width:300px;'
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
	      cls: 'lightGrey',
	      items: [
        {
          html: '<h1>Unique Lumenis Features</h1>',
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
                 html: '<ul>'
             + '<li>ClearView Eye Safety Filters</li>'
             + '<li>SureSpot Optics</li>'
             + '</ul>'
             + '<p>These features are integrated into the Lumenis 1000 and InSight slit lamps. Lumenis Laser Links use an external ClearView filter</p>',
                 style: 'width:400px;'

               },
         {
           html: '<img src="images/uniqueLumenis.jpg" />'
         },
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
	     cls: 'lightGrey',
	     items: [
       {
         html: '<h1>ClearView™ Filters</h1>',
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
                html: '<img src="images/clearView.jpg" />'
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
	     cls: 'lightGrey',
	     documents: [],
	     items: [
   {
     html: '<h1>SureSpot Optics</h1>',
     style: 'margin-bottom:20px',
   },
   {
     html: '<img src="images/sureSpot.jpg" width="400px"  /><br><h2><strong>SureSpot Optics improve safety, precision and efficacy</strong></h2> ',
     style: 'text-align:center'

   },

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
          html: '<h1>Compare SureSpot to Defocus Optics</h1>',
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
             html: '<ul>'
         + '<li>Most physicians learned to titrate treatment with the legacy Coherent "Defocus" laser optics…</li>'
         + '<li>…but with larger spot sizes, the aiming beam is fuzzy on the retina  </li>'
         + '</ul>',
             style: 'width:400px;'

           },
               {
                 html: '<img src="images/sureSpot2.jpg" width="300px" />'
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
	     cls: 'lightGrey',
	     items: [
       {
         html: '<h1>Compare SureSpot to Par Focal Optics</h1>',
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
            html: '<ul>'
        + '<li>Par focal optics provide a sharp focus on the retina…</li>'
        + '<li>but with larger spot sizes, create high power density on cornea</li>'
        + '</ul>',
            style: 'width:400px;'

          },
              {
                html: '<img src="images/sureSpot3.jpg" width="300px" />'
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
	     cls: 'lightGrey',
	     items: [
       {
         html: '<h1>Surespot Optics</h1>',
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
            html: '<ul>'
        + '<li>SureSpot optics provide sharply defined and evenly distributed power on the retina…</li>'
        + '<li>…and low-power density at the cornea and the lens, even with larger spot sizes</li>'
        + '</ul>',
            style: 'width:400px;'

          },
              {
                html: '<img src="images/sureSpot4.jpg" width="300px" />'
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
    cls: 'lightGrey',
    documents: [],
    items: [
{
  html: '<h1>SureSpot Optics</h1>',
  style: 'margin-bottom:20px',
},
{
  html: '<img src="images/sureSpot5.jpg" width="400px"  />'

},

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
       html: '<h1>Lumenis Offers Three Basic Slit Lamp Types</h1>',
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
			    html: '<ul>'
      + '<li>Zeiss-style </li>'
      + '<ul>'
      + '<li>Parallel optics  </li>'
      + '<li>Off axis illumination</li>'
      + '<li>Lumenis 980</li>'
      + '</ul>'
      + '<li>Haag Streit-style</li>'
      + '<ul>'
      + '<li>Convergent optics </li>'
      + '<li>On-axis illumination</li>'
      + '<li>Lumenis 990</li>'
      + '</ul>'
      + '<li>InSight</li>'
      + '</ul>',
			    style: 'width:400px;'

			  },
            {
              html: '<img src="images/slitLamp.jpg" width="300px" />'
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
   cls: 'lightGrey',
   items: [
   {
     html: '<h1>Lumenis 980 Slit Lamp</h1>',
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
        html: '<ul>'
    + '<li>"Zeiss-style" </li>'
    + '<li>Parallel optics</li>'
    + '<li>Off-axis illumination</li>'
    + '<li>Compatible with Vision One, Novus Spectra</li>'
    + '<li>Offers 6x,10x,16x,25x,40x magnification (with set of oculars for narrow pupillary distance)</li>'
    + '<li>Can accommodate accessories such as beam-splitter, co-observation tube, automatic filters, etc.)</li>'
    + '<li>Has wheelchair accessible Power Table with locking caster wheels</li>'
    + '<li>Has auto-sensing 100-240 V input power</li>'
    + '</ul>',
        style: 'width:400px;'

      },
          {
            html: '<img src="images/lumenis980.jpg" width="300px" />'
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
   cls: 'lightGrey',
   documents: [],
   items: [

{
  html: '<img src="images/lumenisConfig.jpg" width="700px"  />'

},

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
     html: '<h1>Lumenis 990 Slit Lamp</h1>',
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
        html: '<ul>'
    + '<li>"Haag-Streit style"</li>'
    + '<li>On-axis illumination style lamp </li>'
    + '<li>Tonometer mount included </li>'
    + '<li>Offers 6x,10x,16x,25x,40x magnification</li>'
    + '<li>Power table is wheelchair accessible </li>'
    + '<li>Locking caster wheels </li>'
    + '<li>Auto-sensing 100-240 V input power </li>'
    + '</ul>'
    + '<p>Most Convergent optics laser links contain fixed filters; in the 488-514nm or 532nm. The exception is Vision One it has a 532/577/659nmn filter and it is a moving eye safety filter.</p>',
        style: 'width:400px;padding-right:20px;'

      },
          {
            html: '<img src="images/lumenis990.jpg" width="300px" />'
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
	   cls: 'lightGrey',
	   documents: [],
	   items: [

 {
   html: '<img src="images/lumenis990config.jpg" width="700px"  />'

 },

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
         html: '<h1>Lumenis 1000 Integrated Slit Lamp</h1>',
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
            html: '<ul>'
        + '<li>"Zeiss Style"</li>'
        + '<li>Off-axis illumination style </li>'
        + '<li>Integrated SureSpot Optics </li>'
        + '<li>True 50 - 1000 micron telescope</li>'
        + '<li>Offers 6x,10x,16x,25x,40x magnification  </li>'
        + '<li>Built-in ClearView™ three-wavelength automatic Eye Safety Filters </li>'
        + '<li>Micromanipulator (Standard) with built-in finger rest</li>'
        + '<li>Reversible (right or left) physician elbow rest</li>'
        + '<li>Power table is wheelchair accessible with locking caster wheels</li>'
        + '<li>Auto-sensing 100-240 V input power</li>'
        + '</ul>',
            style: 'width:400px;padding-right:20px;'

          },
              {
                html: '<img src="images/lumenis1000.jpg" width="300px" />'
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
	      cls: 'lightGrey',
	      items: [
        {
          html: '<h1>Lumenis InSight Slit Lamp</h1>',
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
             html: '<ul>'
         + '<li>Unique to Lumenis</li>'
         + '<li>Compatible with Lumenis Novus Spectra and Selecta II lasers</li>'
         + '<li>5x magnification changer</li>'
         + '<li>50-1000 micron telescope containing SureSpot™ optics</li>'
         + '<li>Built-in automatic eye safety filters for 532nm, 577nm, 659nm wavelengths</li>'
         + '<li>ClearView™ filters for enhanced visibility </li>'
         + '<li>Micromanipulator built-into the Slit Lamp Joystick for fine movement of the aiming/treatment beam and the illumination</li>'
         + '<li>Wheel chair accessible table</li>'
         + '<li>Auto-sensing 100-240V input power</li>'
         + '</ul>',
             style: 'width:400px;padding-right:20px;'

           },
               {
                 html: '<img src="images/LumenisInsight.jpg" width="300px" />'
               }

             ]
           }
	      ]
	    },
	{
	  xtype: "quizslitlampsview"
	}





    ]
  }

});