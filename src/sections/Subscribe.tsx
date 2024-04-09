import { ChangeEvent, useState } from "react";

const Subscribe = () => {
  const [mail, setMail] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const emailRegex = /^\S+@\S+\.\S+$/;

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setMail(email);
    setIsValid(true);
    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidEmail = emailRegex.test(mail);
    setIsValid(isValidEmail);

    if (isValidEmail) {
      setIsSubmitted(true);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <section className="w-full bg-dark-gray min-h-24 md:min-h-36 text-white text-center text-sm flex justify-around items-center">
      <form onSubmit={handleSubmit}>
        <div>
          <p className="text-lg lg:text-2xl">Subscribe to our Newsletter</p>
          <div className="m-2 space-x-2 font-medium">
            <input
              type="email"
              onChange={handleEmail}
              value={mail}
              className={`text-black p-2 ${!isValid ? "border-red-500" : ""}`}
              aria-invalid={!isValid}
            />
            <button
              type="submit"
              className="p-2 bg-pale-red transition-colors duration-300 hover:bg-pale-pink hover:text-black"
            >
              Submit
            </button>
          </div>
          {isSubmitted && (
            <p className="text-green-500">
              Thank you for subscribing to our newsletter!
            </p>
          )}
        </div>
      </form>
    </section>
  );
};

export default Subscribe;
