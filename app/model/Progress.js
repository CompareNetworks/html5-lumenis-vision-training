Ext.define('LumenisTraining.model.Progress', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
          { name: 'totalQuizNum', type: 'int' },
          { name: 'passedQuizNum', type: 'int' }
        ],
        proxy: {
            type: 'localstorage',
            id  : 'LocalSettingsStoreProxy'
        },
        autoLoad:true
    }
});