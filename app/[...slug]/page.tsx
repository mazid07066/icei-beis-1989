import { notFound, redirect } from "next/navigation";

type CatchAllPageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

function safeDecode(value: string) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function cleanPath(value: string) {
  let cleaned = value;

  // Decode once or twice because social apps may encode hidden characters
  cleaned = safeDecode(cleaned);
  cleaned = safeDecode(cleaned);

  return cleaned
    // Remove encoded hidden Unicode characters if still present
    .replace(/%E2%81%A0/gi, "")
    .replace(/%E2%80%8B/gi, "")
    .replace(/%E2%80%8C/gi, "")
    .replace(/%E2%80%8D/gi, "")
    .replace(/%EF%BB%BF/gi, "")

    // Remove actual hidden Unicode characters
    .replace(/[\u200B-\u200D\u2060\uFEFF]/g, "")

    // Remove accidental whitespace or line-break encodings
    .replace(/%20/gi, "")
    .replace(/%0A/gi, "")
    .replace(/%0D/gi, "")

    // Remove visible whitespace and trailing dots
    .trim()
    .replace(/\.+$/g, "");
}

export default async function CatchAllPage({ params }: CatchAllPageProps) {
  const { slug = [] } = await params;

  const rawPath = `/${slug.join("/")}`;
  const cleanedPath = cleanPath(rawPath);

  if (cleanedPath === "/program") {
    redirect("/program");
  }

  if (cleanedPath === "/p") {
    redirect("/program");
  }

  notFound();
}