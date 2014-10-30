Ext.define("LumenisTraining.view.TopTenView", {
  extend: "Ext.Carousel",
  xtype: "toptenview",
  config: {
    title: "Top Ten Reasons to use SLT",
    id: "topTenView",
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
      documents: [],
      items: [{
        html: '<h1>Why Use SLT as Primary Therapy?</h1><br><h1><strong>REASON #1<br>Simplify Treatment!</strong></h1>',
        style: 'margin-bottom:20px;text-align:center',
      }, {
        html: '<ul><h2>Glaucoma Medications</h2>'
         + '<li>Requires patient intervention</li>'
         + '<li>Side effects, and QOL</li>'
         + '<li>Issues  with Compliance</li>'
         + '<li>Peak/trough IOP fluctuations</li>'
         + '</ul>'
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
      documents: [],
      items: [{
        html: '<h1>Medications have been the Religion of Glaucoma<br>HOWEVER</h1>',
        style: 'margin-bottom:20px;text-align:center;',
      }, {
        html: '<img src="images/Medications.jpg" width="600" />'

      }, {
        html: 'Nordstrom BL, Friedman DS, Mozaffari E, et al:  Am J Ophthalmol. 2005  Oct;140(4)(GAP STUDY)',
        style: 'font-style:italic'

      },

      ]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1><strong>REASON #2 –Cost effective</strong><br>Economic Evaluation<br>Medication, Laser and Filtering Surgeries in US<br></h1><h2>Cantor, Katz, etal. Current Medical Research 2008</h2>',
        style: 'margin-bottom:20px;text-align:center;',
      }, {
        html: '<ul>'
         + '<li><h2>Five Year Treatment costs</h2></li>'
         + '</ul>'

      }, {
        html: '<table width="600" border="0" cellpadding="5" cellspacing="2">'
         + '<tr>'
         + '<td>&nbsp;</td>'
         + '<td style="color:#3D94CD;">Baseline</td>'
         + '<td style="color:#3D94CD;">Mean</td>'
         + '<td style="color:#3D94CD;">Range</td>'
         + '</tr>'
         + '<tr style="background:#f7fbfc;">'
         + '<td style="text-align:left;">Medication Only</td>'
         + '<td>$6571</td>'
         + '<td>$6553</td>'
         + '<td>$4956-8006</td>'
         + '</tr>'
         + '<tr style="background:#f7fbfc;">'
         + '<td style="color:#3D94CD;text-align:left;">Laser Trabeculoplasty</td>'
         + '<td style="color:#3D94CD;">$4838</td>'
         + '<td style="color:#3D94CD;">$4849</td>'
         + '<td style="color:#3D94CD;">$3653-6088</td>'
         + '</tr>'
         + '<tr style="background:#f7fbfc;">'
         + '<td style="text-align:left;">Surgery</td>'
         + '<td>$6363</td>'
         + '<td>$6386</td>'
         + '<td>$2996-13,475</td>'
         + '</tr>'
         + '</table>'

      },

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
        html: '<h1><strong>REASON #3<br>Easy to Perform</br></strong></h1>',
        style: 'margin-bottom:20px;text-align:center;',
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
          html: '<ul>'
           + '<li><strong>IN OFFICE PROCEDURE</strong></li>'
           + '<li><strong>Precise focusing is not required</strong></li>'
           + '</ul></br>'
           + '<h2>Wavelength - 532 nm</h2></br>'
           + '<h2>Pulse duration - 3 ns</h2></br>'
           + '<h2>Spot size - 400 &micro;m</h2></br>'
           + '<h2>Energy / pulse - 0.6-1.4 mJ</h2></br>'
           + '<h2>Spots - 45-55 confluent inferior or <strong>nasal 180 or 100 spots -360 deg</strong></h2></br>',
          style: 'width:400px;'

        }, {
          html: '<img src="images/topten.jpg" width="350" height="200" />'
        }
        ]
      }, {
        html: '<h2><strong>It takes physician time, but saves the patient time taking meds</strong></h2>'
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
      documents: [],
      items: [{
        html: '<h1>Lumenis Selecta Duet</h1>',
        style: 'margin-bottom:20px',
      }, {
        html: '<img src="images/topten1.jpg" width="600" />'

      },

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
        html: '<h1>Spot Size ALT v. SLT</h1>',
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
          html: '<ul>'
           + '<li>ALT (50&micro;m – <span style="color:#39b54a;">green</span>)'
           + '<ul>'
           + '<li>Requires focus on TM</li>'
           + '</ul></li>'
           + '<li>SLT (400&micro;m – <span style="color:#ff0000;">red</span>)'
           + '<ul>'
           + '<li>Covers TM</li>'
           + '<li>Does not require same sensitive  focus as ALT</li>'
           + '</ul>'
           + '</li>'
           + '</ul><br>Courtesy M. Berlin, M.D.'
        }, {
          html: '<img src="images/spotSize.jpg" width="380" />'
        }
        ]
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
      documents: [],
      items: [{
        html: '<h1><strong>Nuts and Bolts: Clinical Application of SLT<strong></h1>',
        style: 'margin-bottom:20px',
      }, {
        html: '<ul>'
         + '<li><b>Percent (degrees)  of angle treatment:</b>'
         + '<ul>'
         + '<li>360° provides best results for primary therapy</li>'
         + '<li>180° can be effective for primary therapy'
         + '<ul>'
         + '<li><strong>Watch-outs: pigmentary, PXF glaucoma or heavy pigment in COAG¹</strong></li>'
         + '</ul>'
         + '</li>'
         + '</ul>'
         + '</li>'

         + '<li><b>Energy settings:</b>'
         + '<ul>'
         + '<ul>'
         + '<li>Pigment influences energy settings   “Titrate energy based on TM pigmentation”</li>'
         + '<li>Heavy   pigmentation: 0.6 mJ</li>'
         + '<li>Lighter  pigmentation: 0.9 mJ'
         + '<ul>'
         + '<li>More pigment = less energy needed</li>'
         + '</ul>'
         + '</li>'
         + '</ul>'
         + '<li><b>ENDPOINT:   Desirable to see intermittent cavitation bubbles</b></li>'
         + '</ul>'
         + '</li>'


         + '<li><b>Post-operative regiment</b>'
         + '<ul>'
         + '<li>NO  Steroids ( ? negative effect on cascade)</li>'
         + '<li>NSAID'
         + '<ul>'
         + '<li>Xibrom™ (only FDA approved B.I.D. dosing regiment)</li>'
         + '</ul>'
         + '</li>'
         + '<li>Prescribe Nothing</li>'
         + '</ul>'
         + '</li>'
         + '</ul>'
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
      documents: [],
      items: [{
        html: '<h1><strong>SLT<br> Low Complication Rate<strong></h1>',
        style: 'margin-bottom:20px;text-align:center;',
      }, {
        html: '<ul>'
         + '<li>NO SYSTEMIC SIDE EFFECTS</li>'
         + '<li>IOP spikes -  5%  usually at 1-2 hours</li>'
         + '<li>Iritis post-op -  mild – resolves with steroids</li>'
         + '<li><strong>Persistant IOP spike in pigmentary glaucoma</strong>'
         + '<ul>'
         + '<li><strong>USE LOWER ENERGY AND FEWER SPOTS</strong></li>'
         + '</ul>'
         + '</li>'
         + '</ul>'
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
        html: '<h1><strong>REASON #4<br>SLT – Histologically superior to  ALT</br></strong></h1><h2>Lack of Structural Damage Has Important Clinical Implications</h2>',
        style: 'margin-bottom:20px;text-align:center;',
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
          html: '<ul>'
           + '<li><strong>Earlier Treatment</strong>'
           + '<ul>'
           + '<li>Primary Therapy</li>'
           + '</ul>'
           + '</li>'
           + '<li><strong>Greater Safety</strong>'
           + '<ul>'
           + '<li>Following Prior ALT</li>'
           + '<li>Repeat/Re-treatment of the TM</li>'
           + '<li><strong>Effect Less dependent on TM Pigmentation</strong></li>'
           + '</ul>'
           + '</li>'
           + '</ul></br>',
          style: 'width:400px;'

        }, {
          html: '<img src="images/selectaduet.jpg" width="350" /><br><b>Lumenis Selecta Duet™</b>',
          style: 'text-align:center'
        }
        ]
      },
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
        html: '<h1>Differences</h1>',
      }, {
        xtype: 'container',
        layout: {
          type: 'hbox',
          pack: 'center',
          align: 'top'
        },

        items: [{
          html: '<h1><strong>SLT</strong></h1><br>Low Energy<br><strong>No</strong> Thermal Damage<br><br><img src="images/diffslt.jpg" width="280"  height="280" />',
          style: 'margin-right:20px; width:300px;'
        }, {
          html: '<h1><strong>ALT</strong></h1><br>High Energy<br>Coagulation damage<br>Light TM – poor effect<img src="images/diffalt.jpg"  width="280"  height="280" />',
          style: 'width:300px;'
        }
        ]

      }, {
        html: '<p>Human organ culture of Trabecular Meshwork   &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       R. Noecker, T. Kamm</p>',
      },

      ]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1><strong>1. IMMEDIATE EVENTS –melanin targeted</strong></h1>',
        style: 'margin-bottom:20px',
      }, {
        html: '<img src="images/melanin.jpg" width="600" />'

      }, {
        html: '<h2>Size = 400 mm     Exp.  3 nsec     Energy = 0.6 - 1.0 mJ  SLT -   <u>No visible burns</u> </h2>',
        style: 'padding:20px;'

      }, {
        html: 'Courtesy G. Alvarado, M.D.',
        style: 'font-style:italic'

      },

      ]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1><strong>REASON #5 <br> Effectiveness of SLT as Primary Therapy is supported by a variety of Clinical Studies</strong> </h1>',
        style: 'margin-bottom:20px;text-align:center',
      }, {
        html: '<ul>'
         + '<li>SLT vs MED Study  - Randomized Controlled Multi-center Clinical trial</li>'
         + '<li>Nagar and Co-workers</li>'
         + '<li>Melamed – Archives of Ophthalmology</li>'
         + '<li>I. McIlraith - J. of Glaucoma 4/2006</li>'
         + '</ul>'
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
        html: '<h1>Melamed et al -  Israel- 2003</h1>',
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
          html: '<ul>'
           + '<li>IOP decreased by 30% (7.7mmHg), from 25.5mmHg to 17.9mmHg over the follow up period </li>'
           + '</ul><br>'
           + '<h2>“Selective laser trabeculoplasty is effective and safe as a primary treatment for patients with ocular hypertension and open-angle glaucoma.”</h2>',
          style: 'width:400px;margin-right:20px;'
        }, {
          html: '<img src="images/Melamed.jpg" width="150" style="float:right; margin-bottom:10px"/><br><img src="images/Melamed2.jpg" width="320" style="clear:both" />'
        }
        ]
      }, {
        html: 'S. Melamed, G.J. Ben Simon, H. Levkovitz-Verbin: selective laser trabeculoplasty as primary treatment for open-angle glaucoma: A Prospective, Nonrandomized Pilot Study. Arch Ophthalmol. 2003;121:957-960',
        style: 'margin-bottom:20px',
      },
      ]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1><strong>SLT as Primary TX  - 45 eyes – 1 yr F/U<br>Melamed et al</h1></strong>',
        style: 'margin-bottom:20px;text-align:center',
      }, {
        html: '<h2>Absolute IOP reduction</h2>',
        style: 'padding:20px;'

      }, {
        html: '<img src="images/Melamed3.jpg" width="500" />'

      },

      ]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1>Success rates SLT vs Xalatan @ 12 months – 167 eyes</h1>',
        style: 'margin-bottom:20px;text-align:center;',
      }, {
        html: '<table width="600" border="0" cellpadding="5" cellspacing="2">'
         + '<tr>'
         + '<td>&nbsp;</td>'
         + '<td ><span style="color:#3D94CD;" >>20% IOP</span><br> Reduction</td>'
         + '<td ><span style="color:#3D94CD;" >>30% IOP</span><br> Reduction</td>'
         + '</tr>'
         + '<tr style="background:#f7fbfc;">'
         + '<td style="text-align:left;">Xalatan</td>'
         + '<td style="color:#3D94CD;">35/39 eyes (90%)</td>'
         + '<td style="color:#3D94CD;">28 eyes (78%)</td>'
         + '</tr>'
         + '<tr style="background:#f7fbfc;">'
         + '<td style="text-align:left;">90 degree</td>'
         + '<td >12/35 eyes (34%)*</td>'
         + '<td >4 eyes (11%)*</td>'
         + '</tr>'
         + '<tr style="background:#f7fbfc;">'
         + '<td style="text-align:left;">180 degree</td>'
         + '<td>32/49 eyes (65%)*</td>'
         + '<td>21 eyes (48%)*</td>'
         + '</tr>'
         + '<tr style="background:#f7fbfc;">'
         + '<td style="text-align:left;">360 degree</td>'
         + '<td style="color:#3D94CD;">36/44 eyes (82%)</td>'
         + '<td style="color:#3D94CD;">26 eyes (59%)</td>'
         + '</tr>'
         + '</table>'

      }, {
        html: '* Statistically significant difference',
        style: 'font-style:italic'

      },

      ]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1><strong>REASON #6<br>IOP Reductions comparable to Xalatan<sup>&reg;</sup> as Primary Therapy</strong></h1>',
        style: 'margin-bottom:20px;text-align:center',
      }, {
        html: '<ul>'
         + '<li><b>SLT/MED</b> STUDY -  Prospective Randomized Controlled Clinical Trial comparing <span style="color:#ff0000;">S</span>elective <span style="color:#ff0000;">L</span>aser <span style="color:#ff0000;">T</span>rabeculoplasty Vs. Topical <span style="color:#ffcc66;">Med</span>ical Therapy as initial monotherapy (PGE’s)</li>'
         + '<li>I. McIlraith - Prospective, multi-center trial to investigate safety & efficacy of SLT (180°) as 1° therapy </li>'
         + '</ul>'
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
      documents: [],
      items: [{
        html: '<h1>Primary Therapy: SLT vs Medication</h1>',
        style: 'margin-bottom:20px',
      }, {
        html: '<img src="images/PrimaryTherapy.jpg" width="600" />'

      }, {
        html: '<h2><b>Equivalent IOP reduction <u>with less</u> concern about side effects and patient compliance</b></h2>',
        style: 'padding:20px;border:1px solid #999'

      },

      ]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1>Primary Therapy: SLT vs Medication</h1>',
        style: 'margin-bottom:20px',
      }, {
        html: '<img src="images/PrimaryTherapy2.jpg" width="600" />'

      }, {
        html: '<ul>'
         + '<li><h2>SLT provided a mean IOP reduction of 31% (vs a mean IOP reduction of 30.6% with LATANOPROST)</h2></li>'
         + '</ul>'

      }, {
        html: '<h2><b>SLT therapy provides IOP reduction equivalent to that of medications</b></h2>',
        style: 'padding:20px;border:1px solid #999'

      },

      ]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1>SLT as initial Therapy for OAG</h1><br>Prospective, multi-center trial to investigate safety & efficacy of SLT (180°) as 1° therapy   (100 eyes, 61 patients)',
        style: 'margin-bottom:20px;text-align:center',
      }, {
        html: '<img src="images/initialTherapy.jpg" width="600" />'

      }, {
        html: '<h2><b>FIGURE 1.</b> Responder rates for SLT and control groups. (20% vs 30% IOP reduction) 74 primary, 26 control</h2>',
        style: 'padding:20px;'

      },

      ]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1><strong>REASON #7<br>Good Long-term success for maintaining  IOP Control</strong></h1>',
        style: 'margin-bottom:20px;text-align:center',
      }, {
        html: '<ul>'
         + '<li>Jindra – COPHy 2010</li>'
         + '<li>Gracner  - 2006</li>'
         + '<li>Nagar -  IGS - 2007</li>'
         + '</ul>'
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
      documents: [],
      items: [{
        html: '<h1>JINDRA <br>SLT as Primary Therapy <br>Long-term Results – 8 year follow-up</h1>',
        style: 'margin-bottom:20px;text-align:center',
      }, {
        html: '<ul>'
         + '<li><h2>Mean follow-up on 1393 eyes was 757 days. </h2></li>'
         + '<li><h2>Mean IOP decreased 31% from mean of 18.9mmHg to 13.0mmHg.  </h2></li>'
         + '</ul>'

      }, {
        html: '<img src="images/PrimaryTherapy3.jpg" width="600" />'

      }, {
        html: '<ul>'
         + '<li><h2> Results were significant with p < 0.01.</h2></li>'
         + '</ul>'

      },

      ]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1>Success rates – 5 to 6 years</h1>',
        style: 'margin-bottom:20px',
      }, {
        html: '<ul><h2>A study of 90 eyes treated with SLT reported success rates after </h2>'
         + '<li>1 yr  -  94%</li>'
         + '<li>2 yrs - 85%</li>'
         + '<li>3 yrs - 74%</li>'
         + '<li>4 yrs - 68%</li>'
         + '<li>6 yrs - 59%'
         + '<ul>'
         + '<li>Definition of success: IOP reduction greater than 20%, stable VF and disc, and no glaucoma surgical intervention</li>'
         + '</ul>'
         + '</li>'
         + '</ul>'
      }, {
        html: 'Gracner et al. Klin Monatsbl Augenheilkd. 2006;;223:743-7  ',
        style: 'font-style:italic'

      },

      ]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1>Survival Curve – OAG & OHT<br> 20% IOP reduction<br>Nagar IGS 2007</h1>',
        style: 'margin-bottom:20px;text-align:center',
      }, {
        html: '<img src="images/survivalCurve.jpg" width="700" />'

      },

      ]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1><strong>REASON #8<br>Reduction of Inter-visit IOP Fluctuations</strong></h1>',
        style: 'margin-bottom:20px;text-align:center',
      }, {
        html: '<img src="images/IOPFluctuations.jpg" width="600" />'

      }, {
        html: '<h2><b>Visual field loss progression is increased by 30% with each 1 mm Hg increase in IOP fluctuation</b></h2>',
        style: 'padding:20px;border:1px solid #999'

      }, {
        html: 'Nouri-Mahdavi K, Hoffman D, Coleman AL, et al. Ophthalmology. 2004;111:1627-1635.',
        style: 'font-style:italic'

      },

      ]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1>Long term (inter-visit) IOP Fluctuation following SLT as Primary Therapy</h1><br><h2>Prasad, Murthy, Dagianis, Latina</h2>',
        style: 'margin-bottom:20px;text-align:center;',
      }, {
        html: '<table width="600" border="1" cellpadding="5" cellspacing="2" style="border:2px solid #ffffff">'
         + '<tr>'
         + '<td rowspan="2"><h2>Extent of SLT</h2></td>'
         + '<td rowspan="2"><h2>Pre-laser mean IOP(mm Hg)</h2></td>'
         + '<td colspan="2"><h2>Post-laser Month12</h2></td>'
         + '<td colspan="2"><h2>Post-laser Month 24</h2></td>'
         + '</tr>'
         + '<tr>'
         + '<td><h2>Mean IOP(mm Hg)</h2></td>'
         + '<td><h2>IOP drop mm Hg(%)</h2></td>'
         + '<td><h2>Mean IOP(mm Hg)</h2> </td>'
         + '<td><h2>IOP drop mm Hg(%)</h2></td>'
         + '</tr>'
         + '<tr style="background:#f7fbfc;">'
         + '<td style="color:#3D94CD;">180 deg</td>'
         + '<td >25.63±2</td>'
         + '<td>18.3± 3.6</td>'
         + '<td>7.3 (28%)</td>'
         + '<td>18.4±2.9</td>'
         + '<td style="color:#3D94CD;">7.2 (28%)</td>'
         + '</tr>'
         + '<tr style="background:#f7fbfc;">'
         + '<td style="color:#3D94CD;">360 deg</td>'
         + '<td>25.68± 2</td>'
         + '<td>16.7± 2.4</td>'
         + '<td>8.9 (35%)</td>'
         + '<td>16.6±2.8</td>'
         + '<td style="color:#3D94CD;">9.0 (35%)</td>'
         + '</tr>'
         + '</table>'

      },

      ]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1> SLT – Primary Therapy<br>IOP Fluctuation 180 vs 360</h1>',
        style: 'margin-bottom:20px;text-align:center',
      }, {
        html: '<img src="images/IOPFluctuations3.jpg" width="500" />'

      }, {
        html: '<h2><strong>SLT 360 degree treatment resulted in statistically reduced IOP fluctuation compared to 180 degree treatment  (<2.0 mm Hg SD)</strong></h2>',
        style: 'padding:20px;border:1px solid #999'

      },

      ]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1>SLT Reduces IOP Variation in NTG</h1><br><h2>M. Mallah, S. Asrani 2010</h2>',
        style: 'margin-bottom:20px;text-align:center',
      }, {
        html: '<img src="images/IOPFluctuations4.jpg" width="900" />'

      },

      ]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1><strong>Reason #9</strong></h1>',
        style: 'margin-bottom:20px',
      }, {
        html: '<ul><h2><strong>IOP lowering following SLT is dependent on when laser used in treatment paradigm</strong></h2>'
         + '<li>Effectiveness of SLT may be reduced the greater the number of glaucoma medications '
         + '<ul>'
         + '<li>After medical therapy failure (“last gasp”): modest efficacy</li>'
         + '</ul>'
         + '</li>'
         + '<li>Potential negative effect of PGE’s if used before SLT</li>'
         + '<li>Initial therapy: more dramatic </li>'
         + '</ul>'
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
      documents: [],
      items: [{
        html: '<h1>Results  (Latina, Gulati, Dagianisis)</h1>',
        style: 'margin-bottom:20px',
      }, {
        html: '<img src="images/IOPFluctuations5.jpg" width="600" />'

      },

      ]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1>Responder Rates<br>SLT after PGE’s vs Aqueous Suppressants</h1>',
        style: 'margin-bottom:20px;text-align:center',
      }, {
        html: '<img src="images/ResponderRates.jpg" width="600" />'

      }, {
        html: '<h2>Correlation between baseline IOP and response (r-squared)<br><br>Overall = .244 &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; <strong>PG group- 0.197&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;        Aq Sup group= 0.32</strong></h2>',
        style: 'padding:20px;'

      }, {
        html: 'Latina, Gulati, Dagiansis, ARVO',
        style: 'font-style:italic'

      },

      ]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1>SLT with Prostaglandins - Inferences</h1>',
        style: 'margin-bottom:20px',
      }, {
        html: '<ul>'
         + '<li>SLT and prostaglandins may share a common pathway hence effect is masked'
         + '<ul>'
         + '<li>Uveoscleral outflow?</li>'
         + '<li>Prostaglandin mediated?</li>'
         + '</ul>'
         + '</li>'
         + '<li>SLT may be affected by prostaglandin cascade</li>'
         + '<li>How should SLT be used with PGE’s?</li>'
         + '</ul>'
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
      documents: [],
      items: [{
        html: '<h1>Similar Effects of SLT & PGE’s on <br>Permeability of Schlemm Canal Cells<br></h1><h2>Alvarado AJO -2010</h2>',
        style: 'margin-bottom:20px;text-align:center',
      }, {
        html: '<img src="images/SchlemmCanal.jpg" width="400" />'

      },

      ]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1>Effects of PGE’s on Schlemm Canal cells</h1>',
        style: 'margin-bottom:20px;text-align:center',
      }, {
        html: '<img src="images/SchlemmCanal2.jpg" width="400" />'

      },

      ]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1>Adding MEDS to SLT<br><strong>Complimentary Mechanisms</strong></h1>',
        style: 'margin-bottom:20px;text-align:center',
      }, {
        html: '<strong>SLT is an OUTFLOW TREATMENT</strong><br>'
         + '<b>1st Choice - Add inflow medications to SLT</b>'
         + '<ul>'
         + '<li>B-Blockers</li>'
         + '</ul>'
         + '<b>2 nd Choice</b>'
         + '<ul>'
         + '<li>CAI’s</li>'
         + '<li>Cosopt/Combigan</li>'
         + '<li>Alphagan – inflow + uveoscleral</li>'
         + '</ul>'
         + '<b>3rd Choice</b>'
         + '<ul>'
         + '<li>PGE’s, Pilocarpine</li>'
         + '</ul>'
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
      documents: [],
      items: [{
        html: '<h1><strong>REASON #10<br>Retreatment with SLT</strong><br></h1><h2>Nagar 2007</h2>',
        style: 'margin-bottom:20px;text-align:center',
      }, {
        html: '<h2>The retreatment group includes data from 61 eyes (89 eyes)</h2>'
         + '<ul>'
         + '<li><strong>Enhancement</strong> – 36 eyes,  Mean Follow up: 18.3 months</li>'
         + '<li>IOP &darr;&darr; from 26.4 to 19.7 mmHg  or  <strong>26.4 % decrease in IOP.</strong></li>'
         + '</ul>'
         + '<ul>'
         + '<li><strong>Repeat</strong> – 25 eyes,  Mean Follow up: 20.1 months</li>'
         + '<li>IOP &darr;&darr; from 25.2 to 20.1mmHg or  <strong>23.7 % decrease in IOP.</strong></li>'
         + '</ul>'
      }, {
        html: 'The results were significant with a p-value < 0.001.',
        style: 'font-style:italic'

      },

      ]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1><strong>IOP Drop with Enhancement & Repeat SLT</strong></h1>',
        style: 'margin-bottom:20px',
      }, {
        html: '<img src="images/IOPFluctuations6.jpg" width="700" />'

      },

      ]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1>Patient Selection</h1><br><h2><strong>Almost all patients with abnormally elevated IOP, which may benefit from IOP reduction, are suitable candidates for SLT</strong></h2>',
        style: 'margin-bottom:20px;text-align:center',
      }, {
        html: '<ul>'
         + '<li>Require lowering of IOP as either primary or secondary therapy</li>'
         + '<li>Unlikely to comply and/or persist with drug therapy</li>'
         + '<li>Have difficulty administering eye drops</li>'
         + '<li>Suffer from drug therapy induced side effects</li>'
         + '<li>Complain of reduced in QOL due to the need to administer eye drops daily</li>'
         + '<li>Failed drug therapy</li>'
         + '<li>Failed ALT treatment, or if ALT ceased to reduce the IOP sufficiently</li>'
         + '<li>Pigmentary or PXF glaucoma (caution with PDS)</li>'
         + '<li><strong>NTG</strong></li>'
         + '<li>OHT’s at higher risk group</li>'
         + '<li><b>CONTRAINDICATION: NVG, Blocked Angle</b></li>'
         + '</ul>'
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
      documents: [],
      items: [{
        html: '<h1>Patients to avoid doing SLT</h1>',
        style: 'margin-bottom:20px',
      }, {
        html: '<ul>'
         + '<li>Uveitis associated glaucoma – Active Uveitis</li>'
         + '<li>Trauma associated glaucoma</li>'
         + '<li>Neovascular Glaucoma </li>'
         + '<li>Significant Multiple PAS</li>'
         + '</ul>'
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
      documents: [],
      items: [{
        html: '<h1>SLT Treatment Recommendations in Pigmentary</h1>',
        style: 'margin-bottom:20px',
      }, {
        html: '<img src="images/slttreatment.jpg" width="600" />'

      }, {
        html: '<ul>'
         + '<li><h2>Treat no more than 50 spots – 180 degrees</h2></li>'
         + '<li><h2>Start with low pulse energies –</h2>'
         + '<ul>'
         + '<li><h2>0.4 mJ – 0.5 mJ  </h2></li>'
         + '</ul>'
         + '</li>'
         + '<li><h2>Observe minimal to no cavitation bubble formation</h2></li>'
         + '<li><h2>Check for post-op IOP spikes at 1 hour and within several days post treatment</h2></li>'
         + '</ul>'

      },

      ]
    }, {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      },
      cls: 'lightGrey',
      documents: [],
      items: [{
        html: '<h1>When to Choose SLT</h1>',
        style: 'margin-bottom:20px',
      }, {
        html: '<ul>'
         + '<li>An option in almost any point in glaucoma Tx</li>'
         + '<li><strong>Evolving as 1st Line Therapy – use early</li>'
         + '<li>The MOST cost effective Therapy </li>'
         + '<li>Important adjunct to patients on meds '
         + '<ul>'
         + '<li>replace meds</strong></li>'
         + '</ul>'
         + '</li>'
         + '<li>Useful following prior ALT</li>'
         + '</ul>'
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
      documents: [],
      items: [{
        html: '<h2>Summary on utilizing SLT for managing open angle glaucoma:</h2>'
         + '<ul>'
         + '<li><b>SIMPLIFY  GLAUCOMA MANAGEMENT</b></li>'
         + '<li><b>TREAT EARLY</b></li>'
         + '</ul>'
      }

      ]
    },

			//slide 15 bar
			{
			  xtype: 'container',
			  layout: {
			    type: 'vbox',
			    pack: 'center',
			    align: 'center'
			  },
			  cls: 'lightGrey',
			  items: [{
			    html: '<h1>SLT as Primary TX - 45 eyes &mdash; 1 yr F/U</h1><p style="font-style:italic">Melamed et al.</p>'
			  }, {
			    html: '<h2>Absolute IOP Reduction'
			  }, {
			    html: '<div class="absoluteReduction"></div>'
			  }
			  ],
			  listeners: {
			    activate: function () {
			      if (document.getElementsByClassName("absoluteReduction")[0].getElementsByTagName("svg").length === 0) {
			        console.log("I'm here");

			        var margin = {
			          top: 20,
			          right: 20,
			          bottom: 30,
			          left: 40
			        },
							width = 960 - margin.left - margin.right,
							height = 400 - margin.top - margin.bottom;

			        var x = d3.scale.ordinal()
								.rangeRoundBands([0, width], .1);

			        var y = d3.scale.linear()
								.range([height, 0]);

			        var xAxis = d3.svg.axis()
								.scale(x)
								.orient("bottom");

			        var yAxis = d3.svg.axis()
								.scale(y)
								.orient("left")
								.tickFormat(d3.format(".2s"));

			        var svg = d3.select(".absoluteReduction").append("svg")
								.attr("width", width + margin.left + margin.right)
								.attr("height", height + margin.top + margin.bottom)
								.append("g")
								.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			        d3.csv("data/absoluteReduction.csv", function (error, data) {

			          data.forEach(function (d) {
			            d.frequency = +d.frequency;
			          });

			          x.domain(data.map(function (d) {
			            return d.letter;
			          }));
			          y.domain([0, d3.max(data, function (d) {
			            return d.frequency;
			          })]);

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
								.text("Frequency");

			          svg.selectAll(".bar")
								.data(data)
								.enter().append("rect")
								.attr("class", "bar")
								.attr("x", function (d) {
								  return x(d.letter);
								})
								.attr("width", x.rangeBand())
								.style("fill", "#008081")
								.attr("y", "350")
								.attr("height", 1)
								.transition()
								.duration(700)
								.attr("y", function (d) {
								  return y(d.frequency);
								})
								.attr("height", function (d) {
								  return height - y(d.frequency);
								});

			        });
			      }
			    }
			  }
			},
			//slide 20 bar
			{
			  xtype: 'container',
			  layout: {
			    type: 'vbox',
			    pack: 'center',
			    align: 'center'
			  },
			  cls: 'lightGrey',
			  items: [{
			    html: '<h1>SLT as initial Therapy for OAG</h1><p>Prospective, multi-center trial to investigate safety & efficacy of SLT (180&deg;) as 1&deg; therapy (100 eyes, 61 patients)</p>'
			  }, {
			    html: '<div class="percentResponder"></div>'
			  }, {
			    html: '<p>FIGURE 1. Responder rates for SLT and control groups. (20% vs 30% IOP reduction) 74 primary, 26 control <span style="font-style:italic; display:block">I. McIlraith (J. of Glaucoma 4/2006)</span></p>'
			  }
			  ],
			  listeners: {
			    activate: function () {
			      if (document.getElementsByClassName("percentResponder")[0].getElementsByTagName("svg").length === 0) {
			        var margin = {
			          top: 20,
			          right: 20,
			          bottom: 30,
			          left: 50
			        },
							width = 780 - margin.left - margin.right,
							height = 400 - margin.top - margin.bottom;
			        var x0 = d3.scale.ordinal()
								.rangeRoundBands([0, width], .1);
			        var x1 = d3.scale.ordinal();
			        var y = d3.scale.linear()
								.range([height, 0]);
			        var color = d3.scale.ordinal()
								.range(["#0076a6", "#808080"]);
			        var xAxis = d3.svg.axis()
								.scale(x0)
								.orient("bottom");
			        var yAxis = d3.svg.axis()
								.scale(y)
								.orient("left")
								.tickFormat(d3.format(".0%"));
			        var svg = d3.selectAll(".percentResponder")
								.append("svg")
								.attr("width", width + margin.left + margin.right)
								.attr("height", height + margin.top + margin.bottom)
								.append("g")
								.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
			        d3.csv("data/percentResponder.csv", function (error, data) {
			          var regionNames = d3.keys(data[0])
									.filter(function (key) {
									  return key !== "Region";
									});
			          data.forEach(function (d) {
			            d.regions = regionNames.map(function (name) {
			              return {
			                name: name,
			                value: +d[name]
			              };
			            });
			          });
			          x0.domain(data.map(function (d) {
			            return d.Region;
			          }));
			          x1.domain(regionNames)
								.rangeRoundBands([0, x0.rangeBand()]);
			          y.domain([0, d3.max(data, function (d) {
			            return d3.max(d.regions, function (d) {
			              return d.value;
			            });
			          })]);
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
								.attr("dy", "1em")
								.style("text-anchor", "end")
								.text("Responder Rate (%)");
			          var region = svg.selectAll(".region")
									.data(data)
									.enter()
									.append("g")
									.attr("class", "g")
									.attr("transform", function (d) {
									  return "translate(" + x0(d.Region) + ",0)";
									});
			          region.selectAll("rect")
								.data(function (d) {
								  return d.regions;
								})
								.enter()
								.append("rect")
								.attr("width", x1.rangeBand())
								.attr("x", function (d) {
								  return x1(d.name);
								})
								.attr("y", "345")
								.attr("height", 1)
								.style("fill", function (d) {
								  return color(d.name);
								})
								.transition()
								.duration(700)
								.attr("height", function (d) {
								  return height - y(d.value);
								})
								.attr("y", function (d) {
								  return y(d.value);
								});
			          var legend = svg.selectAll(".legend")
									.data(regionNames.slice()
										.reverse())
									.enter()
									.append("g")
									.attr("class", "legend")
									.attr("transform", function (d, i) {
									  return "translate(0," + i * 20 + ")";
									});
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
								.text(function (d) {
								  return d;
								});
			        });
			      }
			    }
			  }
			},
			//slide 27 bar
			{
			  xtype: 'container',
			  layout: {
			    type: 'vbox',
			    pack: 'center',
			    align: 'center'
			  },
			  cls: 'lightGrey',
			  items: [{
			    html: '<h1>SLT &mdash; Primary Therapy IOP Fluctuation 180 vs 360</p>'
			  }, {
			    html: '<div class="iopFluctuation"></div><p>IOP fluctuation (SD) mm Hg</p>'
			  }, {
			    html: '<p>SLT 360 degree treatment resulted in statistically reduced IOP fluctuation compared to 180 degree treatment (<2.0 mm Hg SD)</p>'
			  }
			  ],
			  listeners: {
			    activate: function () {
			      if (document.getElementsByClassName("iopFluctuation")[0].getElementsByTagName("svg").length === 0) {
			        var margin = {
			          top: 20,
			          right: 20,
			          bottom: 30,
			          left: 50
			        },
							width = 960 - margin.left - margin.right,
							height = 400 - margin.top - margin.bottom;
			        var x0 = d3.scale.ordinal()
								.rangeRoundBands([0, width], .1);
			        var x1 = d3.scale.ordinal();
			        var y = d3.scale.linear()
								.range([height, 0]);
			        var color = d3.scale.ordinal()
								.range(["#808080", "#0076a6"]);
			        var xAxis = d3.svg.axis()
								.scale(x0)
								.orient("bottom");
			        var yAxis = d3.svg.axis()
								.scale(y)
								.orient("left")
								.tickFormat(d3.format(".0%"));
			        var svg = d3.selectAll(".iopFluctuation")
								.append("svg")
								.attr("width", width + margin.left + margin.right)
								.attr("height", height + margin.top + margin.bottom)
								.append("g")
								.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
			        d3.csv("data/iopFluctuation.csv", function (error, data) {
			          var regionNames = d3.keys(data[0])
									.filter(function (key) {
									  return key !== "Region";
									});
			          data.forEach(function (d) {
			            d.regions = regionNames.map(function (name) {
			              return {
			                name: name,
			                value: +d[name]
			              };
			            });
			          });
			          x0.domain(data.map(function (d) {
			            return d.Region;
			          }));
			          x1.domain(regionNames)
								.rangeRoundBands([0, x0.rangeBand()]);
			          y.domain([0, d3.max(data, function (d) {
			            return d3.max(d.regions, function (d) {
			              return d.value;
			            });
			          })]);
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
								.attr("dy", "1em")
								.style("text-anchor", "end")
								.text("% of eyes");
			          var region = svg.selectAll(".region")
									.data(data)
									.enter()
									.append("g")
									.attr("class", "g")
									.attr("transform", function (d) {
									  return "translate(" + x0(d.Region) + ",0)";
									});
			          region.selectAll("rect")
								.data(function (d) {
								  return d.regions;
								})
								.enter()
								.append("rect")
								.attr("width", x1.rangeBand())
								.attr("x", function (d) {
								  return x1(d.name);
								})
								.attr("y", "345")
								.attr("height", 1)
								.style("fill", function (d) {
								  return color(d.name);
								})
								.transition()
								.duration(700)
								.attr("height", function (d) {
								  return height - y(d.value);
								})
								.attr("y", function (d) {
								  return y(d.value);
								});
			          var legend = svg.selectAll(".legend")
									.data(regionNames.slice()
										.reverse())
									.enter()
									.append("g")
									.attr("class", "legend")
									.attr("transform", function (d, i) {
									  return "translate(0," + i * 20 + ")";
									});
			          legend.append("rect")
								.attr("x", (width / 2))
								.attr("width", 18)
								.attr("height", 18)
								.style("fill", color);
			          legend.append("text")
								.attr("x", (width / 2) - 12)
								.attr("y", 9)
								.attr("dy", ".35em")
								.style("text-anchor", "end")
								.text(function (d) {
								  return d;
								});
			        });
			      }
			    }
			  }
			},

    ]
  }

});