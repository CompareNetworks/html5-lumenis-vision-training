Ext.define("LumenisTraining.view.GlaucomaView", {
  extend: "Ext.Carousel",
  xtype: "glaucomaview",
  config: {
    title: "Glaucoma",
    id: "glaucomaView",
    styleHtmlContent: true,
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
              html:'<h1>Aqueous Humor</h1>',
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
					+ '<li>Aqueous Humor provides oxygen and nutrients to cornea and lens</li>'
					+ '<li>Continuously secreted by ciliary body</li>'
					+ '<li>Exits through TM, Schlemm&rsquo;s canal and uveoscleral outflow</li>'
					+ '</ul>'
            },
			{
              html: '<img src="images/aqueousFlow.jpg" />'
            }
          ]
        }
		]
	   },
	   //slide 35
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
              html:'<h1>Intraocular Pressure (IOP)</h1>',
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
					+ '<li><strong>Intraocular pressure</strong> (IOP) is the fluid <strong>pressure</strong> inside the <strong>eye</strong>.</li>'
					+ '<li>IOP is determined by the rate of production of the clear fluid in the eye and the rate at which this fluid flows out of the eye </li>'
					+ '<li>The normal range is from 10 to 20 mm Hg </li>'
					+ '</ul>',
				style:'width:500px;'
            },
			{
              html: '<img src="images/intraocularPressure.jpg" />'
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
              html:'<h1>IOP</h1>',
			  style:'margin-bottom:20px',
			},   
		  
            {
              html: '<ul>'
					+ '<li>The average value of intraocular pressure is 15.5 mmHg with average fluctuations of 2.75 mmHg</li>'
					+ '<li>The diurnal variation for normal eyes is between 3 and 6 mmHg with a decrease of IOP during the night</li>'
					+ '<li>IOP usually increases with age</li>'
					+ '<li>IOP also varies with a number of other factors such as heart rate, respiration, exercise, fluid intake, systemic medication & topical drugs</li>'
					+ '<li>Alcohol consumption transiently decreases IOP while caffeine may increases IOP</li>'
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
              html:'<h1>Ocular Hypertension</h1>',
			  style:'margin-bottom:20px',
			},   
            {
              html: '<ul>'
					+ '<li>Ocular hypertension is an eye pressure of greater than 20 mm Hg</li>'
					+ '<li>The <strong>optic nerve head (disc)</strong> appears normal</li>'
					+ '<li><strong>Visual field</strong> testing is normal</li>'
					+ '<li>Ocular hypertension is a risk factor for the development of Glaucoma</li>'
					+ '<li>Ocular hypertension occurs more frequently'
					+ '<ul>'
					+ '<li>African Americans</li>'
					+ '<li> >40y </li>'
					+ '<li>Family historys of ocular hypertension and/or glaucoma</li>'
					+ '<li>Myopia</li>'
					+ '<li>Diabetes</li>'
					+ '</ul>'
					+ '</li>'
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
              html:'<h1>Glaucoma Overview</h1>',
			  style:'margin-bottom:20px',
			},   
            {
              html: '<ul>'
					+ '<li>The no. 1, 2 or 3 cause of blindness in <strong>ALL THE COUNTRIES IN THE WORLD</strong></li>'
					+ '<li>Greatest cause of preventable blindness worldwide</li>'
					+ '<li>67 million world-wide</li>'
					+ '<li>Millions(!) at risk with high IOP</li>'
					+ '<li>Asymptomatic (except angle closure Glaucoma)</li>'
					+ '<li>Progressive, irreversible loss of vision</li>'
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
          cls: "lightGrey",
          documents: [],
          items: [
		  {
              html:'<h1>Glaucoma</h1>',
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
					+ '<li><strong>Glaucoma</strong> is a group of diseases of the <strong>optic nerve</strong> involving loss of <strong>retinal ganglion cells</strong> in a characteristic pattern of <strong>optic neuropathy</strong>.</li>'
					+ '<li>Untreated glaucoma leads to permanent damage of the <strong>optic nerve</strong> and resultant <strong>visual field</strong> loss, which can progress to <strong>blindness</strong>.</li>'
					+ '</ul>',
				style:'width:500px;'
            },			
		 
		  
		     
           
			{
				html: '<img src="images/glaucomaNormal.jpg" /><br><img src="images/glaucomadamage.jpg" />',
				
			},
			]},			
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
              html:'<h1>Risk Factors</h1>',
			  style:'margin-bottom:20px',
			},
            {
              html: '<ul>'
					+ '<li>Ocular hypertension is the largest risk factor in most glaucomas, but in some populations only 50% of patients with primary open angle glaucoma actually have elevated ocular pressure. </li>'
					+ '<li>Those of African descent are three times more likely to develop primary open angle glaucoma.</li>'
					+ '<li>People with a family history of glaucoma have about a six percent chance of developing glaucoma</li>'
					+ '<li>Older age</li>'
					+ '<li>Thinner corneal thickness'
					+ '<li>Myopia (primary open angle glaucoma)</li>'
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
              html:'<h1>Risk Factors</h1>',
			  style:'margin-bottom:20px',
			},
            {
              html: '<ul>'
					+ '<li>Asian groups are prone to developing angle closure glaucoma due to their shallower anterior chamber depth</li>'
					+ '<li>Other factors can cause glaucoma, known as "secondary glaucomas,"</li>'
					+ '<ul>'
					+ '<li>prolonged use of steroids (steroid-induced glaucoma); </li>'
					+ '<li>conditions that severely restrict blood flow to the eye, such as severe diabetic retinopathy and central retinal vein occlusion (neovascular glaucoma);</li>'
					+ '<li>ocular trauma (angle recession glaucoma)</li>'
					+ '<li>uveitis (uveitic glaucoma).</li>'
					+ '</ul>'
					+ '<li>Unstable hypertention</li>'
					+ '<li>Congenital malformations</li>'
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
              html:'<h1>Diagnosis</h1>',
			  style:'margin-bottom:20px',
			},
            {
              html: '<ul>'
					+ '<li>History</li>'
					+ '<li>Visual Acuity</li>'
					+ '<li>Complete eye exam, including</li>'
					+ '<ul>'
					+ '<li>Tonometry</li>'
					+ '<li>Gonioscopy</li>'
					+ '<li>Fundus - Optic Disc (cup/disc ratio)</li>'
					+ '</ul>'
					+ '<li>Visual Field Testing</li>'
					+ '<li>Other tests</li>'
					+ '<ul>'
					+ '<li>Pachymetry (corneal thickness)</li>'
					+ '<li>HRT (examine the nerve fiber head)</li>'
					+ '<li>OCT (examine the nerve fiber layer)</li>'
					+ '</ul>'
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
				html:'<h1>Tonometry</h1>',
				style:'margin-bottom:20px',
			},
				
            {
				html: '<h2><strong>Goldmann Applanation Tonometry</strong></h2>'
					+ '<ul>'
					+ '<li>Gold standard</li>'
					+ '<li>Over/under estimation may be due to corneal thickness</li>'
					+ '<li>Applanation tonometry performed at the slit </li>'
					+ '</ul>'
				
            }
			 ]
        }, {
				html: '<img src="images/tonometryRight.jpg" width="280" /><br><img src="images/Tonometry.jpg" width="280" />'
				
				
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
				html:'<h1>Tonometry</h1>',
				style:'margin-bottom:20px',
			},
             
            {
              html: '<h2><strong>Schi&ouml;tz tonometry</strong></h2>'
					+ '<ul>'
					+ '<li>Can be useful as a screening tool</li>'
					+ '<li>Not as accurate as Goldmann applanation tonometry</li>'
					+ '<li>Hand held device with various weights</li>'
					+ '<li>Best performed when patient lies supine</li>'
					+ '</ul>'
            }
			]
},
			{
				html: '<img src="images/stonometry1.jpg" width="280"/><br><img src="images/stonometry2.jpg" width="280" />'
				
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
				html:'<h1>Tonometry</h1>',
				style:'margin-bottom:20px',
			},
            
            {
              html: '<h2><strong>TonoPen</strong></h2>'
					+ '<ul>'
					+ '<li>Handheld electronic instrument</li>'
					+ '<li>Basically applanation tonometry</li>'
					+ '<li>Best used when the cornea is highly irregular or young children</li>'
					+ '<li>Can be applied with patient seated or supine</li>'
					+ '<li>Multiple readings (4-10) taken (mild tapping of the cornea) - gives out digital IOP readout </li>'
					+ '</ul>'
					+ '<h2><strong>Pneumotonometry</strong></h2>'
					+ '<ul>'
					+ '<li>"air puff", non-contact</li>'
					+ '</ul>',
					style:'width:500px;margin-right:20px;'
					
            }
			]
			},
			{
				html: '<img src="images/tonoPen1.jpg" width="280" /><br><img src="images/tonoPen2.jpg" width="280" />'
				
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
				html:'<h1>Gonioscopy</h1>',
				style:'margin-bottom:20px',
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
              html: '<ul><li><strong>Gonioscopy</strong> describes the use of a <strong>goniolens (such as a Goldmann goniolens)</strong> in conjunction with a slit lamp or operating microscope to gain a view of the the anatomical angle formed between the eyes cornea and iris</li></ul>',
				style:'width:500px;'
			},
			{
              html: '<img src="images/gonisocopylens.jpg" width="150" />'
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
             html: '<img src="images/openAngle.jpg" width="350" /><br>Open Angle',
			 style:'text-align:center;'
			},
			{
              html: '<img src="images/closedAngle.jpg" width="350" /><br>Closed Angle',
			   style:'text-align:center;'
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
          documents: [],
          items: [
		  {
              html:'<h1>Optic Nerve Head (Disc)</h1>',
			  style:'margin-bottom:20px',
			},
            {
              html: '<ul>'
					+ '<li>The optic nerve consists of 1 million small nerve fibers that come from the retina. The fibers bend about 90 degrees as they leave the retina and enter the front of the optic nerve (known as the optic nerve head)</li>'
					+ '<li>The optic nerve head is the anatomical location of the eye&rsquo;s "blind spot"</li>'
					+ '<li>Normally, there is a small crater-like depression seen at the front of the optic nerve head. This depression is known as the cup </li>'
					+ '<li>Photographs and drawings of the disc and cup are an important part of the follow-up of the patient</li>'
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
          cls: 'lightGrey',
          documents: [],
          items: [
		   {
				html:'<h1>Optic Nerve Head (Disc)</h1>',
				style:'margin-bottom:20px',
			},
            
            {
              html:  '<ul>'
					+ '<li>The normal cup to disc ratio (the diameter of the cup divided by the diameter of the whole nerve head or disc) is about 0.3</li>'
					+ '<li>Loss of nerve fibers, e.g. in Glaucoma, causes an enlargment of the cup i.e. increase cup/disc ratio (c/d ratio)</li>'
					+ '</ul>',
					style:'width:500px;'
            }
			]
			},
			{
				html: '<img src="images/normalRatio.jpg" width="200" /><br>Advanced cupping<br><img src="images/advancedCupping.jpg" width="200" /><br>Normal c/d ratio',
				style:'text-align:center;'
				
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
				html:'<h1>Visual Field Testing (Perimetry)</h1>',
				style:'margin-bottom:20px',
			},
            
            {
              html:  '<ul>'
					+ '<li>Visual field tests are designed to map a person&rsquo;s visual field - to document the level of peripheral vision.</li>'
					+ '<li>The patient&rsquo;s visual acuity and age are important factors in obtaining reliable results</li>'
					+ '<li>The visual field test must be taken with the appropriate correction needed for close vision</li>'
					+ '<li>Patient must be prepared prior to the test to enhance reliability</li>'
					+ '</ul>',
					style:'width:500px;margin-right:20px;'
            }
			]
			},
			{
				html: '<img src="images/visualField1.jpg" width="200" /><br><img src="images/visualField2.jpg" width="200" /><br>'
				
				
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
              html:'<h1>Visual Field Testing (Perimetry)</h1>',
			  style:'margin-bottom:20px',
			},
            {
              html: '<ul>'
					+ '<li>The patient sits in front of a concave dome with a target in the center.</li>'
					+ '<li>The eye that is not being tested is covered.</li>'
					+ '<li>A button is given to the patient to be used during the exam.</li>'
					+ '<li>The patient is set in front of the dome and asked to focus on the target at the center.</li>'
					+ '<li>A computer then shines lights on the inside dome and the patient clicks the button whenever a light is seen. </li>'
					+ '<li>The computer then automatically maps and calculates the patients visual field</li>'
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
          cls: "lightGrey",
          documents: [],
          items: [
		   {
              html:'<h1>Visual Field Testing (Perimetry)</h1>',
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
					+ '<li>Typically Humphrey Automated Perimetry is used and various tests can be administered (software) such as Threshold test, SITA</li>'
					+ '<li>Depending on the test, several areas are repeatedly examined to determine specific visual field damage as well as overall test reliability</li>'
					+ '</ul>',
				 style:'width:500px',
            },			
		 
		  
		     
           
			{
				html: '<img src="images/visualFiledDamge.jpg" width="280" /><br>Visual field damage in right eye',
				style:'text-align:center',
				flex: 1
			},
 ]},			
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
              html:'<h1>Types of Glaucoma</h1>',
			  style:'margin-bottom:20px',
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
              html: '<ul>'
					+ '<li>Primary Open Angle Glaucoma (POAG)</li>'
					+ '<li>Closed Angle Glaucoma</li>'
					+ '<li>Normal Tension Glaucoma (NTG)</li>'
					+ '</ul>'
				
            },
			 {
              html: '<ul>'
					+ '<li>Secondary Glaucoma</li>'
					+ '<ul>'
					+ '<li>Pseudoexfoliative</li>'
					+ '<li>Pigmentary</li>'
					+ '<li>Steroid induced </li>'
					+ '<li>Neovascular </li>'
					+ '<li>Uveitic </li>'
					+ '</ul>'
					+ '<li>Congenital Glaucoma</li>'
					+ '</ul>'
				
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
          cls: "lightGrey",
          documents: [],
          items: [
		  {
              html:'<h1>Primary Open Angle Glaucoma (POAG)</h1>',
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
					+ '<li>POAG is associated with an anterior chamber angle that is open by gonioscopic appearance. (arrow)</li>'
					+ '<li>POAG can lead to optic nerve damage from multiple possible causes that is chronic and progresses over time,<br> with a loss of optic nerve fibers that is characteristic of the disease.</li>'
					+ '<li>Disease is typically painless.</li>'
					+ '</ul>',
					style:'width:500px;'
            }, 
           
			{
				html: '<img src="images/openAngleGlaucoma.jpg" width="280" />',
				style:'text-align:center',
				flex: 1
			},
  ]},			
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
				html:'<h1>Angle Closure Glaucoma</h1>',
				style:'margin-bottom:20px',
			},
            
            {
              html:  '<ul>'
					+ '<li><strong>Emergency!!</strong></li>'
					+ '<li>Arises when the intraocular pressure (IOP) is elevated in association with closure of the filtration angle  </li>'
					+ '<li>Sudden and extreme rise in IOP usually accompanied by red painful eye.</li>'
					+ '<li>Permanent vision loss from ocular ischemia may occur within hours if untreated </li>'
					+ '<li>Usually the other eye is examined to determine the angle opening and <strong>preventive iridotomy</strong> is performed in narrow angles.</li>'
					+ '</ul>',
					style:'width:500px;margin-right:20px;'
            }
			]
			},
			{
				html: '<img src="images/angleClosureGlaucoma1.jpg" width="200" /><br><img src="images/angleClosureGlaucoma2.jpg" width="200" /><br>'
				
				
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
              html:'<h1>Normal Tension Glaucoma (NTG)</h1>',
			  style:'margin-bottom:20px',
			},
            {
              html: '<ul>'
					+ '<li>Evidence of glaucomatous optic disc and/or visual field changes with a pressure consistently below 20 mm Hg ("normal range").</li>'
					+ '<li>Although the occurrence of normal-tension glaucoma varies worldwide, it is very prevalent in Japan. </li>'
					+ '<li>In the United States, up to 15-25% of people with open-angle glaucoma experience normal-tension glaucoma.</li>'
					+ '<li>Normal-tension glaucoma is more common in women than in men. </li>'
					+ '<li>Normal-tension glaucoma affects adults, with an average age of 60 years.</li>'
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
              html:'<h1>Secondary Glaucoma</h1>',
			  style:'margin-bottom:20px',
			},
            {
              html: '<ul>'
					+ '<li>Glaucoma can be secondary to another eye disease, condition, or trauma (uveitis glaucoma; angle recession).</li>'
					+ '<li>Glaucoma can also be secondary to a systemic disease or to a medication that the patient is or has taken.</li>'
					+ '<li>If possible, treating the primary disease or condition may reduce or eliminate the rise in the IOP.</li>'
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
              html:'<h1>Pseudoexfoliation Glaucoma (PXF)</h1>',
			  style:'margin-bottom:20px',
			},
            {
              html: '<ul>'
					+ '<li>The most common secondary glaucoma world wide</li>'
					+ '<li>Exact etiology of this condition remains unknown.  </li>'
					+ '<li>In the anterior segment of the eye, it is characterized by deposition of pseudoexfoliative amyloidlike material on the anterior lens capsule, ciliary body, zonules, pupillary margin of the iris, corneal endothelium, anterior vitreous, and trabecular meshwork. </li>'
					+ '<li>Obstruction of the trabecular meshwork by this fibrillar material and pigment associated with degenerative changes in the Schlemm canal and the juxtacanalicular area causes elevation of the intraocular pressure (IOP) with associated glaucoma.</li>'
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
              html:'<h1>Pseudoexfoliation Glaucoma (PXF)</h1>',
			  style:'margin-bottom:20px',
			},
            {
              html: '<ul>'
					+ '<li><strong>Genetics:</strong> Although it occurs in virtually every area of the world, a considerable racial variation exists in the incidence of pseudoexfoliation glaucoma</li>'
					+ '<ul>'
					+ '<li>In Scandinavian countries, more than 50% of cases of open-angle glaucoma are caused by pseudoexfoliation syndrome.</li>' 
					+ '<li>Pseudoexfoliation syndrome is relatively rare among African Americans and Eskimos.</li>' 
					+ '</ul>'
					+ '<li><strong>Gender:</strong> Three times more common in women than in men. </li>'
					+ '<li><strong>Age:</strong> Rarely seen before age 50 years, and its incidence increases steadily with age. </li>'
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
              html:'<h1>Pigmentary Glaucoma</h1>',
			  style:'margin-bottom:20px',
			},
            {
              html: '<ul>'
					+ '<li><strong>Characterized by </strong> disruption of the iris pigment epithelium (IPE) and deposition of pigment granules on the structures of the anterior segment.</li>'
					+ '<li>Pigment granule accumulation in the trabecular meshwork then leads to progressive trabecular dysfunction and ocular hypertension with or without associated glaucoma</li>' 
					+ '<li><strong>Genetic:</strong> Autosomal Dominant disease</li>'
					+ '<li><strong>Special risk groups:</strong> young males, moderate myopia, African ancestry </li>'
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
          cls: 'lightGrey',
          documents: [],
          items: [
		   {
				html:'<h1>Congenital Glaucoma</h1>',
				style:'margin-bottom:20px',
			},
            
            {
              html:  '<ul>'
					+ '<li>Although congenital glaucoma is usually present at birth, symptoms generally dont develop in the infant for a few months. </li>'
					+ '<li><strong>Treatment:</strong> Goniotomy; an opening is made in the <strong>trabecular meshwork</strong> ,<br> the group of tiny canals located in the drainage angle, where fluid leaves the eye. This surgery is only performed on children.</li>'
					+ '</ul>',
					style:'width:500px;margin-right:20px;'
            }
			]
			},
			{
				html: '<img src="images/congenitalGlaucoma1.jpg" width="200" /><br><img src="images/congenitalGlaucoma2.jpg" width="200" /><br>'
				
				
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
              html:'<h1>Glaucoma Management / Treatment</h1>',
			  style:'margin-bottom:20px',
			},
            {
              html: '<ul>'
					+ '<li>Glaucoma is a chronic disease</li>'
					+ '<li>Aim of treatment is to lower IOP and prevent further nerve fiber damage and visual field loss</li>' 
					+ '<li>The damage at time of diagnosis to the nerve fibers cannot be reversed by any of the currently available treatments</li>'
					+ '<li>All patients must be monitored periodically throughout their life</li>'
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
              html:'<h1>Glaucoma Management / Treatment</h1>',
			  style:'margin-bottom:20px',
			},
            {
              html: '<ul>'
					+ '<li><strong>Medical</strong></li>'
					+ '<ul>'
					+ '<li>Topical</li> 	<li>Systemic</li>'
					+ '</ul>'
					+ '<li><strong>Laser</strong></li>'
					+ '<ul>'
					+ '<li>ALT</li>  <li>SLT </li>'
					+ '<li>Cyclophotocoagulation (end stage disease)</li>'
					+ '<li>Iridotomy</li>'
					+ '</ul>'					
					+ '<li><strong>Surgery</strong></li>'
					+ '<ul>'
					+ '<li>Iridectomy (children)</li>'
					+ '<li>Filtration</li>'
					+ '<ul>'					
					+ '<li>Trabeculectomy</li>'
					+ '<li>Non-penetrating Trabeculectomy</li>'
					+ '</ul>'
					+ '<li>Drainage Devices</li>'
					+ '</ul>'
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
          cls: "lightGrey",
          documents: [],
          items: [
		   {
              html:'<h1>Medical Management / Treatment</h1>',
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
					+ '<li>Suppression of aqueous production</li>'
					+ '<li>Facilitation of aqueous outflow</li>'
					+ '<li>Combination of above therapies</li>'
					+ '</ul>'
            },           
			{
				html: '<img src="images/medicalManagement.jpg" width="280" />',
				style:'text-align:center',
				
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
          cls: "lightGrey",
          documents: [],
          items: [
		   {
              html:'<h1>Pharmaceutical Overview</h1>',
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
              html: '<h2><strong>Main anti-glaucoma drug Classes</strong></h2>'
					+ '<ul>'
					+ '<li>Prostaglandin analogues</li>'
					+ '<li>Alpha-Agonists</li>'
					+ '<li>Beta-Blockers</li>'
					+ '<li>Carbonic Anhydrase Inhibitors</li>'
					+ '</ul>'
            },           
			{
				html: '<img src="images/pharmaceuticalOverview.jpg" width="280" />',
				style:'text-align:center;padding-left:20px',
				flex: 1
				
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
          documents: [],
          items: [
		  {
              html:'<h1>Drawbacks of Medication</h1>',
			  style:'margin-bottom:20px',
			},
            {
              html: '<ul>'
					+ '<li>Compliance</li>'
					+ '<li>Efficacy - need for multiple drugs</li>' 
					+ '<li>Side effects</li>'
					+ '<li>Daily fluctuations in IOP</li>'
					+ '<li>Cost</li>'
					+ '<li>"Psychological" - especially for "younger" (50-60y) patients, daily treatment can be disruptive to their routine and emphasis the chronic nature of the disease </li>'
					+ '</ul>'
				
            }
            
          ]
        },
      //slide 35
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
            html: "<h1>Patient Adherence and Persistence</h1>"
          },
          {
            html: '<div class="patientAdherence"></div>'
          },
          {
            html: '<p>Over 90% of patients are non adherent. Nearly 50% of patients are not persistent. And the majority of glaucoma patients have trouble staying committed to their prescription regimens.'
          }
        ],
        listeners: {
          activate: function () {
            if ( document.getElementsByClassName("patientAdherence")[0].getElementsByTagName("svg").length === 0 ) {
            var width = 800,
                height = 400,
                radius = Math.min(width, height) / 2;
            var color = d3.scale.ordinal()
                .range(["#df8c6f", "#2b54ae"]);
            var arc = d3.svg.arc()
                .outerRadius(radius - 10)
                .innerRadius(0);
            var pie = d3.layout.pie()
                .sort(null)
                .value(function (e) {
                return e.percent
            });
            var svg = d3.select(".patientAdherence")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
            d3.csv("data/patientAdherence.csv", function (e, t) {
                t.forEach(function (e) {
                    e.percent = +e.percent
                });
                var n = svg.selectAll(".arc")
                    .data(pie(t))
                    .enter()
                    .append("g")
                    .attr("class", "arc");
                n.append("path")
                    .attr("d", arc)
                    .style("fill", function (e) {
                    return color(e.data.category)
                });
                n.append("text")
                    .attr("transform", function (e) {
                    return "translate(" + arc.centroid(e) + ")"
                })
                    .attr("dy", ".35em")
                    .style("text-anchor", "middle")
                    .text(function (e) {
                    return e.data.category
                })
            });
          }
          }
        }
      },
/*		
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
                  html:'<h1>Patient Adherence and Persistence</h1>',
    			  style:'margin-bottom:20px',
    			},
    			{
                  html:'<img src="images/patientAdherence.jpg" width="730" height="250" />'
    			 
    			},
          {
            html: '<ul>'
  			+ '<li><h2>Over 90% of patients are nonadherent</h2></li>'
  			+ '<li><h2>Nearly 50% of patients are not persistent</h2></li>' 
  			+ '</ul>'
  		
          },
  			  {
          html: '<h2><strong>Majority of glaucoma patients have trouble staying committed to their prescription regimens</strong></h2>',
  			  style:'padding:20px;border:1px solid #999'
          },
  			  {
                html: 'Nordstrom BL, Friedman DS, Mozaffari E, et al. Am J Ophthalmol. 2005;140:598-606.',
  			  style:'font-style:italic'
  				}
        ]
    },
    */
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
              html:'<h1>Common Reasons for Noncompliance</h1>',
			  style:'margin-bottom:20px',
			},
            {
              html: '<ul>'
					+ '<li>Complicated prescription regimens</li>'
					+ '<li>Polypharmacy</li>' 
					+ '<li>Medication costs</li>'
					+ '<li>Unpleasant side effects</li>'
					+ '<li>Not following appropriate dosing instructions</li>'
					+ '<ul>'
					+ '<li>Too much medication</li>'
					+ '<li>Too little medication</li>'
					+ '<li>Waiting 5 minutes between applications of different medications</li>'
					+ '<li>Inability to correctly apply drops, independently</li>'
					+ '</ul>'
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
              html:'<h1>The Adverse Effects of Drug Therapy</h1>',
			  style:'margin-bottom:20px;',
			},
			{
              html:'<img src="images/adverseEffect.jpg" width="800" />'
			 
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
              html:'<h1>IOP Fluctuation: Visual Field Progression</h1>',
			  style:'margin-bottom:20px',
			},
			{
              html:'<img src="images/IOPFluctuation.jpg" width="600" />'
			 
			},
            {
              html: '<ul>'
					+ '<li><h2>Significant progression was observed in eyes with high fluctuation</h2></li>'
					+ '</ul>'
				
            },
			 {
              html: '<h2><strong>Visual field loss progression is increased by 30% with each 1 mm Hg increase in IOP fluctuation</strong></h2>',
			  style:'padding:20px;border:1px solid #999'
				
            },
			{
              html: 'Nouri-Mahdavi K, Hoffman D, Coleman AL, et al. Ophthalmology. 2004;111:1627-1635.',
			  style:'font-style:italic'
				
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
              html:'<h1>IOP Fluctuations: Glaucoma</h1>',
			  style:'margin-bottom:20px',
			},
			{
              html:'<img src="images/IOPFluctuations2.jpg" width="600" />'
			 
			},
            {
              html: '<ul>'
					+ '<li><h2>Large fluctuations (>5 mm Hg) in IOP are a significant risk factor for disease progression in glaucoma patients</h2></li>'
					+ '<li><h2>IOP fluctuations are an independent risk factor</h2></li>'
					+ '</ul>'
				
            },
			 {
              html: '<h2><strong>Fluctuating IOP has been shown to be a major factor in glaucoma progression  </strong></h2>',
			  style:'padding:20px;border:1px solid #999'
				
            },
			{
              html: 'Asrani S, Zeimer R, Wilensky J, et al. J Glaucoma. 2000;9:134-142.',
			  style:'font-style:italic'
				
            },


            
          ]
        },
