export interface ProgramItem {
  title: string;
  description: string;
  image: string;
  schools: string[];
}

export interface CenterItem {
  schools: string[];
  image: string;
}

export interface CountryProgram {
  country: string;
  programs?: ProgramItem[];
  centers?: CenterItem[];
}
  


export interface SocialItem {
  id: number;
  title: string;
  content: string;
}