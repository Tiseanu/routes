import { Route } from "react-router-dom";

const Welcome = () => {
    return (
        <section>
            <h1>The Welcome Page</h1>
            <Route path="/homepage/welcome-user"><p>Hi, John!</p></Route>
        </section>
    );
}
export default Welcome;