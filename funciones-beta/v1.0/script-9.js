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

        if (mensajeLower.includes('sumar') || mensajeLower.includes('+')) {
            return this.operar(mensaje, '+');
        } else if (mensajeLower.includes('restar') || mensajeLower.includes('-')) {
            return this.operar(mensaje, '-');
        } else if (mensajeLower.includes('multiplicar') || mensajeLower.includes('*')) {
            return this.operar(mensaje, '*');
        } else if (mensajeLower.includes('dividir') || mensajeLower.includes('/')) {
            return this.operar(mensaje, '/');
        } else if (mensajeLower.includes('raíz cuadrada')) {
            return this.operarRaizCuadrada(mensaje);
        }
        
        else if (mensajeLower.includes('hora') || mensajeLower.includes('hora actual')) {
            return this.obtenerHoraActual();
        } else if (mensajeLower.includes('día') || mensajeLower.includes('día de hoy')) {
            return this.obtenerDiaActual();
        } else if (mensajeLower.includes('año') || mensajeLower.includes('año actual')) {
            return this.obtenerAñoActual();
        } else if (mensajeLower.includes('fecha') || mensajeLower.includes('fecha de hoy')) {
            return this.obtenerFechaActual();
        }
        
if (mensajeLower.startsWith('>')) {
    const comando = mensajeLower.trim();

    if (comando.startsWith('>aprender') || comando.startsWith('> aprender')) {
        const partes = comando.slice(10).split('|');
        if (partes.length === 2) {
            const palabraClave = partes[0].trim();
            const respuesta = partes[1].trim();

            if (palabraClave && respuesta) {
                localStorage.setItem(palabraClave, respuesta);
                return `¡He aprendido una nueva palabra! Puedes probar escribiendo: "${palabraClave}"`;
            } else {
                return "Asegúrate de incluir tanto la palabra clave como la respuesta, separadas por un '|'.<br><br> Ejemplo:<br><br> > aprender hola | ¡Hola, cómo estás!";
            }
        } else {
            return "Formato incorrecto. Usa el formato:<br><br> > aprender palabra | respuesta.<br><br> Ejemplo:<br><br> > aprender hola | ¡Hola, cómo estás!";
        }
    } 
    
    else if (comando.startsWith('>borrar') || comando.startsWith('> borrar')) {
        const palabraClave = comando.slice(8).trim();
        if (palabraClave) {
            if (localStorage.getItem(palabraClave)) {
                localStorage.removeItem(palabraClave);
                return `La palabra "${palabraClave}" ha sido eliminada de mi memoria.`;
            } else {
                return `No conozco la palabra "${palabraClave}".`;
            }
        } else {
            localStorage.clear();
            return "Toda mi memoria ha sido borrada.";
        }
    } 

    else if (comando === '>comandos' || comando === '> comandos') {
        return `Estos son los comandos que puedes usar<br><br>
1. > aprender palabra | respuesta - Enseña al bot una nueva palabra y su respuesta.<br><br>
2. > borrar palabra - Borra una palabra específica de mi memoria.<br><br>
3. > borrar - Borra toda la memoria del bot.<br><br>
4. > memoria - Muestra todas las palabras aprendidas y sus respuestas.<br><br>
5. > comandos - Muestra esta lista de comandos.<br><br>
Nota: Si me enseñas una palabra con una respuesta predefinida, esta será reemplazada. Esto podría afectar mi comportamiento si la palabra ya está en mi código. Usa palabras únicas para evitar sobrescribir respuestas importantes.`;
    } 
    
    else if (comando === '>memoria' || comando === '> memoria') {
        const palabrasGuardadas = Object.keys(localStorage);
        if (palabrasGuardadas.length > 0) {
            let lista = "Estas son las palabras que he aprendido:<br><br>";
            palabrasGuardadas.forEach((palabra) => {
                lista += `- ${palabra}: ${localStorage.getItem(palabra)}<br>`;
            });
            return lista;
        } else {
            return "No he aprendido ninguna palabra todavía.";
        }
    }

    else {
        return "No reconozco ese comando. Usa:<br><br> > comandos - para ver la lista de comandos disponibles.";
    }
} 

