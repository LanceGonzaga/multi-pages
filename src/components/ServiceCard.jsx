// src/components/ServiceCard.jsx
export default function ServiceCard({ service }) {
    return (
      <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
        <h3>{service.name}</h3>
        <p>{service.description}</p>
      </div>
    );
  }
  
  