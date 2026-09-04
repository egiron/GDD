export interface SensorReading {
  timestamp: string;
  temperature: number;
  humidity: number;
  status: 'normal' | 'warning' | 'critical';
}

export interface GDDRow {
  timestamp: string;
  Tn: number;
  Tx: number;
  GDD: number;
  accGDD: number;
}

export interface Site {
  // hash?: string;
  units?: string;
  startDate: string;
  endDate: string;
  gddThreshold?: number;
  maxTemperatureThreshold?: number;
  maturityGDDThreshold?: number;
  daystoMaturityThreshold?: number;
  latitude: number;
  longitude: number;
  croppest?:string;
  nurserysite?:string;
  // lastupdate?:string;
  // weatherdata?: [];
}