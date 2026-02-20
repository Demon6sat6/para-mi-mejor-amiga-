const mensajes = [
    // --- GRATITUD Y APOYO (1-25) ---
    "Eres la hermana que la vida me permitió elegir. ❤️",
    "Gracias por estar en mis peores días y celebrar mis mejores momentos.",
    "Si el mundo fuera un poquito más como tú, sería un lugar increíble. ✨",
    "No sé qué hice para merecer una amiga como tú, pero qué suerte la mía.",
    "Eres mi lugar seguro cuando todo lo demás es un caos. 🌈",
    "Gracias por escuchar mis dramas como si fueran la serie más interesante de Netflix. 🍿",
    "Eres de esas personas que te hacen reír cuando jurabas que no podías más. 😂",
    "Contigo las penas pesan la mitad y las alegrías valen el doble. 🌻",
    "Tu amistad es el mejor regalo que he recibido en la vida. 🎁",
    "Gracias por no juzgarme cuando tomo decisiones dudosas. 🥂",
    "Eres mi persona favorita para hablar de todo y de nada a la vez. 🗣️",
    "Gracias por creer en mí incluso cuando ni yo mismo lo hacía. 💖",
    "Eres la persona más leal que conozco, gracias por nunca fallarme. 🛡️",
    "Nuestra amistad es de esas que duran toda la vida y más allá. 🤞",
    "Gracias por ser mi terapia gratuita y mi mejor consejera. 🧠",
    "Tu apoyo es el motor que me ayuda a seguir adelante. 🏎️",
    "Amo que pueda ser yo mismo cuando estoy contigo. 🔓",
    "Gracias por recordarme quién soy cuando se me olvida. 🌟",
    "Eres el hombro en el que siempre puedo llorar y la mano que me levanta. 🤝",
    "No hay distancia que pueda separar una amistad tan fuerte como la nuestra. 🌍",
    "Gracias por cada consejo, cada abrazo y cada minuto de tu tiempo. ⏳",
    "Eres mi familia, mi sangre no, pero mi alma sí. ❤️",
    "Gracias por compartir tu luz conmigo. 🕯️",
    "Eres la única persona que entiende mis silencios. 😶",
    "Nuestra conexión es algo que no se puede explicar con palabras. ✨",

    // --- MOTIVACIÓN Y VALOR (26-50) ---
    "¡Eres una mujer increíble e imparable! Créetelo de una vez. 🚀",
    "Si hoy el día se ve gris, recuerda que tú brillas más que el sol. ☀️",
    "No permitas que nadie apague esa luz tan bonita que tienes. 🌟",
    "Eres más fuerte de lo que crees y más valiente de lo que pareces. 💪",
    "¡Vas a lograr todo lo que te propongas, estaré en primera fila aplaudiéndote!",
    "Eres inteligente, capaz y sobre todo, una persona maravillosa. 💎",
    "Si necesitas un recordatorio de lo mucho que vales, ¡aquí estoy yo! 🙋‍♂️",
    "Eres un 10/10 en todo lo que haces. No aceptes menos. 🔥",
    "El mundo es mucho mejor porque tú estás en él. 🌍",
    "Tu potencial no tiene límites, ve por todo. 📈",
    "Nunca te rindas, porque lo que tú haces, nadie lo hace igual. 🏆",
    "Eres una guerrera y siempre sales victoriosa de tus batallas. ⚔️",
    "Tu sonrisa tiene el poder de cambiarle el día a cualquiera. 😊",
    "Eres pura inspiración para todos los que te rodeamos. 🎨",
    "Que nadie te diga que no puedes, porque tú naciste para brillar. ✨",
    "Eres el éxito hecho persona. 🥇",
    "Tu valentía es lo que más admiro de ti. 🦁",
    "Mantén tu cabeza siempre en alto, reina, que se te cae la corona. 👑",
    "Eres una joya escasa y preciosa. 💎",
    "Cree en ti tanto como yo creo en ti. 💖",
    "Eres capaz de mover montañas si te lo propones. 🏔️",
    "No dejes que los miedos te detengan, tú eres fuego. 🔥",
    "Tu bondad es tu mayor superpoder. 🦸‍♀️",
    "Eres arte en un mundo que a veces olvida mirar la belleza. 🖼️",
    "Haces que lo difícil parezca fácil con tu actitud. 😎",

    // --- ALEGRÍA Y CÓMPLICES (51-75) ---
    "Nuestros audios de 10 minutos son mi podcast favorito. 🎙️",
    "Eres la combinación perfecta de locura y buen corazón. ❤️",
    "Amo que tengamos el mismo nivel de locura. Es una conexión única. 🤡",
    "Gracias por no dejarme hacer locuras... ¡sola! 👯‍♀️",
    "Si nos arrestan por locas, recuerda que somos compañeras de celda. ⛓️😂",
    "Eres la persona con la que quiero ser una viejita gruñona en el futuro. 👵",
    "Gracias por ser mi cómplice en cada aventura y cada travesura. 🕵️‍♀️",
    "Nuestra risa es el mejor remedio para cualquier mal día. 😂",
    "Amo que sepamos lo que la otra piensa solo con mirarnos. 👀",
    "Eres la única persona a la que le respondería un mensaje a las 3 AM. 🌙",
    "Gracias por aguantar mis tonterías con una sonrisa. 🤪",
    "Contigo hasta ir al supermercado es una aventura. 🛒",
    "Nuestra amistad es como el Wi-Fi: siempre estamos conectados. 📶",
    "Eres mi persona favorita para perder el tiempo. ⏳",
    "Gracias por ser mi 'person' en este mundo loco. 🌍",
    "Amo nuestras charlas interminables sobre la vida. 🗣️",
    "Eres la única que sabe todos mis secretos y aún así me quieres. 🤐",
    "Por más viajes, cenas y risas juntas este año. ✈️",
    "Eres el ingrediente secreto para que mi vida sea perfecta. 🍰",
    "Gracias por ser la música en mis días de silencio. 🎶",
    "Eres mi mejor recuerdo y mi mejor presente. 📸",
    "Nuestra amistad no tiene precio, pero vale millones. 💰",
    "Gracias por ser mi ancla cuando el mar está picado. ⚓",
    "Eres la persona más divertida del planeta, oficial. 🤡",
    "¡Qué aburrida sería mi vida si no te hubiera conocido! 😴",

    // --- DETALLES Y CIERRE (76-100) ---
    "Pasaba por aquí para recordarte que te quiero muchísimo. ❤️",
    "Eres una bendición en mi vida, nunca lo dudes. 🙏",
    "Tu felicidad es mi prioridad número uno. 😊",
    "Eres un ser humano excepcional, nunca cambies. ✨",
    "Gracias por ser tú, sin filtros y con todo el corazón. 🙌",
    "Eres paz en medio de la tormenta. 🕊️",
    "Tu amistad me hace ser una mejor persona cada día. 📈",
    "Haces que todo sea más bonito con solo estar presente. 🌸",
    "Eres mi gran orgullo, amiga. 🎖️",
    "Gracias por abrirme las puertas de tu corazón. 🚪❤️",
    "Eres luz, eres vida, eres todo lo que está bien. 🌟",
    "Nunca olvides que siempre tendrás un lugar en mi casa y en mi alma. 🏠",
    "Eres mi estrella favorita en este universo. ⭐",
    "Gracias por regalarme los mejores años de mi vida. 🗓️",
    "Eres una persona auténtica y eso es lo que más amo de ti. 💎",
    "Tu energía es contagiosa, nunca dejes de vibrar así. 🔋",
    "Eres la definición de una amistad verdadera. 🤞",
    "Gracias por enseñarme lo que significa la lealtad. 🛡️",
    "Eres un regalo del cielo que cuido todos los días. 🌌",
    "Tu alegría es mi motor diario. 🏎️",
    "Eres magia pura caminando por este mundo. ✨",
    "Gracias por ser mi confidente y mi mejor amiga. ❤️",
    "Nunca dejes de soñar en grande, ¡tú puedes con todo! 🚀",
    "Eres lo más bonito que me ha pasado en mucho tiempo. 🌹",
    "¡Te quiero infinito, hoy y siempre! ❤️♾️"
];

let mazo = [...mensajes];
let leidos = 0;

const btn = document.getElementById('btn-mensaje');
const texto = document.getElementById('mensaje');
const contador = document.getElementById('count');

btn.addEventListener('click', () => {
    if (mazo.length === 0) {
        mazo = [...mensajes];
        leidos = 0;
    }

    const index = Math.floor(Math.random() * mazo.length);
    const msg = mazo[index];
    mazo.splice(index, 1);

    leidos++;
    contador.innerText = leidos;

    texto.style.opacity = '0';
    texto.style.transform = 'scale(0.9)';

    setTimeout(() => {
        texto.innerText = msg;
        texto.style.opacity = '1';
        texto.style.transform = 'scale(1)';
        
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff85a1', '#ffd60a', '#4cc9f0', '#ffffff']
        });
    }, 200);
});