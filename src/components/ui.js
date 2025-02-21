export function Input({ type, name, placeholder, value, onChange }) {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    );
  }
  
  export function Button({ type, className, children }) {
    return (
      <button
        type={type}
        className={`bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 ${className}`}
      >
        {children}
      </button>
    );
  }
  
  export function Card({ className, children }) {
    return <div className={`bg-white rounded-lg shadow ${className}`}>{children}</div>;
  }
  
  export function CardHeader({ children }) {
    return <div className="p-4 border-b">{children}</div>;
  }
  
  export function CardTitle({ children }) {
    return <h2 className="text-lg font-semibold">{children}</h2>;
  }
  
  export function CardContent({ children }) {
    return <div className="p-4">{children}</div>;
  }
  