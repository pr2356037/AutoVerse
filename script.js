/* =====================================================
   AUTOVERSE WORLD VEHICLE DATABASE
   Frontend + LocalStorage
===================================================== */


/* =====================================================
   VEHICLE DATABASE

   Format:
   id | name | brand | country | type | category |
   price | engine | power | image
===================================================== */

const vehicles = [

    /* ================= GERMANY ================= */

    {
        id: 1,
        name: "BMW M4",
        brand: "BMW",
        country: "Germany",
        type: "Car",
        category: "Sports",
        price: "₹1.55 Cr",
        engine: "3.0L Twin Turbo",
        power: "503 HP",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=900"
    },

    {
        id: 2,
        name: "BMW M5",
        brand: "BMW",
        country: "Germany",
        type: "Car",
        category: "Luxury",
        price: "₹1.99 Cr",
        engine: "4.4L V8",
        power: "717 HP",
        image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=900"
    },

    {
        id: 3,
        name: "Mercedes AMG GT",
        brand: "Mercedes-Benz",
        country: "Germany",
        type: "Car",
        category: "Sports",
        price: "₹2.71 Cr",
        engine: "4.0L V8",
        power: "577 HP",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=900"
    },

    {
        id: 4,
        name: "Mercedes S-Class",
        brand: "Mercedes-Benz",
        country: "Germany",
        type: "Car",
        category: "Luxury",
        price: "₹1.90 Cr",
        engine: "3.0L",
        power: "429 HP",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=900"
    },

    {
        id: 5,
        name: "Audi RS7",
        brand: "Audi",
        country: "Germany",
        type: "Car",
        category: "Sports",
        price: "₹1.94 Cr",
        engine: "4.0L V8",
        power: "591 HP",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=900"
    },

    {
        id: 6,
        name: "Porsche 911",
        brand: "Porsche",
        country: "Germany",
        type: "Car",
        category: "Sports",
        price: "₹2 Cr",
        engine: "3.0L Turbo",
        power: "443 HP",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=900"
    },

    {
        id: 7,
        name: "Porsche Taycan",
        brand: "Porsche",
        country: "Germany",
        type: "Car",
        category: "Electric",
        price: "₹1.89 Cr",
        engine: "Electric",
        power: "750 HP",
        image: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=900"
    },


    /* ================= ITALY ================= */

    {
        id: 8,
        name: "Ferrari 296 GTB",
        brand: "Ferrari",
        country: "Italy",
        type: "Car",
        category: "Supercar",
        price: "₹5.40 Cr",
        engine: "3.0L V6 Hybrid",
        power: "819 HP",
        image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=900"
    },

    {
        id: 9,
        name: "Lamborghini Revuelto",
        brand: "Lamborghini",
        country: "Italy",
        type: "Car",
        category: "Supercar",
        price: "₹8.89 Cr",
        engine: "6.5L V12 Hybrid",
        power: "1001 HP",
        image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=900"
    },

    {
        id: 10,
        name: "Lamborghini Huracan",
        brand: "Lamborghini",
        country: "Italy",
        type: "Car",
        category: "Supercar",
        price: "₹4 Cr",
        engine: "5.2L V10",
        power: "631 HP",
        image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=900"
    },

    {
        id: 11,
        name: "Maserati MC20",
        brand: "Maserati",
        country: "Italy",
        type: "Car",
        category: "Supercar",
        price: "₹3.65 Cr",
        engine: "3.0L V6",
        power: "621 HP",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=900"
    },

    {
        id: 12,
        name: "Ducati Panigale V4",
        brand: "Ducati",
        country: "Italy",
        type: "Bike",
        category: "Superbike",
        price: "₹27 Lakh",
        engine: "1103cc V4",
        power: "215 HP",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=900"
    },

    {
        id: 13,
        name: "Ducati Streetfighter V4",
        brand: "Ducati",
        country: "Italy",
        type: "Bike",
        category: "Naked",
        price: "₹24 Lakh",
        engine: "1103cc V4",
        power: "208 HP",
        image: "https://images.unsplash.com/photo-1558980394-0c94f2b9c8d8?q=80&w=900"
    },


    /* ================= JAPAN ================= */

    {
        id: 14,
        name: "Toyota Supra",
        brand: "Toyota",
        country: "Japan",
        type: "Car",
        category: "Sports",
        price: "₹85 Lakh",
        engine: "3.0L Turbo",
        power: "382 HP",
        image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=900"
    },

    {
        id: 15,
        name: "Nissan GT-R",
        brand: "Nissan",
        country: "Japan",
        type: "Car",
        category: "Sports",
        price: "₹2.12 Cr",
        engine: "3.8L V6 Twin Turbo",
        power: "565 HP",
        image: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=900"
    },

    {
        id: 16,
        name: "Honda Civic Type R",
        brand: "Honda",
        country: "Japan",
        type: "Car",
        category: "Sports",
        price: "₹46 Lakh",
        engine: "2.0L Turbo",
        power: "315 HP",
        image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=900"
    },

    {
        id: 17,
        name: "Toyota Land Cruiser",
        brand: "Toyota",
        country: "Japan",
        type: "Car",
        category: "SUV",
        price: "₹2.10 Cr",
        engine: "3.5L V6",
        power: "409 HP",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=900"
    },

    {
        id: 18,
        name: "Lexus LX",
        brand: "Lexus",
        country: "Japan",
        type: "Car",
        category: "Luxury",
        price: "₹2.82 Cr",
        engine: "3.5L V6",
        power: "409 HP",
        image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=900"
    },

    {
        id: 19,
        name: "Yamaha R1",
        brand: "Yamaha",
        country: "Japan",
        type: "Bike",
        category: "Superbike",
        price: "₹20 Lakh",
        engine: "998cc",
        power: "200 HP",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=900"
    },

    {
        id: 20,
        name: "Kawasaki Ninja H2",
        brand: "Kawasaki",
        country: "Japan",
        type: "Bike",
        category: "Superbike",
        price: "₹79 Lakh",
        engine: "998cc Supercharged",
        power: "228 HP",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=900"
    },

    {
        id: 21,
        name: "Suzuki Hayabusa",
        brand: "Suzuki",
        country: "Japan",
        type: "Bike",
        category: "Sports",
        price: "₹17 Lakh",
        engine: "1340cc",
        power: "187 HP",
        image: "https://images.unsplash.com/photo-1558980664-10ea14c2f0a0?q=80&w=900"
    },


    /* ================= USA ================= */

    {
        id: 22,
        name: "Ford Mustang",
        brand: "Ford",
        country: "USA",
        type: "Car",
        category: "Sports",
        price: "₹75 Lakh",
        engine: "5.0L V8",
        power: "480 HP",
        image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?q=80&w=900"
    },

    {
        id: 23,
        name: "Chevrolet Corvette",
        brand: "Chevrolet",
        country: "USA",
        type: "Car",
        category: "Sports",
        price: "₹1.20 Cr",
        engine: "6.2L V8",
        power: "495 HP",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=900"
    },

    {
        id: 24,
        name: "Tesla Model S",
        brand: "Tesla",
        country: "USA",
        type: "Car",
        category: "Electric",
        price: "₹80 Lakh",
        engine: "Electric",
        power: "1020 HP",
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=900"
    },

    {
        id: 25,
        name: "Tesla Model X",
        brand: "Tesla",
        country: "USA",
        type: "Car",
        category: "Electric",
        price: "₹1 Cr",
        engine: "Electric",
        power: "1020 HP",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=900"
    },

    {
        id: 26,
        name: "Jeep Wrangler",
        brand: "Jeep",
        country: "USA",
        type: "Car",
        category: "Off-Road",
        price: "₹67 Lakh",
        engine: "2.0L Turbo",
        power: "268 HP",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=900"
    },

    {
        id: 27,
        name: "Ford F-150",
        brand: "Ford",
        country: "USA",
        type: "Pickup",
        category: "Pickup",
        price: "₹55 Lakh",
        engine: "5.0L V8",
        power: "400 HP",
        image: "https://images.unsplash.com/photo-1551830820-330a71b99659?q=80&w=900"
    },

    {
        id: 28,
        name: "GMC Hummer EV",
        brand: "GMC",
        country: "USA",
        type: "Pickup",
        category: "Electric",
        price: "₹1 Cr",
        engine: "Electric",
        power: "1000 HP",
        image: "https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?q=80&w=900"
    },


    /* ================= UK ================= */

    {
        id: 29,
        name: "Range Rover",
        brand: "Land Rover",
        country: "UK",
        type: "Car",
        category: "Luxury",
        price: "₹2.39 Cr",
        engine: "4.4L V8",
        power: "523 HP",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=900"
    },

    {
        id: 30,
        name: "Bentley Continental GT",
        brand: "Bentley",
        country: "UK",
        type: "Car",
        category: "Luxury",
        price: "₹5.23 Cr",
        engine: "4.0L V8",
        power: "542 HP",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=900"
    },

    {
        id: 31,
        name: "Rolls-Royce Phantom",
        brand: "Rolls-Royce",
        country: "UK",
        type: "Car",
        category: "Luxury",
        price: "₹10 Cr",
        engine: "6.75L V12",
        power: "563 HP",
        image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=900"
    },

    {
        id: 32,
        name: "McLaren 750S",
        brand: "McLaren",
        country: "UK",
        type: "Car",
        category: "Supercar",
        price: "₹5 Cr",
        engine: "4.0L V8",
        power: "740 HP",
        image: "https://images.unsplash.com/photo-1627454820516-dc767bcb4d3c?q=80&w=900"
    },

    {
        id: 33,
        name: "Triumph Street Triple",
        brand: "Triumph",
        country: "UK",
        type: "Bike",
        category: "Naked",
        price: "₹12 Lakh",
        engine: "765cc",
        power: "118 HP",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=900"
    },

    {
        id: 34,
        name: "Triumph Tiger 900",
        brand: "Triumph",
        country: "UK",
        type: "Bike",
        category: "Adventure",
        price: "₹15 Lakh",
        engine: "888cc",
        power: "94 HP",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=900"
    },


    /* ================= INDIA ================= */

    {
        id: 35,
        name: "Tata Nexon",
        brand: "Tata",
        country: "India",
        type: "Car",
        category: "SUV",
        price: "₹15 Lakh",
        engine: "1.2L Turbo",
        power: "118 HP",
        image: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=900"
    },

    {
        id: 36,
        name: "Mahindra Thar",
        brand: "Mahindra",
        country: "India",
        type: "Car",
        category: "Off-Road",
        price: "₹18 Lakh",
        engine: "2.0L Turbo",
        power: "150 HP",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=900"
    },

    {
        id: 37,
        name: "Mahindra Scorpio",
        brand: "Mahindra",
        country: "India",
        type: "Car",
        category: "SUV",
        price: "₹25 Lakh",
        engine: "2.2L Diesel",
        power: "172 HP",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=900"
    },

    {
        id: 38,
        name: "Tata Harrier",
        brand: "Tata",
        country: "India",
        type: "Car",
        category: "SUV",
        price: "₹25 Lakh",
        engine: "2.0L Diesel",
        power: "168 HP",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=900"
    },

    {
        id: 39,
        name: "Royal Enfield Classic 350",
        brand: "Royal Enfield",
        country: "India",
        type: "Bike",
        category: "Cruiser",
        price: "₹2 Lakh",
        engine: "349cc",
        power: "20 HP",
        image: "https://images.unsplash.com/photo-1558980664-10ea14c2f0a0?q=80&w=900"
    },

    {
        id: 40,
        name: "Royal Enfield Himalayan",
        brand: "Royal Enfield",
        country: "India",
        type: "Bike",
        category: "Adventure",
        price: "₹3.5 Lakh",
        engine: "452cc",
        power: "40 HP",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=900"
    },

    {
        id: 41,
        name: "KTM Duke 390",
        brand: "KTM",
        country: "India",
        type: "Bike",
        category: "Naked",
        price: "₹3 Lakh",
        engine: "399cc",
        power: "45 HP",
        image: "https://images.unsplash.com/photo-1558980394-0c94f2b9c8d8?q=80&w=900"
    },

    {
        id: 42,
        name: "TVS Apache RR310",
        brand: "TVS",
        country: "India",
        type: "Bike",
        category: "Sports",
        price: "₹3 Lakh",
        engine: "312cc",
        power: "38 HP",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=900"
    },


    /* ================= FRANCE ================= */

    {
        id: 43,
        name: "Bugatti Chiron",
        brand: "Bugatti",
        country: "France",
        type: "Car",
        category: "Supercar",
        price: "₹20 Cr",
        engine: "8.0L W16",
        power: "1479 HP",
        image: "https://images.unsplash.com/photo-1566023888470-3b8f7f5f9c7f?q=80&w=900"
    },

    {
        id: 44,
        name: "Bugatti Mistral",
        brand: "Bugatti",
        country: "France",
        type: "Car",
        category: "Supercar",
        price: "₹40 Cr",
        engine: "8.0L W16",
        power: "1600 HP",
        image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=900"
    },

    {
        id: 45,
        name: "Peugeot 508",
        brand: "Peugeot",
        country: "France",
        type: "Car",
        category: "Luxury",
        price: "₹40 Lakh",
        engine: "1.6L Hybrid",
        power: "225 HP",
        image: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=900"
    },


    /* ================= SWEDEN ================= */

    {
        id: 46,
        name: "Volvo XC90",
        brand: "Volvo",
        country: "Sweden",
        type: "Car",
        category: "Luxury",
        price: "₹1.05 Cr",
        engine: "2.0L Hybrid",
        power: "455 HP",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=900"
    },

    {
        id: 47,
        name: "Koenigsegg Jesko",
        brand: "Koenigsegg",
        country: "Sweden",
        type: "Car",
        category: "Supercar",
        price: "₹25 Cr",
        engine: "5.0L V8",
        power: "1600 HP",
        image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=900"
    },


    /* ================= SOUTH KOREA ================= */

    {
        id: 48,
        name: "Hyundai Ioniq 5",
        brand: "Hyundai",
        country: "South Korea",
        type: "Car",
        category: "Electric",
        price: "₹46 Lakh",
        engine: "Electric",
        power: "320 HP",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=900"
    },

    {
        id: 49,
        name: "Kia EV6",
        brand: "Kia",
        country: "South Korea",
        type: "Car",
        category: "Electric",
        price: "₹65 Lakh",
        engine: "Electric",
        power: "576 HP",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=900"
    },

    {
        id: 50,
        name: "Genesis G90",
        brand: "Genesis",
        country: "South Korea",
        type: "Car",
        category: "Luxury",
        price: "₹1 Cr",
        engine: "3.5L V6",
        power: "375 HP",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=900"
    },


    /* ================= CHINA ================= */

    {
        id: 51,
        name: "BYD Seal",
        brand: "BYD",
        country: "China",
        type: "Car",
        category: "Electric",
        price: "₹45 Lakh",
        engine: "Electric",
        power: "523 HP",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=900"
    },

    {
        id: 52,
        name: "BYD Atto 3",
        brand: "BYD",
        country: "China",
        type: "Car",
        category: "Electric",
        price: "₹34 Lakh",
        engine: "Electric",
        power: "204 HP",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=900"
    },


    /* ================= TRUCKS ================= */

    {
        id: 60,
        name: "Volvo FH",
        brand: "Volvo",
        country: "Sweden",
        type: "Truck",
        category: "Heavy Truck",
        price: "₹80 Lakh",
        engine: "13L Diesel",
        power: "500 HP",
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d8?q=80&w=900"
    },

    {
        id: 61,
        name: "Scania R Series",
        brand: "Scania",
        country: "Sweden",
        type: "Truck",
        category: "Heavy Truck",
        price: "₹90 Lakh",
        engine: "13L Diesel",
        power: "500 HP",
        image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=900"
    },

    {
        id: 62,
        name: "Mercedes Actros",
        brand: "Mercedes-Benz",
        country: "Germany",
        type: "Truck",
        category: "Heavy Truck",
        price: "₹85 Lakh",
        engine: "13L Diesel",
        power: "530 HP",
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d8?q=80&w=900"
    },

    {
        id: 63,
        name: "Tata Prima",
        brand: "Tata",
        country: "India",
        type: "Truck",
        category: "Heavy Truck",
        price: "₹45 Lakh",
        engine: "5L Diesel",
        power: "180 HP",
        image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=900"
    },


    /* ================= BUSES ================= */

    {
        id: 70,
        name: "Volvo 9400",
        brand: "Volvo",
        country: "Sweden",
        type: "Bus",
        category: "Luxury Bus",
        price: "₹1.5 Cr",
        engine: "Diesel",
        power: "340 HP",
        image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=900"
    },

    {
        id: 71,
        name: "Mercedes Tourismo",
        brand: "Mercedes-Benz",
        country: "Germany",
        type: "Bus",
        category: "Tourist Bus",
        price: "₹2 Cr",
        engine: "Diesel",
        power: "394 HP",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=900"
    },

    {
        id: 72,
        name: "Tata Starbus",
        brand: "Tata",
        country: "India",
        type: "Bus",
        category: "City Bus",
        price: "₹40 Lakh",
        engine: "Diesel",
        power: "125 HP",
        image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=900"
    },


    /* ================= VANS ================= */

    {
        id: 80,
        name: "Mercedes Sprinter",
        brand: "Mercedes-Benz",
        country: "Germany",
        type: "Van",
        category: "Van",
        price: "₹50 Lakh",
        engine: "2.0L Diesel",
        power: "170 HP",
        image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=900"
    },

    {
        id: 81,
        name: "Ford Transit",
        brand: "Ford",
        country: "USA",
        type: "Van",
        category: "Van",
        price: "₹45 Lakh",
        engine: "2.0L Diesel",
        power: "170 HP",
        image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=900"
    },

    {
        id: 82,
        name: "Toyota HiAce",
        brand: "Toyota",
        country: "Japan",
        type: "Van",
        category: "Van",
        price: "₹40 Lakh",
        engine: "2.8L Diesel",
        power: "174 HP",
        image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=900"
    },


    /* ================= MORE PICKUPS ================= */

    {
        id: 90,
        name: "Toyota Hilux",
        brand: "Toyota",
        country: "Japan",
        type: "Pickup",
        category: "Pickup",
        price: "₹45 Lakh",
        engine: "2.8L Diesel",
        power: "201 HP",
        image: "https://images.unsplash.com/photo-1551830820-330a71b99659?q=80&w=900"
    },

    {
        id: 91,
        name: "Ford Ranger",
        brand: "Ford",
        country: "USA",
        type: "Pickup",
        category: "Pickup",
        price: "₹50 Lakh",
        engine: "3.0L V6",
        power: "405 HP",
        image: "https://images.unsplash.com/photo-1551830820-330a71b99659?q=80&w=900"
    },

    {
        id: 92,
        name: "Isuzu D-Max",
        brand: "Isuzu",
        country: "Japan",
        type: "Pickup",
        category: "Pickup",
        price: "₹30 Lakh",
        engine: "3.0L Diesel",
        power: "190 HP",
        image: "https://images.unsplash.com/photo-1551830820-330a71b99659?q=80&w=900"
    }

];


