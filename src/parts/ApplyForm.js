// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

// export const ApplyForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID",
//         "YOUR_TEMPLATE_ID",
//         form.current,
//         "YOUR_PUBLIC_KEY"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
import React, { useRef } from "react";
import Fade from "react-reveal/Fade";
import * as emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Form from "elements/Form";
import Button from "elements/Button";

const ApplyForm = (props) => {
  const { data, resetForm } = props;
  const submitEmail = () => {
    const { name, company, email, phone, projectIdea, cv } = data;

    const templateParams = {
      from_name: `${name} - ${company} ( ${phone} - ${email} )`,
      to_name: "Encoders",
      message: projectIdea,
    };

    if (
      name !== "" &&
      company !== "" &&
      email !== "" &&
      phone !== "" &&
      projectIdea !== ""
    ) {
      emailjs
        .send(
          "service_26isq0g",
          "template_2uhqrdk",
          templateParams,
          "1igI8jX47lDb6IALh"
        )
        .then(
          () => {
            toast.success("Success! we'll get back to you soon. Thank you!");
            resetForm();
          },
          (error) => {
            toast.error(error);
          }
        );
    } else {
      toast.error("Please fill out the blank form.");
    }
  };

  return (
    <div>
      <div className="container apply-container flex flex-col w-10/12 sm:w-11/12 xl:w-10/12 rounded-2xl bg-theme-purple text-gray-100 py-14 sm:px-12 sm:py-20 xl:px-16 shadow-2xl discuss">
        <div className="row">
          <div className="col-md-12 apply-text">
            <h1>Apply Here</h1>
            <Fade>
              <div className="flex flex-col">
                <div className="flex flex-col sm:flex-row mx-auto">
                  <Form
                    id="name"
                    name="name"
                    type="text"
                    value={data.name}
                    placeholder="Your name"
                    className=""
                    onChange={props.onChange}
                  />
                  <Form
                    id="company"
                    name="company"
                    type="text"
                    value={data.company}
                    placeholder="Your company"
                    className=""
                    onChange={props.onChange}
                  />
                </div>

                <div className="flex flex-col sm:flex-row mx-auto">
                  <Form
                    id="email"
                    name="email"
                    type="email"
                    value={data.email}
                    placeholder="Your email address"
                    className=""
                    onChange={props.onChange}
                  />
                  <Form
                    id="phone"
                    name="phone"
                    type="tel"
                    value={data.phone}
                    placeholder="Your contact number"
                    className=""
                    onChange={props.onChange}
                  />
                </div>

                <div className="mx-auto">
                  <Form
                    id="projectIdea"
                    name="projectIdea"
                    type="textarea"
                    value={data.projectIdea}
                    placeholder="Explain about your project idea"
                    className=""
                    onChange={props.onChange}
                  />
                </div>
                {/* <div className="mx-auto">
                  <label for="files">Upload Resume</label>
                  <Form
                    id="cv"
                    name="cv"
                    type="file"
                    value={data.cv}
                    placeholder="Attach Resume"
                    className="input-file"
                    onChange={props.onChange}
                  />
                </div> */}

                <Button
                  className="text-xl mx-auto px-12 py-3 mt-5 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200 focus:outline-none"
                  type="button"
                  onClick={submitEmail}
                >
                  Submit
                </Button>
                <p className="mail-to">
                  <a href="mailto:career@encodersinc.com.np">Send email</a>
                </p>
              </div>
            </Fade>

            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
