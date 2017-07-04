module.exports = {
  users: {
    admin: {password: 'password', scopes: 'cartoons:all cartoons:add cartoons:remove cartoons:edit'.split(' ')}
  },
  jwtSecret: '08098grrgaorugh',
  port: process.env.PORT || 3000
}
