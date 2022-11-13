import { Link } from "react-router-dom";

const Products = () => {
    return (
        <section>
            <h1>The Products Page</h1>
            <ul>
                <li><Link to="products/p1" title="Product 1">Product 1</Link></li>
                <li><Link to="products/p2" title="Product 2">Product 2</Link></li>
                <li><Link to="products/p3" title="Product 3">Product 3</Link></li>
            </ul>
        </section>
    );
}

export default Products;