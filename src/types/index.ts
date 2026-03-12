export interface Value {
  id: number;
  title: string;
  description: string;
  importance: Importance;
}

export type Importance = 'unsorted' | 'very-important' | 'important' | 'not-important';