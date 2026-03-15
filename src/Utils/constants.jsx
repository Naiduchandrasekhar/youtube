const youtubeKey = import.meta.env.VITE_YOUTUBE_API_KEY;
export const YOUTUBE_MOST_POPULAR_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${youtubeKey}`

// export const YOUTUBE_MULTIPLE_POPULAR_API =
//   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=telugu&type=video&maxResults=30&regionCode=IN&key=${youtubeKey}`;

export const YOUTUBE_MULTIPLE_POPULAR_API =
  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=telugu&type=video&eventType=live&maxResults=30&regionCode=IN&relevanceLanguage=te&key=${youtubeKey}`;


export const videoTitleButtons = {
  en: [
    "All", "Telugu Cinema", "Music", "News", "Podcasts",
    "Gaming", "Live", "Web Development", "Computer Programming",
    "Gadgets", "React Routers", "JavaScript", "Python",
    "AI & Machine Learning", "Data Science", "Cybersecurity",
    "Mobile Development", "Frontend Development", "Backend Development",
    "DevOps", "Cloud Computing", "Tech Reviews", "Startups",
    "Entrepreneurship", "Stock Market", "Personal Finance",
    "Fitness", "Health", "Travel", "Food", "Vlogs",
    "Comedy", "Movies", "Cricket", "Football",
    "Motivation", "Education", "Tutorials",
    "Short Films", "Documentaries"
  ],

  hi: [
    "सभी", "तेलुगु सिनेमा", "संगीत", "समाचार", "पॉडकास्ट",
    "गेमिंग", "लाइव", "वेब डेवलपमेंट", "कंप्यूटर प्रोग्रामिंग",
    "गैजेट्स", "रिएक्ट राउटर", "जावास्क्रिप्ट", "पायथन",
    "एआई और मशीन लर्निंग", "डेटा साइंस", "साइबर सुरक्षा",
    "मोबाइल डेवलपेंट", "फ्रंटएंड डेवलपमेंट", "बैकएंड डेवलपमेंट",
    "डेवऑप्स", "क्लाउड कंप्यूटिंग", "टेक रिव्यू", "स्टार्टअप्स",
    "उद्यमिता", "शेयर बाजार", "पर्सनल फाइनेंस",
    "फिटनेस", "स्वास्थ्य", "यात्रा", "भोजन", "व्लॉग्स",
    "कॉमेडी", "फिल्में", "क्रिकेट", "फुटबॉल",
    "प्रेरणा", "शिक्षा", "ट्यूटोरियल्स",
    "लघु फिल्में", "डॉक्यूमेंट्री"
  ],

  te: [
    "అన్నీ", "తెలుగు సినిమా", "సంగీతం", "వార్తలు", "పాడ్‌కాస్ట్‌లు",
    "గేమింగ్", "లైవ్", "వెబ్ డెవలప్మెంట్", "కంప్యూటర్ ప్రోగ్రామింగ్",
    "గాడ్జెట్లు", "రియాక్ట్ రౌటర్లు", "జావాస్క్రిప్ట్", "పైథాన్",
    "ఏఐ & మెషిన్ లెర్నింగ్", "డేటా సైన్స్", "సైబర్ సెక్యూరిటీ",
    "మొబైల్ డెవలప్మెంట్", "ఫ్రంట్ ఎండ్ డెవలప్మెంట్", "బ్యాక్ ఎండ్ డెవలప్మెంట్",
    "డెవ్‌ఒప్స్", "క్లౌడ్ కంప్యూటింగ్", "టెక్ రివ్యూలు", "స్టార్టప్స్",
    "ఉద్యమిత్వం", "స్టాక్ మార్కెట్", "పర్సనల్ ఫైనాన్స్",
    "ఫిట్‌నెస్", "ఆరోగ్యం", "ప్రయాణం", "ఆహారం", "వ్లాగ్స్",
    "కామెడీ", "సినిమాలు", "క్రికెట్", "ఫుట్‌బాల్",
    "మోటివేషన్", "విద్య", "ట్యుటోరియల్స్",
    "చిన్న చిత్రాలు", "డాక్యుమెంటరీలు"
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
    live:"Live",
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

export const emojiList = ["😀","😄","😂","🥰","😎","😢","🤔","👍","🙏","🎉","💬","🔥","💖","🤯","🥳"];

export const fetchMostPopularVideos = async () => {
  try {
    const response = await fetch(YOUTUBE_MOST_POPULAR_API);

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