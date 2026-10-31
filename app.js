/**
 * JioHotstar UI Application Engine
 * High-Fidelity Clean-Room Reconstruction
 * Reverse-Engineered from hotstar.com (Soul Design System)
 */

document.addEventListener('DOMContentLoaded', () => {
    initHotstarApp();
});

// ==========================================================================
// Comprehensive JioHotstar Catalog Database
// Grounded in live CDM assets, DOM metadata, and streaming library
// ==========================================================================
const HERO_SLIDES = [
    {
        id: 'hero-1',
        title: 'Bigg Boss',
        subtitle: 'Season 20 • New Episode Daily',
        cutoutImg: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/7293/1789323857293-t',
        bgImg: 'https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/998/1788701930998-i',
        thumbImg: 'https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/7685/1789323747685-h',
        rankTag: '#1 in Hindi Today',
        releaseTag: 'New Episode Daily',
        year: '2026',
        rating: 'U/A 16+',
        lang: 'Hindi',
        genres: 'Reality • Drama • Competition',
        description: 'Milega vardaan, ya machega toofan? Salman Khan hosts season 20 of India’s biggest reality phenomenon, serving 24x7 unfiltered entertainment, high-voltage drama, and unexpected alliances straight from the house!',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        type: 'tv'
    },
    {
        id: 'hero-2',
        title: 'India W vs Zimbabwe W: 3rd ODI Highlights',
        subtitle: 'Women’s International Cricket Series',
        cutoutImg: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/7293/1789323857293-t',
        bgImg: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1920&q=80',
        thumbImg: 'https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/2971/1793197822971-h',
        rankTag: '#1 in Sports Today',
        releaseTag: 'Live Highlights',
        year: '2026',
        rating: 'U',
        lang: 'English • Hindi',
        genres: 'Cricket • Sports • Highlights',
        description: 'A stellar all-round masterclass from Team India seals a commanding series sweep! Watch the explosive boundaries, crucial bowling breakthroughs, and post-match trophy celebration.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        type: 'sports'
    },
    {
        id: 'hero-3',
        title: 'TATA WPL 2027: Auction Review',
        subtitle: 'Exclusive Analysis & Mega Buys',
        cutoutImg: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/7293/1789323857293-t',
        bgImg: 'https://images.unsplash.com/photo-1531415074868-836332ff4296?w=1920&q=80',
        thumbImg: 'https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/8469/1793211918469-h',
        rankTag: 'Trending Special',
        releaseTag: 'Full Episode',
        year: '2026',
        rating: 'U',
        lang: 'Hindi • English',
        genres: 'Cricket • Analysis • Talk Show',
        description: 'Record-breaking bids, surprise steals, and marquee squad reshuffles! Join the expert panel as they dissect team strategies, tactical balances, and standout international signings.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        type: 'sports'
    },
    {
        id: 'hero-4',
        title: 'Moana 2',
        subtitle: 'Disney Animation Studios',
        cutoutImg: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/7293/1789323857293-t',
        bgImg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
        thumbImg: 'https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/1469/1792144511469-h',
        rankTag: '#1 in Movies',
        releaseTag: 'Blockbuster Premiere',
        year: '2026',
        rating: 'U',
        lang: 'English • Hindi • Tamil',
        genres: 'Animation • Adventure • Family',
        description: 'Moana reunites with Maui for an expansive new voyage alongside an unlikely crew of seafarers. After receiving an unexpected call from her wayfinding ancestors, she must journey to far seas.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        type: 'movies'
    },
    {
        id: 'hero-5',
        title: 'Apsara',
        subtitle: 'Hotstar Specials Original',
        cutoutImg: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/7293/1789323857293-t',
        bgImg: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&q=80',
        thumbImg: 'https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/2635/1791389232635-h',
        rankTag: 'Hotstar Special',
        releaseTag: 'All Episodes Streaming',
        year: '2026',
        rating: 'U/A 16+',
        lang: 'Hindi • Tamil • Telugu',
        genres: 'Mythology • Fantasy • Drama',
        description: 'An ancient ethereal celestial dancer awakens in modern-day Varanasi, finding herself caught between mythological vows, celestial enforcers, and a mortal who holds the key to her past.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        type: 'tv'
    }
];

