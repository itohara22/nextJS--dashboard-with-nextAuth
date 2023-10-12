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
  setDataEntered: (arg: boolean) => void;
  setIsUser: (arg: boolean) => void;
};

export default function SecondForm({
  setStep,
  setUserData,
  userData,
  setDataEntered,
  setIsUser
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData(() => {
      return { ...userData, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userData.name || !userData.email || !userData.phone) {
      alert("Enter valid data");
      return;
    }
    setIsUser(false);
    setDataEntered(true);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white rounded-xl drop-shadow-lg z-40 h-[500px] w-[80vw] max-w-[500px] grid grid-rows-[20%_60%_20%] items-center px-8 py-2"
    >
      <div>
        <div className="flex justify-around mt-4">
          <span className=" px-8">Basic</span>
          <span className="border-b-2 border-blue-500 px-8">Social</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 mx-auto w-[90%]">
        <label htmlFor="insta">
          Instagram Link
          <span className="text-xs text-gray-500">(Optional)</span>
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="insta"
          id="insta"
          className="bg-gray-200 p-2 rounded-md"
        />
        <label htmlFor="youtube">
          Youtube Link <span className="text-xs text-gray-500">(Optional)</span>
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="youtube"
          id="youtube"
          className="bg-gray-200 p-2 rounded-md"
        />
      </div>
      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="py-2 px-6 rounded-md text-white text-xl bg-blue-500"
        >
          Back
        </button>
        <button className="py-2 px-6 rounded-md text-white text-xl bg-blue-500">
          Done
        </button>
      </div>
    </form>
  );
}
