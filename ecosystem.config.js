module.exports = {
  apps: [
    {
      name: 'fe-server',
      exec_mode: 'cluster',
      instances: '2',
      script: 'npm',
      args: 'run start',
    }
  ]
}