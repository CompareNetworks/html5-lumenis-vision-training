Ext.define("LumenisTraining.view.AnteriorSegmentView", {
	extend: "Ext.Carousel",
	xtype: "anteriorsegmentview",
	config: {
		title: "Anterior Segment",
		id: "anteriorSegmentView",
		styleHtmlContent: true,
		items: [

		//first slide replaced by video
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
				html: '<h1>The Eye - Anterior Segment</h1>'
			}, {
				xtype: 'button',
				text: "",
				bubbleEvents: "videoEventEye6",
				style: 'background-image: url("images/anteriorSegment.jpg"); border:0; background-color:transparent',
				padding: 0,
				width: 600,
				height: 444,
				margin: 0,
				handler: function() {
				  this.fireEvent("videoEventEye6", this)
				}

			}, {
				html: "<p>(Tap image to see video)</p>"
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
				documents: [],
				items: [{
					html: '<h1>Conjunctiva </h1>',
					style: 'margin-bottom:20px',
				},

				{
					html: '<ul>' + '<li>The <strong>conjunctiva</strong> is a clear membrane that covers the <strong>sclera</strong> (white part of the <strong>eye</strong>) and lines the inside of the <strong>eyelids</strong>. </li>' + '<li>It helps lubricate the <strong>eye</strong> by producing <strong>mucus</strong> and <strong>tears</strong>, although a smaller volume of <strong>tears</strong> than the <strong>lacrimal gland</strong>.</li>' + '</ul>',
					style: 'width:400px;'
				}]
			}, {
				html: '<img src="images/conjunctiva.jpg" width="280" />'
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
					html: '<h1>Sclera</h1>',
					style: 'margin-bottom:20px',
				},

				{
					html: '<ul>' + '<li>Sclera The sclera is commonly known as "the white of the eye."  It is the tough, opaque tissue that serves as the eye&acute;s protective outer coat.</li>' + '<li>Maintains the shape of the eyeball (when distended by IOP)</li>' + '<li>The Limbus is the junction between the cornea and the sclera.</li>' + '</ul>',
					style: 'width:400px;margin-right:20px;'
				}]
			}, {
				html: '<img src="images/sclera.jpg" width="280" />'
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
			items: [{
				html: '<h1>Cornea</h1>',
				style: 'margin-bottom:20px',
			}, {
				html: '<ul>' + '<li>The cornea is the eye&acute;s outermost layer. It is the clear, dome-shaped surface that covers the front of the eye.</li>' + '<li>Principle refractory structure (40 of the 60 diopters refractive power of the eye – approx. 70%)</li>' + '<li>It is avascular</li>' + '</ul>',
				style: 'width:400px;margin-right:20px;'
			}, {
				html: '<img src="images/cornea.jpg" width="280" />'
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
				documents: [],
				items: [{
					html: '<h1>Anterior Chamber</h1>',
					style: 'margin-bottom:20px',
				},

				{
					html: '<ul>' + '<li>The <strong>anterior chamber</strong> is the fluid-filled space inside the eye between the <strong>iris</strong> and the <strong>cornea&acute;s</strong> innermost surface, the endothelium</li>' + '<li><strong>Aqueous humor</strong> is the fluid that fills the anterior chamber. </li>' + '</ul>',
					style: 'width:400px;margin-right:20px;'
				}]
			}, {
				html: '<img src="images/anteriorChamber.jpg" width="280" />'
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
					html: '<h1>Aqueous humor</h1>',
					style: 'margin-bottom:20px',
				},

				{
					html: '<ul><h2>The aqueous serves three primary functions:</h2>' + '<li>It provides a clear refractive media through which light passes to be focused on the retina. </li>' + '<li>It carries nutrients which serve the metabolism of the cornea and the lens. </li>' + '<li>It creates an intraocular pressure which serves to maintain the shape of the globe.</li>' + '</ul>',
					style: 'width:400px;margin-right:20px;'
				}]
			}, {
				html: '<img src="images/aqueousHumor.jpg" width="280" />'
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
					html: '<h1>Anterior Chamber Angle</h1>',
					style: 'margin-bottom:20px',
				},

				{
					html: '<ul>' + '<li>The area in the anterior chamber where the <strong>cornea, sclera </strong>and <strong>iris </strong>join is known as the <strong>angle</strong>. </li>' + '<li>The angle structures include:  the outermost part of the <strong>iris</strong>, the front of the <strong>ciliary body</strong>, the <strong>trabecular meshwork</strong>, and the Canal of <strong>Schlemm</strong> </li>' + '</ul>',
					style: 'width:400px;margin-right:20px;'
				}]
			}, {
				html: '<img src="images/anteriorChamber2.jpg" width="280" />'
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
					html: '<h1>Ciliary body</h1>',
					style: 'margin-bottom:20px',
				},

				{
					html: '<ul><h2>The ciliary body has three functions: </h2>' + '<li>Aqueous humor production</li>' + '<li>Production and maintenance of the lens zonules</li>' + '<li>Accommodation</li>' + '</ul>',
					style: 'width:400px;margin-right:20px;'
				}]
			}, {
				html: '<img src="images/ciliaryBody.jpg" width="280" />'
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
					html: '<h1>Ciliary Muscle</h1>',
					style: 'margin-bottom:20px',
				},

				{
					html: '<ul><h2>The Ciliary Muscle</h2>' + '<li>A muscle in the eye that controls the eye&acute;s accommodation for viewing objects at varying distances.</li>' + '<li>The ciliary muscle is part of the ciliary body. </li>' + '</ul>',
					style: 'width:400px;margin-right:20px;'
				}]
			}, {
				html: '<img src="images/ciliaryMuscle.jpg" width="280" />'
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
					html: '<h1>Trabecular Meshwork</h1>',
					style: 'margin-bottom:20px',
				},

				{
					html: '<ul>' + '<li>The TM imparts a normal resistance to the efflux of aqueous humor, the clear fluid that provides nutritive support to the avascular tissues in the front of the eye. </li>' + '<li>This natural resistance to aqueous humor outflow provides a modest positive pressure inside the eye (intraocular pressure, IOP), which allows the eye to maintain its spherical shape.</li>' + '</ul>',
					style: 'width:400px;margin-right:20px;'
				}]
			}, {
				html: '<img src="images/trabecularMeshwork.jpg" width="300" />'
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
				html: '<h2><strong>SEM: normal trabecular meshwork</strong></h2><br><p>uveal and scleral TM as seen from anterior chamber view  (Courtesy of Doug Johnson)</p>',
			}, {
				html: '<img src="images/trabecularMeshwork2.jpg" width="500" />'
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
				html: '<h1>Schlemm’s Canal</h1>',
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
					html: '<ul>' + '<li>These canals are located around the perimeter of the iris. They allow aqueous fluid to drain back into the blood stream. </li>' + '<li>The Trabecular Meshwork along with the Canal of Schlemm regulate the eyes internal pressure.</li>' + '</ul>',
					style: 'width:400px;margin-right:20px;'
				}, {
					html: '<img src="images/schlemmsCanal.jpg" width="300" />'
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
				documents: [],
				items: [{
					html: '<h1>Pupil & Iris</h1>',
					style: 'margin-bottom:20px',
				},

				{
					html: '<ul>' + '<li>The Iris is positioned between the cornea and lens; is immersed in Aqueous humor, and melanocytes concentration determines its hue.</li>' + '<li>The iris divides the anterior segment into the anterior and posterior chambers</li>' + '<li>Nevus - Are benign, freckles in the eye. These should be checked regularly to ensure it has not transformed to a melanoma (tumor)</li>' + '</ul>',
					style: 'width:400px;margin-right:20px;'
				}]
			}, {
				html: '<img src="images/pupil.jpg" width="280" />'
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
					html: '<ul>' + '<li>The <strong>lens</strong> is a transparent, <strong>biconvex</strong> (lentil-shaped) structure in the <strong>eye</strong> that, along with the <strong>cornea</strong>, helps to refract light to be <strong>focused</strong> on the retina.</li>' + '<li>In humans, the <strong>refractive power</strong> of the lens in its natural environment is roughly <strong>1/3</strong> of the eye’s total power</li>' + '</ul>',
					style: 'width:400px;margin-right:20px;'
				}, {
					html: '<img src="images/crystallineLens.jpg" />'
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
				html: '<h1>Melanocytes & Melanin </h1>',
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
				items: [

				{
					html: '<ul>' + '<li><strong>Melanocyte</strong>: A pigment-producing cell in the skin, hair and eye that determines their color. The <strong>pigment</strong> that melanocytes make is called <strong>melanin</strong>. </li>' + '<li>Cells that contain <strong>melanosomes</strong> are called <strong>melanocytes</strong>; such as the Iris, trabecular meshwork, ciliary body and retinal pigment epithelium in the eye</li>' + '</ul>',
					style: 'width:400px;margin-right:20px;'
				}, {
					html: '<img src="images/melanocytes.jpg" />'
				}]
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
				activate: function() {
					threeSixty = {
						init: function() {
							this._vr = new AC.VR("viewer", 'images/Eyeball_720_rotate_#####.jpg', 200, {
								invert: false,
								initialPos: 60,
								autoPlay: true,
								noCache: true
							});
						},
						didShow: function() {
							this.init();
						},
						willHide: function() {
							recycleObjectValueForKey(this, "_vr");
						},
						shouldCache: function() {
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
		}]
	}
});