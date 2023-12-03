import { StaticImageData } from "next/image";
import { Linkedin, TwitterIcon } from "@/public/images";

type Data = {
  content: {
    heading: string;
    list: {
      tagName: string;
      linkSrc?: string;
      openInNewTab?: boolean;
    }[];
  }[];
  address: {
    label: string;
    link: string;
  };

  socialIcons: {
    icon: StaticImageData;
    label: string;
    link: string;
  }[];
};

const data: Data = {
  content: [
    {
      heading: "Products",
      list: [
        {
          tagName: "Features",
        },
        {
          tagName: "Testimonials",
        },
        {
          tagName: "Pricing",
        },
        {
          tagName: "FAQs",
        },
      ],
    },
    {
      heading: "Resources",
      list: [
        {
          tagName: "Change log",
        },
        {
          tagName: "Help center",
        },
        {
          tagName: "Blog",
        },
        {
          tagName: "Contact",
        },
      ],
    },
    {
      heading: "Others",
      list: [
        {
          tagName: "Privacy",
        },

        {
          tagName: "Terms",
        },

        {
          tagName: "Affiliation",
        },
        {
          tagName: "Press",
        },
      ],
    },
    {
      heading: "From the blog",
      list: [
        {
          tagName:
            "Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life",
        },
        {
          tagName:
            "Organizing Your Calendar for Enhanced Productivity and Focus",
        },
        {
          tagName:
            "The Power of Prioritization: Effective Strategies for Managing Your Time and Tasks",
        },
        {
          tagName:
            "Maximizing Your Minutes: Essential Tips for Streamlining Your Daily Routine and Calendar",
        },
      ],
    },
  ],

  address: {
    label: "A short text explaining why my startup is so cool",
    link: "",
  },

  socialIcons: [
    {
      icon: Linkedin,
      label: "linkedin",
      link: "",
    },
    {
      icon: TwitterIcon,
      label: "linkedin",
      link: "",
    },
  ],
};

export default data;