/* =====================================================
   LOCAL STORAGE KEYS
===================================================== */

const BLOG_KEY = "autoverse_world_blogs";
const REVIEW_KEY = "autoverse_world_reviews";
const GARAGE_KEY = "autoverse_world_garage";
const THEME_KEY = "autoverse_world_theme";


let currentType = "All";


/* =====================================================
   INITIALIZATION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    createFilters();

    displayVehicles();

    displayBlogs();

    displayReviews();

    displayGarage();

    loadCompareOptions();

    loadTheme();

    updateStats();

});


/* =====================================================
   CREATE FILTER OPTIONS
===================================================== */

function createFilters() {

    const countries =
        [...new Set(
            vehicles.map(vehicle => vehicle.country)
        )].sort();

    const brands =
        [...new Set(
            vehicles.map(vehicle => vehicle.brand)
        )].sort();

    const categories =
        [...new Set(
            vehicles.map(vehicle => vehicle.category)
        )].sort();


    const countryFilter =
        document.getElementById("countryFilter");

    const brandFilter =
        document.getElementById("brandFilter");

    const categoryFilter =
        document.getElementById("categoryFilter");


    countries.forEach(country => {

        const option =
            document.createElement("option");

        option.value = country;
        option.textContent = country;

        countryFilter.appendChild(option);

    });


    brands.forEach(brand => {

        const option =
            document.createElement("option");

        option.value = brand;
        option.textContent = brand;

        brandFilter.appendChild(option);

    });


    categories.forEach(category => {

        const option =
            document.createElement("option");

        option.value = category;
        option.textContent = category;

        categoryFilter.appendChild(option);

    });

}


