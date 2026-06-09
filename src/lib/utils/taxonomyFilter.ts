import { slugify } from "@/lib/utils/textConverter";

/**
 * Categories සහ Tags අනුව ලිපි ආරක්ෂිතව Filter කරන ශ්‍රිතය.
 * යම් ලිපියක දත්ත හිස් නම් බිඳ වැටෙන්නේ නැතිව ස්වයංක්‍රීයව නිවැරදි වේ.
 */
const taxonomyFilter = (posts: any[], name: string, key: any) => {
  // 1. ස්වයංක්‍රීය නිවැරදි කිරීම (Auto-Fix): Posts ලැයිස්තුවක් නොමැති නම් හිස් Array එකක් ලබා දේ
  if (!Array.isArray(posts)) return [];

  return posts.filter((post) => {
    // ලිපියේ අදාළ Taxonomy (Category හෝ Tag) දත්ත තිබේදැයි ආරක්ෂිතව බැලීම
    const taxonomyArray = post?.data?.[name];

    // 2. දත්ත Array එකක් නොවේ නම් හෝ හිස් නම්, එම ලිපිය මඟහැර ඉදිරියට යයි (Auto-Fix)
    if (!Array.isArray(taxonomyArray)) return false;

    // සිංහල/ඉංග්‍රීසි නම් Slug බවට හරවා පරීක්ෂා කිරීම
    return taxonomyArray
      .map((item: string) => {
        if (typeof item !== "string") return "";
        return slugify(item);
      })
      .includes(key);
  });
};

export default taxonomyFilter;
