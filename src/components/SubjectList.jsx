import subjects from '../data/subjects.json'
import SubjectCard from './SubjectCard'

export default function SubjectList() {
  return (
    <section className="section subjects-section" id="subjects">
      <h2 className="section-title">WHAT IS THE COURSE PROGRAM?</h2>

      <div className="subject-list">
        {subjects.map((item) => (
          <SubjectCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
