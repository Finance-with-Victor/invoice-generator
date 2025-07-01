import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 transition-all duration-500">
      <div className="flex flex-col justify-center w-1/2 p-8 mx-auto space-y-6 bg-white rounded-xl shadow-2xl animate-fade-in">
        <h1 className="text-2xl font-bold text-center">Login to InvoiceGen</h1>
        <LoginForm />
      </div>

      <div className="hidden w-1/2 md:block">
        <img
          src="/invoice-picture.jpg"
          alt="Invoice Login"
          className="object-cover w-full h-full transition-opacity duration-500 hover:opacity-90"
        />
      </div>
    </div>
  );
}
