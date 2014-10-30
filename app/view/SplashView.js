Ext.define("LumenisTraining.view.SplashView", {
  extend: "Ext.Container",
  xtype: "splashview",
  config: {
    title: "Splash",
    id: "splashView",
    styleHtmlContent: true,
    padding: 0,
    style: 'background:#276397 url("images/splashBackgroundTraining.jpg") 0 -90px no-repeat',
    layout: {
      type: 'vbox',
      pack: 'center',
      align: 'center'
    },
    items: [
      {
        xtype: 'container',
        layout: {
          type: 'hbox',
          pack: 'start',
          align: 'start'
        },
        padding: 0,
        items: [
          {
            html: '<img src="images/splashEye.jpg" class="noDropShadow" width="418"/>'
          },
          {
            xtype: 'container',
            layout: {
              type: 'vbox',
              pack: 'start',
              align: 'center'
            },
            height: '351px',
            style: 'padding-top:4px',
            items: [
              {
                xtype: 'button',
                text: '<span class="number">1</span><span class="buttonTitle wrap">Intro to Training & Market Overview</span>',
                id: 'slideButtonIntro',
                cls: 'splashButton light',
                margin: '0 0 18px 0'
              },
              {
                xtype: 'button',
                text: '<span class="number">2</span><span class="buttonTitle">Medical Training</span>',
                id: 'slideButtonMedical',
                cls: 'splashButton light',
                margin: '0 0 18px 0'
              },
              {
                xtype: 'button',
                text: '<span class="number">3</span><span class="buttonTitle">Product Training</span>',
                id: 'slideButtonProduct',
                cls: 'splashButton light',
                margin: '0 0 18px 0'
              },
              {
                xtype: 'button',
                text: '<span class="number">4</span><span class="buttonTitle wrap">Sales Strategy & Training</span>',
                id: 'slideButtonSales',
                cls: 'splashButton light',
                margin: '0'
              }
            ]
          }

        ]
      },
      {
        xtype: 'progressbarview',
        id: 'splashProgressBar'
      }
    ]

  }
  
  
  });