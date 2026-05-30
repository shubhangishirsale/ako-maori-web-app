import nationalAnthemAudio from "../assets/audio/waiata/national-anthem.mp3";
import maWaiRaAudio from "../assets/audio/waiata/ma-wai-ra.mp3";
import teArohaAudio from "../assets/audio/waiata/te-aroha.mp3";
import eharaITeMeaAudio from "../assets/audio/waiata/ehara-i-te-mea.mp3";
import eToruNgaMeaAudio from "../assets/audio/waiata/e-toru-nga-mea.mp3";
import kaWaiataAudio from "../assets/audio/waiata/ka-waiata.mp3";
import hutiaTeRitoAudio from "../assets/audio/waiata/hutia-te-rito.mp3";

const waiataData = [
 {
  id: 1,
  title: "National Anthem",
  audio: nationalAnthemAudio,
  maori: [
    "E Ihowa Atua o ngā iwi mātou rā,",
    "Āta whakarongona me aroha noa.",
    "Kia hua ko te pai, kia tau tō atawhai.",
    "Manaakitia mai, Aotearoa."
  ],
  english: [
    "O Lord, God of nations and of us too",
    "Listen to us, cherish us",
    "Let goodness flourish, may your blessings flow.",
    "Defend Aotearoa."
  ],
  timedWords: [
    { word: "E", line: 0, start: 0.75, end: 1.64, type: "maori" },
    { word: "Ihowa", line: 0, start: 1.64, end: 3.24, type: "maori" },
    { word: "Atua", line: 0, start: 3.24, end: 6.16, type: "maori" },
    { word: "o", line: 0, start: 6.16, end: 6.71, type: "maori" },
    { word: "ngā", line: 0, start: 6.71, end: 7.49, type: "maori" },
    { word: "iwi", line: 0, start: 7.49, end: 8.89, type: "maori" },
    { word: "mātou", line: 0, start: 8.89, end: 10.17, type: "maori" },
    { word: "rā,", line: 0, start: 10.17, end: 11.73, type: "maori" },

    { word: "Āta", line: 1, start: 11.73, end: 13.35, type: "maori" },
    { word: "whakarongona", line: 1, start: 13.35, end: 17.09, type: "maori" },
    { word: "me", line: 1, start: 17.09, end: 17.95, type: "maori" },
    { word: "aroha", line: 1, start: 17.95, end: 19.71, type: "maori" },
    { word: "noa.", line: 1, start: 19.71, end: 22.33, type: "maori" },

    { word: "Kia", line: 2, start: 22.33, end: 23.87, type: "maori" },
    { word: "hua", line: 2, start: 23.87, end: 25.13, type: "maori" },
    { word: "ko", line: 2, start: 25.13, end: 25.92, type: "maori" },
    { word: "te", line: 2, start: 25.92, end: 26.40, type: "maori" },
    { word: "pai,", line: 2, start: 26.40, end: 27.82, type: "maori" },
    { word: "kia", line: 2, start: 27.82, end: 28.99, type: "maori" },
    { word: "tau", line: 2, start: 28.99, end: 29.80, type: "maori" },
    { word: "tō", line: 2, start: 29.80, end: 30.36, type: "maori" },
    { word: "atawhai.", line: 2, start: 30.36, end: 33.20, type: "maori" },

    { word: "Manaakitia", line: 3, start: 33.20, end: 37.02, type: "maori" },
    { word: "mai,", line: 3, start: 37.02, end: 38.42, type: "maori" },
    { word: "Aotearoa.", line: 3, start: 38.42, end: 40.20, type: "maori" },

    { word: "O", line: 0, start: 0.75, end: 1.35, type: "english" },
    { word: "Lord,", line: 0, start: 1.35, end: 3.10, type: "english" },
    { word: "God", line: 0, start: 3.10, end: 4.80, type: "english" },
    { word: "of", line: 0, start: 4.80, end: 5.60, type: "english" },
    { word: "nations", line: 0, start: 5.60, end: 7.70, type: "english" },
    { word: "and", line: 0, start: 7.70, end: 8.50, type: "english" },
    { word: "of", line: 0, start: 8.50, end: 9.10, type: "english" },
    { word: "us", line: 0, start: 9.10, end: 10.00, type: "english" },
    { word: "too", line: 0, start: 10.00, end: 11.73, type: "english" },

    { word: "Listen", line: 1, start: 11.73, end: 14.60, type: "english" },
    { word: "to", line: 1, start: 14.60, end: 15.30, type: "english" },
    { word: "us,", line: 1, start: 15.30, end: 17.30, type: "english" },
    { word: "cherish", line: 1, start: 17.30, end: 18.80, type: "english" },
    { word: "us", line: 1, start: 18.80, end: 22.33, type: "english" },

    { word: "Let", line: 2, start: 22.33, end: 23.20, type: "english" },
    { word: "goodness", line: 2, start: 23.20, end: 25.10, type: "english" },
    { word: "flourish,", line: 2, start: 25.10, end: 27.20, type: "english" },
    { word: "may", line: 2, start: 27.20, end: 28.00, type: "english" },
    { word: "your", line: 2, start: 28.00, end: 28.90, type: "english" },
    { word: "blessings", line: 2, start: 28.90, end: 30.90, type: "english" },
    { word: "flow.", line: 2, start: 30.90, end: 33.20, type: "english" },

    { word: "Defend", line: 3, start: 33.20, end: 36.80, type: "english" },
    { word: "Aotearoa.", line: 3, start: 36.80, end: 40.20, type: "english" }
  ]
},
  {
  id: 2,
  title: "Mā wai rā",
  audio: maWaiRaAudio,
  maori: [
    "Mā wai rā e taurima te marae i waho nei?",
    "Mā te tika",
    "Mā te pono",
    "Me te aroha e."
  ],
  english: [
    "Who will take responsibility on the marae now?",
    "Through the correct way",
    "Through truth",
    "Through love (it will be done)."
  ],
  timedWords: [
    { word: "Mā", line: 0, start: 0.55, end: 1.88, type: "maori" },
    { word: "wai", line: 0, start: 1.88, end: 2.75, type: "maori" },
    { word: "rā", line: 0, start: 2.75, end: 4.88, type: "maori" },
    { word: "e", line: 0, start: 3.88, end: 6.36, type: "maori" },
    { word: "taurima", line: 0, start: 6.36, end: 8.90, type: "maori" },
    { word: "te", line: 0, start: 8.90, end: 10.37, type: "maori" },
    { word: "marae", line: 0, start: 10.37, end: 12.35, type: "maori" },
    { word: "i", line: 0, start: 12.35, end: 13.00, type: "maori" },
    { word: "waho", line: 0, start: 13.00, end: 14.88, type: "maori" },
    { word: "nei?", line: 0, start: 14.88, end: 16.42, type: "maori" },

    { word: "Mā", line: 1, start: 16.42, end: 18.75, type: "maori" },
    { word: "te", line: 1, start: 18.75, end: 19.63, type: "maori" },
    { word: "tika", line: 1, start: 19.63, end: 21.02, type: "maori" },

    { word: "Mā", line: 2, start: 21.02, end: 23.17, type: "maori" },
    { word: "te", line: 2, start: 23.17, end: 24.52, type: "maori" },
    { word: "pono", line: 2, start: 24.52, end: 25.96, type: "maori" },

    { word: "Me", line: 3, start: 25.96, end: 27.56, type: "maori" },
    { word: "te", line: 3, start: 27.56, end: 28.60, type: "maori" },
    { word: "aroha", line: 3, start: 28.60, end: 29.87, type: "maori" },
    { word: "e.", line: 3, start: 29.87, end: 31.20, type: "maori" },

    { word: "Who", line: 0, start: 0.95, end: 2.40, type: "english" },
    { word: "will", line: 0, start: 2.40, end: 3.70, type: "english" },
    { word: "take", line: 0, start: 3.70, end: 5.20, type: "english" },
    { word: "responsibility", line: 0, start: 5.20, end: 9.80, type: "english" },
    { word: "on", line: 0, start: 9.80, end: 11.30, type: "english" },
    { word: "the", line: 0, start: 11.30, end: 12.40, type: "english" },
    { word: "marae", line: 0, start: 12.40, end: 14.50, type: "english" },
    { word: "now?", line: 0, start: 14.50, end: 17.42, type: "english" },

    { word: "Through", line: 1, start: 17.42, end: 18.90, type: "english" },
    { word: "the", line: 1, start: 18.90, end: 19.40, type: "english" },
    { word: "correct", line: 1, start: 19.40, end: 20.40, type: "english" },
    { word: "way", line: 1, start: 20.40, end: 21.02, type: "english" },

    { word: "Through", line: 2, start: 21.02, end: 23.40, type: "english" },
    { word: "truth", line: 2, start: 23.40, end: 25.96, type: "english" },

    { word: "Through", line: 3, start: 25.96, end: 27.80, type: "english" },
    { word: "love", line: 3, start: 27.80, end: 29.10, type: "english" },
    { word: "(it", line: 3, start: 29.10, end: 29.70, type: "english" },
    { word: "will", line: 3, start: 29.70, end: 30.20, type: "english" },
    { word: "be", line: 3, start: 30.20, end: 30.65, type: "english" },
    { word: "done).", line: 3, start: 30.65, end: 31.20, type: "english" }
  ]
},
  {
  id: 3,
  title: "Te Aroha",
  audio: teArohaAudio,
  maori: [
    "Te aroha",
    "Te whakapono",
    "Te rangimarie",
    "Tātou, tātou e"
  ],
  english: [
    "Love",
    "Faith",
    "Peace",
    "For us all"
  ],
  timedWords: [
  { word: "Te", line: 0, start: 0.0, end: 1.2, type: "maori" },
  { word: "aroha", line: 0, start: 1.2, end: 4.0, type: "maori" },

  { word: "Te", line: 1, start: 4.0, end: 5.2, type: "maori" },
  { word: "whakapono", line: 1, start: 5.2, end: 8.5, type: "maori" },

  { word: "Te", line: 2, start: 8.5, end: 9.7, type: "maori" },
  { word: "rangimarie", line: 2, start: 9.7, end: 13.5, type: "maori" },

  { word: "Tātou,", line: 3, start: 13.5, end: 15.5, type: "maori" },
  { word: "tātou", line: 3, start: 15.5, end: 17.5, type: "maori" },
  { word: "e", line: 3, start: 17.5, end: 20.0, type: "maori" },

  { word: "Love", line: 0, start: 0.0, end: 4.0, type: "english" },
  { word: "Faith", line: 1, start: 4.0, end: 8.5, type: "english" },
  { word: "Peace", line: 2, start: 8.5, end: 13.5, type: "english" },
  { word: "For", line: 3, start: 13.5, end: 15.5, type: "english" },
  { word: "us", line: 3, start: 15.5, end: 17.5, type: "english" },
  { word: "all", line: 3, start: 17.5, end: 20.0, type: "english" }
]
},
  {
  id: 4,
  title: "Ehara i te mea",
  audio: eharaITeMeaAudio,
  maori: [
    "Ehara i te mea",
    "Nō ināianei te aroha",
    "Nō ngā tūpuna",
    "I tuku iho, i tuku iho"
  ],
  english: [
    "This is not a new thing,",
    "Love",
    "It is handed down from our ancestors",
    ""
  ],
  timedWords: [
    { word: "Ehara", line: 0, start: 1.28, end: 2.19, type: "maori" },
    { word: "i", line: 0, start: 2.19, end: 2.98, type: "maori" },
    { word: "te", line: 0, start: 2.98, end: 3.57, type: "maori" },
    { word: "mea", line: 0, start: 3.57, end: 4.55, type: "maori" },

    { word: "Nō", line: 1, start: 4.55, end: 5.02, type: "maori" },
    { word: "ināianei", line: 1, start: 5.02, end: 5.60, type: "maori" },
    { word: "te", line: 1, start: 5.60, end: 6.25, type: "maori" },
    { word: "aroha", line: 1, start: 6.25, end: 8.83, type: "maori" },

    { word: "Nō", line: 2, start: 8.83, end: 9.40, type: "maori" },
    { word: "ngā", line: 2, start: 9.40, end: 10.96, type: "maori" },
    { word: "tūpuna", line: 2, start: 10.96, end: 12.30, type: "maori" },

    { word: "I", line: 3, start: 12.30, end: 12.52, type: "maori" },
    { word: "tuku", line: 3, start: 12.52, end: 13.26, type: "maori" },
    { word: "iho,", line: 3, start: 13.26, end: 14.43, type: "maori" },
    { word: "i", line: 3, start: 14.43, end: 14.93, type: "maori" },
    { word: "tuku", line: 3, start: 14.93, end: 15.74, type: "maori" },
    { word: "iho", line: 3, start: 15.74, end: 16.40, type: "maori" },

    { word: "This", line: 0, start: 1.28, end: 1.95, type: "english" },
    { word: "is", line: 0, start: 1.95, end: 2.40, type: "english" },
    { word: "not", line: 0, start: 2.40, end: 2.95, type: "english" },
    { word: "a", line: 0, start: 2.95, end: 3.20, type: "english" },
    { word: "new", line: 0, start: 3.20, end: 3.75, type: "english" },
    { word: "thing,", line: 0, start: 3.75, end: 4.55, type: "english" },

    { word: "Love", line: 1, start: 4.55, end: 8.83, type: "english" },

    { word: "It", line: 2, start: 8.83, end: 9.30, type: "english" },
    { word: "is", line: 2, start: 9.30, end: 9.70, type: "english" },
    { word: "handed", line: 2, start: 9.70, end: 10.45, type: "english" },
    { word: "down", line: 2, start: 10.45, end: 10.95, type: "english" },
    { word: "from", line: 2, start: 10.95, end: 11.35, type: "english" },
    { word: "our", line: 2, start: 11.35, end: 11.70, type: "english" },
    { word: "ancestors", line: 2, start: 11.70, end: 12.30, type: "english" }
  ]
},
  {
  id: 5,
  title: "E toru ngā mea",
  audio: eToruNgaMeaAudio,
  maori: [
    "E toru ngā mea",
    "Ngā mea nunui",
    "E kī ana te paipera",
    "Whakapono",
    "Tumanako",
    "Ko te mea nui",
    "Ko te aroha"
  ],
  english: [
    "There are three things",
    "Three great things",
    "As purported in the Bible",
    "Faith",
    "Hope",
    "But the greatest of these",
    "Is love"
  ],
  timedWords: [
    { word: "E", line: 0, start: 0.76, end: 1.19, type: "maori" },
    { word: "toru", line: 0, start: 1.19, end: 1.68, type: "maori" },
    { word: "ngā", line: 0, start: 1.68, end: 2.11, type: "maori" },
    { word: "mea", line: 0, start: 2.11, end: 4.38, type: "maori" },

    { word: "Ngā", line: 1, start: 4.38, end: 4.82, type: "maori" },
    { word: "mea", line: 1, start: 4.82, end: 5.25, type: "maori" },
    { word: "nunui", line: 1, start: 5.25, end: 8.48, type: "maori" },

    { word: "E", line: 2, start: 8.48, end: 8.77, type: "maori" },
    { word: "kī", line: 2, start: 8.77, end: 9.23, type: "maori" },
    { word: "ana", line: 2, start: 9.23, end: 12.35, type: "maori" },
    { word: "te", line: 2, start: 12.35, end: 12.77, type: "maori" },
    { word: "paipera", line: 2, start: 12.77, end: 16.07, type: "maori" },

    { word: "Whakapono", line: 3, start: 16.07, end: 19.58, type: "maori" },

    { word: "Tumanako", line: 4, start: 19.58, end: 23.46, type: "maori" },

    { word: "Ko", line: 5, start: 23.46, end: 23.94, type: "maori" },
    { word: "te", line: 5, start: 23.94, end: 24.45, type: "maori" },
    { word: "mea", line: 5, start: 24.45, end: 25.00, type: "maori" },
    { word: "nui", line: 5, start: 25.00, end: 27.15, type: "maori" },

    { word: "Ko", line: 6, start: 27.15, end: 27.45, type: "maori" },
    { word: "te", line: 6, start: 27.45, end: 27.93, type: "maori" },
    { word: "aroha", line: 6, start: 27.93, end: 29.10, type: "maori" },

    { word: "There", line: 0, start: 0.76, end: 1.70, type: "english" },
    { word: "are", line: 0, start: 1.70, end: 2.25, type: "english" },
    { word: "three", line: 0, start: 2.25, end: 3.10, type: "english" },
    { word: "things", line: 0, start: 3.10, end: 4.38, type: "english" },

    { word: "Three", line: 1, start: 4.38, end: 5.30, type: "english" },
    { word: "great", line: 1, start: 5.30, end: 6.40, type: "english" },
    { word: "things", line: 1, start: 6.40, end: 8.48, type: "english" },

    { word: "As", line: 2, start: 8.48, end: 9.20, type: "english" },
    { word: "purported", line: 2, start: 9.20, end: 11.20, type: "english" },
    { word: "in", line: 2, start: 11.20, end: 12.10, type: "english" },
    { word: "the", line: 2, start: 12.10, end: 12.70, type: "english" },
    { word: "Bible", line: 2, start: 12.70, end: 16.07, type: "english" },

    { word: "Faith", line: 3, start: 16.07, end: 19.58, type: "english" },

    { word: "Hope", line: 4, start: 19.58, end: 23.46, type: "english" },

    { word: "But", line: 5, start: 23.46, end: 24.10, type: "english" },
    { word: "the", line: 5, start: 24.10, end: 24.50, type: "english" },
    { word: "greatest", line: 5, start: 24.50, end: 25.55, type: "english" },
    { word: "of", line: 5, start: 25.55, end: 26.10, type: "english" },
    { word: "these", line: 5, start: 26.10, end: 27.15, type: "english" },

    { word: "Is", line: 6, start: 27.15, end: 27.75, type: "english" },
    { word: "love", line: 6, start: 27.75, end: 29.10, type: "english" }
  ]
},
  {
  id: 6,
  title: "Ka Waiata",
  audio: kaWaiataAudio,
  maori: [
    "Ka waiata ki a Maria",
    "Hine i whakaae",
    "Whakameatia mai",
    "Te whare takata",
    "Hine pūrotu",
    "Hine ngākau",
    "Hine rangimarie",
    "Ko te whaea",
    "Ko whaea o te Ao"
  ],
  english: [
    "Let us sing to Mary,",
    "The girl who said 'Yes'",
    "let it be as you say, that I become",
    "the house of mankind.",
    "A simple girl",
    "A strong-hearted girl",
    "A quiet girl.",
    "The Mother of Jesus,",
    "and the mother of the whole world"
  ],
  timedWords: [
    { word: "Ka", line: 0, start: 1.96, end: 2.55, type: "maori" },
    { word: "waiata", line: 0, start: 2.55, end: 5.21, type: "maori" },
    { word: "ki", line: 0, start: 5.21, end: 5.75, type: "maori" },
    { word: "a", line: 0, start: 5.75, end: 6.13, type: "maori" },
    { word: "Maria", line: 0, start: 6.13, end: 9.76, type: "maori" },

    { word: "Hine", line: 1, start: 9.76, end: 10.25, type: "maori" },
    { word: "i", line: 1, start: 10.25, end: 11.33, type: "maori" },
    { word: "whakaae", line: 1, start: 11.33, end: 13.95, type: "maori" },

    { word: "Whakameatia", line: 2, start: 13.95, end: 15.75, type: "maori" },
    { word: "mai", line: 2, start: 15.75, end: 17.28, type: "maori" },

    { word: "Te", line: 3, start: 17.28, end: 17.87, type: "maori" },
    { word: "whare", line: 3, start: 17.87, end: 19.54, type: "maori" },
    { word: "takata", line: 3, start: 19.54, end: 25.65, type: "maori" },

    { word: "Hine", line: 4, start: 25.65, end: 26.26, type: "maori" },
    { word: "pūrotu", line: 4, start: 26.26, end: 28.58, type: "maori" },

    { word: "Hine", line: 5, start: 28.58, end: 29.13, type: "maori" },
    { word: "ngākau", line: 5, start: 29.13, end: 31.32, type: "maori" },

    { word: "Hine", line: 6, start: 31.32, end: 31.89, type: "maori" },
    { word: "rangimarie", line: 6, start: 31.89, end: 37.24, type: "maori" },

    { word: "Ko", line: 7, start: 37.24, end: 37.68, type: "maori" },
    { word: "te", line: 7, start: 37.68, end: 38.31, type: "maori" },
    { word: "whaea", line: 7, start: 38.31, end: 39.98, type: "maori" },

    { word: "Ko", line: 8, start: 39.98, end: 40.53, type: "maori" },
    { word: "whaea", line: 8, start: 40.53, end: 43.07, type: "maori" },
    { word: "o", line: 8, start: 43.07, end: 43.41, type: "maori" },
    { word: "te", line: 8, start: 43.41, end: 44.13, type: "maori" },
    { word: "Ao", line: 8, start: 44.13, end: 46.00, type: "maori" },

    { word: "Let", line: 0, start: 1.96, end: 2.60, type: "english" },
    { word: "us", line: 0, start: 2.60, end: 3.20, type: "english" },
    { word: "sing", line: 0, start: 3.20, end: 4.20, type: "english" },
    { word: "to", line: 0, start: 4.20, end: 4.90, type: "english" },
    { word: "Mary,", line: 0, start: 4.90, end: 9.76, type: "english" },

    { word: "The", line: 1, start: 9.76, end: 10.40, type: "english" },
    { word: "girl", line: 1, start: 10.40, end: 11.10, type: "english" },
    { word: "who", line: 1, start: 11.10, end: 11.70, type: "english" },
    { word: "said", line: 1, start: 11.70, end: 12.40, type: "english" },
    { word: "'Yes'", line: 1, start: 12.40, end: 13.95, type: "english" },

    { word: "let", line: 2, start: 13.95, end: 14.50, type: "english" },
    { word: "it", line: 2, start: 14.50, end: 14.90, type: "english" },
    { word: "be", line: 2, start: 14.90, end: 15.35, type: "english" },
    { word: "as", line: 2, start: 15.35, end: 15.75, type: "english" },
    { word: "you", line: 2, start: 15.75, end: 16.20, type: "english" },
    { word: "say,", line: 2, start: 16.20, end: 16.80, type: "english" },
    { word: "that", line: 2, start: 16.80, end: 17.05, type: "english" },
    { word: "I", line: 2, start: 17.05, end: 17.18, type: "english" },
    { word: "become", line: 2, start: 17.18, end: 17.28, type: "english" },

    { word: "the", line: 3, start: 17.28, end: 17.90, type: "english" },
    { word: "house", line: 3, start: 17.90, end: 18.80, type: "english" },
    { word: "of", line: 3, start: 18.80, end: 19.30, type: "english" },
    { word: "mankind.", line: 3, start: 19.30, end: 25.65, type: "english" },

    { word: "A", line: 4, start: 25.65, end: 26.00, type: "english" },
    { word: "simple", line: 4, start: 26.00, end: 26.90, type: "english" },
    { word: "girl", line: 4, start: 26.90, end: 28.58, type: "english" },

    { word: "A", line: 5, start: 28.58, end: 28.95, type: "english" },
    { word: "strong-hearted", line: 5, start: 28.95, end: 30.40, type: "english" },
    { word: "girl", line: 5, start: 30.40, end: 31.32, type: "english" },

    { word: "A", line: 6, start: 31.32, end: 31.70, type: "english" },
    { word: "quiet", line: 6, start: 31.70, end: 33.40, type: "english" },
    { word: "girl.", line: 6, start: 33.40, end: 37.24, type: "english" },

    { word: "The", line: 7, start: 37.24, end: 37.70, type: "english" },
    { word: "Mother", line: 7, start: 37.70, end: 38.40, type: "english" },
    { word: "of", line: 7, start: 38.40, end: 38.90, type: "english" },
    { word: "Jesus,", line: 7, start: 38.90, end: 39.98, type: "english" },

    { word: "and", line: 8, start: 39.98, end: 40.40, type: "english" },
    { word: "the", line: 8, start: 40.40, end: 40.90, type: "english" },
    { word: "mother", line: 8, start: 40.90, end: 42.10, type: "english" },
    { word: "of", line: 8, start: 42.10, end: 42.50, type: "english" },
    { word: "the", line: 8, start: 42.50, end: 42.90, type: "english" },
    { word: "whole", line: 8, start: 42.90, end: 43.60, type: "english" },
    { word: "world", line: 8, start: 43.60, end: 46.00, type: "english" }
  ]
},
  {
  id: 7,
  title: "Hutia te rito",
  audio: hutiaTeRitoAudio,
  maori: [
    "Hutia te rito, hutia te rito o te harakeke",
    "Kei hea te kōmako e kō?",
    "Kī mai ki ahau, he aha te mea nui, he aha te mea nui o te Ao?",
    "Māku e kī atu",
    "He tangata, he tangata, he tangata, hei!"
  ],
  english: [
    "If you pluck the heart from the flax bush, where will the bellbird perch?",
    "Where is the bellbird that sings?",
    "Tell me, what is the most important thing in the world?",
    "I will tell you.",
    "It is people, people, people!"
  ],
  timedWords: [
    { word: "Hutia", line: 0, start: 0.97, end: 2.03, type: "maori" },
    { word: "te", line: 0, start: 2.03, end: 3.46, type: "maori" },
    { word: "rito,", line: 0, start: 3.46, end: 6.80, type: "maori" },
    { word: "hutia", line: 0, start: 6.80, end: 8.29, type: "maori" },
    { word: "te", line: 0, start: 8.29, end: 9.09, type: "maori" },
    { word: "rito", line: 0, start: 9.09, end: 9.78, type: "maori" },
    { word: "o", line: 0, start: 9.78, end: 10.23, type: "maori" },
    { word: "te", line: 0, start: 10.23, end: 11.17, type: "maori" },
    { word: "harakeke", line: 0, start: 11.17, end: 13.38, type: "maori" },

    { word: "Kei", line: 1, start: 13.38, end: 14.29, type: "maori" },
    { word: "hea", line: 1, start: 14.29, end: 14.92, type: "maori" },
    { word: "te", line: 1, start: 14.92, end: 15.49, type: "maori" },
    { word: "kōmako", line: 1, start: 15.49, end: 16.37, type: "maori" },
    { word: "e", line: 1, start: 16.37, end: 16.83, type: "maori" },
    { word: "kō?", line: 1, start: 16.83, end: 19.68, type: "maori" },

    { word: "Kī", line: 2, start: 19.68, end: 20.49, type: "maori" },
    { word: "mai", line: 2, start: 20.49, end: 21.31, type: "maori" },
    { word: "ki", line: 2, start: 21.31, end: 22.16, type: "maori" },
    { word: "ahau,", line: 2, start: 22.16, end: 26.11, type: "maori" },
    { word: "he", line: 2, start: 26.11, end: 27.20, type: "maori" },
    { word: "aha", line: 2, start: 27.20, end: 27.75, type: "maori" },
    { word: "te", line: 2, start: 27.75, end: 28.63, type: "maori" },
    { word: "mea", line: 2, start: 28.63, end: 29.35, type: "maori" },
    { word: "nui,", line: 2, start: 29.35, end: 32.32, type: "maori" },
    { word: "he", line: 2, start: 32.32, end: 33.06, type: "maori" },
    { word: "aha", line: 2, start: 33.06, end: 33.85, type: "maori" },
    { word: "te", line: 2, start: 33.85, end: 34.49, type: "maori" },
    { word: "mea", line: 2, start: 34.49, end: 34.95, type: "maori" },
    { word: "nui", line: 2, start: 34.95, end: 35.87, type: "maori" },
    { word: "o", line: 2, start: 35.87, end: 36.49, type: "maori" },
    { word: "te", line: 2, start: 36.49, end: 37.03, type: "maori" },
    { word: "Ao?", line: 2, start: 37.03, end: 38.75, type: "maori" },

    { word: "Māku", line: 3, start: 38.75, end: 39.88, type: "maori" },
    { word: "e", line: 3, start: 39.88, end: 40.45, type: "maori" },
    { word: "kī", line: 3, start: 40.45, end: 41.01, type: "maori" },
    { word: "atu", line: 3, start: 41.01, end: 44.86, type: "maori" },

    { word: "He", line: 4, start: 44.86, end: 45.59, type: "maori" },
    { word: "tangata,", line: 4, start: 45.59, end: 46.48, type: "maori" },
    { word: "he", line: 4, start: 46.48, end: 47.12, type: "maori" },
    { word: "tangata,", line: 4, start: 47.12, end: 47.96, type: "maori" },
    { word: "he", line: 4, start: 47.96, end: 48.72, type: "maori" },
    { word: "tangata,", line: 4, start: 48.72, end: 49.57, type: "maori" },
    { word: "hei!", line: 4, start: 49.57, end: 50.80, type: "maori" },

    { word: "If", line: 0, start: 0.97, end: 1.60, type: "english" },
    { word: "you", line: 0, start: 1.60, end: 2.20, type: "english" },
    { word: "pluck", line: 0, start: 2.20, end: 2.95, type: "english" },
    { word: "the", line: 0, start: 2.95, end: 3.45, type: "english" },
    { word: "heart", line: 0, start: 3.45, end: 4.35, type: "english" },
    { word: "from", line: 0, start: 4.35, end: 5.15, type: "english" },
    { word: "the", line: 0, start: 5.15, end: 5.65, type: "english" },
    { word: "flax", line: 0, start: 5.65, end: 6.45, type: "english" },
    { word: "bush,", line: 0, start: 6.45, end: 13.38, type: "english" },

    { word: "Where", line: 1, start: 13.38, end: 14.20, type: "english" },
    { word: "is", line: 1, start: 14.20, end: 14.70, type: "english" },
    { word: "the", line: 1, start: 14.70, end: 15.10, type: "english" },
    { word: "bellbird", line: 1, start: 15.10, end: 16.20, type: "english" },
    { word: "that", line: 1, start: 16.20, end: 16.80, type: "english" },
    { word: "sings?", line: 1, start: 16.80, end: 19.68, type: "english" },

    { word: "Tell", line: 2, start: 19.68, end: 20.70, type: "english" },
    { word: "me,", line: 2, start: 20.70, end: 21.70, type: "english" },
    { word: "what", line: 2, start: 21.70, end: 23.40, type: "english" },
    { word: "is", line: 2, start: 23.40, end: 24.50, type: "english" },
    { word: "the", line: 2, start: 24.50, end: 25.60, type: "english" },
    { word: "most", line: 2, start: 25.60, end: 27.10, type: "english" },
    { word: "important", line: 2, start: 27.10, end: 29.20, type: "english" },
    { word: "thing", line: 2, start: 29.20, end: 31.20, type: "english" },
    { word: "in", line: 2, start: 31.20, end: 32.50, type: "english" },
    { word: "the", line: 2, start: 32.50, end: 34.20, type: "english" },
    { word: "world?", line: 2, start: 34.20, end: 38.75, type: "english" },

    { word: "I", line: 3, start: 38.75, end: 39.60, type: "english" },
    { word: "will", line: 3, start: 39.60, end: 40.20, type: "english" },
    { word: "tell", line: 3, start: 40.20, end: 40.70, type: "english" },
    { word: "you.", line: 3, start: 40.70, end: 44.86, type: "english" },

    { word: "It", line: 4, start: 44.86, end: 45.70, type: "english" },
    { word: "is", line: 4, start: 45.70, end: 46.50, type: "english" },
    { word: "people,", line: 4, start: 46.50, end: 47.35, type: "english" },
    { word: "people,", line: 4, start: 47.35, end: 48.30, type: "english" },
    { word: "people!", line: 4, start: 48.30, end: 50.80, type: "english" }
  ]
}
];

export default waiataData;

