import karakiaTimatangaAudio from "../assets/audio/prayers/karakia-timatanga.mp3";
import traditionalKarakiaOpeningAudio from "../assets/audio/prayers/traditional-karakia-opening.mp3";
import karakiaWhakamutungaAudio from "../assets/audio/prayers/karakia-whakamutunga.mp3";
import traditionalKarakiaFoodAudio from "../assets/audio/prayers/traditional-karakia-food.mp3";
import karakiaMoTeKaiAudio from "../assets/audio/prayers/karakia-mo-te-kai.mp3";

const prayersData = [
  {
  id: 1,
  title: "Karakia Timatanga (To open a meeting)",
  subtitle: "Karakia",
  audio: karakiaTimatangaAudio,
  maori: [
    "He hōnore, he korōria ki te Atua",
    "He maungārongo ki te whenua",
    "He whakaaro pai ki ngā tāngata katoa",
    "Hangā e te Atua he ngākau hou",
    "Ki roto, ki tēnā, ki tēnā o mātou",
    "Whakatōngia tō wairua tapu",
    "Hei awhina, hei tohutohu i a mātou",
    "Hei ako hoki i ngā mahi mō tēnei rā",
    "Amine"
  ],
  english: [
    "Honour and glory to God",
    "Peace on Earth",
    "Goodwill to all people",
    "Lord, develop a new heart",
    "Inside all of us",
    "Instil in us your sacred spirit",
    "Help us, guide us",
    "In all the things we need to learn today",
    "Amen"
  ],
  timedWords: [
    { word: "He", line: 0, start: 0.67, end: 1.15, type: "maori" },
    { word: "hōnore,", line: 0, start: 1.15, end: 1.82, type: "maori" },
    { word: "he", line: 0, start: 1.82, end: 2.20, type: "maori" },
    { word: "korōria", line: 0, start: 2.20, end: 2.73, type: "maori" },
    { word: "ki", line: 0, start: 2.73, end: 3.05, type: "maori" },
    { word: "te", line: 0, start: 3.05, end: 3.35, type: "maori" },
    { word: "Atua", line: 0, start: 3.35, end: 3.95, type: "maori" },

    { word: "He", line: 1, start: 3.95, end: 4.30, type: "maori" },
    { word: "maungārongo", line: 1, start: 4.30, end: 4.53, type: "maori" },
    { word: "ki", line: 1, start: 4.53, end: 5.07, type: "maori" },
    { word: "te", line: 1, start: 5.07, end: 5.39, type: "maori" },
    { word: "whenua", line: 1, start: 5.39, end: 5.96, type: "maori" },

    { word: "He", line: 2, start: 5.96, end: 6.41, type: "maori" },
    { word: "whakaaro", line: 2, start: 6.41, end: 6.87, type: "maori" },
    { word: "pai", line: 2, start: 6.87, end: 7.06, type: "maori" },
    { word: "ki", line: 2, start: 7.06, end: 7.27, type: "maori" },
    { word: "ngā", line: 2, start: 7.27, end: 7.49, type: "maori" },
    { word: "tāngata", line: 2, start: 7.49, end: 7.93, type: "maori" },
    { word: "katoa", line: 2, start: 7.93, end: 9.02, type: "maori" },

    { word: "Hangā", line: 3, start: 9.02, end: 9.48, type: "maori" },
    { word: "e", line: 3, start: 9.48, end: 9.80, type: "maori" },
    { word: "te", line: 3, start: 9.80, end: 10.18, type: "maori" },
    { word: "Atua", line: 3, start: 10.18, end: 10.39, type: "maori" },
    { word: "he", line: 3, start: 10.39, end: 10.69, type: "maori" },
    { word: "ngākau", line: 3, start: 10.69, end: 10.99, type: "maori" },
    { word: "hou", line: 3, start: 10.99, end: 12.12, type: "maori" },

    { word: "Ki", line: 4, start: 12.12, end: 12.63, type: "maori" },
    { word: "roto,", line: 4, start: 12.63, end: 13.08, type: "maori" },
    { word: "ki", line: 4, start: 13.08, end: 13.39, type: "maori" },
    { word: "tēnā,", line: 4, start: 13.39, end: 13.88, type: "maori" },
    { word: "ki", line: 4, start: 13.88, end: 14.37, type: "maori" },
    { word: "tēnā", line: 4, start: 14.37, end: 14.67, type: "maori" },
    { word: "o", line: 4, start: 14.67, end: 14.93, type: "maori" },
    { word: "mātou", line: 4, start: 14.93, end: 16.19, type: "maori" },

    { word: "Whakatōngia", line: 5, start: 16.19, end: 16.88, type: "maori" },
    { word: "tō", line: 5, start: 16.88, end: 17.35, type: "maori" },
    { word: "wairua", line: 5, start: 17.35, end: 17.57, type: "maori" },
    { word: "tapu", line: 5, start: 17.57, end: 18.56, type: "maori" },

    { word: "Hei", line: 6, start: 18.56, end: 18.92, type: "maori" },
    { word: "awhina,", line: 6, start: 18.92, end: 19.74, type: "maori" },
    { word: "hei", line: 6, start: 19.74, end: 20.05, type: "maori" },
    { word: "tohutohu", line: 6, start: 20.05, end: 20.71, type: "maori" },
    { word: "i", line: 6, start: 20.71, end: 20.94, type: "maori" },
    { word: "a", line: 6, start: 20.94, end: 21.16, type: "maori" },
    { word: "mātou", line: 6, start: 21.16, end: 21.78, type: "maori" },

    { word: "Hei", line: 7, start: 21.78, end: 22.03, type: "maori" },
    { word: "ako", line: 7, start: 22.03, end: 22.25, type: "maori" },
    { word: "hoki", line: 7, start: 22.25, end: 22.77, type: "maori" },
    { word: "i", line: 7, start: 22.77, end: 23.03, type: "maori" },
    { word: "ngā", line: 7, start: 23.03, end: 23.27, type: "maori" },
    { word: "mahi", line: 7, start: 23.27, end: 23.48, type: "maori" },
    { word: "mō", line: 7, start: 23.48, end: 23.70, type: "maori" },
    { word: "tēnei", line: 7, start: 23.70, end: 23.93, type: "maori" },
    { word: "rā", line: 7, start: 23.93, end: 24.23, type: "maori" },

    { word: "Amine", line: 8, start: 24.23, end: 25.00, type: "maori" },

    { word: "Honour", line: 0, start: 0.67, end: 1.45, type: "english" },
    { word: "and", line: 0, start: 1.45, end: 1.95, type: "english" },
    { word: "glory", line: 0, start: 1.95, end: 2.70, type: "english" },
    { word: "to", line: 0, start: 2.70, end: 3.00, type: "english" },
    { word: "God", line: 0, start: 3.00, end: 3.95, type: "english" },

    { word: "Peace", line: 1, start: 3.95, end: 4.70, type: "english" },
    { word: "on", line: 1, start: 4.70, end: 5.00, type: "english" },
    { word: "Earth", line: 1, start: 5.00, end: 5.96, type: "english" },

    { word: "Goodwill", line: 2, start: 5.96, end: 6.90, type: "english" },
    { word: "to", line: 2, start: 6.90, end: 7.15, type: "english" },
    { word: "all", line: 2, start: 7.15, end: 7.45, type: "english" },
    { word: "people", line: 2, start: 7.45, end: 9.02, type: "english" },

    { word: "Lord,", line: 3, start: 9.02, end: 9.80, type: "english" },
    { word: "develop", line: 3, start: 9.80, end: 10.55, type: "english" },
    { word: "a", line: 3, start: 10.55, end: 10.75, type: "english" },
    { word: "new", line: 3, start: 10.75, end: 11.15, type: "english" },
    { word: "heart", line: 3, start: 11.15, end: 12.12, type: "english" },

    { word: "Inside", line: 4, start: 12.12, end: 13.05, type: "english" },
    { word: "all", line: 4, start: 13.05, end: 13.45, type: "english" },
    { word: "of", line: 4, start: 13.45, end: 13.75, type: "english" },
    { word: "us", line: 4, start: 13.75, end: 16.19, type: "english" },

    { word: "Instil", line: 5, start: 16.19, end: 16.95, type: "english" },
    { word: "in", line: 5, start: 16.95, end: 17.15, type: "english" },
    { word: "us", line: 5, start: 17.15, end: 17.40, type: "english" },
    { word: "your", line: 5, start: 17.40, end: 17.70, type: "english" },
    { word: "sacred", line: 5, start: 17.70, end: 18.10, type: "english" },
    { word: "spirit", line: 5, start: 18.10, end: 18.56, type: "english" },

    { word: "Help", line: 6, start: 18.56, end: 19.15, type: "english" },
    { word: "us,", line: 6, start: 19.15, end: 19.60, type: "english" },
    { word: "guide", line: 6, start: 19.60, end: 20.25, type: "english" },
    { word: "us", line: 6, start: 20.25, end: 21.78, type: "english" },

    { word: "In", line: 7, start: 21.78, end: 22.10, type: "english" },
    { word: "all", line: 7, start: 22.10, end: 22.35, type: "english" },
    { word: "the", line: 7, start: 22.35, end: 22.65, type: "english" },
    { word: "things", line: 7, start: 22.65, end: 23.10, type: "english" },
    { word: "we", line: 7, start: 23.10, end: 23.30, type: "english" },
    { word: "need", line: 7, start: 23.30, end: 23.55, type: "english" },
    { word: "to", line: 7, start: 23.55, end: 23.72, type: "english" },
    { word: "learn", line: 7, start: 23.72, end: 23.95, type: "english" },
    { word: "today", line: 7, start: 23.95, end: 24.23, type: "english" },

    { word: "Amen", line: 8, start: 24.23, end: 25.00, type: "english" }
  ]
},
  {
  id: 2,
  title: "Traditional karakia",
  subtitle: "",
  audio: traditionalKarakiaOpeningAudio,
  maori: [
    "Whakataka te hau ki te uru",
    "Whakataka te hau ki te tonga",
    "Kia mākinakina ki uta",
    "Kia mātaratara ki tai",
    "E hī ake ana te atakura",
    "He tio, he huka, he hau hū",
    "Tīhei mauri ora!"
  ],
  english: [
    "Cease the winds from the west",
    "Cease the winds from the south",
    "Let the breeze blow over the land",
    "Let the breeze blow over the ocean",
    "Let the red-tipped dawn come with a sharpened air.",
    "A touch of frost, a promise of a glorious day.",
    ""
  ],
  timedWords: [
    { word: "Whakataka", line: 0, start: 0.00, end: 0.94, type: "maori" },
    { word: "te", line: 0, start: 0.94, end: 1.14, type: "maori" },
    { word: "hau", line: 0, start: 1.14, end: 1.29, type: "maori" },
    { word: "ki", line: 0, start: 1.29, end: 1.52, type: "maori" },
    { word: "te", line: 0, start: 1.52, end: 1.98, type: "maori" },
    { word: "uru", line: 0, start: 1.98, end: 3.04, type: "maori" },

    { word: "Whakataka", line: 1, start: 3.04, end: 3.22, type: "maori" },
    { word: "te", line: 1, start: 3.22, end: 3.40, type: "maori" },
    { word: "hau", line: 1, start: 3.40, end: 3.63, type: "maori" },
    { word: "ki", line: 1, start: 3.63, end: 3.89, type: "maori" },
    { word: "te", line: 1, start: 3.89, end: 4.11, type: "maori" },
    { word: "tonga", line: 1, start: 4.11, end: 5.16, type: "maori" },

    { word: "Kia", line: 2, start: 5.16, end: 5.34, type: "maori" },
    { word: "mākinakina", line: 2, start: 5.34, end: 5.50, type: "maori" },
    { word: "ki", line: 2, start: 5.50, end: 5.70, type: "maori" },
    { word: "uta", line: 2, start: 5.70, end: 5.91, type: "maori" },

    { word: "Kia", line: 3, start: 5.91, end: 7.45, type: "maori" },
    { word: "mātaratara", line: 3, start: 7.45, end: 7.69, type: "maori" },
    { word: "ki", line: 3, start: 7.69, end: 7.92, type: "maori" },
    { word: "tai", line: 3, start: 7.92, end: 9.58, type: "maori" },

    { word: "E", line: 4, start: 9.58, end: 9.76, type: "maori" },
    { word: "hī", line: 4, start: 9.76, end: 9.95, type: "maori" },
    { word: "ake", line: 4, start: 9.95, end: 10.11, type: "maori" },
    { word: "ana", line: 4, start: 10.11, end: 10.29, type: "maori" },
    { word: "te", line: 4, start: 10.29, end: 10.50, type: "maori" },
    { word: "atakura", line: 4, start: 10.50, end: 11.65, type: "maori" },

    { word: "He", line: 5, start: 11.65, end: 11.82, type: "maori" },
    { word: "tio,", line: 5, start: 11.82, end: 12.00, type: "maori" },
    { word: "he", line: 5, start: 12.00, end: 12.22, type: "maori" },
    { word: "huka,", line: 5, start: 12.22, end: 13.26, type: "maori" },
    { word: "he", line: 5, start: 13.26, end: 13.49, type: "maori" },
    { word: "hau", line: 5, start: 13.49, end: 13.86, type: "maori" },
    { word: "hū", line: 5, start: 13.86, end: 14.53, type: "maori" },

    { word: "Tīhei", line: 6, start: 14.53, end: 15.09, type: "maori" },
    { word: "mauri", line: 6, start: 15.09, end: 16.08, type: "maori" },
    { word: "ora!", line: 6, start: 16.08, end: 17.00, type: "maori" },

    { word: "Cease", line: 0, start: 0.00, end: 0.65, type: "english" },
    { word: "the", line: 0, start: 0.65, end: 0.95, type: "english" },
    { word: "winds", line: 0, start: 0.95, end: 1.35, type: "english" },
    { word: "from", line: 0, start: 1.35, end: 1.65, type: "english" },
    { word: "the", line: 0, start: 1.65, end: 1.82, type: "english" },
    { word: "west", line: 0, start: 1.82, end: 3.04, type: "english" },

    { word: "Cease", line: 1, start: 3.04, end: 3.35, type: "english" },
    { word: "the", line: 1, start: 3.35, end: 3.55, type: "english" },
    { word: "winds", line: 1, start: 3.55, end: 3.80, type: "english" },
    { word: "from", line: 1, start: 3.80, end: 3.95, type: "english" },
    { word: "the", line: 1, start: 3.95, end: 4.10, type: "english" },
    { word: "south", line: 1, start: 4.10, end: 5.16, type: "english" },

    { word: "Let", line: 2, start: 5.16, end: 5.32, type: "english" },
    { word: "the", line: 2, start: 5.32, end: 5.45, type: "english" },
    { word: "breeze", line: 2, start: 5.45, end: 5.60, type: "english" },
    { word: "blow", line: 2, start: 5.60, end: 5.72, type: "english" },
    { word: "over", line: 2, start: 5.72, end: 5.82, type: "english" },
    { word: "the", line: 2, start: 5.82, end: 5.86, type: "english" },
    { word: "land", line: 2, start: 5.86, end: 5.91, type: "english" },

    { word: "Let", line: 3, start: 5.91, end: 6.40, type: "english" },
    { word: "the", line: 3, start: 6.40, end: 6.75, type: "english" },
    { word: "breeze", line: 3, start: 6.75, end: 7.10, type: "english" },
    { word: "blow", line: 3, start: 7.10, end: 7.35, type: "english" },
    { word: "over", line: 3, start: 7.35, end: 7.55, type: "english" },
    { word: "the", line: 3, start: 7.55, end: 7.68, type: "english" },
    { word: "ocean", line: 3, start: 7.68, end: 9.58, type: "english" },

    { word: "Let", line: 4, start: 9.58, end: 9.80, type: "english" },
    { word: "the", line: 4, start: 9.80, end: 9.95, type: "english" },
    { word: "red-tipped", line: 4, start: 9.95, end: 10.25, type: "english" },
    { word: "dawn", line: 4, start: 10.25, end: 10.48, type: "english" },
    { word: "come", line: 4, start: 10.48, end: 10.70, type: "english" },
    { word: "with", line: 4, start: 10.70, end: 10.90, type: "english" },
    { word: "a", line: 4, start: 10.90, end: 11.05, type: "english" },
    { word: "sharpened", line: 4, start: 11.05, end: 11.35, type: "english" },
    { word: "air.", line: 4, start: 11.35, end: 11.65, type: "english" },

    { word: "A", line: 5, start: 11.65, end: 11.80, type: "english" },
    { word: "touch", line: 5, start: 11.80, end: 11.95, type: "english" },
    { word: "of", line: 5, start: 11.95, end: 12.10, type: "english" },
    { word: "frost,", line: 5, start: 12.10, end: 12.55, type: "english" },
    { word: "a", line: 5, start: 12.55, end: 12.80, type: "english" },
    { word: "promise", line: 5, start: 12.80, end: 13.20, type: "english" },
    { word: "of", line: 5, start: 13.20, end: 13.40, type: "english" },
    { word: "a", line: 5, start: 13.40, end: 13.55, type: "english" },
    { word: "glorious", line: 5, start: 13.55, end: 14.00, type: "english" },
    { word: "day.", line: 5, start: 14.00, end: 14.53, type: "english" },

    { word: "Tīhei", line: 6, start: 14.53, end: 15.09, type: "english" },
    { word: "mauri", line: 6, start: 15.09, end: 16.08, type: "english" },
    { word: "ora!", line: 6, start: 16.08, end: 17.00, type: "english" }
  ]
},
  {
  id: 3,
  title: "Karakia Whakamutunga (To close a meeting)",
  subtitle: "Karakia (2 Corinthians, 13:14)",
  audio: karakiaWhakamutungaAudio,
  maori: [
    "Kia tau ki a tātou katoa",
    "Te atawhai o tō tātou Ariki, a Ihu Karaiti",
    "Me te aroha o te Atua",
    "Me te whiwhingatahitanga",
    "Ki te wairua tapu",
    "Ake, ake, ake",
    "Amine"
  ],
  english: [
    "May the grace of the Lord Jesus Christ,",
    "and the love of God,",
    "and the fellowship of the Holy Spirit be with you all",
    "Forever and ever",
    "Amen",
    "",
    ""
  ],
  timedWords: [
    { word: "Kia", line: 0, start: 0.00, end: 0.85, type: "maori" },
    { word: "tau", line: 0, start: 0.85, end: 1.28, type: "maori" },
    { word: "ki", line: 0, start: 1.28, end: 1.50, type: "maori" },
    { word: "a", line: 0, start: 1.50, end: 1.91, type: "maori" },
    { word: "tātou", line: 0, start: 1.91, end: 2.39, type: "maori" },
    { word: "katoa", line: 0, start: 2.39, end: 3.07, type: "maori" },

    { word: "Te", line: 1, start: 3.07, end: 3.30, type: "maori" },
    { word: "atawhai", line: 1, start: 3.30, end: 3.52, type: "maori" },
    { word: "o", line: 1, start: 3.52, end: 3.85, type: "maori" },
    { word: "tō", line: 1, start: 3.85, end: 4.17, type: "maori" },
    { word: "tātou", line: 1, start: 4.17, end: 4.66, type: "maori" },
    { word: "Ariki,", line: 1, start: 4.66, end: 5.63, type: "maori" },
    { word: "a", line: 1, start: 5.63, end: 5.81, type: "maori" },
    { word: "Ihu", line: 1, start: 5.81, end: 6.03, type: "maori" },
    { word: "Karaiti", line: 1, start: 6.03, end: 7.02, type: "maori" },

    { word: "Me", line: 2, start: 7.02, end: 7.24, type: "maori" },
    { word: "te", line: 2, start: 7.24, end: 7.44, type: "maori" },
    { word: "aroha", line: 2, start: 7.44, end: 7.66, type: "maori" },
    { word: "o", line: 2, start: 7.66, end: 8.08, type: "maori" },
    { word: "te", line: 2, start: 8.08, end: 8.31, type: "maori" },
    { word: "Atua", line: 2, start: 8.31, end: 8.96, type: "maori" },

    { word: "Me", line: 3, start: 8.96, end: 9.13, type: "maori" },
    { word: "te", line: 3, start: 9.13, end: 9.27, type: "maori" },
    { word: "whiwhingatahitanga", line: 3, start: 9.27, end: 9.49, type: "maori" },

    { word: "Ki", line: 4, start: 9.49, end: 10.64, type: "maori" },
    { word: "te", line: 4, start: 10.64, end: 10.79, type: "maori" },
    { word: "wairua", line: 4, start: 10.79, end: 11.01, type: "maori" },
    { word: "tapu", line: 4, start: 11.01, end: 12.09, type: "maori" },

    { word: "Ake,", line: 5, start: 12.09, end: 12.30, type: "maori" },
    { word: "ake,", line: 5, start: 12.30, end: 13.39, type: "maori" },
    { word: "ake", line: 5, start: 13.39, end: 13.98, type: "maori" },

    { word: "Amine", line: 6, start: 13.98, end: 14.80, type: "maori" },

    { word: "May", line: 0, start: 0.00, end: 0.55, type: "english" },
    { word: "the", line: 0, start: 0.55, end: 0.85, type: "english" },
    { word: "grace", line: 0, start: 0.85, end: 1.35, type: "english" },
    { word: "of", line: 0, start: 1.35, end: 1.60, type: "english" },
    { word: "the", line: 0, start: 1.60, end: 1.85, type: "english" },
    { word: "Lord", line: 0, start: 1.85, end: 2.10, type: "english" },
    { word: "Jesus", line: 0, start: 2.10, end: 2.55, type: "english" },
    { word: "Christ,", line: 0, start: 2.55, end: 3.07, type: "english" },

    { word: "and", line: 1, start: 3.07, end: 3.45, type: "english" },
    { word: "the", line: 1, start: 3.45, end: 3.70, type: "english" },
    { word: "love", line: 1, start: 3.70, end: 4.10, type: "english" },
    { word: "of", line: 1, start: 4.10, end: 4.35, type: "english" },
    { word: "God,", line: 1, start: 4.35, end: 7.02, type: "english" },

    { word: "and", line: 2, start: 7.02, end: 7.35, type: "english" },
    { word: "the", line: 2, start: 7.35, end: 7.60, type: "english" },
    { word: "fellowship", line: 2, start: 7.60, end: 8.20, type: "english" },
    { word: "of", line: 2, start: 8.20, end: 8.40, type: "english" },
    { word: "the", line: 2, start: 8.40, end: 8.65, type: "english" },
    { word: "Holy", line: 2, start: 8.65, end: 9.10, type: "english" },
    { word: "Spirit", line: 2, start: 9.10, end: 9.65, type: "english" },
    { word: "be", line: 2, start: 9.65, end: 10.00, type: "english" },
    { word: "with", line: 2, start: 10.00, end: 10.35, type: "english" },
    { word: "you", line: 2, start: 10.35, end: 10.70, type: "english" },
    { word: "all", line: 2, start: 10.70, end: 11.01, type: "english" },

    { word: "Forever", line: 3, start: 11.01, end: 12.10, type: "english" },
    { word: "and", line: 3, start: 12.10, end: 12.65, type: "english" },
    { word: "ever", line: 3, start: 12.65, end: 13.98, type: "english" },

    { word: "Amen", line: 4, start: 13.98, end: 14.80, type: "english" }
  ]
},
  {
  id: 4,
  title: "Traditional karakia",
  subtitle: "",
  audio: traditionalKarakiaFoodAudio,
  maori: [
    "Nau mai e ngā hua",
    "o te wao",
    "o te ngakina",
    "o te wai tai",
    "o te wai Māori",
    "Nā Tane",
    "Nā Rongo",
    "Nā Tangaroa",
    "Nā Maru",
    "Ko Ranginui e tū iho nei",
    "Ko Papatūānuku e takoto nei",
    "Tuturu whakamaua",
    "Kia tina! TINA! Hui e! TĀIKI E! I"
  ],
  english: [
    "Welcome the gifts of food",
    "from the sacred forests",
    "from the cultivated gardens",
    "from the sea",
    "from the fresh waters",
    "The food of Tane",
    "of Rongo",
    "of Tangaroa",
    "of Maru",
    "I acknowledge Ranginui who is above me,",
    "Papatūānuku who lies beneath me",
    "Let this be my commitment to all!",
    "Draw together! Affirm!"
  ],
  timedWords: [
    { word: "Nau", line: 0, start: 0.00, end: 0.95, type: "maori" },
    { word: "mai", line: 0, start: 0.95, end: 1.34, type: "maori" },
    { word: "e", line: 0, start: 1.34, end: 1.55, type: "maori" },
    { word: "ngā", line: 0, start: 1.55, end: 1.92, type: "maori" },
    { word: "hua", line: 0, start: 1.92, end: 2.47, type: "maori" },

    { word: "o", line: 1, start: 2.47, end: 2.83, type: "maori" },
    { word: "te", line: 1, start: 2.83, end: 3.25, type: "maori" },
    { word: "wao", line: 1, start: 3.25, end: 3.79, type: "maori" },

    { word: "o", line: 2, start: 3.79, end: 3.99, type: "maori" },
    { word: "te", line: 2, start: 3.99, end: 4.21, type: "maori" },
    { word: "ngakina", line: 2, start: 4.21, end: 4.94, type: "maori" },

    { word: "o", line: 3, start: 4.94, end: 5.10, type: "maori" },
    { word: "te", line: 3, start: 5.10, end: 5.26, type: "maori" },
    { word: "wai", line: 3, start: 5.26, end: 5.48, type: "maori" },
    { word: "tai", line: 3, start: 5.48, end: 6.11, type: "maori" },

    { word: "o", line: 4, start: 6.11, end: 6.26, type: "maori" },
    { word: "te", line: 4, start: 6.26, end: 6.39, type: "maori" },
    { word: "wai", line: 4, start: 6.39, end: 6.60, type: "maori" },
    { word: "Māori", line: 4, start: 6.60, end: 7.32, type: "maori" },

    { word: "Nā", line: 5, start: 7.32, end: 7.93, type: "maori" },
    { word: "Tane", line: 5, start: 7.93, end: 8.64, type: "maori" },

    { word: "Nā", line: 6, start: 8.64, end: 8.87, type: "maori" },
    { word: "Rongo", line: 6, start: 8.87, end: 9.60, type: "maori" },

    { word: "Nā", line: 7, start: 9.60, end: 9.82, type: "maori" },
    { word: "Tangaroa", line: 7, start: 9.82, end: 10.44, type: "maori" },

    { word: "Nā", line: 8, start: 10.44, end: 10.64, type: "maori" },
    { word: "Maru", line: 8, start: 10.64, end: 12.29, type: "maori" },

    { word: "Ko", line: 9, start: 12.29, end: 12.46, type: "maori" },
    { word: "Ranginui", line: 9, start: 12.46, end: 12.60, type: "maori" },
    { word: "e", line: 9, start: 12.60, end: 12.78, type: "maori" },
    { word: "tū", line: 9, start: 12.78, end: 13.00, type: "maori" },
    { word: "iho", line: 9, start: 13.00, end: 13.42, type: "maori" },
    { word: "nei", line: 9, start: 13.42, end: 13.98, type: "maori" },

    { word: "Ko", line: 10, start: 13.98, end: 14.39, type: "maori" },
    { word: "Papatūānuku", line: 10, start: 14.39, end: 14.62, type: "maori" },
    { word: "e", line: 10, start: 14.62, end: 14.94, type: "maori" },
    { word: "takoto", line: 10, start: 14.94, end: 15.25, type: "maori" },
    { word: "nei", line: 10, start: 15.25, end: 16.55, type: "maori" },

    { word: "Tuturu", line: 11, start: 16.55, end: 16.78, type: "maori" },
    { word: "whakamaua", line: 11, start: 16.78, end: 17.29, type: "maori" },

    { word: "Kia", line: 12, start: 17.29, end: 18.00, type: "maori" },
    { word: "tina!", line: 12, start: 18.00, end: 18.21, type: "maori" },
    { word: "TINA!", line: 12, start: 18.21, end: 19.74, type: "maori" },
    { word: "Hui", line: 12, start: 19.74, end: 20.52, type: "maori" },
    { word: "e!", line: 12, start: 20.52, end: 21.06, type: "maori" },
    { word: "TĀIKI", line: 12, start: 21.06, end: 22.29, type: "maori" },
    { word: "E!", line: 12, start: 22.29, end: 23.08, type: "maori" },
    { word: "I", line: 12, start: 23.08, end: 24.00, type: "maori" },

    { word: "Welcome", line: 0, start: 0.00, end: 0.80, type: "english" },
    { word: "the", line: 0, start: 0.80, end: 1.10, type: "english" },
    { word: "gifts", line: 0, start: 1.10, end: 1.50, type: "english" },
    { word: "of", line: 0, start: 1.50, end: 1.70, type: "english" },
    { word: "food", line: 0, start: 1.70, end: 2.47, type: "english" },

    { word: "from", line: 1, start: 2.47, end: 2.80, type: "english" },
    { word: "the", line: 1, start: 2.80, end: 3.00, type: "english" },
    { word: "sacred", line: 1, start: 3.00, end: 3.18, type: "english" },
    { word: "forests", line: 1, start: 3.18, end: 3.79, type: "english" },

    { word: "from", line: 2, start: 3.79, end: 3.98, type: "english" },
    { word: "the", line: 2, start: 3.98, end: 4.08, type: "english" },
    { word: "cultivated", line: 2, start: 4.08, end: 4.55, type: "english" },
    { word: "gardens", line: 2, start: 4.55, end: 4.94, type: "english" },

    { word: "from", line: 3, start: 4.94, end: 5.08, type: "english" },
    { word: "the", line: 3, start: 5.08, end: 5.20, type: "english" },
    { word: "sea", line: 3, start: 5.20, end: 6.11, type: "english" },

    { word: "from", line: 4, start: 6.11, end: 6.25, type: "english" },
    { word: "the", line: 4, start: 6.25, end: 6.35, type: "english" },
    { word: "fresh", line: 4, start: 6.35, end: 6.50, type: "english" },
    { word: "waters", line: 4, start: 6.50, end: 7.32, type: "english" },

    { word: "The", line: 5, start: 7.32, end: 7.55, type: "english" },
    { word: "food", line: 5, start: 7.55, end: 7.78, type: "english" },
    { word: "of", line: 5, start: 7.78, end: 7.90, type: "english" },
    { word: "Tane", line: 5, start: 7.90, end: 8.64, type: "english" },

    { word: "of", line: 6, start: 8.64, end: 8.78, type: "english" },
    { word: "Rongo", line: 6, start: 8.78, end: 9.60, type: "english" },

    { word: "of", line: 7, start: 9.60, end: 9.74, type: "english" },
    { word: "Tangaroa", line: 7, start: 9.74, end: 10.44, type: "english" },

    { word: "of", line: 8, start: 10.44, end: 10.56, type: "english" },
    { word: "Maru", line: 8, start: 10.56, end: 12.29, type: "english" },

    { word: "I", line: 9, start: 12.29, end: 12.42, type: "english" },
    { word: "acknowledge", line: 9, start: 12.42, end: 12.95, type: "english" },
    { word: "Ranginui", line: 9, start: 12.95, end: 13.25, type: "english" },
    { word: "who", line: 9, start: 13.25, end: 13.38, type: "english" },
    { word: "is", line: 9, start: 13.38, end: 13.48, type: "english" },
    { word: "above", line: 9, start: 13.48, end: 13.70, type: "english" },
    { word: "me,", line: 9, start: 13.70, end: 13.98, type: "english" },

    { word: "Papatūānuku", line: 10, start: 13.98, end: 14.50, type: "english" },
    { word: "who", line: 10, start: 14.50, end: 14.66, type: "english" },
    { word: "lies", line: 10, start: 14.66, end: 14.88, type: "english" },
    { word: "beneath", line: 10, start: 14.88, end: 15.10, type: "english" },
    { word: "me", line: 10, start: 15.10, end: 16.55, type: "english" },

    { word: "Let", line: 11, start: 16.55, end: 16.72, type: "english" },
    { word: "this", line: 11, start: 16.72, end: 16.88, type: "english" },
    { word: "be", line: 11, start: 16.88, end: 17.02, type: "english" },
    { word: "my", line: 11, start: 17.02, end: 17.12, type: "english" },
    { word: "commitment", line: 11, start: 17.12, end: 17.23, type: "english" },
    { word: "to", line: 11, start: 17.23, end: 17.26, type: "english" },
    { word: "all!", line: 11, start: 17.26, end: 17.29, type: "english" },

    { word: "Draw", line: 12, start: 17.29, end: 18.40, type: "english" },
    { word: "together!", line: 12, start: 18.40, end: 20.40, type: "english" },
    { word: "Affirm!", line: 12, start: 20.40, end: 24.00, type: "english" }
  ]
},
  {
  id: 5,
  title: "Karakia mō te kai (To bless food)",
  subtitle: "Karakia",
  audio: karakiaMoTeKaiAudio,
  maori: [
    "E te Atua",
    "Whakapainga ēnei kai",
    "Hei oranga mō ō mātou tinana",
    "Whāngaia hoki ō mātou wairua ki te taro o te ora",
    "Ko Ihu Karaiti tō mātou Ariki",
    "Ake, ake, ake",
    "Amine"
  ],
  english: [
    "Lord God",
    "Bless this food",
    "For the goodness of our bodies",
    "Feeding our spiritual needs also with the bread of life",
    "Jesus Christ, our Lord",
    "Forever and ever",
    "Amen"
  ],
  timedWords: [
    { word: "E", line: 0, start: 0.80, end: 0.96, type: "maori" },
    { word: "te", line: 0, start: 0.96, end: 1.19, type: "maori" },
    { word: "Atua", line: 0, start: 1.19, end: 1.56, type: "maori" },

    { word: "Whakapainga", line: 1, start: 1.56, end: 1.83, type: "maori" },
    { word: "ēnei", line: 1, start: 1.83, end: 2.17, type: "maori" },
    { word: "kai", line: 1, start: 2.17, end: 3.35, type: "maori" },

    { word: "Hei", line: 2, start: 3.35, end: 3.69, type: "maori" },
    { word: "oranga", line: 2, start: 3.69, end: 4.15, type: "maori" },
    { word: "mō", line: 2, start: 4.15, end: 4.41, type: "maori" },
    { word: "ō", line: 2, start: 4.41, end: 4.65, type: "maori" },
    { word: "mātou", line: 2, start: 4.65, end: 4.87, type: "maori" },
    { word: "tinana", line: 2, start: 4.87, end: 6.11, type: "maori" },

    { word: "Whāngaia", line: 3, start: 6.11, end: 6.78, type: "maori" },
    { word: "hoki", line: 3, start: 6.78, end: 7.00, type: "maori" },
    { word: "ō", line: 3, start: 7.00, end: 7.49, type: "maori" },
    { word: "mātou", line: 3, start: 7.49, end: 7.94, type: "maori" },
    { word: "wairua", line: 3, start: 7.94, end: 8.33, type: "maori" },
    { word: "ki", line: 3, start: 8.33, end: 8.77, type: "maori" },
    { word: "te", line: 3, start: 8.77, end: 8.94, type: "maori" },
    { word: "taro", line: 3, start: 8.94, end: 9.17, type: "maori" },
    { word: "o", line: 3, start: 9.17, end: 9.50, type: "maori" },
    { word: "te", line: 3, start: 9.50, end: 9.72, type: "maori" },
    { word: "ora", line: 3, start: 9.72, end: 10.43, type: "maori" },

    { word: "Ko", line: 4, start: 10.43, end: 10.58, type: "maori" },
    { word: "Ihu", line: 4, start: 10.58, end: 10.72, type: "maori" },
    { word: "Karaiti", line: 4, start: 10.72, end: 10.95, type: "maori" },
    { word: "tō", line: 4, start: 10.95, end: 11.84, type: "maori" },
    { word: "mātou", line: 4, start: 11.84, end: 12.06, type: "maori" },
    { word: "Ariki", line: 4, start: 12.06, end: 12.90, type: "maori" },

    { word: "Ake,", line: 5, start: 12.90, end: 13.37, type: "maori" },
    { word: "ake,", line: 5, start: 13.37, end: 13.83, type: "maori" },
    { word: "ake", line: 5, start: 13.83, end: 14.60, type: "maori" },

    { word: "Amine", line: 6, start: 14.60, end: 15.40, type: "maori" },

    { word: "Lord", line: 0, start: 0.80, end: 1.00, type: "english" },
    { word: "God", line: 0, start: 1.00, end: 1.56, type: "english" },

    { word: "Bless", line: 1, start: 1.56, end: 1.86, type: "english" },
    { word: "this", line: 1, start: 1.86, end: 2.12, type: "english" },
    { word: "food", line: 1, start: 2.12, end: 3.35, type: "english" },

    { word: "For", line: 2, start: 3.35, end: 3.60, type: "english" },
    { word: "the", line: 2, start: 3.60, end: 3.82, type: "english" },
    { word: "goodness", line: 2, start: 3.82, end: 4.28, type: "english" },
    { word: "of", line: 2, start: 4.28, end: 4.46, type: "english" },
    { word: "our", line: 2, start: 4.46, end: 4.68, type: "english" },
    { word: "bodies", line: 2, start: 4.68, end: 6.11, type: "english" },

    { word: "Feeding", line: 3, start: 6.11, end: 6.72, type: "english" },
    { word: "our", line: 3, start: 6.72, end: 7.02, type: "english" },
    { word: "spiritual", line: 3, start: 7.02, end: 7.90, type: "english" },
    { word: "needs", line: 3, start: 7.90, end: 8.28, type: "english" },
    { word: "also", line: 3, start: 8.28, end: 8.70, type: "english" },
    { word: "with", line: 3, start: 8.70, end: 8.96, type: "english" },
    { word: "the", line: 3, start: 8.96, end: 9.08, type: "english" },
    { word: "bread", line: 3, start: 9.08, end: 9.30, type: "english" },
    { word: "of", line: 3, start: 9.30, end: 9.48, type: "english" },
    { word: "life", line: 3, start: 9.48, end: 10.43, type: "english" },

    { word: "Jesus", line: 4, start: 10.43, end: 10.68, type: "english" },
    { word: "Christ,", line: 4, start: 10.68, end: 10.96, type: "english" },
    { word: "our", line: 4, start: 10.96, end: 11.35, type: "english" },
    { word: "Lord", line: 4, start: 11.35, end: 12.90, type: "english" },

    { word: "Forever", line: 5, start: 12.90, end: 13.35, type: "english" },
    { word: "and", line: 5, start: 13.35, end: 13.72, type: "english" },
    { word: "ever", line: 5, start: 13.72, end: 14.60, type: "english" },

    { word: "Amen", line: 6, start: 14.60, end: 15.40, type: "english" }
  ]
}
];

export default prayersData;