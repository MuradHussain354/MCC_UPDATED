export interface Theater {
  slug: string;
  name: string;
  location: string;
  description: string;
  booking?: string;
  instagram?: string;
  facebook: string;
  /** Optional photo — recommended 800x500px (8:5), JPG/WebP. Path under /public/images/theaters/ */
  image?: string;
}

// Real MCC Group theaters only — do not add invented venues, cities, or counts.
export const theaters: Theater[] = [
  {
    slug: "eros-cinema",
    name: "Eros Cinema",
    location: "Pamankada, Colombo",
    description:
      "A popular cinema destination in Colombo that mainly caters to the Tamil audience, offering a comfortable movie-going experience with quality sound and visuals.",
    booking:
      "https://lk.bookmyshow.com/sri-lanka/cinemas/eros-cinema-colombo/ECCC",
    instagram: "https://www.instagram.com/eros_cinemas/",
    facebook: "https://www.facebook.com/EROSCINEMAOFFICIAL",
  },
  {
    slug: "cine-city",
    name: "Cine-City",
    location: "Maradana, Colombo",
    description:
      "A modern theater featuring 3D and Dolby Atmos technology, delivering an immersive cinematic experience in the heart of Colombo.",
    booking:
      "https://lk.bookmyshow.com/buytickets/cine-city-3d-dolby-atmos-maradana/cinema-snlk-CACC-MT/20260817",
    instagram: "https://www.instagram.com/cinecity.maradana/",
    facebook:
      "https://www.facebook.com/people/CineCity-Cinema-Maradana/61581042355366/",
  },
  {
    slug: "cinemax",
    name: "Cinemax",
    location: "Polonnaruwa",
    description:
      "A key entertainment hub in the North Central region, providing quality film screenings for local audiences.",
    facebook:
      "https://www.facebook.com/CinemaxCinemakaduruwelaPolonnaruwa/",
  },
  {
    slug: "vijaya",
    name: "Vijaya",
    location: "Batticaloa",
    description:
      "A well-known cinema in the Eastern Province, serving movie lovers with a wide range of film entertainment.",
    facebook: "https://www.facebook.com/vijjayacinema/",
  },
];
