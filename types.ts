
export interface RoomType {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  amenities: string[];
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface NavLink {
  label: string;
  href: string;
}
