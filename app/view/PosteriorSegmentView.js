Ext.define("LumenisTraining.view.PosteriorSegmentView", {
  extend: "Ext.Carousel",
  xtype: "posteriorsegmentview",
  config: {
    title: "Posterior Segment",
    id: "posteriorSegmentView",
    styleHtmlContent: true,
    documents: [],
    items: [
		//slide 1-3 are movies
		{
		  xtype: 'container',
		  id: 'eyeConAnt1',
		  layout: {
		    type: 'vbox',
		    pack: 'center',
		    align: 'center'
		  },
		  cls: 'lightGrey',
		  items: [{
		    html: '<h1>The Eye - Posterior Segment</h1>'
		  }, {
		    xtype: 'button',
		    text: "",
		    bubbleEvents: "videoEventEye1",
		    style: 'background-image: url("images/posteriorSegmentEye.jpg"); border:0; background-color:transparent',
		    padding: 0,
		    width: 640,
		    height: 450,
		    margin: 0,
		    handler: function () {
		      this.fireEvent("videoEventEye1", this);
		    }

		  }, {
		    html: "<p>(Tap image to see video)</p>"
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
		    html: '<h1>Vitreous Chamber</h1>',
		    style: 'margin-bottom:20px',
		  }, {
		    xtype: 'container',
		    layout: {
		      type: 'hbox',
		      pack: 'center',
		      align: 'center'
		    },
		    cls: "lightGrey",
		    items: [{
		      html: '<ul>' + '<li>A cavity of the eye posterior to the crystalline lens and anterior to the retina, which is filled with vitreous humor</li>' + '<li>Occupies four-fifths of the eyeball</li>' + '</ul>',
		      style: 'width:400px'
		    }, {
		      xtype: 'button',
		      text: "",
		      bubbleEvents: "videoEventEye2",
		      style: 'background-image: url("images/vitreousChamber.jpg"); border:0; border-radius:0; background-color:transparent',
		      padding: 0,
		      width: 400,
		      height: 331,
		      margin: 0,
		      handler: function () {
		        this.fireEvent("videoEventEye2", this)
		      }
		    }]
		  }, {
		    html: "<p style='margin-top:20px'>(Tap image to see video)</p>"
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
		    html: '<h1>Vitreous Body</h1>',
		    style: 'margin-bottom:20px',
		  }, {
		    xtype: 'container',
		    layout: {
		      type: 'hbox',
		      pack: 'center',
		      align: 'center'
		    },
		    cls: "lightGrey",
		    items: [{
		      html: '<ul>' + '<li>Transparent: gel-like consistency</li>' + '<li>Maintains the shape of the eye, cushions it from shocks and keeps the retina pressed against the inner surface of the eye  </li>' + '</ul>',
		      style: 'width:400px'
		    }, {
		      xtype: 'button',
		      text: "",
		      bubbleEvents: "videoEventEye3",
		      style: 'background-image: url("images/vitreousBody.jpg"); border:0; background-color:transparent',
		      padding: 0,
		      width: 398,
		      height: 315,
		      margin: 0,
		      handler: function () {
		        this.fireEvent("videoEventEye3", this)
		      }
		    }]
		  }, {
		    html: "<p>(Tap image to see video)</p>"
		  }]
		}, {
		  xtype: 'container',
		  layout: {
		    type: 'hbox',
		    pack: 'center',
		    align: 'center'
		  },
		  cls: 'lightGrey',
		  items: [{
		    xtype: 'container',
		    layout: {
		      type: 'vbox',
		      pack: 'center',
		      align: 'center'
		    },
		    items: [{
		      html: '<h1>Pars Plana & Pars Plicata</h1>',
		      style: 'margin-bottom:20px',
		    }, {
		      html: '<ul>' + '<li>The cilliary body consists of both the pars plicata & pars plana</li>' + '<li>The pars plicata produces intraocular fluid, the aqueous humor</li>' + '<li>The pars plana has no known function in the post-fetal eye. It is thus a "safe" place through which one can insert instruments</li>' + '</ul>',
		      style: 'width:400px;padding-right:40px;'
		    }]
		  }, {
		    html: '<img src="images/ParsPlana1.jpg" width="300" /><br><img src="images/ParsPlana2.jpg" width="300" />'
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
		    html: '<h1>Ora Serrata</h1>',
		    style: 'margin-bottom:20px',
		  }, {
		    xtype: 'container',
		    layout: {
		      type: 'hbox',
		      pack: 'center',
		      align: 'center'
		    },
		    cls: "lightGrey",
		    documents: [],
		    items: [{
		      html: '<ul>' + '<li>The ora serrata is the serrated junction between the retina and the ciliary body</li>' + '<li>This junction marks the transition from the simple non-photosensitive area of the retina to the complex, multi-layered photosensitive region</li>' + '</ul>',
		      style: 'width:400px'
		    }, {
		      xtype: 'button',
		      text: "",
		      bubbleEvents: "videoEventEye4",
		      style: 'background-image: url("images/oraSerrataSmall.jpg"); border:0; background-color:transparent',
		      padding: 0,
		      width: 300,
		      height: 400,
		      margin: 0,
		      handler: function () {
		        this.fireEvent("videoEventEye4", this)
		      }
		    }]
		  }, {
		    html: "<p>(Tap image to see video)</p>"
		  }]
		},
		//slide 6
		{
		  xtype: 'container',
		  layout: {
		    type: 'vbox',
		    pack: 'center',
		    align: 'center'
		  },
		  cls: 'lightGrey',
		  items: [{
		    html: '<h1>Retina</h1>',
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
				  html: '<ul>' + '<li>Retina - Most internal part of the eye, facing the vitreous</li>' + '<li>This is the light sensitive layer of the eye</li>' + '<li>Consists of two parts, the pigmented retina (which keeps light from reflecting back into the eye) and the sensory retina (which responds to light) </li>' + '</ul>',
				  style: 'width:400px'
				}, {
				  html: '<img src="images/retina.jpg" width="400"/>'
				}]
			},


		  ]
		},
		//slide 7
		{
		  xtype: 'container',
		  layout: {
		    type: 'vbox',
		    pack: 'center',
		    align: 'center'
		  },
		  cls: 'lightGrey',
		  items: [{
		    html: '<h1>Photoreceptors</h1>',
		    style: 'margin-bottom:20px',
		  }, {
		    xtype: 'container',
		    layout: {
		      type: 'hbox',
		      pack: 'center',
		      align: 'center'
		    },
		    cls: "lightGrey",
		    documents: [],
		    items: [{
		      html: '<ul>' + '<li>Photoreceptors are the outermost layer of the sensory retina,  and are divided into:</li>' + '<ul>' + '<li>Cones</li>' + '<li>Rods</li>' + '</ul>' + '<li>The most important cell is the photoreceptor neuron. Its main function is to capture the light energy in a visual image and convert it to an electrical response</li>' + '</ul>',
		      style: 'width:400px'
		    }, {
		      html: '<img src="images/photoreceptors.jpg" width="400"/>'
		    }]
		  }]
		},
		//slide 8
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
		    html: '<h1>Photoreceptors: Cones</h1>',
		    style: 'margin-bottom:20px',
		  },

			{
			  html: '<ul>' + '<li><strong>Cones</strong></li>' + '<ul>' + '<li>The human retina contains 6 million cone cells </li>' + '<li>Responsible for <strong><u>color vision</u></strong> and <strong><u>daytime high discrimination vision</u></strong></li>' + '<li>They are <strong><u>highly concentrated at the fovea</u></strong></li>' + '<li>Cones perceive finer detail and more rapid changes in images, because their response times to stimuli are fast (compared with Rods)</li>' + '<li>There are three types of cones, which differ in the spectrum of wavelengths of photons over which they absorb (564–580 nm [red], 534–545 nm [green], and 420–440 nm [blue]) . Color vision requires interactions of more than one type of cone, primarily by comparing responses across different cone types. </li>' + '</ul>' + '</ul>'
			}

		  ]
		},
		//slide 9
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
		    html: '<h1>Photoreceptors: Rods</h1>',
		    style: 'margin-bottom:20px',
		  },

			{
			  html: '<ul>' + '<li><strong>Rods</strong></li>' + '<ul>' + '<li>The human retina contains about 120 million rod cells</li>' + '<li>Rod cells are photoreceptor cells in the retina of the eye that can function in less intense light than cone cells (X100 more sensitive than cone cell), therefore they are <strong><u>responsible for night vision</u></strong></li>' + '<li>Rods are mainly concentrated at the outer edges of the retina and are used in <strong><u>peripheral vision.</strong></u> </li>' + '<li>No Rod cells in the fovea. </li>' + '<li>Multiple rod cells converge on a single interneuron, collecting and amplifying the signals. This convergence results in <strong><u>lower image resolution</u></strong> (compared with cones)</li>' + '<li>Rods have only one type of light sensitive pigment, therefore they have little, if any, role in color vision</li>' + '</ul>' + '</ul>'
			}

		  ]
		},
		//slide 10
		{
		  xtype: 'container',
		  layout: {
		    type: 'vbox',
		    pack: 'center',
		    align: 'center'
		  },
		  cls: 'lightGrey',
		  items: [{
		    html: '<h1>Retinal Pigment Epithelium</h1>',
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
				  html: '<ul>' + '<li>The RPE cell layer functions in maintaining proper function of the photoreceptor cells</li>' + '<li>RPE cells bring nutrients and oxygen to photoreceptor cells and remove waste products</li>' + '<li>When RPE cells are not functioning properly, photoreceptor cells are usually quickly affected resulting in retinal degeneration.</li>' + '</ul>',
				  style: 'width:400px'
				}, {
				  html: '<img src="images/retinalPigment.jpg" width="400"/>'
				}]
			},


		  ]
		},
		//slide 11
		{
		  xtype: 'container',
		  layout: {
		    type: 'vbox',
		    pack: 'center',
		    align: 'center'
		  },
		  cls: 'lightGrey',
		  items: [{
		    html: '<h1>Bruch&rsquo;s membrane</h1>',
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
				  html: '<ul>' + '<li>The membrane of the retina that separates the pigmented layer of the retina from the <strong>choroid</strong> coat of the eye.</li>' + '<li>The retinal pigment epithelium transports metabolic waste from the <strong>photoreceptors</strong> across Bruch&rsquo;s membrane to the choroid.</li>' + '</ul>',
				  style: 'width:400px'
				}, {
				  html: '<img src="images/bruchsMembrane.jpg" width="300"/>'
				}]
			},


		  ]
		},
		//slide 13 Fundus
		{
		  xtype: 'container',
		  layout: {
		    type: 'vbox',
		    pack: 'center',
		    align: 'center'
		  },
		  cls: 'lightGrey',
		  items: [{
		    html: '<h1>The Fundus</h1>',
		    style: 'margin-bottom:20px',
		  }, {
		    xtype: 'container',
		    layout: {
		      type: 'hbox',
		      pack: 'center',
		      align: 'center'
		    },
		    cls: "lightGrey",
		    documents: [],
		    items: [{
		      html: '<ul>' + '<li>The <strong>fundus</strong> – most interior part of the retina visible with an ophthalmoscope</li>' + '<li>The fundus includes includes the <strong>optic disc, posterior pole</strong> which includes the <strong>macula</strong> and <strong>fovea</strong> and some of the peripheral retina</li>' + '</ul>',
		      style: 'width:400px'
		    }, {
		      xtype: 'button',
		      text: "",
		      bubbleEvents: "videoEventEye5",
		      style: 'background-image: url("images/theFunds.jpg"); border:0; background-color:transparent',
		      padding: 0,
		      width: 361,
		      height: 264,
		      margin: 0,
		      handler: function () {
		        this.fireEvent("videoEventEye5", this)
		      }
		    }]
		  }, {
		    html: "<p style='margin-top:20px'>(Tap image to see video)</p>"
		  }

		  ]
		}, {
		  xtype: 'container',
		  layout: {
		    type: 'vbox',
		    pack: 'center',
		    align: 'center'
		  },
		  cls: 'lightGrey',
		  items: [{
		    html: '<h1>Macula</h1>',
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
				  html: '<ul>' + '<li>The <strong>macula lutea</strong> is the small, yellowish central portion of the <strong>retina</strong>. It is the area providing the clearest, most distinct vision.</li>' + '<li>Area of central vision (high resolution: color and fine details)</li>' + '<li>Highest concentration of cone photoreceptors</li>' + '<li>5-6mm in diameter</li>' + '</ul>',
				  style: 'width:400px'
				}, {
				  html: '<img src="images/maculaLutea.jpg" width="300"/>'
				}]
			},


		  ]
		},
		//slide 14
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
			    html: '<h1>Fovea</h1>',
			    style: 'margin-bottom:20px',
			  },

				{
				  html: '<ul>' + '<li>The center of the macula is called the <strong>fovea centralis</strong>, an area where all of the photoreceptors are <strong>cones;</strong> there are no <strong>rods</strong> in the fovea. </li>' + '<li>The fovea is the point of sharpest, most acute visual acuity.</li>' + '</ul>',
				  style: 'width:400px;padding-right:40px;'
				}]
			}, {
			  html: '<img src="images/foveaCentralis.jpg" width="300" /><br><p>OCT image</p>',
			  style: 'text-align:center'
			}

		  ]
		},
		//slide 15
		{
		  xtype: 'container',
		  layout: {
		    type: 'vbox',
		    pack: 'center',
		    align: 'center'
		  },
		  cls: 'lightGrey',
		  items: [{
		    html: '<h1>The Choroid</h1>',
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
				  html: '<ul>' + '<li>The Choroid is richly vascular and provides nutrients for the outer portion of the retina including the photoreceptors and the retinal pigment epithelium.</li>' + '<li>The choriocapillaris is the major blood supply to the outer layers of the retina and to the whole macula </li>' + '</ul>',
				  style: 'width:400px'
				}, {
				  html: '<img src="images/theChoroid.jpg" width="300"/>'
				}]
			},


		  ]
		},
		//slide 16
		{
		  xtype: 'container',
		  layout: {
		    type: 'vbox',
		    pack: 'center',
		    align: 'center'
		  },
		  cls: 'lightGrey',
		  items: [{
		    html: '<h1>Optic Disc</h1>',
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
				  html: '<ul>' + '<li>The position in the retina where the optic nerve (along with an artery and vein) enters the eye corresponds to the "blind spot" since there are no rods or cones in these location.</li>' + '<li>This is the area that the ophthalmologist studies when evaluating a patient for glaucoma. </li>' + '</ul>',
				  style: 'width:400px'
				}, {
				  html: '<img src="images/opticDisc.jpg" width="300"/>'
				}]
			},


		  ]
		},
		//slide 17
		{
		  xtype: 'container',
		  layout: {
		    type: 'vbox',
		    pack: 'center',
		    align: 'center'
		  },
		  cls: 'lightGrey',
		  items: [{
		    html: '<h1>Optic Nerve</h1>',
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
				  html: '<ul>' + '<li>The optic nerve is the structure which takes the information from the retina as electrical signals and delivers it to the brain where this information is interpreted as a visual image. </li>' + '<li>The optic nerve consists of a bundle of about one million nerve fibers.</li>' + '</ul>',
				  style: 'width:400px'
				}, {
				  html: '<img src="images/opticNerve.jpg" width="300"/>'
				}]
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
		  items: [{
		    html: '<h1>Central Artery & Vein of Retina</h1>',
		    style: 'margin-bottom:20px',
		  }, {
		    xtype: 'container',
		    layout: {
		      type: 'hbox',
		      pack: 'center',
		      align: 'center'
		    },
		    cls: "lightGrey",
		    documents: [],
		    items: [{
		      html: '<ul>' + '<li>The central retinal vein accompanies the central retinal artery. Having passed through the lamina cribrosa, the artery divides into four major branches that supply non-over lapping sectors of the retina. </li>' + '<li>These arteries are end-arteries and if they become occluded (blocked) then the retina that they supply infarcts (dies).</li>' + '</ul>',
		      style: 'width:400px'
		    }, {
		      xtype: 'button',
		      text: "",
		      bubbleEvents: "videoEventEye6",
		      style: 'background-image: url("images/centralArterySmall.jpg"); border:0; background-color:transparent',
		      padding: 0,
		      width: 300,
		      height: 400,
		      margin: 0,
		      handler: function () {
		        this.fireEvent("videoEventEye6", this)
		      }
		    }]
		  }, {
		    html: "<p>(Tap image to see video)</p>"
		  }]
		}, {
		  xtype: 'container',
		  layout: {
		    type: 'vbox',
		    pack: 'center',
		    align: 'center'
		  },
		  cls: 'eyeBall',
		  padding: 0,
		  style: 'background:white',
		  listeners: {
		    activate: function () {
		      threeSixty = {
		        init: function () {
		          this._vr = new AC.VR("viewer", 'images/Eyeball_720_rotate_#####.jpg', 200, {
		            invert: false,
		            initialPos: 60,
		            autoPlay: true,
		            noCache: true
		          });
		        },
		        didShow: function () {
		          this.init();
		        },
		        willHide: function () {
		          recycleObjectValueForKey(this, "_vr");
		        },
		        shouldCache: function () {
		          return false;
		        }
		      };
		      threeSixty.init();
		    }
		  },
		  items: [{
		    html: '<article id="main" class="content"><section id="showcase"><div id="html5-showcase" class="showcase"><div id="threesixty" class="container"><section id="threesixty-main"><div id="viewer"></div></section></div></div></section></article>',
		    width: 876,
		    height: 550
		  }]
		}


    ]
  }
});