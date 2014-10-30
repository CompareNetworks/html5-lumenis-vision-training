Ext.define("LumenisTraining.view.SLTView", {
  extend: "Ext.Carousel",
  xtype: "sltview",
  config: {
    title: "Lumenis SLT",
    id: "sltView",
    styleHtmlContent: true,
    documents: [],
    items: [
       		{
			xtype: 'container',
		   	layout: {
				type: 'hbox',
				pack: 'center',
				align: 'center'
			},
			cls: 'lightGrey',
			items: [
				{
					xtype: 'container',
					padding: 10,
					layout: {
						type: 'vbox',
						flex: 1,
						align: 'center'
					},
					items: [
						{
							html: '<img src="images/products-slide1-1.jpg" />'
						},
						{
							html: '<h2>Selecta&reg; Duet&trade;</h2>'	
						}
					]

				},
				{
					xtype: 'container',
					cls: 'middleImg',
					padding: 10,
					layout: {
						type: 'vbox',
						flex: 1,
						align: 'center'
					},
					items: [
						{
							html: '<img src="images/products-slide1-2.jpg" />'
						},
						{
							html: '<h2>Selecta&reg; Trio&trade;</h2>'	
						}
					]

				},
				{
					xtype: 'container',
					padding: 10,
					layout: {
						type: 'vbox',
						flex: 1,
						align: 'center'
					},
					items: [
						{
							html: '<img src="images/products-slide1-3.jpg" />'
						},
						{
							html: '<h2>Selecta<sup>&reg;</sup> II</h2>'	
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
			items:[
				{
					xtype: 'container',
					layout: {
						type: 'vbox',
						pack: 'center',
						align: 'center'
					},
					items: [
						{
							html:'<h1>Selecta Family</h1>',
						},
						{
							html: '<ul>'
							+ '<li>SLT is a clinically-proven and rapidly growing treatment modality for Primary Open Angle Glaucoma (POAG)</li>'
							+ '<li>Customers and the market show a strong preference to multi-modality units</li>'
							+ '<li>SLT therapy is available in both integrated slit lamp and clip-on units</li>'
							+ '<li>Selecta Family of product consist of single, dual or three lasers.</li>'
							+ '<ul>'
							+ '<li style="list-style-type:circle">Selecta II -  an SLT only laser</li>'
							+ '<li style="list-style-type:circle">Selecta Duet - YAG Photodisruptor and SLT lasers</li>'
							+ '<li style="list-style-type:circle">Selecta Trio -  offers Photocoagulation, SLT and Photodisruption</ul></li>',
							
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
			items:[
				{
					style: 'margin-bottom:20px',
					html: '<h1>Selecta<sup>&reg;</sup> Duet<sup>&trade;</sup> - Positioning</h1>'
				},
				{
					xtype: 'container',
					layout: {
						type: 'hbox',
						pack: 'center',
						align: 'start'
					},
					items:[
						{
							xtype: 'container',
							style: 'margin-top:-20px',
							html: '<ul>'
								+ '<li><strong>Target Market:</strong> General ophthalmologists, mid/high-end market segment, glaucoma specialists, public/privet hospitals and clinics, space-conscious users, early adopters, all combi potential customers</li>'
								+ '<li><strong>Ophthalmic Applications:</strong> YAG Iridotomy ("laser iridectomy"), capsulotomy, Selective Laser Trabeculoplasty (SLT)</li>'
								+ '<li><strong>Rationale &amp; Market Need:</strong> ophthalmic laser photodisruptors are an essential tool in every ophthalmic clinic/hospital. posterior capsulotomy &amp; YAG laser iridotomy/iridectomy are the gold standard for the treatment of posterior capsular opacification (PCO) and angle-closure glaucoma &amp; pupillary block, respectively. SLT is clinically proven and rapidly growing treatment modality for POAG</li>'
								+ '</ul>',
							flex: 2
						},
						{
							xtype: 'container',
							html: '<img src="images/products-slide1-1.jpg" />',
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
				align: 'left'
			},
			cls: 'lightGrey',
			items:[
				{
					style: 'margin-bottom:20px',
					html: '<h3><b>Competitive Positioning:</b></h3>'
				},
				{
					xtype: 'container',
					layout: {
						type: 'hbox',
						pack: 'center',
						align: 'start'
					},
					items:[
						{
							xtype: 'container',
							style: 'margin-top:-20px',
							html: '<ul>'
								+'<li>The newest SLT product offering from the company that developed and commercialized SLT technology</li>'
								+'<li>Combination product (YAG + SLT) that offers excellent clinical solutions to all anterior segment requirements'
								+'<ul><li style="list-style-type:square">YAG Iridotomy</li>'
								+'<li style="list-style-type:square">Posterior Capsulotomy</li>'
								+'<li style="list-style-type:square">Selective Laser Trabeculoplasty (SLT)</li></ul></li>'
								+'<li>The best SLT + YAG combination product in the market that is upgradeable to a Trio (YAG + SLT + Photocoagulator)</li>'
								+'</ul>',
							flex: 2
						},
						{
							xtype: 'container',
							html: '<img src="images/products-slide4.jpg" />',
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
			cls: 'lightGrey',
			items:[
				{
					style: 'margin-bottom:20px',
					html: '<h1>Selecta<sup>&reg;</sup> Trio<sup>&trade;</sup> - Positioning</h1>'
				},
				{
					xtype: 'container',
					layout: {
						type: 'hbox',
						pack: 'center',
						align: 'start'
					},
					items:[
						{
							xtype: 'container',
							style: 'margin-top:-20px',
							html: '<ul>'
								+'<li><strong>Target Market:</strong> General ophthalmologists, high-end segment, glaucoma specialists, retina specialists, public/privet hospitals and clinics, space-conscious users, early adopters, all combi potential customers</li>'
								+'<li><strong>Ophthalmic Applications:</strong> YAG Iridotomy/iridectomy, capsulotomy, Selective Laser Trabeculoplasty (SLT), retinal photocoagulation, <u>non-selective</u> trabeculoplasty (ALT), "argon" iridotomy</li>'
								+'<li><strong>Rationale &amp; Market Need:</strong> ophthalmic laser photocoagulators and photodisruptors are an essential tool in every ophthalmic clinic/hospital. Retinal photocoagulation and anterior-segment photodisruption is the gold standard for a variety of clinical indications. SLT is clinically proven and rapidly growing treatment modality for POAG. Space in ophthalmic laser rooms is limited-multi modality platforms are a significant advantage</li>'
								+'</ul>',
							flex: 2
						},
						{
							xtype: 'container',
							html: '<img src="images/products-slide1-2.jpg" />',
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
				align: 'left'
			},
			cls: 'lightGrey',
			items:[
				{
					style: 'margin-bottom:20px',
					html: '<h3><b>Competitive Positioning:</b></h3>'
				},
				{
					xtype: 'container',
					layout: {
						type: 'hbox',
						pack: 'center',
						align: 'start'
					},
					items:[
						{
							xtype: 'container',
							style: 'margin-top:-20px',
							html: '<ul>'
								+'<li>The Flagship multi-modality product from the leading ophthalmic laser innovator</li>'
								+'<li>The best SLT + YAG + Photocoagulator combination product in the market!</li>'
								+'<li>Photocoagulator can be used at Slit Lamp and OR (with Endo Kit)</li>'
								+'<li>Combination product (YAG + SLT + PC) that offers excellent clinical solutions to all anterior AND Posterior segments requirements:'
								+'<ul><li style="list-style-type:square">YAG and/or Argon Iridotomy</li>'
								+'<li style="list-style-type:square">Posterior Capsulotomy</li>'
								+'<li style="list-style-type:square">Selective Laser Trabeculoplasty (SLT)</li>'
								+'<li style="list-style-type:square">Retinal photocoagulation</li></ul></li>'
								+'</ul>',
							flex: 2
						},
						{
							xtype: 'container',
							html: '<img src="images/products-slide6.jpg" />',
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
			cls: 'lightGrey',
			items:[
				{
					style: 'margin-bottom:20px',
					html: '<h1>Selecta<sup>&reg;</sup> II - Positioning</h1>'
				},
				{
					xtype: 'container',
					layout: {
						type: 'hbox',
						pack: 'center',
						align: 'start'
					},
					items:[
						{
							xtype: 'container',
							style: 'margin-top:-20px',
							html: '<ul>'
								+'<li><strong>Target Market:</strong> Glaucoma specialists, general ophthalmologists, public and/or privet hospitals, Haag-Streit&reg; preference users, multi-center practices</li>'
								+'<li><strong>Ophthalmic Applications:</strong> Selective Laser Trabeculoplasty (SLT)</li>'
								+'<li><strong>Rationale &amp; Market Need:</strong> SLT is clinically proven and rapidly growing treatment modality for POAG. </li>'
								+'<li><strong>Competitive Positioning:</strong> SLT product from the company that developed SLT and brought it to market, portable, compatible with Haag-Streit&reg; Slit Lamps, space-saving, price-conscious SLT potential customers</li>'
								+'</ul>',
							flex: 2
						},
						{
							xtype: 'container',
							html: '<img src="images/products-slide1-3.jpg" />',
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
			cls: 'lightGrey',
			items:[
				{
					html: '<h1>Lumenis Selecta Duet</h1>'
				},
				{
					xtype: 'container',
					layout: {
						type: 'hbox',
						pack: 'center',
						align: 'start'
					},
					items:[
						{
							xtype: 'container',
							html: '<img src="images/products-slide8.jpg" />',
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
			items:[
				{
					xtype: 'container',
					layout: {
						type: 'vbox',
						pack: 'center',
						align: 'center'
					},
					items: [
						{
							html:'<h1>Superior Design &amp; Features</h1>',
						},
						{
							xtype: 'container',
							html:'<h2><strong>Proprietary Advanced Laser Design</strong></h2>',
							align: 'left'
						},
						{
							html: '<ul>'
								+'<li>Selecta automatically runs internal tests to ensure that every laser pulse meets the users exact power requirements</li>'
								+'<li>Secondary control unit ensures power accuracy</li>'
								+'<li>A temperature-controlled KTP crystal ensures continues accuracy and stability of the 532 nm (green) beam</li>'
								+'<li>Advanced component selection, laser delivery technology and enhanced slit lamp optics ensure consistently optimal performance</li>'
								+'</ul>'
							
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
			items:[
				{
					html: '<h1>Superior Design &amp Features</h1>'
				},
				{
					xtype: 'container',
					layout: {
						type: 'vbox',
						pack: 'center',
						align: 'start'
					},
					style: 'width:759px',
					items:[
						{
							html: '<ul><li><b>Super Gaussian Beam Profile in YAG Mode</b></li></ul><p style="margin-bottom:0px">The Selecta features a highly accurate Super Gaussian beam profile in order to achieve optical breakdown (photodisruption) with the lowest possible energy levels</p>'
						},
						{
							html: '<img src="images/products-slide10.jpg" />'	
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
			items:[
				{
					html: '<h1>Superior Design &amp; Features</h1>',
					style: 'margin-bottom:20px',
				},
				{
					xtype: 'container',
					layout: {
						type: 'hbox',
						pack: 'center',
						align: 'center'
					},
					style: 'width:500px;',
					items:[
						{
							html: '<ul><li><p><strong>Storage Space</strong> - The Selecta table is equipped with built-in compact storage space for lenses and other accessories</p></li></ul>',
							flex: 2,
							style: 'padding-right:20px'
						},
						{
							html: '<img src="images/products-slide11-1.jpg" />',
							flex: 1
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
					style: 'width:500px;',
					items:[
						{
							html: '<ul><li><p><strong>Ergonomic Joystick with EZGrip&trade; Coating</strong> - The ergonomically designed joystick includes a convenient integrated laser fire-switch</p></li></ul>',
							flex: 2,
							style: 'padding-right:20px'
						},
						{
							html: '<img src="images/products-slide11-2.jpg" />',
							flex: 1
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
					style: 'width:500px;',
					items:[
						{
							html: '<ul><li><p><strong>Advanced Adjustable Offset</strong> - The Selecta features 3 posterior defocus positions with an adjustable focal point of up to 350 &micro;m posterior to the aiming beam</p></li></ul>',
							flex: 2,
							style: 'padding-right:20px'
						},
						{
							html: '<img src="images/products-slide11-3.jpg" />',
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
			cls: 'lightGrey',
			items:[
				{
					html: '<h1>Superior Design &amp; Features</h1>',
					style: 'margin-bottom:20px',
				},
				{
					xtype: 'container',
					layout: {
						type: 'hbox',
						pack: 'center',
						align: 'center'
					},
					style: 'width:500px;',
					items:[
						{
							html: '<ul><li><p><strong>Magnification Changer</strong> - The Selecta full Slit Lamp function includes a 6-step magnification changer from 6x to 42x</p></li></ul>',
							flex: 2,
							style: 'padding-right:20px'
						},
						{
							html: '<img src="images/products-slide12-1.jpg" />',
							flex: 1
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
					style: 'width:500px;',
					items:[
						{
							html: '<ul><li><p><strong>Electronic Height Adjustment</strong> - The Selecta table height can be easily adjusted using its electronic up/down switch</p></li></ul>',
							flex: 2,
							style: 'padding-right:20px'
						},
						{
							html: '<img src="images/products-slide12-2.jpg" />',
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
			cls: 'lightGrey',
			items:[
				{
					xtype: 'container',
					layout: {
						type: 'vbox',
						pack: 'center',
						align: 'center'
					},
					style: 'width:600px',
					items: [
						{
							html:'<h1>Superior Design &amp; Features</h1>',
						},
						{
							xtype: 'container',
							html:'<h2><strong>Complete List of Accessories</strong></h2>',
							align: 'left'
						},
						{
							html: '<ul>'
								+'<li>Beam Splitter</li>'
								+'<li>Co-Observation Tube</li>'
								+'<li>35 mm camera adapter</li>'
								+'<li>Video camera adapter</li>'
								+'<li>Smart &amp; PowerEase Footswitch (in PC mode)</li>'
								+'</ul>'
							
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
			items:[
				{
					html: '<h1>Lumenis Selecta Trio</h1>'
				},
				{
					xtype: 'container',
					layout: {
						type: 'hbox',
						pack: 'center',
						align: 'start'
					},
					items:[
						{
							xtype: 'container',
							html: '<img src="images/products-slide14.jpg" />',
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
			items:[
				{
					html: '<h1>Lumenis Selecta Trio</h1>',
					style:'margin-bottom:20px;'
				},
				{
					html: '<h3 style="line-height:30px;font-size:26px;color:#ff6600;">The Selecta Trio has all the advantages of the Selecta Duet in SLT and YAG modes - along with proprietary advantages in photocoagulation mode<h3>',
					width: 650,
					style: 'text-align:center;border:1px solid #000;padding:30px 50px;'
				
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
			items:[
				{
					html: '<ul>'
						+'<li>Move the illumination tower out of the way</li>'
						+'<li>Place the LaserLink S on top of the Selecta slit lamp</li>'
						+'<li>Secure the LaserLink S tightly with attached thumb screw</li>'
						+'<li>Verify the remote shows the LaserLink icon (PC) and neither YAG or SLT icons are displayed</li>'
						+'<li>Add the split illumination prism if desired</li>'
						+'<li>Attach the LaserLink S fiber optic cable to the Spectra, as described in the LaserLink S manual</li>'
						+'<li>The Selecta Trio now configured is controlled from the Novus Spectra</li>'
						+'</ul>',
					width: 410
					
				},
				{
					xtype: 'container',
					layout: {
						type: 'vbox',
						pack: 'center',
						align: 'center'
					},
					width: 410,
					items: [
						{
							html: '<h1>Attaching the S-Link</h1>',
						},
						{
							html: '<img src="images/products-slide16.jpg" />',
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
			items:[
				{
					html: '<h1>Advantages in Photocoagulation Mode</h1>',
					style: 'margin-bottom:20px',
				},
				{
					xtype: 'container',
					layout: {
						type: 'hbox',
						pack: 'center',
						align: 'center'
					},
					style: 'width:500px;',
					items:[
						{
							html: '<ul><li><p><strong>Homogenous Laser Beam</strong> - Advanced Optics and laser delivery technology ensure uniform energy distribution across the entire laser spot (evenly distributed power across the full area of the spot - eliminating potential "hot spots" </p></li></ul>',
							flex: 2,
							style: 'padding-right:20px'
						},
						{
							html: '<img src="images/products-slide17-1.jpg" />',
							flex: 1
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
					style: 'width:500px;',
					items:[
						{
							html: '<ul><li><p><strong>Novus Spectra</strong> - the Novus Spectra can be used at the Selecta Slit Lamp or detached and used in the OR. The Dual-Fiber Spectra allows changing delivery devices (e.g. LIO) fast and easy</p></li></ul>',
							flex: 2,
							style: 'padding-right:20px'
						},
						{
							html: '<img src="images/products-slide17-2.jpg" />',
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
			cls: 'lightGrey',
			items:[
				{
					html: '<h1>Advantages in Photocoagulation Mode</h1>',
					style: 'margin-bottom:20px',
				},
				{
					xtype: 'container',
					layout: {
						type: 'hbox',
						pack: 'center',
						align: 'center'
					},
					style: 'width:500px;',
					items:[
						{
							html: '<ul><li><p><strong>AcuGuide&trade; Micromanipulator</strong> - Accurate and safe laser beam guidance for fine-tuned laser application on the target tissue </p></li></ul>',
							flex: 2,
							style: 'padding-right:20px'
						},
						{
							html: '<img src="images/products-slide18-1.jpg" />',
							flex: 1
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
					style: 'width:500px;',
					items:[
						{
							html: '<ul><li><p><strong>Integrated LaserLink Cradle</strong> - Safely and conveniently stow the LaserLink in its dedicated cradle when not using the laser in photocoagulation mode</p></li></ul>',
							flex: 2,
							style: 'padding-right:20px'
						},
						{
							html: '<img src="images/products-slide18-2.jpg" />',
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
			cls: 'lightGrey',
			items:[
				{
					html:'<h1>SureSpot&trade; Optics</h1>'
				},
				{
					xtype: 'container',
					layout: {
						type: 'hbox',
						pack: 'center',
						align: 'start'
					},
					style: 'background:url(images/products-slide19.png) no-repeat center top',
					height:485,
					width:752,
					items:[
						{
							html: '<p><strong>Sharply defined and evenly distributed power on the retina; Safe &amp; low-power density at the cornea and the lens</strong></p>',
							width:325,
							style: 'margin-left:350px; margin-top:70px;'
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
			items:[
				{
					html:'<h1>Lumenis Selecta II</h1>'
				},
				{
					html: '<img src="images/products-slide20.png" />'
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
			items:[
				{
					html: '<h1>Selecta II - Features &amp; Benefits</h1>',
					style: 'margin-bottom:20px',
				},
				{
					xtype: 'container',
					layout: {
						type: 'hbox',
						pack: 'center',
						align: 'center'
					},
					style: 'width:500px;',
					items:[
						{
							html: '<ul><li><p><strong>True Portability</strong> - Weighing only 11.5 Kg, the Selecta II can be easily transported from one location to another - maximizing the investment of the user/s</p></li></ul>',
							flex: 2,
							style: 'padding-right:20px'
						},
						{
							html: '<img src="images/products-slide21-1.jpg" />',
							flex: 1
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
					style: 'width:500px;',
					items:[
						{
							html: '<ul><li><p><strong>Space Saving</strong> - The Selecta II is a clip-on laser that can easily be connected or stowed away at the end of the procedure or laser day</p></li></ul>',
							flex: 2,
							style: 'padding-right:20px'
						},
						{
							html: '<img src="images/products-slide21-2.jpg" />',
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
			cls: 'lightGrey',
			items:[
				{
					html:'<h1>Selecta II - Features &amp; Benefits</h1>'
				},
				{
					html: '<ul><li><p><strong>Meeting Preferences</strong> - compatible with most commercially available Haag-Streit (/style) 900 BM/BQ Slit Lamps</p></li></ul>'
				},
				{
					xtype: 'container',
					layout: {
						type: 'hbox',
						pack:'center',
						align: 'center'
					},
					items: [
						{
							xtype: 'container',
							layout: {
								type: 'vbox',
								align: 'center',
								flex:1
							},
							items: [
								{
									html: '<h2>Parallel ("Zeiss-style") optics</h2>'
									
								},
								{
									html: '<img src="images/products-slide22-1.jpg" />'
								}
							]
						},
						{
							xtype: 'container',
							layout: {
								type: 'vbox',
								align: 'center',
								flex:1
							},
							items: [
								{
									html: '<h2>Converging ("HS-style") optics</h2>'
									
								},
								{
									html: '<img src="images/products-slide22-2.jpg" />'
								}
							]
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
			cls: 'lightGrey',
			items:[
				{
					xtype: 'container',
					layout: {
						type: 'vbox',
						flex:1,
						align: 'center'
					},
					padding:10,
					style: 'padding-right:20px;',
					items: [
						{
							html: '<h1>Lumenis Selecta Family</h1>',
						},
						{
							html: '<img src="images/products-slide23-1.jpg" />',
						}
					]
					
					
				
				},
				{
					xtype: 'container',
					layout: {
						type: 'vbox',
						flex:1,
						align: 'center'
					},
					padding:10,
					items: [
						{
							html: '<img src="images/products-slide23-2.jpg" />',
						}
					]
					
					
				
				}
			]
	   },
     {
      xtype: 'quizselectaview'
     }
    ]
  }
  
  });