/* =====================================================
   TYPE FILTER
===================================================== */

function setType(type) {

    currentType = type;

    displayVehicles();

}


/* =====================================================
   VEHICLE FILTER
===================================================== */

function getFilteredVehicles() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    const country =
        document.getElementById(
            "countryFilter"
        ).value;


    const brand =
        document.getElementById(
            "brandFilter"
        ).value;


    const category =
        document.getElementById(
            "categoryFilter"
        ).value;


    return vehicles.filter(vehicle => {

        const typeMatch =
            currentType === "All" ||
            vehicle.type === currentType;


        const countryMatch =
            country === "All" ||
            vehicle.country === country;


        const brandMatch =
            brand === "All" ||
            vehicle.brand === brand;


        const categoryMatch =
            category === "All" ||
            vehicle.category === category;


        const searchMatch =
            vehicle.name
                .toLowerCase()
                .includes(search)

            ||

            vehicle.brand
                .toLowerCase()
                .includes(search)

            ||

            vehicle.country
                .toLowerCase()
                .includes(search)

            ||

            vehicle.category
                .toLowerCase()
                .includes(search);


        return (
            typeMatch &&
            countryMatch &&
            brandMatch &&
            categoryMatch &&
            searchMatch
        );

    });

}


/* =====================================================
   DISPLAY VEHICLES
===================================================== */

