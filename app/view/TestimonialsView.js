Ext.define("LumenisTraining.view.TestimonialsView", {
  extend: "Ext.Carousel",
  xtype: "testimonialsview",
  config: {
    title: "Testimonials",
    id: "testimonialsView",
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
        cls: 'lightGrey',
        documents: [],
        items: [
          {
            html : '<h1>Keith Barton, MD</h1>'
          },
          {
            xtype: 'container',
            width:640,
            height:360,
            items: [
              {
                xtype: 'button',
                text: "",
                bubbleEvents: "videoEventBarton",
                style: 'background-image: url("images/Barton.jpg"); border:0; background-color:transparent',
                padding: 0,
                width: 640,
                height: 360,
                margin: 0,
                handler: function () {
                  this.fireEvent("videoEventBarton", this);
                }
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
            html : '<h1>Mark Latina, MD</h1>'
          },
          {
            xtype: 'container',
            width:640,
            height:360,
            items: [
              {
                xtype: 'button',
                text: "",
                bubbleEvents: "videoEventLatina",
                style: 'background-image: url("images/Latina.jpg"); border:0; background-color:transparent',
                padding: 0,
                width: 640,
                height: 360,
                margin: 0,
                handler: function () {
                  this.fireEvent("videoEventLatina", this);
                }
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
            html : '<h1>Kate Coleman, MD</h1>'
          },
          {
            xtype: 'container',
            width:640,
            height:360,
            items: [
              {
                xtype: 'button',
                text: "",
                bubbleEvents: "videoEventColeman",
                style: 'background-image: url("images/Coleman.jpg"); border:0; background-color:transparent',
                padding: 0,
                width: 640,
                height: 360,
                margin: 0,
                handler: function () {
                  this.fireEvent("videoEventColeman", this);
                }
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
            html : '<h1>Jorge Alvarado, MD</h1>'
          },
          {
            xtype: 'container',
            width:640,
            height:360,
            items: [
              {
                xtype: 'button',
                text: "",
                bubbleEvents: "videoEventAlvarado",
                style: 'background-image: url("images/Alvarado.jpg"); border:0; background-color:transparent',
                padding: 0,
                width: 640,
                height: 360,
                margin: 0,
                handler: function () {
                  this.fireEvent("videoEventAlvarado", this);
                }
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
            html : '<h1>Madhu Nagar, MD</h1>'
          },
          {
            xtype: 'container',
            width:640,
            height:360,
            items: [
              {
                xtype: 'button',
                text: "",
                bubbleEvents: "videoEventNagar",
                style: 'background-image: url("images/Nagar.jpg"); border:0; background-color:transparent',
                padding: 0,
                width: 640,
                height: 360,
                margin: 0,
                handler: function () {
                  this.fireEvent("videoEventNagar", this);
                }
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
            html : '<h1>Sanjay Asrani, MD</h1>'
          },
          {
            xtype: 'container',
            width:640,
            height:360,
            items: [
              {
                xtype: 'button',
                text: "",
                bubbleEvents: "videoEventAsrani",
                style: 'background-image: url("images/Asrani.jpg"); border:0; background-color:transparent',
                padding: 0,
                width: 640,
                height: 360,
                margin: 0,
                handler: function () {
                  this.fireEvent("videoEventAsrani", this);
                }
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
            html : '<h1>Frank Howes, MD</h1>'
          },
          {
            xtype: 'container',
            width:640,
            height:360,
            items: [
              {
                xtype: 'button',
                text: "",
                bubbleEvents: "videoEventHowes",
                style: 'background-image: url("images/Howes.jpg"); border:0; background-color:transparent',
                padding: 0,
                width: 640,
                height: 360,
                margin: 0,
                handler: function () {
                  this.fireEvent("videoEventHowes", this);
                }
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
            html : '<h1>Rob Noecker, MD</h1>'
          },
          {
            xtype: 'container',
            width:640,
            height:360,
            items: [
              {
                xtype: 'button',
                text: "",
                bubbleEvents: "videoEventNoecker",
                style: 'background-image: url("images/Noecker.jpg"); border:0; background-color:transparent',
                padding: 0,
                width: 640,
                height: 360,
                margin: 0,
                handler: function () {
                  this.fireEvent("videoEventNoecker", this);
                }
              }
            ]
          }
        ]
      },
    ]
  }
  
  });