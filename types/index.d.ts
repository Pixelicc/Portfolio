export type Socials = {
  name: string;
  text: string;
  icon: string;
  url: string;
}[];

export type HomelabMetrics = {
  lastBoot: string;
  uptime: {
    human: string;
  };
  power: {
    currentUsage: number;
    dailyUsage: number;
  };
  cpu: {
    cores: number;
    threads: number;
    usedPercentage: number;
  };
  ram: {
    capacity: number;
    usedPercentage: number;
    usedCapacity: number;
  };
  disks: {
    capacity: number;
    usedPercentage: number;
    usedCapacity: number;
  }[];
};

export type HomelabSpecs = {
  cpu: {
    name: string;
    manufacturer: string;
    model: string;
    architecture: string;
    specs: {
      cores: number;
      threads: number;
      clockspeed: {
        default: number;
        max: number;
      };
      tdp: number;
      gpu: string;
    };
  };
  ram: {
    name: string;
    manufacturer: string;
    type: string;
    gen: string;
    specs: {
      capacity: number;
      mts: number;
    };
  };
  disks: {
    name: string;
    manufacturer: string;
    type: string;
    gen: string;
    specs: {
      capacity: number;
      mbs: number;
    };
  }[];
};

export type SetupSpecs = {
  cpu: {
    name: string;
    manufacturer: string;
    model: string;
    architecture: string;
    specs: {
      cores: number;
      threads: number;
      clockspeed: {
        default: number;
        max: number;
      };
      tdp: number;
    };
  };
  gpu: {
    name: string;
    manufacturer: string;
    brand: string;
    model: string;
    gen: string;
    specs: {
      memory: number;
      cores: {
        cuda: number;
        tensor: number;
        raytracing: number;
      };
      clockspeed: number;
      tdp: number;
    };
  };
  ram: {
    name: string;
    manufacturer: string;
    type: string;
    gen: string;
    specs: {
      capacity: number;
      mts: number;
    };
  };
  disks: {
    name: string;
    manufacturer: string;
    type: string;
    gen: string;
    specs: {
      capacity: number;
      mbs: number;
    };
  }[];
};

export type PersonalLocation = {
  country: {
    prefix: null | "the";
    name: string;
    code: string;
  };
  weather: {
    temperature: {
      current: number;
    };
    cloudCover: number;
    isRaining: boolean;
    isSnowing: boolean;
  };
  time: {
    timezone: string;
  };
};
