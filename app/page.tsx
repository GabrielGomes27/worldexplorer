import SearchBar from "@/components/SearchBar";
import CountryCard, {
  Country,
} from "@/components/CountryCard";

interface HomePageProps {
  searchParams: {
    pais?: string;
  };
}

const countryNames: Record<string, string> = {
  brasil: "Brazil",
  brazil: "Brazil",

  portugal: "Portugal",

  japao: "Japan",
  Japão: "Japan",
  japan: "Japan",

  alemanha: "Germany",
  Germany: "Germany",

  franca: "France",
  França: "France",
  france: "France",

  italia: "Italy",
  italy: "Italy",

  espanha: "Spain",
  Espanha: "Spain",
  spain: "Spain",

  canadá: "Canada",
  canada: "Canada",

  "estados unidos": "United States",
  "united states": "United States",

  argentina: "Argentina",

  chile: "Chile",

  mexico: "Mexico",
  méxico: "Mexico",

  australia: "Australia",

  china: "China",

  india: "India",

  coreia: "South Korea",
  "coreia do sul": "South Korea",
  "south korea": "South Korea",

  russia: "Russia",
  rússia: "Russia",

  egito: "Egypt",
  egypt: "Egypt",

  africa: "South Africa",
  "áfrica do sul": "South Africa",
};

async function searchCountry(
  countryName: string
): Promise<Country | null> {
  const baseUrl = "https://countries.dev";

  const searchName =
    countryNames[countryName.trim().toLowerCase()] ||
    countryName.trim();

  try {
    const response = await fetch(
      `${baseUrl}/name/${encodeURIComponent(searchName)}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    if (Array.isArray(data)) {
      return data[0] || null;
    }

    if (data?.data && Array.isArray(data.data)) {
      return data.data[0] || null;
    }

    return data?.data || data || null;
  } catch {
    return null;
  }
}

export default async function HomePage({
  searchParams,
}: HomePageProps) {
  const countryName = searchParams.pais;

  let country: Country | null = null;
  let error = "";

  if (countryName) {
    country = await searchCountry(countryName);

    if (!country) {
      error = `Nenhum país encontrado para "${countryName}".`;
    }
  }

  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="hero-icon">🌎</span>

          <h1>WorldExplorer</h1>

          <p>
            Explore informações sobre países de todo o mundo.
          </p>

          <SearchBar
            initialValue={countryName || ""}
          />
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          {!countryName && (
            <div className="welcome-box">
              <div className="welcome-icon">🗺️</div>

              <h2>Descubra o mundo</h2>

              <p>
                Digite o nome de um país acima para consultar
                informações sobre sua população, capital,
                região e bandeira.
              </p>

              <div className="examples">
                <span>Exemplos:</span>
                <span>Brasil</span>
                <span>Portugal</span>
                <span>Japão</span>
                <span>Canadá</span>
              </div>
            </div>
          )}

          {error && (
            <div className="error-box">
              <span>⚠️</span>

              <div>
                <h2>País não encontrado</h2>

                <p>{error}</p>

                <p>
                  Tente pesquisar por Brasil, Portugal,
                  Japão, Canadá ou Estados Unidos.
                </p>
              </div>
            </div>
          )}

          {country && (
            <div>
              <div className="result-title">
                <h2>Resultado da busca</h2>

                <p>
                  Confira as informações encontradas sobre
                  o país.
                </p>
              </div>

              <CountryCard country={country} />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

