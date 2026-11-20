import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import { ArrowRight, PlayCircle, CheckCircle2, Code2, BriefcaseBusiness, GraduationCap } from 'lucide-react'
import objects from '../data/objects.json'
import subjects from '../data/subjects.json'
import ObjectCard from '../components/ObjectCard'
import SubjectCard from '../components/SubjectCard'
import SectionTitle from '../components/SectionTitle'

export default function Home() {
  return <>
    <main>
      <Banner />

      <section className="stats-strip">
        <div><b>25+</b><span>Năm kinh nghiệm</span></div>
        <div><b>04</b><span>Học kỳ chuyên sâu</span></div>
        <div><b>100%</b><span>Định hướng thực hành</span></div>
      </section>

      <section className="section audience-section" id="audience">
        <SectionTitle eyebrow="WHO SHOULD JOIN?" title="SHOULD WHO LEARN PROGRAMMING IN FPT APTECH?" description="Chương trình phù hợp với nhiều đối tượng có mong muốn phát triển trong lĩnh vực công nghệ thông tin."/>
        <div className="object-grid">{objects.map(item => <ObjectCard key={item.id} item={item}/>)}</div>
      </section>

      <section className="section courses-section">
        <SectionTitle eyebrow="WHAT YOU WILL LEARN" title="WHAT IS THE COURSE PROGRAM?" description="Lộ trình đào tạo bao gồm các công nghệ phổ biến, giúp học viên xây dựng nền tảng vững chắc và phát triển sản phẩm thực tế."/>
        <div className="subject-grid">{subjects.map(subject => <SubjectCard key={subject.id} subject={subject}/>)}</div>
        <div className="course-note">
          <div className="note-icon"><GraduationCap size={27}/></div>
          <p>With a program design that includes 04 semesters with many important technologies such as ReactJS, PHP, Python, .NET Core and Spring Boot brings learners to the world of programming quickly and most effectively. After graduation, students are confident in front of employers with 4 project semesters with quality, practical products.</p>
        </div>
        <div className="center"><Link className="btn btn-orange" to="/subjects">Xem tất cả khóa học <ArrowRight size={17}/></Link></div>
      </section>

      <section className="booking-section" id="booking">
        <div className="booking-icon"><BriefcaseBusiness size={30}/></div>
        <div><span className="eyebrow">START YOUR JOURNEY</span><h2>Sẵn sàng trở thành lập trình viên?</h2><p>Để lại thông tin hoặc liên hệ với chúng tôi để được tư vấn lộ trình học phù hợp.</p></div>
        <button className="btn btn-dark" onClick={() => alert('Cảm ơn bạn! Bộ phận tư vấn sẽ liên hệ sớm.')}>Đăng ký tư vấn <ArrowRight size={17}/></button>
      </section>
    </main>
  </>
}
