
function initI18Next() {

    
    i18next.init({
        lng: 'es', // default language
        debug: true,
        resources: {
            en: {


                translation: {
                    //Index HTML
                    "Index-Buttons-Translate": `Español`,

                    "Index-Buttons-MyProjects": `My Projects`,

                    "Index-AboutMe-Title": `About Me`,

                    "Index-AboutMe-Text": `Hello! I'm Mario, I'm a game programmer focused on Unity C#. I have worked on multiple games
                    including 2D side-scrollers, 2D fighters, Third-person adventures, 3D side-scrollers, 3D First
                    Person Shooters, and VR Experiences. I am currently working on an FPS survival game as a personal
                    project, and on a motion tracking game for TUAS GameLab developed with the ZED 2 AI camera.
                    Right now, and what I enjoy the most is making 2D or side-scroller games like <a href="FateGifs.html">Fate: 
                    The Curse Of Belzegor</a>, or <a href="HopeGifs.html">Our Last Hope</a>, but I'm still trying new game 
                    genres and different game mechanics. Feel free to explore my portfolio to learn more about my work!`,

                    //MyProjects HTML







                }
                
            },
            es: {
                translation: {
                    "Index-Buttons-Translate": `English`,
                    "Index-Buttons-MyProjects": `Mis Proyectos`,
                    "Index-AboutMe-Title": `Un poco sobre mi`,
                    "Index-AboutMe-Text": `¡Hola! Soy Mario, soy un programador de juegos centrado en Unity C#. He trabajado en varios juegos,
                    incluyendo "Side-Scrollers" 2D y 3D, juegos de lucha 2D, aventuras en tercera persona, juegos de disparos en primera persona
                    y experiencias de realidad virtual. Actualmente estoy trabajando en un juego de supervivencia en primera persona como
                    proyecto personal, y en un juego de "motion tracking" para el GameLab de la Universidad de Ciencias Aplicadas de Turku
                    desarrollado con la cámara de inteligencia artificial ZED 2. En este momento, los juegos que más me han gustado hacer son los
                    "Side-Scrollers" como <a href="FateGifs.html">Fate: The Curse Of Belzegor</a> o <a href="HopeGifs.html">Our Last Hope</a>,
                    pero aún estoy probando nuevos géneros de juegos y mecánicas diferentes. ¡Explora un poco más mi portafolio para descubrir todos los
                    juegos en los que he podido participar!`,




                    


                }
            }
        }
    }, function(err, t) {
        // initialized and ready to go!
        updateContent();
    });
}

function updateContent() {
    //Index HTML
    document.getElementById('Index-Buttons-Translate').innerHTML = i18next.t('Index-Buttons-Translate');
    document.getElementById('Index-Buttons-MyProjects').innerHTML = i18next.t('Index-Buttons-MyProjects');

    document.getElementById('Index-AboutMe-Title').innerHTML = i18next.t('Index-AboutMe-Title');
    document.getElementById('Index-AboutMe-Text').innerHTML = i18next.t('Index-AboutMe-Text');

}

var language = "es"; 
function changeLanguage() {
    if (language === 'es') {
        language = 'en';
    } else {
        language = 'es';
    }
    i18next.changeLanguage(language, updateContent);
}


  


document.addEventListener('DOMContentLoaded', initI18Next);

