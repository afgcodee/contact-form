import { useState } from "react";
import { sendContactForm } from "../lib/sendContactForm";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { BsFillSendFill } from "react-icons/bs";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSuccess(false);

    if (!name || !email || !subject || !message) {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);

    try {
      await sendContactForm({ name, email, subject, message });
      setIsSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      setError("Failed to send message. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <>
      <div className="container mx-auto md:max-w-[1167px] py-11">
        <form className="flex flex-col gap-4 lg:gap-8" onSubmit={handleSubmit}>
          <div className="flex items-center max-md:flex-col gap-4">
            <Input
              type="text"
              placeholder="Your Name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="your address"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Input
            type="text"
            placeholder="Subject"
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <div>
            <label className="text-[14px] lg:text-[18px] font-medium">
              Message
            </label>
            <textarea
              required
              className="w-full text-[14px] lg:text-[18px] text-white bg-transparent appearance-none outline-none border-[1px] border-gray-500 focus:border-gray-200 hover-500 shadow-sm h-[180px] py-2 px-3 mt-[16px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {isSuccess && (
            <p className="text-green-500 text-sm mb-4">
              Message sent successfully!
            </p>
          )}
          <Button
            className="rounded-none !text-[16px] font-semibold border-[1px] border-danger-900 hover:bg-transparent hover:text-danger-900 hover-500"
            type="submit"
            color="danger"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
            <BsFillSendFill className="w-[13px] h-[13px]" />
          </Button>
        </form>
      </div>
    </>
  );
}
