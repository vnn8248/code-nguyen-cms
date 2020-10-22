const _ = require("lodash");

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.name) {
        data.slug = _.kebabCase(data.name);
      }
    },
    beforeUpdate: async (params, data) => {
      data.slug = _.kebabCase(data.name);
    },
  },
};
