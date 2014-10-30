Ext.define("LumenisTraining.view.YAGView", {
  extend: "Ext.Carousel",
  xtype: "yagview",
  config: {
    title: "YAG",
    id: "yagView",
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
			cls: 'lightGrey',
			items:[
					{
					html: '<h1>Combination Nd:YAG & SLT & or Photocoagulator Lasers</h1>',
					style:'margin-bottom:20px'
					},	
					{
					html: '<h2>Major Lumenis Competitors</h2>',
					style:'margin-bottom:20px'
					},
					{
					html: '<img src="images/yag1.jpg" />',
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
        documents: [],
        items: [
			{
              html:'<h1>Major Nd:YAG & PC</br>Combination Competitors</h1>',
			  style:'margin-bottom:20px;text-align:center',
			},   
		  
            {
              html: '<ul>'
					+ '<li>A.R.C. Lasers - Germany</li>'
					+ '<li>LightMed – Taiwan</li>'
					+ '<li>Lumenis Vision – USA</li>'
					+ '<li>Nidek – Japan</li>'
					+ '<li>Quantel Medical - France</li>'
					+ '<li>Carl “Zeiss” Meditec – Germany</li>'
					+ '</ul>'
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
            html:'<h1>Q-las 10</h1>',
			style:'margin-bottom:20px',
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
				html: '<strong>Q-las 10 (A.R.C. laser)</strong>'
				+'<br/>Wavelength 1064 nm'
				+'<br/>Pulse duration < 4 Nanoseconds'
				+'<br/>Aiming beam Dual red diode'
				+'<br/>Energy 0.3 -10 milli joules, 7 steps'
				+'<br/>Spot size < 8 microns'
				+'<br/>Cone angle 16°'
				+'<br/>Burst mode 1 - 2 - 3 pulses, '
				+'<br/>20 microseconds pulse separation'
				+'<br/>Repetition rate 0.8 seconds'
				+'<br/>Mode structure Gauss'
				+'<br/>Defocus - Posterior 2 steps -125 / 250 µ'
				+'<br/>Cooling Forced air'
				+'<br/>Power requirements 220V-3A alternative 110V-6A'
				+'<br/>Footprint 0.5 m²<br/>Weight 45 kg'
				},
				
				{
				  html: '<img src="images/q_las.jpg" />',
				  style: 'padding:30px;'
				  
				},
			]
			},
			{
			html: '<img src="images/yag_Logo1.jpg"/>',
			style: 'position:absolute; top:580px; left:50px;'
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
					html: '<table style="line-height:100%;border-spacing:0px">'
						+'<tr>'
						+'<th>Selecta Duet</th>'
						+'<th></th>'
						+'<th>Q-Las (A.R.C.)</th>'
						+'<th></th>'
						+'</tr>'
						+'<tr style="background-color:#f7fbfc">'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Integrated SLT & YAG lasers</li></ul></td>'
						+'<td style="text-align:left;padding:5px 20px 5px 5px;margin-right:10px;" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Tilted illumination mirror design allows on axis visual</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'</tr>'
						+'<tr>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Upgradeable to: 532nm Photocoagulator laser</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Clip on SLT laser &</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'</tr>'
						+'<tr style="background-color:#f7fbfc">'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Continuously variable energy in 0.1 mJ increments</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Upgradeable to 532nm Green  Photocoagulator laser</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'<tr>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Continuously variable posterior offset 0 – 350 microns</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Energy 0.5 to 10 mJ, 10 steps</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'</tr>'
						+'<tr style="background-color:#f7fbfc">'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Color LCD remote control, easy to use</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Posterior Offset at 150, 300 microns</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'<tr>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Locking Caster wheels</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Two monochrome display panels for SLT and YAG modes</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'<tr style="background-color:#f7fbfc">'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>No wheels, difficult to move</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'<tr>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Only H/S slit lamp versions</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'</table>'
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
			items:[
					{
					html: '<h1>Q-Las 10 & <em>TrabecuLas</em></h1>',
					style:'margin-bottom:20px'
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
							pack: 'center',
							align: 'center'
						},
						cls: 'lightGrey',
						items:[
						{
						html: '<ul>'
						+ '<li>Nd:YAG Photodisruptor plus an SLT Laser (clip-on) </li>'
						+ '<li>Share a common CSO slit lamp</li>'
						+ '</ul>'
						},
						{
						html: '<br/><img src="images/q-Las_10.jpg"/>'
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
					items:[
					{
					html: '<img src="images/q-Las_10_1.jpg"/>',
					},
					{
					html: '<h2>SLT Clip on Laser</h2>',
					style: 'text-align:center;'
					},
						
					]
					},		
					]
					},
					{
					html: '<img src="images/yag_Logo1.jpg"/>',
					style: 'position:absolute; top:580px; left:50px;'
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
		html:'<h1>Combo 532nm (PC) & Nd:YAG</h1>',
		style:'margin-bottom:20px',
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
			html:'<h2>A.R.C. Laser Combination of:</h2>' 
				+'<ul>'
				+ '<li>532nm Photocoagulator and </li>'
				+ '<li>ophthalmic YAG Photodisruptor</li>'
				+ '</ul>'
			},
			{
			  html: '<img src="images/combo_532nm.jpg" />'
			}
		]
		},
					{
			html: '<img src="images/yag_Logo1.jpg"/>',
			style: 'position:absolute; top:580px; left:50px;'
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
            html:'<h1><em>SYL 9000</em></h1>',
			style:'margin-bottom:20px',
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
				html:'Compact and lightweight'
				+'<br/>Quality optics'
				+'<br/>3/5 magnifier and in-line illumination'
				+'<br/>Longer focal length for deep set eyes (107mm)'
				+'<br/>Microprocessor controlled with built in safety features'
				+'<br/>CQ-YAG crystal Q-Switch for reliability'
				+'<br/>Anterior and posterior YAC, offset of 500 microns'
				+'<br/>Dual beam 635mm diode variable intensity to 200 microwatts'
				+'<br/>Air convention cooling system'
				},
				
				{
				html: '<img src="images/sYL_9000 .jpg" />',
				style: 'padding:30px;'  
				},
			]
			},
			{
			html: '<img src="images/yag_Logo3.jpg"/>',
			style: 'position:absolute; top:580px; left:50px;'
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
				type: 'hbox',
				pack: 'center',
				align: 'center'
			},
			cls: "lightGrey",
			documents: [],
			items: [
			          
				{
				html:'<h2>Lightmed Ophthalmic YAG and Photocoagulator combination Is  the SYL9000 plus</h2>' 
					+'<ul>'
					+ '<li>Lightlas 532 or </li>'
					+ '<li>Lightlas 577 or</li>'
					+ '<li>Lightlas 810</li>'
					+ '</ul>',
					style: 'width:300px'
				},
				{
				  html: '<img src="images/lightmed.jpg" />'
				}
			]
			},
			{
			html: '<img src="images/yag_Logo3.jpg"/>',
			style: 'position:absolute; top:580px; left:50px;'
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
					html: '<table style="line-height:100%;border-spacing:0px">'
						+'<tr>'
						+'<th>Selecta Duet</th>'
						+'<th></th>'
						+'<th><em>LIGHTLas</em></th>'
						+'<th></th>'
						+'</tr>'
						+'<tr style="background-color:#f7fbfc">'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Integrated SLT & YAG lasers</li></ul></td>'
						+'<td style="text-align:left;padding:5px 20px 5px 5px;margin-right:10px;" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>No SLT Laser available (USA)</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'<tr>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Upgradeable to: 532nm Photocoagulator laser</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>YAG + 532nm PC combo available</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'</tr>'
						+'<tr style="background-color:#f7fbfc">'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Continuously variable energy in 0.1 mJ increments</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>561nm/810nm PC available</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'</tr>'
						+'<tr>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Continuously variable posterior offset 0 – 350 microns</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>No Remote Control</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'<tr style="background-color:#f7fbfc">'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Color LCD remote control, easy to use</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Continuously variable offset plus/minus 500 micron </li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'</tr>'
						+'<tr>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Locking Caster wheels</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Locking Caster wheels</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'</tr>'
						+'</table>'
					},
				
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
				html: '<h2><strong>Selecta<sup>&reg;</sup> Duet<sup>&trade;</sup></strong></h2>'
					+ '<ul>'
					+ '<li>Breakthrough SLT technology and a YAG Photodisruptor in ONE platform.</li>'
					+ '<li>Patient and Physician friendly; offers true wheel chair accessibility.</li>'
					+ '<li>Optimized for the ASC, can perform Laser: trabeculoplasties, Peripheral Iridotomies and capsulotomies in single compact footprint.</li>'
					+ '<li>Locking caster wheels enable transportation to where laser is needed.</li>'
					+ '</ul>',
				
				style:'width:300px'
				
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
					html: '<img src="images/selecta_Duet.jpg" width="280" />'
					},
					{
					html: '<img src="images/selecta_Duet1.jpg" width="280" />'	
					},
						
					]
					}, 
			
					{
					html: '<img src="images/yag_Logo4.jpg"/>',
					style: 'position:absolute; top:580px; left:50px;'
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
				html: '<h2><strong>Selecta<sup>&reg;</sup> Trio</strong></h2>'
					+ '<ul>'
					+ '<li>Retinal, Cataract and Glaucoma Therapy in One product</li>'
					+ '<li>Contains 3 laser modalities. Nd:YAG Laser, SLT Laser and Photocoagulation Laser.</li>'
					+ '<li>Detach the photocoagulation laser module from the Trio and maximize utilization by operating two stations simultaneously. </li>'
					+ '</ul>',
				
				style:'width:300px'
				
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
						pack: 'left',
						align: 'left'
					},
					cls: 'lightGrey',
					items:[	
						{
						  html:'<img src="images/selecta_Trio.jpg" />',
						  
						},
						{
						  html:'<img src="images/selecta_Trio1.jpg" />'
						 
						},
					]
					},
					{
					xtype: 'container',
					layout: {
						type: 'vbox',
						pack: 'left',
						align: 'left'
					},
					cls: 'lightGrey',
					items:[	
						{
						  html:'<img src="images/selecta_Trio2.jpg" />',
						  style:'margin-left:50px'
						},
						{
						  html:'<img src="images/selecta_Trio3.jpg" />',
							style:'margin-left:50px'
						},
						{
						  html:'<img src="images/selecta_Trio4.jpg" />',
						  style:'margin-left:50px'
						},
					]
					},
						
				]
				}, 
			
					{
					html: '<img src="images/yag_Logo4.jpg"/>',
					style: 'position:absolute; top:580px; left:50px;'
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
				type: 'hbox',
				pack: 'center',
				align: 'center'
			},
			cls: "lightGrey",
			documents: [],
			items: [
			          
            {
			html:'<h2>OPTIMIS II (Quantel Medical)</h2>'
				+'<ul>'
				+ '<li>Standard Nd:YAG Photodisruptor</li>'
				+ '</ul>'
				
				+'<h2>Upgradeable:</h2>'
				+'<ul>'
				+ '<li>SLT laser or </li>'
				+ '<li>an 532nm Photocoagulator;  both not available at the same time on system.</li>'
				+ '</ul>',
            style:'width:300px' },
			{
            html: '<img src="images/OPTIMIS.jpg" />'
            }
          ]
        },
		{
		html: '<img src="images/yag_Logo5.jpg"/>',
		style: 'position:absolute; top:580px; left:50px;'
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
				html: '<table style="line-height:100%;border-spacing:0px">'
					+'<tr>'
					+'<th>Selecta Duet</th>'
					+'<th></th>'
					+'<th>OPTIMIS II</th>'
					+'<th></th>'
					+'</tr>'
					+'<tr style="background-color:#f7fbfc">'
					+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Integrated SLT & YAG lasers</li></ul></td>'
					+'<td style="text-align:left;padding:5px 20px 5px 5px;margin-right:10px;" ><img src="images/table_Plus.jpg"  /></td>'
					+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>No SLT Laser available (USA) </li></ul></td>'
					+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
					+'</tr>'
					+'<tr>'
					+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Upgradeable to: 532nm Photocoagulator laser</li></ul></td>'
					+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
					+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Upgradeable to 532nm Photocoagulator</li></ul></td>'
					+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
					+'</tr>'
					+'<tr style="background-color:#f7fbfc">'
					+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Continuously variable energy in 0.1 mJ increments</li></ul></td>'
					+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
					+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Upgradable to clip on SLT laser</li></ul></td>'
					+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_PlusMinus.jpg"  /></td>'
					+'</tr>'
					+'<tr>'
					+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Continuously variable posterior offset 0 – 350 microns</li></ul></td>'
					+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
					+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Energy is available in 10 incremental adjustments</li></ul></td>'
					+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
					+'</tr>'
					+'<tr style="background-color:#f7fbfc">'
					+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Color LCD remote control, easy to use</li></ul></td>'
					+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
					+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Offset range from 30 – 200 microns</li></ul></td>'
					+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
					+'</tr>'
					+'<tr>'
					+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Locking Caster wheels</li></ul></td>'
					+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
					+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ></td>'
					+'<td style="text-align:left;padding:5px;margin:0px" ></td>'
					+'</tr>'
					+'</table>'
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
		items:[	
			{
            html:'<h1>OPTIMIS II (can add a Photocoagulator)</h1>',
			style:'margin-bottom:20px',
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
				html: 'Wavelength: 532 nm, diode pumped frequency doubled solid-state'
				+'<br/>Color touch screen user interface'
				+'<br/>15 Programmable memory settings'
				+'<br/>Power at tissue up to 1.2 W at all spot sizes'
				+'<br/>Pulse duration: 0.02 s to 3 s'
				+'<br/>Repeat interval: 0.1 – 0.2 – 0.3 – 0.5 – 0.7 s'
				+'<br/>Emission modes: single, repeat, continuous, painting'
				+'<br/>Aiming beam: red laser diode'
				+'<br/>Weight: 4.7 kg - 10.7 lbs'
				+'<br/>Size: 14.5 (H) x 18.5 (W) x 30 (L) cm'
				+'<br/>5.7” (H) x 7.3” (W) x 11.8” (L)'
				+'<br/>Cooling by Peltier effect'
				+'<br/>Power requirements: 100 to 240 V, 350 W, 50/60 Hz'
				},
				
				{
				  html: '<h2>Vitra Laser</h2></br><img src="images/vitraLaser.jpg" />',
					style: 'padding:30px;'
				  
				},
			]
			},
			{
			html: '<img src="images/yag_Logo5.jpg"/>',
			style: 'position:absolute; top:580px; left:50px;'
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
            html:'<h1>Nidek  YC-1800 YAG Laser</h1>',
			style:'margin-bottom:20px',
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
				html: '<img src="images/nidek.jpg" />',
				style: 'padding:30px;'  
				},
				
				{
				html: '<strong>Treatment Laser</strong>'
				+'<br/>Type Nd:YAG'
				+'<br/>Wavelength 1064nm'
				+'<br/>Mode Structure Fundamental'
				+'<br/>Pulse Duration 4 nsec'
				+'<br/>Mode of Operation Q-switched'
				+'<br/>Pulse Repetition Rate 3Hz single, 1.5 Hz burst'
				+'<br/>Output Energy 0.3 -0 20 mJ/ pulse (continuously variable) '
				+'<br/>Burst Mode 2 or 3 pulse/trigger'
				+'<br/>Spot Size 8 micron'
				+'<br/>Cone Angle 16 degrees'
				+'<br/>Focal Shift +500 to -500 microns'
				+'<br/>Aiming method Dual beam method'
				},
				
				
			]
			},
			{
			html: '<img src="images/yag_Logo6.jpg"/>',
			style: 'position:absolute; top:580px; left:50px;'
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
					html: '<table style="line-height:100%;border-spacing:0px">'
						+'<tr>'
						+'<th>Selecta Duet</th>'
						+'<th></th>'
						+'<th>YC-1800 (Nidek)</th>'
						+'<th></th>'
						+'</tr>'
						+'<tr style="background-color:#f7fbfc">'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Integrated SLT & YAG lasers</li></ul></td>'
						+'<td style="text-align:left;padding:5px 20px 5px 5px;margin-right:10px;" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>No SLT Laser available </li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'<tr>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Upgradeable to: 532nm Photocoagulator laser</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Upgradable to 532nm  (PC)</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'</tr>'
						+'<tr style="background-color:#f7fbfc">'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Continuously variable energy in 0.1 mJ increments</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Quad aiming beams</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'</tr>'
						+'<tr>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Continuously variable posterior offset 0 – 350 microns</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Smart Joystick – programmable for one of the following: energy up or down, ready or standby, aiming beam up or down, burst or reset.</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'</tr>'
						+'<tr style="background-color:#f7fbfc">'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Color LCD remote control, easy to use</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Two tables required for combination YAG & Photocoagulator </li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'<tr>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Locking Caster wheels</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ></td>'
						+'</tr>'
						+'</table>'
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
		items:[	
			
		  
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
				html: '<strong>GYC-1000 Photocoagulator  (Nidek)</strong>'
				+'<br/>Treatment laser fd:DPSS'
				+'<br/>Wavelength Green: 532nm'
				+'<br/>Output Power: 50 -1700 mW'
				+'<br/>Output type: Continuous'
				+'<br/>Exposure times:  0.01 – 3.00 secs'
				+'<br/>Automation repeat: 0.1 – 1.0 secs'
				+'<br/>Aiming laser: red diode'
				+'<br/>Power supply 100 – 240 VAC; 50/60 Hz, 200 VA'
				+'<br/>Dimensions/Weight 215 (W) x 280 (D) x 90 (H) mm / 6.7 kg'

				},
				
				{
				  html: '<img src="images/GYC-1000.jpg" />',
					style: 'padding:30px;'
				  
				},
			]
			},
			{
			html: '<img src="images/yag_Logo6.jpg"/>',
			style: 'position:absolute; top:580px; left:50px;'
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
              html:'<h1>VISULAS YAG III Combi</h1>',
			  style:'margin-bottom:20px',
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
              html: '<img src="images/bgVISULAS.jpg" />'					
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
              html:'<h1>VISULAS Trion Combi</h1>',
			  style:'margin-bottom:20px',
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
              html: '<img src="images/bgVISULAS2.jpg" />'					
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
					html: '<table style="line-height:100%;border-spacing:0px">'
						+'<tr>'
						+'<th>Selecta Duet</th>'
						+'<th></th>'
						+'<th>Visulas  YAG III</th>'
						+'<th></th>'
						+'</tr>'
						+'<tr style="background-color:#f7fbfc">'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Integrated SLT & YAG lasers</li></ul></td>'
						+'<td style="text-align:left;padding:5px 20px 5px 5px;margin-right:10px;" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>No SLT Laser available  </li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'<tr>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Upgradeable to: 532nm Photocoagulator laser</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Upgradeable to 532,  561 & 659nm Photocoagulators (Trion)</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'</tr>'
						+'<tr style="background-color:#f7fbfc">'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Continuously variable energy in 0.1 mJ increments</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Quad-Aiming Beam</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'</tr>'
						+'<tr>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Continuously variable posterior offset 0 – 350 microns</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Energy is available in 22 adjustments</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'<tr style="background-color:#f7fbfc">'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Color LCD remote control, easy to use</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Two Remote Controls needed for YAG & PC Modes</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'<tr>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Locking Caster wheels</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Offset range +150, 0, -150 microns</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'</table>'
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
		items:[	
			
		  
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
				html: '<strong>Super Q Laser (ellex)</strong>'
				+'<br/>Laser Source Q-switched Nd:YAG'
				+'<br/>Wavelength 1064 nm'
				+'<br/>Energy 0.3 to 10 mJ, single pulse'
				+'<br/>continuously variable'
				+'<br/>Pulse Width 4 ns'
				+'<br/>Burst Mode 1, 2 and 3 pulses per burst, selectable'
				+'<br/>Spot Size 8 µm'
				+'<br/>Posterior Offset 100 to 350 µm, continuously variable'
				+'<br/>Cone Angle 16 degrees'
				+'<br/>Repetition Rate up to 2 hertz'
				+'<br/>Aiming Beam red 670 nm, adjustable intensity'
				+'<br/>Magnification 10x, 16x, 28x'
				+'<br/>Cooling air cooled'
				+'<br/>Electrical Requirements 100-240 VAC, 50/60 Hz, 400 VA'
				+'<br/>Dimensions (HxWxD) 61 x 92 x 53 cm, 24 x 36 x 21 inches (laser only) Weight 34kg, 75 lbs. (laser only)',
				style:'width:475px'
				},
				
				{
				  html: '<img src="images/super_Q_ Laser.jpg" />',
				  style: 'padding:10px;'
				  
				},
			]
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
			items:[
					{
					html: '<table style="line-height:100%;border-spacing:0px">'
						+'<tr>'
						+'<th>Selecta Duet</th>'
						+'<th></th>'
						+'<th>Super Q (ellex)</th>'
						+'<th></th>'
						+'</tr>'
						+'<tr style="background-color:#f7fbfc">'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Integrated SLT & YAG lasers</li></ul></td>'
						+'<td style="text-align:left;padding:5px 20px 5px 5px;margin-right:10px;" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Integrated YAG laser</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'<tr>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Upgradeable to: 532nm Photocoagulator laser</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Not upgradeable to SLT</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'<tr style="background-color:#f7fbfc">'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Continuously variable energy in 0.1 mJ increments</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Not upgradeable to 532nm Photocoagulator laser</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'<tr>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Continuously variable posterior offset 0 – 350 microns</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Slower Rep Rate, 2.0 Hz</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'<tr style="background-color:#f7fbfc">'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>5X Magnification Changer</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Posterior Offset is from 100 – 350 microns </li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'<tr>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Color LCD remote control, easy to use</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Monochrome LCD remote control</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ></td>'
						+'</tr>'
						+'<tr style="background-color:#f7fbfc">'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Locking Caster wheels</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>3 X Magnification changer</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'<tr>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Locking Caster wheels</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'</tr>'
						+'</table>'
					},
				
			]
	   },		
		//
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
				type: 'hbox',
				pack: 'center',
				align: 'center'
			},
			cls: "lightGrey",
			documents: [],
			items: [
			    
				{
				html: '<strong>Ultra Q Laser (ellex)</strong>'
				+'<br/>Laser Source Q-switched Nd:YAG'
				+'<br/>Wavelength 1064 nm'
				+'<br/>Energy 0.3 to 10 mJ, single pulse'
				+'<br/>continuously variable'
				+'<br/>Pulse Width 4 ns'
				+'<br/>Burst Mode 1, 2 and 3 pulses per burst, selectable'
				+'<br/>Spot Size 8 µm'
				+'<br/>Posterior Offset 100 to 350 µm, continuously variable'
				+'<br/>Cone Angle 16 degrees'
				+'<br/>Repetition Rate up to 3 hertz'
				+'<br/>Aiming Beam red 635 nm, adjustable intensity'
				+'<br/>Magnification 10x, 16x, 28x'
				+'<br/>Cooling air cooled'
				+'<br/>Electrical Requirements 100-240 VAC, 50/60 Hz, 400 VA'
				+'<br/>Dimensions (HxWxD) 57 x 92 x 44 cm, 23 x 36 x 18 inches (laser only) Weight 30kg, 66 lbs. (laser only) ',

				style:'width:365px'
				},
				
				{
				  html: '<img src="images/ultra_Q_ Laser.jpg" />',
				  style: 'padding:30px;'
				  
				},
			]
			},
		]
		},
