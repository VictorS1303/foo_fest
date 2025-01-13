"use client";
import { useState, useEffect } from "react";
import BandsListe from "@/app/components/BandsListe";
import ArtistFilter from "@/app/components/ArtistFilter";

export default function GenreFilter()
{
  const [bands, setBands] = useState([]);
  const [filteredBands, setFilteredBands] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [filterArtists, setFilterArtists] = useState(""); // State for artist filter

  useEffect(() =>
  {
    fetch("https://polarized-chrome-trouser.glitch.me/bands")
      .then((res) => res.json())
      .then((data) =>
      {
        setBands(data || []);
        setFilteredBands(data || []);
      })
      .catch((err) => console.error("Error fetching bands:", err));
  }, []);

  const handleFilterChange = (genre) =>
  {
    setSelectedGenre(genre);
    const filtered =
      genre === "All" ? bands : bands.filter((band) => band.genre === genre);
    // Apply artist filtering as well
    setFilteredBands(
      filtered.filter((band) =>
        band.name.toLowerCase().includes(filterArtists.toLowerCase())
      )
    );
  };

  const handleArtistFilterChange = (artist) =>
  {
    setFilterArtists(artist);
    // Apply genre filtering as well
    const filtered =
      selectedGenre === "All"
        ? bands
        : bands.filter((band) => band.genre === selectedGenre);
    setFilteredBands(
      filtered.filter((band) =>
        band.name.toLowerCase().includes(artist.toLowerCase())
      )
    );
  };

  const genres = ["All", ...new Set(bands.map((band) => band.genre))];

  return (
    <div className="container mx-auto px-4 bg-white custom-border p-7">
      <div className="flex justify-between items-center mb-8">
        <div className="pb-3.5 flex items-center align-center justify-between w-full max-md:flex-col max-md:gap-8">
          {/* Artist Filter */}
          <ArtistFilter onFilterChange={handleArtistFilterChange} />

          {/* Genre Filter */}
          <div className="-order-1 whitespace-nowrap">
            <label className="pb-3.5 text-heading-four mr-4">Select genre:</label>
            <select
              className="vip-ticket-counter-background-color rounded-[20px] px-4 py-2 cursor-pointer"
              value={selectedGenre}
              onChange={(e) => handleFilterChange(e.target.value)}
            >
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Render Bands */}
      {filteredBands.length > 0 ? (
        <BandsListe bands={filteredBands} />
      ) : (
        <p>No bands found for the selected filters.</p>
      )}
    </div>
  );
}
