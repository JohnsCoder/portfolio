export interface Texts {
  portfolio: string;
  greeting: string;
  name: string;
  role: string;
  projects: string;
  developedBy: string;
  linkedin: string;
  github: string;
  email: string;
}

export const texts: Record<string, Texts> = {
  'pt': {
    portfolio: 'PORTFOLIO',
    greeting: 'OLÁ MEU NOME É',
    name: 'JOÃO PEDRO',
    role: 'SOU DESENVOLVEDOR FULLSTACK',
    projects: 'PROJETOS',
    developedBy: 'Todos os Sites Desenvolvidos por',
    linkedin: 'Linkedin',
    github: 'Github',
    email: 'Email'
  },
  'pt-BR': {
    portfolio: 'PORTFOLIO',
    greeting: 'OLÁ MEU NOME É',
    name: 'JOÃO PEDRO',
    role: 'SOU DESENVOLVEDOR FULLSTACK',
    projects: 'PROJETOS',
    developedBy: 'Todos os Sites Desenvolvidos por',
    linkedin: 'Linkedin',
    github: 'Github',
    email: 'Email'
  },
  'en': {
    portfolio: 'PORTFOLIO',
    greeting: 'HELLO MY NAME IS',
    name: 'JOÃO PEDRO',
    role: 'I AM A FULLSTACK DEVELOPER',
    projects: 'PROJECTS',
    developedBy: 'All Sites Developed by',
    linkedin: 'Linkedin',
    github: 'Github',
    email: 'Email'
  },
  'en-US': {
    portfolio: 'PORTFOLIO',
    greeting: 'HELLO MY NAME IS',
    name: 'JOÃO PEDRO',
    role: 'I AM A FULLSTACK DEVELOPER',
    projects: 'PROJECTS',
    developedBy: 'All Sites Developed by',
    linkedin: 'Linkedin',
    github: 'Github',
    email: 'Email'
  }
};

export function getTexts(language: string): Texts {
  // Primeiro tenta o idioma completo (ex: pt-BR)
  if (texts[language]) {
    return texts[language];
  }
  
  // Depois tenta apenas o código do idioma (ex: pt)
  const langCode = language.split('-')[0];
  if (texts[langCode]) {
    return texts[langCode];
  }
  
  // Fallback para inglês
  return texts['en'];
}