import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle, Phone, MapPin, Send, Star, ChevronDown } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useGoogleRating } from "@/hooks/use-google-rating";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";

const WHATSAPP_URL =
  "https://wa.me/447984147403?text=Hi%20Neil%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20some%20flooring%20work.";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid UK phone number").regex(/^[\d\s+()-]{10,15}$/, "Please enter a valid phone number"),
  message: z.string().min(10, "Please provide a brief message"),
  consent: z.boolean().refine((v) => v === true, "You must agree to continue"),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const googleRating = useGoogleRating();
  const { toast } = useToast();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const { error: dbError } = await supabase.from("leads").insert({
        name: data.name, email: data.email, phone: data.phone,
        message: data.message, consent_given: data.consent,
      });
      if (dbError) throw dbError;

      try {
        await supabase.functions.invoke("send-whatsapp", {
          body: { name: data.name, email: data.email, phone: data.phone, message: data.message },
        });
      } catch { /* non-fatal */ }

      toast({ title: "Message sent ✓", description: "Neil will be in touch with you shortly." });
      reset();
      setShowEmailForm(false);
    } catch {
      toast({ title: "Something went wrong", description: "Please call Neil directly to get in touch.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const displayRating = googleRating?.rating ?? 5.0;

  const inputClass = "w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-green transition-colors";

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="container-content">
        <AnimateIn className="mb-16">
          <span className="text-green text-xs font-medium tracking-[0.3em] uppercase block mb-4">Get in Touch</span>
          <h2 className="font-display text-4xl lg:text-5xl font-medium text-gray-900">Request a Quote</h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl">
            The quickest way to reach Neil is directly by phone or WhatsApp - he'll get back to you personally.
          </p>
        </AnimateIn>

        {/* Primary CTAs */}
        <AnimateIn className="mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1eb85a] text-white font-medium py-5 px-6 text-base tracking-wide transition-colors"
            >
              <MessageCircle size={20} />
              WhatsApp Neil
            </a>
            <a
              href="tel:+447984147403"
              className="flex items-center justify-center gap-3 bg-green hover:bg-green-dark text-white font-medium py-5 px-6 text-base tracking-wide transition-colors"
            >
              <Phone size={20} />
              07984 147403
            </a>
          </div>
        </AnimateIn>

        {/* Supporting info */}
        <AnimateIn delay={0.1} className="mb-16">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400 mb-8">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-rose" />
              Forest Hill, London &nbsp;·&nbsp; Serving London &amp; the South East
            </span>
            <span>Free, no-obligation quotes</span>
            <span className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} size={12} className={s <= Math.round(displayRating) ? "fill-rose text-rose" : "fill-gray-200 text-gray-200"} />
                  ))}
                </div>
                {googleRating
                  ? `${displayRating.toFixed(1)} on Google (${googleRating.total_ratings} reviews)`
                  : "5.0 · Google Reviews"}
              </span>
          </div>
          <div className="flex items-start gap-10 text-sm">
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">Business Hours</p>
              <div className="space-y-1.5 text-gray-600">
                <div className="flex gap-6 justify-between">
                  <span>Mon - Sat</span>
                  <span>8:00 am - 5:00 pm</span>
                </div>
                <div className="flex gap-6 justify-between">
                  <span>Sunday</span>
                  <span className="text-gray-400">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Recessive email option */}
        <AnimateIn>
          <div className="border-t border-gray-100 max-w-xl">
            <button
              type="button"
              onClick={() => setShowEmailForm((v) => !v)}
              className="flex items-center justify-between w-full py-4 text-left group"
            >
              <span className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors">
                Prefer to send a message instead?
              </span>
              <ChevronDown
                size={16}
                className={`text-gray-300 group-hover:text-gray-500 transition-all duration-200 ${showEmailForm ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {showEmailForm && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pb-8 pt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">Full Name *</label>
                        <input {...register("name")} type="text" placeholder="John Smith" className={inputClass} />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">Phone *</label>
                        <input {...register("phone")} type="tel" placeholder="07700 000000" className={inputClass} />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">Email *</label>
                      <input {...register("email")} type="email" placeholder="john@example.com" className={inputClass} />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">Message *</label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        placeholder="Tell Neil about your project - e.g. 'I need a lounge and hallway carpeted, roughly 30m²'"
                        className={`${inputClass} resize-none`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                    </div>
                    <div className="flex items-start gap-3">
                      <input {...register("consent")} type="checkbox" id="consent" className="mt-0.5 h-4 w-4 border-gray-300 accent-green cursor-pointer" />
                      <label htmlFor="consent" className="text-xs text-gray-400 leading-relaxed cursor-pointer">
                        I agree that my details can be used to respond to this enquiry. Your data will not be shared with third parties. *
                      </label>
                    </div>
                    {errors.consent && <p className="text-red-500 text-xs -mt-2">{errors.consent.message}</p>}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-green hover:bg-green-dark text-white font-medium py-3.5 text-sm tracking-wide transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {submitting ? (
                        <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                      ) : (
                        <><Send size={15} />Send Message</>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
