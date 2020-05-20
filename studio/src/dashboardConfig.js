export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: process.env.NETLIFY_STUDIO_BUILD_HOOK_ID,
                  title: 'Content Management Studio',
                  name: 'needles-neos-studio',
                  apiId: process.env.NETLIFY_STUDIO_API_ID,
                },
                {
                  buildHookId: process.env.NETLIFY_WEB_BUILD_HOOK_ID,
                  title: 'Website',
                  name: 'needles-neos-web',
                  apiId: process.env.NETLIFY_WEB_API_ID,
                },
              ],
            },
          },
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vassilis/dockit2',
            category: 'Code',
          },
          {
            title: 'Frontend',
            value: 'https://dockit2.netlify.com',
            category: 'apps',
          },
        ],
      },
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: {
        title: 'Most Recent Updates',
        order: '_updatedAt desc',
        types: [
          'feature',
          'cta',
          'solution',
          'statement',
          'nav',
          'plan',
          'landingPage',
          'siteSettings',
          'post',
          'category',
          'author',
          'mainImage',
          'authorReference',
          'bodyPortableText',
          'bioPortableText',
          'excerptPortableText',
          'navItem',
          'heroSection',
          'featuresSection',
          'seo',
        ],
      },
      layout: { width: 'medium' },
    },
  ],
};
