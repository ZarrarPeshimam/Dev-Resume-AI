// AuthForm.jsx
import { motion } from "framer-motion";

export default function AuthForm({ title, fields, onSubmit, footer, message }) {
  return (
    <div className="relative min-h-screen bg-blue-100 px-4 overflow-hidden">
      {/* Fixed background */}
      <div className="fixed inset-0 bg-blue-100 z-0" />

      {/* Static flex wrapper */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        {/* Animate only the card */}
        <motion.div
          className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
            {title}
          </h2>

          {/* Message */}
          {message && (
            <div className="mb-4 rounded-md bg-green-100 p-3 text-sm text-green-700">
              {message}
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-4">
            {fields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-600">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  required
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
            >
              {title}
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-500">{footer}</div>
        </motion.div>
      </div>
    </div>
  );
}
