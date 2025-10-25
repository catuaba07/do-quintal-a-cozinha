"use client";

import { useState, useEffect } from "react";

interface ObfuscatedEmailProps {
  user: string;
  domain: string;
  className?: string;
  asLink?: boolean;
}

/**
 * Componente que ofusca emails para proteger contra bots de spam
 * 
 * O email é dividido em partes e montado apenas no cliente via JavaScript,
 * evitando que scrapers simples capturem o endereço completo.
 */
export function ObfuscatedEmail({ 
  user, 
  domain, 
  className = "",
  asLink = false 
}: ObfuscatedEmailProps) {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    // Monta o email apenas no cliente
    setEmail(`${user}@${domain}`);
  }, [user, domain]);

  if (!email) {
    // Fallback enquanto carrega (ou se JS estiver desabilitado)
    return <span className={className}>Carregando...</span>;
  }

  if (asLink) {
    return (
      <a 
        href={`mailto:${email}`}
        className={className}
        onClick={(e) => {
          // Previne que o email apareça em logs de navegação
          e.preventDefault();
          window.location.href = `mailto:${email}`;
        }}
      >
        {email}
      </a>
    );
  }

  return (
    <span className={className} data-user={user} data-domain={domain}>
      {email}
    </span>
  );
}
