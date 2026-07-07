/**
 * category-sale controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::category-sale.category-sale', ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      

      const categorySale = await strapi.documents("api::category-sale.category-sale").findMany({
        filters: { slug: id },
        limit: 1,
        ...ctx.query,
      });

      const singleCategorySale = categorySale[0]; // safely extract it

      if (!singleCategorySale) {
        return ctx.notFound("Category not found");
      }

      const sanitized = await this.sanitizeOutput(singleCategorySale, ctx);
      return this.transformResponse(sanitized);
    },
  }));
