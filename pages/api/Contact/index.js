export default function contact(req, res) {
  const options = {
    title: "Contact",
    photoSrc: "/assests/pictures/Foto.png",
    information: [
      {
        iconClass: "icofont-location-pin",
        name: "location",
        title: "Location:",
        info: "Barranquilla, Colombia",
      },
      {
        iconClass: "icofont-email",
        name: "Email",
        title: "Email:",
        info: "hectorvmlopez@gmail.com",
      },
      {
        iconClass: "icofont-ui-cell-phone",
        name: "Call",
        title: "Call:",
        info: "+57 3205552871",
      },
    ],
  };
  res.status(200).json(options);
}
