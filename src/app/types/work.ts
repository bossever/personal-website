export type Work = {
  company: string;
  location: string;
  roles: Role[];
};

export type Role = {
  designation: string;
  from: string;
  to: string;
  description: string | string[];
};
