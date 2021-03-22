import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DB_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost/AgroMarketDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }),
  },
];
