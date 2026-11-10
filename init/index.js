// const mongoose  = require("mongoose");
// const data = require("./data.js");
// const Listing = require("../models/listing.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// main()
//     .then(() => {
//         console.log("connected to DB");
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//     async function main() {
//         await mongoose.connect(MONGO_URL);
//     }

//     const initDB = async () => {
//         await  Listing.deleteMany({});
//         await Listing.insertMany(initData.data);
//         console.log("data was initialized");
//     };
//     initDB();
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const sampleListings = [
    {
        title: "Luxury Beach Villa",
        description: "Beautiful villa with ocean view and modern facilities.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        price: 12000,
        location: "Goa",
        country: "India"
    },
    {
        title: "Mountain View Cottage",
        description: "Peaceful cottage surrounded by mountains and nature.",
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
        price: 7000,
        location: "Manali",
        country: "India"
    },
    {
        title: "Modern City Apartment",
        description: "Stylish apartment located in the heart of the city.",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
        price: 5000,
        location: "Mumbai",
        country: "India"
    },
    {
        title: "Forest Wooden Cabin",
        description: "A cozy cabin for a relaxing nature stay.",
        image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
        price: 6000,
        location: "Rishikesh",
        country: "India"
    },
    {
        title: "Royal Palace Stay",
        description: "Experience royal architecture and luxury rooms.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
        price: 15000,
        location: "Jaipur",
        country: "India"
    },
    {
        title: "Lake Side Home",
        description: "Beautiful home near a peaceful lake.",
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
        price: 8000,
        location: "Udaipur",
        country: "India"
    },
    {
    title: "Cozy Hilltop Villa",
    description: "A peaceful villa with amazing mountain views.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    price: 9000,
    location: "Shimla",
    country: "India"
},
{
    title: "Beachfront Paradise Home",
    description: "Relaxing stay with direct access to the beach.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    price: 11000,
    location: "Kerala",
    country: "India"
},
{
    title: "Luxury Farm House",
    description: "Large farmhouse surrounded by greenery.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    price: 8500,
    location: "Punjab",
    country: "India"
},
{
    title: "Modern Glass House",
    description: "Beautiful modern house with stylish interiors.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    price: 14000,
    location: "Bangalore",
    country: "India"
},
{
    title: "River Side Cottage",
    description: "Small cottage beside a peaceful river.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 6000,
    location: "Rishikesh",
    country: "India"
},
{
    title: "Royal Heritage Haveli",
    description: "Traditional royal style stay with heritage charm.",
    image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1",
    price: 13000,
    location: "Jaisalmer",
    country: "India"
},
{
    title: "Snow Mountain Retreat",
    description: "Warm and comfortable home near snowy mountains.",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c",
    price: 10000,
    location: "Manali",
    country: "India"
},
{
    title: "City Skyline Apartment",
    description: "Modern apartment with city views.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    price: 7500,
    location: "Delhi",
    country: "India"
},
{
    title: "Tropical Wooden Villa",
    description: "Wooden villa surrounded by tropical plants.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 9500,
    location: "Goa",
    country: "India"
},
{
    title: "Forest Escape Cabin",
    description: "Private cabin for a peaceful nature holiday.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
    price: 5500,
    location: "Nainital",
    country: "India"
},
{
    title: "Luxury Pool Villa",
    description: "Private villa with swimming pool and garden.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    price: 16000,
    location: "Udaipur",
    country: "India"
},
{
    title: "Countryside Home",
    description: "A calm home away from city noise.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    price: 4500,
    location: "Himachal Pradesh",
    country: "India"
},
{
    title: "Ocean View Apartment",
    description: "Apartment with beautiful ocean sunset views.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 9000,
    location: "Pondicherry",
    country: "India"
},
{
    title: "Designer Luxury House",
    description: "Premium house with elegant design.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    price: 18000,
    location: "Mumbai",
    country: "India"
},
{
    title: "Peaceful Lake House",
    description: "Beautiful lake-side house for relaxing holidays.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 8000,
    location: "Udaipur",
    country: "India"
},
{
    title: "Alpine Mountain Chalet",
    description: "A cozy chalet surrounded by snow-covered mountains.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 14500,
    location: "Zermatt",
    country: "Switzerland"
},
{
    title: "Santorini White Villa",
    description: "Beautiful white villa overlooking the blue Aegean Sea.",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
    price: 22000,
    location: "Santorini",
    country: "Greece"
},
{
    title: "Kyoto Zen House",
    description: "Traditional Japanese home with a peaceful Zen garden.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 12500,
    location: "Kyoto",
    country: "Japan"
},
{
    title: "Paris Luxury Apartment",
    description: "Elegant apartment near the Eiffel Tower.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    price: 21000,
    location: "Paris",
    country: "France"
},
{
    title: "Maldives Water Villa",
    description: "Luxury villa built over crystal-clear ocean water.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    price: 35000,
    location: "Male",
    country: "Maldives"
},
{
    title: "Scottish Castle Stay",
    description: "Historic castle with royal interiors and scenic landscapes.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    price: 26000,
    location: "Edinburgh",
    country: "Scotland"
},
{
    title: "Dubai Skyline Penthouse",
    description: "Luxury penthouse with panoramic Burj Khalifa views.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    price: 32000,
    location: "Dubai",
    country: "UAE"
},
{
    title: "Canadian Lakeside Cabin",
    description: "Wooden cabin beside a peaceful lake surrounded by forests.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
    price: 9800,
    location: "Ontario",
    country: "Canada"
},

{
    title: "Hawaiian Ocean Retreat",
    description: "Relax in a tropical retreat just steps from the beach.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 29000,
    location: "Honolulu",
    country: "USA"
}
];

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(sampleListings);
    console.log("Database initialized");
    mongoose.connection.close();
};

initDB();