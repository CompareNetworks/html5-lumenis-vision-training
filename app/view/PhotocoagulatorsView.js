Ext.define("LumenisTraining.view.PhotocoagulatorsView", {
	extend : "Ext.Carousel",
	xtype : "photocoagulatorsview",
	config : {
		title : "Lumenis Photocoagulators",
		id : "photocoagulatorsView",
		styleHtmlContent : true,
		documents : [
		],
		items : [{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				documents : [],
				items : [{
						html : '<h1>Photocoagulators</h1>',
						style : 'margin-bottom:20px',
					}, {
						html : '<img src="images/photocoagulators.jpg" width="600" />'

					}, {
						html : '<h2><strong>There are many competitive products with little differentiation<br> We can set ourselves apart with service, features, accessories and delivery devices.</strong></h2>',
						style : 'padding:20px;text-align:center;'

					},
				]
			}, {
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				documents : [],
				items : [{
						html : '<h1>Why Lumenis</h1>',
						style : 'margin-bottom:20px',
					}, {
						html : '<ul>'
						 + '<li>Pioneered the first argon laser photocoagulator for ophthalmology in 1970</li>'
						 + '<li>Set a new standard in photocoagulation with Power-on-Demand™</li>'
						 + '<li>Introduced the breakthrough Selecta 7000 Glaucoma (SLT) Laser System for treating open-angle glaucoma</li>'
						 + '<li>Revolutionized the standard of care for wet macular degeneration with the Opal Photoactivator for Visudyne™ Therapy</li>'
						 + '<li>Offer a selection of photocoagulators and accessories to meet the needs of the market</li>'
						 + '</ul>'
					}

				]
			}, {
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Differentiating Lumenis</h1>',
						style : 'margin-bottom:20px',
					}, {
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [{
								html : '<ul><h2>Features with differential benefits:</h2>'
								 + '<li>ClearView™ Filters</li>'
								 + '<li>SureSpot™ Optics</li>'
								 + '<li>Smart™ Fiber Technology</li>'
								 + '<li>CaseSaver™ Mode</li>'
								 + '</ul>'
							}, {
								xtype : 'container',
								layout : {
									type : 'vbox',
									pack : 'center',
									align : 'top'
								},
								cls : 'lightGrey',
								items : [{
										html : '<img src="images/Photocoagulator1.jpg" width="320" />'

									}, {
										html : '<img src="images/photocoagulators2.jpg" width="140"/> <img src="images/Photocoagulators3.jpg" width="140" />',
										style : 'vertical-align:top;'

									},

								]
							},
						]
					}
				]
			}, {
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>ClearView™ Filters</h1>',
						style : 'margin-bottom:20px',
					}, {
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [{
								html : '<img src="images/clearView2.jpg" />'
							}

						]
					}
				]
			}, {
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				documents : [],
				items : [{
						html : '<h1>SureSpot Optics</h1>',
						style : 'margin-bottom:20px',
					}, {
						html : '<img src="images/sureSpotOptics.jpg" width="450" />'

					}, {
						html : '<h2><strong>SureSpot Optics improve safety, precision and efficacy </strong></h2>',
						style : 'padding:20px;'

					},

				]
			}, {
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Compare SureSpot to Defocus Optics</h1>',
						style : 'margin-bottom:20px',
					}, {
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [{
								html : '<ul>'
								 + '<li>Most physicians learned to titrate treatment with the legacy Coherent “Defocus” laser optics…</li>'
								 + '<li>…but with larger spot sizes, the aiming beam is fuzzy on the retina  </li>'
								 + '</ul>',
								 style : 'width:400px;'
							}, {
								html : '<img src="images/comapreSurespot.jpg" width="400" />'
							}
						]
					}
				]
			}, {
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Compare SureSpot to Par Focal Optics</h1>',
						style : 'margin-bottom:20px',
					}, {
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [{
								html : '<ul>'
								 + '<li>Par focal optics provide a sharp focus on the retina….</li>'
								 + '<li>but with larger spot sizes, create high power density on cornea</li>'
								 + '</ul>',
								 style : 'width:400px;'
							}, {
								html : '<img src="images/comapreSurespot2.jpg" width="400" />'
							}
						]
					}
				]
			}, {
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Surespot Optics</h1>',
						style : 'margin-bottom:20px',
					}, {
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [{
								html : '<ul>'
								 + '<li>SureSpot optics provide sharply defined and evenly distributed power on the retina…</li>'
								 + '<li>…and low-power density at the cornea and the lens, even with larger spot sizes</li>'
								 + '</ul>',
								  style : 'width:400px;'
							}, {
								html : '<img src="images/sureSpotOptics2.jpg" width="400" />'
							}
						]
					}
				]
			}, {
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				documents : [],
				items : [{
						html : '<h1>SureSpot Optics</h1>',
						style : 'margin-bottom:20px',
					}, {
						html : '<img src="images/sureSpotOptics3.jpg" width="600" />'

					},

				]
			}, {
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Vision One</h1>',
						style : 'margin-bottom:20px',
					}, {
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [{
								html : '<ul>'
								 + '<li>The newest generation of photocoagulator laser systems</li>'
								 + '<li>Modular - Choice of wavelengths</li>'
								 + '<li>Intuitive user interface color touch screen</li>'
								 + '<li>Voice confirmation</li>'
								 + '<li>Programmable memory settings</li>'
								 + '<li>Full remote control keypad</li>'
								 + '<li>Smart™ or PowerEase™ footswitch</li>'
								 + '</ul>'
							}, {
								html : '<img src="images/vision1.jpg" width="250" />'
							}
						]
					}
				]
			}, {
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				documents : [],
				items : [{
						html : '<h1>Vision One is Modular – Choice of Wavelengths</h1>',
						style : 'margin-bottom:20px',
					}, {
						html : '<img src="images/vision2.jpg" width="600" />'

					}, {
						html : '<h2><strong>Possible Combinations</strong></h2>',
						style : 'padding:20px;'

					},

				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				documents : [],
				items : [{
						html : '<h1>Vision One is Modular – Choice of Wavelengths</h1>',
						style : 'margin-bottom:20px',
					},
					{
						html : '<ul>'
						 + '<li>Pigmented layers of the retina have specific absorption properties.   This is taken into account as the surgeon choses the laser wavelength for treatment</li>'
						 + '<li>The appropriate wavelength will delivery laser energy to the target tissue and will spare the adjacent normal tissues</li>'
						 + '</ul>'
					}

				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				documents : [],
				items : [{
						html : '<h1>Vocabulary Hints</h1>',
						style : 'margin-bottom:20px',
					},
					{
						html : '<ul>'
						 + '<li>A Chromophore is the part of a molecule responsible for its color </li>'
						 + '<li>Melanin is the main chromophore in the Retinal Pigment Epithelium (RPE), </li>'
						 + '<li>Xanthophyll is the yellow pigment found in the macula lutea (yellow spot) in the retina </li>'
						 + '<li>Hemoglobin is a red protein responsible for transporting oxygen in the blood</li>'
						 + '<li>On-axis illumination slit lamp is the term for the Haag Streit style</li>'
						 + '<li>Off-axis illumination slit lamp is the term for the Zeiss style </li>'
						 + '</ul>'
					}

				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Green 532nm wavelength</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<ul>'
								 + '<li>Standard of care and the most frequently used wavelength</li>'
								 + '<li>Excellent for targeting melanin in the retinal pigment epithelium (RPE) layer </li>'
								 + '<li>Minimal absorption in macular xanthophyll, producing an optimally controlled treatment</li>'
								 + '<li>Easily penetrates clear fluid, such as vitreous   Has good penetration through clear fluid and minimal pigmentary disturbances</li>'
								 + '<li>Well suited for retinal treatments in which melanin is the target chromophore, such as pan-retinal photocoagulation</li>'
								 + '<li>Shorter wavelength scatters more, therefore does not have good penetration through cloudy media</li>'
								 + '</ul>',
								style : 'width:400px;',

							}, {
								html : '<img src="images/green532.jpg" />'
							}
						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Yellow 577nm wavelength:</h1>',
						style : 'margin-bottom:20px',
					}, {
						html : '<h2>“In Ophthalmic photocoagulation ,577nm provides a higher degree of tissue selectivity than any previous laser wavelength. This delivers superior results with reduced patient discomfort.”(Coherent Website)</h2>'
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<ul>'
								 + '<li>Better penetration through fluid and opacities such as nuclear sclerotic cataracts </li>'
								 + '<li>Maximum absorption in hemoglobin</li>'
								 + '<li>Wavelength is not absorbed by xanthophylls, thus minimizing scatter of light through the eye, thus more efficient treatment, requiring lower energy levels, less discomfort for the patient</li>'
								 + '<li>Effective in the treatment of proliferative retinopathy</li>'
								 + '<li>Effective in the treatment of retinal vein occlusion</li>'
								 + '<li>Effective in the treatment of extrafoveal neovascularization</li>'
								 + '</ul>',
								style : 'width:400px;',
							}, {
								html : '<img src="images/yellow577.jpg" />'
							}
						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Red 659nm wavelength</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<ul>'
								 + '<li>Penetration through hemoglobin to stop retinal hemorrhaging or micro-aneurysms</li>'
								 + '<li>Longer wavelength allows deeper penetration into the choroid for treatment of choroidal melanomas or deep pigmented lesions</li>'
								 + '<li>Can be utilized for certain ocular tumors</li>'
								 + '<li>Due to deeper penetration, there is more patient discomfort</li>'
								 + '</ul>',
								style : 'width:400px;',
							}, {
								html : '<img src="images/red659.jpg" />'
							}
						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				documents : [],
				items : [{
						html : '<h1>Vision One Intuitive User Interface</h1>',
						style : 'margin-bottom:20px',
					}, {
						html : '<img src="images/VisionOneUI.jpg" width="800" />'

					},
					{
						html : '<h2><strong>User interface is optimized for the retinal surgeon</strong></h2>',
						style : 'padding:20px;'

					},

				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Vision One Voice Confirmation</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<ul>'
								 + '<li>Provides additional peace of mind during the laser procedure</li>'
								 + '<li>Has volume control to adapt to the surroundings</li>'
								 + '<li>Can be switched off</li>'
								 + '</ul>'
							}, {
								html : '<img src="images/vision3.jpg" width="250" />'
							}
						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				documents : [],
				items : [{
						html : '<h1>Vision One Programmable Memory Settings</h1>',
						style : 'margin-bottom:20px',
					}, {
						html : '<img src="images/VisionOnepm.jpg" width="600" />'

					},
					{
						html : '<h2>User programmable memory settings allow multiple surgeons to store their common treatment parameters</h2>',
						style : 'padding:20px;'

					},

				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'hbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				documents : [],
				items : [
					{
						xtype : 'container',
						layout : {
							type : 'vbox',
							pack : 'center',
							align : 'center'
						},
						cls : 'lightGrey',
						documents : [],
						items : [{
								html : '<h1>Vision One Full Remote Control Keypad</h1>',
								style : 'margin-bottom:20px',
							},
							{
								html : '<ul>'
								 + '<li>The remote control provides all of the necessary controls for setting treatment parameters. It can be used in place of, or in addition to, the laser control screen</li>'
								 + '</ul>',
								style : 'width:400px',
							}
						]
					}, {
						html : '<img src="images/VisionOnepm1.jpg" width="200" /><br><img src="images/VisionOnepm2.jpg" width="200" />'

					}

				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'hbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				documents : [],
				items : [
					{
						xtype : 'container',
						layout : {
							type : 'vbox',
							pack : 'center',
							align : 'center'
						},
						cls : 'lightGrey',
						documents : [],
						items : [{
								html : '<h1>Vision One Footswitches</h1>',
								style : 'margin-bottom:20px',
							},
							{
								html : '<ul><h2>Smart™ Footswitch </h2>'
								 + '<li>Senses when the operators’ foot enters the shroud and immediately engages the eye safety filter.  This eliminates the chance of the laser firing before the eye safety filter is engaged</li>'
								 + '</ul>'
								 + '<ul><h2>PowerEase™ Footswitch </h2>'
								 + '<li>Provides control of laser power with a simple side movement of the operator’s foot  </li>'
								 + '</ul>',
								style : 'width:400px;margin-right:20px;',
							}
						]
					}, {
						html : '<img src="images/VisionOnefs.jpg" width="150" /><br><img src="images/VisionOnefs2.jpg" width="150" />'

					}

				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				documents : [],
				items : [{
						html : '<h1>Vision One OPSL Technology </h1>',
						style : 'margin-bottom:20px',
					},
					{
						html : '<ul>'
						 + '<li>Optically Pumped Semiconductor Laser (OPSL) Technology, patented by Coherent</li>'
						 + '<li>High power output potential (up to 2000 mW) makes it ideal for ophthalmic application.  Typical use does not strain its capabilities</li>'
						 + '<li>OPSL has historically been used in other industries but is relatively new to ophthalmology</li>'
						 + '<li>It is the most compact and efficient laser technology on the market</li>'
						 + '</ul>'
					}

				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Vision One OPSL Technology </h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<h2>OPSLs have been designed for optimum performance in multimode or single mode operation. Combined with power and wavelength scaling capabilities, this provides the preferred solution for therapeutic applications such as ophthalmology or dermatology/aesthetics</h2>',
								style : 'width:300px;margin-right:20px;',
							}, {
								html : '<img src="images/opsl.jpg" width="200" height="300"/>'
							}
						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Vision One</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<ul>'
								 + '<li>Compatible with most commercially  available slit lamps'
								 + '<ul>'
								 + '<li>Off-axis illumination style slit lamps (such as Zeiss)</li>'
								 + '<li>On-axis illumination slit lamps (such as Haag Streit)  </li>'
								 + '</ul>'
								 + '</li>'
								 + '</ul>'
							}, {
								html : '<img src="images/vision5.jpg" width="200" />'
							}
						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Vision One SmartFiber™ Technology</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<ul>'
								 + '<li>Senses delivery devices and accessories that are connected to the ports.  </li>'
								 + '<li>Assesses if they are compatible, properly installed, or missing.  </li>'
								 + '<li>Signals user via the color touch screen and audible beeps</li>'
								 + '</ul>'
							}, {
								html : '<img src="images/vision6.jpg" width="200" />'
							}
						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Vision One CaseSaver™ Mode</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<ul>'
								 + '<li>If a given laser module has low power or does not operate properly, the CaseSaver Mode allows the user to continue with that wavelength at low power or use another wavelength </li>'
								 + '<li>Procedure  does not have to be rescheduled </li>'
								 + '<li>Convenient for both patient and doctor </li>'
								 + '</ul>',
								style : 'width:400px;',
							}, {
								html : '<img src="images/vision7.jpg" width="250" />'
							}
						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Vision One ClearView™ Filter</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<ul>'
								 + '<li>The Lumenis ClearView™ filter’s photopic balanced coating eliminates color distortion of the treatment site while optimizing white light transmission or “brightness” of the physician’s view.</li>'
								 + '</ul>',
								style : 'width:400px;',
							}, {
								html : '<img src="images/Photocoagulator1.jpg" width="300" />'
							}
						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Vision One</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<img src="images/vision8.jpg" />'
							}

						]
					}
				]
			}, {
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Vision One Specifications</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<img src="images/vision9.jpg" />'
							}

						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				documents : [],
				items : [{
						html : '<h1>Vision One is Smart, Convenient and Flexible</h1>',
						style : 'margin-bottom:20px',
					}, {
						html : '<img src="images/VisionOnesmart.jpg" width="600" />'

					},

				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				documents : [],
				items : [{
						html : '<h1>Vision One Dual Ports</h1>',
						style : 'margin-bottom:20px',
					},
					{
						html : '<ul>'
						 + '<li>The port on the right is a unique FC port exclusive to Lumenis.  It provides excellent alignment, is more reliable and easier for install</li>'
						 + '<li>Lumenis Laser Links and the Lumenis Insight slit lamp have FC connectors and are to be connected to the FC port.   </li>'
						 + '<li>The port on the left is a regular SMA port for connection to endoprobes, LIO, and accessories that have the standard SMA style connectors</li>'
						 + '</ul>'
					}

				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Vision One Dual Ports</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<ul>'
								 + '<li>The port on the right is a unique FC port exclusive to Lumenis.  It provides excellent alignment, is more reliable and easier for install</li>'
								 + '<li>Lumenis Laser Links and the Lumenis Insight slit lamp have FC connectors and are to be connected to the FC port.   </li>'
								 + '<li>The port on the left is a regular SMA port for connection to endoprobes, LIO, and accessories that have the standard SMA style connectors</li>'
								 + '</ul><br>'
								 + '<h2>When placing an order for Vision One plus accessories, be mindful to account for the two different ports, and be sure the accessories have the correct connectors!</h2>',
								style : 'width:400px;',
							}, {
								html : '<img src="images/VisionOnedp.jpg" width="280" />'
							}
						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				documents : [],
				items : [{
						html : '<h1>Vision One is Modular – Choice of Wavelengths</h1>',
						style : 'margin-bottom:20px',
					}, {
						html : '<h2><strong>Possible Combinations</strong></h2>',
						style : 'padding:20px;'

					}, {
						html : '<img src="images/VisionOnemodule.jpg" width="600" />'

					}, {
						html : '<h2>If the Vision One is purchased with just one or two colors, the additional colors can be added as a field upgrade </h2>',
						style : 'padding:20px;'

					},

				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Vision One differs from Novus Varia</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<img src="images/vision10.jpg" width="600" />'
							}

						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Example of Vision One Sales Order # 1 </h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<img src="images/vision11.jpg" />'
							}

						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Example of Vision One Sales Order #2</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<img src="images/vision12.jpg" />'
							}

						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Example of Vision One Sales Order #3</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<img src="images/vision13.jpg" />'
							}

						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Vision One System Ordering Information:</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<img src="images/vision14.jpg" />'
							}

						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Vision One Slit lamps, LIOs and Laser Links</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<img src="images/vision15.jpg" />'
							}

						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Vision One ESFs and Endo kits</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<img src="images/vision16.jpg" />'
							}

						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				documents : [],
				items : [{
						html : '<h1>Vision One is Scanning Laser Link Compatible </h1>',
						style : 'margin-bottom:20px',
					}, {
						html : '<img src="images/vision17.jpg" width="500" />'

					},

				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Zeiss Visulas Trion</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<img src="images/vision18.jpg" width="650" />'
							}

						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Zeiss Visulas Trion comparison</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<img src="images/vision19.jpg" width="600" />'
							}

						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Nidek MC-500</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<img src="images/vision20.jpg" />'
							}

						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Nidek MC-500 comparison</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<img src="images/vision21.jpg" width="600" />'
							}

						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Iridex IQ577 Comparison</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<img src="images/vision22.jpg" width="600" />'
							}

						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Quantel Supra 577 Y Comparison </h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<img src="images/vision23.jpg" width="600" />'
							}

						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Ellex Integre Yellow</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<img src="images/vision24.jpg" />'
							}

						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Ellex Integre Yellow or Duo</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<img src="images/vision25.jpg" width="500" />'
							}

						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Ellex Integre Yellow or Duo Comparison </h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<img src="images/vision26.jpg" width="600" />'
							}

						]
					}
				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				documents : [],
				items : [{
						html : '<h1>Vision One Important Facts</h1>',
						style : 'margin-bottom:20px',
					},
					{
						html : '<ul>'
						 + '<li>Laser Links for Novus Varia and Novus Spectra are compatible with Vision One.  </li>'
						 + '<li>BUT…Eye Safety Filters for Varia and Spectra are not compatible w/Vision One</li>'
						 + '<li>FC port is compatible only with Lumenis products with FC connector (Optimized Fiber Coupler) such as Vision One LIOs and Vision One Laser Links</li>'
						 + '</ul>'
					}

				]
			},
			{
				xtype : 'container',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				cls : 'lightGrey',
				items : [{
						html : '<h1>Vision One – Summary</h1>',
						style : 'margin-bottom:20px',
					},
					{
						xtype : 'container',
						layout : {
							type : 'hbox',
							pack : 'center',
							align : 'center'
						},
						cls : "lightGrey",
						documents : [],
						items : [
							{
								html : '<ul>'
								 + '<li>Modularity</li>'
								 + '<li>OPSL – Coherent Laser Heads</li>'
								 + '<li>Upgradeability</li>'
								 + '<li>Voice confirmation</li>'
								 + '<li>Programmable Memory Settings</li>'
								 + '<li>Color LCD Screen and Full Remote Control</li>'
								 + '<li>Zeiss/Haag-Streit Laser Links</li>'
								 + '<li>CaseSaver™ Mode</li>'
								 + '<li>SmartFiber™ Technology</li>'
								 + '</ul>'
							}, {
								html : '<img src="images/vision1.jpg" width="250" />'
							}
						]
					}
				]
			},
			{
				xtype : "quizphotocoagulatorsview"
			}
		]
	}

});