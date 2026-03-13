Here's a structured critique of shawnklein.net:

---

## Design Critique: shawnklein.net

### First Impression ✅
The site makes an immediately strong impression. The purpose is crystal clear within two seconds — this is a technical portfolio for a Systems & DevOps engineer. The dark theme, monospaced type accents, and blue palette feel authentic to the field rather than forced. The stat callouts (10+, 65%, 330k) on the hero are a smart choice — they give skeptical hiring managers something concrete to anchor to right away.

---

### What's Working Well
- **Hero section is sharp.** The typographic scale between "Shawn" and "Klein" creates visual tension that feels intentional and confident. The outlined vs. filled weight contrast is a nice touch.
- **The three CTAs are well-differentiated.** "View Projects" (filled/primary), "Get in Touch" (ghost), and "Resume" (icon + ghost) create a clear visual hierarchy of actions without feeling cluttered.
- **Consistent section rhythm.** Every section uses the same label pattern (small caps, blue dash) before its heading, which gives the page a cohesive, structured feel as you scroll.
- **Project cards are well-constructed.** Tags, description, and CTA in every card — readable and consistent.

---

### Areas to Improve

**1. Hero whitespace is too generous on the right half**
The hero section has roughly 40% of its horizontal space sitting empty to the right of the content, with the three stats floating in the far corner. On wide screens this creates a fragmented composition. The stats feel abandoned rather than deliberately placed. Consider anchoring them differently — perhaps stacked closer to the copy, or as an inline row beneath the bio text.

**2. The "Klein" outline type can hurt readability**
The outlined/stroked treatment on "Klein" is stylistically interesting but at certain screen sizes the stroke weight is very thin against the dark background. Users with lower-contrast vision settings or slightly lower-quality displays could find it hard to read. If it stays, increase the stroke weight or add a subtle glow.

**3. Inconsistent project card CTAs**
Five of the six project cards say "View project →" but the Studio IT Infrastructure card says "Read writeup →". That's not wrong in isolation, but it breaks the visual scanning rhythm a visitor builds up. Either standardize the label or make the distinction more visually deliberate (e.g., a different icon or badge style to signal "this is a writeup, not a demo").

**4. Skills section missing context**
The capability cards list technology tags (AWS, Terraform, Kubernetes, etc.) but don't tell a story about *how* you use them or at what depth. A one-sentence description per category — even just "Deployed multi-region infrastructure on AWS EC2 and Lambda" — would give a recruiter or client something to evaluate beyond a tag list.

**5. Technical Notes cards are visually thin**
The writing/blog section cards feel noticeably lighter than the project cards — no description text, just a category tag and a title. This makes them feel unfinished compared to the rest of the page. Adding even a one-line excerpt per article would dramatically raise the perceived quality of this section and give people a reason to click.

**6. Contact section layout imbalance**
The "Let's Talk" section splits into a text/links column on the left and an "Open to Work" card on the right. On the current layout, the card feels somewhat disconnected — it's styled differently (lighter background) with no visual bridge to the left column. The Download Resume button also duplicates the Resume CTA from the hero. Consider whether both are necessary, and if so, whether the contact page version should be styled differently to feel like a contextual reinforcement rather than a repeat.

---

### Accessibility Notes
- The low-contrast small caps section labels (e.g., "CAPABILITIES", "BACKGROUND") in muted blue-gray are likely failing WCAG AA contrast ratios — they're decorative enough to potentially be exempt, but worth checking.
- The nav links are very small and lightly weighted — fine for desktop, but touch targets on mobile may be tight.
- The outlined "Klein" text should be tested with a contrast checker given the thin stroke against dark background.

---

### Overall
This is a strong, polished portfolio with a clear voice and a design sensibility that matches the technical brand. The main opportunities are tightening the hero layout at wide viewports, adding a bit more substance to the skills and writing sections, and small consistency fixes in the project cards. It reads as professional and well-crafted — these are refinements, not overhauls.