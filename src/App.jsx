import NavHeader from "@/components/header/NavHeader";
import Main from "@/components/main/Main";

import CartDetailsProvider from "@/context/useCartDetails";
const App = () => {
    return (
        <CartDetailsProvider>
            <NavHeader />
            <Main />
        </CartDetailsProvider>
    );
};
export default App;