//
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
					html: '<table style="line-height:100%;border-spacing:0px">'
						+'<tr>'
						+'<th>Selecta Duet</th>'
						+'<th></th>'
						+'<th>Ultra Q (ellex)</th>'
						+'<th></th>'
						+'</tr>'
						+'<tr style="background-color:#f7fbfc">'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Integrated SLT & YAG lasers</li></ul></td>'
						+'<td style="text-align:left;padding:5px 20px 5px 5px;margin-right:10px;" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Is Upgradeable to SLT</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'</tr>'
						+'<tr>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Upgradeable to: 532nm Photocoagulator laser</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Not upgradeable to 532nm Photocoagulator laser</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'<tr style="background-color:#f7fbfc">'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Continuously variable energy in 0.1 mJ increments</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Equivalent  Rep Rate 3 Hz</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'</tr>'
						+'<tr>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Continuously variable posterior offset 0 – 350 microns</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Posterior Offset is from 100 – 350 microns</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'<tr style="background-color:#f7fbfc">'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Color LCD remote control, easy to use</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Low optical breakdown 1.8 mJ</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'</tr>'
						+'<tr>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Locking Caster wheels</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Plus.jpg"  /></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Monochrome LCD remote control</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'<tr style="background-color:#f7fbfc">'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>3 X Magnification changer</li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'<tr>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ></td>'
						+'<td style="text-align:left;padding:0px;vertical-align:top;margin:0px" ><ul style="margin:0px" ><li>Locking Caster wheels </li></ul></td>'
						+'<td style="text-align:left;padding:5px;margin:0px" ><img src="images/table_Minus.jpg"  /></td>'
						+'</tr>'
						+'</table>'
					},
				
			]
	   },		
		
			
		
		// end
           ]
  }
  
  });