"use client";

import { FormEvent, useState } from "react";

interface SearchBarProps {
  initialValue?: string;
}

export default function SearchBar({
  initialValue = "",
}: SearchBarProps) {
  const [country, setCountry] = useState(initialValue);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const value = country.trim();

    if (!value) {
      return;
    }

    window.location.href = `/?pais=${encodeURIComponent(value)}`;
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={country}
        onChange={(event) => setCountry(event.target.value)}
        placeholder="Digite o nome de um país..."
        aria-label="Nome do país"
      />

      <button type="submit">
        🔎 Buscar
      </button>
    </form>
  );
}
