import { Route, Routes } from "react-router-dom";
import { Categories } from "./recipes/Categories";
import Recipe from "./recipes/Recipe";
// import Recipes from "./recipes/RecipeList";
import RecipeForm from "./recipes/RecipeForm";
import Login from "./security/Login";
//import Logout from "./security/_Logout";
import Layout from "./Layout";
import Home from "./Home";
import ContactPage from "./recipes/ContactPage";
import "./App.css";
import RecipesLayout from "./recipes/RecipesLayout";

export default function App() {
    //const auth = useAuth();
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories/" element={<Categories />} />
                <Route path="/recipes" element={<RecipesLayout />}>
                    <Route path=":id" element={<Recipe />} />
                    <Route path="test" element={<h1>Test</h1>} />
                </Route>
                <Route path="/add" element={<RecipeForm />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/logout" element={<Logout />} /> */}
                <Route path="*" element={<h2>Not Found</h2>} />
            </Routes>
        </Layout>
    );
}
