'use strict';

/**
 * outsourcing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::outsourcing.outsourcing');
