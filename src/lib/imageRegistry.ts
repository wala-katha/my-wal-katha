// src/lib/imageRegistry.ts
import postNandage   from "@/assets/images/posts/Nandage-duwa-wal-katha.jpg";
import postThaththa  from "@/assets/images/posts/Thaththa-Duwa-wal-katha.jpg";
import postMethsala  from "@/assets/images/posts/Methsala-akka-wal-katha.jpg";
import postGedara    from "@/assets/images/posts/Gedara-driver-wal-katha.jpg";

import authorJohn    from "@/assets/images/authors/john-doe.jpg";
import authorMark    from "@/assets/images/authors/mark-dinn.jpg";

export const imageRegistry: Record<string, ImageMetadata> = {
  // ✅ CRITICAL FIX: Keys = markdown frontmatter image field values EXACTLY
  "/images/posts/Thaththa-Duwa-wal-katha.jpg" : postThaththa,
  "/images/posts/Nandage-duwa-wal-katha.jpg"  : postNandage,
  "/images/posts/Methsala-akka-wal-katha.jpg" : postMethsala,
  "/images/posts/Gedara-driver-wal-katha.jpg" : postGedara,

  "/images/authors/mark-dinn.webp": authorMark,
  "/images/authors/john-doe.webp" : authorJohn,
};

export function getOptimizedImage(path: string | undefined): ImageMetadata | undefined {
  if (!path) return undefined;
  return imageRegistry[path];
}
