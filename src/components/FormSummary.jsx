export default function FormSummary({ formData }) {
    return (
      <div>
        <h2>Summary</h2>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Message:</strong> {formData.message}</p>
      </div>
    );
  }
  