function displayVehicles() {

    const grid =
        document.getElementById(
            "vehicleGrid"
        );


    const list =
        getFilteredVehicles();


    grid.innerHTML = "";


    if (list.length === 0) {

        grid.innerHTML = `
            <div class="empty">
                <h3>No vehicles found</h3>
                <p>Try another search or filter.</p>
            </div>
        `;

        return;
    }


    list.forEach(vehicle => {

        const card =
            document.createElement("article");


        card.className =
            "vehicle-card";


        card.innerHTML = `

            <img
                class="vehicle-image"
                src="${vehicle.image}"
                alt="${vehicle.name}"
                onerror="imageError(this)"
            >

            <div class="vehicle-info">

                <h3>
                    ${vehicle.name}
                </h3>

                <p>
                    🏷️ ${vehicle.brand}
                </p>

                <p>
                    🌍 ${vehicle.country}
                </p>

                <p>
                    ⚡ ${vehicle.power}
                </p>

                <p>
                    💰 ${vehicle.price}
                </p>

                <div class="vehicle-buttons">

                    <button
                        onclick="showVehicle(${vehicle.id})">
                        Details
                    </button>

                    <button
                        onclick="addGarage(${vehicle.id})">
                        ❤️ Garage
                    </button>

                </div>

            </div>

        `;


        grid.appendChild(card);

    });

}


