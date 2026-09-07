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

// Calibrated Traffic Routes matching the Vertical 3:4 Mobile Portrait Diorama
export const DEFAULT_MOBILE_TRAFFIC_ROUTES: TrafficRoute[] = [
  {
    id: 'mobile-highway',
    name: '泰北雙城跨城公路 (縱向手機版)',
    type: 'road',
    density: 5,
    speed: 0.85,
    vehicleTypes: ['car', 'tuktuk', 'bus'],
    isBiDirectional: true,
    points: [
      { x: 30.5, y: 14.5 },
      { x: 38.0, y: 19.5 },
      { x: 45.0, y: 23.5 },
      { x: 53.0, y: 29.5 },
      { x: 67.5, y: 30.5 },
      { x: 77.0, y: 32.5 },
      { x: 82.5, y: 36.5 },
      { x: 84.5, y: 43.0 },
      { x: 85.0, y: 51.0 },
      { x: 85.5, y: 58.0 },
      { x: 86.0, y: 64.5 },
      { x: 86.0, y: 69.0 },
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
      { x: 79.5, y: 19.5 },
      { x: 80.5, y: 25.0 },
      { x: 77.0, y: 31.0 },
      { x: 74.5, y: 36.0 },
      { x: 78.5, y: 43.0 },
      { x: 80.5, y: 48.0 },
      { x: 78.0, y: 53.5 },
      { x: 73.0, y: 57.5 },
      { x: 70.0, y: 61.5 },
      { x: 73.5, y: 64.5 },
      { x: 80.0, y: 65.5 },
      { x: 86.0, y: 65.2 },
      { x: 93.0, y: 65.0 },
    ],
  },
  {
    id: 'mobile-mountain-road',
    name: '素帖山觀景山路 (縱向手機版)',
    type: 'road',
    density: 3,
    speed: 0.7,
    vehicleTypes: ['car', 'tuktuk'],
    isBiDirectional: true,
    points: [
      { x: 45.0, y: 23.5 },
      { x: 38.0, y: 25.5 },
      { x: 25.0, y: 28.0 },
      { x: 21.0, y: 24.5 },
      { x: 28.5, y: 20.0 },
      { x: 24.0, y: 15.5 },
    ],
  },
  {
    id: 'mobile-city-street',
    name: '尼曼商圈大道 (縱向手機版)',
    type: 'road',
    density: 3,
    speed: 0.75,
    vehicleTypes: ['car', 'tuktuk'],
    isBiDirectional: true,
    points: [
      { x: 20.0, y: 38.5 },
      { x: 20.0, y: 48.0 },
      { x: 20.0, y: 56.0 },
      { x: 20.0, y: 63.0 },
    ],
  },
];
