export default function about(req, res) {
  const options = {
    title:
      "Just A Dude Born In Colombia That Loves Web Development, System Design And All The Stuff Related With It.",
    identifies: "Electronic Engineer & Software Developer",
    story: `Full-Stack Software Developer with 1 year of experience in software
    Development, that follows the following set of rules 2/4 Learning ,
    1/4 Sleeping, 1/4 Coding in addition to be a fast-learner,
    considered to be an Adaptable, innovative, conservative and
    ambitious Person, choosen Software Development as main path due to
    fact that this kind of job offers flexibility and freedom and last
    but not least the fame and respect it brings to the table`,
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
