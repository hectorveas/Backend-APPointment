import mongoose, { ConnectionOptions } from "mongoose";

function connect(): Promise<typeof mongoose> {
  const mongoUri: string = "mongodb+srv://Appointment:aE9qUF1gAgre4bVb@cluster0.qrd8g.mongodb.net/"; //'mongodb+srv://user:1234@cluster0-emxsf.mongodb.net/backend-ay'
  const nameDB: string = "APPointmentOficial";

  const options: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };
  return mongoose.connect(mongoUri + nameDB, options);
}

export default { connect };
