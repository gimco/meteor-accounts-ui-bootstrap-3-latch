Package.describe({
  name: 'gimco:accounts-ui-bootstrap-3-latch',
  summary: 'Latch integration for accounts-ui package',
  version: '1.0.0',
  git: 'https://github.com/gimco/meteor-accounts-ui-bootstrap-3-latch'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'spacebars',
    'templating',
    'session',
    'tracker',
    'ian:accounts-ui-bootstrap-3@1.1.21'
  ], 'client');

  api.use(['gimco:latch@1.0.1', 'service-configuration']);

  api.addFiles([
    'utils.js',
    'accounts_ui_latch.css',
    'accounts_ui_latch_configuration.html',
    'accounts_ui_latch_configuration.js',
    'accounts_ui_latch.html',
    'accounts_ui_latch.js'
  ], 'client');

  api.addFiles('accounts_ui_latch_server.js', 'server');
});
