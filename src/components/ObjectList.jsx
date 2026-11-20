import objects from '../data/objects.json'
import ObjectCard from './ObjectCard'

export default function ObjectList() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">
        SHOULD WHO LEARN PROGRAMING IN FPT<br /> APTECH?
      </h2>

      <div className="object-list">
        {objects.map((item) => (
          <ObjectCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
