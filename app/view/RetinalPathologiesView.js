Ext.define("LumenisTraining.view.RetinalPathologiesView", {
  extend: "Ext.Carousel",
  xtype: "retinalpathologiesview",
  config: {
    title: "Retinal Pathologies",
    id: "retinalPathologiesView",
    styleHtmlContent: true,
    documents: [],
    items: [
    {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'
      },
      cls: 'lightGrey',
      items: [
        {
          html: '<h1 style="padding-top:20px">Content</h1>'
        },
        {
          xtype: 'container',
          layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'
          },
          style: 'height:525px',
          items: [
            {
              html: '<ul>' + '<li>Review of the Posterior Segment Anatomy</li>' + '<li>Retinal Photocoagulation</li>' + '<li>Retinal Pathologies treated by Photocoagulation' + '<ul>' + '<li>Diabetic Retinopathy</li>' + '<li>Age-related Macular Degeneration</li>' + '<li>Retinal Tears and Retinal Detachment</li>' + '<li>Retinal Vascular Disorders</li>' + '</ul></li></ul>'
            }
          ]
        }

      ]
    },


    {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'
      },
      cls: 'lightGrey',
      items: [{
        html: '<h1 style="padding-top:20px">The Posterior Segment</h1>',
        style: 'margin-bottom:20px',
      },
      {
        xtype: 'container',
        layout: {
          type: 'hbox',
          pack: 'center',
          align: 'center'
        },
        style: 'height:525px',
        items: [

        {
          html: '<ul>' + '<li>Back 2/3 of the eye</li>' + '<li>Includes: Vitreous Humor (gel), Retina, Choroid, Optic Disc & Optic Nerve</li>' + '<li>Retina Specialists are ophthalmologists that specialize in the Posterior Segment, particularly pathologies that afflict the retina itself</li>' + '</ul>',
          style: 'width:400px;'
        }, {
          html: '<img src="images/thePosteriorSegment.jpg" width="350" />'
        }]
      }]
    },

    {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'
      },
      cls: 'lightGrey',
      items: [{
        html: '<h1 style="padding-top:20px">Ocular Photocoagulation</h1>',
        style: 'margin-bottom:20px',
      },

      {
        xtype: 'container',
        layout: {
          type: 'hbox',
          pack: 'center',
          align: 'center'
        },
        style: 'height:525px',
        items: [

        {
          html: '<ul>' + '<li>Uses focused light to heat ocular tissue for a therapeutic result (burn via intense light) </li>' + '<li>Clear media of eye allows unique, non-invasive retinal treatment </li>' + '<li><strong>Goal is protein denaturation!</strong></li>' + '</ul>',
          style: 'width:400px;'
        }, {
          xtype: 'container',
          layout: {
            type: 'vbox',
            pack: 'center',
            align: 'top'
          },
          cls: 'lightGrey',
          items: [{
            html: '<img src="images/ocularPhotocoagulation1.jpg" height="100" /> <img src="images/ocularPhotocoagulation2.jpg" height="100" />',
            style: 'vertical-align:top;'

          }, {
            html: '<img src="images/ocularPhotocoagulation3.jpg"   />'

          }, ]
        }, ]
      }]
    },

    {
      xtype: 'container',
      layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'
      },
      cls: 'lightGrey',
      items: [
      {
        html: '<h1 style="padding-top:20px">Photocoagulation</h1>',
      },
      {
        xtype: 'container',
        layout: {
          type: 'hbox',
          pack: 'center',
          align: 'center'
        },
        style: 'height:525px',
        items: [
        {
          html: '<ul>' + '<li>Creates scar tissue to produce a weld for reattaching torn retina</li>' + '<li>Prompts hypoxic retina to reduce oxygen demand</li>' + '<li>Seals leaking vessels and causes vessel closure</li>' + '<li>Laser wavelengths absorbed by ocular chromophores (e.g. melanin, hemoglobin)</li>' + '</ul>',
          style: 'width:400px;'

        },
        {
          html: '<img src="images/Photocoagulation1.jpg" width="250" /><br><p>Creates scar tissue to produce a weld for reattaching torn retina</p><img src="images/Photocoagulation2.jpg" width="250" /><br><p>Prompts hypoxic retina to reduce oxygen demand</p>',
          style: 'width:250px;'
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
      documents: [],
      items: [{
        html: '<h1>Benefits of Photocoagulation</h1>',
        style: 'margin-bottom:20px',
      },

      {
        html: '<ul>' + '<li>Gold standard in managing diabetic retinopathy</li>' + '<li>Preserves healthy vision</li>' + '<li>Prevents blindness</li>' + '<li>Easy to operate/perform</li>' + '<li>Non-invasive</li>' + '<li>Reliable technology/procedure</li>' + '<li>Outpatient procedure/basis</li>' + '<li>Covered by most medical plans</li>' + '</ul>'
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
        html: '<h1>What is a Photocoagulator?</h1>',
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
          html: '<ul>' + '<li>Predominantly, a Laser-based medical device used in ophthalmology for retinal photocoagulation</li>' + '<li>Can come in many different shapes & sizes, depending on features, compatible accessories, specific applications, etc’</li>' + '</ul>',
          style: 'width:400px;'
        }, {
          html: '<img src="images/Photocoagulator.jpg" width="350" />'
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
        html: '<h1>Multi wavelength Photocoagulator</h1>',
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
          html: '<img src="images/Photocoagulator2.jpg" width="550" />'
        }

        ]
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
      documents: [],
      items: [{
        html: '<h1>Green (532 nm)</h1>',
        style: 'margin-bottom:20px',
      },

      {
        html: '<ul>' + '<li>Green laser light is a clinically-proven wavelength that is excellent at targeting the melanin-containing retinal pigment epithelium (RPE), through clear ocular media. It is well suited for a variety of retinal treatments in which melanin is the target chromophore, such as pan-retinal photocoagulation (PRP) </li>' + '</ul>'
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
        html: '<h1>Yellow (561/577 nm)</h1>',
        style: 'margin-bottom:20px',
      },

      {
        html: '<ul>' + '<li>One of the main advantages of yellow laser light stems from the fact that it approximates the peak absorption of hemoglobin, but it is not highly absorbed by melanin in the retinal pigment epithelium (RPE) or xanthophyll in the neurosensory retina. Therefore, it is recommended for <u>focally treating extrafoveal microaneurysms</u> or other vascular lesions in the macular region that may cause macular edema</li>' + '</ul>'
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
        html: '<h1>Yellow (561/577 nm)</h1>',
        style: 'margin-bottom:20px',
      },

      {
        html: '<ul>' + '<li>Easily penetrating through nuclear sclerotic cataracts. It also penetrates mild pigmentary disturbances and so is well suited for conditions where the target lies in a region of previous photocoagulation treatment</li>' + '<li>Yellow laser produces significantly <u>less light scatter</u>, allowing for more efficient treatment and requiring <u>lower energy levels</u> to achieve desirable clinical outcome; this creates <u>significantly less discomfort</u> for the patient during and following the laser procedure</li>' + '</ul>'
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
        html: '<h1>Red (569 nm)</h1>',
        style: 'margin-bottom:20px',
      },

      {
        html: '<ul>' + '<li>Red laser light offers excellent penetration through hemoglobin, making it the wavelength of choice in situations where it is necessary to <u>penetrate through preretinal, subretinal or intraretinal hemorrhage</u></li>' + '<li>It is also the optimal wavelength for achieving deeper <u>penetration into the choroid</u> to treat chocoidal melanomas or other deep pigmented lesions</li>' + '</ul>'
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
        html: '<h1>Red (569 nm)</h1>',
        style: 'margin-bottom:20px',
      },

      {
        html: '<ul>' + '<li>It is also the preferred wavelength for treating infant eyes with <u>ROP</u> because it penetrates through the tunica vasculosa lentis, the vascular network surrounding the lens. Absorption by those vessels is associated with higher risk for secondary cataract formation</li>' + '</ul>'
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
        html: '<h1>Diabetes</h1>',
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
          html: '<ul>' + '<li>A metabolic disorder characterized by hyperglycemia (high blood sugar levels)<br><br>Three main types* recognized:</li>' + '<li>Type I Diabetes,</li>' + '<li>Type 2 Diabetes, and </li>' + '<li>Gestational Diabetes</li>' + '</ul>' + '<p>*(similar signs, symptoms, and consequences, but different causes and population distributions)</p>',
          style: 'width:400px;'
        }, {
          html: '<img src="images/diabetes.jpg"  width="300"  />'
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
      documents: [],
      items: [{
        html: '<h1>Consequences of Diabetes</h1>',
        style: 'margin-bottom:20px',
      },

      {
        html: '<ul><p>Acute complications may occur if the disease is not adequately controlled. Serious long-term complications include: </p>' + '<li>Cardiovascular disease </li>' + '<li>Chronic renal failure </li>' + '<li><strong><u>Retinal damage</u></strong></li>' + '<li>Nerve damage (neuropathy)</li>' + '<li>Microvascular damage, which may cause erectile dysfunction (impotence) and poor healing </li></ul>',
        style: 'width:550px;'
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
        html: '<h1>Diabetic Retinopathy</h1>',
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
          html: '<ul>' + '<li>After 20 years of the disease, almost 100% of patients with type 1 and 60% of type 2 have some degree of retinopathy</li>' + '<li>Microaneurysms, exudates, macular edema; growth of abnormal blood vessels (neovacularization), hemorrhage</li>' + '<li>Neovascularization, vitreous hemorrhage, macular edema, ischemia and traction retinal detachment can eventually lead to vision loss and or blindness</li>' + '</ul>',
          style: 'width:400px;'
        }, {
          html: '<img src="images/diabetes2.jpg" width="300" />'
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
          html: '<h1>Diabetic Retinopathy</h1>',
          style: 'margin-bottom:20px',
        },

        {
          html: '<p><h2><strong>Two forms of retinopathy are commonly recognized in association with all forms of diabetes mellitus: </strong></h2><p>',
          style: 'width:350px;margin-right:20px;'

        }]
      }, {
        html: '<img src="images/diabetes3.jpg" width="200" /><br><p>1. Non-proliferative diabetic retinopathy (NPDR)  Mild, Moderate, severe</p><img src="images/diabetes4.jpg" width="200" /><br><p>2. Proliferative diabetic retinopathy (PDR)</p>',
        style: 'width:300px;text-align:center;'

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
        html: '<h1>Macular Edema</h1>',
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
          html: '<ul>' + '<li>Swelling in the macula (edema) results from fluid build up and thickening within the layers of retinal tissue. Tiny blood vessels which surround the macula are usually responsible for the leakage. </li>' + '<li>Many disorders including diabetes, vein occlusions, uveitis (inflammation), and cataract surgery can cause macular edema. </li>' + '</ul>',
          style: 'width:400px;'
        }, {
          html: '<img src="images/macularEdema.jpg" width="300" />'
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
      documents: [],
      items: [{
        html: '<h1>Diabetic Macular Edema Optical Coherence Tomography (OCT)</h1>',
        style: 'margin-bottom:20px',
      }, {
        html: '<img src="images/macularEdema2.jpg" width="600" />'

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
        html: '<h1>Treatment of Diabetic Retinopathy</h1>',
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
          html: '<ul>' + '<li>Laser Surgery (Gold Standard)</li>' + '<li>Corticosteroids and anti-VEGF injections</li>' + '<li>Combination therapy (laser + steroids or anti-VEGF injections)</li>' + '<li>Vitrectomy (Surgery)</li>' + '</ul>'
        }, {
          html: '<img src="images/Retinopathy.jpg" width="200" /><br><img src="images/Retinopathy2.jpg" width="200" /><br><img src="images/Retinopathy3.jpg" width="200" />'
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
          html: '<h1>Laser Treatment</h1>',
          style: 'margin-bottom:20px',
        },

        {
          html: '<ul>' + '<li>Pan-retinal photocoagulation (PRP) is used to treat severe macular edema and proliferative retinopathy</li>' + '<li>The goal is to create 1,000 – 2,000 burns in the retina with the hope of reducing the retina\'\s oxygen demand, and hence the possibility of ischemia</li>' + '<li>The burns are used to destroy the abnormal blood vessels that form at the back of the eye</li>' + '</ul>',
          style: 'width:400px;margin-right:20px;'

        }]
      }, {
        html: '<img src="images/laserTreatment.jpg" width="250" /><br><img src="images/laserTreatment2.jpg" width="250" />'


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
      items: [{},

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
          html: '<ul>' + '<li>Laser is focused on all parts of the retina except the macula</li>' + '<li>Treatment causes abnormal new vessels to shrink; often prevents them from growing again</li>' + '<li>Treatment decreases the chance that vitreous bleeding or retinal distortion will occur</li>' + '<li>Multiple laser treatments over time  are sometimes necessary.</li>' + '</ul>',
          style: 'width:400px;'
        }, {
          html: '<img src="images/laserTreatment3.jpg" width="250" />'
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
      documents: [],
      items: [

      {
        html: '<ul>' + '<li>Treatment for Clinically Significant Macular Edema (CSME) mainly for DME</li>' + '<li>Focal – if leaking ,mycroaneurysms are detected (FA, ICG)</li>' + '<li>Grid – if thickening is diffuse</li>' + '</ul>'

      }, {
        html: '<img src="images/laserTreatment4.jpg" width="600" />'

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
      items: [{
        html: '<h1>Intravitreal Anti VEGF Injection</h1>',
        style: 'margin-bottom:20px',
      },

      {
        html: '<ul>' + '<li>Lucentis (intravitreal anti-VEGF injection) has been approved by the FDA for treatment of diabetic macular edema (DME)</li>' + '<li>The drug is injected once a month into the vitreous</li>' + '<li>Recent study by DRCR net has shown the effectiveness of Lucentis in combination with laser treatment </li></ul>'
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
          html: '<h1>Photocoagulation</h1>'
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
          html: '<img src="images/Photocoagulation3.jpg" width="300" /><br><p>Photocoagulation delivered via slit lamp</p>',
          style: 'margin-right:20px; width:300px;text-align:center;'
        }, {
          html: '<img src="images/Photocoagulation4.jpg" width="300"  /><br><p>Photocoagulation delivered via Laser Indirect Ophthalmoscope (LIO)</p> ',
          style: 'width:300px;text-align:center;'
        }]



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
          html: "<h1>Vitrectomy</h1>"
        },
        {
          xtype: 'container',
          layout: {
            type: 'hbox',
            pack: 'center',
            align: 'center'
          },
          items: [
            {
              html: '<ul>' + '<li>Performed when the vitreous humor fills with blood</li>' + '<li>Performed in the operating room, this microsurgical procedure involves removing the blood-filled vitreous and replacing it with a clear solution</li>' + '<li>Can be combined with endo-photocoagulation procedure</li>' + '</ul>',
              flex: 1
            },
            {
              html: '<img src="images/Photocoagulation5.jpg" width="200" /><br><img src="images/Photocoagulation6.jpg" width="200" />',
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
      items: [{
        html: '<h1>Age-related Macular Degeneration  (AMD)</h1>',
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
          html: '<ul>' + '<li>Age-related macular degeneration (AMD) is the leading cause of vision loss for people over the age of 50 in the Western world, affecting approximately 25-30 million people. </li>' + '<li>AMD is a disorder that affects the macula causing decreased vision and possible loss of central vision with little effect on peripheral vision, therefore these patient will not be completely blind</li>' + '<li>Degeneration results from a partial breakdown of the retinal pigment epithelium (RPE)</li>' + '</ul>',
          style: 'width:400px;margin-right:20px;'
        }, {
          html: '<img src="images/macularDegeneration.jpg" width="300" />'
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
        html: '<h1>AMD – Risk Factors</h1>',
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
          html: '<ul>' + '<li>Age (older > younger)</li>' + '<li>Smoking</li>' + '<li>Family History</li>' + '<li>Sex (women > men)</li>' + '<li>Race (C > AA)</li>' + '<li>Obesity</li>' + '<li>Prolonged sun exposure</li>' + '<li>High Fat diet</li>' + '<li>Hypertension</li>' + '</ul>'
        }, {
          html: '<img src="images/amd.jpg" width="350" />'
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
        html: '<h1>AMD - Classification</h1>',
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
          html: '<ul><h2><u>Type</u></h2>' + '<li>Non proliferative = <strong>“Dry” AMD</strong></li>' + '<li>Proliferative = <strong>“Wet” AMD</strong></li>' + '</ul>' + '<ul><h2><u>Pattern of vessel leakage</u></h2>' + '<li>Classic – leakage site seen</li>' + '<li>Occult – leakage site obscure</li>' + '<li>Combination</li>' + '</ul>' + '<ul><h2><u>Location</u></h2>' + '<li>Subfoveal</li>' + '<li>Juxtafoveal</li>' + '<li>Extrafoveal</li>' + '</ul>'
        }, {
          html: '<img src="images/amd2.jpg" />'
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
      documents: [],
      items: [{
        html: '<h1>Dry AMD</h1>',
        style: 'margin-bottom:20px',
      },

      {
        html: '<ul>' + '<li>Dry AMD, the more common and milder form of AMD, accounts for <u>85% to 90% of all cases.</u> </li>' + '<li>It develops gradually over time and usually causes only mild loss of vision</li>' + '<li>One key identifier for AMD is the collection of small, round, white-yellow, fatty deposits called <strong>drusen</strong> in the central part of the retina, the macula</li>' + '<li><strong>Drusen</strong> accumulate in the Retina Pigment Epithelium (RPE) tissue beneath the macula and the macula thins and dries out</li>' + '<li>The amount of vision loss is related to the location and amount of macular thinning caused by the drusen</li>' + '<li>The dry form may eventually develop into the wet form, therefore patients should be examined regularly </li>' + '</ul>',
        style: 'width:550px;'
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
        html: '<h1>Dry AMD</h1>',
        style: 'margin-bottom:20px',
      },

      {
        html: '<ul><h2>Dry AMD has three stages, all of which may occur in one or both eyes:</h2>' + '<li><strong>Early AMD.</strong> At this stage, there are no symptoms and no vision loss; several small drusen or a few medium-sized drusen</li>' + '<li><strong>Intermediate AMD.</strong> There are either many medium-sized drusen or one or more large drusen. Sometimes a blurred spot (scotoma) appears in the center of vision. </li>' + '<li><strong>Advanced Dry AMD.</strong> In addition to drusen, there is a breakdown of the sensory retina from the RPE. This can cause a central scotoma which may enlarge over time</li>' + '<li>Dry AMD can advance to atrophic stage (geographical atrophy) or to wet AMD</li>' + '</ul>',
        style: 'width:550px;'
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
        html: '<h1>Dry AMD</h1>',
      }, {
        xtype: 'container',
        layout: {
          type: 'hbox',
          pack: 'center',
          align: 'top'
        },

        items: [

        {
          html: '<img src="images/amd3.jpg"  width="300"  height="300" /><br><p>Drusen</p>',
          style: 'margin-right:20px; '
        }, {
          html: '<img src="images/amd4.jpg" width="300" height="300" /><br><p>Geographic Atrophy</p> ',

        }]



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
        html: '<h1>Wet (Neovascular) AMD</h1>',
        style: 'margin-bottom:20px',
      },

      {
        html: '<ul>' + '<li>Although the wet form of AMD accounts for only 10 - 15% of all AMD, the risk of severe sight loss is much greater</li>' + '<li>Wet AMD is responsible for 90% of cases of severe vision loss associated with AMD</li>' + '<li>It is caused by the growth of abnormal blood vessels, or choroidal neovascularization (CNV), under the macula</li>' + '<li>These abnormal vessels leak fluid and blood into the tissue at the back of the eye, causing a “blister” to form in the retina</li>' + '<li>The resulting scar tissue leads first to distortion and eventually to loss of central vision</li>' + '</ul>',
        style: 'width:550px;'
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
        html: '<h1>Wet AMD</h1>',
        style: 'margin-bottom:20px',
      },

      {
        html: '<ul>' + '<li>Wet AMD can rapidly damage the macula and result in a very quick loss of central vision</li>' + '<li>An early symptom of wet AMD is that straight lines appear wavy</li>' + '</ul>'

      }, {
        html: '<img src="images/wetamd.jpg" width="600" />'

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
        html: '<h1>Diagnosis</h1>',
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
          html: '<ul>' + '<li>AMD is detected during a comprehensive eye exam that includes:</li>' + '<li><strong>Visual acuity test</strong></li>' + '<li><strong>Dilated eye exam</strong></li>' + '<li>Additional exams:' + '<ul>' + '<li>Amsler grid</li>' + '<li>Fluorescein Angiography</li>' + '<li>ICG (Indocyanine Green) Angiography</li>' + '<li>OCT (Optical Coherence Tomography)</li>' + '</ul>' + '</li>' + '</ul>'
        }, {
          html: '<img src="images/Diagnosis.jpg" width="150" /><br>Amsler grid<br><img src="images/Diagnosis2.jpg" width="150" /><br>Fluorescein Angiography<br><img src="images/Diagnosis3.jpg" width="150" /><br>OCT (Optical Coherence Tomography)'
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
      documents: [],
      items: [{
        html: '<h1>Treatment of AMD</h1>',
        style: 'margin-bottom:20px',
      },

      {
        html: '<ul>' + '<li><strong>Dry AMD</strong>' + '<ul>' + '<li>Prophylactic laser treatment of drusen does not apparently affect the rate of vision loss over a five-year interval according to findings from the Complications of Age-Related Macular Degeneration Prevention Trial (CAPT). </li>' + '<li>Laser to Drusen trial confirmed that prophylactic laser of the fellow eye of patients with neovascular AMD is not beneficial. </li>' + '<li>As a result of these findings, vitamin supplementation remains essentially the only prevention therapy for either atrophic or neovascular AMD. </li>' + '</ul>' + '</li>' + '</ul>'
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
        html: '<h1>Treatment of AMD</h1>',
        style: 'margin-bottom:20px',
      },

      {
        html: '<ul>' + '<li><strong>Wet AMD</strong>' + '<ul>' + '<li>Photocoagulation</li>' + '<li>PDT</li>' + '<li>Intravitreal injections of anti VEFG</li>' + '<li>Combination TX ?</li>' + '</ul>' + '</li>' + '</ul>'
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
        html: '<h1>AMD - Photocoagulation</h1>',
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
          html: '<ul>' + '<li>Argon laser therapy has been traditionally used to coagulate new vessels in wet AMD.</li>' + '<li>Laser photocoagulation is only effective in cases of <strong>classic CNV</strong> and for <strong>juxtafoveal</strong> or <strong>extra-foveal CNV</strong>, as described by the Macular Photocoagulation Study</li>' + '</ul>',
          style: 'width:400px;'
        }, {
          html: '<img src="images/Photocoagulation7.jpg" width="300" />'
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
        html: '<h1>PDT for AMD</h1>',
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
          html: '<ul>' + '<li>Photo Dynamic Therapy (PDT) - an outpatient procedure involving the use of a <strong>Verteporfin</strong>, a light-activated drug - may be used to treat some patients with the wet form of AMD with fewer visual side effects than other treatments</li>' + '<li>PDT was indicated for classic sub-foveal or juxta-foveal neovascular AMD</li>' + '<li>The advent of the anti-VEGF treatment has significantly reduced the use of PDT </li>' + '<li>Currently PDT is used in some trials in combination with anti VEGF injections</li>' + '</ul>',
          style: 'width:400px;'
        }, {
          html: '<img src="images/PDT.jpg" width="150" /><br><img src="images/PDT1.jpg" width="150" /><br><img src="images/PDT3.jpg" width="150" />'
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
        html: '<h1>AMD – Anti VEGF treatment</h1>',
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
          html: '<ul>' + '<li>Anti vascular endothelial growth factor (anti-VEGF) medications are a group of drugs used in the treatment of wet type AMD</li>' + '<li>Macugen (2004); Lucentis (2006) and Avastin (off-label use)as intravitreal injections</li>' + '<li>The anti-VEGF drugs stop the growth of new blood vessels, thereby reducing the risk of scarring and further sight loss</li>' + '</ul>',
          style: 'width:400px;'
        }, {
          html: '<img src="images/amd5.jpg" />'
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
          html: '<h1>Photocoagulation of Retinal Tears</h1>',
          style: 'margin-bottom:20px',
        },

        {
          html: '<ul>' + '<li>Office based procedure </li>' + '<li>Use of LIO if tear is in periphery</li>' + '<li>In some cases due to the extent, position and concurrent retinal detachment, Vitrectomy is performed with laser applied to the site at the end of surgery</li>' + '</ul>',
          style: 'width:400px;'

        }]
      }, {
        html: '<img src="images/Photocoagulation8.jpg" width="230" /><br><img src="images/Photocoagulation9.jpg" width="230" />'


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
        html: '<h1>Post Retinal Detachment Surgery</h1>',
        style: 'margin-bottom:20px',
      },

      {
        html: '<ul>' + '<li>Retinal detachment surgery usually also involves the use of <strong>cyrotherapy</strong> (applied from outside the eye through the sclera) or <strong>laser photocoagulation</strong> (applied directly to the retina). </li>' + '<li>Photocoagulation or cryotherapy form a permanent adhesion (between the sensory retina and underlying tissues) around the retinal break and prevent further accumulation of fluid and re-detachment</li>' + '</ul>',
        style: 'width:500px;'
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
        html: '<h1>Scleral Buckle</h1>',
        style: 'margin-bottom:20px',
      },

      {
        html: '<h2>Scleral buckles are sometimes needed to complete the treatment </h2>',

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
          html: '<img src="images/scleralBuckle2.jpg" />',
          style: 'margin-right:20px; width:600px;'
        }, ]



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
        html: '<h1>Central Retinal Vein Occlusion (CRVO)</h1>',
        style: 'margin-bottom:20px',
      },

      {
        html: '<ul>' + '<li>Central retinal vein occlusion (CRVO) is a common retinal vascular disorder</li>' + '<li>Clinically, CRVO presents with variable visual loss; the fundus may show retinal hemorrhages, dilated tortuous retinal veins, cotton-wool spots (indicating ischemia), macular edema, and optic disc edema</li>' + '</ul>',


      }, {
        html: '<img src="images/retinalvein.jpg" width="450" />'

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
      items: [{
        html: '<h1>Central Retinal Vein Occlusion (CRVO)</h1>',
        style: 'margin-bottom:20px',
      },

      {
        html: '<ul>' + '<li>Vascular, hematologic, and cardiac disease may predispose individuals to develop CRVO which leads to leakage of blood and fluid into the retina</li>' + '<li>The Central Retinal Vein Occlusion study (CVOS) has shown <strong>NO</strong> benefit of PRP in the prevention of iris neovascularization and <strong>NO</strong> benefit of grid laser treatment for macular edema</li>' + '<li>Recent studies have shown a beneficial effect of intra-vitreal injections of anti-VEGF drugs (Lucentis) in the treatment of macular edema. Lucentis has been approved by the FDA for this indication.</li>' + '</ul>'
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
        html: '<h1>Branch Retinal Vein Occlusion (BRVO)</h1>',
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
          html: '<ul>' + '<li>BRVO is a retinal vascular disease most often with no known cause but in some cases related to systemic hypertension, inflammatory or thrombophilic disorders</li>' + '<li>Occlusion of a branch retinal vein occurs by a compressing, sclerotic retinal artery</li>' + '<li>BRVOs have a relatively benign course</li>' + '<li>Certain complications that lead to visual loss may occur including macular edema and the sequelae from retinal neovascularization </li>' + '<li>Grid laser photocoagulation is indicated if macular edema does not resolve within 3 months and leakage is shown on FA (perfused BRVO)</li>' + '<li>PRP is indicated only if neovascularization develops.</li>' + '</ul>',
          style: 'width:400px;'
        }, {
          html: '<img src="images/retinalvein2.jpg" width="300" />'
        }]
      }]
    },


    ]
  }

});