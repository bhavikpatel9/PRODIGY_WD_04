import React,{useEffect} from "react";
import AOS from 'aos';

const Contact = ({ id }) => {
  useEffect(() => {
    AOS.init({
      duration : "1000",
      delay : "200"
    });
  }, [])
  return (
    <div className="pb-14 pt-14" id={id}>
      <h1 className="my-10 text-center text-4xl" data-aos="zoom-in">Contact Me</h1>
      <div className="lg:mx-96 mx-5 rounded">
        <form
          action="https://formspree.io/f/mnnaapna"
          method="POST"
          className="space-y-4"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div className="flex justify-between">
            <input
              name="firstName"
              className="w-[49%] p-2 rounded border-2 border-[#5947a1] bg-[#111024] placeholder-[#5A596B]"
              type="text"
              placeholder="First Name"
              required
            />
            <input
              name="secondName"
              className="w-[49%] p-2 rounded border-2 border-[#5947a1] bg-[#111024] placeholder-[#5A596B]"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>

          <input
            name="email"
            className="w-full p-2 rounded border-2 border-[#5947a1] bg-[#111024] placeholder-[#5A596B]"
            type="text"
            placeholder="Email"
            required
          />
          <textarea
            name="textarea"
            className="w-full p-2 rounded border-2 border-[#5947a1] bg-[#111024] placeholder-[#5A596B] resize-y"
            id=""
            placeholder="Message"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full p-2 bg-[#705EB8] rounded hover:bg-purple-600"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
