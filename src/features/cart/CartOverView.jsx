import Button from "../../Ui/Button";

const CartOverview = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md p-4 z-50">
      <div className="max-w-4xl mx-auto flex justify-between items-center gap-4">
        <div>
          <p className="text-sm text-gray-600 font-semibold">quantity:12</p>
          <p className="text-lg font-bold text-gray-900">total price:15000$</p>
        </div>
        <Button to="/cart" variant="default">
          Go to cart →
        </Button>
      </div>
    </div>
  );
};

export default CartOverview;