// Content Trays Database
const TRAY_DATA = {
    // Tray 1: New on JioHotstar (Vertical Posters)
    new: [
        {
            id: 'new-1',
            title: 'Love Always',
            type: 'Show',
            rating: 'U/A 13+',
            lang: 'Hindi',
            genre: 'Romance • Drama',
            badge: 'NEW EPISODE DAILY',
            poster: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        },
        {
            id: 'new-2',
            title: 'Jhaad Phoonk',
            type: 'Movie',
            rating: 'U/A 16+',
            lang: 'Hindi',
            genre: 'Horror • Mystery',
            badge: 'PREMIERE',
            poster: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        },
        {
            id: 'new-3',
            title: 'All That We Never Were',
            type: 'Movie',
            rating: 'U/A 16+',
            lang: 'English',
            genre: 'Drama • Coming of Age',
            badge: 'EXCLUSIVE',
            poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        },
        {
            id: 'new-4',
            title: 'The Legend of Hanuman',
            type: 'Show',
            rating: 'U',
            lang: 'Hindi',
            genre: 'Mythology • Animation',
            badge: 'SEASON 5',
            poster: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
        },
        {
            id: 'new-5',
            title: 'Ramayana - Dharma Gatha',
            type: 'Show',
            rating: 'U',
            lang: 'Hindi',
            genre: 'Mythology • Epic',
            badge: 'TRENDING',
            poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
        },
        {
            id: 'new-6',
            title: 'Iss Halloween Hogi Qayamat Ki Raat',
            type: 'Show',
            rating: 'U/A 16+',
            lang: 'Hindi',
            genre: 'Supernatural • Thriller',
            badge: 'SPECIAL',
            poster: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        },
        {
            id: 'new-7',
            title: 'Rizz Master',
            type: 'Show',
            rating: 'U/A 16+',
            lang: 'Hindi',
            genre: 'Comedy • Reality',
            badge: 'NEW EPISODE DAILY',
            poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        },
        {
            id: 'new-8',
            title: 'Roadies - Rebirth',
            type: 'Show',
            rating: 'U/A 16+',
            lang: 'Hindi',
            genre: 'Adventure • Reality',
            badge: 'NEW SEASON',
            poster: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        }
    ],

    // Tray 2: Enter the Bigg Boss House (Horizontal 16:9 cards)
    bb: [
        {
            id: 'bb-1',
            title: 'BBS20: 24 HRS Channel [Deferred]',
            duration: 'LIVE',
            isLive: true,
            badge: '24X7 STREAM',
            image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80',
            desc: 'This is a deferred 24x7 live feed straight from the Bigg Boss house. Watch all uncut drama, secret conversations, and morning routines.',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        },
        {
            id: 'bb-2',
            title: 'BBHin Day 53: Captaincy Race - Andar Ya Bahar?',
            duration: '1h 11m',
            isLive: false,
            badge: 'EPISODE 53',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
            desc: 'With all eyes on the captain’s throne, the Gharwaales put it all on the line! Yung feels betrayed, sparking a fierce showdown with Scout.',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        },
        {
            id: 'bb-3',
            title: 'BBS10 Marathi: 24X7 Stream [Deferred]',
            duration: 'LIVE',
            isLive: true,
            badge: 'REGIONAL LIVE',
            image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
            desc: 'Riteish Deshmukh brings high voltage entertainment to Bigg Boss Marathi with nonstop tasks and candid confessions.',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        },
        {
            id: 'bb-4',
            title: 'BBTel Day 53: A Quirky Snake and Ladder Round',
            duration: '1h 06m',
            isLive: false,
            badge: 'TELUGU EPISODE',
            image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80',
            desc: 'Nagarjuna questions the housemates on their questionable alliances during the dramatic nomination twist.',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
        },
        {
            id: 'bb-5',
            title: 'BBTam Day 53: Internal Rifts and Bigg Twists',
            duration: '1h 07m',
            isLive: false,
            badge: 'TAMIL EPISODE',
            image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=600&q=80',
            desc: 'Vijay Sethupathi presides over intense weekend interrogations as two contestants face surprising double eviction danger.',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
        },
        {
            id: 'bb-6',
            title: 'BBKan Day 53: Shetty Don\'s Heart Goes to...',
            duration: '1h 04m',
            isLive: false,
            badge: 'KANNADA EPISODE',
            image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=600&q=80',
            desc: 'Kiccha Sudeep commands the stage as captaincy contenders tackle physical endurance challenges in heavy rain.',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        }
    ],

    // Tray 3: Top 10 in India Today - Hindi (Numbered Badges)
    top10: [
        {
            rank: 1,
            title: 'Bigg Boss Season 20',
            poster: 'https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/4060/1793301364060-v',
            lang: 'Hindi',
            type: 'Show',
            rating: 'U/A 16+',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        },
        {
            rank: 2,
            title: 'Anupama',
            poster: 'https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/7200/1793268727200-v',
            lang: 'Hindi',
            type: 'Show',
            rating: 'U/A 13+',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        },
        {
            rank: 3,
            title: 'Yeh Rishta Kya Kehlata Hai',
            poster: 'https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/8106/1793081808106-v',
            lang: 'Hindi',
            type: 'Show',
            rating: 'U/A 13+',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        },
        {
            rank: 4,
            title: 'Ghum Hai Kisikey Pyaar Meiin',
            poster: 'https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/9861/1792695799861-v',
            lang: 'Hindi',
            type: 'Show',
            rating: 'U/A 13+',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
        },
        {
            rank: 5,
            title: 'Taaza Khabar',
            poster: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=500&q=80',
            lang: 'Hindi',
            type: 'Show',
            rating: 'A',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
        },
        {
            rank: 6,
            title: 'The Legend of Hanuman',
            poster: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&q=80',
            lang: 'Hindi',
            type: 'Show',
            rating: 'U',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        },
        {
            rank: 7,
            title: 'Criminal Justice',
            poster: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&q=80',
            lang: 'Hindi',
            type: 'Show',
            rating: 'A',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        },
        {
            rank: 8,
            title: 'Special OPS',
            poster: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=500&q=80',
            lang: 'Hindi',
            type: 'Show',
            rating: 'U/A 16+',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        },
        {
            rank: 9,
            title: 'Koffee with Karan',
            poster: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80',
            lang: 'English • Hindi',
            type: 'Show',
            rating: 'U/A 16+',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
        },
        {
            rank: 10,
            title: 'Aarya',
            poster: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500&q=80',
            lang: 'Hindi',
            type: 'Show',
            rating: 'A',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
        }
    ],

    // Tray 4: Popular Shows
    shows: [
        {
            id: 'show-1',
            title: 'The Night Manager',
            type: 'Show',
            rating: 'U/A 16+',
            lang: 'Hindi • English',
            genre: 'Spy • Thriller',
            badge: 'HOTSTAR SPECIAL',
            poster: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        },
        {
            id: 'show-2',
            title: 'Loki',
            type: 'Show',
            rating: 'U/A 13+',
            lang: 'English • Hindi',
            genre: 'Marvel • Sci-Fi',
            badge: 'MARVEL STUDIOS',
            poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        },
        {
            id: 'show-3',
            title: 'Shōgun',
            type: 'Show',
            rating: 'A',
            lang: 'English • Japanese',
            genre: 'Historical • Drama',
            badge: 'EMMY WINNER',
            poster: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        },
        {
            id: 'show-4',
            title: 'The Mandalorian',
            type: 'Show',
            rating: 'U/A 13+',
            lang: 'English • Hindi',
            genre: 'Star Wars • Sci-Fi',
            badge: 'DISNEY+ ORIGINAL',
            poster: 'https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
        },
        {
            id: 'show-5',
            title: 'Modern Family',
            type: 'Show',
            rating: 'U/A 13+',
            lang: 'English',
            genre: 'Sitcom • Comedy',
            badge: 'ALL SEASONS',
            poster: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
        },
        {
            id: 'show-6',
            title: 'Grey\'s Anatomy',
            type: 'Show',
            rating: 'U/A 16+',
            lang: 'English',
            genre: 'Medical • Drama',
            badge: 'SEASON 21',
            poster: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        }
    ],

    // Tray 5: Blockbuster Movies
    movies: [
        {
            id: 'mov-1',
            title: 'Brahmāstra Part One: Shiva',
            type: 'Movie',
            rating: 'U/A 13+',
            lang: 'Hindi',
            genre: 'Fantasy • Action',
            badge: '4K DOLBY VISION',
            poster: 'https://images.unsplash.com/photo-1533613220915-609f661a6fe1?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        },
        {
            id: 'mov-2',
            title: 'Deadpool & Wolverine',
            type: 'Movie',
            rating: 'A',
            lang: 'English • Hindi',
            genre: 'Marvel • Action',
            badge: 'BLOCKBUSTER',
            poster: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        },
        {
            id: 'mov-3',
            title: 'Avatar: The Way of Water',
            type: 'Movie',
            rating: 'U/A 13+',
            lang: 'English • Hindi',
            genre: 'Sci-Fi • Adventure',
            badge: 'IMAX ENHANCED',
            poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        },
        {
            id: 'mov-4',
            title: '12th Fail',
            type: 'Movie',
            rating: 'U',
            lang: 'Hindi',
            genre: 'Biographical • Drama',
            badge: 'CRITICS CHOICE',
            poster: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
        },
        {
            id: 'mov-5',
            title: 'Kill',
            type: 'Movie',
            rating: 'A',
            lang: 'Hindi',
            genre: 'Action • Thriller',
            badge: 'MUST WATCH',
            poster: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
        },
        {
            id: 'mov-6',
            title: 'Sita Ramam',
            type: 'Movie',
            rating: 'U',
            lang: 'Telugu • Hindi',
            genre: 'Romance • Period',
            badge: 'SUPERHIT',
            poster: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        }
    ],

    // Tray 6: Cricket & Live Sports (Horizontal)
    sports: [
        {
            id: 'sp-1',
            title: 'India vs Australia: 4th Test (Border-Gavaskar)',
            duration: 'LIVE',
            isLive: true,
            badge: 'LIVE MATCH',
            image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=80',
            desc: 'IND 342/5 (88.4 ov). Virat Kohli in sublime form with a commanding century as Day 3 heats up in Melbourne!',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        },
        {
            id: 'sp-2',
            title: 'Premier League: Arsenal vs Manchester City',
            duration: 'LIVE',
            isLive: true,
            badge: 'EPL LIVE',
            image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&q=80',
            desc: 'The title race hangs in the balance as two titans clash at the Emirates. High drama in North London.',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        },
        {
            id: 'sp-3',
            title: 'Pro Kabaddi League 2026: Semi-Final 1',
            duration: '1h 45m',
            isLive: false,
            badge: 'HIGHLIGHTS',
            image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=600&q=80',
            desc: 'Puneri Paltan vs Jaipur Pink Panthers in a nail-biting encounter decided in the final super raid.',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        },
        {
            id: 'sp-4',
            title: 'ICC Champions Trophy 2026: Official Preview',
            duration: '42m',
            isLive: false,
            badge: 'SPECIAL',
            image: 'https://images.unsplash.com/photo-1531415074868-836332ff4296?w=600&q=80',
            desc: 'In-depth breakdown of tournament venues, key match-ups, and predictions from cricket legends.',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
        }
    ],

    // Tray 7: Peacock's Finest
    peacock: [
        {
            id: 'pc-1',
            title: 'The Office (Superfan Episodes)',
            type: 'Show',
            rating: 'U/A 13+',
            lang: 'English',
            genre: 'Comedy • Sitcom',
            badge: 'PEACOCK EXCLUSIVE',
            poster: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        },
        {
            id: 'pc-2',
            title: 'Oppenheimer',
            type: 'Movie',
            rating: 'A',
            lang: 'English • Hindi',
            genre: 'Biography • Drama',
            badge: '7 OSCARS',
            poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        },
        {
            id: 'pc-3',
            title: 'Yellowstone',
            type: 'Show',
            rating: 'A',
            lang: 'English',
            genre: 'Western • Drama',
            badge: 'PARAMOUNT/PEACOCK',
            poster: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        },
        {
            id: 'pc-4',
            title: 'Ted (The Series)',
            type: 'Show',
            rating: 'A',
            lang: 'English',
            genre: 'Comedy',
            badge: 'PEACOCK ORIGINAL',
            poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
        },
        {
            id: 'pc-5',
            title: 'Poker Face',
            type: 'Show',
            rating: 'U/A 16+',
            lang: 'English',
            genre: 'Mystery • Comedy',
            badge: 'CRITICS HIT',
            poster: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500&q=80',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
        }
    ]
};

// Application State
const state = {
    currentHeroIndex: 0,
    heroTimer: null,
    heroSoundMuted: true,
    activeSection: 'home',
    watchlist: JSON.parse(localStorage.getItem('hotstar_watchlist') || '[]'),
    activePlayingItem: null,
    playerControlsTimeout: null
};

// ==========================================================================
// Initialization
// ==========================================================================
function initHotstarApp() {
    initHeroBillboard();
    renderAllTrays();
    initNavigation();
    initSearchEngine();
    initVideoPlayer();
    initWatchlistUI();
    initHeaderScrollEffect();
    initKeyboardShortcuts();
}

// ==========================================================================
// Masthead Hero Billboard Carousel Logic
// ==========================================================================
function initHeroBillboard() {
    renderHeroThumbs();
    setHeroSlide(0);

    // Auto-advance billboard every 8s
    startHeroTimer();

    // Sound toggle button on billboard
    const soundBtn = document.getElementById('heroSoundToggleBtn');
    if (soundBtn) {
        soundBtn.addEventListener('click', () => {
            state.heroSoundMuted = !state.heroSoundMuted;
            showToast(state.heroSoundMuted ? '🔇 Audio Preview Muted' : '🔊 Audio Preview Playing');
        });
    }

    // Hero Watch Now Button
    const heroWatchBtn = document.getElementById('heroWatchBtn');
    if (heroWatchBtn) {
        heroWatchBtn.addEventListener('click', () => {
            const currentItem = HERO_SLIDES[state.currentHeroIndex];
            openVideoPlayer(currentItem);
        });
    }

    // Hero Watchlist Button
    const heroWatchlistBtn = document.getElementById('heroWatchlistBtn');
    if (heroWatchlistBtn) {
        heroWatchlistBtn.addEventListener('click', () => {
            const currentItem = HERO_SLIDES[state.currentHeroIndex];
            toggleWatchlist(currentItem);
            updateHeroWatchlistBtnState();
        });
    }
}

function startHeroTimer() {
    clearInterval(state.heroTimer);
    state.heroTimer = setInterval(() => {
        const nextIndex = (state.currentHeroIndex + 1) % HERO_SLIDES.length;
        setHeroSlide(nextIndex);
    }, 7500);
}

function renderHeroThumbs() {
    const thumbsRail = document.getElementById('billboardThumbsRail');
    if (!thumbsRail) return;

    thumbsRail.innerHTML = HERO_SLIDES.map((item, idx) => `
        <div class="thumb-card ${idx === 0 ? 'active' : ''}" data-index="${idx}" title="${item.title}">
            <img src="${item.thumbImg}" alt="${item.title}">
        </div>
    `).join('');

    thumbsRail.querySelectorAll('.thumb-card').forEach(thumb => {
        thumb.addEventListener('click', (e) => {
            const index = parseInt(thumb.getAttribute('data-index'), 10);
            setHeroSlide(index);
            startHeroTimer(); // reset interval
        });
    });
}

function setHeroSlide(index) {
    state.currentHeroIndex = index;
    const slide = HERO_SLIDES[index];

    const billboardBg = document.getElementById('billboardBg');
    const heroCutoutImg = document.getElementById('heroCutoutImg');
    const heroRankTag = document.getElementById('heroRankTag');
    const heroReleaseTag = document.getElementById('heroReleaseTag');
    const heroYear = document.getElementById('heroYear');
    const heroRating = document.getElementById('heroRating');
    const heroLang = document.getElementById('heroLang');
    const heroGenres = document.getElementById('heroGenres');
    const heroDescription = document.getElementById('heroDescription');

    // Smooth fade
    billboardBg.style.opacity = '0.3';
    setTimeout(() => {
        billboardBg.style.backgroundImage = `url('${slide.bgImg}')`;
        billboardBg.style.opacity = '1';
    }, 150);

    heroCutoutImg.src = slide.cutoutImg;
    heroCutoutImg.alt = slide.title;
    heroRankTag.textContent = slide.rankTag;
    heroReleaseTag.textContent = slide.releaseTag;
    heroYear.textContent = slide.year;
    heroRating.textContent = slide.rating;
    heroLang.textContent = slide.lang;
    heroGenres.textContent = slide.genres;
    heroDescription.textContent = slide.description;

    // Update active thumb
    document.querySelectorAll('.thumb-card').forEach((th, i) => {
        th.classList.toggle('active', i === index);
    });

    updateHeroWatchlistBtnState();
}

function updateHeroWatchlistBtnState() {
    const currentItem = HERO_SLIDES[state.currentHeroIndex];
    const isSaved = state.watchlist.some(w => w.id === currentItem.id);
    const heroWatchlistBtn = document.getElementById('heroWatchlistBtn');
    const icon = document.getElementById('heroWatchlistIcon');
    const text = document.getElementById('heroWatchlistText');

    if (heroWatchlistBtn && icon && text) {
        if (isSaved) {
            heroWatchlistBtn.classList.add('in-watchlist');
            icon.textContent = '✓';
            text.textContent = 'Added';
        } else {
            heroWatchlistBtn.classList.remove('in-watchlist');
            icon.textContent = '+';
            text.textContent = 'Watchlist';
        }
    }
}

// ==========================================================================
// Trays & Cards Rendering
// ==========================================================================
function renderAllTrays() {
    renderVerticalTray('tray-scroll-1', TRAY_DATA.new);
    renderHorizontalTray('tray-scroll-2', TRAY_DATA.bb);
    renderTop10Tray('tray-scroll-3', TRAY_DATA.top10);
    renderVerticalTray('tray-scroll-4', TRAY_DATA.shows);
    renderVerticalTray('tray-scroll-5', TRAY_DATA.movies);
    renderHorizontalTray('tray-scroll-6', TRAY_DATA.sports);
    renderVerticalTray('tray-scroll-7', TRAY_DATA.peacock);

    initTrayScrollButtons();
}

function renderVerticalTray(containerId, items) {
    const track = document.getElementById(containerId);
    if (!track) return;

    track.innerHTML = items.map(item => `
        <div class="tray-card-vertical" data-id="${item.id}" title="${item.title}">
            <div class="card-poster-box">
                <img src="${item.poster}" alt="${item.title}" class="card-poster-img" loading="lazy">
                <div class="card-gradient-overlay"></div>
                ${item.badge ? `<div class="card-badge-top">${item.badge}</div>` : ''}
                <div class="card-hover-play">
                    <div class="play-circle-sm">▶</div>
                </div>
            </div>
            <div class="card-caption">
                <span class="card-title">${item.title}</span>
                <span class="card-subtext">${item.lang} • ${item.type}</span>
            </div>
        </div>
    `).join('');

    // Attach click to play
    track.querySelectorAll('.tray-card-vertical').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            const found = items.find(it => it.id === id);
            if (found) openVideoPlayer(found);
        });
    });
}

