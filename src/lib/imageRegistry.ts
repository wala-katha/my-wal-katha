// src/lib/imageRegistry.ts
// ✅ PURPOSE: public/images/ path string → Astro optimized ImageMetadata object
// Posts/Authors images import කරලා registry object එකකට map කරයි.
// content.config.ts, markdown frontmatter, SEO/OG/JSON-LD logic — කිසිවක් touch නොවේ.

// ── POST IMAGES ──────────────────────────────────────────────
// ✅ ඔබ GitHub screenshot එකේ පෙන්වා ඇති පරිදි src/assets/images/posts/ හි ඇති නියම ෆයිල් නම් වලට අනුව import කර ඇත
import postNandage   from "@/assets/images/posts/Nandage-duwa-wal-katha.jpg";
import postThaththa  from "@/assets/images/posts/Thaththa-Duwa-wal-katha.jpg";
import postMethsala  from "@/assets/images/posts/Methsala-akka-wal-katha.jpg";
import postGedara    from "@/assets/images/posts/Gedara-driver-wal-katha.jpg";

// ── AUTHOR IMAGES ─────────────────────────────────────────────
// ✅ ඔබේ authors පින්තූරත් assets වලට මාරු කර ඇත්නම් මෙම import ගැලපේ (එසේ නොමැති නම් public එකේ ඇති .webp භාවිතා වේ)
import authorJohn    from "@/assets/images/authors/john-doe.jpg";
import authorMark    from "@/assets/images/authors/mark-dinn.jpg";

// ── REGISTRY MAP ──────────────────────────────────────────────
// ✅ CRITICAL FIX: Keys = markdown frontmatter image field values EXACTLY
// දැන් මෙම keys, src/assets/images/posts/ ෆෝල්ඩරයේ ඇති ඔබේ ෆයිල් නම් වලට හරියටම ගැලපේ.

export const imageRegistry: Record<string, ImageMetadata> = {
  // ✅ Posts — frontmatter හි ඇති values වලට ගැලපෙන පරිදි (Case-sensitive)
  // ඔබේ frontmatter වල ඇති path එක "/images/posts/Thaththa-Duwa-wal-katha.jpg" වන බැවින් key එක එලෙසම තබා ඇත
  "/images/posts/Thaththa-Duwa-wal-katha.jpg" : postThaththa,
  
  // ✅ අනෙක් පින්තූර වල නම් වල ඇති spaces ඉවත් කර, ඔබේ assets ෆෝල්ඩරයේ ඇති පරිදි hyphens (-) වලට මාරු කර ඇත
  "/images/posts/Nandage-duwa-wal-katha.jpg"  : postNandage,
  "/images/posts/Methsala-akka-wal-katha.jpg" : postMethsala,
  "/images/posts/Gedara-driver-wal-katha.jpg" : postGedara,

  // ✅ Authors — frontmatter හි ඇති EXACT values
  "/images/authors/mark-dinn.webp": authorMark,
  "/images/authors/john-doe.webp" : authorJohn,
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
