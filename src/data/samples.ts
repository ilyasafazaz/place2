import { Place, Activity } from '../types';

// Sample Places data
export const samplePlaces: Place[] = [
  {
    id: 'p1',
    name: 'Parc de la Villette',
    description: 'A large urban park with gardens, playgrounds, and cultural venues including the Cité des Sciences et de l\'Industrie and the Philharmonie de Paris.',
    location: {
      continent: 'Europe',
      country: 'France',
      city: 'Paris',
      neighborhood: 'La Villette',
      coordinates: {
        lat: 48.8938,
        lng: 2.3908
      }
    },
    categories: ['Urban', 'Cultural', 'Outdoor'],
    domains: ['Entertainment', 'Education'],
    accessibility: ['Free', 'Wheelchair Accessible'],
    activities: ['Walking', 'Cycling', 'Picnic', 'Museum Visits'],
    media: {
      images: ['https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg']
    }
  },
  {
    id: 'p2',
    name: 'Shibuya Crossing',
    description: 'The famous pedestrian crossing outside Shibuya Station in Tokyo, known as one of the busiest pedestrian intersections in the world.',
    location: {
      continent: 'Asia',
      country: 'Japan',
      city: 'Tokyo',
      neighborhood: 'Shibuya',
      coordinates: {
        lat: 35.6594,
        lng: 139.7005
      }
    },
    categories: ['Urban', 'Cultural'],
    domains: ['Entertainment', 'Business'],
    accessibility: ['Free', 'Wheelchair Accessible'],
    activities: ['People Watching', 'Photography', 'Shopping'],
    media: {
      images: ['https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg']
    }
  },
  {
    id: 'p3',
    name: 'Central Park',
    description: 'An urban park in Manhattan, New York City. It is the most visited urban park in the United States with an estimated 42 million visitors annually.',
    location: {
      continent: 'North America',
      country: 'USA',
      city: 'New York',
      neighborhood: 'Manhattan',
      coordinates: {
        lat: 40.7829,
        lng: -73.9654
      }
    },
    categories: ['Urban', 'Natural'],
    domains: ['Entertainment', 'Health'],
    accessibility: ['Free', 'Wheelchair Accessible'],
    activities: ['Walking', 'Cycling', 'Boating', 'Picnic', 'Ice Skating'],
    media: {
      images: ['https://images.pexels.com/photos/76969/central-park-new-york-panorama-76969.jpeg']
    }
  },
  {
    id: 'p4',
    name: 'Maternité Port-Royal',
    description: 'A renowned maternity hospital in Paris, specializing in childbirth and women\'s health services.',
    location: {
      continent: 'Europe',
      country: 'France',
      city: 'Paris',
      neighborhood: 'Montparnasse',
      coordinates: {
        lat: 48.8392,
        lng: 2.3379
      }
    },
    categories: ['Urban', 'Health'],
    domains: ['Health', 'Women\'s Health', 'Birth'],
    accessibility: ['Reservation Required', 'Wheelchair Accessible'],
    activities: ['Childbirth Classes', 'Medical Consultations', 'Prenatal Care'],
    media: {
      images: ['https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg']
    }
  },
  {
    id: 'p5',
    name: 'Parc des Buttes-Chaumont',
    description: 'One of the largest and most original parks in Paris, featuring a lake, cliffs, waterfalls, and a temple at the top of a cliff.',
    location: {
      continent: 'Europe',
      country: 'France',
      city: 'Paris',
      neighborhood: '19th Arrondissement',
      coordinates: {
        lat: 48.8769,
        lng: 2.3823
      }
    },
    categories: ['Urban', 'Natural'],
    domains: ['Entertainment', 'Health'],
    accessibility: ['Free', 'Limited Wheelchair Access'],
    activities: ['Hiking', 'Picnic', 'Photography', 'Running'],
    media: {
      images: ['https://images.pexels.com/photos/158028/belvedere-doric-temple-buttes-chaumont-park-158028.jpeg']
    }
  },
  {
    id: 'p6',
    name: 'Camp Nou',
    description: 'The home stadium of FC Barcelona, one of the largest stadiums in Europe and a temple for football fans.',
    location: {
      continent: 'Europe',
      country: 'Spain',
      city: 'Barcelona',
      neighborhood: 'Les Corts',
      coordinates: {
        lat: 41.3809,
        lng: 2.1228
      }
    },
    categories: ['Urban', 'Sport'],
    domains: ['Entertainment', 'Sport'],
    accessibility: ['Paid', 'Wheelchair Accessible'],
    activities: ['Watching Football', 'Stadium Tours', 'Museum Visits'],
    media: {
      images: ['https://images.pexels.com/photos/14586974/pexels-photo-14586974.jpeg']
    }
  }
];

