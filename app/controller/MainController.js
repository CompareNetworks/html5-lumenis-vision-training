Ext.define("LumenisTraining.controller.MainController", {
  extend: "Ext.app.Controller",

  config: {
    refs: {
      startButton: "#startButton",
      homeButton: "#homeButton",
      tableOfContentsButton: "#tableOfContentsButton",
      navigationView: "#navigationView",
      moduleView: "#moduleView",
      documentsButton: "#documentsButton",
      documentsView: "#documentsView",
      contentView: "#contentView",
      tableOfContentsView: "#tableOfContentsView",
      splashView: "#splashView",
      /*training modules*/
      introView: "#introView",
      medicalView: "#medicalView",
      productView: "#productView",
      salesView: "#salesView",
      posteriorSegmentView: "#posteriorSegmentView",
      retinalPathologiesView: "#retinalPathologiesView",
      vitrectomyView: "#vitrectomyView",
      anteriorSegmentView: "#anteriorSegmentView",
      cataractView: "#cataractView",
      glaucomaView: "#glaucomaView",
      photocoagulatorsView: "#photocoagulatorsView",
      novusSpectraView: "#novusSpectraView",
      sltView: "#sltView",
      photocoagulatorsView: "#photocoagulatorsView",
      yagView: "#yagView",
      slitLampView: "#slitLampView",
      testimonialsView: "#testimonialsView",
      topTenView: "#topTenView",
      /*splash buttons*/
      slideButtonIntro: "#slideButtonIntro",
      slideButtonMedical: "#slideButtonMedical",
      slideButtonSales: "#slideButtonSales",
      slideButtonProduct: "#slideButtonProduct",
      slideButtonPosteriorSegment: "#slideButtonPosteriorSegment",
      slideButtonRetinalPathologies: "#slideButtonRetinalPathologies",
      slideButtonVitrectomy: "#slideButtonVitrectomy",
      slideButtonAnteriorSegment: "#slideButtonAnteriorSegment",
      slideButtonCataract: "#slideButtonCataract",
      slideButtonGlaucoma: "#slideButtonGlaucoma",
      slideButtonPhotocoagulators: "#slideButtonPhotocoagulators",
      slideButtonNovusSpectra: "#slideButtonNovusSpectra",
      slideButtonSLT: "#slideButtonSLT",
      slideButtonYAG: "#slideButtonYAG",
      slideButtonSlitLamp: "#slideButtonSlitLamp",
      slideButtonTestimonials: "#slideButtonTestimonials",
      slideButtonTopTen: "#slideButtonTopTen",
      /*table of contents*/
      tocButtonIntroVideo: "#tocButtonIntroVideo",
      tocButtonIntroOverview: "#tocButtonIntroOverview",
      tocButtonPosteriorSegment: "#tocButtonPosteriorSegment",
      tocButtonRetinalPathologies: "#tocButtonRetinalPathologies",
      tocButtonVitrectomy: "#tocButtonVitrectomy",
      tocButtonAnteriorSegment: "#tocButtonAnteriorSegment",
      tocButtonCataract: "#tocButtonCataract",
      tocButtonGlaucoma: "#tocButtonGlaucoma",
      tocButtonSLT: "#tocButtonSLT",
      tocButtonPhotocoagulators: "#tocButtonPhotocoagulators",
      tocButtonNovusSpectra: "#tocButtonNovusSpectra",
      tocButtonYAG: "#tocButtonYAG",
      tocButtonSlitLamp: "#tocButtonSlitLamp",
      tocButtonTestimonials: "tocButtonTestimonials",
      tocButtonTopTen: "#tocButtonTopTen",
      slideTitle: "#slideTitle",
      moduleTitle: "#moduleTitle",
      //quizView: "#quizView",
      //quizButton: "#quizView button",
      quizCataractView: "#quizCataractView",
      quizCataractButton: "#quizCataractView button",
      quizSlitLampsView: "#quizSlitLampsView",
      quizSlitLampsButton: "#quizSlitLampsView button",
      quizNovusSpectraView: "#quizNovusSpectraView",
      quizNovusSpectraButton: "#quizNovusSpectraView button",
      quizPhotocoagulatorsView: "#quizPhotocoagulatorsView",
      quizPhotocoagulatorsButton: "#quizPhotocoagulatorsView button",
      quizSelectaView: "#quizSelectaView",
      quizSelectaButton: "#quizSelectaView button",
      progressText: "#progressText",
      splashProgressBar: "#splashProgressBar",
      medicalProgressBar: "#medicalProgressBar",
      productProgressBar: "#productProgressBar",
      overlayVideoView: "#overlayVideoView",
      overlayVideoPlayer: "#overlayVideoPlayer",
      overlayVideoPlayerElement: "#overlayVideoPlayer video"
    },
    control: {
      tableOfContentsButton: {
        tap: "showTableOfContents"
      },
      documentsButton: {
        tap: "showDocuments"
      },
      startButton: {
        tap: function() {
          this.showSplashModule(this.currentSplashNum, this.currentSplashTitle)
        }
      },
      homeButton: {
        tap: "showSplashScreen"
      },
      slideButtonMedical: {
        tap: function() {
          this.showSplashModule(1, "Medical Training");
        }
      },
      slideButtonProduct: {
        tap: function() {
          this.showSplashModule(2, "Product Training");
        }
      },
      slideButtonSales: {
        tap: function() {
          this.showSplashModule(3, "Sales Strategy & Training");
        }
      },
      introView: {
        painted: "slideChanged"
      },
      posteriorSegmentView: {
        painted: "slideChanged"
      },
      retinalPathologiesView: {
        painted: "slideChanged"
      },
      vitrectomyView: {
        painted: "slideChanged"
      },
      anteriorSegmentView: {
        painted: "slideChanged"
      },
      cataractView: {
        painted: "slideChanged"
      },
      glaucomaView: {
        painted: "slideChanged"
      },
      photocoagulatorsView: {
        painted: "slideChanged"
      },
      novusSpectraView: {
        painted: "slideChanged"
      },
      sltView: {
        painted: "slideChanged"
      },
      yagView: {
        painted: "slideChanged"
      },
      slitLampView: {
        painted: "slideChanged"
      },
      testimonialsView: {
        painted: "slideChanged"
      },
      topTenView: {
        painted: "slideChanged"
      },
      contentView: {
        videoEventEye1: function() {
          this.getLocalVideo("7060");
        },
        videoEventEye2: function () {
          this.getLocalVideo("7061");
        },
        videoEventEye3: function () {
          this.getLocalVideo("7062");
        },
        videoEventEye4: function () {
          this.getLocalVideo("7063");
        },
        videoEventEye5: function () {
          this.getLocalVideo("7064");
        },
        videoEventEye6: function () {
          this.getLocalVideo("7065");
        },
        videoEventAlvarado: function () {
          this.getLocalVideo("7069");
        },
        videoEventAsrani: function () {
          this.getLocalVideo("7068");
        },
        videoEventBarton: function () {
          this.getLocalVideo("7055");
        },
        videoEventColeman: function () {
          this.getLocalVideo("7070");
        },
        videoEventHowes: function () {
          this.getLocalVideo("7071");
        },
        videoEventKatz: function () {
          this.getLocalVideo("7072");
        },
        videoEventLatina: function () {
          this.getLocalVideo("7073");
        },
        videoEventLeung: function () {
          this.getLocalVideo("7074");
        },
        videoEventNagar: function () {
          this.getLocalVideo("7075");
        },
        videoEventNoecker: function () {
          this.getLocalVideo("7076");
        }
      },
      /*splash page buttons*/
      slideButtonIntro: {
        tap: function() {
          this.showSlide("introview");
          this.showTitleBar(1);
          this.getModuleTitle().setHtml("Intro to Training");
        }
      },
      slideButtonPosteriorSegment: {
        tap: function() {
          this.showSlide("posteriorsegmentview");
        }
      },
      slideButtonRetinalPathologies: {
        tap: function() {
          this.showSlide("retinalpathologiesview");
        }
      },
      slideButtonVitrectomy: {
        tap: function() {
          this.showSlide("vitrectomyview");
        }
      },
      slideButtonAnteriorSegment: {
        tap: function() {
          this.showSlide("anteriorsegmentview");
        }
      },
      slideButtonCataract: {
        tap: function() {
          this.showSlide("cataractview");
        }
      },
      slideButtonGlaucoma: {
        tap: function() {
          this.showSlide("glaucomaview");
        }
      },
      slideButtonPhotocoagulators: {
        tap: function(e) {
          if (e.config.locked == false) {
            this.showSlide("photocoagulatorsview");
          } else {
            alert("You must complete the previous section(s) to unlock this module.");
          }
        }
      },
      slideButtonNovusSpectra: {
        tap: function(e) {
          if (e.config.locked == false) {
            this.showSlide("novusspectraview");
          } else {
            alert("You must complete the previous section(s) to unlock this module.");
          }
        }
      },
      slideButtonSLT: {
        tap: function(e) {
          if (e.config.locked == false) {
            this.showSlide("sltview");
          } else {
            alert("You must complete the previous section(s) to unlock this module.");
          }
        }
      },
      slideButtonYAG: {
        tap: function() {
          this.showSlide("yagview");
        }
      },
      slideButtonSlitLamp: {
        tap: function (e) {
          if (e.config.locked == false) {
            this.showSlide("slitlampview");
          } else {
            alert("You must complete the previous section(s) to unlock this module.");
          }
        }
      },
      slideButtonTestimonials: {
        tap: function() {
          this.showSlide("testimonialsview");
        }
      },
      slideButtonTopTen: {
        tap: function() {
          this.showSlide("toptenview");
        }
      },
      /*table of contents*/
      tocButtonIntroVideo: {
        tap: function() {
          this.showSlide("introvideoview");
        }
      },
      tocButtonIntroOverview: {
        tap: function() {
          this.showSlide("introoverviewview");
        }
      },
      tocButtonPosteriorSegment: {
        tap: function() {
          this.showSlide("posteriorsegmentview");
        }
      },
      tocButtonRetinalPathologies: {
        tap: function() {
          this.showSlide("retinalpathologiesview");
        }
      },
      tocButtonVitrectomy: {
        tap: function() {
          this.showSlide("vitrectomyview");
        }
      },
      tocButtonAnteriorSegment: {
        tap: function() {
          this.showSlide("anteriorsegmentview");
        }
      },
      tocButtonCataract: {
        tap: function() {
          this.showSlide("cataractview");
        }
      },
      tocButtonGlaucoma: {
        tap: function() {
          this.showSlide("glaucomaview");
        }
      },
      tocButtonPhotocoagulators: {
        tap: function() {
          this.showSlide("photocoagulatorsview");
        }
      },
      tocButtonNovusSpectra: {
        tap: function() {
          this.showSlide("novusspectraview");
        }
      },
      tocButtonSLT: {
        tap: function() {
          this.showSlide("sltview");
        }
      },
      tocButtonYAG: {
        tap: function() {
          this.showSlide("yagview");
        }
      },
      tocButtonSlitLamp: {
        tap: function() {
          this.showSlide("slitlampview");
        }
      },
      tocButtonTestimonials: {
        tap: function() {
          this.showSlide("testimonialsview");
        }
      },
      tocButtonSlitLamp: {
        tap: function() {
          this.showSlide("toptenview");
        }
      },
      quizCataractButton: {
        tap: function() {
          var myAnswers = this.getFormValues(this.getQuizCataractView());
          var correctAnswers = {
            q1: "c",
            q2: "b",
            q3: "e",
            q4: "a",
            q5: "e",
            q6: "f",
            q7: "d",
            q8: "b"
          }
          var percentCorrect = this.getPercentCorrect(myAnswers, correctAnswers);
          this.updateProgress(percentCorrect, this.getQuizCataractButton(), "medical");
        }
      },
      quizSlitLampsButton: {
        tap: function() {
          var myAnswers = this.getFormValues(this.getQuizSlitLampsView());
          var correctAnswers = {
            q1: "a",
            q2: "b",
            q3: "a",
            q4: "a",
            q5: "b",
            q6: "c"
          }
          var percentCorrect = this.getPercentCorrect(myAnswers, correctAnswers);
          this.updateProgress(percentCorrect, this.getQuizSlitLampsButton(), "product");
        }
      },
      quizNovusSpectraButton: {
        tap: function() {
          var myAnswers = this.getFormValues(this.getQuizNovusSpectraView());
          var correctAnswers = {
            q1: "a",
            q2: "b",
            q3: "a",
            q4: "a",
            q5: "b",
            q6: "c"
          }
          var percentCorrect = this.getPercentCorrect(myAnswers, correctAnswers);
          this.updateProgress(percentCorrect, this.getQuizNovusSpectraButton(), "product");
        }
      },
      quizPhotocoagulatorsButton: {
        tap: function() {
          var myAnswers = this.getFormValues(this.getQuizPhotocoagulatorsView());
          var correctAnswers = {
            q1: "c",
            q2: "d",
            q3: "e",
            q4: "c",
            q5: "b",
            q6: "d"
          }
          var percentCorrect = this.getPercentCorrect(myAnswers, correctAnswers);
          this.updateProgress(percentCorrect, this.getQuizPhotocoagulatorsButton(), "product");
        }
      },
      quizSelectaButton: {
        tap: function() {
          var myAnswers = this.getFormValues(this.getQuizSelectaView());
          var correctAnswers = {
            q1: "a",
            q2: "a",
            q3: "e",
            q4: "f",
            q5: "d",
            q6: "e",
            q7: "a",
            q8: "e",
            q9: "d",
            q10: "e"

          }
          var percentCorrect = this.getPercentCorrect(myAnswers, correctAnswers);
          this.updateProgress(percentCorrect, this.getQuizSelectaButton(), "product");
        }
      }
    }
  },
  progressStore: {},
  currentSplashNum: 1,
  currentSplashTitle: "Medical Training",
  launch: function () {
    this.getDocumentsButton().disable();
    this.getDocumentsButton().hide();

    this.progressStore = Ext.data.StoreManager.lookup('progressStore'), this.progressStore.add({
      totalQuizNum: 5
    });
    this.progressStore.add({
      passedQuizNum: 0
    });
    this.getTableOfContentsButton().hide();

    //main quiz progress
    if ( (currentState.readCookie("trainingPercentComplete").toString()) === "") {
      currentState.createCookie("trainingPercentComplete", "0");
    } else {
      var myStoredProgress = parseInt( currentState.readCookie("trainingPercentComplete").toString() );
      if (myStoredProgress > 0) {
        this.redrawProgessBar(myStoredProgress);
      }
    }

    //product quiz progress
    if ( (currentState.readCookie("productQuizNum").toString()) === "") {
      currentState.createCookie("productQuizNum", "1");
    } else {
      //cookie is already there. will read it upon quiz completion
    }
    
  },
  showSlide: function(myView) {

    //remove previous panel
    this.getContentView().removeAt(4);

    //create a panel on the fly to hold view
    var myPanel = Ext.create('Ext.Panel', {
      layout: 'fit',
      items: [{
        xtype: "" + myView + ""
      }]
    });

    this.getContentView().add([myPanel]);
    //this.getNavigationView().setTitle("" + myPanel.getComponent(0).getTitle() + "");
    this.getSlideTitle().setHtml("" + myPanel.getComponent(0).getTitle() + "");
    this.getContentView().animateActiveItem(myPanel, {
      type: 'flip',
      duration: 500
    });
    this.showTitleBar(0);
  },
  slideChanged: function(e) {
    /*
    NO DOCUMENTS AT THIS TIME

    //each pain point has a documents array
    var myDocuments = e._documents;

    //destroy whatever's in the document view
    this.getDocumentsView().removeAll(true, true);

    //if it has documents, create the links. Otherwise, disable.
    if (myDocuments.length > 0) {
      this.getDocumentsButton().enable();
      this.createDocumentButtons(myDocuments);
    } else {
      this.getDocumentsButton().disable();
    }
    */
  },

  createDocumentButtons: function(documentsButtonArray) {
    for(var i = 0; i < documentsButtonArray.length; i++) {
      var newDocumentRow = Ext.create('Ext.Panel', {
        layout: {
          type: 'hbox',
          pack: 'center',
          align: 'center'
        },
        padding: '5 0 5 0',
        items: [{
          xtype: 'container',
          layout: {
            type: 'hbox',
            pack: 'start',
            align: 'center'
          },
          width: 230
        }]
      });

      //button text
      var buttonText = "" + documentsButtonArray[i][0] + "";

      var viewButton = Ext.create('Ext.Button', {
        text: buttonText,
        cls: "docLink",
        data: "" + documentsButtonArray[i][1] + "",
        listeners: {
          tap: function() {
            macs.viewAsset("" + this.getData() + "", function(result) {}, function(result) {});
          }
        }
      });

      var emailButton = Ext.create('Ext.Button', {
        text: "Email",
        cls: "documentLink",
        data: "" + documentsButtonArray[i][1] + "",
        listeners: {
          tap: function() {
            macs.emailAsset("" + this.getData() + "", function(result) {});
          }
        }
      });

      var printButton = Ext.create('Ext.Button', {
        text: "Print",
        cls: "documentLink",
        data: "" + documentsButtonArray[i][1] + "",
        listeners: {
          tap: function() {
            macs.printAsset("" + this.getData() + "", function(result) {});
          }
        }
      });

      newDocumentRow.getAt(0).add(viewButton);
      newDocumentRow.add(emailButton);
      newDocumentRow.add(printButton);

      this.getDocumentsView().add(newDocumentRow);
    }
  },
  showSplashScreen: function() {
    this.getContentView().animateActiveItem(0, {
      type: 'fade',
      duration: 500
    });
    this.showTitleBar();
  },
  showSplashModule: function(splashNum, splashTitle) {
    this.currentSplashNum = splashNum;
    this.currentSplashTitle = splashTitle;
    this.getContentView().animateActiveItem(splashNum, {
      type: 'fade',
      duration: 500
    });
    this.showTitleBar(1);
    this.getModuleTitle().setHtml(splashTitle);
    if (splashNum === 2) {
    this.updateProductQuizButtons( currentState.readCookie("productQuizNum").toString() );
    }
  },
  showTableOfContents: function() {
    this.getTableOfContentsView().showBy(this.getTableOfContentsButton());
  },
  showDocuments: function() {
    this.getDocumentsView().showBy(this.getDocumentsButton());
  },
  showTitleBar: function(titleNum) {

    switch(titleNum) {
    case 0:
      this.getModuleView().hide();
      this.getNavigationView().show();
      break;

    case 1:
      this.getModuleView().show();
      this.getNavigationView().hide();
      break;

    default:
      this.getModuleView().hide();
      this.getNavigationView().hide();
      break;
    }
  },
  getFormValues: function(form) {
    return form.getValues();
  },
  getPercentCorrect: function(userAnswers, correctAnswers) {
    var numAnswers = 0;
    var numCorrectAnswers = 0;
    var percent = 0;

    for(var key in userAnswers) {
      //note: key names must match
      var val = userAnswers[key];
      var correctVal = correctAnswers[key];

      if(val === correctVal) {
        numCorrectAnswers++;
      }
      numAnswers++;
    }

    percent = (numCorrectAnswers / numAnswers) * 100;
    return percent;
  },
  disableFormPanel: function(formPanel) {

  },
  updateProgress: function(percentCorrect, formButton, splashParent) {

    if(percentCorrect >= 80) {

      this.progressStore.getAt(1).data.passedQuizNum += 1;
      var percentPassed = (this.progressStore.getAt(1).data.passedQuizNum / this.progressStore.getAt(0).data.totalQuizNum) * 100;
      this.redrawProgessBar(percentPassed);
      this.updateProductQuizState( formButton.getId().toString() );
      formButton.disable();
      currentState.createCookie("trainingPercentComplete", "" + percentPassed + "");
      Ext.Msg.alert("Congratulations!", "You passed the quiz with " + Math.floor(percentCorrect).toString() + "% correct and unlocked a new section.", this.showSplashModule(this.currentSplashNum, this.currentSplashTitle));

    } else {
      Ext.Msg.alert("Sorry, try again.", "You need at least 80% on the quiz to continue to the next section. Your score: " + percentCorrect + "/100");
    }
  },
  updateProductQuizState: function(quizButtonId) {

    switch(quizButtonId) {
      case "quizCataractButton":
      //do nothing yet
      break;

      case "quizPhotocoagulatorsButton":
      this.updateProductQuizButtons("2");
      currentState.createCookie( "productQuizNum", "2");
      break;

      case "quizNovusSpectraButton":
      this.updateProductQuizButtons("3");
      currentState.createCookie( "productQuizNum", "3");
      break;

      case "quizSlitLampsButton":
      this.updateProductQuizButtons("4");
      currentState.createCookie( "productQuizNum", "4");
      break;

      case "quizSelectaButton":
      //all buttons enabled at this point. do nothing
      break;

      default:
      break;
    }
  },
  updateProductQuizButtons: function (quizNum) {

    switch(quizNum) {
      case "1":
        slideButtonPhotocoagulators.className = "x-button-normal x-button splashButton light";
        this.getSlideButtonPhotocoagulators().config.locked = false;
        break;

      case "2":
        slideButtonPhotocoagulators.className = "x-button-normal x-button splashButton light";
        this.getSlideButtonPhotocoagulators().config.locked = false;
        slideButtonNovusSpectra.className = "x-button-normal x-button splashButton light";
        this.getSlideButtonNovusSpectra().config.locked = false;
        break;

      case "3":
        slideButtonPhotocoagulators.className = "x-button-normal x-button splashButton light";
        this.getSlideButtonPhotocoagulators().config.locked = false;
        slideButtonNovusSpectra.className = "x-button-normal x-button splashButton light";
        this.getSlideButtonNovusSpectra().config.locked = false;
        slideButtonSlitLamp.className = "x-button-normal x-button splashButton light";
        this.getSlideButtonSlitLamp().config.locked = false;
      break;

      case "4":
        slideButtonPhotocoagulators.className = "x-button-normal x-button splashButton light";
        this.getSlideButtonPhotocoagulators().config.locked = false;
        slideButtonNovusSpectra.className = "x-button-normal x-button splashButton light";
        this.getSlideButtonNovusSpectra().config.locked = false;
        slideButtonSlitLamp.className = "x-button-normal x-button splashButton light";
        this.getSlideButtonSlitLamp().config.locked = false;
        slideButtonSLT.className = "x-button-normal x-button splashButton light";
        this.getSlideButtonSLT().config.locked = false;
      break;

      default:
      //console.log("Error");
      break;

    }
  },
  redrawProgessBar: function(percent) {
    var percent = Math.floor(percent);
    var percentToWidth = Math.floor((788 * percent) / 100);
    var myProgressHtml = '<div style="background:#1c466b; width:788px; height:22px; position:relative; border-radius:12px"><img src="images/progressOverlay.png" style="position:absolute; top:0; left:0; z-index:1; width:788px; height:22px" class="noDropShadow noBorderRadius"/><div id="progressBar" style="background:#3b97ce; width:' + percentToWidth + 'px; height:22px; position:absolute; top:0; left:0; z-index:0"></div></div>';

    //update the 3 progress bar instances
    this.getSplashProgressBar().getAt(0).setHtml(myProgressHtml);
    this.getMedicalProgressBar().getAt(0).setHtml(myProgressHtml);
    this.getProductProgressBar().getAt(0).setHtml(myProgressHtml);
    this.getSplashProgressBar().getAt(1).setHtml(percent + "% Complete");
    this.getMedicalProgressBar().getAt(1).setHtml(percent + "% Complete");
    this.getProductProgressBar().getAt(1).setHtml(percent + "% Complete");
  },
  getLocalVideo: function (assetNum) {
    var currentUrl = "";
    var assetNum = assetNum;

    //assetPath test
    macs.getAssetPath("" + assetNum + "", function (result) {
      currentUrl = result.assetPath;
    });

    this.getOverlayVideoPlayer().setUrl(currentUrl);
    //this.getOverlayVideoPlayer().setPosterUrl("images/Noecker.jpg");
    this.getOverlayVideoView().show();
    //auto-play hack to show controls
    document.getElementById("ext-element-382").style.cssText = "display: block !important; top: 0px !important";
    this.getOverlayVideoPlayer().play();
  }

});