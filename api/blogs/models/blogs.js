const _ = require("lodash");

module.exports = {
  lifecycles: {
    // beforeSave: async (model, attrs, options) => {
    //   if (options.method === "insert" && attrs.title) {
    //     model.set("slug", _.kababCase(attrs.title));
    //   } else if (options.method === "update" && attrs.title) {
    //     attrs.slug = _.kebabCase(attrs.title);
    //   }
    // }
    beforeCreate: async (data) => {
      if (!data.slug) {
        data.slug = _.kebabCase(data.title);
      }
      data.title = _.startCase(data.title);
    },
    beforeUpdate: async (params, data) => {
      if (data.slug) {
        data.slug = _.kebabCase(data.title);
      }
      data.title = _.startCase(data.title);
    },
  },
};
