export const esEnlaceValido = (url: string) => {
  const regex = /^(ftp|http|https):\/\/[^ "]+$/;
  return regex.test(url);
}