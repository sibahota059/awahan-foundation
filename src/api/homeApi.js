import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api';

// Mock data for development
const mockData = {
  hero: {
    slides: [
      { 
        id: 1,
        title: "Empowering Communities", 
        subtitle: "Creating sustainable change through education",
        image: "/images/hero-1.jpg"
      },
      { 
        id: 2,
        title: "Transforming Lives", 
        subtitle: "Healthcare and development for all",
        image: "/images/hero-2.jpg"
      },
      { 
        id: 3,
        title: "Building Tomorrow", 
        subtitle: "Together we can make a difference",
        image: "/images/hero-3.jpg"
      }
    ]
  },
  about: {
    title: "Aahwahan Foundation",
    description: "Aahwahan - is an NGO that is involved in promoting the welfare of the economically backward sections of the society by generating employment across various sectors. It was founded in 2009 by a team of like-minded individuals with a commitment to eradicate poverty. Our constant efforts have touched the lives of people. We believe in community development.",
    image: "/images/about.jpg",
    readMoreLink: "#"
  },
  programs: [
    { 
      id: 1, 
      title: "Education", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/program-1.jpg"
    },
    { 
      id: 2, 
      title: "Help us to educate", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
      image: "/images/program-2.jpg",
      featured: true
    },
    { 
      id: 3, 
      title: "Environment", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/program-3.jpg"
    }
  ],
  donations: [
    { 
      id: 1, 
      category: "Environment", 
      title: "Plant Tree, Save Earth & Lives Secure the Future", 
      description: "Massa sed elementum tempus egestas sed sed risus pretium quam.", 
      raised: 72500, 
      goal: 200000, 
      progress: 48,
      image: "/images/donation-1.jpg"
    },
    { 
      id: 2, 
      category: "Education", 
      title: "Education for Every Child", 
      description: "Massa sed elementum tempus egestas sed sed risus pretium quam.", 
      raised: 72500, 
      goal: 200000, 
      progress: 48,
      image: "/images/donation-2.jpg"
    },
    { 
      id: 3, 
      category: "Health", 
      title: "Healthcare Access for All", 
      description: "Massa sed elementum tempus egestas sed sed risus pretium quam.", 
      raised: 72500, 
      goal: 200000, 
      progress: 48,
      image: "/images/donation-3.jpg"
    }
  ],

  education: {
    title: "Education",
    description: "As Chanakya rightly said \"Education is the best friend. An educated person is respected everywhere. Education always beats the beauty and the youth.\" Education is so rudimentary that it itself becomes an identity of an individual. It is always a much talked topic and people have debated over years of how to clinch to almost perfection; nevertheless, we outstretch a generation where there are diverse forms of education. Education gives a vision of hope for a better world.",
    image: "/images/education.jpg",
    features: [
      "Adopting a government school and scaling up its infrastructure",
      "Education On Wheels",
      "Model School",
      "Promoting Extra Ordinary Talents",
      "Girl Child Education",
      "Laptop Bank",
      "Smart Class",
      "Happiness Kit"
    ]
  },
  donateCause: {
    title: "Donate for cause",
    description: "Your contribution has the power to transform lives. At Aahwahan Foundation, we are committed to uplifting underprivileged communities by providing education, healthcare, skill development, and livelihood opportunities. Every donation, big or small, helps us create a more inclusive and sustainable future.",
    image: "/images/donate-cause.jpg",
    readMoreLink: "/donate"
  },
  stats: [
    { label: "Successful Projects", value: "1,043", icon: "projects" },
    { label: "People Impacted", value: "2,33,445", icon: "people" },
    { label: "Total Volunteers", value: "1,24,69,345", icon: "volunteers" },
    { label: "Years of Service", value: "5,435", icon: "years" }
  ],
  health: {
    title: "Health",
    description: "Aahwahan - is an NGO that is involved in promoting the welfare of the economically backward sections of the society by generating employment across various sectors. It was founded in 2009 by a team of like-minded individuals with a commitment to eradicate poverty.",
    image: "/images/health.jpg"
  },
  achievements: [
    { 
      id: 1, 
      title: "HEALTH & NUTRITION", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: "/images/achievement-1.jpg"
    },
    { 
      id: 2, 
      title: "EDUCATION", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: "/images/achievement-2.jpg"
    },
    { 
      id: 3, 
      title: "ENVIRONMENT", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: "/images/achievement-3.jpg"
    },
    { 
      id: 4, 
      title: "WOMEN EMPOWERMENT", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: "/images/achievement-4.jpg"
    }
  ],
  environment: [
    { 
      id: 1, 
      title: "Environment card 01", 
      description: "At Aahwahan Foundation, our commitment to sustainable change has touched countless lives across India.",
      image: "/images/env-1.jpg"
    },
    { 
      id: 2, 
      title: "Environment card 02", 
      description: "At Aahwahan Foundation, our commitment to sustainable change has touched countless lives across India.",
      image: "/images/env-2.jpg"
    },
    { 
      id: 3, 
      title: "Environment card 03", 
      description: "At Aahwahan Foundation, our commitment to sustainable change has touched countless lives across India.",
      image: "/images/env-3.jpg"
    }
  ],
  initiatives: [
    { id: 1, title: "Aawahana STEM Labs", image: "/images/initiative-1.jpg" },
    { id: 2, title: "Nutrition for Growth Program", image: "/images/initiative-2.jpg" },
    { id: 3, title: "Plastic-Free Aawahana", image: "/images/initiative-3.jpg" },
    { id: 4, title: "Inclusive Accessibility Project", image: "/images/initiative-4.jpg" }
  ],
  community: {
    title: "Community Development",
    description: "At Aahwahan Foundation, community development is at the heart of everything we do. We believe that every individual deserves access to quality healthcare, sanitation, employment, justice, and economic opportunities.",
    additionalDescription: "Through sustained, long-term initiatives, we work to transform the economic and social well-being of communities. Our Model Village Development Program focuses on key areas, including education, healthcare, infrastructure, water & sanitation, skill training, integrated agriculture, and fisheries.",
    image: "/images/community.jpg",
    quote: "The goal of the Community Development program is to establish a compelling and effective mechanism to improve the living conditions and economic well-being of disadvantaged communities.",
    features: [
      { 
        title: "VOCATIONAL TRAINING", 
        description: "We provide quality education in villages, empowering children with knowledge, resources, and opportunities for a brighter future.",
        icon: "training"
      },
      { 
        title: "Improving Agricultural Production", 
        description: "We enhance farming techniques, provide modern resources, and support sustainable practices to boost agricultural productivity.",
        icon: "agriculture"
      },
      { 
        title: "Establishing Cooperative Societies", 
        description: "We empower communities by forming cooperative societies, fostering collective growth, economic stability, and self-sufficiency.",
        icon: "cooperative"
      }
    ]
  },
  volunteer: {
    title: "Are you Ready to Join our Volunteer Team?",
    formTitle: "Become A Volunteer of Aahwahan",
    backgroundImage: "/images/volunteer-bg.jpg"
  },
  involved: [
    { 
      id: 1, 
      title: "Aahwahan Blood Donation Camp - In Bhubaneswar", 
      description: "We are committed to improving the basic infrastructure of 5-10 government schools every year to create a schools every year to",
      image: "/images/involved-1.jpg",
      date: "2025-03-15",
      location: "Bhubaneswar"
    },
    { 
      id: 2, 
      title: "Aahwahan Blood Donation Camp - In Bhubaneswar", 
      description: "We are committed to improving the basic infrastructure of 5-10 government schools every year to create a schools every year to",
      image: "/images/involved-2.jpg",
      date: "2025-03-20",
      location: "Bhubaneswar"
    },
    { 
      id: 3, 
      title: "Aahwahan Blood Donation Camp - In Bhubaneswar", 
      description: "We are committed to improving the basic infrastructure of 5-10 government schools every year to create a schools every year to",
      image: "/images/involved-3.jpg",
      date: "2025-03-25",
      location: "Bhubaneswar"
    }
  ],
  blogs: {
    featured: {
      id: 1,
      title: "Mission Smile 1k: Outdoor charity outreach",
      author: "Ernie Smith",
      authorImage: "/images/author-1.jpg",
      date: "August 20, 2025",
      description: "Aahwahan - is an NGO that is involved in promoting the welfare of the economically backward sections of the society by generating employment across various sectors. It was founded in 2009 by a team of like-minded individuals with a commitment to eradicate poverty.",
      image: "/images/blog-featured.jpg"
    },
    related: [
      { 
        id: 2, 
        title: "The Impact of Technology on the Workplace: How Technology is Changing", 
        category: "Technology", 
        author: "Ernie Smith", 
        authorImage: "/images/author-1.jpg",
        date: "August 20, 2025", 
        comments: 3,
        image: "/images/blog-1.jpg"
      },
      { 
        id: 3, 
        title: "The Impact of Technology on the Workplace: How Technology is Changing", 
        category: "Technology", 
        author: "Ernie Smith", 
        authorImage: "/images/author-1.jpg",
        date: "August 20, 2025", 
        comments: 3,
        image: "/images/blog-2.jpg"
      },
      { 
        id: 4, 
        title: "The Impact of Technology on the Workplace: How Technology is Changing", 
        category: "Technology", 
        author: "Ernie Smith", 
        authorImage: "/images/author-1.jpg",
        date: "August 20, 2025", 
        comments: 3,
        image: "/images/blog-3.jpg"
      }
    ]
  },
  media: {
    tabs: ["Video", "Media", "Events", "Images", "Birthday", "Celebrity"],
    activeTab: "Video",
    mainVideo: {
      id: 1,
      title: "Aawahan Foundation: Products with a Purpose - Your support can make a world of difference for those in need. Join us in our mission to uplift communities",
      videoUrl: "#",
      thumbnail: "/images/video-main.jpg"
    },
    sideVideos: [
      { id: 2, thumbnail: "/images/video-2.jpg", title: "Video 2" },
      { id: 3, thumbnail: "/images/video-3.jpg", title: "Video 3" },
      { id: 4, thumbnail: "/images/video-4.jpg", title: "Video 4" }
    ]
  },
  products: [
    { 
      id: 1, 
      title: "Organic Handmade Soaps", 
      description: "The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at.", 
      price: 499,
      image: "/images/product-1.jpg"
    },
    { 
      id: 2, 
      title: "Organic Handmade Soaps", 
      description: "The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at.", 
      price: 499,
      image: "/images/product-2.jpg"
    },
    { 
      id: 3, 
      title: "Organic Handmade Soaps", 
      description: "The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at.", 
      price: 499,
      image: "/images/product-3.jpg"
    },
    { 
      id: 4, 
      title: "Organic Handmade Soaps", 
      description: "The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at.", 
      price: 499,
      image: "/images/product-4.jpg"
    }
  ],
  policy: {
    title: "Raise Your Hands And Help Those Who Need Your Help",
    buttonText: "Donate Now",
    link: "/donate"
  }
};

