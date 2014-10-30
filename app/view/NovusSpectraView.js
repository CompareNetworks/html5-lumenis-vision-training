Ext.define("LumenisTraining.view.NovusSpectraView", {
  extend: "Ext.Carousel",
  xtype: "novusspectraview",
  config: {
    title: "Novus Spectra",
    id: "novusSpectraView",
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
          cls: "lightGrey",
          documents: [],
          items: [
                {
                    html: '<h1>Novus® Spectra™</h1>',
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
                    + '<li>High-Power, Portable DPSS Green (532nm) Laser with the Lumenis state of the art LaserLink </li>'
                    + '<li>Target Market: General Ophthalmologists, Retina Specialists, ENT Specialists (using Endo-Otolaryngology probes)</li>'
                    + '<li>Main Features:</li>'
                    + '<ul>'
                    + '<li>SureSpot Optics & ClearView Filters</li>'
                    + '<li>Dual Port or Single Port </li>'
                    + '<li>High power (2.5W) </li>'
                    + '<li>Two-year warranty </li>'
                    + '<li>Portable (8 Kg / 18 Lbs) </li>'
                    + '<li>Durable (high duty cycle) </li>'
                    + '<li>Broad range of compatible delivery devices & accessories</li>'
                    + '</ul>'
                    + '</ul>',
              style:'width:400px;margin-right:20px;',
            },
              {
                html: '<img src="images/novusSpectra1.jpg" width="250" style="padding:10px;" /><br><img src="images/novusSpectra2.jpg" width="250" style="padding:10px;" /><br>',
                style:'padding-left:20px;',
                
                
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
              html:'<h1>Novus Spectra Dual Port Benefit</h1>',
              style:'margin-bottom:20px',
            },
            {
              html: '<ul>'
                    + '<li>Connect two delivery devices simultaneously</li>'
                    + '<li>Instantly switch between delivery devices (at a touch of a button)</li>'
                    + '<li>The unit automatically adjusts power parameters to meet the specific requirements of each delivery device</li>'
                    + '<li>Ideal for the OR (switch between LIO and endo-probe</li>'
                    + '<ul>'
                    + '<li>Basic requirement</li>'
                    + '<li>Lock-out specification</li>'
                    + '</ul>'
                    + '<li>Ideal for the clinic (switch between Slit Lamp and LIO)</li>'
                    + '</ul>',
                    
              style:'width:600px',
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
              html:'<h1>Novus Spectra Single-Port</h1>',
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
                    + '<li>Target Market: All ophthalmologists, general ophthalmologists, retina specialists, all ophthalmic clinics and hospitals</li>'
                    + '<li>Ophthalmic Applications: retinal photocoagulation, non-selective trabeculoplasty (ALT), "argon" iridotomy</li>'
                    + '<li>Rationale & Market Need: ophthalmic laser photocoagulators are an essential tool in every ophthalmic clinic/hospital. Retinal photocoagulation is the gold standard for a variety of clinical indications</li>'
                    + '<li>Competitive Positioning: High-powered photocoagulator, competitive costs, ideal for the OR and outpatient clinic, portable, versatile & user-friendly, from the company that invented the first ophthalmic photocoagulator, cross-selling (can potentially be used for ENT procedures – using endo-oto probes) </li>'
                    + '</ul>',
                    
              style:'width:500px',
            },           
            {
                html: '<img src="images/novusSpectra3.jpg" width="280" />',
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
              html:'<h1>Novus Spectra Dual-Port</h1>',
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
                    + '<li>Target Market: All ophthalmologists, general ophthalmologists, retina specialists, all ophthalmic clinics and hospitals</li>'
                    + '<li>Ophthalmic Applications: retinal photocoagulation, non-selective trabeculoplasty (ALT), “argon” iridotomy</li>'
                    + '<li>Rationale & Market Need: ophthalmic laser photocoagulators are an essential tool in every ophthalmic clinic/hospital. Retinal photocoagulation is the gold standard for a variety of clinical indications</li>'
                    + '<li>Competitive Positioning: High-powered photocoagulator, dual fiber port, ideal for the OR and outpatient clinic (two delivery devices simultaneously), portable, versatile & user-friendly, from the company that invented the first ophthalmic photocoagulator, cross-selling (can potentially be used for ENT procedures – using endo-oto probes)</li>'
                    + '</ul>',
                    
              style:'width:500px',
            },           
            {
                html: '<img src="images/novusSpectra4.jpg" width="280" />',
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
              html:'<h1>Novus Spectra Delivery Systems</h1>',
              style:'margin-bottom:20px',
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
                html: '<img src="images/novusSpectradelivery1.jpg" width="200" /><br><p>LaserLink Z-1000 – 50-1000µm Spot-Size Compatible with Zeiss SL130, 30SL, 20SL, 125SL Slit Lamps </p>',
                style:'text-align:center;',
                flex: 1
                
            },           
            {
                html: '<img src="images/novusSpectradelivery2.jpg" width="200" /><br><p>LaserLink Haag Streit 50-500µm Spot-Size</p>',
                style:'text-align:center;padding-left:30px',
                flex: 1
                
            },
            {
                html: '<img src="images/novusSpectradelivery3.jpg" width="200" /><br><p>LumeProbe™  Ophthalmic Endo-Photocoagulation Laser Probes</p>',
                style:'text-align:center;padding-left:30px',
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
                html: '<img src="images/novusSpectradelivery4.jpg" width="200" /><br><p>Lumenis LIO – Keeler Modified Keeler Fison Model</p>',
                style:'text-align:center;',
                flex: 1
                
            },           
            {
                html: '<img src="images/novusSpectradelivery5.jpg" width="200" /><br><p>Lumenis LIO – Heine Modified Heine Omega 180 Model</p>',
                style:'text-align:center;padding-left:20px;',
                flex: 1
                
            },
            ]
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
                    html: '<h1>Novus Spectra Optional Accessories</h1>',
                    style:'margin-bottom:20px',
                },
          {
           xtype: 'container',
          layout: {
            type: 'hbox',
            pack: 'center',
            align: 'top'
          },
          cls: 'lightGrey',
          documents: [],
          items: [
        
            {
              html: '<ul>'
                    + '<li>Smart footswitch </li>'
                    + '<li>PowerEase footswitch</li>'
                    + '</ul><br><br>'
                    + '<ul>'
                    + '<li>Carrying case</li>'
                    + '</ul>'
                    ,
              style:'width:400px;margin-right:20px;',
            },
              {
                html: '<img src="images/novusSpectra6.jpg" width="250" style="padding:10px;" /><br><img src="images/novusSpectra7.jpg" width="250" style="padding:10px;" /><br>',
                style:'padding-left:20px;',
                
                
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
              html:'<h1>Novus Spectra – Complete OR Solution</h1>',
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
                    + '<li>Ergonomically designed OR cart keeps all accessories at hand with orderly cable management</li>'
                    + '<li>Instantly switch between delivery devices, such as LIO and endoprobes, at the touch of a button</li>'
                    + '<li>Designed to conveniently fit in the OR and meet the user’s requirements</li>'
                    + '</ul>',
                    
              style:'width:500px',
            },           
            {
                html: '<img src="images/novusSpectra5.jpg" width="280" />',
                style:'text-align:center;padding-left:20px',
                flex: 1
                
            },
        ]
        },          
          ]
        },
        
        {
            xtype: 'quiznovusspectraview'
        },
        
        
 
    ]
  }
  
  });