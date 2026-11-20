
const profiles = [
  {
    id: 1,
    name: "Priya",
    age: 23,
    location: "Washington, DC",
    height: 165,
    bio: "Coffee lover ☕, bookworm, and travel enthusiast.",
    aboutMe: "I'm a creative person who enjoys exploring new places, discovering cozy cafes, and capturing beautiful moments through photography. I love meaningful conversations, spontaneous weekend trips, and spending time with people who make me laugh.",
    occupation: "UI/UX Designer",
    education: "Bachelor's in Design",
    interests: ["Photography", "Travel", "Reading", "Coffee", "Art"],
    lookingFor: "Meaningful connections",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    name: "Rahul",
    age: 24,
    location: "New York",
    height: 178,
    bio: "Adventure seeker, fitness enthusiast, and weekend traveler.",
    aboutMe: "I'm a software engineer who loves building things and exploring the world outside my laptop. Gym sessions, road trips, football matches, and trying new restaurants are my favorite ways to spend free time. I appreciate honesty and a good sense of humor.",
    occupation: "Software Engineer",
    education: "B.Tech Computer Science",
    interests: ["Gym", "Travel", "Coding", "Movies", "Football"],
    lookingFor: "A serious relationship",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 3,
    name: "Ananya",
    age: 22,
    location: "California",
    height: 162,
    bio: "Artist at heart 🎨, music lover, and sunset chaser.",
    aboutMe: "I'm an artistic soul who finds inspiration in everyday things. I enjoy painting, listening to music, dancing, and visiting beautiful places. I love meeting people with different perspectives and having conversations beyond small talk.",
    occupation: "Graphic Designer",
    education: "Bachelor's in Fine Arts",
    interests: ["Painting", "Music", "Dancing", "Travel", "Fashion"],
    lookingFor: "New friends and connections",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 4,
    name: "Aarav",
    age: 25,
    location: "Chicago",
    height: 180,
    bio: "Software developer by day, foodie by night.",
    aboutMe: "I enjoy building interesting applications, exploring new restaurants, and watching movies. I'm a curious person who loves learning new skills and making the most of weekends. Looking for someone who enjoys adventures and meaningful conversations.",
    occupation: "Full Stack Developer",
    education: "B.Tech Computer Science",
    interests: ["Technology", "Food", "Gaming", "Movies", "Travel"],
    lookingFor: "Long-term relationship",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 5,
    name: "Sneha",
    age: 21,
    location: "Los Angeles",
    height: 160,
    bio: "Bookworm 📚 who loves discovering hidden cafes.",
    aboutMe: "I'm someone who enjoys quiet mornings, good books, and discovering beautiful places. I love spending time with friends, trying different cuisines, and watching romantic comedies. I believe little things make life special.",
    occupation: "College Student",
    education: "Bachelor's in Psychology",
    interests: ["Reading", "Coffee", "Music", "Yoga", "Travel"],
    lookingFor: "Friendship and meaningful connections",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    id: 6,
    name: "Arjun",
    age: 26,
    location: "San Francisco",
    height: 182,
    bio: "Gym, coding, and road trips. Always up for an adventure!",
    aboutMe: "I'm passionate about technology, fitness, and exploring new destinations. I enjoy challenging myself, learning new things, and spending weekends outdoors. A good workout followed by great food is my perfect day.",
    occupation: "Data Analyst",
    education: "Master's in Data Science",
    interests: ["Fitness", "Coding", "Road Trips", "Cricket", "Cooking"],
    lookingFor: "A genuine relationship",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: 7,
    name: "Meera",
    age: 23,
    location: "Boston",
    height: 167,
    bio: "Nature lover 🌿 and photography enthusiast.",
    aboutMe: "I love being surrounded by nature, exploring scenic places, and capturing beautiful moments. Reading books and taking long evening walks help me relax. I'm always excited to discover something new.",
    occupation: "Content Writer",
    education: "Bachelor's in English",
    interests: ["Photography", "Nature", "Writing", "Books", "Travel"],
    lookingFor: "Meaningful connections",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    id: 8,
    name: "Aditya",
    age: 24,
    location: "Seattle",
    height: 176,
    bio: "Music enthusiast with a playlist for every road trip.",
    aboutMe: "I'm a music lover who enjoys discovering new artists and attending live concerts. I work in product management and enjoy solving problems. Outside work, you'll find me travelling, watching football, or exploring cafes.",
    occupation: "Product Manager",
    education: "MBA",
    interests: ["Music", "Travel", "Technology", "Football", "Movies"],
    lookingFor: "Long-term relationship",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    id: 9,
    name: "Kavya",
    age: 22,
    location: "Houston",
    height: 163,
    bio: "Dancer 💃, chocolate addict, and spontaneous explorer.",
    aboutMe: "Dancing is my biggest passion, and music is always playing somewhere around me. I enjoy fitness, trying new food, and spending time with energetic people. Looking for someone who enjoys having fun and exploring life.",
    occupation: "Dance Instructor",
    education: "Bachelor's in Performing Arts",
    interests: ["Dancing", "Music", "Fitness", "Food", "Fashion"],
    lookingFor: "New friends and adventures",
    image: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    id: 10,
    name: "Rohan",
    age: 27,
    location: "Miami",
    height: 183,
    bio: "Beach person, amateur chef, and passionate traveller.",
    aboutMe: "I enjoy sunny beaches, experimenting with recipes, and discovering new cultures. Travelling has taught me to appreciate different perspectives. I'm looking for someone who enjoys life's little moments and good conversations.",
    occupation: "Marketing Manager",
    education: "MBA in Marketing",
    interests: ["Cooking", "Swimming", "Travel", "Photography", "Movies"],
    lookingFor: "A serious relationship",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    id: 11,
    name: "Isha",
    age: 24,
    location: "Austin",
    height: 164,
    bio: "Creative soul, dog lover, and weekend explorer.",
    aboutMe: "I love transforming spaces and making everyday surroundings beautiful. Art galleries, cute dogs, and spontaneous weekend plans make me happy. I enjoy meeting creative people and exchanging ideas.",
    occupation: "Interior Designer",
    education: "Bachelor's in Interior Design",
    interests: ["Art", "Dogs", "Decor", "Travel", "Coffee"],
    lookingFor: "Meaningful connections",
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    id: 12,
    name: "Karan",
    age: 25,
    location: "Denver",
    height: 185,
    bio: "Outdoor enthusiast. Mountain views are my happy place.",
    aboutMe: "I'm happiest when I'm outdoors exploring hiking trails or camping under the stars. Fitness is an important part of my lifestyle, and I enjoy meeting people who love adventure and trying new experiences.",
    occupation: "Mechanical Engineer",
    education: "B.Tech Mechanical Engineering",
    interests: ["Hiking", "Cycling", "Fitness", "Camping", "Photography"],
    lookingFor: "Long-term relationship",
    image: "https://randomuser.me/api/portraits/men/6.jpg"
  },
  {
    id: 13,
    name: "Aditi",
    age: 21,
    location: "Atlanta",
    height: 161,
    bio: "Foodie, dreamer, and always looking for my next adventure.",
    aboutMe: "I'm a student who loves exploring new cuisines, travelling, and spending time with friends. I enjoy dancing, listening to music, and discovering beautiful places. Life is better with laughter and good company.",
    occupation: "College Student",
    education: "Bachelor's in Business Administration",
    interests: ["Food", "Travel", "Dancing", "Shopping", "Music"],
    lookingFor: "Friendship and connections",
    image: "https://randomuser.me/api/portraits/women/7.jpg"
  },
  {
    id: 14,
    name: "Vikram",
    age: 26,
    location: "Phoenix",
    height: 181,
    bio: "Sports lover ⚽, movie buff, and road trip enthusiast.",
    aboutMe: "Sports have always been a big part of my life. I enjoy playing football, watching cricket, travelling, and staying active. I'm a practical person who appreciates honesty, positivity, and good humor.",
    occupation: "Financial Analyst",
    education: "MBA in Finance",
    interests: ["Football", "Cricket", "Movies", "Fitness", "Travel"],
    lookingFor: "A serious relationship",
    image: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    id: 15,
    name: "Riya",
    age: 23,
    location: "San Diego",
    height: 166,
    bio: "Sunshine seeker ☀️, yoga lover, and beach enthusiast.",
    aboutMe: "I enjoy yoga, swimming, and maintaining a healthy lifestyle. Beaches and sunsets are my favorite combination. I love cooking healthy meals, travelling, and spending quality time with people close to me.",
    occupation: "Nutritionist",
    education: "Bachelor's in Nutrition",
    interests: ["Yoga", "Swimming", "Cooking", "Travel", "Fitness"],
    lookingFor: "Meaningful connections",
    image: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    id: 16,
    name: "Kabir",
    age: 24,
    location: "Portland",
    height: 179,
    bio: "Coffee enthusiast and amateur photographer.",
    aboutMe: "I love capturing everyday moments through my camera and exploring quiet places. Coffee shops, hiking trails, and live music are some of my favorite things. Always ready for a spontaneous trip.",
    occupation: "Photographer",
    education: "Bachelor's in Media Studies",
    interests: ["Photography", "Coffee", "Hiking", "Music", "Travel"],
    lookingFor: "New friends and connections",
    image: "https://randomuser.me/api/portraits/men/8.jpg"
  },
  {
    id: 17,
    name: "Nisha",
    age: 22,
    location: "Dallas",
    height: 159,
    bio: "Home chef, traveller, and family person.",
    aboutMe: "Cooking is my love language, and I enjoy preparing meals for people I care about. I love travelling, gardening, and reading during quiet evenings. Looking for someone kind, understanding, and genuine.",
    occupation: "Teacher",
    education: "Bachelor's in Education",
    interests: ["Cooking", "Reading", "Travel", "Gardening", "Music"],
    lookingFor: "A genuine relationship",
    image: "https://randomuser.me/api/portraits/women/9.jpg"
  },
  {
    id: 18,
    name: "Dev",
    age: 25,
    location: "Philadelphia",
    height: 177,
    bio: "Tech geek 💻, gamer, and lifelong learner.",
    aboutMe: "I'm a backend developer who enjoys solving complex problems and learning new technologies. Gaming, chess, and watching movies help me unwind. I love intelligent conversations and a little friendly competition.",
    occupation: "Backend Developer",
    education: "B.Tech Information Technology",
    interests: ["Coding", "Gaming", "Technology", "Movies", "Chess"],
    lookingFor: "Long-term relationship",
    image: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    id: 19,
    name: "Tanya",
    age: 24,
    location: "Las Vegas",
    height: 168,
    bio: "Fashion enthusiast who loves concerts and exploring cities.",
    aboutMe: "Fashion is my way of expressing creativity. I enjoy styling outfits, attending concerts, and exploring different cultures. I'm energetic, social, and always excited to make new memories.",
    occupation: "Fashion Stylist",
    education: "Bachelor's in Fashion Design",
    interests: ["Fashion", "Shopping", "Music", "Travel", "Photography"],
    lookingFor: "Meaningful connections",
    image: "https://randomuser.me/api/portraits/women/10.jpg"
  },
  {
    id: 20,
    name: "Aryan",
    age: 23,
    location: "San Jose",
    height: 184,
    bio: "Entrepreneurial mindset, travel heart, and fitness goals.",
    aboutMe: "I enjoy building ideas, exploring business opportunities, and challenging myself every day. Fitness and travelling keep me motivated. I appreciate ambitious people who have big dreams and a positive outlook.",
    occupation: "Startup Founder",
    education: "BBA",
    interests: ["Business", "Fitness", "Travel", "Reading", "Technology"],
    lookingFor: "A serious relationship",
    image: "https://randomuser.me/api/portraits/men/10.jpg"
  },
  {
    id: 21,
    name: "Simran",
    age: 21,
    location: "Orlando",
    height: 163,
    bio: "Music, dancing, and late-night conversations are my thing.",
    aboutMe: "I'm a cheerful person who loves music, dancing, and meeting new people. I enjoy watching movies, travelling with friends, and exploring new experiences. I believe positivity makes everything better.",
    occupation: "College Student",
    education: "Bachelor's in Mass Communication",
    interests: ["Dancing", "Music", "Movies", "Travel", "Fashion"],
    lookingFor: "Friendship and connections",
    image: "https://randomuser.me/api/portraits/women/11.jpg"
  },
  {
    id: 22,
    name: "Manav",
    age: 27,
    location: "Nashville",
    height: 180,
    bio: "Guitar player 🎸, music lover, and weekend explorer.",
    aboutMe: "Music is a huge part of my life. I enjoy playing guitar, producing music, attending concerts, and discovering talented artists. I also love photography and exploring new cities whenever I get time.",
    occupation: "Music Producer",
    education: "Bachelor's in Music",
    interests: ["Guitar", "Music", "Concerts", "Travel", "Photography"],
    lookingFor: "A genuine relationship",
    image: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    id: 23,
    name: "Pooja",
    age: 22,
    location: "Charlotte",
    height: 161,
    bio: "Plant mom 🌱, minimalist, and positive thinker.",
    aboutMe: "I enjoy a peaceful lifestyle filled with books, plants, and cozy coffee mornings. Yoga helps me stay balanced, and travelling gives me a fresh perspective. I appreciate thoughtful gestures and genuine people.",
    occupation: "Digital Marketer",
    education: "Bachelor's in Marketing",
    interests: ["Gardening", "Reading", "Yoga", "Coffee", "Travel"],
    lookingFor: "Meaningful connections",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 24,
    name: "Yash",
    age: 26,
    location: "Detroit",
    height: 183,
    bio: "Car enthusiast, gym lover, and technology geek.",
    aboutMe: "I'm passionate about automobiles and technology. I enjoy working out, exploring new gadgets, and going on road trips. I love learning how things work and meeting people with interesting perspectives.",
    occupation: "Automobile Engineer",
    education: "B.Tech Automobile Engineering",
    interests: ["Cars", "Gym", "Technology", "Gaming", "Travel"],
    lookingFor: "Long-term relationship",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    id: 25,
    name: "Diya",
    age: 23,
    location: "New Jersey",
    height: 164,
    bio: "Art, books, travel, and coffee. A little bit of everything.",
    aboutMe: "I'm a creative person who enjoys drawing, reading, and exploring beautiful places. I appreciate people who can make me laugh and enjoy deep conversations. My perfect day includes good coffee and an interesting book.",
    occupation: "Illustrator",
    education: "Bachelor's in Fine Arts",
    interests: ["Drawing", "Books", "Coffee", "Travel", "Movies"],
    lookingFor: "A serious relationship",
    image: "https://randomuser.me/api/portraits/women/13.jpg"
  },
  {
    id: 26,
    name: "Sahil",
    age: 24,
    location: "San Antonio",
    height: 176,
    bio: "Football fan, foodie, and lover of simple things.",
    aboutMe: "I enjoy playing football, trying different cuisines, and spending time with friends. I work as a business analyst and love solving interesting challenges. Looking for someone who enjoys life and doesn't take everything too seriously.",
    occupation: "Business Analyst",
    education: "B.Tech Computer Science",
    interests: ["Football", "Food", "Gaming", "Travel", "Fitness"],
    lookingFor: "Long-term relationship",
    image: "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    id: 27,
    name: "Neha",
    age: 25,
    location: "Washington",
    height: 169,
    bio: "Professional by choice, traveller by passion.",
    aboutMe: "I enjoy exploring new cultures, reading books, and learning about different perspectives. My work keeps me busy, but I always make time for travel and family. I value honesty, kindness, and emotional maturity.",
    occupation: "HR Manager",
    education: "MBA in Human Resources",
    interests: ["Travel", "Reading", "Cooking", "Yoga", "Movies"],
    lookingFor: "A genuine relationship",
    image: "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    id: 28,
    name: "Krish",
    age: 22,
    location: "Columbus",
    height: 181,
    bio: "Gaming, technology, movies, and weekend adventures.",
    aboutMe: "I'm a computer science student who enjoys coding, gaming, and exploring new technologies. Cricket and movies are my favorite ways to relax. I'm always curious about something and enjoy meeting like-minded people.",
    occupation: "College Student",
    education: "B.Tech Computer Science",
    interests: ["Gaming", "Coding", "Movies", "Cricket", "Music"],
    lookingFor: "Friendship and connections",
    image: "https://randomuser.me/api/portraits/men/14.jpg"
  },
  {
    id: 29,
    name: "Manya",
    age: 24,
    location: "Brooklyn",
    height: 166,
    bio: "Lover of sunsets, good food, and unforgettable experiences.",
    aboutMe: "I love discovering new restaurants, travelling to beautiful destinations, and capturing sunsets. I'm someone who enjoys meaningful connections, laughter, and making memories. Looking for a person who values the little things.",
    occupation: "Marketing Executive",
    education: "MBA in Marketing",
    interests: ["Travel", "Food", "Photography", "Music", "Art"],
    lookingFor: "A serious relationship",
    image: "https://randomuser.me/api/portraits/women/15.jpg"
  },
  {
    id: 30,
    name: "Varun",
    age: 25,
    location: "New York",
    height: 178,
    bio: "Developer, problem solver, and always ready for a new adventure.",
    aboutMe: "I'm a MERN stack developer who enjoys building projects, solving coding challenges, and exploring new technologies. Outside programming, I like fitness, travelling, and watching movies. I believe in personal growth and meaningful connections.",
    occupation: "MERN Stack Developer",
    education: "B.Tech Computer Science",
    interests: ["Coding", "Technology", "Fitness", "Travel", "Movies"],
    lookingFor: "Meaningful connections",
    image: "https://randomuser.me/api/portraits/men/15.jpg"
  }
];

