/**
 * resource controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::resource.resource",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      

      const resource = await strapi.documents("api::resource.resource").findMany({
        filters: { slug: id },
        limit: 1,
        ...ctx.query,
      });

      const singleResource = resource[0]; // safely extract it

      if (!singleResource) {
        return ctx.notFound("Resource not found");
      }

      const sanitized = await this.sanitizeOutput(singleResource, ctx);
      return this.transformResponse(sanitized);
    },
  }),
);
