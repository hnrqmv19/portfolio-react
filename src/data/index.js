import fotoPerfil from "../assets/eu.jpg";
import clubeProgImg from "../assets/clubeprog.jpg";
import clubeCyberImg from "../assets/clubecyber.jpg";

export const navLinks = [
  { href: "#inicio", label: "INICIO" },
  { href: "#sobre", label: "SOBRE" },
  { href: "#experiencia", label: "EXPERIÊNCIAS" },
  { href: "#habilidades", label: "HABILIDADES" },
];

export const perfil = {
  nome: "Henrique Vieira",
  foto: fotoPerfil,
};

export const sobreTexto =
  "Sou um estudante de Engenharia de Computação no SENAI CIMATEC, com interesse em " +
  "desenvolvimento de software, cibersegurança e sistemas computacionais. Tenho experiência " +
  "com projetos acadêmicos, pesquisa e desenvolvimento de soluções, além de atuação em " +
  "iniciativas relacionadas à tecnologia e segurança da informação. Busco constantemente " +
  "expandir meus conhecimentos, enfrentar novos desafios e transformar aprendizado em " +
  "soluções práticas.";

export const experiencias = [
  {
    imagem: clubeProgImg,
    cargo: "Membro Administrativo - Clube de Programação",
    duracao: "Dezembro de 2024 - Janeiro de 2026 · 1 ano e 2 meses",
  },
  {
    imagem: clubeCyberImg,
    cargo: "Membro Administrativo - Clube de Cybersegurança",
    duracao: "Janeiro de 2026 - o momento · 8 meses",
  },
];

export const habilidades = [
  {
    titulo: "Programação",
    tags: ["Python", "Java", "C/C++", "SQL"],
  },
  {
    titulo: "Cibersegurança",
    tags: ["Redes", "CTF", "Firewalls"],
  },
  {
    titulo: "Idiomas",
    tags: ["Português - Nativo", "Inglês - Avançado", "Francês - Básico"],
  },
];

export const contatos = [
  {
    href: "mailto:henrimvieira1906@gmail.com",
    ariaLabel: "E-mail",
    icone: "email",
    externo: false,
  },
  {
    href: "https://www.linkedin.com/in/henrique-maranh%C3%A3o-vieira-1149982b9/",
    ariaLabel: "LinkedIn",
    icone: "linkedin",
    externo: true,
  },
];