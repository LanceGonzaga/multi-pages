import ServiceCard from '../components/ServiceCard';

const services = [
  { id: 1, name: 'Web Development', description: 'This is a test webpage' },
];

export default function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      {services.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
