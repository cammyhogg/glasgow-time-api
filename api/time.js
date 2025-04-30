export default function handler(req, res) {
  const now = new Date();
  const options = {
    timeZone: "Europe/London",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  const time = now.toLocaleTimeString("en-GB", options);
  res.status(200).json({ time });
}
