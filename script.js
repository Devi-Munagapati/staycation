// Build complete dataset with 8 to 10 rich destinations per month (100+ destinations across all 12 months)
const MONTHS_DATA = [
  {
    id: "january",
    number: "01",
    name: "January",
    short: "Jan",
    icon: "❄️",
    season: "winter",
    seasonLabel: "Peak Winter Wonder",
    weatherNote: "Crisp sunny days & snowy mountain peaks (-5°C to 28°C)",
    tagline: "Start your new year with powdery snow slopes, royal desert festivals, or idyllic warm tropical beaches.",
    bestFor: "Snow sports, Desert festivals, Tropical beaches, Luxury houseboats",
    bestPlacesSummary: "Gulmarg • Auli • Rann of Kutch • Goa • Jaisalmer • Alleppey • Maldives • Lapland • Dubai • Phuket",
    avoidNote: "Avoid high mountain passes like Manali-Leh or Rohtang (closed by 15-20 ft snow).",
    packingList: ["Thermal base layers (top & bottom)", "Heavy down jacket / parka", "Waterproof snow gloves & woolen beanie", "Polarized UV sunglasses (snow glare)", "Moisturizing cold cream & lip balm SPF 30"],
    places: [
      {
        id: "jan-gulmarg",
        name: "Gulmarg, Kashmir",
        country: "India",
        region: "India",
        vibe: "Snow & Mountains",
        award: "🏆 #1 Winter Snow Destination",
        rating: 4.9,
        temp: "-8°C to 2°C",
        duration: "4–5 Days",
        budget: "₹25,000 – ₹45,000",
        budgetNum: 25000,
        style: "Couples",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
        desc: "Gulmarg turns into a magical white wonderland with world-class powdery slopes and the world's second-highest cable car.",
        highlights: ["Gulmarg Gondola Phase 2 (13,780 ft)", "Skiing & Snowboarding Courses", "Igloo Café Experience", "Snowmobiling in Kongdoori"],
        itinerary: [
          "Day 1: Arrive Srinagar, scenic snow drive to Gulmarg, relax with hot Kashmiri Kahwa",
          "Day 2: Ride Gondola Phase 1 & 2 to Apharwat Peak, enjoy breathtaking snow vistas",
          "Day 3: Beginner ski lesson with certified instructors & snowmobile safari",
          "Day 4: Visit historic St. Mary's Church blanketed in snow and Strawberry Valley",
          "Day 5: Souvenir shopping in Srinagar (Pashmina & saffron) and departure"
        ],
        tip: "Book Gondola Phase 2 tickets at least 3-4 weeks ahead online as slots sell out instantly in January."
      },
      {
        id: "jan-auli",
        name: "Auli, Uttarakhand",
        country: "India",
        region: "India",
        vibe: "Adventure",
        award: "⭐ Skiing Paradise",
        rating: 4.8,
        temp: "-4°C to 6°C",
        duration: "4–5 Days",
        budget: "₹18,000 – ₹32,000",
        budgetNum: 18000,
        style: "Friends",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
        desc: "India's premier ski hub offering 360° panoramas of India's second-highest peak Nanda Devi.",
        highlights: ["Auli Ropeway from Joshimath", "Gurso Bugyal Snow Trek", "Artificial High Altitude Lake", "Nanda Devi Sunset Views"],
        itinerary: [
          "Day 1: Scenic drive from Rishikesh/Dehradun to Joshimath along Alaknanda river",
          "Day 2: Take Asia's longest ropeway up to Auli slopes and check into cliffside chalet",
          "Day 3: Skiing on certified slopes and trek to Gurso Bugyal viewpoints",
          "Day 4: Snow camping and stargazing under crystal-clear Himalayan skies",
          "Day 5: Return journey via Devprayag Sangam"
        ],
        tip: "Stay in GMVN wooden huts for direct walk-in access to the ski lift."
      },
      {
        id: "jan-rann",
        name: "Rann of Kutch, Gujarat",
        country: "India",
        region: "India",
        vibe: "Heritage & Culture",
        award: "✨ Full Moon Wonder",
        rating: 4.8,
        temp: "12°C to 25°C",
        duration: "3–4 Days",
        budget: "₹16,000 – ₹28,000",
        budgetNum: 16000,
        style: "Family",
        image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=900&q=80",
        desc: "An endless white salt desert gleaming under winter moonlight, packed with Kutchi folk songs and handicraft villages.",
        highlights: ["Rann Utsav Tent City", "Full Moon Salt Desert Walk", "Sunset at Kalo Dungar (Black Hill)", "UNESCO Dholavira Harappan Site"],
        itinerary: [
          "Day 1: Arrive Bhuj, visit Aina Mahal & proceed to Dhordo tent city",
          "Day 2: Explore handicrafts in Nirona & Hodka villages; sunset camel cart on White Rann",
          "Day 3: Day trip to Dholavira road through the pristine white desert",
          "Day 4: Sunrise over the salt crust, Kutchi breakfast and return flight from Bhuj"
        ],
        tip: "Plan your trip during the full moon (Purnima) week when the desert glitters like silver."
      },
      {
        id: "jan-goa",
        name: "North & South Goa",
        country: "India",
        region: "India",
        vibe: "Beach & Islands",
        award: "🏖️ Best Winter Sunshine",
        rating: 4.7,
        temp: "20°C to 30°C",
        duration: "4–6 Days",
        budget: "₹18,000 – ₹35,000",
        budgetNum: 18000,
        style: "Friends",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
        desc: "Pleasant ocean breezes, calm turquoise sea, beachfront shacks, and relaxed post-New Year vibes.",
        highlights: ["Palolem & Butterfly Beach Kayaking", "Fontainhas Latin Quarter Heritage Walk", "Chapora Fort Sunset", "Spice Plantation Tour & Goan Cuisine"],
        itinerary: [
          "Day 1: Arrive Goa, sunset drink at Morjim beach and fresh seafood dinner",
          "Day 2: Water sports at Calangute/Anjuna followed by sunset at Chapora Fort",
          "Day 3: Heritage walk through colorful Portuguese villas in Fontainhas, Panaji",
          "Day 4: Shift to South Goa: quiet sands of Palolem and dolphin boat safari",
          "Day 5: Dudhsagar Falls jeep safari & spice farm lunch before departure"
        ],
        tip: "Mid-to-late January gives you the best weather with 40% lower hotel rates than New Year's week."
      },
      {
        id: "jan-jaisalmer",
        name: "Jaisalmer & Thar Desert, Rajasthan",
        country: "India",
        region: "India",
        vibe: "Heritage & Culture",
        award: "🏜️ Golden Desert Fortress",
        rating: 4.8,
        temp: "10°C to 24°C",
        duration: "3–4 Days",
        budget: "₹15,000 – ₹27,000",
        budgetNum: 15000,
        style: "Couples",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
        desc: "Golden yellow sandstone havelis, a living medieval fort, and luxury glamping among undulating Thar sand dunes.",
        highlights: ["Living Jaisalmer Fort (Sonar Qila)", "Sam Sand Dunes Camel Safari", "Patwon Ki Haveli Architecture", "Folk Dance & Campfire Dinner"],
        itinerary: [
          "Day 1: Arrive Jaisalmer, walk the cobbled alleys of the Golden Fort and Gadisar Lake",
          "Day 2: Tour Patwon Ki Haveli, drive to Sam Sand Dunes for sunset camel ride and stargazing",
          "Day 3: Jeep dune bashing, visit mysterious abandoned village of Kuldhara",
          "Day 4: Taste Dal Baati Churma and shop for leather and mirror-work textiles"
        ],
        tip: "Sleep under the open desert sky on a star-bed in Sam dunes for an unforgettable night."
      },
      {
        id: "jan-tirupati",
        name: "Tirupati & Tirumala, Andhra Pradesh",
        country: "India",
        region: "India",
        vibe: "Temples & Divine",
        award: "🛕 World's Most Visited Sacred Shrine",
        rating: 5.0,
        temp: "17°C to 29°C",
        duration: "2–3 Days",
        budget: "₹8,000 – ₹18,000",
        budgetNum: 8000,
        style: "Family",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=900&q=80",
        desc: "Perched on the holy Seshachalam Hills, the ancient temple of Lord Sri Venkateswara (Balaji) is surrounded by seven peaks and divine morning chants.",
        highlights: ["Sri Venkateswara Swamy Temple Darshan", "Holy Tirupati Srivari Laddu Prasadam", "Silathoranam Natural Rock Arch", "Kapila Theertham & Padmavathi Temple"],
        itinerary: [
          "Day 1: Arrive Tirupati, visit Sri Padmavathi Ammavari Temple at Tiruchanur",
          "Day 2: Climb the Alipiri footway steps or drive to Tirumala for Special Entry Darshan",
          "Day 3: Visit holy Silathoranam rock formations, Papavinasam waterfall, and return"
        ],
        tip: "Book TTD Special Entry Darshan (₹300) tickets online precisely 3 months in advance on the official TTD portal."
      },
      {
        id: "jan-rameshwaram",
        name: "Rameshwaram & Madurai, Tamil Nadu",
        country: "India",
        region: "India",
        vibe: "Temples & Divine",
        award: "🔱 Char Dham & Sacred Theerthams",
        rating: 4.9,
        temp: "21°C to 29°C",
        duration: "3–4 Days",
        budget: "₹12,000 – ₹22,000",
        budgetNum: 12000,
        style: "Family",
        image: "https://images.unsplash.com/photo-1600100397608-f010f423b971?auto=format&fit=crop&w=900&q=80",
        desc: "One of the sacred Char Dhams with the longest temple corridor in the world (1,212 pillars) and 22 holy kund theerthams.",
        highlights: ["Ramanathaswamy 1000-Pillar Hall", "Bathing in 22 Sacred Wells (Theerthams)", "Pamban Sea Bridge Train Journey", "Dhanushkodi Ghost Town & Ram Setu Point"],
        itinerary: [
          "Day 1: Arrive Madurai, explore the towering gopurams of Meenakshi Amman Temple",
          "Day 2: Scenic train journey across Pamban Sea Bridge to Rameshwaram island",
          "Day 3: Sacred 22-theertham bath ritual and darshan of Ramanathaswamy Jyotirlinga",
          "Day 4: Sunrise jeep tour to Dhanushkodi where the Indian Ocean meets Bay of Bengal"
        ],
        tip: "Take the morning ritual bath in Agni Theertham sea before taking bath in the 22 internal temple wells."
      },
      {
        id: "jan-alleppey",
        name: "Alleppey & Munnar, Kerala",
        country: "India",
        region: "India",
        vibe: "Nature & Wildlife",
        award: "🛶 Venice of the East",
        rating: 4.7,
        temp: "19°C to 29°C",
        duration: "4–5 Days",
        budget: "₹18,000 – ₹32,000",
        budgetNum: 18000,
        style: "Family",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
        desc: "Glide along peaceful palm-fringed backwaters on a traditional thatched houseboat while sampling fresh Karimeen fish.",
        highlights: ["Overnight Luxury Houseboat Cruise", "Munnar Rolling Tea Estates", "Marari Quiet Beach", "Kathakali & Kalaripayattu Cultural Show"],
        itinerary: [
          "Day 1: Arrive Cochin, drive to Munnar past Cheeyappara waterfalls",
          "Day 2: Tea museum, Mattupetty dam, and Eravikulam National Park (Nilgiri Tahr)",
          "Day 3: Drive to Alleppey, board private houseboat for leisurely backwater cruise",
          "Day 4: Village canoe tour through narrow canals and sunset at Marari beach",
          "Day 5: Fort Kochi Chinese fishing nets and spice market exploration"
        ],
        tip: "Opt for a smaller country canoe (shikara) tour for 2 hours to explore the narrow canals where large houseboats cannot enter."
      },
      {
        id: "jan-maldives",
        name: "Maldives Atolls",
        country: "Maldives",
        region: "International",
        vibe: "Beach & Islands",
        award: "💎 Luxury Island Escape",
        rating: 4.9,
        temp: "26°C to 30°C",
        duration: "4–6 Days",
        budget: "₹65,000 – ₹1,40,000",
        budgetNum: 65000,
        style: "Couples",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80",
        desc: "Dry sunny season with glass-clear turquoise lagoons, coral gardens, and world-renowned overwater villas.",
        highlights: ["Private Overwater Bungalow", "Snorkeling with Manta Rays & Turtles", "Sandbank Private Dining", "Sunset Dolphin Cruise"],
        itinerary: [
          "Day 1: Speedboat transfer to island resort, champagne check-in to water villa",
          "Day 2: Coral reef snorkeling tour right off your villa deck",
          "Day 3: Sandbank excursion, picnic lunch, and sunset dolphin boat cruise",
          "Day 4: Spa treatment over the lagoon & candlelit beach dinner under stars",
          "Day 5: Souvenir shopping in Male and return flight"
        ],
        tip: "Combine a local island stay (Maafushi or Dhigurah) with a luxury resort day-pass to save up to 50%."
      },
      {
        id: "jan-lapland",
        name: "Rovaniemi, Lapland",
        country: "Finland",
        region: "International",
        vibe: "Snow & Mountains",
        award: "🌌 Northern Lights Capital",
        rating: 4.9,
        temp: "-16°C to -6°C",
        duration: "5–6 Days",
        budget: "₹1,40,000 – ₹2,20,000",
        budgetNum: 140000,
        style: "Family",
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=900&q=80",
        desc: "Sleep in a heated glass igloo watching the Aurora Borealis illuminate the Arctic sky, meet reindeer, and cross the Arctic Circle.",
        highlights: ["Northern Lights Glass Igloo Stay", "Husky Sledding Safari", "Santa Claus Village Arctic Post Office", "Snowmobile Forest Tour"],
        itinerary: [
          "Day 1: Arrive Rovaniemi, check into heated glass igloo",
          "Day 2: Husky safari mushing through snow-laden pine forests",
          "Day 3: Reindeer sleigh ride, meet indigenous Sámi people, cross the Arctic Circle",
          "Day 4: Snowmobile hunt for the Northern Lights with campfire sausages",
          "Day 5: Visit Santa Claus Village and ice floating in an Arctic lake"
        ],
        tip: "Download an Aurora alert app and stay at least 3 nights inside the Arctic Circle to ensure a 90% sighting probability."
      },
      {
        id: "jan-dubai",
        name: "Dubai & Abu Dhabi",
        country: "UAE",
        region: "International",
        vibe: "Heritage & Culture",
        award: "🏙️ Ultra Modern Winter Sun",
        rating: 4.8,
        temp: "16°C to 26°C",
        duration: "4–5 Days",
        budget: "₹55,000 – ₹95,000",
        budgetNum: 55000,
        style: "Family",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
        desc: "January is peak outdoor season in Dubai with the Dubai Shopping Festival, Miracle Garden in bloom, and cool desert evenings.",
        highlights: ["Burj Khalifa 124th & 148th Floor", "Desert Safari with Dune Bashing", "Dubai Miracle Garden & Global Village", "Louvre Abu Dhabi & Grand Mosque"],
        itinerary: [
          "Day 1: Burj Khalifa sunset views and Dubai Mall fountain show",
          "Day 2: Dubai Frame, Old Al Fahidi district, gold souk abra ride",
          "Day 3: 4x4 desert safari, sandboarding, and Arabian barbecue night",
          "Day 4: Day tour to Abu Dhabi for Sheikh Zayed Mosque and Louvre Abu Dhabi",
          "Day 5: Marina yacht cruise and luxury shopping before departure"
        ],
        tip: "Book Burj Khalifa tickets for 4:30 PM to experience daylight, golden sunset, and sparkling night city views in one visit."
      },
      {
        id: "jan-phuket",
        name: "Phuket & Krabi",
        country: "Thailand",
        region: "International",
        vibe: "Beach & Islands",
        award: "🌴 Tropical Island Escapes",
        rating: 4.7,
        temp: "24°C to 31°C",
        duration: "5–6 Days",
        budget: "₹42,000 – ₹75,000",
        budgetNum: 42000,
        style: "Friends",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=900&q=80",
        desc: "January delivers calm emerald waters, sunny blue skies, and vibrant night markets across southern Thailand's Andaman coast.",
        highlights: ["Phi Phi Islands Speedboat Tour", "Railay Beach Limestone Karsts", "Old Phuket Town Sino-Portuguese Walk", "James Bond Island Phang Nga Bay"],
        itinerary: [
          "Day 1: Arrive Phuket, relax at Kata beach, night market street food tour",
          "Day 2: Early morning speedboat to Maya Bay and snorkeling at Phi Phi Leh",
          "Day 3: Shift to Krabi by ferry, sunset at Railay Beach",
          "Day 4: Four Islands longtail boat tour with snorkeling and sandbar walk",
          "Day 5: Tiger Cave Temple climb and traditional Thai spa treatment"
        ],
        tip: "Book an early bird (6:00 AM) speedboat to Maya Bay to experience it completely crowd-free."
      }
    ]
  },
  {
    id: "february",
    number: "02",
    name: "February",
    short: "Feb",
    icon: "🌺",
    season: "winter",
    seasonLabel: "Romantic Late Winter",
    weatherNote: "Pleasant sunshine & cool romantic evenings (14°C to 28°C)",
    tagline: "Celebrate romance and desert carnivals before summer arrives — perfect for royal palaces and sunny coastlines.",
    bestFor: "Romantic getaways, Island hopping, Desert carnivals, Heritage forts",
    bestPlacesSummary: "Udaipur • Havelock Andaman • Jodhpur • Kaziranga • Gokarna • Venice • Bali • Krabi",
    avoidNote: "Avoid southern Indian plains in late afternoon as temperatures start climbing above 33°C.",
    packingList: ["Light cotton shirts & dresses for daytime", "A light evening jacket or shawl", "Beachwear & high SPF sunscreen", "Comfortable walking shoes for palaces and forts"],
    places: [
      {
        id: "feb-udaipur",
        name: "Udaipur, Rajasthan",
        country: "India",
        region: "India",
        vibe: "Heritage & Culture",
        award: "👑 City of Lakes & Romance",
        rating: 4.9,
        temp: "13°C to 27°C",
        duration: "3–4 Days",
        budget: "₹18,000 – ₹35,000",
        budgetNum: 18000,
        style: "Couples",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
        desc: "Sparkling lakes, marble palaces, and rooftop dining overlooking Lake Pichola make February the most romantic time to visit.",
        highlights: ["Lake Pichola Sunset Boat Cruise", "City Palace Museum Complex", "Jag Mandir Island Palace", "Bagore Ki Haveli Folk Dance"],
        itinerary: [
          "Day 1: Arrive Udaipur, sunset boat ride around Lake Pichola and Jag Mandir",
          "Day 2: Explore majestic City Palace and crystal gallery; dinner by the lake",
          "Day 3: Visit Saheliyon Ki Bari and Monsoon Palace for panoramic sunset",
          "Day 4: Day trip to Kumbhalgarh Fort (world's 2nd largest wall) and return"
        ],
        tip: "Reserve a lakefront table at Ambrai or Upre restaurant well ahead for sunset views of the lit-up City Palace."
      },
      {
        id: "feb-andaman",
        name: "Havelock (Swaraj Dweep), Andaman",
        country: "India",
        region: "India",
        vibe: "Beach & Islands",
        award: "🏖️ Asia's Best Beach",
        rating: 4.9,
        temp: "23°C to 29°C",
        duration: "5–6 Days",
        budget: "₹30,000 – ₹55,000",
        budgetNum: 30000,
        style: "Couples",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80",
        desc: "Radhanagar Beach shines with powder-white sands, crystal-clear scuba diving waters, and night bioluminescent kayaking.",
        highlights: ["Radhanagar Beach (Beach No. 7)", "Scuba Diving at Elephant Beach", "Night Kayaking among Bioluminescence", "Kalapathar Beach Sunrise"],
        itinerary: [
          "Day 1: Fly to Port Blair, visit Cellular Jail light & sound show",
          "Day 2: Cruise ferry to Havelock, sunset swim at Radhanagar Beach",
          "Day 3: Scuba dive among vibrant coral reefs at Elephant Beach",
          "Day 4: Shift to Neil Island for natural coral bridge and tranquil beaches",
          "Day 5: Return to Port Blair via scenic cruise, local seafood dining"
        ],
        tip: "Pre-book Makruzz or Nautika catamaran ferries between Port Blair and Havelock 3 weeks prior."
      },
      {
        id: "feb-kaziranga",
        name: "Kaziranga National Park, Assam",
        country: "India",
        region: "India",
        vibe: "Nature & Wildlife",
        award: "🦏 Rhino Safari Heartland",
        rating: 4.8,
        temp: "14°C to 26°C",
        duration: "3–4 Days",
        budget: "₹16,000 – ₹28,000",
        budgetNum: 16000,
        style: "Family",
        image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=900&q=80",
        desc: "Tall elephant grass dries up in February, providing the highest probability of sighting the endangered One-Horned Rhinoceros.",
        highlights: ["Central & Western Range Jeep Safaris", "One-Horned Rhinoceros Spotting", "Assam Tea Garden Walks", "Kaziranga Orchid & Biodiversity Park"],
        itinerary: [
          "Day 1: Drive from Guwahati through scenic Brahmaputra valley to Kaziranga",
          "Day 2: Early morning safari in Kohora range & afternoon jeep safari in Bagori",
          "Day 3: Visit tea estate factory, sample authentic Assam CTC & orthodox tea",
          "Day 4: Drive back to Guwahati with stop at Kamakhya Temple"
        ],
        tip: "Combine morning and afternoon safaris across Kohora and Bagori ranges for maximum rhino and elephant sightings."
      },
      {
        id: "feb-gokarna",
        name: "Murudeshwar & Gokarna, Karnataka",
        country: "India",
        region: "India",
        vibe: "Temples & Divine",
        award: "🔱 World's 2nd Tallest Shiva Statue",
        rating: 4.8,
        temp: "20°C to 30°C",
        duration: "3–4 Days",
        budget: "₹10,000 – ₹18,000",
        budgetNum: 10000,
        style: "Family",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80",
        desc: "The towering 123-ft seaside Shiva statue rises dramatically over the Arabian Sea at Kanduka Giri, accompanied by the ancient Atmalinga at Gokarna Mahabaleshwar Temple.",
        highlights: ["123-ft Colossal Shiva Statue", "20-Storey Raja Gopura Lift with Panoramic Ocean View", "Mahabaleshwar Temple Atmalinga Darshan", "Om Beach & Sunset Boat Ride"],
        itinerary: [
          "Day 1: Arrive Gokarna, take blessings at ancient Mahabaleshwar Temple, sunset at Om Beach",
          "Day 2: Drive to Murudeshwar, take lift to the 18th floor of Raja Gopura for Arabian Sea views",
          "Day 3: Explore cave temple beneath Shiva statue and water sports at Murudeshwar beach",
          "Day 4: Visit Mirjan historic green fort and return"
        ],
        tip: "Take the internal elevator to the top of the 249-foot Raja Gopura for breathtaking aerial views of the Shiva statue backed by the ocean."
      },
      {
        id: "feb-puri",
        name: "Puri Jagannath & Konark Sun Temple, Odisha",
        country: "India",
        region: "India",
        vibe: "Temples & Divine",
        award: "🛕 Char Dham & Sun God Marvel",
        rating: 4.9,
        temp: "18°C to 28°C",
        duration: "3–4 Days",
        budget: "₹11,000 – ₹20,000",
        budgetNum: 11000,
        style: "Family",
        image: "https://images.unsplash.com/photo-1600100397608-f010f423b971?auto=format&fit=crop&w=900&q=80",
        desc: "One of the sacred 4 Dhams where Lord Jagannath, Balabhadra, and Subhadra are worshipped, paired with the UNESCO 13th-century Konark Sun Temple stone chariot.",
        highlights: ["Jagannath Temple Darshan & Mahaprasad (56 Bhog)", "Konark Sun Temple Architectural Chariot Wheels", "Golden Beach Sunset Walk", "Chilika Lake Dolphin Boat Cruise"],
        itinerary: [
          "Day 1: Arrive Bhubaneswar/Puri, evening aarti and taste Anandabazar Mahaprasad",
          "Day 2: Early morning Jagannath Darshan, drive marine drive to Konark Sun Temple",
          "Day 3: Day excursion to Chilika Lake (Satapada) for Irrawaddy dolphin sightings",
          "Day 4: Explore Raghurajpur heritage artisan village (Pattachitra paintings) and departure"
        ],
        tip: "Taste the freshly prepared 'Chhappan Bhog' (Mahaprasad) cooked in traditional earthen pots inside the world's largest kitchen."
      },
      {
        id: "feb-venice",
        name: "Venice (Carnevale), Italy",
        country: "Italy",
        region: "International",
        vibe: "Heritage & Culture",
        award: "🎭 Masquerade Capital",
        rating: 4.8,
        temp: "3°C to 11°C",
        duration: "4–5 Days",
        budget: "₹1,10,000 – ₹1,80,000",
        budgetNum: 110000,
        style: "Couples",
        image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=900&q=80",
        desc: "Historic canals and St. Mark's Square transform into a grand 18th-century masquerade ball during the world-famous Venice Carnival.",
        highlights: ["Carnevale Mask Parade in Piazza San Marco", "Grand Canal Gondola Ride", "Colorful Island of Burano", "Doge's Palace Secret Itineraries"],
        itinerary: [
          "Day 1: Arrive Venice by water taxi, evening stroll across Rialto Bridge",
          "Day 2: Witness Carnival costume parades and acrobats in St. Mark's Square",
          "Day 3: Vaporetto ferry to Burano's pastel houses and Murano glass blowers",
          "Day 4: Tour Doge's Palace and sip hot Italian espresso at Caffè Florian"
        ],
        tip: "Buy your own handcrafted Venetian paper-mâché mask in Dorsoduro to wear around the city."
      },
      {
        id: "feb-thailand",
        name: "Koh Samui & Koh Phangan",
        country: "Thailand",
        region: "International",
        vibe: "Beach & Islands",
        award: "🏝️ Gulf Coast Serenity",
        rating: 4.8,
        temp: "25°C to 30°C",
        duration: "5–6 Days",
        budget: "₹50,000 – ₹85,000",
        budgetNum: 50000,
        style: "Couples",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
        desc: "February boasts the lowest rainfall and calmest turquoise sea across the Gulf of Thailand islands.",
        highlights: ["Ang Thong National Marine Park", "Chaweng Beach Lounging", "Fisherman's Village Night Market", "Secret Beach Koh Phangan"],
        itinerary: [
          "Day 1: Land in Koh Samui, sunset cocktail at Bophut Fisherman's Village",
          "Day 2: Speedboat day trip to 42 emerald islands of Ang Thong Marine Park",
          "Day 3: Big Buddha temple and swim at Silver Beach",
          "Day 4: Speed ferry to Koh Phangan for serene wellness and jungle waterfalls",
          "Day 5: Beachside Thai massage and departure"
        ],
        tip: "Rent a scooter on Koh Phangan to discover secluded beaches like Thong Nai Pan."
      }
    ]
  },
  {
    id: "march",
    number: "03",
    name: "March",
    short: "Mar",
    icon: "🌸",
    season: "spring",
    seasonLabel: "Spring Awakening",
    weatherNote: "Warm blooming days & cool Himalayan evenings (12°C to 28°C)",
    tagline: "Celebrate vibrant Holi, blooming cherry blossoms in Japan, and thrilling white-water rafting on the Ganga.",
    bestFor: "River rafting, Holi festival, Cherry blossoms, Tiger safaris",
    bestPlacesSummary: "Rishikesh • Mathura & Vrindavan • Kanha & Ranthambore • Hampi • Kyoto Japan • Vietnam",
    avoidNote: "Avoid heavy winter gear; pack light layering instead.",
    packingList: ["Quick-dry shorts and tees for rafting", "White cotton clothes for Holi celebrations", "Walking shoes & sun hat", "Binoculars for wildlife safaris"],
    places: [
      {
        id: "mar-rishikesh",
        name: "Rishikesh, Uttarakhand",
        country: "India",
        region: "India",
        vibe: "Adventure",
        award: "🌊 Yoga & Rafting Capital",
        rating: 4.8,
        temp: "15°C to 29°C",
        duration: "3–4 Days",
        budget: "₹10,000 – ₹20,000",
        budgetNum: 10000,
        style: "Friends",
        image: "https://images.unsplash.com/photo-1591018653367-7c01a58b8120?auto=format&fit=crop&w=900&q=80",
        desc: "March offers warm sunny days, chilly emerald waters of the Ganga, and the International Yoga Festival.",
        highlights: ["26 km Marine Drive to Rishikesh White Water Rafting", "Cliff Jumping & Body Surfing", "Ganga Aarti at Triveni Ghat & Parmarth", "Beatles Ashram Graffiti Walk"],
        itinerary: [
          "Day 1: Arrive Rishikesh, settle into riverside camp in Shivpuri, evening Ganga Aarti",
          "Day 2: Thrilling white-water rafting through Roller Coaster and Golf Course rapids",
          "Day 3: Bungee jumping at Jumpin Heights (83 meters) and café hopping in Tapovan",
          "Day 4: Sunrise trek to Kunjapuri Devi temple overlooking snow peaks and departure"
        ],
        tip: "Opt for river camps in Shivpuri or Mohanchatti for clear starry nights away from traffic."
      },
      {
        id: "mar-mathura",
        name: "Vrindavan & Mathura, UP",
        country: "India",
        region: "India",
        vibe: "Temples & Divine",
        award: "🎨 Braj Bhumi & Phoolon Ki Holi",
        rating: 5.0,
        temp: "16°C to 30°C",
        duration: "3–4 Days",
        budget: "₹9,000 – ₹18,000",
        budgetNum: 9000,
        style: "Culture",
        image: "https://images.unsplash.com/photo-1600100397608-f010f423b971?auto=format&fit=crop&w=900&q=80",
        desc: "The sacred birthplace of Lord Krishna. March features Banke Bihari Phoolon Ki Holi (flower petals), Prem Mandir white marble illuminations, and Radha Raman Temple.",
        highlights: ["Banke Bihari Mandir Phoolon Ki Holi", "Prem Mandir Italian Marble Architecture", "Shri Krishna Janmabhoomi Complex", "Yamuna Ghat Evening Deep Daan"],
        itinerary: [
          "Day 1: Arrive Mathura, visit Krishna Janmabhoomi and Vishram Ghat aarti",
          "Day 2: Morning Banke Bihari darshan; celebrate flower petal Holi in Vrindavan",
          "Day 3: Visit Nidhivan, ISKCON temple, and Prem Mandir musical fountain show",
          "Day 4: Taste authentic Mathura Peda and rabri before departure"
        ],
        tip: "Prem Mandir lights up with colorful LED illuminations every evening at 7:00 PM — don't miss the musical fountain."
      },
      {
        id: "mar-somnath",
        name: "Somnath & Dwarka, Gujarat",
        country: "India",
        region: "India",
        vibe: "Temples & Divine",
        award: "🔱 First Jyotirlinga & Krishna Capital",
        rating: 4.9,
        temp: "19°C to 30°C",
        duration: "4–5 Days",
        budget: "₹14,000 – ₹25,000",
        budgetNum: 14000,
        style: "Family",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=900&q=80",
        desc: "Somnath is the revered 1st Jyotirlinga among the 12, standing directly on the Arabian Sea shore, while Dwarkadhish is Lord Krishna's ancient kingdom and Char Dham.",
        highlights: ["Somnath Temple Shoreline Aarti & Light & Sound Show", "Dwarkadhish Temple (Jagat Mandir 52-Yard Flag)", "Beyt Dwarka Boat Ride with Migratory Seagulls", "Nageshwar Jyotirlinga Darshan"],
        itinerary: [
          "Day 1: Arrive Rajkot/Jamnagar, drive to sacred Dwarka, attend evening Sandhya Aarti",
          "Day 2: Ferry to Beyt Dwarka, visit Rukmini Devi temple & Nageshwar Jyotirlinga",
          "Day 3: Scenic coastal drive via Porbandar (Mahatma Gandhi birthplace) to Somnath",
          "Day 4: Morning Somnath darshan, watch Arabian Sea waves crash against temple walls, light show",
          "Day 5: Visit Bhalka Tirth and return"
        ],
        tip: "Attend the evening Sound & Light show narrated by Amitabh Bachchan on the seashore lawns of Somnath."
      },
      {
        id: "mar-ranthambore",
        name: "Ranthambore National Park, Rajasthan",
        country: "India",
        region: "India",
        vibe: "Nature & Wildlife",
        award: "🐅 Tiger Territory",
        rating: 4.8,
        temp: "15°C to 32°C",
        duration: "3–4 Days",
        budget: "₹16,000 – ₹28,000",
        budgetNum: 16000,
        style: "Family",
        image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=900&q=80",
        desc: "Dry deciduous forests make tiger spotting around historical ruins and lakes much easier in March.",
        highlights: ["Jeep Safari in Zones 1 to 5", "Ranthambore UNESCO 10th-Century Fort", "Padam Talao Tiger Waterhole", "Chambal River Gharial Safari"],
        itinerary: [
          "Day 1: Reach Sawai Madhopur, check into jungle lodge, evening fort walk",
          "Day 2: Morning safari in core Zone 3 & afternoon safari near lake areas",
          "Day 3: Chambal river motorboat safari for crocodiles and birds",
          "Day 4: Morning safari and return train to Delhi/Jaipur"
        ],
        tip: "Book 6-seater Gypsy safaris 90 days in advance on Rajasthan Forest website for prime Zones 1-5."
      },
      {
        id: "mar-kyoto",
        name: "Kyoto & Tokyo, Japan",
        country: "Japan",
        region: "International",
        vibe: "Heritage & Culture",
        award: "🌸 Cherry Blossom (Sakura)",
        rating: 5.0,
        temp: "7°C to 16°C",
        duration: "7–9 Days",
        budget: "₹1,30,000 – ₹2,10,000",
        budgetNum: 130000,
        style: "Couples",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80",
        desc: "Late March marks the breathtaking opening of cherry blossom (Sakura) season across ancient wooden temples and canals.",
        highlights: ["Philosopher's Path Sakura Bloom", "Fushimi Inari 10,000 Torii Gates", "Arashiyama Bamboo Grove", "Mount Fuji Views from Lake Kawaguchiko"],
        itinerary: [
          "Day 1: Land in Tokyo, explore vibrant Shibuya Crossing and Shinjuku neon lights",
          "Day 2: Shinkansen bullet train to Kyoto, evening walk through Gion geisha quarter",
          "Day 3: Philosopher's Path cherry blossom walk & Golden Pavilion (Kinkaku-ji)",
          "Day 4: Fushimi Inari sunrise shrine hike and traditional tea ceremony",
          "Day 5: Day trip to Nara deer park and return to Tokyo"
        ],
        tip: "Check the official JMC Japan Sakura Forecast to align your travel dates with peak full bloom (mankai)."
      },
      {
        id: "mar-vietnam",
        name: "Ha Long Bay & Hoi An, Vietnam",
        country: "Vietnam",
        region: "International",
        vibe: "Heritage & Culture",
        award: "🏮 Lantern Town & Emerald Bays",
        rating: 4.8,
        temp: "20°C to 27°C",
        duration: "6–7 Days",
        budget: "₹48,000 – ₹80,000",
        budgetNum: 48000,
        style: "Couples",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80",
        desc: "March offers the best dry, pleasant weather across both Northern and Central Vietnam.",
        highlights: ["Ha Long Bay Overnight Luxury Cruise", "Hoi An Ancient Lantern Town", "Ba Na Hills Golden Hand Bridge", "Ninh Binh River Rowboat Tour"],
        itinerary: [
          "Day 1: Arrive Hanoi, street food walking tour (Egg coffee & Pho)",
          "Day 2: Board overnight luxury cruise through limestone karsts of Ha Long Bay",
          "Day 3: Kayaking through caves, return to Hanoi & domestic flight to Da Nang",
          "Day 4: Visit Hoi An ancient town, tailor shops, and lantern boat ride",
          "Day 5: Golden Hand Bridge at Ba Na Hills and departure"
        ],
        tip: "Indian travelers can get an easy online e-Visa for Vietnam within 3 working days."
      }
    ]
  },
  {
    id: "april",
    number: "04",
    name: "April",
    short: "Apr",
    icon: "🌷",
    season: "spring",
    seasonLabel: "Floral Spring & Hill Escapes",
    weatherNote: "Warm plains (34°C) vs. pleasantly cool hills (10°C to 22°C)",
    tagline: "Escape the onset of summer into blooming tulip gardens in Kashmir, misty tea hills in Darjeeling, or Dutch flower fields.",
    bestFor: "Tulip festivals, Tea gardens, Mountain valleys, Island getaways",
    bestPlacesSummary: "Srinagar Kashmir • Darjeeling • Ooty • Coorg • Amsterdam • Jeju Island South Korea",
    avoidNote: "Avoid Central India (Delhi, Agra, Jaipur) during daytime as summer heat begins touching 38°C.",
    packingList: ["Light sweater / jacket for hill stations", "Breathable cottons for day travel", "Good camera with macro lens for flowers", "Walking shoes for tea gardens"],
    places: [
      {
        id: "apr-srinagar",
        name: "Srinagar & Pahalgam, Kashmir",
        country: "India",
        region: "India",
        vibe: "Snow & Mountains",
        award: "🌷 Asia's Largest Tulip Festival",
        rating: 4.9,
        temp: "8°C to 21°C",
        duration: "5–6 Days",
        budget: "₹24,000 – ₹42,000",
        budgetNum: 24000,
        style: "Family",
        image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=80",
        desc: "1.5 million tulips of 68 varieties bloom simultaneously at the foothills of the Zabarwan Mountains overlooking Dal Lake.",
        highlights: ["Indira Gandhi Memorial Tulip Garden", "Dal Lake Shikara Ride & Houseboat Stay", "Betaab & Aru Valleys in Pahalgam", "Gulmarg Meadow Gondola"],
        itinerary: [
          "Day 1: Arrive Srinagar, check into heritage cedar wood houseboat on Nigeen/Dal Lake",
          "Day 2: Morning walk through the vibrant Tulip Garden and Mughal Gardens (Nishat & Shalimar)",
          "Day 3: Scenic drive to Pahalgam along saffron fields of Pampore and Lidder river",
          "Day 4: Pony trek to Baisaran (Mini Switzerland) and Betaab Valley",
          "Day 5: Day trip to Gulmarg or Sonamarg and return to Srinagar for Kashmiri Wazwan feast"
        ],
        tip: "Visit the Tulip Garden right at 8:00 AM opening time for golden morning sunlight without tour bus crowds."
      },
      {
        id: "apr-darjeeling",
        name: "Darjeeling & Kalimpong, West Bengal",
        country: "India",
        region: "India",
        vibe: "Snow & Mountains",
        award: "🚂 Queen of the Hills",
        rating: 4.7,
        temp: "11°C to 19°C",
        duration: "4–5 Days",
        budget: "₹16,000 – ₹28,000",
        budgetNum: 16000,
        style: "Couples",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
        desc: "April brings the world-famous First Flush tea harvest and crystal-clear morning views of Mount Kanchenjunga.",
        highlights: ["Tiger Hill Sunrise over Kanchenjunga", "Heritage Darjeeling Himalayan Toy Train", "Happy Valley Tea Estate Tour", "Peace Pagoda & Batasia Loop"],
        itinerary: [
          "Day 1: Scenic drive from Bagdogra/Siliguri to Darjeeling, evening Mall Road walk",
          "Day 2: 4:00 AM wake up for Tiger Hill sunrise; ride the steam Toy Train to Ghum",
          "Day 3: Tea estate pluck and tasting tour; visit Himalayan Mountaineering Institute",
          "Day 4: Drive to Kalimpong for orchid nurseries and Buddhist monasteries",
          "Day 5: Souvenir tea shopping and departure"
        ],
        tip: "Taste fresh first-flush organic tea at Makaibari or Happy Valley estate bungalows."
      },
      {
        id: "apr-haridwar",
        name: "Haridwar & Rishikesh, Uttarakhand",
        country: "India",
        region: "India",
        vibe: "Temples & Divine",
        award: "🕉️ Gateway to the Gods",
        rating: 4.8,
        temp: "17°C to 30°C",
        duration: "3–4 Days",
        budget: "₹9,000 – ₹17,000",
        budgetNum: 9000,
        style: "Family",
        image: "https://images.unsplash.com/photo-1591018653367-7c01a58b8120?auto=format&fit=crop&w=900&q=80",
        desc: "April marks the sacred Baisakhi Ganga Snan at Har Ki Pauri where thousands of marigold lamps float on the roaring crystal currents of the holy Ganges.",
        highlights: ["Har Ki Pauri Evening Maha Ganga Aarti", "Mansa Devi & Chandi Devi Hilltop Cable Cars", "Chandi Ghat Sunset", "Daksha Mahadev Ancient Shiva Temple"],
        itinerary: [
          "Day 1: Arrive Haridwar, holy dip at Brahma Kund, Har Ki Pauri evening aarti",
          "Day 2: Ride the ropeway to Mansa Devi and Chandi Devi mountain shrines",
          "Day 3: Drive 30 mins to Rishikesh for yoga, Beatles Ashram, and sunset meditation",
          "Day 4: Ayurvedic massage, shopping for rudraksha and brass idols, departure"
        ],
        tip: "Reach Har Ki Pauri steps by 5:30 PM to secure a front row river seat for the 6:30 PM sound-and-chant Ganga Aarti."
      },
      {
        id: "apr-amsterdam",
        name: "Amsterdam & Keukenhof, Netherlands",
        country: "Netherlands",
        region: "International",
        vibe: "Nature & Wildlife",
        award: "🌷 World Tulip Capital",
        rating: 4.9,
        temp: "7°C to 15°C",
        duration: "4–5 Days",
        budget: "₹1,15,000 – ₹1,80,000",
        budgetNum: 115000,
        style: "Couples",
        image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=900&q=80",
        desc: "Over seven million blooming flowers blanket the Dutch countryside alongside UNESCO-listed canal rings.",
        highlights: ["Keukenhof Gardens (Garden of Europe)", "Bike Ride through Rainbow Flower Fields in Lisse", "Amsterdam Canal Cruise", "Zaanse Schans Windmills"],
        itinerary: [
          "Day 1: Arrive Amsterdam, evening glass-roof canal cruise and Jordaan district walk",
          "Day 2: Full day at Keukenhof gardens & rent a bicycle to ride through exterior tulip farms",
          "Day 3: Visit Van Gogh Museum, Rijksmuseum, and Vondelpark",
          "Day 4: Day trip to historic windmills and cheese farms at Zaanse Schans",
          "Day 5: King's Day festivities (April 27) with entire city wearing orange"
        ],
        tip: "Rent a bike right outside Keukenhof entrance to ride through endless striped flower fields for free."
      }
    ]
  },
  {
    id: "may",
    number: "05",
    name: "May",
    short: "May",
    icon: "🏔️",
    season: "spring",
    seasonLabel: "Summer Mountain Retreats",
    weatherNote: "Pleasant alpine cool (10°C to 24°C) while plains bake at 42°C",
    tagline: "Beat the blistering Indian summer! Retreat to Himalayan hill stations, Sikkim valleys, or sunny Mediterranean cliffs.",
    bestFor: "Hill station retreats, High-altitude lakes, Summer vacations, Apple orchards",
    bestPlacesSummary: "Manali & Kasol • Gangtok & North Sikkim • Ooty & Kodaikanal • Spiti • Santorini Greece • Switzerland",
    avoidNote: "Avoid Rajasthan, Punjab, UP, and central Indian plains unless strictly indoors.",
    packingList: ["Warm fleece jacket for high altitudes", "Comfortable hiking shoes with grip", "Sun protection (hat, sunscreen SPF 50)", "Motion sickness pills for winding mountain roads"],
    places: [
      {
        id: "may-manali",
        name: "Manali, Sissu & Tirthan Valley, Himachal",
        country: "India",
        region: "India",
        vibe: "Snow & Mountains",
        award: "🏔️ Ultimate Summer Escape",
        rating: 4.8,
        temp: "11°C to 23°C",
        duration: "5–6 Days",
        budget: "₹16,000 – ₹30,000",
        budgetNum: 16000,
        style: "Friends",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=900&q=80",
        desc: "Drive through Atal Tunnel into snow-draped Sissu waterfalls, paraglide in Solang, and unwind in riverside Tirthan Valley.",
        highlights: ["Atal Tunnel to Sissu Waterfall", "Solang Valley Paragliding", "Riverside Trout Fishing in Tirthan", "Old Manali Cafés & Hadimba Temple"],
        itinerary: [
          "Day 1: Arrive Manali, café hopping in Old Manali and Hadimba temple walk",
          "Day 2: Drive through engineering marvel Atal Tunnel to Sissu, Lahaul snow valley",
          "Day 3: Adventure sports in Solang Valley (paragliding, zorbing, ATV rides)",
          "Day 4: Shift to peaceful Tirthan Valley, trek to Chhoie waterfall",
          "Day 5: Great Himalayan National Park day walk and departure"
        ],
        tip: "Cross the Atal Tunnel early morning by 7:30 AM to beat the heavy tourist convoy."
      },
      {
        id: "may-sikkim",
        name: "Gangtok & North Sikkim (Yumthang)",
        country: "India",
        region: "India",
        vibe: "Snow & Mountains",
        award: "🌺 Valley of Rhododendrons",
        rating: 4.9,
        temp: "8°C to 19°C",
        duration: "6–7 Days",
        budget: "₹24,000 – ₹42,000",
        budgetNum: 24000,
        style: "Family",
        image: "https://images.unsplash.com/photo-1626014903700-1c98a5f023c6?auto=format&fit=crop&w=900&q=80",
        desc: "Yumthang Valley of Flowers erupts in red and pink rhododendrons while Gurudongmar Lake glitters at 17,800 ft.",
        highlights: ["Gurudongmar Sacred Glacial Lake", "Yumthang Valley of Flowers", "Tsomgo Lake & Nathu La Pass", "Rumtek Monastery & MG Marg"],
        itinerary: [
          "Day 1: Land at Pakyong / Bagdogra, drive to Gangtok, stroll MG Marg",
          "Day 2: Visit Tsomgo Lake and Baba Mandir near Nathu La Pass",
          "Day 3: Drive north to Lachen through misty waterfalls and Seven Sisters Falls",
          "Day 4: Early morning drive to stunning Gurudongmar Lake, shift to Lachung",
          "Day 5: Yumthang Valley bloom walk and Zero Point snow, return to Gangtok",
          "Day 6: Gangtok sightseeing and departure"
        ],
        tip: "Carry 6 passport photos and voter ID/passport in Gangtok for mandatory North Sikkim military permits."
      },
      {
        id: "may-kedarnath",
        name: "Kedarnath & Badrinath (Char Dham), Uttarakhand",
        country: "India",
        region: "India",
        vibe: "Temples & Divine",
        award: "🏔️ Holy Himalayan Portals Open (Akshaya Tritiya)",
        rating: 5.0,
        temp: "4°C to 16°C",
        duration: "6–7 Days",
        budget: "₹20,000 – ₹38,000",
        budgetNum: 20000,
        style: "Family",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
        desc: "The sacred portals (Kapat) of Kedarnath and Badrinath unlock in May on Akshaya Tritiya, surrounded by majestic snow-clad peaks of the Garhwal Himalayas.",
        highlights: ["1200-Year-Old Kedarnath Temple Jyotirlinga", "16 km Scenic Trek from Gaurikund", "Badrinath Temple & Tapt Kund Hot Spring", "Bhim Pul & Vyas Gufa at Mana Village"],
        itinerary: [
          "Day 1: Drive from Rishikesh/Haridwar to Guptkashi along Mandakini river",
          "Day 2: Early morning trek or helicopter flight from Phata/Sersi to Kedarnath",
          "Day 3: Attend sacred morning Aarti with chanting amidst snow peaks, trek down to Gaurikund",
          "Day 4: Drive via Chopta to Badrinath, holy bath in natural thermal Tapt Kund",
          "Day 5: Visit Mana (first Indian village), return drive to Rishikesh"
        ],
        tip: "Complete mandatory biometric Char Dham Yatra registration online on the Uttarakhand tourism portal before embarking on the trek."
      },
      {
        id: "may-santorini",
        name: "Santorini & Mykonos, Greece",
        country: "Greece",
        region: "International",
        vibe: "Beach & Islands",
        award: "🇬🇷 Aegean Dream",
        rating: 4.9,
        temp: "18°C to 25°C",
        duration: "6–7 Days",
        budget: "₹1,25,000 – ₹2,00,000",
        budgetNum: 125000,
        style: "Couples",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=80",
        desc: "May delivers perfect sunny Aegean weather with 35% cheaper hotels and far fewer crowds than peak July-August.",
        highlights: ["Oia Caldera Sunset", "Fira to Oia Cliffside Hike", "Catamaran Cruise to Red Beach & Hot Springs", "Mykonos Windmills & Little Venice"],
        itinerary: [
          "Day 1: Ferry from Athens to Santorini, settle into caldera view cave hotel",
          "Day 2: Hike the breathtaking cliff trail from Fira to Oia, sunset dinner",
          "Day 3: Catamaran boat cruise with grilled Greek lunch and volcanic hot springs swim",
          "Day 4: Fast ferry to Mykonos, stroll whitewashed alleys of Little Venice",
          "Day 5: Day trip to sacred ruins of Delos island and return flight"
        ],
        tip: "Stay in Imerovigli instead of Oia for equally stunning caldera views at half the accommodation price."
      }
    ]
  },
  {
    id: "june",
    number: "06",
    name: "June",
    short: "Jun",
    icon: "🏍️",
    season: "spring",
    seasonLabel: "High Mountain Passes Unlock",
    weatherNote: "Passes open with clear blue skies (8°C to 24°C)",
    tagline: "The world's highest motorable passes melt open! The ultimate bucket-list month for Ladakh, Spiti, and the Swiss Alps.",
    bestFor: "High-altitude road trips, Alpine lakes, Midnight sun, Biking circuits",
    bestPlacesSummary: "Ladakh • Spiti Valley • Switzerland • Bali • Norway Fjords",
    avoidNote: "Avoid heavy coastal rain zones as southwest monsoon arrives in Kerala and Mumbai in mid-June.",
    packingList: ["Thermals, windproof jacket, and riding gloves", "Sunscreen SPF 50+ (high UV at 12,000 ft)", "Camphor / portable oxygen can for high passes", "Cash (ATMs are scarce in remote Spiti & Ladakh)"],
    places: [
      {
        id: "jun-ladakh",
        name: "Leh, Nubra & Pangong, Ladakh",
        country: "India",
        region: "India",
        vibe: "Adventure",
        award: "🏆 #1 Road Trip of a Lifetime",
        rating: 5.0,
        temp: "10°C to 23°C",
        duration: "7–8 Days",
        budget: "₹28,000 – ₹50,000",
        budgetNum: 28000,
        style: "Friends",
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=900&q=80",
        desc: "Both Manali-Leh and Srinagar-Leh highways open up in June. See color-shifting Pangong Lake and Bactrian camels in Hunder dunes.",
        highlights: ["Color-Shifting Pangong Tso (14,270 ft)", "Khardung La Pass (17,582 ft)", "Nubra Valley Hunder Sand Dunes", "Thiksey & Hemis Monasteries"],
        itinerary: [
          "Day 1: Fly into Leh, MANDATORY complete rest to acclimatize to 11,500 ft",
          "Day 2: Leh local sightseeing: Shanti Stupa, Leh Palace, Magnetic Hill & Hall of Fame",
          "Day 3: Cross Khardung La pass to Nubra Valley, double-humped camel ride in Hunder dunes",
          "Day 4: Drive to Turtuk (Balti village on Indo-Pak border) & back to Nubra",
          "Day 5: Drive via Shyok river directly to Pangong Tso, camp near the turquoise lake",
          "Day 6: Sunrise over Pangong, return to Leh via Chang La pass",
          "Day 7: Souvenir shopping in Leh market and return flight"
        ],
        tip: "Rest strictly for the first 36 hours upon landing in Leh — drink 4 liters of water daily to prevent acute mountain sickness (AMS)."
      },
      {
        id: "jun-spiti",
        name: "Spiti Valley Circuit, Himachal",
        country: "India",
        region: "India",
        vibe: "Snow & Mountains",
        award: "🏔️ Middle Land Circuit",
        rating: 4.9,
        temp: "8°C to 21°C",
        duration: "7–8 Days",
        budget: "₹22,000 – ₹38,000",
        budgetNum: 22000,
        style: "Friends",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
        desc: "Kunzum Pass opens in June, completing the grand circuit from Shimla to Manali through Chandratal Lake and ancient monasteries.",
        highlights: ["Key 1000-Year-Old Cliff Monastery", "Chandratal (Moon Lake) Camping", "World's Highest Post Office in Hikkim (14,567 ft)", "Chicham Gorge Suspension Bridge"],
        itinerary: [
          "Day 1: Shimla to Kalpa with majestic views of Kinner Kailash",
          "Day 2: Kalpa to Tabo via Nako Lake, visit 1000-year-old Tabo mud monastery",
          "Day 3: Tabo to Kaza via Dhankar monastery perched on cliff edge",
          "Day 4: Explore highest villages: Komik, Hikkim (post a letter), and Langza fossils",
          "Day 5: Visit Key Monastery and drive to Chandratal Lake for camping under Milky Way",
          "Day 6: Cross Kunzum La & Rohtang Pass to reach Manali and departure"
        ],
        tip: "Carry your own postcards and send them to friends and family from Hikkim, the world's highest post office."
      },
      {
        id: "jun-switzerland",
        name: "Interlaken & Zermatt, Switzerland",
        country: "Switzerland",
        region: "International",
        vibe: "Snow & Mountains",
        award: "🇨🇭 Alpine Fairytale",
        rating: 4.9,
        temp: "12°C to 22°C",
        duration: "6–7 Days",
        budget: "₹1,60,000 – ₹2,50,000",
        budgetNum: 160000,
        style: "Family",
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=900&q=80",
        desc: "Lauterbrunnen's 72 waterfalls roar with snowmelt, lush green alpine meadows bloom, and cogwheel trains wind past the Matterhorn.",
        highlights: ["Jungfraujoch Top of Europe (11,333 ft)", "Lauterbrunnen Valley & Staubbach Falls", "Gornergrat Train with Matterhorn Views", "Lake Brienz Turquoise Cruise"],
        itinerary: [
          "Day 1: Arrive Zurich, scenic train to Interlaken between two turquoise lakes",
          "Day 2: Cogwheel train to Jungfraujoch ice palace and Sphinx observatory",
          "Day 3: Day trip to Lauterbrunnen and car-free village of Mürren",
          "Day 4: Scenic train to Zermatt, sunset view of pyramid-shaped Matterhorn",
          "Day 5: Gornergrat mountain railway and alpine lake hike",
          "Day 6: Return train to Zurich and departure"
        ],
        tip: "Buy the Swiss Travel Pass for free unlimited rides on all trains, buses, lake boats, and 500+ museums."
      }
    ]
  },
  {
    id: "july",
    number: "07",
    name: "July",
    short: "Jul",
    icon: "🌧️",
    season: "monsoon",
    seasonLabel: "Monsoon Magic & Alpine Meadows",
    weatherNote: "Lush green ghats, roaring waterfalls & rain-shadow zones",
    tagline: "Watch Western Ghats turn 50 shades of green and UNESCO Himalayan meadows bloom with rare wildflowers.",
    bestFor: "Alpine flower treks, Monsoon waterfalls, Coffee plantations, Wildlife safaris",
    bestPlacesSummary: "Valley of Flowers • Coorg & Chikmagalur • Ladakh (rain shadow) • Kenya Safari • Iceland",
    avoidNote: "Avoid flash-flood prone lowlands; stick to vetted trekking trails and rain-shadow regions.",
    packingList: ["Waterproof rain poncho & backpack rain cover", "Quick-dry synthetic trekking pants", "Waterproof hiking boots with ankle support", "Mosquito repellent & leech socks for Western Ghats"],
    places: [
      {
        id: "jul-valley-of-flowers",
        name: "Valley of Flowers, Uttarakhand",
        country: "India",
        region: "India",
        vibe: "Nature & Wildlife",
        award: "🌸 UNESCO Botanical Wonder",
        rating: 4.9,
        temp: "9°C to 18°C",
        duration: "5–6 Days",
        budget: "₹15,000 – ₹26,000",
        budgetNum: 15000,
        style: "Adventure",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
        desc: "A high-altitude Himalayan valley that blooms only from July to August with over 500 species of rare alpine wildflowers.",
        highlights: ["Valley of Flowers UNESCO Trek", "Sacred Hemkund Sahib Glacial Lake (14,107 ft)", "Brahma Kamal & Blue Poppy Spotting", "Mana Village - Last Indian Village"],
        itinerary: [
          "Day 1: Drive from Rishikesh to Govindghat along Alaknanda river",
          "Day 2: Trek 10 km from Poolna to base camp Ghangaria through pine forests",
          "Day 3: Full day exploring Valley of Flowers carpeted with rare blooms",
          "Day 4: Steep trek to sacred high-altitude lake Hemkund Sahib and gurudwara",
          "Day 5: Trek down to Govindghat, drive to Badrinath & Mana village",
          "Day 6: Return drive to Rishikesh"
        ],
        tip: "July mid to late August is the peak blooming window for Brahma Kamal and Blue Poppies."
      },
      {
        id: "jul-coorg",
        name: "Coorg & Chikmagalur, Karnataka",
        country: "India",
        region: "India",
        vibe: "Nature & Wildlife",
        award: "☕ Coffee & Mist Country",
        rating: 4.7,
        temp: "18°C to 24°C",
        duration: "3–4 Days",
        budget: "₹12,000 – ₹22,000",
        budgetNum: 12000,
        style: "Couples",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80",
        desc: "Monsoon brings roaring waterfalls, emerald coffee estates, and cozy rain-soaked homestays in Karnataka's Western Ghats.",
        highlights: ["Abbey & Hebbe Roaring Waterfalls", "Mullayanagiri Karnataka's Highest Peak", "Coffee Estate Plantation Stay", "Dubare Elephant Camp"],
        itinerary: [
          "Day 1: Drive from Bengaluru/Mangaluru to Coorg, check into coffee plantation homestay",
          "Day 2: Visit Abbey Falls in full flow, Raja's Seat sunset, and Madikeri Fort",
          "Day 3: Coffee bean trail and drive to Chikmagalur via Mullayanagiri peak",
          "Day 4: Hebbe waterfalls jeep ride and return with fresh Arabica coffee"
        ],
        tip: "Stay in a boutique plantation homestay to enjoy authentic Kodava Pandi curry and freshly brewed filter coffee."
      },
      {
        id: "jul-kenya",
        name: "Maasai Mara, Kenya",
        country: "Kenya",
        region: "International",
        vibe: "Nature & Wildlife",
        award: "🦁 The Great Wildebeest Migration",
        rating: 5.0,
        temp: "14°C to 26°C",
        duration: "6–7 Days",
        budget: "₹1,50,000 – ₹2,40,000",
        budgetNum: 150000,
        style: "Family",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80",
        desc: "Over 1.5 million wildebeest and zebras thunder across the Mara River in the greatest wildlife spectacle on Earth.",
        highlights: ["Mara River Crocodile Crossing", "Big Five Game Drives (Lion, Leopard, Rhino, Elephant, Buffalo)", "Sunrise Hot Air Balloon Safari", "Maasai Cultural Village Visit"],
        itinerary: [
          "Day 1: Fly Nairobi to Maasai Mara airstrip, afternoon game drive",
          "Day 2: Full-day game drive tracking lion prides and migration herds",
          "Day 3: River crossing observation near Mara/Talek rivers",
          "Day 4: Hot air balloon safari at dawn with champagne breakfast in the bush",
          "Day 5: Lake Nakuru flamingo safari and return to Nairobi"
        ],
        tip: "Book tented camps inside the reserve close to crossing points 1 to 4 to reach riverbanks at sunrise."
      }
    ]
  },
  {
    id: "august",
    number: "08",
    name: "August",
    short: "Aug",
    icon: "🌿",
    season: "monsoon",
    seasonLabel: "Harvest Festivals & Emerald Hills",
    weatherNote: "Verdant rainforests, backwater races & pleasant rain-shadows",
    tagline: "Experience snake boat races during Onam in Kerala, rain-shadow alpine lakes in Kashmir, or sunny Sri Lankan beaches.",
    bestFor: "Boat races, Cultural festivals, Rain-shadow treks, Scenic train rides",
    bestPlacesSummary: "Alleppey & Wayanad • Sonamarg & Kashmir Great Lakes • Udaipur • Sri Lanka East Coast • Edinburgh",
    avoidNote: "Avoid flood-prone riverbanks in Assam and parts of Bihar.",
    packingList: ["Umbrella & waterproof pouch for phone", "Traditional attire for festival celebrations", "Light cotton layers", "Sturdy waterproof sandals / sneakers"],
    places: [
      {
        id: "aug-alleppey",
        name: "Alleppey & Wayanad, Kerala",
        country: "India",
        region: "India",
        vibe: "Nature & Wildlife",
        award: "🛶 Nehru Trophy Snake Boat Race",
        rating: 4.8,
        temp: "22°C to 29°C",
        duration: "4–5 Days",
        budget: "₹15,000 – ₹28,000",
        budgetNum: 15000,
        style: "Culture",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
        desc: "August brings the electrifying Nehru Trophy Snake Boat Race on Punnamada Lake and vibrant Onam harvest festivities.",
        highlights: ["Nehru Trophy Snake Boat Race", "Traditional 26-Dish Onam Sadhya on Banana Leaf", "Banasura Sagar Dam & Chembra Heart Lake", "Kochi Spice Markets"],
        itinerary: [
          "Day 1: Arrive Kochi, drive to Alleppey, board luxury houseboat",
          "Day 2: Watch 100-oared snake boats race at incredible speeds on Punnamada Lake",
          "Day 3: Drive north into misty rainforests of Wayanad, visit Edakkal Caves",
          "Day 4: Trek to Chembra Peak heart-shaped lake and tea plantations",
          "Day 5: Return to Kochi with fresh cardamom and spices"
        ],
        tip: "Buy grandstand stadium tickets for the Nehru Trophy race at least 2 weeks in advance."
      },
      {
        id: "aug-kashmir-lakes",
        name: "Kashmir Great Lakes, Sonamarg",
        country: "India",
        region: "India",
        vibe: "Adventure",
        award: "💎 India's Prettiest Alpine Trek",
        rating: 5.0,
        temp: "8°C to 20°C",
        duration: "6–7 Days",
        budget: "₹20,000 – ₹35,000",
        budgetNum: 20000,
        style: "Adventure",
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=900&q=80",
        desc: "While the rest of India sees downpours, high Kashmir meadows enjoy clear blue skies and turquoise glacial lakes.",
        highlights: ["Vishansar & Kishansar Twin Lakes", "Gadsar Wildflower Pass (13,750 ft)", "Gangabal Lake under Mount Harmukh", "Thajiwas Glacier in Sonamarg"],
        itinerary: [
          "Day 1: Drive from Srinagar to Sonamarg camp along Sindh river",
          "Day 2: Trek to Nichnai pass through maple and silver birch forests",
          "Day 3: Cross Nichnai to stunning emerald Vishansar Lake",
          "Day 4: Climb Gadsar pass with panoramic views of twin lakes",
          "Day 5: Reach Gangabal Lake reflection of snow-clad Harmukh",
          "Day 6: Trek down to Naranag heritage temples and return to Srinagar"
        ],
        tip: "August is the prime snow-free window for the entire 7-lake trail."
      },
      {
        id: "aug-srilanka",
        name: "Ella, Kandy & Trincomalee, Sri Lanka",
        country: "Sri Lanka",
        region: "International",
        vibe: "Heritage & Culture",
        award: "🚂 Blue Train & Sunny East Coast",
        rating: 4.8,
        temp: "24°C to 31°C",
        duration: "6–7 Days",
        budget: "₹45,000 – ₹75,000",
        budgetNum: 45000,
        style: "Couples",
        image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=900&q=80",
        desc: "Ride the iconic blue train through tea hills, climb Sigiriya Lion Rock, and relax on the sunny East Coast beaches.",
        highlights: ["Kandy to Ella Blue Mountain Train", "Nine Arch Bridge Instagram Spot", "Sigiriya Ancient Rock Fortress", "Nilaveli Beach & Pigeon Island Snorkeling"],
        itinerary: [
          "Day 1: Land in Colombo, scenic drive to Kandy, visit Temple of the Tooth Relic",
          "Day 2: Iconic 6-hour train ride over Nine Arch Bridge into misty Ella",
          "Day 3: Hike Little Adam's Peak, visit Ravana Falls",
          "Day 4: Drive north to Trincomalee for calm sunny beaches and snorkeling with reef sharks",
          "Day 5: Sigiriya Lion Rock fortress climb and return to Colombo"
        ],
        tip: "While southwest Sri Lanka gets monsoon in August, the East Coast (Trincomalee & Arugam Bay) is sunny, calm, and dry."
      }
    ]
  },
  {
    id: "september",
    number: "09",
    name: "September",
    short: "Sep",
    icon: "🌾",
    season: "monsoon",
    seasonLabel: "Post-Monsoon Refresh",
    weatherNote: "Dust-free clear skies, green landscapes & waterfalls (15°C to 27°C)",
    tagline: "Rains retreat leaving crystal skies, roaring waterfalls, music festivals in green valleys, and warm Mediterranean waters.",
    bestFor: "Music festivals, Living root bridges, Mediterranean shoulder season, Canyoning",
    bestPlacesSummary: "Meghalaya • Ziro Valley • Coorg • Cappadocia Turkey • Amalfi Coast Italy",
    avoidNote: "Popular beach shacks in Goa only begin reopening in late September.",
    packingList: ["Trekking shoes with solid rubber grip", "Light waterproof jacket", "Sun hat and sunglasses", "Daypack with water bottle"],
    places: [
      {
        id: "sep-meghalaya",
        name: "Shillong, Cherrapunji & Dawki, Meghalaya",
        country: "India",
        region: "India",
        vibe: "Nature & Wildlife",
        award: "🌿 Abode of Clouds & Living Bridges",
        rating: 4.9,
        temp: "16°C to 24°C",
        duration: "5–6 Days",
        budget: "₹18,000 – ₹32,000",
        budgetNum: 18000,
        style: "Friends",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
        desc: "Waterfalls like Nohkalikai roar at their peak while skies clear up for trekking to the Double Decker Living Root Bridge.",
        highlights: ["Double Decker Living Root Bridge Trek", "Nohkalikai & Krang Suri Blue Waterfalls", "Crystal-Clear Umngot River Boat Ride in Dawki", "Laitlum Grand Canyons"],
        itinerary: [
          "Day 1: Land in Guwahati, scenic drive through pine hills to Shillong, visit Police Bazar",
          "Day 2: Drive to Cherrapunji (Sohra), visit Nohkalikai Falls and Mawsmai Caves",
          "Day 3: Trek 3,500 stone steps down to Nongriat Double Decker Root Bridge and Rainbow Falls",
          "Day 4: Drive to Dawki border for boat ride on transparent glass-like river",
          "Day 5: Swim in turquoise Krang Suri waterfall pools and return to Guwahati"
        ],
        tip: "Stay overnight in a Nongriat village homestay to swim in private natural forest rock pools at sunrise."
      },
      {
        id: "sep-ziro",
        name: "Ziro Valley, Arunachal Pradesh",
        country: "India",
        region: "India",
        vibe: "Heritage & Culture",
        award: "🎸 India's Greatest Indie Music Fest",
        rating: 4.8,
        temp: "14°C to 24°C",
        duration: "4–5 Days",
        budget: "₹22,000 – ₹38,000",
        budgetNum: 22000,
        style: "Friends",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
        desc: "Golden paddy fields and pine hills host the eco-friendly Ziro Festival of Music alongside unique Apatani tribal culture.",
        highlights: ["Ziro Festival of Music (End Sept)", "Hong & Hari Apatani Tribal Villages", "Pine Forest Camping", "Local Rice Beer (Apong) & Bamboo Chicken"],
        itinerary: [
          "Day 1: Fly to Hollongi (Itanagar), drive through misty mountains to Ziro",
          "Day 2: Set up tent at festival grounds, enjoy acoustic music sets among pines",
          "Day 3: Cultural walk with Apatani elders; explore sustainable fish-paddy farming",
          "Day 4: Electric festival night stage performances under starry skies",
          "Day 5: Drive back to Itanagar/Guwahati and departure"
        ],
        tip: "Apply for your Arunachal Pradesh Inner Line Permit (ILP) online at least 1 week before traveling."
      },
      {
        id: "sep-amritsar",
        name: "Amritsar (Golden Temple), Punjab",
        country: "India",
        region: "India",
        vibe: "Temples & Divine",
        award: "✨ The Golden Temple of Eternal Peace",
        rating: 5.0,
        temp: "20°C to 31°C",
        duration: "2–3 Days",
        budget: "₹8,000 – ₹16,000",
        budgetNum: 8000,
        style: "Family",
        image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=900&q=80",
        desc: "Sri Harmandir Sahib glitters in gold reflecting over the sacred Amrit Sarovar lake, serving free langar meals to 100,000 pilgrims every day.",
        highlights: ["Sri Harmandir Sahib (Golden Temple) Night Palki Sahib Ceremony", "World's Largest Community Kitchen (Guru Ka Langar)", "Attari-Wagah Border Beating Retreat Ceremony", "Historic Jallianwala Bagh Memorial"],
        itinerary: [
          "Day 1: Arrive Amritsar, afternoon walk around the Sarovar, witness night Palki Sahib ceremony at 9:30 PM",
          "Day 2: Morning Darshan, volunteer service in the Langar hall, visit Jallianwala Bagh",
          "Day 3: Drive 30 km to Wagah Border for the high-energy military flag-lowering parade",
          "Day 4: Taste iconic Amritsari Kulcha with Chole and sweet lassi before departure"
        ],
        tip: "Cover your head with a scarf and wash your feet in the holy water channel before entering the Golden Temple complex."
      },
      {
        id: "sep-turkey",
        name: "Cappadocia & Istanbul, Turkey",
        country: "Turkey",
        region: "International",
        vibe: "Heritage & Culture",
        award: "🎈 Hot Air Balloon Haven",
        rating: 4.9,
        temp: "15°C to 26°C",
        duration: "6–8 Days",
        budget: "₹1,05,000 – ₹1,65,000",
        budgetNum: 105000,
        style: "Couples",
        image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&w=900&q=80",
        desc: "September offers the highest flight success rate for sunrise hot-air balloons drifting over Göreme fairy chimneys.",
        highlights: ["Sunrise Hot Air Balloon Flight over Fairy Chimneys", "Cave Hotel Suite with Panoramic Terrace", "Hagia Sophia & Bosphorus Yacht Sunset", "Derinkuyu Multi-Level Underground City"],
        itinerary: [
          "Day 1: Land in Istanbul, tour Hagia Sophia, Blue Mosque & Grand Bazaar",
          "Day 2: Bosphorus sunset boat cruise, flight to Cappadocia, check into cave hotel",
          "Day 3: 5:00 AM hot air balloon ride over volcanic valleys & Rose Valley hike",
          "Day 4: Explore Derinkuyu underground city and pottery workshop in Avanos",
          "Day 5: Return to Istanbul for Turkish hamam bath and spice shopping"
        ],
        tip: "Book your hot air balloon for your very first morning so you have backup mornings if wind causes delays."
      }
    ]
  },
  {
    id: "october",
    number: "10",
    name: "October",
    short: "Oct",
    icon: "🍁",
    season: "monsoon",
    seasonLabel: "Festive Lights & Golden Autumn",
    weatherNote: "Crisp autumn air, crystal clear mountain panoramas (12°C to 28°C)",
    tagline: "Autumn brings the clearest Himalayan mountain views of the year, Mysore Dasara illuminations, and Asian paragliding.",
    bestFor: "Grand festivals, Paragliding, Desert forts, Golden foliage, Stargazing",
    bestPlacesSummary: "Mysore & Hampi • Bir Billing • Pachmarhi • Nepal Pokhara • Jordan Petra",
    avoidNote: "Book transport early as Diwali and Dussehra holidays create high travel demand.",
    packingList: ["Festive / ethnic wear for temple cities", "Windproof jacket for paragliding & high hills", "Comfortable walking shoes for ruins", "Sun hat and sunglasses"],
    places: [
      {
        id: "oct-mysore",
        name: "Mysore & Hampi, Karnataka",
        country: "India",
        region: "India",
        vibe: "Heritage & Culture",
        award: "👑 Mysore Dasara Grandeur",
        rating: 4.9,
        temp: "19°C to 29°C",
        duration: "4–5 Days",
        budget: "₹14,000 – ₹25,000",
        budgetNum: 14000,
        style: "Family",
        image: "https://images.unsplash.com/photo-1600100397608-f010f423b971?auto=format&fit=crop&w=900&q=80",
        desc: "Mysore Palace dazzles with 100,000 golden light bulbs for Dasara while Hampi's boulder-strewn Vijayanagara ruins enjoy cool breezes.",
        highlights: ["Illuminated Mysore Palace (100,000 Bulbs)", "Jumbo Savari Elephant Procession", "Hampi Stone Chariot & Virupaksha Temple", "Tungabhadra Coracle River Ride"],
        itinerary: [
          "Day 1: Arrive Bengaluru, drive to Mysore, witness illuminated palace at 7:00 PM",
          "Day 2: Dasara festivities, Chamundi Hill, and drive overnight to Hampi",
          "Day 3: Rent bicycles to explore Vittala Temple musical pillars and Stone Chariot",
          "Day 4: Coracle ride on Tungabhadra river, sunset from Matanga Hill",
          "Day 5: Return to Bengaluru with Mysore Pak sweets"
        ],
        tip: "Rent a moped or bicycle in Hampi to discover secluded temples tucked between giant orange boulders."
      },
      {
        id: "oct-bir",
        name: "Bir Billing & Dharamshala, Himachal",
        country: "India",
        region: "India",
        vibe: "Adventure",
        award: "🪂 Asia's Paragliding Capital",
        rating: 4.8,
        temp: "12°C to 23°C",
        duration: "3–4 Days",
        budget: "₹12,000 – ₹22,000",
        budgetNum: 12000,
        style: "Friends",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
        desc: "October offers the steadiest thermals of the year for soaring above the Dhauladhar peaks at 8,000 ft.",
        highlights: ["Tandem Paragliding Flight (30 mins from Billing to Bir)", "Sunset Landing Site Café Culture", "Sherabling & Chokling Monasteries", "McLeodGanj Dalai Lama Temple"],
        itinerary: [
          "Day 1: Arrive Bir, explore Tibetan colony, visit monasteries and garden cafés",
          "Day 2: Drive up to Billing takeoff (8,000 ft), fly across tea gardens to Bir landing",
          "Day 3: Day trip to Dharamshala, Bhagsu waterfall, and McLeodGanj",
          "Day 4: Sunrise cycling tour through Kangra tea estates and departure"
        ],
        tip: "Request the 3:30 PM paragliding slot for a surreal sunset flight over golden alpine valleys."
      },
      {
        id: "oct-nepal",
        name: "Pokhara & Annapurna Foothills, Nepal",
        country: "Nepal",
        region: "International",
        vibe: "Snow & Mountains",
        award: "🏔️ Himalayan Horizon Views",
        rating: 4.8,
        temp: "12°C to 24°C",
        duration: "5–6 Days",
        budget: "₹30,000 – ₹55,000",
        budgetNum: 30000,
        style: "Adventure",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
        desc: "Post-monsoon October provides razor-sharp reflections of Mount Machhapuchhre (Fishtail Peak) in Phewa Lake.",
        highlights: ["Phewa Lake Colorful Wooden Boating", "Sarangkot Sunrise over Annapurna Range", "Poon Hill Short Trek", "Kathmandu Durbar Square & Swayambhunath"],
        itinerary: [
          "Day 1: Fly to Kathmandu, explore Thamel and ancient temples",
          "Day 2: Scenic mountain flight or drive to Pokhara, lakeside sunset",
          "Day 3: Sunrise at Sarangkot, boat ride to Tal Barahi Island temple",
          "Day 4: Short hike to World Peace Pagoda and Davis Falls",
          "Day 5: Return to Kathmandu for momos and Thangka paintings shopping"
        ],
        tip: "Indian passport / Voter ID holders enter Nepal visa-free without any international fees."
      }
    ]
  },
  {
    id: "november",
    number: "11",
    name: "November",
    short: "Nov",
    icon: "🪔",
    season: "winter",
    seasonLabel: "Spiritual Lanterns & Desert Fairs",
    weatherNote: "Breezy cool evenings & crisp sunny days (15°C to 28°C)",
    tagline: "Peak travel season begins! Witness 1 million diyas at Dev Deepawali in Varanasi, Pushkar camel fairs, and lantern-lit skies in Thailand.",
    bestFor: "Ghat illuminations, Camel fairs, Floating lanterns, Desert camping",
    bestPlacesSummary: "Varanasi • Pushkar & Jaipur • Jaisalmer • Chiang Mai Thailand • Dubai",
    avoidNote: "Delhi plains can experience stubble-burning air quality; head to Rajasthan or the hills instead.",
    packingList: ["Modest cotton clothes for ghats & temples", "A light evening sweater or jacket", "Camera with low-light lens for lantern night shots", "Sunscreen and walking sandals"],
    places: [
      {
        id: "nov-varanasi",
        name: "Varanasi (Kashi Vishwanath), UP",
        country: "India",
        region: "India",
        vibe: "Temples & Divine",
        award: "🪔 Moksha Capital & Dev Deepawali",
        rating: 5.0,
        temp: "15°C to 28°C",
        duration: "3–4 Days",
        budget: "₹12,000 – ₹24,000",
        budgetNum: 12000,
        style: "Culture",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=900&q=80",
        desc: "Kashi Vishwanath Jyotirlinga corridor links the ancient temple directly to the sacred Ganges, where over 1 million earthen diyas glow on Dev Deepawali.",
        highlights: ["Kashi Vishwanath Corridor & Gold-Spired Darshan", "Dev Deepawali 1 Million Diya Illumination", "Dashashwamedh Maha Ganga Aarti", "Ganga Sunrise Rowboat Ride"],
        itinerary: [
          "Day 1: Arrive Varanasi, check into riverside haveli, attend evening Dashashwamedh Aarti",
          "Day 2: Morning Darshan at Kashi Vishwanath temple corridor and Kaal Bhairav shrine",
          "Day 3: Witness Dev Deepawali from a wooden rowboat drifting past 84 illuminated ghats",
          "Day 4: Morning boat ride at Assi Ghat with classical shehnai music and departure"
        ],
        tip: "Book the early morning Mangala Aarti (3:00 AM) at Kashi Vishwanath online on the temple trust website for an ethereal spiritual experience."
      },
      {
        id: "nov-ujjain",
        name: "Ujjain (Mahakaleshwar Jyotirlinga), MP",
        country: "India",
        region: "India",
        vibe: "Temples & Divine",
        award: "🔱 Bhasma Aarti & Mahakal Lok",
        rating: 4.9,
        temp: "16°C to 29°C",
        duration: "2–3 Days",
        budget: "₹8,000 – ₹16,000",
        budgetNum: 8000,
        style: "Family",
        image: "https://images.unsplash.com/photo-1600100397608-f010f423b971?auto=format&fit=crop&w=900&q=80",
        desc: "Home to the revered south-facing (Dakshinmukhi) Mahakaleshwar Jyotirlinga and the magnificent 900-meter-long Mahakal Lok corridor depicting Shiva lore.",
        highlights: ["World-Famous 4:00 AM Bhasma Aarti", "Grand 900m Mahakal Lok Illuminated Corridor", "Ram Ghat Shipra River Evening Aarti", "Kaal Bhairav Temple Ritual Offering"],
        itinerary: [
          "Day 1: Arrive Indore/Ujjain, evening walk along the illuminated Mahakal Lok corridor",
          "Day 2: Attend the sacred 4:00 AM Bhasma Aarti, visit Harsiddhi Shaktipeeth and Kaal Bhairav",
          "Day 3: Shipra river holy bath, sample street food in Sarafa bazaar (Indore) and departure"
        ],
        tip: "Register online for the 4:00 AM Bhasma Aarti on the Shree Mahakaleshwar portal exactly 1 month prior as slots fill within minutes."
      },
      {
        id: "nov-pushkar",
        name: "Pushkar & Jaipur, Rajasthan",
        country: "India",
        region: "India",
        vibe: "Heritage & Culture",
        award: "🐪 World's Largest Camel Fair",
        rating: 4.8,
        temp: "14°C to 28°C",
        duration: "4–5 Days",
        budget: "₹16,000 – ₹30,000",
        budgetNum: 16000,
        style: "Culture",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=80",
        desc: "Over 50,000 decorated camels, Rajasthani turban contests, hot-air balloons, and sacred lake ghats during Pushkar Mela.",
        highlights: ["Pushkar Camel & Livestock Fair", "Sunrise Hot Air Balloon Flight over Dunes", "Brahma Temple & 52 Sacred Ghats", "Jaipur Amer Fort Light & Sound Show"],
        itinerary: [
          "Day 1: Arrive Jaipur, visit Hawa Mahal and Amer Fort",
          "Day 2: Drive to Pushkar, settle into desert camp, evening camel fair competitions",
          "Day 3: Sunrise hot air balloon over the dunes; sunset at Savitri temple cable car",
          "Day 4: Sacred dip and evening Maha Aarti at Pushkar Lake",
          "Day 5: Return to Jaipur for shopping (blue pottery, block print quilts)"
        ],
        tip: "Take the cable car to Savitri Temple on Ratnagiri hill for a 360-degree sunset over the holy lake."
      },
      {
        id: "nov-chiangmai",
        name: "Chiang Mai (Yi Peng & Loy Krathong), Thailand",
        country: "Thailand",
        region: "International",
        vibe: "Heritage & Culture",
        award: "🏮 Sky Lantern Festival of Lights",
        rating: 5.0,
        temp: "18°C to 29°C",
        duration: "4–6 Days",
        budget: "₹55,000 – ₹90,000",
        budgetNum: 55000,
        style: "Couples",
        image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=80",
        desc: "Thousands of glowing paper lanterns rise into the night sky while floating flower baskets drift on the Ping River.",
        highlights: ["Yi Peng Mass Sky Lantern Release", "Loy Krathong River Flower Baskets", "Doi Suthep Golden Mountain Temple", "Ethical Elephant Nature Park"],
        itinerary: [
          "Day 1: Arrive Chiang Mai Old City, stroll ancient moat temples and night bazaar",
          "Day 2: Ethical elephant sanctuary visit: prepare food and bathe with rescue elephants",
          "Day 3: Yi Peng Lantern release evening: light and release your wish lantern into the sky",
          "Day 4: Release floating Krathongs on Ping River and visit Doi Suthep temple",
          "Day 5: Sticky Waterfalls day climb and departure"
        ],
        tip: "Confirm the exact date of the full moon of the 12th Thai lunar month (usually mid-November) before booking."
      }
    ]
  },
  {
    id: "december",
    number: "12",
    name: "December",
    short: "Dec",
    icon: "🎄",
    season: "winter",
    seasonLabel: "Festive Holiday Finale",
    weatherNote: "Sunny beach breezes (22°C to 30°C) & European snow wonderlands",
    tagline: "Wrap up the year in style! Celebrate Christmas in Goa, tribal dances at Hornbill in Nagaland, or snow-dusted Viennese markets.",
    bestFor: "Christmas carnivals, New Year beach parties, Tribal festivals, European Christmas markets",
    bestPlacesSummary: "Goa • Munnar & Varkala • Kohima Nagaland • Auli • Vienna Austria",
    avoidNote: "Book flight and hotel reservations at least 4-6 weeks early as year-end holiday surcharges apply.",
    packingList: ["Party & beachwear for coastal celebrations", "Festive sweater / coat for European Christmas markets", "Earplugs for lively beach towns", "Sunglasses and portable power bank"],
    places: [
      {
        id: "dec-goa",
        name: "North & South Goa (Christmas & NYE)",
        country: "India",
        region: "India",
        vibe: "Beach & Islands",
        award: "🎉 #1 New Year Celebration Hub",
        rating: 4.9,
        temp: "21°C to 31°C",
        duration: "4–6 Days",
        budget: "₹22,000 – ₹45,000",
        budgetNum: 22000,
        style: "Friends",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
        desc: "Fairy-lit Portuguese churches in Old Goa, beachfront fireworks, candlelit shacks, and world-class culinary parties.",
        highlights: ["Midnight Christmas Mass at Basilica of Bom Jesus", "Palolem & Agonda Sunset Beachfront Dining", "Fontainhas Latin Quarter Decorated Alleys", "New Year's Eve Beach Fireworks"],
        itinerary: [
          "Day 1: Arrive Goa, sunset drink at Morjim beach and fresh seafood dinner",
          "Day 2: Midnight Christmas Mass in Old Goa with illuminated baroque cathedrals",
          "Day 3: Shift to South Goa: quiet sands of Palolem and dolphin boat safari",
          "Day 4: Fontainhas Latin Quarter heritage walk and Portuguese fado music dinner",
          "Day 5: Beach party, water sports, and countdown fireworks under the stars"
        ],
        tip: "Stay in South Goa (Benaulim/Palolem) for peaceful beach vibes or North Goa (Anjuna/Vagator) for lively nightlife."
      },
      {
        id: "dec-nagaland",
        name: "Kohima (Hornbill Festival), Nagaland",
        country: "India",
        region: "India",
        vibe: "Heritage & Culture",
        award: "🪶 Festival of Festivals",
        rating: 5.0,
        temp: "8°C to 20°C",
        duration: "4–5 Days",
        budget: "₹22,000 – ₹38,000",
        budgetNum: 22000,
        style: "Culture",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
        desc: "Held December 1–10 at Kisama Heritage Village, uniting all 17 Naga tribes in warrior dances, archery, and rock concerts.",
        highlights: ["Hornbill Tribal Performances at Kisama", "Naga Morung Architecture & Wood Carvings", "Kohima Night Carnival Street Food", "Dzukou Valley Winter Trek"],
        itinerary: [
          "Day 1: Fly to Dimapur, drive to Kohima, stroll the bustling night carnival",
          "Day 2: Full day at Kisama Heritage Village: warrior dances, indigenous games & folk music",
          "Day 3: Day hike to the pristine winter landscapes of Dzukou Valley",
          "Day 4: Visit Khonoma, India's first green eco-village, and WWII War Cemetery",
          "Day 5: Shop for Naga shawls and departure"
        ],
        tip: "Hornbill happens strictly December 1-10 every year; book Kohima or Khonoma homestays 2-3 months early."
      },
      {
        id: "dec-varkala",
        name: "Munnar & Varkala Cliff, Kerala",
        country: "India",
        region: "India",
        vibe: "Beach & Islands",
        award: "🌊 Red Cliffs & Mist Tea Gardens",
        rating: 4.8,
        temp: "20°C to 29°C",
        duration: "5–6 Days",
        budget: "₹18,000 – ₹34,000",
        budgetNum: 18000,
        style: "Couples",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=900&q=80",
        desc: "Red laterite cliffs perched directly over the Arabian Sea, coupled with cool misty tea estates in Munnar and Fort Kochi Cochin Carnival.",
        highlights: ["Varkala North Cliff Sunset Cafés & Yoga", "Kolukkumalai Highest Organic Tea Sunrise", "Fort Kochi Cochin Carnival & Burning of Pappanji", "Jatayu Earth Center Giant Sculpture"],
        itinerary: [
          "Day 1: Arrive Kochi, drive through misty waterfalls to Munnar",
          "Day 2: Early morning jeep to Kolukkumalai sunrise; visit tea museum",
          "Day 3: Drive south to Varkala Cliff, check into sea-facing boutique stay",
          "Day 4: Morning surf / yoga lesson, sunset seafood dinner on North Cliff",
          "Day 5: Day trip to giant Jatayu rock sculpture and return via Kochi carnival"
        ],
        tip: "Don't miss the 65-foot burning of giant Pappanji on Fort Kochi beach at midnight on New Year's Eve."
      },
      {
        id: "dec-ayodhya",
        name: "Ayodhya & Prayagraj, UP",
        country: "India",
        region: "India",
        vibe: "Temples & Divine",
        award: "🛕 Shri Ram Janmabhoomi & Triveni Sangam",
        rating: 5.0,
        temp: "12°C to 25°C",
        duration: "3–4 Days",
        budget: "₹10,000 – ₹18,000",
        budgetNum: 10000,
        style: "Family",
        image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=900&q=80",
        desc: "The monumental Nagara-style Shri Ram Mandir shines in pink sandstone on the holy Saryu riverbanks, paired with Triveni Sangam in Prayagraj.",
        highlights: ["Shri Ram Janmabhoomi Mandir Darshan", "Saryu River Maha Aarti at Ram Ki Paidi", "Hanuman Garhi Hilltop Shrine", "Triveni Sangam Boat Ride in Prayagraj"],
        itinerary: [
          "Day 1: Arrive Ayodhya via Maharishi Valmiki Airport, check into guest house, attend evening Saryu Aarti",
          "Day 2: Sacred Darshan of Shri Ram Lalla at Ram Mandir, visit Kanak Bhawan and Hanuman Garhi",
          "Day 3: Drive 3 hours to Prayagraj, take a holy boat ride to the confluence of Ganga, Yamuna & Saraswati",
          "Day 4: Visit historic Anand Bhavan, taste local Gujiya and return"
        ],
        tip: "Book Shri Ram Mandir Aarti passes and Sugam Darshan online in advance on the official SRJBTkshetra trust portal."
      },
      {
        id: "dec-tanjore",
        name: "Thanjavur & Madurai (Great Living Chola Temples), Tamil Nadu",
        country: "India",
        region: "India",
        vibe: "Temples & Divine",
        award: "🏛️ 1000-Year-Old UNESCO Granite Marvels",
        rating: 4.9,
        temp: "20°C to 29°C",
        duration: "3–4 Days",
        budget: "₹11,000 – ₹20,000",
        budgetNum: 11000,
        style: "Culture",
        image: "https://images.unsplash.com/photo-1600100397608-f010f423b971?auto=format&fit=crop&w=900&q=80",
        desc: "The 1,000-year-old Brihadisvara Temple (Big Temple) built by Rajaraja Chola I features an 80-tonne monolithic granite dome and soaring vimana.",
        highlights: ["Brihadisvara Temple 216-ft Vimana Tower", "World's Largest Monolithic Nandi Statue", "Madurai Meenakshi Amman 14 Gopurams", "Thanjavur Maratha Palace & Tanjore Painting Galleries"],
        itinerary: [
          "Day 1: Arrive Tiruchirappalli (Trichy), visit Srirangam (world's largest functioning Hindu temple)",
          "Day 2: Explore Thanjavur Brihadisvara Temple at sunset when granite glows like burnished gold",
          "Day 3: Drive to Madurai, evening illuminated stroll around Meenakshi Amman Temple",
          "Day 4: Thirumalai Nayakkar Mahal palace light show, Jigarthanda drink, departure"
        ],
        tip: "Visit the Big Temple in Thanjavur at 4:30 PM to admire the shadow of the vimana and see the floodlights switch on."
      },
      {
        id: "dec-vienna",
        name: "Vienna & Prague, Austria & Czechia",
        country: "Austria",
        region: "International",
        vibe: "Heritage & Culture",
        award: "🎄 Fairytale Christmas Markets",
        rating: 4.9,
        temp: "-2°C to 5°C",
        duration: "6–7 Days",
        budget: "₹1,25,000 – ₹1,95,000",
        budgetNum: 125000,
        style: "Couples",
        image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=900&q=80",
        desc: "Fairytale town squares glowing with millions of fairy lights, spiced hot punch (Punsch), classical concerts, and snow-dusted baroque palaces.",
        highlights: ["Rathausplatz Vienna Christmas Market", "Schönbrunn Palace Artisan Market", "Prague Old Town Square Giant Tree", "St. Stephen's Cathedral Concerts"],
        itinerary: [
          "Day 1: Land in Vienna, evening walk through Rathausplatz illuminated markets",
          "Day 2: Tour Schönbrunn & Belvedere Palaces; sip hot spiced punch in collectable mugs",
          "Day 3: Attend an evening Mozart / Strauss classical concert in a baroque hall",
          "Day 4: Scenic 4-hour train to Prague, walk across historic Charles Bridge",
          "Day 5: Prague Castle and Old Town Square astronomical clock",
          "Day 6: Return flight"
        ],
        tip: "Collect the souvenir ceramic mugs given with your hot chocolate or punch at each market — you can keep them for a few euros deposit."
      }
    ]
  }
];

