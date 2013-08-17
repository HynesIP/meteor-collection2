Package.describe({
    summary: "Wraps Meteor.Collection to provide support for automatic validation of insert and update operations on the client and server, plus simple virtual field support."
});

Package.on_use(function(api) {
    api.imply('simple-schema', ['client', 'server']);
    api.use('underscore', ['client', 'server']);
    api.use('deps', 'client');
    api.use('startup', 'client');
    api.add_files(['collection2.js'], ['client', 'server']);
});