function renderHorizontalTray(containerId, items) {
    const track = document.getElementById(containerId);
    if (!track) return;

    track.innerHTML = items.map(item => `
        <div class="tray-card-horizontal" data-id="${item.id}" title="${item.title}">
            <div class="card-landscape-box">
                <img src="${item.image}" alt="${item.title}" class="card-landscape-img" loading="lazy">
                <div class="card-gradient-overlay"></div>
                ${item.isLive ? `
                    <div class="badge-live">
                        <span class="live-dot-pulse"></span>
                        <span>LIVE</span>
                    </div>
                ` : `
                    <div class="badge-duration">${item.duration}</div>
                `}
                <div class="card-hover-play">
                    <div class="play-circle-sm">▶</div>
                </div>
            </div>
            <div class="card-caption">
                <span class="card-title">${item.title}</span>
                <span class="card-subtext">${item.badge}</span>
            </div>
        </div>
    `).join('');

    track.querySelectorAll('.tray-card-horizontal').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            const found = items.find(it => it.id === id);
            if (found) openVideoPlayer(found);
        });
    });
}

function renderTop10Tray(containerId, items) {
    const track = document.getElementById(containerId);
    if (!track) return;

    track.innerHTML = items.map(item => `
        <div class="tray-card-top10" data-rank="${item.rank}" title="#${item.rank} ${item.title}">
            <div class="top10-rank-number">${item.rank}</div>
            <div class="top10-poster-box">
                <img src="${item.poster}" alt="${item.title}" class="top10-poster-img" loading="lazy">
                <div class="card-hover-play">
                    <div class="play-circle-sm">▶</div>
                </div>
            </div>
        </div>
    `).join('');

    track.querySelectorAll('.tray-card-top10').forEach(card => {
        card.addEventListener('click', () => {
            const rank = parseInt(card.getAttribute('data-rank'), 10);
            const found = items.find(it => it.rank === rank);
            if (found) openVideoPlayer(found);
        });
    });
}

