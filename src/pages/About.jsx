import SectionTitle from '../components/SectionTitle'
import { Target, Users, Lightbulb } from 'lucide-react'
export default function About() {
  return <main className="inner-page">
    <section className="page-banner"><span className="eyebrow">ABOUT FPT APTECH</span><h1>Learn today.<em> Lead tomorrow.</em></h1><p>Đồng hành cùng người học trên hành trình chinh phục lĩnh vực công nghệ thông tin.</p></section>
    <section className="section about-layout">
      <div><SectionTitle eyebrow="OUR STORY" title="Education for the digital future" description="FPT Aptech hướng tới môi trường học tập thực tiễn, nơi học viên được tiếp cận kiến thức nền tảng, công nghệ hiện đại và phương pháp học thông qua dự án."/></div>
      <div className="about-photo"><img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1000&q=85" alt="Learning environment"/></div>
    </section>
    <section className="section values">
      <div><Target/><h3>Practical learning</h3><p>Chú trọng thực hành và khả năng giải quyết bài toán thực tế.</p></div>
      <div><Users/><h3>Supportive community</h3><p>Học tập, trao đổi và phát triển cùng cộng đồng.</p></div>
      <div><Lightbulb/><h3>Future-ready skills</h3><p>Phát triển tư duy và kỹ năng cần thiết cho ngành công nghệ.</p></div>
    </section>
  </main>
}
