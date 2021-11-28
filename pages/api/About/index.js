export default function about(req, res) {
  const options = {
    title:
      "Just A Dude Born In Colombia That Loves Web Development, System Design And All The Stuff Related With It.",
    identifies: "Electronic Engineer & Software Developer",
    personalInfo: [
      {
        title: "Birthday",
        about: "22 December 1995",
      },
      {
        title: "Working In",
        about: "Barranquilla, Atlantico (GMT-5)",
      },
      {
        title: "Degree",
        about: "Electronic Engineer",
      },
    ],
  };
  res.status(200).json(options);
}
