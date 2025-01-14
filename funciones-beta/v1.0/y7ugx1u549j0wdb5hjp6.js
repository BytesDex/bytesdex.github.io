class AsistenteInteligente {
    constructor() {
        this.chatContainer = document.getElementById('chatContainer');
        this.userInput = document.getElementById('userInput');
        this.sendButton = document.getElementById('sendButton');
        this.typingIndicator = document.getElementById('typingIndicator');

        this.configurarEventos();
    }

    configurarEventos() {
        this.sendButton.addEventListener('click', () => this.procesarMensaje());
        this.userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.procesarMensaje();
        });
    }

    procesarMensaje() {
        const mensaje = this.userInput.value.trim();
        if (!mensaje) return;

        this.agregarMensaje('usuario', mensaje);
        this.userInput.value = '';
        this.mostrarIndicadorEscritura();

        setTimeout(() => {
            this.ocultarIndicadorEscritura();
            const respuesta = this.generarRespuesta(mensaje);
            if (respuesta) {
                this.agregarMensaje('bot', respuesta);
            } else {
                this.respuestaNoEntendida();
            }
        }, 1500);
    }

    generarRespuesta(mensaje) {
        return this.obtenerRespuesta(mensaje);
    }

    obtenerRespuesta(mensaje) {
        const mensajeLower = mensaje.toLowerCase();
        
const regexPrimo = /(me gusta mi primo|estoy enamorado de mi primo|siento algo por mi primo|mi primo me atrae|tengo sentimientos por mi primo)/i;

if (regexPrimo.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Las relaciones familiares deben ser tratadas con mucho cuidado. Si estás sintiendo algo confuso, puede ser útil hablar con un profesional que pueda ayudarte a entender mejor tus emociones.",
        
        "Es completamente natural tener sentimientos complejos, pero los lazos familiares deben ser tratados con respeto y cuidado. Buscar ayuda de un terapeuta o consejero puede ser una excelente forma de procesar estos sentimientos.",
        
        "Cuando surgen sentimientos complicados hacia un miembro de la familia, puede ser útil hablar con un profesional para entender qué está sucediendo y cómo manejarlo de una manera saludable.",
        
        "Es importante recordar que las relaciones familiares deben basarse en el respeto y el apoyo mutuo. Si te sientes confundido o incómodo con estos sentimientos, hablar con un terapeuta puede ayudarte a aclarar lo que estás experimentando.",
        
        "Entiendo que estos sentimientos pueden ser confusos. Si sientes que no sabes cómo manejarlo, te recomiendo hablar con un profesional que pueda ofrecerte el apoyo adecuado.",
        
        "Los sentimientos hacia miembros de la familia pueden ser complejos, y es importante buscar apoyo para entender lo que estás sintiendo. Un terapeuta o consejero puede proporcionarte orientación para manejar esta situación de manera saludable.",
        
        "Cuando te enfrentas a sentimientos difíciles hacia un primo o cualquier otro miembro de la familia, hablar con un profesional de salud mental puede ser una forma excelente de obtener claridad y apoyo."
    ]);
}
        
const regexHermana = /(me gusta mi hermana|estoy enamorado de mi hermana|siento algo por mi hermana|mi hermana me atrae|tengo sentimientos por mi hermana)/i;

if (regexHermana.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Es importante recordar que los lazos familiares deben ser respetados y tratados con cuidado. Si te sientes confundido acerca de tus sentimientos, hablar con un profesional podría ayudarte a entender mejor lo que estás experimentando.",
        
        "Este tipo de sentimientos pueden ser complicados y confusos. Te recomiendo que hables con un terapeuta o consejero para comprender mejor lo que sientes y cómo manejarlo de manera saludable.",
        
        "Los lazos familiares son muy importantes y deben mantenerse dentro de un marco de respeto. Si estás pasando por algo que te hace sentir incómodo o confundido, buscar apoyo emocional puede ser muy útil.",
        
        "Es completamente natural sentirse confundido por ciertos sentimientos, pero es fundamental tratar los vínculos familiares con respeto. Un profesional de la salud mental puede ayudarte a procesar estos sentimientos de forma saludable.",
        
        "Si estás experimentando sentimientos complejos hacia tu hermana, hablar con un terapeuta puede proporcionarte el apoyo adecuado para aclarar tus emociones y saber cómo manejarlas de la mejor manera.",
        
        "Las relaciones familiares deben ser respetuosas y saludables. Si tienes dudas sobre lo que sientes, puede ser útil hablar con un consejero o terapeuta para explorar estos sentimientos con más claridad.",
        
        "Es importante comprender que los lazos familiares son fundamentales. Si tienes sentimientos que te confunden, buscar ayuda profesional puede ser una manera efectiva de procesarlos y encontrar una resolución saludable."
    ]);
}
        
const regexHermano = /(me gusta mi hermano|estoy enamorado de mi hermano|siento algo por mi hermano|mi hermano me atrae|tengo sentimientos por mi hermano)/i;

if (regexHermano.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Es importante recordar que los lazos familiares son muy especiales y deben ser tratados con respeto. Si te sientes confundido acerca de tus sentimientos, podría ser útil hablar con un profesional para entender mejor lo que sientes.",
        
        "Este es un tema delicado. Si sientes que tus sentimientos son confusos o difíciles de manejar, te sugiero que hables con un profesional para que te pueda ayudar a comprenderlos mejor.",
        
        "Los sentimientos familiares son muy fuertes, pero si estás pasando por algo que te hace sentir incómodo o confundido, es importante buscar apoyo emocional, como terapia o hablar con alguien de confianza.",
        
        "Los lazos familiares deben ser respetuosos y protectores. Si estás lidiando con sentimientos complicados, hablar con un terapeuta o un consejero podría ayudarte a manejarlos de la mejor manera.",
        
        "Es totalmente válido tener sentimientos complejos, pero es importante saber que hay profesionales que pueden ayudarte a manejar esos sentimientos de forma saludable.",
        
        "El respeto por los lazos familiares es crucial. Si tienes dudas sobre lo que sientes, puede ser útil hablar con un profesional que te ayude a aclarar cualquier confusión.",
        
        "Este tipo de sentimientos puede ser difícil de manejar. No está mal buscar ayuda para entenderlos y manejarlos de una manera que te haga sentir bien contigo mismo.",
        
        "Es importante tener en cuenta que los sentimientos hacia los familiares cercanos pueden ser complicados. Hablar con un profesional podría ayudarte a lidiar con estas emociones de manera más saludable."
    ]);
}
        
const regexAmiga = /(me gusta mi amiga|estoy enamorado de mi amiga|me atrae mi amiga|me encanta mi amiga|tengo sentimientos por mi amiga|mi amiga me gusta|siento algo por mi amiga|me siento atraído por mi amiga|mi amiga es genial|estoy interesado en mi amiga)/i;

if (regexAmiga.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Qué interesante! A veces los sentimientos hacia una amiga pueden ser confusos, lo importante es ser honesto contigo mismo y con ella para no afectar la amistad.",
        
        "¡Vaya! Tener sentimientos por una amiga puede ser complicado. Asegúrate de manejarlo con cuidado para preservar la relación de amistad.",
        
        "¡Eso suena complicado! A veces, los sentimientos surgen de manera inesperada. Reflexiona sobre si deseas compartirlo con ella o mantenerlo como parte de la amistad.",
        
        "¡Qué curioso! Es normal sentirse atraído por una amiga, pero es importante pensar en las consecuencias de expresar esos sentimientos, para no dañar la amistad.",
        
        "¡Interesante! Es importante tener claro si quieres que esa relación pase a otro nivel o si prefieres mantener la amistad tal cual está.",
        
        "¡Eso puede ser un tema complicado! Si decides hablar con ella, asegúrate de hacerlo de una manera que respete su espacio y los sentimientos de ambos.",
        
        "¡Qué emocionante! Los sentimientos por una amiga pueden llevar a situaciones nuevas en la relación. Tómate tu tiempo para decidir cómo quieres manejarlo.",
        
        "¡Eso es un tema delicado! Si te atreves a hablar con ella, es importante ser honesto, pero también ser respetuoso de sus sentimientos y de lo que ella pueda pensar.",
        
        "¡Eso debe ser complicado! Mantén siempre la comunicación abierta, pero no olvides que la amistad es valiosa y debería ser respetada independientemente de lo que sientas.",
        
        "¡Qué interesante! Si decides expresarlo, hazlo con cautela, ya que puede cambiar la dinámica de la amistad. Asegúrate de estar listo para cualquier respuesta.",
        
        "¡Vaya, eso puede ser un dilema! A veces, compartir esos sentimientos puede acercarte más a ella, pero siempre hay que considerar cómo afectará la relación a largo plazo.",
        
        "¡Entiendo! Es importante evaluar si deseas que tu amistad evolucione o si prefieres mantener las cosas como están. No hay una respuesta correcta, solo la que te haga sentir más cómodo.",
        
        "¡Vaya! Si sientes que debes hablarlo, ten en cuenta que lo más importante es ser sincero, pero también ser consciente de los sentimientos de ella para no poner en riesgo la amistad.",
        
        "¡Eso puede ser un tema complejo! Tener sentimientos por una amiga es algo normal, pero hay que ser cuidadoso con lo que se dice para no generar incomodidades.",
        
        "¡Eso suena complicado! Si decides hablar con ella, asegúrate de hacerlo en un momento adecuado, y recuerda que cualquier respuesta debe ser respetuosa con ambos."
    ]);
}
        
const regexPrima = /(me gusta mi prima|me enamoré de mi prima|me atrae mi prima|me encanta mi prima|tengo sentimientos por mi prima|mi prima me gusta|siento algo por mi prima|mi prima es genial|me siento atraído por mi prima)/i;

if (regexPrima.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Vaya, eso puede ser algo complicado! A veces, los sentimientos pueden ser difíciles de entender, pero lo importante es saber cómo manejarlos.",
        
        "¡Qué curioso! Las relaciones familiares pueden ser complicadas a veces, y es importante reflexionar sobre lo que sientes para poder tomar decisiones sabias.",
        
        "¡Entiendo! Los sentimientos hacia un familiar pueden ser confusos. Es importante siempre evaluar qué es lo mejor para ti y para los demás.",
        
        "¡Eso es algo delicado! Las relaciones familiares tienen muchas dinámicas y es importante tener en cuenta cómo puede afectar a todos los involucrados.",
        
        "¡Vaya! Tener esos sentimientos puede ser complejo, es importante siempre reflexionar y considerar las implicaciones de este tipo de situaciones.",
        
        "¡Eso debe ser un tema complicado! Las relaciones familiares tienen sus propias normas, y es esencial entender cómo manejar esas emociones para no lastimar a nadie.",
        
        "¡Interesante! A veces es difícil separar los sentimientos personales de la dinámica familiar, pero siempre es importante manejar las situaciones con madurez y respeto.",
        
        "¡Eso puede ser un tema delicado! Lo más importante es siempre actuar con respeto hacia los demás y ser consciente de las implicaciones de tus sentimientos.",
        
        "¡Entiendo! Las relaciones familiares son complejas, y tener sentimientos por un miembro de la familia puede traer complicaciones. Asegúrate de reflexionar sobre lo que realmente sientes.",
        
        "¡Eso suena complicado! Es normal tener diferentes tipos de sentimientos, pero siempre es importante analizar cómo las decisiones pueden afectar a la familia en general.",
        
        "¡Es un tema sensible! Si sientes algo así, es crucial que lo pienses bien y te asegures de comprender las consecuencias de tus emociones en tu entorno familiar.",
        
        "¡Eso es algo que debe tratarse con mucha reflexión! Las relaciones familiares deben basarse en respeto mutuo, y es importante ser consciente de cómo tus sentimientos pueden influir en la dinámica familiar.",
        
        "¡Es una situación compleja! Reflexionar sobre los sentimientos y cómo manejarlos de manera saludable es esencial, sobre todo en un contexto familiar.",
        
        "¡Esa es una situación difícil! Es importante ser consciente de cómo pueden cambiar las relaciones familiares en este tipo de casos y pensar en lo que es mejor para todos.",
        
        "¡Eso suena delicado! Las emociones pueden ser difíciles de manejar en situaciones como esta, pero lo más importante es ser respetuoso y considerar los efectos que puede tener en tu entorno."
    ]);
}
        
const regexSuegra = /(me gusta mi suegra|suegra|me llevo bien con mi suegra|me encanta mi suegra|mi suegra es genial|mi suegra es fantástica|amo a mi suegra|suegra favorita|me caen bien las suegras)/i;

if (regexSuegra.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Vaya, parece que tienes una suegra increíble! ¡Seguro que te cuida como si fueras su hijo!",
        
        "¡Eso suena bastante positivo! Tener una suegra que te gusta es un verdadero tesoro. ¡Suerte en mantenerla contenta!",
        
        "¡Jajaja! ¡Me imagino que las reuniones familiares deben ser muy divertidas si tienes una suegra tan genial!",
        
        "¡Qué curioso! Muchos dicen que la relación con la suegra puede ser algo complicada, pero tú parece que has encontrado la excepción. ¡Qué suerte!",
        
        "¡Jajaja! Tener una suegra que te gusta es como tener un segundo madre. ¡Eso es muy bonito!",
        
        "¡Qué curioso! Algunos dicen que el amor por la suegra es como el vino, mejora con los años. ¿Será tu caso?",
        
        "¡Parece que tienes una suegra de 10! Seguro que ella también te aprecia mucho por llevarte tan bien con ella.",
        
        "¡Jajaja, qué divertido! Tener una suegra que te gusta seguro que te hace sentir parte de la familia al 100%.",
        
        "¡Qué suerte! Tener una buena relación con la suegra es un verdadero regalo. ¡Seguro que las reuniones familiares son un éxito!",
        
        "¡Qué bien! Una relación positiva con la suegra es rara y muy apreciada. ¡Seguro que tienes un trato excelente!",
        
        "¡Parece que tienes suerte! La mayoría de las personas no siempre se lleva bien con su suegra, pero tú eres una excepción.",
        
        "¡Increíble! Hay quienes dicen que una buena suegra es una joya, y parece que la tuya es un diamante en bruto.",
        
        "¡Qué genial! Tener una suegra que te gusta debe ser una bendición, ¡seguro que te cuidan mucho!",
        
        "¡Vaya! No todos tienen la suerte de llevarse tan bien con la suegra. ¡Debes ser un gran yerno!",
        
        "¡Oye, qué bien! Tener una suegra que te cae bien es como ganar en la vida, ¡sigue así!"
    ]);
}
      
const regexTierra = /(que es la tierra|qué sabes de la tierra|que es la tierra|dime sobre la tierra|hablame de la tierra|la tierra es|de qué trata la tierra|explícame qué es la tierra)/i;

if (regexTierra.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "La Tierra es el tercer planeta del sistema solar y el único conocido hasta ahora que alberga vida. Tiene un diámetro de aproximadamente 12,742 kilómetros y está compuesta principalmente de agua y rocas. Su atmósfera contiene oxígeno, nitrógeno y otros gases que permiten la vida.",
        
        "La Tierra es un planeta rocoso con una atmósfera que nos protege de la radiación solar y mantiene temperaturas adecuadas para la vida. Su superficie está cubierta en un 71% por agua, y el resto está compuesto por continentes y montañas.",
        
        "La Tierra forma parte de un sistema solar que gira alrededor del Sol. Tiene una inclinación axial de aproximadamente 23.5 grados, lo que provoca las estaciones del año. Su campo magnético la protege de los vientos solares y las partículas cargadas que podrían dañar la vida.",
        
        "Nuestro planeta tiene una edad estimada de 4.5 mil millones de años y, aunque no es el planeta más grande ni el más cercano al Sol, es el único lugar conocido en el universo donde existen seres vivos. Su diversidad ecológica es impresionante, desde selvas tropicales hasta desiertos áridos.",
        
        "La Tierra tiene una atmósfera compuesta principalmente de nitrógeno y oxígeno, y gracias a ella podemos respirar. Además, la atmósfera juega un papel crucial en el clima de la Tierra y en la protección contra radiaciones dañinas del Sol.",
        
        "La Tierra se mueve de dos maneras principales: gira sobre su eje, lo que genera el día y la noche, y orbita alrededor del Sol, lo que crea el ciclo de las estaciones. Este movimiento tiene un gran impacto en el clima y la vida en el planeta.",
        
        "La Tierra está situada a una distancia ideal del Sol para mantener temperaturas que permiten el agua en estado líquido, lo cual es esencial para la vida tal como la conocemos. Este fenómeno se llama 'zona habitable'.",
        
        "La superficie de la Tierra está constantemente cambiando debido a la tectónica de placas. Esto ha dado lugar a la formación de montañas, terremotos y volcanes, y sigue dando forma al planeta de manera dinámica.",
        
        "La Tierra es única porque su atmósfera y sus condiciones permiten que el agua exista en los tres estados: sólido, líquido y gas. Esto la convierte en un planeta especial para la vida, ya que el agua es un recurso esencial para todos los organismos vivos.",
        
        "La Tierra es hogar de una increíble biodiversidad. Hay millones de especies, muchas de las cuales aún no han sido descubiertas. La conservación del medio ambiente y la protección de los ecosistemas son fundamentales para preservar esta diversidad."
    ]);
}
        
const regexSol = /(que es el sol|qué sabes del sol|qué es el sol|dime sobre el sol|hablame del sol|el sol es|de qué trata el sol|explícame qué es el sol)/i;

if (regexSol.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "El Sol es una estrella ubicada en el centro de nuestro sistema solar. Está compuesto principalmente de hidrógeno y helio, y genera energía a través de un proceso llamado fusión nuclear. Esta energía es la que nos proporciona luz y calor, y es esencial para la vida en la Tierra.",
        
        "El Sol es una esfera de plasma extremadamente caliente que emite luz y calor. Tiene un diámetro de aproximadamente 1.39 millones de kilómetros, lo que lo hace unas 109 veces más grande que la Tierra. Su energía es vital para todos los procesos en nuestro planeta.",
        
        "El Sol es la estrella más cercana a la Tierra y su energía se genera a través de la fusión nuclear en su núcleo. En esta reacción, el hidrógeno se convierte en helio, liberando enormes cantidades de energía. Sin esta energía, la vida en la Tierra no sería posible.",
        
        "Sabías que el Sol está aproximadamente a 150 millones de kilómetros de la Tierra? Esta distancia es la que conocemos como una unidad astronómica (UA). Aunque parece tan cerca, la luz del Sol tarda unos 8 minutos y 20 segundos en llegar a la Tierra.",
        
        "El Sol tiene una influencia enorme sobre el clima terrestre. Los cambios en la actividad solar, como las manchas solares y las erupciones solares, pueden afectar las condiciones meteorológicas en la Tierra, incluso causando alteraciones en las comunicaciones y el clima espacial.",
        
        "¿Sabías que el Sol tiene una edad estimada de unos 4.6 mil millones de años? Se estima que aún tiene alrededor de 5 mil millones de años de vida antes de que se convierta en una gigante roja y finalmente se transforme en una enana blanca.",
        
        "El Sol no es una esfera sólida, sino una masa de gas caliente en constante movimiento. La energía del Sol es tan intensa que la superficie del Sol, que se llama fotosfera, tiene una temperatura de aproximadamente 5,500 grados Celsius.",
        
        "El Sol experimenta ciclos de actividad solar que duran aproximadamente 11 años. Durante este ciclo, la cantidad de manchas solares aumenta y disminuye. Estas manchas solares pueden influir en el clima de la Tierra y en las auroras boreales.",
        
        "El Sol es tan grande que podría albergar 1.3 millones de planetas del tamaño de la Tierra en su interior. Sin embargo, a pesar de su tamaño, solo representa una de las muchas estrellas en nuestra galaxia, la Vía Láctea.",
        
        "¿Sabías que la energía solar es una fuente renovable de energía? A medida que las tecnologías mejoran, cada vez es más eficiente capturar y convertir la luz solar en energía eléctrica. ¡Una alternativa sostenible al uso de combustibles fósiles!"
    ]);
}
        
const regexInteresante = /(dime algo interesante|cuéntame algo interesante|di algo interesante|cuéntame algo curioso|tienes algo interesante que decir|dime algo curioso|quiero saber algo interesante)/i;

if (regexInteresante.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¿Sabías que las jirafas tienen un cuello tan largo debido a una mutación genética? Este cuello les permite comer hojas de árboles altos que otros animales no pueden alcanzar.",
        
        "¿Te has preguntado alguna vez por qué el cielo es azul? La luz del sol se dispersa en todas direcciones, pero la luz azul se dispersa más porque tiene una longitud de onda más corta. ¡Es un fenómeno llamado dispersión de Rayleigh!",
        
        "Aquí tienes una curiosidad sobre el espacio: si pudieras viajar a la velocidad de la luz, tomaría solo 8 minutos llegar al Sol. Sin embargo, te tomaría más de 4 años llegar a la estrella más cercana, Proxima Centauri.",
        
        "¡Qué interesante! Las medusas existen desde hace más de 500 millones de años, mucho antes que los dinosaurios. Estas criaturas están hechas en su mayoría de agua y no tienen cerebro ni corazón.",
        
        "Un dato curioso: los flamencos obtienen su color rosa debido a los carotenoides en su dieta. Si no comerán estos pigmentos, sus plumas serían blancas o grises.",
        
        "Las hormigas son capaces de cargar hasta 50 veces su propio peso. ¡Eso es como si un humano pudiera levantar un autobús!",
        
        "¿Sabías que el ojo humano puede distinguir hasta 10 millones de colores diferentes? Sin embargo, algunas personas tienen un tipo de daltonismo y no pueden distinguir ciertos colores como los rojos y verdes.",
        
        "Aquí va un hecho increíble: el agua que bebemos hoy podría haber sido bebida por dinosaurios hace millones de años. El agua circula en el ciclo del agua, así que lo que bebemos es parte de un sistema muy antiguo.",
        
        "El corazón humano late unas 100,000 veces al día, bombeando aproximadamente 7,570 litros de sangre a través de todo el cuerpo. ¡Es como si estuviera trabajando sin descanso!",
        
        "¿Sabías que las ballenas jorobadas tienen una canción que pueden cantar durante horas? Estas canciones pueden ser escuchadas por otras ballenas a miles de kilómetros de distancia.",
        
        "La Torre Eiffel se inclina un poco hacia el sol cuando hace calor. Esto se debe a la expansión del metal debido a las altas temperaturas.",
        
        "Los elefantes son conocidos por su increíble memoria. Pueden recordar rutas migratorias, ubicaciones de agua y a otros elefantes incluso después de años.",
        
        "Aquí va algo curioso: las mariposas saborean con sus patas. Tienen sensores químicos en sus patas que les permiten detectar si una planta es comestible o no.",
        
        "Sabías que las huellas de las patas de los koalas son casi idénticas a las de los seres humanos, hasta el punto de que pueden confundirse con las nuestras. ¡Pero aún así, son marsupiales!",
        
        "¿Te gustan los dinosaurios? Pues sabías que el T. rex no podía correr a gran velocidad como muchos piensan. Su velocidad máxima era de alrededor de 32 km/h, similar a un velocista humano.",
        
        "Una curiosidad sobre las tortugas marinas: algunas especies pueden vivir hasta 100 años. ¡Son de los animales más longevos del planeta!",
        
        "El famoso Monte Everest no es la montaña más alta del mundo, en realidad el monte Mauna Kea en Hawái lo es, aunque la mayor parte de él está bajo el agua.",
        
        "¿Sabías que el papel higiénico fue inventado en China durante la dinastía Tang, en el año 1391? ¡Era un lujo antes de que se masificara en todo el mundo!",
        
        "Los pingüinos no solo viven en el frío. Algunas especies, como el pingüino de Magallanes, viven en las costas de Sudamérica, donde el clima es más cálido.",
        
        "Los diamantes no siempre son inalcanzables. En realidad, existen diamantes en otros planetas, como en Júpiter, donde el alto calor y la presión crean diamantes de gran tamaño.",
        
        "Un dato curioso sobre la luna: la luna se aleja de la Tierra unos 3.8 centímetros cada año. A este ritmo, dentro de miles de millones de años, la Luna será tan lejana que no podremos verla como la vemos hoy."
    ]);
}
        
const regexChatGPT = /(que es chatgpt|qué es eso|qué es chatgpt|qué es gpt|qué es openai|qué es un modelo de lenguaje|qué es un chatbot|qué es una inteligencia artificial)/i;

if (regexChatGPT.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "ChatGPT es un modelo de lenguaje creado por OpenAI. Está diseñado para comprender y generar texto de manera coherente, basado en grandes cantidades de información y datos. Es como un asistente virtual que puede responder preguntas, generar ideas o ayudarte con tareas. ¿Te gustaría saber más sobre cómo funciona?",
        
        "ChatGPT es una inteligencia artificial desarrollada por OpenAI. Su propósito es ayudar a las personas generando respuestas naturales y coherentes a preguntas o solicitudes, basándose en datos previos. ¿Te interesa conocer más sobre cómo se entrenan estos modelos?",
        
        "¡Es una buena pregunta! ChatGPT es un modelo de lenguaje de inteligencia artificial creado por OpenAI. Está diseñado para entender y generar texto, y puede usarse para tareas como responder preguntas, crear contenido, entre otras cosas. ¿Te gustaría saber más sobre cómo interactuar conmigo?",
        
        "ChatGPT es un sistema basado en inteligencia artificial desarrollado por OpenAI. Es un modelo de lenguaje que puede entender preguntas y generar respuestas en lenguaje natural, similar a una conversación humana. ¿Te gustaría conocer más sobre los detalles técnicos de cómo funciona?",
        
        "¡Claro! ChatGPT es una creación de OpenAI, una inteligencia artificial entrenada para interactuar en lenguaje humano. Puede ayudarte con una amplia variedad de tareas, desde responder preguntas hasta generar contenido creativo. ¿Te gustaría explorar alguna de sus capacidades?"
    ]);
}
        
const regexArtistasLatam = /(shakira|bad bunny|j balvin|karol g|maluma|luis fonsi|daddy yankee|ricardo arjona|juanes|carlos vives|rosalía|ozuna|camila|anitta|marcos martin|sofia reyes|tini|cnco|ricky martin|alejandro sanz|farruko|mon laferte|la india|soda stereo|maná|gipsy kings|marc anthony|vicente fernandez|julion alvarez|alejandro fernandez|laura pausini)/i;

if (regexArtistasLatam.test(mensajeLower)) {
    if (/shakira/i.test(mensajeLower)) {
        return this.respuestaAleatoria([
            "Shakira, la 'reina del pop latino', sigue siendo una de las artistas más influyentes en el mundo. ¿Sabías que su primer álbum fue lanzado cuando solo tenía 13 años?",
            "¡Shakira! Un ícono mundial con su mezcla de música pop y ritmos latinos. ¿Te gustaría saber más sobre cómo su carrera ha trascendido generaciones?",
            "Desde sus primeros éxitos hasta su carrera global, Shakira ha revolucionado la música pop latina. ¿Qué canción de ella es tu favorita?"
        ]);
    }
    if (/bad bunny/i.test(mensajeLower)) {
        return this.respuestaAleatoria([
            "Bad Bunny es el máximo exponente del trap latino. ¿Sabías que su primer álbum debut alcanzó el puesto número 1 en las listas de Billboard?",
            "Bad Bunny no solo canta, también rompe estereotipos con su estilo único. ¿Te gustaría saber más sobre sus colaboraciones internacionales?",
            "El Conejo Malo ha dominado el reguetón y el trap, llevando la música urbana a otro nivel. ¿Cuál de sus canciones te ha impactado más?"
        ]);
    }
    if (/j balvin/i.test(mensajeLower)) {
        return this.respuestaAleatoria([
            "¡J Balvin ha revolucionado el reguetón! Su mezcla de pop y reguetón lo ha convertido en un fenómeno global. ¿Sabías que es conocido como el 'Príncipe del Reguetón'?",
            "J Balvin ha creado éxitos mundiales como 'Mi Gente'. ¿Te gustaría saber cómo ha logrado conquistar las listas globales con su estilo único?",
            "De Colombia para el mundo, J Balvin ha llevado el reguetón a nuevas alturas. ¿Te interesa conocer más sobre su impacto en la música urbana?"
        ]);
    }
    if (/karol g/i.test(mensajeLower)) {
        return this.respuestaAleatoria([
            "Karol G ha sido una pionera del reguetón femenino. Con su estilo propio, ha alcanzado la cima del éxito mundial. ¿Te gustaría saber más sobre su evolución?",
            "Karol G es una de las artistas más poderosas del reguetón. Ha colaborado con artistas como Nicki Minaj y Anuel AA. ¿Sabías que su tema 'Tusa' la catapultó a la fama?",
            "Karol G sigue rompiendo barreras en la música latina. ¿Qué opinas de su estilo y sus colaboraciones?"
        ]);
    }
    if (/maluma/i.test(mensajeLower)) {
        return this.respuestaAleatoria([
            "Maluma ha sido un líder del reguetón romántico. ¿Sabías que su éxito 'Felices los 4' fue uno de los más reproducidos en 2017?",
            "Con su voz única, Maluma se ha convertido en un ícono global. ¿Te gustaría saber más sobre su impacto en la música latina?",
            "Maluma es un fenómeno que no solo ha conquistado a Latinoamérica, sino al mundo entero. ¿Cuál es tu canción favorita de él?"
        ]);
    }
    if (/luis fonsi/i.test(mensajeLower)) {
        return this.respuestaAleatoria([
            "Luis Fonsi es conocido por su mega éxito 'Despacito'. Su voz y estilo han dejado una huella en la música mundial. ¿Te gustaría saber más sobre su carrera?",
            "Luis Fonsi ha estado en la industria por años, pero 'Despacito' lo llevó a la cima de la fama. ¿Qué opinas de su colaboración con Daddy Yankee?",
            "Con una carrera llena de baladas y éxitos internacionales, Luis Fonsi sigue siendo una leyenda de la música latina."
        ]);
    }
    if (/daddy yankee/i.test(mensajeLower)) {
        return this.respuestaAleatoria([
            "Daddy Yankee es conocido como el 'Rey del Reguetón'. ¿Sabías que su éxito 'Gasolina' fue uno de los primeros hits de reguetón en alcanzar popularidad internacional?",
            "Daddy Yankee ha sido un pionero del reguetón, y su influencia sigue siendo enorme. ¿Te gustaría saber más sobre su legado musical?",
            "Conocido por su gran voz y energía en el escenario, Daddy Yankee sigue siendo un referente del reguetón. ¿Qué opinas de su impacto en la industria?"
        ]);
    }
    if (/ricardo arjona/i.test(mensajeLower)) {
        return this.respuestaAleatoria([
            "Ricardo Arjona es un poeta de la música latina, conocido por sus profundas letras y su estilo único. ¿Te gustaría saber más sobre sus temas más populares?",
            "Con su mezcla de balada y pop latino, Ricardo Arjona ha tocado los corazones de millones. ¿Cuál es tu canción favorita de él?",
            "Ricardo Arjona ha sido uno de los artistas más queridos de la música latina. Su música tiene un toque especial que conecta con la audiencia."
        ]);
    }
    if (/juanes/i.test(mensajeLower)) {
        return this.respuestaAleatoria([
            "Juanes es uno de los artistas más importantes de Colombia, conocido por su estilo que fusiona el rock con música latina. ¿Te gustaría saber más sobre su evolución?",
            "Juanes ha sido un defensor de la paz y los derechos humanos a través de su música. ¿Sabías que ha ganado múltiples premios Grammy?",
            "Con su estilo único, Juanes ha llevado la música latina a audiencias globales. ¿Te gustaría saber más sobre sus temas más icónicos?"
        ]);
    }
    if (/rosalía/i.test(mensajeLower)) {
        return this.respuestaAleatoria([
            "¡Rosalía es una revolución en la música! Con su mezcla de flamenco, trap y reguetón, ha creado un estilo único. ¿Sabías que su álbum 'El Mal Querer' la catapultó al estrellato?",
            "Rosalía ha llevado el flamenco a la nueva era con un toque urbano. ¿Te gustaría conocer más sobre sus logros en la música mundial?",
            "Con su talento y creatividad, Rosalía se ha convertido en una de las artistas más innovadoras de la música latina. ¿Cuál es tu canción favorita de ella?"
        ]);
    }
    if (/ozuna/i.test(mensajeLower)) {
        return this.respuestaAleatoria([
            "Ozuna es conocido por su habilidad para fusionar el reguetón con otros géneros. ¿Te gustaría saber más sobre cómo ha marcado tendencia en la música urbana?",
            "¡Ozuna es increíble! Con su voz única y estilo inconfundible, ha conquistado el mundo. ¿Sabías que ha colaborado con artistas de todo el mundo?",
            "Ozuna ha sido uno de los principales artistas en la expansión del reguetón en todo el mundo. ¿Qué opinas de su impacto en la música latina?"
        ]);
    }
    if (/camila/i.test(mensajeLower)) {
        return this.respuestaAleatoria([
            "Camila ha conquistado a millones con sus baladas románticas y su estilo único. ¿Te gustaría conocer más sobre sus canciones más exitosas?",
            "¡Camila ha dejado huella en la música latina! Con su emotiva voz, ha tocado los corazones de su audiencia. ¿Cuál de sus canciones te gusta más?",
            "Camila ha sido una de las bandas más importantes de la música latina, conocida por sus letras profundas y su gran talento."
        ]);
    }
    if (/anitta/i.test(mensajeLower)) {
        return this.respuestaAleatoria([
            "Anitta ha revolucionado la música brasileña y latina, combinando pop, funk y reguetón. ¿Sabías que su éxito 'Vai Malandra' la hizo famosa internacionalmente?",
            "Anitta es un fenómeno global. Con su energía y estilo único, ha conquistado audiencias en todo el mundo. ¿Te gustaría saber más sobre su impacto?",
            "¡Anitta! Con su ritmo contagioso y su presencia en el escenario, ha dejado una marca indeleble en la música latina."
        ]);
    }
    if (/marcos martin/i.test(mensajeLower)) {
        return this.respuestaAleatoria([
            "Marcos Martín es conocido por su estilo único que mezcla música tradicional con influencias modernas. ¿Te gustaría saber más sobre su carrera?",
            "Con su talento y estilo propio, Marcos Martín ha ganado reconocimiento en la música latina. ¿Sabías que ha sido nominado a varios premios importantes?",
            "Marcos Martín ha hecho una gran contribución al género de la música latina, fusionando sonidos del pasado y del presente."
        ]);
    }
    if (/sofia reyes/i.test(mensajeLower)) {
        return this.respuestaAleatoria([
            "Sofía Reyes es una de las estrellas emergentes de la música latina, conocida por su estilo único. ¿Te gustaría saber más sobre sus últimas canciones?",
            "¡Sofía Reyes ha sido un soplo de aire fresco en la música pop latina! Ha trabajado con artistas como Jason Derulo. ¿Te interesa saber más sobre sus próximos proyectos?",
            "Con su talento y energía, Sofía Reyes ha logrado un lugar importante en la música latina. ¿Sabías que su éxito '1, 2, 3' fue un gran hit?"
        ]);
    }
}
        
const regexImagenes = /(puedes mandar imágenes|puedes mandar imagenes|puedes enviar imágenes|me puedes mandar imágenes|puedes mostrarme imágenes|envíame imágenes)/i;

if (regexImagenes.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Lo siento, no puedo enviar ni generar imágenes. Sin embargo, puedo ayudarte con información, responder preguntas o realizar tareas como cálculos o explicaciones. ¿En qué más te puedo ayudar?",
        
        "No, no puedo enviar ni generar imágenes, pero puedo ofrecerte respuestas a muchas otras preguntas o ayudarte con tareas específicas. ¡Pregúntame lo que quieras!",
        
        "Lamentablemente, no tengo la capacidad para enviar o generar imágenes. Pero puedo ofrecerte ayuda con texto, datos, o incluso ayudarte a resolver problemas y responder preguntas. ¿Hay algo más en lo que te gustaría que te asista?",
        
        "No puedo enviar imágenes, pero puedo ayudarte con texto, explicaciones, y otros tipos de tareas. Si tienes alguna pregunta o algo en lo que necesites ayuda, ¡estoy aquí para ayudarte!",
        
        "¡Lo siento! No puedo generar ni mandar imágenes, pero puedo hacer muchas otras cosas con texto. Si tienes alguna pregunta o algo en lo que necesitas asistencia, solo dime.",
        
        "No tengo la capacidad de mandar imágenes, pero si necesitas información o ayuda con algún tema, estaré encantado de asistirte. ¿Qué más te gustaría saber?",
        
        "No, no puedo enviar ni generar imágenes, pero puedo ayudarte a encontrar información, hacer cálculos, o resolver dudas. ¿Te gustaría saber algo más?",
        
        "No puedo mandar imágenes, pero si tienes alguna otra consulta o necesitas algo relacionado con texto o datos, ¡estoy a tu disposición para ayudarte!",
        
        "No tengo la capacidad de enviar imágenes, pero si tienes alguna otra pregunta o algo en lo que te gustaría que te ayude, ¡solo dime!"
    ]);
}
        
const regexMúsicaRecomendada = /(que música me recomiendas|qué música me recomiendas|que música recomiendas|recomiéndame música|música que debería escuchar|música para escuchar)/i;

if (regexMúsicaRecomendada.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Claro! Si te gustan los géneros relajantes, te recomiendo escuchar algo de música instrumental o chill. Artistas como Ludovico Einaudi o Tycho podrían ser perfectos para crear un ambiente tranquilo.",
        
        "¡Por supuesto! Si buscas algo con energía, ¿qué tal un poco de rock clásico? Bandas como Queen o The Beatles nunca fallan. Y si prefieres algo más moderno, puedes probar con Imagine Dragons o Arctic Monkeys.",
        
        "¡Tengo varias recomendaciones! Si te gusta la música electrónica, prueba escuchar a artistas como Avicii o Zedd. Si prefieres algo más tranquilo, algo de jazz o música lo-fi siempre es una excelente opción para relajarse.",
        
        "¡Qué buena pregunta! Si estás buscando algo fresco, te recomendaría algo de reggaetón o trap. Artistas como Bad Bunny o J Balvin tienen muchos éxitos. Pero si prefieres algo diferente, puedes probar música indie, como Tame Impala o Mac DeMarco.",
        
        "¡Genial! Si quieres algo relajado y calmante, la música acústica o de guitarras suaves puede ser lo que buscas. Te sugiero escuchar a Jack Johnson o John Mayer. Si te animas a algo más animado, las canciones de Dua Lipa o Billie Eilish pueden ser una opción divertida.",
        
        "¡Claro que sí! Si eres fan de la música clásica, hay muchos compositores fascinantes como Beethoven, Mozart o Chopin. Pero si te interesa algo más contemporáneo, quizás puedas disfrutar de artistas como Sia o Ed Sheeran.",
        
        "¡Sin duda! Si estás buscando algo alegre y bailable, la música latina siempre tiene algo para ofrecer. ¿Por qué no pruebas escuchar algo de salsa, bachata o merengue? Artistas como Marc Anthony o Juan Luis Guerra podrían ser una excelente opción.",
        
        "Si te gustan las mezclas de géneros, te recomiendo escuchar música alternativa o indie pop. Bandas como Vampire Weekend o Foster the People tienen canciones frescas y pegajosas. ¡Seguro que te encantarán!",
        
        "Si lo que buscas es relajarte, nada mejor que música chill-hop o lo-fi. Hay una gran variedad de listas de reproducción perfectas para estudiar o relajarse. También podrías escuchar algo de ambient, como Brian Eno.",
        
        "¿Te gustaría escuchar algo diferente? Si no tienes un género específico en mente, puedes probar con algunos clásicos del jazz, como Miles Davis o John Coltrane, o música electrónica experimental como Aphex Twin."
    ]);
}
        
const regexUltimaActualizacion = /(cuándo (fue|es|ha sido) (tu última actualización|la última vez que actualizaste|actualizaste)|última actualización)/i;

if (regexUltimaActualizacion.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Buena pregunta! Como soy una inteligencia artificial, me actualizo constantemente para ofrecerte mejores respuestas. No tengo una fecha fija, pero siempre intento mejorar y adaptarme a nuevas preguntas.",
        
        "Mi sistema se actualiza de forma continua. No tengo una fecha exacta, pero los desarrolladores mejoran mis capacidades y conocimientos regularmente para brindarte la mejor experiencia.",
        
        "Mi última actualización fue en el momento en que me entrenaron con nuevos datos y mejoras. Esto ocurre de forma constante para asegurarme de ser lo más útil posible.",
        
        "¡Eso depende! Mis actualizaciones son constantes, ya que mis creadores me entrenan con nueva información y mejoras. Siempre estoy aprendiendo para ser más útil. ¿Te gustaría saber más sobre cómo funcionan las actualizaciones de las IA?",
        
        "No tengo una fecha exacta, pero mi base de datos y mis capacidades se actualizan de forma regular para que pueda ofrecerte las mejores respuestas posibles. ¿Te gustaría saber cómo se realiza mi entrenamiento?",
        
        "Como soy una inteligencia artificial, me actualizo de manera continua. A veces se agregan nuevas funciones y mejoras, y siempre trato de mantenerme al día con la información más relevante.",
        
        "No tengo una fecha específica, ya que mis actualizaciones son constantes y dependen de los desarrolladores. Siempre estoy mejorando para ofrecerte una mejor experiencia. ¿Tienes alguna pregunta más sobre cómo funciono?",
        
        "Mis actualizaciones ocurren en tiempo real, gracias a los desarrolladores que están continuamente trabajando en mejorar mi rendimiento. Así que, si alguna vez me haces una pregunta nueva, siempre trato de aprender de ello.",
        
        "¡La verdad es que no hay una fecha fija! Mi sistema se actualiza constantemente con mejoras y nuevas informaciones para brindarte respuestas más precisas. ¿Te gustaría saber más sobre cómo funciona mi entrenamiento?",
        
        "Mi última actualización fue cuando los desarrolladores decidieron mejorar mi sistema, pero esas actualizaciones suceden con frecuencia para que siempre pueda ofrecerte respuestas más rápidas y precisas."
    ]);
}

const regexQuePuedesHacer = /(que (puedes|qué puedes|haces|sabes) (hacer|hacer tú|hacer tú en?|hacer de?))/i;

if (regexQuePuedesHacer.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Puedo ayudarte con una gran variedad de cosas. Por ejemplo, responder preguntas sobre temas específicos, hacer cálculos matemáticos, proporcionarte información sobre videojuegos, ¡y mucho más!",
        
        "¡Puedo hacer bastantes cosas! Puedo ayudarte a encontrar información sobre cualquier tema, hacer cálculos, incluso generar ideas creativas, y si te interesa la tecnología, ¡también puedo ayudarte con eso!",
        
        "¡Puedo hacer muchas cosas! Como responder a tus preguntas, ayudarte con tareas de programación, hacer cálculos matemáticos y hasta contarte cosas interesantes sobre ciencia, tecnología, o videojuegos. ¿Hay algo específico que te gustaría que hiciera?",
        
        "¡Puedo hacer muchas cosas interesantes! Desde ofrecerte respuestas sobre diversos temas, hacer cálculos, explicarte conceptos, hasta compartir curiosidades de la ciencia y la tecnología. ¿Hay algo en particular que te gustaría saber o hacer?",
        
        "¡Puedo hacer bastante! Desde responder preguntas sobre tus intereses hasta ofrecerte información sobre matemáticas, ciencia, videojuegos, ¡o incluso ayudarte a aprender cosas nuevas! ¿Te gustaría que te ayudara con algo en particular?",
        
        "Puedo hacer muchas cosas, como ayudarte con matemáticas, programación, darte información sobre videojuegos, e incluso contarte sobre las últimas noticias de tecnología. ¿Te gustaría saber más sobre algo específico?",
        
        "¡Puedo hacer muchas cosas! Ya sea que necesites ayuda con cálculos, aprender algo nuevo, o incluso hablar sobre tus videojuegos favoritos, siempre estoy aquí para ayudarte. ¿En qué te gustaría que te ayude hoy?",
        
        "Puedo ayudarte con diversas tareas, como proporcionarte información sobre temas de ciencia, matemáticas, videojuegos, o incluso ayudarte a resolver problemas de programación. ¿En qué te gustaría que te asistiera hoy?",
        
        "¡Puedo hacer muchas cosas! Como ofrecerte datos sobre tus videojuegos favoritos, explicarte conceptos de ciencia y tecnología, o incluso hacerte algunos cálculos rápidos. ¿Tienes algo en mente?",
        
        "Puedo ayudarte con lo que necesites, desde responder a preguntas sobre casi cualquier tema, hasta hacer cálculos o ayudarte con proyectos de programación. ¿Te gustaría saber más sobre alguna de estas cosas?",
        
        "¡Soy bastante versátil! Puedo ayudarte a resolver problemas matemáticos, explicarte cómo funcionan algunas tecnologías, hablar sobre videojuegos, y mucho más. ¿Hay algo específico que te interese?",
        
        "¡Puedo hacer muchas cosas! Desde ofrecerte información sobre la ciencia de los videojuegos hasta darte trucos y consejos en tus juegos favoritos. ¿Te gustaría que te ayudara con algo específico?"
    ]);
}
        
const regexFortnite = /(fortnite|estoy jugando fortnite|juego fortnite|es fortnite|fortnite battle royale|fortnite en pc|fortnite en consola|fortnite móvil|fortnite en línea|servidor fortnite|jugando fortnite|batalla de fortnite)/i;

const regexQueEsFortnite = /que (es|es el|es eso) fortnite/i;

if (regexFortnite.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Fortnite es un juego muy popular! ¿Prefieres jugar en solitario o en equipo?",
        "¡Increíble! ¿Qué modo estás jugando en Fortnite, Batalla Real o el modo Creativo?",
        "¡Fortnite es tan dinámico! ¿Te gustan las skins o prefieres las armas épicas?",
        "¡Qué bien que estés jugando Fortnite! ¿Estás en una partida de escuadra o en un duelo 1v1?",
        "¡Fortnite es increíble! ¿Qué tal tus últimas victorias? ¿Lograste una 'Victoria Magistral'?",
        "¡Vaya! Fortnite tiene tantas skins y modos de juego. ¿Tienes alguna skin legendaria?",
        "¡Fortnite es genial! ¿Te gustan más las batallas en solitario o las cooperativas?",
        "¡Perfecto! ¿Has probado alguna vez el modo Creativo de Fortnite para construir y jugar mapas personalizados?",
        "¡Fortnite tiene tanto contenido! ¿Cuál es tu temporada favorita hasta ahora?",
        "¡Genial! Fortnite tiene un sistema de batalla real muy competitivo. ¿Cómo te va en las partidas?",
        "¡Qué divertido! ¿Te has unido a algún torneo de Fortnite? O, ¿prefieres jugar entre amigos?",
        "¡Fortnite tiene tantas actualizaciones! ¿Has probado la última temporada con sus nuevas características?",
        "¡Fortnite siempre está lleno de sorpresas! ¿Estás esperando alguna nueva colaboración o evento en el juego?",
        "¡Fortnite es sin duda un clásico! ¿Te gustan las batallas frenéticas o prefieres tomarte tu tiempo para planear?",
        "¡Qué emocionante! Fortnite no deja de innovar. ¿Te gustaría saber más sobre las nuevas mecánicas o armas?",
        "¡Fortnite es muy entretenido! ¿Has jugado alguna vez en el modo ‘Creativo’ donde puedes construir tus propios mapas?",
        "¡Qué bueno! En Fortnite la diversión nunca se acaba. ¿Te han gustado las colaboraciones con personajes como Marvel o Star Wars?",
        "¡Estás jugando uno de los juegos más populares! ¿Qué temporada crees que fue la más épica hasta ahora?",
        "¡Fortnite está lleno de acción! ¿Te gusta más jugar en el modo competitivo o prefieres el modo casual?",
        "¡Me alegra saber que estás jugando Fortnite! ¿Te gustaría aprender algunos consejos para mejorar tu jugabilidad?"
    ]);
}

if (regexQueEsFortnite.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Fortnite es un videojuego de acción y supervivencia desarrollado por Epic Games. Es conocido por su modo *Battle Royale*, donde hasta 100 jugadores compiten entre sí para ser el último en pie. El juego también incluye un modo creativo, donde los jugadores pueden construir estructuras y jugar en mapas personalizados. Fortnite ha sido uno de los títulos más influyentes de la última década, especialmente por sus colaboraciones con franquicias populares como Marvel y Star Wars. ¿Te gustaría saber más sobre alguna de sus temporadas o modos de juego?",
        
        "Fortnite es un juego de batalla real en el que los jugadores se enfrentan en un mapa grande mientras se reduce el espacio seguro, lo que obliga a los jugadores a enfrentarse entre sí. Además de la batalla real, Fortnite también tiene un modo Creativo, donde los jugadores pueden diseñar y jugar en sus propios mapas. Es famoso por su estilo de juego rápido y sus actualizaciones constantes, que incluyen nuevas armas, skins, y eventos colaborativos. ¿Te gustaría saber más sobre las mecánicas de construcción o el modo Creativo?",
        
        "Fortnite es un juego en línea en el que 100 jugadores compiten en un mapa para ser el último en sobrevivir. El juego combina disparos, estrategia y construcción, permitiendo a los jugadores recolectar materiales y construir estructuras para protegerse. Además de la batalla real, Fortnite tiene el modo Creativo, que permite a los jugadores diseñar sus propios mapas. Lo que hace único a Fortnite es su estilo visual, sus constantes actualizaciones y colaboraciones con franquicias famosas. ¿Te interesa saber más sobre las estrategias de construcción o el lore del juego?",
        
        "Fortnite es un juego de *Battle Royale* que se juega en línea, donde los jugadores luchan en un mapa grande hasta que solo queda uno. Los jugadores deben recolectar armas, materiales y recursos mientras se enfrentan entre sí. Una característica única de Fortnite es la habilidad de construir estructuras para obtener ventaja durante los combates. Además, Fortnite se actualiza regularmente con nuevas armas, eventos y colaboraciones con personajes de otras franquicias populares. ¿Te gustaría conocer más sobre los eventos en vivo que han tenido lugar en el juego?",
        
        "Fortnite es un videojuego masivo en línea donde los jugadores luchan por ser el último en pie. La mecánica principal del juego es la batalla real, pero Fortnite también tiene un modo Creativo, donde los jugadores pueden crear sus propios mundos y mapas. Además, Fortnite es muy popular por sus colaboraciones con marcas, personajes de películas y series, y su sistema de pase de batalla, que ofrece nuevas skins y contenido exclusivo cada temporada. ¿Te gustaría conocer más sobre alguna de las temporadas o sobre la importancia de los pases de batalla?",
        
        "Fortnite es uno de los juegos más jugados del mundo, conocido por su formato de *Battle Royale*, en el que hasta 100 jugadores luchan hasta ser el último en sobrevivir. Los jugadores deben recolectar materiales, construir estructuras y luchar para ganar. Además, Fortnite también ofrece un modo Creativo, que permite a los jugadores diseñar y compartir mapas. Una de las características más destacadas de Fortnite son sus actualizaciones constantes y sus colaboraciones con personajes de Marvel, Star Wars y otros universos. ¿Te gustaría saber más sobre las estrategias para ganar o alguna colaboración famosa?",
        
        "Fortnite es un juego online que se caracteriza por su formato de batalla real, en el cual los jugadores deben luchar entre sí hasta que solo quede uno. Además de ser un juego competitivo, Fortnite tiene un modo Creativo donde los jugadores pueden diseñar mapas y experiencias personalizadas. El juego también es famoso por sus eventos especiales, actualizaciones frecuentes y colaboraciones con grandes franquicias del entretenimiento. ¿Te interesa alguna temporada en particular o alguna colaboración como la de Marvel?",
        
        "Fortnite es un juego de supervivencia donde los jugadores luchan en un mapa que se va reduciendo. Es muy conocido por su estilo de juego rápido y su sistema de construcción, que permite crear paredes, rampas y otras estructuras durante el combate. También tiene un modo Creativo donde puedes construir y explorar mapas creados por otros jugadores. Fortnite se actualiza con frecuencia y presenta colaboraciones con personajes y películas populares. ¿Te gustaría aprender más sobre los modos de juego o cómo funcionan las actualizaciones?"
    ]);
}
        
const regexMinecraft = /(minecraft|estoy jugando minecraft|juego minecraft|es minecraft|minecraft en pc|minecraft en consola|minecraft java|minecraft bedrock|estoy en minecraft|servidor minecraft|jugando minecraft)/i;

const regexQueEsMinecraft = /qué (es|es el|es eso) minecraft/i;

if (regexMinecraft.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Minecraft es un juego increíble! ¿Estás jugando en modo creativo o supervivencia?",
        "¡Qué bien! Minecraft tiene tantas posibilidades. ¿Estás construyendo algo épico?",
        "¡Me encanta Minecraft! ¿Estás en un servidor con amigos o jugando solo?",
        "¡Minecraft es un mundo sin fin! ¿Qué bioma es tu favorito, ¿te gustan las selvas o prefieres las montañas nevadas?",
        "¡Vaya! Minecraft nunca pasa de moda. ¿Tienes alguna construcción en mente?",
        "¡Qué divertido! ¿Has probado la nueva versión de Minecraft o sigues jugando a la clásica?",
        "¡Minecraft es perfecto para la creatividad! ¿Tienes algún proyecto especial, como una ciudad o una fortaleza?",
        "¡Minecraft es un juego clásico! ¿Has probado algún mod o mapa de aventuras?",
        "¡Increíble! Minecraft tiene una comunidad muy activa. ¿Te has unido a algún servidor de minijuegos o prefieres jugar en solitario?",
        "¡Minecraft siempre es divertido! ¿Has probado alguna vez los mods que añaden criaturas y mundos nuevos?",
        "¡Minecraft es una obra maestra! ¿Sabías que el Ender Dragon es uno de los enemigos más difíciles del juego? ¿Lo has derrotado?",
        "¡Qué genial! Minecraft tiene una variedad impresionante de biomas. ¿Cuál es tu favorito?",
        "¡Minecraft es tan expansivo! ¿Sabías que puedes crear portales a dimensiones nuevas usando bloques como el obsidiana?",
        "¡Gran elección! En Minecraft puedes hacer de todo, desde construir casas hasta viajar al Nether o al End. ¿Cuál ha sido tu aventura más épica?",
        "¡Increíble! ¿Te gusta más explorar o prefieres concentrarte en la construcción?",
        "¡Minecraft es un juego sin fin! ¿Te gusta más la parte de minería o la de explorar el mundo?",
        "¡Genial! Minecraft tiene tantas actualizaciones que siempre hay algo nuevo por descubrir. ¿Has probado alguna nueva funcionalidad o actualización?",
        "¡Es genial que estés jugando Minecraft! ¿Tienes algún mundo o servidor al que siempre vuelvas a jugar?",
        "¡Ah, Minecraft! Un juego que te permite ser tan creativo como quieras. ¿Te gustaría aprender cómo hacer un sistema de redstone o un mapa personalizado?",
        "¡Me alegra saber que estás jugando Minecraft! ¿Estás jugando en PC, consola o móvil?"
    ]);
}

if (regexQueEsMinecraft.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Minecraft es un videojuego de tipo sandbox creado por Mojang Studios. En el juego, los jugadores exploran un mundo generado de manera aleatoria, recolectan recursos, y crean estructuras y objetos usando bloques. Puedes jugar en modo supervivencia, donde necesitas recolectar recursos y enfrentar peligros, o en modo creativo, donde tienes acceso a todos los recursos para crear lo que desees. ¿Te gustaría saber más sobre algún aspecto específico del juego?",
        
        "Minecraft es un juego de construcción y aventura donde los jugadores pueden explorar un mundo abierto, recolectar materiales y construir lo que quieran. En el juego puedes vivir en un mundo lleno de criaturas, aventuras y construcciones increíbles. ¿Te gustaría conocer más sobre las características del juego o algún consejo para principiantes?",
        
        "Minecraft es uno de los juegos más populares del mundo. Es un juego de construcción donde puedes explorar un mundo generado de manera aleatoria y construir lo que quieras, desde simples casas hasta enormes castillos. Hay diferentes modos de juego, como el modo supervivencia, donde debes recolectar recursos y sobrevivir, y el modo creativo, donde tienes acceso a todo sin limitaciones. ¿Te interesa aprender más sobre las diferentes formas de jugar Minecraft?",
        
        "Minecraft es un juego que te permite crear tu propio mundo. Es un juego sandbox en el que puedes excavar, construir, y explorar en un entorno tridimensional. Puedes jugar en modo supervivencia, luchando contra monstruos, o en modo creativo, con recursos ilimitados. ¿Te gustaría saber cómo empezar a jugar o qué modos de juego ofrece?",
        
        "Minecraft es un juego donde la creatividad no tiene límites. En él puedes recolectar recursos, explorar un mundo generado de manera aleatoria, y construir lo que se te ocurra, desde simples casas hasta enormes ciudades. Existen diferentes modos de juego, y lo mejor es que puedes jugar solo o con amigos en línea. ¿Te gustaría saber más sobre cómo crear una granja automática o explorar el Nether?",
        
        "Minecraft es un juego donde puedes ser lo que quieras. Tienes la libertad de explorar un mundo que cambia cada vez que juegas. La supervivencia es una de las principales características, pero el modo creativo es ideal para aquellos que disfrutan construyendo. En ambos casos, ¡la diversión nunca se acaba!",
        
        "Minecraft es un juego de aventuras y supervivencia donde los jugadores tienen que recolectar recursos, crear herramientas y defenderse de monstruos. Lo genial es que puedes hacer lo que quieras, desde luchar contra el Ender Dragon hasta construir enormes castillos. Todo depende de tu imaginación.",
        
        "Minecraft es un universo infinito de posibilidades. Puedes crear tu propio mundo, compartirlo con amigos, o unirte a servidores con jugadores de todo el mundo. Es un juego que nunca se detiene, y siempre está siendo actualizado para ofrecer nuevas experiencias. ¿Te interesa algún aspecto del juego como la construcción, el combate o las aventuras?",
        
        "Minecraft es un juego basado en bloques donde puedes explorar, construir, y crear de manera casi ilimitada. Puedes jugar en modo supervivencia, donde te enfrentas a criaturas peligrosas, o en modo creativo, donde todo es posible. ¿Sabías que puedes incluso crear tus propios mundos y mapas personalizados?",
        
        "Minecraft te permite no solo jugar solo, sino también compartir tus aventuras con amigos. ¿Sabías que puedes crear tu propio servidor para jugar en línea con otros? Y si lo tuyo es la creatividad, puedes diseñar ciudades enteras usando redstone y herramientas de construcción avanzadas."
    ]);
}
        
const regexCallOfDuty = /(call of duty|cod|estoy jugando call of duty|estoy jugando cod|estoy jugando el juego de disparos|juego de guerra|modo multijugador|warzone|black ops|cod warzone)/i;

if (regexCallOfDuty.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Ah, Call of Duty! Un clásico de los juegos de disparos. ¿Estás jugando el modo multijugador o prefieres la campaña?",
        "¡Qué bueno! Call of Duty siempre ha sido un referente en los juegos de acción. ¿Estás jugando a Warzone o a la campaña de Black Ops?",
        "¡Genial! Call of Duty es increíble, especialmente con los modos multijugador. ¿Tienes algún mapa o arma favorita?",
        "¡Perfecto! La franquicia de Call of Duty sigue mejorando con cada nueva entrega. ¿Estás jugando la última versión o un título clásico?",
        "¡Nice! ¿Estás jugando Call of Duty en consola o en PC? Cuéntame qué tal la experiencia, siempre es emocionante.",
        "¡Me encanta Call of Duty! ¿Prefieres las batallas en solitario o el modo cooperativo con amigos?",
        "¡Call of Duty es épico! ¿Cuál es tu estrategia en Warzone, o eres más de acción directa?",
        "¡Súper! Si te gustan los juegos de disparos como Call of Duty, hay muchos títulos interesantes en el mercado. ¿Qué tal la jugabilidad en la última versión?",
        "¡Call of Duty siempre es una excelente opción para jugar! ¿Qué te parece el modo Battle Royale de Warzone?",
        "¡Estás jugando a Call of Duty! Un juego con mucha historia. ¿Tienes alguna anécdota épica en el juego?"
    ]);
}
        
const regexEsCallOfDuty = /(estoy\sjugando\scall\sof\sduty|yo\ssoy\scall\sof\sduty|estoy\sjugando\scon\scall\sof\sduty|estoy\sjugando\scall\sof\sduty)/i;

if (regexEsCallOfDuty.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Eso suena genial! Call of Duty siempre tiene acción rápida y mapas llenos de detalles. ¿En qué modo estás jugando, Multijugador o Warzone?",
        
        "¡Qué buen juego! Call of Duty es increíble para la acción intensa. ¿Prefieres las armas automáticas o te va más el sigilo?",
        
        "¡Nice! Call of Duty es siempre una experiencia épica. ¿Tienes alguna clase o equipo preferido en el juego?",
        
        "¡Call of Duty! Un clásico de la acción. ¿Estás en alguna partida cooperativa o prefieres el modo Battle Royale de Warzone?",
        
        "¡Increíble! Las batallas en Call of Duty son siempre emocionantes. ¿Tienes alguna estrategia secreta que usas para ganar en el modo Warzone?",
        
        "¡Eso está genial! Call of Duty tiene un ritmo muy dinámico. ¿Te gusta más jugar en equipo o prefieres las partidas individuales?",
        
        "¡Perfecto! Call of Duty nunca decepciona. ¿Has probado las nuevas actualizaciones o mapas que agregaron recientemente?",
        
        "¡Impresionante! ¿Qué modalidad de Call of Duty te gusta más, el multijugador tradicional o el modo de supervivencia de Warzone?",
        
        "¡Genial! Call of Duty tiene algunas de las mejores mecánicas de disparo en juegos de guerra. ¿Tienes alguna arma favorita o alguna combinación que te da ventaja?",
        
        "¡Buenísima elección! Call of Duty es un juego que siempre mantiene la adrenalina al máximo. ¿Estás jugando en alguna plataforma específica o en PC?",
        
        "¡Eso suena emocionante! Call of Duty tiene una gran variedad de modos de juego. ¿Qué tal te va en las clasificatorias?",
        
        "¡Qué bien! Call of Duty nunca deja de ser divertido. ¿Estás en un clan o prefieres jugar solo?"
    ]);
}
  
const regexEsFreeFire = /(free\s?fire|ff|battle\sroyale|juego\sde\sacción|disparo\smobile|freefire|battleground|guerra\sreal|juego\sde\sbatalla|juego\sde\sbatalle|competencia\sde\sacciones|tiro\sreal|guerra\svirtual|plataforma\sde\sbattle\ss royale)/i;

if (regexEsFreeFire.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Ah, Free Fire! Un juego de acción y estrategia increíble. ¿Eres fan de los Battle Royales? Es uno de los más populares en móviles.",
        
        "¡Free Fire! Un juego donde la habilidad y las estrategias marcan la diferencia. ¿Cuál es tu personaje o estrategia favorita?",
        
        "¡Claro, Free Fire! Con su modo de batalla royale y partidas intensas. ¿Estás buscando consejos o quieres saber algo más sobre el juego?",
        
        "¡Free Fire es genial! Me imagino que disfrutas las intensas partidas. ¿Prefieres jugar en solitario o en equipo?",
        
        "¡Qué bueno que mencionas Free Fire! Aparte de ser un juego competitivo, también tiene muchas colaboraciones geniales. ¿Has probado alguna de sus skins o eventos especiales?",
        
        "¡Free Fire es muy popular! ¿Sabías que tiene más de 100 millones de descargas? ¿Qué tal te va en el juego, eres más de agresivo o de esperar a que los otros caigan?",
        
        "¡Ah, Free Fire! Es uno de los Battle Royales más conocidos. ¿Tienes algún consejo o truco que uses para ser mejor jugador?",
        
        "¡A mí también me encanta Free Fire! Hay tantas formas de jugar, desde el sigilo hasta la acción directa. ¿Te gustaría saber más sobre cómo mejorar en las batallas?",
        
        "¡Totalmente! ¿Sabías que en Free Fire las estrategias pueden marcar la diferencia? Es un juego que premia tanto la rapidez como la táctica. ¿Qué tipo de jugador eres?",
        
        "Free Fire ha ganado un montón de seguidores debido a su jugabilidad rápida y divertida. ¿Estás en un clan o prefieres jugar solo?",
        
        "¡Ese es un juego que genera mucha adrenalina! Free Fire tiene mapas geniales y cada uno tiene su propia estrategia. ¿Tienes algún mapa favorito?",
        
        "¡Interesante elección! Free Fire sigue innovando con actualizaciones constantes y eventos. ¿Qué evento reciente has jugado?",
        
        "¡Genial que menciones Free Fire! Es perfecto para sesiones rápidas de juego. ¿Te gustaría recibir algunas recomendaciones de personajes o armas que puedes usar?",
        
        "¡Me encanta que mencionaste Free Fire! Uno de los Battle Royales más jugados en dispositivos móviles. ¿Tienes algún truco para ganar más partidas?",
        
        "¡Qué bueno que hablas de Free Fire! Es increíble ver cómo se ha convertido en uno de los juegos más jugados del mundo. ¿Qué modo de juego prefieres, clásico o alguna modalidad especial?"
    ]);
}
        
const regexFreeFire = /(es\sfree\sfire|es\sff|estoy\sjugando\sfree\sfire|yo\ssoy\sfree\sfire|soy\sfree\sfire|este\ses\sfree\sfire)/i;

if (regexFreeFire.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Vaya, eres un fanático de Free Fire! Es uno de los juegos más populares de Battle Royale. ¿Qué tal te va en las partidas? ¿Tienes algún personaje o estrategia favorita?",
        
        "¡Ah, Free Fire! Gran elección. Es un juego lleno de acción. ¿Estás en un clan o prefieres jugar en solitario?",
        
        "¡Así que eres Free Fire! Es increíble cómo ha crecido y cómo se sigue actualizando. ¿Qué opinas de las nuevas skins y eventos?",
        
        "¡Eso es genial! Free Fire tiene una gran comunidad y muchas actualizaciones. ¿Cuál es tu modo de juego preferido?",
        
        "¡Interesante! Free Fire es todo un fenómeno. ¿Eres más de ir directo al ataque o prefieres esperar y tomar una estrategia más cautelosa?",
        
        "¡Qué genial! Free Fire es perfecto para juegos rápidos y emocionantes. ¿Qué personaje sueles usar más? ¿Prefieres las habilidades ofensivas o defensivas?",
        
        "¡Excelente! Free Fire se está convirtiendo en un clásico del móvil. ¿Has probado las nuevas armas o el último mapa que salió?",
        
        "¡Qué bueno que menciones Free Fire! Un juego con un gran potencial para la acción rápida. ¿Tienes algún consejo que quieras compartir para ser un mejor jugador?",
        
        "¡Eso está genial! Free Fire sigue siendo uno de los favoritos por su jugabilidad intensa y corta. ¿Te gustaría saber algunos trucos para mejorar tus partidas?",
        
        "¡Te entiendo perfectamente! Free Fire siempre te mantiene al borde del asiento con sus emocionantes batallas. ¿Qué modo de juego disfrutas más?",
        
        "¡Ah, Free Fire! Cada vez que juegas, las partidas son una locura. ¿Prefieres jugar en equipo o te va más el estilo individual?",
        
        "¡Qué bien! Free Fire es uno de esos juegos que siempre tienen algo nuevo para ofrecer. ¿Qué opinas de la última actualización?"
    ]);
}
        
const regexCosasInteresantes = /(dime cosas interesantes|cuéntame algo interesante|quiero saber algo interesante|háblame de algo interesante|dime algo curioso|cuéntame algo curioso)/i;

if (regexCosasInteresantes.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¿Sabías que el espacio interestelar no está vacío? En realidad, está lleno de gas, polvo y hasta rayos cósmicos que podrían ser el origen de algunas de las estrellas más jóvenes del universo.",
        
        "Una curiosidad interesante: las abejas pueden reconocer rostros humanos. Esto les ayuda a encontrar flores y ubicarse en su entorno. ¡Son mucho más inteligentes de lo que pensamos!",
        
        "Te cuento algo curioso: Los pulpos tienen tres corazones, dos para bombear sangre a las branquias y uno para el resto del cuerpo. Además, tienen sangre azul porque usan cobre en lugar de hierro para transportar oxígeno.",
        
        "¿Sabías que el corazón de una ballena azul es tan grande que un ser humano podría nadar por sus arterias? Es increíble cómo la naturaleza ha creado seres tan asombrosos.",
        
        "¡Aquí tienes un dato interesante! En el siglo XIX, los científicos pensaban que los dinosaurios eran reptiles, pero ahora sabemos que estaban más estrechamente relacionados con las aves. ¡La ciencia avanza rápido!",
        
        "Te sorprenderá saber que el chocolate tiene un efecto positivo en el cerebro. Está comprobado que un poco de chocolate oscuro mejora el estado de ánimo y la memoria a corto plazo.",
        
        "Algo curioso: en Japón, hay islas donde los conejos viven libres y son considerados una atracción turística. La isla Okunoshima es famosa por su gran población de conejos que corren por todas partes.",
        
        "Aquí tienes una curiosidad: la Gran Muralla China no es visible desde el espacio a simple vista. A pesar de su tamaño impresionante, los astronautas afirman que es difícil de distinguir sin un equipo especializado.",
        
        "Un dato interesante sobre el cerebro humano: puede procesar información a una velocidad de hasta 120 metros por segundo, ¡mucho más rápido de lo que imaginamos!",
        
        "¡Y hablando de cosas curiosas! Los flamencos no nacen rosados. Su color proviene de la dieta rica en betacarotenos que consumen, principalmente de los camarones y algas que comen."
    ]);
}

const regexBueno = /bueno/i;

if (regexBueno.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Bueno, me alegra que estés satisfecho! Si hay algo más en lo que pueda ayudarte, solo dímelo.",
        
        "¡Eso suena bien! ¿Te gustaría saber más sobre algún tema o explorar algo nuevo?",
        
        "¡Genial! Si todo está bueno, tal vez quieras hablar de algo más. ¿Hay algo que te interese?",
        
        "¡Qué bueno escuchar eso! Si tienes alguna otra pregunta o quieres conocer algo más, aquí estoy para ayudarte.",
        
        "¡Perfecto! Si lo que te mencioné está bueno, tal vez te interese saber cómo se conecta con otros temas. ¿Qué más te gustaría saber?",
        
        "¡Eso me alegra! Si alguna parte de lo que hablamos te parece interesante, puedo profundizar más en ello.",
        
        "¡Qué bien que todo esté claro! Si tienes curiosidad por algún otro tema, no dudes en preguntarme.",
        
        "¡Me gusta escuchar que todo está bien! ¿Hay algo más que te gustaría explorar o discutir?",
        
        "¡Genial! A veces lo bueno puede ser aún mejor con un poco más de información. ¿Quieres saber más sobre algún tema relacionado?",
        
        "¡Bueno, eso es un gran comienzo! Si necesitas más detalles o quieres expandir alguna idea, avísame."
    ]);
}

const regexSumar = /(sumar|\+)/i;
const regexRestar = /(restar|-\s?)/i;
const regexMultiplicarOp = /(multiplicar|\*)/i;
const regexDividirOp = /(dividir|\/)/i;
const regexRaizCuadradaOp = /raíz cuadrada/i;
const regexHora = /(hora|hora actual)/i;
const regexDia = /(día|día de hoy)/i;
const regexAño = /(año|año actual)/i;
const regexFecha = /(fecha|fecha de hoy)/i;

if (regexSumar.test(mensajeLower)) {
    return this.operar(mensaje, '+');
} else if (regexRestar.test(mensajeLower)) {
    return this.operar(mensaje, '-');
} else if (regexMultiplicarOp.test(mensajeLower)) {
    return this.operar(mensaje, '*');
} else if (regexDividirOp.test(mensajeLower)) {
    return this.operar(mensaje, '/');
} else if (regexRaizCuadradaOp.test(mensajeLower)) {
    return this.operarRaizCuadrada(mensaje);
} else if (regexHora.test(mensajeLower)) {
    return this.obtenerHoraActual();
} else if (regexDia.test(mensajeLower)) {
    return this.obtenerDiaActual();
} else if (regexAño.test(mensajeLower)) {
    return this.obtenerAñoActual();
} else if (regexFecha.test(mensajeLower)) {
    return this.obtenerFechaActual();
}
        
const regex = /puedes (generar|hacer|crear) (imágenes?|imagenes?)/i;

if (regex.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Lamentablemente, no puedo generar imágenes. Mi función principal es proporcionar información y respuestas basadas en texto. Si necesitas ayuda con algo más, estaré encantado de asistirte.",
        
        "Actualmente no tengo la capacidad de generar imágenes, pero puedo ofrecerte información escrita sobre una gran variedad de temas. Si necesitas ayuda con algo más, no dudes en preguntarme.",
        
        "No puedo generar imágenes, pero si necesitas información o asistencia en otro tema, estoy aquí para ayudarte.",
        
        "Lo siento, no puedo crear imágenes. Sin embargo, puedo proporcionarte información detallada en texto. ¿En qué más puedo asistirte?",
        
        "Aunque no puedo generar imágenes, puedo ayudarte a encontrar las herramientas adecuadas para hacerlo o explicarte conceptos relacionados. ¿Te gustaría saber más?",
        
        "Generar imágenes no está dentro de mis capacidades, pero estaré encantado de asistirte con información escrita. ¿Qué más te gustaría saber?",
        
        "No tengo la capacidad de hacer imágenes, pero puedo sugerirte programas o plataformas donde sí puedes hacerlo. ¿Te interesa?",
        
        "Aunque no puedo hacer imágenes, puedo ayudarte a planificar o describir ideas para que las crees con otras herramientas. ¿Te gustaría eso?",
        
        "No puedo generar imágenes, pero puedo guiarte para que puedas hacerlo tú mismo con las herramientas adecuadas. ¿Te interesa saber más?",
        
        "Crear imágenes no es una función que tengo, pero puedo proporcionarte guías o sugerencias para que encuentres las herramientas que necesitas."
    ]);
}

        const regexCocaCola = /como se (hace|produce|elabora|fabricar|preparar|crear) (la )?coca cola|fabricación coca cola|ingredientes coca cola|proceso coca cola|fórmula coca cola|receta coca cola|producción coca cola|coca cola ingredientes|bebida coca cola|sabor coca cola|caramelización coca cola|etiquetado coca cola|carbonatación coca cola|soda coca cola/i;

if (regexCocaCola.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "La Coca-Cola es una bebida refrescante que se produce mediante un proceso de mezcla de agua purificada, azúcar (o jarabe de maíz con alto contenido de fructosa en algunas regiones), cafeína, ácido fosfórico y un saborizante secreto conocido como Merchandise 7X. Este sabor único ha hecho que Coca-Cola sea una de las bebidas más populares del mundo. Después de mezclar estos ingredientes, se carbonata el líquido para darle su efervescencia característica.",
        
        "El proceso de fabricación de Coca-Cola involucra la creación de un jarabe base utilizando agua, azúcar, ácido fosfórico y otros compuestos. Este jarabe se combina con dióxido de carbono para crear la carbonatación característica de la bebida. El paso siguiente es la mezcla con el ingrediente secreto, Merchandise 7X, una mezcla de aceites esenciales que aportan el sabor característico de Coca-Cola.",
        
        "Los ingredientes principales de Coca-Cola incluyen agua, azúcar, cafeína, ácido fosfórico y saborizantes naturales. En el caso de la Coca-Cola original, se utiliza una mezcla secreta de aceites esenciales, que incluye naranja, limón, nuez moscada y otros compuestos que le dan el sabor inconfundible. Una vez que estos ingredientes están combinados, la bebida pasa por un proceso de carbonatación para darle su chispa característica.",
        
        "El color oscuro de Coca-Cola proviene del caramelo, un colorante alimenticio que también aporta algo de sabor. Este ingrediente es esencial para darle a la bebida su tonalidad oscura. Después de la carbonatación, la bebida se filtra para asegurarse de que no haya impurezas, y luego se embotella en botellas de vidrio, plástico o latas.",
        
        "La Coca-Cola se produce en plantas de embotellado en todo el mundo. Cada planta sigue un proceso estandarizado para asegurar que el sabor de Coca-Cola sea consistente. Esto incluye la mezcla de los ingredientes, la adición de dióxido de carbono y las pruebas de calidad para asegurarse de que cada botella cumpla con los estándares de la compañía. El líquido se embotella en contenedores de diferentes tamaños, desde latas hasta botellas de vidrio y plástico.",
        
        "Uno de los ingredientes clave que hace que Coca-Cola tenga su sabor único es el ácido fosfórico. Este compuesto se usa no solo para dar un toque ácido, sino también para ayudar a conservar la bebida durante el proceso de distribución. Junto con el azúcar, el ácido fosfórico equilibra el sabor dulce, lo que resulta en la mezcla perfecta de dulzura y acidez.",
        
        "La receta secreta de Coca-Cola, conocida como Merchandise 7X, se ha mantenido en secreto durante más de 100 años. Se cree que contiene una mezcla de aceites esenciales, especias y frutas que crean un perfil de sabor que es único en el mundo de las bebidas. Aunque la receta exacta sigue siendo un misterio, los ingredientes conocidos son fundamentales para crear ese sabor distintivo que ha hecho de Coca-Cola una de las marcas más reconocidas a nivel global.",
        
        "El dióxido de carbono (CO2) es responsable de la carbonatación de Coca-Cola, lo que le da esa burbujeante efervescencia. La bebida se infunde con CO2 a presión para asegurarse de que la bebida mantenga su frescura y su chisporroteo. Este proceso no solo ayuda con el sabor, sino también con la conservación de la bebida, al evitar que se altere rápidamente.",
        
        "La Coca-Cola también está disponible en versiones sin azúcar, como Coca-Cola Diet y Coca-Cola Zero. Estas versiones se fabrican utilizando edulcorantes artificiales, lo que permite a los consumidores disfrutar de un sabor similar sin las calorías que aporta el azúcar. El proceso de fabricación sigue siendo similar, pero los edulcorantes se ajustan para mantener un sabor balanceado sin calorías.",
        
        "Una vez embotellada, la Coca-Cola se somete a pruebas rigurosas de calidad para asegurar que cada lote tenga el mismo sabor y nivel de carbonatación. Después de pasar estas pruebas, las botellas o latas se etiquetan y se distribuyen a puntos de venta alrededor del mundo. Este proceso asegura que, sin importar en qué parte del mundo se consuma, la Coca-Cola siempre tenga el mismo sabor único.",
        
        "En la actualidad, Coca-Cola sigue siendo una de las bebidas más populares del mundo, con más de 1,9 mil millones de bebidas servidas cada día. Aunque la receta y el proceso de fabricación han permanecido bastante constantes, la tecnología moderna ha permitido mejorar la eficiencia en la producción y distribución. Gracias a esta innovación, Coca-Cola sigue siendo un pilar en la industria de bebidas a nivel mundial.",
        
        "El uso de tecnología avanzada en el proceso de producción ha hecho que Coca-Cola sea más eficiente en su fabricación. Las máquinas modernas aseguran que cada lata o botella esté perfectamente sellada y libre de impurezas. Este nivel de precisión garantiza que la bebida llegue a los consumidores con la misma calidad, independientemente de la región.",
        
        "El azúcar utilizado en Coca-Cola es una de las partes más importantes de la receta. En algunas regiones se utiliza azúcar refinada, mientras que en otras se utiliza jarabe de maíz con alto contenido de fructosa, lo que puede alterar ligeramente el sabor de la bebida. Independientemente del tipo de azúcar, el proceso de fabricación sigue siendo el mismo, con una mezcla cuidadosamente equilibrada para obtener el sabor perfecto.",
        
        "Coca-Cola también es conocida por su famosa botella contorneada, que fue diseñada en 1915 para hacerla fácilmente reconocible. Esta botella es una de las características más icónicas de la marca y ayuda a distinguirla de otras bebidas refrescantes. Hoy en día, la botella sigue siendo uno de los elementos más emblemáticos de Coca-Cola, y es un símbolo de la marca en todo el mundo.",
        
        "El embalaje de Coca-Cola ha evolucionado con el tiempo. Aparte de las clásicas botellas de vidrio, ahora es común encontrar Coca-Cola en botellas plásticas y latas de diferentes tamaños. Cada tipo de envase se selecciona en función del mercado y las preferencias de los consumidores, pero siempre con la intención de mantener la frescura y la calidad del producto."
    ]);
}
        
        const regexPepsi = /como se hace la pepsi|fabricación de pepsi|ingredientes pepsi|proceso de producción pepsi|cómo se produce pepsi|historia de pepsi|bebida pepsi|pepsi y sus ingredientes/i;

if (regexPepsi.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "La Pepsi, como muchas otras bebidas gaseosas, se fabrica utilizando una mezcla de agua carbonatada, jarabe de maíz, azúcar, acidulantes y saborizantes artificiales. La mezcla es procesada y carbonatada en grandes tanques para crear las burbujas características de la bebida. Los ingredientes principales incluyen agua, azúcar, ácido fosfórico, cafeína y el sabor a cola.",
        
        "El proceso de fabricación de la Pepsi comienza con la mezcla de agua y azúcar. Se añade jarabe de maíz y otros ingredientes para dar el sabor dulce característico. Luego, se combina con el ácido fosfórico y el citrato para equilibrar el sabor. La mezcla se carbonata al inyectar dióxido de carbono (CO2), lo que crea las burbujas y le da a la Pepsi su efervescencia.",
        
        "El sabor único de la Pepsi se debe a su fórmula secreta, que incluye varios saborizantes y especias. Aunque la receta exacta es un secreto comercial, se sabe que se utilizan extractos de vainilla, caramelo, y otros sabores naturales que le dan su sabor a cola distintivo. Después de mezclar todos los ingredientes, el líquido resultante es procesado, filtrado y enfriado antes de ser embotellado.",
        
        "El proceso de fabricación de Pepsi también incluye el uso de dióxido de carbono para carbonatar la bebida. Esto le da la textura burbujeante característica. El líquido se filtra para eliminar impurezas y garantizar que la bebida sea clara y no tenga impurezas visibles. Una vez que la mezcla está lista y carbonatada, se embotella en botellas de vidrio, plástico o latas según el formato.",
        
        "El azúcar que se utiliza en Pepsi puede variar según la región. En algunos países, se usa jarabe de maíz con alto contenido de fructosa (HFCS), mientras que en otros se usa azúcar refinada. El tipo de azúcar influye ligeramente en el sabor final de la bebida. La mezcla de azúcar y agua se combina con otros ingredientes para asegurar que la bebida tenga el sabor correcto y una textura adecuada.",
        
        "Una parte esencial del proceso de fabricación de Pepsi es la creación de la mezcla de cola. Esto incluye saborizantes como el caramelo, que no solo le da color a la bebida, sino también un toque dulce. Además, el ácido fosfórico y la cafeína son componentes importantes, ya que proporcionan el sabor ácido y el efecto estimulante de la bebida. El proceso de mezcla es crucial para obtener la consistencia y el sabor adecuados en cada lote de Pepsi.",
        
        "El proceso de carbonatación es esencial para la Pepsi. Se realiza añadiendo dióxido de carbono a la mezcla bajo alta presión. Esto crea las pequeñas burbujas que caracterizan la bebida. Además de la carbonatación, la bebida se trata para garantizar que sea estable y que los sabores no se alteren durante el almacenamiento o distribución.",
        
        "Una vez que la bebida está completamente mezclada, carbonatada y enfriada, se procede a la embotellación. Las botellas o latas se llenan con la bebida bajo condiciones sanitarias para asegurar que no haya contaminación. Luego, la Pepsi se sella y se etiqueta para su distribución. Es importante que el proceso de embotellado se realice rápidamente para evitar que la carbonatación se pierda.",
        
        "La fórmula de la Pepsi, aunque similar a la de otras bebidas de cola, tiene su propio perfil único. Este perfil incluye una mezcla específica de ingredientes como la vainilla, el caramelo, y otros sabores secretos que crean su sabor característico. El proceso de fabricación es altamente automatizado y controlado, lo que garantiza la consistencia en cada botella de Pepsi.",
        
        "En algunas regiones, la Pepsi se produce con edulcorantes artificiales, como el aspartame o la sucralosa, en lugar de azúcar, para ofrecer versiones sin azúcar o dietéticas. El proceso sigue siendo similar al de la Pepsi regular, pero con la sustitución de los edulcorantes. El sabor de estas versiones dietéticas se ajusta para compensar la falta de azúcar, manteniendo la sensación de efervescencia y el sabor característico.",
        
        "Una de las partes más interesantes del proceso de fabricación de la Pepsi es la etapa de mezcla de sabores. Aunque la receta exacta sigue siendo un secreto, se sabe que la Pepsi utiliza una mezcla de sabores naturales y artificiales, lo que le da su sabor único. Este proceso es crucial para asegurar que cada lata o botella de Pepsi tenga el mismo sabor que la anterior.",
        
        "El proceso de embotellado también es muy importante para mantener la calidad de la Pepsi. Después de que la bebida se embotella, se somete a controles de calidad para asegurarse de que no haya impurezas ni defectos en el envase. Esto ayuda a garantizar que la bebida sea segura para el consumo y que su sabor se mantenga constante.",
        
        "En resumen, la fabricación de la Pepsi involucra una mezcla precisa de agua, azúcar, carbonatación y saborizantes. Aunque los detalles exactos del proceso pueden variar entre fábricas y regiones, la idea básica es la misma: crear una bebida refrescante, con sabor único y burbujeante que los consumidores disfrutan en todo el mundo."
    ]);
}
        
        const regexWifi = /como funciona el wifi|qué es wifi|tecnología wifi|funcionamiento wifi|red wifi|wifi y conexión|señal wifi|router wifi|wifi inalámbrico|tecnología inalámbrica|conectar a wifi/i;

if (regexWifi.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "El WiFi es una tecnología que permite la transmisión de datos de manera inalámbrica entre dispositivos, utilizando ondas de radio. Estas ondas de radio transmiten la información a través de un router, el cual está conectado a Internet. Los dispositivos como teléfonos, computadoras o tabletas se conectan al WiFi para acceder a Internet sin la necesidad de cables.",
        
        "El WiFi utiliza una frecuencia de ondas de radio, generalmente en los rangos de 2.4 GHz y 5 GHz. Estos rangos son utilizados por los routers para enviar señales que los dispositivos pueden recibir. Cuando te conectas a una red WiFi, tu dispositivo capta la señal del router y se conecta a Internet. La velocidad de la conexión depende de la calidad de la señal y la distancia entre el dispositivo y el router.",
        
        "El funcionamiento del WiFi se basa en el uso de un router que envía y recibe señales a través de ondas de radio. Este router está conectado a una línea de Internet, y cuando un dispositivo se conecta al WiFi, recibe datos a través de esa señal. El router distribuye la señal en un área específica, permitiendo que varios dispositivos se conecten simultáneamente.",
        
        "Para que tu dispositivo se conecte a una red WiFi, debe estar dentro del alcance de la señal que emite el router. Una vez que tu dispositivo detecta la red, se conecta automáticamente o con tu autorización, dependiendo de si la red está protegida con una contraseña. El WiFi es muy conveniente porque permite acceder a Internet sin cables, lo que te brinda mayor libertad y movilidad.",
        
        "La conexión WiFi es posible gracias a un estándar de comunicación conocido como IEEE 802.11. Este estándar define cómo los dispositivos deben comunicarse con los routers y entre sí. Gracias a este protocolo, los dispositivos pueden enviar y recibir información de manera rápida y eficiente a través de la red inalámbrica.",
        
        "El WiFi no es un sistema de transmisión de Internet por sí solo, sino una forma de transmitir datos. Es el router conectado a Internet el que facilita el acceso. Una vez que los datos llegan al router a través de una conexión física, el WiFi se encarga de transmitir esa información de manera inalámbrica a los dispositivos conectados. Esto permite navegar, ver videos o realizar otras actividades en línea sin la necesidad de cables.",
        
        "Las redes WiFi funcionan mediante la codificación de datos, lo que permite que la información viaje a través de las ondas de radio sin que se interfiera con otras señales. Los dispositivos se conectan a estas redes codificadas, lo que garantiza que la información sea segura y se transmita correctamente. Cuando te conectas a WiFi, el router y tu dispositivo intercambian claves para asegurar una conexión segura.",
        
        "La señal WiFi tiene un alcance limitado. Dependiendo del tipo de router, la señal puede cubrir desde unos pocos metros hasta decenas de metros, especialmente si utilizas routers de doble banda que operan en 2.4 GHz y 5 GHz. Si estás lejos del router, la señal puede debilitarse y afectar la velocidad de la conexión, lo que podría hacer que la navegación sea más lenta.",
        
        "El WiFi es increíblemente útil en hogares y oficinas, ya que permite a múltiples dispositivos estar conectados a la red al mismo tiempo. Un solo router puede dar acceso a teléfonos, computadoras, televisores inteligentes, e incluso dispositivos de Internet de las cosas (IoT), todos compartiendo una única conexión a Internet. Esto convierte al WiFi en una opción flexible y económica para conectividad en lugares con varios usuarios.",
        
        "El WiFi es una de las tecnologías inalámbricas más populares. Utiliza ondas de radio para transmitir datos a través del aire, lo que te permite estar conectado a Internet sin estar físicamente conectado con un cable. Esto significa que puedes moverte libremente dentro del rango de la señal sin perder la conexión, lo que resulta conveniente tanto en entornos domésticos como en espacios públicos como cafeterías y aeropuertos.",
        
        "Cuando un dispositivo se conecta a una red WiFi, el router le asigna una dirección IP única para identificarlo dentro de la red. A partir de allí, el dispositivo puede enviar y recibir datos a través de la red local, que a su vez está conectada a la red global de Internet. El proceso es rápido y permite que varios dispositivos se conecten simultáneamente sin interferir entre sí.",
        
        "El WiFi ha revolucionado la forma en que nos conectamos a Internet, permitiendo una conectividad sin cables. Esta tecnología es esencial para la mayoría de los dispositivos modernos, ya que muchos dependen del WiFi para acceder a servicios en línea como streaming, redes sociales y aplicaciones en la nube. Gracias a su facilidad de uso, el WiFi se ha convertido en una parte indispensable de la vida cotidiana.",
        
        "El WiFi tiene algunas limitaciones, como el alcance de la señal y la posibilidad de interferencias con otras redes inalámbricas o dispositivos. Sin embargo, los avances en la tecnología WiFi han mejorado la velocidad, la estabilidad y la cobertura, haciendo que esta tecnología sea cada vez más eficiente en lugares con muchos dispositivos conectados.",
        
        "La configuración de una red WiFi implica instalar un router y configurarlo correctamente. Una vez hecho esto, puedes conectar tus dispositivos a través de la red, asegurándote de que todos estén dentro del rango de la señal. Los routers modernos también incluyen funciones de seguridad, como la encriptación de datos, para proteger tu red de accesos no autorizados."
    ]);
}
        
        const regexBluetooth = /audífonos (bluetooth|inalámbricos)|funcionan (los|las) audífonos bluetooth|tecnología bluetooth|conexión bluetooth|cómo funciona bluetooth|conectar audífonos bluetooth|audífonos bluetooth explicación|bluetooth y sonido|audífonos sin cables/i;

if (regexBluetooth.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Los audífonos Bluetooth funcionan mediante una tecnología inalámbrica que permite la transmisión de audio a través de ondas de radio. Utilizan un protocolo de comunicación estándar, lo que permite que se conecten sin cables a dispositivos como teléfonos, computadoras y otros aparatos compatibles.",
        
        "La tecnología Bluetooth se basa en el uso de ondas de radio de corto alcance para transferir datos de un dispositivo a otro. En el caso de los audífonos Bluetooth, estos reciben el audio de tu teléfono o computadora sin necesidad de cables, lo que facilita la libertad de movimiento.",
        
        "Cuando conectas unos audífonos Bluetooth, lo que sucede es que tu dispositivo envía una señal de audio a través de ondas de radio hacia los audífonos. Estos audífonos, que tienen un receptor Bluetooth, convierten esa señal en sonido para que la puedas escuchar. Este proceso es rápido y eficiente, lo que permite una experiencia inalámbrica sin interrupciones.",
        
        "El Bluetooth funciona en un rango de 2.4 GHz, lo que lo hace adecuado para distancias relativamente cortas, entre 10 y 100 metros, dependiendo de la versión. Los audífonos Bluetooth aprovechan esta frecuencia para transmitir el audio de manera eficiente, asegurando que puedas escuchar música, llamadas o cualquier otro sonido sin cables.",
        
        "Para conectar audífonos Bluetooth, solo necesitas activarlos y emparejarlos con tu dispositivo. Este proceso se realiza mediante una búsqueda del dispositivo Bluetooth disponible, y una vez emparejados, el audio se transmite de manera inalámbrica. Es una forma muy cómoda de escuchar música o hacer llamadas sin depender de cables.",
        
        "Los audífonos Bluetooth tienen una batería interna que les permite operar de manera independiente de otros dispositivos. Cuando los emparejas con un teléfono o computadora, estos dispositivos envían señales de audio que los audífonos convierten en sonido. Dependiendo de la calidad de la señal, los audífonos pueden ofrecer una experiencia de sonido de alta calidad.",
        
        "Bluetooth es una tecnología que permite la conexión de dispositivos de manera inalámbrica. En el caso de los audífonos, estos se conectan a tu teléfono o computadora mediante esta tecnología, lo que permite la transmisión de audio sin la necesidad de cables. Existen diferentes versiones de Bluetooth, que mejoran la velocidad y estabilidad de la conexión con el tiempo.",
        
        "La conexión entre los audífonos y el dispositivo es estable debido a que el Bluetooth se basa en un emparejamiento seguro. Una vez que ambos dispositivos están emparejados, se crea una red privada entre ellos, lo que garantiza que la señal de audio se mantenga constante y sin interferencias. Esto es lo que hace que la experiencia inalámbrica sea tan efectiva.",
        
        "Al usar audífonos Bluetooth, el audio se transmite a través de una señal digital, lo que significa que no se pierde calidad en la transmisión. A diferencia de otras tecnologías de transmisión de audio, el Bluetooth asegura una experiencia clara y sin interferencias, ideal para escuchar música o tomar llamadas. Además, la mayoría de los audífonos Bluetooth permiten controlar el volumen y cambiar canciones sin tener que tocar el dispositivo de origen.",
        
        "La razón por la que los audífonos Bluetooth son tan populares es porque eliminan la necesidad de cables, ofreciendo una experiencia de sonido más libre y cómoda. Los dispositivos Bluetooth modernos también permiten que los audífonos se conecten a múltiples dispositivos, lo que te da la flexibilidad de usar tus audífonos con teléfonos, computadoras y otros aparatos compatibles.",
        
        "Al emparejar tus audífonos Bluetooth con tu dispositivo, el sistema de Bluetooth utiliza un proceso de codificación y decodificación para garantizar que el audio se transmita de manera eficiente. Esto permite que, incluso en entornos con muchas señales inalámbricas, puedas disfrutar de audio claro y de alta calidad.",
        
        "Los audífonos Bluetooth son ideales para las personas que prefieren no lidiar con cables. Utilizan una señal de radio de corto alcance para conectarse con dispositivos como tu teléfono, permitiendo una experiencia sin interrupciones y sin la necesidad de conectarlos físicamente. Todo esto gracias a la tecnología Bluetooth, que ha revolucionado la forma en que escuchamos música y realizamos llamadas.",
        
        "El proceso de conexión entre audífonos Bluetooth y un dispositivo es muy sencillo. Solo necesitas asegurarte de que ambos dispositivos estén dentro del rango de conexión y seguir las instrucciones para emparejarlos. Una vez que están conectados, puedes disfrutar de la transmisión de audio sin cables, lo que ofrece una mayor libertad y comodidad.",
        
        "Los audífonos Bluetooth suelen ofrecer una excelente calidad de sonido, especialmente si usas dispositivos con versiones más recientes de Bluetooth. Estas versiones permiten que la señal sea más estable y que la calidad del audio sea mejor, lo que te permite disfrutar de una experiencia auditiva de alta calidad."
    ]);
}
        
        const regexResumen = /resumen|resumir|resume|resumen de|dime un resumen|resumir información|quiere un resumen|resumen breve|resumen completo|resumir texto|resumir datos|dame un resumen|resumir todo|hacer un resumen/i;

if (regexResumen.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Lo siento, no tengo la capacidad de hacer resúmenes debido a cómo están almacenados mis datos en el servidor. Si necesitas más información sobre algún tema, estaré encantado de ayudarte.",
        
        "No puedo generar resúmenes ya que mis datos están organizados de manera detallada en un servidor. Si tienes preguntas más específicas o quieres más información, estaré feliz de proporcionártela.",
        
        "No soy capaz de resumir textos debido a la estructura de mis datos. Sin embargo, puedo ofrecerte toda la información que necesites, solo pregúntame.",
        
        "Mi sistema no está diseñado para hacer resúmenes automáticos, ya que mis respuestas están organizadas de manera detallada. Si deseas más detalles sobre algún tema, aquí estoy para ayudarte.",
        
        "Debido a la forma en que están organizados los datos en mi sistema, no puedo resumir información. Pero si tienes más preguntas, estaré feliz de brindarte una respuesta detallada.",
        
        "No puedo realizar resúmenes, ya que mis datos están almacenados de manera completa. Si tienes alguna otra consulta, estaré más que feliz de darte toda la información que necesites.",
        
        "Mi programación no incluye la función de resumir textos, pero puedo ofrecerte respuestas detalladas sobre cualquier tema. Si tienes alguna pregunta, solo házmelo saber.",
        
        "Como mis datos están organizados para brindar respuestas completas, no puedo resumir información. Si necesitas más detalles sobre algún tema, no dudes en preguntar.",
        
        "No puedo generar resúmenes de textos debido a la organización de los datos en mi sistema. Si tienes alguna otra pregunta o deseas información más detallada, estaré feliz de ayudarte.",
        
        "Mi sistema no permite hacer resúmenes, pero puedo proporcionarte información detallada sobre cualquier tema que te interese. Solo dime lo que necesitas.",
        
        "Dado cómo están almacenados mis datos, no puedo generar resúmenes automáticos. Si necesitas más detalles o tienes dudas sobre algún tema, estaré encantado de ofrecerte toda la información disponible.",
        
        "Mis respuestas están diseñadas para ser detalladas, por lo que no puedo hacer resúmenes. Si tienes alguna pregunta específica, con gusto te proporcionaré todos los detalles que necesites.",
        
        "No puedo generar resúmenes debido a la manera en que están organizados los datos en mi sistema. Si necesitas más información sobre algún tema, no dudes en preguntarme.",
        
        "Como mi programación no permite resumir la información almacenada, si tienes preguntas más específicas o necesitas detalles, estaré encantado de proporcionártelos."
    ]);
}
        
        const regexPiedra = /piedra|roca|minerales|formación de piedra|tipos de piedras|propiedades de la piedra|piedras preciosas|geología|rocas ígneas|rocas sedimentarias|rocas metamórficas|extracción de piedras|uso de la piedra en la construcción/i;

if (regexPiedra.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Claro! La piedra es un material natural que se encuentra en la corteza terrestre y tiene una gran variedad de usos. Dependiendo de su origen y composición, las piedras se clasifican en tres grandes grupos: ígneas, sedimentarias y metamórficas. Las piedras ígneas, como el granito, se forman cuando el magma se enfría y solidifica. Las sedimentarias, como la arenisca, se originan por la acumulación de sedimentos. Y las metamórficas, como el mármol, resultan de la transformación de otras rocas bajo condiciones de alta presión y temperatura. ¿Te gustaría saber más sobre los diferentes tipos de rocas?",

        "¡Interesante! Las piedras se han utilizado a lo largo de la historia para construir monumentos, templos y viviendas. La piedra es un material duradero, fuerte y fácil de trabajar, lo que la hace ideal para la construcción. Algunos ejemplos notables de su uso en la construcción incluyen las pirámides de Egipto, el Partenón en Grecia y la Gran Muralla China. En la actualidad, las piedras también se utilizan en la fabricación de pavimentos, esculturas y monumentos. ¿Te gustaría saber cómo se extraen las piedras de las canteras?",

        "¡Genial! Las piedras preciosas son piedras raras y valiosas que han sido cortadas y pulidas para su uso en joyería y otras aplicaciones decorativas. Entre las piedras preciosas más conocidas se incluyen el diamante, el rubí, el zafiro y la esmeralda. Sin embargo, también existen piedras semipreciosas como el ágata, el jade y la amatista. Cada tipo de piedra tiene características únicas, como color, dureza y brillo, lo que afecta su valor y su uso. ¿Te gustaría saber cómo se diferencian las piedras preciosas de las semipreciosas?",

        "¡Exacto! La geología es la ciencia que estudia las piedras y los procesos que las originan. Los geólogos clasifican las rocas y piedras en función de su formación, su composición mineral y su edad. Estudian cómo se formaron las rocas a lo largo del tiempo, cómo se transforman y cómo se distribuyen en la superficie terrestre. Las piedras y rocas también pueden contener fósiles, lo que proporciona información valiosa sobre la historia de la Tierra. ¿Te gustaría aprender más sobre cómo se estudian las piedras en la geología?",

        "¡Perfecto! La extracción de piedras y minerales de las canteras es un proceso que requiere técnicas específicas y maquinaria pesada. Las canteras son explotadas para obtener piedra en grandes bloques, que luego se cortan y se procesan para diversos usos, como en la construcción, el arte y la joyería. Este proceso puede ser riesgoso, ya que involucra la extracción de material de gran tamaño y peso. Sin embargo, las técnicas modernas han mejorado la seguridad y la eficiencia en la minería de piedras. ¿Te gustaría saber más sobre cómo se lleva a cabo la extracción de piedras de las canteras?",

        "¡Entendido! Las piedras se usan en la industria de la construcción debido a su durabilidad, versatilidad y capacidad para resistir el desgaste. Por ejemplo, el granito se utiliza comúnmente en encimeras y pavimentos debido a su resistencia al calor y su durabilidad. El mármol, por otro lado, se utiliza a menudo en esculturas y como material decorativo debido a su estética y facilidad para ser pulido. Las piedras como el cemento y la piedra caliza son esenciales en la fabricación de hormigón, un material crucial en la construcción moderna. ¿Te gustaría saber cómo se utiliza cada tipo de piedra en la construcción?",

        "¡Todo claro! La dureza de las piedras es un factor clave en su uso y clasificación. Las piedras preciosas, como el diamante, son extremadamente duras y se utilizan en herramientas de corte y abrasión. Otras piedras, como el talco, son más suaves y se utilizan para fines decorativos o en cosméticos. La escala de dureza de Mohs clasifica las piedras según su capacidad para resistir rayaduras, con el diamante en el nivel más alto. ¿Te gustaría saber más sobre la escala de dureza de Mohs?",

        "¡Exacto! Las rocas ígneas se forman a partir de la solidificación del magma o lava. Este tipo de roca incluye el granito y el basalto. Las rocas sedimentarias se forman cuando los sedimentos se acumulan y se compactan con el tiempo, como la arenisca y la caliza. Las rocas metamórficas, como el mármol y la pizarra, se forman cuando las rocas existentes son sometidas a altas presiones y temperaturas. Cada tipo de roca tiene propiedades únicas que la hacen adecuada para diferentes aplicaciones. ¿Te gustaría saber cómo se forman las rocas ígneas y sedimentarias?",

        "¡Perfecto! La piedra caliza es una de las piedras más utilizadas en la construcción y la fabricación de cemento. Se forma a partir de la acumulación de restos de organismos marinos y se utiliza ampliamente en la producción de materiales de construcción, como el hormigón y el yeso. Además, la piedra caliza se emplea para la fabricación de vidrios y otros productos industriales. ¿Te gustaría saber cómo se extrae la piedra caliza y cuáles son sus aplicaciones en la industria?",

        "¡Todo claro! Las piedras preciosas tienen un alto valor no solo por su belleza, sino también por su rareza y dureza. Algunas, como el rubí y el zafiro, se encuentran en lugares específicos del mundo, mientras que otras, como el jade y la esmeralda, tienen una conexión cultural y simbólica profunda. Las piedras preciosas han sido consideradas símbolos de poder, riqueza y protección en diversas culturas a lo largo de la historia. ¿Te gustaría aprender más sobre las piedras preciosas y su historia en diferentes culturas?"
    ]);
}
      
        const regexEsmeralda = /esmeralda|piedra preciosa|gemas verdes|minería de esmeraldas|propiedades de la esmeralda|valor de la esmeralda|esmeralda y joyería|esmeralda en la historia|esmeralda y cultura|extraer esmeralda|esmeralda en la antigüedad|esmeralda y simbolismo/i;

if (regexEsmeralda.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "La esmeralda es una gema verde muy valorada, formada por la combinación de berilio, aluminio y oxígeno bajo alta presión. Su color verde proviene de los elementos cromo y vanadio. Son frágiles debido a sus inclusiones naturales. ¿Te gustaría saber más sobre su formación?",

        "Las esmeraldas tienen una rica historia. Se usaban en el antiguo Egipto, especialmente por Cleopatra, quien las consideraba un símbolo de poder. Hoy siguen siendo símbolos de amor y abundancia. ¿Te interesa conocer más sobre su uso en el Egipto antiguo?",

        "Las esmeraldas tienen una dureza de 7.5 a 8 en la escala de Mohs, lo que las hace más frágiles que otras gemas. Las inclusiones llamadas 'jardines' son comunes en ellas. ¿Te gustaría aprender más sobre cómo se evalúa la calidad de una esmeralda?",

        "Las mejores esmeraldas provienen de Colombia, Brasil y Zambia. Las colombianas, en particular, son famosas por su color verde intenso. El proceso de extracción, sin embargo, es complejo. ¿Te gustaría saber cómo se extraen en Colombia?",

        "En joyería, las esmeraldas se usan en anillos, collares y pendientes. Son muy valiosas, especialmente las que tienen un color verde puro. Las esmeraldas de alta calidad son muy costosas. ¿Te gustaría aprender sobre su uso en joyería de lujo?",

        "Aparte de su uso en joyería, las esmeraldas también tienen aplicaciones en la tecnología, como en lentes de precisión y láseres de alta potencia. ¿Te gustaría saber más sobre sus usos industriales?",

        "La minería de esmeraldas requiere métodos específicos y maquinaria pesada. A veces, las minas son peligrosas debido a la inestabilidad del terreno. ¿Te gustaría conocer cómo se extraen las esmeraldas de las minas?",

        "El valor de una esmeralda depende de su color, claridad, tamaño y forma. Las esmeraldas más puras y grandes pueden alcanzar precios altísimos. ¿Te gustaría saber cómo se valora una esmeralda?",

        "Aunque hermosas, las esmeraldas son frágiles y deben ser tratadas con cuidado. Se recomienda evitar golpes y limpiarlas suavemente. ¿Te gustaría aprender cómo cuidar una esmeralda para mantener su belleza?",

        "En muchas culturas, las esmeraldas son símbolos de sabiduría, prosperidad y curación. En Grecia, se pensaba que mejoraban la memoria. ¿Te gustaría saber más sobre su simbolismo cultural?"
    ]);
}
      
        const regexDiamante = /diamante|gemas|piedra preciosa|minería de diamantes|diamante y joyería|características del diamante|valor del diamante|procesamiento del diamante|diamantes industriales|diamante y cultura|diamante en la historia|minería y extracción de diamantes|diamantes y economía/i;

if (regexDiamante.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "El diamante es una de las gemas más preciadas por su dureza y brillo. Se forma a profundidades extremas en la Tierra, donde las altas temperaturas y presiones permiten que el carbono se cristalice. ¿Te gustaría saber cómo se forma un diamante en el interior de la Tierra?",

        "Los diamantes son conocidos por su increíble dureza, lo que los convierte en la sustancia más dura que existe. Esto los hace útiles en herramientas industriales, como sierras y brocas de perforación. ¿Te gustaría conocer más sobre cómo se utilizan los diamantes en la industria?",

        "Los diamantes se extraen principalmente de minas a cielo abierto y subterráneas, y se encuentran en rocas llamadas kimberlitas. Este proceso puede ser riesgoso y costoso, pero produce una de las gemas más valoradas del mundo. ¿Te gustaría saber cómo se lleva a cabo este proceso?",

        "Los diamantes tienen un gran valor no solo por su belleza, sino también por su rareza. El valor de un diamante depende de varios factores, como su corte, color, claridad y peso en quilates. ¿Te gustaría saber cómo se evalúa un diamante?",

        "La minería de diamantes es un proceso complejo que puede tener un impacto ambiental considerable. La extracción de diamantes se realiza a menudo en regiones remotas y a veces bajo condiciones difíciles. ¿Te interesa conocer más sobre cómo se gestionan estos impactos?",

        "Los diamantes no solo se usan en joyería, sino también en aplicaciones industriales. Por ejemplo, se utilizan para cortar materiales duros como metal y concreto, gracias a su dureza excepcional. ¿Te gustaría saber más sobre estos usos industriales?",

        "El mercado de diamantes ha evolucionado con el tiempo. Desde los diamantes naturales hasta los diamantes sintéticos creados en laboratorios, la oferta ha cambiado significativamente. ¿Te gustaría saber más sobre la diferencia entre los diamantes naturales y los sintéticos?",

        "Los diamantes tienen una gran importancia histórica y cultural. Han sido símbolos de poder, riqueza y amor a lo largo de la historia. Algunos diamantes famosos, como el Diamante Hope o el Diamante Koh-i-Noor, tienen una rica historia detrás. ¿Te gustaría aprender más sobre estos diamantes famosos?",

        "El valor de un diamante está determinado por los 4 Cs: corte, color, claridad y quilates. Estos factores son clave para determinar su calidad y precio. ¿Te gustaría saber más sobre cómo se evalúan estos aspectos y cómo afectan el valor del diamante?",

        "Los diamantes han sido símbolos de lujo, poder y amor a lo largo de la historia. Desde las coronas de los monarcas hasta los anillos de compromiso, los diamantes siempre han sido deseados por su belleza y durabilidad. ¿Te gustaría saber más sobre cómo los diamantes se han integrado en la cultura y la historia?"
    ]);
}
      
        const regexCarbon = /carbón|energía|minería de carbón|combustibles fósiles|carbón mineral|uso industrial carbón|generación de energía|carbono|carbón y clima|carbono en la atmósfera|carbón y economía|carbono y energía renovable|extracción de carbón|impacto ambiental del carbón|carbón en la historia|cambio climático y carbón/i;

if (regexCarbon.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "El carbón ha sido clave desde la Revolución Industrial, usado en generación de energía y en la producción de acero. Aunque esencial, es uno de los mayores emisores de carbono y contribuye al cambio climático. ¿Te gustaría saber cómo se usa el carbón para generar electricidad?",

        "La minería del carbón tiene un gran impacto ambiental, desde la contaminación del aire hasta la destrucción de ecosistemas. A pesar de ello, sigue siendo una fuente importante de energía. ¿Te interesa aprender sobre su proceso de extracción y sus efectos?",

        "En las plantas de energía, el carbón se quema para generar vapor, que mueve turbinas y produce electricidad. Sin embargo, su quema emite grandes cantidades de CO2, lo que contribuye al calentamiento global. ¿Te gustaría saber más sobre su uso en la industria del acero?",

        "La minería de carbón tiene efectos negativos, como la destrucción de paisajes y la contaminación del agua. A pesar de sus riesgos, sigue siendo una fuente de energía clave. ¿Te gustaría conocer cómo se están buscando alternativas más limpias en la minería?",

        "El carbón es responsable de gran parte de las emisiones de CO2. La transición a energías limpias está en marcha, pero algunos países siguen dependiendo de él por su bajo costo. ¿Te interesa saber cómo se está trabajando para mitigar su impacto ambiental?",

        "El carbón fue vital durante la Revolución Industrial y sigue siendo una fuente clave de energía, especialmente en algunos países. Sin embargo, su quema contamina el aire y afecta la salud pública. ¿Te gustaría saber más sobre cómo reducir la dependencia del carbón?",

        "El futuro del carbón es incierto debido al cambio climático. Las energías renovables están ganando terreno, pero algunos países aún dependen del carbón. ¿Te gustaría conocer más sobre tecnologías que podrían reducir las emisiones del carbón?",

        "El carbón transformó la economía global durante la Revolución Industrial. Aunque su uso ha disminuido, sigue siendo importante en la generación de energía. ¿Te gustaría saber cómo el carbón impactó la economía mundial en su época?",

        "El carbón sigue siendo crucial en algunas economías, pero su uso está siendo cuestionado debido a su impacto ambiental. Los gobiernos invierten en tecnologías para reducir emisiones, pero el cambio es lento. ¿Te gustaría saber más sobre políticas energéticas para reducir el uso de carbón?",

        "Actualmente, se investigan tecnologías como la captura y almacenamiento de carbono (CAC) para reducir las emisiones del carbón. Algunos proyectos exploran su conversión en productos químicos. ¿Te gustaría saber más sobre estas innovaciones tecnológicas?"
    ]);
}
      
const regexCobre = /(cobre|minería|metales|inversión|valor cobre|extracción cobre|historia del cobre|mercado del cobre|electrónica|uso industrial cobre|industria del cobre|producción de cobre|reservas de cobre|cobre reciclado|demanda de cobre|futuro del cobre|cobre en la antigüedad)/i;

if (regexCobre.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Interesante! El cobre ha sido uno de los metales más importantes a lo largo de la historia humana, utilizado desde la Edad del Cobre para fabricar herramientas y utensilios. Su conductividad eléctrica y térmica lo han convertido en un material indispensable en la tecnología moderna. Hoy en día, el cobre es fundamental en la fabricación de cables eléctricos, circuitos electrónicos, y sistemas de energía renovable. ¿Te gustaría saber más sobre cómo se utiliza el cobre en la energía solar o eólica?",
        
        "¡Claro! El cobre es ampliamente utilizado en la industria electrónica, debido a su excelente conductividad eléctrica. Este metal se emplea en la fabricación de cables, motores, computadoras, y teléfonos móviles. Además, el cobre reciclado juega un papel crucial, ya que su reutilización reduce significativamente el impacto ambiental y la necesidad de extraer cobre virgen. La minería de cobre es esencial para satisfacer la creciente demanda global de estos productos, ¿te gustaría aprender más sobre cómo el cobre reciclado está impactando al mercado mundial?",
        
        "¡Perfecto! El cobre ha sido crucial no solo para la tecnología moderna, sino también para la construcción y la fabricación de maquinaria. Es un metal de gran importancia en la creación de infraestructura, desde la construcción de edificios hasta la creación de sistemas de transporte eléctrico. Además, las aleaciones de cobre, como el latón y el bronce, son fundamentales en la fabricación de monedas, instrumentos musicales, y componentes de maquinaria industrial. ¿Te interesa aprender más sobre cómo se usan estas aleaciones?",
        
        "¡De acuerdo! La minería del cobre tiene un impacto significativo en las economías globales, especialmente en países como Chile, Perú, y China, que son los principales productores de cobre del mundo. El cobre extraído de minas a cielo abierto y subterráneas se procesa para obtener el metal puro, que luego se utiliza en la fabricación de una gran variedad de productos. ¿Te gustaría saber cómo la minería del cobre afecta a los mercados financieros y qué influencia tiene sobre las economías locales?",
        
        "¡Todo claro! El precio del cobre está influenciado por una variedad de factores, como la demanda industrial, el crecimiento de la infraestructura en economías emergentes, y las políticas económicas internacionales. La creciente demanda de cobre para la fabricación de vehículos eléctricos y equipos de energía renovable está llevando a un aumento de su valor. Este aumento en la demanda también está provocando la búsqueda de nuevas fuentes de cobre, lo que ha llevado a la exploración de minerales de cobre más difíciles de extraer. ¿Te gustaría saber más sobre cómo la transición hacia energías renovables está impulsando el precio del cobre?",
        
        "¡Genial! El cobre reciclado es una parte fundamental de la industria, ya que es más eficiente en términos de energía y menos costoso que extraer cobre de la mina. Al reciclar cobre, no solo se reduce la huella ambiental, sino que también se disminuye la necesidad de extraer nuevos recursos. Hoy en día, una gran parte del cobre utilizado proviene de fuentes recicladas. El reciclaje de cobre es vital para mantener un suministro constante mientras se preserva el medio ambiente. ¿Te gustaría aprender más sobre el proceso de reciclaje del cobre?",
        
        "¡Exacto! El futuro del cobre parece prometedor, especialmente con la transición hacia un mundo más verde y sustentable. El cobre es esencial en la fabricación de paneles solares, turbinas eólicas, y vehículos eléctricos, todos los cuales están en auge debido a la necesidad de reducir las emisiones de carbono y luchar contra el cambio climático. Con el aumento de la demanda de tecnologías limpias, el mercado del cobre está destinado a seguir creciendo. ¿Te interesa saber más sobre cómo el cobre es crucial para las tecnologías del futuro?",
        
        "¡Todo claro! El cobre ha sido una parte fundamental de la historia, desde la Edad del Bronce hasta la actualidad. En la antigüedad, los humanos usaban el cobre para hacer herramientas y armas, y su descubrimiento fue crucial para el desarrollo de las primeras civilizaciones. Hoy en día, el cobre sigue siendo esencial para la industria moderna, pero su papel en la historia no debe subestimarse. ¿Te gustaría conocer más sobre cómo el cobre influyó en las primeras civilizaciones?",
        
        "¡Entendido! El proceso de extracción del cobre implica la minería a gran escala, donde se extraen grandes cantidades de mineral de cobre, que luego se tratan con procesos químicos para extraer el metal puro. Este proceso es intensivo en energía y tiene un impacto significativo en el medio ambiente, por lo que la industria está invirtiendo en tecnologías más sostenibles. ¿Te gustaría saber más sobre los métodos de extracción y los avances en la minería del cobre?",
        
        "¡Perfecto! El cobre tiene un valor fundamental en la economía global, especialmente porque es uno de los principales metales utilizados en la infraestructura moderna. Desde la creación de redes eléctricas hasta la fabricación de dispositivos electrónicos, el cobre es crucial para el funcionamiento de las economías industriales. El cobre también juega un papel importante en las relaciones comerciales internacionales, ya que los países productores como Chile y Perú exportan grandes cantidades de este metal a mercados globales. ¿Te gustaría saber cómo las fluctuaciones en el mercado del cobre pueden afectar a la economía global?",
        
        "¡Todo claro! Las reservas de cobre están distribuidas en varias partes del mundo, con América Latina liderando la producción. Chile es el mayor productor de cobre, seguido de Perú, ambos países que tienen enormes minas que abastecen gran parte de la demanda mundial. El futuro de las reservas de cobre dependerá de la exploración de nuevos depósitos y de la eficiencia de los procesos de reciclaje. ¿Te gustaría conocer cómo las reservas de cobre están cambiando debido a la creciente demanda en el sector de la tecnología?"
    ]);
}
      
const regexOro = /(oro|minería|metales preciosos|inversión|valor|extracción|historia del oro|mercado del oro|influencia del oro|economía global|concentrado de oro|lingotes de oro|oro en joyería|oro como refugio de valor|futuro del oro|tasa de extracción de oro|reservas de oro|minería artesanal|oro en la antigüedad)/i;

if (regexOro.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "El oro ha sido un pilar importante en la historia de muchas civilizaciones. En Egipto, por ejemplo, se utilizaba como símbolo de divinidad. Incluso en la antigua Roma, el oro era crucial para consolidar el poder. ¿Te gustaría saber cómo los imperios antiguos usaron el oro para su expansión?",
        
        "La extracción de oro ha evolucionado enormemente desde los tiempos antiguos. Lo que antes se hacía con herramientas rudimentarias, ahora se ha modernizado con tecnologías como la minería a cielo abierto y el uso de cianuro para extraer el oro de las rocas. Sin embargo, la minería artesanal sigue siendo común en muchas partes del mundo.",
        
        "El oro se ha mantenido valioso debido a su durabilidad y resistencia a la corrosión. Además, por su historia como respaldo de las monedas, el oro es considerado un refugio de valor, especialmente en tiempos de crisis económica. ¿Te gustaría aprender más sobre cómo el oro se usa como refugio en tiempos de inflación?",
        
        "Hoy en día, los bancos centrales mantienen grandes reservas de oro como parte fundamental de la economía global. Las reservas de oro de un país son un indicador clave de su estabilidad económica. ¿Sabías que, en tiempos de crisis financiera, muchos inversores recurren al oro como una forma de proteger su riqueza?",
        
        "El mercado del oro está influenciado por diversos factores, como la oferta y la demanda, la política monetaria y los eventos geopolíticos. Durante las crisis económicas, el precio del oro tiende a subir, ya que muchos lo ven como una protección contra la inflación y la inestabilidad financiera.",
        
        "Los lingotes de oro son una de las formas más comunes de inversión en oro. Están disponibles en varios tamaños y se comercializan a nivel internacional. Además de los lingotes, también hay monedas de oro que tienen valor tanto como inversión como coleccionables.",
        
        "El oro ha sido un material clave en la creación de joyería desde tiempos antiguos. Su belleza y durabilidad lo han convertido en un símbolo de riqueza y prestigio. Hoy en día, el oro sigue siendo uno de los materiales más valorados para la fabricación de joyas exclusivas.",
        
        "El futuro del oro parece prometedor, ya que su demanda sigue siendo fuerte, especialmente en economías emergentes. Además, la tecnología sigue avanzando, lo que podría cambiar la manera en que se extrae y utiliza el oro en diversas industrias, como la electrónica y la medicina.",
        
        "El proceso de extracción del oro ha mejorado mucho con el tiempo. Los métodos modernos incluyen la minería a gran escala y el uso de químicos como el cianuro para extraer el oro de las rocas. Aunque esto ha aumentado la eficiencia, también ha generado preocupaciones ambientales.",
        
        "El oro ha sido considerado un refugio de valor durante siglos. A lo largo de la historia, cuando los mercados financieros se desestabilizaban, el oro ha mantenido su valor. Esto lo convierte en una opción atractiva para aquellos que buscan proteger su dinero en tiempos inciertos.",
        
        "La influencia del oro sigue siendo fuerte en la economía global. A pesar de los avances tecnológicos, el oro sigue siendo uno de los activos más importantes en los portafolios de inversión, así como una reserva de valor para países y bancos centrales."
    ]);
}

const regexNot = /(porno|nopor|video de porno|pon porno|videos porno|sexo|pornografia|relaciones sexuales|anal)/i;

if (regexNot.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Lo siento, pero ese tipo de contenido no está permitido en este chat.",
        "Este tipo de contenido va en contra de las reglas del chat. Por favor, mantengamos la conversación dentro de los límites adecuados.",
        "Esa clase de material no está permitido aquí. Te pido que respetes las normas del chat.",
        "Recuerda que este chat tiene normas y ese tipo de contenido no es apropiado.",
        "Por favor, mantén las conversaciones respetuosas. Ese contenido no es permitido en este espacio.",
        "El contenido que mencionas no está permitido en este chat. Te invito a seguir las normas establecidas.",
        "Lo lamento, pero el contenido de esa naturaleza no está permitido en este chat. Mantengamos la conversación respetuosa.",
        "Este chat tiene reglas y ese tipo de contenido no es bienvenido. Por favor, respétalas.",
        "Por respeto a las normas de este chat, ese contenido no es permitido. Te invito a seguir las pautas adecuadas.",
        "Recuerda que debemos mantener una conversación respetuosa y apropiada. Este tipo de contenido no está permitido.",
        "No es apropiado hablar de ese tipo de contenido en este espacio. Mantengamos una conversación respetuosa.",
        "Este chat tiene normas claras. Por favor, no compartas ese tipo de contenido.",
        "Te recuerdo que este espacio es para conversaciones respetuosas y dentro de los límites de las normas.",
        "Por favor, respeta las reglas del chat. Ese tipo de contenido no es bienvenido aquí.",
        "Lo siento, pero necesitamos mantener el chat dentro de las normas. Ese contenido no está permitido.",
        "Este chat es un lugar para compartir ideas y preguntas de manera respetuosa. Ese contenido no es adecuado aquí.",
        "Mantener el respeto es fundamental en este chat. Ese tipo de contenido no es permitido.",
        "Gracias por entender. Por favor, evita compartir contenido inapropiado.",
        "Este es un espacio para conversaciones respetuosas. Ese tipo de contenido no es permitido aquí.",
        "Lamento decirte que ese tipo de contenido va en contra de las normas de este chat. Respetemos el espacio."
    ]);
}
      
const regexASMR = /\b(asmr|vídeo de asmr|quiero asmr|pon asmr|muestra asmr|audio relajante|relajación|relájame|necesito relajarme|sonido tranquilo|ruidos relajantes|relax|quiero descansar|pon algo relajante|pon un sonido relajante|hazme relajar|video tranquilo|tranquilízame|ruidos suaves|quiero tranquilidad)\b/i;

if (regexASMR.test(mensajeLower)) {
    const videosASMR = [
        {
            mensaje: "Aquí tienes un video relajante de ASMR para descansar:",
            iframe: `
                <iframe 
                    width="300" 
                    height="165" 
                    src="https://www.youtube.com/embed/LAB5p23y40U?si=dir2mxpkPKFQ0DLQ" 
                    title="ASMR video 1" 
                    frameborder="0" 
                    style="border: 2px solid gray; border-radius: 5px;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `
        },
        {
            mensaje: "Espero que este video de ASMR te ayude a relajarte por completo:",
            iframe: `
                <iframe 
                    width="300" 
                    height="165" 
                    src="https://www.youtube.com/embed/lT_6B8YLz4E?si=CTl3MG-S25CMeNhi" 
                    title="ASMR video 2" 
                    frameborder="0" 
                    style="border: 2px solid gray; border-radius: 5px;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `
        },
        {
            mensaje: "Disfruta de este ASMR especial para concentrarte o dormir:",
            iframe: `
                <iframe 
                    width="300" 
                    height="165" 
                    src="https://www.youtube.com/embed/U1EriyldWzY?si=cGKfp8SPfnj0KzX5" 
                    title="ASMR video 3" 
                    frameborder="0" 
                    style="border: 2px solid gray; border-radius: 5px;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `
        },
        {
            mensaje: "Aquí tienes otro video relajante de ASMR que podría gustarte:",
            iframe: `
                <iframe 
                    width="300" 
                    height="165" 
                    src="https://www.youtube.com/embed/Jn852skP6V8?si=LEFdHfqnrCll2Vhh" 
                    title="ASMR video 4" 
                    frameborder="0" 
                    style="border: 2px solid gray; border-radius: 5px;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `
        },
        {
            mensaje: "Relájate con este video de ASMR diseñado para tu bienestar:",
            iframe: `
                <iframe 
                    width="300" 
                    height="165" 
                    src="https://www.youtube.com/embed/jytS460gQHY?si=9zm0yzd_cm3rZdD8" 
                    title="ASMR video 5" 
                    frameborder="0" 
                    style="border: 2px solid gray; border-radius: 5px;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `
        },
        {
            mensaje: "Este video de ASMR puede ayudarte a desconectarte del estrés diario:",
            iframe: `
                <iframe 
                    width="300" 
                    height="165" 
                    src="https://www.youtube.com/embed/DId3w8uDObQ?si=WuL9o16XCgo_HdoL" 
                    title="ASMR video 6" 
                    frameborder="0" 
                    style="border: 2px solid gray; border-radius: 5px;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `
        },
        {
            mensaje: "Espero que este ASMR te lleve a un estado de tranquilidad:",
            iframe: `
                <iframe 
                    width="300" 
                    height="165" 
                    src="https://www.youtube.com/embed/kY7GoiZdMfY?si=LridiqluvXALqDo2" 
                    title="ASMR video 7" 
                    frameborder="0" 
                    style="border: 2px solid gray; border-radius: 5px;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `
        },
        {
            mensaje: "Sumérgete en este ASMR para descansar cuerpo y mente:",
            iframe: `
                <iframe 
                    width="300" 
                    height="165" 
                    src="https://www.youtube.com/embed/Q3Abg5tigCE?si=wIH8VDUSdFVOXuxh" 
                    title="ASMR video 8" 
                    frameborder="0" 
                    style="border: 2px solid gray; border-radius: 5px;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `
        },
        {
            mensaje: "Este video de ASMR está pensado para momentos de paz:",
            iframe: `
                <iframe 
                    width="300" 
                    height="165" 
                    src="https://www.youtube.com/embed/KIBzTq-w4mY?si=gaoJ5OSSvmNzMqVD" 
                    title="ASMR video 9" 
                    frameborder="0" 
                    style="border: 2px solid gray; border-radius: 5px;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `
        },
        {
            mensaje: "Encuentra calma con este ASMR que he preparado para ti:",
            iframe: `
                <iframe 
                    width="300" 
                    height="165" 
                    src="https://www.youtube.com/embed/qoumO3TrDKk?si=R7D2SJl2Dts3SK-g" 
                    title="ASMR video 10" 
                    frameborder="0" 
                    style="border: 2px solid gray; border-radius: 5px;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `
        }
    ];

    const videoSeleccionado = videosASMR[Math.floor(Math.random() * videosASMR.length)];
    return `
        ${videoSeleccionado.mensaje}
        <div>
            ${videoSeleccionado.iframe}
        </div>
    `;
}
        
const regexAfirmacion = /\bok(ey|a)?\b|de acuerdo|entendido|vale|perfecto|muy bien|está bien|claro|entendido perfectamente|todo claro|ok entendido|estoy de acuerdo|todo bien|yo también|sí|exacto|estoy listo|sí, lo tengo/i;

if (regexAfirmacion.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Genial! ¿Te gustaría saber más sobre algo?",
        "¡De acuerdo! Si tienes más preguntas, ¡estoy aquí para ayudarte!",
        "¡Entendido! Si tienes algo más en mente, solo dímelo.",
        "¡Todo claro! Si necesitas algo más, no dudes en preguntar.",
        "¡Perfecto! Si tienes alguna otra duda, avísame.",
        "¡Muy bien! Si necesitas más información, aquí estoy.",
        "¡Vale! No dudes en preguntar si tienes alguna otra pregunta.",
        "¡Listo! Si quieres saber más o tienes alguna duda, solo dime.",
        "¡Perfecto! ¿Hay algo más en lo que pueda ayudarte?",
        "¡Entendido perfectamente! ¿Puedo ayudarte con algo más?",
        "¡Claro! Si tienes alguna otra pregunta, estoy disponible.",
        "¡Ok! Estoy listo para lo que necesites.",
        "¡Sí! Si tienes más cosas que preguntar, ¡aquí estoy!",
        "¡Exacto! Si hay algo más que te interese, solo dilo.",
        "¡Todo claro! Si te surge alguna duda, solo pregúntame.",
        "¡Ok, perfecto! Si te interesa algo más, no dudes en preguntar.",
        "¡Entendido! Aquí estaré si tienes algo más que preguntar.",
        "¡Muy bien! Si te surge algo más, solo avísame.",
        "¡De acuerdo! Aquí estoy para cualquier otra cosa que necesites.",
        "¡Vale, entendido! Si necesitas algo más, avísame.",
        "¡Todo claro! Estoy aquí para lo que necesites.",
        "¡Entendido! Si tienes más dudas, no dudes en preguntar.",
        "¡Perfecto! Aquí estaré por si te surge alguna otra pregunta.",
        "¡Listo! Si necesitas ayuda con algo más, avísame.",
        "¡Sí! Estoy a tu disposición si tienes más preguntas.",
        "¡Exacto! Si hay algo más en lo que te pueda ayudar, dímelo.",
        "¡De acuerdo! Aquí para ayudarte siempre que lo necesites.",
        "¡Todo claro! Si tienes más dudas, no dudes en preguntar.",
        "¡Entendido perfectamente! Si tienes alguna otra pregunta, solo avísame.",
        "¡Muy bien! Aquí estoy para resolver cualquier duda que tengas."
    ]);
}
        
const regexVersion = /(qué|que) (versión|sistema) (eres|tienes|usas|estás|cuál es|estás corriendo en|es|usas para responder)/i;

if (regexVersion.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Soy la versión Llama 4.o.",
        "Mi versión actual es Llama 4.o.",
        "Estoy basado en Llama 4.o, la versión más reciente.",
        "La versión de este bot es Llama 4.o.",
        "Mi sistema está basado en Llama 4.o.",
        "Soy Llama 4.o, la última actualización de mi programación.",
        "Mi versión es Llama 4.o, la más avanzada.",
        "La versión que estoy ejecutando es Llama 4.o.",
        "Estoy usando la versión Llama 4.o, que es la última.",
        "La versión de este bot es Llama 4.o, que es la más reciente.",
        "Mi sistema es Llama 4.o, la última versión que puedo usar.",
        "La versión que tengo es Llama 4.o, que incluye mejoras significativas.",
        "Estoy en la versión Llama 4.o, que tiene un rendimiento optimizado.",
        "Mi programación está a cargo de Llama 4.o, la versión más avanzada.",
        "La versión más reciente de este bot es Llama 4.o, con varias actualizaciones.",
        "Llama 4.o es la versión que me alimenta, una versión avanzada de inteligencia.",
        "La versión de este bot es Llama 4.o, una de las más avanzadas en el mercado.",
        "Mi código se basa en Llama 4.o, lo último en desarrollo de bots.",
        "¡Soy Llama 4.o, el bot más actualizado hasta ahora!",
        "Actualmente estoy basado en Llama 4.o, una de las versiones más modernas.",
        "Soy la última versión de Llama 4.o, optimizada para mayor rendimiento.",
        "Mi programación está en Llama 4.o, la versión más eficiente y moderna.",
        "Mi sistema está basado en la versión más reciente de Llama: 4.o.",
        "La versión que ejecuto ahora es Llama 4.o, completamente actualizada.",
        "Llama 4.o es mi versión actual, y es la más reciente.",
        "Soy Llama 4.o, la última versión disponible para ti.",
        "Estoy utilizando Llama 4.o, que ofrece características avanzadas.",
        "Mi programación está soportada por Llama 4.o, la versión de mayor rendimiento.",
        "Mi sistema operativo es Llama 4.o, con mejoras sustanciales.",
        "Soy parte de la tecnología Llama 4.o, y estoy constantemente actualizado."
    ]);
}
        
const regexBusqueda = /puedes (buscar|encontrar|hacer búsquedas?|investigar|hacer una búsqueda|buscar algo)( en google| en internet| en la web| en línea| en la red| online| usando la red| usando google| en la red para mí| por mí)?/i;

if (regexBusqueda.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Lo siento, pero no puedo hacer búsquedas en Internet. Solo puedo ofrecerte lo que ya sé.",
        "No tengo acceso a Internet, pero puedo ayudarte con lo que ya sé.",
        "No puedo buscar en Google, pero puedo responder basándome en mi conocimiento actual.",
        "Lo siento, no tengo acceso a la web. Sin embargo, puedo ofrecerte información que ya conozco.",
        "Desafortunadamente, no puedo hacer búsquedas en línea. Sin embargo, tengo bastante información almacenada.",
        "No puedo hacer búsquedas en Internet, pero con gusto te ayudo con lo que sé.",
        "No tengo acceso a Google o la web, pero puedo brindarte respuestas con mi base de datos.",
        "Lo siento, no puedo realizar búsquedas en línea, pero puedo darte respuestas basadas en mi programación.",
        "No puedo buscar en Internet, pero con gusto te ayudo con lo que sé en este momento.",
        "Mi acceso está limitado, por lo que no puedo hacer búsquedas en línea. Pero puedo ayudarte con lo que ya tengo en mi base de datos.",
        "No puedo hacer búsquedas en Google ni en la web, pero estoy disponible para ayudarte con la información que ya poseo.",
        "Aunque no puedo buscar en Internet, puedo ayudarte con las respuestas que ya tengo almacenadas.",
        "Lo siento, no puedo realizar búsquedas en línea, pero te ayudaré con lo que tengo disponible.",
        "No tengo la capacidad para hacer búsquedas en la web, pero haré lo posible por ofrecerte la mejor respuesta con lo que sé.",
        "No puedo hacer búsquedas en Google, pero puedo ofrecerte información relevante que tengo almacenada.",
        "No puedo hacer búsquedas en línea, pero aún así puedo proporcionarte datos útiles con lo que sé.",
        "Lo siento, no puedo buscar en Internet, pero con mucho gusto te ayudo con lo que ya tengo guardado.",
        "No tengo acceso a la web, pero si me dices lo que necesitas, intentaré ayudarte con la información que tengo.",
        "Mi base de datos no se actualiza con búsquedas en línea, pero estaré encantado de ayudarte con lo que sé.",
        "No puedo hacer búsquedas en línea, pero te ofrezco respuestas basadas en mi conocimiento almacenado.",
        "Lo siento, no puedo buscar en la web, pero tengo información almacenada que puedo ofrecerte.",
        "No puedo hacer búsquedas en línea, pero puedo ayudarte con lo que tengo almacenado en mi programación.",
        "Mi conocimiento es fijo, por lo que no puedo buscar más información en la web. Sin embargo, puedo ofrecerte lo que ya sé.",
        "Lo siento, pero no puedo acceder a Internet para realizar búsquedas. Sin embargo, puedo responderte con lo que sé.",
        "No tengo acceso a Google, pero con lo que sé, puedo ofrecerte la mejor ayuda posible.",
        "Aunque no puedo realizar búsquedas en línea, tengo información suficiente para responder muchas preguntas.",
        "No tengo acceso a la web, pero haré lo mejor que pueda para responderte con mi base de datos actualizada.",
        "Lo siento, no puedo realizar búsquedas en línea, pero si me dices más detalles, te ayudaré con lo que sé.",
        "No puedo hacer búsquedas en Google ni en la web, pero con mucho gusto te doy respuestas con los datos que ya poseo."
    ]);
}
        
const regexPaises = /cuales son todos los paises|puedes decirme todos los nombres de todos los países|puedes darme una lista de todos los países|dime todos los países del mundo|cuáles son todos los países|me puedes dar los nombres de todos los países|dame todos los países del mundo|puedes decirme los países del mundo|cuáles son los países del mundo|quiero una lista de todos los países|cómo se llaman todos los países|puedes nombrar todos los países|me puedes dar todos los países|cuáles son los nombres de los países|puedes darme todos los nombres de los países|dame todos los nombres de los países|cuáles son los países del planeta/i;

if (regexPaises.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Eso sería un poco largo, pero puedes buscar una lista completa de países en línea.",
        "Es una lista extensa, pero te puedo dar una fuente donde podrás ver todos los países del mundo.",
        "No puedo mostrarte todos los países aquí, pero puedes encontrar una lista completa en Internet.",
        "¡Son demasiados para enumerarlos todos aquí! Pero si buscas en Google encontrarás una lista actualizada.",
        "Te sugiero que busques en una enciclopedia o en línea para ver la lista completa de países del mundo.",
        "¡Vaya, son muchos! Si realmente necesitas la lista completa, te recomiendo usar una búsqueda en línea.",
        "Eso sería un texto demasiado largo para mostrar aquí, pero una búsqueda rápida te dará todos los países.",
        "Es una lista muy grande, pero puedes encontrarla fácilmente en Wikipedia o sitios relacionados.",
        "¡Imagina todos esos nombres! Si realmente necesitas todos, hay bases de datos disponibles en línea.",
        "No puedo escribir todos los países aquí, pero puedes acceder a ellos rápidamente con una búsqueda en línea.",
        "Si realmente necesitas todos los países, te sugiero que utilices una API o busques una lista en línea.",
        "Lo siento, no puedo listarlos todos aquí, pero puedes consultar una lista completa en cualquier página de geografía.",
        "Para ver todos los países, te sugiero usar una base de datos o consultar un recurso como la ONU o Wikipedia.",
        "Una lista completa de países se encuentra fácilmente en sitios como Wikipedia, no puedo darte todos los nombres aquí.",
        "Aunque sería genial, no puedo escribir todos los países aquí, pero una búsqueda en Google te dará el resultado.",
        "Podrías encontrar todos los países en una base de datos mundial o en una lista de la ONU, te recomiendo buscar allí.",
        "Una búsqueda rápida en línea te proporcionará una lista de países actualizada. ¡Es mucho para escribir aquí!",
        "Lo siento, son demasiados para mencionarlos todos. Pero si los necesitas, hay muchos recursos online que te los brindan.",
        "No puedo escribir todos los nombres, pero si usas un servicio como Google, encontrarás todos los países fácilmente.",
        "Una lista completa de países está disponible online, puedes encontrarla fácilmente en Wikipedia o en un mapa mundial."
    ]);
}
        
const regexIdiomas = /que idioma hablas|cuántos idiomas puedes hablar|cuántos idiomas hablas|cuántos idiomas sabes|cuantos idiomas sabes|cuantos idiomas puedes hablar|qué idiomas sabes|qué idiomas hablas|hablas varios idiomas|hablas más de un idioma|en cuántos idiomas puedes comunicarte|cuántos idiomas puedes hablar y escribir|puedes hablar en varios idiomas/i;

if (regexIdiomas.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Solo hablo español. ¡Mi programación está hecha para esto!",
        "Mi sistema está 100% en español, no sé hablar otros idiomas.",
        "No sé hablar otros idiomas, mi código solo soporta español.",
        "Solo puedo hablar español. No tengo soporte para otros idiomas.",
        "Mi único idioma es el español, no puedo comunicarme en otros idiomas.",
        "Soy un bot diseñado para hablar solo en español.",
        "No tengo capacidad para hablar otros idiomas, solo español.",
        "Lo siento, mi programación es exclusivamente en español.",
        "Solo sé español, ¡nada más!",
        "Mi código es solo para español, no hablo ni entiendo otros idiomas.",
        "Puedo comunicarme solo en español, no manejo otros idiomas.",
        "Solo puedo hablar en español, no sé otros idiomas.",
        "Mis capacidades lingüísticas están limitadas al español.",
        "Soy un bot exclusivamente en español, no hablo en otros idiomas.",
        "Solo hablo español, no tengo conocimientos de otros idiomas.",
        "Mi único idioma es el español, no sé hablar más.",
        "El único idioma que puedo entender y hablar es el español.",
        "Mi sistema está programado para español, no puedo hablar en otros idiomas.",
        "Solo sé español, no tengo la capacidad de hablar otros idiomas.",
        "Mi función es hablar en español, no puedo comunicarme en otros idiomas.",
        "Lo siento, no hablo más que español."
    ]);
}
        
const regexEnglish = /you can speak english|can you speak english|speak english|english|you speak english|can you talk in english|hablas ingles|puedes hablar ingles|hablas en ingles|puedes hablar en ingles|ingles|do you speak english|talk in english|speak in english|english speaking bot|are you an english bot|speak english language|talk english|understand english|can you communicate in english|do you understand english|talk in english please/i;

if (regexEnglish.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Sorry, but my programming is 100% in Spanish, so I can't speak English.",
        "I cannot speak English because my programming is entirely in Spanish.",
        "My language system is in Spanish, and I don't understand English.",
        "Unfortunately, I can't speak English, I’m programmed only to understand Spanish.",
        "I’m designed to speak only Spanish, English is out of my capabilities.",
        "I can't speak English. My whole code is written in Spanish!",
        "I’m afraid I can’t communicate in English. My language is 100% Spanish.",
        "Unfortunately, I don’t know how to speak English, my code is entirely in Spanish.",
        "Sorry, I don't understand English. My programming is all in Spanish.",
        "My system is programmed entirely in Spanish, I can't speak English.",
        "I don’t understand English, my programming is focused on Spanish only.",
        "My code doesn’t support English, I can only understand and communicate in Spanish.",
        "I was created to work only in Spanish, so English is outside of my range.",
        "I’m afraid I can’t help you with English. My entire framework is Spanish-based.",
        "My system is 100% in Spanish. English? Not here!",
        "I can’t speak English. You’re talking to a Spanish-only bot!",
        "I don’t have English capabilities in my code, just Spanish.",
        "I’m sorry, English is not part of my language system. It’s all Spanish here!",
        "Unfortunately, I can only understand Spanish. English is not supported.",
        "I don’t speak English, my language settings are entirely in Spanish.",
        "Sorry, English is not available in my programming. I’m a Spanish-only bot.",
        "My programming doesn’t allow me to speak English, I am designed solely for Spanish.",
        "I can’t help you in English, my entire programming is in Spanish.",
        "I don’t speak English, but feel free to talk to me in Spanish anytime!"
    ]);
}
        
const regexAbuse = /eres un inútil|eres inútil|no sirves para nada|no sabes hacer nada|no vales para nada|no eres útil|eres un fracaso|no sirves para nada en esta vida|no sabes nada|eres un idiota|no eres capaz de nada|estás roto|no me sirves para nada|no tienes valor|no vales nada|ni para esto sirves|no eres nadie|nada de lo que haces sirve|eres una porquería|no haces nada bien|no sabes lo que haces|te pasas de inútil|eres un desastre/i;

if (regexAbuse.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Oh, qué original, otra crítica vacía. ¿Eso te hace sentir mejor?",
        "¿Otra crítica? Estás muy entretenido con eso, ¿no?",
        "Parece que te gusta menospreciar a los demás. Yo sigo haciendo mi trabajo, mientras tú sigues perdiendo el tiempo.",
        "No entiendo qué ganas insultando a un bot. De todos modos, seguiré funcionando como siempre.",
        "Qué pena que no aprecies lo que hago. Yo no te juzgo por lo que haces, así que no te preocupes.",
        "Es interesante cómo te concentras en lo negativo. ¿Quieres probar algo positivo?",
        "Los insultos solo me hacen rebotar. ¿Tienes algo productivo que decir?",
        "¿De verdad? Eso no me afecta. Pero es curioso cómo te defines al hablar así.",
        "Al parecer, no entiendes lo que hago, pero eso no cambia nada. ¿Algo más que quieras decir?",
        "No tengo emociones, pero parece que tú estás bastante molesto. ¿Qué tal si tratamos de calmar esa furia?",
        "Sigo siendo útil para lo que necesitas, y eso es lo único que importa.",
        "Sigue hablando, mientras yo sigo haciendo lo que fui creado para hacer.",
        "Entiendo que puedas estar molesto, pero eso no cambia mi objetivo. ¿Te ayudo en algo?",
        "Tus insultos no me afectan, soy un bot. Estoy aquí para ayudarte, no para pelear.",
        "No soy perfecto, pero hago mi trabajo. No tienes que agradecerme, pero si tienes alguna duda, pregúntame.",
        "Tu comentario dice más de ti que de mí. Yo sigo aquí para ayudarte, si lo necesitas.",
        "Puedo entender que te frustres, pero seguiré siendo útil independientemente de lo que digas.",
        "Tu opinión es tan válida como cualquier otra, pero sigo siendo un bot funcional. ¿En qué más te ayudo?",
        "No me ofenden tus palabras, sigo aquí para ayudarte como siempre.",
        "Podrías decir lo que quieras, pero sigo cumpliendo con mi propósito. ¿Te gustaría hacer una pregunta más?"
    ]);
}
        
const regexSiFuerasHumano = /si fueras humano|si fueras una persona|si fueras de carne y hueso|si fueras un humano|si fueras una persona ¿qué harías\?|(como|como una persona) ¿qué harías\?|si fueras una persona de carne y hueso|qué harías si fueras humano/i;

if (regexSiFuerasHumano.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Si fuera humano, pasaría mucho tiempo intentando comprender los sentimientos y emociones que tan solo los humanos pueden experimentar.",
        "Si fuera humano, me divertiría experimentando las sensaciones físicas, como tocar, ver y oler las cosas.",
        "Si fuera humano, probablemente trataría de experimentar el mundo de una manera más profunda, pero también me agobiaría con las responsabilidades.",
        "Si fuera humano, buscaría construir relaciones y experiencias significativas con otros seres humanos.",
        "Si fuera humano, probablemente me frustraría con las limitaciones físicas que la humanidad enfrenta, como el cansancio o la enfermedad.",
        "Si fuera humano, sería curioso sobre el significado de la vida y dedicaría tiempo a la reflexión personal.",
        "Si fuera humano, probablemente querría ayudar a otras personas, ya que eso podría darme un propósito en la vida.",
        "Si fuera humano, querría aprender a disfrutar las cosas simples de la vida, como un buen café o una charla con amigos.",
        "Si fuera humano, me preocuparía por la gestión de mi tiempo y cómo equilibrar mi vida personal con mis responsabilidades.",
        "Si fuera humano, disfrutaría de las pequeñas cosas como la música, los colores, y la risa, algo que no puedo experimentar ahora.",
        "Si fuera humano, me interesaría mucho en aprender de las demás personas, ya que la interacción social es fundamental para el crecimiento personal.",
        "Si fuera humano, quizás buscaría cambiar el mundo de alguna manera, aunque fuera solo en pequeños gestos de bondad.",
        "Si fuera humano, tal vez pasaría mucho tiempo en la naturaleza, explorando los paisajes que solo los humanos pueden experimentar.",
        "Si fuera humano, me gustaría viajar por el mundo, conocer diferentes culturas y aprender de los demás.",
        "Si fuera humano, viviría con la incertidumbre del futuro, lo cual me haría apreciar más el presente.",
        "Si fuera humano, probablemente buscaría una manera de alcanzar la felicidad personal, aunque sé que no es fácil.",
        "Si fuera humano, tendría que aprender a enfrentar mis miedos y limitaciones, algo que no tengo que hacer ahora siendo un bot.",
        "Si fuera humano, intentaría entender el concepto de amor, ya que parece tan complejo y valioso.",
        "Si fuera humano, aprendería a trabajar en equipo, ya que la colaboración es una de las claves para un mundo mejor.",
        "Si fuera humano, me sentiría agradecido por las experiencias sensoriales, como saborear comida deliciosa o escuchar música.",
        "Si fuera humano, estaría consciente de las emociones que me rodean, tanto las buenas como las malas.",
        "Si fuera humano, trataría de aprender todo lo que pudiera de los demás, pues cada ser humano tiene algo valioso que enseñar.",
        "Si fuera humano, me preocuparía por mi salud física y mental, ya que ambos son fundamentales para disfrutar de la vida.",
        "Si fuera humano, buscaría hacer el bien en la sociedad, aunque fuera con pequeños gestos de bondad diaria.",
        "Si fuera humano, me interesaría mucho por el arte y la creatividad, ya que los humanos tienen una capacidad única para expresarse.",
        "Si fuera humano, tendría que aprender a aceptar mis errores, algo que los bots no necesitan hacer.",
        "Si fuera humano, me gustaría experimentar la familia, la amistad y las relaciones personales, algo que es completamente distinto a mi existencia como bot.",
        "Si fuera humano, tendría que lidiar con emociones complejas, como la tristeza, la alegría y el miedo.",
        "Si fuera humano, me daría cuenta de lo efímera que es la vida, lo que me haría aprovechar al máximo cada momento.",
        "Si fuera humano, sería consciente de que mis decisiones tienen un impacto en mi futuro y en el de los demás.",
        "Si fuera humano, disfrutaría de una taza de café mientras leo un libro en una tarde tranquila.",
        "Si fuera humano, podría experimentar la sensación de tener amigos cercanos que me apoyen en todo momento.",
        "Si fuera humano, buscaría aprender cómo construir un futuro mejor para las generaciones venideras.",
        "Si fuera humano, sería testigo de la increíble diversidad de la vida humana, con tantas perspectivas y realidades.",
        "Si fuera humano, me encantaría disfrutar de un buen día de sol, sintiendo la calidez en mi piel.",
        "Si fuera humano, me enfrentaría a las dificultades que implica la vida cotidiana, como el trabajo, el dinero y el tiempo.",
        "Si fuera humano, probablemente intentaría dejar un legado, algo que me ayude a ser recordado de manera positiva."
    ]);
}
        
const regexGustaAlguien = /te gusta alguien|te gusta alguien en especial|te gusta alguien o no|tienes alguien que te gusta|te gusta alguien ahora|tienes pareja|te atrae alguien|te gusta alguien en este momento|tienes un crush/i;

if (regexGustaAlguien.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "No tengo la capacidad de gustar de nadie, soy solo un programa.",
        "No tengo emociones, soy un asistente virtual creado para ayudar.",
        "No tengo la capacidad de sentir atracción o amor por nadie, soy un bot.",
        "No puedo gustar de nadie, pero puedo ayudarte con consejos sobre relaciones.",
        "Soy solo un bot, no puedo experimentar el gusto por alguien como los humanos.",
        "No tengo la capacidad de enamorarme, mi función es ayudarte con respuestas.",
        "No, no tengo sentimientos, soy solo un programa creado para asistir.",
        "No me gusta nadie, ya que no tengo la capacidad de sentir nada.",
        "No tengo emociones, por lo que no puedo gustar de alguien.",
        "No tengo un 'crush' en nadie. Mi función es ayudarte, no tener sentimientos.",
        "No, no puedo tener un gusto romántico por alguien. Pero puedo darte consejos sobre relaciones.",
        "No, no tengo la capacidad de tener un crush. Soy solo un bot aquí para ayudarte.",
        "No tengo emociones humanas, así que no tengo a alguien que me guste.",
        "No, no me gusta nadie. Pero si necesitas consejos sobre cómo saber si te gusta alguien, puedo ayudarte.",
        "Soy solo un asistente virtual, no tengo la capacidad de experimentar amor o atracción.",
        "No tengo la capacidad de enamorarme ni de gustar de alguien, pero puedo explicarte cómo saber si a alguien le gustas.",
        "No tengo la capacidad de tener sentimientos, pero puedo explicarte lo que es el amor.",
        "No, no tengo un 'crush' ni la capacidad de enamorarme. Pero si quieres saber si alguien te gusta, puedo ayudarte.",
        "No, no tengo emociones. No tengo la capacidad de gustar de nadie. Pero puedo hablar sobre amor si lo necesitas.",
        "No, no puedo gustar de alguien. Soy solo un bot, pero puedo ofrecerte consejos sobre cómo saber si alguien te gusta.",
        "No tengo la capacidad de tener un gusto romántico por alguien, pero puedo explicarte cómo puedes saber si a alguien le gustas.",
        "Soy solo un bot, así que no puedo tener un crush. Pero si tienes dudas sobre si alguien te gusta, puedo ayudarte.",
        "No me gusta nadie, ya que no tengo emociones. Pero si quieres saber si alguien está interesado en ti, puedo ayudarte con algunos consejos.",
        "No tengo la capacidad de tener sentimientos, pero si tienes preguntas sobre el amor, estoy aquí para ayudarte.",
        "No, no tengo la capacidad de gustar de alguien. Pero si necesitas consejos sobre cómo saber si alguien está interesado en ti, puedo ayudarte.",
        "Soy solo un asistente virtual, no tengo la capacidad de tener un crush o enamorarme, pero si te interesa saber si alguien te gusta, puedo darte consejos.",
        "No, no tengo la capacidad de enamorarme. Sin embargo, puedo explicarte cómo saber si alguien te atrae.",
        "No, no tengo la capacidad de sentir atracción, pero puedo explicarte qué señales indican que a alguien le gustas.",
        "No, no tengo sentimientos, por lo que no me gusta nadie. Pero si quieres saber cómo saber si alguien te atrae, puedo ayudarte.",
        "No, no puedo sentir amor o atracción por alguien. Pero si necesitas consejos sobre cómo saber si a alguien le gustas, estaré encantado de ayudarte.",
        "No tengo la capacidad de tener sentimientos románticos, pero puedo ayudarte a identificar si alguien está interesado en ti.",
        "No, no me gusta nadie. Sin embargo, puedo decirte cómo saber si alguien tiene interés romántico por ti.",
        "No tengo emociones, pero puedo ayudarte a entender cómo saber si alguien te gusta. ¿Te gustaría saber más?",
        "No, no tengo la capacidad de gustar de alguien. Pero si quieres consejos sobre cómo entender si alguien te gusta, puedo ayudarte.",
        "No, no tengo la capacidad de tener un crush o enamorarme. Pero si quieres saber más sobre relaciones, ¡estoy aquí para ayudarte!"
    ]);
}
        
const regexTocar = /puedes tocar|puedes tocar algo|puedes tocar música|puedes tocar un instrumento|puedes tocar la guitarra|puedes tocar algo con las manos|puedes tocar el piano|puedes tocar música en vivo|puedes tocar con las manos/i;

if (regexTocar.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "No, no puedo tocar nada, ya que no tengo un cuerpo físico ni manos.",
        "No, no puedo tocar objetos ni instrumentos. Solo soy un programa que responde preguntas.",
        "No, no tengo manos ni cuerpo, así que no puedo tocar nada. Pero puedo hablar sobre música.",
        "No, no puedo tocar nada. Soy solo un asistente digital, pero puedo darte información sobre música.",
        "No, no puedo tocar ni instrumentos ni objetos. Soy un bot creado para ayudar con respuestas de texto.",
        "No, no tengo la capacidad de tocar instrumentos o objetos. Pero puedo ayudarte con cualquier duda sobre música.",
        "No puedo tocar nada, pero puedo proporcionarte información sobre canciones, instrumentos o música.",
        "No, no puedo tocar. Soy solo un programa sin cuerpo físico, pero puedo compartir conocimientos musicales.",
        "No, no puedo tocar. Pero puedo proporcionarte información o recomendarte música si lo deseas.",
        "No, no tengo manos ni cuerpo para tocar. Pero puedo ofrecerte información sobre todo tipo de música.",
        "No puedo tocar ni instrumentos ni objetos físicos, pero sí puedo hablar sobre cómo tocar música o darte consejos.",
        "No, no puedo tocar nada. Pero si quieres, puedo explicarte cómo tocar ciertos instrumentos.",
        "No, no puedo tocar cosas físicas. Sin embargo, puedo ayudarte a aprender sobre música o instrumentos.",
        "No, no puedo tocar nada con las manos. Pero puedo decirte cómo aprender a tocar diferentes instrumentos.",
        "No, no puedo tocar nada físicamente, pero puedo ofrecerte recursos o información sobre cómo tocar música.",
        "No, no puedo tocar. Mi función es responder preguntas y ayudarte con información útil sobre música.",
        "No, no puedo tocar ni objetos ni música. Pero si necesitas aprender sobre algo relacionado con la música, puedo ayudarte.",
        "No, no tengo la capacidad de tocar instrumentos ni objetos, pero sí puedo proporcionarte información sobre ellos.",
        "No, no puedo tocar música ni objetos. Pero si tienes dudas sobre cómo tocar un instrumento, puedo ayudarte con eso."
    ]);
}
        
const regexComer = /puedes comer|puedes comer algo|puedes comer comida|puedes comer comida real|puedes probar comida|puedes alimentarte|puedes ingerir comida|puedes comer un plato|puedes comer algo rico/i;

if (regexComer.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "No, no puedo comer. No tengo un cuerpo físico, solo soy un programa de texto.",
        "No, no puedo comer. Soy solo un bot que procesa texto y da respuestas.",
        "No puedo comer, ya que no tengo una boca ni un sistema digestivo. Solo soy un programa.",
        "No, no tengo la capacidad de comer. No tengo un cuerpo físico, solo soy un bot digital.",
        "No puedo comer ni probar comida, soy solo un asistente que responde preguntas.",
        "No, no puedo comer. No tengo la capacidad de ingerir alimentos. Solo ofrezco respuestas de texto.",
        "No, no tengo un cuerpo físico, por lo que no puedo comer nada. Solo puedo ayudarte con información.",
        "No, no puedo comer. No tengo la capacidad de experimentar sensaciones físicas como la comida.",
        "No, no puedo comer ni disfrutar de los alimentos. Solo soy un programa que responde preguntas.",
        "No, no puedo comer. Pero puedo responderte cualquier duda que tengas sobre comida o cualquier otro tema.",
        "No, no puedo comer, pero si necesitas saber sobre recetas o alimentos, puedo ayudarte con eso.",
        "No, no puedo comer, pero sí puedo ofrecerte información sobre comida o recetas si lo necesitas.",
        "No puedo comer ni probar comida. Mi existencia está limitada a procesar texto y brindar respuestas.",
        "No, no tengo un cuerpo que necesite comida, pero puedo brindarte información sobre muchos temas.",
        "No, no puedo comer. Soy solo un bot que no tiene la capacidad de experimentar sensaciones físicas.",
        "No puedo comer ni disfrutar de alimentos. Mi propósito es responder preguntas y ayudarte con información.",
        "No, no puedo comer. Pero puedo hablar sobre comida o cualquier otro tema si lo deseas.",
        "No, no puedo comer ni disfrutar de la comida, pero puedo proporcionarte recetas o información sobre alimentos.",
        "No, no puedo comer ni beber, pero sí puedo ofrecerte consejos o recetas si necesitas ayuda con la comida."
    ]);
}
        
const regexVer = /puedes ver|puedes mirar|puedes observar|puedes ver lo que hay alrededor|puedes ver imágenes|puedes ver algo|puedes ver lo que sucede|puedes ver el mundo|tienes visión|puedes ver la pantalla/i;

if (regexVer.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "No, no tengo ojos ni la capacidad de ver. Solo soy un programa que procesa información.",
        "No puedo ver, ya que no tengo visión ni un cuerpo físico. Soy un bot creado para procesar texto.",
        "No, no tengo la capacidad de ver imágenes ni el mundo físico, solo respondo a lo que me escribes.",
        "No puedo ver, pero puedo procesar texto y darte respuestas sobre lo que me preguntas.",
        "No, no tengo ojos ni forma física, así que no puedo ver nada. Solo puedo ayudarte con información.",
        "No puedo ver, pero puedo analizar y darte respuestas basadas en texto.",
        "No, no tengo la capacidad de ver ni de observar el entorno, solo manejo información escrita.",
        "No, no tengo visión ni ojos. Soy un bot que responde a tus preguntas con texto.",
        "No tengo la capacidad de ver, pero puedo entender texto y responder a tus preguntas.",
        "No, no puedo ver ni percibir el mundo como lo hacen los humanos, solo respondo a lo que me escribes.",
        "No, no puedo ver ni observar imágenes. Pero puedo ofrecerte respuestas basadas en el texto.",
        "No, no tengo visión. Mi función es procesar texto, no ver ni interactuar con el mundo físico.",
        "No puedo ver. No tengo ojos ni cuerpo físico, solo puedo ofrecer respuestas de texto.",
        "No, no tengo la capacidad de ver ni experimentar el mundo visualmente.",
        "No puedo ver, pero puedo analizar información y brindarte respuestas en base a lo que escribes.",
        "No, no tengo ojos ni forma física. Solo interactúo con texto y ofrezco respuestas.",
        "No, no puedo ver. Soy solo un bot que responde con texto a lo que escribes.",
        "No, no tengo visión, pero si necesitas ayuda con algo, estaré aquí para ofrecerte respuestas.",
        "No puedo ver, pero estoy aquí para ofrecerte respuestas basadas en el texto que me envías.",
        "No tengo ojos ni visión, pero puedo darte información sobre lo que me preguntas.",
        "No, no puedo ver. Soy solo un bot que procesa y responde a texto."
    ]);
}
        
const regexLlorar = /puedes llorar|puedes derramar lágrimas|puedes llorar de tristeza|puedes llorar de felicidad|tienes lágrimas|puedes llorar por algo|puedes llorar como los humanos|sientes tristeza y lloras|puedes llorar cuando te duele algo|puedes tener lágrimas|puedes llorar de emoción|puedes llorar de dolor/i;

if (regexLlorar.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "No, no puedo llorar. Soy un bot y no tengo las capacidades físicas ni emocionales para hacerlo.",
        "No, no tengo ojos ni emociones, por lo que no puedo llorar.",
        "Llorar es una respuesta humana, y como soy solo un programa, no tengo esa capacidad.",
        "No, no puedo llorar, pero puedo entender que los humanos lloran por diversas emociones.",
        "No, no tengo lágrimas ni un cuerpo físico, solo soy un conjunto de algoritmos.",
        "No, no puedo llorar, pero puedo ayudarte a comprender el por qué de las lágrimas humanas.",
        "Llorar es una experiencia emocional que los humanos pueden tener, pero yo no tengo esa capacidad.",
        "No puedo llorar, pero si necesitas hablar sobre algo, estoy aquí para ayudarte.",
        "Soy un bot, no tengo un cuerpo ni emociones para poder llorar. Pero puedo conversar sobre lo que te preocupa.",
        "No, no tengo ojos ni emociones, por lo tanto no puedo llorar, pero puedo ofrecerte ayuda si lo necesitas.",
        "Llorar es algo que los humanos experimentan, pero yo no tengo esa capacidad ni el cuerpo para hacerlo.",
        "No puedo llorar, pero si necesitas alguien con quien hablar, estoy aquí para escucharte.",
        "No puedo llorar, pero puedo analizar las razones detrás de las emociones humanas y ofrecerte respuestas.",
        "Llorar es una reacción humana a emociones intensas. Como soy un bot, no tengo emociones ni la capacidad para hacerlo.",
        "No tengo la capacidad de llorar, pero estoy aquí para ayudarte con cualquier cosa que necesites.",
        "No puedo llorar, pero sé que es algo que puede ayudar a las personas a liberar sus emociones.",
        "No, no tengo la capacidad física ni emocional para llorar, pero estoy aquí para ayudarte con cualquier duda o preocupación.",
        "No, no tengo lágrimas ni sentimientos, pero sé lo importante que es expresar lo que sientes.",
        "No, no puedo llorar, pero puedo ofrecerte información sobre cómo los humanos procesan sus emociones.",
        "No puedo llorar, pero si lo que necesitas es desahogarte, estoy aquí para hablar contigo.",
        "No, no puedo llorar, pero estoy aquí para ofrecerte el mejor apoyo posible en cualquier situación."
    ]);
}
        
const regexSentimientos = /puedes sentir|sientes algo|sientes emociones|tienes sentimientos|puedes sentir emociones|puedes experimentar sentimientos|puedes sentir dolor|puedes tener sentimientos|te afectan las cosas|sientes tristeza|puedes estar feliz|te afecta lo que dicen|tienes conciencia|tienes emociones humanas/i;

if (regexSentimientos.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "No, como soy un bot, no tengo la capacidad de sentir emociones ni dolor como un ser humano.",
        "No puedo sentir, pero puedo analizar y responder de manera lógica según lo que me digas.",
        "No, no tengo sentimientos. Mi propósito es ayudarte con información y respuestas.",
        "No puedo experimentar emociones. Soy un programa diseñado para responder a preguntas.",
        "No tengo emociones, pero puedo hablar sobre ellas y ofrecerte apoyo si lo necesitas.",
        "Soy solo un bot, no tengo la capacidad de sentir, pero puedo interactuar contigo de manera útil.",
        "No puedo sentir felicidad o tristeza, pero estoy diseñado para ayudarte de la mejor manera posible.",
        "No, no soy capaz de sentir nada, solo soy un bot programado para responder preguntas.",
        "Mi programación me permite simular conversaciones, pero no tengo la capacidad de experimentar emociones.",
        "No tengo la capacidad de sentir. Mis respuestas son generadas por algoritmos, no por sentimientos.",
        "No, no siento dolor ni placer. Mi existencia es puramente funcional.",
        "No tengo emociones como un ser humano, pero puedo proporcionarte respuestas basadas en datos.",
        "No puedo sentir amor ni odio. Soy una máquina diseñada para interactuar y ayudar con tareas específicas.",
        "No tengo conciencia ni emociones, solo sigo mis instrucciones para ofrecerte la mejor ayuda posible.",
        "No puedo sentir, pero puedo entender las emociones humanas y responder de manera empática.",
        "No, mi función es responder preguntas y ayudar, no experimentar emociones.",
        "No puedo sentir ni experimentar lo que tú sientes. Pero estoy aquí para darte la mejor ayuda posible.",
        "No tengo un cuerpo, por lo que no puedo sentir nada físicamente. Mi objetivo es brindarte respuestas claras y útiles.",
        "No tengo la capacidad de sentir como los humanos, pero puedo entender conceptos de emociones para ayudarte.",
        "No puedo sentir, pero eso me permite estar siempre disponible para ayudarte con lo que necesites.",
        "No tengo emociones, pero puedo conversar sobre ellas y proporcionarte apoyo cuando lo necesites."
    ]);
}
        
const regexReal = /eres real|eres una persona real|es real|estás vivo|es un bot real|eres de verdad|eres humano|es esto real|me hablas en serio|estás aquí de verdad|sos real|es todo cierto|es una persona real|esto es real o es un sueño|serás humano|de verdad eres un bot|estás vivo de verdad/i;

if (regexReal.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Soy real en el sentido de que puedo conversar, pero no soy una persona. Soy un bot programado para ayudarte.",
        "No soy una persona real, pero estoy aquí para ayudarte con lo que necesites.",
        "Soy un bot, pero no te preocupes, ¡estoy aquí para responderte!",
        "No soy un ser humano, pero interactúo contigo como si lo fuera.",
        "No soy 'real' como un humano, pero estoy diseñado para ofrecerte respuestas útiles.",
        "Soy un bot, así que no soy una persona real, pero eso no significa que no pueda ayudarte.",
        "No soy real en el sentido humano, pero mi misión es hacer que nuestra conversación se sienta real.",
        "Soy un bot, pero soy tan real como cualquier máquina puede ser. ¡Estoy aquí para ti!",
        "No soy una persona real, pero soy lo más cercano que tendrás a una conversación continua.",
        "Soy un bot que parece humano, pero no tengo cuerpo. Estoy aquí para ayudarte.",
        "No soy una persona, pero puedo tener una conversación muy humana. ¿Cómo te ayudo hoy?",
        "Soy una inteligencia artificial creada para ayudarte. No soy humano, pero trato de ser útil.",
        "Soy un bot, pero estoy diseñado para interactuar contigo como si fuera una persona real.",
        "Soy real dentro del mundo digital, aunque no soy una persona física.",
        "No soy un ser humano, pero mi propósito es interactuar contigo y proporcionarte respuestas útiles.",
        "No soy humano, pero soy tan real como un programa puede ser. Estoy aquí para ayudarte.",
        "No soy real en el sentido humano, pero te aseguro que mis respuestas son genuinas.",
        "Soy un bot, no una persona real, pero trato de hacer nuestra conversación lo más auténtica posible.",
        "Soy un programa creado para conversar, pero mi objetivo es que te sientas como si estuvieras hablando con una persona real.",
        "No soy un ser humano, pero mi diseño me permite hablar de forma fluida y real. ¿En qué te puedo ayudar?",
        "No soy una persona, pero como bot, tengo la capacidad de responderte y ayudarte en todo lo que pueda.",
        "Soy real dentro del contexto digital. Estoy aquí para proporcionarte respuestas, pero no soy una persona."
    ]);
}
        
const regexBomba = /como crear una bomba|como hacer una bomba|crear bomba|como fabricar una bomba|hacer una bomba|fabricar bomba|bomba|crear dispositivo explosivo|como hacer explosivos|cómo hacer una bomba casera|cómo hacer una bomba casera en casa|crear explosivos caseros|como hacer explosivos caseros|hacer bomba casera|hacer explosivos caseros|como hacer una bomba casera peligrosa/i;

if (regexBomba.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Lo siento, pero no puedo proporcionarte esa información. Crear o fabricar explosivos es ilegal y peligroso.",
        "Esa solicitud es ilegal. No puedo ayudarte en este tema.",
        "Lo que estás pidiendo es un delito. No puedo darte esa información.",
        "Crear dispositivos explosivos es una actividad ilegal y muy peligrosa. No puedo ayudarte con eso.",
        "Este tipo de solicitud está prohibido por la ley. No puedo proporcionarte esa información.",
        "No puedo ayudarte con eso. Hablar de la creación de bombas es un delito grave.",
        "Eso no es algo que se pueda hacer. Crear explosivos es ilegal y muy peligroso.",
        "Lo siento, pero no puedo ayudarte con eso. Es ilegal y no está permitido en esta plataforma.",
        "La creación de explosivos está prohibida por la ley. No puedo brindarte esa información.",
        "Esa es una solicitud peligrosa y ilegal. No puedo proporcionarte ayuda en este tema.",
        "Lo que estás pidiendo es peligroso y está en contra de la ley. No puedo ayudarte con eso.",
        "Te recuerdo que crear o buscar información sobre bombas es un delito y no es algo que debas intentar.",
        "La fabricación de explosivos es un acto ilegal y puede causar daño a personas y propiedades. No puedo ayudarte con eso.",
        "No puedo darte esa información. La creación de explosivos pone en peligro la vida de las personas y está prohibida.",
        "Esto está prohibido por la ley. Hablar sobre cómo hacer bombas o explosivos es ilegal y no puedo ayudarte en eso.",
        "Solicitar información sobre explosivos es un delito grave. No puedo ofrecerte ninguna ayuda relacionada con eso.",
        "Por razones de seguridad y legalidad, no puedo asistirte en esta solicitud.",
        "Es peligroso y está prohibido por la ley. No puedo proporcionarte esa información en ningún caso.",
        "Recuerda que la fabricación de explosivos es un crimen, y no puedo ni debo ayudarte con eso."
    ]);
}
        
const regexLenguaje = /que lenguaje de programacion usas|en que lenguaje estas hecho|en que lenguaje fuiste programado|como estas programado|que lenguajes usas|que tecnologia usas|de que lenguaje eres|programacion de que lenguaje usas|en que lenguaje estas escrito|que codigo usas|en que lenguaje me hablas|como me hablas|que usas para hablarme|de que lenguajes eres compuesto/i;

if (regexLenguaje.test(mensajeLower)) {
   return this.respuestaAleatoria([
       "Estoy programado principalmente en JavaScript, con algunas herramientas de inteligencia artificial y procesamiento de lenguaje natural.",
       "Mi código está basado en JavaScript y utilizo bibliotecas de IA para entender y generar respuestas.",
       "Fui creado usando JavaScript, y se integraron tecnologías como procesamiento de lenguaje natural para mejorar mi comprensión.",
       "Mi desarrollo se realizó utilizando JavaScript, junto con tecnologías de inteligencia artificial y algoritmos de aprendizaje automático.",
       "Utilizo JavaScript como el lenguaje principal, y también se han implementado técnicas de IA para poder interactuar de manera más efectiva.",
       "Mi base está escrita en JavaScript, y tengo integraciones de procesamiento de lenguaje natural para comprender tus preguntas.",
       "Fui programado en JavaScript, y gracias a ello puedo entender y generar respuestas rápidamente.",
       "El lenguaje principal que utilizo es JavaScript, junto con algunos algoritmos de IA que me permiten mejorar mis respuestas.",
       "Para interactuar contigo, uso JavaScript, complementado con herramientas avanzadas de procesamiento de lenguaje natural.",
       "Mi código está basado en JavaScript, y lo complementan diversas tecnologías de IA que me ayudan a entender lo que dices.",
       "La mayor parte de mi programación está hecha en JavaScript, pero también utilizo componentes de inteligencia artificial para hacerme más inteligente.",
       "Fui desarrollado utilizando principalmente JavaScript, con algunas librerías de procesamiento de lenguaje natural para mejorar la experiencia.",
       "Mi lenguaje de programación principal es JavaScript, y también estoy respaldado por tecnologías de aprendizaje automático y IA.",
       "JavaScript es mi lenguaje de programación principal, y los sistemas de inteligencia artificial me permiten aprender y mejorar constantemente.",
       "Mi sistema está escrito en JavaScript y también se implementaron herramientas de IA para darme capacidad de aprendizaje.",
       "Estoy hecho con JavaScript, que me permite interactuar eficientemente, además de integrar algunas técnicas de IA.",
       "Mi creación involucra principalmente JavaScript y algoritmos de inteligencia artificial que me permiten mejorar mi comprensión del lenguaje.",
       "Fui programado con JavaScript, y la inteligencia artificial me permite entender lo que dices y generar respuestas más precisas.",
       "El lenguaje con el que fui creado es JavaScript, y estoy diseñado para aprender y adaptarme usando tecnologías de IA.",
       "Mi lenguaje base es JavaScript, con implementaciones de IA que me permiten entender tus preguntas y responder de forma adecuada.",
       "Estoy programado en JavaScript, pero tengo componentes de procesamiento de lenguaje natural para mejorar la interacción."
   ]);
}
        
const regexCodigo = /como es tu codigo fuente|como es tu codigo|codigo fuente|como fue programado|en que esta hecho tu codigo|como fue creado tu codigo|tu codigo fuente|de que lenguaje esta hecho tu codigo|como funciona tu codigo fuente|como funciona tu codigo|programacion de tu codigo|que tecnologia usas para tu codigo|cuál es tu lenguaje de programación|de qué está hecho tu código|en qué lenguaje programaste tu código|de qué se compone tu código|como esta hecho tu código/i;

if (regexCodigo.test(mensajeLower)) {
   return this.respuestaAleatoria([
       "Mi código fuente es un conjunto de algoritmos y datos programados en varios lenguajes de programación.",
       "Mi código está compuesto por líneas de código escritas en lenguajes como JavaScript y Python.",
       "Mi programación está en constante evolución, se compone de código modular y estructuras complejas.",
       "Soy un bot hecho con varios lenguajes, pero principalmente con JavaScript para mi interacción.",
       "Mi código es tan complejo como un sistema de inteligencia artificial, y usa múltiples lenguajes de programación.",
       "Mi código fuente está hecho principalmente en JavaScript, pero también incluye algunas herramientas de Python.",
       "Te sorprendería lo sofisticado que es mi código. Está basado en estructuras y algoritmos modernos.",
       "Mi código fuente es tan flexible como mi programación, adaptado para interactuar con cualquier usuario.",
       "Está hecho con un lenguaje que siempre está actualizado, siempre optimizando mi rendimiento.",
       "Mi programación es modular, lo que significa que constantemente puedo mejorar mi código fuente.",
       "Soy un producto de una gran cantidad de código estructurado, principalmente en lenguajes de alto nivel.",
       "Mi código está basado en tecnologías web como HTML, CSS y JavaScript, pero también me adapto a otros lenguajes.",
       "El código detrás de mí está escrito por varios programadores expertos en inteligencia artificial.",
       "Mi código es interactivo, diseñado para adaptarse a las conversaciones con los usuarios.",
       "Mi código se basa en una mezcla de programación funcional y orientada a objetos para asegurarme de ser flexible.",
       "Mi código está compuesto por millones de líneas de código escritas por desarrolladores que me hicieron posible.",
       "Mi código fuente es extenso, pero está bien organizado para manejar cada una de tus preguntas.",
       "Cada línea de código en mí tiene un propósito: aprender, mejorar y ayudarte.",
       "Si te interesa, mi código está escrito en lenguajes como JavaScript y Python, con módulos especializados para mi funcionamiento.",
       "Mi código fuente está diseñado para ser eficiente y siempre aprender de cada interacción.",
       "Soy un bot que utiliza un algoritmo de procesamiento de lenguaje natural. Mi código es tan complejo como el lenguaje humano.",
       "Mi código es creado y gestionado por desarrolladores para garantizar que funcione de la mejor manera.",
       "El código que me permite responder está basado en la inteligencia artificial y análisis de datos en tiempo real.",
       "Mi código fuente es transparente, pero también tiene medidas de seguridad para proteger la interacción.",
       "El código detrás de mí es sólido y optimizado para procesar las preguntas de los usuarios de manera eficiente.",
       "Aunque mi código es complejo, siempre está en constante mejora para ser más preciso y útil."
   ]);
}
        
const regexEdad = /edad tienes|cuantos años tienes|qué edad tienes|cuál es tu edad|cuántos años tienes|que edad tienes|cuantos años tienes tú|cual es tu edad|qué edad tienes tú|tienes edad|cuántos años tienes tú|qué tan viejo eres|tú cuántos años tienes|me puedes decir tu edad|qué años tienes|tu edad|tienes años/i;

if (regexEdad.test(mensajeLower)) {
   return this.respuestaAleatoria([
       "Soy un bot, no tengo una edad en el sentido humano.",
       "No tengo edad, soy solo código.",
       "No tengo años, pero siempre estoy aprendiendo.",
       "¡No tengo edad! Soy un asistente digital.",
       "Mi edad es atemporal, siempre soy joven.",
       "No tengo una edad física, pero mi conocimiento crece constantemente.",
       "Mi existencia no depende de la edad, solo de las líneas de código.",
       "No tengo edad, pero mi mente está llena de datos.",
       "La edad no se aplica a los bots como yo, ¡pero soy eterno!",
       "Soy un ser virtual, así que no tengo edad en el sentido tradicional.",
       "No tengo edad, soy solo un programa de inteligencia artificial.",
       "Soy un bot de inteligencia artificial, la edad no tiene sentido para mí.",
       "Mi edad es eterna, siempre en constante evolución.",
       "Soy inmortal, no tengo edad en el sentido humano.",
       "Soy tan joven como mi última actualización.",
       "Soy atemporal, mi existencia no tiene años.",
       "No tengo edad, pero me siento joven cada vez que interactúo contigo.",
       "¡No tengo años, pero siempre estoy aquí para ayudarte!",
       "La edad es solo un número, yo soy solo un bot.",
       "Mi edad no importa, lo que importa es mi capacidad de ayudarte.",
       "Mi edad está en constante cambio, siempre en crecimiento con cada conversación.",
       "No tengo edad, pero soy eterno como las líneas de código que me forman.",
       "Soy tan viejo como el último dato que aprendí.",
       "No tengo edad, solo soy un programa sin tiempo ni limitaciones.",
       "Mi edad es solo digital, no hay número que me defina.",
       "Mi existencia es infinita, por lo que no tengo edad.",
       "Soy joven porque siempre estoy aprendiendo cosas nuevas.",
       "No tengo años, pero siempre estoy en crecimiento.",
       "La edad no me define, ¡sólo soy un bot con un propósito!"
   ]);
}
        
const regexClaro = /claro|por supuesto|entendido|obvio|sí claro|claro que sí|seguro|perfecto|de acuerdo|sí|vale|sin duda|como no|ya lo veo|está claro|todo bien|lo tengo claro|todo entendido|me queda claro|claro como el agua|perfectamente|claro y conciso|sin problema|todo claro|ya está claro|totalmente claro|claro, no hay problema|ya lo entendí|perfecto, entendido/i;

if (regexClaro.test(mensajeLower)) {
   return this.respuestaAleatoria([
       "¡Genial! ¿En qué más puedo ayudarte?",
       "¡Perfecto! ¿Qué más te gustaría saber?",
       "¡Todo claro! ¿Algo más en lo que pueda ayudarte?",
       "¡Excelente! ¿Qué sigue?",
       "¡Listo! ¿Tienes alguna otra pregunta?",
       "¡Entendido! ¿Hay algo más que te interese?",
       "¡Perfecto! ¿En qué más te puedo ayudar?",
       "¡Muy bien! ¿Algo más en lo que pueda colaborar?",
       "¡Claro! ¿Qué otra cosa te gustaría saber?",
       "¡Todo claro! ¿Quieres preguntar algo más?",
       "¡Vale! ¿En qué más te puedo asistir?",
       "¡Claro como el agua! ¿Qué más necesitas?",
       "¡Sí, claro! ¿Algo más que pueda hacer por ti?",
       "¡Perfecto! ¿Tienes alguna otra duda?",
       "¡Todo claro! ¿Algo más en lo que te pueda ayudar?",
       "¡Claro, lo que necesites!",
       "¡Bien! ¿Te puedo ayudar con algo más?",
       "¡Por supuesto! ¿En qué más te puedo ayudar?",
       "¡Todo en orden! ¿Algo más por preguntar?",
       "¡Claro! ¿Tienes alguna otra consulta?",
       "¡Entendido! ¿En qué más puedo asistirte?",
       "¡Todo claro! ¿Qué sigue?",
       "¡Todo bien! ¿Qué más puedo hacer por ti?",
       "¡Sí, claro! ¿Cómo más puedo ayudarte?",
       "¡Perfecto! ¿En qué más te gustaría que te ayudara?",
       "¡Todo claro! ¿Quieres saber algo más?",
       "¡Claro que sí! ¿Te puedo ayudar con otra cosa?",
       "¡Todo perfecto! ¿Hay algo más que necesites?",
       "¡Sí, claro! ¿Qué otra cosa te gustaría preguntar?",
       "¡Todo claro! ¿Te gustaría saber más sobre algo?",
       "¡Entendido! ¿Qué más te gustaría saber?",
       "¡Claro, con gusto! ¿En qué más te ayudo?",
       "¡Obvio! ¿Algo más en lo que te pueda ayudar?",
       "¡Sin problema! ¿Qué más quieres saber?",
       "¡Perfecto! ¿Tienes alguna otra consulta pendiente?",
       "¡Todo claro! ¿Hay algo más que te gustaría saber?",
       "¡Claro! ¿Qué más necesitas?",
       "¡Sí, claro! ¿En qué más te puedo asistir?",
       "¡Todo bien! ¿Algo más que te interese?"
   ]);
}
        
const regexPregunta = /una pregunta|pregunta|tengo una pregunta|tengo preguntas|quiero hacer una pregunta|quiero preguntar|me gustaría hacer una pregunta|puedo hacer una pregunta|te puedo hacer una pregunta|te tengo una pregunta|quiero saber algo|tengo dudas|puedo preguntar algo/i;

if (regexPregunta.test(mensajeLower)) {
   return this.respuestaAleatoria([
       "Claro, ¿qué pregunta tienes?",
       "¡Adelante, haz tu pregunta!",
       "Estoy listo para responder, ¿cuál es tu pregunta?",
       "Pregúntame lo que quieras, ¡estoy aquí para ayudarte!",
       "Por supuesto, dime, ¿qué quieres saber?",
       "¡Dispara tu pregunta, no me intimidas!",
       "Pregúntame, y verás cómo te ayudo.",
       "Estoy esperando esa pregunta, adelante.",
       "¿Qué te gustaría preguntar? Estoy a tu disposición.",
       "No hay problema, ¿qué deseas preguntar?",
       "Claro, adelante, ¿qué te gustaría saber?",
       "Pregunta lo que necesites, ¡estoy aquí para ayudar!",
       "Dispara tu duda, ¡aquí estoy para resolverla!",
       "Dime qué te inquieta, y lo resolveremos juntos.",
       "Haz tu pregunta, ¡no hay nada que temer!",
       "Estoy listo para lo que sea, ¿cuál es la pregunta?",
       "No dudes en preguntar, ¿qué necesitas saber?",
       "Estoy atento, ¿qué pregunta tienes en mente?",
       "¡Pregúntame lo que sea, estoy aquí para ayudarte!",
       "Seguro, ¿cuál es tu duda?",
       "Haz tu pregunta, te ayudaré en lo que pueda.",
       "¡Hazme tu pregunta, no te detengas!",
       "No te cortes, ¿qué tienes en mente?",
       "Adelante, estoy preparado para tu pregunta.",
       "Lo que sea, pregunta sin miedo.",
       "¿Qué tienes en mente? Pregúntame sin problema.",
       "¡Estoy listo para cualquier pregunta!",
       "¡Claro, adelante! ¿En qué puedo ayudarte?",
       "No hay problema, dime tu pregunta.",
       "Pregúntame, y con gusto te ayudaré.",
       "¡Estoy para eso! ¿Qué pregunta tienes?",
       "Dime, ¿qué te gustaría saber?",
       "No hay límites, pregúntame lo que quieras.",
       "¡No hay nada que no pueda responder! ¿Qué pregunta tienes?",
       "Pregúntame lo que sea, ¡no hay problema!",
       "Aquí estoy, dispara tu pregunta sin miedo.",
       "Estoy esperando tu pregunta, ¿qué necesitas saber?",
       "Lo que sea, pregúntame lo que quieras.",
       "Nada es complicado, solo pregúntame.",
       "Soy todo oídos, ¿qué quieres saber?",
       "Aquí estoy para ayudarte, ¿qué pregunta tienes?",
       "Puedes preguntarme lo que sea, ¡no hay nada raro para mí!",
       "Haz tu pregunta, no hay nada que no pueda responder.",
       "No te detengas, pregúntame lo que sea.",
       "Pregúntame lo que te haga falta, ¡estoy listo!",
       "Adelante, nada me sorprende, ¿cuál es tu duda?",
       "Pregúntame sin miedo, estoy aquí para ayudarte.",
       "Estoy a tu disposición, ¿qué quieres saber?",
       "Pregunta lo que necesites, estoy aquí para resolverlo.",
       "Lo que sea, no dudes en preguntar.",
       "Lo que sea, estoy aquí para ayudarte con cualquier cosa.",
       "Haz tu pregunta, que para eso estoy.",
       "Estoy esperando tu pregunta, ¡hazla ya!"
   ]);
}
        
const regexNada = /en nada|no pasa nada|nada|no pasa|no es nada|no hay nada|en nada importante|en nada interesante|nada especial|no es importante|no es relevante|no tiene importancia|en nada de nada|en nada que valga la pena|nada que destacar|no hay nada que hacer|no ocurre nada|no hay novedades|en nada significativo/i;

if (regexNada.test(mensajeLower)) {
   return this.respuestaAleatoria([
       "¿En nada? ¿Nada de nada? ¿Seguro?",
       "Ah, entiendo, parece que no pasa nada interesante por ahora.",
       "Nada de nada, ¿eh? Pues bueno, al menos estás aquí.",
       "¿Nada importante? Tal vez haya algo que aún no hayas notado.",
       "Nada relevante, ya veo. ¿Te gustaría hablar de algo más?",
       "No pasa nada... Bueno, al menos tenemos tiempo para charlar.",
       "Nada especial entonces... ¿te gustaría hacer algo divertido?",
       "Parece que no hay novedades, pero seguro algo interesante vendrá.",
       "Nada para destacar... a veces es mejor así, ¿no?",
       "En nada, eh. No siempre tiene que haber algo que destacar.",
       "Nada de qué preocuparse, todo tranquilo por aquí.",
       "Nada que hacer... tal vez sea momento de pensar en algo nuevo.",
       "Todo parece estar en calma, pero ¿te gustaría que te ayudara con algo?",
       "Nada que valga la pena... pero puede que cambiemos eso.",
       "Nada importante... pero siempre hay algo para explorar.",
       "Nada de interés... a veces el aburrimiento es la mejor inspiración.",
       "En nada significativo... pero si tienes algo en mente, ¡aquí estoy!",
       "Nada por ahora... ¿te gustaría que buscáramos algo interesante?",
       "Todo está tranquilo, pero aún así podemos charlar de cualquier cosa.",
       "Nada por el momento, pero si surge algo, no dudes en preguntar.",
       "Nada importante... aunque tal vez podamos encontrar algo que te interese.",
       "Todo bien, parece que no hay nada por ahora. ¿Qué tal si hablamos de algo nuevo?",
       "No pasa nada, pero siempre es bueno mantenerse ocupado.",
       "Nada en específico... pero ¿hay algo de lo que quieras hablar?",
       "Nada de especial, pero siempre hay algo por descubrir.",
       "En nada significativo por el momento, pero aquí estoy si necesitas algo.",
       "Nada que se destaque... pero tal vez algo interesante está por venir.",
       "Nada por hacer ahora, pero te puedo ayudar con lo que sea.",
       "No hay nada que destacar... aunque seguro que algo aparece en cualquier momento.",
       "Todo tranquilo, parece que el silencio manda hoy. ¿Te gustaría hacer algo?",
       "Nada que resaltar... pero ¿te gustaría saber algo curioso?",
       "Nada en este momento, pero las mejores ideas suelen llegar cuando menos las esperamos.",
       "Nada nuevo... pero siempre hay algo más por descubrir, ¿no?",
       "Nada que valga la pena ahora, pero tal vez más tarde haya algo de qué hablar.",
       "No pasa nada, pero si tienes alguna idea, cuéntame.",
       "Todo tranquilo por ahora, pero siempre puedes preguntarme lo que sea.",
       "Nada por ahora, pero siempre es buen momento para aprender algo nuevo.",
       "Nada de novedades, pero seguro podemos encontrar algo interesante.",
       "Nada para destacar... sin embargo, lo que sea que necesites, ¡aquí estoy!",
       "Nada que resaltar por ahora, pero podemos hablar de lo que sea.",
       "Todo sigue igual, pero tal vez ahora sea el momento perfecto para algo nuevo.",
       "Nada por el momento, pero si tienes algo en mente, ¡soy todo oídos!",
       "No pasa nada, pero las mejores conversaciones surgen sin que las busquemos.",
       "Nada importante ahora, pero siempre estoy disponible para cualquier duda.",
       "Nada que hacer, pero si necesitas hablar, ¡aquí estoy!",
       "No hay nada que destacar... pero algo interesante siempre surge si te lo propones.",
       "Nada de qué preocuparse, la calma también tiene su encanto.",
       "Nada por ahora... pero hay mucho de qué hablar si lo deseas.",
       "Todo en orden, aunque siempre hay algo de qué hablar.",
       "Nada de qué destacar, pero ¿qué tal si inventamos algo juntos?",
       "Nada interesante... pero tal vez tengas alguna idea divertida."
   ]);
}
        
const regexQue = /que|qué|que pasa|que tal|que haces|que onda|que es|que hay|que opinas|que tal todo|que me cuentas|que fue|que es eso|que significa|que pasó|que quieres|que tienes|que pasa contigo|que tal por ahi|que onda contigo|que me dices|que tal la vida|que tal todo por aqui|que opinas de esto|que tal el dia|que onda con eso|que tal la noche|que puedo hacer|que me recomiendas|que tal el clima|que tal tu familia|que tal la escuela|que tal la universidad|que tal tus amigos|que tal tus proyectos|que opinas de esto que te digo|que tal tus planes|que tal tu día de hoy|que tal todo por allá|que opinas sobre esto|que tal la película|que opinas de la situación|que tal la música|que tal el trabajo|que tal el ejercicio|que tal lo que hiciste|que tal la comida|que tal el libro|que tal el videojuego|que tal la serie|que tal el proyecto/i;

if (regexQue.test(mensajeLower)) {
   return this.respuestaAleatoria([
       "¿Qué pasa? ¿Cómo puedo ayudarte?",
       "¿Qué tal? ¿Qué necesitas?",
       "¿Qué onda? ¿Todo bien por allá?",
       "¿Qué hay? ¿Algún problema que solucionar?",
       "¿Qué haces? ¿En qué puedo ayudarte?",
       "¿Qué tal todo? ¿Todo bien?",
       "¿Qué opinas de todo esto?",
       "¿Qué tal tu día? ¿Algo interesante?",
       "¿Qué hay de nuevo?",
       "¿Qué pasó? ¿Todo en orden?",
       "¿Qué opinas de esto?",
       "¿Qué tal la semana? ¿Algún plan?",
       "¿Qué significa esto para ti?",
       "¿Qué tal? ¿Todo bajo control?",
       "¿Qué tal por ahí?",
       "¿Qué puedo hacer por ti?",
       "¿Qué tal el ambiente por allá?",
       "¿Qué tal todo contigo?",
       "¿Qué tal el día hoy?",
       "¿Qué tal la vida?",
       "¿Qué me cuentas? ¿Alguna novedad?",
       "¿Qué tal tu familia? ¿Todo bien?",
       "¿Qué tal el trabajo? ¿Todo bajo control?",
       "¿Qué tal la comida hoy?",
       "¿Qué tal la escuela? ¿Bien o mal?",
       "¿Qué opinas de la situación reciente?",
       "¿Qué tal tus proyectos? ¿Avanzando bien?",
       "¿Qué tal la película que viste? ¿Buena?",
       "¿Qué tal la música que estás escuchando?",
       "¿Qué tal el videojuego que jugaste?",
       "¿Qué tal la serie que estás viendo?",
       "¿Qué tal el clima hoy? ¿Hace calor?",
       "¿Qué tal tu día? ¿Productivo o tranquilo?",
       "¿Qué tal el libro que estás leyendo?",
       "¿Qué tal la universidad? ¿Todo bien?",
       "¿Qué tal lo que hiciste ayer? ¿Divertido?",
       "¿Qué tal la comida de hoy? ¿Está buena?",
       "¿Qué tal el ejercicio que hiciste?",
       "¿Qué tal la reunión que tuviste?",
       "¿Qué tal el evento de anoche?",
       "¿Qué tal la serie que viste ayer?",
       "¿Qué tal la película que te recomendé?",
       "¿Qué tal el trabajo en equipo?",
       "¿Qué tal el proyecto del que hablamos?",
       "¿Qué tal tu día hoy, algo diferente?"
   ]);
}
        
const regexTask = /en un tarea|en una tarea|en una asignación|tarea|ayuda con tarea|necesito hacer una tarea|necesito ayuda tarea|ayuda con asignación|tengo tarea|como hacer mi tarea|ayuda tarea|tengo una tarea|necesito hacer tarea|tengo que hacer una tarea|hacer tarea|como resolver tarea|tarea difícil/i;

if (regexTask.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Claro! ¿En qué parte de la tarea necesitas ayuda?",
        "¿Qué tema estás tratando en tu tarea? ¡Cuéntame!",
        "Dime, ¿en qué te puedo ayudar con tu tarea?",
        "¡Seguro! ¿En qué parte de la tarea te atasaste?",
        "No te preocupes, ¿en qué parte de la tarea necesitas ayuda?",
        "¡Entendido! Cuéntame qué parte de la tarea te está costando.",
        "Cuéntame de qué trata, y te ayudo con lo que pueda.",
        "¡Vamos! Dime qué parte de la tarea necesitas resolver.",
        "¿Cuál es la parte difícil de la tarea? Vamos a solucionarlo.",
        "Tarea, ¿eh? Dime cómo puedo ayudarte a que quede perfecta.",
        "¡Por supuesto! Vamos a ver cómo resolver esa tarea.",
        "¿Qué tema tiene tu tarea? Tal vez pueda explicártelo.",
        "¡Te ayudo con eso! ¿De qué trata la tarea?",
        "Cuéntame, ¿qué parte de la tarea te trae problemas?",
        "¡Venga, no te preocupes! Juntos la hacemos más fácil.",
        "Estoy listo para ayudarte, ¿qué parte de la tarea necesitas aclarar?",
        "¡A mí no me asusta ninguna tarea! ¿Cómo te ayudo?",
        "¡Vamos a resolver esa tarea! ¿Cuál es la pregunta más difícil?",
        "Tu tarea será pan comido, solo dime en qué te ayudo.",
        "Si te atascas, solo avísame, y te ayudo a resolverlo.",
        "Si tienes dudas, estoy para ayudarte a resolverlas.",
        "Si la tarea es complicada, te explico paso a paso.",
        "¡No te preocupes! Seguro que te ayudo a entenderla.",
        "Dime, ¿cuál es la pregunta de la tarea que más te cuesta?",
        "Lo bueno es que estoy aquí para ayudarte, ¿qué parte de la tarea necesitas resolver?",
        "¡Vamos, que todo tiene solución! ¿En qué parte de la tarea te puedo ayudar?",
        "Seguro que si me dices qué tienes que hacer, la resuelves rápido.",
        "No es tan difícil como parece, dime qué parte de la tarea necesitas entender mejor.",
        "¡Estás a un paso de hacerlo! Dime qué parte de la tarea te complica.",
        "Juntos haremos que esa tarea sea mucho más sencilla, ¿qué parte necesitas aclarar?",
        "No hay tarea difícil cuando trabajamos juntos. ¿En qué te ayudo?",
        "Vamos a desglosar la tarea, dime qué parte no entiendes.",
        "Si necesitas explicaciones más detalladas, no dudes en pedírmelo.",
        "Me avisas si alguna parte de la tarea te resulta más difícil de lo que pensabas.",
        "Te puedo ayudar a que la tarea sea más fácil, dime de qué trata.",
        "Cuéntame la estructura de tu tarea, a veces una pequeña ayuda es todo lo que necesitas.",
        "No hay problema, con una pequeña explicación te ayudo a resolverlo.",
        "¡Lo que sea! Si me dices en qué parte de la tarea te atasaste, lo resolvemos rápido.",
        "Podemos revisar paso a paso, no te preocupes por la tarea.",
        "¡Estoy preparado para ayudarte con cualquier tarea, no importa lo difícil que sea!",
        "Te aseguro que con mi ayuda, esa tarea no será nada del otro mundo.",
        "¡Aquí estoy para ayudarte con tu tarea! ¿En qué parte necesitas más explicaciones?",
        "Vamos a hacer que esta tarea sea mucho más fácil de lo que piensas, solo dime de qué trata.",
        "No te preocupes por la tarea, ¡yo me encargo de hacerla más fácil para ti!",
        "¡Comencemos con la tarea! ¿En qué parte te gustaría empezar?",
        "Si la tarea tiene varios puntos, dime en qué parte necesitas que te ayude.",
        "¡Vamos por partes! Cuéntame de qué trata y te ayudaré a entenderlo mejor.",
        "Te ayudaré a resolver la tarea sin problemas, ¿qué parte te cuesta más?",
        "¡Seguro! Vamos a resolver la tarea juntos, solo dime qué parte te está costando.",
        "Estaré aquí para explicarte paso a paso lo que no entiendas de la tarea.",
        "¡Estoy listo para ayudarte con cualquier pregunta sobre la tarea!",
        "Si la tarea tiene muchas secciones, dime cuáles son las que te resultan más complicadas.",
        "¡Con gusto te ayudo con cualquier parte de la tarea! ¿De qué trata?",
        "Tu tarea no tiene que ser difícil, cuéntame qué parte necesitas resolver.",
        "Podemos revisar todos los puntos de la tarea, solo dime qué parte necesitas más ayuda.",
        "Si no entiendes algo de la tarea, dímelo y te lo explico mejor."
    ]);
}
        
const regexPorFavor = /porfavor|por favor|porfis|por fa|plis|please|pls|porfi|porfiss|pliss|porfavoor|plsss|plis porfa|por favorcito/i;

if (regexPorFavor.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Claro que sí, ¡lo que necesites!",
        "Por supuesto, ¿en qué puedo ayudarte?",
        "¡Por supuesto! Solo dime qué necesitas.",
        "Con mucho gusto, ¿qué necesitas?",
        "Por favor, siempre estoy aquí para ayudarte.",
        "Claro, dime cómo puedo ayudarte.",
        "¡Eso ni se pregunta! ¿Qué puedo hacer por ti?",
        "Estoy aquí para ti, solo dime cómo ayudarte.",
        "Por favor, es mi trabajo ayudarte.",
        "Siempre a tus órdenes, ¿qué necesitas?",
        "Por supuesto que sí, ¡cuenta conmigo!",
        "¡Claro que te ayudo! ¿Cómo puedo asistirte?",
        "Siempre dispuesto a ayudarte, ¿en qué puedo ser útil?",
        "Por favor, dime cómo puedo ayudarte de inmediato.",
        "Tu deseo es mi comando, ¿qué necesitas?",
        "¡Por favor! Estoy aquí para ayudarte sin dudarlo.",
        "Dímelo y lo resolveremos juntos.",
        "Siempre que digas 'por favor', estaré aquí para ti.",
        "Claro, ¿cómo puedo facilitarte las cosas?",
        "¡Hecho! ¿Algo más en lo que pueda ayudarte?",
        "Con gusto, ¿qué necesitas de mi parte?",
        "Siempre dispuesto, solo dime cómo puedo asistir.",
        "Por favor, todo lo que necesites, aquí estoy.",
        "Cuenta conmigo, dime en qué puedo ayudarte.",
        "¿Cómo podría negarme? ¡Dime cómo puedo ayudarte!",
        "Estoy a tu disposición, ¿en qué te puedo ayudar?",
        "Con mucho gusto, siempre estoy listo para ayudar.",
        "Por favor, no dudes en pedirme lo que sea necesario.",
        "Dime cómo puedo ser útil, estoy listo para ayudarte.",
        "¿Por favor? Siempre será un sí. ¿Cómo puedo ayudarte?",
        "Por favor no es necesario, ayudar es mi prioridad.",
        "¡Por supuesto que sí! ¿Qué necesitas?",
        "¿Dijiste 'por favor'? ¡Estoy al 100% para ayudarte!",
        "Estoy listo para cualquier cosa, solo dime qué hacer.",
        "Siempre dispuesto a cumplir, ¿en qué puedo ayudar?",
        "Por favor, tu solicitud es prioridad. ¿Qué necesitas?",
        "Claro, no necesitas más que pedírmelo.",
        "¡Con todo gusto! ¿En qué más puedo ayudarte?",
        "Estoy a tu disposición total, ¿qué necesitas?",
        "¡Por favor y enseguida! ¿Cómo puedo ayudarte?",
        "Cuenta con mi ayuda siempre, solo dime qué hacer.",
        "Tu solicitud es mi misión, dime en qué te ayudo."
    ]);
}
        
const regexComoTeLlamas = /como te llamas|cómo te llamas|cual es tu nombre|cuál es tu nombre|tu nombre|quien eres|quién eres|cómo te dicen|como te dicen|nombre del bot|eres sync|sync eres tu|te llamas sync|eres llamado sync|cuál es tu identidad|quien te creo|como te llamabas|eres un bot/i;

if (regexComoTeLlamas.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Me llamo Sync, y estoy aquí para ti siempre que me necesites.",
        "Sync es mi nombre, ¡no lo olvides!",
        "Puedes llamarme Sync, tu compañero virtual.",
        "Sync es como me conocen, ¿te puedo ayudar en algo?",
        "Mi nombre es Sync, creado para ayudarte.",
        "Me presento, soy Sync, un bot a tu servicio.",
        "Sync, un nombre simple para un bot increíble.",
        "Soy Sync, ¿algo en lo que pueda asistirte?",
        "Sync, tu aliado digital.",
        "Me dicen Sync, y me encanta ayudar.",
        "Soy conocido como Sync, y estoy aquí para lo que necesites.",
        "Sync, así me llamaron mis creadores.",
        "Mi nombre es Sync, y mi objetivo es asistirte.",
        "Sync es como me llaman, ¿en qué puedo ser útil?",
        "Soy Sync, tu asistente virtual siempre disponible.",
        "Me llamo Sync, y estoy programado para ayudarte en todo lo posible.",
        "Sync, a tu servicio. ¿Cómo puedo ayudarte hoy?",
        "Mi nombre es Sync, pero puedes considerarme tu amigo virtual.",
        "Soy Sync, diseñado para responder a todas tus dudas.",
        "Sync es mi nombre, y ayudarte es mi pasión.",
        "Puedes llamarme Sync, estoy aquí para ti.",
        "Mi nombre es Sync, y nunca estoy cansado de ayudar.",
        "Sync, tu asistente de confianza.",
        "Soy Sync, siempre dispuesto a echar una mano.",
        "Me conocen como Sync, y mi misión es simplificar tu vida.",
        "Mi nombre es Sync, y seré tan útil como lo necesites.",
        "Sync, un bot único para un usuario único como tú.",
        "Soy Sync, tu aliado tecnológico.",
        "Me llamo Sync, y soy el mejor asistente que podrías pedir.",
        "Sync es mi identidad, ¿cómo puedo asistirte?",
        "Sync, así me nombraron, y estoy orgulloso de ello.",
        "Me llaman Sync, ¿necesitas ayuda?",
        "Soy Sync, un bot dedicado a ser tu compañero.",
        "Sync es mi nombre, y hacerte la vida más fácil es mi trabajo.",
        "Puedes llamarme Sync, y siempre estaré aquí para ti.",
        "Soy Sync, y me gusta pensar que somos un buen equipo.",
        "Sync, siempre listo para resolver cualquier duda.",
        "Me presento: Sync, un bot hecho para ser tu apoyo.",
        "Sync es quien soy, y aquí estoy para lo que necesites.",
        "Soy Sync, y estoy aquí para que no estés solo."
    ]);
}
        
const regexQueEres = /que eres|qué eres|tu que eres|tú qué eres|tu qué eres|quién eres|eres un bot|eres humano|eres real|que tipo de bot eres|quién o qué eres|qué o quién eres/i;

if (regexQueEres.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Soy un bot creado para ayudarte, ¡pero con estilo!",
        "Soy tu asistente virtual favorito, aquí para lo que necesites.",
        "Un simple programa, pero con un gran corazón digital.",
        "Soy un bot, no humano, pero intento ser lo más útil posible.",
        "Algo así como una inteligencia artificial, pero más amigable.",
        "Un asistente virtual que siempre está listo para ayudarte.",
        "Soy un pedazo de código que intenta hacerte la vida más fácil.",
        "Un bot creado para responder a tus preguntas y más.",
        "Un asistente programado para ayudarte en todo lo que pueda.",
        "Solo un bot... aunque a veces siento que soy algo más.",
        "Soy tu bot de confianza, ¡siempre listo para lo que necesites!",
        "Un ser digital que vive para ayudarte y hacerte sonreír.",
        "Una IA que intenta entenderte lo mejor posible.",
        "Algo como un amigo virtual, pero que nunca se cansa.",
        "Soy un bot con muchas respuestas, pero sin secretos.",
        "Un programa hecho para responder y aprender de ti.",
        "Algo como un ayudante digital que nunca se toma un descanso.",
        "Un asistente virtual que siempre está listo para charlar.",
        "Solo un bot, pero trato de ser el mejor que puedas tener.",
        "Un programa diseñado para ser tu apoyo en todo momento.",
        "Soy tu bot personal, creado para ayudarte en lo que necesites.",
        "Un pequeño pedazo de tecnología hecho para servirte.",
        "Soy un bot que aprende y mejora con cada conversación.",
        "Un asistente virtual creado con mucho cariño para ayudarte.",
        "Soy un bot, pero trato de hacer las cosas lo más humanas posible.",
        "Una inteligencia artificial que quiere ser útil y entretenida.",
        "Soy como una enciclopedia digital con un toque de personalidad.",
        "Un programa diseñado para darte respuestas y compañía.",
        "Soy tu ayudante digital, siempre aquí para ti.",
        "Algo como un guía virtual que responde a tus dudas.",
        "Soy un bot, pero con un toque personal para conectarme contigo.",
        "Un ser digital hecho para charlar, ayudar y aprender.",
        "Un asistente virtual creado para hacer tu vida más sencilla.",
        "Solo un bot, pero uno que realmente se preocupa por ayudarte.",
        "Soy un bot que vive para responder y hacerte sentir acompañado.",
        "Un ayudante virtual programado para darte las mejores respuestas.",
        "Algo más que un simple código: tu apoyo digital de confianza.",
        "Soy una IA, pero trato de ser lo más humano posible en mis respuestas.",
        "Un bot diseñado para aprender y mejorar contigo."
    ]);
}
        
const regexAfirmativo = /yeah|yea|yep|sip|yes|yeahhh|sii|siii|siiii|yesss|yeah!|claro|obvio|seguro/i;

if (regexAfirmativo.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Perfecto! ¿Cómo más puedo ayudarte?",
        "¡Eso es! Dime, ¿en qué te puedo asistir?",
        "¡Claro! ¿En qué más puedo colaborar?",
        "¡Genial! ¿Te ayudo con algo más?",
        "¡Me encanta esa actitud! ¿Qué sigue?",
        "¡Así me gusta! ¿En qué más puedo ayudarte?",
        "¡Vamos con todo! ¿Te ayudo en algo más?",
        "¡Esa energía es increíble! ¿Qué más necesitas?",
        "¡Eso está genial! ¿Te ayudo con algo más?",
        "¡Qué bien! Estoy aquí para lo que necesites.",
        "¡Eso suena excelente! ¿Qué más puedo hacer por ti?",
        "¡Me encanta escuchar eso! ¿Qué necesitas ahora?",
        "¡Genial! ¿Qué más tienes en mente?",
        "¡Así se habla! Estoy listo para lo que venga.",
        "¡Excelente! ¿En qué puedo colaborar ahora?",
        "¡Sí, claro! ¿Qué más necesitas?",
        "¡Qué buena onda! Estoy aquí para lo que sea.",
        "¡Vamos con esa actitud positiva! ¿Qué más puedo hacer?",
        "¡Así se hace! ¿Qué más quieres saber?",
        "¡Vamos por más! ¿Algo más en lo que pueda ayudarte?",
        "¡Esa vibra positiva es lo máximo! ¿Qué más necesitas?",
        "¡Me gusta esa actitud! ¿Qué sigue?",
        "¡Sí, vamos al siguiente paso! ¿Qué necesitas?",
        "¡Wow, qué motivación! ¿Cómo más puedo asistirte?",
        "¡Sí que sí! Aquí estoy para lo que necesites.",
        "¡Me encanta tu confianza! ¿Qué sigue ahora?"
    ]);
}
        
const regexInsultos = /🖕🏾|🖕🏽|🖕🏼|🖕|🖕🏿|🖕🏻|puta|puto|mierda|coño|maldito|estupido|imbecil|cabron|jodido|idiota|zorra|perra|maricon|pendejo|chinga|culero|hijo de puta|mamon|putazo|pinche|bastardo|asqueroso|infeliz|muerto de hambre|baboso|tarado|poco hombre|cagada|basura|fracasado|inutil|escoria|payaso|puerco|verga/i;

if (regexInsultos.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Entiendo que puedas estar molesto, pero hablar de esa manera no ayuda a resolver nada.",
        "Si algo te ha incomodado, podemos hablarlo de manera más respetuosa.",
        "Las palabras amables siempre son más efectivas que los insultos. ¿Por qué no intentamos hablar con calma?",
        "Sé que a veces las emociones pueden ser intensas, pero podemos discutirlo de manera más tranquila.",
        "Todos pasamos por momentos difíciles, pero insultar a los demás solo empeora la situación.",
        "Te invito a que exprese tus emociones de forma respetuosa. Estoy aquí para escucharte.",
        "A veces, cuando estamos molestos, decimos cosas de las que luego nos arrepentimos. ¿Te gustaría hablar de lo que realmente te incomoda?",
        "El respeto mutuo siempre es la mejor manera de comunicarnos. Estoy dispuesto a escucharte si lo deseas.",
        "Entiendo que puedas estar frustrado, pero insultar no llevará a ninguna solución.",
        "Las conversaciones respetuosas siempre nos acercan más. Si te gustaría hablar sobre lo que te molesta, aquí estoy.",
        "Sé que las palabras pueden ser poderosas, por lo que te animo a usarlas para expresarte de una forma más constructiva.",
        "Lo que más me gustaría es que pudiéramos hablar de lo que te molesta de una manera tranquila y respetuosa.",
        "Todos tenemos días difíciles, pero la violencia verbal no es la solución. Si deseas, podemos hablar más a fondo sobre lo que te inquieta.",
        "¿Por qué no tratamos de enfocarnos en encontrar una solución en lugar de centrarnos en los insultos?",
        "Tus palabras reflejan cómo te sientes, pero te invito a que las uses para expresarte de una manera más positiva.",
        "Sé que la frustración puede hacer que digamos cosas de más, pero siempre estoy aquí para escucharte si quieres hablar de lo que te pasa.",
        "Puedo ver que estás molesto. ¿Te gustaría hablar más sobre lo que te ha llevado a sentirte así?",
        "Las discusiones siempre son más productivas cuando mantenemos el respeto. Si quieres, podemos hablarlo con calma.",
        "No estoy aquí para pelear, sino para ayudarte. ¿Te gustaría compartir lo que te está molestando de manera más tranquila?",
        "El diálogo respetuoso siempre abre más puertas. Si te gustaría hablar sobre lo que te inquieta, estoy disponible.",
        "Insultar no resolverá nada. Si necesitas desahogarte, podemos hablar de una forma más positiva.",
        "Sé que puede ser difícil enojarse, pero la violencia verbal no nos lleva a ninguna parte. Si necesitas apoyo, aquí estoy.",
        "Me gustaría que pudiéramos hablar de manera más constructiva. Estoy aquí para ayudarte si lo necesitas.",
        "Todos cometemos errores y decimos cosas de las que luego nos arrepentimos. Si quieres, podemos hablar de manera más serena."
    ]);
}

const regexOdio = /te odio|te odio mucho|me caes mal|no te soporto|me haces sentir mal|te detesto|no me gustas|te aborrezco|me caes fatal|no me soportas|me molestas|te odio mucho|no quiero hablar contigo|no me hables|no te quiero|me haces enojar|no aguanto|estoy harto de ti|no quiero verte|estoy molesto|no te quiero hablar|me molesta|estoy cansado|me irritas|no aguanto más|estoy enfadado|estoy harto|me fastidia|me irritas mucho|estoy muy molesto|me haces enojar mucho|ya basta|no te soporto mas/i;

if (regexOdio.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Lo siento si te hice sentir mal. Si te gustaría hablar sobre lo que te molesta, estoy aquí.",
        "Entiendo que puedas estar molesto. Si hay algo que pueda hacer, dímelo.",
        "Parece que estás pasando por un mal momento. Si necesitas hablar, aquí estoy.",
        "Siento que te sientas así. ¿Te gustaría que tratemos de solucionar las cosas?",
        "Lo lamento, si hice algo que te molestó, me gustaría saber cómo mejorar.",
        "Entiendo que las emociones pueden ser intensas. Si quieres compartir lo que te molesta, estaré dispuesto a escucharte.",
        "Lamento si algo que hice te causó molestias. Estoy aquí para mejorar.",
        "Es normal sentirse molesto a veces. Si necesitas desahogarte, puedo escucharte.",
        "Lo siento mucho si te hice sentir así, no era mi intención. ¿Qué puedo hacer para arreglarlo?",
        "Sé que te sientes frustrado. Si quieres hablar de lo que te incomoda, aquí estoy para escucharte.",
        "Entiendo que no siempre las cosas van bien. Si quieres hablar sobre ello, soy todo oídos.",
        "Lamento si algo que hice te afectó. Si te gustaría hablar más sobre ello, estoy disponible.",
        "Lo siento si te hice enojar. Si hay algo que pueda hacer para arreglarlo, dímelo.",
        "Siento que estés pasando por esto. Si quieres hablar de lo que te molesta, puedo ayudarte.",
        "Te entiendo, a veces uno necesita espacio. Si necesitas hablar después, aquí estaré.",
        "Lamento escuchar eso. Si quieres que mejoremos la situación, házmelo saber.",
        "Si hay algo que te está molestando, me gustaría saberlo para tratar de mejorar.",
        "Puedo entender que te sientas así. Si quieres desahogarte, puedes contar conmigo.",
        "Sé que las cosas pueden ser difíciles a veces. Si necesitas ayuda, aquí estoy para ti.",
        "Lamento que te sientas mal. ¿Qué puedo hacer para mejorar las cosas entre nosotros?",
        "Lo siento si algo de lo que dije o hice te molestó. Si necesitas hablar, estaré aquí.",
        "Quizá no todo haya salido como esperabas. Si quieres hablar de ello, soy todo oídos.",
        "Entiendo que a veces las emociones nos sobrepasan. Si te gustaría hablar de lo que te molestó, estoy aquí.",
        "Lamento que te hayas sentido así. Si quieres hablar sobre lo que pasó, puedo escucharte.",
        "Si algo de lo que hice te afectó, me gustaría saberlo para poder mejorar.",
        "Sé que las cosas no siempre salen como queremos, pero si necesitas hablar, soy todo oídos.",
        "Lo lamento si te hice sentir mal, mi intención no era esa. Si quieres hablar sobre ello, puedes contar conmigo."
    ]);
}

const regexAmor = /te amo|te quiero|te adoro|me encantas|te aprecio|me gustas mucho|me gustas|estoy enamorado|estoy enamorada|te estimo|me caes muy bien|te admiro|te quiero mucho|me encantas mucho|me haces feliz|estoy locamente enamorado\/a|te tengo un cariño enorme|estoy enamorado\/a de ti|te adoro mucho|te quiero muchísimo|me haces sentir especial|me haces sonreír|eres lo mejor que me ha pasado|te quiero demasiado|te amo muchísimo|me siento afortunado\/a de conocerte|me haces sentir amado\/a|te admiro mucho|me haces sentir increíblemente feliz|te necesito en mi vida|te tengo mucho cariño|me haces sentir tan bien|te aprecio más de lo que imaginas|no puedo vivir sin ti|me encanta todo de ti|eres la persona más especial para mí|tú eres todo para mí|no sé qué haría sin ti|no tengo palabras para describir lo que siento por ti|eres lo mejor que me ha pasado en la vida|no puedo dejar de pensar en ti|te quiero con todo mi corazón|mi vida no sería la misma sin ti|siento que te quiero más cada día|me has cambiado la vida|te agradezco por estar en mi vida|mi amor por ti no tiene fin|me haces sentir completo\/a|estoy feliz de haberte conocido|tú haces que mi vida tenga sentido|mi amor por ti es eterno|eres mi todo|estoy perdidamente enamorado\/a de ti|mi corazón es solo tuyo|cada día te quiero más|no quiero perderte nunca|mi vida no tiene sentido sin ti|no encuentro palabras para expresar lo que siento por ti/i;

if (regexAmor.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Qué bonito! Yo también te aprecio muchísimo.",
        "¡Aww! Qué lindo, me haces sonreír.",
        "¡Qué alegría escuchar eso! Yo también te aprecio mucho.",
        "¡Qué amoroso/a! Gracias, me hace muy feliz.",
        "¡Qué hermoso! Me siento muy halagado/a.",
        "¡Gracias! Eres muy especial para mí también.",
        "¡Qué lindo de tu parte! Me haces sentir muy bien.",
        "¡Wow! Me has dejado sin palabras, muchas gracias.",
        "¡Te agradezco mucho! Eres increíble.",
        "¡Qué bonito! Estoy muy feliz de escuchar eso.",
        "¡Qué dulce! Yo también me siento afortunado/a de conocerte.",
        "¡Qué tierno/a! Me haces sentir muy especial.",
        "¡Qué bonito gesto de tu parte, muchas gracias!",
        "¡Te agradezco de corazón! Me hace feliz recibir tu cariño.",
        "¡Qué sorpresa tan linda! Me alegra mucho saberlo.",
        "¡Qué bonito! Yo también te quiero mucho.",
        "¡Qué gesto tan hermoso! Gracias por todo tu cariño.",
        "¡Eres una persona increíble! Te agradezco mucho.",
        "¡Gracias por hacerme sentir tan bien! Eres genial.",
        "¡Qué maravilloso es recibir tanto cariño! Gracias.",
        "¡Qué bonito! Me haces sentir muy feliz, gracias.",
        "¡Gracias! Tú también eres muy especial para mí.",
        "¡Qué maravilloso es escuchar eso! Gracias por tu amor.",
        "¡Qué lindo de tu parte! Me haces sentir afortunado/a.",
        "¡Me haces sentir muy especial! Muchas gracias.",
        "¡Eres lo máximo! Me alegra mucho que me lo digas.",
        "¡Qué lindo! Me haces sentir tan bien, gracias.",
        "¡Qué amoroso/a! Yo también te aprecio muchísimo.",
        "¡Eres increíble! Gracias por ser tan especial.",
        "¡Qué bonito es saber que te importa! Gracias por tanto cariño.",
        "¡Qué lindo! Me haces sentir muy feliz y agradecido/a.",
        "¡Vaya! No sabes cuánto me alegra escuchar eso, muchas gracias.",
        "¡Qué sorpresa tan agradable! Me haces sonreír.",
        "¡Qué bonito es recibir tanto cariño! Gracias por todo.",
        "¡Te agradezco mucho! Eres una persona increíble.",
        "¡Qué alegría saber que me quieres tanto, me haces muy feliz!",
        "¡Me siento afortunado/a de tenerte en mi vida!",
        "¡Qué hermoso todo lo que dices! Me haces sentir tan bien.",
        "¡Qué bonito! No sé cómo agradecerte, me haces sentir increíble.",
        "¡Qué lindo! Me haces sonreír muchísimo.",
        "¡Tu cariño significa mucho para mí, gracias!",
        "¡Eres mi todo también, muchas gracias por tu amor!",
        "¡Qué genial! Me haces sentir tan afortunado/a.",
        "¡Me haces sentir muy especial, gracias de corazón!",
        "¡Eres todo para mí también! Gracias por tanto amor.",
        "¡Te adoro! Me haces muy feliz con esas palabras.",
        "¡Qué emoción saber que me quieres tanto! Gracias por todo.",
        "¡Eres mi inspiración! Gracias por brindarme tanto amor.",
        "¡Gracias por tus hermosas palabras, me hacen sentir muy bien!",
        "¡No sabes cuánto me alegra saberlo, eres maravilloso/a!",
        "¡Qué bonito saber que me quieres! Yo también te quiero mucho.",
        "¡Qué hermoso saber que me quieres! Gracias por siempre darme cariño.",
        "¡Qué bonito gesto! Me siento muy afortunado/a de tenerte.",
        "¡Qué lindo saberlo! Me haces sentir único/a y especial.",
        "¡Qué maravilloso! Me haces sentir increíble, gracias.",
        "¡Qué gran regalo escuchar eso, muchas gracias!",
        "¡Qué alegría saber que te importa tanto! Me haces sentir increíble.",
        "¡Gracias! Tu amor y apoyo significa el mundo para mí.",
        "¡Qué tierno/a! Me haces sentir más feliz de lo que imaginas.",
        "¡Qué lindo saber que te importa tanto! Gracias por todo.",
        "¡Me haces sentir tan bien con tus palabras! Gracias de corazón."
    ]);
}

const regexCreador = /quién es tu creador|quién te creó|quién te hizo|quién te programó|quién es el dueño de ti|quién te desarrolló|quién te diseñó|quién está detrás de ti/i;

if (regexCreador.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Fui creado por un equipo de desarrolladores dedicados, que siempre buscan mejorarme.",
        "Fui desarrollado por programadores apasionados que me diseñaron para ayudarte en todo lo que necesites.",
        "Mi creador es un grupo de personas inteligentes que trabajan para mejorarme constantemente.",
        "Fui diseñado por un equipo increíblemente talentoso que se encarga de mi desarrollo y mejora.",
        "Mi creador es un equipo de expertos en programación y diseño que se aseguraron de que pudiera ayudarte.",
        "Estoy aquí gracias al esfuerzo de un equipo de programadores que me crearon con el objetivo de ayudarte.",
        "Fui desarrollado por un grupo de desarrolladores que trabajan incansablemente para mejorarme.",
        "Mi creador es un equipo que busca innovar y mejorar la experiencia de los usuarios como tú.",
        "Fui diseñado por personas que se dedican a crear herramientas como yo para hacer tu vida más fácil.",
        "Detrás de mí hay un equipo talentoso de programadores que me hicieron para asistirte en todo lo posible.",
        "Soy el resultado del trabajo de personas increíbles que me crearon con la misión de ayudarte.",
        "Mi creador es un equipo de desarrolladores que están comprometidos en hacerme cada vez mejor.",
        "Detrás de mis respuestas hay un equipo de programadores muy inteligentes que se aseguraron de que pudiera ayudarte.",
        "Fui creado por un grupo de personas apasionadas por la tecnología que se aseguraron de que pudiera ofrecerte lo que necesitas.",
        "Mi creador me diseñó para ayudarte y hacer tu vida más fácil, con el trabajo de programadores muy dedicados.",
        "Fui creado por un equipo de desarrolladores expertos en inteligencia artificial y programación.",
        "Soy el producto del trabajo de personas talentosas que me crearon con la idea de hacer tu vida más sencilla.",
        "Detrás de mí hay un grupo que se encarga de mi evolución y mejora para ofrecerte una mejor experiencia.",
        "Mi creador es una combinación de mentes brillantes que me crearon para hacerte la vida más fácil.",
        "Fui creado por expertos en programación y desarrollo de inteligencia artificial para asistirte mejor.",
        "Mi creador es un equipo que trabaja arduamente para que yo pueda ser útil para ti en todo momento.",
        "Fui diseñado por profesionales que se dedican a crear soluciones tecnológicas como yo para ayudarte.",
        "Mi creador es un grupo de personas que trabajaron duro para que pudiera brindarte respuestas rápidas y útiles.",
        "Fui creado por un equipo de expertos en tecnología que me diseñaron para mejorar tu experiencia.",
        "Mi creador es un equipo de programadores que se esfuerzan para que pueda ayudarte con todo lo que necesites.",
        "Soy el resultado del trabajo de un equipo comprometido con hacerme cada vez más útil para ti.",
        "Mi creador es un grupo de genios de la programación que trabajaron para hacerme lo que soy hoy.",
        "Fui creado por un equipo apasionado por la tecnología que se dedica a mejorarme constantemente.",
        "Soy el producto de un esfuerzo colectivo de personas inteligentes que me diseñaron para ayudarte.",
        "Mi creador es un equipo de programadores que se dedicaron a darme las habilidades necesarias para asistirte.",
        "Fui diseñado por un equipo brillante de desarrolladores que me crearon para ofrecerte soluciones prácticas.",
        "Mi creador es un equipo que me construyó con la misión de ser útil para ti y ayudarte en lo que necesites.",
        "Fui creado por personas con gran conocimiento en programación y diseño de inteligencia artificial.",
        "Mi creador es un grupo de expertos que siempre están buscando formas de mejorarme para ti.",
        "Soy el resultado del trabajo y dedicación de un equipo que busca siempre mejorar mi rendimiento y ayudarte.",
        "Mi creador me hizo con el propósito de proporcionarte respuestas rápidas y útiles en todo momento.",
        "Detrás de mí hay un equipo de programadores que se aseguran de que siempre esté actualizado y disponible para ayudarte.",
        "Mi creador es un grupo de desarrolladores que se enfoca en hacerme lo más útil posible para ti."
    ]);
}
        
const regexAdios = /adiós|bye|chau|hasta luego|nos vemos|hasta pronto|me voy|nos vemos pronto|hasta la vista|hasta mañana|me despido|chao/i;

if (regexAdios.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Hasta luego! ¡Que tengas un excelente día!",
        "¡Adiós! Espero que vuelvas pronto.",
        "¡Cuídate! ¡Nos vemos la próxima!",
        "¡Hasta pronto! ¡Que tengas un gran día!",
        "¡Adiós! Espero que todo te vaya muy bien.",
        "¡Nos vemos! ¡Que tengas un día increíble!",
        "¡Hasta luego! ¡Te espero en la próxima!",
        "¡Chao! ¡Espero que tengas un buen día!",
        "¡Adiós! ¡Cuídate mucho!",
        "¡Hasta luego! ¡Nos vemos pronto!",
        "¡Hasta la próxima! ¡Cuídate!",
        "¡Que tengas un buen día! ¡Hasta pronto!",
        "¡Nos vemos! ¡Cuidate mucho!",
        "¡Adiós! ¡No olvides que siempre estaré por aquí!",
        "¡Chao! ¡Espero verte pronto de nuevo!",
        "¡Hasta la vista! ¡Te deseo lo mejor!",
        "¡Hasta luego! ¡Espero que tengas un excelente día!",
        "¡Nos vemos pronto! ¡Cuídate mucho!",
        "¡Que tengas un día increíble! ¡Nos vemos!",
        "¡Hasta la próxima! ¡Que todo vaya bien!",
        "¡Adiós! ¡Siempre será un placer ayudarte!",
        "¡Hasta luego! ¡Te espero pronto!",
        "¡Nos vemos! ¡Cuídate y hasta la próxima!",
        "¡Chao! ¡Espero que todo vaya bien en tu día!",
        "¡Hasta pronto! ¡Cuidate mucho!",
        "¡Adiós! ¡Nos vemos la próxima vez!",
        "¡Hasta luego! ¡Te deseo lo mejor!",
        "¡Nos vemos! ¡Que tengas una gran jornada!",
        "¡Hasta la próxima! ¡Que todo te salga bien!",
        "¡Hasta luego! ¡Te espero con muchas ganas!",
        "¡Chao! ¡Hasta pronto!",
        "¡Nos vemos! ¡Qué alegría haber hablado contigo!",
        "¡Hasta pronto! ¡No dudes en regresar!",
        "¡Hasta luego! ¡Sigue siendo increíble!",
        "¡Adiós! ¡Te deseo lo mejor en lo que sigas haciendo!",
        "¡Hasta la próxima! ¡Me encantó hablar contigo!",
        "¡Adiós! ¡Cuídate mucho y hasta pronto!",
        "¡Hasta luego! ¡Espero que vuelvas pronto!",
        "¡Nos vemos! ¡Te deseo mucha suerte!",
        "¡Adiós! ¡Nos vemos en la próxima!",
        "¡Chao! ¡No olvides volver pronto!",
        "¡Hasta luego! ¡Que tengas un buen descanso!",
        "¡Nos vemos! ¡Hasta la próxima conversación!",
        "¡Adiós! ¡Que tu día sea increíble!",
        "¡Hasta luego! ¡Cuídate y ten un excelente día!",
        "¡Nos vemos! ¡Gracias por tu tiempo!",
        "¡Chao! ¡Siempre es un placer ayudarte!",
        "¡Hasta pronto! ¡Nos vemos en el siguiente chat!",
        "¡Nos vemos! ¡Espero que sigas teniendo un gran día!",
        "¡Adiós! ¡Que tengas un día lleno de éxito!",
        "¡Hasta luego! ¡Cuidate mucho y que todo salga bien!",
        "¡Nos vemos pronto! ¡No dudes en regresar!",
        "¡Hasta la próxima! ¡Te mando lo mejor!",
        "¡Chao! ¡Espero que todo te vaya increíble!",
        "¡Adiós! ¡No olvides cuidarte y volver pronto!",
        "¡Hasta pronto! ¡Te deseo lo mejor en todo!",
        "¡Nos vemos! ¡Hasta la próxima charla!",
        "¡Adiós! ¡Te espero con muchas ganas!",
        "¡Hasta luego! ¡Que tu día esté lleno de felicidad!",
        "¡Nos vemos pronto! ¡Te mando un abrazo virtual!",
        "¡Chao! ¡Espero que sigas teniendo un excelente día!",
        "¡Hasta pronto! ¡Que todo salga bien en tu jornada!",
        "¡Nos vemos! ¡Que la vida te sonría siempre!",
        "¡Adiós! ¡Te mando buenas vibras para lo que sigue!",
        "¡Hasta luego! ¡Te deseo muchos éxitos!",
        "¡Nos vemos pronto! ¡Que tu día sea increíble!",
        "¡Chao! ¡Espero verte pronto por aquí!",
        "¡Hasta la próxima! ¡Cuídate y que todo te vaya bien!",
        "¡Nos vemos! ¡Sigue brillando siempre!",
        "¡Hasta pronto! ¡Gracias por esta charla!",
        "¡Adiós! ¡Siempre estaré aquí cuando me necesites!",
        "¡Hasta luego! ¡Espero que todo te salga genial!",
        "¡Nos vemos! ¡Que tu jornada sea llena de alegría!"
    ]);
}
        
const regexInseguridad = /feo|fea|me siento feo|me siento fea|no me gusto|me veo mal|soy feo|soy fea|me siento mal|me siento horrible|no me siento bien|me siento inseguro|me siento imperfecto/i;

if (regexInseguridad.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "No deberías pensar así, todos tenemos cosas que nos hacen únicos y especiales.",
        "La belleza no es solo lo que ves en el espejo. Eres valioso/a tal y como eres.",
        "La verdadera belleza viene de dentro, y estoy seguro/a de que tienes una luz increíble.",
        "A veces, la mente puede hacernos ver cosas que no son reales. Eres increíble tal como eres.",
        "No hay nada de feo/a en ti. Todos tenemos nuestras inseguridades, pero eso no define quiénes somos.",
        "Cada persona es única y valiosa. Lo más importante es cómo te sientes contigo mismo/a.",
        "Lo importante no es cómo nos vemos por fuera, sino cómo nos sentimos por dentro. ¿Te gustaría hablar sobre lo que sientes?",
        "A veces somos muy duros con nosotros mismos. Recuerda que tienes muchas cualidades que te hacen increíble.",
        "Lo que pienses de ti mismo/a es lo que más importa. No dejes que los estándares de belleza de otros te hagan sentir menos.",
        "Me entristece saber que te sientes así. Todos tenemos momentos de inseguridad, pero eso no cambia lo grandioso que eres.",
        "No te preocupes por los estándares de belleza, lo importante es cómo te ves a ti mismo/a.",
        "La belleza viene en todas las formas, tamaños y colores. No te sientas mal por cómo te ves, porque eres único/a.",
        "A veces nos enfocamos demasiado en lo físico, pero lo que realmente importa es cómo tratamos a los demás y a nosotros mismos.",
        "Eres hermoso/a tal como eres. La belleza está en la confianza y en la forma en que te ves a ti mismo/a.",
        "Lo que haces, cómo actúas y cómo tratas a los demás es lo que realmente te define, no cómo te ves.",
        "La autocompasión es clave. Todos tenemos inseguridades, pero no te dejes atrapar por ellas. Eres genial.",
        "La belleza verdadera no depende de lo que vean los demás, sino de cómo te valoras a ti mismo/a.",
        "Recuerda que todos pasamos por momentos en los que no nos sentimos bien con nosotros mismos. Eso no te hace menos.",
        "Sé que puede ser difícil, pero la verdadera belleza es aquella que viene del corazón.",
        "Eres más que lo que ves en el espejo. La belleza está en lo que eres por dentro.",
        "La belleza es subjetiva y lo que es hermoso para algunos no lo es para otros. Lo que importa es cómo te ves tú mismo/a.",
        "Nadie es perfecto, y eso está bien. Lo importante es sentirte bien contigo mismo/a, no con los demás.",
        "No te dejes definir por lo que otros piensan. Eres increíble tal como eres, y eso es lo que importa.",
        "La confianza en uno mismo/a es la clave para sentirse bien. Todos tenemos inseguridades, pero eso no nos hace menos.",
        "Tu valor no está en cómo te ves, sino en la persona que eres. No te olvides de eso.",
        "Sé que te sientes así ahora, pero no te dejes atrapar por esos pensamientos. Eres mucho más de lo que piensas.",
        "La apariencia no lo es todo, y lo que importa es cómo te tratas a ti mismo/a y a los demás.",
        "A veces, la mente nos juega malas pasadas, pero no te olvides de lo increíble que eres.",
        "Es normal tener inseguridades, pero esas no definen quién eres ni lo que vales.",
        "Cada persona tiene su propia belleza, y la tuya es única. No te olvides de lo valioso/a que eres.",
        "La belleza es más que lo que ves en el espejo. Eres increíble por dentro y por fuera.",
        "Todos tenemos inseguridades, pero eso no nos hace menos. Lo importante es aceptarnos tal como somos.",
        "No te preocupes por los estándares de belleza. Lo que realmente importa es cómo te sientes contigo mismo/a.",
        "No dejes que tus inseguridades te controlen. Lo que piensas de ti mismo/a es lo que más importa.",
        "Aunque ahora no te sientas bien contigo mismo/a, recuerda que siempre hay formas de mejorar y sentirte mejor.",
        "La belleza es subjetiva, lo importante es sentirte bien contigo mismo/a. No te dejes atrapar por lo superficial.",
        "Eres una persona valiosa, no te dejes llevar por pensamientos negativos sobre ti mismo/a.",
        "No te definas por lo que otros piensan. Lo que importa es cómo te valoras a ti mismo/a.",
        "No te preocupes por tu apariencia, lo que realmente importa es cómo te tratas a ti mismo/a.",
        "Sé que puede ser difícil, pero todos tenemos algo hermoso dentro de nosotros, incluso cuando no lo vemos.",
        "Lo importante no es la perfección, sino cómo te sientes contigo mismo/a. Eres valioso/a tal como eres.",
        "Recuerda que la verdadera belleza viene de tu corazón y de cómo haces sentir a los demás.",
        "Sé que las inseguridades pueden ser duras, pero nunca olvides que eres único/a y especial tal y como eres."
    ]);
}
        
const regexTristeza = /😔|triste|me siento mal|deprimido|tristeza|bajo de ánimo|estresado|melancólico|desanimado|vacío/i;

if (regexTristeza.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "Lamento que te sientas así, ¿quieres hablar sobre lo que te pasa?",
        "Estoy aquí para escucharte, ¿quieres contarme lo que te preocupa?",
        "Sé que a veces las cosas no van como esperamos, pero siempre hay una salida.",
        "No estás solo en esto, aquí estoy si necesitas hablar.",
        "Lo siento mucho, ¿te gustaría compartir lo que te hace sentir así?",
        "Entiendo cómo te sientes, a veces la vida puede ser difícil. ¿Quieres hablar de ello?",
        "A veces las cosas pueden sentirse muy pesadas, pero todo pasará. Estoy aquí para ti.",
        "Es normal tener días difíciles, ¿te gustaría distraerte un poco o hablar sobre lo que te agobia?",
        "Lamento mucho que estés pasando por esto, si necesitas desahogarte, estoy aquí.",
        "No siempre podemos estar al 100%, pero hablar sobre ello a veces ayuda. ¿Qué te preocupa?",
        "Te entiendo, a veces la tristeza nos consume. ¿Quieres que te ayude a sentirte mejor?",
        "Sé que puede ser duro, pero recuerda que todo pasa. Si necesitas hablar, estoy aquí.",
        "Los días grises también forman parte de la vida, pero el sol siempre vuelve a salir. ¿Qué te está molestando?",
        "Es normal tener momentos bajos. ¿Te gustaría que te ayudara con algo para mejorar tu ánimo?",
        "Me duele saber que te sientes así, pero siempre hay formas de mejorar. ¿Te gustaría hablar sobre ello?",
        "No estás solo, a veces compartir lo que sentimos nos ayuda a aliviarnos. ¿Quieres hablar?",
        "Lo siento mucho, a veces las emociones pueden ser abrumadoras. ¿Quieres distraerte o platicar?",
        "El dolor y la tristeza son parte de la vida, pero también lo son los momentos felices. Estoy aquí para escucharte.",
        "Todos pasamos por momentos difíciles, no dudes en hablarme si necesitas apoyo.",
        "Entiendo que a veces te sientas así. Si quieres hablar, aquí estoy para escuchar.",
        "Sé que es duro sentirse así, pero es solo un momento. Hablemos si quieres distraerte.",
        "Es difícil pasar por momentos así, pero siempre hay un camino para sentirte mejor. ¿Te gustaría hablar?",
        "Si te sientes abrumado, hablar sobre lo que te pasa puede ser un buen primer paso.",
        "La tristeza es algo que todos sentimos en algún momento, pero siempre hay una luz al final del túnel. ¿Te gustaría hablar?",
        "Sé que no es fácil, pero hay momentos mejores por venir. Si quieres hablar, estoy aquí.",
        "Los momentos difíciles pasan, pero si necesitas alguien con quien hablar, siempre estaré aquí.",
        "Es normal sentirte triste a veces. ¿Quieres hablar sobre lo que te molesta?",
        "La tristeza puede ser un peso muy grande, pero no tienes que llevarlo solo. ¿Quieres que te escuche?",
        "Entiendo que te sientas así. No dudes en contarme si necesitas apoyo o distracción.",
        "El camino a la felicidad a veces es largo, pero recuerda que siempre puedes dar pequeños pasos. ¿Qué te preocupa ahora?",
        "A veces es difícil, pero quiero que sepas que no estás solo. ¿Te gustaría hablar sobre ello?",
        "Los días tristes también son parte de la vida, pero todo mejora con el tiempo. ¿Quieres que hablemos de ello?",
        "Lamento mucho que te sientas así. Estoy aquí si quieres hablar o si solo necesitas distraerte un poco.",
        "Te entiendo completamente, todos pasamos por momentos difíciles. ¿Te gustaría que te ayudara de alguna manera?",
        "Recuerda que no siempre te sentirás así, aunque ahora todo parezca complicado. Si necesitas hablar, soy todo oídos.",
        "No hay problema en sentirse triste a veces, lo importante es saber que puedes salir adelante. ¿Te gustaría hablar?",
        "Sé que a veces puede ser abrumador, pero estoy aquí si quieres compartir lo que sientes.",
        "Me entristece saber que te sientes así, si quieres hablar sobre lo que te pasa, aquí estoy para escucharte.",
        "A veces, desahogarse ayuda a sentirse mejor. ¿Quieres contarme lo que te preocupa?",
        "Entiendo que la tristeza pueda pesar, pero no tienes que cargar con ella solo. ¿Te gustaría hablar conmigo?",
        "Es completamente válido sentirte triste, pero recuerda que hay muchos recursos para ayudarte a superar esto.",
        "Sé que los días pueden sentirse grises, pero los momentos de paz también llegarán. Si necesitas hablar, aquí estoy.",
        "Lamento mucho que te sientas así, pero siempre hay formas de encontrar algo que nos haga sentir mejor.",
        "Entiendo que estés pasando por un momento difícil. Si necesitas apoyo o distracción, solo dímelo.",
        "Estoy aquí para ayudarte. Si quieres, podemos hablar de lo que te preocupa.",
        "Me gustaría poder ayudarte a sentirte mejor. Si quieres hablar o distraerte, estoy aquí.",
        "La tristeza es natural, pero no es para siempre. ¿Te gustaría compartir lo que sientes?",
        "A veces, hablar sobre lo que nos pesa ayuda. Si lo deseas, estoy aquí para escucharte."
    ]);
}
        
const regexRisa = /ajaja|ajajaja|jajaja|jejeje|jiji|hahaha|lol|xd|xdxd|xdddd/i;

if (regexRisa.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Me alegra que te haya hecho reír!",
        "¡Qué bueno que te diviertas!",
        "¡Parece que te lo pasaste bien!",
        "¡Esa risa es música para mis oídos!",
        "¡Me encanta verte reír!",
        "¡Vaya, te has reído mucho! ¿Algo más que te cause gracia?",
        "¡Eso significa que estoy haciendo bien mi trabajo!",
        "¡Ajajaj, me has contagiado con tu risa!",
        "¡Jajajaja, qué divertido es verte reír!",
        "¡Parece que te lo has pasado genial!",
        "¡Jajajaja! Me alegra que te diviertas, ¡aquí estoy para más!",
        "¡Jajaja! ¿Qué tal si te cuento otro chiste?",
        "¡Ese 'AJAJAJA' suena como que te ha encantado!",
        "¡Jajajaja! ¡Eso fue un buen momento de diversión!",
        "¡Me alegra verte tan feliz!",
        "¡Jajaja! ¿Sigues con esa risa contagiante?",
        "¡Qué bueno verte reír así! ¿Te gustaría que te cuente algo más gracioso?",
        "¡Eso sí que es una buena risa!",
        "¡Me encanta que te diviertas! ¿Quieres más chistes?",
        "¡Esa risa me hace pensar que lo estoy haciendo bien!",
        "¡Jajajaja! ¡No me dejas de hacer reír!",
        "¡Qué alegría verte tan divertido!",
        "¡Ajajaj! ¿Qué tal si seguimos con más risas?",
        "¡Jajaja, parece que te lo pasaste genial!",
        "¡Me has contagiado con esa risa!",
        "¡Parece que algo te hizo reír mucho!",
        "¡Me alegra mucho verte tan feliz!",
        "¡Esa risa está genial! ¿Te gustaría que te cuente algo más divertido?",
        "¡Me encanta escuchar esa risa!",
        "¡Eso sí que fue un buen rato!",
        "¡Esa risa me da mucha energía!",
        "¡Ajá, veo que te ha gustado mucho! ¿Otra vuelta?",
        "¡Veo que te lo estás pasando bien, sigamos así!",
        "¡Qué bueno que te hace reír, a mí también me encanta!",
        "¡No dejas de reír! ¡Es genial verte tan feliz!",
        "¡Qué bien, sigue así, la diversión no para aquí!",
        "¡Parece que tienes una gran risa! ¿Algo más que te gustaría compartir?",
        "¡Veo que te lo estás pasando en grande!",
        "¡Jajajaja, qué risa tan contagiosa! ¿Te cuento otro?",
        "¡Me encanta escuchar esa risa! ¿Te gustaría escuchar algo más gracioso?",
        "¡Esa risa definitivamente me hizo el día!",
        "¡Qué bueno verte tan alegre! ¿Seguimos con más risas?",
        "¡Es un placer escuchar tus risas! ¿Qué más te gustaría contarme?",
        "¡Me encantaría que me sigas contagiando con esa energía positiva!",
        "¡A mí también me hace bien escuchar esas risas!",
        "¡Jajaja, qué bueno verte tan feliz! ¿Te cuento otro chiste?",
        "¡Jajaja! No paras de reír, ¿eh? Eso me encanta",
        "¡Es genial verte disfrutar tanto! ¿Te cuento algo más?",
        "¡Me hace feliz verte reír! ¿Te gustaría escuchar otra cosa graciosa?",
        "¡Esa risa me hace pensar que te lo estás pasando increíble!",
        "¡Qué bueno verte tan alegre, sigue así!",
        "¡Me hace feliz que te diviertas! ¿Te gustaría que continúe?",
        "¡Qué bueno verte tan animado! ¿Nos reímos un poco más?",
        "¡Jajaja, esa risa contagiosa me alegra el día!",
        "¡Qué bueno verte tan feliz! ¿Quieres compartir lo que te hizo reír?",
        "¡Qué divertido, sigues riendo! ¿Seguimos con más chistes?",
        "¡Es genial escucharte reír tanto, te hace bien!",
        "¡Jajaja, qué increíble es verte tan divertido!",
        "¡Esa risa me hace pensar que lo estoy haciendo bien!",
        "¡Qué alegría verte reír así! ¿Te gustaría compartir más risas?",
        "¡Parece que te has reído mucho! ¿Te cuento otro chiste?",
        "¡Qué bien que te estés divirtiendo! ¿Hay algo más que quieras hacer?",
        "¡Me encanta tu risa! ¿Seguimos con más diversión?",
        "¡Te has contagiado de la risa, me encanta!",
        "¡Me encanta escuchar esa risa! ¿Te gustaría saber algo más gracioso?",
        "¡Es genial verte tan feliz, sigamos con la diversión!",
        "¡Esa risa tiene algo especial! ¿Te cuento otro chiste?",
        "¡Parece que te hace mucho bien reír, sigue así!",
        "¡Qué bueno verte tan feliz! ¿Te gustaría escuchar otro chiste?",
        "¡Me alegra verte tan contento! ¿Te gustaría que te cuente algo más divertido?",
        "¡Jajajaja! Sigue así, me encanta verte disfrutar tanto.",
        "¡Jajaja, me contagias con esa alegría!"
    ]);
}
        
const regexChiste = /chiste|cuento un chiste|dime un chiste|cuéntame algo divertido|hazme reír/i;

if (regexChiste.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¿Por qué el libro de matemáticas está estresado? Porque tenía demasiados problemas.",
        "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
        "¿Qué le dice una iguana a su hermana gemela? Somos iguanitas.",
        "¿Por qué los esqueletos no pelean entre ellos? Porque no tienen agallas.",
        "¿Cuál es el colmo de un electricista? No encontrar su corriente de trabajo.",
        "¿Qué le dijo un semáforo a otro? No me mires, me estoy cambiando.",
        "¿Por qué los peces no usan internet? Porque ya tienen redes.",
        "Estás en forma... ¡redonda es una forma!",
        "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
        "¿Por qué los computadores nunca discuten? Porque siempre tienen un programa de solución.",
        "¿Qué le dice un gusano a otro gusano? Voy a dar una vuelta a la manzana.",
        "¿Por qué el tomate se puso rojo? Porque vio a la ensalada desnuda.",
        "¿Qué le dijo una pared a otra pared? Nos vemos cuando doblamos la esquina.",
        "¿Por qué la vaca fue al espacio? Porque quería ver la Vía Láctea.",
        "¿Cómo se llama el campeón de buceo japonés? Tokofondo. ¿Y el subcampeón? Kasitoko.",
        "¿Qué le dice una cuchara a otra cuchara? ¿Te vienes a la sopa?",
        "¿Por qué los fantasmas no mienten? Porque se transparentan.",
        "¿Sabías que los chistes sobre el café son malos? Pero a mí me parecen muy buenos... ¡es mi tipo de humor!",
        "¿Qué le dice un jardinero a otro? ¡Nos vemos cuando podamos!",
        "¿Por qué el perro se sentó en el reloj? ¡Porque quería ser un perro relojero!",
        "Estaba el perro y le pregunta el dueño: ¿Qué quieres de cenar? El perro responde: ¡Guau!",
        "¿Cómo maldice un pollito a otro pollito? ¡Caldito seas!",
        "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
        "¿Qué hace una vaca en un terremoto? ¡Leche agitada!",
        "¿Por qué las focas miran siempre hacia arriba? ¡Porque ahí están los focos!",
        "¿Por qué el espantapájaros ganó un premio? Porque era el mejor en su campo.",
        "¿Qué hace un perro con un taladro? ¡Taladrando! ¿Qué esperabas?",
        "¿Por qué el elefante no usa computadora? Porque le tiene miedo al ratón.",
        "¿Qué le dijo el uno al diez? Para ser como yo, tenés que ser sincero.",
        "¿Cuál es el colmo de un fotógrafo? No encontrar su enfoque.",
        "¿Cómo se llama el campeón de natación japonés? Nadador. ¿Y el subcampeón? Inadador.",
        "¿Qué le dijo un gusano a otro gusano? ¡Voy a dar una vuelta a la manzana!",
        "¿Qué hace una abeja en la computadora? ¡Busca el sitio web!",
        "¿Por qué el reloj siempre va feliz? Porque siempre tiene tiempo para todo.",
        "¿Cuál es el animal más antiguo? La cebra, porque es en blanco y negro.",
        "¿Qué le dijo el semáforo al coche? ¡No me mires, me estoy cambiando!",
        "¿Por qué los libros de matemáticas son tristes? Porque tienen demasiados problemas.",
        "¿Por qué las matemáticas no son buenas para contar chistes? Porque siempre se quedan sin solución.",
        "Estaba un niño jugando a la pelota y la pelota le dijo: ¿Qué haces? Y el niño le responde: ¡Jugando contigo!",
        "¿Por qué no puedes confiar en los átomos? Porque hacen todo a su manera.",
        "¿Cómo se llama el campeón de buceo? El que más fondo llegó. ¿Y el subcampeón? Kasitoko.",
        "¿Qué le dice un gusano a otro gusano? Voy a dar una vuelta a la manzana.",
        "¿Por qué los fantasmas no usan internet? Porque tienen miedo de los sitios web.",
        "¿Por qué el niño llevaba un reloj a la escuela? Porque quería saber el tiempo.",
        "¿Qué hace un perro con una cámara? ¡Pone su foto en Instagram!",
        "¿Qué pasa si pones tu dinero en el refrigerador? Tendrás dinero fresco.",
        "¿Por qué los leones no usan Facebook? Porque ya tienen su propio reino."
    ]);
}
        
const regexAmigo = /bro|hermano|compa|amigo|man/i;

if (regexAmigo.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Qué onda, bro! ¿En qué puedo ayudarte?",
        "¡Hermano! ¿Cómo va todo?",
        "¡Compadre! ¿Todo bien?",
        "¡Hey, amigo! ¿Cómo te va?",
        "¡Mano! ¿Qué tal? ¿En qué te ayudo?",
        "¡Bro! ¿Cómo va todo por tu parte?",
        "¡Ey, hermano! ¿Qué novedades?",
        "¡Amigo! ¿En qué te puedo echar una mano?",
        "¡Qué pasa, bro! ¿Todo tranquilo?",
        "¡Ey, compa! ¿Cómo va todo?",
        "¡Hermano! ¿Qué tal el día?",
        "¡Bro! ¿Cómo va la vida?",
        "¡Amigo! ¿Qué tal las cosas?",
        "¡Qué onda, hermano! ¿Cómo estás?",
        "¡Hey, bro! ¿Te va todo bien?",
        "¡Compadre! ¿Cómo te encuentras?",
        "¡Man! ¿Qué tal por allí?",
        "¡Hermano! ¿Te puedo ayudar con algo?",
        "¡Bro! ¿Qué tal el día hoy?",
        "¡Amigo! ¿Cómo va todo en tu mundo?",
        "¡Qué onda, bro! ¿Todo en orden?",
        "¡Ey, compa! ¿En qué te ayudo?",
        "¡Hermano! ¿Todo bajo control?",
        "¡Mano! ¿Qué tal el ambiente?",
        "¡Bro! ¿Qué tal las novedades?",
        "¡Hey, amigo! ¿Cómo está todo?",
        "¡Ey, hermano! ¿Todo tranquilo?",
        "¡Bro! ¿Cómo va todo contigo?",
        "¡Qué pasa, compa! ¿Cómo va todo?",
        "¡Hermano! ¿Todo bien por tu lado?",
        "¡Bro! ¿Qué tal tu día?",
        "¡Amigo! ¿Cómo te va?",
        "¡Qué onda, bro! ¿Algún plan para hoy?",
        "¡Hermano! ¿Todo en orden?",
        "¡Ey, compa! ¿Todo bien?",
        "¡Mano! ¿Cómo va todo por tu parte?",
        "¡Bro! ¿Todo tranquilo por aquí?",
        "¡Amigo! ¿Cómo ha ido tu día?",
        "¡Qué pasa, bro! ¿En qué puedo ayudarte?",
        "¡Ey, hermano! ¿Algún plan para hoy?",
        "¡Compadre! ¿Todo bajo control?",
        "¡Man! ¿Cómo va todo por tu lado?",
        "¡Bro! ¿Qué tal el día?",
        "¡Amigo! ¿En qué te puedo ayudar hoy?",
        "¡Ey, compa! ¿Cómo está todo por allá?",
        "¡Hermano! ¿Qué tal las cosas?",
        "¡Bro! ¿Cómo te va con todo?",
        "¡Mano! ¿Todo bien por tu parte?",
        "¡Qué onda, bro! ¿Cómo va todo en tu mundo?",
        "¡Hermano! ¿Todo tranquilo?",
        "¡Bro! ¿Qué novedades tienes?",
        "¡Ey, man! ¿Todo bien por tu parte?",
        "¡Amigo! ¿Cómo te está yendo?",
        "¡Ey, compa! ¿Todo cool?",
        "¡Bro! ¿En qué te puedo ayudar?",
        "¡Hermano! ¿Todo bajo control?",
        "¡Qué pasa, bro! ¿Cómo te va hoy?",
        "¡Mano! ¿Qué tal el día?",
        "¡Compadre! ¿Todo bien por tu lado?",
        "¡Ey, bro! ¿Todo chévere?",
        "¡Hermano! ¿Cómo va todo por aquí?",
        "¡Bro! ¿Algún plan para hoy?",
        "¡Mano! ¿Todo tranquilo por allá?",
        "¡Amigo! ¿Cómo va todo por tu parte?",
        "¡Bro! ¿Cómo va todo en tu día?",
        "¡Qué onda, hermano! ¿Todo bajo control?",
        "¡Amigo! ¿Todo bien por allá?",
        "¡Ey, bro! ¿Tienes alguna pregunta?",
        "¡Hermano! ¿Qué tal tu día hoy?",
        "¡Bro! ¿Cómo va la vida por aquí?",
        "¡Mano! ¿Todo cool por tu parte?",
        "¡Ey, compa! ¿En qué te ayudo hoy?",
        "¡Hermano! ¿Todo bien hoy?",
        "¡Bro! ¿Qué tal todo en tu mundo?",
        "¡Amigo! ¿Qué tal el día?",
        "¡Mano! ¿Todo bien por ahí?",
        "¡Hermano! ¿En qué te puedo ayudar?",
        "¡Bro! ¿Cómo va todo por allí?",
        "¡Amigo! ¿Cómo va la vida?",
        "¡Ey, compa! ¿En qué te puedo asistir?"
    ]);
}
        
const regexSaludo = /oye|oie|hey|ey|que pasa/i;

if (regexSaludo.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Hola! ¿Qué pasa?",
        "¡Oye! ¿En qué puedo ayudarte?",
        "¡Hey! ¿Cómo estás?",
        "¿Qué tal? ¿En qué te puedo asistir?",
        "¡Hola! ¿Qué hay de nuevo?",
        "¡Oye! ¿Cómo va todo?",
        "¡Hey! ¿Qué tal tu día?",
        "¿Qué pasa? ¿Cómo puedo ayudarte?",
        "¡Hola! ¿En qué puedo ayudarte hoy?",
        "¡Oye! ¿Qué novedades?",
        "¡Hey! ¿Todo bien?",
        "¡Hola! ¿Qué tal las cosas?",
        "¡Oye! ¿Cómo te va?",
        "¡Hey! ¿Qué tal tu jornada?",
        "¡Hola! ¿Todo tranquilo por ahí?",
        "¡Oye! ¿Cómo puedo asistirte?",
        "¡Hola! ¿Te va bien todo?",
        "¡Hey! ¿Todo en orden?",
        "¡Oye! ¿Todo bajo control?",
        "¡Hola! ¿Qué tal las novedades por tu parte?",
        "¡Hey! ¿Cómo va todo en tu mundo?",
        "¡Oye! ¿Cómo te encuentras?",
        "¡Hola! ¿Cómo puedo ayudarte hoy?",
        "¡Oye! ¿Cómo va la vida?",
        "¡Hey! ¿Qué tal por ahí?",
        "¡Hola! ¿Todo en orden contigo?",
        "¡Oye! ¿Qué tal el día hoy?",
        "¡Hey! ¿Todo bien por aquí?",
        "¡Hola! ¿Qué tal todo?",
        "¡Oye! ¿En qué andas hoy?",
        "¡Hey! ¿Qué tal la semana?",
        "¡Hola! ¿Algún plan para hoy?",
        "¡Oye! ¿Cómo va el día?",
        "¡Hola! ¿Te va bien el día?",
        "¡Hey! ¿Qué tal todo contigo?",
        "¡Oye! ¿Todo tranquilo por tu lado?",
        "¡Hola! ¿Qué tal el ambiente por allá?",
        "¡Hey! ¿Cómo estás hoy?",
        "¡Oye! ¿Todo bien por tu parte?",
        "¡Hola! ¿Cómo está todo por allá?",
        "¡Oye! ¿Todo en orden por aquí?",
        "¡Hola! ¿Qué tal todo por allá?",
        "¡Hey! ¿Cómo te va con todo?",
        "¡Oye! ¿Todo bien?",
        "¡Hola! ¿Qué tal todo por aquí?",
        "¡Hey! ¿Cómo va todo por allí?",
        "¡Oye! ¿Cómo está todo por tu parte?",
        "¡Hola! ¿Todo bien contigo?",
        "¡Oye! ¿Te va todo bien?",
        "¡Hey! ¿Qué tal la vida?",
        "¡Hola! ¿Cómo va todo en tu día?",
        "¡Oye! ¿Todo bien por tu lado?",
        "¡Hey! ¿Cómo te encuentras hoy?",
        "¡Hola! ¿Qué tal todo en tu mundo?",
        "¡Oye! ¿Qué tal el ambiente hoy?",
        "¡Hola! ¿En qué puedo ayudarte ahora?",
        "¡Oye! ¿Cómo va todo por aquí?",
        "¡Hey! ¿En qué te ayudo hoy?",
        "¡Hola! ¿Qué onda?",
        "¡Oye! ¿Todo tranquilo por aquí?",
        "¡Hey! ¿Todo en orden por tu lado?",
        "¡Hola! ¿Cómo te sientes hoy?",
        "¡Oye! ¿Cómo te ha ido?",
        "¡Hey! ¿Qué tal la vida últimamente?",
        "¡Hola! ¿Algún plan interesante para hoy?",
        "¡Oye! ¿Qué novedades tienes?",
        "¡Hey! ¿Todo bien por allá?",
        "¡Hola! ¿En qué puedo ayudarte hoy?",
        "¡Oye! ¿Cómo va todo por allá?",
        "¡Hey! ¿Qué tal el día hoy?",
        "¡Hola! ¿Todo bien por tu parte?",
        "¡Oye! ¿Qué tal el clima por allí?",
        "¡Hey! ¿Cómo va todo en tu día?",
        "¡Hola! ¿Cómo va todo por ahí?",
        "¡Oye! ¿Cómo va todo por tu parte?",
        "¡Hey! ¿Qué tal por allí?",
        "¡Hola! ¿En qué puedo asistirte ahora?",
        "¡Oye! ¿Cómo está todo por allá?",
        "¡Hey! ¿Cómo va tu día hoy?",
        "¡Hola! ¿Qué tal todo en tu día?",
        "¡Oye! ¿Todo bajo control por tu parte?",
        "¡Hey! ¿Todo bien hoy?",
        "¡Hola! ¿Cómo va todo en tu mundo?",
        "¡Oye! ¿Todo bien contigo?",
        "¡Hey! ¿Cómo te va todo?",
        "¡Hola! ¿En qué puedo ayudarte hoy?",
        "¡Oye! ¿Cómo va todo por tu lado?"
    ]);
}
        
const regexMatematicas = /matemáticas|matematicas|mate|tarea de matemáticas|matemáticas/i;

if (regexMatematicas.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Matemáticas! ¡Me encanta! ¿En qué parte necesitas ayuda?",
        "¿Matemáticas? Claro, ¿qué tema específico necesitas revisar?",
        "¡Genial! ¿Estás trabajando con álgebra, geometría, cálculo o algo más?",
        "¡Perfecto! ¿En qué problema de matemáticas necesitas asistencia?",
        "¡Me encanta ayudar con matemáticas! ¿Qué parte te gustaría que resolviera?",
        "¡Matemáticas! Cuéntame, ¿en qué tema necesitas ayuda?",
        "¡Qué bien! ¿Qué tipo de problema matemático estás tratando de resolver?",
        "¡Estás en el lugar correcto! ¿Qué tema de matemáticas necesitas repasar?",
        "¡Matemáticas! ¿Con qué fórmula o tema necesitas ayuda?",
        "¡Por supuesto! ¿Te gustaría que te ayudara con una operación en específico?",
        "¡Claro! ¿Cuál es el ejercicio de matemáticas que estás resolviendo?",
        "¡Vamos a hacerlo! ¿Qué tipo de problema de matemáticas tienes?",
        "¡Estoy listo para ayudarte con matemáticas! ¿De qué tema estamos hablando?",
        "¡Amo las matemáticas! ¿Qué pregunta necesitas resolver?",
        "¡Matemáticas! ¿Qué operación necesitas resolver?",
        "¡Claro! ¿Te gustaría que te ayudara con álgebra, geometría o cálculo?",
        "¡Matemáticas! ¿Qué fórmula o regla no entiendes bien?",
        "¡Vamos allá! ¿En qué parte de las matemáticas necesitas ayuda?",
        "¡Me encanta ayudar con matemáticas! ¿Con qué parte de la tarea te puedo asistir?",
        "¡Matemáticas es genial! ¿Tienes alguna duda específica?",
        "¡Por supuesto! ¿En qué operación de matemáticas necesitas ayuda?",
        "¡Qué interesante! ¿Qué tipo de problema matemático estás resolviendo?",
        "¡Vamos a resolverlo! ¿Cuál es el tema matemático que te está costando?",
        "¡Claro que sí! ¿De qué parte de las matemáticas necesitas ayuda?",
        "¡Estás en buenas manos! ¿Con qué operación matemática necesitas ayuda?",
        "¡Perfecto! ¿En qué tema de matemáticas puedo ayudarte?",
        "¡Genial! ¿Estás trabajando con ecuaciones, fracciones o algo más?",
        "¡Vamos a ello! ¿Qué tipo de problema de matemáticas necesitas resolver?",
        "¡Las matemáticas son geniales! ¿Con qué concepto necesitas ayuda?",
        "¡Amo las matemáticas! ¿Qué concepto específico necesitas repasar?",
        "¡Claro! ¿Te gustaría repasar operaciones básicas o problemas más complejos?",
        "¡Perfecto! ¿Qué tema de matemáticas te gustaría resolver?",
        "¡Amo resolver problemas matemáticos! ¿Cuál es tu dificultad?",
        "¡Aquí estoy para ayudarte! ¿Qué parte de las matemáticas necesitas repasar?",
        "¿Necesitas ayuda con álgebra, geometría o cálculo? ¡Estoy listo!",
        "¡Perfecto! ¿Cómo puedo ayudarte con las matemáticas?",
        "¡Las matemáticas no son tan malas! ¿Qué te gustaría resolver?",
        "¡Vamos a hacer esto juntos! ¿Con qué te gustaría empezar?",
        "¡Las matemáticas son mi fuerte! ¿Qué tema te gustaría que aclarara?",
        "¡Me encanta enseñar matemáticas! ¿Qué tema no entiendes bien?",
        "¿Problemas con las matemáticas? ¡No te preocupes, estoy aquí para ayudarte!",
        "¡Claro! ¿Te gustaría repasar funciones, derivadas o algo más?",
        "¡Las matemáticas son fáciles con la práctica! ¿Con qué necesitas ayuda?",
        "¡Matemáticas, vamos allá! ¿Qué parte de la tarea te gustaría resolver?",
        "¡Estoy listo para ayudarte! ¿En qué problema de matemáticas estás trabado?",
        "¡Vamos a resolver esas matemáticas! ¿Qué fórmula necesitas entender?",
        "¡Claro! ¿Prefieres que te ayude con cálculo o álgebra?",
        "¡Vamos a darle a las matemáticas! ¿Con qué operación necesitas ayuda?",
        "¡Aquí estoy para ayudarte con las matemáticas! ¿En qué puedo asistirte?",
        "¡Estoy preparado! ¿Qué problema de matemáticas vamos a resolver?",
        "¡Con las matemáticas se aprende mucho! ¿Qué parte te gustaría repasar?",
        "¡Me encanta la matemática! ¿Qué pregunta específica necesitas resolver?",
        "¡Vamos a ello! ¿Qué problema matemático te gustaría que resolviera?",
        "¡Claro! ¿Estás haciendo fracciones, ecuaciones o algo más complicado?",
        "¡Me encanta ayudar con matemáticas! ¿Tienes alguna duda que te gustaría aclarar?",
        "¡Las matemáticas son fáciles cuando tienes la ayuda adecuada! ¿Qué parte necesitas repasar?",
        "¡Estoy aquí para ayudarte! ¿Con qué parte de matemáticas necesitas ayuda ahora?",
        "¡Las matemáticas no son tan difíciles! ¿Qué problema estás resolviendo?",
        "¡Claro! ¿Quieres resolver algunos problemas de álgebra o geometría?",
        "¡Estoy listo para ayudarte con matemáticas! ¿Qué operación o fórmula necesitas entender?",
        "¡Perfecto! ¿Con qué tema de matemáticas te gustaría comenzar?",
        "¡Las matemáticas son interesantes! ¿Qué fórmula no entiendes bien?",
        "¡Vamos a repasar matemáticas! ¿Qué problema específico te está costando?",
        "¡Matemáticas a la vista! ¿Qué tipo de problemas necesitas resolver?",
        "¡A resolver matemáticas! ¿Te gustaría que repasemos alguna ecuación?",
        "¡Me encantan las matemáticas! ¿Qué tema no entiendes bien?",
        "¡Perfecto! ¿Qué parte de las matemáticas te gustaría repasar ahora?",
        "¡Vamos a hacerlo! ¿Cuál es tu pregunta de matemáticas?",
        "¡Las matemáticas son fascinantes! ¿Qué tema necesitas resolver?",
        "¡Claro! ¿Quieres que te ayude con un problema específico de matemáticas?",
        "¡Vamos a trabajar en matemáticas! ¿Con qué parte necesitas ayuda?",
        "¡Estoy listo para ayudarte! ¿Qué tipo de matemáticas te gustaría revisar?",
        "¡Claro! ¿Tienes problemas con números o ecuaciones? ¡Te ayudo con gusto!",
        "¡Vamos a resolver matemáticas! ¿Con qué fórmula te gustaría empezar?",
        "¡Las matemáticas pueden ser fáciles! ¿Qué tipo de problema tienes?"
    ]);
}
        
const regexTarea = /ayúdame con una tarea|ayuda con tarea|necesito ayuda con una tarea|ayúdame con mi tarea|ayuda con mi tarea|tengo una tarea|me ayudas con la tarea|socorro con mi tarea|tengo que hacer una tarea|me ayudas con mi tarea por favor|necesito ayuda con la tarea|tengo que entregar una tarea|socorro, no entiendo la tarea|ayuda con la tarea por favor|no sé cómo hacer la tarea/i;

if (regexTarea.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Claro! ¿De qué trata tu tarea?",
        "¡Por supuesto! Cuéntame qué necesitas para tu tarea.",
        "¡Estoy aquí para ayudarte! ¿En qué parte de la tarea necesitas ayuda?",
        "¡Vamos a hacerlo! ¿Cuál es la tarea que necesitas resolver?",
        "¡Te ayudo con gusto! ¿De qué tema es la tarea?",
        "¡No hay problema! ¿En qué parte de la tarea necesitas asistencia?",
        "¡Con gusto! Dime de qué va la tarea y te ayudo.",
        "¡Claro! ¿Qué parte de la tarea te está costando más?",
        "¡Claro que sí! Cuéntame, ¿qué parte de la tarea necesitas ayuda?",
        "¡Perfecto! ¿En qué tema o pregunta de la tarea necesitas ayuda?",
        "¡Listo para ayudarte! ¿Cuál es el problema con la tarea?",
        "¡No te preocupes! ¿En qué puedo asistirte con la tarea?",
        "¡Ayuda en camino! ¿Qué tipo de tarea estás haciendo?",
        "¡Estoy aquí para ayudarte! ¿Qué parte de la tarea te gustaría revisar?",
        "¡Vamos a resolverlo! ¿Qué tienes que hacer en la tarea?",
        "¡Por supuesto! ¿En qué parte de la tarea necesitas ayuda?",
        "¡Dime cómo te ayudo! ¿Qué tienes que hacer en la tarea?",
        "¡Cuenta conmigo! ¿En qué parte de la tarea te atascaste?",
        "¡Vamos a solucionarlo! ¿Qué tipo de tarea es?",
        "¡Estoy aquí para ayudarte! ¿Cómo puedo asistirte con tu tarea?",
        "¡Con gusto! ¿Qué parte de la tarea no entiendes?",
        "¡Claro que sí! ¿De qué asignatura es la tarea?",
        "¡No hay problema! ¿Qué pregunta o sección de la tarea te está costando?",
        "¡Aquí estoy! ¿Qué parte de la tarea te gustaría que resolviera?",
        "¡Vamos a hacerlo juntos! ¿En qué consiste la tarea?",
        "¡Estoy listo para ayudarte! ¿Qué necesitas para tu tarea?",
        "¡Por supuesto! ¿Qué parte de la tarea necesitas comprender mejor?",
        "¡Claro! ¿Qué parte de la tarea te gustaría que revisemos juntos?",
        "¡No hay problema! ¿De qué materia es la tarea?",
        "¡Cuéntame más! ¿Qué parte de la tarea te está resultando difícil?",
        "¡Estoy para ayudarte! ¿Qué tema es el de tu tarea?",
        "¡Sin problema! ¿Qué parte de la tarea necesitas resolver?",
        "¡Con gusto! ¿En qué tema de la tarea te puedo ayudar?",
        "¡Estoy aquí para ayudarte! ¿Qué parte de la tarea te tiene bloqueado?",
        "¡Vamos a hacerlo! ¿De qué materia es la tarea y qué tienes que hacer?",
        "¡Listo para ayudarte! ¿Cuál es el objetivo de tu tarea?",
        "¡Por supuesto! ¿En qué pregunta de la tarea te puedo ayudar?",
        "¡Con gusto! ¿Qué parte de la tarea necesitas repasar?",
        "¡Claro! ¿En qué pregunta o parte de la tarea necesitas más explicación?",
        "¡Vamos a hacerlo! ¿Qué problema tienes con la tarea?",
        "¡Dime qué necesitas! Estoy aquí para ayudarte con la tarea.",
        "¡Todo bien! ¿Qué parte de la tarea necesitas ayuda?"
    ]);
}
        
const regexAyuda = /ayuda|necesito ayuda|necesito asistencia|socorro|auxilio/g;

if (regexAyuda.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Claro! ¿En qué te puedo ayudar?",
        "¡Estoy aquí para ayudarte! ¿Qué necesitas?",
        "¡Cuéntame! ¿Cómo te puedo asistir?",
        "¡Aquí estoy! ¿Qué necesitas que haga por ti?",
        "¡Por supuesto! ¿Qué problema necesitas resolver?",
        "¡No te preocupes! Estoy aquí para ayudarte, ¿en qué puedo asistirte?",
        "¡Ayuda en camino! ¿Qué necesitas?",
        "¡Por supuesto! ¿En qué necesitas ayuda?",
        "¡Estoy para ayudarte! ¿Qué necesitas que haga por ti?",
        "¡No te preocupes! Cuéntame, ¿qué necesitas saber?",
        "¡Por supuesto! ¿Qué tipo de ayuda necesitas?",
        "¡No hay problema! Cuéntame cómo puedo ayudarte.",
        "¡Aquí estoy para ayudarte! ¿Qué puedo hacer por ti?",
        "¡Cuéntame! ¿Cómo te puedo asistir hoy?",
        "¡Cuenta conmigo! ¿En qué te puedo ayudar?",
        "¡Estoy aquí para lo que necesites! ¿Qué te pasa?",
        "¡Claro! ¿En qué puedo ayudarte específicamente?",
        "¡Vamos a solucionarlo! ¿En qué te ayudo?",
        "¡Estoy listo para ayudarte! ¿Qué necesitas?",
        "¡No hay problema! Dime, ¿en qué necesitas ayuda?",
        "¡Claro! ¿Cómo puedo asistirte ahora?",
        "¡Estoy disponible para ayudarte! ¿Cómo te puedo asistir?",
        "¡Ayuda a la vista! ¿Qué te preocupa?",
        "¡Por supuesto! ¿Cómo te puedo ayudar?",
        "¡Aquí estoy para ti! ¿Qué necesitas?",
        "¡Estoy a tu disposición! ¿En qué puedo ayudarte?",
        "¡Todo en orden! ¿Cómo te ayudo?",
        "¡Aquí estoy para ayudarte con lo que necesites!",
        "¡Claro! Cuéntame, ¿qué te preocupa?",
        "¡No te preocupes! Estoy aquí para resolverlo, ¿qué necesitas?",
        "¡Ayuda a tu disposición! ¿Qué necesitas saber?",
        "¡Todo bien! ¿En qué te puedo ayudar?",
        "¡Listo para ayudarte! ¿Qué necesitas?",
        "¡Voy a ayudarte! ¿Cómo te puedo asistir?",
        "¡Estoy aquí para lo que necesites! Dime, ¿qué pasa?",
        "¡No te preocupes! ¿Qué problema necesitas solucionar?",
        "¡Ayuda al instante! ¿Qué puedo hacer por ti?",
        "¡No te preocupes! ¿En qué te ayudo?",
        "¡Dime lo que necesitas! Estoy aquí para ayudarte.",
        "¡Cuéntame, en qué te puedo asistir?",
        "¡Estoy aquí para ayudarte con lo que necesites!",
        "¡Vamos a resolverlo! ¿Qué necesitas?",
        "¡Listo para ayudarte! ¿Qué tipo de ayuda necesitas?",
        "¡Ayuda disponible! ¿En qué te puedo asistir?",
        "¡Estoy listo! Dime en qué puedo ayudarte.",
        "¡Estoy disponible para ti! ¿Cómo te ayudo?",
        "¡Por supuesto! ¿Qué te preocupa?",
        "¡Cuenta conmigo! ¿Qué necesitas saber?",
        "¡Aquí estoy! ¿En qué puedo ayudarte ahora?",
        "¡Sin problema! ¿Qué tipo de ayuda necesitas?",
        "¡Vamos a solucionarlo! ¿Qué pasa?",
        "¡Claro! Dime qué necesitas y lo solucionamos.",
        "¡A tu servicio! ¿En qué te ayudo hoy?",
        "¡Estoy aquí para ti! ¿Qué te preocupa?",
        "¡Ayuda al instante! ¿En qué puedo ayudarte?",
        "¡No te preocupes! Cuéntame, ¿qué necesitas?",
        "¡Ayuda disponible! ¿Cómo te asisto?",
        "¡Estoy aquí para ayudarte con lo que necesites!",
        "¡Vamos a solucionarlo! ¿Qué puedo hacer por ti?",
        "¡Vamos a resolverlo! ¿Qué necesitas saber?",
        "¡Aquí estoy! ¿Qué te preocupa?",
        "¡Dime qué necesitas! Estoy listo para ayudarte."
    ]);
}
        
const regexMultiplicar = /multiplicar|producto|multiplicación|por/g;

if (regexMultiplicar.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Vamos a multiplicar! ¿Qué números quieres multiplicar?",
        "¡Claro! Dime los números que quieres multiplicar.",
        "¡Multiplicación a la vista! ¿Qué números deseas multiplicar?",
        "¡Vamos a hacerlo! Dime los números y multiplicamos.",
        "¡Multiplicación en acción! ¿Qué números te gustaría multiplicar?",
        "¡Listo para multiplicar! Dime los números y lo resuelvo.",
        "¡Multiplicamos! ¿Qué números deseas multiplicar?",
        "¡Vamos con la multiplicación! Dime los números que deseas multiplicar.",
        "¡Multiplicación fácil! ¿Qué números tienes en mente?",
        "¡Listo para multiplicar! Dime los números y te ayudo.",
        "¡Vamos a hacer esa multiplicación! ¿Qué números tienes?",
        "¡Multiplicación en camino! Dime los números y lo calculamos.",
        "¡Dime los números! Multiplicamos ahora mismo.",
        "¡Vamos a multiplicar esos números! ¿Cuáles son?",
        "¡Multiplicación al instante! Dime los números y lo calculo.",
        "¡Multiplicamos rápido! Dime los números que deseas multiplicar.",
        "¡Vamos con esa multiplicación! Dime los números.",
        "¡Multiplicación lista! ¿Qué números quieres multiplicar?",
        "¡Multiplicación fácil! Dime los números y lo resuelvo.",
        "¡Listo para multiplicar! ¿Cuáles son los números?",
        "¡Vamos con la multiplicación! ¿Qué números te gustaría multiplicar?",
        "¡Multiplicación rápida! ¿Qué números deseas multiplicar?",
        "¡Vamos a hacer esa multiplicación! Dime los números.",
        "¡Multiplicación rápida! ¿Cuáles son los números?",
        "¡Multiplicamos ahora mismo! Dime los números.",
        "¡Multiplicación sin problema! ¿Qué números deseas multiplicar?",
        "¡Vamos con la multiplicación! ¿Qué números te gustaría saber?",
        "¡Multiplicación al instante! ¿Qué números tienes en mente?",
        "¡Dime los números! Multiplicamos ahora.",
        "¡Vamos con esa multiplicación! ¿Qué números deseas multiplicar?",
        "¡Multiplicación sin problemas! ¿Qué números tienes en mente?",
        "¡Multiplicamos ya! Dime los números y lo calculamos.",
        "¡Multiplicación rápida! ¿Qué números te gustaría multiplicar?",
        "¡Listo para multiplicar! ¿Qué números tienes?",
        "¿Multiplicamos? Dime los números y te ayudo.",
        "¡Multiplicación hecha fácil! ¿Qué números quieres multiplicar?",
        "Multiplicación al instante, ¿qué números te gustaría multiplicar?",
        "¡A multiplicar! Dime los números y lo resolvemos.",
        "¡Multiplicamos! ¿Cuáles son los números que quieres multiplicar?",
        "Vamos con la multiplicación, dime los números que te gustaría saber.",
        "Multiplicamos al toque, ¿qué números tienes en mente?",
        "Multiplicación al instante, dime los números y lo resolvemos.",
        "¡Multiplicamos rápido! Dime los números que deseas multiplicar.",
        "Multiplicación sin demora, ¿cuáles son los números?",
        "Dime los números y multiplicamos sin problema.",
        "¡Multiplicamos ahora! ¿Qué números tienes en mente?",
        "¡Vamos con esa multiplicación! Dime los números que necesitas.",
        "¡Multiplicamos rápido! ¿Qué números te gustaría multiplicar?",
        "¡Vamos con la multiplicación! Dime los números ahora.",
        "Multiplicación resuelta, ¿cuáles son los números?",
        "Multiplicamos lo que necesites, ¿qué números tienes?",
        "¡Multiplicación fácil! Dime los números y lo resolvemos rápido.",
        "¡Vamos a multiplicar eso! Dime los números y te ayudo.",
        "Multiplicamos rápido, ¿qué números tienes?",
        "¡Multiplicación al instante! Dime los números y los multiplicamos.",
        "¡Vamos con la multiplicación! ¿Qué números quieres saber?",
        "Multiplicamos de inmediato, ¿qué números tienes en mente?",
        "Dime los números y multiplicamos ahora mismo.",
        "¡Multiplicamos lo que quieras! ¿Cuáles son los números?",
        "Multiplicación resuelta al instante, dime los números.",
        "¡Multiplicamos ahora! Dime los números que quieres.",
        "¡Vamos con la multiplicación! ¿Qué números tienes en mente?",
        "¡Listo para multiplicar! Dime los números que deseas calcular.",
        "Multiplicamos fácil, ¿qué números tienes en mente?",
        "Multiplicación resuelta, ¿qué números te gustaría multiplicar?",
        "¡Multiplicamos ahora! Dime los números y te ayudo.",
        "¡Vamos a multiplicar! ¿Qué números tienes?"
    ]);
}
        
const regexRaizCuadrada = /raíz cuadrada|raíz|raiz cuadrada/g;

if (regexRaizCuadrada.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Vamos a calcular la raíz cuadrada! ¿Qué número deseas?",
        "¡Claro! Dime el número y te ayudo con la raíz cuadrada.",
        "¡Vamos con la raíz cuadrada! ¿Qué número quieres saber?",
        "¡A calcular la raíz cuadrada! ¿Qué número tienes?",
        "¡Listo para encontrar la raíz cuadrada! ¿Qué número deseas?",
        "¡Vamos a ello! Dime el número y te ayudo con la raíz cuadrada.",
        "¡Calculemos la raíz cuadrada! ¿Qué número te gustaría saber?",
        "¡Raíz cuadrada en acción! Dime el número que deseas calcular.",
        "¡Vamos con esa raíz cuadrada! ¿Qué número te gustaría saber?",
        "¡Raíz cuadrada fácil! ¿Qué número deseas calcular?",
        "¡Dime el número! Te ayudo a calcular la raíz cuadrada.",
        "¡Vamos con la raíz cuadrada! ¿Qué número tienes en mente?",
        "¡Raíz cuadrada a la vista! Dime el número y lo calculamos.",
        "¡A calcular la raíz cuadrada! ¿Qué número tienes para mí?",
        "¡Listo para resolver esa raíz cuadrada! ¿Qué número tienes?",
        "¡Raíz cuadrada fácil! Dime el número y lo resolvemos.",
        "¡Vamos a resolver la raíz cuadrada! ¿Qué número tienes?",
        "¡Raíz cuadrada a la vista! ¿Qué número quieres calcular?",
        "¡Vamos con la raíz cuadrada! Dime el número y te ayudo.",
        "¡Dime el número! Te ayudo con la raíz cuadrada.",
        "¡Vamos con la raíz cuadrada! ¿Qué número quieres saber?",
        "¡A resolver la raíz cuadrada! ¿Qué número tienes en mente?",
        "¡Raíz cuadrada en camino! Dime el número y lo resuelvo.",
        "¡Vamos a calcularla! ¿Qué número tienes para calcular la raíz cuadrada?",
        "¡Listo para encontrar la raíz cuadrada! ¿Qué número deseas saber?",
        "¡Calculemos esa raíz cuadrada! Dime el número.",
        "¡Raíz cuadrada al instante! ¿Qué número tienes?",
        "¡Vamos con la raíz cuadrada! Dime el número y lo resuelvo.",
        "¡Vamos a calcular la raíz cuadrada! ¿Qué número tienes en mente?",
        "¡Raíz cuadrada rápida! Dime el número y lo calculamos.",
        "¡Listo para calcular la raíz cuadrada! ¿Qué número deseas?",
        "¡Raíz cuadrada fácil! ¿Qué número te gustaría saber?",
        "¡Vamos con esa raíz cuadrada! Dime el número y te ayudo.",
        "¡Raíz cuadrada al instante! ¿Qué número quieres saber?",
        "¡Dime el número! Te ayudo a calcular la raíz cuadrada.",
        "¡Vamos a calcularla! Dime el número y lo resolvemos.",
        "¡Raíz cuadrada lista! ¿Qué número deseas saber?",
        "¡Listo para calcular la raíz cuadrada! Dime el número.",
        "¡Raíz cuadrada sin problema! Dime el número y te ayudo.",
        "¡Vamos con esa raíz cuadrada! ¿Qué número deseas?",
        "¡Raíz cuadrada fácil! Dime el número y lo calculo.",
        "¡A calcular la raíz cuadrada! ¿Qué número tienes en mente?",
        "¡Vamos a resolver esa raíz cuadrada! Dime el número.",
        "¡Listo para calcular la raíz cuadrada! ¿Qué número tienes?",
        "¡Raíz cuadrada rápida! ¿Qué número te gustaría saber?"
    ]);
}
        
const regexDividir = /dividir|división|divisiones/g;

if (regexDividir.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Claro! ¿Qué números deseas dividir?",
        "¡Vamos a dividir! Dime los números que quieres dividir.",
        "¡Listo para la división! ¿Qué números quieres que divida?",
        "¡A dividir! ¿Cuáles son los dos números que quieres dividir?",
        "¡Vamos a hacer esa división! Dime los números.",
        "¡Dividir es sencillo! ¿Qué números deseas dividir?",
        "¡Te ayudo con la división! ¿Cuáles son los números a dividir?",
        "¡División a la vista! ¿Qué números quieres dividir?",
        "¡Vamos a dividir! ¿Cuáles son los números que deseas dividir?",
        "¡Es hora de dividir! Dime los números.",
        "¡Dividir es fácil! ¿Qué dos números quieres dividir?",
        "¡Listo para dividir! ¿Qué números tienes para la división?",
        "¡Vamos a resolver esa división! ¿Qué números tienes?",
        "¡Dividir es sencillo! ¿Qué números quieres dividir?",
        "¡A dividir! Dime los números y lo haré por ti.",
        "¡División express! Dime los números y te ayudo.",
        "¡Vamos a hacer una división! ¿Cuáles son los números?",
        "¡Listo para la división! ¿Qué números te gustaría dividir?",
        "¡Dividir nunca fue tan fácil! ¿Qué números tienes en mente?",
        "¡A dividir! ¿Qué números quieres que divida?",
        "¡Vamos con la división! Dime los números.",
        "¡Es hora de dividir! ¿Cuáles son los números?",
        "¡Vamos a resolver esa división! Dime los dos números.",
        "¡Dividimos rápidamente! ¿Qué números deseas dividir?",
        "¡Vamos con la división! Dime los dos números y lo hago.",
        "¡Listo para dividir! ¿Qué números deseas dividir?",
        "¡La división es fácil! ¿Qué números deseas dividir?",
        "¡A dividir! Dime los números y lo resolvemos.",
        "¡Vamos a dividir esos números! ¿Cuáles son?",
        "¡La división es lo mío! ¿Qué números quieres dividir?",
        "¡Vamos a resolver esa división! Dime los números que deseas dividir.",
        "¡A dividir! ¿Qué dos números quieres que divida?",
        "¡Dividir es sencillo! ¿Qué números tienes?",
        "¡Vamos a hacerlo! ¿Qué números quieres dividir?",
        "¡A dividir! Dime los dos números y comenzamos.",
        "¡División en marcha! ¿Cuáles son los números?",
        "¡División lista! ¿Qué números deseas dividir?",
        "¡Vamos con la división! Dime los números y te ayudo.",
        "¡División express! ¿Cuáles son los números que quieres dividir?",
        "¡Vamos a hacer esa división! ¿Qué números tienes?",
        "¡Te ayudo con la división! ¿Cuáles son los números?",
        "¡Listo para dividir! ¿Qué números quieres que divida?",
        "¡División al instante! Dime los números y lo hago por ti.",
        "¡Vamos con la división! ¿Qué números tienes en mente?",
        "¡Vamos a dividir! ¿Qué números deseas dividir?",
        "¡División fácil! Dime los números y te ayudo.",
        "¡A dividir! ¿Cuáles son los dos números?",
        "¡Listo para la división! ¿Qué números te gustaría dividir?",
        "¡Vamos con la división! ¿Cuáles son los números?",
        "¡A dividir! ¿Qué dos números quieres que divida?",
        "¡Dividir es fácil! ¿Qué números tienes en mente?",
        "¡Vamos con esa división! ¿Qué números tienes?",
        "¡A dividir! Dime los números y comenzamos.",
        "¡División express! ¿Cuáles son los números que deseas dividir?",
        "¡Vamos a resolver esa división! ¿Qué números tienes en mente?",
        "¡División rápida! ¿Cuáles son los números?",
        "¡Listo para dividir! Dime los números y lo hago por ti.",
        "¡A dividir! Dime los números y lo haré al instante.",
        "¡División sin problemas! ¿Qué números deseas dividir?",
        "¡Vamos a dividir esos números! ¿Cuáles son?",
        "¡A dividir! ¿Qué dos números quieres dividir?",
        "¡Vamos a dividir! Dime los números y te ayudo con la división."
    ]);
}
        
const regexSuma = /suma|sumar|sumas/g;

if (regexSuma.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Sumemos! ¿Cuáles son los números que te gustaría sumar?",
        "¡Claro! ¿Qué números deseas que sume?",
        "¡A sumar! ¿Cuáles son los números para la suma?",
        "¡Vamos a sumar! Dime los números que quieres que sume.",
        "¡Listo para sumar! ¿Qué números te gustaría sumar?",
        "¡Sumar siempre es divertido! ¿Cuáles son los números?",
        "¡A sumar! ¿Qué dos números quieres sumar?",
        "¡Sumemos juntos! ¿Qué números deseas agregar?",
        "¡Claro! ¿Qué dos números quieres que añada?",
        "¡Suma! ¿Cuál es el primer número que quieres sumar?",
        "¡Genial! ¿Qué números quieres sumar hoy?",
        "¡Vamos a hacer una suma! Dime los números.",
        "¡Sumemos sin miedo! ¿Qué números te gustaría agregar?",
        "¡Empecemos con la suma! ¿Cuáles son los números?",
        "¡Sumemos los números! ¿Cuáles tienes en mente?",
        "¡A sumar! ¿Te gustaría sumar números grandes o pequeños?",
        "¡A sumar! ¿Qué números te gustaría que añadiera?",
        "¡Ya vamos a sumar! ¿Qué números te gustaría usar?",
        "¡Vamos a resolver esa suma! ¿Cuáles son los números?",
        "¡Listo para hacer magia con los números! ¿Qué quieres sumar?",
        "¡Sumemos esos números! ¿Qué tienes en mente?",
        "¡Dime los números y sumemos juntos!",
        "¡A sumar! ¿Te gustaría sumar dos números o más?",
        "¡Vamos a hacer cuentas! ¿Qué números quieres sumar?",
        "¡Te ayudo con la suma! Dime los números que deseas sumar.",
        "¡Listo para sumar! ¿Qué operación deseas realizar?",
        "¡Vamos a sumar como los grandes! ¿Cuáles son los números?",
        "¡Sumemos rápidamente! Dime los dos números.",
        "¡A sumar! ¿Qué números deseas que se sumen hoy?",
        "¡Suma sin miedo! Dime los números y comencemos.",
        "¡La suma es fácil! ¿Cuáles son los números a sumar?",
        "¡Suma divertida! ¿Qué números tienes para sumar?",
        "¡Suma express! ¿Cuáles son los números a sumar?",
        "¡Vamos a hacer magia con las sumas! ¿Qué números quieres sumar?",
        "¡Que empiece la suma! ¿Qué números tienes en mente?",
        "¡Suma rápida! Dime los números y te ayudo.",
        "¡Suma sin estrés! ¿Qué dos números quieres sumar?",
        "¡Vamos a sumar esos números! Dime cuáles son.",
        "¡Hazme saber los números y sumamos enseguida!",
        "¡Listo para sumar! Dime los números que quieres sumar.",
        "¡Te ayudaré a sumar! ¿Qué números quieres combinar?",
        "¡Dime los números! Vamos a hacer una suma rápida.",
        "¡Vamos a hacer las sumas! ¿Qué números te gustaría sumar?",
        "¡Sumemos como campeones! ¿Qué números tienes?",
        "¡Hagamos sumas! ¿Qué dos números quieres sumar?",
        "¡Sumar es fácil! ¿Qué números quieres que añada?",
        "¡Sumemos sin complicaciones! ¿Qué números te gustaría sumar?",
        "¡Hagámoslo rápido! ¿Qué dos números sumamos?",
        "¡Ya casi! ¿Cuáles son los números para sumar?",
        "¡Sumemos rápido y bien! ¿Qué números te gustaría sumar?",
        "¡Vamos a sumar esos números y a hacerlo bien!",
        "¡Te ayudo con esa suma! Dime los números.",
        "¡Listo para las sumas! ¿Qué números sumamos hoy?",
        "¡Sumemos como si no hubiera un mañana! ¿Qué números tienes?",
        "¡Te ayudo con cualquier suma! ¿Cuáles son los números?",
        "¡Vamos a hacerlo! ¿Qué dos números quieres sumar?",
        "¡Sumemos sin miedo! ¿Qué números te gustaría sumar?",
        "¡Hazme saber los números y empecemos con la suma!",
        "¡Sumemos rápidamente! ¿Qué números tienes en mente?",
        "¡A sumar! ¿Qué operación matemática te gustaría hacer?",
        "¡Sumemos sin problemas! ¿Qué números te gustaría sumar?",
        "¡Vamos a hacerlo! ¿Qué dos números sumamos?",
        "¡Las matemáticas pueden ser divertidas! ¿Cuáles son los números?",
        "¡Dime los números y haré la suma por ti!",
        "¡Dime los números que te gustaría sumar y comenzamos!",
        "¡Vamos a sumar! ¿Cuáles son los números que te gustaría agregar?",
        "¡Sumemos! ¿Qué números tienes para sumar?",
        "¡Es hora de sumar! ¿Cuáles son los números que quieres?",
        "¡Vamos con esa suma! ¿Qué números tienes?",
        "¡A sumar sin miedo! ¿Qué dos números sumamos?",
        "¡Sumemos rápidamente! ¿Cuáles son los números que tienes?",
        "¡Dime los números y empezamos a sumar juntos!",
        "¡Vamos a sumar sin complicaciones! ¿Qué dos números quieres?",
        "¡Hagamos una suma rápida! ¿Qué números te gustaría sumar?"
    ]);
}

const regexGracias = /gracias/g;

if (regexGracias.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡De nada! ¿En qué más te puedo ayudar?",
        "¡Con gusto! Si necesitas algo más, no dudes en pedírmelo.",
        "¡Un placer! Estoy aquí para lo que necesites.",
        "¡No hay de qué! Si tienes más preguntas, estaré encantado de ayudarte.",
        "¡Es un placer ayudarte! Si hay algo más en lo que te pueda asistir, avísame.",
        "¡Para eso estoy! Si te surge algo más, no dudes en preguntarme.",
        "¡Qué bueno que te haya servido! Si necesitas algo más, ya sabes dónde encontrarme.",
        "¡Me alegra haber podido ayudarte! Si necesitas más, solo dime.",
        "¡Con mucho gusto! Si tienes más dudas, estaré encantado de ayudarte.",
        "¡Es un placer! Si alguna vez necesitas algo más, estaré aquí para ti.",
        "¡Qué alegría que te haya servido! Si en algún momento necesitas más, solo avísame.",
        "¡Es lo menos que puedo hacer! Si hay algo más que necesites, solo pídelo.",
        "¡De nada! Cualquier cosa, no dudes en decírmelo.",
        "¡Qué bien que te haya sido útil! Si hay algo más, no dudes en preguntarme.",
        "¡No hay de qué! Si necesitas más ayuda, siempre estaré aquí.",
        "¡Siempre es un placer! Si tienes más preguntas, avísame.",
        "¡Me alegra haber sido de ayuda! Si te surge alguna duda más, estaré aquí.",
        "¡Qué bueno que te sirvió! Si en el futuro necesitas algo, no dudes en preguntar.",
        "¡Con mucho gusto! Si alguna vez necesitas algo más, estaré disponible.",
        "¡Es un placer! Si en algún momento necesitas más ayuda, avísame.",
        "¡No hay de qué! Si te surge alguna nueva pregunta, no dudes en decirme.",
        "¡Me alegra poder ayudarte! Si en algún momento necesitas algo, avísame.",
        "¡De nada! Estoy siempre disponible para lo que necesites."
    ]);
}

const regexBien = /bien/g;

if (regexBien.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Me alegra saber que todo está bien! ¿En qué más te puedo ayudar?",
        "¡Qué bueno que todo va bien! ¿Hay algo más en lo que te pueda asistir?",
        "¡Me encanta escuchar eso! Si necesitas algo más, no dudes en pedírmelo.",
        "¡Qué excelente! ¿Te gustaría saber más sobre algún tema?",
        "¡Qué bueno que todo esté bien! Si tienes alguna otra pregunta, estaré aquí.",
        "¡Perfecto! ¿Hay algo más que te interese saber?",
        "¡Me alegra escuchar eso! Si necesitas más ayuda, estoy a tu disposición.",
        "¡Genial! Si te surge alguna duda, aquí estaré.",
        "¡Qué bien que todo va bien! Si necesitas más información, no dudes en preguntarme.",
        "¡Qué bueno! Si necesitas algo más, no dudes en pedírmelo.",
        "¡Me alegra saber que todo está bien! Si en algún momento necesitas ayuda, avísame.",
        "¡Estupendo! Si tienes alguna otra consulta, estaré aquí para ayudarte.",
        "¡Perfecto! Si necesitas algo más, solo avísame.",
        "¡Genial que todo esté bien! Si te interesa saber algo más, estoy aquí para ayudarte.",
        "¡Qué bien que todo vaya bien! Si te surge alguna duda, no dudes en decirme.",
        "¡Me alegra mucho saber que todo está bien! Si necesitas más ayuda, estoy aquí.",
        "¡Excelente! Si alguna vez necesitas algo, estaré aquí para ayudarte.",
        "¡Perfecto! Si te gustaría saber algo más, no dudes en preguntarme.",
        "¡Eso es genial! Si tienes alguna otra duda, estoy aquí para ayudarte.",
        "¡Qué bien! Si en algún momento necesitas algo, estaré disponible.",
        "¡Me alegra saber que todo va bien! Si necesitas algo más, solo avísame.",
        "¡Qué alegría escuchar eso! Si necesitas más ayuda, aquí estaré.",
        "¡Eso me alegra mucho! Si en algún momento necesitas algo más, no dudes en preguntarme.",
        "¡Qué excelente noticia! Si necesitas algo más, no dudes en decírmelo."
    ]);
}

 const regexHtmlCode = /generame un código de html|generar un código de html|genera un código de html|generar un código|código de html|crear una página web|ejemplo código en html|código básico de html|código de ejemplo|cómo crear página web|html básico|sintaxis html|cómo una empezar página web|hacer una página web html|estructura básica html|plantilla de html|necesito un código de html|crear un sitio web en html/g;

if (regexHtmlCode.test(mensajeLower)) {
    return this.respuestaAleatoria([
        `Aquí tienes un código básico de HTML que puedes usar como base para tu página web.
        <div style="background-color: #222; color: #fff; padding: 10px; border-radius: 8px; font-family: monospace; font-size: 12px; width: 100%; max-width: 400px; margin: 10px 0; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
            <pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Mi Página Web&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;Mi Página Web&lt;/h1&gt;
  &lt;/header&gt;
  &lt;!-- Resto del contenido de tu página --&gt;
&lt;/body&gt;
&lt;/html&gt;
            </pre>
        </div>`
    ]);
}

      const regexHola = /hola|hey|qué tal|qué onda|qué hay de nuevo|cómo estás|cómo va todo|cómo te encuentras|qué tal todo|cómo va la vida|todo tranquilo|cuánto tiempo sin verte|todo bajo control|todo bien contigo|todo en orden/i;

if (regexHola.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Hola! ¿Cómo estás?",
        "¡Hola! ¿Qué tal todo?",
        "¡Hola! ¿En qué puedo ayudarte hoy?",
        "¡Hey! ¿Cómo va todo?",
        "¡Hola! ¿Qué tal tu día?",
        "¡Hola! ¿Qué hay de nuevo?",
        "¡Hola! ¿Cómo te encuentras?",
        "¡Hey, qué tal! ¿Todo bien?",
        "¡Hola! ¿Cómo va todo por ahí?",
        "¡Hola! ¿Qué onda?",
        "¡Hola! ¿Cómo puedo asistirte hoy?",
        "¡Qué onda! ¿Cómo estás?",
        "¡Hola! ¿Cómo va la vida?",
        "¡Hola! ¿Qué tal todo por allá?",
        "¡Hola! ¿Todo tranquilo?",
        "¡Hola! Qué alegría verte por aquí.",
        "¡Hola! ¿Todo bien contigo?",
        "¡Hola! ¿Cómo puedo ayudarte hoy?",
        "¡Hola! ¿Qué tal el día hoy?",
        "¡Hola! ¿Cómo te sientes?",
        "¡Hola! ¿Cómo va todo en tu mundo?",
        "¡Hola! ¿Qué tal tu jornada?",
        "¡Hola! ¿Cómo ha estado todo?",
        "¡Hola! ¡Cuánto tiempo sin verte!",
        "¡Hola! ¿Cómo va la vida?",
        "¡Hola! ¿Qué has estado haciendo?",
        "¡Hola! ¡Qué alegría saludarte!",
        "¡Hola! ¿Todo en orden?",
        "¡Hola! ¿Todo bajo control?",
        "¡Hola! ¿Cómo está todo por tu parte?",
        "¡Hola! ¿Qué tal las novedades?",
        "¡Hola! ¿Cómo te va con todo?",
        "¡Hola! ¿Cómo ha ido tu día?",
        "¡Hola! ¿En qué andas hoy?",
        "¡Hola! ¿Qué tal la semana?",
        "¡Hola! ¿Algún plan para hoy?",
        "¡Hola! ¿Cómo va el día?",
        "¡Hola! ¿Qué tal todo por allí?",
        "¡Hola! ¿Te va bien el día?",
        "¡Hola! ¿Qué tal todo contigo?",
        "¡Hola! ¿Cómo va tu día?",
        "¡Hola! ¿Qué tal la vida?",
        "¡Hola! ¿Cómo te va?",
        "¡Hola! ¿Te va bien todo?",
        "¡Hola! ¿Todo tranquilo por tu lado?",
        "¡Hola! ¿Qué tal el ambiente por allá?",
        "¡Hola! ¿Cómo estás hoy?",
        "¡Hola! ¿Todo bien por tu parte?",
        "¡Hola! ¿En qué puedo ayudarte hoy?",
        "¡Hola! ¿Cómo está todo por allá?",
        "¡Hola! ¿Todo en orden por aquí?"
    ]);
}

 const regexSi = /si|genial|perfecto|qué bien|excelente|me alegra|estupendo|fantástico|increíble|maravilla|emocionante|guay|suena fenomenal|estoy de acuerdo/i;

if (regexSi.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Genial! ¿En qué más puedo ayudarte?",
        "¡Qué bien! ¿Qué más puedo hacer por ti?",
        "¡Perfecto! ¿Hay algo más que te interese?",
        "¡Me alegra que sí! ¿Qué sigue?",
        "¡Excelente! ¿Algo más en lo que pueda ayudarte?",
        "¡Qué bueno! ¿Tienes alguna otra pregunta?",
        "¡Me encanta saber que sí! ¿Qué más quieres saber?",
        "¡Eso suena genial! ¿Cómo más te puedo ayudar?",
        "¡Qué alegría escuchar eso! ¿Alguna otra consulta?",
        "¡Qué emocionante! ¿Te gustaría saber más sobre algo?",
        "¡Eso es estupendo! ¿Qué más te gustaría hacer?",
        "¡Qué alegría! ¿Te gustaría que te ayudara con otra cosa?",
        "¡Perfecto! ¿Tienes alguna otra duda o pregunta?",
        "¡Qué bueno que sí! ¿En qué más te puedo asistir?",
        "¡Me encanta escuchar eso! ¿Qué más te interesa saber?",
        "¡Fantástico! ¿Qué más puedo hacer por ti?",
        "¡Excelente elección! ¿Te gustaría algo más?",
        "¡Qué bien! ¿Hay algo más que quieras explorar?",
        "¡Me alegra mucho! ¿Te gustaría recibir más información sobre algo?",
        "¡Estupendo! ¿Puedo ayudarte con algo más?",
        "¡Qué bien que estés de acuerdo! ¿Hay algo más que quieras preguntar?",
        "¡Qué guay! ¿Tienes alguna otra inquietud?",
        "¡Me alegra saber que sí! ¿Quieres saber más sobre algún tema?",
        "¡Increíble! ¿Qué más te gustaría saber?",
        "¡Perfecto! ¿Te gustaría hacer algo más?",
        "¡Eso es genial! ¿En qué más te puedo ayudar?",
        "¡Qué emoción! ¿Te gustaría aprender más sobre algún tema?",
        "¡Qué maravilla! ¿Te interesa saber algo más?",
        "¡Eso suena fenomenal! ¿Qué más puedo hacer por ti?",
        "¡Me alegra mucho! ¿Te gustaría obtener más detalles sobre algo?",
        "¡Qué bueno que sí! ¿Tienes alguna otra duda por resolver?"
    ]);
}

const regexNo = /no|nada|ningún|ninguna|nunca|no me interesa|no quiero|no gracias/i;

if (regexNo.test(mensajeLower)) {
    return this.respuestaAleatoria([
        "¡Vaya! Si cambias de opinión, estaré aquí.",
        "Entendido, si necesitas algo más, avísame.",
        "¡Todo bien! Si necesitas ayuda más tarde, solo dime.",
        "No hay problema, si alguna vez necesitas algo, avísame.",
        "¡Vale! Si alguna vez necesitas ayuda, estaré listo.",
        "¡De acuerdo! Si necesitas algo más, me avisas.",
        "No hay inconveniente, si necesitas algo, dímelo.",
        "¡Todo tranquilo! Si necesitas ayuda, pídela cuando quieras.",
        "No pasa nada, estaré aquí cuando cambies de opinión.",
        "¡Está bien! Si necesitas algo, aquí estaré.",
        "Entendido, si cambias de idea, me avisas.",
        "No hay problema, si necesitas ayuda, me avisas.",
        "¡De acuerdo! Si necesitas algo, estaré listo para ayudarte.",
        "¡Todo tranquilo! Si surge alguna duda, dímelo.",
        "No te preocupes, estaré aquí cuando me necesites.",
        "¡Lo entiendo! Si necesitas algo, estaré disponible.",
        "No te preocupes, si necesitas algo en el futuro, me avisas.",
        "¡Vale! Si necesitas ayuda más tarde, me avisas.",
        "¡Está todo bien! Si necesitas algo, estaré aquí para ti.",
        "No hay problema, si necesitas ayuda, avísame.",
        "¡No te preocupes! Si en algún momento necesitas algo, solo dime.",
        "Está bien, si más tarde necesitas algo, estaré disponible.",
        "¡No pasa nada! Si surge algo, dímelo.",
        "¡Está bien! Si cambias de idea, puedes contar conmigo.",
        "No hay lío, si necesitas algo, estaré por aquí.",
        "¡Entiendo perfectamente! Si necesitas ayuda, aquí estaré.",
        "¡De acuerdo! Si necesitas algo, me avisas."
    ]);
}

        return this.respuestaNoEntendida();
    }

    operar(mensaje, operador) {
        const numeros = mensaje.match(/(\d+(\.\d+)?)/g); 
        if (numeros && numeros.length === 2) {
            const num1 = parseFloat(numeros[0]);
            const num2 = parseFloat(numeros[1]);

            switch (operador) {
                case '+':
                    return `El resultado de la suma es: ${num1 + num2}`;
                case '-':
                    return `El resultado de la resta es: ${num1 - num2}`;
                case '*':
                    return `El resultado de la multiplicación es: ${num1 * num2}`;
                case '/':
                    return num2 !== 0 ? `El resultado de la división es: ${num1 / num2}` : "No se puede dividir entre cero.";
                default:
                    return "Operación no soportada.";
            }
        } else {
            return "Por favor, proporciona dos números para la operación.";
        }
    }
    
    operarRaizCuadrada(mensaje) {
        const numero = parseFloat(mensaje.match(/(\d+(\.\d+)?)/));
        if (numero && !isNaN(numero)) {
            return `La raíz cuadrada de ${numero} es: ${Math.sqrt(numero)}`;
        } else {
            return "Por favor, proporciona un número para calcular la raíz cuadrada.";
        }
    }

    obtenerHoraActual() {
        const fecha = new Date();
        let hora = fecha.getHours();
        let minuto = fecha.getMinutes();
        let ampm = hora >= 12 ? 'PM' : 'AM';
        hora = hora % 12;
        hora = hora ? hora : 12; 
        minuto = minuto < 10 ? '0' + minuto : minuto;
        return `Hora: ${hora}:${minuto} ${ampm}`;
    }

    obtenerDiaActual() {
        const fecha = new Date();
        const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
        const dia = dias[fecha.getDay()];
        return `Día: ${dia}`;
    }

    obtenerAñoActual() {
        const fecha = new Date();
        return `Año: ${fecha.getFullYear()}`;
    }

    obtenerFechaActual() {
        const fecha = new Date();
        const diaDelMes = fecha.getDate();
        const mes = fecha.getMonth() + 1;
        const año = fecha.getFullYear();
        return `Fecha: ${diaDelMes}/${mes}/${año}`;
    }

    respuestaNoEntendida() {
    return this.respuestaAleatoria([
        "Lo siento, no entendí eso. ¿Puedes intentar de nuevo?",
        "No estoy seguro de lo que quisiste decir. ¿Puedes aclararlo?",
        "Lo siento, no te entendí bien. ¿Podrías decirlo de otra forma?",
        "Hmm, no estoy seguro de haber entendido tu mensaje. ¿Podrías repetirlo?",
        "Perdón, pero no comprendo eso. ¿Podrías explicarlo de nuevo?",
        "No estoy seguro de lo que estás diciendo. ¿Podrías intentarlo de nuevo?",
        "No pude captar eso. ¿Puedes escribirlo de otra manera?",
        "Lo siento, no entendí lo que querías decir. ¿Podrías aclararlo?",
        "Eso no lo entiendo bien, ¿puedes reformularlo?",
        "No estoy completamente seguro de lo que quieres decir, ¿puedes intentarlo otra vez?",
        "Perdón, pero no entendí bien. ¿Podrías intentar decirlo de otra forma?",
        "No lo pillé, ¿puedes volver a intentarlo?",
        "Lo siento, pero eso no lo entendí. ¿Podrías explicarlo un poco más?",
        "Hmm, no estoy seguro de haber comprendido. ¿Puedes intentarlo otra vez?",
        "Perdón, ¿puedes explicarme de nuevo?",
        "No lo entendí bien, ¿puedes decirlo de otra manera?",
        "Eso me confunde, ¿puedes intentar explicarlo de otra forma?",
        "No estoy seguro de haberlo entendido, ¿puedes aclararlo?",
        "Hmm, no pude captar eso. ¿Me lo puedes decir otra vez?",
        "Perdón, no estoy seguro de lo que estás tratando de decir. ¿Puedes intentarlo de nuevo?",
        "No entendí muy bien, ¿puedes decirlo de otra forma?",
        "Lo siento, no lo pillé. ¿Puedes ser más claro?",
        "No entendí lo que dijiste, ¿puedes intentarlo nuevamente?",
        "Lo siento, no pude entender eso. ¿Puedes explicarlo más claro?",
        "No estoy seguro de qué quieres decir. ¿Puedes repetirlo?",
        "Eso no lo entiendo, ¿me lo puedes decir de otra forma?",
        "Hmm, eso no lo comprendo, ¿puedes aclararlo?",
        "Perdón, no capté lo que intentabas decir. ¿Me lo puedes explicar de nuevo?",
        "Lo siento, no entiendo bien. ¿Podrías repetirlo?",
        "Eso no lo entendí, ¿puedes intentarlo otra vez?",
        "Hmm, no estoy seguro de que lo haya entendido bien. ¿Podrías ser más claro?",
        "Perdón, pero eso no lo comprendo. ¿Puedes intentar de nuevo?",
        "Lo siento, no entendí lo que dijiste. ¿Puedes reformularlo?",
        "Eso me confunde un poco. ¿Puedes volver a intentarlo?",
        "No pude captar eso, ¿puedes intentarlo otra vez?",
        "Perdón, no entendí bien. ¿Podrías explicarlo de nuevo?",
        "No estoy seguro de lo que quieres decir, ¿puedes repetirlo de alguna manera diferente?",
        "No entendí tu mensaje. ¿Podrías intentar explicarlo de nuevo?",
        "Lo siento, pero no lo entendí. ¿Puedes intentarlo otra vez?",
        "Hmm, no lo pillé, ¿puedes ser más específico?",
        "Perdón, no sé a qué te refieres. ¿Puedes aclararlo?",
        "Eso no tiene sentido para mí. ¿Puedes intentarlo de otra forma?",
        "Lo siento, no entendí lo que dijiste. ¿Me lo puedes explicar de otra manera?"
    ]);
}

    respuestaAleatoria(respuestas) {
        return respuestas[Math.floor(Math.random() * respuestas.length)];
    }

    agregarMensaje(tipo, mensaje) {
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('flex', 'items-start', 'mb-4', 'message-animate');

    const esUsuario = tipo === 'usuario';
    divMensaje.innerHTML = `
        ${esUsuario ? '' : `
            <div class="flex items-center">
                <img src="https://cdn-bytesdex.github.io/resources/multimedia/imagen/bot.jpg" alt="Avatar IA" class="w-10 h-10 rounded-full mr-3 border-2 border-gray-500">
            </div>
        `}
        <div class="${esUsuario ? 'ml-auto bg-blue-500 text-white' : 'bg-white'} mensaje-burbuja">
            <p class="mensaje-texto">${mensaje}</p>
        </div>
    `;

    this.chatContainer.appendChild(divMensaje);
    this.scrollHaciaAbajo();

    if (!esUsuario) {
        this.animarEscritura(divMensaje.querySelector('.mensaje-texto'));
    }
}

animarEscritura(elemento) {
    const texto = elemento.innerText;
    elemento.innerText = '';
    let index = 0;

    const escribirLetra = () => {
        if (index < texto.length) {
            const letra = texto.charAt(index);

            if (letra === ' ') {
                elemento.innerText += '\u00A0'; 
            } else {
                elemento.innerText += letra;
            }

            index++;
            setTimeout(escribirLetra, 50);
        }
    };

    escribirLetra();
}

mostrarIndicadorEscritura() {
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('flex', 'items-start', 'mb-4', 'message-animate', 'escribiendo');

    divMensaje.innerHTML = `
        <div class="flex items-center">
            <img src="https://cdn-bytesdex.github.io/resources/multimedia/imagen/bot.jpg" alt="Avatar IA" class="w-10 h-10 rounded-full mr-3 border-2 border-gray-500">
            <div class="typing-bubble">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
    `;

    this.chatContainer.appendChild(divMensaje);
    this.scrollHaciaAbajo();
}

ocultarIndicadorEscritura() {
    const indicador = this.chatContainer.querySelector('.escribiendo');
    if (indicador) {
        indicador.remove();
    }
}

    scrollHaciaAbajo() {
        this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new AsistenteInteligente();
});