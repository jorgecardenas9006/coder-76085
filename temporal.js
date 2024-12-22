//query para montar productos a la BD
db.productos.insertMany([
    {
      "nombre": "The Legend of Zelda",
      "categoria": "Aventura",
      "consola": {
        "plataformas": ["Nintendo Switch"],
        "tipos": ["Físico", "Digital"]
      },
      "edadRecomendada": 12,
      "precio": 59.99,
      "adicionales": {
        "multiplayer": false,
        "expansiones": ["The Champion's Ballad", "The Master Trials"]
      },
      "img": "../public/img/zelda.png",
      "descripcion": "En The Legend of Zelda: Breath of the Wild, los jugadores se sumergen en un vasto y dinámico mundo abierto lleno de paisajes impresionantes y misterios por resolver. Como Link, deberás explorar desde verdes praderas hasta montañas nevadas, enfrentándote a enemigos variados y utilizando un arsenal de armas y habilidades únicas. El juego fomenta la creatividad y el ingenio, permitiéndote resolver problemas de múltiples maneras y descubrir secretos en cada rincón de Hyrule mientras trabajas para derrotar al malvado Calamity Ganon."
    },
    {
      "nombre": "God of War: Ragnarok",
      "categoria": "Acción",
      "consola": {
        "plataformas": ["PlayStation 5"],
        "tipos": ["Físico", "Digital"]
      },
      "edadRecomendada": 18,
      "precio": 69.99,
      "adicionales": {
        "multiplayer": false,
        "edicionEspecial": true
      },
      "img": "../public/img/godofwar.png",
      "descripcion": "God of War: Ragnarok lleva a los jugadores al corazón de la mitología nórdica, donde Kratos y su hijo Atreus deben enfrentar un destino inminente. Con un combate visceral y cinematográfico, el juego profundiza en la relación entre padre e hijo, mientras desentrañan secretos de su linaje y enfrentan dioses temibles como Thor y Odin. Los paisajes detallados y la narrativa emocionalmente cargada convierten a esta secuela en una experiencia inolvidable."
    },
    {
      "nombre": "Minecraft",
      "categoria": "Sandbox",
      "consola": {
        "plataformas": ["Nintendo Switch", "PlayStation 5", "Xbox Series X"],
        "tipos": ["Físico", "Digital"]
      },
      "edadRecomendada": 7,
      "precio": 29.99,
      "adicionales": {
        "multiplayer": true,
        "modsDisponibles": true
      },
      "img": "../public/img/minecraft.png",
      "descripcion": "Minecraft es el lienzo perfecto para la creatividad, donde los jugadores pueden construir desde casas modestas hasta complejas ciudades flotantes. El modo supervivencia agrega un toque de desafío, exigiendo habilidades de recolección y lucha contra criaturas nocturnas. Con actualizaciones constantes, una vibrante comunidad y opciones multijugador, el juego sigue siendo una experiencia atemporal para todas las edades."

    },
    {
      "nombre": "Call of Duty: Modern Warfare II",
      "categoria": "Shooter",
      "consola": {
        "plataformas": ["PlayStation 5"],
        "tipos": ["Físico", "Digital"]
      },
      "edadRecomendada": 18,
      "precio": 69.99,
      "adicionales": {
        "multiplayer": true,
        "temporadas": ["Season 1", "Season 2"]
      },
      "img": "../public/img/callofduty.jpg",
      "descripcion": "Call of Duty: Modern Warfare II redefine el género de disparos en primera persona con una campaña cinematográfica y emocionante que te pone en el corazón de misiones tácticas. Su modo multijugador altamente competitivo presenta nuevos mapas, modos y una personalización avanzada de armas, ofreciendo infinitas horas de acción."
    },
    {
      "nombre": "Animal Crossing: New Horizons",
      "categoria": "Simulación",
      "consola": {
        "plataformas": ["Nintendo Switch"],
        "tipos": ["Físico", "Digital"]
      },
      "edadRecomendada": 3,
      "precio": 49.99,
      "adicionales": {
        "multiplayer": true,
        "expansiones": ["Happy Home Paradise"]
      },
      "img": "../public/img/animal.jpg",
      "descripcion": "En Animal Crossing: New Horizons, los jugadores pueden escapar a una isla tropical personalizable, interactuar con personajes adorables y recolectar recursos para construir un hogar. El juego ofrece una experiencia relajante con eventos estacionales y actividades multijugador que fomentan la creatividad y la conexión social."
    },
    {
      "nombre": "FIFA 24",
      "categoria": "Deportes",
      "consola": {
        "plataformas": ["PlayStation 5"],
        "tipos": ["Físico", "Digital"]
      },
      "edadRecomendada": 3,
      "precio": 59.99,
      "adicionales": {
        "multiplayer": true,
        "modoCarrera": true
      },
      "img": "../public/img/fifa.png",
      "descripcion": "FIFA 24 eleva la experiencia del fútbol virtual con gráficos realistas, controles refinados y modos inmersivos como Ultimate Team y Carrera. Compite contra amigos o enfréntate a desafíos globales mientras lideras a tu equipo favorito hacia la victoria."
    },
    {
      "nombre": "Hogwarts Legacy",
      "categoria": "RPG",
      "consola": {
        "plataformas": ["Xbox Series X"],
        "tipos": ["Físico", "Digital"]
      },
      "edadRecomendada": 12,
      "precio": 69.99,
      "adicionales": {
        "multiplayer": false,
        "edicionColeccionista": true
      },
      "img": "../public/img/howarts.jpg",
      "descripcion": "Hogwarts Legacy te permite vivir la experiencia definitiva del mundo mágico de Harry Potter. Explora un Hogwarts detallado, aprende hechizos y desentraña una trama cautivadora que te hará sentir parte del universo creado por J.K. Rowling."
    },
    {
      "nombre": "Elden Ring",
      "categoria": "RPG",
      "consola": {
        "plataformas": ["PlayStation 5"],
        "tipos": ["Físico", "Digital"]
      },
      "edadRecomendada": 18,
      "precio": 59.99,
      "adicionales": {
        "multiplayer": true,
        "expansiones": ["Shadow of the Erdtree"]
      },
      "img": "../public/img/lord.jpg",
      "descripcion": "Elden Ring es un viaje inolvidable por un vasto mundo abierto creado por Hidetaka Miyazaki y George R.R. Martin. Enfréntate a enemigos formidables, resuelve misterios profundos y forja tu destino en este épico juego de rol."
    },
    {
      "nombre": "Super Mario Odyssey",
      "categoria": "Plataformas",
      "consola": {
        "plataformas": ["Nintendo Switch"],
        "tipos": ["Físico", "Digital"]
      },
      "edadRecomendada": 3,
      "precio": 59.99,
      "adicionales": {
        "multiplayer": false,
        "idiomas": ["Inglés", "Español", "Francés"]
      },
      "img": "../public/img/mario.jpg",
      "descripcion": "Super Mario Odyssey lleva a los jugadores a través de mundos vibrantes y llenos de sorpresas mientras Mario intenta rescatar a Peach de las garras de Bowser. Usa la habilidad de captura de Cappy para poseer objetos y enemigos, desbloqueando nuevas formas de resolver puzzles y superar desafíos."
    },
    {
      "nombre": "Cyberpunk 2077",
      "categoria": "RPG",
      "consola": {
        "plataformas": ["PlayStation 5"],
        "tipos": ["Físico", "Digital"]
      },
      "edadRecomendada": 18,
      "precio": 49.99,
      "adicionales": {
        "multiplayer": false,
        "expansiones": ["Phantom Liberty"]
      },
      "img": "../public/img/cyberpunk.jpg",
      "descripcion": "En Cyberpunk 2077, los jugadores exploran Night City, una metrópolis vibrante y llena de posibilidades. Con un enfoque en narrativa profunda, personalización de personajes y acción de alto impacto, el juego ofrece una visión provocadora de un futuro distópico."
    },
    {
      "nombre": "The Witcher 3: Wild Hunt",
      "categoria": "RPG",
      "consola": {
        "plataformas": ["PlayStation 5", "Xbox Series X"],
        "tipos": ["Físico", "Digital"]
      },
      "edadRecomendada": 18,
      "precio": 39.99,
      "adicionales": {
        "expansiones": ["Hearts of Stone", "Blood and Wine"]
      },
      "img": "../public/img/witcher.png",
      "descripcion": "The Witcher 3: Wild Hunt es un galardonado juego de rol que narra las aventuras de Geralt de Rivia, un cazador de monstruos en busca de su hija adoptiva Ciri. El juego ofrece un vasto mundo abierto lleno de paisajes detallados, criaturas místicas y misiones desafiantes. Con expansiones como 'Hearts of Stone' y 'Blood and Wine', la experiencia de juego se enriquece con nuevas historias, enemigos y tierras para explorar. Perfecto para los amantes de la narrativa y la fantasía."
    },
    {
      "nombre": "Fortnite",
      "categoria": "Battle Royale",
      "consola": {
        "plataformas": ["PlayStation 5", "Nintendo Switch", "Xbox Series X"],
        "tipos": ["Digital"]
      },
      "edadRecomendada": 12,
      "precio": 1,
      "adicionales": {
        "multiplayer": true,
        "temporadas": ["Season 4", "Season 5"]
      },
      "img": "../public/img/fortnite.png",
      "descripcion": "Fortnite es un fenómeno cultural en el género Battle Royale, conocido por su dinámica de construcción y sus emocionantes combates. Los jugadores compiten en un entorno siempre cambiante debido a sus temporadas temáticas, como la épica 'Season 4' y 'Season 5'. Con modos creativos y de supervivencia, Fortnite ofrece una experiencia única para jugadores de todas las edades, aunque requiere habilidades estratégicas y reflejos rápidos para sobrevivir."
    },
    {
      "nombre": "Resident Evil 4 Remake",
      "categoria": "Terror",
      "consola": {
        "plataformas": ["PlayStation 5", "Xbox Series X"],
        "tipos": ["Físico", "Digital"]
      },
      "edadRecomendada": 18,
      "precio": 59.99,
      "adicionales": {
        "multiplayer": false
      },
      "img": "../public/img/resident.jpg",
      "descripcion": "Resident Evil 4 Remake reinventa un clásico del género de terror. En este juego, sigues a Leon S. Kennedy en una misión para rescatar a la hija del presidente, enfrentándote a hordas de enemigos aterradores y desentrañando oscuros secretos en un pueblo remoto. Con gráficos actualizados y mecánicas mejoradas, este remake mantiene la esencia del original mientras eleva la tensión y el desafío para los fanáticos del terror."
    },
    {
      "nombre": "League of Legends",
      "categoria": "MOBA",
      "consola": {
        "plataformas": ["PC"],
        "tipos": ["Digital"]
      },
      "edadRecomendada": 12,
      "precio": 0,
      "adicionales": {
        "multiplayer": true,
        "pasesDeBatalla": true
      },
      "img": "../public/img/legends.jpg",
      "descripcion": "League of Legends es uno de los juegos multijugador más populares del mundo. Como jugador, te sumerges en combates estratégicos por equipos, controlando campeones únicos con habilidades especiales. Con constantes actualizaciones, eventos y un sistema de pases de batalla, ofrece una experiencia competitiva inmersiva. Ideal para quienes buscan acción intensa y tácticas avanzadas."
    },
    {
      "nombre": "Apex Legends",
      "categoria": "Shooter",
      "consola": {
        "plataformas": ["PlayStation 5", "Xbox Series X", "PC"],
        "tipos": ["Digital"]
      },
      "edadRecomendada": 16,
      "precio": 0,
      "adicionales": {
        "multiplayer": true,
        "temporadas": ["Season 15", "Season 16"]
      },
      "img": "../public/img/apex.jpg",
      "descripcion": "Apex Legends es un juego de disparos en primera persona que redefine el género Battle Royale con un enfoque en personajes únicos conocidos como 'Leyendas'. Cada temporada, como la 15 y 16, añade nuevo contenido, armas y mapas. La jugabilidad rápida y el diseño estratégico lo convierten en una opción emocionante para quienes buscan acción intensa en equipo."
    },
    {
      "nombre": "Mario Kart 8 Deluxe",
      "categoria": "Carreras",
      "consola": {
        "plataformas": ["Nintendo Switch"],
        "tipos": ["Físico", "Digital"]
      },
      "edadRecomendada": 3,
      "precio": 49.99,
      "adicionales": {
        "multiplayer": true,
        "expansiones": ["Booster Course Pass"]
      },
      "img": "../public/img/mariokart.jpg",
      "descripcion": "Mario Kart 8 Deluxe es un juego de carreras emocionante que reúne a los personajes icónicos de Nintendo en circuitos llenos de acción y color. Con el 'Booster Course Pass', se agregan nuevas pistas para mantener la experiencia fresca. Compatible con multijugador local y en línea, es perfecto para diversión familiar o competiciones intensas con amigos."
    },
    {
      "nombre": "Overwatch 2",
      "categoria": "Shooter",
      "consola": {
        "plataformas": ["PlayStation 5", "Xbox Series X", "PC"],
        "tipos": ["Digital"]
      },
      "edadRecomendada": 12,
      "precio": 0,
      "adicionales": {
        "multiplayer": true,
        "temporadas": ["Season 7"]
      },
      "img": "../public/img/overwatch-2.webp",
      "descripcion": "Overwatch 2 lleva el popular shooter en equipos a un nuevo nivel, con una combinación de personajes memorables y mecánicas competitivas. La 'Season 7' introduce mapas y eventos únicos, ofreciendo una experiencia renovada tanto para nuevos jugadores como para veteranos. Con modos PvP y cooperativos, es un título imperdible en el género de acción."
    }
]);