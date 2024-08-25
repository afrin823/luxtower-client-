import { useState } from "react";

const Modal = () => {
  const [code, setCode] = useState(null);
  const [discount, setDiscount] = useState(null);
  const [description, setDescription] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const coupon = { code, discount, description, isActive };
    console.log(coupon);
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center text-3xl font-bold py-8">
              Add new Coupon
            </h1>
            <div className="mb-4">
              <label htmlFor="code" className="block text-sm font-medium mb-2">
                Coupon Code
              </label>
              <input
                type="text"
                id="code"
                name="code"
                className="shadow-sm rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="discount"
                className="block text-sm font-medium mb-2"
              >
                Discount (%)
              </label>
              <input
                type="number"
                id="discount"
                name="discount"
                className="shadow-sm rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                required
                min="0"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="shadow-sm rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                rows="4"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="isActive"
                className="block text-sm font-medium mb-2"
              >
                Active
              </label>
              <input
                type="checkbox"
                id="isActive"
                name="isActive"
                className="mr-2"
                value={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
              />
              <span>This coupon is currently active</span>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
