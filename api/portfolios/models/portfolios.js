const _ = require("lodash");

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (!data.slug) {
        data.slug = _.kebabCase(data.name);
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.slug) {
        data.slug = _.kebabCase(data.name);
      }
    },
  },
};
