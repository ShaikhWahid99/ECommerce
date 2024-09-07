
import Navbar from '../features/navbar/Navbar';
import ProductDetail from '../features/product-list/components/ProductDetail';
import ProductList from '../features/product-list/components/ProductList';

function Home() {
return (
    <div>
    <Navbar>
        <ProductList></ProductList>
        {/* <Checkout></Checkout> */}
        <ProductDetail/>
    </Navbar>
    </div>
);
}
export default Home;