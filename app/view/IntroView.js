Ext.define("LumenisTraining.view.IntroView", {
  extend : "Ext.Carousel",
  xtype : "introview",
  config : {
    title : "Intro to Training",
    id : "introView",
    styleHtmlContent : true,
    documents : [],
    items : [
      //three sixty new
      /*
    {
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
      painted: function () {
      threeSixty = {
      init: function () {
      this._vr = new AC.VR("viewer", 'images/Eyeball_720_rotate_#####.jpg', 200, {
      invert: true
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
      items: [
    {
      html: '<article id="main" class="content"><section id="showcase"><div id="html5-showcase" class="showcase"><div id="threesixty" class="container"><section id="threesixty-main"><div id="viewer"></div></section></div></div></section></article>',
      width:876,
      height:550
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
          cls: 'eyeBall',
          padding: 0,
          style: 'background:white',
          listeners: {
            painted: function () {
            threeSixty = {
                init: function() {
                  this._vr = new AC.VR('viewer', 'images/Eyeball_720_rotate_#####.jpg', 200, {
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
              }
              threeSixty.init();            
            }
          },
          items: [
            {
              html: '  <article id="main" class="content isipad"><section id="showcase"><div id="html5-showcase" class="showcase"><div id="threesixty" class="container"><section id="threesixty-main"><div id="viewer"></div></section></div></div></section></article>',
              width:876,
              height:550
            }
          ]
      },
       */
      {
        xtype : 'container',
        layout : {
          type : 'vbox',
          pack : 'center',
          align : 'center'
        },
        style : 'background:white',
        items : [{
            html : '<img src="images/thenAndNow.jpg" class="noDropShadow noBorderRadius" width="800"/>'
          }, {
            html : "<h1><strong>First then, first now</strong></h1>"
          }, {
            html : '<h2>40 Years Of Ophthalmic Laser Innovation!</h2>'
          }, {
            html : '<p>Cataract | Retina | Glaucoma</p>'
          }
        ]
      },
      //two up with header. remove header if desired
      {
        xtype : 'container',
        layout : {
          type : 'vbox',
          pack : 'center',
          align : 'center'
        },
        cls : 'lightGrey',
        items : [
          //header
          {
            html : "<h1>Preserving & Improving Vision</h1>"
          }, {
            xtype : 'container',
            layout : {
              type : 'hbox',
              pack : 'center',
              align : 'center'
            },
            items : [
              //flexible left/right columns
              {
                xtype : 'container',
                html : '<img src="images/eyeTest.jpg" width="300"/>',
                flex : 1
              }, {
                xtype : 'container',
                html : '<p>World leader in ophthalmic laser technologies</p>'
                    + '<p><strong>Largest global installed-base</strong></p>'
                    + '<p>Diabetic Retinopathy, Glaucoma,  Secondary Cataracts and Age-related Macular Degeneration (AMD)</p>'
                    + '<p><strong>Largest R&D investment</strong></p>'
                    + '<p>Committed to ophthalmology and to meeting your needs</p>',
                flex : 1
              }
            ]
          }
        ]
      },
      //six up. remove header if necessary
      {
        xtype : 'container',
        layout : {
          type : 'vbox',
          pack : 'center',
          align : 'center'
        },
        padding : 0,
        cls : "sixUp lightGrey",
        items : [
          //header
          {
            html : '<h1>Therapeutic Ophthalmic Laser Market</h1>',
          }, {
            xtype : 'container',
            layout : {
              type : 'hbox',
              pack : 'center',
              align : 'start'
            },
            width : '100%',
            //top row
            items : [{
                html : '<img src="images/photocoagulatorsSmall.jpg" width="250"/><h2>Photocoagulators</h2>',
                flex : 1
              }, {
                html : '<img src="images/photodisruptorsSmall.jpg" width="250"/><h2>Photodisruptors</h2>',
                flex : 1
              }, {
                html : '<img src="images/photoregeneratorsSmall.jpg" width="250"/><h2>Photoregenerators</h2>',
                flex : 1
              }
            ]
          }, {
            xtype : 'container',
            layout : {
              type : 'hbox',
              pack : 'center',
              align : 'start'
            },
            width : '100%',
            //bottom row
            items : [{
                html : '<img src="images/refractiveSmall.jpg" width="250"/><h2>Refractive</h2>',
                flex : 1
              }, {
                html : '<img src="images/femtoCataractSmall.jpg" width="250"/><h2>Femto-Cataract</h2>',
                flex : 1
              }, {
                html : '<img src="images/photoactivatorsSmall.jpg" width="250"/><h2>Photoactivators</h2>',
                flex : 1
              }
            ]
          }
        ]
      },
      //modified two-up
      {
        xtype : 'container',
        layout : {
          type : 'vbox',
          pack : 'center',
          align : 'center'
        },
        cls : "lightGrey",
        items : [{
            html : '<h1>Photocoagulators</h1>'
          },{
        xtype : 'container',
        layout : {
          type : 'hbox',
          pack : 'center',
          align : 'center'
        },
        cls : "lightGrey",
        items : [{
            html : '<img src="images/photocoagulatorsLarge.jpg" /><div style="margin-top:15px"><img src="images/docwithcoagulatorSmall.jpg" style="margin:0 27px 0 0"/><img src="images/coagulatorEyesSmall.jpg" />',
            style : "width:507px"
          }, {
            html : '<h2><strong>What Do Photocoagulators Do?</strong></h2><p>Generate Continuous Wave (CW) laser beams high enough to induce protein denaturation in target tissue (analogy: &ldquo;cook the tissue&rdquo;)</p><h2><strong>How Do They Do It?</strong><p>The heat from the laser beam is absorbed in the target chromophore (pigmented target) and then dissipates to surrounding environment. The higher the energy, the more extensive the heat dissipation (&ldquo;collateral damage&rdquo;)</p><h2><strong>What Do We Use Them For?</strong></h2><p>Tissue welding, tissue destruction, blood vessel coagulation (e.g. seal leaking blood vessels), etc.</p>',
            style : "width:390px; padding-left:27px"
          }
        ]
      },]
      }, {
        xtype : 'container',
        layout : {
          type : 'vbox',
          pack : 'center',
          align : 'center'
        },
        cls : "lightGrey",
        items : [{
            html : '<h1>Photocoagulators</h1>'
          }, {
            xtype : 'container',
            layout : {
              type : 'hbox',
              pack : 'center',
              align : 'center'
            },
            items : [{
                html : '<img src="images/photocoagulator-260.jpg" width="250"/><br/><img src="images/photocoagulatorEyes-260.jpg" width="250"/><br/><img src="images/docwithcoagulator-260.jpg" width="250"/>',
                flex : 1
              }, {
                html : '<h2 class="mediumText"><strong>Main Clinical Indications:</strong></h2><p class="mediumText">Diabetic Macular Edema, Proliferative Diabetic Retinopathy, ALT (Argon Laser Trabeculoplasty), Neovascularization</p><h2 class="mediumText"><strong>Common Laser Media:</strong></h2><p class="mediumText">DPSS, OPSL, Diode. (In the past Argon)</p><h2 class="mediumText"><strong>Lumenis Products In This Category:</strong></h2><p class="mediumText">Novus Varia, Novus Spectra, Vision One</p>',
                flex : 2
              }
            ]
          },
        ]
      }, {
        xtype : 'container',
        layout : {
          type : 'vbox',
          pack : 'center',
          align : 'center'
        },
        cls : "lightGrey",
        items : [{
            html : '<h1>Photocoagulators</h1>'
          }, {
            xtype : 'container',
            layout : {
              type : 'hbox',
              pack : 'center',
              align : 'center'
            },
            items : [{
                html : '<h2 class="mediumText"><strong>Facts:</strong></h2><p class="mediumText">Lumenis (formerly Coherent) developed and commercialized <strong>the first photocoagulator in 1970.</strong></p><p class="mediumText">The Greek scholar Plato realized more than 2,000 years ago that focused sun beams (e.g. using mirrors) can cause thermal impact to the eye.</p><p class="mediumText">Two major clinical studies in the 1970&rsquo;s-80&rsquo;s established <strong>Photocoagulators as the &ldquo;gold standard&rdquo; for retinal photocoagulation:</strong> DRS and ETDRS</p>',
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
            html : "<h1 style='text-align:center'>Photodisruptors</h1>"
          }, {
            xtype : 'container',
            layout : {
              type : 'hbox',
              pack : 'center',
              align : 'center'
            },
            items : [{
                html : '<img src="images/pd.jpg" width="400"/><div style="padding:0; margin:10px 0 0 0"><img src="images/pd-detail1.jpg" width="190" style="margin-right:20px"/><img src="images/pd-detail2.jpg" width="190"/>',
                flex : 1
              }, {
                html : '<h2><strong>What Do Photodisruptors Do?</strong></h2><p>Create a tissue split by mechanical force, which leads to tissue disruption (breakdown), without thermal damage to surrounding tissue. Used commonly to puncture holes in the target tissue.</p><h2><strong>How Do They Do It?</strong></h2><p>It generates localized plasma breakdown within the tissue, which generates a mechanical force that causes tissue physical tissue disruption.</p><h2><strong>What Do We Use Them For?</strong></h2><p>Predominantly, to make holes within a tissue. For example, making a hole in the Iris in order to relieve pressure caused by blockage. Or to cut an opening in the back (posterior) part of the lens capsule.</p>',
                flex : 1
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
            html : "<h1 style='text-align:center'>Photodisruptors</h1>"
          }, {
            xtype : 'container',
            layout : {
              type : 'hbox',
              pack : 'center',
              align : 'center'
            },
            items : [{
                html : '<img src="images/pd.jpg" width="400"/><div style="padding:0; margin:10px 0 0 0"><img src="images/pd-detail1.jpg" width="190" style="margin-right:20px"/><img src="images/pd-detail2.jpg" width="190"/>',
                flex : 1
              }, {
                html : '<h2><strong>Main Clinical Indications:</strong></h2><p>Peripheral Laser Iridotomy, Posterior Capsulotomy</p><h2><strong>Lumenis Products:</strong></h2><p>Aura PT, Selecta Duet (combination of Photodisruptor + SLT), Selecta Trio (combination of Photodisruptor + SLT + Photocoagulator)</p><h2><strong>Trivia:</strong></h2><p>Lumenis (formerly Coherent) was the first FDA approved marketer of Photodisruptors in the US.</p>',
                flex : 1
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
            html : "<h1 style='text-align:center'>Photoregenerators</h1>"
          }, {
            xtype : 'container',
            layout : {
              type : 'hbox',
              pack : 'center',
              align : 'center'
            },
            items : [{
                html : '<img src="images/pr.jpg" width="400"/><div style="padding:0; margin:10px 0 0 0"><img src="images/pr-detail1.jpg" width="190" style="margin-right:20px"/><img src="images/pr-detail2.jpg" width="190"/>',
                flex : 1
              }, {
                html : '<h2><strong>What Do Photoregenerators Do?</strong></h2><p>Induce a biological reaction from the tissue, while causing minimal or no thermal damage to the surrounding tissue.</p><h2><strong>How Do They Do It?</strong></h2><p>They selectively target Chromophores (e.g. Melanin) within the tissue, limiting heat absorption only to the target Chromophores. The biological response from the tissue (e.g. immune response) causes a chain reaction that leads to overall improvement in function</p><h2><strong>What Do We Use Them For?</strong></h2><p>To treat unhealthy or non-functioning biological tissues (e.g. Retina, Trabecular Meshwork) as alternative to medications or other invasive surgeries</p>',
                flex : 1
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
            html : "<h1 style='text-align:center'>Photoregenerators</h1>"
          }, {
            xtype : 'container',
            layout : {
              type : 'hbox',
              pack : 'center',
              align : 'center'
            },
            items : [{
                html : '<img src="images/pr.jpg" width="400"/><div style="padding:0; margin:10px 0 0 0"><img src="images/pr-detail1.jpg" width="190" style="margin-right:20px"/><img src="images/pr-detail2.jpg" width="190"/>',
                flex : 1
              }, {
                html : '<h2><strong>Main Clinical Indications:</strong></h2><p>SLT (Selective Laser Trabeculoplasty), SRT (Selective Retina Therapy)</p><h2><strong>Lumenis Products In This Category:</strong></h2><p>Selecta II, Selecta Duet (combination of Photodisruptor + SLT), Selecta Trio (combination of Photodisruptor + SLT + Photocoagulator)</p><h2><strong>Trivia:</strong></h2><p>Lumenis was the first company to develop and commercialize SLT, based on the scientific and clinical work of Dr. Mark Latina et.al.<br><br> Lumenis currently investigates selective Photo regeneration for retinal application (SRT)</p>',
                flex : 1
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
            html : "<h1 style='text-align:center'>Refractive</h1>"
          }, {
            xtype : 'container',
            layout : {
              type : 'hbox',
              pack : 'center',
              align : 'center'
            },
            items : [{
                html : '<img src="images/rf.jpg" width="300"/>',
                flex : 1
              }, {
                html : '<h2><strong>What Do Refractive Lasers Do?</strong></h2><p>Refractive lasers perform any eye surgery used to improve the refraction sate of the eye and decrease or eliminate dependency on glasses or contact lenses in order to see clearly (i.e. see the world in focus).</p><h2><strong>What Do We Use Them For?</strong></h2><p>To correct refractive errors such as myopia, hyperopia and astigmatism</p>',
                flex : 1
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
            html : "<h1 style='text-align:center'>Refractive</h1>"
          }, {
            xtype : 'container',
            layout : {
              type : 'hbox',
              pack : 'center',
              align : 'center'
            },
            items : [{
                html : '<img src="images/rf.jpg" width="300"/>',
                flex : 1
              }, {
                html : '<h2><strong>How Do They Do It?</strong></h2><p>By utilizing the laser properties to reshape the cornea and achieve accurate refraction.</p><p>In a procedure called LASIK, a Femtosecond laser is used to cut the cornea in the middle in order to create a flap; and an Excimer Laser is used to re-shape the curvature of the cornea, where applicable, in order to correct or compensate for refraction errors.</p>',
                flex : 1
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
            html : "<h1 style='text-align:center'>Femto-Cataract</h1>"
          }, {
            xtype : 'container',
            layout : {
              type : 'hbox',
              pack : 'center',
              align : 'center'
            },
            items : [{
                html : '<img src="images/fm.jpg" width="350"/>',
                flex : 1
              }, {
                html : '<h2><strong>What Do Femtosecond Cataract Lasers Do?</strong></h2><p>Used in cataract surgery in order to create an opening in the front portion of the lens capsule (AKA: &ldquo;Anterior Capsulorhexis&rdquo;) and break or partially dissolve the cataractous lens in order to facilitate its aspiration (extraction)</p><h2><strong>How Do They Do It?</strong></h2><p>Femtosecond Lasers cause ultra-fast tissue disruption in order to disrupt (break; separate) the target tissue</p>',
                flex : 1
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
            html : "<h1 style='text-align:center'>Femto-Cataract</h1>"
          }, {
            xtype : 'container',
            layout : {
              type : 'hbox',
              pack : 'center',
              align : 'center'
            },
            items : [{
                html : '<img src="images/fm.jpg" width="350"/>',
                flex : 1
              }, {
                html : '<h2><strong>What Do We Use Them For?</strong></h2><p>To create an opening in the front portion of the lens capsule (AKA: &ldquo;Anterior Capsulorhexis&rdquo;) and break or partially dissolve the cataractous lens in order to facilitate its aspiration (extraction)</p>',
                flex : 1
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
            html : '<h1>Photoactivators (*Discontinued*)</h1>',
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
                html : '<p><strong>What Do Photoactivators Do?</strong><br>Photoactivators are non-thermal lasers that utilize a particular wavelength and/or settings in order to activate a photosensitizer drug/medication that is introduced externally to the target tissue.</p>'
                 + '<p>Once activated, the medication causes the desired reaction within the tissue (e.g. tissue oxidation)</p>',
                style : 'width:400px;margin-right:20px;'

              }, {
                html : '<img src="images/Photoactivators.jpg" width="300" />'
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
            html : '<h1>Photoactivators (*Discontinued*)</h1>',
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
                html : '<p><strong>How Do They Do It? </strong><br>By relying on the special properties of the two complementary elements in this procedures: the photosensitizer drug and pre-set Laser that activates the drug.</p>'
                 + '<p><strong>What Do We Use Them For? </strong><br>Photodynamic Therapy (PDT)</p>'
                 + '<p><strong>Lumenis Products In This Category:</strong><br>Discontinued (OPAL photoactivator 2000-2008)</p>',
                style : 'width:400px;margin-right:20px;'

              }, {
                html : '<img src="images/Photoactivators.jpg" width="300" />'
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
        style : 'background:white',
        items : [{
            html : '<img src="images/thenAndNow.jpg" class="noDropShadow noBorderRadius" width="800"/>'
          }, {
            html : "<h1><strong>First then, first now</strong></h1>"
          }, {
            html : '<h2>40 Years Of Ophthalmic Laser Innovation!</h2>'
          }, {
            html : '<p>Cataract | Retina | Glaucoma</p>'
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
        style : 'background:white',
        items : [{
            html : "<h1>The World’s Largest Medical Laser Company  </h1>"
          }, {
            html : '<img src="images/medicallaser.jpg" class="noDropShadow noBorderRadius" width="800"/>'
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
        style : 'background:white',
        items : [{
            html : '<img src="images/medicallaser2.jpg" class="noDropShadow noBorderRadius" width="800"/>'
          },
        ]
      }, {
        xtype : 'container',
        layout : {
          type : 'vbox',
          pack : 'center',
          align : 'center'
        },
        style : 'background:white',
        items : [{
            html : '<img src="images/medicallaser3.jpg" class="noDropShadow noBorderRadius" width="800"/>'
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
        style : 'background:white',
        items : [{
            html : "<h1>Aging Population</h1>"
          }, {
            html : '<img src="images/medicallaser4.jpg" class="noDropShadow noBorderRadius" width="800"/>'
          },
        ]
      },
      //slide 22 pie
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
            html: "<h1>Non-Refractive Laser Market Segment Analysis</h1>"
          },
          {
            html: '<div class="laserMarket"></div>'
          },
          {
            html: '<h2>$354m Market Size</h2>'
          }
        ],
        listeners: {
          activate: function () {
            if ( document.getElementsByClassName("laserMarket")[0].getElementsByTagName("svg").length === 0 ) {
            var width = 960,
                height = 480,
                radius = Math.min(width, height) / 2;
            var color = d3.scale.ordinal()
                .range(["#aac739", "#ecb237", "#2caac0"]);
            var arc = d3.svg.arc()
                .outerRadius(radius - 10)
                .innerRadius(0);
            var pie = d3.layout.pie()
                .sort(null)
                .value(function (e) {
                return e.percent
            });
            var svg = d3.select(".laserMarket")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

            d3.csv("data/laserMarket.csv", function (e, t) {
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
                    .style("font-weight", "bold")
                    .style("font-size", "16")
                    .style("fill", "white")
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
        xtype : 'container',
        layout : {
          type : 'vbox',
          pack : 'center',
          align : 'center'
        },
        cls : 'lightGrey',
        documents : [],
        items : [{
            html : '<h1>Non-Refractive (N/R) Laser Market Segment Analysis</h1>',
            style : 'margin-bottom:20px',
          }, {
            html : '<img src="images/LaserMarket.jpg" width="600" />'

          }

        ]
      },
      */
      //slide 23 pie
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
            html: "<h1>Capital Equipment Segment</h1>"
          },
          {
            html: '<div class="capitalEquipment"></div>'
          },
          {
            html: '<h2>$234m Market Size Capital</h2>'
          }
        ],
        listeners: {
          activate: function () {
            if ( document.getElementsByClassName("capitalEquipment")[0].getElementsByTagName("svg").length === 0 ) {
            var width = 960,
                height = 500,
                radius = Math.min(width, height) / 2;
            var color = d3.scale.ordinal()
                .range(["#04056f", "#2b54ae", "#a2d0b4"]);
            var arc = d3.svg.arc()
                .outerRadius(radius - 10)
                .innerRadius(0);
            var pie = d3.layout.pie()
                .sort(null)
                .value(function (e) {
                return e.percent
            });
            var svg = d3.select(".capitalEquipment")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
            d3.csv("data/capitalEquipment.csv", function (e, t) {
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
                    .style("font-weight", "bold")
                    .style("font-size", "16")
                    .style("fill", "white")
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
        xtype : 'container',
        layout : {
          type : 'vbox',
          pack : 'center',
          align : 'center'
        },
        cls : 'lightGrey',
        documents : [],
        items : [{
            html : '<h1>Capital Equipment Segment</h1>',
            style : 'margin-bottom:20px',
          }, {
            html : '<img src="images/CapitalEquipment.jpg" width="600" />'

          },

        ]
      },
      */
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
          html: '<h1>Non-Refractive (N/R) Laser Market Segment Analysis</h1>',
            style : 'margin-bottom:20px',
          }, {
            html : '<img src="images/LaserMarket2.jpg" width="600" />'

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
            html : '<h1>Market Drivers<br>N/R Ophthalmic Laser Sales Are Driven By:</h1>',
            style : 'margin-bottom:20px',
          }, {
            html : '<img src="images/OphthalmicLaser.jpg" width="600" />'

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
            html : '<h1>Key Purchase Criteria*</h1>',
            style : 'margin-bottom:20px',
          }, {
            html : '<img src="images/KeyPurchase.jpg" width="600" />'

          }, {
            html : '* Developed Countries ',
            style : 'font-style:italic'

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
        style : 'background:white',
        items : [{
            html : '<img src="images/Glaucoma.jpg" class="noDropShadow noBorderRadius" width="800"/>'
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
            html : '<h1>Glaucoma</h1>',
            style : 'margin-bottom:20px',
          },
          {
            html : '<p>Worldwide Prevalence Of Glaucoma Is Increasing Due To The <strong style="font-size:30px;">Rapidly Aging Population</strong></h1></p>'
             + '<p>Estimates Put The Total Number Of Glaucoma Cases At Around <strong style="font-size:34px;">70 Million Worldwide</strong></h1></p>'
          }

        ]
      },
      //slide 29 bar
      {
        xtype: 'container',
        layout: {
          type: 'vbox',
          pack: 'center',
          align: 'center'
        },
        padding: 0,
        style: 'background:white',
        items: [
          {
            html: '<h1>Open Angle Glaucoma | 10 Year Increase</h1>'
          },
          {
            html: '<div class="openAngleGlaucoma"></div>'
          }
        ],
        listeners: {
          activate: function () {
            if ( document.getElementsByClassName("openAngleGlaucoma")[0].getElementsByTagName("svg").length === 0 ) {
            var margin = {
                top: 20,
                right: 20,
                bottom: 30,
                left: 50
            }, width = 960 - margin.left - margin.right,
                height = 512 - margin.top - margin.bottom;
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
                .tickFormat(d3.format(".2s"));
            var svg = d3.selectAll(".openAngleGlaucoma")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            d3.csv("data/openAngleGlaucoma.csv", function (error, data) {
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
                    .text("Glaucoma Cases");
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
                    .attr("y", "461")
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
                    .attr("x", (width / 2) -12)
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
      //slide 30 bar
      {
        xtype: 'container',
        layout: {
          type: 'vbox',
          pack: 'center',
          align: 'center'
        },
        padding: 0,
        style: 'background:white',
        items: [
          {
            html: '<h1>Angle Closure Glaucoma | 10 Year Increase</h1>'
          },
          {
            html: '<div class="angleClosureGlaucoma"></div>'
          }
        ],
        listeners: {
          activate: function () {
            if ( document.getElementsByClassName("angleClosureGlaucoma")[0].getElementsByTagName("svg").length === 0 ) {
            var margin = {
                top: 20,
                right: 20,
                bottom: 30,
                left: 50
            }, width = 960 - margin.left - margin.right,
                height = 512 - margin.top - margin.bottom;
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
                .tickFormat(d3.format(".2s"));
            var svg = d3.selectAll(".angleClosureGlaucoma")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            d3.csv("data/angleClosureGlaucoma.csv", function (error, data) {
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
                    .text("Glaucoma Cases");
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
                    .attr("y", "461")
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
                    .attr("x", (width / 2) -12)
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
      /*
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
            html : '<h1>Glaucoma</h1>',
            style : 'margin-bottom:20px',
          }, {
            html : '<img src="images/Glaucoma2.jpg" width="700" />'

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
            html : '<h1>Glaucoma</h1>',
            style : 'margin-bottom:20px',
          }, {
            html : '<img src="images/Glaucoma3.jpg" width="700" />'

          },

        ]
      },
      */
      {
        xtype : 'container',
        layout : {
          type : 'vbox',
          pack : 'center',
          align : 'center'
        },
        style : 'background:white',
        items : [{
            html : '<img src="images/Diabetes5.jpg" class="noDropShadow noBorderRadius" width="800"/>'
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
            html : '<h1>Diabetes</h1>',
            style : 'margin-bottom:20px',
          },
          {
            html : '<p>There are approximately <strong style="font-size:30px;">285,000,000</strong> people around the world with Diabetes</p>'
             + '<p>This is set to <strong style="font-size:30px;">increase by 54% </strong>in the next 20 years</p>'
          }

        ]
      },
      /*
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
            html : '<h1>Diabetes</h1>',
            style : 'margin-bottom:20px',
          }, {
            html : '<img src="images/Diabetes6.jpg" width="700" />'

          },

        ]
      },
      */
      //slide 33 bar
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
            html: "<h1>Prevalence of Diabetes</h1>"
          },
          {
            html: '<div class="prevalenceOfDiabetes"></div>'
          }
        ],
        listeners: {
          activate: function () {
            if ( document.getElementsByClassName("prevalenceOfDiabetes")[0].getElementsByTagName("svg").length === 0 ) {
            var margin = {
                top: 20,
                right: 50,
                bottom: 30,
                left: 50
            }, width = 960 - margin.left - margin.right,
                height = 512 - margin.top - margin.bottom;
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
                .tickFormat(d3.format(".2s"));
            var svg = d3.selectAll(".prevalenceOfDiabetes")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            d3.csv("data/prevalenceOfDiabetes.csv", function (error, data) {
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
                    .text("Prevalence of Diabetes");
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
                    .attr("y", "461")
                    .attr("height", 1)
                    .style("fill", function (d) {
                    return color(d.name);
                })                    .transition()
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
            html : '<h1>Diabetic Retinopathy</h1>',
            style : 'margin-bottom:20px',
          },
          {
            html : '<p>Eventually Develops To Some Degree In Nearly<strong style="font-size:30px;">All Patients With Long-term Diabetes</strong></p>'
             + '<p>The Prevalence Of Diabetic Retinopathy Is<strong style="font-size:30px;">Highly Dependent On The Duration Of Diabetes</strong></p>'
             + '<p>25% Of Diabetes Sufferers With The Disease For <strong style="font-size:30px;">More Than 5 Years Develop Diabetic Retinopathy</strong></p>'
          }

        ]
      },
      /*
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
            html : '<h1>Diabetic Retinopathy</h1>',
            style : 'margin-bottom:20px',
          }, {
            html : '<img src="images/Diabetes7.jpg" width="700" />'

          },

        ]
      },
      */
      //slide 35 bar
      {
        xtype: 'container',
        layout: {
          type: 'vbox',
          pack: 'center',
          align: 'center'
        },
        cls:'lightGrey',
        items: [
          {
            html: '<h1>Diabetic Retinopathy</h1>'
          },
          {
            html: '<div class="diabeticRetinopathy"></div>'
          }
        ],
        listeners: {
          activate: function () {
            if ( document.getElementsByClassName("diabeticRetinopathy")[0].getElementsByTagName("svg").length === 0 ) {
            var margin = {
                top: 20,
                right: 50,
                bottom: 30,
                left: 50
            }, width = 960 - margin.left - margin.right,
                height = 512 - margin.top - margin.bottom;
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
                .tickFormat(d3.format(".2s"));
            var svg = d3.selectAll(".diabeticRetinopathy")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            d3.csv("data/diabeticRetinopathy.csv", function (error, data) {
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
                    .text("Diabetic Retinopathy");
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
                    .attr("y", "461")
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
            html : '<h1>DME (Diabetic Macular Edema)</h1>',
            style : 'margin-bottom:20px',
          },
          {
            html : '<p>The Prevalence Of<strong style="font-size:30px;">All Patients With Long-term Diabetes</strong></p>'
             + '<p>Among US Diabetics Approaches <strong style="font-size:30px;">30% In Adults </strong></p>'
             + '<p>Who’ve Had Diabetes For <strong style="font-size:30px;">More Than 20 Years </strong></p><br><br>'
             + '<p>It Varies With The Stage Of Diabetic Retinopathy</p>'

          }

        ]
      },
      /*
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
            html : '<h1>DME (Diabetic Macular Edema)</h1>',
            style : 'margin-bottom:20px',
          }, {
            html : '<img src="images/Diabetes8.jpg" width="700" />'

          },

        ]
      },
      */
      //slide 37 bar
      {
        xtype: 'container',
        layout: {
          type: 'vbox',
          pack: 'center',
          align: 'center'
        },
        cls:'lightGrey',
        items: [
          {
            html: '<h1>DME (Diabetic Macular Edema)</h1>'
          },
          {
            html: '<div class="diabeticMacularEdema"></div>'
          }
        ],
        listeners: {
          activate: function () {
            if ( document.getElementsByClassName("diabeticMacularEdema")[0].getElementsByTagName("svg").length === 0 ) {
            var margin = {
                top: 20,
                right: 50,
                bottom: 30,
                left: 50
            }, width = 960 - margin.left - margin.right,
                height = 512 - margin.top - margin.bottom;
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
                .tickFormat(d3.format(".2s"));
            var svg = d3.selectAll(".diabeticMacularEdema")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            d3.csv("data/diabeticMacularEdema.csv", function (error, data) {
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
                    .text("DME");
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
                    .attr("y", "461")
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
      {
        xtype : 'container',
        layout : {
          type : 'vbox',
          pack : 'center',
          align : 'center'
        },
        style : 'background:white',
        items : [{
            html : '<img src="images/CompetitiveLandscape.jpg" class="noDropShadow noBorderRadius" width="800"/>'
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
            html : '<h1>Global Competitive Landscape</h1>',
            style : 'margin-bottom:20px',
          }, {
            html : '<img src="images/GlobalCompetitive.jpg" width="700" />'

          },

        ]
      },
      /*
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
            html : '<h1>Market Share (2011-2012)</h1>',
            style : 'margin-bottom:20px',
          }, {
            html : '<img src="images/MarketShare.jpg" width="700" />'

          },

        ]
      },
      */
      //slide 40 pie
      {
        xtype: 'container',
        layout: {
          type: 'vbox',
          pack: 'center',
          align: 'center'
        },
        padding: 0,
        style: 'background:white',
        items: [
          {
            html: "<h1>Market Share (2011-2012)</h1>"
          },
          {
            html: '<div class="marketShare"></div>'
          },
          {
            html: '<h2>$350m Market Size</h2>'
          }
        ],
        listeners: {
          activate: function () {
            if ( document.getElementsByClassName("marketShare")[0].getElementsByTagName("svg").length === 0 ) {
            var width = 960,
                height = 500,
                radius = Math.min(width, height) / 2;
            var color = d3.scale.ordinal()
                .range(["#266e9e", "#a53946", "#95c190", "#595d60", "#58a0b6", "#e2973c", "#a5ae93", "#d06a47", "#c3cc5e", "#5f4a4f"]);
            var arc = d3.svg.arc()
                .outerRadius(radius - 10)
                .innerRadius(0);
            var pie = d3.layout.pie()
                .sort(null)
                .value(function (e) {
                return e.percent
            });
            var svg = d3.select(".marketShare")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
            d3.csv("data/marketShare.csv", function (e, t) {
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
                    .style("font-size", "12")
                    .style("font-weight", "bold")
                    .style("fill", "#121212")
                    .text(function (e) {
                    return e.data.category
                })
            });
            }
          }
        }
      },
      {
        xtype : 'container',
        layout : {
          type : 'vbox',
          pack : 'center',
          align : 'center'
        },
        style : 'background:white',
        items : [{
            html : '<img src="images/MarketShare2.jpg" class="noDropShadow noBorderRadius" width="800"/>'
          },
        ]
      }
    ]
  }

});