import { useState, useMemo, useRef } from "react";


function useMemoHook() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);

    const nameRef = useRef();

    const handleAdd = () => {
        setProducts([...products, {
            name, price: parseInt(price)
        }])
        setName('');
        setPrice('');

        nameRef.current.focus();
    };

    //
    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            console.log('re-cal');
            return result + prod.price
        }, 0);

        return result;
    }, [products]);

    return (

        <div>
            <input
                ref={nameRef}
                value={name}
                placeholder="Enter name ..."
                onChange={e => setName(e.target.value)}
            />
            <br></br>
            <input
                value={price}
                placeholder="Enter price ..."
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleAdd}>Add</button>
            <br></br>
            <br></br>

            <label>Total: {total}</label>
            <br></br>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>

    );

}

export default useMemoHook;