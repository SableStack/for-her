export interface BucketListItem {
  id: number;
  text: string;
  completed: boolean;
}

export const bucketList: BucketListItem[] = [
  { id: 1, text: "Take silly pictures", completed: false },
  { id: 2, text: "Watch the Nanny together", completed: false },
  { id: 3, text: "Bake together", completed: false },
  { id: 4, text: "Dance together", completed: false },
  { id: 5, text: "Arm Wrestle", completed: false },
  { id: 6, text: "Wrestle each other", completed: false },
];
