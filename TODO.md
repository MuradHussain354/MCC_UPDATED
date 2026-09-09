# TODO — Before Going Live

1. **YouTube channel URLs** — the "Visit Channel" buttons on `/youtube-channels`
   currently link to `#` (see TODO comment in `components/ChannelCard.tsx`).
   Replace with the real channel URLs once available.

2. **Contact form backend** — `components/ContactForm.tsx` currently opens a
   `mailto:` link with the visitor's message pre-filled. If you'd rather
   collect submissions without opening the visitor's mail client, wire it up
   to Formspree (see the TODO comment at the top of that file) or another
   form backend of your choice.

3. **Logo file** — `public/images/mcc-logo.png` was generated from the
   uploaded logo file and resized for web use. Swap in a fresh export at
   your convenience (a transparent-background PNG will look best against the
   black navbar/footer).

4. **Photos** — the "Our Story" image block on `/about` is currently a
   placeholder styled card. Swap in a real photo when available.

5. **Google Map** — the embed on `/contact` is generated from the address
   text (`No. 11, Clifford Place, Bambalapitiya, Colombo 04`). For a pinned
   exact location, replace the iframe `src` with an embed URL from Google
   Maps' own "Share > Embed a map" tool for the precise pin.