// Application State
const state = {
  selectedMonth: "january", // Default focused on January
  isSingleMonthMode: true,
  selectedRegion: "all",
  selectedVibe: "all",
  selectedStyle: "all",
  selectedSort: "rank",
  searchQuery: "",
  savedIds: JSON.parse(localStorage.getItem("wanderyear_saved") || "[]")
};

// DOM Elements
const monthRibbon = document.getElementById("monthRibbon");
const monthsContainer = document.getElementById("monthsContainer");
const summaryTableBody = document.getElementById("summaryTableBody");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearch");
const bucketCountEl = document.getElementById("bucketCount");
const detailModal = document.getElementById("detailModal");
const modalContent = document.getElementById("modalContent");
const addPlaceModal = document.getElementById("addPlaceModal");
const addPlaceForm = document.getElementById("addPlaceForm");
const bucketDrawer = document.getElementById("bucketDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const bucketListContainer = document.getElementById("bucketListContainer");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const singleMonthModeBtn = document.getElementById("singleMonthModeBtn");
const allMonthsModeBtn = document.getElementById("allMonthsModeBtn");
const footerMonthLinks = document.getElementById("footerMonthLinks");

// Initialize App
function init() {
  loadCustomPlacesFromStorage();
  renderMonthRibbon();
  renderMonths();
  renderSummaryTable();
  renderFooterLinks();
  updateBucketUI();
  setupEventListeners();
  setupToolsEventListeners();
}

function loadCustomPlacesFromStorage() {
  try {
    const customPlaces = JSON.parse(localStorage.getItem("wanderyear_custom_places") || "[]");
    customPlaces.forEach((cp) => {
      const monthObj = MONTHS_DATA.find((m) => m.id === cp.monthId);
      if (monthObj) {
        monthObj.places.push(cp);
      }
    });
  } catch (err) {
    console.warn("Could not load custom places", err);
  }
}

// Render 12-Month Ribbon
function renderMonthRibbon() {
  monthRibbon.innerHTML = MONTHS_DATA.map((m) => `
    <button class="month-tab ${state.selectedMonth === m.id ? "active" : ""}" data-month="${m.id}" role="tab" aria-selected="${state.selectedMonth === m.id}">
      <span class="month-tab-icon">${m.icon}</span>
      <span class="month-tab-name">${m.short}</span>
      <span class="month-tab-count">${m.places.length} places</span>
    </button>
  `).join("");
}

// Get Processed Destination List
function getFilteredMonths() {
  const q = state.searchQuery.trim().toLowerCase();

  return MONTHS_DATA.map((month) => {
    // If single month mode, only include the active month
    if (state.isSingleMonthMode && month.id !== state.selectedMonth) {
      return null;
    }

    let filtered = month.places.filter((place) => {
      if (state.selectedRegion !== "all" && place.region !== state.selectedRegion) return false;
      if (state.selectedVibe !== "all" && place.vibe !== state.selectedVibe) return false;
      if (state.selectedStyle !== "all") {
        if (state.selectedStyle === "Budget" && place.budgetNum > 25000) return false;
        if (state.selectedStyle === "Luxury" && place.budgetNum < 60000) return false;
        if (state.selectedStyle !== "Budget" && state.selectedStyle !== "Luxury" && place.style && place.style !== state.selectedStyle) return false;
      }

      if (q) {
        const hay = `${month.name} ${place.name} ${place.country} ${place.vibe} ${place.desc} ${place.highlights.join(" ")} ${place.award || ""}`.toLowerCase();
        return hay.includes(q);
      }
      return true;
    });

    // Sorting
    filtered = [...filtered].sort((a, b) => {
      if (state.selectedSort === "rating") return (b.rating || 4.5) - (a.rating || 4.5);
      if (state.selectedSort === "budget-low") return (a.budgetNum || 0) - (b.budgetNum || 0);
      if (state.selectedSort === "budget-high") return (b.budgetNum || 0) - (a.budgetNum || 0);
      return 0; // default rank order
    });

    if (filtered.length === 0 && !state.isSingleMonthMode) return null;
    return { ...month, places: filtered };
  }).filter(Boolean);
}

// Render Main Sections
function renderMonths() {
  const filteredMonths = getFilteredMonths();

  if (filteredMonths.length === 0 || (filteredMonths.length === 1 && filteredMonths[0].places.length === 0)) {
    const activeM = MONTHS_DATA.find((m) => m.id === state.selectedMonth) || MONTHS_DATA[0];
    monthsContainer.innerHTML = `
      <div class="empty-state">
        <h3>No places matched your active filters for ${activeM.name} 🧭</h3>
        <p style="color: var(--text-secondary); margin: 10px 0 18px;">Try clearing search or switching Region/Vibe/Style back to "All".</p>
        <button class="view-btn" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  monthsContainer.innerHTML = filteredMonths.map((month) => {
    const currentIdx = MONTHS_DATA.findIndex((m) => m.id === month.id);
    const prevMonth = MONTHS_DATA[(currentIdx - 1 + 12) % 12];
    const nextMonth = MONTHS_DATA[(currentIdx + 1) % 12];

    return `
      <section class="month-section" id="month-${month.id}">
        <!-- Month Spotlight Banner with Rich Insights -->
        <div class="month-spotlight-banner">
          <div class="spotlight-top">
            <div class="month-title-wrap">
              <div class="month-number-badge">
                <span>${month.icon}</span>
              </div>
              <div class="month-heading">
                <h2>
                  ${month.name} Vacation Destinations
                  <span class="month-season-tag">${month.seasonLabel}</span>
                </h2>
                <p class="month-tagline">${month.tagline}</p>
              </div>
            </div>

            <div class="month-nav-arrows">
              <button class="month-step-btn" onclick="switchMonth('${prevMonth.id}')">
                &larr; ${prevMonth.short}
              </button>
              <button class="month-step-btn" onclick="switchMonth('${nextMonth.id}')">
                ${nextMonth.short} &rarr;
              </button>
            </div>
          </div>

          <div class="spotlight-insights">
            <div class="insight-chip">
              <strong>🌤️ Seasonal Weather</strong>
              ${month.weatherNote}
            </div>
            <div class="insight-chip">
              <strong>🏆 Best Month For</strong>
              ${month.bestFor}
            </div>
            <div class="insight-chip">
              <strong>⚠️ Travel Advisory</strong>
              ${month.avoidNote || "Peak season; book accommodations in advance."}
            </div>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; flex-wrap:wrap; gap:10px;">
          <h3 style="font-size:1.25rem;">
            🌟 Best Places to Visit in ${month.name}
            <span style="font-size:0.85rem; color:var(--text-muted); font-weight:normal;">(${month.places.length} top options)</span>
          </h3>
          <button class="add-place-btn" onclick="openAddPlaceModalForMonth('${month.id}')">
            ➕ Add Your Place to ${month.name}
          </button>
        </div>

        <div class="destinations-grid">
          ${month.places.map((place, idx) => renderPlaceCard(place, month, idx)).join("")}
        </div>
      </section>
    `;
  }).join("");
}

function renderPlaceCard(place, month, idx) {
  const isSaved = state.savedIds.includes(place.id);
  const isTop = idx === 0;

  return `
    <article class="dest-card ${isTop ? "top-choice" : ""}">
      <div class="card-image-wrap">
        <img src="${place.image}" alt="${place.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80'" />
        <div class="card-badges">
          ${place.award ? `<span class="badge-award">${place.award}</span>` : ""}
          <span class="badge-region">${place.region === "India" ? "🇮🇳 India" : "✈️ " + place.country}</span>
        </div>
        <button class="save-trip-btn ${isSaved ? "saved" : ""}" onclick="toggleSave('${place.id}')" title="Save to Bucket List" aria-label="Save ${place.name}">
          ${isSaved ? "❤️" : "🤍"}
        </button>
        <div class="card-bottom-overlay">
          <span class="card-rating">⭐ ${place.rating || "4.8"}</span>
          <span class="card-temp">🌡️ ${place.temp}</span>
        </div>
      </div>

      <div class="card-body">
        <div class="card-meta-top">
          <span>${month.name} • ${place.vibe}</span>
          <span>⏱️ ${place.duration}</span>
        </div>
        <h3 class="card-title">${place.name}</h3>
        <p class="card-desc">${place.desc}</p>
        <div class="card-highlights">
          ${place.highlights.slice(0, 3).map((h) => `<span class="highlight-pill">${h}</span>`).join("")}
        </div>
        <div class="card-footer">
          <span class="card-budget-tag">💰 ${place.budget}</span>
          <div class="card-action-btns">
            <button class="compare-mini-btn" onclick="openCompareWith('${place.id}')" title="Compare with another place">
              ⚖️ Compare
            </button>
            <button class="explore-btn" onclick="openPlaceModal('${place.id}')">
              Plan &rarr;
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

// Switch Active Month
window.switchMonth = function (monthId) {
  state.selectedMonth = monthId;
  state.isSingleMonthMode = true;
  singleMonthModeBtn.classList.add("active");
  allMonthsModeBtn.classList.remove("active");
  renderMonthRibbon();
  renderMonths();

  const el = document.getElementById("monthRibbonWrapper");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

// Summary Table Matrix
function renderSummaryTable() {
  summaryTableBody.innerHTML = MONTHS_DATA.map((m) => {
    const topPickIndia = m.places.find((p) => p.region === "India") || m.places[0];
    const moreIndia = m.places.filter((p) => p.region === "India" && p.id !== topPickIndia.id).slice(0, 3).map((p) => p.name.split(",")[0]).join(", ");
    const intlPicks = m.places.filter((p) => p.region === "International").slice(0, 2).map((p) => p.name.split(",")[0]).join(", ");

    return `
      <tr onclick="switchMonth('${m.id}')" title="Click to view all ${m.name} vacation options">
        <td><strong>${m.icon} ${m.name}</strong></td>
        <td>${m.seasonLabel}</td>
        <td><strong style="color:var(--accent-gold);">${topPickIndia.name.split(",")[0]}</strong></td>
        <td>${moreIndia || "More hill stations"}</td>
        <td>${intlPicks || "Tropical islands"}</td>
        <td>
          <button class="explore-btn" style="padding:4px 10px; font-size:0.75rem;">
            Explore ${m.short} &rarr;
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

// Render Footer Links
function renderFooterLinks() {
  footerMonthLinks.innerHTML = MONTHS_DATA.map((m) => `
    <button class="footer-link-btn" onclick="switchMonth('${m.id}')">
      ${m.icon} ${m.short}
    </button>
  `).join("");
}

// Find Place by ID
function findPlaceById(placeId) {
  for (const month of MONTHS_DATA) {
    const found = month.places.find((p) => p.id === placeId);
    if (found) return { place: found, month };
  }
  return null;
}

// Destination Modal with Full Itinerary & Notes
window.closeDetailModal = function () {
  const m = document.getElementById("detailModal");
  if (m) {
    m.classList.remove("open");
    m.setAttribute("aria-hidden", "true");
  }
};

window.openPlaceModal = function (placeId) {
  const data = findPlaceById(placeId);
  if (!data) return;
  const { place, month } = data;
  const isSaved = state.savedIds.includes(place.id);
  const userNotes = localStorage.getItem(`note_${place.id}`) || "";

  modalContent.innerHTML = `
    <img class="modal-hero-img" src="${place.image}" alt="${place.name}" onerror="this.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80'" />
    <div class="modal-inner">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px; flex-wrap:wrap;">
        <div>
          <span class="section-eyebrow">BEST IN ${month.name.toUpperCase()} • ${place.country.toUpperCase()}</span>
          <h2 id="modalTitle" style="font-size:1.85rem; margin-top:2px;">${place.name}</h2>
          ${place.award ? `<span class="badge-award" style="display:inline-block; margin-top:6px;">${place.award}</span>` : ""}
        </div>
        <button class="bucket-btn" onclick="toggleSave('${place.id}'); openPlaceModal('${place.id}')">
          ${isSaved ? "❤️ Saved in My Trip List" : "🤍 Save to My Trip List"}
        </button>
      </div>

      <p style="color:var(--text-secondary); margin-top:14px; font-size:1rem; line-height:1.6;">${place.desc}</p>

      <div class="modal-meta-grid">
        <div class="meta-box">
          <div class="meta-box-label">🌡️ Best Weather</div>
          <div class="meta-box-val">${place.temp}</div>
        </div>
        <div class="meta-box">
          <div class="meta-box-label">⏱️ Duration</div>
          <div class="meta-box-val">${place.duration}</div>
        </div>
        <div class="meta-box">
          <div class="meta-box-label">💰 Estimated Budget</div>
          <div class="meta-box-val">${place.budget}</div>
        </div>
        <div class="meta-box">
          <div class="meta-box-label">✨ Travel Vibe</div>
          <div class="meta-box-val">${place.vibe}</div>
        </div>
      </div>

      <h4 style="margin: 18px 0 8px;">Top Attractions &amp; Highlights</h4>
      <div class="card-highlights" style="margin-bottom:18px;">
        ${place.highlights.map((h) => `<span class="highlight-pill" style="font-size:0.85rem; padding:6px 12px;">✨ ${h}</span>`).join("")}
      </div>

      ${place.itinerary && place.itinerary.length ? `
        <h4 style="margin: 18px 0 8px;">🗓️ Suggested Day-by-Day Itinerary</h4>
        <div class="itinerary-list">
          ${place.itinerary.map((day) => `<div class="itinerary-day">${day}</div>`).join("")}
        </div>
      ` : ""}

      <div style="background:var(--bg-primary); border-left:4px solid var(--accent-primary); padding:14px 16px; border-radius:8px; margin-top:16px;">
        <strong>💡 Insider Travel Tip for ${month.name}:</strong>
        <p style="color:var(--text-secondary); font-size:0.92rem; margin-top:4px;">${place.tip || "Book stays and transit in advance for the best rates."}</p>
      </div>

      <!-- Packing checklist preview for the month -->
      ${month.packingList ? `
        <div style="margin-top:16px; padding:14px; background:var(--bg-primary); border-radius:10px; border:1px solid var(--border-color);">
          <strong style="font-size:0.85rem; color:var(--accent-emerald);">🧳 Recommended Packing for ${month.name}:</strong>
          <ul style="margin:8px 0 0 18px; font-size:0.86rem; color:var(--text-secondary);">
            ${month.packingList.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      ` : ""}

      <!-- Custom Notes section -->
      <div class="custom-notes-box">
        <strong>📝 My Personal Travel Notes &amp; Dates:</strong>
        <textarea id="tripNotesInput" rows="2" placeholder="Add your hotel booking, flight dates, or friends joining this trip...">${userNotes}</textarea>
        <button class="explore-btn" style="margin-top:8px;" onclick="savePersonalNote('${place.id}')">💾 Save Note</button>
      </div>
    </div>
  `;

  detailModal.classList.add("open");
  detailModal.setAttribute("aria-hidden", "false");
};

window.savePersonalNote = function (placeId) {
  const input = document.getElementById("tripNotesInput");
  if (input) {
    localStorage.setItem(`note_${placeId}`, input.value);
    alert("Trip note saved successfully! 📝");
  }
};

// Toggle Save to Bucket List
window.toggleSave = function (placeId) {
  const idx = state.savedIds.indexOf(placeId);
  if (idx === -1) {
    state.savedIds.push(placeId);
  } else {
    state.savedIds.splice(idx, 1);
  }
  localStorage.setItem("wanderyear_saved", JSON.stringify(state.savedIds));
  renderMonths();
  updateBucketUI();
};

function updateBucketUI() {
  bucketCountEl.textContent = state.savedIds.length;
  if (state.savedIds.length === 0) {
    bucketListContainer.innerHTML = `
      <p style="color:var(--text-secondary); text-align:center; margin-top:40px;">
        No trips saved yet! Click the ❤️ on any destination in January to December to build your personalized vacation list.
      </p>
    `;
    return;
  }

  bucketListContainer.innerHTML = state.savedIds.map((id) => {
    const found = findPlaceById(id);
    if (!found) return "";
    const { place, month } = found;
    return `
      <div class="saved-item">
        <img src="${place.image}" alt="${place.name}" onerror="this.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80'" />
        <div class="saved-item-info" style="cursor:pointer;" onclick="openPlaceModal('${place.id}')">
          <div class="saved-item-month">${month.icon} ${month.name}</div>
          <div class="saved-item-title">${place.name}</div>
          <div style="font-size:0.78rem; color:var(--text-muted);">${place.duration} • ${place.budget}</div>
        </div>
        <button class="remove-saved-btn" onclick="toggleSave('${place.id}')" title="Remove">&times;</button>
      </div>
    `;
  }).join("");
}

// ==========================================
// 1. Interactive Trip Cost & Budget Calculator
// ==========================================
const calculatorModal = document.getElementById("calculatorModal");
const calcDestinationSelect = document.getElementById("calcDestinationSelect");
const calcTravelStyle = document.getElementById("calcTravelStyle");
const calcTravelers = document.getElementById("calcTravelers");
const calcDays = document.getElementById("calcDays");
const calcGrandTotal = document.getElementById("calcGrandTotal");
const calcPerPerson = document.getElementById("calcPerPerson");
const calcStyleBadge = document.getElementById("calcStyleBadge");
const calcFlightCost = document.getElementById("calcFlightCost");
const calcHotelCost = document.getElementById("calcHotelCost");
const calcFoodCost = document.getElementById("calcFoodCost");
const calcActivitiesCost = document.getElementById("calcActivitiesCost");

function populateCalculatorDestinations(preselectId) {
  const allPlaces = MONTHS_DATA.flatMap((m) => m.places.map((p) => ({ ...p, monthName: m.name })));
  calcDestinationSelect.innerHTML = allPlaces.map((p) => `
    <option value="${p.id}" ${p.id === preselectId ? "selected" : ""}>
      ${p.name} (${p.monthName} • ${p.region === "India" ? "India" : p.country})
    </option>
  `).join("");
}

window.openBudgetCalculatorModal = function (placeId) {
  const currentMonthData = MONTHS_DATA.find((m) => m.id === state.selectedMonth) || MONTHS_DATA[0];
  const targetId = placeId || (currentMonthData.places[0] ? currentMonthData.places[0].id : "jan-gulmarg");
  populateCalculatorDestinations(targetId);
  calculateTripBudget();
  calculatorModal.classList.add("open");
  calculatorModal.setAttribute("aria-hidden", "false");
};

window.calculateTripBudget = function () {
  const placeId = calcDestinationSelect.value;
  const data = findPlaceById(placeId);
  const place = data ? data.place : null;

  const style = calcTravelStyle.value; // budget, comfort, luxury
  const travelers = Math.max(1, parseInt(calcTravelers.value, 10) || 1);
  const days = Math.max(1, parseInt(calcDays.value, 10) || 4);

  const isIntl = place ? place.region === "International" : false;
  const baseBudget = place ? place.budgetNum : 20000;

  // Multipliers & base estimates
  let styleMultiplier = 1.0;
  let flightBase = isIntl ? 25000 : 6000;
  let hotelDaily = isIntl ? 5000 : 2500;
  let foodDaily = isIntl ? 2200 : 1000;
  let activitiesDaily = isIntl ? 2000 : 800;

  if (style === "budget") {
    styleMultiplier = 0.65;
    hotelDaily = isIntl ? 2800 : 1200;
    foodDaily = isIntl ? 1200 : 500;
    activitiesDaily = isIntl ? 1000 : 400;
    flightBase = isIntl ? 20000 : 3500; // train / budget flight
    calcStyleBadge.textContent = "🎒 Backpacker / Budget";
    calcStyleBadge.style.color = "var(--accent-emerald)";
  } else if (style === "luxury") {
    styleMultiplier = 2.4;
    hotelDaily = isIntl ? 16000 : 8500;
    foodDaily = isIntl ? 5000 : 2500;
    activitiesDaily = isIntl ? 4500 : 2000;
    flightBase = isIntl ? 45000 : 12000;
    calcStyleBadge.textContent = "💎 Luxury Experience";
    calcStyleBadge.style.color = "var(--accent-gold)";
  } else {
    calcStyleBadge.textContent = "🛋️ Comfort / Mid-Range";
    calcStyleBadge.style.color = "var(--accent-primary)";
  }

  // Calculate breakdown
  const flightTotal = Math.round(flightBase * travelers);
  // Rooms: assume 2 people per room (ceil)
  const roomsNeeded = Math.ceil(travelers / 2);
  const hotelTotal = Math.round(hotelDaily * days * roomsNeeded);
  const foodTotal = Math.round(foodDaily * days * travelers);
  const activitiesTotal = Math.round(activitiesDaily * days * travelers);

  const grandTotal = flightTotal + hotelTotal + foodTotal + activitiesTotal;
  const perPerson = Math.round(grandTotal / travelers);

  calcGrandTotal.textContent = `₹${grandTotal.toLocaleString("en-IN")}`;
  calcPerPerson.textContent = `Approx. ₹${perPerson.toLocaleString("en-IN")} per person (${days} Days)`;

  calcFlightCost.textContent = `₹${flightTotal.toLocaleString("en-IN")}`;
  calcHotelCost.textContent = `₹${hotelTotal.toLocaleString("en-IN")}`;
  calcFoodCost.textContent = `₹${foodTotal.toLocaleString("en-IN")}`;
  calcActivitiesCost.textContent = `₹${activitiesTotal.toLocaleString("en-IN")}`;
};

// ==========================================
// 2. Side-by-Side Destination Comparison Tool
// ==========================================
const compareModal = document.getElementById("compareModal");
const compareSelectA = document.getElementById("compareSelectA");
const compareSelectB = document.getElementById("compareSelectB");
const compareResultContainer = document.getElementById("compareResultContainer");

function populateCompareSelectors(preselectA, preselectB) {
  const allPlaces = MONTHS_DATA.flatMap((m) => m.places.map((p) => ({ ...p, monthName: m.name })));
  const optionsHtml = allPlaces.map((p) => `
    <option value="${p.id}">
      ${p.name} (${p.monthName} • ${p.vibe})
    </option>
  `).join("");

  compareSelectA.innerHTML = optionsHtml;
  compareSelectB.innerHTML = optionsHtml;

  // Defaults
  if (preselectA) compareSelectA.value = preselectA;
  else compareSelectA.value = "jan-gulmarg";

  if (preselectB) compareSelectB.value = preselectB;
  else compareSelectB.value = "jan-auli";
}

window.openCompareModal = function (placeAId, placeBId) {
  populateCompareSelectors(placeAId, placeBId);
  renderComparison();
  compareModal.classList.add("open");
  compareModal.setAttribute("aria-hidden", "false");
};

window.openCompareWith = function (sourcePlaceId) {
  // Pick a rival in the same month or general snow/beach
  const data = findPlaceById(sourcePlaceId);
  let rivalId = "jan-auli";
  if (data) {
    const monthPeers = data.month.places.filter((p) => p.id !== sourcePlaceId);
    if (monthPeers.length) {
      rivalId = monthPeers[0].id;
    }
  }
  openCompareModal(sourcePlaceId, rivalId);
};

window.renderComparison = function () {
  const idA = compareSelectA.value;
  const idB = compareSelectB.value;

  const dataA = findPlaceById(idA);
  const dataB = findPlaceById(idB);

  if (!dataA || !dataB) return;
  const { place: pA, month: mA } = dataA;
  const { place: pB, month: mB } = dataB;

  compareResultContainer.innerHTML = `
    <div class="compare-grid">
      <!-- Destination A -->
      <div class="compare-col">
        <div class="compare-col-header">
          <img src="${pA.image}" alt="${pA.name}" class="compare-col-img" onerror="this.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80'" />
          <div class="compare-col-title">
            <span class="highlight-pill" style="margin-bottom:4px; display:inline-block;">${mA.name} Best Time</span>
            <h3>${pA.name}</h3>
            <span style="font-size:0.8rem; color:var(--text-secondary);">${pA.region === "India" ? "🇮🇳 India" : "✈️ " + pA.country}</span>
          </div>
        </div>

        <div class="compare-row">
          <span class="compare-row-label">🌡️ Weather &amp; Temperature</span>
          <span class="compare-row-val"><strong>${pA.temp}</strong> (${mA.weatherNote})</span>
        </div>

        <div class="compare-row">
          <span class="compare-row-label">💰 Est. Budget / Person</span>
          <span class="compare-row-val" style="color:var(--accent-emerald); font-weight:700;">${pA.budget}</span>
        </div>

        <div class="compare-row">
          <span class="compare-row-label">✨ Vibe &amp; Rating</span>
          <span class="compare-row-val"><strong>${pA.vibe}</strong> • ⭐ ${pA.rating || "4.8"}/5</span>
        </div>

        <div class="compare-row">
          <span class="compare-row-label">⏱️ Ideal Stay Duration</span>
          <span class="compare-row-val">${pA.duration}</span>
        </div>

        <div class="compare-row">
          <span class="compare-row-label">🏆 Top Signature Highlights</span>
          <div class="card-highlights" style="margin-top:4px;">
            ${pA.highlights.map((h) => `<span class="highlight-pill">✨ ${h}</span>`).join("")}
          </div>
        </div>

        <div class="compare-row">
          <span class="compare-row-label">💡 Insider Traveler Tip</span>
          <span class="compare-row-val" style="font-size:0.85rem; color:var(--text-secondary);">${pA.tip || "Book ahead."}</span>
        </div>

        <button class="explore-btn" style="margin-top:auto;" onclick="openPlaceModal('${pA.id}')">
          View Full Itinerary for ${pA.name.split(",")[0]} &rarr;
        </button>
      </div>

      <!-- Destination B -->
      <div class="compare-col">
        <div class="compare-col-header">
          <img src="${pB.image}" alt="${pB.name}" class="compare-col-img" onerror="this.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80'" />
          <div class="compare-col-title">
            <span class="highlight-pill" style="margin-bottom:4px; display:inline-block;">${mB.name} Best Time</span>
            <h3>${pB.name}</h3>
            <span style="font-size:0.8rem; color:var(--text-secondary);">${pB.region === "India" ? "🇮🇳 India" : "✈️ " + pB.country}</span>
          </div>
        </div>

        <div class="compare-row">
          <span class="compare-row-label">🌡️ Weather &amp; Temperature</span>
          <span class="compare-row-val"><strong>${pB.temp}</strong> (${mB.weatherNote})</span>
        </div>

        <div class="compare-row">
          <span class="compare-row-label">💰 Est. Budget / Person</span>
          <span class="compare-row-val" style="color:var(--accent-emerald); font-weight:700;">${pB.budget}</span>
        </div>

        <div class="compare-row">
          <span class="compare-row-label">✨ Vibe &amp; Rating</span>
          <span class="compare-row-val"><strong>${pB.vibe}</strong> • ⭐ ${pB.rating || "4.8"}/5</span>
        </div>

        <div class="compare-row">
          <span class="compare-row-label">⏱️ Ideal Stay Duration</span>
          <span class="compare-row-val">${pB.duration}</span>
        </div>

        <div class="compare-row">
          <span class="compare-row-label">🏆 Top Signature Highlights</span>
          <div class="card-highlights" style="margin-top:4px;">
            ${pB.highlights.map((h) => `<span class="highlight-pill">✨ ${h}</span>`).join("")}
          </div>
        </div>

        <div class="compare-row">
          <span class="compare-row-label">💡 Insider Traveler Tip</span>
          <span class="compare-row-val" style="font-size:0.85rem; color:var(--text-secondary);">${pB.tip || "Book ahead."}</span>
        </div>

        <button class="explore-btn" style="margin-top:auto;" onclick="openPlaceModal('${pB.id}')">
          View Full Itinerary for ${pB.name.split(",")[0]} &rarr;
        </button>
      </div>
    </div>
  `;
};

// ==========================================
// 3. Smart Month Packing Checklist Tool
// ==========================================
const packingModal = document.getElementById("packingModal");
const packingMonthSelect = document.getElementById("packingMonthSelect");
const checklistContainer = document.getElementById("checklistContainer");

const DEFAULT_PACKING_BY_MONTH = {
  january: [
    "Thermal top & bottom innerwear (2–3 pairs)",
    "Heavy waterproof parka or down winter jacket",
    "Woolen beanie cap & neck fleece gaiter",
    "Waterproof insulated snow gloves",
    "Polarized sunglasses (protects eyes from high snow glare)",
    "Thermal woolen socks & waterproof hiking / snow boots",
    "Moisturizing cold cream & SPF 30 lip balm",
    "Portable power bank (cold drains smartphone batteries fast)"
  ],
  february: [
    "Light cotton shirts & daytime comfortable tees",
    "Evening light jacket or embroidered shawl",
    "Comfortable walking shoes / sneakers for forts & cobblestones",
    "Swimwear & quick-dry towel for Andaman / Goa beaches",
    "High SPF 50 sunscreen & polarized sunglasses",
    "Universal power adapter & camera memory cards",
    "Basic travel first-aid & motion sickness medication"
  ],
  march: [
    "Breathable cotton clothes & extra white tee for Holi festivities",
    "Quick-dry shorts and t-shirt for river rafting",
    "Waterproof pouch / case for phone and camera",
    "Binoculars for wildlife safaris in Kaziranga or Ranthambore",
    "Sun hat, lightweight sunglasses, and electrolyte sachets",
    "Light sweater for Himalayan evenings (Rishikesh / Dharamshala)"
  ],
  april: [
    "Comfortable walking sneakers for tulip gardens & tea estates",
    "Light windcheater or denim jacket for hill stations",
    "Camera with macro lens for blooming flowers",
    "Sun umbrella & high UV protection sunglasses",
    "Insulated refillable water bottle"
  ],
  may: [
    "Warm fleece jacket for high mountain elevations (10,000 ft+)",
    "Comfortable trekking shoes with strong rubber grip",
    "Sun hat, UV sunglasses, and cooling face wipes",
    "Motion sickness tablets for winding mountain ghat roads",
    "Valid government photo ID & passport photos (for North Sikkim permits)"
  ],
  june: [
    "Windproof thermal jacket and breathable inner layers",
    "Riding gloves & bandana / dust mask for Ladakh / Spiti roads",
    "High SPF 50+ sunscreen (UV rays are intense above 11,000 ft)",
    "Camphor pouch or portable mini oxygen canister for high passes",
    "Sufficient cash (ATMs in high passes frequently run dry)",
    "Offline GPS map downloads on your phone"
  ],
  july: [
    "Heavy-duty waterproof rain poncho or rain jacket with hood",
    "Waterproof backpack rain cover and dry sacks for electronics",
    "Synthetic quick-dry trekking pants (avoid heavy denim in rain)",
    "Waterproof hiking boots with ankle support & grip",
    "Mosquito repellent spray & leech socks (Western Ghats treks)",
    "Antiseptic cream & waterproof band-aids"
  ],
  august: [
    "Compact folding umbrella & waterproof phone pouch",
    "Traditional ethnic attire for Onam / festival visits",
    "Waterproof sandals or washable sneakers",
    "Light cardigan for air-conditioned flights & evening breezes",
    "Digestive enzymes and probiotic travel supplements"
  ],
  september: [
    "Sturdy trekking shoes with reliable wet grip",
    "Lightweight rain-resistant jacket",
    "Comfortable backpack with hydration bladder",
    "Quick-dry socks & microfiber towel",
    "Camping earplugs and headlamp (for music fest tents in Ziro)"
  ],
  october: [
    "Festive ethnic clothes for temple visits and Dasara illuminations",
    "Windbreaker jacket for Bir paragliding & mountain evenings",
    "Comfortable walking shoes for ruins in Hampi and Petra",
    "Camera tripod for golden-hour and astrophotography",
    "Sunglasses and wide-brim sun hat"
  ],
  november: [
    "Modest cotton clothes for holy river ghats in Varanasi",
    "Light wool sweater or jacket for breezy desert evenings in Pushkar",
    "Low-light camera lens for evening lantern & diya festivals",
    "Comfortable slip-on shoes (frequent shoe removal at temples)",
    "Moisturizing lotion and eye drops (desert air is dry)"
  ],
  december: [
    "Beachwear, stylish linen shirts, and shorts for Goa / Kerala",
    "Heavy winter coat, scarf, and thermal gloves for Vienna / Auli",
    "Partywear for New Year's Eve beach celebrations",
    "Sunscreen SPF 50 & aloe vera after-sun gel",
    "Noise-cancelling earbuds for peaceful sleep during festive weeks"
  ]
};

window.openPackingModal = function (monthId) {
  const targetMonth = monthId || state.selectedMonth || "january";
  packingMonthSelect.value = targetMonth;
  renderPackingList();
  packingModal.classList.add("open");
  packingModal.setAttribute("aria-hidden", "false");
};

window.renderPackingList = function () {
  const month = packingMonthSelect.value;
  const items = DEFAULT_PACKING_BY_MONTH[month] || DEFAULT_PACKING_BY_MONTH["january"];
  const checkedKey = `checked_items_${month}`;
  const checkedIndices = JSON.parse(localStorage.getItem(checkedKey) || "[]");

  checklistContainer.innerHTML = items.map((item, idx) => {
    const isDone = checkedIndices.includes(idx);
    return `
      <label class="check-item ${isDone ? "done" : ""}" onclick="toggleCheckItem('${month}', ${idx})">
        <input type="checkbox" ${isDone ? "checked" : ""} onclick="event.stopPropagation(); toggleCheckItem('${month}', ${idx})" />
        <span>${item}</span>
      </label>
    `;
  }).join("");
};

window.toggleCheckItem = function (month, idx) {
  const key = `checked_items_${month}`;
  let checked = JSON.parse(localStorage.getItem(key) || "[]");
  if (checked.includes(idx)) {
    checked = checked.filter((i) => i !== idx);
  } else {
    checked.push(idx);
  }
  localStorage.setItem(key, JSON.stringify(checked));
  renderPackingList();
};

window.resetPackingChecklist = function () {
  const month = packingMonthSelect.value;
  localStorage.removeItem(`checked_items_${month}`);
  renderPackingList();
};

window.addCustomPackingItem = function () {
  const item = prompt("Enter custom packing item for this trip:");
  if (item && item.trim()) {
    const month = packingMonthSelect.value;
    if (!DEFAULT_PACKING_BY_MONTH[month]) DEFAULT_PACKING_BY_MONTH[month] = [];
    DEFAULT_PACKING_BY_MONTH[month].push(item.trim());
    renderPackingList();
  }
};

// Modal Helpers
window.closeDetailModal = function () {
  const m = document.getElementById("detailModal");
  if (m) {
    m.classList.remove("open");
    m.setAttribute("aria-hidden", "true");
  }
};

window.closeBudgetCalculatorModal = function () {
  const m = document.getElementById("calculatorModal");
  if (m) {
    m.classList.remove("open");
    m.setAttribute("aria-hidden", "true");
  }
};

window.closeCompareModal = function () {
  const m = document.getElementById("compareModal");
  if (m) {
    m.classList.remove("open");
    m.setAttribute("aria-hidden", "true");
  }
};

window.closePackingModal = function () {
  const m = document.getElementById("packingModal");
  if (m) {
    m.classList.remove("open");
    m.setAttribute("aria-hidden", "true");
  }
};

window.closeAddPlaceModal = function () {
  const m = document.getElementById("addPlaceModal");
  if (m) {
    m.classList.remove("open");
    m.setAttribute("aria-hidden", "true");
  }
};

// ==========================================
// Setup Tools Event Listeners
// ==========================================
function setupToolsEventListeners() {
  // Navigation Bar Openers
  const openCalcBtn = document.getElementById("openCalculatorBtn");
  if (openCalcBtn) openCalcBtn.addEventListener("click", () => openBudgetCalculatorModal());

  const openCompBtn = document.getElementById("openCompareBtn");
  if (openCompBtn) openCompBtn.addEventListener("click", () => openCompareModal());

  const openPackBtn = document.getElementById("openPackingBtn");
  if (openPackBtn) openPackBtn.addEventListener("click", () => openPackingModal());

  const openAddPlaceHeroBtn = document.getElementById("openAddPlaceHeroBtn");
  if (openAddPlaceHeroBtn) openAddPlaceHeroBtn.addEventListener("click", () => openAddPlaceModalForMonth(state.selectedMonth));

  // Modal Closers
  const closeCalcBtn = document.getElementById("closeCalcModalBtn");
  if (closeCalcBtn) closeCalcBtn.addEventListener("click", closeBudgetCalculatorModal);

  const closeCompBtn = document.getElementById("closeCompareModalBtn");
  if (closeCompBtn) closeCompBtn.addEventListener("click", closeCompareModal);

  const closePackBtn = document.getElementById("closePackingModalBtn");
  if (closePackBtn) closePackBtn.addEventListener("click", closePackingModal);

  const closeDetailBtn = document.getElementById("closeModalBtn");
  if (closeDetailBtn) closeDetailBtn.addEventListener("click", closeDetailModal);

  const closeAddBtn = document.getElementById("closeAddModalBtn");
  if (closeAddBtn) closeAddBtn.addEventListener("click", closeAddPlaceModal);

  // Esc key to close any open modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDetailModal();
      closeBudgetCalculatorModal();
      closeCompareModal();
      closePackingModal();
      closeAddPlaceModal();
    }
  });
}

window.resetAllFilters = function () {
  state.selectedRegion = "all";
  state.selectedVibe = "all";
  state.selectedStyle = "all";
  state.selectedSort = "rank";
  state.searchQuery = "";
  searchInput.value = "";
  clearSearchBtn.hidden = true;
  document.getElementById("styleSelect").value = "all";
  document.getElementById("sortSelect").value = "rank";

  document.querySelectorAll(".seg-btn").forEach((b) => b.classList.toggle("active", b.dataset.region === "all"));
  document.querySelectorAll(".vibe-chip").forEach((b) => b.classList.toggle("active", b.dataset.vibe === "all"));
  renderMonths();
};

function setupEventListeners() {
  // Month Ribbon Click -> Direct Focus Month
  monthRibbon.addEventListener("click", (e) => {
    const tab = e.target.closest(".month-tab");
    if (!tab) return;
    const monthId = tab.dataset.month;
    switchMonth(monthId);
  });

  // Single Month vs All 12 Months Mode
  singleMonthModeBtn.addEventListener("click", () => {
    state.isSingleMonthMode = true;
    singleMonthModeBtn.classList.add("active");
    allMonthsModeBtn.classList.remove("active");
    renderMonths();
  });

  allMonthsModeBtn.addEventListener("click", () => {
    state.isSingleMonthMode = false;
    allMonthsModeBtn.classList.add("active");
    singleMonthModeBtn.classList.remove("active");
    renderMonths();
  });

  // Region Segmented Control
  document.getElementById("regionFilter").addEventListener("click", (e) => {
    const btn = e.target.closest(".seg-btn");
    if (!btn) return;
    state.selectedRegion = btn.dataset.region;
    document.querySelectorAll(".seg-btn").forEach((b) => b.classList.toggle("active", b === btn));
    renderMonths();
  });

  // Vibe Chips
  document.getElementById("vibeFilter").addEventListener("click", (e) => {
    const chip = e.target.closest(".vibe-chip");
    if (!chip) return;
    state.selectedVibe = chip.dataset.vibe;
    document.querySelectorAll(".vibe-chip").forEach((c) => c.classList.toggle("active", c === chip));
    renderMonths();
  });

  // Style Select
  document.getElementById("styleSelect").addEventListener("change", (e) => {
    state.selectedStyle = e.target.value;
    renderMonths();
  });

  // Sort Select
  document.getElementById("sortSelect").addEventListener("change", (e) => {
    state.selectedSort = e.target.value;
    renderMonths();
  });

  // Search Input
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    clearSearchBtn.hidden = !state.searchQuery;
    renderMonths();
  });

  clearSearchBtn.addEventListener("click", () => {
    state.searchQuery = "";
    searchInput.value = "";
    clearSearchBtn.hidden = true;
    renderMonths();
  });

  // Surprise Me Button
  document.getElementById("surpriseMeBtn").addEventListener("click", () => {
    const currentMonthData = MONTHS_DATA.find((m) => m.id === state.selectedMonth) || MONTHS_DATA[0];
    const places = currentMonthData.places.length ? currentMonthData.places : MONTHS_DATA[0].places;
    const randomPlace = places[Math.floor(Math.random() * places.length)];
    window.openPlaceModal(randomPlace.id);
  });

  // Modal Closers
  document.getElementById("closeModalBtn").addEventListener("click", () => {
    detailModal.classList.remove("open");
  });
  detailModal.addEventListener("click", (e) => {
    if (e.target === detailModal) detailModal.classList.remove("open");
  });

  // Custom Place Modal
  const openAddBtn = document.getElementById("openAddPlaceBtn");
  if (openAddBtn) {
    openAddBtn.addEventListener("click", () => {
      openAddPlaceModalForMonth(state.selectedMonth);
    });
  }
  document.getElementById("closeAddModalBtn").addEventListener("click", () => {
    addPlaceModal.classList.remove("open");
  });
  addPlaceModal.addEventListener("click", (e) => {
    if (e.target === addPlaceModal) addPlaceModal.classList.remove("open");
  });

  // Handle Add Custom Place Submission
  addPlaceForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const monthId = document.getElementById("customMonth").value;
    const name = document.getElementById("customName").value.trim();
    const country = document.getElementById("customCountry").value.trim();
    const region = document.getElementById("customRegion").value;
    const vibe = document.getElementById("customVibe").value;
    const award = document.getElementById("customBadge").value.trim();
    const duration = document.getElementById("customDuration").value.trim() || "4–5 Days";
    const budgetNum = parseInt(document.getElementById("customBudgetNum").value, 10) || 20000;
    const desc = document.getElementById("customDesc").value.trim();
    const highlightsRaw = document.getElementById("customHighlights").value.trim();
    const image = document.getElementById("customImage").value.trim() || "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80";

    const highlights = highlightsRaw ? highlightsRaw.split(",").map((s) => s.trim()).filter(Boolean) : ["Scenic Sightseeing", "Local Food", "Cultural Walk"];

    const newPlace = {
      id: `custom-${Date.now()}`,
      monthId,
      name,
      country,
      region,
      vibe,
      award: award || "⭐ Custom Pick",
      rating: 5.0,
      temp: "Pleasant",
      duration,
      budget: `₹${budgetNum.toLocaleString("en-IN")}`,
      budgetNum,
      style: "Friends",
      image,
      desc,
      highlights,
      itinerary: [
        "Day 1: Arrive and settle in, explore the neighborhood",
        "Day 2: Visit main attractions and highlights",
        "Day 3: Local food, sunset spots, and photography",
        "Day 4: Souvenir shopping and leisurely departure"
      ],
      tip: "Custom user-added destination."
    };

    // Save to memory & localStorage
    const monthObj = MONTHS_DATA.find((m) => m.id === monthId);
    if (monthObj) {
      monthObj.places.unshift(newPlace);
    }
    const savedCustom = JSON.parse(localStorage.getItem("wanderyear_custom_places") || "[]");
    savedCustom.push(newPlace);
    localStorage.setItem("wanderyear_custom_places", JSON.stringify(savedCustom));

    addPlaceForm.reset();
    addPlaceModal.classList.remove("open");
    switchMonth(monthId);
    alert(`🎉 Successfully added "${name}" to ${monthObj ? monthObj.name : "your atlas"}!`);
  });

  // Bucket List Drawer
  document.getElementById("bucketBtn").addEventListener("click", () => {
    bucketDrawer.classList.add("open");
    drawerBackdrop.classList.add("open");
  });
  const closeDrawer = () => {
    bucketDrawer.classList.remove("open");
    drawerBackdrop.classList.remove("open");
  };
  document.getElementById("closeDrawerBtn").addEventListener("click", closeDrawer);
  drawerBackdrop.addEventListener("click", closeDrawer);

  document.getElementById("clearBucketBtn").addEventListener("click", () => {
    state.savedIds = [];
    localStorage.setItem("wanderyear_saved", "[]");
    renderMonths();
    updateBucketUI();
  });

  // Dark / Light Theme
  themeToggle.addEventListener("click", () => {
    const html = document.documentElement;
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    themeIcon.textContent = next === "dark" ? "☀️" : "🌙";
  });
}

document.addEventListener("DOMContentLoaded", init);
