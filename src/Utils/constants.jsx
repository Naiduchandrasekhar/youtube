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
    history: "History",
    playlists: "Playlists",
    watchLater: "Watch Later",
    yourVideos: "Your Videos",
    downloads: "Downloads",
    explore: "Explore",
    home: "Home",
    shorts: "Shorts",
    subscriptions: "Subscriptions",
    moreFromYT: "More From YouTube",
    premium: "YouTube Premium",
    studio: "YouTube Studio",
    music: "YouTube Music",
    kids: "YouTube Kids"
  },

  hi: {
    you: "आप",
    history: "इतिहास",
    playlists: "प्लेलिस्ट",
    watchLater: "बाद में देखें",
    yourVideos: "आपके वीडियो",
    downloads: "डाउनलोड",
    explore: "एक्सप्लोर",
    home: "होम",
    shorts: "शॉर्ट्स",
    subscriptions: "सदस्यताएँ",
    moreFromYT: "YouTube से और",
    premium: "YouTube प्रीमियम",
    studio: "YouTube स्टूडियो",
    music: "YouTube म्यूजिक",
    kids: "YouTube किड्स"
  },

  te: {
    you: "మీరు",
    history: "చరిత్ర",
    playlists: "ప్లేలిస్టులు",
    watchLater: "తరువాత చూడండి",
    yourVideos: "మీ వీడియోలు",
    downloads: "డౌన్‌లోడ్స్",
    explore: "ఎక్స్‌ప్లోర్",
    home: "హోమ్",
    shorts: "షార్ట్స్",
    subscriptions: "సబ్‌స్క్రిప్షన్స్",
    moreFromYT: "YouTube నుండి మరిన్ని",
    premium: "YouTube ప్రీమియం",
    studio: "YouTube స్టూడియో",
    music: "YouTube మ్యూజిక్",
    kids: "YouTube కిడ్స్"
  }
};

  const youtubeKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  export const YOUTUBE_MOST_POPULAR_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${youtubeKey}`