/* =====================================================
   SEARCH / FILTER
===================================================== */

function applyFilters() {

    displayVehicles();

}


function resetFilters() {

    currentType = "All";

    document.getElementById(
        "searchInput"
    ).value = "";


    document.getElementById(
        "countryFilter"
    ).value = "All";


    document.getElementById(
        "brandFilter"
    ).value = "All";


    document.getElementById(
        "categoryFilter"
    ).value = "All";


    displayVehicles();

}


/* =====================================================
   IMAGE FALLBACK
===================================================== */

function imageError(image) {

    image.src =
        "https://via.placeholder.com/900x600?text=AutoVerse";

}


/* =====================================================
   VEHICLE MODAL
===================================================== */

function showVehicle(id) {

    const vehicle =
        vehicles.find(
            item => item.id === id
        );


    if (!vehicle) return;


    const modal =
        document.getElementById(
            "vehicleModal"
        );


    const body =
        document.getElementById(
            "modalBody"
        );


    body.innerHTML = `

        <img
            class="modal-image"
            src="${vehicle.image}"
            onerror="imageError(this)"
        >

        <h2>
            ${vehicle.name}
        </h2>

        <p>
            <b>Brand:</b>
            ${vehicle.brand}
        </p>

        <p>
            <b>Country:</b>
            ${vehicle.country}
        </p>

        <p>
            <b>Type:</b>
            ${vehicle.type}
        </p>

        <p>
            <b>Category:</b>
            ${vehicle.category}
        </p>

        <p>
            <b>Engine:</b>
            ${vehicle.engine}
        </p>

        <p>
            <b>Power:</b>
            ${vehicle.power}
        </p>

        <p>
            <b>Price:</b>
            ${vehicle.price}
        </p>

        <br>

        <button
            onclick="addGarage(${vehicle.id})">
            ❤️ Add To Garage
        </button>

    `;


    modal.style.display = "flex";

}


