 module.exports = ({ env }) => ({
  // if (env("NODE_ENV") === "production") {
  //   return {
      upload: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: "code-nguyen",
          api_key: 929775517861495,
          api_secret: "eyEn1Hui5drFBBll3SW6z56coi8",
        }
      }
  //   }
  // }
  // ...
});
