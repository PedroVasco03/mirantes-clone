import BestCourse from "../../components/course/BestCourse"
import Features from "../../components/features/Features"
import Hero from "../../components/hero/Hero"
import BestJob from "../../components/job/BestJob"
import Layout from "../../components/layout/Layout"

const Home = () => {
    return(
         <Layout>
            <Hero/>
            <Features/>
            <BestJob/>
            <BestCourse/>
        </Layout>
    )
}

export default Home