const homeApi = {
  // Get all home page data
  getHomeData: async () => {
    try {
      // For production, replace with actual API call
      // const response = await axios.get(`${API_BASE_URL}/home`);
      // return response.data;
      
      // Mock implementation for development
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockData);
        }, 500);
      });
    } catch (error) {
      console.error('Error fetching home data:', error);
      // Return mock data as fallback
      return mockData;
    }
  },

  // Individual API calls for specific sections
  getHeroSlides: async () => {
    try {
      // const response = await axios.get(`${API_BASE_URL}/hero-slides`);
      // return response.data;
      return mockData.hero;
    } catch (error) {
      console.error('Error fetching hero slides:', error);
      return mockData.hero;
    }
  },

  getDonations: async () => {
    try {
      // const response = await axios.get(`${API_BASE_URL}/donations`);
      // return response.data;
      return mockData.donations;
    } catch (error) {
      console.error('Error fetching donations:', error);
      return mockData.donations;
    }
  },

  getStats: async () => {
    try {
      // const response = await axios.get(`${API_BASE_URL}/stats`);
      // return response.data;
      return mockData.stats;
    } catch (error) {
      console.error('Error fetching stats:', error);
      return mockData.stats;
    }
  },

  getBlogs: async () => {
    try {
      // const response = await axios.get(`${API_BASE_URL}/blogs`);
      // return response.data;
      return mockData.blogs;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return mockData.blogs;
    }
  },

  getProducts: async () => {
    try {
      // const response = await axios.get(`${API_BASE_URL}/products`);
      // return response.data;
      return mockData.products;
    } catch (error) {
      console.error('Error fetching products:', error);
      return mockData.products;
    }
  },

  // Submit volunteer registration
  submitVolunteerForm: async (formData) => {
    try {
      // const response = await axios.post(`${API_BASE_URL}/volunteer/register`, formData);
      // return response.data;
      console.log('Volunteer registration:', formData);
      return { success: true, message: 'Registration successful!' };
    } catch (error) {
      console.error('Error submitting volunteer form:', error);
      return { success: false, message: 'Registration failed. Please try again.' };
    }
  }
};

export default homeApi;