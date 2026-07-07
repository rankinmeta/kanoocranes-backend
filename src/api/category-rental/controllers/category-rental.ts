/**
 * category-rental controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::category-rental.category-rental', ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      

      const categoryRent = await strapi.documents("api::category-rental.category-rental").findMany({
        filters: { slug: id },
        limit: 1,
        ...ctx.query,
      });

      const singleCategoryRent = categoryRent[0]; // safely extract it

      if (!singleCategoryRent) {
        return ctx.notFound("Category not found");
      }

      const sanitized = await this.sanitizeOutput(singleCategoryRent, ctx);
      return this.transformResponse(sanitized);
    },
  }));
