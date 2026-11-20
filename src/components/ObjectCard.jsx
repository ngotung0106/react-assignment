import { ArrowUpRight } from 'lucide-react'

export default function ObjectCard({ item }) {
  return (
    <article className="object-card">
      <div className="object-image">
        <img src={`/${item.image}`} alt={item.object} loading="lazy" />
      </div>
      <div className="object-content">
        <h3>{item.object}</h3>
        <p>{item.description}</p>
        <a href="#booking" className="text-link">Tìm hiểu thêm <ArrowUpRight size={16} /></a>
      </div>
    </article>
  )
}
