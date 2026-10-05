import Link from "next/link";

export interface Country {
  name: string;
  capital: string;
  population: number;
  region: string;
  subregion: string;
  flag: string;
  flags: {
    svg: string;
    png?: string;
  };
  languages: {
    name: string;
  }[];
  currencies: {
    code: string;
    name: string;
    symbol?: string;
  }[];
  timezones: string[];
}

interface CountryCardProps {
  country: Country;
  detailed?: boolean;
}

export default function CountryCard({
  country,
  detailed = false,
}: CountryCardProps) {
  const languages =
    country.languages?.map((language) => language.name).join(", ") ||
    "Não informado";

  const currencies =
    country.currencies
      ?.map(
        (currency) =>
          `${currency.name}${
            currency.symbol ? ` (${currency.symbol})` : ""
          }`
      )
      .join(", ") || "Não informado";

  return (
    <article className="country-card">
      <div className="country-header">
        <div>
          <span className="country-flag-emoji">
            {country.flag}
          </span>

          <h2>{country.name}</h2>
        </div>

        <span className="region-badge">
          {country.region}
        </span>
      </div>

      <div className="flag-container">
        <img
          src={country.flags.svg}
          alt={`Bandeira de ${country.name}`}
          width={180}
          height={120}
        />
      </div>

      <div className="country-info">
        <div className="info-item">
          <strong>Nome oficial</strong>
          <span>{country.name}</span>
        </div>

        <div className="info-item">
          <strong>Capital</strong>
          <span>{country.capital || "Não informado"}</span>
        </div>

        <div className="info-item">
          <strong>População</strong>
          <span>
            {country.population.toLocaleString("pt-BR")} habitantes
          </span>
        </div>

        <div className="info-item">
          <strong>Região</strong>
          <span>{country.region}</span>
        </div>

        {detailed && (
          <>
            <div className="info-item">
              <strong>Sub-região</strong>
              <span>
                {country.subregion || "Não informado"}
              </span>
            </div>

            <div className="info-item">
              <strong>Idiomas</strong>
              <span>{languages}</span>
            </div>

            <div className="info-item">
              <strong>Moedas</strong>
              <span>{currencies}</span>
            </div>

            <div className="info-item">
              <strong>Fuso(s) horário(s)</strong>
              <span>
                {country.timezones?.join(", ") || "Não informado"}
              </span>
            </div>
          </>
        )}
      </div>

      {!detailed && (
        <Link
          href={`/pais/${encodeURIComponent(country.name)}`}
          className="details-button"
        >
          Ver detalhes →
        </Link>
      )}
    </article>
  );
}
