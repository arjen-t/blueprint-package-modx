var Skeleton = function (config) {
    config = config || {};

    Skeleton.superclass.constructor.call(this, config);
};
Ext.extend(Skeleton, Ext.Component, {
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
Ext.reg('skeleton', Skeleton);

Skeleton = new Skeleton();