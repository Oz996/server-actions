import { useSearchParams } from "next/navigation";

export default function useParamsId() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return { id };
}
