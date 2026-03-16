export const youtubeKey = import.meta.env.VITE_YOUTUBE_API_KEY;
//export const YOUTUBE_MOST_POPULAR_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${0}&key=${youtubeKey}`

export const YOUTUBE_MOST_POPULAR_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&"

// export const YOUTUBE_MULTIPLE_POPULAR_API =
//   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=telugu&type=video&maxResults=30&regionCode=IN&key=${youtubeKey}`;

export const YOUTUBE_MULTIPLE_POPULAR_API =
  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=telugu&type=video&eventType=live&maxResults=30&regionCode=IN&relevanceLanguage=te&key=${youtubeKey}`;


// export const videoTitleButtons = {
//   en: [
//     "All", "Telugu Cinema", "Music", "News", "Podcasts",
//     "Gaming", "Live", "Web Development", "Computer Programming",
//     "Gadgets", "React Routers", "JavaScript", "Python",
//     "AI & Machine Learning", "Data Science", "Cybersecurity",
//     "Mobile Development", "Frontend Development", "Backend Development",
//     "DevOps", "Cloud Computing", "Tech Reviews", "Startups",
//     "Entrepreneurship", "Stock Market", "Personal Finance",
//     "Fitness", "Health", "Travel", "Food", "Vlogs",
//     "Comedy", "Movies", "Cricket", "Football",
//     "Motivation", "Education", "Tutorials",
//     "Short Films", "Documentaries"
//   ],

//   hi: [
//     "सभी", "तेलुगु सिनेमा", "संगीत", "समाचार", "पॉडकास्ट",
//     "गेमिंग", "लाइव", "वेब डेवलपमेंट", "कंप्यूटर प्रोग्रामिंग",
//     "गैजेट्स", "रिएक्ट राउटर", "जावास्क्रिप्ट", "पायथन",
//     "एआई और मशीन लर्निंग", "डेटा साइंस", "साइबर सुरक्षा",
//     "मोबाइल डेवलपेंट", "फ्रंटएंड डेवलपमेंट", "बैकएंड डेवलपमेंट",
//     "डेवऑप्स", "क्लाउड कंप्यूटिंग", "टेक रिव्यू", "स्टार्टअप्स",
//     "उद्यमिता", "शेयर बाजार", "पर्सनल फाइनेंस",
//     "फिटनेस", "स्वास्थ्य", "यात्रा", "भोजन", "व्लॉग्स",
//     "कॉमेडी", "फिल्में", "क्रिकेट", "फुटबॉल",
//     "प्रेरणा", "शिक्षा", "ट्यूटोरियल्स",
//     "लघु फिल्में", "डॉक्यूमेंट्री"
//   ],

//   te: [
//     "అన్నీ", "తెలుగు సినిమా", "సంగీతం", "వార్తలు", "పాడ్‌కాస్ట్‌లు",
//     "గేమింగ్", "లైవ్", "వెబ్ డెవలప్మెంట్", "కంప్యూటర్ ప్రోగ్రామింగ్",
//     "గాడ్జెట్లు", "రియాక్ట్ రౌటర్లు", "జావాస్క్రిప్ట్", "పైథాన్",
//     "ఏఐ & మెషిన్ లెర్నింగ్", "డేటా సైన్స్", "సైబర్ సెక్యూరిటీ",
//     "మొబైల్ డెవలప్మెంట్", "ఫ్రంట్ ఎండ్ డెవలప్మెంట్", "బ్యాక్ ఎండ్ డెవలప్మెంట్",
//     "డెవ్‌ఒప్స్", "క్లౌడ్ కంప్యూటింగ్", "టెక్ రివ్యూలు", "స్టార్టప్స్",
//     "ఉద్యమిత్వం", "స్టాక్ మార్కెట్", "పర్సనల్ ఫైనాన్స్",
//     "ఫిట్‌నెస్", "ఆరోగ్యం", "ప్రయాణం", "ఆహారం", "వ్లాగ్స్",
//     "కామెడీ", "సినిమాలు", "క్రికెట్", "ఫుట్‌బాల్",
//     "మోటివేషన్", "విద్య", "ట్యుటోరియల్స్",
//     "చిన్న చిత్రాలు", "డాక్యుమెంటరీలు"
//   ]
// };


export const videoTitleButtons = {
  en: [
    { name: "Music", code: 10 },
    { name: "Gaming", code: 20 },
    { name: "Sports", code: 17 },
    { name: "News", code: 25 },
    { name: "Entertainment", code: 24 },
    { name: "Education", code: 27 },
    { name: "Science & Technology", code: 28 },
    { name: "Film & Animation", code: 1 },
    { name: "Autos & Vehicles", code: 2 },
    { name: "Comedy", code: 23 },
    { name: "Cartoon", code: 1 },
    { name: "TV Shows", code: 24 },
    { name: "CID", code: 24 },
    { name: "Web Series", code: 24 },
    { name: "Movies", code: 1 },
    { name: "Live", code: 24 },
    { name: "Kids", code: 1 },
    { name: "Vlogs", code: 22 },
    { name: "Tech Reviews", code: 28 },
    { name: "Motivation", code: 22 }
  ],
  hi: [
    { name: "संगीत", code: 10 },
    { name: "गेमिंग", code: 20 },
    { name: "खेल", code: 17 },
    { name: "समाचार", code: 25 },
    { name: "मनोरंजन", code: 24 },
    { name: "शिक्षा", code: 27 },
    { name: "विज्ञान और प्रौद्योगिकी", code: 28 },
    { name: "फिल्म और एनिमेशन", code: 1 },
    { name: "ऑटो और वाहन", code: 2 },
    { name: "कॉमेडी", code: 23 },
    { name: "कार्टून", code: 1 },
    { name: "टीवी शो", code: 24 },
    { name: "CID", code: 24 },
    { name: "वेब सीरीज", code: 24 },
    { name: "फिल्में", code: 1 },
    { name: "लाइव", code: 24 },
    { name: "बच्चे", code: 1 },
    { name: "व्लॉग्स", code: 22 },
    { name: "टेक रिव्यू", code: 28 },
    { name: "प्रेरणा", code: 22 }
  ],
  te: [
    { name: "సంగీతం", code: 10 },
    { name: "గేమింగ్", code: 20 },
    { name: "క్రీడలు", code: 17 },
    { name: "వార్తలు", code: 25 },
    { name: "మనోరంజన", code: 24 },
    { name: "విద్య", code: 27 },
    { name: "సైన్స్ & టెక్నాలజీ", code: 28 },
    { name: "ఫిల్మ్ & యానిమేషన్", code: 1 },
    { name: "ఆటోలు & వాహనాలు", code: 2 },
    { name: "కామెడీ", code: 23 },
    { name: "కార్టూన్", code: 1 },
    { name: "టీవి షోలు", code: 24 },
    { name: "CID", code: 24 },
    { name: "వెబ్ సిరీస్", code: 24 },
    { name: "సినిమాలు", code: 1 },
    { name: "లైవ్", code: 24 },
    { name: "కిడ్స్", code: 1 },
    { name: "వ్లాగ్స్", code: 22 },
    { name: "టెక్ రివ్యూస్", code: 28 },
    { name: "మోటివేషన్", code: 22 }
  ]
};

export const sidebarText = {
  en: {
    you: "You",
    playlists: "Playlists",
    watchLater: "Watch Later",
    yourVideos: "Your Videos",
    downloads: "Downloads",
    explore: "Explore",
    home: "Home",
    shorts: "Shorts",
    subscriptions: "Subscriptions",
    live: "Live",
    moreFromYT: "More From YouTube",
    premium: "YouTube Premium",
    studio: "YouTube Studio",
    music: "YouTube Music",
    kids: "YouTube Kids"
  },

  hi: {
    you: "आप",
    playlists: "प्लेलिस्ट",
    watchLater: "बाद में देखें",
    yourVideos: "आपके वीडियो",
    downloads: "डाउनलोड",
    explore: "एक्सप्लोर",
    home: "होम",
    shorts: "शॉर्ट्स",
    subscriptions: "सदस्यताएँ",
    live: "लाइव",
    moreFromYT: "YouTube से और",
    premium: "YouTube प्रीमियम",
    studio: "YouTube स्टूडियो",
    music: "YouTube म्यूजिक",
    kids: "YouTube किड्स"
  },

  te: {
    you: "మీరు",
    playlists: "ప్లేలిస్టులు",
    watchLater: "తరువాత చూడండి",
    yourVideos: "మీ వీడియోలు",
    downloads: "డౌన్‌లోడ్స్",
    explore: "ఎక్స్‌ప్లోర్",
    home: "హోమ్",
    shorts: "షార్ట్స్",
    subscriptions: "సబ్‌స్క్రిప్షన్స్",
    live: "ప్రత్యక్షం",
    moreFromYT: "YouTube నుండి మరిన్ని",
    premium: "YouTube ప్రీమియం",
    studio: "YouTube స్టూడియో",
    music: "YouTube మ్యూజిక్",
    kids: "YouTube కిడ్స్"
  }
};


export const comments = [
  {
    id: "c1",
    name: "Chandra",
    comment: "This is amazing!",
    likeCount: 23,
    replies: [
      {
        id: "c1-r1",
        name: "Akshya",
        comment: "Totally agree with you!",
        likeCount: 15,
        replies: [
          {
            id: "c1-r1-r1",
            name: "Rohit",
            comment: "Interesting point!",
            likeCount: 5,
            replies: [
              {
                id: "c1-r1-r1-r1",
                name: "Sneha",
                comment: "Thanks for sharing!",
                likeCount: 2,
                replies: []
              },
              {
                id: "c1-r1-r1-r2",
                name: "Arjun",
                comment: "I think this can be improved further.",
                likeCount: 4,
                replies: []
              }
            ]
          }
        ]
      },
      {
        id: "c1-r2",
        name: "Priya",
        comment: "I have a different opinion.",
        likeCount: 7,
        replies: [
          {
            id: "c1-r2-r1",
            name: "Rahul",
            comment: "Would love to hear your perspective.",
            likeCount: 3,
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: "c2",
    name: "Vikram",
    comment: "Looks good to me!",
    likeCount: 10,
    replies: [
      {
        id: "c2-r1",
        name: "Neha",
        comment: "Yes, implementation is clean.",
        likeCount: 6,
        replies: []
      },
      {
        id: "c2-r2",
        name: "Karan",
        comment: "Maybe we can optimize it further.",
        likeCount: 4,
        replies: [
          {
            id: "c2-r2-r1",
            name: "Vikram",
            comment: "Good idea! Any suggestions?",
            likeCount: 2,
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: "c3",
    name: "Anita",
    comment: "Can someone explain this further?",
    likeCount: 8,
    replies: [
      {
        id: "c3-r1",
        name: "Chandra",
        comment: "Sure, here’s more detail...",
        likeCount: 12,
        replies: [
          {
            id: "c3-r1-r1",
            name: "Akshya",
            comment: "Thanks, that helped a lot!",
            likeCount: 3,
            replies: []
          },
          {
            id: "c3-r1-r2",
            name: "Meena",
            comment: "Very helpful explanation.",
            likeCount: 5,
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: "c4",
    name: "Rohit",
    comment: "Not sure if this works.",
    likeCount: 5,
    replies: [
      {
        id: "c4-r1",
        name: "Amit",
        comment: "Why do you think so?",
        likeCount: 2,
        replies: []
      }
    ]
  },
  {
    id: "c5",
    name: "Suresh",
    comment: "This reminds me of Reddit comments.",
    likeCount: 9,
    replies: [
      {
        id: "c5-r1",
        name: "Divya",
        comment: "Exactly what I thought!",
        likeCount: 4,
        replies: []
      },
      {
        id: "c5-r2",
        name: "Harish",
        comment: "Nested comments are tricky to implement.",
        likeCount: 6,
        replies: [
          {
            id: "c5-r2-r1",
            name: "Suresh",
            comment: "True, recursion helps a lot.",
            likeCount: 2,
            replies: []
          }
        ]
      }
    ]
  }
];


export const chatData = [
  { name: "Amit", comment: "This is really helpful!" },
  { name: "Divya", comment: "Hello from Bangalore!" },
  { name: "Rakesh", comment: "Nice explanation!" },
  { name: "Pooja", comment: "Learning a lot today." },
  { name: "Nikhil", comment: "Great stream 🔥" },
  { name: "Kavya", comment: "Can you share the repo?" },
  { name: "Deepak", comment: "Watching while coding 😄" },
  { name: "Shreya", comment: "This is my favorite topic!" },
  { name: "Manish", comment: "Amazing content!" },
  { name: "Isha", comment: "Please explain hooks again." },

  { name: "Tarun", comment: "Hello chat!" },
  { name: "Neha", comment: "Very clear explanation." },
  { name: "Sanjay", comment: "Subscribing right now!" },
  { name: "Varun", comment: "Love this stream." },
  { name: "Ritu", comment: "Can we see a demo?" },
  { name: "Aditya", comment: "Nice project idea." },
  { name: "Asha", comment: "Good evening everyone!" },
  { name: "Prakash", comment: "This helps my interview prep." },
  { name: "Komal", comment: "Thanks for sharing!" },
  { name: "Vivek", comment: "Super informative." },

  { name: "Harsha", comment: "Watching from Chennai." },
  { name: "Bhavna", comment: "Great explanation 👍" },
  { name: "Gaurav", comment: "This is so cool!" },
  { name: "Tanya", comment: "Chat is so active today." },
  { name: "Lokesh", comment: "Nice UI design." },
  { name: "Siddhi", comment: "Can you repeat that step?" },
  { name: "Abhishek", comment: "React is awesome!" },
  { name: "Madhavi", comment: "Good learning session." },
  { name: "Yash", comment: "Thanks for the tips!" },
  { name: "Ankit", comment: "Very useful content." },

  { name: "Riya", comment: "Hello from Mumbai!" },
  { name: "Sagar", comment: "This chat is fun 😂" },
  { name: "Karthik", comment: "Waiting for next topic." },
  { name: "Nisha", comment: "Good explanation!" },
  { name: "Omkar", comment: "Trying this in my project." },
  { name: "Aarav", comment: "Nice work!" },
  { name: "Sonia", comment: "Can you share resources?" },
  { name: "Dev", comment: "Learning something new today." },
  { name: "Pavan", comment: "Hello from Hyderabad!" },
  { name: "Simran", comment: "Awesome stream!" },

  { name: "Chirag", comment: "Really interesting." },
  { name: "Lavanya", comment: "Thanks for the session!" },
  { name: "Rohan", comment: "Great live chat demo." },
  { name: "Kunal", comment: "This will help beginners." },
  { name: "Anu", comment: "Good vibes here ✨" },
  { name: "Jay", comment: "Love this explanation." },
  { name: "Preeti", comment: "So easy to understand." },
  { name: "Aravind", comment: "Very informative stream." },
  { name: "Tejas", comment: "Keep going!" },
  { name: "Monika", comment: "Nice coding session!" }
];

export const emojiList = ["😀", "😄", "😂", "🥰", "😎", "😢", "🤔", "👍", "🙏", "🎉", "💬", "🔥", "💖", "🤯", "🥳"];


export const channels = [
  {
    id: 31,
    name: "Akshay Saini - Namaste JavaScript",
    image: "data:image/jpeg;base64,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",
    subscribers: "2M",
    views: "46M"
  },
  { id: 1, name: "MrBeast", image: "https://i.pravatar.cc/150?img=1", subscribers: "235M", views: "45B" },
  { id: 2, name: "T-Series", image: "https://i.pravatar.cc/150?img=2", subscribers: "270M", views: "250B" },
  { id: 3, name: "PewDiePie", image: "https://i.pravatar.cc/150?img=3", subscribers: "111M", views: "29B" },
  { id: 4, name: "5-Minute Crafts", image: "https://i.pravatar.cc/150?img=4", subscribers: "80M", views: "24B" },
  { id: 5, name: "Cocomelon", image: "https://i.pravatar.cc/150?img=5", subscribers: "175M", views: "190B" },
  { id: 6, name: "SET India", image: "https://i.pravatar.cc/150?img=6", subscribers: "170M", views: "150B" },
  { id: 7, name: "Kids Diana Show", image: "https://i.pravatar.cc/150?img=7", subscribers: "120M", views: "100B" },
  { id: 8, name: "Like Nastya", image: "https://i.pravatar.cc/150?img=8", subscribers: "115M", views: "95B" },
  { id: 9, name: "Vlad and Niki", image: "https://i.pravatar.cc/150?img=9", subscribers: "110M", views: "90B" },
  { id: 10, name: "Zee Music Company", image: "https://i.pravatar.cc/150?img=10", subscribers: "105M", views: "80B" },

  { id: 11, name: "WWE", image: "https://i.pravatar.cc/150?img=11", subscribers: "100M", views: "75B" },
  { id: 12, name: "Sony SAB", image: "https://i.pravatar.cc/150?img=12", subscribers: "95M", views: "70B" },
  { id: 13, name: "Justin Bieber", image: "https://i.pravatar.cc/150?img=13", subscribers: "70M", views: "30B" },
  { id: 14, name: "HYBE LABELS", image: "https://i.pravatar.cc/150?img=14", subscribers: "75M", views: "35B" },
  { id: 15, name: "BLACKPINK", image: "https://i.pravatar.cc/150?img=15", subscribers: "90M", views: "40B" },
  { id: 16, name: "Ed Sheeran", image: "https://i.pravatar.cc/150?img=16", subscribers: "55M", views: "28B" },
  { id: 17, name: "Taylor Swift", image: "https://i.pravatar.cc/150?img=17", subscribers: "60M", views: "26B" },
  { id: 18, name: "Mark Rober", image: "https://i.pravatar.cc/150?img=18", subscribers: "60M", views: "9B" },
  { id: 19, name: "Dude Perfect", image: "https://i.pravatar.cc/150?img=19", subscribers: "60M", views: "17B" },
  { id: 20, name: "Nas Daily", image: "https://i.pravatar.cc/150?img=20", subscribers: "18M", views: "3B" },

  { id: 21, name: "MKBHD", image: "https://i.pravatar.cc/150?img=21", subscribers: "20M", views: "3B" },
  { id: 22, name: "TechBurner", image: "https://i.pravatar.cc/150?img=22", subscribers: "12M", views: "2B" },
  { id: 23, name: "CarryMinati", image: "https://i.pravatar.cc/150?img=23", subscribers: "42M", views: "4B" },
  { id: 24, name: "BB Ki Vines", image: "https://i.pravatar.cc/150?img=24", subscribers: "26M", views: "3B" },
  { id: 25, name: "Technical Guruji", image: "https://i.pravatar.cc/150?img=25", subscribers: "23M", views: "3B" },
  { id: 26, name: "Khan Academy", image: "https://i.pravatar.cc/150?img=26", subscribers: "8M", views: "1B" },
  { id: 27, name: "FreeCodeCamp", image: "https://i.pravatar.cc/150?img=27", subscribers: "10M", views: "800M" },
  { id: 28, name: "Fireship", image: "https://i.pravatar.cc/150?img=28", subscribers: "3M", views: "200M" },
  { id: 29, name: "Traversy Media", image: "https://i.pravatar.cc/150?img=29", subscribers: "2.5M", views: "150M" },
  { id: 30, name: "CodeWithHarry", image: "https://i.pravatar.cc/150?img=30", subscribers: "7M", views: "700M" },
];

export const fetchMostPopularVideos = async (videoCode) => {
  try {
    const url = `${YOUTUBE_MOST_POPULAR_API}videoCategoryId=${videoCode?.code}&key=${youtubeKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      console.error("Failed to fetch videos:", response.status, response.statusText);
      return []; // return empty array on failure
    }

    const json = await response.json();
    return json.items || [];
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return [];
  }
};