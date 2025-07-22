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