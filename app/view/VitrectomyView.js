Ext.define("LumenisTraining.view.VitrectomyView", {
  extend: "Ext.Carousel",
  xtype: "vitrectomyview",
  config: {
    title: "Vitreoretinal Disease",
    id: "vitrectomyView",
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
          documents: [],
          items: [
				{
              html:'<h1>Vitrectomy</h1>',
			  style:'margin-bottom:20px',
			},   
		  
            {
              html: '<ul>'
					+ '<li>Vitrectomy is a microsurgical procedure in which specialized instruments and techniques are used to repair retinal disorders, many of which were previously considered inoperable</li>'
					+ '<li>Vitrectomy is indicated when normal visualization of the fundus is obscured or the vitreous induces traction on retinal structures e.g dense vitreous hemorrhage that obscures the view and hinders laser treatment for proliferative diabetic retinopathy or retinal tears and/or retinal detachment caused by vitreous traction on the retina</li>'
					+ '<li>The procedure is performed in an operating room under local or (occasionally) general anesthesia. It can often be done as an ambulatory procedure</li>'
					+ '</ul>'
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
          items: [
		  {
				html:'<h1>Vitreous Hemorrhage</h1>',
				style:'margin-bottom:20px',
			},
				
            {
				html: '<p>Symptoms depend on the severity (amount) of bleeding<p>'
					+ '<ul>'
					+ '<li>Sudden onset of blurry vision</li>'
					+ '<li>Light flashes</li>'
					+ '<li>Floaters (spots seemingly floating across the field of vision)</li>'
					+ '<li>Severe decline in visual acuity (up to just light perception)</li>'
					+ '</ul>'
				
            }
			 ]
        }, {
				html: '<img src="images/symptoms.jpg" width="280" /><br><img src="images/symptoms2.jpg" width="280" />'
				
				
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
							html: '<h1>Diabetic Retinopathy & VH</h1>',
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
							html: '<img src="images/diabeticRetinopathy.jpg" height="250px"  /><br><p>Proliferative Diabetic Retinopathy (PDR)</p>',
							style: 'margin-right:20px; '
						},
						{
							html: '<img src="images/diabeticRetinopathy2.jpg" height="250px"  /><br><p>Proliferative Diabetic       Retinopathy (PDR) & Vitreous Hemorrhage</p> ',
							style: 'width:250px;'
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
              html:'<h1>Posterior Vitreous Detachment (PVD)</h1>',
			  style:'margin-bottom:20px',
			},   
		  
            {
              html: '<ul>'
					+ '<li>With age the vitreous, the gel which fills the cavity in front of the retina, begins to liquefy and shrink. This normal for age process usually starts between 45 and 55 years of age</li>'
					+ '<li>Individuals who are undergoing this process may briefly see floaters and even flashing lights in their vision</li>'
					+ '<li>These symptoms usually subside and may leave a small residual floater in the vision. Occasionally, PVD may lead to a retinal tear and vitreous hemorrhage, therefore any individual who experiences flashes or a new floater should be examined for retinal tears</li>'
					+ '<li>When PVD causes vitreous hemorrhage or considerable vitreal traction is seen at the edges of a retinal tear   - vitrectomy is indicated</li>'
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
          documents: [],
          items: [
			{
              html:'<h1>Retinal Tear</h1>',
			  style:'margin-bottom:20px',
			},
			{
              html: '<ul>'
					+ '<li><h2>In some cases due to the extent and location of the retinal tear (arrow) as well as concurrent vitreous hemorrhage or retinal detachment, Vitrectomy is performed with laser applied around the retinal tear at the end of surgery</h2></li>'
					+ '</ul>'
				
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
							html: '<img  src="images/retinalTear.jpg" height="250px" /><br><p style="text-align:center">Retinal tear</p>',
							style: 'margin-right:20px; '
						},
						{
							html: '<img src="images/retinalTear2.jpg" height="250px" /><br><p style="text-align:center">Laser for Retinal tear</p> ',
							style: 'width:250px;'
						}
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
              html:'<h1>Retinal Detachment</h1>',
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
              html: '<ul>'
					+ '<li>Retinal Detachments occurs as a result of vitreoretinal traction where the vitreous pulls and tugs of a tear of the retina, usually in the periphery</li>'
					+ '<li>This allows fluid to perculate through the tear, with subsequent detaching of the retina (analogous to wall paper coming off a wall) </li>'
					+ '</ul>',
				style:'width:400px;'
            },
			{
              html: '<img src="images/retinalDetachment.jpg"  height="350px" />'
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
              html:'<h1>Retinal Detachment – Signs and symptoms</h1>',
			  style:'margin-bottom:20px',
			},
			
            {
              html: '<ul>'
					+ '<li>Retinal detachment usually develops gradually, but in some cases it occurs suddenly with total vision loss in the affected eye </li>'
					+ '<li>Sudden marked vision loss can also be caused by a retinal tear that bleeds into the vitreous</li>'
					+ '<li>In most cases flashes and floaters (as in PVD) are the first signs followed by the appearance of a dark shadow or a "curtain" being pulled over the affected peripheral field</li>'
					+ '<li>Blurred central vision indicates that retinal detachment is progressing and the result is significant permanent vision loss unless it is repaired</li>'
					+ '</ul>'
				
            },
			{
              html: '<img src="images/retinalDetachment1.jpg"  width="500px" />'
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
              html:'<h1>Macular Pucker (Epiretinal Membrane, ERM)</h1>',
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
              html: '<ul>'
					+ '<li>Macular Puckers develop as a result of contracture of an abnormal scar tissue membrane (epiretinal membrane, ERM)</li>'
					+ '<li>This causes wrinkling of the macula and subsequent distortion of central vision</li>'
					+ '<li>These ERMs may grow as a result of aging (associated with posterior vitreous detachment), diabetes, trauma, inflammation, or previous eye surgery</li>'
					+ '</ul>',
				style:'width:400px;'
            },
			{
              html: '<img src="images/MacularPucker.jpg" />'
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
              html:'<h1>Macular Pucker - Signs and Symptoms </h1>',
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
              html: '<ul>'
					+ '<p>The signs and symptoms of Macular Pucker may include</p>'
					+ '<li>Distorted vision so that straight lines appear bent or wavy</li>'
					+ '<li>Blurred vision </li>'
					+ '<li>Double vision (diplopia) that is noticeable even with one eye covered</li>'
					+ '<li>The distortions can make objects look different in size (usually larger), especially in the central portion of the visual field </li>'
					+ '</ul>',
				style:'width:400px;'
            },
			{
              html: '<img src="images/MacularPucker2.jpg" /><br>Amsler grid of a patient with macular pucker showing distortion  (wavy lines)',
			  style:'width:250px;'
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
              html:'<h1>Macular Hole</h1>',
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
              html: '<ul>'
					+ '<li>A macular hole is a small opening in the central tissue of the retina called the macula. </li>'
					+ '<li>This area is responsible for our central vision or our driving, reading, recognizing people’s faces vision. </li>'
					+ '<li>Risk factors for the development of macular holes include: aging, trauma, or previous macular hole in the other eye</li>'
					+ '</ul>',
				style:'width:400px;'
            },
			{
              html: '<img src="images/MacularHole.jpg" /><br>A macular hole is a small opening in the central tissue of the retina called the macula.',
			  style:'width:250px;'
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
              html:'<h1>Macular Holes - Signs and Symptoms</h1>',
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
              html: '<ul>'
					+ '<p>The severity of the symptoms of Macular Holes depend on whether the hole is partial thickness or full thickness, but in general may include the following</p>'
					+ '<li>Blurred Central Vision </li>'
					+ '<li>Distorted, "Wavy" Vision </li>'
					+ '<li>Difficulty reading or seeing fine detail even with glasses </li>'
					+ '<li>Grayish area in central vision </li>'
					+ '<li>Central "Blind Spot" or "Dark Spot"</li>'
					+ '</ul>',
				style:'width:400px;'
            },
			{
              html: '<img src="images/MacularHole2.jpg" />',
			  style:'width:250px;'
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
              html:'<h1>Vitrectomy</h1>',
			  style:'margin-bottom:20px',
			},   
		  
            {
              html: '<ul>'
					+ '<li>The initial step in this procedure is usually the removal of the vitreous gel through very small (1.4mm) incisions in the eye wall, hence the name "vitrectomy"</li>'
					+ '<li>The vitreous is removed with a miniature handheld cutting device and replaced with a special saline solution similar to the liquid being removed from the eye</li>'
					+ '<li>A high intensity fiber optic light source is used to illuminate the inside of the eye while the surgeon works</li>'
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
          documents: [],
          items: [
			{
              html:'<h1>Vitrectomy</h1>',
			  style:'margin-bottom:20px',
			},
			
            {
              html: '<ul>'
					+ '<li>The surgeon uses a specialized operating microscope and contact lenses, which allow a clear view of the vitreous cavity and retina at various magnifications</li>'
					+ '<li>The procedure is performed in an operating room under local or (occasionally) general anesthesia. It can often be done as an ambulatory procedure</li>'
					+ '</ul>'
				
            },
			{
              html:'<img src="images/vitrectomy.jpg" width="300" />'
			 
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
              html:'<h1>Standard Three Port Vitrectomy</h1>',
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
              html: '<ul>'
					+ '<li>The purpose of the instruments is to light up the inside of the eye, to keep the eye’s shape during surgery and to remove the vitreous humour</li>'
					+ '<li>The infusion port replaces lost fluids in the eye maintaining pressure inside the eye during and after surgery</li>'
					+ '</ul>',
				style:'width:400px;'
            },
			{
              html: '<img src="images/vitrectomy2.jpg" />'
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
              html:'<h1>Fluid – Air Exchange</h1>',
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
              html: '<ul>'
					+ '<li>Fluid – Air Exchange - injection of air into the eye to remove the intraocular fluid from the Posterior Segment of the globe while maintaining IntraOcular Pressure to temporarily hold the retina in place or seal off holes in the retina</li>'
					+ '<li>The air pressure is temporary as the Posterior Segment will soon re-fill with fluid</li>'
					+ '</ul>',
				style:'width:400px;'
            },
			{
              html: '<img src="images/fluid_Air.jpg" /><br>Small gas bubble – patient is face down'
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
              html:'<h1>Air – Gas Exchange</h1>',
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
              html: '<ul>'
					+ '<li>Injection of gas, or more typically mixed gas and air, into the Posterior Segment of the globe. Typical gases used are <strong>sulfur hexafluoride</strong> or <strong>perfluoropropane</strong>. </li>'
					+ '<li>The gases are mixed with air to neutralize their expancitile characteristic to provide for a longer acting (than air alone) retinal tamponoid. </li>'
					+ '</ul>',
				style:'width:400px;'
            },
			{
              html: '<img src="images/Air_GasExchange.jpg" />',
			  style:'text-align:center;'
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
              html:'<h1>Silicone Oil Injection</h1>',
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
              html: '<ul>'
					+ '<li>Silicone Oil injection- filling of the eye with liquid silicone to hold the retina in place</li>'
					+ '<li>The retinal tamponoid acts to hold the retina in place or temporarily seal off holes in the retina. The mixed gases disappear spontaneously once they have accomplished their purpose and the Posterior Segment re-fills with fluid</li>'
					+ '</ul>',
				style:'width:400px;'
            },
			{
              html: '<img src="images/Silicone.jpg" />'
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
              html:'<h1>Endophotocoagulation</h1>',
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
              html: '<ul>'
					+ '<li>Endophotocoagulation is the use of laser to treat intraocular structures.</li>'
					+ '<li>This modality is often used to treat retina tears in the setting of retinal detachment as </li>'
					+ '<li>Endophotocoagulation is frequently used to treat proliferative diabetic retinopathy as well</li>'
					+ '</ul>',
				style:'width:400px;'
            },
			{
              html: '<img src="images/Endophotocoagulation.jpg" />'
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
              html:'<h1>Post Retinal Detachment Surgery</h1>',
			  style:'margin-bottom:20px',
			},   
		  
            {
              html: '<ul>'
					+ '<li>Retinal detachment surgery usually also involves the use of <strong>cyrotherapy</strong> or <strong>laser</strong> photocoagulation</li>'
					+ '<li>The laser or cryotherapy forms a permanent adhesion around the retinal break and prevent further accumulation of fluid and re-detachment</li>'
					+ '<li>Scleral buckles are done using local or general <strong>anesthesia</strong> and are often as <strong>outpatient</strong> procedures</li>'
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
          documents: [],
          items: [
			{
              html:'<h1>Scleral Buckle</h1>',
			  style:'margin-bottom:20px',
			},
			
            {
              html: '<ul>'
					+ '<li>A <strong>scleral buckle</strong> is one of several ophthalmologic procedures that can be used to repair a <strong>retinal detachment</strong></li>'
					+ '<li>The scleral buckle (or band) pushes the sclera towards the detached retina, reduces the vitreous traction and assists in closure of the retinal break and re-attachment of the retina</li>'
					+ '</ul>'
				
            },
			{
              html:'<img src="images/scleralBuckle.jpg" width="500" />'
			 
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
              html:'<h1>Complications</h1>',
			  style:'margin-bottom:20px',
			},   
		  
            {
              html: '<ul><p>Vitrectomies have been commonly performed for over 30 years. However, certain risks do exist.  </p>'
					+ '<li>Retinal detachment during or after the procedure is the most common risk.  </li>'
					+ '<li>Cataract formation or progression</li>'
					+ '<li>Development of glaucoma (increased pressure in eye)</li>'
					+ '<li>Bleeding and/or infection inside (endophthalmitis) or outside of eye</li>'
					+ '<li>Red or painful eye</li>'
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
          documents: [],
          items: [
				{
              html:'<h1>Complications</h1>',
			  style:'margin-bottom:20px',
			},   
		  
            {
              html: '<ul>'
					+ '<li>Loss of depth perception, blurring of vision, double vision, or blindness</li>'
					+ '<li>Swelling of layer under the retina (choroidal effusion)</li>'
					+ '<li>Change in focus (refractive changes)</li>'
					+ '<li>wrinkling of retina (macular pucker)</li>'
					+ '<li>swelling of the center of retina (cystoid macular edema)</li>'
					+ '<li>Loss of night vision or distortion of vision</li>'
					+ '<li>Loss of eye (extremely rare)</li>'
					+ '</ul>'
            }
            
          ]
        },
		   
	   //End
	
	]
  }
  
  });