export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f60c9f868e74a300cd3d5f8',
                  title: 'Sanity Studio',
                  name: 'sanity-check-studio-a2authni',
                  apiId: '6328087f-dc5f-4f2d-9ddb-d9d01d26f579'
                },
                {
                  buildHookId: '5f60c9f856e83f273363d489',
                  title: 'Landing pages Website',
                  name: 'sanity-check-web',
                  apiId: 'c8788151-6fce-4cc2-ba63-35bb28e074b9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Flaque/sanity-check',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-check-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
