/*
** Nuxtent configuration
*/

module.exports = {
  content: [
      ["projects", {
        page: '/_slug',
        permalink: ":slug",
        isPost: false,
        generate: [
          'get',
          'getAll'
        ]
      }]
    ]
}
