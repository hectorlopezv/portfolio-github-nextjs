export default function navbar(req, res) {
  const options = [
    { name: "Home", href: "#hero", iconClass: "bx bx-home" },
    { name: "About", href: "#about", iconClass: "bx bx-user" },
    { name: "Projects", href: "#portfolio", iconClass: "bx bx-file-blank" },
    { name: "Contact", href: "#contact", iconClass: "bx bx-envelope" },
  ];
  res.status(200).json(options);
}