// Sample Activities data
export const sampleActivities: Activity[] = [
  {
    id: 'a1',
    name: 'Football Match',
    description: 'Watch or play a football (soccer) match with friends or at a local club.',
    context: ['Outdoor', 'Team'],
    classification: {
      level1: 'Sport',
      level2: 'Team Sports',
      level3: 'Football'
    },
    compatiblePlaces: ['Stadium', 'Sport Complex', 'Park'],
    bestTimes: {
      timeOfDay: ['Afternoon', 'Evening'],
      dayOfWeek: ['Weekend'],
      season: ['All Year']
    },
    duration: {
      min: 90,
      max: 120,
      unit: 'minutes'
    },
    frequency: 'Weekly'
  },
  {
    id: 'a2',
    name: 'Yoga Session',
    description: 'Practice yoga to improve flexibility, strength, and mental well-being.',
    context: ['Indoor', 'Outdoor', 'Online'],
    classification: {
      level1: 'Wellness',
      level2: 'Yoga'
    },
    compatiblePlaces: ['Yoga Studio', 'Gym', 'Park', 'Beach', 'Home'],
    bestTimes: {
      timeOfDay: ['Morning', 'Evening'],
      dayOfWeek: ['All'],
      season: ['All Year']
    },
    duration: {
      min: 45,
      max: 90,
      unit: 'minutes'
    },
    frequency: 'Daily'
  },
  {
    id: 'a3',
    name: 'Museum Visit',
    description: 'Explore art, history, science, or culture at a local or world-renowned museum.',
    context: ['Indoor', 'Cultural'],
    classification: {
      level1: 'Culture',
      level2: 'Art',
      level3: 'Museum'
    },
    compatiblePlaces: ['Museum', 'Art Gallery', 'Cultural Center'],
    bestTimes: {
      timeOfDay: ['Morning', 'Afternoon'],
      dayOfWeek: ['Weekday'],
      season: ['All Year']
    },
    duration: {
      min: 2,
      max: 4,
      unit: 'hours'
    },
    frequency: 'Monthly'
  },
  {
    id: 'a4',
    name: 'Romantic Dinner',
    description: 'Enjoy a special dinner with your partner at a romantic restaurant or setting.',
    context: ['Indoor', 'Outdoor', 'Evening'],
    classification: {
      level1: 'Romance',
      level2: 'Dating',
      level3: 'Dining'
    },
    compatiblePlaces: ['Restaurant', 'Rooftop', 'Waterfront', 'Home'],
    bestTimes: {
      timeOfDay: ['Evening'],
      dayOfWeek: ['Weekend'],
      season: ['All Year']
    },
    duration: {
      min: 2,
      max: 3,
      unit: 'hours'
    },
    frequency: 'Monthly'
  },
  {
    id: 'a5',
    name: 'Childbirth Class',
    description: 'Educational sessions for expectant parents to prepare for childbirth and early parenthood.',
    context: ['Indoor', 'Educational'],
    classification: {
      level1: 'Health',
      level2: 'Women\'s Health',
      level3: 'Birth',
      level4: 'Education'
    },
    compatiblePlaces: ['Hospital', 'Health Center', 'Community Center', 'Online'],
    bestTimes: {
      timeOfDay: ['Evening', 'Weekend'],
      dayOfWeek: ['All'],
      season: ['All Year']
    },
    duration: {
      min: 2,
      max: 3,
      unit: 'hours'
    },
    frequency: 'Weekly'
  },
  {
    id: 'a6',
    name: 'Hiking Trip',
    description: 'Explore nature trails, mountains, or scenic routes by foot.',
    context: ['Outdoor', 'Nature'],
    classification: {
      level1: 'Sport',
      level2: 'Individual Sports',
      level3: 'Hiking'
    },
    compatiblePlaces: ['Mountain', 'Forest', 'National Park', 'Nature Reserve'],
    bestTimes: {
      timeOfDay: ['Morning', 'Afternoon'],
      dayOfWeek: ['Weekend'],
      season: ['Spring', 'Summer', 'Fall']
    },
    duration: {
      min: 2,
      max: 8,
      unit: 'hours'
    },
    frequency: 'Monthly'
  }
];