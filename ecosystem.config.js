// module.exports = {
//   apps : [
//     {
//       name: 'caijing',
//       script: './start.production.sh',
//     }
//   ],
// };

module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js --dotenv ./.env.production',
      args: 'start'
    }
  ]
}