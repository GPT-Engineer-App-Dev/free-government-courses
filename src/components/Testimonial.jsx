export const Testimonial = ({ name, text }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <p className="italic">"{text}"</p>
    <p className="mt-2 text-right font-semibold">- {name}</p>
  </div>
);