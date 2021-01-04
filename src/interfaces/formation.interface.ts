export interface formation {
  category: string;
  institute: string;
  title: string;
  since: string;
  until: string;
}

export interface AddFormationViewProps {
  data?: any;
  from?: string;
  loading: boolean;
  setFormation: any;
}
