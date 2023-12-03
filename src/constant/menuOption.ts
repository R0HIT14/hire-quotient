export type MenuItem = {
  label: string;

  href: string;
};

type NewMenu = Record<
  string,
  {
    label: string;
    link?: string;
  }
>;

const newMenu: NewMenu = {
  Features: {
    label: "Features",
  },
  Testimonials: {
    label: "Testimonials",
  },
  Pricing: {
    label: "Pricing",
  },
  FAQs: {
    label: "FAQs",
  },
  Blog: {
    label: "Blog",
  },
};

const newMenuOptions = [
  newMenu.Features,
  newMenu.Testimonials,
  newMenu.Pricing,
  newMenu.FAQs,
  newMenu.Blog,
];

export default {
  defaultMenu: newMenuOptions,
};
