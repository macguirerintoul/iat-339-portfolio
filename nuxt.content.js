/*
** Nuxtent configuration
*/

module.exports = {
  content: [
      ["projects", {
        page: '/_slug',
        permalink: ":slug",
        generate: [
          'get',
          'getAll'
        ]
      }]
    ]
}