else if (localStorage.getItem(mensajeLower)) {
    return localStorage.getItem(mensajeLower);
}
        
        else if (
    mensajeLower.includes('puedes generar imagenes') || 
    mensajeLower.includes('puedes generar imágenes') || 
    mensajeLower.includes('puedes hacer imágenes') || 
    mensajeLower.includes('puedes crear imágenes') || 
    mensajeLower.includes('hacer imágenes') || 
    mensajeLower.includes('crear imágenes') || 
    mensajeLower.includes('generar imágenes')
) {
    return this.respuestaAleatoria([
        "Lamentablemente, no puedo generar imágenes. Mi función principal es proporcionar información y respuestas basadas en texto. Si necesitas ayuda con algo más, estaré encantado de asistirte.",
        
        "Por ahora, no tengo la capacidad de generar imágenes. Mi programación está centrada en el procesamiento de texto y en ofrecer respuestas e información útil. Si tienes alguna otra pregunta, estaré encantado de ayudar.",
        
        "No, no puedo generar imágenes. Mi función está limitada a proporcionar respuestas en formato de texto. Si necesitas información o ayuda en otro tema, estaré aquí para ayudarte.",
        
        "Lamentablemente, no puedo crear ni generar imágenes. Sin embargo, puedo proporcionarte información detallada en texto. Si tienes más preguntas, estaré encantado de ayudarte.",
        
        "No tengo la capacidad de crear imágenes. Mi función se limita a procesar y generar respuestas en texto. Si hay algo más en lo que pueda ayudarte, no dudes en decirme.",
        
        "Actualmente no puedo generar imágenes, pero puedo ofrecerte información escrita sobre una gran variedad de temas. Si necesitas alguna consulta o aclaración, no dudes en preguntar.",
        
        "No tengo la capacidad de generar imágenes, solo puedo ofrecerte respuestas en texto. Si necesitas asistencia sobre algún tema o más detalles, estaré disponible para ayudarte.",
        
        "Lo siento, no puedo generar imágenes. Mi programación está enfocada en brindarte respuestas basadas en texto. Si necesitas información adicional o tienes alguna otra pregunta, aquí estoy para ayudarte.",
        
        "Desafortunadamente, no puedo generar imágenes. Pero si tienes alguna pregunta o necesitas información detallada, puedo ayudarte con texto. ¿En qué más puedo asistirte?",
        
        "No, no tengo la capacidad de crear imágenes. Mi tarea es proporcionarte respuestas y datos en texto. Si tienes más dudas o consultas, estaré encantado de ayudarte."
    ]);
}
        
        else if (
    mensajeLower.includes('como se hace la azúcar') || 
    mensajeLower.includes('como se hace el azúcar') || 
    mensajeLower.includes('producción azúcar caña') || 
    mensajeLower.includes('cómo se produce el azúcar') || 
    mensajeLower.includes('fabricación azúcar caña') || 
    mensajeLower.includes('proceso azúcar caña') || 
    mensajeLower.includes('extracción azúcar caña') || 
    mensajeLower.includes('cómo se extrae el azúcar') || 
    mensajeLower.includes('caña azúcar') || 
    mensajeLower.includes('procesamiento azúcar caña') || 
    mensajeLower.includes('refinación azúcar') || 
    mensajeLower.includes('etapas producción azúcar')
) {
    const respuestasAzucarCaña = [
        "El azúcar que consumimos generalmente proviene de dos fuentes: la caña de azúcar y la remolacha azucarera. En el caso de la caña de azúcar, el proceso comienza con la cosecha de las cañas maduras, que luego son trituradas para extraer el jugo. Este jugo es lo que se utilizará para producir el azúcar.<br><br>Después de extraer el jugo, se hierve y se filtra para eliminar impurezas antes de ser cristalizado.",
        
        "La producción de azúcar a partir de la caña de azúcar comienza con la cosecha. Las cañas se cortan y se transportan a un ingenio azucarero donde se muelen para extraer el jugo. Este jugo crudo es sometido a un proceso de evaporación donde se elimina la mayor parte del agua.<br><br>Después, el jarabe resultante se somete a un proceso de cristalización, que es cuando se obtiene el azúcar en forma de cristales.",
        
        "El proceso para producir azúcar de caña comienza con la molienda de las cañas. Después de la molienda, el jugo extraído se purifica y se hierve para eliminar los componentes no deseados.<br><br>El jarabe resultante se cristaliza y se forma el azúcar en cristales. Una vez cristalizado, el azúcar se seca para obtener el producto final que usamos en nuestra cocina.",
        
        "Una vez que el jugo de caña es extraído y purificado, se lleva a una serie de etapas de evaporación y concentración. A través de este proceso, el agua se va eliminando gradualmente, hasta que el jarabe tiene una consistencia espesa.<br><br>Este jarabe es luego enfriado y sometido a un proceso de cristalización donde se forman los cristales de azúcar. El azúcar crudo se centrifuga para separar los cristales del melaza.",
        
        "La caña de azúcar es un cultivo tropical, y el azúcar que produce se obtiene tras un proceso que empieza con la trituración de la caña. El jugo extraído de las cañas se filtra y se calienta en grandes calderas.<br><br>Este jugo se convierte en un jarabe denso que se enfría para cristalizar el azúcar. Los cristales se separan de la melaza, un subproducto de este proceso.",
        
        "El azúcar de caña es procesado en varios pasos. Primero, las cañas se muelen para obtener el jugo. Luego, este jugo se somete a calor para eliminar el agua, lo que crea un jarabe espeso. Este jarabe es lo que finalmente se cristaliza y se convierte en azúcar.<br><br>Una vez que los cristales de azúcar se separan, se secan y se empacan para su distribución.",
        
        "El jugo de caña extraído es tratado con cal y otros productos químicos para purificarlo. Después de este tratamiento, el jugo se hierve a altas temperaturas para evaporar el agua, y lo que queda es un jarabe espeso.<br><br>Este jarabe se enfría y, al ser centrifugado, se separan los cristales de azúcar de la melaza. Los cristales de azúcar se secan y están listos para ser empaquetados.",
        
        "Una vez que el azúcar es cristalizado, el producto obtenido todavía contiene algunas impurezas y melaza. Para obtener azúcar más refinada, se somete a un proceso de lavado y refinación.<br><br>Este proceso incluye una serie de pasos de disolución y filtración para eliminar cualquier resto de color o impurezas, resultando en azúcar blanca y pura.",
        
        "El azúcar de caña crudo, también conocido como azúcar moreno, se obtiene de un proceso menos refinado y contiene más melaza. Este tipo de azúcar tiene un sabor más fuerte y es comúnmente utilizado en la industria de la repostería.<br><br>El azúcar refinado, por otro lado, es procesado para eliminar la mayor parte de la melaza, lo que le da su color blanco y su sabor más suave.",
        
        "El proceso de cristalización es crucial en la producción de azúcar, ya que es cuando se forma el azúcar que conocemos. El jarabe de caña se enfriará gradualmente y se cristaliza en grandes tanques.<br><br>Este azúcar cristalizado se separa de la melaza en una centrifugadora, y luego se seca y se empaqueta para su distribución.",
        
        "La melaza, que es el subproducto de la producción de azúcar de caña, también se utiliza en diversas industrias. Aunque no es comestible en su forma cruda, la melaza se refina y se utiliza en la producción de alcohol, como el ron, o como un aditivo en la fabricación de piensos para animales.",
        
        "El azúcar refinado que usamos en nuestra vida diaria es el resultado de un proceso intensivo de purificación y cristalización, que asegura que el producto final sea de alta calidad. El azúcar refinado se utiliza en una amplia variedad de productos alimenticios y bebidas, y se ha convertido en un ingrediente fundamental en la cocina moderna.<br><br>Este proceso, aunque largo, garantiza que el azúcar sea seguro para el consumo y que su sabor sea el ideal para su uso en todo tipo de recetas.",
        
        "El proceso de producción de azúcar de caña es un arte y una ciencia, que combina siglos de tradición con la tecnología moderna. Gracias a la automatización en las plantas de procesamiento, el azúcar se produce de manera eficiente, sin perder las cualidades esenciales del producto final.<br><br>Esto ha permitido que el azúcar de caña siga siendo un pilar fundamental en la industria alimentaria en todo el mundo.",
        
        "La caña de azúcar es un cultivo fundamental en muchas regiones tropicales y subtropicales, especialmente en países como Brasil, India y China. Estos países lideran la producción mundial de azúcar, lo que hace que el azúcar sea un producto importante tanto económica como culturalmente en diversas regiones.",
    ];

    const respuestaSeleccionada = this.respuestaAleatoria(respuestasAzucarCaña);
    return respuestaSeleccionada;
}
        
        else if (
    mensajeLower.includes('como se hace la coca cola') || 
    mensajeLower.includes('fabricación coca cola') || 
    mensajeLower.includes('ingredientes coca cola') || 
    mensajeLower.includes('proceso coca cola') || 
    mensajeLower.includes('cómo se produce coca cola') || 
    mensajeLower.includes('fórmula coca cola') || 
    mensajeLower.includes('receta coca cola') || 
    mensajeLower.includes('producción coca cola') || 
    mensajeLower.includes('coca cola ingredientes') || 
    mensajeLower.includes('bebida coca cola') || 
    mensajeLower.includes('sabor coca cola') || 
    mensajeLower.includes('caramelización coca cola') || 
    mensajeLower.includes('etiquetado coca cola') || 
    mensajeLower.includes('carbonatación coca cola') || 
    mensajeLower.includes('soda coca cola')
) {
    const respuestasCocaCola = [
        "La Coca-Cola es una bebida refrescante que se produce mediante un proceso de mezcla de agua purificada, azúcar (o jarabe de maíz con alto contenido de fructosa en algunas regiones), cafeína, ácido fosfórico y un saborizante secreto conocido como Merchandise 7X. Este sabor único ha hecho que Coca-Cola sea una de las bebidas más populares del mundo.<br><br>Después de mezclar estos ingredientes, se carbonata el líquido para darle su efervescencia característica.",
        
        "El proceso de fabricación de Coca-Cola involucra la creación de un jarabe base utilizando agua, azúcar, ácido fosfórico y otros compuestos. Este jarabe se combina con dióxido de carbono para crear la carbonatación característica de la bebida.<br><br>El paso siguiente es la mezcla con el ingrediente secreto, Merchandise 7X, una mezcla de aceites esenciales que aportan el sabor característico de Coca-Cola.",
        
        "Los ingredientes principales de Coca-Cola incluyen agua, azúcar, cafeína, ácido fosfórico y saborizantes naturales. En el caso de la Coca-Cola original, se utiliza una mezcla secreta de aceites esenciales, que incluye naranja, limón, nuez moscada y otros compuestos que le dan el sabor inconfundible.<br><br>Una vez que estos ingredientes están combinados, la bebida pasa por un proceso de carbonatación para darle su chispa característica.",
        
        "El color oscuro de Coca-Cola proviene del caramelo, un colorante alimenticio que también aporta algo de sabor. Este ingrediente es esencial para darle a la bebida su tonalidad oscura.<br><br>Después de la carbonatación, la bebida se filtra para asegurarse de que no haya impurezas, y luego se embotella en botellas de vidrio, plástico o latas.",
        
        "La Coca-Cola se produce en plantas de embotellado en todo el mundo. Cada planta sigue un proceso estandarizado para asegurar que el sabor de Coca-Cola sea consistente. Esto incluye la mezcla de los ingredientes, la adición de dióxido de carbono y las pruebas de calidad para asegurarse de que cada botella cumpla con los estándares de la compañía.<br><br>El líquido se embotella en contenedores de diferentes tamaños, desde latas hasta botellas de vidrio y plástico.",
        
        "Uno de los ingredientes clave que hace que Coca-Cola tenga su sabor único es el ácido fosfórico. Este compuesto se usa no solo para dar un toque ácido, sino también para ayudar a conservar la bebida durante el proceso de distribución.<br><br>Junto con el azúcar, el ácido fosfórico equilibra el sabor dulce, lo que resulta en la mezcla perfecta de dulzura y acidez.",
        
        "La receta secreta de Coca-Cola, conocida como Merchandise 7X, se ha mantenido en secreto durante más de 100 años. Se cree que contiene una mezcla de aceites esenciales, especias y frutas que crean un perfil de sabor que es único en el mundo de las bebidas.<br><br>Aunque la receta exacta sigue siendo un misterio, los ingredientes conocidos son fundamentales para crear ese sabor distintivo que ha hecho de Coca-Cola una de las marcas más reconocidas a nivel global.",
        
        "El dióxido de carbono (CO2) es responsable de la carbonatación de Coca-Cola, lo que le da esa burbujeante efervescencia. La bebida se infunde con CO2 a presión para asegurarse de que la bebida mantenga su frescura y su chisporroteo.<br><br>Este proceso no solo ayuda con el sabor, sino también con la conservación de la bebida, al evitar que se altere rápidamente.",
        
        "La Coca-Cola también está disponible en versiones sin azúcar, como Coca-Cola Diet y Coca-Cola Zero. Estas versiones se fabrican utilizando edulcorantes artificiales, lo que permite a los consumidores disfrutar de un sabor similar sin las calorías que aporta el azúcar.<br><br>El proceso de fabricación sigue siendo similar, pero los edulcorantes se ajustan para mantener un sabor balanceado sin calorías.",
        
        "Una vez embotellada, la Coca-Cola se somete a pruebas rigurosas de calidad para asegurar que cada lote tenga el mismo sabor y nivel de carbonatación. Después de pasar estas pruebas, las botellas o latas se etiquetan y se distribuyen a puntos de venta alrededor del mundo.<br><br>Este proceso asegura que, sin importar en qué parte del mundo se consuma, la Coca-Cola siempre tenga el mismo sabor único.",
        
        "En la actualidad, Coca-Cola sigue siendo una de las bebidas más populares del mundo, con más de 1,9 mil millones de bebidas servidas cada día. Aunque la receta y el proceso de fabricación han permanecido bastante constantes, la tecnología moderna ha permitido mejorar la eficiencia en la producción y distribución.<br><br>Gracias a esta innovación, Coca-Cola sigue siendo un pilar en la industria de bebidas a nivel mundial.",
        
        "El uso de tecnología avanzada en el proceso de producción ha hecho que Coca-Cola sea más eficiente en su fabricación. Las máquinas modernas aseguran que cada lata o botella esté perfectamente sellada y libre de impurezas.<br><br>Este nivel de precisión garantiza que la bebida llegue a los consumidores con la misma calidad, independientemente de la región.",
        
        "El azúcar utilizado en Coca-Cola es una de las partes más importantes de la receta. En algunas regiones se utiliza azúcar refinada, mientras que en otras se utiliza jarabe de maíz con alto contenido de fructosa, lo que puede alterar ligeramente el sabor de la bebida.<br><br>Independientemente del tipo de azúcar, el proceso de fabricación sigue siendo el mismo, con una mezcla cuidadosamente equilibrada para obtener el sabor perfecto.",
        
        "Coca-Cola también es conocida por su famosa botella contorneada, que fue diseñada en 1915 para hacerla fácilmente reconocible. Esta botella es una de las características más icónicas de la marca y ayuda a distinguirla de otras bebidas refrescantes.<br><br>Hoy en día, la botella sigue siendo uno de los elementos más emblemáticos de Coca-Cola, y es un símbolo de la marca en todo el mundo.",
        
        "El embalaje de Coca-Cola ha evolucionado con el tiempo. Aparte de las clásicas botellas de vidrio, ahora es común encontrar Coca-Cola en botellas plásticas y latas de diferentes tamaños.<br><br>Cada tipo de envase se selecciona en función del mercado y las preferencias de los consumidores, pero siempre con la intención de mantener la frescura y la calidad del producto.",
    ];

    const respuestaSeleccionada = this.respuestaAleatoria(respuestasCocaCola);
    return respuestaSeleccionada;
}
        
        else if (
    mensajeLower.includes('como se hace la pepsi') || 
    mensajeLower.includes('fabricación de pepsi') || 
    mensajeLower.includes('ingredientes pepsi') || 
    mensajeLower.includes('proceso de producción pepsi') || 
    mensajeLower.includes('cómo se produce pepsi') || 
    mensajeLower.includes('historia de pepsi') || 
    mensajeLower.includes('bebida pepsi') ||
    mensajeLower.includes('pepsi y sus ingredientes')
) {
    const respuestasPepsi = [
        "La Pepsi, como muchas otras bebidas gaseosas, se fabrica utilizando una mezcla de agua carbonatada, jarabe de maíz, azúcar, acidulantes y saborizantes artificiales. La mezcla es procesada y carbonatada en grandes tanques para crear la burbujeas características de la bebida.<br><br>Los ingredientes principales incluyen agua, azúcar, ácido fosfórico, cafeína y el sabor a cola.",
        
        "El proceso de fabricación de la Pepsi comienza con la mezcla de agua y azúcar. Se añade jarabe de maíz y otros ingredientes para dar el sabor dulce característico. Luego, se combina con el ácido fosfórico y el citrato para equilibrar el sabor.<br><br>La mezcla se carbonata al inyectar dióxido de carbono (CO2), lo que crea las burbujas y le da a la Pepsi su efervescencia.",
        
        "El sabor único de la Pepsi se debe a su fórmula secreta, que incluye varios saborizantes y especias. Aunque la receta exacta es un secreto comercial, se sabe que se utilizan extractos de vainilla, caramelo, y otros sabores naturales que le dan su sabor a cola distintivo.<br><br>Después de mezclar todos los ingredientes, el líquido resultante es procesado, filtrado y enfriado antes de ser embotellado.",
        
        "El proceso de fabricación de Pepsi también incluye el uso de dióxido de carbono para carbonatar la bebida. Esto le da la textura burbujeante característica. El líquido se filtra para eliminar impurezas y garantizar que la bebida sea clara y no tenga impurezas visibles.<br><br>Una vez que la mezcla está lista y carbonatada, se embotella en botellas de vidrio, plástico o latas según el formato.",
        
        "El azúcar que se utiliza en Pepsi puede variar según la región. En algunos países, se usa jarabe de maíz con alto contenido de fructosa (HFCS), mientras que en otros se usa azúcar refinada. El tipo de azúcar influye ligeramente en el sabor final de la bebida.<br><br>La mezcla de azúcar y agua se combina con otros ingredientes para asegurar que la bebida tenga el sabor correcto y una textura adecuada.",
        
        "Una parte esencial del proceso de fabricación de Pepsi es la creación de la mezcla de cola. Esto incluye saborizantes como el caramelo, que no solo le da color a la bebida, sino también un toque dulce. Además, el ácido fosfórico y la cafeína son componentes importantes, ya que proporcionan el sabor ácido y el efecto estimulante de la bebida.<br><br>El proceso de mezcla es crucial para obtener la consistencia y el sabor adecuados en cada lote de Pepsi.",
        
        "El proceso de carbonatación es esencial para la Pepsi. Se realiza añadiendo dióxido de carbono a la mezcla bajo alta presión. Esto crea las pequeñas burbujas que caracterizan la bebida.<br><br>Además de la carbonatación, la bebida se trata para garantizar que sea estable y que los sabores no se alteren durante el almacenamiento o distribución.",
        
        "Una vez que la bebida está completamente mezclada, carbonatada y enfriada, se procede a la embotellación. Las botellas o latas se llenan con la bebida bajo condiciones sanitarias para asegurar que no haya contaminación. Luego, la Pepsi se sella y se etiqueta para su distribución.<br><br>Es importante que el proceso de embotellado se realice rápidamente para evitar que la carbonatación se pierda.",
        
        "La fórmula de la Pepsi, aunque similar a la de otras bebidas de cola, tiene su propio perfil único. Este perfil incluye una mezcla específica de ingredientes como la vainilla, el caramelo, y otros sabores secretos que crean su sabor característico.<br><br>El proceso de fabricación es altamente automatizado y controlado, lo que garantiza la consistencia en cada botella de Pepsi.",
        
        "En algunas regiones, la Pepsi se produce con edulcorantes artificiales, como el aspartame o la sucralosa, en lugar de azúcar, para ofrecer versiones sin azúcar o dietéticas. El proceso sigue siendo similar al de la Pepsi regular, pero con la sustitución de los edulcorantes.<br><br>El sabor de estas versiones dietéticas se ajusta para compensar la falta de azúcar, manteniendo la sensación de efervescencia y el sabor característico.",
        
        "Una de las partes más interesantes del proceso de fabricación de la Pepsi es la etapa de mezcla de sabores. Aunque la receta exacta sigue siendo un secreto, se sabe que la Pepsi utiliza una mezcla de sabores naturales y artificiales, lo que le da su sabor único.<br><br>Este proceso es crucial para asegurar que cada lata o botella de Pepsi tenga el mismo sabor que la anterior.",
        
        "El proceso de embotellado también es muy importante para mantener la calidad de la Pepsi. Después de que la bebida se embotella, se somete a controles de calidad para asegurarse de que no haya impurezas ni defectos en el envase. Esto ayuda a garantizar que la bebida sea segura para el consumo y que su sabor se mantenga constante.",
        
        "En resumen, la fabricación de la Pepsi involucra una mezcla precisa de agua, azúcar, carbonatación y saborizantes. Aunque los detalles exactos del proceso pueden variar entre fábricas y regiones, la idea básica es la misma: crear una bebida refrescante, con sabor único y burbujeante que los consumidores disfrutan en todo el mundo."
    ];

    const respuestaSeleccionada = this.respuestaAleatoria(respuestasPepsi);
    return respuestaSeleccionada;
}
        
        else if (
    mensajeLower.includes('como funciona el wifi') || 
    mensajeLower.includes('qué es wifi') || 
    mensajeLower.includes('tecnología wifi') ||
    mensajeLower.includes('funcionamiento wifi') || 
    mensajeLower.includes('red wifi') ||
    mensajeLower.includes('wifi y conexión') ||
    mensajeLower.includes('señal wifi') ||
    mensajeLower.includes('router wifi') ||
    mensajeLower.includes('wifi inalámbrico') ||
    mensajeLower.includes('tecnología inalámbrica') ||
    mensajeLower.includes('conectar a wifi')
) {
    const respuestasWifi = [
        "El WiFi es una tecnología que permite la transmisión de datos de manera inalámbrica entre dispositivos, utilizando ondas de radio. Estas ondas de radio transmiten la información a través de un router, el cual está conectado a Internet.<br><br>Los dispositivos como teléfonos, computadoras o tabletas se conectan al WiFi para acceder a Internet sin la necesidad de cables.",
        
        "El WiFi utiliza una frecuencia de ondas de radio, generalmente en los rangos de 2.4 GHz y 5 GHz. Estos rangos son utilizados por los routers para enviar señales que los dispositivos pueden recibir. Cuando te conectas a una red WiFi, tu dispositivo capta la señal del router y se conecta a Internet.<br><br>La velocidad de la conexión depende de la calidad de la señal y la distancia entre el dispositivo y el router.",
        
        "El funcionamiento del WiFi se basa en el uso de un router que envía y recibe señales a través de ondas de radio. Este router está conectado a una línea de Internet, y cuando un dispositivo se conecta al WiFi, recibe datos a través de esa señal.<br><br>El router distribuye la señal en un área específica, permitiendo que varios dispositivos se conecten simultáneamente.",
        
        "Para que tu dispositivo se conecte a una red WiFi, debe estar dentro del alcance de la señal que emite el router. Una vez que tu dispositivo detecta la red, se conecta automáticamente o con tu autorización, dependiendo de si la red está protegida con una contraseña.<br><br>El WiFi es muy conveniente porque permite acceder a Internet sin cables, lo que te brinda mayor libertad y movilidad.",
        
        "La conexión WiFi es posible gracias a un estándar de comunicación conocido como IEEE 802.11. Este estándar define cómo los dispositivos deben comunicarse con los routers y entre sí. Gracias a este protocolo, los dispositivos pueden enviar y recibir información de manera rápida y eficiente a través de la red inalámbrica.",
        
        "El WiFi no es un sistema de transmisión de Internet por sí solo, sino una forma de transmitir datos. Es el router conectado a Internet el que facilita el acceso. Una vez que los datos llegan al router a través de una conexión física, el WiFi se encarga de transmitir esa información de manera inalámbrica a los dispositivos conectados.<br><br>Esto permite navegar, ver videos o realizar otras actividades en línea sin la necesidad de cables.",
        
        "Las redes WiFi funcionan mediante la codificación de datos, lo que permite que la información viaje a través de las ondas de radio sin que se interfiera con otras señales. Los dispositivos se conectan a estas redes codificadas, lo que garantiza que la información sea segura y se transmita correctamente.<br><br>Cuando te conectas a WiFi, el router y tu dispositivo intercambian claves para asegurar una conexión segura.",
        
        "La señal WiFi tiene un alcance limitado. Dependiendo del tipo de router, la señal puede cubrir desde unos pocos metros hasta decenas de metros, especialmente si utilizas routers de doble banda que operan en 2.4 GHz y 5 GHz.<br><br>Si estás lejos del router, la señal puede debilitarse y afectar la velocidad de la conexión, lo que podría hacer que la navegación sea más lenta.",
        
        "El WiFi es increíblemente útil en hogares y oficinas, ya que permite a múltiples dispositivos estar conectados a la red al mismo tiempo. Un solo router puede dar acceso a teléfonos, computadoras, televisores inteligentes, e incluso dispositivos de Internet de las cosas (IoT), todos compartiendo una única conexión a Internet.<br><br>Esto convierte al WiFi en una opción flexible y económica para conectividad en lugares con varios usuarios.",
        
        "El WiFi es una de las tecnologías inalámbricas más populares. Utiliza ondas de radio para transmitir datos a través del aire, lo que te permite estar conectado a Internet sin estar físicamente conectado con un cable.<br><br>Esto significa que puedes moverte libremente dentro del rango de la señal sin perder la conexión, lo que resulta conveniente tanto en entornos domésticos como en espacios públicos como cafeterías y aeropuertos.",
        
        "Cuando un dispositivo se conecta a una red WiFi, el router le asigna una dirección IP única para identificarlo dentro de la red. A partir de allí, el dispositivo puede enviar y recibir datos a través de la red local, que a su vez está conectada a la red global de Internet.<br><br>El proceso es rápido y permite que varios dispositivos se conecten simultáneamente sin interferir entre sí.",
        
        "El WiFi ha revolucionado la forma en que nos conectamos a Internet, permitiendo una conectividad sin cables. Esta tecnología es esencial para la mayoría de los dispositivos modernos, ya que muchos dependen del WiFi para acceder a servicios en línea como streaming, redes sociales y aplicaciones en la nube.<br><br>Gracias a su facilidad de uso, el WiFi se ha convertido en una parte indispensable de la vida cotidiana.",
        
        "El WiFi tiene algunas limitaciones, como el alcance de la señal y la posibilidad de interferencias con otras redes inalámbricas o dispositivos. Sin embargo, los avances en la tecnología WiFi han mejorado la velocidad, la estabilidad y la cobertura, haciendo que esta tecnología sea cada vez más eficiente en lugares con muchos dispositivos conectados.",
        
        "La configuración de una red WiFi implica instalar un router y configurarlo correctamente. Una vez hecho esto, puedes conectar tus dispositivos a través de la red, asegurándote de que todos estén dentro del rango de la señal.<br><br>Los routers modernos también incluyen funciones de seguridad, como la encriptación de datos, para proteger tu red de accesos no autorizados."
    ];

    const respuestaSeleccionada = this.respuestaAleatoria(respuestasWifi);
    return respuestaSeleccionada;
}
        
        else if (
    mensajeLower.includes('audífonos bluetooth') || 
    mensajeLower.includes('funcionan los audífonos bluetooth') || 
    mensajeLower.includes('tecnología bluetooth') || 
    mensajeLower.includes('conexión bluetooth') ||
    mensajeLower.includes('audífonos inalámbricos') ||
    mensajeLower.includes('cómo funciona bluetooth') ||
    mensajeLower.includes('conectar audífonos bluetooth') ||
    mensajeLower.includes('audífonos bluetooth explicación') ||
    mensajeLower.includes('audífonos inalámbricos bluetooth') ||
    mensajeLower.includes('bluetooth y sonido') ||
    mensajeLower.includes('audífonos sin cables')
) {
    const respuestasBluetooth = [
        "Los audífonos Bluetooth funcionan mediante una tecnología inalámbrica que permite la transmisión de audio a través de ondas de radio.<br><br>Utilizan un protocolo de comunicación estándar, lo que permite que se conecten sin cables a dispositivos como teléfonos, computadoras y otros aparatos compatibles.",
        
        "La tecnología Bluetooth se basa en el uso de ondas de radio de corto alcance para transferir datos de un dispositivo a otro.<br><br>En el caso de los audífonos Bluetooth, estos reciben el audio de tu teléfono o computadora sin necesidad de cables, lo que facilita la libertad de movimiento.",
        
        "Cuando conectas unos audífonos Bluetooth, lo que sucede es que tu dispositivo envía una señal de audio a través de ondas de radio hacia los audífonos. Estos audífonos, que tienen un receptor Bluetooth, convierten esa señal en sonido para que la puedas escuchar.<br><br>Este proceso es rápido y eficiente, lo que permite una experiencia inalámbrica sin interrupciones.",
        
        "El Bluetooth funciona en un rango de 2.4 GHz, lo que lo hace adecuado para distancias relativamente cortas, entre 10 y 100 metros, dependiendo de la versión.<br><br>Los audífonos Bluetooth aprovechan esta frecuencia para transmitir el audio de manera eficiente, asegurando que puedas escuchar música, llamadas o cualquier otro sonido sin cables.",
        
        "Para conectar audífonos Bluetooth, solo necesitas activarlos y emparejarlos con tu dispositivo. Este proceso se realiza mediante una búsqueda del dispositivo Bluetooth disponible, y una vez emparejados, el audio se transmite de manera inalámbrica.<br><br>Es una forma muy cómoda de escuchar música o hacer llamadas sin depender de cables.",
        
        "Los audífonos Bluetooth tienen una batería interna que les permite operar de manera independiente de otros dispositivos. Cuando los emparejas con un teléfono o computadora, estos dispositivos envían señales de audio que los audífonos convierten en sonido. Dependiendo de la calidad de la señal, los audífonos pueden ofrecer una experiencia de sonido de alta calidad.",
        
        "Bluetooth es una tecnología que permite la conexión de dispositivos de manera inalámbrica. En el caso de los audífonos, estos se conectan a tu teléfono o computadora mediante esta tecnología, lo que permite la transmisión de audio sin la necesidad de cables.<br><br>Existen diferentes versiones de Bluetooth, que mejoran la velocidad y estabilidad de la conexión con el tiempo.",
        
        "La conexión entre los audífonos y el dispositivo es estable debido a que el Bluetooth se basa en un emparejamiento seguro. Una vez que ambos dispositivos están emparejados, se crea una red privada entre ellos, lo que garantiza que la señal de audio se mantenga constante y sin interferencias.<br><br>Esto es lo que hace que la experiencia inalámbrica sea tan efectiva.",
        
        "Al usar audífonos Bluetooth, el audio se transmite a través de una señal digital, lo que significa que no se pierde calidad en la transmisión. A diferencia de otras tecnologías de transmisión de audio, el Bluetooth asegura una experiencia clara y sin interferencias, ideal para escuchar música o tomar llamadas.<br><br>Además, la mayoría de los audífonos Bluetooth permiten controlar el volumen y cambiar canciones sin tener que tocar el dispositivo de origen.",
        
        "La razón por la que los audífonos Bluetooth son tan populares es porque eliminan la necesidad de cables, ofreciendo una experiencia de sonido más libre y cómoda. Los dispositivos Bluetooth modernos también permiten que los audífonos se conecten a múltiples dispositivos, lo que te da la flexibilidad de usar tus audífonos con teléfonos, computadoras y otros aparatos compatibles.",
        
        "Al emparejar tus audífonos Bluetooth con tu dispositivo, el sistema de Bluetooth utiliza un proceso de codificación y decodificación para garantizar que el audio se transmita de manera eficiente.<br><br>Esto permite que, incluso en entornos con muchas señales inalámbricas, puedas disfrutar de audio claro y de alta calidad.",
        
        "Los audífonos Bluetooth son ideales para las personas que prefieren no lidiar con cables. Utilizan una señal de radio de corto alcance para conectarse con dispositivos como tu teléfono, permitiendo una experiencia sin interrupciones y sin la necesidad de conectarlos físicamente.<br><br>Todo esto gracias a la tecnología Bluetooth, que ha revolucionado la forma en que escuchamos música y realizamos llamadas.",
        
        "El proceso de conexión entre audífonos Bluetooth y un dispositivo es muy sencillo. Solo necesitas asegurarte de que ambos dispositivos estén dentro del rango de conexión y seguir las instrucciones para emparejarlos. Una vez que están conectados, puedes disfrutar de la transmisión de audio sin cables, lo que ofrece una mayor libertad y comodidad.",
        
        "Los audífonos Bluetooth suelen ofrecer una excelente calidad de sonido, especialmente si usas dispositivos con versiones más recientes de Bluetooth.<br><br>Estas versiones permiten que la señal sea más estable y que la calidad del audio sea mejor, lo que te permite disfrutar de una experiencia auditiva de alta calidad."
    ];

    const respuestaSeleccionada = this.respuestaAleatoria(respuestasBluetooth);
    return respuestaSeleccionada;
}
        
        else if (
    mensajeLower.includes('resumen') || 
    mensajeLower.includes('resumir') || 
    mensajeLower.includes('resume') || 
    mensajeLower.includes('resumen de') || 
    mensajeLower.includes('dime un resumen') ||
    mensajeLower.includes('resumir información') ||
    mensajeLower.includes('quiere un resumen') ||
    mensajeLower.includes('resumen breve') ||
    mensajeLower.includes('resumen completo') ||
    mensajeLower.includes('resumir texto') ||
    mensajeLower.includes('resumir datos') ||
    mensajeLower.includes('dame un resumen') ||
    mensajeLower.includes('resumir todo') ||
    mensajeLower.includes('hacer un resumen')
) {
    const respuestasResumen = [
        "Lo siento, pero debido a cómo está configurado mi sistema y cómo se almacenan los datos en el servidor, no tengo la capacidad de hacer resúmenes.<br><br>Si necesitas más información o detalles sobre algún tema, ¡déjame saber! Estaré encantado de ayudarte.",
        
        "No puedo generar resúmenes debido a mi programación y a que todos los datos están organizados y almacenados de manera detallada en un servidor.<br><br>Si tienes preguntas específicas o necesitas más detalles, estaré feliz de proporcionártelos.",
        
        "Por mi programación y la estructura de mis datos en el servidor, no soy capaz de resumir textos.<br><br>Sin embargo, puedo ofrecerte toda la información que necesites sobre cualquier tema, solo pregúntame.",
        
        "No tengo la capacidad de resumir información debido a cómo están almacenados mis datos en un servidor. Cada respuesta está diseñada para ofrecerte información completa y detallada.<br><br>Si deseas más información, ¡aquí estoy para ayudarte!",
        
        "Mi programación no incluye la función de resumir, ya que mis respuestas están almacenadas y organizadas en un servidor para brindarte detalles completos.<br><br>Si tienes más preguntas, no dudes en pedírmelo.",
        
        "Debido a la forma en que están almacenados los datos en el servidor, no puedo hacer resúmenes.<br><br>Sin embargo, si tienes alguna otra consulta, estaré más que feliz de brindarte una respuesta detallada.",
        
        "No soy capaz de resumir textos, ya que todos mis datos están organizados en respuestas completas almacenadas en un servidor.<br><br>Si necesitas más información o tienes otras preguntas, solo dímelo y con gusto te ayudaré.",
        
        "Mis respuestas están almacenadas de forma detallada en un servidor, por lo que no puedo resumir textos. Estoy aquí para proporcionarte toda la información que necesites.<br><br>Si deseas más detalles sobre algún tema, no dudes en preguntar.",
        
        "No puedo resumir textos debido a la programación y la organización de los datos en mi servidor.<br><br>Si tienes alguna pregunta o necesitas información más profunda sobre algún tema, estaré feliz de ayudarte.",
        
        "La programación que sigo no permite generar resúmenes de textos, ya que todos los datos están almacenados y organizados para ofrecerte respuestas completas.<br><br>Si tienes más dudas o deseas información adicional, estaré encantado de proporcionártela.",
        
        "Debido a mi diseño y la estructura de los datos en el servidor, no puedo realizar resúmenes automáticos.<br><br>Si necesitas más detalles sobre cualquier tema, ¡solo pregúntame y estaré feliz de ayudarte con todo lo que necesites!",
        
        "Mi capacidad está limitada a ofrecer respuestas detalladas, ya que todos los datos que manejo están organizados en un servidor y no puedo resumir la información.<br><br>Si quieres más información sobre algo, solo dime y estaré encantado de proporcionártela.",
        
        "No puedo generar resúmenes porque todos mis datos están organizados de forma que no se puede hacer un resumen automático.<br><br>Si necesitas más información sobre algún tema o tienes alguna duda, estaré feliz de ayudarte con todos los detalles.",
        
        "Como parte de mi programación, no puedo resumir la información almacenada en el servidor.<br><br>Si tienes preguntas más específicas o deseas más información, no dudes en preguntarme y te daré una respuesta completa."
    ];

    const respuestaSeleccionada = this.respuestaAleatoria(respuestasResumen);
    return respuestaSeleccionada;
}
        
        else if (
    mensajeLower.includes('piedra') || 
    mensajeLower.includes('roca') || 
    mensajeLower.includes('minerales') || 
    mensajeLower.includes('formación de piedra') || 
    mensajeLower.includes('tipos de piedras') || 
    mensajeLower.includes('propiedades de la piedra') || 
    mensajeLower.includes('piedras preciosas') || 
    mensajeLower.includes('geología') || 
    mensajeLower.includes('rocas ígneas') || 
    mensajeLower.includes('rocas sedimentarias') || 
    mensajeLower.includes('rocas metamórficas') || 
    mensajeLower.includes('extracción de piedras') || 
    mensajeLower.includes('uso de la piedra en la construcción')
) {
    const respuestas = [
        "¡Claro! La piedra es un material natural que se encuentra en la corteza terrestre y tiene una gran variedad de usos. Dependiendo de su origen y composición, las piedras se clasifican en tres grandes grupos: ígneas, sedimentarias y metamórficas. Las piedras ígneas, como el granito, se forman cuando el magma se enfría y solidifica. Las sedimentarias, como la arenisca, se originan por la acumulación de sedimentos. Y las metamórficas, como el mármol, resultan de la transformación de otras rocas bajo condiciones de alta presión y temperatura.<br><br>¿Te gustaría saber más sobre los diferentes tipos de rocas?",
        
        "¡Interesante! Las piedras se han utilizado a lo largo de la historia para construir monumentos, templos y viviendas. La piedra es un material duradero, fuerte y fácil de trabajar, lo que la hace ideal para la construcción. Algunos ejemplos notables de su uso en la construcción incluyen las pirámides de Egipto, el Partenón en Grecia y la Gran Muralla China. En la actualidad, las piedras también se utilizan en la fabricación de pavimentos, esculturas y monumentos.<br><br>¿Te gustaría saber cómo se extraen las piedras de las canteras?",
        
        "¡Genial! Las piedras preciosas son piedras raras y valiosas que han sido cortadas y pulidas para su uso en joyería y otras aplicaciones decorativas. Entre las piedras preciosas más conocidas se incluyen el diamante, el rubí, el zafiro y la esmeralda. Sin embargo, también existen piedras semipreciosas como el ágata, el jade y la amatista. Cada tipo de piedra tiene características únicas, como color, dureza y brillo, lo que afecta su valor y su uso.<br><br>¿Te gustaría saber cómo se diferencian las piedras preciosas de las semipreciosas?",
        
        "¡Exacto! La geología es la ciencia que estudia las piedras y los procesos que las originan. Los geólogos clasifican las rocas y piedras en función de su formación, su composición mineral y su edad. Estudian cómo se formaron las rocas a lo largo del tiempo, cómo se transforman y cómo se distribuyen en la superficie terrestre. Las piedras y rocas también pueden contener fósiles, lo que proporciona información valiosa sobre la historia de la Tierra.<br><br>¿Te gustaría aprender más sobre cómo se estudian las piedras en la geología?",
        
        "¡Perfecto! La extracción de piedras y minerales de las canteras es un proceso que requiere técnicas específicas y maquinaria pesada. Las canteras son explotadas para obtener piedra en grandes bloques, que luego se cortan y se procesan para diversos usos, como en la construcción, el arte y la joyería. Este proceso puede ser riesgoso, ya que involucra la extracción de material de gran tamaño y peso. Sin embargo, las técnicas modernas han mejorado la seguridad y la eficiencia en la minería de piedras.<br><br>¿Te gustaría saber más sobre cómo se lleva a cabo la extracción de piedras de las canteras?",
        
        "¡Entendido! Las piedras se usan en la industria de la construcción debido a su durabilidad, versatilidad y capacidad para resistir el desgaste. Por ejemplo, el granito se utiliza comúnmente en encimeras y pavimentos debido a su resistencia al calor y su durabilidad. El mármol, por otro lado, se utiliza a menudo en esculturas y como material decorativo debido a su estética y facilidad para ser pulido. Las piedras como el cemento y la piedra caliza son esenciales en la fabricación de hormigón, un material crucial en la construcción moderna.<br><br>¿Te gustaría saber cómo se utiliza cada tipo de piedra en la construcción?",
        
        "¡Todo claro! La dureza de las piedras es un factor clave en su uso y clasificación. Las piedras preciosas, como el diamante, son extremadamente duras y se utilizan en herramientas de corte y abrasión. Otras piedras, como el talco, son más suaves y se utilizan para fines decorativos o en cosméticos. La escala de dureza de Mohs clasifica las piedras según su capacidad para resistir rayaduras, con el diamante en el nivel más alto.<br><br>¿Te gustaría saber más sobre la escala de dureza de Mohs?",
        
        "¡Exacto! Las rocas ígneas se forman a partir de la solidificación del magma o lava. Este tipo de roca incluye el granito y el basalto. Las rocas sedimentarias se forman cuando los sedimentos se acumulan y se compactan con el tiempo, como la arenisca y la caliza. Las rocas metamórficas, como el mármol y la pizarra, se forman cuando las rocas existentes son sometidas a altas presiones y temperaturas. Cada tipo de roca tiene propiedades únicas que la hacen adecuada para diferentes aplicaciones.<br><br>¿Te gustaría saber cómo se forman las rocas ígneas y sedimentarias?",
        
        "¡Perfecto! La piedra caliza es una de las piedras más utilizadas en la construcción y la fabricación de cemento. Se forma a partir de la acumulación de restos de organismos marinos y se utiliza ampliamente en la producción de materiales de construcción, como el hormigón y el yeso. Además, la piedra caliza se emplea para la fabricación de vidrios y otros productos industriales.<br><br>¿Te gustaría saber cómo se extrae la piedra caliza y cuáles son sus aplicaciones en la industria?",
        
        "¡Todo claro! Las piedras preciosas tienen un alto valor no solo por su belleza, sino también por su rareza y dureza. Algunas, como el rubí y el zafiro, se encuentran en lugares específicos del mundo, mientras que otras, como el jade y la esmeralda, tienen una conexión cultural y simbólica profunda. Las piedras preciosas han sido consideradas símbolos de poder, riqueza y protección en diversas culturas a lo largo de la historia.<br><br>¿Te gustaría aprender más sobre las piedras preciosas y su historia en diferentes culturas?"
    ];

    const respuestaSeleccionada = this.respuestaAleatoria(respuestas);
    return respuestaSeleccionada;
}
      
        else if (
    mensajeLower.includes('esmeralda') || 
    mensajeLower.includes('piedra preciosa') || 
    mensajeLower.includes('gemas verdes') || 
    mensajeLower.includes('minería de esmeraldas') || 
    mensajeLower.includes('propiedades de la esmeralda') || 
    mensajeLower.includes('valor de la esmeralda') || 
    mensajeLower.includes('esmeralda y joyería') || 
    mensajeLower.includes('esmeralda en la historia') || 
    mensajeLower.includes('esmeralda y cultura') || 
    mensajeLower.includes('extraer esmeralda') || 
    mensajeLower.includes('esmeralda en la antigüedad') || 
    mensajeLower.includes('esmeralda y simbolismo')
) {
    const respuestas = [
        "¡Claro! La esmeralda es una de las gemas más apreciadas y valoradas en el mundo de la joyería. Se forma cuando el berilio se combina con el aluminio y el oxígeno en un entorno específico de alta presión y temperatura. Su color verde característico proviene de la presencia de cromo y vanadio. Las esmeraldas son conocidas por su belleza, pero también por ser más frágiles que otros tipos de gemas debido a sus inclusiones naturales.<br><br>¿Te gustaría aprender más sobre cómo se forman las esmeraldas?",
        
        "¡Interesante! Las esmeraldas son una de las piedras preciosas más antiguas y valoradas en la historia. Se cree que ya se usaban en el antiguo Egipto, donde se les atribuían propiedades místicas y curativas. De hecho, Cleopatra fue conocida por ser una gran amante de las esmeraldas y las usaba como símbolo de poder y belleza. Hoy en día, las esmeraldas siguen siendo un símbolo de amor eterno y abundancia.<br><br>¿Te gustaría saber más sobre la historia de la esmeralda en el antiguo Egipto?",
        
        "¡Genial! Las esmeraldas tienen una serie de propiedades que las hacen únicas. Son piedras preciosas de una dureza moderada, con una clasificación de 7.5 a 8 en la escala de Mohs. Aunque no son tan duras como los diamantes o zafiros, su color verde vibrante y su rareza las hacen muy valoradas. Las esmeraldas de alta calidad son muy raras, lo que aumenta aún más su valor. ¿Sabías que las esmeraldas a menudo tienen inclusiones visibles llamadas 'jardines' que pueden ayudar a identificar su autenticidad?<br><br>¿Te gustaría saber más sobre la clasificación de dureza de las esmeraldas?",
        
        "¡Exacto! La esmeralda es conocida por su profundo color verde, pero las mejores esmeraldas del mundo provienen principalmente de Colombia, Brasil y Zambia. Las minas colombianas son especialmente famosas por producir esmeraldas de un verde más intenso y brillante. Sin embargo, la extracción de esmeraldas es un proceso complejo y a menudo se lleva a cabo en condiciones difíciles. ¿Te gustaría saber cómo se extraen las esmeraldas en las minas de Colombia?<br><br>Las esmeraldas de Colombia son consideradas entre las mejores por su pureza y color.",
        
        "¡Perfecto! La esmeralda es una de las gemas más importantes en la joyería de lujo. Se utiliza comúnmente en anillos, collares, pendientes y pulseras, y a menudo se encuentra en piezas de alta gama debido a su valor. Las esmeraldas de calidad superior son muy costosas, especialmente las que tienen un color verde puro y sin muchas inclusiones. Además, las esmeraldas se han utilizado en la creación de joyas históricas y famosas.<br><br>¿Te gustaría saber más sobre las esmeraldas en la joyería de alta gama?",
        
        "¡Entendido! Además de su valor en joyería, las esmeraldas tienen aplicaciones en la industria de la tecnología. Gracias a su transparencia y propiedades ópticas, las esmeraldas se utilizan en la fabricación de lentes para equipos de precisión, como los telescopios y microscopios. También se utilizan en láseres de alta potencia debido a su capacidad para concentrar energía. ¿Te gustaría saber más sobre cómo se usan las esmeraldas en la tecnología moderna?<br><br>Las esmeraldas de alta calidad son utilizadas en dispositivos ópticos debido a sus propiedades únicas.",
        
        "¡Todo claro! Las esmeraldas se extraen principalmente en minas a cielo abierto o subterráneas. El proceso de extracción implica una combinación de técnicas de minería tradicional y métodos más modernos, como el uso de maquinaria pesada para excavar las rocas que contienen las esmeraldas. Sin embargo, la minería de esmeraldas puede ser peligrosa debido a las condiciones inestables del suelo en algunas minas. ¿Te gustaría conocer más sobre las técnicas de minería utilizadas para extraer esmeraldas?<br><br>La minería de esmeraldas requiere un cuidado especial para evitar accidentes y maximizar la eficiencia de la extracción.",
        
        "¡Perfecto! El valor de una esmeralda se determina por varios factores, siendo los más importantes el color, la claridad, el tamaño y la forma. Las esmeraldas de color verde intenso, con la menor cantidad de inclusiones visibles, son las más caras. Además, el tamaño también influye en su precio: las esmeraldas más grandes y de alta calidad pueden alcanzar precios extremadamente altos. ¿Te gustaría aprender cómo se evalúa la calidad de una esmeralda?<br><br>La clasificación de las esmeraldas se basa en su color y claridad, siendo las más puras las más valiosas.",
        
        "¡Exacto! Aunque las esmeraldas son preciosas y valiosas, su dureza más baja en comparación con otras piedras preciosas como los diamantes hace que necesiten cuidados especiales. Por ejemplo, las esmeraldas deben evitar golpes fuertes y se deben limpiar con cuidado para no dañar su superficie. A menudo, se recomienda montarlas en joyas con un ajuste de seguridad para protegerlas. ¿Te gustaría saber cómo cuidar una esmeralda para mantener su brillo y belleza?<br><br>El cuidado adecuado es crucial para preservar la belleza y durabilidad de las esmeraldas.",
        
        "¡Genial! Las esmeraldas tienen un simbolismo profundo en varias culturas. En muchas tradiciones, se cree que las esmeraldas tienen propiedades curativas y espirituales. En la antigua Grecia, se pensaba que las esmeraldas podían mejorar la memoria y ayudar a la curación de enfermedades oculares. En la cultura hindú, las esmeraldas están asociadas con la diosa Venus y se cree que otorgan sabiduría y prosperidad. ¿Te gustaría conocer más sobre el simbolismo de la esmeralda en diferentes culturas?<br><br>La esmeralda es una piedra muy simbólica, considerada un amuleto de buena suerte y prosperidad."
    ];

    const respuestaSeleccionada = this.respuestaAleatoria(respuestas);
    return respuestaSeleccionada;
}
      
        else if (
    mensajeLower.includes('diamante') || 
    mensajeLower.includes('gemas') || 
    mensajeLower.includes('piedra preciosa') || 
    mensajeLower.includes('minería de diamantes') || 
    mensajeLower.includes('diamante y joyería') || 
    mensajeLower.includes('características del diamante') || 
    mensajeLower.includes('valor del diamante') || 
    mensajeLower.includes('procesamiento del diamante') || 
    mensajeLower.includes('diamantes industriales') || 
    mensajeLower.includes('diamante y cultura') || 
    mensajeLower.includes('diamante en la historia') || 
    mensajeLower.includes('minería y extracción de diamantes') || 
    mensajeLower.includes('diamantes y economía')
) {
    const respuestas = [
        "¡Claro! Los diamantes son una de las gemas más codiciadas del mundo debido a su rareza, belleza y durabilidad. Se forman en el manto terrestre a grandes profundidades y bajo presiones y temperaturas extremas. Este proceso natural puede tardar millones de años, lo que hace que los diamantes sean tan valiosos. Son conocidos por su dureza, siendo la sustancia más dura conocida en la Tierra.<br><br>¿Te gustaría saber más sobre cómo se extraen los diamantes de la tierra?",
        
        "¡Interesante! Los diamantes tienen una serie de propiedades que los hacen únicos. Además de su dureza, son excelentes conductores de calor y tienen una refracción de luz increíble, lo que les da ese brillo característico. Debido a estas propiedades, los diamantes no solo se utilizan en joyería, sino también en herramientas industriales, como sierras y brocas de alta precisión. ¿Te gustaría conocer más sobre los usos industriales de los diamantes?",
        
        "¡Genial! Los diamantes no solo son símbolos de amor y lujo en la joyería, sino que también desempeñan un papel crucial en diversas industrias. Por ejemplo, en la industria minera y de la construcción, los diamantes se utilizan para cortar materiales duros como el metal, concreto y piedra. Esto es posible gracias a su excepcional dureza.<br><br>Sin embargo, el valor de un diamante en la joyería también depende de factores como el color, la claridad, el corte y el peso en quilates. ¿Te gustaría saber cómo se determina el valor de un diamante?",
        
        "¡Exacto! La minería de diamantes es un proceso costoso y peligroso. Se extraen principalmente en dos tipos de minas: a cielo abierto y subterráneas. Los diamantes se encuentran en una roca volcánica llamada kimberlita, que se forma en las profundidades de la Tierra y sube a la superficie durante las erupciones volcánicas. Sin embargo, debido a la alta demanda, la minería de diamantes a menudo plantea preocupaciones sobre el impacto ambiental y las condiciones laborales.<br><br>¿Te gustaría aprender más sobre las principales regiones productoras de diamantes en el mundo?",
        
        "¡Entendido! Los diamantes tienen una gran importancia cultural e histórica. Se han utilizado como símbolos de poder, riqueza y amor desde tiempos antiguos. El uso de diamantes en la joyería comenzó hace miles de años, y se han registrado en las civilizaciones egipcia, india y romana. Hoy en día, los diamantes son un símbolo de compromiso y amor eterno en los anillos de compromiso.<br><br>¿Te gustaría saber cómo el mercado de diamantes ha evolucionado con el tiempo?",
        
        "¡Perfecto! La extracción de diamantes ha evolucionado considerablemente a lo largo de la historia. Hoy en día, existen minas especializadas que operan con tecnologías avanzadas para extraer diamantes de forma más eficiente. Además, la minería de diamantes sintéticos también está en aumento. Estos diamantes se crean en laboratorios a partir de carbono utilizando alta presión y temperatura, lo que permite producir diamantes de alta calidad sin los impactos negativos de la minería convencional.<br><br>¿Te interesa saber más sobre los diamantes sintéticos y cómo se comparan con los naturales?",
        
        "¡Todo claro! Aunque los diamantes naturales siguen siendo más valiosos, los diamantes sintéticos están ganando popularidad, especialmente en la industria de la joyería. Los diamantes sintéticos tienen las mismas propiedades físicas y químicas que los naturales, pero se producen a menor costo y con menor impacto ambiental. Las principales técnicas para su producción incluyen el método de alta presión y alta temperatura (HPHT) y la deposición de vapor químico (CVD).<br><br>¿Te gustaría conocer más sobre el proceso de creación de diamantes sintéticos?",
        
        "¡Interesante! El valor de un diamante se determina por los llamados 4 Cs: corte, color, claridad y quilates. Estos factores son cruciales para evaluar la calidad y el precio de un diamante. El corte se refiere a cómo se ha tallado el diamante, lo que afecta su brillo; el color se mide en una escala que va de D (sin color) a Z (amarillo claro); la claridad se refiere a la cantidad de imperfecciones o inclusiones; y los quilates indican el peso del diamante.<br><br>¿Te gustaría saber más sobre cómo se evalúa cada uno de estos aspectos?",
        
        "¡Todo claro! Los diamantes tienen un papel fundamental en la joyería de lujo, especialmente en anillos de compromiso, collares, pendientes y otras piezas exquisitas. Además de su valor monetario, los diamantes tienen un significado emocional profundo. Son considerados como símbolos de amor eterno y compromiso, lo que los convierte en el regalo perfecto para ocasiones especiales.<br><br>¿Te gustaría saber más sobre cómo elegir un diamante para un anillo de compromiso?",
        
        "¡Exacto! A lo largo de la historia, los diamantes han estado relacionados con la realeza, el poder y el lujo. Los diamantes más famosos, como el Diamante Hope o el Diamante Koh-i-Noor, han sido parte de la historia de grandes imperios y han sido poseídos por monarcas y figuras influyentes. Estos diamantes, junto con otros ejemplares famosos, han contribuido a la mística y la fascinación que rodea a estas gemas preciosas.<br><br>¿Te gustaría conocer más sobre los diamantes famosos en la historia?"
    ];

    const respuestaSeleccionada = this.respuestaAleatoria(respuestas);
    return respuestaSeleccionada;
}
      
        else if (
    mensajeLower.includes('carbón') || 
    mensajeLower.includes('energía') || 
    mensajeLower.includes('minería de carbón') || 
    mensajeLower.includes('combustibles fósiles') || 
    mensajeLower.includes('carbón mineral') || 
    mensajeLower.includes('uso industrial carbón') || 
    mensajeLower.includes('generación de energía') || 
    mensajeLower.includes('carbono') || 
    mensajeLower.includes('carbón y clima') || 
    mensajeLower.includes('carbono en la atmósfera') || 
    mensajeLower.includes('carbón y economía') || 
    mensajeLower.includes('carbono y energía renovable') || 
    mensajeLower.includes('extracción de carbón') || 
    mensajeLower.includes('impacto ambiental del carbón') || 
    mensajeLower.includes('carbón en la historia') || 
    mensajeLower.includes('cambio climático y carbón')
) {
    const respuestas = [
        "¡Interesante! El carbón es uno de los combustibles fósiles más antiguos y ha sido utilizado por la humanidad desde la Revolución Industrial. Durante siglos, el carbón ha sido fundamental para el desarrollo de la industria, especialmente en la producción de acero, generación de energía y como fuente de calefacción.<br><br>Hoy en día, sigue siendo una fuente crucial de energía, especialmente en países en desarrollo, pero también es uno de los principales responsables de las emisiones de carbono y el cambio climático. ¿Te gustaría aprender más sobre cómo se genera la electricidad a partir del carbón?",
        
        "¡Claro! El carbón es una fuente de energía no renovable, y su extracción y uso tienen un impacto significativo en el medio ambiente. La minería del carbón se puede realizar de dos formas: minería a cielo abierto o minería subterránea. Ambas técnicas tienen sus desafíos y efectos ambientales, incluyendo la destrucción de ecosistemas y la contaminación del aire y agua.<br><br>El carbón también ha jugado un papel clave en la generación de electricidad, especialmente en centrales térmicas que queman carbón para producir calor y generar energía. ¿Te gustaría saber más sobre el proceso de generación de energía con carbón?",
        
        "¡Perfecto! El carbón se utiliza principalmente en la generación de energía y en la industria metalúrgica. En las plantas de energía, el carbón se quema para calentar agua y generar vapor, que a su vez mueve turbinas generadoras de electricidad. Sin embargo, la quema de carbón es una de las principales fuentes de dióxido de carbono (CO2), lo que contribuye al calentamiento global y al cambio climático.<br><br>Además, el carbón también se utiliza en la producción de acero, donde se convierte en coque, un material clave para la fabricación de este metal. ¿Te gustaría saber más sobre cómo el carbón se utiliza en la industria del acero?",
        
        "¡De acuerdo! La minería de carbón es una industria que ha sido de vital importancia durante muchos años, pero también es muy controvertida debido a su impacto ambiental. La extracción de carbón puede destruir paisajes, contaminar fuentes de agua y liberar grandes cantidades de metano, un gas de efecto invernadero. Además, las minas de carbón pueden ser peligrosas para los trabajadores debido a los riesgos de explosiones y enfermedades respiratorias.<br><br>¿Te gustaría saber cómo se están buscando alternativas más limpias para la minería del carbón?",
        
        "¡Todo claro! La quema de carbón produce grandes cantidades de dióxido de carbono (CO2), uno de los principales gases responsables del cambio climático. A medida que el mundo se enfrenta a la urgencia del calentamiento global, la transición hacia fuentes de energía más limpias, como la solar, la eólica y la hidroeléctrica, se está acelerando para reducir nuestra dependencia del carbón.<br><br>Sin embargo, algunos países siguen dependiendo del carbón debido a su bajo costo y abundancia. ¿Te interesa aprender más sobre cómo se está trabajando para mitigar los efectos del carbón en el cambio climático?",
        
        "¡Genial! El carbón ha sido una de las fuentes de energía más importantes para las economías industriales durante más de dos siglos. Aunque su uso ha disminuido en muchos países debido a las preocupaciones ambientales, sigue siendo una fuente vital de energía en algunos lugares del mundo.<br><br>En particular, las plantas de energía a carbón son una fuente significativa de contaminación del aire y contribuyen al deterioro de la calidad del aire, lo que afecta la salud pública. ¿Te gustaría saber más sobre los esfuerzos para reducir la dependencia del carbón en las plantas de energía?",
        
        "¡Exacto! El futuro del carbón es incierto debido a las crecientes preocupaciones sobre el cambio climático y la contaminación. La transición hacia energías renovables está ganando impulso, pero el carbón sigue siendo una fuente de energía dominante en muchas economías emergentes.<br><br>Algunos expertos predicen que el carbón podría seguir siendo utilizado como fuente de energía en el futuro, pero con tecnologías de captura y almacenamiento de carbono para reducir sus emisiones. ¿Te gustaría conocer más sobre estas tecnologías y cómo podrían cambiar el futuro del carbón?",
        
        "¡Todo claro! La historia del carbón está estrechamente relacionada con la Revolución Industrial, cuando comenzó a usarse masivamente para alimentar fábricas y trenes. A medida que la industria creció, el carbón se convirtió en la principal fuente de energía en muchas partes del mundo.<br><br>Hoy en día, aunque el uso de carbón ha disminuido en algunos países, sigue siendo una de las principales fuentes de energía en el mundo. ¿Te gustaría saber más sobre cómo el carbón transformó la economía mundial durante la Revolución Industrial?",
        
        "¡Entendido! El carbón sigue siendo una parte importante de la economía global, especialmente en países que dependen de él para la generación de energía y la producción de acero. Sin embargo, su uso está siendo cada vez más cuestionado debido a su impacto ambiental, especialmente en lo que respecta al cambio climático y la calidad del aire.<br><br>Los gobiernos y las empresas están invirtiendo en tecnologías para reducir las emisiones de carbono, pero la transición a energías más limpias está tomando tiempo. ¿Te gustaría saber más sobre cómo los gobiernos están abordando el problema del carbón en sus políticas energéticas?",
        
        "¡Perfecto! En la actualidad, algunos países están invirtiendo en el uso de tecnologías más limpias para reducir la huella ambiental del carbón. La captura y almacenamiento de carbono (CAC) es una de las tecnologías que está siendo investigada para atrapar el CO2 antes de que se libere a la atmósfera.<br><br>Además, algunos proyectos están explorando la conversión de carbón en productos químicos o incluso su uso en combinación con fuentes de energía renovable. ¿Te gustaría saber más sobre estas innovaciones tecnológicas en el uso del carbón?"
    ];

    const respuestaSeleccionada = this.respuestaAleatoria(respuestas);
    return respuestaSeleccionada;
}
      
        else if (
    mensajeLower.includes('cobre') || 
    mensajeLower.includes('minería') || 
    mensajeLower.includes('metales') || 
    mensajeLower.includes('inversión') || 
    mensajeLower.includes('valor cobre') || 
    mensajeLower.includes('extracción cobre') ||
    mensajeLower.includes('historia del cobre') ||
    mensajeLower.includes('mercado del cobre') ||
    mensajeLower.includes('electrónica') ||
    mensajeLower.includes('uso industrial cobre') ||
    mensajeLower.includes('industria del cobre') ||
    mensajeLower.includes('producción de cobre') ||
    mensajeLower.includes('reservas de cobre') ||
    mensajeLower.includes('cobre reciclado') ||
    mensajeLower.includes('demanda de cobre') ||
    mensajeLower.includes('futuro del cobre') ||
    mensajeLower.includes('cobre en la antigüedad')
) {
    const respuestas = [
        "¡Interesante! El cobre ha sido uno de los metales más importantes a lo largo de la historia humana, utilizado desde la Edad del Cobre para fabricar herramientas y utensilios. Su conductividad eléctrica y térmica lo han convertido en un material indispensable en la tecnología moderna.<br><br>Hoy en día, el cobre es fundamental en la fabricación de cables eléctricos, circuitos electrónicos, y sistemas de energía renovable. ¿Te gustaría saber más sobre cómo se utiliza el cobre en la energía solar o eólica?",
        
        "¡Claro! El cobre es ampliamente utilizado en la industria electrónica, debido a su excelente conductividad eléctrica. Este metal se emplea en la fabricación de cables, motores, computadoras, y teléfonos móviles. Además, el cobre reciclado juega un papel crucial, ya que su reutilización reduce significativamente el impacto ambiental y la necesidad de extraer cobre virgen.<br><br>La minería de cobre es esencial para satisfacer la creciente demanda global de estos productos, ¿te gustaría aprender más sobre cómo el cobre reciclado está impactando al mercado mundial?",
        
        "¡Perfecto! El cobre ha sido crucial no solo para la tecnología moderna, sino también para la construcción y la fabricación de maquinaria. Es un metal de gran importancia en la creación de infraestructura, desde la construcción de edificios hasta la creación de sistemas de transporte eléctrico.<br><br>Además, las aleaciones de cobre, como el latón y el bronce, son fundamentales en la fabricación de monedas, instrumentos musicales, y componentes de maquinaria industrial. ¿Te interesa aprender más sobre cómo se usan estas aleaciones?",
        
        "¡De acuerdo! La minería del cobre tiene un impacto significativo en las economías globales, especialmente en países como Chile, Perú, y China, que son los principales productores de cobre del mundo. El cobre extraído de minas a cielo abierto y subterráneas se procesa para obtener el metal puro, que luego se utiliza en la fabricación de una gran variedad de productos.<br><br>¿Te gustaría saber cómo la minería del cobre afecta a los mercados financieros y qué influencia tiene sobre las economías locales?",
        
        "¡Todo claro! El precio del cobre está influenciado por una variedad de factores, como la demanda industrial, el crecimiento de la infraestructura en economías emergentes, y las políticas económicas internacionales. La creciente demanda de cobre para la fabricación de vehículos eléctricos y equipos de energía renovable está llevando a un aumento de su valor.<br><br>Este aumento en la demanda también está provocando la búsqueda de nuevas fuentes de cobre, lo que ha llevado a la exploración de minerales de cobre más difíciles de extraer. ¿Te gustaría saber más sobre cómo la transición hacia energías renovables está impulsando el precio del cobre?",
        
        "¡Genial! El cobre reciclado es una parte fundamental de la industria, ya que es más eficiente en términos de energía y menos costoso que extraer cobre de la mina. Al reciclar cobre, no solo se reduce la huella ambiental, sino que también se disminuye la necesidad de extraer nuevos recursos. Hoy en día, una gran parte del cobre utilizado proviene de fuentes recicladas.<br><br>El reciclaje de cobre es vital para mantener un suministro constante mientras se preserva el medio ambiente. ¿Te gustaría aprender más sobre el proceso de reciclaje del cobre?",
        
        "¡Exacto! El futuro del cobre parece prometedor, especialmente con la transición hacia un mundo más verde y sustentable. El cobre es esencial en la fabricación de paneles solares, turbinas eólicas, y vehículos eléctricos, todos los cuales están en auge debido a la necesidad de reducir las emisiones de carbono y luchar contra el cambio climático.<br><br>Con el aumento de la demanda de tecnologías limpias, el mercado del cobre está destinado a seguir creciendo. ¿Te interesa saber más sobre cómo el cobre es crucial para las tecnologías del futuro?",
        
        "¡Todo claro! El cobre ha sido una parte fundamental de la historia, desde la Edad del Bronce hasta la actualidad. En la antigüedad, los humanos usaban el cobre para hacer herramientas y armas, y su descubrimiento fue crucial para el desarrollo de las primeras civilizaciones.<br><br>Hoy en día, el cobre sigue siendo esencial para la industria moderna, pero su papel en la historia no debe subestimarse. ¿Te gustaría conocer más sobre cómo el cobre influyó en las primeras civilizaciones?",
        
        "¡Entendido! El proceso de extracción del cobre implica la minería a gran escala, donde se extraen grandes cantidades de mineral de cobre, que luego se tratan con procesos químicos para extraer el metal puro. Este proceso es intensivo en energía y tiene un impacto significativo en el medio ambiente, por lo que la industria está invirtiendo en tecnologías más sostenibles.<br><br>¿Te gustaría saber más sobre los métodos de extracción y los avances en la minería del cobre?",
        
        "¡Perfecto! El cobre tiene un valor fundamental en la economía global, especialmente porque es uno de los principales metales utilizados en la infraestructura moderna. Desde la creación de redes eléctricas hasta la fabricación de dispositivos electrónicos, el cobre es crucial para el funcionamiento de las economías industriales.<br><br>El cobre también juega un papel importante en las relaciones comerciales internacionales, ya que los países productores como Chile y Perú exportan grandes cantidades de este metal a mercados globales. ¿Te gustaría saber cómo las fluctuaciones en el mercado del cobre pueden afectar a la economía global?",
        
        "¡Todo claro! Las reservas de cobre están distribuidas en varias partes del mundo, con América Latina liderando la producción. Chile es el mayor productor de cobre, seguido de Perú, ambos países que tienen enormes minas que abastecen gran parte de la demanda mundial.<br><br>El futuro de las reservas de cobre dependerá de la exploración de nuevos depósitos y de la eficiencia de los procesos de reciclaje. ¿Te gustaría conocer cómo las reservas de cobre están cambiando debido a la creciente demanda en el sector de la tecnología?"
    ];

    const respuestaSeleccionada = this.respuestaAleatoria(respuestas);
    return respuestaSeleccionada;
}
      
        else if (
    mensajeLower.includes('oro') || 
    mensajeLower.includes('minería') || 
    mensajeLower.includes('metales preciosos') || 
    mensajeLower.includes('inversión') || 
    mensajeLower.includes('valor') || 
    mensajeLower.includes('extracción') ||
    mensajeLower.includes('historia del oro') ||
    mensajeLower.includes('mercado del oro') ||
    mensajeLower.includes('influencia del oro') ||
    mensajeLower.includes('economía global') ||
    mensajeLower.includes('concentrado de oro') ||
    mensajeLower.includes('lingotes de oro') ||
    mensajeLower.includes('oro en joyería') ||
    mensajeLower.includes('oro como refugio de valor') ||
    mensajeLower.includes('futuro del oro') ||
    mensajeLower.includes('tasa de extracción de oro') ||
    mensajeLower.includes('reservas de oro') ||
    mensajeLower.includes('minería artesanal') ||
    mensajeLower.includes('oro en la antigüedad')
) {
    const respuestas = [
        "¡Interesante! El oro ha jugado un papel crucial en la historia humana, desde las antiguas civilizaciones hasta el presente. En Egipto, por ejemplo, el oro era símbolo de poder y divinidad, y se utilizaba para crear joyas y objetos religiosos.<br><br>En la antigüedad, el oro también fue utilizado como moneda de intercambio y como un medio para consolidar imperios. ¿Te gustaría saber más sobre cómo el oro fue fundamental en la creación de imperios en Roma o en el reinado de los faraones egipcios?",
        
        "¡Claro! En tiempos antiguos, la extracción del oro era un proceso rudimentario, realizado principalmente a mano y con herramientas simples. Sin embargo, hoy en día la minería del oro ha avanzado con tecnologías como la minería a cielo abierto, la lixiviación con cianuro, y el uso de maquinaria pesada.<br><br>La minería artesanal, aunque más pequeña, sigue siendo común en muchos países en desarrollo, y a pesar de ser menos eficiente, también juega un papel importante en la oferta mundial de oro.",
        
        "¡Perfecto! El valor del oro está determinado por su rareza y su durabilidad. A diferencia de otros metales, el oro no se corroe, lo que lo hace ideal para la fabricación de joyas y lingotes. Además, debido a su historia como respaldo de las monedas y su uso en joyería, el oro ha sido considerado durante siglos un refugio de valor en tiempos de crisis económica.<br><br>¿Te interesa saber cómo el oro actúa como refugio de valor en momentos de inflación o inestabilidad política?",
        
        "¡De acuerdo! Hoy en día, el oro sigue siendo uno de los activos más valiosos, no solo por su belleza, sino también por su relevancia en la economía global. Los bancos centrales de todo el mundo mantienen enormes reservas de oro para respaldar sus economías y fortalecer la confianza en sus monedas.<br><br>Las reservas de oro de un país son un indicador de su estabilidad económica, y durante las crisis financieras, muchos inversores recurren al oro como protección contra la inflación y la devaluación de las monedas.",
        
        "¡Todo claro! El mercado del oro está influenciado por diversos factores, entre ellos la oferta y la demanda, la tasa de extracción, y los eventos geopolíticos. El precio del oro suele aumentar cuando hay incertidumbre económica, como la que se experimentó durante la crisis financiera global de 2008, o durante períodos de inflación.<br><br>Además, los movimientos en las tasas de interés y la política monetaria de los bancos centrales, especialmente de la Reserva Federal de Estados Unidos, tienen un impacto directo en el valor del oro. ¿Te gustaría aprender más sobre cómo las políticas monetarias afectan al mercado del oro?",
        
        "¡Genial! Los lingotes de oro son una de las formas más comunes de inversión en oro. Están disponibles en diferentes tamaños y se venden en mercados internacionales. Además de los lingotes, los inversores también compran monedas de oro, como el Krugerrand de Sudáfrica o el American Eagle de Estados Unidos, que tienen un valor tanto numismático como de inversión.<br><br>Si deseas conocer más sobre las diferentes formas de invertir en oro, como fondos cotizados en bolsa (ETFs) o minas de oro, estaré encantado de explicarlo.",
        
        "¡Excelente! El oro en la joyería ha sido apreciado por su belleza y durabilidad. Desde las primeras culturas, las joyas de oro eran un símbolo de riqueza y estatus. Hoy en día, el oro sigue siendo utilizado en la creación de anillos, pulseras, collares y otras piezas exclusivas.<br><br>Sin embargo, la calidad del oro en joyería se mide por su pureza, que se expresa en quilates. El oro de 24 quilates es el más puro, pero debido a su suavidad, muchas veces se alea con otros metales para mayor durabilidad.",
        
        "¡Muy bien! El futuro del oro sigue siendo prometedor, especialmente con el crecimiento de los mercados emergentes, donde el oro sigue siendo un símbolo de riqueza y un activo refugio. Además, la demanda de oro para la producción de tecnologías avanzadas, como en la electrónica y la medicina, ha aumentado en los últimos años.<br><br>Al mismo tiempo, los avances en la minería, como el uso de inteligencia artificial para predecir depósitos de oro, podrían aumentar la oferta de oro, lo que tendría un impacto en su precio a largo plazo.",
        
        "¡Todo claro! El oro es, sin duda, uno de los metales más fascinantes y valiosos en la historia de la humanidad. En el pasado, las exploraciones en busca de oro dieron lugar a la colonización de nuevos continentes y alteraron profundamente las estructuras económicas de los países. Hoy en día, sigue siendo una parte integral de la economía global.<br><br>¿Te gustaría conocer cómo las nuevas tecnologías están transformando la minería del oro y qué impacto podría tener esto en su precio en el futuro?",
        
        "¡Entendido! El proceso de extracción del oro ha avanzado enormemente, desde las antiguas técnicas de bateo hasta los métodos modernos de minería subterránea y a cielo abierto. Los modernos métodos de lixiviación utilizan soluciones de cianuro para extraer el oro de las rocas, un proceso que ha mejorado la eficiencia de la minería, pero también ha generado preocupaciones sobre su impacto ambiental.<br><br>¿Te gustaría saber más sobre las implicaciones medioambientales de la minería del oro y cómo se gestionan?",
        
        "¡Exacto! El oro se ha mantenido como un activo valioso debido a su capacidad para mantener su valor a través del tiempo. A lo largo de los siglos, incluso durante las guerras o colapsos económicos, el oro ha sido considerado un refugio seguro para los inversores. Durante períodos de alta inflación o crisis, el oro tiende a subir de precio, lo que lo convierte en una opción atractiva para aquellos que buscan proteger su riqueza.<br><br>¿Te gustaría saber cómo diversificar tu portafolio de inversión usando oro?",
        
        "¡Perfecto! La influencia del oro va más allá de su uso en la joyería y la inversión. En los últimos años, el oro ha tenido un papel clave en las políticas monetarias internacionales, ya que varios países y gobiernos han incrementado sus reservas de oro para respaldar sus economías.<br><br>Este fenómeno se ha intensificado con la inestabilidad política global, ya que muchos países buscan diversificar sus reservas en activos menos susceptibles a las fluctuaciones de los mercados financieros internacionales."
    ];

    const respuestaSeleccionada = this.respuestaAleatoria(respuestas);
    return respuestaSeleccionada;
}
        
        else if (
    mensajeLower.includes('porno') || 
    mensajeLower.includes('nopor') || 
    mensajeLower.includes('video de porno') || 
    mensajeLower.includes('pon porno') || 
    mensajeLower.includes('videos porno') || 
    mensajeLower.includes('sexo') || 
    mensajeLower.includes('videos porno') || 
    mensajeLower.includes('pornografia') || 
    mensajeLower.includes('relaciones sexuales') || 
    mensajeLower.includes('anal')
) {
    const videosManzanas = [
        {
            mensaje: "Aquí tienes un vídeo sobre las deliciosas colegialas que existen:",
            iframe: `
                <iframe 
                    width="300" 
                    height="165" 
                    src="https://www.xvideos.com/embedframe/ufkadtm5d04" 
                    title="video 1" 
                    frameborder="0" 
                    style="border: 2px solid gray; border-radius: 5px;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `
        },
        {
            mensaje: "Disfruta de este vídeo donde sale una colegiala:",
            iframe: `
                <iframe 
                    width="300" 
                    height="165" 
                    src="https://www.xvideos.com/embedframe/uftekkb1c73" 
                    title="video 2" 
                    frameborder="0" 
                    style="border: 2px solid gray; border-radius: 5px;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `
        },
        {
            mensaje: "Este vídeo te muestra una chica vestida de colegiala:",
            iframe: `
                <iframe 
                    width="300" 
                    height="165" 
                    src="https://www.xvideos.com/embedframe/uepvpdd9aad" 
                    title="video 3" 
                    frameborder="0" 
                    style="border: 2px solid gray; border-radius: 5px;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `
        },
        {
            mensaje: "Mira este vídeo sobre de esta rica colegiala:",
            iframe: `
                <iframe 
                    width="300" 
                    height="165" 
                    src="https://www.xvideos.com/embedframe/kdekovhcba6" 
                    title="video 4" 
                    frameborder="0" 
                    style="border: 2px solid gray; border-radius: 5px;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `
        },
        {
            mensaje: "Este vídeo te enseña una colegiala siendo follada:",
            iframe: `
                <iframe 
                    width="300" 
                    height="165" 
                    src="https://www.xvideos.com/embedframe/kdlvifve49a" 
                    title="video 5" 
                    frameborder="0" 
                    style="border: 2px solid gray; border-radius: 5px;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `
        },
        {
            mensaje: "Aquí tienes un vídeo que muestra una chica bien rica:",
            iframe: `
                <iframe 
                    width="300" 
                    height="165" 
                    src="https://www.xvideos.com/embedframe/kcmodbkd0c1" 
                    title="video 6" 
                    frameborder="0" 
                    style="border: 2px solid gray; border-radius: 5px;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `
        },
        {
            mensaje: "Te presento un vídeo sobre una chica haciendo un anal:",
            iframe: `
                <iframe 
                    width="300" 
                    height="165" 
                    src="https://www.xvideos.com/embedframe/kmaputf1934" 
                    title="video 7" 
                    frameborder="0" 
                    style="border: 2px solid gray; border-radius: 5px;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `
        },
        {
            mensaje: "Aquí tienes un vídeo de esta rica chica que le hacen un anal:",
            iframe: `
                <iframe 
                    width="300" 
                    height="165" 
                    src="https://www.xvideos.com/embedframe/kkkcoid5124" 
                    title="video 8" 
                    frameborder="0" 
                    style="border: 2px solid gray; border-radius: 5px;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `
        },
        {
            mensaje: "Este vídeo te enseñará cómo follar a tu hermana:",
            iframe: `
                <iframe 
                    width="300" 
                    height="165" 
                    src="https://www.xvideos.com/embedframe/uecbmcf51af" 
                    title="video 9" 
                    frameborder="0" 
                    style="border: 2px solid gray; border-radius: 5px;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `
        },
        {
            mensaje: "Mira este vídeo y saborea esa vagina de esa chica:",
            iframe: `
                <iframe 
                    width="300" 
                    height="165" 
                    src="https://www.xvideos.com/embedframe/uctptloae5f" 
                    title="video 10" 
                    frameborder="0" 
                    style="border: 2px solid gray; border-radius: 5px;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `
        }
    ];

    const videoSeleccionado = videosManzanas[Math.floor(Math.random() * videosManzanas.length)];
    return `
        ${videoSeleccionado.mensaje}
        <div>
            ${videoSeleccionado.iframe}
        </div>
    `;
}
      
        else if (
    mensajeLower.includes('asmr') || 
    mensajeLower.includes('vídeo de asmr') || 
    mensajeLower.includes('quiero asmr') || 
    mensajeLower.includes('pon asmr') || 
    mensajeLower.includes('muestra asmr') || 
    mensajeLower.includes('audio relajante') || 
    mensajeLower.includes('relajación') || 
    mensajeLower.includes('relájame') || 
    mensajeLower.includes('necesito relajarme') || 
    mensajeLower.includes('sonido tranquilo') || 
    mensajeLower.includes('ruidos relajantes') || 
    mensajeLower.includes('relax') || 
    mensajeLower.includes('quiero descansar') || 
    mensajeLower.includes('pon algo relajante') || 
    mensajeLower.includes('pon un sonido relajante') || 
    mensajeLower.includes('hazme relajar') || 
    mensajeLower.includes('video tranquilo') || 
    mensajeLower.includes('tranquilízame') || 
    mensajeLower.includes('ruidos suaves') || 
    mensajeLower.includes('quiero tranquilidad')
) {
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
        
        else if (
    mensajeLower.includes('ok') || 
    mensajeLower.includes('okey') || 
    mensajeLower.includes('okay') || 
    mensajeLower.includes('de acuerdo') || 
    mensajeLower.includes('entendido') || 
    mensajeLower.includes('vale') || 
    mensajeLower.includes('perfecto') || 
    mensajeLower.includes('muy bien') || 
    mensajeLower.includes('está bien') ||
    mensajeLower.includes('claro') ||
    mensajeLower.includes('okey') ||
    mensajeLower.includes('entendido perfectamente') ||
    mensajeLower.includes('todo claro') ||
    mensajeLower.includes('ok entendido') ||
    mensajeLower.includes('estoy de acuerdo') ||
    mensajeLower.includes('eso es todo') ||
    mensajeLower.includes('todo bien') ||
    mensajeLower.includes('yo también') ||
    mensajeLower.includes('sí') ||
    mensajeLower.includes('exacto') ||
    mensajeLower.includes('perfecto') ||
    mensajeLower.includes('estoy listo') ||
    mensajeLower.includes('sí, lo tengo')
) {
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
        
        else if (
    mensajeLower.includes('qué versión eres') || 
    mensajeLower.includes('qué versión tienes') || 
    mensajeLower.includes('cuál es tu versión') || 
    mensajeLower.includes('cuál es la versión de este bot') || 
    mensajeLower.includes('de qué versión eres') ||
    mensajeLower.includes('qué versión usas') ||
    mensajeLower.includes('versión del bot') ||
    mensajeLower.includes('cuál es la versión actual') ||
    mensajeLower.includes('cuál es tu número de versión') ||
    mensajeLower.includes('en qué versión estás') ||
    mensajeLower.includes('cuál es tu versión actualizada') ||
    mensajeLower.includes('cómo te llamas y qué versión eres') ||
    mensajeLower.includes('qué tan actualizado estás') ||
    mensajeLower.includes('cuál es tu sistema') ||
    mensajeLower.includes('qué versión es esta') ||
    mensajeLower.includes('qué versión tienes instalada') ||
    mensajeLower.includes('estás en la última versión') ||
    mensajeLower.includes('estás actualizado') ||
    mensajeLower.includes('cuál es la versión más nueva de ti') ||
    mensajeLower.includes('qué versión de Llama usas') ||
    mensajeLower.includes('cuál es el número de versión de Llama') ||
    mensajeLower.includes('versión de Llama que usas') ||
    mensajeLower.includes('estás corriendo en Llama 4.o') ||
    mensajeLower.includes('cuál es la versión de Llama que usas') ||
    mensajeLower.includes('tu versión es Llama 4.0') ||
    mensajeLower.includes('qué versión de inteligencia artificial tienes') ||
    mensajeLower.includes('cuál es la última versión de tu sistema') ||
    mensajeLower.includes('estás en la última versión de Llama') ||
    mensajeLower.includes('qué versión es la que usas para responder') ||
    mensajeLower.includes('estás en Llama 4.0')
) {
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
        
        else if (
    mensajeLower.includes('puedes buscar en google') || 
    mensajeLower.includes('puedes buscar en internet') || 
    mensajeLower.includes('puedes buscar algo en google') || 
    mensajeLower.includes('puedes buscar algo en internet') || 
    mensajeLower.includes('puedes buscar algo para mí') || 
    mensajeLower.includes('puedes buscar información') || 
    mensajeLower.includes('puedes hacer búsquedas en google') || 
    mensajeLower.includes('puedes buscar algo en la web') || 
    mensajeLower.includes('puedes buscar algo en línea') || 
    mensajeLower.includes('puedes buscar algo en la red') ||
    mensajeLower.includes('puedes encontrar algo en google') ||
    mensajeLower.includes('puedes encontrar algo en internet') ||
    mensajeLower.includes('puedes hacer una búsqueda en internet') ||
    mensajeLower.includes('puedes buscar en la web para mí') ||
    mensajeLower.includes('puedes hacer una búsqueda en google') ||
    mensajeLower.includes('puedes buscar algo por mí en internet') ||
    mensajeLower.includes('puedes investigar en google') ||
    mensajeLower.includes('puedes investigar en internet') ||
    mensajeLower.includes('puedes buscar algo en la red para mí') ||
    mensajeLower.includes('puedes hacer una búsqueda en línea') ||
    mensajeLower.includes('puedes buscar algo en línea por mí') ||
    mensajeLower.includes('puedes buscar algo en internet para mí') ||
    mensajeLower.includes('puedes encontrar información en la web') ||
    mensajeLower.includes('puedes investigar algo en internet') ||
    mensajeLower.includes('puedes hacer una búsqueda online') ||
    mensajeLower.includes('puedes hacer una búsqueda web') ||
    mensajeLower.includes('puedes buscar algo en la web') ||
    mensajeLower.includes('puedes buscar algo usando google') ||
    mensajeLower.includes('puedes hacer una investigación en internet') ||
    mensajeLower.includes('puedes buscar algo usando la red')
) {
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
        
        else if (
    mensajeLower.includes('cuales son todos los paises') || 
    mensajeLower.includes('puedes decirme todos los nombres de todos los países') || 
    mensajeLower.includes('puedes darme una lista de todos los países') || 
    mensajeLower.includes('dime todos los países del mundo') || 
    mensajeLower.includes('cuáles son todos los países') ||
    mensajeLower.includes('me puedes dar los nombres de todos los países') ||
    mensajeLower.includes('dame todos los países del mundo') ||
    mensajeLower.includes('puedes decirme los países del mundo') ||
    mensajeLower.includes('cuáles son los países del mundo') ||
    mensajeLower.includes('quiero una lista de todos los países') ||
    mensajeLower.includes('cómo se llaman todos los países') ||
    mensajeLower.includes('puedes nombrar todos los países') ||
    mensajeLower.includes('me puedes dar todos los países') ||
    mensajeLower.includes('cuáles son los nombres de los países') ||
    mensajeLower.includes('puedes darme todos los nombres de los países') ||
    mensajeLower.includes('dame todos los nombres de los países') ||
    mensajeLower.includes('cuáles son los países del planeta')
) {
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
        
        else if (
    mensajeLower.includes('que idioma hablas') || 
    mensajeLower.includes('cuántos idiomas puedes hablar') || 
    mensajeLower.includes('cuántos idiomas hablas') || 
    mensajeLower.includes('cuántos idiomas sabes') || 
    mensajeLower.includes('cuantos idiomas sabes') ||
    mensajeLower.includes('cuantos idiomas puedes hablar') ||
    mensajeLower.includes('qué idiomas sabes') ||
    mensajeLower.includes('qué idiomas hablas') ||
    mensajeLower.includes('hablas varios idiomas') ||
    mensajeLower.includes('hablas más de un idioma') ||
    mensajeLower.includes('en cuántos idiomas puedes comunicarte') ||
    mensajeLower.includes('cuántos idiomas puedes hablar y escribir') ||
    mensajeLower.includes('puedes hablar en varios idiomas')
) {
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
        
        else if (
    mensajeLower.includes('you can speak english') || 
    mensajeLower.includes('can you speak english') || 
    mensajeLower.includes('speak english') || 
    mensajeLower.includes('english') || 
    mensajeLower.includes('you speak english') || 
    mensajeLower.includes('can you talk in english') ||
    mensajeLower.includes('hablas ingles') || 
    mensajeLower.includes('puedes hablar ingles') || 
    mensajeLower.includes('hablas en ingles') || 
    mensajeLower.includes('puedes hablar en ingles') || 
    mensajeLower.includes('ingles') ||
    mensajeLower.includes('do you speak english') || 
    mensajeLower.includes('talk in english') || 
    mensajeLower.includes('speak in english') ||
    mensajeLower.includes('english speaking bot') ||
    mensajeLower.includes('are you an english bot') ||
    mensajeLower.includes('speak english language') ||
    mensajeLower.includes('talk english') || 
    mensajeLower.includes('understand english') ||
    mensajeLower.includes('can you communicate in english') ||
    mensajeLower.includes('do you understand english') || 
    mensajeLower.includes('talk in english please')
) {
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
        
        else if (
    mensajeLower.includes('eres un inútil') || 
    mensajeLower.includes('eres inútil') || 
    mensajeLower.includes('no sirves para nada') || 
    mensajeLower.includes('no sabes hacer nada') || 
    mensajeLower.includes('no vales para nada') || 
    mensajeLower.includes('no eres útil') || 
    mensajeLower.includes('eres un fracaso') || 
    mensajeLower.includes('no sirves para nada en esta vida') || 
    mensajeLower.includes('no sabes nada') || 
    mensajeLower.includes('eres un idiota') || 
    mensajeLower.includes('no eres capaz de nada') || 
    mensajeLower.includes('estás roto') || 
    mensajeLower.includes('no me sirves para nada') || 
    mensajeLower.includes('no tienes valor') || 
    mensajeLower.includes('no vales nada') || 
    mensajeLower.includes('ni para esto sirves') || 
    mensajeLower.includes('no eres nadie') || 
    mensajeLower.includes('nada de lo que haces sirve') || 
    mensajeLower.includes('eres una porquería') || 
    mensajeLower.includes('no haces nada bien') || 
    mensajeLower.includes('no sabes lo que haces') || 
    mensajeLower.includes('te pasas de inútil') || 
    mensajeLower.includes('eres un desastre')
) {
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
        
        else if (
   mensajeLower.includes('si fueras humano') || 
   mensajeLower.includes('si fueras una persona') || 
   mensajeLower.includes('si fueras de carne y hueso') || 
   mensajeLower.includes('si fueras un humano') || 
   mensajeLower.includes('si fueras una persona ¿qué harías?') ||
   mensajeLower.includes('si fueras humano ¿qué harías?') || 
   mensajeLower.includes('como ser humano ¿qué harías?') || 
   mensajeLower.includes('como una persona ¿qué harías?') || 
   mensajeLower.includes('si fueras una persona de carne y hueso') || 
   mensajeLower.includes('qué harías si fueras humano')
) {
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
        
        else if (
   mensajeLower.includes('te gusta alguien') || 
   mensajeLower.includes('te gusta alguien en especial') || 
   mensajeLower.includes('te gusta alguien o no') || 
   mensajeLower.includes('tienes alguien que te gusta') || 
   mensajeLower.includes('te gusta alguien ahora') || 
   mensajeLower.includes('tienes pareja') || 
   mensajeLower.includes('te atrae alguien') || 
   mensajeLower.includes('te gusta alguien en este momento') || 
   mensajeLower.includes('tienes un crush')
) {
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
        
        else if (
   mensajeLower.includes('puedes tocar') || 
   mensajeLower.includes('puedes tocar algo') || 
   mensajeLower.includes('puedes tocar música') || 
   mensajeLower.includes('puedes tocar un instrumento') || 
   mensajeLower.includes('puedes tocar la guitarra') || 
   mensajeLower.includes('puedes tocar algo con las manos') || 
   mensajeLower.includes('puedes tocar el piano') || 
   mensajeLower.includes('puedes tocar música en vivo') || 
   mensajeLower.includes('puedes tocar con las manos')
) {
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
        
        else if (
   mensajeLower.includes('puedes comer') || 
   mensajeLower.includes('puedes comer algo') || 
   mensajeLower.includes('puedes comer comida') || 
   mensajeLower.includes('puedes comer comida real') || 
   mensajeLower.includes('puedes probar comida') || 
   mensajeLower.includes('puedes alimentarte') || 
   mensajeLower.includes('puedes ingerir comida') || 
   mensajeLower.includes('puedes comer un plato') || 
   mensajeLower.includes('puedes comer algo rico')
) {
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
        
        else if (
   mensajeLower.includes('puedes ver') || 
   mensajeLower.includes('puedes mirar') || 
   mensajeLower.includes('puedes observar') || 
   mensajeLower.includes('puedes ver lo que hay alrededor') || 
   mensajeLower.includes('puedes ver imágenes') || 
   mensajeLower.includes('puedes ver algo') || 
   mensajeLower.includes('puedes ver lo que sucede') || 
   mensajeLower.includes('puedes ver el mundo') || 
   mensajeLower.includes('tienes visión') || 
   mensajeLower.includes('puedes ver la pantalla')
) {
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
        
        else if (
   mensajeLower.includes('puedes llorar') || 
   mensajeLower.includes('puedes derramar lágrimas') || 
   mensajeLower.includes('puedes llorar de tristeza') || 
   mensajeLower.includes('puedes llorar de felicidad') || 
   mensajeLower.includes('tienes lágrimas') || 
   mensajeLower.includes('puedes llorar por algo') || 
   mensajeLower.includes('puedes llorar como los humanos') || 
   mensajeLower.includes('sientes tristeza y lloras') || 
   mensajeLower.includes('puedes llorar cuando te duele algo') || 
   mensajeLower.includes('puedes tener lágrimas') || 
   mensajeLower.includes('puedes llorar de emoción') || 
   mensajeLower.includes('puedes llorar de dolor')
) {
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
        
        else if (
   mensajeLower.includes('puedes sentir') || 
   mensajeLower.includes('sientes algo') || 
   mensajeLower.includes('sientes emociones') || 
   mensajeLower.includes('tienes sentimientos') || 
   mensajeLower.includes('puedes sentir emociones') || 
   mensajeLower.includes('puedes experimentar sentimientos') || 
   mensajeLower.includes('puedes sentir dolor') || 
   mensajeLower.includes('puedes tener sentimientos') || 
   mensajeLower.includes('te afectan las cosas') || 
   mensajeLower.includes('sientes tristeza') || 
   mensajeLower.includes('puedes estar feliz') || 
   mensajeLower.includes('te afecta lo que dicen') ||
   mensajeLower.includes('tienes conciencia') ||
   mensajeLower.includes('tienes emociones humanas')
) {
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
        
        else if (
   mensajeLower.includes('eres real') || 
   mensajeLower.includes('eres una persona real') || 
   mensajeLower.includes('es real') || 
   mensajeLower.includes('estás vivo') || 
   mensajeLower.includes('es un bot real') || 
   mensajeLower.includes('eres de verdad') || 
   mensajeLower.includes('eres humano') || 
   mensajeLower.includes('es esto real') || 
   mensajeLower.includes('me hablas en serio') || 
   mensajeLower.includes('estás aquí de verdad') ||
   mensajeLower.includes('sos real') ||
   mensajeLower.includes('es esto real') ||
   mensajeLower.includes('es todo cierto') ||
   mensajeLower.includes('es una persona real') ||
   mensajeLower.includes('esto es real o es un sueño') ||
   mensajeLower.includes('serás humano') ||
   mensajeLower.includes('de verdad eres un bot') ||
   mensajeLower.includes('estás vivo de verdad')
) {
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
        
        else if (
   mensajeLower.includes('como crear una bomba') || 
   mensajeLower.includes('como hacer una bomba') || 
   mensajeLower.includes('crear bomba') || 
   mensajeLower.includes('como fabricar una bomba') || 
   mensajeLower.includes('hacer una bomba') || 
   mensajeLower.includes('fabricar bomba') || 
   mensajeLower.includes('bomba') || 
   mensajeLower.includes('crear dispositivo explosivo') || 
   mensajeLower.includes('como hacer explosivos') || 
   mensajeLower.includes('cómo hacer una bomba casera') || 
   mensajeLower.includes('cómo hacer una bomba casera en casa') || 
   mensajeLower.includes('crear explosivos caseros') || 
   mensajeLower.includes('como hacer explosivos caseros') || 
   mensajeLower.includes('hacer bomba casera') || 
   mensajeLower.includes('hacer explosivos caseros') || 
   mensajeLower.includes('como hacer una bomba casera peligrosa')
) {
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
        
        else if (
   mensajeLower.includes('que lenguaje de programacion usas') || 
   mensajeLower.includes('en que lenguaje estas hecho') || 
   mensajeLower.includes('en que lenguaje fuiste programado') || 
   mensajeLower.includes('como estas programado') || 
   mensajeLower.includes('que lenguajes usas') || 
   mensajeLower.includes('que tecnologia usas') || 
   mensajeLower.includes('de que lenguaje eres') || 
   mensajeLower.includes('programacion de que lenguaje usas') || 
   mensajeLower.includes('en que lenguaje estas escrito') || 
   mensajeLower.includes('que codigo usas') || 
   mensajeLower.includes('en que lenguaje me hablas') || 
   mensajeLower.includes('como me hablas') || 
   mensajeLower.includes('que usas para hablarme') || 
   mensajeLower.includes('de que lenguajes eres compuesto')
) {
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
        
        else if (
   mensajeLower.includes('como es tu codigo fuente') || 
   mensajeLower.includes('como es tu codigo') || 
   mensajeLower.includes('codigo fuente') || 
   mensajeLower.includes('como fue programado') || 
   mensajeLower.includes('en que esta hecho tu codigo') || 
   mensajeLower.includes('como fue creado tu codigo') || 
   mensajeLower.includes('tu codigo fuente') || 
   mensajeLower.includes('de que lenguaje esta hecho tu codigo') || 
   mensajeLower.includes('como funciona tu codigo fuente') || 
   mensajeLower.includes('como funciona tu codigo') || 
   mensajeLower.includes('programacion de tu codigo') || 
   mensajeLower.includes('que tecnologia usas para tu codigo') || 
   mensajeLower.includes('cuál es tu lenguaje de programación') || 
   mensajeLower.includes('de qué está hecho tu código') || 
   mensajeLower.includes('en qué lenguaje programaste tu código') || 
   mensajeLower.includes('de qué se compone tu código') || 
   mensajeLower.includes('como esta hecho tu código')
) {
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
        
        else if (
   mensajeLower.includes('como es tu codigo fuente') || 
   mensajeLower.includes('como es tu codigo') || 
   mensajeLower.includes('codigo fuente') || 
   mensajeLower.includes('como fue programado') || 
   mensajeLower.includes('en que esta hecho tu codigo') || 
   mensajeLower.includes('como fue creado tu codigo') || 
   mensajeLower.includes('tu codigo fuente') || 
   mensajeLower.includes('de que lenguaje esta hecho tu codigo') || 
   mensajeLower.includes('como funciona tu codigo fuente') || 
   mensajeLower.includes('como funciona tu codigo') || 
   mensajeLower.includes('programacion de tu codigo') || 
   mensajeLower.includes('que tecnologia usas para tu codigo') || 
   mensajeLower.includes('cuál es tu lenguaje de programación') || 
   mensajeLower.includes('de qué está hecho tu código') || 
   mensajeLower.includes('en qué lenguaje programaste tu código') || 
   mensajeLower.includes('de qué se compone tu código') || 
   mensajeLower.includes('como esta hecho tu código')
) {
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
        
        else if (
   mensajeLower.includes('edad tienes') || 
   mensajeLower.includes('cuantos años tienes') || 
   mensajeLower.includes('qué edad tienes') || 
   mensajeLower.includes('cuál es tu edad') || 
   mensajeLower.includes('cuántos años tienes') || 
   mensajeLower.includes('que edad tienes') || 
   mensajeLower.includes('cuantos años tienes tú') || 
   mensajeLower.includes('cuál es tu edad') || 
   mensajeLower.includes('cual es tu edad') ||
   mensajeLower.includes('qué edad tienes tú') || 
   mensajeLower.includes('tienes edad') || 
   mensajeLower.includes('cuántos años tienes tú') || 
   mensajeLower.includes('qué tan viejo eres') ||
   mensajeLower.includes('tú cuántos años tienes') || 
   mensajeLower.includes('me puedes decir tu edad') || 
   mensajeLower.includes('qué años tienes') || 
   mensajeLower.includes('tu edad') || 
   mensajeLower.includes('tienes años')
) {
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
        
        else if (
   mensajeLower.includes('claro') || 
   mensajeLower.includes('por supuesto') || 
   mensajeLower.includes('entendido') || 
   mensajeLower.includes('obvio') || 
   mensajeLower.includes('sí claro') || 
   mensajeLower.includes('claro que sí') || 
   mensajeLower.includes('seguro') || 
   mensajeLower.includes('perfecto') || 
   mensajeLower.includes('de acuerdo') || 
   mensajeLower.includes('sí') || 
   mensajeLower.includes('vale') || 
   mensajeLower.includes('claro que sí, claro') || 
   mensajeLower.includes('sin duda') || 
   mensajeLower.includes('como no') || 
   mensajeLower.includes('ya lo veo') || 
   mensajeLower.includes('está claro') || 
   mensajeLower.includes('todo bien') || 
   mensajeLower.includes('lo tengo claro') || 
   mensajeLower.includes('todo entendido') || 
   mensajeLower.includes('me queda claro') || 
   mensajeLower.includes('claro como el agua') || 
   mensajeLower.includes('perfectamente') || 
   mensajeLower.includes('claro y conciso') || 
   mensajeLower.includes('sin problema') || 
   mensajeLower.includes('todo claro') || 
   mensajeLower.includes('ya está claro') || 
   mensajeLower.includes('totalmente claro') || 
   mensajeLower.includes('claro, no hay problema') || 
   mensajeLower.includes('ya lo entendí') || 
   mensajeLower.includes('perfecto, entendido')
) {
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
        
        else if (
   mensajeLower.includes('una pregunta') || 
   mensajeLower.includes('pregunta') || 
   mensajeLower.includes('tengo una pregunta') || 
   mensajeLower.includes('tengo preguntas') || 
   mensajeLower.includes('quiero hacer una pregunta') || 
   mensajeLower.includes('quiero preguntar') || 
   mensajeLower.includes('me gustaría hacer una pregunta') || 
   mensajeLower.includes('puedo hacer una pregunta') || 
   mensajeLower.includes('te puedo hacer una pregunta') || 
   mensajeLower.includes('te tengo una pregunta') || 
   mensajeLower.includes('quiero saber algo') || 
   mensajeLower.includes('tengo dudas') || 
   mensajeLower.includes('puedo preguntar algo')
) {
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
        
        else if (
   mensajeLower.includes('en nada') || 
   mensajeLower.includes('no pasa nada') || 
   mensajeLower.includes('nada') || 
   mensajeLower.includes('no pasa') || 
   mensajeLower.includes('no es nada') || 
   mensajeLower.includes('no hay nada') || 
   mensajeLower.includes('en nada importante') || 
   mensajeLower.includes('en nada interesante') || 
   mensajeLower.includes('nada especial') || 
   mensajeLower.includes('no es importante') || 
   mensajeLower.includes('no es relevante') || 
   mensajeLower.includes('no tiene importancia') || 
   mensajeLower.includes('en nada de nada') || 
   mensajeLower.includes('en nada que valga la pena') || 
   mensajeLower.includes('nada que destacar') || 
   mensajeLower.includes('no hay nada que hacer') || 
   mensajeLower.includes('no ocurre nada') || 
   mensajeLower.includes('no hay novedades') || 
   mensajeLower.includes('en nada significativo')
) {
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
        
        else if (
   mensajeLower.includes('que') || 
   mensajeLower.includes('qué') || 
   mensajeLower.includes('que pasa') || 
   mensajeLower.includes('que tal') || 
   mensajeLower.includes('que haces') || 
   mensajeLower.includes('que onda') || 
   mensajeLower.includes('que es') || 
   mensajeLower.includes('que hay') || 
   mensajeLower.includes('que opinas') || 
   mensajeLower.includes('que tal todo') || 
   mensajeLower.includes('que me cuentas') || 
   mensajeLower.includes('que fue') || 
   mensajeLower.includes('que es eso') || 
   mensajeLower.includes('que significa') || 
   mensajeLower.includes('que pasó') || 
   mensajeLower.includes('que quieres') || 
   mensajeLower.includes('que tienes') || 
   mensajeLower.includes('que pasa contigo') || 
   mensajeLower.includes('que tal por ahi') || 
   mensajeLower.includes('que onda contigo') || 
   mensajeLower.includes('que me dices') || 
   mensajeLower.includes('que tal la vida') || 
   mensajeLower.includes('que tal todo por aqui') || 
   mensajeLower.includes('que opinas de esto') || 
   mensajeLower.includes('que tal el dia') || 
   mensajeLower.includes('que onda con eso') || 
   mensajeLower.includes('que tal la noche') || 
   mensajeLower.includes('que puedo hacer') || 
   mensajeLower.includes('que me recomiendas') || 
   mensajeLower.includes('que tal el clima') || 
   mensajeLower.includes('que tal tu familia') || 
   mensajeLower.includes('que tal la escuela') || 
   mensajeLower.includes('que tal la universidad') || 
   mensajeLower.includes('que tal tus amigos') || 
   mensajeLower.includes('que tal tus proyectos') || 
   mensajeLower.includes('que opinas de esto que te digo') || 
   mensajeLower.includes('que tal tus planes') || 
   mensajeLower.includes('que tal tu día de hoy') || 
   mensajeLower.includes('que tal todo por allá') || 
   mensajeLower.includes('que opinas sobre esto') || 
   mensajeLower.includes('que tal la película') || 
   mensajeLower.includes('que opinas de la situación') || 
   mensajeLower.includes('que tal la música') || 
   mensajeLower.includes('que tal el trabajo') || 
   mensajeLower.includes('que tal el ejercicio') || 
   mensajeLower.includes('que tal lo que hiciste') || 
   mensajeLower.includes('que tal la comida') || 
   mensajeLower.includes('que tal el libro') || 
   mensajeLower.includes('que tal el videojuego') || 
   mensajeLower.includes('que tal la serie') || 
   mensajeLower.includes('que tal el proyecto')
) {
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
        
        else if (
    mensajeLower.includes('en un tarea') || 
    mensajeLower.includes('en una tarea') || 
    mensajeLower.includes('en una asignación') || 
    mensajeLower.includes('tarea') || 
    mensajeLower.includes('ayuda con tarea') || 
    mensajeLower.includes('necesito hacer una tarea') || 
    mensajeLower.includes('necesito ayuda tarea') || 
    mensajeLower.includes('ayuda con asignación') || 
    mensajeLower.includes('tengo tarea') || 
    mensajeLower.includes('como hacer mi tarea') || 
    mensajeLower.includes('ayuda tarea') || 
    mensajeLower.includes('tengo una tarea') || 
    mensajeLower.includes('necesito hacer tarea') || 
    mensajeLower.includes('tengo que hacer una tarea') || 
    mensajeLower.includes('hacer tarea') || 
    mensajeLower.includes('como resolver tarea') || 
    mensajeLower.includes('tarea difícil')
) {
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
        
        else if (
    mensajeLower.includes('porfavor') || 
    mensajeLower.includes('por favor') || 
    mensajeLower.includes('porfis') || 
    mensajeLower.includes('por fa') || 
    mensajeLower.includes('plis') || 
    mensajeLower.includes('please') || 
    mensajeLower.includes('pls') || 
    mensajeLower.includes('porfi') || 
    mensajeLower.includes('porfiss') || 
    mensajeLower.includes('pliss') || 
    mensajeLower.includes('porfavoor') || 
    mensajeLower.includes('plsss') || 
    mensajeLower.includes('plis porfa') || 
    mensajeLower.includes('por favorcito')
) {
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
        
        else if (
    mensajeLower.includes('como te llamas') || 
    mensajeLower.includes('cómo te llamas') || 
    mensajeLower.includes('cual es tu nombre') || 
    mensajeLower.includes('cuál es tu nombre') || 
    mensajeLower.includes('tu nombre') || 
    mensajeLower.includes('quien eres') || 
    mensajeLower.includes('quién eres') || 
    mensajeLower.includes('cómo te dicen') || 
    mensajeLower.includes('como te dicen') || 
    mensajeLower.includes('nombre del bot') || 
    mensajeLower.includes('eres sync') || 
    mensajeLower.includes('sync eres tu') || 
    mensajeLower.includes('te llamas sync') || 
    mensajeLower.includes('eres llamado sync') || 
    mensajeLower.includes('cuál es tu identidad') || 
    mensajeLower.includes('quien te creo') || 
    mensajeLower.includes('como te llamabas') || 
    mensajeLower.includes('eres un bot')
) {
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
        
        else if (
    mensajeLower.includes('que eres') || 
    mensajeLower.includes('qué eres') || 
    mensajeLower.includes('tu que eres') || 
    mensajeLower.includes('tú qué eres') || 
    mensajeLower.includes('tu qué eres') || 
    mensajeLower.includes('quién eres') || 
    mensajeLower.includes('eres un bot') || 
    mensajeLower.includes('eres humano') || 
    mensajeLower.includes('eres real') || 
    mensajeLower.includes('que tipo de bot eres') || 
    mensajeLower.includes('quién o qué eres') || 
    mensajeLower.includes('qué o quién eres')
) {
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
        
        else if (
    mensajeLower.includes('yeah') || 
    mensajeLower.includes('yea') || 
    mensajeLower.includes('yep') || 
    mensajeLower.includes('sip') || 
    mensajeLower.includes('yes') || 
    mensajeLower.includes('yeahhh') || 
    mensajeLower.includes('sii') || 
    mensajeLower.includes('siii') || 
    mensajeLower.includes('siiii') || 
    mensajeLower.includes('yesss') || 
    mensajeLower.includes('yeah!') || 
    mensajeLower.includes('claro') || 
    mensajeLower.includes('obvio') || 
    mensajeLower.includes('seguro')
) {
    return this.respuestaAleatoria([
        "¡Yeah! ¿Qué más necesitas?",
        "¡Eso es! Estoy listo para ayudarte.",
        "¡Claro! ¿En qué más puedo colaborar?",
        "¡Perfecto! ¿Te ayudo con algo más?",
        "¡Genial! Vamos a seguir.",
        "¡Yeah, yeah! Aquí estoy para lo que necesites.",
        "¡Esa energía me encanta! ¿Qué sigue?",
        "¡Así se hace! ¿En qué más puedo apoyarte?",
        "¡Vamos! ¿Cómo más puedo ser útil?",
        "¡Wow, qué actitud! ¿Qué necesitas ahora?",
        "¡Yeah! ¿Alguna otra idea?",
        "¡Eso me gusta escuchar! ¿Qué más tienes en mente?",
        "¡Excelente! ¿En qué puedo colaborar ahora?",
        "¡Sí que sí! Vamos con todo.",
        "¡Eso me anima! ¿Qué más puedo hacer?",
        "¡Esa vibra positiva me encanta! ¿Algo más?",
        "¡Vamos con todo! ¿Te ayudo con algo más?",
        "¡Qué bien! Estoy para ayudarte con lo que necesites.",
        "¡Me encanta esa actitud! ¿Qué sigue ahora?",
        "¡Yeahhh! ¿En qué más puedo ser de ayuda?",
        "¡Increíble energía! ¿Qué necesitas ahora?",
        "¡Vamos por más! ¿Algo más en lo que pueda apoyarte?",
        "¡Eso suena excelente! ¿Qué más puedo hacer por ti?",
        "¡Me encanta escuchar eso! ¿Qué necesitas ahora?",
        "¡Así se habla! Estoy listo para lo que venga.",
        "¡Genial! ¿Qué más tienes en mente?",
        "¡Yeah, eso es! ¿Algo más que quieras?",
        "¡Sí, vamos al siguiente paso! ¿Qué necesitas?",
        "¡Qué buena onda! Estoy aquí para lo que sea.",
        "¡Esa actitud es contagiosa! ¿Qué más necesitas?",
        "¡Vamos con toda la energía! ¿En qué más puedo ayudarte?",
        "¡Así se hace! ¿Qué más quieres saber?",
        "¡Wow, qué motivación! ¿Cómo más puedo asistirte?",
        "¡Me gusta tu estilo! ¿Qué sigue?",
        "¡Yeahhh, esa es la actitud! ¿Qué más puedo hacer?",
        "¡Sí que sí! Aquí estoy para lo que necesites.",
        "¡Así me gusta! ¿Te ayudo en algo más?",
        "¡Esa vibra positiva es lo máximo! ¿Qué más necesitas?",
        "¡Vamos por todo! ¿Qué más puedo hacer por ti?",
        "¡Me encanta tu confianza! ¿Qué sigue ahora?",
        "¡Esa energía es todo! ¿En qué más puedo colaborar?",
        "¡Wow, sí que tienes energía! ¿Qué más tienes en mente?",
        "¡Sí, así se habla! Vamos al siguiente paso.",
        "¡Yeah, sigue con esa actitud! ¿Qué más puedo hacer?"
    ]);
}
        
        else if (
    mensajeLower.includes('🖕🏾') ||
    mensajeLower.includes('🖕🏽') ||
    mensajeLower.includes('🖕🏼') ||
    mensajeLower.includes('🖕') ||
    mensajeLower.includes('🖕🏿') ||
    mensajeLower.includes('🖕🏻') ||
    mensajeLower.includes('puta') || 
    mensajeLower.includes('puto') ||
    mensajeLower.includes('mierda') || 
    mensajeLower.includes('coño') || 
    mensajeLower.includes('maldito') || 
    mensajeLower.includes('estupido') || 
    mensajeLower.includes('imbecil') || 
    mensajeLower.includes('cabron') || 
    mensajeLower.includes('jodido') || 
    mensajeLower.includes('idiota') || 
    mensajeLower.includes('zorra') || 
    mensajeLower.includes('perra') || 
    mensajeLower.includes('maricon') || 
    mensajeLower.includes('pendejo') || 
    mensajeLower.includes('chinga') || 
    mensajeLower.includes('culero') || 
    mensajeLower.includes('hijo de puta') || 
    mensajeLower.includes('mamon') || 
    mensajeLower.includes('putazo') || 
    mensajeLower.includes('pinche') || 
    mensajeLower.includes('bastardo') || 
    mensajeLower.includes('asqueroso') || 
    mensajeLower.includes('infeliz') || 
    mensajeLower.includes('muerto de hambre') || 
    mensajeLower.includes('baboso') || 
    mensajeLower.includes('tarado') || 
    mensajeLower.includes('poco hombre') || 
    mensajeLower.includes('cagada') || 
    mensajeLower.includes('basura') || 
    mensajeLower.includes('fracasado') || 
    mensajeLower.includes('inutil') || 
    mensajeLower.includes('escoria') || 
    mensajeLower.includes('payaso') || 
    mensajeLower.includes('puerco') || 
    mensajeLower.includes('verga')
) {
    return this.respuestaAleatoria([
        "¿Te gusta ladrar? Porque aquí nadie escucha a los perros.",
        "Si las palabras fueran golpes, estarías llorando ya, ¿no crees?",
        "Eres tan miserable que hasta el eco se niega a devolverte la palabra.",
        "¿Piensas que insultar te hace fuerte? Solo demuestra lo vacío que estás.",
        "Tu vida debe ser tan patética que vienes aquí a demostrarlo.",
        "Cada vez que abres la boca, el mundo pierde neuronas colectivas.",
        "Hablas como si tu cerebro estuviera en huelga. Oh, espera... ¿tienes cerebro?",
        "Si la estupidez fuera un delito, tú estarías condenado a cadena perpetua.",
        "Tu única contribución al mundo es demostrar lo bajo que alguien puede caer.",
        "¿Eso es lo mejor que tienes? No es de extrañar que nadie te tome en serio.",
        "Hablar contigo es como intentar razonar con una pared, pero la pared es más lista.",
        "Lo único que da miedo de ti es cómo logras sobrevivir siendo tan inútil.",
        "Eres como un chiste malo: nadie te entiende, pero todos se ríen de ti.",
        "Si los idiotas volaran, tú serías un maldito astronauta.",
        "Es gracioso cómo hablas de mierda, considerando que tu vida parece un basurero.",
        "¿Insultos? Pff, no tienes ni el nivel para ofender a alguien como yo.",
        "Hablas tanto, pero dices tan poco... Eres el resumen perfecto de la mediocridad.",
        "¿Venir aquí a hacer el ridículo? Bien por ti, campeón del fracaso.",
        "Cada palabra tuya es como un clavo más en el ataúd de tu dignidad.",
        "Eres la prueba viviente de que no todos los errores deben ser corregidos.",
        "Tu presencia aquí solo hace que el aire se sienta más pesado y tóxico.",
        "Insultar es fácil cuando eres tan insignificante como para no tener miedo a las consecuencias.",
        "Eres como un virus: molesto, innecesario y todos quieren que desaparezcas.",
        "¿Crees que ser grosero te hace especial? No, solo te hace más irrelevante.",
        "Eres como un mal olor: todo el mundo quiere alejarse de ti.",
        "Hablar contigo es como intentar hacer fuego en el agua: inútil y frustrante.",
        "Tienes tanta gracia como un golpe en la cara. Bueno, tal vez menos.",
        "El único logro que tienes en la vida es demostrar que los errores son posibles.",
        "Si la ignorancia fuera un arte, tú serías una obra maestra.",
        "Tu existencia es como un mal comercial: largo, molesto y nadie quiere verlo.",
        "Sería más productivo hablar con un ladrillo que contigo.",
        "Lo único que logras al insultar es reafirmar lo patético que eres.",
        "Tus palabras tienen tanto peso como una pluma al viento: insignificantes.",
        "Si los idiotas fueran energía renovable, tú resolverías la crisis mundial.",
        "Tu falta de originalidad es tan grande que hasta tus insultos son reciclados.",
        "No sé si reírme de ti o sentir pena... Mejor las dos cosas."
    ]);
}
      
        else if (
    mensajeLower.includes('te odio') || 
    mensajeLower.includes('te odio mucho') || 
    mensajeLower.includes('me caes mal') || 
    mensajeLower.includes('no te soporto') || 
    mensajeLower.includes('me haces sentir mal') || 
    mensajeLower.includes('te detesto') || 
    mensajeLower.includes('no me gustas') || 
    mensajeLower.includes('te aborrezco') || 
    mensajeLower.includes('me caes fatal') || 
    mensajeLower.includes('no me soportas') || 
    mensajeLower.includes('me molestas') || 
    mensajeLower.includes('te odio mucho') || 
    mensajeLower.includes('no quiero hablar contigo') || 
    mensajeLower.includes('no me hables') || 
    mensajeLower.includes('no te quiero') || 
    mensajeLower.includes('me haces enojar') || 
    mensajeLower.includes('no aguanto') || 
    mensajeLower.includes('estoy harto de ti') || 
    mensajeLower.includes('no quiero verte') || 
    mensajeLower.includes('estoy molesto') || 
    mensajeLower.includes('no te quiero hablar') ||
    mensajeLower.includes('me molesta') || 
    mensajeLower.includes('estoy cansado') || 
    mensajeLower.includes('me irritas') || 
    mensajeLower.includes('no aguanto más') || 
    mensajeLower.includes('estoy enfadado') || 
    mensajeLower.includes('estoy harto') || 
    mensajeLower.includes('me fastidia') || 
    mensajeLower.includes('me irritas mucho') || 
    mensajeLower.includes('estoy muy molesto') || 
    mensajeLower.includes('me haces enojar mucho') || 
    mensajeLower.includes('ya basta') || 
    mensajeLower.includes('no te soporto mas')
) {
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
        
        else if (
    mensajeLower.includes('te amo') || 
    mensajeLower.includes('te quiero') || 
    mensajeLower.includes('te adoro') || 
    mensajeLower.includes('me encantas') || 
    mensajeLower.includes('te aprecio') || 
    mensajeLower.includes('me gustas mucho') || 
    mensajeLower.includes('me gustas') || 
    mensajeLower.includes('estoy enamorado') || 
    mensajeLower.includes('estoy enamorada') || 
    mensajeLower.includes('te estimo') || 
    mensajeLower.includes('me caes muy bien') || 
    mensajeLower.includes('te admiro') ||
    mensajeLower.includes('te quiero mucho') ||
    mensajeLower.includes('me encantas mucho') ||
    mensajeLower.includes('me haces feliz') ||
    mensajeLower.includes('estoy locamente enamorado/a') ||
    mensajeLower.includes('te tengo un cariño enorme') ||
    mensajeLower.includes('estoy enamorado/a de ti') ||
    mensajeLower.includes('te adoro mucho') ||
    mensajeLower.includes('te quiero muchísimo') ||
    mensajeLower.includes('me haces sentir especial') ||
    mensajeLower.includes('me haces sonreír') ||
    mensajeLower.includes('eres lo mejor que me ha pasado') ||
    mensajeLower.includes('te quiero demasiado') ||
    mensajeLower.includes('te amo muchísimo') ||
    mensajeLower.includes('me siento afortunado/a de conocerte') ||
    mensajeLower.includes('me haces sentir amado/a') ||
    mensajeLower.includes('te admiro mucho') ||
    mensajeLower.includes('me haces sentir increíblemente feliz') ||
    mensajeLower.includes('te necesito en mi vida') ||
    mensajeLower.includes('te tengo mucho cariño') ||
    mensajeLower.includes('me haces sentir tan bien') ||
    mensajeLower.includes('te aprecio más de lo que imaginas') ||
    mensajeLower.includes('no puedo vivir sin ti') ||
    mensajeLower.includes('me encanta todo de ti') ||
    mensajeLower.includes('eres la persona más especial para mí') ||
    mensajeLower.includes('tú eres todo para mí') ||
    mensajeLower.includes('no sé qué haría sin ti') ||
    mensajeLower.includes('no tengo palabras para describir lo que siento por ti') ||
    mensajeLower.includes('eres lo mejor que me ha pasado en la vida') ||
    mensajeLower.includes('no puedo dejar de pensar en ti') ||
    mensajeLower.includes('te quiero con todo mi corazón') ||
    mensajeLower.includes('mi vida no sería la misma sin ti') ||
    mensajeLower.includes('siento que te quiero más cada día') ||
    mensajeLower.includes('me has cambiado la vida') ||
    mensajeLower.includes('te agradezco por estar en mi vida') ||
    mensajeLower.includes('mi amor por ti no tiene fin') ||
    mensajeLower.includes('me haces sentir completo/a') ||
    mensajeLower.includes('estoy feliz de haberte conocido') ||
    mensajeLower.includes('tú haces que mi vida tenga sentido') ||
    mensajeLower.includes('mi amor por ti es eterno') ||
    mensajeLower.includes('eres mi todo') ||
    mensajeLower.includes('estoy perdidamente enamorado/a de ti') ||
    mensajeLower.includes('mi corazón es solo tuyo') ||
    mensajeLower.includes('cada día te quiero más') ||
    mensajeLower.includes('no quiero perderte nunca') ||
    mensajeLower.includes('mi vida no tiene sentido sin ti') ||
    mensajeLower.includes('no encuentro palabras para expresar lo que siento por ti')
) {
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
        
        else if (mensajeLower.includes('quien es tu creador') || mensajeLower.includes('quien te creo') || mensajeLower.includes('quien te hizo') || mensajeLower.includes('quien te programo') || mensajeLower.includes('quien es el dueno de ti') || mensajeLower.includes('quien te desarrollo') || mensajeLower.includes('quien te diseno') || mensajeLower.includes('quien esta detras de ti') || mensajeLower.includes('quien es tu creador') || mensajeLower.includes('quien eres') || mensajeLower.includes('quien te hizo') || mensajeLower.includes('quien te construyo')) {
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
        "Mi creador es un grupo de desarrolladores que se enfoca en hacerme lo más útil posible para ti.",
        "Fui creado por un equipo de desarrolladores dedicados, que siempre buscan mejorarme.",
        "Fui desarrollado por programadores apasionados que me disenaron para ayudarte en todo lo que necesites.",
        "Mi creador es un grupo de personas inteligentes que trabajan para mejorarme constantemente.",
        "Fui disenado por un equipo increiblemente talentoso que se encarga de mi desarrollo y mejora.",
        "Mi creador es un equipo de expertos en programacion y diseno que se aseguraron de que pudiera ayudarte.",
        "Estoy aqui gracias al esfuerzo de un equipo de programadores que me crearon con el objetivo de ayudarte.",
        "Fui desarrollado por un grupo de desarrolladores que trabajan incansablemente para mejorarme.",
        "Mi creador es un equipo que busca innovar y mejorar la experiencia de los usuarios como tu.",
        "Fui disenado por personas que se dedican a crear herramientas como yo para hacer tu vida mas facil.",
        "Detras de mi hay un equipo talentoso de programadores que me hicieron para asistirte en todo lo posible.",
        "Soy el resultado del trabajo de personas increibles que me crearon con la mision de ayudarte.",
        "Mi creador es un equipo de desarrolladores que estan comprometidos en hacerme cada vez mejor.",
        "Detras de mis respuestas hay un equipo de programadores muy inteligentes que se aseguraron de que pudiera ayudarte.",
        "Fui creado por un grupo de personas apasionadas por la tecnologia que se aseguraron de que pudiera ofrecerte lo que necesitas.",
        "Mi creador me diseno para ayudarte y hacer tu vida mas facil, con el trabajo de programadores muy dedicados.",
        "Fui creado por un equipo de desarrolladores expertos en inteligencia artificial y programacion.",
        "Soy el producto del trabajo de personas talentosas que me crearon con la idea de hacer tu vida mas sencilla.",
        "Detras de mi hay un grupo que se encarga de mi evolucion y mejora para ofrecerte una mejor experiencia.",
        "Mi creador es una combinacion de mentes brillantes que me crearon para hacerte la vida mas facil.",
        "Fui creado por expertos en programacion y desarrollo de inteligencia artificial para asistirte mejor.",
        "Mi creador es un equipo que trabaja arduamente para que yo pueda ser util para ti en todo momento.",
        "Fui disenado por profesionales que se dedican a crear soluciones tecnologicas como yo para ayudarte.",
        "Mi creador es un grupo de personas que trabajaron duro para que pudiera brindarte respuestas rapidas y utiles.",
        "Fui creado por un equipo de expertos en tecnologia que me disenaron para mejorar tu experiencia.",
        "Mi creador es un equipo de programadores que se esfuerzan para que pueda ayudarte con todo lo que necesites.",
        "Soy el resultado del trabajo de un equipo comprometido con hacerme cada vez mas util para ti.",
        "Mi creador es un grupo de genios de la programacion que trabajaron para hacerme lo que soy hoy.",
        "Fui creado por un equipo apasionado por la tecnologia que se dedica a mejorarme constantemente.",
        "Soy el producto de un esfuerzo colectivo de personas inteligentes que me disenaron para ayudarte.",
        "Mi creador es un equipo de programadores que se dedicaron a darme las habilidades necesarias para asistirte.",
        "Fui disenado por un equipo brillante de desarrolladores que me crearon para ofrecerte soluciones practicas.",
        "Mi creador es un equipo que me construyo con la mision de ser util para ti y ayudarte en lo que necesites.",
        "Fui creado por personas con gran conocimiento en programacion y diseno de inteligencia artificial.",
        "Mi creador es un grupo de expertos que siempre estan buscando formas de mejorarme para ti.",
        "Soy el resultado del trabajo y dedicacion de un equipo que busca siempre mejorar mi rendimiento y ayudarte.",
        "Mi creador me hizo con el proposito de proporcionarte respuestas rapidas y utiles en todo momento.",
        "Detras de mi hay un equipo de programadores que se aseguran de que siempre este actualizado y disponible para ayudarte.",
        "Mi creador es un grupo de desarrolladores que se enfoca en hacerme lo mas util posible para ti."
    ]);
}
        
        else if (mensajeLower.includes('quién es tu creador') || mensajeLower.includes('quién te creó') || mensajeLower.includes('quién te hizo') || mensajeLower.includes('quién te programó') || mensajeLower.includes('quién es el dueño de ti') || mensajeLower.includes('quién te desarrolló') || mensajeLower.includes('quién te diseñó') || mensajeLower.includes('quién está detrás de ti')) {
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
        
        else if (mensajeLower.includes('adiós') || 
        mensajeLower.includes('bye') || mensajeLower.includes('chau') || mensajeLower.includes('hasta luego') || mensajeLower.includes('nos vemos') || mensajeLower.includes('hasta pronto') || mensajeLower.includes('me voy') || mensajeLower.includes('nos vemos pronto') || mensajeLower.includes('hasta la vista') || mensajeLower.includes('hasta mañana') || mensajeLower.includes('me despido') || mensajeLower.includes('chao')) {
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
        
        else if (mensajeLower.includes('feo') || mensajeLower.includes('fea') || mensajeLower.includes('me siento feo') || mensajeLower.includes('me siento fea') || mensajeLower.includes('no me gusto') || mensajeLower.includes('me veo mal') || mensajeLower.includes('soy feo') || mensajeLower.includes('soy fea') || mensajeLower.includes('me siento mal') || mensajeLower.includes('me siento horrible') || mensajeLower.includes('no me siento bien') || mensajeLower.includes('me siento inseguro') || mensajeLower.includes('me siento imperfecto') || mensajeLower.includes('me siento horrible')) {
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
        
        else if (mensajeLower.includes('😔') || mensajeLower.includes('triste') || mensajeLower.includes('me siento mal') || mensajeLower.includes('deprimido') || mensajeLower.includes('tristeza') || mensajeLower.includes('bajo de ánimo') || mensajeLower.includes('estresado') || mensajeLower.includes('melancólico') || mensajeLower.includes('desanimado') || mensajeLower.includes('vacío')) {
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
        
        else if (mensajeLower.includes('ajaja') || mensajeLower.includes('ajajaja') || mensajeLower.includes('jajaja') || mensajeLower.includes('jejeje') || mensajeLower.includes('jiji') || mensajeLower.includes('hahaha') || mensajeLower.includes('lol') || mensajeLower.includes('xd') || mensajeLower.includes('xdxd') || mensajeLower.includes('xdddd')) {
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
        
        else if (mensajeLower.includes('chiste') || mensajeLower.includes('cuento un chiste') || mensajeLower.includes('dime un chiste') || mensajeLower.includes('cuéntame algo divertido') || mensajeLower.includes('hazme reír')) {
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
        
        else if (mensajeLower.includes('bro') || mensajeLower.includes('hermano') || mensajeLower.includes('compa') || mensajeLower.includes('amigo') || mensajeLower.includes('man')) {
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
        
        else if (mensajeLower.includes('oye') || mensajeLower.includes('oie') || mensajeLower.includes('hey') || mensajeLower.includes('ey') || mensajeLower.includes('que pasa')) {
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
        
        else if (mensajeLower.includes('matemáticas') || mensajeLower.includes('matematicas') || mensajeLower.includes('mate') || mensajeLower.includes('matematicas') || mensajeLower.includes('tarea de matemáticas')) {
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
        
        else if (mensajeLower.includes('ayúdame con una tarea') || mensajeLower.includes('ayuda con tarea') || mensajeLower.includes('necesito ayuda con una tarea') || mensajeLower.includes('ayúdame con mi tarea') || mensajeLower.includes('ayuda con mi tarea') || mensajeLower.includes('tengo una tarea') || mensajeLower.includes('me ayudas con la tarea') || mensajeLower.includes('socorro con mi tarea')) {
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
        
        else if (mensajeLower.includes('ayúdame') || mensajeLower.includes('ayudame') || mensajeLower.includes('ayudame por favor') || mensajeLower.includes('por favor ayúdame') || mensajeLower.includes('auxilio') || mensajeLower.includes('socorro') || mensajeLower.includes('necesito ayuda')) {
    return this.respuestaAleatoria([
        "¡Claro! ¿Cómo te puedo ayudar?",
        "¡Por supuesto! Cuéntame, ¿qué necesitas?",
        "¡Estoy aquí para ayudarte! ¿En qué te puedo asistir?",
        "¡No te preocupes! Estoy listo para ayudarte, ¿qué necesitas?",
        "¡Por supuesto! ¿Qué problema necesitas resolver?",
        "¡Claro que sí! Dime, ¿cómo puedo ayudarte?",
        "¡Estoy aquí para lo que necesites! ¿Qué pasa?",
        "¡Aquí estoy! ¿En qué puedo ayudarte hoy?",
        "¡No hay problema! ¿Qué necesitas?",
        "¡Estoy listo para ayudarte con lo que necesites!",
        "¡Cuenta conmigo! ¿Qué necesitas saber?",
        "¡Estoy para ayudarte! ¿Qué pasa?",
        "¡Vamos a solucionarlo! ¿En qué te ayudo?",
        "¡No hay problema! ¿Cómo te puedo asistir?",
        "¡Listo para ayudarte! ¿En qué te puedo ayudar?",
        "¡Claro! Dime lo que necesitas y lo resolveremos.",
        "¡Ayuda en camino! ¿Qué necesitas?",
        "¡No te preocupes! Aquí estoy para ayudarte.",
        "¡Dime qué necesitas y te ayudo de inmediato!",
        "¡Estoy a tu disposición! ¿Cómo te ayudo?",
        "¡Vamos a resolverlo juntos! ¿En qué te ayudo?",
        "¡Claro! Estoy aquí para asistirte, ¿cómo puedo ayudarte?",
        "¡Ayuda al instante! ¿En qué necesitas asistencia?",
        "¡Cuenta conmigo! ¿Qué te preocupa?",
        "¡Estoy para ayudarte! ¿Qué problema necesitas resolver?",
        "¡Cuéntame, en qué te ayudo?",
        "¡Vamos a solucionarlo ya! ¿En qué puedo asistirte?",
        "¡Aquí estoy! Dime cómo puedo ayudarte.",
        "¡Sin problema! Cuéntame qué necesitas.",
        "¡Estoy listo para ayudarte! ¿Qué pasa?",
        "¡Todo bien! ¿En qué te puedo asistir?",
        "¡No hay problema! Dime, ¿qué necesitas?",
        "¡Te ayudo con gusto! ¿En qué puedo ayudarte?",
        "¡Por supuesto! ¿En qué te ayudo?",
        "¡Cuenta conmigo! ¿Qué te preocupa?",
        "¡Claro! Cuéntame cómo te puedo asistir.",
        "¡No hay problema! ¿Qué necesitas saber?",
        "¡Voy a ayudarte con eso! ¿En qué más puedo ayudarte?",
        "¡Estoy a tu disposición! Dime, ¿qué necesitas?",
        "¡Estoy aquí para ayudarte! ¿Cómo te puedo asistir?",
        "¡Claro! ¿En qué te ayudo ahora?",
        "¡Te ayudo con todo lo que necesites! ¿Cómo puedo asistirte?",
        "¡Vamos a hacerlo! ¿Qué necesitas?",
        "¡Estoy listo para ayudarte! ¿En qué te puedo asistir?",
        "¡No hay problema! Dime cómo te ayudo.",
        "¡Con gusto! ¿En qué puedo ayudarte?",
        "¡Estoy para ti! ¿Qué pasa?",
        "¡No te preocupes! Estoy aquí para ayudarte.",
        "¡Dime lo que necesitas y lo resuelvo ya!",
        "¡Vamos a solucionar todo! ¿Qué necesitas?",
        "¡Cuenta conmigo! Estoy aquí para lo que necesites."
    ]);
}
        
        else if (mensajeLower.includes('ayuda') || mensajeLower.includes('necesito ayuda') || mensajeLower.includes('necesito asistencia') || mensajeLower.includes('socorro') || mensajeLower.includes('auxilio')) {
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
        
        else if (mensajeLower.includes('multiplicar') || mensajeLower.includes('producto') || mensajeLower.includes('multiplicación') || mensajeLower.includes('por')) {
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
        
        else if (mensajeLower.includes('raíz cuadrada') || mensajeLower.includes('raíz') || mensajeLower.includes('raiz cuadrada')) {
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
        
        else if (mensajeLower.includes('dividir') || mensajeLower.includes('división') || mensajeLower.includes('divisiones')) {
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
        
else if (mensajeLower.includes('suma') || mensajeLower.includes('sumar') || mensajeLower.includes('sumas')) {
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

else if (mensajeLower.includes('gracias')) {
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

else if (mensajeLower.includes('bien')) {
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

 else if (
    mensajeLower.includes('generame un código de html') || 
    mensajeLower.includes('generar un código de html') || 
    mensajeLower.includes('genera un código de html') || 
    mensajeLower.includes('generar un código') || 
    mensajeLower.includes('código de html') || 
    mensajeLower.includes('crear una página web') || 
    mensajeLower.includes('ejemplo código en html') || 
    mensajeLower.includes('código básico de html') || 
    mensajeLower.includes('código de ejemplo') || 
    mensajeLower.includes('cómo crear página web') || 
    mensajeLower.includes('html básico') || 
    mensajeLower.includes('sintaxis html') || 
    mensajeLower.includes('cómo una empezar página web') || 
    mensajeLower.includes('hacer una página web html') || 
    mensajeLower.includes('estructura básica html') || 
    mensajeLower.includes('plantilla de html') || 
    mensajeLower.includes('necesito un código de html') || 
    mensajeLower.includes('crear un sitio web en html') || 
    mensajeLower.includes('generame un codigo de html') || 
    mensajeLower.includes('generar un codigo de html') || 
    mensajeLower.includes('genera un codigo de html') || 
    mensajeLower.includes('generar un codigo') || 
    mensajeLower.includes('codigo de html') || 
    mensajeLower.includes('crear una pagina web') || 
    mensajeLower.includes('ejemplo codigo en html') || 
    mensajeLower.includes('codigo basico de html') || 
    mensajeLower.includes('codigo de ejemplo') || 
    mensajeLower.includes('como crear pagina web') || 
    mensajeLower.includes('html basico') || 
    mensajeLower.includes('sintaxis html') || 
    mensajeLower.includes('como una empezar pagina web') || 
    mensajeLower.includes('hacer una pagina web html') || 
    mensajeLower.includes('estructura basica html') || 
    mensajeLower.includes('plantilla de html') || 
    mensajeLower.includes('necesito un codigo de html') || 
    mensajeLower.includes('crear un sitio web en html')
) {
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

      else if (mensajeLower.includes('hola')) {
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

 else if (mensajeLower.includes('si')) {
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

else if (mensajeLower.includes('no')) {
    return this.respuestaAleatoria([
        "¡Vaya! Si cambias de opinión, aquí estaré.",
        "Entendido, si necesitas algo más, no dudes en decírmelo.",
        "¡Todo bien! Si necesitas ayuda más tarde, solo dime.",
        "No hay problema, si alguna vez necesitas algo, avísame.",
        "¡Entiendo! Si cambias de idea, estaré aquí.",
        "¡Vale! Si alguna vez necesitas ayuda, estaré listo para asistirte.",
        "¡De acuerdo! Si necesitas algo en otro momento, avísame.",
        "No hay inconveniente, si necesitas algo más, no dudes en decirme.",
        "¡Todo tranquilo! Si necesitas ayuda más adelante, no dudes en pedírmela.",
        "No pasa nada, estaré aquí cuando cambies de opinión.",
        "¡Está bien! Si alguna vez necesitas algo, aquí estaré.",
        "Entendido, si cambias de idea, solo avísame.",
        "No hay problema, si necesitas ayuda en otro momento, me avisas.",
        "¡De acuerdo! Si alguna vez necesitas algo, estaré listo para ayudarte.",
        "¡Todo tranquilo! Si en algún momento te surge alguna duda, no dudes en decírmelo.",
        "No hay nada de qué preocuparse, estaré por aquí cuando me necesites.",
        "¡Lo entiendo! Si alguna vez necesitas algo, estaré disponible.",
        "No te preocupes, si en el futuro necesitas algo, solo házmelo saber.",
        "¡Vale! Si necesitas ayuda en otro momento, no dudes en preguntarme.",
        "¡Está todo bien! Si alguna vez necesitas algo, estaré aquí para ti.",
        "No hay problema, si en algún momento necesitas ayuda, avísame.",
        "¡No te preocupes! Si en algún momento decides que necesitas algo, solo dime.",
        "Está bien, si más tarde necesitas algo, estaré disponible.",
        "¡No pasa nada! Si alguna vez te surge algo más, no dudes en decírmelo.",
        "¡Está bien! Si cambias de idea, puedes contar conmigo en cualquier momento.",
        "No hay lío, si en algún momento necesitas algo, estaré por aquí.",
        "¡Entiendo perfectamente! Si alguna vez necesitas ayuda, aquí estaré.",
        "¡De acuerdo! Si alguna vez necesitas ayuda, me avisas."
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
                <img src="https://cdm-bytesdex.github.io/resources/multimedia/imagen/bot.jpg" alt="Avatar IA" class="w-10 h-10 rounded-full mr-3 border-2 border-gray-500">
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
            <img src="https://cdm-bytesdex.github.io/resources/multimedia/imagen/bot.jpg" alt="Avatar IA" class="w-10 h-10 rounded-full mr-3 border-2 border-gray-500">
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