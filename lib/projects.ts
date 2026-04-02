export interface Project {
  id: string
  title: string
  category: string
  shortDescription: string
  fullDescription: string
  image: string
  tech: string[]
  features: string[]
  challenge: string
  solution: string
  results: string[]
  testimonial?: {
    text: string
    author: string
    role: string
  }
  gallery: string[]
  demoUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: 'healthtracker-pro',
    title: 'HealthTracker Pro',
    category: 'Healthcare',
    shortDescription: 'Comprehensive health monitoring app with AI-powered insights',
    fullDescription: 'HealthTracker Pro is a revolutionary health monitoring application that leverages artificial intelligence to provide personalized health insights. The app tracks various health metrics including heart rate, sleep patterns, activity levels, and nutrition, offering users a holistic view of their wellness journey.',
    image: 'from-green-500 to-emerald-600',
    tech: ['React Native', 'Firebase', 'TensorFlow', 'Node.js', 'MongoDB'],
    features: [
      'Real-time heart rate monitoring',
      'AI-powered health predictions',
      'Sleep quality analysis',
      'Personalized workout recommendations',
      'Nutrition tracking and meal planning',
      'Integration with wearable devices',
      'Doctor appointment scheduling',
      'Emergency SOS feature',
    ],
    challenge: 'The client needed a comprehensive health app that could integrate with multiple wearable devices while maintaining HIPAA compliance and providing real-time health insights.',
    solution: 'We developed a cross-platform application using React Native with a robust backend infrastructure. We implemented end-to-end encryption for all health data and created a machine learning model for health predictions.',
    results: [
      '500,000+ downloads in first 6 months',
      '4.8 star rating on App Store',
      '40% improvement in user health metrics',
      'Featured in Apple Health & Fitness category',
    ],
    testimonial: {
      text: 'Codifyr transformed our vision into reality. The app exceeded our expectations and has helped thousands of users improve their health.',
      author: 'Dr. Sarah Johnson',
      role: 'CEO, HealthTech Solutions',
    },
    gallery: ['from-green-400 to-emerald-500', 'from-emerald-500 to-teal-600', 'from-teal-500 to-cyan-600'],
  },
  {
    id: 'ecoshop',
    title: 'EcoShop',
    category: 'E-Commerce',
    shortDescription: 'Sustainable shopping platform with seamless checkout',
    fullDescription: 'EcoShop is an innovative e-commerce platform dedicated to sustainable and eco-friendly products. The app features a unique carbon footprint calculator, ethical brand certifications, and a seamless shopping experience that makes green living accessible to everyone.',
    image: 'from-blue-500 to-cyan-600',
    tech: ['Flutter', 'Node.js', 'Stripe', 'PostgreSQL', 'Redis', 'AWS'],
    features: [
      'Carbon footprint calculator for each product',
      'Eco-certification verification',
      'One-click sustainable checkout',
      'Product lifecycle transparency',
      'Community reviews and ratings',
      'Subscription boxes for eco products',
      'Reward points for sustainable choices',
      'Local pickup and eco-delivery options',
    ],
    challenge: 'Creating an e-commerce platform that not only sells products but also educates users about sustainability while providing a seamless shopping experience.',
    solution: 'We built a Flutter application with advanced product filtering based on sustainability metrics. The backend calculates carbon footprints in real-time and integrates with multiple payment gateways.',
    results: [
      '$2M+ in sales within first year',
      '100,000+ active monthly users',
      '50,000 tons of CO2 offset',
      'Partnership with 500+ eco brands',
    ],
    testimonial: {
      text: 'The team at Codifyr understood our mission and delivered an app that truly makes a difference. Our users love the transparency and ease of use.',
      author: 'Michael Chen',
      role: 'Founder, EcoShop Inc.',
    },
    gallery: ['from-blue-400 to-cyan-500', 'from-cyan-500 to-teal-600', 'from-teal-500 to-green-600'],
  },
  {
    id: 'fitnesspal',
    title: 'FitnessPal',
    category: 'Fitness',
    shortDescription: 'Personal training app with workout tracking and nutrition plans',
    fullDescription: 'FitnessPal is your personal fitness companion that combines workout planning, nutrition tracking, and progress monitoring in one powerful app. With AI-powered form correction and personalized training programs, users achieve their fitness goals faster than ever.',
    image: 'from-purple-500 to-pink-600',
    tech: ['Swift', 'HealthKit', 'AWS', 'CoreML', 'SwiftUI'],
    features: [
      'AI-powered form correction using camera',
      'Personalized workout plans',
      'Real-time rep counting',
      'Nutrition and macro tracking',
      'Progress photos and measurements',
      'Social challenges and leaderboards',
      'Integration with Apple Watch',
      'Offline workout mode',
    ],
    challenge: 'Developing an iOS app that could analyze workout form in real-time while providing accurate rep counting and seamless HealthKit integration.',
    solution: 'We utilized CoreML for on-device machine learning to analyze body positions through the camera. The app processes data locally for privacy and speed, syncing with HealthKit for comprehensive fitness tracking.',
    results: [
      '1M+ downloads on App Store',
      '4.9 star rating',
      'Apple Watch App of the Year nominee',
      '60% user retention rate',
    ],
    testimonial: {
      text: 'The AI form correction feature has been a game-changer. Our users report 70% fewer injuries and faster progress.',
      author: 'Alex Martinez',
      role: 'CTO, FitLife Inc.',
    },
    gallery: ['from-purple-400 to-pink-500', 'from-pink-500 to-rose-600', 'from-rose-500 to-red-600'],
  },
  {
    id: 'travelmate',
    title: 'TravelMate',
    category: 'Travel',
    shortDescription: 'Smart travel planner with real-time recommendations',
    fullDescription: 'TravelMate revolutionizes travel planning with AI-driven itineraries, real-time local recommendations, and seamless booking integration. Whether you are a solo adventurer or planning a family vacation, TravelMate makes every trip unforgettable.',
    image: 'from-orange-500 to-red-600',
    tech: ['Kotlin', 'Google Maps', 'Firebase', 'TensorFlow Lite', 'Jetpack Compose'],
    features: [
      'AI-generated personalized itineraries',
      'Real-time local recommendations',
      'Offline maps and guides',
      'Multi-currency expense tracking',
      'Flight and hotel booking integration',
      'Photo journal with location tagging',
      'Local language translator',
      'Emergency assistance 24/7',
    ],
    challenge: 'Building a travel app that works seamlessly offline while providing real-time recommendations and supporting multiple languages and currencies.',
    solution: 'We developed a native Android app using Kotlin and Jetpack Compose with intelligent caching for offline functionality. TensorFlow Lite powers on-device translation and recommendations.',
    results: [
      '750,000+ trips planned',
      'Available in 50+ countries',
      '4.7 star rating on Play Store',
      'Best Travel App 2023 - Android Excellence',
    ],
    testimonial: {
      text: 'TravelMate has become essential for our travel community. The offline features and AI recommendations are outstanding.',
      author: 'Emma Wilson',
      role: 'Travel Blogger & Influencer',
    },
    gallery: ['from-orange-400 to-red-500', 'from-red-500 to-rose-600', 'from-rose-500 to-pink-600'],
  },
  {
    id: 'financeflow',
    title: 'FinanceFlow',
    category: 'Finance',
    shortDescription: 'Smart personal finance manager with investment tracking',
    fullDescription: 'FinanceFlow is a comprehensive personal finance application that helps users manage their money, track investments, and achieve financial goals. With bank-level security and intelligent insights, users take control of their financial future.',
    image: 'from-emerald-500 to-teal-600',
    tech: ['React Native', 'Plaid API', 'Node.js', 'PostgreSQL', 'Chart.js'],
    features: [
      'Automatic bank account syncing',
      'Investment portfolio tracking',
      'Bill reminders and auto-pay',
      'Budget creation and monitoring',
      'Financial goal setting',
      'Spending analytics and insights',
      'Tax document organization',
      'Secure document vault',
    ],
    challenge: 'Creating a secure finance app that integrates with multiple banks while providing real-time investment tracking and actionable financial insights.',
    solution: 'We implemented Plaid API for secure bank connections and built a robust analytics engine that processes transactions in real-time to provide personalized financial advice.',
    results: [
      '$500M+ in assets tracked',
      '200,000+ active users',
      'Average user saves $300/month',
      'SOC 2 Type II certified',
    ],
    testimonial: {
      text: 'FinanceFlow helped me save for my dream home. The insights are incredibly accurate and the app is so easy to use.',
      author: 'Jennifer Brown',
      role: 'Happy User',
    },
    gallery: ['from-emerald-400 to-teal-500', 'from-teal-500 to-cyan-600', 'from-cyan-500 to-blue-600'],
  },
  {
    id: 'foodiehub',
    title: 'FoodieHub',
    category: 'Food & Dining',
    shortDescription: 'Restaurant discovery and food delivery platform',
    fullDescription: 'FoodieHub connects food lovers with the best local restaurants, offering seamless ordering, real-time delivery tracking, and personalized recommendations based on taste preferences and dietary requirements.',
    image: 'from-yellow-500 to-orange-600',
    tech: ['Flutter', 'Firebase', 'Google Maps', 'Stripe', 'Algolia'],
    features: [
      'AI-powered restaurant recommendations',
      'Real-time order tracking',
      'Table reservations',
      'Group ordering feature',
      'Dietary filter options',
      'Loyalty rewards program',
      'In-app chat with restaurants',
      'Photo reviews and ratings',
    ],
    challenge: 'Building a platform that serves both restaurants and customers efficiently while handling high-volume orders during peak hours.',
    solution: 'We built a scalable Flutter application with Firebase backend, implementing smart caching and load balancing to handle peak traffic. Algolia powers instant search across thousands of restaurants.',
    results: [
      '1M+ orders processed monthly',
      '5,000+ restaurant partners',
      '4.8 star average rating',
      '25% repeat order rate',
    ],
    testimonial: {
      text: 'FoodieHub transformed our restaurant business. Orders increased by 40% and customer feedback has been amazing.',
      author: 'Chef Roberto Garcia',
      role: 'Owner, La Bella Italia',
    },
    gallery: ['from-yellow-400 to-orange-500', 'from-orange-500 to-red-600', 'from-red-500 to-rose-600'],
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}

export function getAllProjectIds(): string[] {
  return projects.map((p) => p.id)
}