function closeModal() {

    document.getElementById(
        "vehicleModal"
    ).style.display = "none";

}


window.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById(
                "vehicleModal"
            );


        if (event.target === modal) {

            closeModal();

        }

    }
);


/* =====================================================
   GARAGE
===================================================== */

function getGarage() {

    try {

        return JSON.parse(
            localStorage.getItem(
                GARAGE_KEY
            )
        ) || [];

    } catch {

        return [];

    }

}


function addGarage(id) {

    const garage =
        getGarage();


    if (garage.includes(id)) {

        alert(
            "This vehicle is already in your garage."
        );

        return;

    }


    garage.push(id);


    localStorage.setItem(
        GARAGE_KEY,
        JSON.stringify(garage)
    );


    displayGarage();

    alert(
        "Vehicle added to My Garage!"
    );

}


function removeGarage(id) {

    let garage =
        getGarage();


    garage =
        garage.filter(
            vehicleId => vehicleId !== id
        );


    localStorage.setItem(
        GARAGE_KEY,
        JSON.stringify(garage)
    );


    displayGarage();

}


function displayGarage() {

    const container =
        document.getElementById(
            "garageList"
        );


    const garage =
        getGarage();


    container.innerHTML = "";


    if (garage.length === 0) {

        container.innerHTML = `
            <div class="garage-card">
                <h3>Your garage is empty 🚗</h3>
                <p>
                    Add vehicles from the world database.
                </p>
            </div>
        `;

        return;
    }


    garage.forEach(id => {

        const vehicle =
            vehicles.find(
                item => item.id === id
            );


        if (!vehicle) return;


        const card =
            document.createElement("div");


        card.className =
            "garage-card";


        card.innerHTML = `

            <h3>
                ${vehicle.name}
            </h3>

            <p>
                ${vehicle.brand}
            </p>

            <p>
                ${vehicle.country}
            </p>

            <button
                onclick="showVehicle(${vehicle.id})">
                View
            </button>

            <button
                onclick="removeGarage(${vehicle.id})">
                Remove
            </button>

        `;


        container.appendChild(card);

    });

}


