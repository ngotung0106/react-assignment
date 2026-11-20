import { ArrowUpRight } from 'lucide-react'

export default function SubjectCard({ subject }) {
  return (
    <article className="subject-card">
      <div className="subject-logo">
        <img src={`/${subject.image}`} alt={`${subject.subject} logo`} loading="lazy" />
      </div>
      <h3>{subject.subject}</h3>
      <p>{subject.description}</p>
      <a href="#booking" className="text-link">Explore course <ArrowUpRight size={16} /></a>
    </article>
  )
}
