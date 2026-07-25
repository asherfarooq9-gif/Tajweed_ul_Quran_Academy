export type Course = {
  slug: string;
  title: string;
  level: string;
  duration: string;
  description: string;
  highlights: string[];
  /** Optional card image, e.g. "/images/courses/noorani-qaida.jpg". */
  image?: string;
  /** Optional object-position for the card image, e.g. "object-[50%_30%]". */
  imagePosition?: string;
};

export type NavLink = {
  href: string;
  label: string;
};

export const siteConfig = {
  name: "Tajweed ul Quran Academy",
  shortName: "Tajweed ul Quran",
  tagline: "Learn the Quran with Tajweed — online, at any age.",
  description:
    "Tajweed ul Quran Academy teaches the Holy Quran online with proper Tajweed to students of every age. One-on-one classes, qualified teachers, and flexible timings worldwide.",
  url: "https://tajweedulquran.academy",
  // TODO: replace with the academy's real contact details.
  email: "info@tajweedulquran.academy",
  // WhatsApp number in international format, digits only (no +, spaces or dashes).
  whatsapp: "923430565179",
  phoneDisplay: "+92 343 0565179",
  hours: "Open daily · 7:00 AM – 11:00 PM (GMT)",
} as const;

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const courses: Course[] = [
  {
    slug: "noorani-qaida",
    title: "Noorani Qaida",
    level: "Beginner",
    duration: "2–4 months",
    image: "/images/courses/noorani-qaida.jpg",
    description:
      "The essential first step. Master Arabic letters, their sounds, and joining rules — the foundation for reading the Quran correctly.",
    highlights: [
      "Arabic alphabet & pronunciation",
      "Harakat, letter joining & words",
      "Rules of Noon & Meem sakinah",
    ],
  },
  {
    slug: "nazra-quran",
    title: "Nazra Quran with Tajweed",
    level: "All levels",
    duration: "Ongoing",
    image: "/images/courses/nazra-quran.jpg",
    imagePosition: "object-[50%_66%]",
    description:
      "Read the entire Quran fluently applying Tajweed rules, with your teacher correcting every letter and sound in real time.",
    highlights: [
      "Fluent recitation of all 30 Juz",
      "Live Tajweed correction",
      "Makharij & sifaat of letters",
    ],
  },
  {
    slug: "hifz-quran",
    title: "Hifz — Quran Memorization",
    level: "Intermediate",
    duration: "2–4 years",
    image: "/images/courses/hifz-quran.jpg",
    imagePosition: "object-[50%_45%]",
    description:
      "A structured memorization program with daily lessons, revision cycles, and one-on-one accountability to become a Hafiz.",
    highlights: [
      "Daily sabaq, sabqi & manzil",
      "Personalised memorization pace",
      "Strong long-term revision plan",
    ],
  },
  {
    slug: "tajweed-rules",
    title: "Tajweed Rules Mastery",
    level: "Intermediate",
    duration: "3–6 months",
    image: "/images/courses/tajweed-rules.jpg",
    description:
      "A dedicated theory-and-practice course covering every rule of Tajweed so your recitation matches the way the Quran was revealed.",
    highlights: [
      "Ghunnah, Idghaam, Ikhfa & Qalqalah",
      "Rules of Raa, Laam & Madd",
      "Practical recitation drills",
    ],
  },
  {
    slug: "kids-quran",
    title: "Quran for Kids",
    level: "Ages 4+",
    duration: "Flexible",
    image: "/images/courses/kids-quran.jpg",
    description:
      "Gentle, engaging lessons designed for young learners — patient teachers, short sessions, and lots of encouragement.",
    highlights: [
      "Child-friendly, patient teachers",
      "Short, engaging sessions",
      "Short Surahs & daily duas",
    ],
  },
  {
    slug: "quran-translation",
    title: "Quran Translation",
    level: "Advanced",
    duration: "Ongoing",
    image: "/images/courses/quran-translation.jpg",
    description:
      "Move beyond recitation to understanding — learn the word-by-word meaning of the Quran so every verse you read speaks to your heart.",
    highlights: [
      "Word-by-word translation",
      "Build a Quranic Arabic vocabulary",
      "Understand what you recite",
    ],
  },
  {
    slug: "tafseer",
    title: "Tafseer ul Quran",
    level: "Advanced",
    duration: "Ongoing",
    image: "/images/courses/tafseer.jpg",
    description:
      "Study the deeper meaning of the Quran — the context of revelation, explanation of verses, and the lessons and wisdom behind them.",
    highlights: [
      "Context of revelation (Asbab al-Nuzul)",
      "Verse-by-verse explanation",
      "Lessons, wisdom & reflection",
    ],
  },
];

export const features = [
  {
    title: "Proper Tajweed",
    description:
      "Every lesson focuses on correct pronunciation and the rules of Tajweed, so you recite exactly as the Quran was revealed.",
  },
  {
    title: "Any Age Welcome",
    description:
      "From 4-year-olds to grandparents — our teachers adapt each class to the learner in front of them.",
  },
  {
    title: "One-on-One Classes",
    description:
      "Private sessions mean full attention, faster progress, and lessons paced to you — never a crowded classroom.",
  },
  {
    title: "Flexible Timing",
    description:
      "Book classes that fit your schedule and time zone. Learn from anywhere in the world, any day of the week.",
  },
  {
    title: "Qualified Teachers",
    description:
      "Learn from certified, experienced male and female Quran tutors — choose the teacher you're most comfortable with.",
  },
  {
    title: "Free Trial",
    description:
      "Start with a no-obligation trial class to meet your teacher and experience the academy before you commit.",
  },
];

export const testimonials = [
  {
    quote:
      "My two children look forward to every class. Their Tajweed has improved beyond what I imagined, and the teacher is incredibly patient.",
    author: "Aisha R.",
    role: "Parent · United Kingdom",
  },
  {
    quote:
      "I started Noorani Qaida as an adult with zero background. Six months later I'm reading the Quran fluently. Truly life-changing.",
    author: "Yusuf M.",
    role: "Student · United States",
  },
  {
    quote:
      "The flexible timing made it possible around my work. One-on-one attention makes all the difference in learning correctly.",
    author: "Fatima S.",
    role: "Student · Canada",
  },
];

/** Build a pre-filled WhatsApp chat link. */
export function whatsappLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}

/** Build a pre-filled mailto link. */
export function mailtoLink(subject: string, body: string): string {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${siteConfig.email}?${params.toString()}`;
}
