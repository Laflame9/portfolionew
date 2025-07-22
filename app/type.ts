type TimelineItem = { 
  id: number; 
  title: string; 
  date: Date; 
  content: string; 
  category: string; 
  icon: string; 
  relatedIds: number[]; 
  status: 'complet'|'en_Progression' | 'en_Attente'; 
  energy: number; 
  profileId: number; }

  type TestProps = {
    skills: {
        id: number;
        title: string;
        date: Date;
        content: string;
        category: string;
        icon: string;
        relatedIds: number[];
        status: 'complet'|'en_Progression' | 'en_Attente';
        energy: number;
        profileId: number;
    }[];
    socialLinks: {
        id: number;
        profileId: number;
        platform: string;
        url: string;
    }[];
} & {
    id: number;
    fullName: string;
    bio: string;
    age: number | null;
    location: string | null;
    photoUrl: string | null;
    email: string;
    phone: string | null;
    createdAt: Date;
    updatedAt: Date;
}[]