
const sampleListings = [
  {
    title: "Luxury Beachfront Villa",
    description: "Beautiful villa with direct access to the beach",
    image: {
      url: "https://a0.muscache.com/im/pictures/fcaba021-2b0f-4794-9d08-675e3921fc96.jpg?im_w=720",
      filename: "listingimage",
    },
    price: 2500,
    location: "Coastal City",
    country: "United States",
  },
  {
    title: "City Center Loft",
    description: "Modern loft apartment in the heart of downtown",
    image: {
      url: "https://a0.muscache.com/im/pictures/709372cd-033b-4b9a-8c01-cc46fc70c851.jpg?im_w=720",
      filename: "listingimage",
    },
    price: 1800,
    location: "City Center",
    country: "United States",
  },
  {
    title: "Mountain Retreat Cabin",
    description: "Cozy cabin nestled in the mountains",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-53436410/original/2dfebfdc-c502-4e55-b5f8-6ae6bd056de0.png?im_w=720",
      filename: "listingimage",
    },
    price: 1200,
    location: "Mountain Village",
    country: "Canada",
  },
  {
    title: "Seaside Cottage",
    description: "Charming cottage by the sea with panoramic views",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-53436410/original/2dfebfdc-c502-4e55-b5f8-6ae6bd056de0.png?im_w=720",
      filename: "listingimage",
    },
    price: 1500,
    location: "Coastal Village",
    country: "United Kingdom",
  },
  {
    title: "Urban Penthouse",
    description: "Spacious penthouse with skyline views",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-1132297101486898149/original/5c5715a6-4d57-4a9f-b49f-3972ff87855a.jpeg?im_w=720",
      filename: "listingimage",
    },
    price: 3000,
    location: "Downtown",
    country: "Australia",
  },
  {
    title: "Historic Townhouse",
    description: "Elegant townhouse in a historic district",
    image: {
      url: "https://a0.muscache.com/im/pictures/f928f26f-f9af-4f2e-aad3-5de5ee3950a8.jpg?im_w=720",
      filename: "listingimage",
    },
    price: 2800,
    location: "Historic District",
    country: "United States",
  },
  {
    title: "Lakefront Retreat",
    description: "Peaceful retreat overlooking a serene lake",
    image: {
      url: "https://a0.muscache.com/im/pictures/f928f26f-f9af-4f2e-aad3-5de5ee3950a8.jpg?im_w=720",
      filename: "listingimage",
    },
    price: 2000,
    location: "Lakeside",
    country: "Canada",
  },
  {
    title: "Ski Chalet",
    description: "Cozy chalet near ski slopes",
    image: {
      url: "https://cdn.pixabay.com/photo/2015/12/08/00/26/cottage-1081704_960_720.jpg",
      filename: "listingimage",
    },
    price: 1700,
    location: "Bhimtal Lake",
    country: "India",
  },
  {
    title: "Rural Farmhouse",
    description: "Quaint farmhouse surrounded by fields",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-654001690497595692/original/94605df9-10d9-4082-ad2d-3b11ec519386.jpeg?im_w=720",
      filename: "listingimage",
    },
    price: 1100,
    location: "Badowala",
    country: "India",
  },
  {
    title: "Modern City Apartment",
    description: "Contemporary apartment with city views",
    image: {
      url: "https://a0.muscache.com/im/pictures/8e496e91-3671-4cd6-a06d-8a385c509fc8.jpg?im_w=720",
      filename: "listingimage",
    },
    price: 1900,
    location: "Hawala Kalan",
    country: "India",
  },
  {
    title: "Desert Oasis Villa",
    description: "Luxurious villa oasis in the desert",
    image: {
      url: "https://a0.muscache.com/im/pictures/89565da2-41b0-443f-84a6-62930398d3cd.jpg?im_w=720",
      filename: "listingimage",
    },
    price: 2200,
    location: "Munnar",
    country: "India",
  },
  {
    title: "Forest Cabin",
    description: "Secluded cabin surrounded by forest",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-878033109978771517/original/7df8c5c7-86d0-41d6-b98e-f5b885f9526c.jpeg?im_w=720",
      filename: "listingimage",
    },
    price: 1300,
    location: "Gajar",
    country: "India",
  },
  {
    title: "Island Paradise",
    description: "Exotic island getaway with pristine beaches",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-54392028/original/82b8ac88-cca4-4e5b-84c6-aa7ac6eae5ca.jpeg?im_w=720",
      filename: "listingimage",
    },
    price: 70000,
    location: "Alifu Dhaalu Atoll",
    country: "Maldives",
  },
  {
    title: "Art Deco Apartment",
    description: "Stylish apartment in an art deco building",
    image: {
      url: "https://a0.muscache.com/im/pictures/68d526f5-dce2-4a9e-ac74-81c48704f024.jpg?im_w=720",
      filename: "listingimage",
    },
    price: 2000,
    location: "Patna",
    country: "India",
  },
  {
    title: "Lakeside Cabin",
    description: "Charming cabin by the lake",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1028612879363610145/original/d656980c-2d7f-49d3-9f86-d92274e1b190.jpeg?im_w=720",
      filename: "listingimage",
    },
    price: 1500,
    location: "Sanguri Gaon",
    country: "India",
  },
  {
    title: "Vineyard Estate",
    description: "Elegant estate surrounded by vineyards",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-820950793239599563/original/d5c1f686-f06a-4b65-9f55-32e19dc0b23f.jpeg?im_w=720",
      filename: "listingimage",
    },
    price: 3200,
    location: "Koh Samui",
    country: "Thailand",
  },
  {
    title: "Beach House",
    description: "Modern beachfront house with panoramic views",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-671469454424494569/original/d9f7f196-a61e-4cee-aedc-4539e8efa51d.jpeg?im_w=720",
      filename: "listingimage",
    },
    price: 2600,
    location: "Beachfront",
    country: "Australia",
  },
  {
    title: "Castle Retreat",
    description: "Fairytale castle with majestic gardens",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-44265625/original/f3a34292-ea0d-4614-9089-3b2ed382e7f5.jpeg?im_w=720",
      filename: "listingimage",
    },
    price: 4000,
    location: "Castle Grounds",
    country: "Germany",
  },
  {
    title: "Skyline View Apartment",
    description: "Apartment with stunning skyline views",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-959900886399113012/original/52585fe8-5524-4607-96be-3dcf16da0723.jpeg?im_w=720",
      filename: "listingimage",
    },
    price: 1800,
    location: "Gurugram",
    country: "India",
  },
  {
    title: "Mountain View Lodge",
    description: "Lodge with breathtaking mountain views",
    image: {
      url: "https://a0.muscache.com/im/pictures/2a1724ca-c902-4c82-b64a-215c2fd1e414.jpg?im_w=720",
      filename: "listingimage",
    },
    price: 2100,
    location: "Mountain Range",
    country: "Canada",
  },
  {
    title: "Luxury Hotel Suite",
    description: "Opulent suite with breathtaking city views",
    image: {
      url: "https://a0.muscache.com/im/pictures/9d60ee10-a63b-47fb-82ca-7759187e5721.jpg?im_w=720",
      filename: "listingimage",
    },
    price: 3500,
    location: "Kainkary South",
    country: "India",
  },
  {
    title: "Coastal Resort Villa",
    description: "Private villa in a serene coastal setting",
    image: {
      url: "https://a0.muscache.com/im/pictures/68047fb5-6262-43a0-947f-b9f6eaf6f765.jpg?im_w=720",
      filename: "listingimage",
    },
    price: 2800,
    location: "Coastal Resort",
    country: "Spain",
  },
  {
    title: "Boutique Guesthouse",
    description: "Charming guesthouse with personalized service",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-654001690497595692/original/94605df9-10d9-4082-ad2d-3b11ec519386.jpeg?im_w=720",
      filename: "listingimage",
    },
    price: 1500,
    location: "Historic District",
    country: "Italy",
  },
  {
    title: "Mountain Lodge",
    description: "Rustic lodge nestled in the mountains",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1056197744907607793/original/d727b657-c9b9-409c-b52e-9259a5e8050f.jpeg?im_w=720",
      filename: "listingimage",
    },
    price: 1900,
    location: "Mountain Retreat",
    country: "Switzerland",
  },
  {
    title: "Urban Apartment",
    description: "Modern apartment with urban vibes",
    image: {
      url: "https://a0.muscache.com/im/pictures/2f40f4c8-b073-4cff-8a74-d97aff86f033.jpg?im_w=720",
      filename: "listingimage",
    },
    price: 2200,
    location: "City Center",
    country: "Japan",
  },
  {
    title: "Historic Castle",
    description: "Ancient castle with rich history",
    image: {
      url: "https://a0.muscache.com/im/pictures/680306af-dcd1-40d5-8a0a-7a9c9b73f1a0.jpg?im_w=720",
      filename: "listingimage",
    },
    price: 4000,
    location: "Castle Grounds",
    country: "Scotland",
  },
  {
    title: "Beachfront Bungalow",
    description: "Quaint bungalow steps away from the beach",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-602361428876709243/original/d1bfa406-86a0-4080-ac6c-6470e14ca5c0.jpeg?im_w=720",
      filename: "listingimage",
    },
    price: 1700,
    location: "Beachfront",
    country: "Thailand",
  },
  {
    title: "Ski Resort Chalet",
    description: "Traditional chalet near ski resort",
    image: {
      url: "https://a0.muscache.com/im/pictures/3494f905-32c6-4994-bd6b-a3e528542c89.jpg?im_w=720",
      filename: "listingimage",
    },
    price: 2500,
    location: "Ski Resort",
    country: "Austria",
  },
  {
    title: "Riverside Retreat",
    description: "Peaceful retreat by the riverbank",
    image: {
      url: "https://a0.muscache.com/im/pictures/8a1cccd0-a956-451a-8dd0-435456902caf.jpg?im_w=720",
      filename: "listingimage",
    },
    price: 1800,
    location: "Riverside",
    country: "Norway",
  },
  {
    title: "Tropical Resort",
    description: "Luxurious resort in a tropical paradise",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-984802808986672474/original/c5036fda-9867-4918-81e2-f4039bfef727.jpeg?im_w=720",
      filename: "listingimage",
    },
    price: 3200,
    location: "Tropical Island",
    country: "Fiji",
  },
];


// Listing.insertMany(sampleListings);


module.exports = { data: sampleListings };