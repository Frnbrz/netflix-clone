"use client";

import { useState } from "react";

export function Terms() {
  const [showExtraTerms, setShowExtraTerms] = useState(false);

  return (
    <div className="terms">
      <div className="terms__main">
        <span>
          Esta página utiliza Google reCAPTCHA para verificar que no eres un
          robot
        </span>
        <button
          onClick={() => setShowExtraTerms(!showExtraTerms)}
          className="terms__button button--gosh button"
        >
          Más información
        </button>
      </div>

      <div>
        {showExtraTerms && (
          <p className="fade-in">
            La información recopilada por Google reCAPTCHA está sujeta a la
            Política de Privacidad y las Condiciones de servicio de Google, y se
            utiliza para proporcionar, mantener y mejorar el servicio de
            reCAPTCHA, así como para fines generales de seguridad (Google no la
            utiliza para publicidad personalizada).
          </p>
        )}
      </div>
    </div>
  );
}
