    /*Je n'avais pas encore fini cette partie lors de la dernière séance de TP, mais je ne pense pas que le code soit optimal, loin de là.
    Cependant, il fonctionne comme je le souhaitais.*/

    /*Le fonctionnement est le suivant : lorsque l'on appuie sur l'un des deux boutons, je récupère les éléments de la page via leur ID et je modifie 
    leur contenu.
    Ils sont plus ou moins regroupés par partie, pour plus de clarté.*/

        
        
        function changeLanguage() {
            var fr = document.getElementById("french");

            fr.addEventListener("click", function(event) {
                event.preventDefault(); 
                document.getElementById("stud").textContent = "Étudiant";

                //partie qualité
                document.getElementById("qual").textContent = "Qualités";
                document.getElementById("qual1").textContent = "Assidus, sérieux et ponctuel";
                document.getElementById("qual2").textContent = "Sportif (7 ans de judo, et sports de loisirs)";
                document.getElementById("qual3").textContent = " Cohésion d'équipe acquise lors de mes années chez les scouts de Belgique";
                document.getElementById("qual4").textContent = "Autodidcate";

                //partie vie personnelle
                document.getElementById("pers").textContent = "Vie Personnelle";
                document.getElementById("pers1").textContent = "J'aime cuisiner pendant mon temps libre, je cuisine depuis des années maintenant";
                document.getElementById("pers2").textContent = "J'aime assister à des événements sur site (hackathon par exemple)";

                //partie objectif

                document.getElementById("persIn1").textContent = "Objectif: Obtenir un stage étudiant";
                document.getElementById("persIn2").textContent = "Informations Personnelles:";
                document.getElementById("persIn3").textContent = "22 ans, né le 30 octobre 2001 à Charleroi (Belgique), je suis actuellement étudiant";
  
                //partie expérience 
                document.getElementById("cat").textContent = "Expérience";
                document.getElementById("cat1").textContent = "2017-2020 : J'ai travaillé dans l'entreprise de mon père, où j'ai eu l'opportunité de travailler dans un hôtel ainsi que dans plusieurs restaurants et cafés.";
                document.getElementById("cat2").textContent = "2020 : Obtention de mon diplôme de fin d'études secondaires en France.";
                document.getElementById("cat3").textContent = "2021-2022 : Première année de bachelier en sciences informatiques à l'UMons.";
                document.getElementById("cat4").textContent = "2022-maintenant : Actuellement en bachelier en informatique spécialisé en réseau et télécommunication à la HEH en Belgique.";
                document.getElementById("cat5").textContent = "2023-maintenant : Affiliation au GDSC (Google Developer Student Club) de l'UMons.";
                document.getElementById("cat6").textContent = "2023 : Participation au hackathon ETH Oxford organisé à l'institut de mathématiques d'Oxford.";
  
                //partie compétences
                document.getElementById("skills").textContent = "Compétences";
                document.getElementById("skill1").textContent = "Programmation FullStack (Python, Java, ...)";
                document.getElementById("skill2").textContent = "Excellente compréhension et expression en anglais";
                document.getElementById("skill3").textContent = "Qualités commerciales acquises en aidant mon père dans son commerce";
                document.getElementById("skill4").textContent = "Bonne gestion du stress";
                document.getElementById("skill5").textContent = "Capacité à prendre en charge un client et à maintenir une bonne relation commerciale";
                document.getElementById("skill6").textContent = "Compétences avancées en informatique acquises lors de mes études";
  
                //partie qualité bis
                document.getElementById("quali").textContent = "Qualités";
                document.getElementById("quali1").textContent = "Assidus, sérieux et ponctuel";
                document.getElementById("quali2").textContent = "Sportif (7 ans de judo, et sports de loisirs)";
                document.getElementById("quali3").textContent = " Cohésion d'équipe acquise lors de mes années chez les scouts de Belgique";
                document.getElementById("quali4").textContent = "Autodidacte";

                //partie vie personnelle bis
                document.getElementById("PersoLife").textContent = "Vie Personnelle";
                document.getElementById("perso1").textContent = "J'aime cuisiner pendant mon temps libre";
                document.getElementById("perso2").textContent = "J'aime participer à des événements en personne (hackathon par exemple)";

                document.getElementById("print").textContent = "IMPRIMER";

                document.getElementById("cat6/2").textContent = "2022-maintenant : Aide à la maintenance et au développement du musée de l'école";
                document.getElementById("cat7").textContent = "2022-2023 : Le thème du musée pour l'année était l'électronique.";
                document.getElementById("cat8").textContent = "2023-2024 : Le thème du musée pour l'année était l'électricité.";
                document.getElementById("cat9").textContent = "2023-maintenant : Avec l'aide de 9 autres étudiants, nous avons créé notre propre organisation à but non lucratif dans le but de participer à plus de hackathons et de sensibiliser plus de personnes sur le sujet de la Blockchain. Je suis personnellement en charge de la trésorerie.";
                document.getElementById("cat5/2").textContent = "2023 : Participation au hackathon ETHDam organisé au Pakhuis de Zwijger à Amsterdam (Centre d'art et de culture)." ;   
                document.getElementById("extrati").textContent = "Activités Extra-Scolaires:";
            

                var en = document.getElementById("english");

                en.addEventListener("click", function(event) {
                    event.preventDefault(); 
                    document.getElementById("stud").textContent = "Student";

                    //partie qualité
                    document.getElementById("qual").textContent = "Qualities";
                    document.getElementById("qual1").textContent = "Diligent, serious, and punctual";
                    document.getElementById("qual2").textContent = "Athletic (7 years of judo, and leisure sports)";
                    document.getElementById("qual3").textContent = "Team cohesion acquired during my years in the boy-scouts of Belgium";
                    document.getElementById("qual4").textContent = "Self learner";

                    //partie vie personnelle
                    document.getElementById("pers").textContent = "Personnal Life";
                    document.getElementById("pers1").textContent = "I like to cook on my spare time";
                    document.getElementById("pers2").textContent = "I like to attend on site events (hackathon for example)";

                    //partie objectif

                    document.getElementById("persIn1").textContent = "Objective: Get an internship";
                    document.getElementById("persIn2").textContent = "Personnal Informations:";
                    document.getElementById("persIn3").textContent = "I am a 22-year-old born on October 30, 2001, in Charleroi, Belgium. Currently, I am a student.";

                    //partie expérience 
                    document.getElementById("cat").textContent = "Experience";
                    document.getElementById("cat1").textContent = "2017-2020: I worked in my father's Bussiness (I had the opportunity to work in an hotel, multiple restaurants and café's)";
                    document.getElementById("cat2").textContent = "2020: high school graduation (in France)";
                    document.getElementById("cat3").textContent = "2021-2022: Computer Science major (UMons)";
                    document.getElementById("cat4").textContent = "2022-present: Undergraduate major in software engineering specialised in network and telecommunication (HEH/Belgium)";
                    document.getElementById("cat5").textContent = "2023-present: Affiliated with the GDSC (Google Developer Student Club) at UMons.";
                    document.getElementById("cat6").textContent = "2023: Participated in the ETH Oxford Hackathon hosted at the Mathematical Institute of Oxford.";

                    //partie compétences
                    document.getElementById("skills").textContent = "Skills";
                    document.getElementById("skill1").textContent = "FullStack programmation (Python, Java,… )";
                    document.getElementById("skill2").textContent = "Excellent comprehension and expression in English";
                    document.getElementById("skill3").textContent = "Developed commercial skills through hands-on experience in my father's business.";
                    document.getElementById("skill4").textContent = "Great stress management";
                    document.getElementById("skill5").textContent = "Capable of managing clients and maintaining positive business relationships.";
                    document.getElementById("skill6").textContent = "Advanced software engineering skills acquired during my undergraduate major.";

                    //partie qualité bis
                    document.getElementById("quali").textContent = "Qualities";
                    document.getElementById("quali1").textContent = "Diligent, serious, and punctual";
                    document.getElementById("quali2").textContent = "Athletic (7 years of judo, and leisure sports)";
                    document.getElementById("quali3").textContent = "Team cohesion acquired during my years in the boy-scouts of Belgium ";

                    //partie vie personnelle bis
                    document.getElementById("PersoLife").textContent = "Personnal Life";
                    document.getElementById("perso1").textContent = "I enjoy cooking on my spare time .";
                    document.getElementById("perso2").textContent = "I like to attend on site events (hackathon for example)";

                    document.getElementById("print").textContent = "PRINT";

                    document.getElementById("cat6/2").textContent = "2022-present, helped with the maintenance and development of the school's Museum of Technology.";
                    document.getElementById("cat7").textContent = "2022-2023: Museum theme focused on electronics.";
                    document.getElementById("cat8").textContent = "2023-2024 : Museum theme focused on electricity.";
                    document.getElementById("cat9").textContent = "2023-present, co-founded a non-profit organization with 9 other students to help us participate in more hackathons and raise awareness about blockchain technology, I am personally in charge of the treasury";
                    document.getElementById("cat5/2").textContent = "2023, participated to the ETHDam hackathon hosted at Pakhuis de Zwijger in Amsterdam, an art and cultural center"; 
                    
                    document.getElementById("cat5/2").textContent = "2023: Participated in the ETHDam Hackathon held at Pakhuis de Zwijger in Amsterdam, an art and cultural center.";
                    document.getElementById("extrati").textContent = "Extra-Curricular Activities:";

                });
            });
        }
        document.addEventListener("DOMContentLoaded", function() {
            changeLanguage();
        }); 