function initTrayScrollButtons() {
    document.querySelectorAll('.tray-scroll-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const track = document.getElementById(targetId);
            if (!track) return;

            const isNext = btn.classList.contains('btn-next');
            const scrollDistance = track.clientWidth * 0.75;
            track.scrollBy({
                left: isNext ? scrollDistance : -scrollDistance,
                behavior: 'smooth'
            });
        });
    });
}

// ==========================================================================
// Navigation Rail & Sections Logic
// ==========================================================================
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.getAttribute('data-section');
            navItems.forEach(i => i.classList.remove('active'));
            btn.classList.add('active');
            switchSection(section);
        });
    });

    // Logo Click returns home
    const logoLink = document.getElementById('logoLink');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            switchSection('home');
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            document.getElementById('navHome').classList.add('active');
        });
    }

    // Subscribe Button Click
    const subscribeNavBtn = document.getElementById('subscribeNavBtn');
    const upgradeBtn = document.getElementById('upgradeBtn');
    [subscribeNavBtn, upgradeBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                showToast('👑 VIP & 4K Ultra HD Subscription active for your account!');
            });
        }
    });

    // Category Tabs in Header
    document.querySelectorAll('.cat-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            const filter = pill.getAttribute('data-filter');
            applyCategoryFilter(filter);
        });
    });
}

