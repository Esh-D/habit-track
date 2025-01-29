import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Landing = () => {
    return (
        <div>
            <Header />
            <h1>Habit Track</h1>
            <h3>Track your monthly, weekly, and daily habits.</h3>
            <button>Click here to start tracking</button>
            <Footer />
        </div>
    )
}

export default Landing;