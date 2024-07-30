

const CupnItem = ({ item }) => {
    const { code, discount, description, isActive } = item;
    return (
        <div >


            <div className="p-4 bg-white shadow-md rounded-md">
                <h3 className="text-lg font-bold">{code}</h3>
                <p className="text-sm">{description}</p>
                <p className="text-md font-semibold">Discount: {discount}%</p>
            </div>



        </div>
    );
};

export default CupnItem;