export type ExplorationMode = 'place' | 'activity';

export interface TaxonomyItem {
  id: string;
  name: string;
  description?: string;
  children?: TaxonomyItem[];
  level: number;
  parentId?: string;
}

export interface Place {
  id: string;
  name: string;
  description: string;
  location: {
    continent: string;
    country: string;
    city: string;
    neighborhood?: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  categories: string[];
  domains: string[];
  accessibility: string[];
  activities: string[];
  media?: {
    images: string[];
    videos?: string[];
    articles?: string[];
    newsletters?: string[];
  };
  realEstate?: {
    type: 'rent' | 'sale' | 'development';
    status: 'available' | 'pending' | 'sold';
    price?: number;
    area?: number;
    features?: string[];
  };
  stakeholders?: {
    promoters?: string[];
    agencies?: string[];
    lawyers?: string[];
  };
  opportunities?: {
    economic?: string[];
    promotional?: string[];
    risks?: string[];
  };
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  context: ('indoor' | 'outdoor' | 'mobile' | 'online')[];
  classification: {
    level1: string; // Domain
    level2?: string; // Subdomain
    level3?: string; // Category
    level4?: string; // Subcategory
  };
  compatiblePlaces: string[];
  spatialTemporal: {
    bestTimes?: {
      timeOfDay?: string[];
      dayOfWeek?: string[];
      season?: string[];
    };
    duration?: {
      min: number;
      max: number;
      unit: 'minutes' | 'hours' | 'days';
    };
    frequency?: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'occasional';
  };
  requirements?: {
    minParticipants?: number;
    maxParticipants?: number;
    ageRestrictions?: {
      min?: number;
      max?: number;
    };
    equipment?: string[];
    skills?: string[];
  };
  pricing?: {
    type: 'free' | 'paid' | 'variable';
    amount?: number;
    currency?: string;
    priceRange?: {
      min: number;
      max: number;
    };
  };
}

export interface FilterOption {
  id: string;
  label: string;
  type: 'checkbox' | 'radio' | 'range' | 'select';
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
}

export interface FilterGroup {
  id: string;
  label: string;
  options: FilterOption[];
}

export interface SearchQuery {
  text?: string;
  filters: {
    location?: {
      continent?: string;
      country?: string;
      city?: string;
      neighborhood?: string;
      radius?: number;
    };
    categories?: string[];
    domains?: string[];
    accessibility?: string[];
    context?: ('indoor' | 'outdoor' | 'mobile' | 'online')[];
    timing?: {
      season?: string[];
      timeOfDay?: string[];
      duration?: {
        min?: number;
        max?: number;
        unit?: string;
      };
    };
    pricing?: {
      type?: ('free' | 'paid')[];
      maxPrice?: number;
    };
  };
}