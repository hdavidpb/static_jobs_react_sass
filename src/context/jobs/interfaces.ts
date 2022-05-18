export interface IJobcontext {
  jobs: IJob[];
  filterValues: string[];
  handleSetFilterValues: (language: string) => void;
  handleClearFilter: (isAll: boolean, language?: string) => void;
}

export interface IJob {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}
