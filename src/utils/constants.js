// Site Configuration
export const SITE_CONFIG = {
  name: 'Aahwahan Foundation',
  tagline: 'Empowering Communities, Transforming Lives',
  description: 'An NGO promoting welfare of economically backward sections through employment generation',
  year: 2025,
  foundedYear: 2009
};

// Contact Information
export const CONTACT_INFO = {
  phone: {
    primary: '9113018004',
    secondary: '7795065657'
  },
  email: 'info@aahwahan.com',
  address: {
    line1: 'Building No-40, 4th Floor',
    line2: '9th Block Jayanagar',
    city: 'Bangalore',
    pincode: '560069',
    state: 'Karnataka',
    country: 'India'
  }
};

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/aahwahanfoundation',
  twitter: 'https://twitter.com/aahwahanfoundation',
  instagram: 'https://instagram.com/aahwahanfoundation',
  linkedin: 'https://linkedin.com/company/aahwahanfoundation',
  youtube: 'https://youtube.com/aahwahanfoundation'
};

// Navigation Menu Items
export const NAV_ITEMS = {
  left: [
    { label: 'Home', path: '/', active: true },
    { label: 'Covid-19', path: '/covid' },
    {
      label: 'Our Journey',
      path: '/journey',
      dropdown: [
        { label: 'About Us', path: '/about' },
        { label: 'Our History', path: '/history' },
        { label: 'Our Team', path: '/team' },
        { label: 'Mission & Vision', path: '/mission' }
      ]
    },
    {
      label: 'Programs',
      path: '/programs',
      dropdown: [
        { label: 'Education', path: '/programs/education' },
        { label: 'Health', path: '/programs/health' },
        { label: 'Environment', path: '/programs/environment' },
        { label: 'Women Empowerment', path: '/programs/women' },
        { label: 'Agriculture', path: '/programs/agriculture' },
        { label: 'Community Development', path: '/programs/community' }
      ]
    },
    {
      label: 'Achievements',
      path: '/achievements',
      dropdown: [
        { label: 'Awards', path: '/achievements/awards' },
        { label: 'Recognition', path: '/achievements/recognition' },
        { label: 'Impact Stories', path: '/achievements/impact' }
      ]
    }
  ],
  right: [
    { label: 'Products', path: '/products' },
    { label: 'Aahwahan Patrika', path: '/patrika' },
    {
      label: 'Media Presence',
      path: '/media',
      dropdown: [
        { label: 'Videos', path: '/media/videos' },
        { label: 'Photos', path: '/media/photos' },
        { label: 'News Coverage', path: '/media/news' },
        { label: 'Events', path: '/media/events' }
      ]
    },
    { label: 'Corporate CSR', path: '/csr' },
    { label: 'Blogs', path: '/blogs' }
  ]
};

// API Endpoints
export const API_ENDPOINTS = {
  base: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api',
  home: '/home',
  about: '/about',
  programs: '/programs',
  donations: '/donations',
  blogs: '/blogs',
  products: '/products',
  volunteer: '/volunteer/register',
  contact: '/contact',
  newsletter: '/newsletter/subscribe'
};

// Image Paths
export const IMAGE_PATHS = {
  logo: '/images/logo.png',
  heroDefault: '/images/hero-default.jpg',
  aboutDefault: '/images/about-default.jpg',
  placeholderSquare: '/images/placeholder-square.jpg',
  placeholderWide: '/images/placeholder-wide.jpg'
};

// Color Palette
export const COLORS = {
  primary: '#2e8094',
  primaryDark: '#257388',
  primaryLight: '#3aa4be',
  secondary: '#157991',
  accent: '#3ba5be',
  text: {
    primary: '#1d2130',
    secondary: '#525560',
    light: '#6f7775',
    white: '#ffffff'
  },
  background: {
    white: '#ffffff',
    light: '#f9fafb',
    grey: '#f5f5f5',
    dark: '#000000'
  },
  border: '#e8e8ea'
};

// Breakpoints for Responsive Design
export const BREAKPOINTS = {
  mobile: '576px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px'
};

// Animation Durations
export const ANIMATIONS = {
  fast: '0.2s',
  normal: '0.3s',
  slow: '0.5s',
  carousel: '5000' // milliseconds
};

// Form Validation Rules
export const VALIDATION_RULES = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[0-9]{10}$/,
  minLength: {
    name: 3,
    message: 10,
    password: 8
  }
};

// Page Titles
export const PAGE_TITLES = {
  home: 'Home - Aahwahan Foundation',
  about: 'About Us - Aahwahan Foundation',
  programs: 'Our Programs - Aahwahan Foundation',
  donate: 'Donate - Aahwahan Foundation',
  volunteer: 'Volunteer - Aahwahan Foundation',
  blogs: 'Blogs - Aahwahan Foundation',
  contact: 'Contact Us - Aahwahan Foundation'
};

// Currency Settings
export const CURRENCY = {
  symbol: '₹',
  code: 'INR',
  locale: 'en-IN'
};

// Date Format Settings
export const DATE_FORMAT = {
  display: 'DD MMM YYYY',
  api: 'YYYY-MM-DD',
  full: 'dddd, MMMM Do YYYY'
};