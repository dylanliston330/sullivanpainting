import { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Interior Painting',
    description: 'Transform your home with our premium interior painting services. We use only the highest quality paints and materials to ensure a flawless finish that lasts for years.',
    imageUrl: 'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      'Complete surface preparation',
      'Premium paint products',
      'Two-coat guarantee',
      'Detail-oriented trim work',
      'Furniture and floor protection',
      'Thorough cleanup'
    ],
    slug: 'interior-painting'
  },
  {
    id: '2',
    title: 'Exterior Painting',
    description: 'Protect and beautify your home\'s exterior with our professional painting services. Our weather-resistant coatings and meticulous preparation ensure lasting results in any climate.',
    imageUrl: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      'Weather-proof coatings',
      'Complete surface preparation',
      'Power washing services',
      'Wood repair and replacement',
      'Premium paint products',
      'Multi-year warranty'
    ],
    slug: 'exterior-painting'
  },
  {
    id: '3',
    title: 'Spray Application',
    description: 'Our professional spray application services provide a smooth, factory-like finish for cabinets, furniture, decks, fences, and more. Save time and achieve superior results.',
    imageUrl: 'https://images.pexels.com/photos/5691644/pexels-photo-5691644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      'Airless spraying technology',
      'Even, professional finish',
      'Cabinet refinishing',
      'Deck and fence staining',
      'Furniture restoration',
      'Trim and millwork coating'
    ],
    slug: 'spray-application'
  }
];