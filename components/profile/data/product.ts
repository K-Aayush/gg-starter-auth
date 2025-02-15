import { Product } from "../interface/product.interface";

// Mock data for virtual products
const Products: Product[] = [
  {
    id: 1,
    name: "Busy",
    price: 1.99,
    type: "emote",
    images: [
      "https://png.pngtree.com/png-vector/20240822/ourmid/pngtree-smiling-businessman-cartoon-character-with-briefcase-3d-illustration-png-image_13590737.png",
    ],
    category: "Emotes",
    description: "An emote to express being busy.",
    animation: "/animations/sillydance.fbx",
  },
  {
    id: 2,
    name: "Selfie",
    price: 1.99,
    type: "emote",
    images: [
      "https://png.pngtree.com/png-vector/20240421/ourmid/pngtree-d-cartoon-style-young-business-man-taking-selfie-on-a-transparent-png-image_12305634.png",
    ],
    category: "Emotes",
    description: "An emote to represent taking a selfie.",
    animation: "/animations/taunt.fbx",
  },
  {
    id: 3,
    name: "Hurray",
    price: 1.99,
    type: "emote",
    images: [
      "https://png.pngtree.com/png-clipart/20231016/original/pngtree-celebration-of-businessman-wearing-long-shirt-and-blue-tie-3d-businessman-png-image_13321680.png",
    ],
    category: "Emotes",
    description: "An emote to express excitement or celebration.",
    animation: "/animations/Swimming.fbx",
  },
  {
    id: 4,
    name: "You",
    price: 1.99,
    type: "emote",
    images: [
      "https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-businessman-in-gray-vest-suit-pointing-with-thumb-aside-looking-at-png-image_10001780.png",
    ],
    category: "Emotes",
    description: "An emote to point at someone or something.",
    animation: "/animations/moonwalk.fbx",
  },
  {
    id: 5,
    name: "Sitting",
    price: 1.99,
    type: "emote",
    images: [
      "https://static.vecteezy.com/system/resources/thumbnails/038/368/301/small/ai-generated-3d-a-businessman-sitting-on-a-floor-with-smiling-face-on-isolated-transparent-background-generated-with-ai-png.png",
    ],
    category: "Emotes",
    description: "An emote to represent sitting down.",
    animation: "/animations/sillydance.fbx",
  },
  {
    id: 6,
    name: "Bruh",
    price: 0.99,
    type: "sound",
    images: [
      "https://png.pngtree.com/png-vector/20220622/ourmid/pngtree-radio-wave-or-sound-wave-icon-vector-isolated-png-image_5219475.png",
    ],
    category: "Sounds",
    subCategory: ["Meme"],
    description: "The classic 'Bruh' sound effect.",
    src: "bruh.mp3",
  },
  {
    id: 7,
    name: "100 Coins",
    price: 4.99,
    type: "coin",
    images: [
      "https://png.pngtree.com/png-vector/20240226/ourmid/pngtree-3d-illustration-game-coin-without-background-png-image_11880013.png",
    ],
    category: "Coins",
    description: "A pack of 100 in-game coins.",
  },
  {
    id: 8,
    name: "500 Coins",
    price: 19.99,
    type: "coin",
    images: [
      "https://png.pngtree.com/png-vector/20240226/ourmid/pngtree-3d-illustration-game-coin-without-background-png-image_11880013.png",
    ],
    category: "Coins",
    description: "A pack of 500 in-game coins.",
  },
  {
    id: 9,
    name: "1000 Coins",
    price: 39.99,
    type: "coin",
    images: [
      "https://png.pngtree.com/png-vector/20240226/ourmid/pngtree-3d-illustration-game-coin-without-background-png-image_11880013.png",
    ],
    category: "Coins",
    description: "A pack of 1000 in-game coins.",
  },
  {
    id: 10,
    name: "2500 Coins",
    price: 89.99,
    type: "coin",
    images: [
      "https://png.pngtree.com/png-vector/20240621/ourmid/pngtree-bitcoin-sign-coin-bag-png-image_12793216.png",
    ],
    category: "Coins",
    description: "A pack of 2500 in-game coins.",
  },
  {
    id: 11,
    name: "5000 Coins",
    price: 149.99,
    type: "coin",
    images: [
      "https://png.pngtree.com/png-vector/20240621/ourmid/pngtree-bitcoin-sign-coin-bag-png-image_12793216.png",
    ],
    category: "Coins",
    description: "A pack of 5000 in-game coins.",
  },
  {
    id: 12,
    name: "Extremely Happy",
    price: 1.99,
    type: "emote",
    images: [
      "https://png.pngtree.com/png-clipart/20231116/original/pngtree-craft-a-humorous-businessman-cartoon-character-illustrating-the-ups-and-downs-png-image_13572497.png",
    ],
    category: "Emotes",
    description: "An emote to express extreme happiness.",
    animation: "/animations/hang.fbx",
  },
  {
    id: 13,
    name: "Thumbsup",
    price: 1.99,
    type: "emote",
    images: [
      "https://png.pngtree.com/png-vector/20240824/ourmid/pngtree-a-happy-3d-business-man-on-transparent-white-background-png-image_13604288.png",
    ],
    category: "Emotes",
    description: "An emote to give a thumbs up.",
    animation: "/animations/swim.fbx",
  },
  {
    id: 14,
    name: "Mii Channel Music",
    price: 0.99,
    type: "sound",
    images: [
      "https://png.pngtree.com/png-vector/20220622/ourmid/pngtree-radio-wave-or-sound-wave-icon-vector-isolated-png-image_5219475.png",
    ],
    category: "Sounds",
    subCategory: ["Music"],
    description: "The nostalgic Mii Channel background music.",
    src: "mii-channel-music.mp3",
  },
  {
    id: 15,
    name: "Oh Hell Nouaa",
    price: 0.99,
    type: "sound",
    images: [
      "https://png.pngtree.com/png-clipart/20230922/original/pngtree-sound-wave-logo-template-vector-icon-red-spectrum-frequency-vector-png-image_12517825.png",
    ],
    category: "Sounds",
    subCategory: ["Meme"],
    description: "The hilarious 'Oh Hell Nouaa' meme sound.",
    src: "oh-hell-nouaa.mp3",
  },
  {
    id: 16,
    name: "Anime Song",
    price: 0.99,
    type: "sound",
    images: [
      "https://png.pngtree.com/png-clipart/20230815/original/pngtree-sound-wave-vector-icon-digital-abstract-audio-vector-picture-image_10796636.png",
    ],
    category: "Sounds",
    subCategory: ["Anime, Song"],
    description: "A popular anime theme song.",
    src: "tmpdbnm_5a3.mp3",
  },
  {
    id: 17,
    name: "10000 Coins",
    price: 199.99,
    type: "coin",
    images: [
      "https://png.pngtree.com/png-vector/20240621/ourmid/pngtree-bitcoin-sign-coin-bag-png-image_12793216.png",
    ],
    category: "Coins",
    description: "A large pack of 10000 in-game coins.",
  },
  {
    id: 18,
    name: "Working",
    price: 1.99,
    type: "emote",
    images: [
      "https://png.pngtree.com/png-vector/20240509/ourmid/pngtree-3d-illustration-of-a-happy-business-man-with-cartoon-png-image_12384195.png",
    ],
    category: "Emotes",
    description: "An emote to represent working.",
    animation: "/animations/sillydance.fbx",
  },
  {
    id: 19,
    name: "Thinking",
    price: 1.99,
    type: "emote",
    images: [
      "https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-businessman-is-thinking-and-wondering-character-3d-character-illustration-png-image_9200930.png",
    ],
    category: "Emotes",
    description: "An emote to represent thinking.",
    animation: "/animations/hang.fbx",
  },
  {
    id: 20,
    name: "Kachau",
    price: 1.99,
    type: "emote",
    images: [
      "https://png.pngtree.com/png-vector/20240202/ourmid/pngtree-3d-cartoon-character-with-glasses-png-image_11531995.png",
    ],
    category: "Emotes",
    description: "An emote to represent sneezing.",
    animation: "/animations/moonwalk.fbx",
  },
  {
    id: 21,
    name: "Cute",
    price: 1.99,
    type: "emote",
    images: [
      "https://png.pngtree.com/png-vector/20231015/ourmid/pngtree-3d-character-illustrator-standing-pose-png-image_10161392.png",
    ],
    category: "Emotes",
    description: "An emote to represent being cute.",
    animation: "/animations/sillydance.fbx",
  },
  {
    id: 22,
    name: "Spiderman Meme Song",
    price: 0.99,
    type: "sound",
    images: [
      "https://png.pngtree.com/png-clipart/20230922/original/pngtree-sound-wave-logo-template-vector-icon-red-spectrum-frequency-vector-png-image_12517825.png",
    ],
    category: "Sounds",
    subCategory: ["Song, Meme"],
    description: "The iconic Spiderman meme song.",
    src: "spiderman-meme-song.mp3",
  },
  {
    id: 23,
    name: "Pedro Pedro Pedro",
    price: 0.99,
    type: "sound",
    images: [
      "https://png.pngtree.com/png-clipart/20230815/original/pngtree-sound-wave-vector-icon-digital-abstract-audio-vector-picture-image_10796636.png",
    ],
    category: "Sounds",
    subCategory: ["Song", "Funny"],
    description: "The catchy 'Pedro Pedro Pedro' song.",
    src: "pedro-song.mp3",
  },
  {
    id: 24,
    name: "Rizz",
    price: 0.99,
    type: "sound",
    images: [
      "https://png.pngtree.com/png-clipart/20230815/original/pngtree-sound-wave-vector-icon-digital-abstract-audio-vector-picture-image_10796636.png",
    ],
    category: "Sounds",
    subCategory: ["Song", "Rizz"],
    description: "A collection of smooth 'rizz' sound effects.",
    src: "rizz-sounds.mp3",
  },
  {
    id: 25,
    name: "Anime Wow",
    price: 0.99,
    type: "sound",
    images: [
      "https://png.pngtree.com/png-clipart/20230815/original/pngtree-sound-wave-vector-icon-digital-abstract-audio-vector-picture-image_10796636.png",
    ],
    category: "Sounds",
    subCategory: ["Anime"],
    description: "An exaggerated 'wow' sound effect commonly used in anime.",
    src: "anime-wow.mp3",
  },
  {
    id: 26,
    name: "Dry Fart",
    price: 0.99,
    type: "sound",
    images: [
      "https://png.pngtree.com/png-clipart/20230815/original/pngtree-sound-wave-vector-icon-digital-abstract-audio-vector-picture-image_10796636.png",
    ],
    category: "Sounds",
    subCategory: ["Funny", "Fart"],
    description: "A classic dry fart sound effect.",
    src: "dry-fart.mp3",
  },
];

export default Products;
