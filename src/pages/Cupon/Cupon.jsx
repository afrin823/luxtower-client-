import { useEffect, useState } from "react";
import CupnItem from "./CupnItem";

const Cupon = () => {
    const [cupon, setCupon] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/coupon')
            .then(res => res.json())
            .then(data => {
                const codeItems = data.filter(item => item.code !== 'SUMMER10')
                setCupon(codeItems);
            })
    }, []);

    return (
        <div className="bg-base-200 p-4">
            <h2 className="text-3xl font-bold text-center mb-4">Exclusive Coupons</h2>
            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {
            cupon.map(item => <CupnItem key={item.id} item={item}></CupnItem>)
           }
            </div>
        </div>
    );
};

export default Cupon;
