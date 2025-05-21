export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
  slug: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'interior' | 'exterior' | 'spray';
  beforeImageUrl: string;
  afterImageUrl: string;
  testimonial?: {
    text: string;
    author: string;
    rating: number;
  };
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  location: string;
  rating: number;
  projectType: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  projectType: string[];
  squareFootage: string;
  timeline: string;
  message: string;
}