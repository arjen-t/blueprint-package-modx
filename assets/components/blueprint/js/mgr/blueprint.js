var BluePrint = function (config) {
    config = config || {};

    BluePrint.superclass.constructor.call(this, config);
};
Ext.extend(BluePrint, Ext.Component, {
    page: {},
    window: {},
    grid: {},
    tree: {},
    panel: {},
    combo: {},
    config: {},
    view: {},
    keymap: {},
    plugin: {},
    browser: {}
});
Ext.reg('blueprint', BluePrint);

BluePrint = new BluePrint();