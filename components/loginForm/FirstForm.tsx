type FormData = {
  name: string;
  email: string;
  phone: number;
  insta: string | null;
  youtube: string | null;
};

type Props = {
  setStep: (arg: number) => void;
  setUserData: (arg: () => FormData) => void;
  userData: FormData;
};

export default function FirstForm({ setStep, setUserData, userData }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData(() => {
      return { ...userData, [e.target.name]: e.target.value };
    });
  };

  return (
    <form className="bg-white rounded-xl drop-shadow-lg z-40 h-[500px] w-[80vw] max-w-[500px] grid grid-rows-[20%_60%_20%] items-center px-8 ">
      <div>
        <div className="flex justify-around mt-4">
          <span className="border-b-2 border-blue-500 px-8">Basic</span>
          <span className="px-8">Social</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 mx-auto w-[90%]">
        <label htmlFor="name">Enter Name</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
          className="bg-gray-200 p-2 rounded-md"
        />
        <label htmlFor="email">Enter Email</label>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          id="email"
          className="bg-gray-200 p-2 rounded-md"
        />
        <label htmlFor="phone">Enter Phone</label>
        <input
          onChange={handleChange}
          type="number"
          name="phone"
          id="phone"
          className="bg-gray-200 p-2 rounded-md"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setStep(2)}
          className="py-2 px-6 rounded-md text-white text-xl bg-blue-500"
        >
          Next
        </button>
      </div>
    </form>
  );
}
