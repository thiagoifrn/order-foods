import { db } from "../_lib/prisma";
import CategoryItem from "./category-item";

const categoryList = async () => {
  const categories = await db.category.findMany({});
  return (
    <div className="grid grid-cols-2 gap-3 px-5 pt-6">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default categoryList;
