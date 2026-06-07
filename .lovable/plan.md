# Plan: Connect Contact Form to EmailJS

Integrate EmailJS so the existing contact form in `src/components/portfolio/Sections.tsx` actually sends emails using your credentials.

## Credentials (safe to embed — these are public)
- Service ID: `service_ny8kkxb`
- Template ID: `template_u0zd936`
- Public Key: `bhcVOarD5QR94ejVA`

## Steps

1. **Install dependency**
   - `bun add @emailjs/browser`

2. **Refactor the `Contact` component** (`src/components/portfolio/Sections.tsx`)
   - Convert the form to controlled inputs (`name`, `email`, `subject`, `message`) using React state.
   - Add a `loading` state and disable the submit button while sending.
   - Replace the placeholder submit handler with `emailjs.send(SERVICE_ID, TEMPLATE_ID, params, { publicKey: PUBLIC_KEY })`.
   - On success: show "Message sent ✓", toast success via `sonner`, reset the form.
   - On failure: show error state, toast error with message.
   - Keep all current styling, floating labels, and gradient button intact.

3. **Validation**
   - Lightweight client-side checks: required fields, valid email format, max lengths (name 100, subject 150, message 2000) to prevent abuse.

4. **Template variable names sent to EmailJS**
   - `from_name`, `from_email`, `subject`, `message`, `to_name` (= "Nivas").
   - You may need to ensure your EmailJS template uses these same variable names (`{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`). If your template uses different names, tell me and I'll match them.

## Notes
- EmailJS public key is meant for browser use — no backend/secret storage needed.
- No other sections or styles will be changed.
