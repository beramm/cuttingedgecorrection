"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Faq = () => {
  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform relative text-foreground`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="min-h-[900px] flex flex-col items-center justify-start gap-24 w-full bg-custom-gradient px-8 md:px-4 xl:px-0 py-28">
      <div className="mt-12">
        <h1 className="font-bold text-5xl lg:text-6xl text-center text-foreground">
          FREQUENTLY ASKED <br />{" "}
          <span className="bg-radial-gradient bg-clip-text text-transparent">
            QUESTIONS
          </span>
        </h1>
        <p className="text-center text-sm font-light mt-4 text-foreground">
          Got questions? We have the answers.
        </p>
      </div>
      <div className="max-w-[900px]">
        <Accordion
          open={open === 1}
          icon={<Icon id={1} open={open} />}
          className="text-foreground mb-4 border-0"
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="relative px-8 border-0"
          >
            <div className="absolute inset-0 bg-primary" />
            <span
              className={`relative ${
                open === 1
                  ? "bg-gradient-to-r from-[#00A2FF] to-[#006199] bg-clip-text text-transparent"
                  : ""
              }`}
            >
              / / HOW OFTEN SHOULD I GET MY CAR DETAILED?
            </span>
          </AccordionHeader>
          <AccordionBody className="bg-primary px-8">
            The frequency of detailing depends on various factors including your
            driving habits, environmental conditions, and the level of
            maintenance you prefer. However, we generally recommend getting your
            car detailed every 4-6 months to maintain its appearance and protect
            its resale value.
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 2}
          icon={<Icon id={2} open={open} />}
          className="text-foreground mb-4 border-0"
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="relative px-8 border-0"
          >
            <div className="absolute inset-0 bg-primary" />
            <span
              className={`relative ${
                open === 2
                  ? "bg-gradient-to-r from-[#00A2FF] to-[#006199] bg-clip-text text-transparent"
                  : ""
              }`}
            >
              / / DO YOU OFFER A WARRANTY OR GUARANTEE ON YOUR SERVICES?
            </span>
          </AccordionHeader>
          <AccordionBody className="bg-primary px-8">
            Yes, we stand behind the quality of the results we produce. We offer
            a satisfaction guarantee, and if you&apos;re not completely
            satisfied with the results, we&apos;ll make it right.
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 3}
          icon={<Icon id={3} open={open} />}
          className="text-foreground mb-4 border-0"
        >
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className="relative px-8 border-0"
          >
            <div className="absolute inset-0 bg-primary" />
            <span
              className={`relative ${
                open === 3
                  ? "bg-gradient-to-r from-[#00A2FF] to-[#006199] bg-clip-text text-transparent"
                  : ""
              }`}
            >
              / / DO YOU OFFER GIFT CARDS OR PACKAGE DEALS?
            </span>
          </AccordionHeader>
          <AccordionBody className="bg-primary px-8">
           Yes .
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 4}
          icon={<Icon id={4} open={open} />}
          className="text-foreground mb-4 border-0"
        >
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className="relative px-8 border-0"
          >
            <div className="absolute inset-0 bg-primary" />
            <span
              className={`relative ${
                open === 4
                  ? "bg-gradient-to-r from-[#00A2FF] to-[#006199] bg-clip-text text-transparent"
                  : ""
              }`}
            >
              / / HOW LONG DOES A DETAILING APPOINTMENT TYPICALLY TAKE?
            </span>
          </AccordionHeader>
          <AccordionBody className="bg-primary px-8">
            The duration of a detail depends on the services requested and the
            condition of the vehicle. However, our most extensive details can
            take a full day. We&apos;ll provide you with a more accurate
            estimate based on your specific needs when you place a booking with
            us.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
