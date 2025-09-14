import "../global.componets.css";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container cFooter">
                <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                    <div className="logo" aria-hidden></div>
                    <div style={{fontWeight:'800'}}>Mirantes</div>
                </div>
                <div style={{color:'var(--muted)'}}>
                    © {new Date().getFullYear()} Mirantes. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    )
}

export default Footer;
