import { MapPin, Phone, Mail } from 'lucide-react'
export default function Footer() {
  return (
    <footer className="footer" id="locations">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">FPT <b>Aptech</b></div>
          <p>Đào tạo lập trình viên quốc tế<br/>Unleash your potential.</p>
        </div>
        <div className="footer-contact">
          <p><MapPin size={17}/> No 8 - Ton That Thuyet, My Dinh, Nam Tu Liem, Ha Noi</p>
          <p><Phone size={17}/> 024 3766  xxxx</p>
          <p><Mail size={17}/> info@fpt-aptech.edu.vn</p>
        </div>
      </div>
      <div className="copyright">© 2026 FPT Aptech. All rights reserved.</div>
    </footer>
  )
}
