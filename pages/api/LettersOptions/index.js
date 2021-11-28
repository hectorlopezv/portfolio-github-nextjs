export default function lettersoptions(req, res) {
  const options = {
    strings: ["Electronic Engineer", "Full-Stack Software Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    cursorChar: "|",
  };
  res.status(200).json(options);
}
