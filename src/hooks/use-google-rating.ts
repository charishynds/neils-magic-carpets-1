import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface GoogleRating {
  rating: number;
  total_ratings: number;
}

export function useGoogleRating() {
  const [data, setData] = useState<GoogleRating | null>(null);

  useEffect(() => {
    supabase.functions.invoke("get-google-rating")
      .then(({ data, error }) => { if (!error && data) setData(data); })
      .catch(() => {});
  }, []);

  return data;
}
