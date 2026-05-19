import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";

const StudioPage = lazy(() => import("@/pages/StudioPage"));

export default function App() {
  return (
    <BrowserRouter>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-green focus:text-sm focus:font-medium focus:rounded focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Toaster />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/studio/*"
          element={
            <Suspense fallback={null}>
              <StudioPage />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