function switchSection(section) {
    state.activeSection = section;
    const homeContent = document.getElementById('homeContentContainer');
    const mySpaceView = document.getElementById('mySpaceView');
    const searchOverlay = document.getElementById('searchOverlay');

    if (section === 'watchlist') {
        homeContent.style.display = 'none';
        searchOverlay.style.display = 'none';
        mySpaceView.style.display = 'flex';
        renderMySpaceWatchlist();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'search') {
        const input = document.getElementById('headerSearchInput');
        if (input) {
            input.focus();
            showToast('🔍 Type in search bar to explore movies, shows, and sports');
        }
    } else {
        homeContent.style.display = 'block';
        mySpaceView.style.display = 'none';
        searchOverlay.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function applyCategoryFilter(filter) {
    const trays = {
        'all': ['tray-new', 'tray-bb', 'tray-top10', 'tray-popular-shows', 'tray-movies', 'tray-sports', 'tray-peacock'],
        'tv': ['tray-bb', 'tray-popular-shows'],
        'movies': ['tray-movies'],
        'sports': ['tray-sports'],
        'bigg-boss': ['tray-bb', 'tray-top10'],
        'peacock': ['tray-peacock'],
        'disney': ['tray-popular-shows', 'tray-movies']
    };

    const visibleTrays = trays[filter] || trays['all'];
    document.querySelectorAll('.content-tray').forEach(tray => {
        if (visibleTrays.includes(tray.id)) {
            tray.style.display = 'flex';
        } else {
            tray.style.display = 'none';
        }
    });

    showToast(`Filtering: ${filter.toUpperCase()}`);
}

// ==========================================================================
// Instant Search Engine
// ==========================================================================
function initSearchEngine() {
    const searchInput = document.getElementById('headerSearchInput');
    const clearBtn = document.getElementById('searchClearBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const homeContent = document.getElementById('homeContentContainer');
    const queryText = document.getElementById('searchQueryText');
    const countText = document.getElementById('resultsCountText');
    const resultsGrid = document.getElementById('searchResultsGrid');

    // Build Master Search Index
    const allSearchable = [
        ...HERO_SLIDES,
        ...TRAY_DATA.new,
        ...TRAY_DATA.bb,
        ...TRAY_DATA.top10,
        ...TRAY_DATA.shows,
        ...TRAY_DATA.movies,
        ...TRAY_DATA.sports,
        ...TRAY_DATA.peacock
    ];

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();

        if (query.length > 0) {
            clearBtn.style.display = 'block';
            homeContent.style.display = 'none';
            searchOverlay.style.display = 'flex';
            queryText.textContent = query;

            const matches = allSearchable.filter(item => {
                const titleMatch = item.title && item.title.toLowerCase().includes(query);
                const genreMatch = item.genres && item.genres.toLowerCase().includes(query);
                const langMatch = item.lang && item.lang.toLowerCase().includes(query);
                return titleMatch || genreMatch || langMatch;
            });

            countText.textContent = `${matches.length} title${matches.length === 1 ? '' : 's'} found`;

            if (matches.length > 0) {
                resultsGrid.innerHTML = matches.map(item => `
                    <div class="tray-card-vertical" data-id="${item.id || item.rank}" title="${item.title}">
                        <div class="card-poster-box">
                            <img src="${item.poster || item.image || item.bgImg}" alt="${item.title}" class="card-poster-img" loading="lazy">
                            <div class="card-gradient-overlay"></div>
                            ${item.badge ? `<div class="card-badge-top">${item.badge}</div>` : ''}
                            <div class="card-hover-play">
                                <div class="play-circle-sm">▶</div>
                            </div>
                        </div>
                        <div class="card-caption">
                            <span class="card-title">${item.title}</span>
                            <span class="card-subtext">${item.lang || 'Hindi'}</span>
                        </div>
                    </div>
                `).join('');

                resultsGrid.querySelectorAll('.tray-card-vertical').forEach(card => {
                    card.addEventListener('click', () => {
                        const id = card.getAttribute('data-id');
                        const target = matches.find(m => (m.id == id || m.rank == id));
                        if (target) openVideoPlayer(target);
                    });
                });
            } else {
                resultsGrid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 60px 0; color: var(--color-text-low);">
                        <h3>No results found for "${query}"</h3>
                        <p style="margin-top: 8px;">Try searching for "Bigg Boss", "Cricket", "Moana", "Anupama", or "Thriller"</p>
                    </div>
                `;
            }
        } else {
            clearBtn.style.display = 'none';
            searchOverlay.style.display = 'none';
            homeContent.style.display = 'block';
        }
    });

    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.style.display = 'none';
        searchOverlay.style.display = 'none';
        homeContent.style.display = 'block';
    });
}

// ==========================================================================
// Fullscreen Theater Video Player Engine
// ==========================================================================
function initVideoPlayer() {
    const modal = document.getElementById('playerModal');
    const video = document.getElementById('mainVideo');
    const overlay = document.getElementById('playerOverlay');
    const closeBtn = document.getElementById('playerCloseBtn');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const centerPlayBtn = document.getElementById('playerCenterPlayBtn');
    const rewindBtn = document.getElementById('rewindBtn');
    const forwardBtn = document.getElementById('forwardBtn');
    const volumeBtn = document.getElementById('volumeBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const pipBtn = document.getElementById('pipBtn');
    const progressContainer = document.getElementById('progressContainer');
    const progressPlayed = document.getElementById('progressPlayed');
    const progressBuffered = document.getElementById('progressBuffered');
    const progressThumb = document.getElementById('progressThumb');
    const currentTimeText = document.getElementById('currentTimeText');
    const totalDurationText = document.getElementById('totalDurationText');

    // Close Player
    closeBtn.addEventListener('click', closeVideoPlayer);

    // Play / Pause Toggle
    function togglePlay() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }

    playPauseBtn.addEventListener('click', togglePlay);
    centerPlayBtn.addEventListener('click', togglePlay);

    video.addEventListener('play', () => {
        document.getElementById('playPauseIcon').innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
        centerPlayBtn.style.display = 'none';
    });

    video.addEventListener('pause', () => {
        document.getElementById('playPauseIcon').innerHTML = '<path d="M8 5v14l11-7z"/>';
        centerPlayBtn.style.display = 'flex';
    });

    // Rewind / Forward 10s
    rewindBtn.addEventListener('click', () => {
        video.currentTime = Math.max(0, video.currentTime - 10);
        showToast('⏪ -10s');
    });

    forwardBtn.addEventListener('click', () => {
        video.currentTime = Math.min(video.duration, video.currentTime + 10);
        showToast('⏩ +10s');
    });

    // Volume Slider & Mute
    volumeSlider.addEventListener('input', () => {
        video.volume = volumeSlider.value;
        video.muted = (video.volume === 0);
        updateVolumeIcon();
    });

    volumeBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        if (video.muted) {
            volumeSlider.value = 0;
        } else {
            volumeSlider.value = video.volume || 1;
        }
        updateVolumeIcon();
    });

    function updateVolumeIcon() {
        const volIcon = document.getElementById('volumeIcon');
        if (video.muted || video.volume === 0) {
            volIcon.innerHTML = '<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>';
        } else {
            volIcon.innerHTML = '<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>';
        }
    }

    // Progress Scrubber
    video.addEventListener('timeupdate', () => {
        if (!video.duration) return;
        const pct = (video.currentTime / video.duration) * 100;
        progressPlayed.style.width = `${pct}%`;
        progressThumb.style.left = `${pct}%`;
        currentTimeText.textContent = formatDuration(video.currentTime);
    });

    video.addEventListener('loadedmetadata', () => {
        totalDurationText.textContent = formatDuration(video.duration);
    });

    video.addEventListener('progress', () => {
        if (video.buffered.length > 0 && video.duration) {
            const bufferedEnd = video.buffered.end(video.buffered.length - 1);
            const bufferedPct = (bufferedEnd / video.duration) * 100;
            progressBuffered.style.width = `${bufferedPct}%`;
        }
    });

    progressContainer.addEventListener('click', (e) => {
        const rect = progressContainer.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        video.currentTime = pos * video.duration;
    });

    // Fullscreen Toggle
    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            modal.requestFullscreen().catch(err => console.log(err));
        } else {
            document.exitFullscreen();
        }
    });

    // Picture-in-Picture
    pipBtn.addEventListener('click', async () => {
        try {
            if (document.pictureInPictureElement) {
                await document.exitPictureInPicture();
            } else if (document.pictureInPictureEnabled) {
                await video.requestPictureInPicture();
            }
        } catch (err) {
            showToast('Picture-in-picture is not supported on this browser.');
        }
    });

    // Subtitles Toast
    document.getElementById('subtitlesBtn').addEventListener('click', () => {
        showToast('🎧 Audio: Hindi (Dolby 5.1) | Subtitles: English [CC]');
    });

    // Autohide Controls on inactivity
    overlay.addEventListener('mousemove', resetControlsTimeout);
    overlay.addEventListener('click', resetControlsTimeout);

    function resetControlsTimeout() {
        overlay.classList.remove('idle');
        clearTimeout(state.playerControlsTimeout);
        state.playerControlsTimeout = setTimeout(() => {
            if (!video.paused) {
                overlay.classList.add('idle');
            }
        }, 3500);
    }
}

function openVideoPlayer(item) {
    state.activePlayingItem = item;
    const modal = document.getElementById('playerModal');
    const video = document.getElementById('mainVideo');
    const title = document.getElementById('playerTitle');
    const subtitle = document.getElementById('playerSubtitle');

    title.textContent = item.title;
    subtitle.textContent = item.subtitle || `${item.lang || 'Hindi'} • ${item.genre || item.type || 'Hotstar Special'}`;

    // Load video stream
    video.src = item.videoUrl || 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
    modal.style.display = 'flex';
    video.play().catch(() => {
        // Autoplay policy fallback
        video.muted = true;
        video.play();
    });

    showToast(`▶ Now Playing: ${item.title}`);
}

function closeVideoPlayer() {
    const modal = document.getElementById('playerModal');
    const video = document.getElementById('mainVideo');
    video.pause();
    video.currentTime = 0;
    modal.style.display = 'none';
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
}

// ==========================================================================
// Watchlist (My Space) Engine
// ==========================================================================
function initWatchlistUI() {
    updateWatchlistBadge();

    const emptyBtn = document.getElementById('emptyExploreBtn');
    if (emptyBtn) {
        emptyBtn.addEventListener('click', () => {
            switchSection('home');
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            document.getElementById('navHome').classList.add('active');
        });
    }
}

function toggleWatchlist(item) {
    const existsIndex = state.watchlist.findIndex(w => w.id === item.id);
    if (existsIndex > -1) {
        state.watchlist.splice(existsIndex, 1);
        showToast(`Removed "${item.title}" from Watchlist`);
    } else {
        state.watchlist.push(item);
        showToast(`✓ Added "${item.title}" to Watchlist`);
    }

    localStorage.setItem('hotstar_watchlist', JSON.stringify(state.watchlist));
    updateWatchlistBadge();

    if (state.activeSection === 'watchlist') {
        renderMySpaceWatchlist();
    }
}

function updateWatchlistBadge() {
    const badge = document.getElementById('watchlistCountBadge');
    const mySpaceCount = document.getElementById('mySpaceCount');
    const count = state.watchlist.length;

    if (badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'inline-block' : 'none';
    }

    if (mySpaceCount) {
        mySpaceCount.textContent = count;
    }
}

function renderMySpaceWatchlist() {
    const grid = document.getElementById('mySpaceGrid');
    const emptyState = document.getElementById('emptyWatchlistState');
    if (!grid || !emptyState) return;

    if (state.watchlist.length === 0) {
        grid.style.display = 'none';
        emptyState.style.display = 'flex';
    } else {
        grid.style.display = 'grid';
        emptyState.style.display = 'none';

        grid.innerHTML = state.watchlist.map(item => `
            <div class="tray-card-vertical" data-id="${item.id}" title="${item.title}">
                <div class="card-poster-box">
                    <img src="${item.poster || item.image || item.bgImg}" alt="${item.title}" class="card-poster-img">
                    <div class="card-gradient-overlay"></div>
                    <div class="card-hover-play">
                        <div class="play-circle-sm">▶</div>
                    </div>
                </div>
                <div class="card-caption">
                    <span class="card-title">${item.title}</span>
                    <span class="card-subtext">${item.lang || 'Hindi'}</span>
                </div>
            </div>
        `).join('');

        grid.querySelectorAll('.tray-card-vertical').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.getAttribute('data-id');
                const target = state.watchlist.find(w => w.id === id);
                if (target) openVideoPlayer(target);
            });
        });
    }
}

// ==========================================================================
// Keyboard Shortcuts & Header Blur Effect
// ==========================================================================
function initKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
        const modal = document.getElementById('playerModal');
        const video = document.getElementById('mainVideo');
        const isPlayerOpen = (modal.style.display === 'flex');

        if (e.key === 'Escape') {
            if (isPlayerOpen) {
                closeVideoPlayer();
            } else if (state.activeSection !== 'home') {
                switchSection('home');
                document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
                document.getElementById('navHome').classList.add('active');
            }
        }

        if (isPlayerOpen) {
            if (e.code === 'Space') {
                e.preventDefault();
                video.paused ? video.play() : video.pause();
            } else if (e.key === 'ArrowRight') {
                video.currentTime = Math.min(video.duration, video.currentTime + 10);
            } else if (e.key === 'ArrowLeft') {
                video.currentTime = Math.max(0, video.currentTime - 10);
            } else if (e.key.toLowerCase() === 'f') {
                if (!document.fullscreenElement) {
                    modal.requestFullscreen().catch(err => console.log(err));
                } else {
                    document.exitFullscreen();
                }
            } else if (e.key.toLowerCase() === 'm') {
                video.muted = !video.muted;
                const volumeSlider = document.getElementById('volumeSlider');
                volumeSlider.value = video.muted ? 0 : video.volume;
            }
        }
    });
}

function initHeaderScrollEffect() {
    const header = document.getElementById('topHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ==========================================================================
// Utility Functions
// ==========================================================================
function formatDuration(seconds) {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (hrs > 0) {
        return `${hrs}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 3000);
}