export default profiles;
















// const profiles = [
//   {
//   id: 1,
//   name: "Priya",
//   age: 23,
//   location: "Washington, DC",
//   bio: "Coffee lover ☕ | Exploring new places.",

//   image: "../src/assets/sample.jpeg",

//   // New information
//   about: "I love exploring new places, meeting people and trying different cuisines. Looking for meaningful connections.",

//   occupation: "UI/UX Designer",
//   education: "University of Washington",
//   height: "5'6",

//   interests: ["Travel", "Music", "Photography", "Coffee"],

//   relationshipGoal: "Long-term relationship",

// },
//   {
//     id: 2,
//     name: "Rahul",
//     age: 24,
//     location: "New York",
//     bio: "Adventure seeker, fitness enthusiast and weekend traveler.",
//     image: "../src/assets/sample2.jpeg"
//   },
//   {
//     id: 3,
//     name: "Ananya",
//     age: 22,
//     location: "California",
//     bio: "Artist at heart 🎨 | Music, sunsets and meaningful conversations.",
//     image: "../src/assets/sample3.jpeg"
//   },
//   {
//     id: 4,
//     name: "Aarav",
//     age: 25,
//     location: "Chicago",
//     bio: "Software developer by day, foodie by night.",
//     image: "https://randomuser.me/api/portraits/men/2.jpg"
//   },
//   {
//     id: 5,
//     name: "Sneha",
//     age: 21,
//     location: "Los Angeles",
//     bio: "Bookworm 📚 | Love travelling and discovering hidden cafes.",
//     image: "https://randomuser.me/api/portraits/women/3.jpg"
//   },
//   {
//     id: 6,
//     name: "Arjun",
//     age: 26,
//     location: "San Francisco",
//     bio: "Gym, coding and road trips. Always up for an adventure!",
//     image: "https://randomuser.me/api/portraits/men/3.jpg"
//   },
//   {
//     id: 7,
//     name: "Meera",
//     age: 23,
//     location: "Boston",
//     bio: "Nature lover 🌿 | Photography and long evening walks.",
//     image: "https://randomuser.me/api/portraits/women/4.jpg"
//   },
//   {
//     id: 8,
//     name: "Aditya",
//     age: 24,
//     location: "Seattle",
//     bio: "Music enthusiast who believes every road trip needs a good playlist.",
//     image: "https://randomuser.me/api/portraits/men/4.jpg"
//   },
//   {
//     id: 9,
//     name: "Kavya",
//     age: 22,
//     location: "Houston",
//     bio: "Dancer 💃 | Chocolate addict | Living life one day at a time.",
//     image: "https://randomuser.me/api/portraits/women/5.jpg"
//   },
//   {
//     id: 10,
//     name: "Rohan",
//     age: 27,
//     location: "Miami",
//     bio: "Beach person, amateur chef and passionate traveller.",
//     image: "https://randomuser.me/api/portraits/men/5.jpg"
//   },
//   {
//     id: 11,
//     name: "Isha",
//     age: 24,
//     location: "Austin",
//     bio: "Creative soul | Love art galleries, dogs and spontaneous plans.",
//     image: "https://randomuser.me/api/portraits/women/6.jpg"
//   },
//   {
//     id: 12,
//     name: "Karan",
//     age: 25,
//     location: "Denver",
//     bio: "Outdoor enthusiast. Hiking trails are my happy place.",
//     image: "https://randomuser.me/api/portraits/men/6.jpg"
//   },
//   {
//     id: 13,
//     name: "Aditi",
//     age: 21,
//     location: "Atlanta",
//     bio: "Foodie, dreamer and always looking for my next adventure.",
//     image: "https://randomuser.me/api/portraits/women/7.jpg"
//   },
//   {
//     id: 14,
//     name: "Vikram",
//     age: 26,
//     location: "Phoenix",
//     bio: "Sports lover ⚽ | Movies, music and spontaneous road trips.",
//     image: "https://randomuser.me/api/portraits/men/7.jpg"
//   },
//   {
//     id: 15,
//     name: "Riya",
//     age: 23,
//     location: "San Diego",
//     bio: "Sunshine seeker ☀️ | Yoga, beaches and good conversations.",
//     image: "https://randomuser.me/api/portraits/women/8.jpg"
//   },
//   {
//     id: 16,
//     name: "Kabir",
//     age: 24,
//     location: "Portland",
//     bio: "Coffee enthusiast and amateur photographer.",
//     image: "https://randomuser.me/api/portraits/men/8.jpg"
//   },
//   {
//     id: 17,
//     name: "Nisha",
//     age: 22,
//     location: "Dallas",
//     bio: "Love cooking, travelling and spending time with family.",
//     image: "https://randomuser.me/api/portraits/women/9.jpg"
//   },
//   {
//     id: 18,
//     name: "Dev",
//     age: 25,
//     location: "Philadelphia",
//     bio: "Tech geek 💻 | Gamer | Always curious about something new.",
//     image: "https://randomuser.me/api/portraits/men/9.jpg"
//   },
//   {
//     id: 19,
//     name: "Tanya",
//     age: 24,
//     location: "Las Vegas",
//     bio: "Fashion enthusiast who loves concerts and exploring new cities.",
//     image: "https://randomuser.me/api/portraits/women/10.jpg"
//   },
//   {
//     id: 20,
//     name: "Aryan",
//     age: 23,
//     location: "San Jose",
//     bio: "Entrepreneurial mindset, travel heart and fitness goals.",
//     image: "https://randomuser.me/api/portraits/men/10.jpg"
//   },
//   {
//     id: 21,
//     name: "Simran",
//     age: 21,
//     location: "Orlando",
//     bio: "Music, dancing and late-night conversations are my thing.",
//     image: "https://randomuser.me/api/portraits/women/11.jpg"
//   },
//   {
//     id: 22,
//     name: "Manav",
//     age: 27,
//     location: "Nashville",
//     bio: "Guitar player 🎸 | Music lover | Weekend explorer.",
//     image: "https://randomuser.me/api/portraits/men/11.jpg"
//   },
//   {
//     id: 23,
//     name: "Pooja",
//     age: 22,
//     location: "Charlotte",
//     bio: "Plant mom 🌱 | Minimalist lifestyle and positive vibes.",
//     image: "https://randomuser.me/api/portraits/women/12.jpg"
//   },
//   {
//     id: 24,
//     name: "Yash",
//     age: 26,
//     location: "Detroit",
//     bio: "Car enthusiast, gym lover and passionate about technology.",
//     image: "https://randomuser.me/api/portraits/men/12.jpg"
//   },
//   {
//     id: 25,
//     name: "Diya",
//     age: 23,
//     location: "New Jersey",
//     bio: "A little bit of everything: art, books, travel and coffee.",
//     image: "https://randomuser.me/api/portraits/women/13.jpg"
//   },
//   {
//     id: 26,
//     name: "Sahil",
//     age: 24,
//     location: "San Antonio",
//     bio: "Football fan, foodie and someone who enjoys simple things.",
//     image: "https://randomuser.me/api/portraits/men/13.jpg"
//   },
//   {
//     id: 27,
//     name: "Neha",
//     age: 25,
//     location: "Washington",
//     bio: "Professional by choice, traveller by passion.",
//     image: "https://randomuser.me/api/portraits/women/14.jpg"
//   },
//   {
//     id: 28,
//     name: "Krish",
//     age: 22,
//     location: "Columbus",
//     bio: "Into gaming, technology, movies and weekend adventures.",
//     image: "https://randomuser.me/api/portraits/men/14.jpg"
//   },
//   {
//     id: 29,
//     name: "Manya",
//     age: 24,
//     location: "Brooklyn",
//     bio: "Lover of sunsets, good food and unforgettable experiences.",
//     image: "https://randomuser.me/api/portraits/women/15.jpg"
//   },
//   {
//     id: 30,
//     name: "Varun",
//     age: 25,
//     location: "New York",
//     bio: "Developer, problem solver and always ready for a new adventure.",
//     image: "https://randomuser.me/api/portraits/men/15.jpg"
//   }
// ];

