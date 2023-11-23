export default function convertDateFromTimestamp(timestamp) {
  return new Date(timestamp * 1000).toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });
}
