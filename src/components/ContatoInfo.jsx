import { EmailIcon, LinkedinIcon } from "./icons.jsx";

const ICONES = {
  email: EmailIcon,
  linkedin: LinkedinIcon,
};

function ContatoInfo({ contatos }) {
  return (
    <div className="contato-info">
      {contatos.map((contato) => {
        const Icone = ICONES[contato.icone];
        return (
          <a
            key={contato.href}
            href={contato.href}
            target={contato.externo ? "_blank" : undefined}
            rel={contato.externo ? "noreferrer" : undefined}
            aria-label={contato.ariaLabel}
          >
            <Icone />
          </a>
        );
      })}
    </div>
  );
}

export default ContatoInfo;