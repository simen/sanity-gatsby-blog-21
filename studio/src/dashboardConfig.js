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
                  buildHookId: '5e6558cc46c3240d86f05856',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-21-studio',
                  apiId: '2bcfa7c4-8886-42e1-8782-662c5a700535'
                },
                {
                  buildHookId: '5e6558ccd4340b5cd2aac807',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-21',
                  apiId: 'f6185b68-1631-4c74-b166-528274f73ac2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-gatsby-blog-21',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-21.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
