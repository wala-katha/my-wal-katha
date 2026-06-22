// src/lib/imageRegistry.ts
// ✅ PURPOSE: public/images/ path string → Astro optimized ImageMetadata object
// Posts/Authors images import කරලා registry object එකකට map කරයි.
// Posts.astro, PostSingle.astro, Authors.astro, AuthorSingle.astro
// සියල්ලේදී post.data.image string → optimized <Image> src ලෙස lookup කරයි.
// content.config.ts, markdown frontmatter, SEO/OG/JSON-LD logic — කිසිවක් touch නොවේ.

// ── POST IMAGES ──────────────────────────────────────────────
import postNandage   from "@/assets/images/posts/Nandage-duwa-wal-katha.jpg";
import postThaththa  from "@/assets/images/posts/Thaththa-Duwa-wal-katha.jpg";
import postMethsala  from "@/assets/images/posts/Methsala-akka-wal-katha.jpg";
import postGedara    from "@/assets/images/posts/Gedara-driver-wal-katha.jpg";

// ── AUTHOR IMAGES ─────────────────────────────────────────────
import authorJohn    from "@/assets/images/authors/john-doe.jpg";
import authorMark    from "@/assets/images/authors/mark-dinn.jpg";

// ── REGISTRY MAP ──────────────────────────────────────────────
// Key = markdown frontmatter එකේ image field path (exact match)
// Value = imported ImageMetadata object (Sharp optimize කරනවා)
export const imageRegistry: Record<string, ImageMetadata> = {
  // Posts — frontmatter image field values (exact, case-sensitive)
  "/images/posts/Nandage duwa wal katha.webp"  : postNandage,
  "/images/posts/Thaththa Duwa wal katha.webp" : postThaththa,
  "/images/posts/Methsala akka wal katha.webp" : postMethsala,
  "/images/posts/Gedara driver wal katha.webp" : postGedara,

  // Authors — frontmatter image field values (exact, case-sensitive)
  "/images/authors/john-doe.webp"  : authorJohn,
  "/images/authors/mark-dinn.webp" : authorMark,
};

/**
 * post.data.image string path → ImageMetadata (optimized)
 * Registry එකේ නැති image නම් undefined return කරයි —
 * caller fallback handle කරයි (site crash නොවේ).
 */
export function getOptimizedImage(path: string | undefined): ImageMetadata | undefined {
  if (!path) return undefined;
  return imageRegistry[path];
}
