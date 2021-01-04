export interface experience {
  city: string;
  company: string;
  descriptionEmployment: string;
  employment: string;
  since: string;
  until: string;
}

export interface AddExperienceViewProps {
  data?: any;
  from?: string;
  loading: boolean;
  setExperience: any;
}