/* =====================================================
   BLOG SYSTEM
===================================================== */

function getBlogs() {

    try {

        return JSON.parse(
            localStorage.getItem(
                BLOG_KEY
            )
        ) || [];

    } catch {

        return [];

    }

}


function displayBlogs() {

    const container =
        document.getElementById(
            "blogList"
        );


    const blogs =
        getBlogs();


    container.innerHTML = "";


    if (blogs.length === 0) {

        container.innerHTML = `
            <div class="blog-card">
                <h3>No blogs yet</h3>
                <p>
                    Publish the first AutoVerse blog.
                </p>
            </div>
        `;

        return;

    }


    blogs.forEach(blog => {

        const card =
            document.createElement("article");


        card.className =
            "blog-card";


        card.innerHTML = `

            <h3>
                ${escapeHTML(blog.title)}
            </h3>

            <p>
                🚗
                ${escapeHTML(
                    blog.vehicle || "Automobile"
                )}
            </p>

            <p>
                ${escapeHTML(blog.description)}
            </p>

            <small>
                ✍️ By
                ${escapeHTML(blog.author)}
            </small>

        `;


        container.appendChild(card);

    });

}


document
    .getElementById("blogForm")
    .addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const blogs =
                getBlogs();


            const blog = {

                title:
                    document
                        .getElementById(
                            "blogTitle"
                        )
                        .value,

                author:
                    document
                        .getElementById(
                            "blogAuthor"
                        )
                        .value,

                vehicle:
                    document
                        .getElementById(
                            "blogVehicle"
                        )
                        .value,

                description:
                    document
                        .getElementById(
                            "blogDescription"
                        )
                        .value

            };


            blogs.unshift(blog);


            localStorage.setItem(
                BLOG_KEY,
                JSON.stringify(blogs)
            );


            this.reset();

            displayBlogs();

            updateStats();


            alert(
                "Blog published successfully!"
            );

        }
    );


/* =====================================================
   REVIEW SYSTEM
===================================================== */

function getReviews() {

    try {

        return JSON.parse(
            localStorage.getItem(
                REVIEW_KEY
            )
        ) || [];

    } catch {

        return [];

    }

}


function displayReviews() {

    const container =
        document.getElementById(
            "reviewList"
        );


    const reviews =
        getReviews();


    container.innerHTML = "";


    if (reviews.length === 0) {

        container.innerHTML = `
            <div class="review-card">
                <h3>No reviews yet</h3>
                <p>
                    Be the first person to review a vehicle.
                </p>
            </div>
        `;

        return;

    }


    reviews.forEach(review => {

        const card =
            document.createElement("article");


        card.className =
            "review-card";


        card.innerHTML = `

            <h3>
                ${escapeHTML(
                    review.vehicle
                )}
            </h3>

            <p>
                ${"⭐".repeat(
                    Number(review.rating)
                )}
            </p>

            <p>
                ${escapeHTML(
                    review.opinion
                )}
            </p>

            <small>
                By
                ${escapeHTML(
                    review.author
                )}
            </small>

        `;


        container.appendChild(card);

    });

}


document
    .getElementById("reviewForm")
    .addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const reviews =
                getReviews();


            const review = {

                author:
                    document
                        .getElementById(
                            "reviewAuthor"
                        )
                        .value,

                vehicle:
                    document
                        .getElementById(
                            "reviewVehicle"
                        )
                        .value,

                opinion:
                    document
                        .getElementById(
                            "reviewOpinion"
                        )
                        .value,

                rating:
                    Number(
                        document
                            .getElementById(
                                "reviewRating"
                            )
                            .value
                    )

            };


            reviews.unshift(review);


            localStorage.setItem(
                REVIEW_KEY,
                JSON.stringify(reviews)
            );


            this.reset();


            displayReviews();

            updateStats();


            alert(
                "Review submitted successfully!"
            );

        }
    );


/* =====================================================
   COMPARE SYSTEM
===================================================== */

