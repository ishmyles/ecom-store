import './Infocard.css'

export default function InfoCard({subheading, icon, description}) {
    return (
        <div className="info-card">
            {icon}
            <h3>{subheading}</h3>
            <p>{description}</p>
        </div>
    )
}