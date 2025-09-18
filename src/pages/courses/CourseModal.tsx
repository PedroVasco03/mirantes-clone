import React from "react";

interface Course {
  title: string;
  description: string;
  price: string;
  duration: string;
  certificate: string;
  image: string;
}

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
}

const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-[#111827] rounded-xl shadow-lg w-[90%] max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl  font-bold mb-2">{course.title}</h2>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="space-y-1 text-sm text-gray-500">
          <div>Carga horária: {course.duration}</div>
          <div>Certificado: {course.certificate}</div>
          <div>Preço: {course.price}</div>
        </div>
        <div className="mt-4 float-end">
          <a
            href="auth.html"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Inscrever-se
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
