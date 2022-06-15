import CallToActionSection from "modules/User/HomePage/CallToActionSection/CallToActionSection";
import Contact from "modules/User/HomePage/Contact/ConTact";
import ProductList from "modules/User/Products/ProductList/ProductList";

function HomePage() {
  return (
    <div>
      <ProductList />
      <CallToActionSection />
      <Contact />
    </div>
  );
}

export default HomePage;
