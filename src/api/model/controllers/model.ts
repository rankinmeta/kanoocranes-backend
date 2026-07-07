/**
 * model controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::model.model', ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      

      const model = await strapi.documents("api::model.model").findMany({
        filters: { model_slug: id },
        limit: 1,
        ...ctx.query,
      });

      const singleModel = model[0]; // safely extract it

      if (!singleModel) {
        return ctx.notFound("Model not found");
      }

      const sanitized = await this.sanitizeOutput(singleModel, ctx);
      return this.transformResponse(sanitized);
    },
  }));
