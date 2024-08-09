import useAuth from "../firebase/hook/useAuth/useAuth";

/* eslint-disable react/prop-types */
function Cart() {
  const {user} = useAuth();
  return (
    <div>
      <h1>Hello, {user.displayName}</h1>
    </div>
  );
}

export default Cart;
