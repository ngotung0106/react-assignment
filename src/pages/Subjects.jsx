import subjects from '../data/subjects.json'
import SubjectCard from '../components/SubjectCard'
import SectionTitle from '../components/SectionTitle'
export default function Subjects() {
  return <main className="inner-page">
    <section className="page-banner"><span className="eyebrow">FPT APTECH PROGRAMS</span><h1>Our <em>Courses</em></h1><p>Khám phá các công nghệ và kỹ năng được trang bị trong chương trình đào tạo.</p></section>
    <section className="section">
      <SectionTitle title="WHAT IS THE COURSE PROGRAM?" description="Các học phần được thiết kế theo hướng thực hành, cập nhật công nghệ và gắn với nhu cầu tuyển dụng."/>
      <div className="subject-grid">{subjects.map(subject => <SubjectCard key={subject.id} subject={subject}/>)}</div>
    </section>
  </main>
}
