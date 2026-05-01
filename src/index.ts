const charMap: Record<string, string> = {
  ə: "e",
  Ə: "E",
  ç: "c",
  Ç: "C",
  ğ: "g",
  Ğ: "G",
  ı: "i",
  I: "I",
  i: "i",
  İ: "I",
  ö: "o",
  Ö: "O",
  ş: "s",
  Ş: "S",
  ü: "u",
  Ü: "U",
};

export function azSlugfy(text: string): string {
  if (!text) return "";
  let slug = text.toString().toLowerCase().trim();

  Object.keys(charMap).forEach((char) => {
    const replacement = charMap[char];
    slug = slug.split(char).join(replacement);
  });
  return slug
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
