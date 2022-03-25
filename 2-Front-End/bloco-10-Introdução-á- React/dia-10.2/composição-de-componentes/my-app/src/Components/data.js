// Total de capítulos por livro, na ordem
const totalCapitulos = [50,40,27,36,34,24,21,4,31,24,22,25,29,36,10,13,10,42,150,31,12,8,66,52,
    5,48,12,14,3,9,1,4,7,3,3,3,2,14,4,28,16,24,21,28,16,16,13,6,6,4,4,5,3,6,4,3,1,13,5,5,3,5,1,1,1,22];

// Livros da bíblia
const livros = [
  {
      number: 1,
      name: "Genêsis",
      slugByLang:
      {
          de: "gn",
          en: "gen",
          pt: "gn"
      },
      slug: "gn",
      abbreviation: "Gn"
  },
  {
      number: 2,
      name: "Êxodo",
      slugByLang:
      {
          de: "ex",
          en: "exod",
          pt: "ex"
      },
      slug: "ex",
      abbreviation: "ÃŠx"
  },
  {
      number: 3,
      name: "Levítico",
      slugByLang:
      {
          de: "lv",
          en: "lev",
          pt: "lv"
      },
      slug: "lv",
      abbreviation: "Lv"
  },
  {
      number: 4,
      name: "Números",
      slugByLang:
      {
          de: "nm",
          en: "num",
          pt: "nm"
      },
      slug: "nm",
      abbreviation: "Nm"
  },
  {
      number: 5,
      name: "Deuteronômio",
      slugByLang:
      {
          de: "dt",
          en: "deut",
          pt: "dt"
      },
      slug: "dt",
      abbreviation: "Dt"
  },
  {
      number: 6,
      name: "Josué",
      slugByLang:
      {
          de: "js",
          en: "josh",
          pt: "js"
      },
      slug: "js",
      abbreviation: "Js"
  },
  {
      number: 7,
      name: "Juízes",
      slugByLang:
      {
          de: "jz",
          en: "jud",
          pt: "jz"
      },
      slug: "jz",
      abbreviation: "Jz"
  },
  {
      number: 8,
      name: "Rute",
      slugByLang:
      {
          de: "rt",
          en: "ruth",
          pt: "rt"
      },
      slug: "rt",
      abbreviation: "Rt"
  },
  {
      number: 9,
      name: "1 Samuel",
      slugByLang:
      {
          de: "1sm",
          en: "1sam",
          pt: "1sm"
      },
      slug: "1sm",
      abbreviation: "1 Sm"
  },
  {
      number: 10,
      name: "2 Samuel",
      slugByLang:
      {
          de: "2sm",
          en: "2sam",
          pt: "2sm"
      },
      slug: "2sm",
      abbreviation: "2 Sm"
  },
  {
      number: 11,
      name: "1 Reis",
      slugByLang:
      {
          de: "1rs",
          en: "1kgs",
          pt: "1rs"
      },
      slug: "1rs",
      abbreviation: "1 Rs"
  },
  {
      number: 12,
      name: "2 Reis",
      slugByLang:
      {
          de: "2rs",
          en: "2kgs",
          pt: "2rs"
      },
      slug: "2rs",
      abbreviation: "2 Rs"
  },
  {
      number: 13,
      name: "1 Crônicas",
      slugByLang:
      {
          de: "1cr",
          en: "1chr",
          pt: "1cr"
      },
      slug: "1cr",
      abbreviation: "1 Cr"
  },
  {
      number: 14,
      name: "2 Crônicas",
      slugByLang:
      {
          de: "2cr",
          en: "2cr",
          pt: "2cr"
      },
      slug: "2cr",
      abbreviation: "2 Cr"
  },
  {
      number: 15,
      name: "Esdras",
      slugByLang:
      {
          de: "ed",
          en: "ezra",
          pt: "ed"
      },
      slug: "ed",
      abbreviation: "Ed"
  },
  {
      number: 16,
      name: "Neemias",
      slugByLang:
      {
          de: "ne",
          en: "neh",
          pt: "ne"
      },
      slug: "ne",
      abbreviation: "Ne"
  },
  {
      number: 17,
      name: "Ester",
      slugByLang:
      {
          de: "et",
          en: "esth",
          pt: "et"
      },
      slug: "et",
      abbreviation: "Et"
  },
  {
      number: 18,
      name: "Jó",
      slugByLang:
      {
          de: "hiob",
          en: "job",
          pt: "jÃ³"
      },
      slug: "jó",
      abbreviation: "Jó"
  },
  {
      number: 19,
      name: "Salmos",
      slugByLang:
      {
          de: "ps",
          en: "ps",
          pt: "sl"
      },
      slug: "sl",
      abbreviation: "Sl"
  },
  {
      number: 20,
      name: "Provérbios",
      slugByLang:
      {
          de: "pv",
          en: "prov",
          pt: "pv"
      },
      slug: "pv",
      abbreviation: "Pv"
  },
  {
      number: 21,
      name: "Eclesiastes",
      slugByLang:
      {
          de: "ec",
          en: "eccl",
          pt: "ec"
      },
      slug: "ec",
      abbreviation: "Ec"
  },
  {
      number: 22,
      name: "Cânticos",
      slugByLang:
      {
          de: "ct",
          en: "song",
          pt: "ct"
      },
      slug: "ct",
      abbreviation: "Ct"
  },
  {
      number: 23,
      name: "Isaías",
      slugByLang:
      {
          de: "is",
          en: "isa",
          pt: "is"
      },
      slug: "is",
      abbreviation: "Is"
  },
  {
      number: 24,
      name: "Jeremias",
      slugByLang:
      {
          de: "jr",
          en: "jer",
          pt: "jr"
      },
      slug: "jr",
      abbreviation: "Jr"
  },
  {
      number: 25,
      name: "Lamentações",
      slugByLang:
      {
          de: "lm",
          en: "lam",
          pt: "lm"
      },
      slug: "lm",
      abbreviation: "Lm"
  },
  {
      number: 26,
      name: "Ezequiel",
      slugByLang:
      {
          de: "ez",
          en: "ezek",
          pt: "ez"
      },
      slug: "ez",
      abbreviation: "Ez"
  },
  {
      number: 27,
      name: "Daniel",
      slugByLang:
      {
          de: "dn",
          en: "dan",
          pt: "dn"
      },
      slug: "dn",
      abbreviation: "Dn"
  },
  {
      number: 28,
      name: "Oseias",
      slugByLang:
      {
          de: "os",
          en: "hos",
          pt: "os"
      },
      slug: "os",
      abbreviation: "Os"
  },
  {
      number: 29,
      name: "Joel",
      slugByLang:
      {
          de: "jl",
          en: "joel",
          pt: "jl"
      },
      slug: "jl",
      abbreviation: "Jl"
  },
  {
      number: 30,
      name: "Amós",
      slugByLang:
      {
          de: "am",
          en: "amos",
          pt: "am"
      },
      slug: "am",
      abbreviation: "Am"
  },
  {
      number: 31,
      name: "Obadias",
      slugByLang:
      {
          de: "ob",
          en: "obad",
          pt: "ob"
      },
      slug: "ob",
      abbreviation: "Ob"
  },
  {
      number: 32,
      name: "Jonas",
      slugByLang:
      {
          de: "jn",
          en: "jonah",
          pt: "jn"
      },
      slug: "jn",
      abbreviation: "Jn"
  },
  {
      number: 33,
      name: "Miqueias",
      slugByLang:
      {
          de: "micha",
          en: "mic",
          pt: "mq"
      },
      slug: "mq",
      abbreviation: "Mq"
  },
  {
      number: 34,
      name: "Naum",
      slugByLang:
      {
          de: "na",
          en: "nah",
          pt: "na"
      },
      slug: "na",
      abbreviation: "Na"
  },
  {
      number: 35,
      name: "Habacuque",
      slugByLang:
      {
          de: "hk",
          en: "hab",
          pt: "hc"
      },
      slug: "hc",
      abbreviation: "Hc"
  },
  {
      number: 36,
      name: "Sofonias",
      slugByLang:
      {
          de: "zph",
          en: "zeph",
          pt: "sf"
      },
      slug: "sf",
      abbreviation: "Sf"
  },
  {
      number: 37,
      name: "Ageu",
      slugByLang:
      {
          de: "hag",
          en: "hag",
          pt: "ag"
      },
      slug: "ag",
      abbreviation: "Ag"
  },
  {
      number: 38,
      name: "Zacarias",
      slugByLang:
      {
          de: "sac",
          en: "zech",
          pt: "zc"
      },
      slug: "zc",
      abbreviation: "Zc"
  },
  {
      number: 39,
      name: "Malaquias",
      slugByLang:
      {
          de: "ml",
          en: "mal",
          pt: "ml"
      },
      slug: "ml",
      abbreviation: "Ml"
  },
  {
      number: 40,
      name: "Mateus",
      slugByLang:
      {
          de: "mt",
          en: "matt",
          pt: "mt"
      },
      slug: "mt",
      abbreviation: "Mt"
  },
  {
      number: 41,
      name: "Marcos",
      slugByLang:
      {
          de: "mk",
          en: "mark",
          pt: "mc"
      },
      slug: "mc",
      abbreviation: "Mc"
  },
  {
      number: 42,
      name: "Lucas",
      slugByLang:
      {
          de: "lk",
          en: "luke",
          pt: "lc"
      },
      slug: "lc",
      abbreviation: "Lc"
  },
  {
      number: 43,
      name: "João",
      slugByLang:
      {
          de: "jo",
          en: "john",
          pt: "jo"
      },
      slug: "jo",
      abbreviation: "Jo"
  },
  {
      number: 44,
      name: "Atos",
      slugByLang:
      {
          de: "apostelgeschichte",
          en: "acts",
          pt: "atos"
      },
      slug: "atos",
      abbreviation: "Atos"
  },
  {
      number: 45,
      name: "Romanos",
      slugByLang:
      {
          de: "roemers",
          en: "rom",
          pt: "rm"
      },
      slug: "rm",
      abbreviation: "Rm"
  },
  {
      number: 46,
      name: "1 Coríntios",
      slugByLang:
      {
          de: "1kor",
          en: "1cor",
          pt: "1co"
      },
      slug: "1co",
      abbreviation: "1 Co"
  },
  {
      number: 47,
      name: "2 Coríntios",
      slugByLang:
      {
          de: "2kor",
          en: "2cor",
          pt: "2co"
      },
      slug: "2co",
      abbreviation: "2 Co"
  },
  {
      number: 48,
      name: "Gálatas",
      slugByLang:
      {
          de: "gl",
          en: "gal",
          pt: "gl"
      },
      slug: "gl",
      abbreviation: "Gl"
  },
  {
      number: 49,
      name: "Efésios",
      slugByLang:
      {
          de: "eph",
          en: "eph",
          pt: "ef"
      },
      slug: "ef",
      abbreviation: "Ef"
  },
  {
      number: 50,
      name: "Filipenses",
      slugByLang:
      {
          de: "phi",
          en: "phi",
          pt: "fp"
      },
      slug: "fp",
      abbreviation: "Fp"
  },
  {
      number: 51,
      name: "Colossenses",
      slugByLang:
      {
          de: "ko",
          en: "col",
          pt: "cl"
      },
      slug: "cl",
      abbreviation: "Cl"
  },
  {
      number: 52,
      name: "1 Tessalonicenses",
      slugByLang:
      {
          de: "1ts",
          en: "1thess",
          pt: "1ts"
      },
      slug: "1ts",
      abbreviation: "1 Ts"
  },
  {
      number: 53,
      name: "2 Tessalonicenses",
      slugByLang:
      {
          de: "2ts",
          en: "2thess",
          pt: "2ts"
      },
      slug: "2ts",
      abbreviation: "2 Ts"
  },
  {
      number: 54,
      name: "1 Timóteo",
      slugByLang:
      {
          de: "1tm",
          en: "1tim",
          pt: "1tm"
      },
      slug: "1tm",
      abbreviation: "1 Tm"
  },
  {
      number: 55,
      name: "2 Timóteo",
      slugByLang:
      {
          de: "2tm",
          en: "2tim",
          pt: "2tm"
      },
      slug: "2tm",
      abbreviation: "2 Tm"
  },
  {
      number: 56,
      name: "Tito",
      slugByLang:
      {
          de: "tt",
          en: "titus",
          pt: "tt"
      },
      slug: "tt",
      abbreviation: "Tt"
  },
  {
      number: 57,
      name: "Filemom",
      slugByLang:
      {
          de: "fm",
          en: "phlm",
          pt: "fm"
      },
      slug: "fm",
      abbreviation: "Fm"
  },
  {
      number: 58,
      name: "Hebreus",
      slugByLang:
      {
          de: "hb",
          en: "heb",
          pt: "hb"
      },
      slug: "hb",
      abbreviation: "Hb"
  },
  {
      number: 59,
      name: "Tiago",
      slugByLang:
      {
          de: "tg",
          en: "jas",
          pt: "tg"
      },
      slug: "tg",
      abbreviation: "Tg"
  },
  {
      number: 60,
      name: "1 Pedro",
      slugByLang:
      {
          de: "1pe",
          en: "1pet",
          pt: "1pe"
      },
      slug: "1pe",
      abbreviation: "1 Pe"
  },
  {
      number: 61,
      name: "2 Pedro",
      slugByLang:
      {
          de: "2pe",
          en: "2pet",
          pt: "2pe"
      },
      slug: "2pe",
      abbreviation: "2 Pe"
  },
  {
      number: 62,
      name: "1 João",
      slugByLang:
      {
          de: "1johannes",
          en: "1john",
          pt: "1jo"
      },
      slug: "1jo",
      abbreviation: "1 Jo"
  },
  {
      number: 63,
      name: "2 João",
      slugByLang:
      {
          de: "2jo",
          en: "2john",
          pt: "2jo"
      },
      slug: "2jo",
      abbreviation: "2 Jo"
  },
  {
      number: 64,
      name: "3 João",
      slugByLang:
      {
          de: "3jo",
          en: "3john",
          pt: "3jo"
      },
      slug: "3jo",
      abbreviation: "3 Jo"
  },
  {
      number: 65,
      name: "Judas",
      slugByLang:
      {
          de: "jd",
          en: "jude",
          pt: "jd"
      },
      slug: "jd",
      abbreviation: "Jd"
  },
  {
      number: 66,
      name: "Apocalipse",
      slugByLang:
      {
          de: "of",
          en: "rev",
          pt: "ap"
      },
      slug: "ap",
      abbreviation: "Ap"
  }
];

export default livros;
export { totalCapitulos };
