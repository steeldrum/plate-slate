/**
 * @module core/controller
 * @requires montage/core/core
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class Controller
 * @extends Montage
 */
exports.Controller = Montage.specialize(/** @lends Controller# */ {
    constructor: {
        value: function Controller() {
            this.super();
        }
    }
});
