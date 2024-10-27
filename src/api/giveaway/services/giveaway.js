'use strict';

/**
 * giveaway service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::giveaway.giveaway');
