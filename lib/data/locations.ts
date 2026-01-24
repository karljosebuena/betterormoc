export interface Location {
  id: string
  name: string
  type:
    | 'government'
    | 'service-center'
    | 'health'
    | 'police'
    | 'fire'
    | 'barangay'
  coordinates: [number, number] // [latitude, longitude]
  address: string
  description: string
  services?: string[]
  hours?: string
  contact?: string
  email?: string
}

export const ormocLocations: Location[] = [
  {
    id: 'city-hall',
    name: 'Ormoc City Hall',
    type: 'government',
    coordinates: [11.013031, 124.60476], // Verified coordinates from maptons.com
    address: 'Anubing St., Brgy. Cogon, Ormoc City, Leyte 6541',
    description: 'Main government office of Ormoc City',
    services: [
      "Mayor's Office",
      'City Council',
      'City Treasury',
      'City Assessor',
      'City Planning',
      'City Engineering',
    ],
    hours: 'Monday - Friday: 8:00 AM - 5:00 PM',
    contact: '+63 53 561 6000',
    email: 'info@ormoc.gov.ph',
  },
  {
    id: 'local-civil-registrar',
    name: 'Local Civil Registrar Office',
    type: 'service-center',
    coordinates: [11.0132, 124.6048], // Near City Hall
    address: 'City Hall Complex, Ormoc City',
    description:
      'Civil registration services - birth, marriage, death certificates',
    services: [
      'Birth Certificate',
      'Marriage Certificate',
      'Death Certificate',
      'CENOMAR',
      'Certificate of No Marriage',
    ],
    hours: 'Monday - Friday: 8:00 AM - 5:00 PM',
    contact: '+63 53 561 6001',
  },
  {
    id: 'city-health-office',
    name: 'City Health Office',
    type: 'health',
    coordinates: [11.01381, 124.60383], // Verified coordinates from mapcarta.com
    address: 'Anubing Street, Ormoc City, Leyte',
    description: 'Primary healthcare services and health programs',
    services: [
      'Medical Consultations',
      'Vaccinations',
      'Health Programs',
      'Maternal Care',
      'Child Health Services',
    ],
    hours: 'Monday - Friday: 8:00 AM - 5:00 PM',
    contact: '+63 53 561 6002',
  },
  {
    id: 'ormoc-city-police',
    name: 'Ormoc City Police Station',
    type: 'police',
    coordinates: [11.0065, 124.6075], // Estimated near city center
    address: 'Ormoc City, Leyte',
    description: 'Main police station for Ormoc City',
    services: [
      'Emergency Response',
      'Police Clearance',
      'Crime Reporting',
      'Community Safety',
    ],
    hours: '24/7',
    contact: '+63 53 561 2222',
  },
  {
    id: 'ormoc-fire-station',
    name: 'Ormoc City Fire Station',
    type: 'fire',
    coordinates: [11.0058, 124.6068], // Estimated near city center
    address: 'Ormoc City, Leyte',
    description: 'Fire protection and emergency services',
    services: [
      'Fire Emergency Response',
      'Fire Safety Inspection',
      'Fire Prevention Programs',
      'Rescue Operations',
    ],
    hours: '24/7',
    contact: '+63 53 561 3333',
  },
  {
    id: 'district-1-barangay',
    name: 'District 1 Barangay Hall',
    type: 'barangay',
    coordinates: [11.008, 124.606],
    address: 'District 1, Ormoc City',
    description: 'Barangay government office',
    services: [
      'Barangay Clearance',
      'Barangay ID',
      'Community Services',
      'Dispute Resolution',
    ],
    hours: 'Monday - Friday: 8:00 AM - 5:00 PM',
    contact: '+63 53 561 7001',
  },
]

export const locationTypeColors = {
  government: '#1e40af', // blue-900
  'service-center': '#0891b2', // cyan-600
  health: '#dc2626', // red-600
  police: '#1e3a8a', // blue-900
  fire: '#ea580c', // orange-600
  barangay: '#16a34a', // green-600
}

export const locationTypeLabels = {
  government: 'Government Office',
  'service-center': 'Service Center',
  health: 'Health Center',
  police: 'Police Station',
  fire: 'Fire Station',
  barangay: 'Barangay Hall',
}
