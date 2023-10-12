import LoginForm from "@/components/LoginForm";
import LoginHero from "@/components/LoginHero";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden grid grid-cols-2 bg-[#F8FAFF]">
      <section className="relative hidden sm:block h-screen w-[100%] bg-blue-500 -skew-x-6 -translate-x-10">
        <LoginHero />
      </section>
      <section className="h-screen grid items-center justify-items-center sm:justify-items-end p-6">
        <LoginForm />
      </section>
    </div>
  );
}
