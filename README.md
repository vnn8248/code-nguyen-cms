# Strapi application

Welcome to the Strapi repository for Code Nguyen. This configuration was set up for a personal blog and portfolio. I plan to write and in-depth blog post series on how to recreate a project like this using Strapi. You can find it at www.codenguyen.com.

## Highlights
- Under the API directory, the blog and portfolio endpoints have models where you can see a dynamic slug creation for individual blog posts and portfolio pieces. With the help of Strapi's lifecycle functions, and lodash to standardize the format of the slug, each blog post title and portfolio name will render its own unique page.
- In production, all static files are configured to upload to a third-party provider, Cloudinary. The configuration can be viewed under the "config" directory in plugins.js.
- Also in production, Strapi is configured to connect with a MongoDB Atlas URI to persist and serve data. In a dev environment, Strapi will connect with a local instance of MongoDB. You can view the configuration in the "config" directory under database.js.
- Lastly, the production version of Strapi is served on Heroku. You can view that configuration in the "config" directory in server.js. 


