const citiesData = [
  {
    name: "Chennai",
    state: "Tamil Nadu",
    coordinates: { lat: 13.0827, lng: 80.2707 },
    heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Gateway to the South",
    description: "Stretched gracefully along the Coromandel Coast of the Bay of Bengal, Chennai is a vibrant metropolis that acts as the cultural, economic, and educational anchor of South India. Lined with monumental Dravidian temples, colonial-era British architecture, and the second-longest urban beach in the world, the city effortlessly balances its massive IT and automotive industries with deeply rooted traditions of Carnatic music, classical Bharatanatyam dance, and historic silk-weaving heritage.",
    famousFor: ["Marina Beach", "Kapaleeshwarar Temple", "Idli Sambhar & Filter Coffee", "Kanchipuram Silk Sarees", "Carnatic Music Festival"],
    bestMonths: ["November", "December", "January", "February"],
    avoidMonths: ["April", "May", "June", "July"],
    tags: ["Coastal", "Heritage", "Metropolitan", "Cultural"],
    transport: {
      airport: "Chennai International Airport (MAA)",
      railwayStation: "Puratchi Thalaivar Dr. M.G. Ramachandran Central Railway Station (MAS) & Egmore (MS)",
      busStand: "Puratchi Thalaivar Dr. M.G.R. Bus Terminus (CMBT)",
      metroAvailable: true,
      localTransport: "Chennai Metro Rail, Suburban Local Trains, Auto-rickshaws, App Cabs, and MTC City Buses"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "044-25383333",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Chennai is systematically recognized as one of the safest metropolitan cities in India, characterized by low violent crime metrics and vigilant local policing.",
      womenSafety: "Extremely safe for solo female travelers due to highly active public spaces; it is simply recommended to prefer app-based cabs or the metro when traveling past 10:30 PM.",
      localBehaviour: "The local populace is highly respectful, conservative yet progressive, deeply helpful, and very comfortable communicating in English.",
      scamAlerts: [
        "Local auto-rickshaw drivers routinely refusing to use electronic meters and quoting highly inflated flat rates to out-of-towners.",
        "Street vendors along the beach charging steep premium prices for basic snacks without displaying price charts."
      ],
      emergencyTips: [
        "Utilize the efficient Chennai Metro or suburban train network to easily bypass hot surface traffic corridors.",
        "Dress respectfully when visiting historic Hindu temples, ensuring shoulders and knees are fully covered."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=S69Z7jVbC1E",
    isActive: true,
    placesToVisit: [
      {
        title: "Marina Beach",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
        description: "An iconic, natural sandy urban beach stretching over 13 kilometers along the city's coastline, perfect for sunset strolls and enjoying local street food.",
        category: "beach",
        timings: "Open 24 Hours",
        entryFee: "Free Entry"
      },
      {
        title: "Kapaleeshwarar Temple",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80",
        description: "A breathtaking 7th-century Hindu temple dedicated to Lord Shiva, showcasing magnificent, intricately carved Dravidian gopuram architecture.",
        category: "temple",
        timings: "05:00 AM - 12:00 PM, 04:00 PM - 09:00 PM",
        entryFee: "Free Entry"
      },
      {
        title: "Government Museum & National Art Gallery",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80",
        description: "A grand, Indo-Saracenic colonial complex housing an invaluable collection of ancient South Indian bronzes and archaeological treasures.",
        category: "monument",
        timings: "09:30 AM - 05:00 PM (Closed on Fridays)",
        entryFee: "₹15 for Indians, ₹250 for Foreign Nationals"
      }
    ]
  },
  {
    name: "Ooty",
    state: "Tamil Nadu",
    coordinates: { lat: 11.4102, lng: 76.6950 },
    heroImage: "https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Queen of Hill Stations",
    description: "Nestled deep within the breathtaking Nilgiri Hills at an altitude of 7,347 feet, Ooty (Udhagamandalam) is a picturesque mountain paradise. Surrounded by extensive terraced tea plantations, aromatic eucalyptus forests, and misty blue valleys, the town features a beautiful colonial layout centered around a scenic lake. It remains an iconic retreat, universally loved for its pleasant cool climate and heritage mountain railway.",
    famousFor: ["Nilgiri Mountain Railway", "Ooty Botanical Gardens", "Homemade Chocolates", "Terraced Tea Estates", "Doddabetta Peak Viewpoints"],
    bestMonths: ["October", "November", "March", "April", "May", "June"],
    avoidMonths: ["July", "August", "September"],
    tags: ["Mountain", "Nature", "Scenic", "Romantic"],
    transport: {
      airport: "Coimbatore International Airport (CJB) - 85km away",
      railwayStation: "Udhagamandalam Railway Station (UAM) / Mettupalayam Connectivity",
      busStand: "Ooty Central Bus Stand",
      metroAvailable: false,
      localTransport: "Local Shared Taxis, Auto-rickshaws, Rented Two-wheelers, and State Transport Buses"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "0423-2443977",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Ooty is exceptionally peaceful, crime-free, and secure, functioning entirely on a tourism and agriculture-driven economy.",
      womenSafety: "Extremely safe for solo female travelers; the mountain town is very quiet, and streets generally empty out early, making it best to reach your stay by 09:00 PM.",
      localBehaviour: "Locals are polite, incredibly soft-spoken, and heavily accustomed to welcoming travelers from across the globe.",
      scamAlerts: [
        "Boutique shops selling low-grade compound oils passed off as pure, high-quality Nilgiri eucalyptus essential oil.",
        "Unregulated local taxi drivers demanding heavy premium surge pricing during the busy summer flower show weeks."
      ],
      emergencyTips: [
        "Pre-book tickets for the historic Nilgiri Mountain Railway toy train weeks in advance via the IRCTC portal, as seats are extremely limited.",
        "Always carry a warm jacket or sweater, as temperatures can drop drastically after sunset, even during summer months."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=A8vEayY5vXk",
    isActive: true,
    placesToVisit: [
      {
        title: "Nilgiri Mountain Railway",
        image: "https://images.unsplash.com/photo-1622308644521-4ea69022e37e?auto=format&fit=crop&w=600&q=80",
        description: "A spectacular UNESCO World Heritage toy train that winds through deep valleys, rocky tunnels, and gorgeous green tea plantations.",
        category: "monument",
        timings: "Runs on strict schedules daily",
        entryFee: "₹30 to ₹600 depending on class booked"
      },
      {
        title: "Government Botanical Gardens",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80",
        description: "A massive, manicured 55-acre garden established in 1848, featuring thousands of exotic plant species and a fossilized tree trunk over 20 million years old.",
        category: "park",
        timings: "07:00 AM - 06:30 PM",
        entryFee: "₹30 for Indians"
      },
      {
        title: "Ooty Lake",
        image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=600&q=80",
        description: "A scenic, man-made lake surrounded by thick groves of eucalyptus trees, offering popular motorboat, rowboat, and paddleboat activities.",
        category: "lake",
        timings: "09:00 AM - 06:00 PM",
        entryFee: "₹15 for Entry (Boating separate)"
      }
    ]
  },
  {
    name: "Mysuru",
    state: "Karnataka",
    coordinates: { lat: 12.2958, lng: 76.6394 },
    heroImage: "https://images.unsplash.com/photo-1600100397608-f010e42edaba?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Cultural Capital of Karnataka",
    description: "Renowned globally for its grand royal heritage and pristine cleanliness, Mysuru (Mysore) is a mesmerizing city steeped in history. As the former seat of the majestic Wadiyar Dynasty, it presents a stunning canvas of sprawling palaces, manicured gardens, and traditional heritage buildings. Famed for its production of fine premium silk, aromatic sandalwood oil, and authentic Ashtanga yoga schools, it offers an incredibly civilized and culturally rich travel experience.",
    famousFor: ["Mysore Palace", "Mysore Dasara Festival", "Pure Sandalwood & Silk", "Mysore Pak Sweet", "Ashtanga Yoga Centers"],
    bestMonths: ["October", "November", "December", "January", "February", "March"],
    avoidMonths: ["April", "May"],
    tags: ["Royal", "Heritage", "Cultural", "Spiritual"],
    transport: {
      airport: "Mysuru Airport (MYQ) / Limited Flights / Connectivity via Bengaluru Airport",
      railwayStation: "Mysuru Junction Railway Station (MYS)",
      busStand: "Mysuru KSRTC Central Bus Stand",
      metroAvailable: false,
      localTransport: "Auto-rickshaws, App Cabs, KSRTC City Buses, and Rented Bicycles"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "0821-2422000",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Mysuru is widely awarded as one of the cleanest and safest cities in India, offering a peaceful environment with minimal urban hassle.",
      womenSafety: "Extremely safe for solo female backpackers and international yoga students; public areas are highly respectable and well-patrolled.",
      localBehaviour: "The local residents are soft-spoken, deeply proud of their artistic traditions, and highly helpful when guiding visitors.",
      scamAlerts: [
        "Street touts hovering near palace gates selling cheap synthetic wood pieces passed off as genuine sandalwood carvings.",
        "Unlicensed silk shops offering fake mixed fabrics claiming to be authentic, government-certified Mysore Silk sarees."
      ],
      emergencyTips: [
        "Plan your visit to the Mysore Palace on a Sunday evening or during public holidays to witness the spectacular sight of its exterior lit by 100,000 bulbs.",
        "Always purchase authentic sandalwood goods directly from the official government-authorized Cauvery Handicrafts Emporium."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=F3_6eN28oYI",
    isActive: true,
    placesToVisit: [
      {
        title: "Mysore Palace",
        image: "https://images.unsplash.com/photo-1600100397608-f010e42edaba?auto=format&fit=crop&w=600&q=80",
        description: "A spectacular Indo-Saracenic architectural masterpiece that serves as one of the most visited monument sites in India, showcasing beautiful stained-glass ceilings and royal thrones.",
        category: "monument",
        timings: "10:00 AM - 05:30 PM",
        entryFee: "₹100 for Indians, ₹500 for Foreign Nationals"
      },
      {
        title: "Chamundeshwari Temple",
        image: "https://images.unsplash.com/photo-1608960251786-dbcccae866a4?auto=format&fit=crop&w=600&q=80",
        description: "A historic temple perched majestically on top of the Chamundi Hills, featuring a striking, seven-tiered gopuram and offering sweeping views of the city.",
        category: "temple",
        timings: "07:30 AM - 02:00 PM, 03:30 PM - 06:00 PM, 07:30 PM - 09:00 PM",
        entryFee: "Free Entry"
      },
      {
        title: "Brindavan Gardens",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80",
        description: "A sprawling, beautifully terraced garden layout situated right below the Krishna Raja Sagara Dam, famous for its grand synchronized musical fountain shows.",
        category: "park",
        timings: "08:00 AM - 08:00 PM",
        entryFee: "₹50 for Indians"
      }
    ]
  },
  {
    name: "Thiruvananthapuram",
    state: "Kerala",
    coordinates: { lat: 8.5241, lng: 76.9366 },
    heroImage: "https://images.unsplash.com/photo-1602216056096-3c40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Evergreen City of India",
    description: "Built across seven scenic coastal hills, Thiruvananthapuram (Trivandrum) is the serene, green capital city of Kerala. It beautifully balances its political significance and dynamic space research hubs with timeless heritage. Dominated by the soaring gopuram of the world-famous Sree Padmanabhaswamy Temple, the city features wide tree-lined avenues, traditional Kerala wooden architecture, and instant access to beautiful tropical beaches.",
    famousFor: ["Sree Padmanabhaswamy Temple", "Kovalam Beach", "Ayurvedic Healing Centers", "Napier Museum", "Traditional Kerala Sadya"],
    bestMonths: ["October", "November", "December", "January", "February"],
    avoidMonths: ["June", "July", "August", "September"],
    tags: ["Coastal", "Spiritual", "Heritage", "Tropical"],
    transport: {
      airport: "Thiruvananthapuram International Airport (TRV)",
      railwayStation: "Thiruvananthapuram Central Railway Station (TVC)",
      busStand: "Thampanoor Central KSRTC Bus Station",
      metroAvailable: false,
      localTransport: "Auto-rickshaws, KSRTC City Buses, App-based Cabs, and Rented Scooters"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "0471-2321132",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Thiruvananthapuram is exceptionally safe, quiet, and highly civilized, boasting very low crime rates due to its high literacy metrics.",
      womenSafety: "Highly safe and comfortable for solo female travelers; streets tend to become very quiet past 09:30 PM, so it is best to use app cabs for late-night transit.",
      localBehaviour: "Locals are highly educated, deeply respectful of personal space, and communicate effortlessly in English.",
      scamAlerts: [
        "Unregulated beachside massage clinics offering fake Ayurvedic therapies without certified medical practitioners.",
        "Private taxi operators overcharging tourists traveling directly from the international airport to beach resorts."
      ],
      emergencyTips: [
        "Strictly adhere to the traditional dress code (dhoti/mundu for men, saree/salwar for women) to enter the Padmanabhaswamy Temple complex.",
        "Utilize the cheap public KSRTC buses to easily travel to nearby coastal beach points like Kovalam."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=F0mIuYAtpA8",
    isActive: true,
    placesToVisit: [
      {
        title: "Sree Padmanabhaswamy Temple",
        image: "https://images.unsplash.com/photo-1602216056096-3c40cc0c9944?auto=format&fit=crop&w=600&q=80",
        description: "An ancient, gold-plated architectural wonder blending Kerala and Dravidian styles, widely known as the wealthiest temple destination in the world.",
        category: "temple",
        timings: "Strict morning and evening slots for worship; check daily",
        entryFee: "Free Entry (Special queues available)"
      },
      {
        title: "Kovalam Beach",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
        description: "A world-famous coastal stretch featuring a striking red-and-white striped lighthouse, offering beautiful palm-fringed bays and surfing waves.",
        category: "beach",
        timings: "Open 24 Hours",
        entryFee: "Free Entry"
      },
      {
        title: "Napier Museum & Art Gallery",
        image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80",
        description: "A landmark 19th-century Gothic-style architectural monument housing a unique collection of historical bronze idols, ivory carvings, and royal ornaments.",
        category: "monument",
        timings: "10:00 AM - 04:45 PM (Closed on Tuesdays)",
        entryFee: "₹20 for Indians"
      }
    ]
  },
  {
    name: "Madurai",
    state: "Tamil Nadu",
    coordinates: { lat: 9.9252, lng: 78.1198 },
    heroImage: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Athens of the East",
    description: "Constructed in the structural shape of a brilliant lotus flower, Madurai is one of the oldest continuously inhabited cities in India, with a history spanning over 2,500 years. Centered completely around the magnificent Meenakshi Amman Temple complex, this ancient cultural core was the historic capital of the Pandyan Kings. It is a bustling, lively destination famous for its midnight food stalls, hand-woven textiles, and deep literary traditions.",
    famousFor: ["Meenakshi Amman Temple", "Jigarthanda Drink", "Thirumalai Nayakkar Palace", "Sungudi Sarees", "Midnight Street Food Market"],
    bestMonths: ["October", "November", "December", "January", "February"],
    avoidMonths: ["April", "May", "June", "July"],
    tags: ["Spiritual", "Historical", "Ancient", "Cultural"],
    transport: {
      airport: "Madurai Airport (IXM)",
      railwayStation: "Madurai Junction Railway Station (MDU)",
      busStand: "Mattuthavani Integrated Bus Terminus (MIBT)",
      metroAvailable: false,
      localTransport: "Auto-rickshaws, Cycle-rickshaws, Local Shared Autos, and Government City Buses"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "0452-2334757",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Madurai is safe and highly tourist-centric, maintaining an active, bustling street life that stays awake well into the late-night hours.",
      womenSafety: "Very secure for solo female travelers due to the highly active, family-dense markets surrounding the central temple zone.",
      localBehaviour: "Locals are deeply expressive, down-to-earth, intensely proud of their ancient Tamil roots, and welcoming to spiritual travelers.",
      scamAlerts: [
        "Unlicensed street guides around temple entrances demanding premium flat fees to bypass standard entry lines.",
        "Shops near the monument zone claiming to sell rare, authentic antique brass bronzes that are basic modern replicas."
      ],
      emergencyTips: [
        "Be aware that electronic devices, including smartphones and cameras, are strictly banned inside the Meenakshi Temple premises; make use of secure external locker counters.",
        "Try the legendary local refreshing sweet drink 'Jigarthanda' from a highly reputed street vendor to beat the afternoon heat."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=D-jU8T7v7Fk",
    isActive: true,
    placesToVisit: [
      {
        title: "Meenakshi Amman Temple",
        image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=600&q=80",
        description: "A monumental, breathtaking temple complex featuring 14 massive gopurams covered in thousands of colorful, intricately sculpted mythological figures.",
        category: "temple",
        timings: "05:00 AM - 12:30 PM, 04:00 PM - 09:30 PM",
        entryFee: "Free Entry (Special darshan tickets available)"
      },
      {
        title: "Thirumalai Nayakkar Palace",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80",
        description: "A grand 17th-century royal palace displaying a striking blend of Italian and Rajput styles, famous for its massive, towering white pillars.",
        category: "monument",
        timings: "09:00 AM - 05:00 PM",
        entryFee: "₹10 for Indians"
      },
      {
        title: "Gandhi Memorial Museum",
        image: "https://images.unsplash.com/photo-1621258652482-dbfbc77b789a?auto=format&fit=crop&w=600&q=80",
        description: "A historic palace converted into a moving museum that houses a wealth of freedom struggle artifacts, including the blood-stained garment worn by Mahatma Gandhi.",
        category: "monument",
        timings: "10:00 AM - 01:00 PM, 02:00 PM - 05:45 PM (Closed on Fridays)",
        entryFee: "Free Entry"
      }
    ]
  },

  {
    name: "Srinagar",
    state: "Jammu and Kashmir",
    coordinates: { lat: 34.0837, lng: 74.7973 },
    heroImage: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f6?auto=format&fit=crop&w=1200&q=80",
    tagline: "Heaven on Earth",
    description: "Srinagar, the summer capital of Jammu and Kashmir, rests in the absolute heart of the Kashmir Valley. Bisected by the peaceful Jhelum River, the city is globally celebrated for its shimmering Dal and Nigeen lakes, historic wooden houseboats, and colorful Mughal gardens. It provides an unmatched Himalayan getaway where crisp mountain air carries the subtle aroma of saffron and fresh pine needles.",
    famousFor: ["Dal Lake Houseboats", "Shikara Boat Rides", "Mughal Architecture Gardens", "Pashmina Shawls", "Kashmiri Wazwan Food"],
    bestMonths: ["April", "May", "June", "September", "October"],
    avoidMonths: ["July", "August", "January"],
    tags: ["Mountain", "Spiritual", "Heritage", "Scenic", "Romantic"],
    transport: {
      airport: "Sheikh ul-Alam International Airport (SXR)",
      railwayStation: "Srinagar Railway Station (Nowgan)",
      busStand: "TRC Bus Chrono Depot, Batamaloo Central Stand",
      metroAvailable: false,
      localTransport: "Traditional Shikara Boats, Auto-rickshaws, App-based Cabs, and Local Shared Sumo Cabs"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "0194-2502279",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Srinagar maintains a heavy security layout and deeply welcoming tourism infrastructure, ensuring a peaceful experience for global travelers.",
      womenSafety: "Kashmiri culture values hospitality exceptionally highly, making daytime exploration and market strolls very comfortable for solo female travelers.",
      localBehaviour: "Locals are remarkably warm-hearted, highly soft-spoken, and passionate about guiding tourists through their unique cultural traditions.",
      scamAlerts: [
        "Independent saffron merchants selling low-grade synthetic threads to buyers at premium prices.",
        "Aggressive shikara rowers demanding high extra tips mid-lake outside the official prepaid booth window."
      ],
      emergencyTips: [
        "Always book your Dal Lake shikara boat rides exclusively using government-approved prepaid ticket booths on the banks.",
        "Pick up a local postpaid SIM card before entering the valley, as standard prepaid roaming plans do not work inside J&K."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=jK9WlQtF87s",
    isActive: true,
    placesToVisit: [
      {
        title: "Dal Lake",
        image: "https://images.unsplash.com/photo-1595874271816-5bc77b789a42?auto=format&fit=crop&w=600&q=80",
        description: "A majestic, peaceful lake famous for its wooden houseboats and floating markets, perfect for experiencing a sunset wooden shikara cruise.",
        category: "lake",
        timings: "Open 24 Hours",
        entryFee: "Free Entry (Shikara rates vary)"
      },
      {
        title: "Shalimar Bagh",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
        description: "A gorgeous, historic Mughal garden built by Emperor Jahangir in 1619, showcasing cascading water channels and grand chinar trees.",
        category: "park",
        timings: "09:00 AM - 07:00 PM",
        entryFee: "₹24 for Indians"
      },
      {
        title: "Shankaracharya Temple",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80",
        description: "An ancient stone temple perched at the top of a hill 1,100 feet above the valley floor, offering breathtaking panoramic views of Srinagar.",
        category: "temple",
        timings: "06:00 AM - 08:00 PM",
        entryFee: "Free Entry"
      }
    ]
  },
  {
    name: "Shillong",
    state: "Meghalaya",
    coordinates: { lat: 25.5788, lng: 91.8833 },
    heroImage: "https://images.unsplash.com/photo-1548252277-2e55fbbfd6f2?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Scotland of the East",
    description: "Perched high among the clouds at an altitude of 4,908 feet, Shillong is a stunning mountain city wrapped in pine forests, rolling green valleys, and dramatic waterfalls. As the capital of Meghalaya, it stands out for its unique blend of traditional Khasi heritage, lively modern music culture, and manicured landscapes that resemble European highland ranges.",
    famousFor: ["Umiam Lake Viewpoints", "Elephant Falls", "Live Music Scene", "Khasi Traditional Food", "Police Bazar Shopping"],
    bestMonths: ["September", "October", "November", "December", "January", "February", "March"],
    avoidMonths: ["June", "July", "August"],
    tags: ["Mountain", "Nature", "Waterfalls", "Musical", "Scenic"],
    transport: {
      airport: "Shillong Airport (SHL) / Guwahati Airport (GAU) with taxi connectivity",
      railwayStation: "Guwahati Railway Station (GHY) - 100km away with shared cabs",
      busStand: "MTC Bus Stand, Khliehshnong Central Depot",
      metroAvailable: false,
      localTransport: "Shared Local Taxis (Iconic Black & Yellow Marutis), Auto-rickshaws, and Private Tourist Cabs"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "0364-2226054",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Shillong is remarkably safe, peaceful, and clean, maintaining low urban crime metrics due to strong community policing frameworks.",
      womenSafety: "Meghalaya is a matrilineal society where women are deeply respected, making Shillong one of the safest cities in India for solo female travelers.",
      localBehaviour: "Locals are exceptionally polite, highly fashionable, deeply connected to nature, and famous for their incredible musical talents.",
      scamAlerts: [
        "Unregulated highway taxi drivers asking out-of-town visitors for steep premium prices for direct airport connections.",
        "Street souvenir stands selling mass-produced items passed off as local Khasi woodwork handicrafts."
      ],
      emergencyTips: [
        "Always rely on the highly organized, shared local yellow Maruti cabs to hop around city points affordably.",
        "Pack an umbrella or light windbreaker even when visiting during the dry season, as mountain weather changes instantly."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=nUuFsPlWSt8",
    isActive: true,
    placesToVisit: [
      {
        title: "Umiam Lake",
        image: "https://images.unsplash.com/photo-1548252277-2e55fbbfd6f2?auto=format&fit=crop&w=600&q=80",
        description: "A massive, beautiful water reservoir surrounded by thick green pine hills, perfect for speed boating and quiet sunset photography.",
        category: "lake",
        timings: "09:00 AM - 05:00 PM",
        entryFee: "₹20 for Indians"
      },
      {
        title: "Elephant Falls",
        image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=600&q=80",
        description: "A famous three-tiered waterfall cascading down smooth mountain rocks hidden inside a lush, green forest pathway.",
        category: "park",
        timings: "09:00 AM - 05:00 PM",
        entryFee: "₹20 for Indians"
      },
      {
        title: "Laitlum Canyons",
        image: "https://images.unsplash.com/photo-1624386762331-50798725832e?auto=format&fit=crop&w=600&q=80",
        description: "An incredible ridge viewpoint offering breathtaking, dramatic views of deep green valleys and mountain paths hidden under rolling clouds.",
        category: "park",
        timings: "06:00 AM - 05:00 PM",
        entryFee: "Free Entry"
      }
    ]
  },
  {
    name: "Manali",
    state: "Him हिमाचल Pradesh",
    coordinates: { lat: 32.2396, lng: 77.1887 },
    heroImage: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Valley of the Gods",
    description: "Located high up in the Beas River Valley, Manali is a majestic mountain destination bounded by snow-capped peaks and thick cedar forests. It serves as a fantastic base for adventure sports like paragliding, skiing, and trekking, while its old wooden temples and cozy mountain café culture make it a traveler favorite.",
    famousFor: ["Solang Valley Adventure", "Rohtang Pass Snow", "Hadimba Temple", "Old Manali Cafes", "Atal Tunnel Drive"],
    bestMonths: ["October", "November", "December", "March", "April", "May"],
    avoidMonths: ["July", "August", "September"],
    tags: ["Mountain", "Adventure", "Snow", "Nature", "Scenic"],
    transport: {
      airport: "Bhuntar Airport (UUU) - 50km away / Volvo Bus from Delhi",
      railwayStation: "Joginder Nagar Railway Station (Narrow Gauge) - 140km away",
      busStand: "Manali Inter State Bus Terminus (ISBT)",
      metroAvailable: false,
      localTransport: "Local Auto-rickshaws, Rented Royal Enfield Bikes, App Cabs, and Local Union Taxis"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "01902-252175",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Manali is highly tourist-friendly and clean, maintaining an excellent track record of visitor safety across its nature hubs.",
      womenSafety: "Extremely safe for solo female backpackers; the vibrant local cafe culture and family-run stays provide a highly secure environment.",
      localBehaviour: "Locals are modest, soft-spoken, deeply tied to Himalayan customs, and highly skilled in guiding mountain expeditions.",
      scamAlerts: [
        "Local snow dress rental operators charging high hidden premiums to tourists heading to Rohtang.",
        "Private taxi drivers claiming roads are blocked to push expensive adventure sports packages."
      ],
      emergencyTips: [
        "Always book your Rohtang Pass permits in advance via the official government portal, as visitor entries are limited daily.",
        "Avoid traveling during peak monsoon months (July-August) when heavy mountain rains can cause landslides."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=QwMeKdFtKmU",
    isActive: true,
    placesToVisit: [
      {
        title: "Hadimba Temple",
        image: "https://images.unsplash.com/photo-1614088910247-a3fc3be1ceee?auto=format&fit=crop&w=600&q=80",
        description: "A historic 16th-century wooden temple featuring a unique four-tiered pagoda roof, nestled inside the peaceful Dhungri Van Vihar cedar forest.",
        category: "temple",
        timings: "08:00 AM - 06:00 PM",
        entryFee: "Free Entry"
      },
      {
        title: "Solang Valley",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80",
        description: "A gorgeous, high-altitude valley famous for exciting adventure sports like paragliding, zorbing, and skiing over snowy mountain slopes.",
        category: "park",
        timings: "09:00 AM - 06:00 PM",
        entryFee: "Free Entry (Activities separate)"
      },
      {
        title: "Atal Tunnel & Sissu",
        image: "https://images.unsplash.com/photo-1626014303757-6bc90e964177?auto=format&fit=crop&w=600&q=80",
        description: "An engineering marvel leading to the stunning Lahaul Valley, where you can explore frozen rivers and incredible mountain viewpoints.",
        category: "monument",
        timings: "Open 24 Hours",
        entryFee: "Free Entry"
      }
    ]
  },

  {
    name: "Ranchi",
    state: "Jharkhand",
    coordinates: { lat: 23.3414, lng: 85.3094 },
    heroImage: "https://images.unsplash.com/photo-1667923376756-78ffec66f246?auto=format&fit=crop&w=1200&q=80",
    tagline: "The City of Waterfalls",
    description: "Nestled on the picturesque Chota Nagpur Plateau, Ranchi is a scenic destination blessed with rolling green hills, expansive lakes, and an incredible cluster of natural waterfalls. As a rapidly growing urban center that beautifully retains its serene forest covers, the city offers a refreshing getaway. It serves as a fascinating hub for rich tribal heritage, vibrant local handicraft markets, and beautiful nature trails tucked away from chaotic metropolitan lines.",
    famousFor: ["Hundru Falls", "Jonha Falls", "Tribal Bamboo Crafts", "Ranchi Lake", "Pahari Mandir"],
    bestMonths: ["October", "November", "December", "January", "February"],
    avoidMonths: ["April", "May", "June"],
    tags: ["Nature", "Waterfalls", "Offbeat", "Tribal"],
    transport: {
      airport: "Birsa Munda Airport (IXR)",
      railwayStation: "Ranchi Junction Railway Station (RNC)",
      busStand: "Khadgarha Central Bus Stand",
      metroAvailable: false,
      localTransport: "Auto-rickshaws, Shared E-rickshaws, Local Tempos, App-based Cabs, and City Buses"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "0651-2400981",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Ranchi's urban center is safe and peaceful for travelers. However, it is strongly recommended to stick to active daytime hours when exploring remote natural reserves.",
      womenSafety: "Main city roads, markets, and malls are completely secure; nature excursions should simply be planned during active daylight hours with an aim to return by sunset.",
      localBehaviour: "Locals are deeply rooted in nature, soft-spoken, exceptionally modest, and highly helpful when pointing out hidden scenic viewpoints to tourists.",
      scamAlerts: [
        "Unregulated local auto drivers demanding high, flat rates from tourists at the railway station instead of standard fares.",
        "Overpriced street vendors charging tourists premiums for basic handmade bamboo items near popular waterfalls."
      ],
      emergencyTips: [
        "Always hire a registered, local driver when planning day-trips to explore distant forest waterfalls.",
        "Keep local cash handy during nature excursions, as mobile network signals can get weak around deep valley zones."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=wXW5O9fN0Hk",
    isActive: true,
    placesToVisit: [
      {
        title: "Hundru Falls",
        image: "https://images.unsplash.com/photo-1695020166297-76798eef64a9?auto=format&fit=crop&w=600&q=80",
        description: "A spectacular 320-foot high waterfall where the Subarnarekha River tumbles down majestic rock cliffs, creating a scenic and popular nature retreat.",
        category: "park",
        timings: "08:00 AM - 05:00 PM",
        entryFee: "Free Entry"
      },
      {
        title: "Dassam Falls",
        image: "https://images.unsplash.com/photo-1681283620952-ec0667ce1f6d?auto=format&fit=crop&w=600&q=80",
        description: "A breathtaking natural waterfall hidden deep within lush forest lines, where water cascades down ten distinct and dramatic stream paths.",
        category: "park",
        timings: "08:00 AM - 04:30 PM",
        entryFee: "Free Entry"
      },
      {
        title: "Jonha Falls",
        image: "https://images.unsplash.com/photo-1681283620358-fc20485a3fd5?auto=format&fit=crop&w=600&q=80",
        description: "Also known as the Gautamdhara Falls, this scenic and peaceful waterfall is surrounded by hanging trees and features a historic Buddhist shrine nearby.",
        category: "park",
        timings: "08:00 AM - 05:00 PM",
        entryFee: "Free Entry"
      }
    ]
  },
  {
    name: "Patna",
    state: "Bihar",
    coordinates: { lat: 25.5941, lng: 85.1376 },
    heroImage: "https://images.unsplash.com/photo-1684347209736-613dcf58f8b8?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Cradle of Ancient Empires",
    description: "Stretching along the southern bank of the sacred River Ganges, Patna—anciently known as Pataliputra—is one of the oldest continuously inhabited cities in the world. As the grand historic capital of the Magadha, Maurya, and Gupta empires, it stands as a legendary epicenter of learning, politics, and spirituality. Today, it balances its monumental archaeological legacy with a bustling riverfront lifestyle, vibrant Madhubani art culture, and dynamic modern infrastructure.",
    famousFor: ["Golghar", "Patna Museum", "Takht Sri Patna Sahib", "Madhubani Paintings", "Ganga Ghats"],
    bestMonths: ["October", "November", "December", "January", "February", "March"],
    avoidMonths: ["April", "May", "June", "July", "August"],
    tags: ["Historical", "Ancient", "Spiritual", "Heritage"],
    transport: {
      airport: "Jay Prakash Narayan Airport (PAT)",
      railwayStation: "Patna Junction (PNBE), Rajendra Nagar Terminal (RJPB)",
      busStand: "Bankipur Bus Stand, Inter State Bus Terminal (ISBT) Patna",
      metroAvailable: false,
      localTransport: "Auto-rickshaws, Shared Tempos, E-rickshaws, App-based Cabs, and BSRTC City Buses"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "0612-2225411",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Patna is generally safe and bustling during the day. Standard caution and staying within well-traveled market areas past 09:30 PM is ideal for tourists.",
      womenSafety: "Major spiritual sites and central shopping zones are highly active and secure. It is best to utilize reliable app-based cabs for commuting during late-evening hours.",
      localBehaviour: "Locals are incredibly sharp, historically proud, warm-hearted, and very respectful when assisting visitors with local directions or recommendations.",
      scamAlerts: [
        "Unlicensed local tour guides operating outside archaeological ruins charging high, non-standard pricing options.",
        "Local auto drivers quoting inflated initial prices to out-of-town visitors near the primary railway station exit gates."
      ],
      emergencyTips: [
        "Always agree on flat auto-rickshaw rates before boarding, or utilize standard app-based booking services.",
        "Take a peaceful evening stroll along the Marine Drive (Ganga Path) promenade to experience the city's active local lifestyle safely."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=I6Bw0iO0wL4",
    isActive: true,
    placesToVisit: [
      {
        title: "Golghar",
        image: "https://images.unsplash.com/photo-1681223933580-0a2aef1fae80?auto=format&fit=crop&w=600&q=80",
        description: "A massive, beehive-shaped granary built by the British in 1786, featuring a famous winding external stairway that offers sweeping panoramic views of the Ganges.",
        category: "monument",
        timings: "09:30 AM - 06:00 PM",
        entryFee: "₹5 for Indians"
      },
      {
        title: "Takht Sri Patna Sahib",
        image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=600&q=80",
        description: "A magnificent white-marble Gurdwara built to commemorate the birthplace of Guru Gobind Singh Ji, serving as one of the five holiest takhts in Sikhism.",
        category: "temple",
        timings: "Open 24 Hours",
        entryFee: "Free Entry"
      },
      {
        title: "Patna Museum",
        image: "https://images.unsplash.com/photo-1684347209141-da8b0e774577?auto=format&fit=crop&w=600&q=80",
        description: "A grand, Mughal-Rajput style museum housing a rare collection of ancient archaeological artifacts, including the world-famous Didarganj Yakshi statue.",
        category: "monument",
        timings: "10:30 AM - 04:30 PM (Closed on Mondays)",
        entryFee: "₹25 for Indians"
      }
    ]
  },
  {
    name: "Agra",
    state: "Uttar Pradesh",
    coordinates: { lat: 27.1767, lng: 78.0081 },
    heroImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    tagline: "The City of the Taj",
    description: "Perched majestically along the banks of the Yamuna River, Agra is globally celebrated as the cradle of Mughal architectural brilliance. As the former capital of the Mughal Empire, it boasts a staggering concentration of UNESCO World Heritage sites. Beyond its iconic marble monuments, Agra is an immersive sensory experience of busy historical bazaars, traditional marble inlay artisans, and rich Mughlai culinary traditions that have survived for centuries.",
    famousFor: ["Taj Mahal", "Agra Fort", "Petha Sweet", "Marble Inlay Handicrafts", "Mughal Architecture"],
    bestMonths: ["October", "November", "December", "January", "February", "March"],
    avoidMonths: ["April", "May", "June", "July"],
    tags: ["Heritage", "Historical", "Romantic", "Architecture"],
    transport: {
      airport: "Agra Airport (AGR) / Limited Flights (Del, Mum)",
      railwayStation: "Agra Cantt Railway Station (AGC), Raja Ki Mandi (RKM)",
      busStand: "Idgah Bus Stand, ISBT Agra",
      metroAvailable: false,
      localTransport: "Auto-rickshaws, Cycle-rickshaws, E-rickshaws, and Government City Buses"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "0562-2226431",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Agra is highly policed due to its immense international tourism traffic, making it generally secure during regular daytime sight-seeing hours.",
      womenSafety: "Major monument zones are well guarded. However, it is strongly advised to avoid navigating dark, unlit streets or areas near railway stations late at night.",
      localBehaviour: "Locals are well-accustomed to international tourists; however, visitors will experience a high level of persistence from local street vendors and guides.",
      scamAlerts: [
        "Aggressive emporium touts pretending to offer free transport to redirect you to overpriced handicraft centers.",
        "Unlicensed photographers around the Taj Mahal charging hidden, extra fees for basic digital prints."
      ],
      emergencyTips: [
        "Book monument entry tickets exclusively online via the official ASI portal to bypass massive lines at the gates.",
        "Politely but firmly decline unsolicited street guides outside monument checkpoints."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=EvreZCOv-C8",
    isActive: true,
    placesToVisit: [
      {
        title: "Taj Mahal",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
        description: "The magnificent white marble mausoleum built by Emperor Shah Jahan in memory of his favorite wife Mumtaz Mahal, serving as the ultimate global symbol of love.",
        category: "monument",
        timings: "06:00 AM - 06:30 PM (Closed on Fridays)",
        entryFee: "₹50 for Indians, ₹1100 for Foreign Nationals"
      },
      {
        title: "Agra Fort",
        image: "https://images.unsplash.com/photo-1584847141316-24d142ceec19?auto=format&fit=crop&w=600&q=80",
        description: "A massive 16th-century red sandstone walled fortress that served as the primary royal residence for the great emperors of the Mughal Dynasty.",
        category: "monument",
        timings: "06:00 AM - 06:00 PM",
        entryFee: "₹50 for Indians, ₹600 for Foreign Nationals"
      },
      {
        title: "Tomb of Itimad-ud-Daulah",
        image: "https://images.unsplash.com/photo-1629124424364-ffb49ce005d0?auto=format&fit=crop&w=600&q=80",
        description: "Often called the 'Baby Taj', this elegant, highly detailed marble tomb is considered the architectural draft for the Taj Mahal.",
        category: "monument",
        timings: "06:00 AM - 06:00 PM",
        entryFee: "₹30 for Indians, ₹310 for Foreign Nationals"
      },
      {
        title: "Mehtab Bagh",
        image: "https://images.unsplash.com/photo-1600577916048-804c9191e36c?auto=format&fit=crop&w=600&q=80",
        description: "A peaceful charbagh garden complex located perfectly across the river, offering spectacular, uncrowded sunset views of the Taj Mahal.",
        category: "park",
        timings: "06:00 AM - 06:00 PM",
        entryFee: "₹30 for Indians, ₹300 for Foreign Nationals"
      }
    ]
  },
  {
    name: "Kochi",
    state: "Kerala",
    coordinates: { lat: 9.9312, lng: 76.2673 },
    heroImage: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Queen of the Arabian Sea",
    description: "Kochi is a beautiful spice-trading port city where old colonial charm blends smoothly with modern coastal lifestyle. For centuries, it has welcomed a diverse mix of global influences, leaving a fascinating heritage of Chinese fishing nets, 400-year-old Jewish synagogues, and grand Portuguese architecture. It serves as the ultimate gateway to explore the tropical backwaters, rich arts, and historic spice markets of Kerala.",
    famousFor: ["Chinese Fishing Nets", "Fort Kochi Beach", "Kathakali Dance", "Spices and Seafood", "Mattancherry Palace"],
    bestMonths: ["October", "November", "December", "January", "February"],
    avoidMonths: ["June", "July", "August", "September"],
    tags: ["Coastal", "Heritage", "Cultural", "Tropical"],
    transport: {
      airport: "Cochin International Airport (COK)",
      railwayStation: "Ernakulam Junction (ERS), Ernakulam Town (ERN)",
      busStand: "KSRTC Central Bus Station, Vyttila Mobility Hub",
      metroAvailable: true,
      localTransport: "Kochi Metro, Public Water Ferries, Auto-rickshaws, and App Cabs"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "0484-2360534",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Kochi maintains excellent safety records with low crime metrics, making it a comfortable experience for solo travelers.",
      womenSafety: "Local culture is highly respectful of visitors; public transit is safe, though app cabs are best for late night travel past 10:00 PM.",
      localBehaviour: "The populace is highly educated, courteous, and comfortable communicating in both English and Hindi.",
      scamAlerts: [
        "Aromatic spice merchants selling low-grade, artificially scented blends to international buyers at high prices.",
        "Overpriced auto-rickshaws charging extra tourists premiums around Fort Kochi."
      ],
      emergencyTips: [
        "Make use of the public water ferries; they are highly affordable, clean, and let you easily skip road traffic.",
        "Book your Kathakali art show tickets through registered cultural centers."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=F_S9MbeWvY0",
    isActive: true,
    placesToVisit: [
      {
        title: "Fort Kochi & Chinese Fishing Nets",
        image: "https://images.unsplash.com/photo-1593693411515-c202e974fe62?auto=format&fit=crop&w=600&q=80",
        description: "Iconic, massive cantilevered wooden fishing structures operating on the beachfront, showcasing an ancient Chinese mechanism.",
        category: "beach",
        timings: "Open 24 Hours",
        entryFee: "Free Entry"
      },
      {
        title: "Mattancherry Palace",
        image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80",
        description: "Also known as the Dutch Palace, this heritage spot features beautiful Kerala murals depicting grand mythological scenes.",
        category: "monument",
        timings: "09:45 AM - 04:45 PM (Closed on Fridays)",
        entryFee: "₹5 for Indians"
      },
      {
        title: "Jew Town & Paradesi Synagogue",
        image: "https://images.unsplash.com/photo-1602216056096-3c40cc0c9944?auto=format&fit=crop&w=600&q=80",
        description: "A historic neighborhood lined with antique shops, centered around a beautiful 1568 Jewish synagogue with hand-painted tiles.",
        category: "monument",
        timings: "10:00 AM - 05:00 PM (Closed on Saturdays)",
        entryFee: "Free Entry"
      }
    ]
  },
  {
    name: "Udaipur",
    state: "Rajasthan",
    coordinates: { lat: 24.5854, lng: 73.7125 },
    heroImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    tagline: "The City of Lakes",
    description: "Often called the Venice of the East, Udaipur is a gorgeous destination defined by its shimmering lakes and majestic Aravalli hills. Built around Lake Pichola, the city features stunning white marble palaces that look like they are floating on water. It is a romantic haven filled with royal history, beautiful rooftop dining, and peaceful boat rides that make it unforgettable.",
    famousFor: ["Lake Pichola", "City Palace Complex", "Lake Palace", "Traditional Puppetry", "Rooftop Cafes"],
    bestMonths: ["October", "November", "December", "January", "February", "March"],
    avoidMonths: ["April", "May", "June"],
    tags: ["Romantic", "Royal", "Heritage", "Lakes"],
    transport: {
      airport: "Maharana Pratap Airport (UDR)",
      railwayStation: "Udaipur City Railway Station (UDZ)",
      busStand: "Udaipur Central Bus Stand",
      metroAvailable: false,
      localTransport: "Auto-rickshaws, E-rickshaws, Scooters for rent, and Walking trails"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "0294-2411535",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Udaipur is very peaceful and secure, enjoying a very low crime rate because it relies heavily on welcoming tourists.",
      womenSafety: "Extremely safe for solo female travelers, as the main lakeside areas are active, well-lit, and very tourist-friendly.",
      localBehaviour: "Locals are remarkably polite, warm, and highly professional in running boutique hospitality experiences.",
      scamAlerts: [
        "Local shops charging inflated rates for mass-produced miniature paintings claiming they are rare antiques.",
        "Private boat operators overcharging tourists who miss the official government boating jetty."
      ],
      emergencyTips: [
        "Enjoy a sunset boat ride on Lake Pichola for the absolute best views of the floating palaces.",
        "Book a lakeside dinner table in advance, as popular spots fill up quickly."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=FmOQZ5U69oY",
    isActive: true,
    placesToVisit: [
      {
        title: "City Palace Udaipur",
        image: "https://images.unsplash.com/photo-1615550912956-6f1f5fa7be73?auto=format&fit=crop&w=600&q=80",
        description: "A monumental palace complex built over 400 years, featuring beautiful mirror-work balconies overlooking Lake Pichola.",
        category: "monument",
        timings: "09:00 AM - 05:30 PM",
        entryFee: "₹250 for Indians"
      },
      {
        title: "Jagmandir",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80",
        description: "An elegant marble palace built on an island in Lake Pichola, featuring grand stone elephant structures at the entrance.",
        category: "monument",
        timings: "10:00 AM - 06:00 PM",
        entryFee: "Requires boat ticket (approx. ₹400-₹700)"
      },
      {
        title: "Saheliyon-ki-Bari",
        image: "https://images.unsplash.com/photo-1621258652482-dbfbc77b789a?auto=format&fit=crop&w=600&q=80",
        description: "A historic royal garden featuring marble fountains, lotus pools, and beautiful pavilions built for the queen's maids.",
        category: "park",
        timings: "09:00 AM - 07:00 PM",
        entryFee: "₹15 for Indians"
      }
    ]
  },
  {
    name: "Hyderabad",
    state: "Telangana",
    coordinates: { lat: 17.3850, lng: 78.4867 },
    heroImage: "https://images.unsplash.com/photo-1608958416715-bc44a72d3e9c?auto=format&fit=crop&w=1200&q=80",
    tagline: "The City of Pearls",
    description: "Hyderabad is a dynamic historic city where royal Nizami heritage combines with a world-class technology industry. From the iconic Charminar and ancient fortresses to the futuristic tech campuses of HITEC City, it tells a fascinating story of growth. It is universally loved for its rich culinary culture, highlighted by its legendary Dum Biryani and historic pearl markets.",
    famousFor: ["Charminar", "Hyderabadi Biryani", "Golconda Fort", "Pearl Shopping", "HITEC City"],
    bestMonths: ["October", "November", "December", "January", "February"],
    avoidMonths: ["April", "May", "June"],
    tags: ["Gastronomy", "Historical", "Urban", "Tech-Hub"],
    transport: {
      airport: "Rajiv Gandhi International Airport (HYD)",
      railwayStation: "Secunderabad Junction (SC), Hyderabad Deccan (HYB)",
      busStand: "Mahatma Gandhi Bus Station (MGBS)",
      metroAvailable: true,
      localTransport: "Hyderabad Metro, Auto-rickshaws, App-based Cabs, and TSRTC Buses"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "040-23450139",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Hyderabad is safe and progressive, maintaining a secure environment for both domestic and international travelers.",
      womenSafety: "The city features reliable public safety and dedicated metro coaches, making it very comfortable for female solo travelers.",
      localBehaviour: "Locals are exceptionally polite, soft-spoken, and communicate smoothly in a unique blend of Urdu, Hindi, and Telugu.",
      scamAlerts: [
        "Local pearl vendors selling cheap imitation beads claiming they are rare, authentic Basra pearls.",
        "Street auto-rickshaws overcharging tourists traveling around the historic Charminar markets."
      ],
      emergencyTips: [
        "Make use of the Hyderabad Metro to easily bypass busy surface traffic during peak rush hours.",
        "Always head to highly reputed heritage restaurants to enjoy the most authentic Hyderabadi Biryani."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=F3_6eN28oYI",
    isActive: true,
    placesToVisit: [
      {
        title: "Charminar",
        image: "https://images.unsplash.com/photo-1597514781475-7f1c1f7ccbc3?auto=format&fit=crop&w=600&q=80",
        description: "An iconic 16th-century mosque featuring four grand minarets, serving as the central hallmark of Hyderabad's historic old city.",
        category: "monument",
        timings: "09:30 AM - 05:30 PM",
        entryFee: "₹40 for Indians, ₹300 for Foreign Nationals"
      },
      {
        title: "Golconda Fort",
        image: "https://images.unsplash.com/photo-1627494107147-3ba0ec3da30c?auto=format&fit=crop&w=600&q=80",
        description: "A spectacular, historic fortress complex famous for its brilliant acoustics, where a clap at the entrance can be heard at the very top.",
        category: "monument",
        timings: "09:00 AM - 05:30 PM",
        entryFee: "₹25 for Indians, ₹300 for Foreign Nationals"
      },
      {
        title: "Chowmahalla Palace",
        image: "https://images.unsplash.com/photo-1618177995849-dbcccae866a4?auto=format&fit=crop&w=600&q=80",
        description: "A grand, elegant palace complex that served as the official seat of the Asaf Jahi dynasty, showcasing beautiful royal lifestyle exhibits.",
        category: "monument",
        timings: "10:00 AM - 05:00 PM (Closed on Fridays)",
        entryFee: "₹100 for Indians"
      }
    ]
  },
  {
    name: "Goa",
    state: "Goa",
    coordinates: { lat: 15.2993, lng: 74.1240 },
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Land of Sun, Sand, and Sea",
    description: "Goa is a coastal paradise defined by its golden sand beaches, vibrant nightlife, and rich Portuguese heritage. It offers a unique mix of relaxing beach vibes in the south and lively music festivals and water sports in the north. Lined with beautiful old white churches and tropical spice plantations, it remains India's favorite destination for relaxation and beachside exploration.",
    famousFor: ["Sandy Beaches", "Water Sports", "Portuguese Churches", "Seafood Curry", "Night Markets"],
    bestMonths: ["November", "December", "January", "February"],
    avoidMonths: ["June", "July", "August", "September"],
    tags: ["Coastal", "Nightlife", "Relaxation", "Heritage"],
    transport: {
      airport: "Manohar International Airport (GOX), Dabolim Airport (GOI)",
      railwayStation: "Madgaon Junction (MAO), Thivim Railway Station (THVM)",
      busStand: "Kadamba Kadamba Bus Terminus (Panaji)",
      metroAvailable: false,
      localTransport: "Rented Scooters/Cars, Local Auto-rickshaws, and Private Goa Miles App Cabs"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "0832-2437755",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Goa is generally very safe for tourists, maintaining a lively and relaxed social atmosphere throughout the day.",
      womenSafety: "Highly safe and accustomed to female solo travelers; visitors should simply use normal caution when walking on unlit beaches late at night.",
      localBehaviour: "Locals are incredibly laid-back, friendly, and very helpful in recommending beach shacks and local seafood joints.",
      scamAlerts: [
        "Local water sports operators adding high hidden charges for short boat rides.",
        "Local taxi groups overcharging tourists who do not book via the official state app."
      ],
      emergencyTips: [
        "Rent a scooter to enjoy the absolute best experience exploring the winding coastal roads.",
        "Always pay attention to beach safety flags and avoid swimming when red flags are up."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=F3_6eN28oYI",
    isActive: true,
    placesToVisit: [
      {
        title: "Basilica of Bom Jesus",
        image: "https://images.unsplash.com/photo-1590418606746-018840f9cd0f?auto=format&fit=crop&w=600&q=80",
        description: "A grand UNESCO World Heritage site holding the sacred, mortal remains of Saint Francis Xavier, showcasing beautiful baroque architecture.",
        category: "monument",
        timings: "09:00 AM - 06:30 PM",
        entryFee: "Free Entry"
      },
      {
        title: "Baga Beach",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
        description: "A highly popular and lively beach in North Goa, famous for exciting water sports, bustling beach shacks, and vibrant nightlife.",
        category: "beach",
        timings: "Open 24 Hours",
        entryFee: "Free Entry"
      },
      {
        title: "Dudhsagar Falls",
        image: "https://images.unsplash.com/photo-1616391183194-e29f5f00e93b?auto=format&fit=crop&w=600&q=80",
        description: "A spectacular four-tiered waterfall that looks like a river of milk flowing down the lush Western Ghats forest.",
        category: "park",
        timings: "09:00 AM - 04:30 PM",
        entryFee: "₹400 for Jeep Safari"
      }
    ]
  },
  {
    name: "Pune",
    state: "Maharashtra",
    coordinates: { lat: 18.5204, lng: 73.8567 },
    heroImage: "https://images.unsplash.com/photo-1600664551711-667781b0a701?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Oxford of the East",
    description: "Pune is a dynamic cultural and educational center where proud Maratha history meets a lively IT and student culture. As the historic seat of the Peshwas, it holds a rich heritage of fortresses and old neighborhoods, while its pleasant weather, green hills, and vibrant café culture make it a modern lifestyle favorite.",
    famousFor: ["Shaniwar Wada", "Aga Khan Palace", "Educational Institutions", "Misal Pav and Bakeries", "Pleasant Weather"],
    bestMonths: ["October", "November", "December", "January", "February", "March"],
    avoidMonths: ["April", "May"],
    tags: ["Cultural", "Historical", "Urban", "Students"],
    transport: {
      airport: "Pune International Airport (PNQ)",
      railwayStation: "Pune Junction Railway Station (PUNE)",
      busStand: "Swargate Bus Stand, Shivajinagar Bus Depot",
      metroAvailable: true,
      localTransport: "Pune Metro, PMPMT City Buses, Auto-rickshaws, and App Cabs"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "020-26126867",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Pune is highly safe and civilized, enjoying an excellent social atmosphere thanks to its large student population and tech professionals.",
      womenSafety: "Widely regarded as very safe for women; public spaces are active, and app-based transport is highly reliable late into the evening.",
      localBehaviour: "Locals take immense pride in their rich Marathi language, history, and literature, and are very polite to visitors.",
      scamAlerts: [
        "Local auto-rickshaws charging extra flat rates to tourists traveling late from the railway station.",
        "Unregulated local tour guides charging high prices for short historical walks around Shaniwar Wada."
      ],
      emergencyTips: [
        "Visit the traditional bakeries in the camp area to enjoy the absolute best local cookies and tea cakes.",
        "Make use of the growing Pune Metro line to easily bypass busy road traffic."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=gS670B7gXo0",
    isActive: true,
    placesToVisit: [
      {
        title: "Shaniwar Wada",
        image: "https://images.unsplash.com/photo-1611637405510-746973dfd71c?auto=format&fit=crop&w=600&q=80",
        description: "The historic, fortified seat of the Peshwas of the Maratha Empire, famous for its grand stone walls and majestic gateway arches.",
        category: "monument",
        timings: "08:00 AM - 06:30 PM",
        entryFee: "₹25 for Indians"
      },
      {
        title: "Aga Khan Palace",
        image: "https://images.unsplash.com/photo-1600664551711-667781b0a701?auto=format&fit=crop&w=600&q=80",
        description: "A beautiful, historic Italian-style palace with spacious lawns, famous for serving as a prison for Mahatma Gandhi during the freedom movement.",
        category: "monument",
        timings: "09:00 AM - 05:30 PM",
        entryFee: "₹35 for Indians"
      },
      {
        title: "Sinhagad Fort",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80",
        description: "A majestic hilltop fortress offering sweeping views of the surrounding hills, famous for its historic Maratha battle history.",
        category: "monument",
        timings: "05:00 AM - 06:00 PM",
        entryFee: "₹50 for Vehicle Entry"
      }
    ]
  },
  {
    name: "Mumbai",
    state: "Maharashtra",
    coordinates: { lat: 19.0760, lng: 72.8777 },
    heroImage: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1200&q=80",
    tagline: "The City of Dreams",
    description: "An energetic coastal financial center that never sleeps, Mumbai is a mesmerizing sensory landscape where astronomical wealth meets vibrant everyday grit. Built on an archipelago of seven original islands, this powerhouse hosts India's premier financial institutions, the glamorous film industry of Bollywood, and a beautiful Art Deco architectural heritage along Marine Drive. It thrives on the unstoppable collective drive of its citizens.",
    famousFor: ["Gateway of India", "Marine Drive", "Local Trains", "Bollywood Film Culture", "Vada Pav Street Food"],
    bestMonths: ["November", "December", "January", "February", "March"],
    avoidMonths: ["June", "July", "August", "September"],
    tags: ["Cosmopolitan", "Coastal", "Urban", "Entertainment", "Financial"],
    transport: {
      airport: "Chhatrapati Shivaji Maharaj International Airport (BOM)",
      railwayStation: "Chhatrapati Shivaji Maharaj Terminus (CSMT), Mumbai Central (MMCT)",
      busStand: "Mumbai Central MSRTC Depot",
      metroAvailable: true,
      localTransport: "Mumbai Local Trains, Iconic Black & Yellow Taxis, Auto-rickshaws (Suburbs only), and BEST Buses"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "022-22074333",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Mumbai is exceptionally safe at all hours of the night due to its highly active public street life and constant police patrols.",
      womenSafety: "Consistently rated as India's safest urban area for women; female solo travelers can easily travel safely late into the evening.",
      localBehaviour: "Citizens are efficient, professional, respectful of personal boundaries, and unified by a strong pride in the unique 'Mumbai spirit'.",
      scamAlerts: [
        "Unlicensed seaside guides charging high rates for short walks around the Gateway of India plaza.",
        "Overpriced taxi operators near major airport arrival terminals refusing to activate standard digital distance meters."
      ],
      emergencyTips: [
        "Avoid boarding rush-hour local trains during morning and evening commuter peaks to prevent getting caught in heavy crowds.",
        "Keep a close eye on weather apps if visiting during the monsoon season, as heavy rains can cause localized flooding."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=gS670B7gXo0",
    isActive: true,
    placesToVisit: [
      {
        title: "Gateway of India",
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80",
        description: "An imposing 26-meter basalt triumphal arch built to commemorate the 1911 royal visit of King George V, overlooking the Arabian Sea.",
        category: "monument",
        timings: "Open 24 Hours",
        entryFee: "Free Entry"
      },
      {
        title: "Marine Drive",
        image: "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?auto=format&fit=crop&w=600&q=80",
        description: "A spectacular 3.6-kilometer C-shaped concrete coastal promenade that transforms into a brilliant 'Queen's Necklace' of street lights at night.",
        category: "park",
        timings: "Open 24 Hours",
        entryFee: "Free Entry"
      },
      {
        title: "Chhatrapati Shivaji Maharaj Terminus",
        image: "https://images.unsplash.com/photo-1605007494545-2bc25049b1ca?auto=format&fit=crop&w=600&q=80",
        description: "A historic, beautifully detailed Victorian Gothic Revival railway terminus and UNESCO World Heritage site serving thousands of daily commuters.",
        category: "monument",
        timings: "Open 24 Hours",
        entryFee: "Free Entry"
      },
      {
        title: "Elephanta Caves",
        image: "https://images.unsplash.com/photo-1599924537151-df4db14070cb?auto=format&fit=crop&w=600&q=80",
        description: "An island network of ancient rock-cut cave temples dedicated to Lord Shiva, featuring magnificent monumental sculptures just a short ferry ride away.",
        category: "monument",
        timings: "09:00 AM - 05:30 PM (Closed on Mondays)",
        entryFee: "₹40 for Indians, ₹600 for Foreign Nationals"
      }
    ]
  },
  {
    name: "Jaipur",
    state: "Rajasthan",
    coordinates: { lat: 26.9124, lng: 75.7873 },
    heroImage: "https://images.unsplash.com/photo-1477584322811-5a39ece130a3?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Pink City",
    description: "Conceived according to ancient Vastu Shastra principles in 1727, Jaipur is a vibrant visual celebration of royal Rajput pride and heritage. Dressed in its iconic terracotta-pink hue to welcome British royalty, the historic walled city features a beautiful landscape of palaces, ancient astronomical observatories, and busy bazaars. Today, it remains an essential cornerstone of the classic Golden Triangle, charming travelers with its grand architecture and rich artistic traditions.",
    famousFor: ["Hawa Mahal", "Amer Fort Palace", "Handblock Textiles", "Gemstone Jewelry", "Royal Heritage Architecture"],
    bestMonths: ["October", "November", "December", "January", "February", "March"],
    avoidMonths: ["May", "June", "July"],
    tags: ["Royal", "Heritage", "Historical", "Shopping", "Artisanal"],
    transport: {
      airport: "Jaipur International Airport (JAI)",
      railwayStation: "Jaipur Junction Railway Station (JP)",
      busStand: "Sindhi Camp ISBT Terminus",
      metroAvailable: true,
      localTransport: "E-rickshaws, Traditional Auto-rickshaws, App Cabs, and RSRTC City Buses"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "0141-2223070",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Jaipur welcomes global travelers with a safe environment, though visitors should expect high merchant energy around core retail corridors.",
      womenSafety: "The city has a helpful and reliable tourist police presence, making it very safe for solo female travelers during general daytime exploration.",
      localBehaviour: "Locals are proud of their royal traditions, warm in their hospitality, and highly skilled in classic Rajasthani arts and culinary traditions.",
      scamAlerts: [
        "Aggressive rickshaw operators claiming a destination is closed to redirect tourists to commission-paying gemstone factories.",
        "Overpriced street gemstone shops offering fake international export certificates to unsuspecting buyers."
      ],
      emergencyTips: [
        "Purchase a multi-attraction composite ticket to enjoy smooth entry across all major state-managed monuments.",
        "Politely decline unsolicited street guides who approach you outside fort entry zones."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=gS670B7gXo0",
    isActive: true,
    placesToVisit: [
      {
        title: "Hawa Mahal",
        image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=600&q=80",
        description: "An iconic five-story pink sandstone palace featuring 953 small window screens designed to let royal ladies observe everyday street life safely.",
        category: "monument",
        timings: "09:00 AM - 05:00 PM",
        entryFee: "₹50 for Indians, ₹200 for Foreign Nationals"
      },
      {
        title: "Amer Fort",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80",
        description: "A majestic hilltop fortress overlooking Maota Lake, famous for its grand courtyards and the dazzling glass mosaic art of the Sheesh Mahal.",
        category: "monument",
        timings: "08:00 AM - 05:30 PM, 06:30 PM - 09:15 PM",
        entryFee: "₹100 for Indians, ₹500 for Foreign Nationals"
      },
      {
        title: "City Palace",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80",
        description: "A beautiful, active royal residence showcasing a rich mix of Rajasthani and Mughal architectural styles, alongside impressive history museums.",
        category: "monument",
        timings: "09:30 AM - 05:00 PM, 07:00 PM - 10:00 PM",
        entryFee: "₹300 for Indians, ₹700 for Foreign Nationals"
      },
      {
        title: "Jantar Mantar",
        image: "https://images.unsplash.com/photo-1628134785730-10b2df7fa8e1?auto=format&fit=crop&w=600&q=80",
        description: "A fascinating UNESCO World Heritage site featuring nineteen 18th-century stone astronomical instruments, including the world's largest sundial.",
        category: "monument",
        timings: "09:00 AM - 04:30 PM",
        entryFee: "₹50 for Indians, ₹300 for Foreign Nationals"
      }
    ]
  },
  {
    name: "Varanasi",
    state: "Uttar Pradesh",
    coordinates: { lat: 25.3176, lng: 83.0062 },
    heroImage: "https://images.unsplash.com/photo-1561361531-99522c3a1251?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Eternal City",
    description: "Regarded as one of the oldest continuously inhabited cities on Earth, Varanasi is the spiritual core of Hindu culture. Sprawled along the sacred curve of the River Ganges, this ancient center is a powerful space of ritual devotion and classical art. From the rhythmic chanting of the evening Ganga Aarti to the historic weaving communities producing fine Banarasi silk, it offers a deeply moving journey into timeless traditions.",
    famousFor: ["Ganga Aarti Rituals", "Ghats of Varanasi", "Kashi Vishwanath Temple", "Banarasi Silk Sarees", "Street Food and Lassi"],
    bestMonths: ["October", "November", "December", "January", "February", "March"],
    avoidMonths: ["May", "June", "July", "August"],
    tags: ["Spiritual", "Religious", "Ancient", "Cultural", "Heritage"],
    transport: {
      airport: "Lal Bahadur Shastri International Airport (VNS)",
      railwayStation: "Varanasi Junction (BSB), Pandit Deen Dayal Upadhyaya Junction (DDU)",
      busStand: "Chaudhary Charan Singh Central Bus Station",
      metroAvailable: false,
      localTransport: "Cycle-rickshaws, E-rickshaws, Auto-rickshaws, Walking paths, and Traditional Wooden Riverboats"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "0542-2505033",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Varanasi is a welcoming destination for global travelers, but the dense crowds and narrow alleys require a bit of awareness to enjoy smoothly.",
      womenSafety: "The main ghats are active, well-lit, and safe well into the evening; however, it's a good idea to avoid late-night walks through deep, unlit alleys.",
      localBehaviour: "Locals are deeply connected to their ancient customs, expressive, and very helpful in sharing insights about the city's unique history.",
      scamAlerts: [
        "Unscrupulous boat operators dramatically increasing prices halfway through a river trip.",
        "Independent guides insisting on taking you to specific silk factories under the pretense of a cultural showcase."
      ],
      emergencyTips: [
        "Agree on boat ride pricing upfront before stepping onto any river vessel.",
        "Wear comfortable footwear suitable for exploring the historical, stone-paved lanes."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=pAnvR6f-PQA",
    isActive: true,
    placesToVisit: [
      {
        title: "Dashashwamedh Ghat",
        image: "https://images.unsplash.com/photo-1601962369400-da15a1334c7a?auto=format&fit=crop&w=600&q=80",
        description: "The most active and famous ghat on the Ganges, where priests perform the spectacular, synchronized Ganga Aarti ceremony every evening.",
        category: "monument",
        timings: "Open 24 Hours",
        entryFee: "Free Entry"
      },
      {
        title: "Kashi Vishwanath Temple",
        image: "https://images.unsplash.com/photo-1627894154944-9388c2134a65?auto=format&fit=crop&w=600&q=80",
        description: "A highly revered Hindu temple dedicated to Lord Shiva, famous for its magnificent gold-plated spires and rich spiritual history.",
        category: "temple",
        timings: "03:00 AM - 11:00 PM",
        entryFee: "Free Entry"
      },
      {
        title: "Assi Ghat",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80",
        description: "A peaceful ghat at the southern end of the city, famous for early morning yoga sessions, classical music, and beautiful sunrise boat trips.",
        category: "park",
        timings: "Open 24 Hours",
        entryFee: "Free Entry"
      },
      {
        title: "Sarnath",
        image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80",
        description: "A quiet, nearby historical park featuring ancient stupas and ruins where Lord Buddha gave his first sermon after attaining enlightenment.",
        category: "monument",
        timings: "06:00 AM - 05:00 PM",
        entryFee: "₹40 for Indians, ₹300 for Foreign Nationals"
      }
    ]
  },
  {
    name: "Bengaluru",
    state: "Karnataka",
    coordinates: { lat: 12.9716, lng: 77.5946 },
    heroImage: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Silicon Valley of India",
    description: "Transitioning beautifully from a quiet colonial retirement town into India's premier high-tech hub, Bengaluru offers an exciting modern lifestyle. Blessed with a wonderfully mild year-round climate, the city balances its bustling tech campuses and world-class craft breweries with historic parks and old royal architecture. It stands out as a creative space for technology, modern dining, and dynamic urban culture.",
    famousFor: ["Information Technology Parks", "Craft Beer Industry", "Cubbon Park Greenery", "Lalbagh Botanical Gardens", "Filter Coffee Culture"],
    bestMonths: ["October", "November", "December", "January", "February"],
    avoidMonths: ["April", "May"],
    tags: ["Metropolitan", "Modern", "Urban", "Tech-Hub", "Nature"],
    transport: {
      airport: "Kempegowda International Airport (BLR)",
      railwayStation: "KSR Bengaluru City Railway Station (SBC), Yesvantpur Junction (YPR)",
      busStand: "Kempegowda Bus Station (Majestic)",
      metroAvailable: true,
      localTransport: "Namma Metro System, App-based Cabs (Ola/Uber/Rapido), BMTC Volvo Buses, and Local Auto-rickshaws"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "080-22352828",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Bengaluru is highly safe and modern, featuring an active young workforce and a relaxed, welcoming social scene.",
      womenSafety: "The city enjoys an excellent reputation for safety, with well-lit streets and highly reliable app-based transport options available across the city.",
      localBehaviour: "The population is diverse and helpful, with residents communicating smoothly in English, Hindi, and Kannada.",
      scamAlerts: [
        "Local auto-rickshaw drivers charging flat, high rates at late hours instead of using the standard electronic meter.",
        "Independent apartment brokers charging extra processing fees to short-term tourist rentals."
      ],
      emergencyTips: [
        "Utilize the efficient Namma Metro line to save time and beat the city's busy peak-hour traffic.",
        "Download local app-cabs directly for standard, reliable transport pricing throughout your stay."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=kolkata_tour_placeholder",
    isActive: true,
    placesToVisit: [
      {
        title: "Cubbon Park",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80",
        description: "A gorgeous 300-acre park located right in the city center, offering beautiful shady walking paths and a peaceful getaway from busy streets.",
        category: "park",
        timings: "06:00 AM - 06:00 PM (Closed on Mondays)",
        entryFee: "Free Entry"
      },
      {
        title: "Bangalore Palace",
        image: "https://images.unsplash.com/photo-1588164344073-195fa809ef04?auto=format&fit=crop&w=600&q=80",
        description: "A striking royal residence built in 1887, inspired by England's Windsor Castle and featuring grand wooden architecture and historic photo collections.",
        category: "monument",
        timings: "10:00 AM - 05:30 PM",
        entryFee: "₹230 for Indians, ₹460 for Foreign Nationals"
      },
      {
        title: "Lalbagh Botanical Garden",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80",
        description: "A historic 240-acre botanical garden featuring India's largest collection of tropical plants and an elegant, British-era glass greenhouse.",
        category: "park",
        timings: "06:00 AM - 07:00 PM",
        entryFee: "₹25 for Indians, ₹300 for Foreign Nationals"
      },
      {
        title: "Tipu Sultan's Summer Palace",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
        description: "An elegant two-story palace built entirely of pure teakwood, showcasing beautiful pillars, arches, and historical balconies.",
        category: "monument",
        timings: "10:00 AM - 06:00 PM",
        entryFee: "₹20 for Indians, ₹250 for Foreign Nationals"
      }
    ]
  },
  {
    name: "Amritsar",
    state: "Punjab",
    coordinates: { lat: 31.6340, lng: 74.8723 },
    heroImage: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Jewel of Punjab",
    description: "Amritsar is the spiritual and cultural heart of the Sikh religion, globally revered for housing the breathtaking Harmandir Sahib (Golden Temple). Deeply marked by historical milestones and patriotic heritage, the city features a vibrant network of bustling old-town narrow lanes. Beyond its profound spiritual essence, it is legendary as a world-class food capital celebrated for its rich, buttery Punjabi cuisine and unmatched community hospitality.",
    famousFor: ["Golden Temple", "Wagah Border Ceremony", "Amritsari Kulcha", "Jallianwala Bagh", "Phulkari Embroidery"],
    bestMonths: ["October", "November", "December", "January", "February", "March"],
    avoidMonths: ["April", "May", "June", "July"],
    tags: ["Spiritual", "Historical", "Gastronomy", "Patriotic"],
    transport: {
      airport: "Sri Guru Ram Das Jee International Airport (ATQ)",
      railwayStation: "Amritsar Junction Railway Station (ASR)",
      busStand: "Amritsar Central Bus Stand",
      metroAvailable: false,
      localTransport: "Auto-rickshaws, E-rickshaws, Cycle-rickshaws, App-based Cabs, and MetroBus BRTS System"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "0183-2402452",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Amritsar is incredibly welcoming and safe for visitors, keeping a secure, peaceful environment due to massive global pilgrim traffic.",
      womenSafety: "Highly safe for solo female travelers; the area surrounding the central temple operates smoothly around the clock with zero safety issues.",
      localBehaviour: "Locals are warm, incredibly generous, and famous for their lively, helpful nature when hosting outsiders.",
      scamAlerts: [
        "Unregulated local auto drivers overcharging tourists for short direct trips to the Wagah Border outpost.",
        "Street side souvenir shops passing off mass-produced textiles as authentic, handmade Phulkari work pieces."
      ],
      emergencyTips: [
        "Make use of the free institutional shuttle buses running directly from the main railway station to the Golden Temple complex.",
        "Ensure your head is fully covered with a scarf or bandana before steping inside the sacred temple premises."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=23m6C0-pS8A",
    isActive: true,
    placesToVisit: [
      {
        title: "The Golden Temple",
        image: "https://images.unsplash.com/photo-1600100397608-f010e42edaba?auto=format&fit=crop&w=600&q=80",
        description: "The most sacred shrine in Sikhism, featuring a spectacular gold-gilded marble temple structure standing peacefully in the middle of a massive holy water tank.",
        category: "temple",
        timings: "Open 24 Hours",
        entryFee: "Free Entry"
      },
      {
        title: "Wagah Border",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80",
        description: "An intense, high-energy military border post hosting a highly synchronized daily sunset lowering-of-the-flags ceremony between India and Pakistan.",
        category: "monument",
        timings: "04:00 PM - 06:00 PM Daily",
        entryFee: "Free Entry"
      },
      {
        title: "Jallianwala Bagh",
        image: "https://images.unsplash.com/photo-1621258652482-dbfbc77b789a?auto=format&fit=crop&w=600&q=80",
        description: "A moving historical memorial public garden complex preserving bullet-pitted walls and the historic martyrdom well from the 1919 massacre.",
        category: "monument",
        timings: "06:30 AM - 07:30 PM",
        entryFee: "Free Entry"
      }
    ]
  },
  {
    name: "Agartala",
    state: "Tripura",
    coordinates: { lat: 23.8315, lng: 91.2868 },
    heroImage: "https://images.unsplash.com/photo-1638274737233-a3028bc0da03?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Palace City of the Northeast",
    description: "Agartala, the capital city of Tripura, is a beautiful offbeat destination located along the Haora River. Blending a proud history of royal Manikya kings with rich tribal customs and clean natural spaces, the city stands out for its magnificent white marble palaces, tranquil lakes, and direct border access to Bangladesh.",
    famousFor: ["Ujjayanta Palace", "Neermahal Water Palace", "Bamboo Handicrafts", "Akhaura Border Checkpost", "Tripureswari Temple"],
    bestMonths: ["October", "November", "December", "January", "February", "March"],
    avoidMonths: ["June", "July", "August", "September"],
    tags: ["Heritage", "Royal", "Offbeat", "Cultural"],
    transport: {
      airport: "Maharaja Bir Bikram Airport (IXA)",
      railwayStation: "Agartala Railway Station (AGTL)",
      busStand: "Nagerjala Central Bus Terminus, Radhanagar Bus Stand",
      metroAvailable: false,
      localTransport: "Paddle Rickshaws, Auto-rickshaws, Shared E-rickshaws, and Local Public Buses"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "0381-2325930",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Agartala is exceptionally safe, quiet, and clean, experiencing minimal crime metrics due to close community integration.",
      womenSafety: "Extremely safe and comfortable for solo female travelers; streets naturally empty out early by 09:00 PM, so it is best to plan your travels during active daytime hours.",
      localBehaviour: "Locals are deeply polite, highly educated, modest, and very proud of their local Bengali and tribal cultural heritage.",
      scamAlerts: [
        "Unregulated local auto drivers quoting higher flat rates to non-local tourists near the state airport gates.",
        "Bazaars charging inflated tourist prices for delicate, handmade cane or bamboo furniture pieces."
      ],
      emergencyTips: [
        "Always settle on auto-rickshaw fares before getting in, or rely on shared e-rickshaws for short trips.",
        "Plan a late afternoon trip to the Akhaura border to witness the highly synchronized joint beating retreat ceremony with Bangladesh."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=FOf_4KAnvrs",
    isActive: true,
    placesToVisit: [
      {
        title: "Ujjayanta Palace",
        image: "https://images.unsplash.com/photo-1638274737233-a3028bc0da03?auto=format&fit=crop&w=600&q=80",
        description: "A spectacular, grand white marble royal palace building featuring beautiful Mughal-style tile gardens and serving as a state heritage museum.",
        category: "monument",
        timings: "10:00 AM - 05:00 PM (Closed on Mondays)",
        entryFee: "₹20 for Indians"
      },
      {
        title: "Neermahal",
        image: "https://images.unsplash.com/photo-1590418606746-018840f9cd0f?auto=format&fit=crop&w=600&q=80",
        description: "An incredible, historic royal water palace structure sitting in the middle of Lake Rudrasagar, showcasing a beautiful blend of Hindu and Islamic designs.",
        category: "monument",
        timings: "09:00 AM - 05:00 PM",
        entryFee: "Requires motorboat ride (approx. ₹50-₹100)"
      },
      {
        title: "Unakoti",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80",
        description: "A magical, ancient pilgrimage site located nearby, featuring massive, mysterious rock-cut bas-relief carvings of deities hidden deep inside a hillside forest.",
        category: "temple",
        timings: "06:00 AM - 06:00 PM",
        entryFee: "₹30 for Indians"
      }
    ]
  },
  {
    name: "Shimla",
    state: "Himachal Pradesh",
    coordinates: { lat: 31.1049, lng: 77.1640 },
    heroImage: "https://images.unsplash.com/photo-1571401888144-cb2bb31e7c53?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Summer Capital of the Raj",
    description: "Perched high along a 12-kilometer mountain ridge at an altitude of 7,467 feet, Shimla is a legendary mountain destination in the Himalayas. Filled with grand colonial Tudor and neo-Gothic architecture, the city features a famous pedestrian-only Mall Road. Surrounded by thick pine, oak, and cedar forests, it offers a classic cool climate experience highlighted by its heritage toy train lines.",
    famousFor: ["The Ridge & Mall Road", "Kalka-Shimla Toy Train", "Colonial Architecture", "Jakhoo Temple Monkeys", "Snowfall Vacations"],
    bestMonths: ["March", "April", "May", "June", "October", "November", "December"],
    avoidMonths: ["July", "August", "September"],
    tags: ["Mountain", "Heritage", "Scenic", "Snow"],
    transport: {
      airport: "Shimla Airport, Jubbarhatti (SLV) - 22km away",
      railwayStation: "Shimla Toy Train Railway Station (SML)",
      busStand: "Shimla ISBT Central Depot (Tutikandi)",
      metroAvailable: false,
      localTransport: "Local Shared Buses, App-based Cabs, Union Taxis, and Walking Trails (Vehicles banned on Mall Road)"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "0177-2658302",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Shimla is highly safe, clean, and structured, boasting very low crime metrics due to heavily active tourism policing.",
      womenSafety: "Extremely safe for solo female backpackers; pedestrian-only central zones are active and well-patrolled late into the evening.",
      localBehaviour: "Locals are civilized, polite, soft-spoken, and passionate about keeping their mountain spaces clean.",
      scamAlerts: [
        "Hotel touts near the main bus stands claiming paths are blocked to redirect you to overpriced private stays.",
        "Unregulated adventure vendors charging high prices for basic horse rides around Kufri viewpoints."
      ],
      emergencyTips: [
        "Pre-book your Kalka-Shimla toy train tickets weeks in advance via the official IRCTC portal to secure a seat.",
        "Keep your personal items and food tightly packed when visiting Jakhoo Temple to avoid curious monkeys."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=S0T8m-YhBf8",
    isActive: true,
    placesToVisit: [
      {
        title: "The Ridge & Mall Road",
        image: "https://images.unsplash.com/photo-1562670218-fac0be39370a?auto=format&fit=crop&w=600&q=80",
        description: "A wide, beautiful open pedestrian space offering stunning mountain views, historic timber churches, and lively cafe shopping spots.",
        category: "park",
        timings: "Open 24 Hours",
        entryFee: "Free Entry"
      },
      {
        title: "Kalka-Shimla Railway",
        image: "https://images.unsplash.com/photo-1622308644521-4ea69022e37e?auto=format&fit=crop&w=600&q=80",
        description: "A spectacular, historic UNESCO World Heritage toy train that winds through deep valleys, rocky tunnels, and gorgeous mountain forests.",
        category: "monument",
        timings: "Runs on strict schedules daily",
        entryFee: "₹50 to ₹500 depending on class booked"
      },
      {
        title: "Jakhoo Hill & Temple",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80",
        description: "The highest mountain peak in the city, hosting an ancient temple dedicated to Lord Hanuman with a massive, iconic 108-foot tall orange statue.",
        category: "temple",
        timings: "06:00 AM - 08:00 PM",
        entryFee: "Free Entry"
      }
    ]
  },
  {
    name: "Darjeeling",
    state: "West Bengal",
    coordinates: { lat: 27.0392, lng: 88.2639 },
    heroImage: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Queen of the Hills",
    description: "Nestled high up in the Lesser Himalayas at an altitude of 6,700 feet, Darjeeling is a world-famous mountain destination. Overlooked by the snow-covered peaks of Mount Kanchenjunga, the town is renowned for its sweeping green tea gardens, misty valley view trails, and rich Tibetan cultural history.",
    famousFor: ["Darjeeling Tea Estates", "Tiger Hill Sunrise", "Himalayan Toy Train", "Ghoom Monastery", "Mount Kanchenjunga Views"],
    bestMonths: ["October", "November", "December", "March", "April", "May"],
    avoidMonths: ["June", "July", "August", "September"],
    tags: ["Mountain", "Nature", "Scenic", "Romantic"],
    transport: {
      airport: "Bagdogra International Airport (IXB) - 70km away / Connected by shared taxis",
      railwayStation: "New Jalpaiguri Railway Station (NJP) - 75km away",
      busStand: "Darjeeling Central Bus Stand",
      metroAvailable: false,
      localTransport: "Shared Local Taxis (Land Rovers/Sumos), Shared Jeeps, and Walking Trails"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "0354-2254203",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Darjeeling is exceptionally safe, quiet, and welcoming, keeping a relaxed mountain social atmosphere throughout the day.",
      womenSafety: "Extremely safe for solo female travelers; the mountain town is very quiet, and markets generally empty out early, making it best to reach your stay by 08:30 PM.",
      localBehaviour: "Locals are exceptionally gentle, soft-spoken, creative, and highly professional in running boutique hospitality experiences.",
      scamAlerts: [
        "Local tea shops selling lower-grade compound blends passed off as premium first-flush Darjeeling tea leaves.",
        "Private jeep operators overcharging tourists for early morning sunrise trips to Tiger Hill view spots."
      ],
      emergencyTips: [
        "Head out by 04:00 AM for Tiger Hill to beat peak vehicle traffic and catch the spectacular sunrise over Mount Kanchenjunga.",
        "Always purchase authentic tea from official state-authorized tea garden outlets or trusted cooperative shops."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=A8vEayY5vXk",
    isActive: true,
    placesToVisit: [
      {
        title: "Tiger Hill",
        image: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=600&q=80",
        description: "A world-famous mountain peak viewpoint offering spectacular, breathtaking sunrise views illuminating the snowy slopes of Mount Kanchenjunga.",
        category: "park",
        timings: "04:00 AM - 06:00 PM",
        entryFee: "₹50 per vehicle"
      },
      {
        title: "Darjeeling Himalayan Railway",
        image: "https://images.unsplash.com/photo-1622308644521-4ea69022e37e?auto=format&fit=crop&w=600&q=80",
        description: "The legendary, historic UNESCO World Heritage steam toy train that winds gracefully through scenic mountain loops and local bazaars.",
        category: "monument",
        timings: "Runs on strict schedules daily",
        entryFee: "₹1,000 to ₹1,500 depending on steam/diesel option"
      },
      {
        title: "Padmaja Naidu Himalayan Zoological Park",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80",
        description: "A unique, world-class high-altitude zoo complex focused on conserving rare Himalayan wildlife like Red Pandas and Snow Leopards.",
        category: "park",
        timings: "08:30 AM - 04:00 PM (Closed on Thursdays)",
        entryFee: "₹60 for Indians"
      }
    ]
  },
  {
    name: "Mysuru",
    state: "Karnataka",
    coordinates: { lat: 12.2958, lng: 76.6394 },
    heroImage: "https://images.unsplash.com/photo-1600100397608-f010e42edaba?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Cultural Capital of Karnataka",
    description: "Renowned globally for its grand royal heritage and pristine cleanliness, Mysuru (Mysore) is a mesmerizing city steeped in history. As the former seat of the majestic Wadiyar Dynasty, it presents a stunning canvas of sprawling palaces, manicured gardens, and traditional heritage buildings. Famed for its production of fine premium silk, aromatic sandalwood oil, and authentic Ashtanga yoga schools, it offers an incredibly civilized and culturally rich travel experience.",
    famousFor: ["Mysore Palace", "Mysore Dasara Festival", "Pure Sandalwood & Silk", "Mysore Pak Sweet", "Ashtanga Yoga Centers"],
    bestMonths: ["October", "November", "December", "January", "February", "March"],
    avoidMonths: ["April", "May"],
    tags: ["Royal", "Heritage", "Cultural", "Spiritual"],
    transport: {
      airport: "Mysuru Airport (MYQ) / Limited Flights / Connectivity via Bengaluru Airport",
      railwayStation: "Mysuru Junction Railway Station (MYS)",
      busStand: "Mysuru KSRTC Central Bus Stand",
      metroAvailable: false,
      localTransport: "Auto-rickshaws, App Cabs, KSRTC City Buses, and Rented Bicycles"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "0821-2422000",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Mysuru is widely awarded as one of the cleanest and safest cities in India, offering a peaceful environment with minimal urban hassle.",
      womenSafety: "Extremely safe for solo female backpackers and international yoga students; public areas are highly respectable and well-patrolled.",
      localBehaviour: "The local residents are soft-spoken, deeply proud of their artistic traditions, and highly helpful when guiding visitors.",
      scamAlerts: [
        "Street touts hovering near palace gates selling cheap synthetic wood pieces passed off as genuine sandalwood carvings.",
        "Unlicensed silk shops offering fake mixed fabrics claiming to be authentic, government-certified Mysore Silk sarees."
      ],
      emergencyTips: [
        "Plan your visit to the Mysore Palace on a Sunday evening or during public holidays to witness the spectacular sight of its exterior lit by 100,000 bulbs.",
        "Always purchase authentic sandalwood goods directly from the official government-authorized Cauvery Handicrafts Emporium."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=F3_6eN28oYI",
    isActive: true,
    placesToVisit: [
      {
        title: "Mysore Palace",
        image: "https://images.unsplash.com/photo-1600100397608-f010e42edaba?auto=format&fit=crop&w=600&q=80",
        description: "A spectacular Indo-Saracenic architectural masterpiece that serves as one of the most visited monument sites in India, showcasing beautiful stained-glass ceilings and royal thrones.",
        category: "monument",
        timings: "10:00 AM - 05:30 PM",
        entryFee: "₹100 for Indians, ₹500 for Foreign Nationals"
      },
      {
        title: "Chamundeshwari Temple",
        image: "https://images.unsplash.com/photo-1608960251786-dbcccae866a4?auto=format&fit=crop&w=600&q=80",
        description: "A historic temple perched majestically on top of the Chamundi Hills, featuring a striking, seven-tiered gopuram and offering sweeping views of the city.",
        category: "temple",
        timings: "07:30 AM - 02:00 PM, 03:30 PM - 06:00 PM, 07:30 PM - 09:00 PM",
        entryFee: "Free Entry"
      },
      {
        title: "Brindavan Gardens",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80",
        description: "A sprawling, beautifully terraced garden layout situated right below the Krishna Raja Sagara Dam, famous for its grand synchronized musical fountain shows.",
        category: "park",
        timings: "08:00 AM - 08:00 PM",
        entryFee: "₹50 for Indians"
      }
    ]
  },
  {
    name: "Rajgir",
    state: "Bihar",
    coordinates: { lat: 25.0262, lng: 85.4174 },
    heroImage: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Valley of Peace and Sovereignty",
    description: "Encircled by five gorgeous green hills, Rajgir is a deeply sacred, historic valley town. As the first capital of the mighty Magadha Empire, it serves as a legendary spiritual destination for both Buddhism and Jainism. Famous for its natural hot sulfur springs and modern architectural wonders, the town offers a deeply peaceful retreat layered in millennia of meditation history.",
    famousFor: ["Vishwa Shanti Stupa", "Glass Skywalk Bridge", "Natural Hot Springs", "Gridhakuta (Vulture Peak)", "Ancient Cyclopean Walls"],
    bestMonths: ["October", "November", "December", "January", "February", "March"],
    avoidMonths: ["April", "May", "June", "July", "August"],
    tags: ["Spiritual", "Historical", "Ancient", "Nature"],
    transport: {
      airport: "Gaya Airport (GAY) - 75km away / Patna Airport (PAT) - 100km away",
      railwayStation: "Rajgir Railway Station (RGD)",
      busStand: "Rajgir Central Bus Stand",
      metroAvailable: false,
      localTransport: "Traditional Horse Tongs, Auto-rickshaws, E-rickshaws, and Ropeway Cable Cars"
    },
    emergencyNumbers: {
      police: "100",
      ambulance: "102",
      touristHelpline: "06112-255160",
      womenHelpline: "1091"
    },
    safetyInfo: {
      generalSafety: "Rajgir is highly safe and peaceful, keeping a secure, respectful environment monitored by dedicated tourist police infrastructure.",
      womenSafety: "Very secure for solo female travelers due to the family-dense spiritual crowd; nature trail excursions should simply be planned during active daylight hours.",
      localBehaviour: "Locals are modest, soft-spoken, deeply religious, and very helpful when guiding travelers through pilgrimage routes.",
      scamAlerts: [
        "Independent religious guides demanding extra hidden ritual fees near the hot spring enclosures.",
        "Local transport operators quoting higher flat rates to tourists traveling directly to the hilltop ropeway stations."
      ],
      emergencyTips: [
        "Take the aerial ropeway cable car to reach the spectacular hilltop Vishwa Shanti Stupa comfortably.",
        "Ensure you book your tickets online in advance via the Bihar Tourism portal to walk across the famous Glass Skywalk Bridge."
      ]
    },
    videoTour: "https://www.youtube.com/watch?v=vV_uYw0Wvrs",
    isActive: true,
    placesToVisit: [
      {
        title: "Vishwa Shanti Stupa",
        image: "https://images.unsplash.com/photo-1590418606746-018840f9cd0f?auto=format&fit=crop&w=600&q=80",
        description: "A monumental, grand white marble peace pagoda standing majestically on top of Ratnagiri Hill, featuring four golden statues of Lord Buddha.",
        category: "monument",
        timings: "09:00 AM - 05:30 PM",
        entryFee: "Free Entry (Ropeway ticket separate)"
      },
      {
        title: "Rajgir Glass Skywalk",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80",
        description: "A breathtaking, modern architectural glass bridge structure jutting out over a scenic valley chasm, offering exciting panoramic viewpoints.",
        category: "park",
        timings: "09:00 AM - 04:30 PM (Closed on Mondays)",
        entryFee: "₹125 for Entry"
      },
      {
        title: "Gridhakuta (Vulture's Peak)",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80",
        description: "A historic, sacred hilltop rock formation where Lord Buddha delivered many of his most famous, core theological sermons.",
        category: "temple",
        timings: "07:00 AM - 05:00 PM",
        entryFee: "Free Entry"
      }
    ]
  }
];

module.exports=citiesData
