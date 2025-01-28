import type { Comics } from "@/types/marvel";
export const useComics = async (): Promise<Comics> => {
  const apiKey = import.meta.env.VITE_APP_MARVEL_API_PUBLIC;
  const MARVEL_API = `https//gateway.marvel.com/v1/public/`;
  const API_SIGN = `apikey=${apiKey}`;
  const requestURI = `${MARVEL_API}/comics?${API_SIGN}`;
  console.log({ requestURI });
  const res = await fetch("");
  const jsonRes = await res.json();
  return jsonRes.data;
};
