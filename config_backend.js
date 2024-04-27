    
module.exports = {
    client: {
      // host: "http://localhost:3000",
      host: "https://project-nexus-iitkgp.vercel.app/",
      // port: 3000
    },


    server: {
      // host: "http://localhost:5001",
      host: "https://projectnexus-backend.onrender.com",
      port: "5001"
    },

    database: {
      mongoURI: "mongodb+srv://sunidhimp41:sunidhi@cluster0.gwsqzss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      host: "localhost",
      port: "5000",
      username: "sunidhimp41",
      password: "sunidhi",
    },


    jwt: {
      secret: "ItsSaturdayToday"
    },


    oAuth: { 
      client_id: "",
      client_secret: ""
    },
  }

