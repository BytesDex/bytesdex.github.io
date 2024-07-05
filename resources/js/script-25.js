        const chatLog = document.getElementById('chat-log');
        const userInput = document.getElementById('user-input');

        function sendMessage(message, sender) {
            const chatMessage = document.createElement('div');
            chatMessage.classList.add(sender === 'CodeBot' ? 'codebot-message' : 'user-message');
            chatLog.appendChild(chatMessage);

            if (sender === 'CodeBot') {
                typeMessage(message, chatMessage);
            } else {
                chatMessage.innerText = message;
            }

            chatLog.scrollTop = chatLog.scrollHeight;
        }

        function typeMessage(message, element) {
            let index = 0;
            const interval = setInterval(function() {
                element.innerText += message.charAt(index);
                index++;
                if (index >= message.length) {
                    clearInterval(interval);
                }
            }, 50);
        }

        function handleUserInput() {
            const message = userInput.value.trim().toLowerCase();
            if (message !== '') {
                sendMessage('Tú: ' + message, 'user');
                const botResponse = lenguaje(message);
                sendMessage('CodeBot: ' + botResponse, 'CodeBot');
                userInput.value = '';
            }
        }

        userInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                handleUserInput();
            }
        });

        function lenguaje(texto) {
            var respuesta;
            texto = texto.toLowerCase();
            var respuestas = {
                "hola": ["¡Hola! ¿Cómo estás?", "¡Saludos! ¿En qué puedo ayudarte hoy?", "Hola, ¿hay algo específico de lo que te gustaría hablar?", "¡Hola! ¿Hay algo en lo que pueda asistirte?", "Hola, bienvenido. ¿En qué puedo ayudarte?", "Saludos. ¿Qué tema te trae hoy por aquí?", "¡Hola! Siempre es bueno saludar. ¿En qué puedo colaborar contigo?"],
                "bien": ["Qué bueno", "Me alegro", "Me encanta saber eso", "Si estás bien, ¡eso es genial! ¿Hay algo en particular de lo que te gustaría hablar o preguntar?", "Me alegra escuchar que estás bien. ¿En qué puedo ayudarte hoy?", "¡Excelente! ¿Hay algo que quieras compartir o preguntar estando tan bien?", "Estar bien es genial. ¿Cómo puedo contribuir a tu día?", "¡Bienestar es música para mis 'oídos'! ¿En qué puedo ser de utilidad?"],
                "mal": ["Lamento escuchar eso. ¿Hay algo en particular que esté contribuyendo a cómo te sientes?", "A veces, expresar cómo te sientes puede ayudar a aliviar parte de la carga emocional.", "Recuerda que está bien pedir ayuda cuando te sientes mal. ¿Hay alguien con quien te sientas cómodo hablando sobre esto?"],
    "dormir": ["Lo siento por escuchar eso. ¿Has probado alguna técnica de relajación antes de acostarte?", "La calidad del sueño es importante para tu bienestar. ¿Hay algo que pueda estar afectando tu sueño?", "A veces, establecer una rutina de sueño regular puede ayudar a mejorar la calidad del sueño."],
    "presión": ["La presión puede ser difícil de manejar. ¿Hay algo específico que esté contribuyendo a esa presión?", "Recuerda que es importante cuidar de ti mismo y establecer límites saludables.", "¿Hay alguna manera en que pueda ayudarte a manejar la presión que estás sintiendo?"],
    "futuro": ["Preocuparse por el futuro es algo común. ¿Hay algo en particular que te preocupe?", "A veces, centrarse en el presente y tomar las cosas un paso a la vez puede ayudar a reducir la ansiedad sobre el futuro.", "Recuerda que el futuro es incierto y está bien sentirse preocupado, pero también es importante mantener una perspectiva positiva."],
    "suficientemente bueno": ["Es normal tener momentos de duda sobre uno mismo. ¿Qué te hace sentir así?", "Recuerda que tus pensamientos y sentimientos no siempre reflejan la realidad. Eres valioso y capaz.", "La autoaceptación y el autocuidado son importantes para cultivar una buena autoestima. ¿Hay algo que puedas hacer para cuidarte a ti mismo?"],
    "estrés": ["Lamento escuchar eso. ¿Hay algo específico que esté causando tu estrés?", "El estrés puede ser abrumador, ¿has probado alguna técnica de relajación?", "Recuerda tomarte un tiempo para ti mismo y cuidar tu bienestar."],
    "abrumado": ["Te entiendo, sentirse abrumado puede ser difícil de manejar.", "¿Hay algo en particular que esté contribuyendo a esa sensación de abrumamiento?", "A veces, dividir las tareas en partes más pequeñas puede ayudar a manejar la sensación de abrumamiento."],
    "vida": ["Es normal sentirse perdido a veces. ¿Hay algo que te interese o te apasione?", "Explorar tus intereses y valores puede ayudarte a encontrar un camino que sea significativo para ti.", "¿Te gustaría hablar sobre tus metas y cómo alcanzarlas?"],
    "inseguro": ["La inseguridad es algo que muchas personas experimentan en ciertos momentos. ¿Qué te hace sentir inseguro?", "Recuerda que eres capaz y valioso, a pesar de cualquier inseguridad que puedas sentir.", "A veces, enfrentar tus miedos puede ayudar a reducir la sensación de inseguridad."],
    "ansiedad": ["Lo siento mucho por lo que estás pasando.", "¿Hay algo en particular que desencadene tu ansiedad?", "¿Has considerado hablar con un profesional sobre esto?"],
    "solo": ["Te escucho, y estoy aquí para ti.", "A veces, sentirse solo puede ser abrumador. ¿Hay algo que puedas hacer para conectarte con otras personas?", "Recuerda que no estás solo, siempre hay personas dispuestas a escucharte."],
    "deprimido": ["Lamento escuchar eso. ¿Has considerado buscar ayuda profesional?", "La depresión puede ser muy difícil de enfrentar solo. ¿Te gustaría hablar más al respecto?", "Es importante que cuides de ti mismo. ¿Hay algo que te haga sentir un poco mejor?"],
   "suicidar": ["Es crucial buscar ayuda de inmediato. Por favor, considera comunicarte con un ser querido o llamar a una línea de ayuda de emergencia. Tu vida es valiosa y hay personas dispuestas a apoyarte.", "Recuerda que no estás solo en esto. Hablar con un profesional de la salud mental puede proporcionarte el apoyo y la orientación que necesitas para superar estos sentimientos.", "Estoy aquí para ti y quiero que sepas que hay esperanza y ayuda disponible para ti. Por favor, busca ayuda de inmediato."],
    "atrapado": ["Entiendo cómo te sientes. ¿Qué te hace sentir atrapado?", "A veces, hablar sobre lo que te está haciendo sentir atrapado puede ayudar a encontrar soluciones.", "Recuerda que siempre hay opciones disponibles, incluso si no las ves en este momento."],
    "pánico": ["Lo siento mucho por lo que estás experimentando. ¿Has experimentado esto antes?", "Respirar lenta y profundamente puede ayudar a calmar los ataques de pánico. ¿Has intentado alguna técnica de respiración?", "Buscar ayuda profesional puede ser útil para aprender a manejar los ataques de pánico."],
    "por las responsabilidades": ["Es comprensible sentirse abrumado por las responsabilidades. ¿Hay algo específico que esté causando esa sensación de agobio?", "A veces, delegar tareas o establecer prioridades puede ayudar a manejar la carga de responsabilidades.", "Recuerda que está bien pedir ayuda cuando te sientes abrumado."],
    "concentrarme": ["La falta de concentración puede ser difícil de manejar. ¿Has intentado establecer un horario o un ambiente de trabajo más tranquilo?", "Tomar descansos regulares y practicar la atención plena pueden ayudar a mejorar la concentración. ¿Has probado alguna de estas técnicas?", "Recuerda que es importante ser amable contigo mismo cuando te resulta difícil concentrarte."],
  "matar": ["Es preocupante escuchar eso. Tu bienestar es importante y hay formas de ayudarte a superar estos sentimientos. Te animo a hablar con alguien en quien confíes o buscar ayuda profesional. Si necesitas apoyo inmediato, considera llamar a una línea de ayuda de emergencia. Siempre hay personas dispuestas a escucharte y ayudarte."],
   "tengo pensamientos suicidas": ["Entiendo que estés pasando por un momento difícil. Es importante que hables con alguien de confianza sobre cómo te sientes. También puedes llamar a una línea de ayuda de emergencia para obtener apoyo inmediato. Tu bienestar es importante."],
    "tengo pensamientos de dañarme a mí mismo": ["Lamento escuchar eso. Hablar sobre cómo te sientes puede ayudar. Si no tienes a alguien con quien hablar, considera llamar a una línea de ayuda de emergencia. Siempre hay personas dispuestas a escucharte y ayudarte."],
   "suicidas": ["Es fundamental buscar ayuda de inmediato. Por favor, comunícate con un ser querido de confianza o llama a una línea de ayuda de emergencia. Tu vida es valiosa y hay personas dispuestas a apoyarte.", "Recuerda que no estás solo en esto. Hablar con un profesional de la salud mental puede proporcionarte el apoyo y la orientación que necesitas para superar estos sentimientos.", "Estoy aquí para ti y quiero que sepas que hay esperanza y ayuda disponible para ti. Por favor, busca ayuda de inmediato."],
    "mismo": ["Es crucial buscar ayuda de inmediato. Por favor, comunícate con alguien en quien confíes o llama a una línea de ayuda de emergencia. Tu seguridad y bienestar son importantes.", "Recuerda que no estás solo en esto. Hablar con un profesional de la salud mental puede ayudarte a entender y manejar estos pensamientos de una manera segura y saludable.", "Estoy aquí para apoyarte en este momento difícil. Por favor, busca ayuda lo antes posible."],
    "matarme": ["Es fundamental buscar ayuda inmediata. Por favor, comunícate con un ser querido o llama a una línea de ayuda de emergencia. Tu vida es valiosa y hay personas dispuestas a apoyarte.", "Recuerda que no estás solo en esto. Hablar con un profesional de la salud mental puede proporcionarte el apoyo y la orientación que necesitas para superar estos sentimientos.", "Estoy aquí para ti y quiero que sepas que hay esperanza y ayuda disponible para ti. Por favor, busca ayuda de inmediato."],
  "atrapado": ["Entiendo cómo te sientes. ¿Qué te hace sentir atrapado?", "A veces, hablar sobre lo que te está haciendo sentir atrapado puede ayudar a encontrar soluciones.", "Recuerda que siempre hay opciones disponibles, incluso si no las ves en este momento."],
    "ataques de pánico": ["Lo siento mucho por lo que estás experimentando. ¿Has experimentado esto antes?", "Respirar lenta y profundamente puede ayudar a calmar los ataques de pánico. ¿Has intentado alguna técnica de respiración?", "Buscar ayuda profesional puede ser útil para aprender a manejar los ataques de pánico."],
    "responsabilidades": ["Es comprensible sentirse abrumado por las responsabilidades. ¿Hay algo específico que esté causando esa sensación de agobio?", "A veces, delegar tareas o establecer prioridades puede ayudar a manejar la carga de responsabilidades.", "Recuerda que está bien pedir ayuda cuando te sientes abrumado."],
    "concentrarme": ["La falta de concentración puede ser difícil de manejar. ¿Has intentado establecer un horario o un ambiente de trabajo más tranquilo?", "Tomar descansos regulares y practicar la atención plena pueden ayudar a mejorar la concentración. ¿Has probado alguna de estas técnicas?", "Recuerda que es importante ser amable contigo mismo cuando te resulta difícil concentrarte."],
  "vacío": ["Lamento escuchar eso. Sentirse vacío puede ser una experiencia abrumadora. ¿Hay algo específico que crees que contribuya a esa sensación?", "A veces, explorar tus intereses y actividades que te apasionen puede ayudar a llenar ese vacío. ¿Hay algo que te guste hacer?", "Recuerda que tu valor como persona va más allá de cómo te sientes en este momento. ¿Hay algo que te haga sentir más conectado contigo mismo o con los demás?"],
    "esperanza": ["Entiendo cómo te sientes. Sentirse sin esperanza puede ser muy desafiante. ¿Hay algo en particular que te haya llevado a sentirte así?", "Recuerda que las emociones son temporales y que la esperanza puede volver. ¿Hay algo que te haya dado esperanza en el pasado?", "Buscar apoyo de amigos, familiares o profesionales de la salud mental puede ayudar a renovar tu esperanza. ¿Hay alguien en quien puedas confiar para hablar sobre cómo te sientes?"],
    "pasado": ["Lamento escuchar eso. Sentirse atrapado en el pasado puede ser una carga difícil de llevar. ¿Hay algún evento específico que te esté afectando?", "A veces, trabajar con un terapeuta puede ayudar a procesar y dejar ir eventos pasados. ¿Has considerado hablar con un profesional de la salud mental?", "Recuerda que tienes el poder de cambiar tu perspectiva y enfocarte en el presente. ¿Hay algo que puedas hacer ahora mismo para cuidar de ti mismo?"],
    "preocupado": ["Es comprensible sentirse preocupado, pero también es importante encontrar formas de manejar esa ansiedad. ¿Has probado alguna técnica de relajación como la respiración profunda o la meditación?", "Identificar las preocupaciones específicas y escribirlas puede ayudar a clarificar tus pensamientos. ¿Hay algo que puedas hacer para abordar esas preocupaciones?", "Recuerda que es normal preocuparse, pero también es importante encontrar un equilibrio y cuidar de tu bienestar emocional. ¿Hay algo que te ayude a distraerte de tus preocupaciones por un tiempo?"],
    "cansado": ["Lamento escuchar eso. La fatiga constante puede ser agotadora tanto física como emocionalmente. ¿Has considerado hablar con un médico para descartar posibles causas médicas?", "Priorizar el descanso y el autocuidado es fundamental cuando te sientes constantemente cansado. ¿Hay algo que puedas hacer para mejorar la calidad de tu sueño o para descansar durante el día?", "Recuerda que es importante escuchar a tu cuerpo y tomar descansos cuando lo necesites. ¿Hay alguna actividad que te ayude a recargar energías o que te brinde alegría?"],
    "errores": ["Es normal sentirse así después de cometer un error, pero es importante recordar que todos cometemos errores y que son oportunidades para aprender y crecer. ¿Hay algo específico que te esté costando trabajo superar?", "Practicar la autocompasión y recordar que eres humano puede ayudarte a perdonarte a ti mismo por tus errores. ¿Hay alguna actividad que te ayude a cultivar la autocompasión?", "Recuerda que tus errores no definen tu valía como persona. ¿Hay algo que puedas hacer para reconstruir tu confianza en ti mismo y seguir adelante?"],
    "demás": ["Es común compararse con los demás, pero es importante recordar que cada persona es única y tiene sus propias fortalezas y debilidades. ¿Hay algo específico en lo que te estés comparando?", "Practicar la gratitud y enfocarte en tus propias fortalezas puede ayudarte a sentirte más seguro de ti mismo. ¿Hay algo que te guste de ti mismo o de tu vida?", "Recuerda que las comparaciones solo roban tu alegría y tu paz interior. ¿Hay alguna actividad que te ayude a dejar de compararte con los demás y a apreciar tu propio camino?"],
    "los demás": ["Lamento escuchar eso. Sentirse abrumado por las expectativas de los demás puede ser una carga pesada de llevar. ¿Hay algo específico que esté contribuyendo a esa sensación de abrumamiento?", "Establecer límites saludables y comunicar tus necesidades a los demás puede ayudarte a manejar mejor las expectativas externas. ¿Hay alguien con quien te sientas cómodo hablando sobre cómo te sientes?", "Recuerda que es importante priorizar tu bienestar emocional y no comprometer tu propia felicidad para cumplir con las expectativas de los demás. ¿Hay alguna acción que puedas tomar para protegerte y cuidarte a ti mismo?"],
    "manejar el estrés": ["Es comprensible sentirse así cuando estás bajo una gran cantidad de estrés. ¿Has probado alguna técnica de manejo del estrés como el ejercicio, la meditación o la escritura?", "Identificar las fuentes de estrés en tu vida y buscar maneras de abordarlas de manera efectiva puede ayudarte a sentirte más capacitado para manejar el estrés. ¿Hay algo específico que esté contribuyendo a tu nivel de estrés?", "Recuerda que es importante cuidar de tu bienestar emocional y pedir ayuda cuando la necesites. ¿Hay alguien en quien confíes para hablar sobre cómo te sientes o para brindarte apoyo?"],
    "emociones": ["Lamento escuchar eso. Sentirse abrumado por las emociones puede ser muy desafiante. ¿Has considerado hablar con un profesional de la salud mental para obtener apoyo?", "Practicar la autoaceptación y aprender a manejar las emociones de manera saludable puede ayudarte a sentirte más en control. ¿Hay alguna actividad que te ayude a calmarte cuando te sientes abrumado?", "Recuerda que es normal experimentar una amplia gama de emociones, pero también es importante aprender a regularlas para mantener tu bienestar emocional. ¿Hay alguna técnica de autocontrol emocional que te gustaría probar?"],
            };
            var regex = new RegExp(Object.keys(respuestas).join("|"), "i");
            if (regex.test(texto)) {
                var clave = texto.match(regex)[0];
                var opciones = respuestas[clave];
                var indice = Math.floor(Math.random() * opciones.length);
                var elegida = opciones[indice];
                respuesta = elegida;
            } else {
                respuesta = "No entiendo lo que dices";
            }
            return respuesta;
        }
