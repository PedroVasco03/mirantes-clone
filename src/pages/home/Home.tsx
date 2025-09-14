import BestCourse from "../../components/course/BestCourse"
import Features from "../../components/features/Features"
import Footer from "../../components/footer/Footer"
import Hero from "../../components/hero/Hero"
import BestJob from "../../components/job/BestJob"
import Nav from "../../components/navbar/Nav"

const Home = () => {
    return(
        <>
           <main>
                <Nav/>
                <Hero/>
                <Features/>
                <BestJob/>
                <BestCourse/>
                <Footer/>
           </main>
        </>
    )
}

export default Home