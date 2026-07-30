export interface Secret {
  id: string;
  type: 'click' | 'date' | 'heart' | 'konami';
  trigger: string;
  message: string;
}

export const secrets: Secret[] = [
  {
    id: 'flower',
    type: 'click',
    trigger: 'flower',
    message: 'You found a secret! 🌸 You are the most beautiful part of my world. Every day with you feels like spring.'
  },
  {
    id: 'date',
    type: 'date',
    trigger: '1208',
    message: '🎉 You unlocked a secret message! That date means the world to me because it led me to you. Thank you for existing.'
  },
  {
    id: 'heart',
    type: 'heart',
    trigger: 'hidden-heart',
    message: '💖 You found the hidden heart! This represents how much I love you — hidden in plain sight, always beating for you.'
  },
  {
    id: 'konami',
    type: 'konami',
    trigger: '↑↑↓↓←→←→',
    message: '🕹️ You found the ultimate easter egg! Consider this a digital hug and a reminder that you are absolutely incredible.'
  },
];