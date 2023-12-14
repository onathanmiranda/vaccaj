const songs = [
  {
    id: "1",
    title: "Escala Diatônica",
    slug: "manca-solecitta",
    beginning: "Manca solecitta",
    recordingIds: ["1", "2", "3", "4", "5", "82", "83", "84", "85", "86"],
    sheetsList: ["1", "2", "3"],
    instructions: "Nessa primeira lição, Vaccaj não agrupou as letras das sílabas italianas de acordo com as regras corretas de escrita, mas de uma forma que o aluno irá perceber, de imediato, como sua voz deverá se alongar nas vogais, sustentando a nota, para em seguida articular rapidamente a consoante da próxima sílaba. Isso irá facilitar o aluno a adquirir o que os italianos chamam de Canto Legato.",
    lyrics:
      "Manca sollecita \n più dell´usato, \n ancor che s`agiti \n con lieve fiato, \n face che palpita \n presso al morir.",
  },
  {
    id: "2",
    title: "Intervalos de Terça",
    slug: "semplicetta-tortorella",
    beginning: "Semplicetta tortorella",
    recordingIds: ["6", "7", "8", "9"],
    sheetsList: ["4", "5", "6"],
    instructions: null,
    lyrics:
      "Semplicetta tortorella, \n che non vede il suo periglio, \n per fuggir dal crudo artiglio \n vola in grembo al cacciator.",
  },
  {
    id: "3",
    title: "Intervalos de Quarta",
    slug: "lascia-il-lido",
    beginning: "Lascia il lido",
    recordingIds: ["10", "11"],
    sheetsList: ["7", "8", "9"],
    instructions: null,
    lyrics:
      "Lascia il lido, e il mare infido \n a solcar torna il nocchiero, \n e pur sa che menzognero \n altre volte l'ingannò.",
  },
  {
    id: "4",
    title: "Intervalos de Quinta",
    slug: "avvezzo-a-vivere",
    beginning: "Avvezzo a vivere",
    recordingIds: ["12", "13", "14"],
    sheetsList: ["10", "11", "12"],
    instructions: null,
    lyrics:
      "Avvezzo a vivere \n senza conforto, \n in mezzo al porto \n pavento il mar.",
  },
  {
    id: "5",
    title: "Intervalos de Sexta",
    slug: "bella-prova",
    beginning: "Bella prova é d'alma forte",
    recordingIds: ["15", "16"],
    sheetsList: ["13", "14", "15"],
    instructions: null,
    lyrics:
      "Bella prova è d'alma forte \n l'esser placida e serena \n nel soffrir l'ingiusta pena \n d'una colpa, che non ha.",
  },
  {
    id: "6",
    title: "Intervalos de Sétima",
    slug: "fra-lombre-um-lampo",
    beginning: "Fra l'ombre un lampo solo",
    recordingIds: ["17", "18"],
    sheetsList: ["16", "17", "18"],
    instructions: null,
    lyrics:
      "Fra l'ombre un lampo solo \n basta al nocchier sagace \n che già ritrova il polo, \n che riconosce il mar.",
  },
  {
    id: "7",
    title: "Intervalos de Oitava",
    slug: "quell-onda-che-ruina",
    beginning: "Quell' onda che ruina",
    recordingIds: ["19", "20"],
    sheetsList: ["19", "20", "21"],
    instructions: null,
    lyrics:
      "Quell' onda che ruina, \n balza, si frange e mormora, \n ma limpida si fa.",
  },
  {
    id: "8",
    title: "Semitons",
    slug: "delira-dubbiosa",
    beginning: "Delira dubbiosa",
    recordingIds: ["21", "22", "23", "24"],
    sheetsList: ["22", "23"],
    instructions: null,
    lyrics:
      "Delira dubbiosa, \n incerta, vaneggia \n ogni almache ondeggia. \n fra i moti del cor.",
  },
  {
    id: "9",
    title: "Síncope",
    slug: "nel-contrastor-amor",
    beginning: "Nel contrasto amor accende",
    recordingIds: ["25", "26"],
    sheetsList: ["24", "25"],
    instructions: null,
    lyrics:
      "Nel contrasto amor s'accende: \n con chi cede, o chi s'arrende \n mai sì barbaro non è.",
  },
  {
    id: "10",
    title: "Introdução à Coloratura* (volate)",
    slug: "come-il-candore",
    beginning: "Come il candore",
    recordingIds: ["27", "28", "29", "30", "31", "32", "33", "34", "35", "36"],
    sheetsList: ["26", "27"],
    instructions: "Inicialmente, o estudante deverá estudar esse exercício no tempo mais lento. \nEm seguida, ele deverá praticar com um allegro preciso, progressivamente, conforme conseguir. \nAs escalas deverão sera cantadas com muita suavidade, uniformidade e fluidez; porém com cada nota clara e distinta. Evite sons trêmulos e imprecisos.",
    lyrics:
      "Come il candore \n d'intatta neve \n è d'un bel core \n la fedeltà. \n Un' orma sola \n che in sé riceve, \n tutta ne invola \n la sua beltà.",
  },
  {
    id: "11",
    title: "Appoggiaturas",
    slug: "senza-lamabile",
    beginning: "Senza l'amabile",
    recordingIds: ["37", "38", "39", "40", "41"],
    sheetsList: ["28", "29"],
    instructions: "A appoggiatura é o mais expressivo de todos os adornos musicais. O efeito é obtido ao “pegar emprestado” o valor indicado da nota seguinte. Em algumas ocasiões, o cantor deverá aumentar brevemente o tempo da nota (porém nunca deverá diminuí-la).",
    lyrics:
      "Senza l'amabile \n Dio di Citera \n i dì non tornano \n di primavera, \n non spira un zeffiro, \n non spunta un fior.\n L´erbe sul margine \n del fonte amico, \n le piante vedove \n sul colle aprico \n per lui rivestono \n l´antico onor.",
  },
  {
    id: "12",
    title: "Acciaccaturas",
    slug: "benche-di-senso-privo",
    beginning: "Benchè di senso privo",
    recordingIds: ["42", "43", "44", "45", "46"],
    sheetsList: ["30", "31"],
    instructions: "A Acciaccatura se diferencia da Appoggiatura ao não “pegar emprestado” nada do valor da nota seguinte, embora ela intensifique levemente seu valor. Ela deve ser cantada com extrema leveza e facilidade, suavidade, roubando o menor tempo possível das notas que a precedem.",
    lyrics:
      "Benchè di senso privo, \n fin l`arboscello è grato \n a quell'amico rivo, \n da cui riceve umor. \n per lui di fronde ornato \n bella mercè gli rende, \n dal sol quando difende \n il suo benefattor.",
  },
  {
    id: "13",
    title: "Introdução aos Mordentes",
    slug: "la-gioia-verace",
    beginning: "La gioia verace",
    recordingIds: ["47", "48", "49", "50"],
    sheetsList: ["32", "33"],
    instructions: "De todos os ornamentos musicais, os Gruppettos (Turns) são, de imediato, os mais variado e mais difíceis, pela aparente facilidade e leveza com que devem ser executados. Essa técnica consiste de 2 ou 3 notas, and consegue transmitir um charme ao canto sem influenciar o sentimento do fraseado ou das passagens individuais, nem a intenção geral do compositor. Ela é, portanto, a única licença que o cantor pode, ocasionalmente, tomar por conta própria. \n Entretanto, o menor indício de esforço ou intenção estragará seu efeito.",
    lyrics:
      "la gioja verace \n per farsi palese, \n d´un labbro loquace \n bisogno non ha.",
  },
  {
    id: "14",
    title: "Mordentes Variados",
    slug: "laugelletto-in-lacci-stretto",
    beginning: "L'augelletto in lacci stretto",
    recordingIds: ["51", "52", "53", "54"],
    sheetsList: ["34", "35"],
    instructions: null,
    lyrics:
      "L´augelletto in lacci stretto \n perchè mai cantar s´ascolta? \n Perchè spera un´ altra volta \n di tornare in libertà.",
  },
  {
    id: "15",
    title: "Introdução aos Grupetos",
    slug: "quando-accende-un-nobil-petto",
    beginning: "Quando accende un nobil petto",
    recordingIds: ["55", "56"],
    sheetsList: ["36", "37"],
    instructions: "Para o estudo dos Gruppettos (Turns), o estudante deverá seguir as mesmas instruções dadas para a Lição VII.",
    lyrics:
      "Quando accende un nobil petto \n è innocente, è puro affetto, \n debolezza amor non è.",
  },
  {
    id: "16",
    title: "Grupetos",
    slug: "piu-non-si-trovano",
    beginning: "Più non si trovano",
    recordingIds: ["57", "58"],
    sheetsList: ["38", "39"],
    instructions: null,
    lyrics:
      "Più non si trovano \n tra mille amanti \n sol due bell' anime \n che sian costanti, \n e tutti parlano \n di fedeltà.",
  },
  {
    id: "17",
    title: "Introdução aos Trinados* (Introduzione al trillo)",
    slug: "se-povero-il-ruscello",
    beginning: "Se povero il ruscello",
    recordingIds: ["59", "60", "61", "62"],
    sheetsList: ["40", "41"],
    instructions: null,
    lyrics:
      "Se povero il ruscello \n mormora lento e basso; \n un ramoscello, un sasso \n quasi arrestar lo fa.",
  },
  {
    id: "18",
    title: "Coloraturas* (Le volate)",
    slug: "siam-navi-all-onde-algenti",
    beginning: "Siam navi all' onde algenti",
    recordingIds: ["63", "64", "65"],
    sheetsList: ["42", "43"],
    instructions: null,
    lyrics:
      "Siam navi all' onde algenti \n lasciate in abbandono: \n impetuosi venti \n i nostri affetti sono: \n ogni diletto è scoglio: \n tutta la vita è un mar.",
  },
  {
    id: "19",
    title: "Portamento I",
    slug: "vorrei-spiegar-laffanno",
    beginning: "Vorrei spiegar l'affanno",
    recordingIds: ["66", "67", "68"],
    sheetsList: ["44", "45"],
    instructions: "Para adquirir um Portamento efetivo, o estudante deve tomar cuidado para não ligar uma nota à outra com aquele tremor que se ouve em vozes mal treinadas. Pelo contrário, ele deverá misturar os diferentes registros e ligar as notas de forma que elas pareçam fluir em um tom uniforme. \n Quando a verdadeira arte de frasear for dominada conforme indicado pela Lição I, o Portamento irá oferecer pouca dificuldade - porém aqui, mais do que nunca, a demonstração por um professor ou cantor proficiente é de primeira importância. \n Devemos adicionar também que o Portamento pode ser articulado por “antecipação” ou por “atraso”. No primeiro, o cantor ataca o valor da próxima nota com a vogal da sílaba anterior, como foi demonstrado nas instruções da Lição I. Em frases que pedem um sentimento mais expressivo, essa forma é altamente efetiva. Por essa razão, não deve ser usada em excesso, pois seu abuso pode soar afetado e a música irá se tornar cada vez mais lânguida e monótona. No segundo método, que é menos comum, o cantor ataca quase imperceptivelmente a sílaba seguinte com o valor da sílaba que a precede.",
    lyrics:
      "Vorrei spiegar l´affanno, \n nasconderlo vorrei; \n e mentre i dubbi miei \n così crescendo vanno, \n tutto spiegar non oso, \n tutto non so tacer. \n Sollecito, dubbioso, \n penso, rammento e vedo; \n e agli occhi miei non credo, \n non credo al mio pensier.",
  },
  {
    id: "20",
    title: "Portamento II",
    slug: "o placido il mare",
    beginning: "O placido il mare",
    recordingIds: ["69", "70", "71"],
    sheetsList: ["46", "47"],
    instructions: null,
    lyrics:
      "O placido il mare \n lusinghi la sponda, \n o porti con l´onda \n terrore e spavento, \n è colpa del vento, \n sua colpa non è.",
  },
  {
    id: "21",
    title: "Recitativo",
    slug: "la-patria-e-un-tutto",
    beginning: "La patria è un tutto",
    recordingIds: ["72", "73", "74"],
    sheetsList: ["48", "49"],
    instructions: "Não é preciso dizer, porém não há nenhum lugar onde a enunciação de cada palavra e sílaba é tão importante quando em um Recitativo - de outra forma, ele não atingirá seu objetivo. Quando nos deparamos com duas notas similares ao fim das frases, ou várias notas repetidas ao longo de uma frase, a nota sobre a qual a ênfase da palavra recai deverá ser convertida em uma appoggiatura da nota seguinte. Para exemplificar, nós marcamos com um “A” onde essas notas ocorrem no exercício.",
    lyrics:
      "La patria è un tutto \n di cui siam parti \n al cittadino è fallo \n considerar sè stesso \n separato da lei. \n L´utile, o il danno, \n ch'ei conoscer dee solo \n è ciò che giova \n o nuoce alla sua patria, \n a cui di tutto è debitor. \n Quando i sudori, \n e il sangue sparge per lei, \n nulla del proprio ei dona: \n rende sol ciò che n'ebbe. \n Essa il produsse, \n l'educò, lo nudrì. \n Con le sue leggi \n dagl'insulti domestici il difende, \n dagli esterni con l'armi. \n Ella gli presta nome, \n grado, ed onor; \n ne premia il merto; \n ne vendica le offese, \n e madre amante \n a fabbricar s'affanna \n la sua felicità, \n per quanto lice \n al destin de' mortali \n esser felice.",
  },
  {
    id: "22",
    title: "Recapitulação",
    slug: "alla-stagion-de-fiori",
    beginning: "Alla stagion de' fiori",
    recordingIds: ["75", "76", "77", "78"],
    sheetsList: ["50", "51"],
    instructions: "A recapitulação de todas as regras dadas nos exercícios anteriores",
    lyrics:
      "Alla stagion de' fiori \n e de' novelli amori \n è grato il molle fiato \n d'un zeffiro legger. \n O gema fra le fronde \n o lento increspi l'onde: \n zeffiro in ogni lato \n compagno è del piacer.",
  },
  {
    id: "23",
    title: "Staccato",
    slug: null,
    beginning: "Hi Hi Hi",
    recordingIds: ["79"],
    sheetsList:[],
    instructions:
      'Fazer o exercício em "staccato": seu diafragma deverá se mover para dentro a cada "Hi", no ritmo e velocidade da música.',
    lyrics: null,
  },
  {
    id: "24",
    title: "Legato",
    slug: null,
    beginning: "OOO / III",
    recordingIds: ["80"],
    sheetsList:[],
    instructions:
      'Cantar a melodia em legato.\n\nSopranos, mezzo-sopranos e contraltos deverão cantar a letra "i".\nTenores, barítonos e baixos deverão cantar a letra "o".',
    lyrics: null,
  },
  {
    id: "25",
    title: "Legato & Legato + Staccato",
    slug: null,
    beginning: "AAAOOO / IIIOOO",
    recordingIds: ["81"],
    sheetsList:[],
    instructions:
      'Faça o exercício primeiro em legato com duas vogais, e depois repita todo o exercício fazendo a primeira vogal em legato e a segunda vogal em staccato.\n\nSopranos, mezzo-sopranos e contraltos deverão fazer o execício com as letras "i" e "o".\nTenores, barítonos e baixos deverão fazer com as letras "a" e "o".',
    lyrics: null,
  },
  {
    id: "26",
    title: "Hey - Intervalo Curto",
    slug: "hey-intervalo-curto",
    beginning: "",
    recordingIds: ["87"],
    sheetsList:[],
    instructions:
      'Esse exercício tem a intenção de trabalhar o conceito de exercitar a passagem para os registros do belting, em vez dos registros operísticos. O objetivo é fazer as notas beltadas de maneira consistente durante a subida e a descida. Deixe sua voz levemente anasalada, em uma colocação de som mais "chiaro". Isso irá permitir que você adquira a ressonância e projeção do belting, que é um som menos cheio do que o de canto clássico.',
    lyrics: null,
  },
  {
    id: "27",
    title: "Hey - Intervalo Longo",
    slug: "hey-intervalo-longo",
    beginning: "",
    recordingIds: ["88"],
    sheetsList:[],
    instructions:
      'Igual ao exercício anterior, porém com um intervalo de uma oitava inteira. A passagem para o registro do belting deverá ser feita sem esforço. Caso haja dificuldade, experimente variar a colocação antes de tentar trocar o tom ou oitava. Esse exercício tem a intenção de trabalhar o conceito de exercitar a passagem para os registros do belting, em vez dos registros operísticos. O objetivo é fazer as notas beltadas de maneira consistente durante a subida e a descida. Deixe sua voz levemente anasalada, em uma colocação de som mais "chiaro". Isso irá permitir que você adquira a ressonância e projeção do belting, que é um som menos cheio do que o de canto clássico.',
    lyrics: null,
  },
  {
    id: "28",
    title: "Yeah",
    slug: "yeah",
    beginning: "",
    recordingIds: ["89"],
    sheetsList:[],
    instructions:
      'Esse exercício, assim como os dois primeiros, foi projetado para trabalhar a passagem para o registro do belting com intervalos grandes. Entretanto, sem o "glissando" entre as notas para ajudar a acomodar a mudança de registro, esse exercício pode ser mais complicado. Você deve gerantir que as notas graves da subida sejam feitas de forma relaxada e o mais frontal (anasalado) possível. Dessa forma, sua voz será guiada à colocação do belting mais aguda e apropriada, a partir de onde será mais fácil fazer a descida.',
    lyrics: null,
  },
  {
    id: "29",
    title: "Yeah - Arpeggio",
    slug: "yeah-arpeggio",
    beginning: "",
    recordingIds: ["90"],
    sheetsList:[],
    instructions:
      'Outro exercício de belting com intervalos. Esse deve ser executado da forma mais "conversacional" possível. Basicamente, se você conseguir "falar" as notas durante o exercício, você conseguirá belta-las. O som de "yeah" irá ajudar a colocar cada nota no registro correto, já que começa com um pequeno "e" e expande para um "ah" bem claro e metálico, que é uma excelente vogal para a mecânica do belting.',
    lyrics: null,
  },
  {
    id: "30",
    title: "Né - Sons Repetidos",
    slug: "ne-sons-repetidos",
    beginning: "",
    recordingIds: ["91"],
    sheetsList:[],
    instructions:
      'Se você está tendo alguma dificuldade com nasalidade ou colocação frontal, que realmente cria a sonoridade do belting, esse exercício é para você. O som claro e metálico do "é" aberto coloca a voz bem à frente no palato e auxilia na correta fonação ao começar com um "n" fechado a cada nota. Mais uma vez, esse exercício deve ser feito de forma "conversacional", para o alcance da colocação adequada.',
    lyrics: null,
  },
  {
    id: "31",
    title: "Aleluia",
    slug: "aleluia",
    beginning: "",
    recordingIds: ["92"],
    sheetsList:[],
    instructions:
      'Tente atingir a mesma colocação dos exercícios anteriores com a palavra "Aleluia".',
    lyrics: null,
  },
  {
    id: "32",
    title: "01 - Escalas Maiores",
    slug: "panofka-op81-n01",
    beginning: "",
    recordingIds: ["93", "118", "145"],
    sheetsList: ["52", "78"],
    instructions: "Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  },
  {
    id: "33",
    title: "02 - Escalas Menores",
    slug: "panofka-op81-n02",
    beginning: "",
    recordingIds: ["94", "119", "146"],
    sheetsList: ["53"],
    instructions: "Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  },
  {
    id: "34",
    title: "03 - Agilidade",
    slug: "panofka-op81-n03",
    beginning: "",
    recordingIds: ["95", "120", "147"],
    sheetsList: ["54"],
    instructions: "Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  },
  {
    id: "35",
    title: "04 - Agilidade",
    slug: "panofka-op81-n04",
    beginning: "",
    recordingIds: ["96", "121", "148"],
    sheetsList: ["55"],
    instructions: "Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  },
  {
    id: "36",
    title: "05 - Tercinas",
    slug: "panofka-op81-n05",
    beginning: "",
    recordingIds: ["97", "122", "149"],
    sheetsList: ["56"],
    instructions: "Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  },
  {
    id: "37",
    title: "06 - Tercinas",
    slug: "panofka-op81-n06",
    beginning: "",
    recordingIds: ["98", "124", "150"],
    sheetsList: ["57"],
    instructions: "Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  },
  {
    id: "38",
    title: "07 - Grupos de Duas Notas Arrastadas",
    slug: "panofka-op81-n07",
    beginning: "",
    recordingIds: ["99", "125", "151"],
    sheetsList: ["58"],
    instructions: "Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  },
  {
    id: "39",
    title: "08 - Portamento",
    slug: "panofka-op81-n08",
    beginning: "",
    recordingIds: ["100", "126", "152"],
    sheetsList: ["59"],
    instructions: "Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  },
  {
    id: "40",
    title: "09 - Portamento",
    slug: "panofka-op81-n09",
    beginning: "",
    recordingIds: ["101", "127", "153"],
    sheetsList: ["60"],
    instructions: "Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  },
  {
    id: "41",
    title: "10 - Portamento",
    slug: "panofka-op81-n10",
    beginning: "",
    recordingIds: ["102", "128", "154"],
    sheetsList: ["61"],
    instructions: "Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  },
  {
    id: "42",
    title: "11 - Portamento",
    slug: "panofka-op81-n11",
    beginning: "",
    recordingIds: ["103", "129", "155"],
    sheetsList: ["62"],
    instructions: "Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  },
  {
    id: "43",
    title: "12 - Portamento",
    slug: "panofka-op81-n12",
    beginning: "",
    recordingIds: ["104", "130", "156"],
    sheetsList: ["63"],
    instructions: "Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  },
  {
    id: "44",
    title: "13 - Notas Pontuadas",
    slug: "panofka-op81-n13",
    beginning: "",
    recordingIds: ["105", "131", "157"],
    sheetsList: ["64"],
    instructions: "Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  },
  {
    id: "45",
    title: "14 - Síncope",
    slug: "panofka-op81-n14",
    beginning: "",
    recordingIds: ["106", "132", "158"],
    sheetsList: ["65"],
    instructions: "Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  },
  {
    id: "46",
    title: "15 - Legato",
    slug: "panofka-op81-n15",
    beginning: "",
    recordingIds: ["107", "133", "159"],
    sheetsList: ["66"],
    instructions: "Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  },
  {
    id: "47",
    title: "17 - Estudo Preparatório para o Vibrato - Allegro Molto",
    slug: "panofka-op81-n17-allegro-molto",
    beginning: "",
    recordingIds: ["108", "135", "161"],
    sheetsList: ["68"],
    instructions: "Pratique primeiro Lento, em seguida Moderato, Allegro e Allegro molto. \n Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  },
  {
    id: "48",
    title: "18 - Agilidade",
    slug: "panofka-op81-n18",
    beginning: "",
    recordingIds: ["109", "137", "163"],
    sheetsList: ["69"],
    instructions: "Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  },
  {
    id: "49",
    title: "19 - Vibratos",
    slug: "panofka-op81-n19",
    beginning: "",
    recordingIds: ["110", "138", "164"],
    sheetsList: ["70"],
    instructions: "Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  },
  {
    id: "50",
    title: "21 - Arpejos",
    slug: "panofka-op81-n21",
    beginning: "",
    recordingIds: ["111", "140", "166"],
    sheetsList: ["72"],
    instructions: "Pratique também em Staccato. \n Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  },
  {
    id: "51",
    title: "22 - Escala Cromática",
    slug: "panofka-op81-n22",
    beginning: "",
    recordingIds: ["112", "141", "167"],
    sheetsList: ["73"],
    instructions: "Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  },
  {
    id: "52",
    title: "23 - Estudo em Cromáticas",
    slug: "panofka-op81-n23",
    beginning: "",
    recordingIds: ["113", "142", "168"],
    sheetsList: ["74"],
    instructions: "Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  },
  {
    id: "53",
    title: "24 - Intervalos",
    slug: "panofka-op81-n24",
    beginning: "",
    recordingIds: ["114", "143", "169"],
    sheetsList: ["75"],
    instructions: "Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  },
  {
    id: "54",
    title: "16 - Apogiatura, Grupeto, Turn e Mordente Invertido",
    slug: "panofka-op81-n16",
    beginning: "",
    recordingIds: ["115", "134", "160"],
    sheetsList: ["76"],
    instructions: false,
    lyrics: null,
  },
  {
    id: "55",
    title: "20 - Arpejos",
    slug: "panofka-op81-n20",
    beginning: "",
    recordingIds: ["116", "139", "160"],
    sheetsList: ["77"],
    instructions: "Pratique também em Staccato. \n Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  },
  {
    id: "56",
    title: "Aplicação e Controle do Ar",
    slug: "exercicio-diafragma-controle-do-ar",
    beginning: "Sssss",
    recordingIds: ["117"],
    sheetsList:[],
    instructions: "Antes de iniciar o exercício, esvazie todo o ar, empurrando a barriga para dentro. \n Em seguida, respire enchendo a barriga de ar (se você for iniciante, pode puxar o ar pela boca). \n Em seguida faça 4 staccatos soltando o ar com o som de \"sss\". Respire brevemente de novo para recuperar o ar e em seguida solte o ar em legatto durante 4 tempos com o som de \"sss\". \n Conforme o exercício avança você irá perceber que o tempo dos legattos irá aumentar de 4 em 4 tempos. Controle o fluxo da saída de ar durante os tempos legattos (evite empurrar o ar). \nO objetivo desse exercício conseguir esvaziar o ar no tempo certo, seja em 4 tempos (soltando muito ar), seja em 32 tempos (soltando pouco ar). \n Não se preocupe se no início não conseguir chegar aos 32 tempos, a prática diária o levará a isso.",
    lyrics: null,
  },
  {
    id: "57",
    title: "17 - Estudo Preparatório para o Vibrato - Moderato",
    slug: "panofka-op81-n17-moderato",
    beginning: "",
    recordingIds: ["170", "136", "162"],
    sheetsList: ["68"],
    instructions: "Pratique primeiro Lento, em seguida Moderato, Allegro e Allegro molto. \n Sopranos, Mezzo-Sopranos e Contraltos deverão cantar as melodias com a vogal \"i\". \n Tenores, Barítonos e Baixos deverão fazer cantas as melodias com a vogal \"o\".",
    lyrics: null,
  }
];

export default songs;