export interface skill {
  label: string;
  percentage: string;
  category: string;
}

export interface AddSkillsViewProps {
  data?: any;
  from?: string;
  loading: boolean;
  setSkill: any;
}
