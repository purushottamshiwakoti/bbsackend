'use strict';

/**
 * hom service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hom.hom');
