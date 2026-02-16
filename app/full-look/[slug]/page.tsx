import { notFound } from "next/navigation";
import { fullLooks } from "@/data/products";
import FullLookOutfit from "@/components/FullLookOutfit";
import { Metadata } from "next";

interface FullLookPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const fullLook = fullLooks.find((fl) => fl.slug === slug);

  if (!fullLook) {
    return {
      title: "Look Not Found",
      description: "The requested full look could not be found.",
    };
  }

  return {
    title: `${fullLook.title} - Full Look | CozyMuse Finds`,
    description: fullLook.description,
    openGraph: {
      title: fullLook.title,
      description: fullLook.description,
      images: [{ url: fullLook.coverImage }],
    },
  };
}

export async function generateStaticParams() {
  return fullLooks.map((fullLook) => ({
    slug: fullLook.slug,
  }));
}

export default async function FullLookPage({ params }: FullLookPageProps) {
  const { slug } = await params;
  const fullLook = fullLooks.find((fl) => fl.slug === slug);

  if (!fullLook) {
    notFound();
  }

  return <FullLookOutfit fullLook={fullLook} />;
}
