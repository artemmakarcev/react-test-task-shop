import BackHome from "../components/Back";

export const CartPage = () => {
  let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
  if (shoppingCart === null) shoppingCart = [];
  return (
    <div>
      <BackHome />
      {shoppingCart.map((element) => {
        return (
          <div>
            {element.name} {element.color} {element.size} {element.price}
          </div>
        );
      })}
    </div>
  );
};
