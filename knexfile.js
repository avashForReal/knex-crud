module.exports = {
    development: {
        debug: true,
        client: 'mysql2',
        connection: {
          database: 'bootcamp',
          user:     'avash',
          password: 'eazy',
          port: 3306,
        },
        pool: {
          min: 2,
          max: 10
        },
        migrations: {
          tableName: 'knex_migrations'
        }
      },
    
    //   staging: {
    //     client: 'postgresql',
    //     connection: {
    //       database: 'my_db',
    //       user:     'username',
    //       password: 'password'
    //     },
    //     pool: {
    //       min: 2,
    //       max: 10
    //     },
    //     migrations: {
    //       tableName: 'knex_migrations'
    //     }
    //   },
    
    //   production: {
    //     client: 'postgresql',
    //     connection: {
    //       database: 'my_db',
    //       user:     'username',
    //       password: 'password'
    //     },
    //     pool: {
    //       min: 2,
    //       max: 10
    //     },
    //     migrations: {
    //       tableName: 'knex_migrations'
    //     }
    //   }
}