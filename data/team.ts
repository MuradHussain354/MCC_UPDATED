export interface TeamMember {
  name: string;
  role: string;
  email: string;
  phone: string;
  /** Optional square headshot — recommended 400x400px. Path under /public/images/team/ */
  image?: string;
}

// Real MCC Group contacts only — do not add invented team members.
export const team: TeamMember[] = [
  {
    name: "Roy Shanthakumar",
    role: "CEO",
    email: "rushan004@gmail.com",
    phone: "077 748 7387",
    image: "/images/team/roy-shanthakumar.jpg",
  },
  {
    name: "Clifford Jayakody",
    role: "Head of Marketing and Sales",
    email: "cliffajk@gmail.com",
    phone: "+94 77 302 2427",
    image: "/images/team/clifford.jpg",
  },
  {
    name: "Veyluu Rajkumar",
    role: "Finance Manager",
    email: "rajkumar@mcc.lk",
    phone: "+94 77 386 7338",
    image: "/images/team/rajkumar.jpg",
  },
];

export const mainContact = {
  phone: "011 250 2744",
  email: "info@mccgroup.lk",
  address: "No. 11, Clifford Place, Bambalapitiya, Colombo 04",
  facebook: "https://www.facebook.com/MCCgroupprivatelimited/",
};
