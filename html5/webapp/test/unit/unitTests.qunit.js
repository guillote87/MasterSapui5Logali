/* eslint-disable no-undef */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require([
        "gq4dev/html5/test/unit/AllTests"
    ], function () {
        QUnit.start();
    })
});