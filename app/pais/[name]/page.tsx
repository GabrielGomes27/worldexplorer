import Link from "next/link";
import CountryCard, {
  Country,
} from "@/components/CountryCard";

interface CountryPageProps {
  params: {
    name: string;
  };
}

async function getCountry(
  countryName: string
): Promise<Country | null> {
  const response = await fetch(
    `https://countries.dev/name/${encodeURIComponent(countryName)}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return null;
  }

  const data: Country[] = await response.json();

  return data[0] || null;
}

export default async function CountryPage({
  params,
}: CountryPageProps) {
  const country = await getCountry(
    decodeURIComponent(params.name)
  );

  if (!country) {
    return (
      <main className="content-section">
        <div className="container">
          <div className="error-box">
            <span>⚠️</span>

            <div>
              <h2>País não encontrado</h2>

              <p>
                Não foi possível encontrar informações
                sobre este país.
              </p>
            </div>
          </div>

          <Link href="/" className="back-button">
            ← Voltar para a página principal
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="content-section">
      <div className="container">
        <Link href="/" className="back-button">
          ← Voltar para a página principal
        </Link>

        <div className="result-title">
          <h1>
            {country.flag} {country.name}
          </h1>

          <p>
            Informações detalhadas sobre este país.
          </p>
        </div>

        <CountryCard
          country={country}
          detailed={true}
        />
      </div>
    </main>
  );
}