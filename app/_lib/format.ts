export function formatPrice(value: string): string {
  // Preserve the curated catalog text while allowing numeric prices later.
  if (/^Rp\s?\d/.test(value)) return value;
  return value;
}

export function makeWhatsAppUrl(message: string, phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ""): string | null {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
