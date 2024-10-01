import kasa from "../assets/projectImages/kasa.jpg";

import movieFinder from "../assets/projectImages/movieFinder.jpg";
import lesPetitsPlats from "../assets/projectImages/lespetitsplats.jpg";
import ohmyfood from "../assets/projectImages/ohmyfood.jpg";
import sportsee from "../assets/projectImages/sportsee.jpg";
import argentBank from "../assets/projectImages/argentBank.jpg";
import fisheye from "../assets/projectImages/fisheye.jpg";
import pokedex from "../assets/projectImages/pokedex.jpg";
import stockLens from "../assets/projectImages/stockLens.jpg";

export const dataProjects = [
  {
    id: 10,
    title: "StockLens",
    logo: "logoStockLens",
    picture: stockLens,
    descriptionEn:
      "StockLens is a dashboard application developed using Angular 18 with Signals, RxJS, and PrimeNG. It enables users to visualize and compare American stocks and ETFs. The application also provides articles related to the stocks, allowing users to read insights and analyses. Additionally, users can select favorite trackers and save them for easy access later. The project is still in development, and the demo is currently unavailable.",
    descriptionFr:
      "StockLens est une application en développement construite avec Angular 18, Signals, RxJS et PrimeNG. Elle utilise plusieurs API, dont Polygon.io et TickerNews, pour permettre la visualisation et la comparaison d'actions et d'ETFs américains, ainsi que pour proposer des articles sur les marchés financiers. Les utilisateurs peuvent également sélectionner et conserver leurs trackers favoris pour un accès rapide.",
    shortDescription:
      "Dashboard pour visualiser et comparer des actions et ETFs américains.",
    tags: ["Angular 18", "RxJS", "PrimeNG", "Signals"],
    demo: "https://stocklens-six.vercel.app/",
    linkGithub: "https://github.com/Matt-Fr/stocksProject",
  },
  {
    id: 5,
    title: "Kasa",
    logo: "logoKasa",
    picture: kasa,
    descriptionEn:
      "The Kasa apartment rental application was my first project built with React and React Router. I then upgraded the project with next.js, typescript and tailwindcss. The application enables the user to navigate between various rental properties. When selected, each rental listing contains a brief description of the property, image gallery, and user ratings.",
    descriptionFr:
      "L'application de location d'appartements Kasa a été mon tout premier projet réalisé avec React et React Router. J'ai ensuite effectué une mise à niveau du projet en y ajoutant Next.js, TypeScript et Tailwind CSS. Cette application permet à l'utilisateur de naviguer facilement entre différentes propriétés à louer. Lorsqu'une propriété est sélectionnée, chaque annonce affiche une brève description de la propriété, une galerie d'images et les évaluations des utilisateurs.",
    shortDescription:
      "Application de location d'appartements avec navigation et galeries.",
    tags: ["Typescript", "Next.js", "Tailwind CSS", "Responsive"],
    demo: "https://kasa-matt-fr.vercel.app/",
    linkGithub: "https://github.com/Matt-Fr/Franck_Matthieu_11_26042022",
  },
  {
    id: 6,
    title: "SportSee",
    logo: "logoSportsee",
    picture: sportsee,
    descriptionEn:
      "The Sportsee application is a dashboard which uses data (calories burned, length of workout, etc.) from an external API to create data visualizations of the athletic performances of two individuals. The graphs were created using the Recharts library and the state management using a context hook. The welcome interface contains four buttons for the two individuals: two buttons bring the user to the data visualizations based on the external API, and two buttons also display data visualizations for the same two individuals but this time pulling mock data. The application is not designed for tablet or mobile use (1024 pixels or higher).",
    descriptionFr:
      "L’application Sportsee est un Dashboard utilisant les données d’une API externe et permettant de visualiser les performances sportives des utilisateurs. Les graphs ont été réalisés grâce à la librairie Recharts et le state management grâce à un context. L’interface de l’accueil nous renvoie vers les données de deux utilisateurs (soit venant des données de l’API, soit des données mockées).",
    shortDescription:
      "Dashboard de performances sportives avec visualisation des données.",
    tags: ["React", "React Router", "Context", "Recharts"],
    demo: "https://sportsee-mattfr.netlify.app/user/18",
    linkGithub: "https://github.com/Matt-Fr/Franck_Matthieu_12_17052022",
  },
  // {
  //   id: 8,
  //   title: "Portfolio",
  //   logo: "logoPortfolio",
  //   picture: portfolio,
  //   descriptionEn:
  //     "You are currently viewing my portfolio, which I created using React and React Router. I also utilized 'useContext' to effectively manage the application's state. I chose not to use any additional libraries in order to keep things simple. The application is also responsive, multilingual (English, French) and has a light/dark mode.",
  //   descriptionFr:
  //     "Vous êtes en train de regarder mon portfolio, que j'ai créé en utilisant React et React Router. J'ai également utilisé 'useContext' pour gérer l'état de l'application. Je n'ai pas utilisé d'autres librairies afin de garder une certaine simplicité. L’application est responsive, multilingue (anglais, français) et possède un mode clair/sombre.",
  //   shortDescription: "Portfolio personnel multilingue avec mode clair/sombre.",
  //   tags: ["React", "React Router", "useContext"],
  //   linkGithub: "https://github.com/Matt-Fr/portfolio",
  // },
  {
    id: 7,
    title: "Argent Bank",
    logo: "logoArgentBank",
    picture: argentBank,
    descriptionEn:
      "Please note : The backend of the application must be installed before using this project. Please follow the installation instructions on the project's Github page. The ArgentBank application allows for authentication to a bank's service and interaction with its API. Redux Toolkit is used for state management and axios for API calls.",
    descriptionFr:
      "!!important!! Il faut installer le backend de l’application avant de pouvoir utiliser ce projet, suivez les instructions sur la page Github du projet. L’application d'ArgentBank permet de s’authentifier au service d’une banque et d’interagir avec l’API de celle-ci. J’ai utilisé Redux Toolkit pour la gestion du state ainsi qu’axios pour les appels API.",
    shortDescription:
      "Application bancaire avec authentification et interactions API.",
    tags: ["React", "Redux Toolkit", "axios", "Swagger"],
    linkGithub: "https://github.com/Matt-Fr/franck_matthieu_13_21092022",
  },
  {
    id: 9,
    title: "Pokedex",
    logo: "logoPokedex",
    picture: pokedex,
    shortDescription: "Pokédex avec recherche et détails des Pokémon.",
    descriptionEn:
      "This application is a classic Pokédex that I developed for a test. It uses GraphQL to interact with the beta version of the Pokémon API, along with Tailwind CSS and Next.js in TypeScript. You can search for a Pokémon and view its detailed characteristics.",
    descriptionFr:
      "Cette application est un Pokédex classique que j'ai développée pour un test. Elle utilise GraphQL pour interagir avec la version bêta de l'API Pokémon, ainsi que Tailwind CSS et Next.js en TypeScript. Vous pouvez rechercher un Pokémon et consulter ses caractéristiques détaillées.",
    tags: ["Typescript", "Next.js", "Graphql"],
    demo: "https://mattfr-pokedex.netlify.app/",
    linkGithub: "https://github.com/Matt-Fr/technical-test-pokedex",
  },
  {
    id: 3,
    title: "Les Petits Plats",
    logo: "logoLesPetitsPlats",
    picture: lesPetitsPlats,
    descriptionEn:
      "Les Petits Plats is a website developed using vanilla JavaScript which allows the user to enter multiple search criteria using pre-set filters and a search bar to search a database of 50 recipes. The principal skill showcased within this project is the development of an algorithm to display information based on the searched criteria.",
    descriptionFr:
      "Les Petits Plats est un site web développé en JavaScript vanilla permettant de rechercher des recettes de cuisines à l’aide de différents filtres ainsi que plusieurs barres de recherche. Parmi les compétences ciblées : développer un algorithme pour résoudre un problème, analyser un problème informatique.",
    shortDescription: "Site de recherche de recettes avec filtres avancés.",
    tags: ["Vanilla JS", "HTML & CSS", "Responsive"],
    demo: "https://mattfr-les-petits-plats.netlify.app/",
    linkGithub: "https://github.com/Matt-Fr/FranckMatthieu_7_03012022",
  },
  {
    id: 4,
    title: "FilmFinder",
    logo: "logoFilmFinder",
    picture: movieFinder,
    descriptionEn:
      "In creating the FilmFinder project, I learned how to use an external API. This application, created using React and React Router, allows the user to search a film through the use of a search bar. When a film name is selected, the user is directed to a page which includes a short description of the film, and the film rating. The IMDB API was used in order to pull film rating information for display in the application.",
    descriptionFr:
      "J’ai pu m’entrainer, avec ce petit projet, à utiliser pour la première fois une API externe. Cette application, créée à l'aide de React et React Router, permet de rechercher un film à l'aide d'une barre de recherche. En cliquant sur un film, vous serez redirigé sur une page comportant plus d'informations sur ce dernier. Cette application a été réalisé grâce à l'API IMDb.",
    shortDescription: "Recherche de films avec affichage des notes IMDb.",
    tags: ["React", "React Router", "API IMDb"],
    demo: "https://mattfr-film-finder.netlify.app/",
    linkGithub: "https://github.com/Matt-Fr/film_finder",
  },
  {
    id: 2,
    title: "Fisheye",
    logo: "logoFisheye",
    picture: fisheye,
    descriptionEn:
      "The Fisheye application was my first website created from scratch using vanilla JavaScript through my OpenClassrooms course. The principal skills used in the creation of this website are: Develop a modular web application utilizing several design patterns, write JavaScript code so that is maintainable, manage the events of a site using JavaScript, and website accessibility. Building this site in JavaScript without access to a JavaScript library enabled me to learn the basics of the language and later, to fully understand and appreciate the advantages of a JavaScript framework.",
    descriptionFr:
      "L’application Fisheye a été mon tout premier site web réalisé ex nihilo en Javascript Vanilla avec Openclassrooms. Parmi les compétences ciblées : développer une application web modulaire avec des design patterns, écrire du code JavaScript maintenable, gérer les évènements d'un site avec JavaScript, assurer l'accessibilité d'un site web. Construire ce site en JavaScript sans aucune librairie m’a permis d’apprendre les bases du langage, et plus tard, d’apprécier les avantages d’un framework JS.",
    shortDescription: "Application web modulaire pour photographes.",
    tags: ["Vanilla JS", "ESLint", "Responsive"],
    demo: "https://matt-fr.github.io/FranckMatthieu_6_28102021/index.html",
    linkGithub: "https://github.com/Matt-Fr/FranckMatthieu_6_28102021",
  },
  {
    id: 1,
    title: "OhMyFood",
    logo: "logoOhmyfood",
    picture: ohmyfood,
    descriptionEn:
      "OhMyFood is one of my first projects created exclusively in HTML with the SCSS preprocessor. The site was built with the “mobile first” approach and gave me the opportunity to use CSS animations. Among the principal skills used in this project are: to put in place a navigation structure for a website, to use advanced CSS graphics, to ensure the graphical coherence of the website.",
    descriptionFr:
      "OhMyFood est l’un de mes premiers projets Openclassrooms créés exclusivement en Html avec le préprocesseur SCSS. Le site a été construit avec l’approche « mobile first » et m’a permis de m’initier aux animations CSS. Parmi les compétences ciblées : Mettre en place une structure de navigation pour un site web ; Mettre en œuvre des effets CSS graphiques avancés ; Assurer la cohérence graphique d'un site web.",
    shortDescription: "Site de restaurant mobile first avec animations CSS.",
    tags: ["HTML & CSS", "Responsive"],
    demo: "https://mattfr-ohmyfood.netlify.app/",
    linkGithub: "https://github.com/Matt-Fr/Franckmatthieu_3_24082021",
  },
];
