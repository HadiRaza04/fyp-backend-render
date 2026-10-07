import mongoose from "mongoose";

const dbConnection = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  if (!process.env.MONGODB_URI) {
    console.error("❌ MONGODB_URI is undefined. Check your .env or Environment Variables!");
    throw new Error("MONGODB_URI is missing");
  }

  try {
    mongoose.set("strictQuery", false);

    const db = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      maxPoolSize: 10,
    });

    console.log("✅ Database Connected");
    return db;
  } catch (error) {
    console.error("❌ DB Error: " + error.message);
    throw error;
  }
};

export default dbConnection;





// import mongoose from "mongoose";

// // Cache the connection state across serverless invocations
// let isConnected = 0;

// const dbConnection = async () => {
//   // readyState 1 means Mongoose is already connected
//   if (mongoose.connection.readyState >= 1) {
//     return;
//   }

//   if (!process.env.MONGODB_URI) {
//     console.error("❌ MONGODB_URI is undefined. Check your Vercel Environment Variables!");
//     return;
//   }

//   try {
//     mongoose.set("strictQuery", false);

//     const db = await mongoose.connect(process.env.MONGODB_URI, {
//       serverSelectionTimeoutMS: 5000,
//       // Prevents connection pool starvation in serverless environments
//       maxPoolSize: 10,
//     });

//     isConnected = db.connections[0].readyState;
//     console.log("Database Connected");
//   } catch (error) {
//     console.error("DB Error: " + error);
//     throw error; // Re-throw so Express middleware knows connection failed
//   }
// };

// export default dbConnection;








// import mongoose from "mongoose";

// const dbConnection = async () => {
//   try {
//     // 1. Log to confirm the variable is actually being read
//     if (!process.env.MONGODB_URI) {
//       console.error("❌ MONGODB_URI is undefined. Check your .env file!");
//     }

//     // 2. Set strictQuery to avoid warnings (optional)
//     mongoose.set("strictQuery", false);
    
//     await mongoose.connect(process.env.MONGODB_URI, {
//       serverSelectionTimeoutMS: 5000, // Fail after 5 seconds instead of 30
//     });
//     console.log("Database Connected");
//   } catch (error) {
//     console.log("DB Error: " + error);
//   }
// };

// export default dbConnection;
