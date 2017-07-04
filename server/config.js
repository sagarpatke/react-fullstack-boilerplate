module.exports = {
  users: {
    admin: {password: 'password', scopes: 'cartoons:all cartoons:read cartoons:write cartoons:add cartoons:remove'.split(' ')}
  },
  jwtSecret: '08098grrgaorugh',
  port: process.env.PORT || 3000,
  enableAuth: true
}
