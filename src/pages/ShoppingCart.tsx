import BackHome from "../components/Back";
import CatalogItem from "../components/CatalogItem";

export const ShoppingCart = () => {
  let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
  if (shoppingCart === null) shoppingCart = [];
  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <h2 className="text-3xl font-bold mb-2">Корзина</h2>
        <BackHome />

        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
          {shoppingCart.map((element) => {
            return (
              <li key={element.id} className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">Neil Sims</p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
                </div>
              </li>
            );
          })}
          {/* {products.map((product: ProductType) => (
          <CatalogItem {...product} />
        ))} */}
        </ul>
      </div>

      {/* {element.name} {element.color} {element.size} {element.price}
                <img className="w-full" src={element.image[0]} alt={element.color} style={{ width: "64px" }} />
                <h4 className="text-xl pl-2">{element.name}</h4> */}

      {/* <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
   <li className="pb-3 sm:pb-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
         <div className="shrink-0">
            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image">
         </div>
         <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
               Neil Sims
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
               email@flowbite.com
            </p>
         </div>
         <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            $320
         </div>
      </div>
   </li>
</ul> */}
    </div>
  );
};
