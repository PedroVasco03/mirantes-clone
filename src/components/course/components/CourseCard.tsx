interface CourseCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, price, image }) => {
    return(
        <div className="course-card">
            <div style={{width:'96px',
            height:'72px',
            borderRadius:'10px',
            background:'linear-gradient(90deg,#16324a,#0f1b25)',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            color:'var(--muted)'}}>{image}
        </div>
            <div style={{flex:'1'}}>
                <div style={{fontWeight:'800'}}>{title}</div>
                <div style={{color:'var(--muted)',marginTop:'6px'}}>{description}</div>
                <div style={{marginTop:'10px',
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center'}}>
                <strong>Kz {price}</strong>
                <a className="btn" href="course.html">Ver detalhes</a>
                </div>
            </div>
        </div>
    )
}

export default CourseCard