import React from "react";

function TextPage() {
  return (
    <div className="mt-16 text-sm">
      <div className="flex sm:flex-row flex-col   ">
        <div className="mx-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          Kraftstoffverbrauch kombiniert
        </div>
        <div className="mx-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
          CO₂-Emissionen kombiniert{" "}
        </div>
        <div className="mx-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          Stromverbrauch im kombinierten Testzyklus{" "}
        </div>
      </div>
      <div className="flex m-4">
        <sup className="mt-4">1</sup>
        <p className="mt-2">
          Die angegebenen Werte wurden nach dem vorgeschriebenen Messverfahren
          ermittelt. Es handelt sich um die „NEFZ-CO₂-Werte“ i. S. v. Art. 2 Nr.
          1 Durchführungsverordnung (EU) 2017/1153. Die
          Kraftstoffverbrauchswerte wurden auf Basis dieser Werte errechnet. Der
          Stromverbrauch wurde auf der Grundlage der VO 692/2008/EG ermittelt.
          Weitere Informationen zum offiziellen Kraftstoffverbrauch und den
          offiziellen spezifischen CO₂-Emissionen neuer Personenkraftwagen
          können dem „Leitfaden über den Kraftstoffverbrauch, die CO₂-Emissionen
          und den Stromverbrauch aller neuen Personenkraftwagenmodelle“
          entnommen werden, der an allen Verkaufsstellen und bei der Deutschen
          Automobil Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.
        </p>
      </div>
      <div className="flex m-4">
        <sup className="mt-4">4</sup>
        <p className="mt-2">
          Angaben zu Kraftstoffverbrauch, Stromverbrauch und CO₂-Emissionen sind
          vorläufig und wurden vom Technischen Dienst für das
          Zertifizierungsverfahren nach Maßgabe des WLTP-Prüfverfahrens
          ermittelt und in NEFZ-Werte korreliert. Eine EG-Typgenehmigung und
          Konformitätsbescheinigung mit amtlichen Werten liegen noch nicht vor.
          Abweichungen zwischen den Angaben und den amtlichen Werten sind
          möglich.
        </p>
      </div>
      <div className="flex m-4">
        <sup className="mt-4">6</sup>
        <p className="mt-2">
          Stromverbrauch und Reichweite wurden auf der Grundlage der VO
          692/2008/EG ermittelt. Stromverbrauch und Reichweite sind abhängig von
          der Fahrzeugkonfiguration. Weitere Informationen zum offiziellen
          Kraftstoffverbrauch und den offiziellen spezifischen CO₂-Emissionen
          neuer Personenkraftwagen können dem „Leitfaden über den
          Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch aller
          neuen Personenkraftwagenmodelle“ entnommen werden, der an allen
          Verkaufsstellen und bei der Deutschen Automobil Treuhand GmbH unter
          www.dat.de unentgeltlich erhältlich ist.
        </p>
      </div>
      <div className="flex m-4">
        <sup className="mt-4">7</sup>
        <p className="mt-2">
          Angaben zu Stromverbrauch und Reichweite sind vorläufig und wurden vom
          Technischen Dienst für das Zertifizierungsverfahren nach Maßgabe der
          UN/ECE-Regelung Nr. 101 ermittelt. Die EG-Typgenehmigung und eine
          Konformitätsbescheinigung mit amtlichen Werten liegen noch nicht vor.
          Abweichungen zwischen den Angaben und den amtlichen Werten sind
          möglich.
        </p>
      </div>
      <div className="flex m-4">
        <sup className="mt-4">8</sup>
        <p className="mt-2">
          Alle technischen Angaben sind vorläufig und wurden intern nach Maßgabe
          der jeweils anwendbaren Zertifizierungsmethode ermittelt. Es liegen
          bislang weder bestätigte Werte vom TÜV noch eine EG-Typgenehmigung
          noch eine Konformitätsbescheinigung mit amtlichen Werten vor.
          Abweichungen zwischen den Angaben und den amtlichen Werten sind
          möglich.
        </p>
      </div>
      <div className="flex m-4">
        <sup className="mt-4">9</sup>
        <p className="mt-2">
          Weitere Informationen zum offiziellen Kraftstoffverbrauch und den
          offiziellen spezifischen CO₂-Emissionen neuer Personenkraftwagen
          können dem „Leitfaden über den Kraftstoffverbrauch, die CO₂-Emissionen
          und den Stromverbrauch aller neuen Personenkraftwagenmodelle”
          entnommen werden, der an allen Verkaufsstellen und bei der Deutschen
          Automobil Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.
        </p>
      </div>
    </div>
  );
}

export default TextPage;
