import { useParams } from "react-router-dom";

const Product = () => {
    const params = useParams(); // will return an object of params
    console.log(params);

    return (
        <section>
            <h1>Product 1</h1>
        </section>
    );
}

export default Product;