//slide 40
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
            html: '<h1>Current Average Yearly Cost of Glaucoma Medications</h1>'
          },
          {
            html: '<div class="yearlyCost"></div>'
          },
          {
            html: "<h2>Glaucoma patients are on an average of 2-3 Rx medications</h2><p style='font-style:italic'>Rylander  NR and Vold SD. Am J Ophthalmol. 2008;145:106-113.</p>"
          }
        ],
        listeners: {
          activate: function () {
            if ( document.getElementsByClassName("yearlyCost")[0].getElementsByTagName("svg").length === 0 ) {
            var margin = {top: 20, right: 20, bottom: 30, left: 40},
                width = 840 - margin.left - margin.right,
                height = 450 - margin.top - margin.bottom;

            var x0 = d3.scale.ordinal()
                .rangeRoundBands([0, width], .1);

            var x1 = d3.scale.ordinal();

            var y = d3.scale.linear()
                .range([height, 0]);

            var color = d3.scale.ordinal()
                .range(["#04056f", "#05bcfe", "#0679ca", "#555555", "#7a37aa"]);

            var xAxis = d3.svg.axis()
                .scale(x0)
                .orient("bottom");

            var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left")
                .tickFormat(d3.format(".2s"));

            var svg = d3.select(".yearlyCost").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
              .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            d3.csv("data/yearlyCost.csv", function(error, data) {
              var ageNames = d3.keys(data[0]).filter(function(key) { return key !== "State"; });

              data.forEach(function(d) {
                d.ages = ageNames.map(function(name) { return {name: name, value: +d[name]}; });
              });

              x0.domain(data.map(function(d) { return d.State; }));
              x1.domain(ageNames).rangeRoundBands([0, x0.rangeBand()]);
              y.domain([0, d3.max(data, function(d) { return d3.max(d.ages, function(d) { return d.value; }); })]);

              svg.append("g")
                  .attr("class", "x axis")
                  .attr("transform", "translate(0," + height + ")")
                  .call(xAxis);

              svg.append("g")
                  .attr("class", "y axis")
                  .call(yAxis)
                .append("text")
                  .attr("transform", "rotate(-90)")
                  .attr("y", 6)
                  .attr("dy", ".71em")
                  .style("text-anchor", "end")
                  .text("$mm (US)");

              var state = svg.selectAll(".state")
                  .data(data)
                .enter().append("g")
                  .attr("class", "g")
                  .attr("transform", function(d) { return "translate(" + x0(d.State) + ",0)"; });

              state.selectAll("rect")
                  .data(function(d) { return d.ages; })
                .enter().append("rect")
                  .attr("width", x1.rangeBand())
                  //.attr("width", 135)
                  .attr("x", function(d) { return x1(d.name); })
                  .attr("y", 400)
                  .attr("height", 1)
                  .transition()
                  .duration(1000)
                  .attr("y", function(d) { return y(d.value); })
                  .attr("height", function(d) { return height - y(d.value); })
                  .style("fill", function(d) { return color(d.name); });

              var legend = svg.selectAll(".legend")
                  .data(ageNames.slice().reverse())
                .enter().append("g")
                  .attr("class", "legend")
                  .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

              legend.append("rect")
                  .attr("x", width - 18)
                  .attr("width", 18)
                  .attr("height", 18)
                  .style("fill", color);

              legend.append("text")
                  .attr("x", width - 24)
                  .attr("y", 9)
                  .attr("dy", ".35em")
                  .style("text-anchor", "end")
                  .text(function(d) { return d; });

              });
            }
          }
        }
    }, 
    /*
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
          html:'<h1>Current Average Yearly Cost of Glaucoma Medications</h1>',
  			  style:'margin-bottom:20px',
  			},
  			{
          html:'<img src="images/IOPFluctuation3.jpg" width="600" />'
  			 
  			},
        {
          html: 'Rylander  NR and Vold SD. Am J Ophthalmol. 2008;145:106-113',
		      style:'font-style:italic'
        }
      ]
    },
    */
		
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
              html:'<h1>Closed Angle Glaucoma</h1>',
			  style:'margin-bottom:20px',
			},
			{
              html: '<ul>'
					+ '<li><h2>Yag laser is used to create a hole in the iris to enhance the drainage passages blocked by a portion of the iris.</h2></li>'
					+ '</ul>'
				
            },
			{
              html:'<img src="images/closedAngleGlaucoma.jpg" width="600" />'
			 
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
          cls: "lightGrey",
          documents: [],
          items: [
		   {
              html:'<h1>POAG</h1>',
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
              html:  '<ul>'
					+ '<li>Argon laser Trabeculoplasty (ALT)</li>'
					+ '<li>Selective Laser Trabeculoplasty (SLT);  Q-switched frequency doubled 532nm Nd:YAG laser</li>'
					+ '<li>Cyclophotocoagulation (end stage disease)</li>'
					+ '</ul>',
					style: 'width:400px'
            },           
			{
				html: '<img src="images/poag.jpg" width="280" />',
				style:'text-align:center;padding-left:20px',
				flex: 1
				
			},
		]
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
          cls: 'lightGrey',
          documents: [],
          items: [
		   {
				html:'<h1>ALT</h1>',
				style:'margin-bottom:20px',
			},
            
            {
              html:  '<ul>'
					+ '<li>Argon laser trabeculoplasty (ALT) is a well-established clinical procedure for the treatment of several forms of open-angle glaucoma</li>'
					+ '<li>Success rates at one year are 60-75%</li>'
					+ '<li>50 micron diameter laser shots are applied to the anterior pigmented TM </li>'
					+ '<li>ALT is causes coagulative damage to the TM, resulting in collagen shrinkage and subsequent TM scarring</li>'
					+ '<li>ALT is associated with PAS formation  (adhesions between the iris and TM or cornea)</li>'
					+ '</ul>',
					style:'width:500px;margin-right:20px;'
            }
			]
			},
			{
				html: '<img src="images/alt1.jpg" width="200" height="200"/><br>50 micron diameter laser shots are<br> applied to the anterior<br> pigmented TM<br><img src="images/alt2.jpg" width="200" height="200" /><br>ALT is causes coagulative damage<br> to the TM, resulting in <br>collagen shrinkage and subsequent<br> TM scarring<br>'
				
				
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
				html:'<h1>SLT</h1>',
				style:'margin-bottom:20px',
			},
            
            {
              html:  '<ul>'
					+ '<li>SLT targets the Trabecular Meshwork cells which contain Melanin</li>'
					+ '<li>Thermal energy is localized to pigmented cells - <strong>minimal collateral damage</strong></li>'
					+ '<li>400 micron diameter laser pulses are aimed at the TM</li>'
					+ '<li>Approx 100 shots to cover the 360 degree (entire angle)</li>'
					+ '</ul>'
            }
			]
			},
			{
				html: '<img src="images/slt1.jpg" width="200" height="200"/><br>Thermal energy is localized to <br>pigmented cells - minimal collateral damage<br><img src="images/slt2.jpg" width="200" height="200" /><br>400 micron diameter laser<br> pulses are aimed at the TM'
				
				
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
              html:'<h1>Comparison: ALT vs. SLT</h1>',
			  style:'margin-bottom:20px',
			},
			{
              html:'<img src="images/altslt.jpg"  />'
			 
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
              html:'<h1>Laser Trabeculoplasty Side Effects</h1>',
			  style:'margin-bottom:20px',
			},
            {
              html: '<ul>'
					+ '<li>Initial IOP spike*</li>'
					+ '<li>Slightly blurred vision</li>' 
					+ '<li>Minimal pain or discomfort</li>'
					+ '<li>Minimal inflammatory reaction &dagger;</li>'
					+ '</ul>'
			},
			
			{
              html:  '<ul>'
					+ '<li>* Can be seen at 1 hour post-therapy and may not be statistically  significant (>2 mm Hg)</li>'
					+ '<li>&dagger; 1 + cells and flare</li>'
					+ '</ul>'

			},
			
			{
              html:  'McIlraith I, Strasfeld M, Colev G, et al. J Glaucoma. 2006;15:124-130.<br>'
					+ 'Latina MA, Sibayan SA, Shin DH, et al. Ophthalmology. 1998;105:2082-2090.',
			  style: 'font-style:italic'
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
              html:'<h1>Cyclophotocoagulation</h1>',
			  style:'margin-bottom:20px',
			},
            {
              html: '<ul>'
					+ '<li>Cyclophotocoagulation (e.g. G-probe) is a laser procedure that is used to coagulate selected areas of the ciliary body to reduce the production of fluid</li>'
					+ '<li>This procedure lowers the IOP by destroying the organ that produces the aqueous humor, thereby reducing the inflow of fluid</li>' 
					+ '<li>This is usually reserved as a last result for patients with advanced disease that do not respond to other treatments or with aggressive type of glaucoma (such as neovascular glaucoma)</li>'
					+ '</ul>'
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
          cls: "lightGrey",
          documents: [],
          items: [
		   {
              html:'<h1>Filtration Surgery</h1>',
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
              html:  '<ul>'
					+ '<li><strong>Trabeculectomy</strong><br> Trabeculectomy is a surgical procedure used in the treatment of glaucoma to relieve intraocular pressure by creating a hole in the sclera and removing part of the eye&rsquo;s trabecular meshwork and adjacent structures. The conjunctiva is then sutured in place to cover the hole and allow the fluid to percolate freely creating a "bleb"</li>'
					+ '</ul>',
			  style: 'width:400px;'
            },           
			{
				html: '<img src="images/filrationSurgery.jpg" width="280" />',
				style:'text-align:center;padding-left:20px',
				flex: 1
				
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
          cls: "lightGrey",
          documents: [],
          items: [
		   {
              html:'<h1>Trabeculectomy</h1>',
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
              html:  '<ul>'
					+ '<li>Anti metabolites such as 5FU or MMC are sometimes used to inhibit fibrosis and resultant closure of the filtration path. </li>'
					+ '</ul>',
			  style: 'width:400px;'
            },           
			{
				html: '<img src="images/trabeculectomy.jpg" width="280" />',
				style:'text-align:center;padding-left:20px',
				flex: 1
				
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
          documents: [],
          items: [
		  {
              html:'<h1>Filtration surgery</h1>',
			  style:'margin-bottom:20px',
			},
            {
              html: '<ul>'
					+ '<li><strong>Non-penetrating Trabeculectomy</strong></li>'
					+ '<ul>'
					+ '<li>A more challenging procedure to perform, where a hole is created in the sclera similar to standard trabeculectomy, however, the TM is only partially removed, dissected carefully until fluid appears to percolate through the remaining TM (therefore the anterior chamber is not penetrated). The conjunctiva covers the scleral hole as in standard trabeculectomy  </li>'
					+ '<li>Recently an alternative to the fine manual dissection is offered by IOPTIMA - a CO2 laser is used to "shave" the TM. CO2 typically stops in the presence of liquid. The technology is still in clinical trials and looks promising though unlikely to be first line of glaucoma TX.  </li>'
					+ '</ul>'
					+ '</ul>'
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
          cls: "lightGrey",
          documents: [],
          items: [
		   {
              html:'<h1>Trabeculectomy - Side Effects</h1>',
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
              html:  '<ul>'
					+ '<li>Hypotony</li>'
					+ '<li>Bleb failure / conjunctival hypertrophy</li>'
					+ '<li>Anti-metabolite complications</li>'
					+ '<li>Endophthalmitis</li>'
					+ '<li>Cystoid Macular Edema</li>'
					+ '</ul>',
			  style: 'width:400px;'
            },           
			{
				html: '<img src="images/trabeculectomyEffects.jpg" width="280" />',
				style:'text-align:center;padding-left:20px',
				flex: 1
				
			},
		]
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
          cls: 'lightGrey',
          documents: [],
          items: [
		   {
				html:'<h1>Drainage Devices</h1>',
				style:'margin-bottom:20px',
			},
            
            {
              html:  '<ul>'
					+ '<li>Shunts typically are made of materials such as silicone or polypropylene. Some shunts are hollow tubes that improve drainage, while others have valves to shut off drainage.</li>'
					+ '<li>Typical shunts include Ahmed, Baerveldt and Molteno Valves</li>'
					+ '</ul>',
			  style:'width:400px',
            }
			]
			},
			{
				html: '<img src="images/Drainage1.jpg" width="200" height="180"/><br><img src="images/Drainage2.jpg" width="200" height="180" /><br>',
				 style:'padding-left:20px',
				
				
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
              html:'<h1>Drainage Devices - Side Effects</h1>',
			  style:'margin-bottom:20px',
			},
            {
              html: '<ul>'
					+ '<li>Hypotony</li>'
					+ '<li>Infection</li>'
					+ '<li>Shunt failure (closure, dislodgment)</li>'
					+ '<li>Corneal discompensation due to touch of shunt with corneal endothelium</li>'
					+ '<li>Cataract formation</li>'
					+ '</ul>'
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
              html:'<h1>Minimally Invasive Glaucoma Surgery (MIGS)</h1>',
			  style:'margin-bottom:20px',
			},
            {
              html: '<ul>'
					+ '<li>The main advantage of MIGS is that these procedures are non-penetrating, so they are less invasive and safer. </li>'
					+ '<li>These alternative techniques are blebless, thus avoiding bleb-related complications which have been the major problem associated with trabeculectomy surgery, such as bleb-leak, shallow anterior chamber, hypotony, blebitis, and endophthalmitis. </li>'
					+ '<li>Infection is the most dreaded complication and can occur at any time even years after surgery.</li>'
					+ '<li>The main limitation of MIGS, however, is that these procedures do not produce as large a pressure lowering effect as trabeculectomy does. In addition, the resulting effect is not as reliable as that achieved with traditional filtering procedures. Therefore, MIGS is generally reserved for patients with less advanced disease <strong><u>or used in combination with cataract surgery.</u></strong> </li>'
					+ '</ul>',
					
			  style:'width:600px',
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
          cls: 'lightGrey',
          documents: [],
          items: [
		   {
				html:'<h1>Ex-PRESS glaucoma filtration device (Alcon) </h1>',
				style:'margin-bottom:20px',
			},
            
            {
              html: '<p>0.4 x 3 mm stainless steel mini-shunt drains aqueous fluid into the subconjunctival space and is used in conjunction with standard trabeculectomy surgery. It is placed under the scleral flap and into the anterior chamber so no sclerectomy or iridectomy is required. This makes the surgery safer and provides some resistance to flow. Another advantage is that the Ex-PRESS shunt procedure provides faster visual recovery than traditional trabeculectomy surgery. </p>',
			  style:'width:400px',
            }
			]
			},
			{
				html: '<img src="images/glaucomafiltration1.jpg" width="200" height="180"/><br><img src="images/glaucomafiltration2.jpg" width="200" height="180" /><br>'
				
				
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
              html:'<h1>Canaloplasty (iScience Interventional) </h1>',
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
              html: '<p>The goal of this procedure is to enlarge Schlemm&rsquo;s canal. This is accomplished by passing a 9-0 or 10-0 prolene suture 360 degrees through Schlemm&rsquo;s canal with the aid of a microcatheter and viscoelastic to dilate the canal. The suture is tied tightly in order to keep the canal open. One drawback of this procedure is that it is technically challenging, and there is a risk of puncturing Descemet&rsquo;s membrane.</p>',
			  style: 'width:400px;'
            },           
			{
				html: '<img src="images/Canaloplasty.jpg" width="280" />',
				style:'text-align:center;padding-left:20px',
				flex: 1
				
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
          cls: "lightGrey",
          documents: [],
          items: [
		   {
              html:'<h1>Trabectome (NeoMedix)</h1>',
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
              html: '<p>This is a thermal cautery device with irrigation and aspiration and a protective footplate. It is used to ablate a 2- to 4-clock hour segment of trabecular meshwork and Schlemm&rsquo;s canal under direct visualization with a gonioscopy lens. This procedure is less traumatic and safer than trabeculectomy surgery. It also has the advantages of being quicker and technically easier to perform.</p><p>The trabectome is inserted through a clear corneal incision and can be used in combination with cataract surgery. Like the other MIGS procedures, the main disadvantage of this technique is the limited effect. </p>',
			  style: 'width:400px;'
            },           
			{
				html: '<img src="images/Trabectome.jpg" width="280" />',
				style:'text-align:center;padding-left:20px',
				flex: 1
				
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
          cls: "lightGrey",
          documents: [],
          items: [
		   {
              html:'<h1>iStent trabecular micro-bypass (Glaukos)</h1>',
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
              html: '<p>Small transtrabecular titanium stent drains aqueous fluid into Schlemm&rsquo;s canal. The device is placed through a clear corneal incision with the aid of a gonioscopy lens. Because it provides less IOP reduction than the Ex-PRESS shunt, some surgeons are investigating placement of more than one iStent to further lower pressure. This device is used for early to moderate glaucoma and can also be combined with cataract surgery.</p>',
			  style: 'width:400px;'
            },           
			{
				html: '<img src="images/iStenttrabecular.jpg" width="280" />',
				style:'text-align:center;padding-left:20px',
				flex: 1
				
			},
		]
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
          cls: 'lightGrey',
          documents: [],
          items: [
		   {
				html:'<h1>CyPass (Transcend Medical)</h1>',
				style:'margin-bottom:20px',
			},
            
            {
              html: '<p>This supraciliary microstent increases uveoscleral outflow. It is implanted through a clear corneal incision and can be combined with cataract surgery. </p>',
			  style:'width:400px;margin-right:20px;',
            }
			]
			},
			{
				html: '<img src="images/CyPass1.jpg" width="200" height="180"/><br><img src="images/CyPass2.jpg" width="200" height="180" /><br>',
				style:'padding-left:20px;',
				
				
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
              html: '<p>This is a 3 x 6 mm device that is less than 0.1 mm thick.<br> It is placed into the supraciliary space through a 3 mm incision to increase uveoscleral outflow.</p>',
			  style:'width:400px;margin-right:20px;',
            }
			]
			},
			{
				html: '<img src="images/CyPass3.jpg" width="200" height="180"/><br><img src="images/CyPass4.jpg" width="200" height="180" /><br>',
				style:'padding-left:20px;',
				
				
			}			
          ]
        },
		
		    //quiz?
		
		
		
		
		
    ]
  }
  
  });