import "../global.componets.css";
import CourseCard from "./components/CourseCard"

const BestCourse = () =>{
    return(
        <section className="section container">
            <h2 style={{fontSize:'22px'}}>Cursos e certificações</h2>
            <div style={{display:'grid',
            gridTemplateColumns:'repeat(3,1fr)',
            gap:'18px',
            marginTop:'12px'}}>
                <CourseCard
                    title="Excel para Negócios"
                    image="E"
                    description="Dashboards e relatórios"
                    price="5.989"
                />
            </div>
        </section>
    )
}

export default BestCourse