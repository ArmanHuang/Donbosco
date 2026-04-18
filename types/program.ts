export interface ProgramItem {
    title: string;
    description: string;
    image: string;
    schools: string[];
  }
  
export interface CountryProgram {
    country: string;
    programs?: ProgramItem[];
    centers?: ourCenters[];
  }
  

export interface ourCenters{
    schools:string[],
    image:string
}

export interface SocialItem {
  id: number;
  title: string;
  content: string;
}