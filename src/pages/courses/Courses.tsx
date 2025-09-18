import Layout from "../../components/layout/Layout";
import excelImg from "../../assets/excel.jpg";
import marketingImg from "../../assets/marketing.jpg";
import javaImg from "../../assets/java.jpg";
import designImg from "../../assets/design.jpg";
import "./courses.css";
import React, { useState } from "react";
import CourseModal from "./CourseModal";

interface Course {
  title: string;
  description: string;
  price: string;
  duration: string;
  certificate: string;
  image: string;
}

const courses: Course[] = [
  {
    title: "Excel para Negócios",
    description:
      "Aprenda a montar dashboards e relatórios profissionais com foco em uso comercial.",
    price: "Kz 4.900",
    duration: "30h",
    certificate: "Sim",
    image: excelImg,
  },
  {
    title: "Marketing Digital",
    description:
      "Domine estratégias de SEO, redes sociais e tráfego pago para aumentar vendas online.",
    price: "Kz 6.200",
    duration: "40h",
    certificate: "Sim",
    image: marketingImg,
  },
  {
    title: "Programação em Java",
    description:
      "Aprenda a programar em Java do zero até orientação a objetos com exercícios práticos.",
    price: "Kz 8.500",
    duration: "50h",
    certificate: "Sim",
    image: javaImg,
  },
  {
    title: "Design Gráfico",
    description:
      "Crie peças visuais profissionais usando Photoshop, Illustrator e Canva.",
    price: "Kz 5.700",
    duration: "35h",
    certificate: "Sim",
    image: designImg,
  },
];

const Courses = () =>{
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    return(
        
         <Layout>
            <section className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6">Cursos</h1>
                <div className="grid  grid-cols-1 sm:grid-cols-2 gap-6">
                    {courses.map((course, index) => (
                    <div
                        key={index}
                        className="p-4  bg-[#111827] rounded-lg  shadow-sm flex flex-col"
                    >
                        <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-28 object-cover rounded-md mb-3"
                        />
                        <h2 className="text-lg font-semibold">{course.title}</h2>
                        <p className="text-gray-500 text-sm line-clamp-2">
                        {course.description}
                        </p>
                        <div className="flex justify-between items-center mt-3">
                        <span className="text-blue-600 font-bold">{course.price}</span>
                        <button
                            onClick={() => setSelectedCourse(course)}
                            className="text-sm px-3 py-1 bg-[#0b1220] rounded-lg hover:bg-blue-600 transition"
                        >
                            Ver detalhes
                        </button>
                        </div>
                    </div>
                    ))}
                </div>

                {/* Modal separado */}
                <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
            </section>
        </Layout>
    )
} 

export default Courses