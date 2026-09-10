export interface Waypoint {
  x: number; // 0 to 100 (%)
  y: number; // 0 to 100 (%)
}

export interface TrafficRoute {
  id: string;
  name: string;
  type: 'road' | 'river' | 'runway' | 'skyway';
  points: Waypoint[];
  speed?: number; // relative speed multiplier
  density?: number; // number of vehicles
  vehicleTypes?: ('car' | 'tuktuk' | 'bus' | 'boat' | 'plane')[];
  isBiDirectional?: boolean;
}

// Calibrated Traffic & Scenic Routes matching the 3D Diorama Artwork precisely
export const DEFAULT_TRAFFIC_ROUTES: TrafficRoute[] = [
  {
    id: 'runway-cnx',
    name: '清邁國際機場跑道 (CNX Runway: 點1起跑 ➔ 點2離地)',
    type: 'runway',
    density: 1,
    speed: 1,
    vehicleTypes: ['plane'],
    points: [
      { x: 27.5, y: 74.8 },
      { x: 28.5, y: 48.6 },
    ],
  },
  {
    id: 'road-main-highway',
    name: '泰北雙城跨城公路 (Highway 118 Superhighway)',
    type: 'road',
    density: 5,
    speed: 1,
    vehicleTypes: ['car', 'tuktuk', 'bus'],
    isBiDirectional: true,
    points: [
      { x: 77.9, y: 77.6 },
      { x: 77.4, y: 63.7 },
      { x: 76.1, y: 43.9 },
      { x: 74.6, y: 39.3 },
      { x: 70.8, y: 36.0 },
      { x: 61.2, y: 32.4 },
      { x: 54.9, y: 29.8 },
      { x: 51.0, y: 27.7 },
      { x: 47.4, y: 24.1 },
      { x: 43.7, y: 21.3 },
      { x: 40.7, y: 19.7 },
      { x: 38.3, y: 18.8 },
      { x: 36.9, y: 16.4 },
    ],
  },
  {
    id: 'river-main-waterway',
    name: '濱河-郭河 觀光遊船航道 (Scenic Riverway)',
    type: 'river',
    density: 3,
    speed: 0.65,
    vehicleTypes: ['boat'],
    isBiDirectional: true,
    points: [
      { x: 68.0, y: 79.2 },
      { x: 68.4, y: 70.9 },
      { x: 71.4, y: 66.4 },
      { x: 74.6, y: 62.1 },
      { x: 74.1, y: 57.9 },
    ],
  },
  {
    id: 'river-1788753703760',
    name: '濱河中段觀光航道 (Mid Riverway)',
    type: 'river',
    density: 2,
    speed: 0.6,
    vehicleTypes: ['boat'],
    isBiDirectional: true,
    points: [
      { x: 71.7, y: 52.6 },
      { x: 72.8, y: 48.3 },
      { x: 72.2, y: 44.8 },
      { x: 70.5, y: 43.5 },
      { x: 69.7, y: 41.4 },
      { x: 69.8, y: 38.9 },
    ],
  },
  {
    id: 'river-1788753779926',
    name: '郭河清萊上游航道 (Upper Riverway)',
    type: 'river',
    density: 2,
    speed: 0.6,
    vehicleTypes: ['boat'],
    isBiDirectional: true,
    points: [
      { x: 72.7, y: 35.4 },
      { x: 74.5, y: 32.4 },
      { x: 74.6, y: 29.1 },
      { x: 73.9, y: 27.3 },
      { x: 73.1, y: 24.9 },
      { x: 73.9, y: 21.7 },
      { x: 73.3, y: 19.1 },
    ],
  },
];

// Calibrated Traffic Routes matching the Vertical 3:4 Mobile Portrait Diorama (Moving Bottom -> Top: South to North)
export const DEFAULT_MOBILE_TRAFFIC_ROUTES: TrafficRoute[] = [
  {
    id: 'mobile-highway',
    name: '泰北雙城跨城公路 (縱向手機版)',
    type: 'road',
    density: 7,
    speed: 0.85,
    vehicleTypes: ['car', 'tuktuk', 'bus'],
    isBiDirectional: true,
    points: [
      { x: 98.5, y: 70.0 },
      { x: 98.2, y: 64.0 },
      { x: 97.8, y: 58.0 },
      { x: 96.8, y: 52.0 },
      { x: 94.0, y: 46.5 },
      { x: 89.0, y: 43.5 },
      { x: 83.5, y: 41.8 },
      { x: 77.0, y: 39.8 },
      { x: 69.5, y: 36.6 },
      { x: 62.0, y: 32.8 },
      { x: 54.5, y: 28.5 },
      { x: 47.0, y: 24.2 },
      { x: 39.5, y: 20.0 },
      { x: 32.5, y: 16.2 },
      { x: 27.5, y: 14.5 },
      { x: 24.0, y: 13.5 },
    ],
  },
  {
    id: 'mobile-riverway',
    name: '濱河-郭河觀光遊船 (縱向手機版)',
    type: 'river',
    density: 4,
    speed: 0.55,
    vehicleTypes: ['boat'],
    isBiDirectional: true,
    points: [
      { x: 84.8, y: 67.0 },
      { x: 78.5, y: 65.9 },
      { x: 74.8, y: 62.8 },
      { x: 75.2, y: 58.3 },
      { x: 76.5, y: 56.8 },
      { x: 80.8, y: 53.4 },
      { x: 84.5, y: 50.3 },
      { x: 81.2, y: 43.8 },
      { x: 81.5, y: 39.3 },
      { x: 77.5, y: 36.5 },
      { x: 82.0, y: 29.9 },
      { x: 83.5, y: 26.2 },
      { x: 82.0, y: 21.9 },
      { x: 82.5, y: 17.9 },
    ],
  },
];