function loadCompareOptions() {

    const one =
        document.getElementById(
            "compareOne"
        );


    const two =
        document.getElementById(
            "compareTwo"
        );


    one.innerHTML =
        `<option value="">Select Vehicle 1</option>`;


    two.innerHTML =
        `<option value="">Select Vehicle 2</option>`;


    vehicles.forEach(vehicle => {

        const option1 =
            document.createElement("option");


        option1.value =
            vehicle.id;


        option1.textContent =
            vehicle.name;


        const option2 =
            option1.cloneNode(true);


        one.appendChild(option1);

        two.appendChild(option2);

    });

}


function compareVehicles() {

    const id1 =
        Number(
            document.getElementById(
                "compareOne"
            ).value
        );


    const id2 =
        Number(
            document.getElementById(
                "compareTwo"
            ).value
        );


    const result =
        document.getElementById(
            "compareResult"
        );


    if (!id1 || !id2) {

        result.innerHTML =
            "<p>Please select two vehicles.</p>";

        return;

    }


    if (id1 === id2) {

        result.innerHTML =
            "<p>Please select two different vehicles.</p>";

        return;

    }


    const first =
        vehicles.find(
            vehicle => vehicle.id === id1
        );


    const second =
        vehicles.find(
            vehicle => vehicle.id === id2
        );


    result.innerHTML = `

        <table class="compare-table">

            <tr>
                <th>Feature</th>
                <th>${first.name}</th>
                <th>${second.name}</th>
            </tr>

            <tr>
                <td>Brand</td>
                <td>${first.brand}</td>
                <td>${second.brand}</td>
            </tr>

            <tr>
                <td>Country</td>
                <td>${first.country}</td>
                <td>${second.country}</td>
            </tr>

            <tr>
                <td>Type</td>
                <td>${first.type}</td>
                <td>${second.type}</td>
            </tr>

            <tr>
                <td>Category</td>
                <td>${first.category}</td>
                <td>${second.category}</td>
            </tr>

            <tr>
                <td>Engine</td>
                <td>${first.engine}</td>
                <td>${second.engine}</td>
            </tr>

            <tr>
                <td>Power</td>
                <td>${first.power}</td>
                <td>${second.power}</td>
            </tr>

            <tr>
                <td>Price</td>
                <td>${first.price}</td>
                <td>${second.price}</td>
            </tr>

        </table>

    `;

}


/* =====================================================
   EMI CALCULATOR
===================================================== */

function calculateEMI() {

    const principal =
        Number(
            document.getElementById(
                "loanAmount"
            ).value
        );


    const rate =
        Number(
            document.getElementById(
                "interestRate"
            ).value
        );


    const years =
        Number(
            document.getElementById(
                "loanYears"
            ).value
        );


    const result =
        document.getElementById(
            "emiResult"
        );


    if (
        principal <= 0 ||
        rate < 0 ||
        years <= 0
    ) {

        result.textContent =
            "Please enter valid values.";

        return;

    }


    const months =
        years * 12;


    let emi;


    if (rate === 0) {

        emi =
            principal / months;

    } else {

        const monthlyRate =
            rate / 12 / 100;


        emi =
            principal *
            monthlyRate *
            Math.pow(
                1 + monthlyRate,
                months
            )
            /
            (
                Math.pow(
                    1 + monthlyRate,
                    months
                ) - 1
            );

    }


    result.textContent =
        "Monthly EMI: ₹" +
        Math.round(emi)
            .toLocaleString("en-IN");

}


/* =====================================================
   DARK MODE
===================================================== */

function toggleTheme() {

    document.body.classList.toggle(
        "dark"
    );


    const theme =
        document.body.classList.contains(
            "dark"
        )
            ? "dark"
            : "light";


    localStorage.setItem(
        THEME_KEY,
        theme
    );

}


function loadTheme() {

    const theme =
        localStorage.getItem(
            THEME_KEY
        );


    if (theme === "dark") {

        document.body.classList.add(
            "dark"
        );

    }

}


/* =====================================================
   STATISTICS
===================================================== */

function updateStats() {

    const brands =
        new Set(
            vehicles.map(
                vehicle => vehicle.brand
            )
        );


    const countries =
        new Set(
            vehicles.map(
                vehicle => vehicle.country
            )
        );


    document.getElementById(
        "vehicleCount"
    ).textContent =
        vehicles.length;


    document.getElementById(
        "brandCount"
    ).textContent =
        brands.size;


    document.getElementById(
        "countryCount"
    ).textContent =
        countries.size;


    document.getElementById(
        "blogCount"
    ).textContent =
        getBlogs().length;

}


/* =====================================================
   NAVIGATION
===================================================== */

function goTo(id) {

    const section =
        document.getElementById(id);


    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =====================================================
   SECURITY HELPER
===================================================== */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}