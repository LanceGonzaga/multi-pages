export default function ContactForm({ formData, setFormData }) {
    const handleChange = e => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };
  
    return (
      <form>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" /><br />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" /><br />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" /><br />
      </form>
    );
  }

  