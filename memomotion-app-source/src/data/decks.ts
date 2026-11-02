export type Word = {
  id: number; term: string; reading: string; meaning: string; example: string;
  exampleMeaning: string; language: string; category: string;
};
export type Deck = {
  id: number; title: string; subtitle: string; language: string; flag: string;
  color: string; progress: number; words: Word[];
};
const korean: Word[] = [
  { id: 1, term: "안녕하세요", reading: "annyeonghaseyo", meaning: "Hello", example: "안녕하세요! 만나서 반가워요.", exampleMeaning: "Hello! Nice to meet you.", language: "Korean", category: "Basics" },
  { id: 2, term: "감사합니다", reading: "gamsahamnida", meaning: "Thank you", example: "도와주셔서 감사합니다.", exampleMeaning: "Thank you for helping me.", language: "Korean", category: "Basics" },
  { id: 3, term: "행복", reading: "haengbok", meaning: "Happiness", example: "오늘 정말 행복해요.", exampleMeaning: "I am really happy today.", language: "Korean", category: "Feelings" },
  { id: 4, term: "음식", reading: "eumsik", meaning: "Food", example: "한국 음식을 좋아해요.", exampleMeaning: "I like Korean food.", language: "Korean", category: "Food" },
  { id: 5, term: "친구", reading: "chingu", meaning: "Friend", example: "그는 제 친구예요.", exampleMeaning: "He is my friend.", language: "Korean", category: "People" },
  { id: 6, term: "사랑", reading: "sarang", meaning: "Love", example: "사랑은 아름다워요.", exampleMeaning: "Love is beautiful.", language: "Korean", category: "Feelings" }
];
const japanese: Word[] = [
  { id: 7, term: "こんにちは", reading: "konnichiwa", meaning: "Hello", example: "こんにちは、お元気ですか。", exampleMeaning: "Hello, how are you?", language: "Japanese", category: "Basics" },
  { id: 8, term: "ありがとう", reading: "arigatou", meaning: "Thank you", example: "本当にありがとう。", exampleMeaning: "Thank you so much.", language: "Japanese", category: "Basics" },
  { id: 9, term: "旅行", reading: "ryokou", meaning: "Travel", example: "旅行が大好きです。", exampleMeaning: "I love traveling.", language: "Japanese", category: "Travel" },
  { id: 10, term: "水", reading: "mizu", meaning: "Water", example: "水をください。", exampleMeaning: "Water, please.", language: "Japanese", category: "Food" }
];
const chinese: Word[] = [
  { id: 11, term: "你好", reading: "nǐ hǎo", meaning: "Hello", example: "你好！很高兴认识你。", exampleMeaning: "Hello! Nice to meet you.", language: "Chinese", category: "Basics" },
  { id: 12, term: "谢谢", reading: "xiè xie", meaning: "Thank you", example: "谢谢你的帮助。", exampleMeaning: "Thank you for your help.", language: "Chinese", category: "Basics" },
  { id: 13, term: "朋友", reading: "péng you", meaning: "Friend", example: "他是我的朋友。", exampleMeaning: "He is my friend.", language: "Chinese", category: "People" }
];
export const decks: Deck[] = [
  { id: 1, title: "Korean Basics", subtitle: "Essential everyday words", language: "Korean", flag: "🇰🇷", color: "rose", progress: 80, words: korean },
  { id: 2, title: "Japanese Essentials", subtitle: "Start speaking naturally", language: "Japanese", flag: "🇯🇵", color: "peach", progress: 60, words: japanese },
  { id: 3, title: "Chinese Starter Pack", subtitle: "Your first Mandarin words", language: "Chinese", flag: "🇨🇳", color: "blue", progress: 33, words: chinese }
];
