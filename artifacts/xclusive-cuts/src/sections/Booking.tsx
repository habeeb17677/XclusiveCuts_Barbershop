import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const bookingSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  barber: z.string().min(1, "Please select a barber"),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  notes: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        "service_9s9baje",
        "template_tehbngj",
        {
          customer_name: data.fullName,
          customer_email: data.email,
          customer_phone: data.phone,
          barber: data.barber,
          service: data.service,
          appointment_date: data.date,
          appointment_time: data.time,
          notes: data.notes || "No additional notes.",
        },
        "FKBSABKS-Qq7U-fbh"
      );
      
      toast.success("Appointment request sent successfully. We'll contact you to confirm.");
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send request. Please call us instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full bg-background border-b border-border py-4 px-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-50 appearance-none rounded-none";
  const labelClass = "text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2";

  return (
    <section id="booking" className="py-32 bg-card relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-display text-5xl md:text-7xl tracking-tight mb-6">
              SECURE YOUR <span className="text-muted-foreground">CHAIR.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md font-light">
              Walk-ins are welcome, but appointments are highly recommended to ensure you get the barber and time you want.
            </p>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6">
                <h4 className="font-bold tracking-wider mb-1">CANCELLATION POLICY</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We value your time and ours. Please provide at least 2 hours notice if you need to cancel or reschedule your appointment.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background p-8 md:p-12 border border-border shadow-2xl relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <input {...register("fullName")} className={inputClass} placeholder="John Doe" />
                  {errors.fullName && <span className="text-destructive text-xs mt-2 block">{errors.fullName.message}</span>}
                </div>
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input {...register("phone")} className={inputClass} placeholder="(863) 555-0199" />
                  {errors.phone && <span className="text-destructive text-xs mt-2 block">{errors.phone.message}</span>}
                </div>
              </div>

              <div>
                <label className={labelClass}>Email Address</label>
                <input {...register("email")} type="email" className={inputClass} placeholder="john@example.com" />
                {errors.email && <span className="text-destructive text-xs mt-2 block">{errors.email.message}</span>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className={labelClass}>Select Barber</label>
                  <select {...register("barber")} className={inputClass}>
                    <option value="">Any Available Barber</option>
                    <option value="Carlos Cuts">Carlos Cuts</option>
                    <option value="Melo">Melo</option>
                    <option value="Eden">Eden</option>
                    <option value="Dr. Cutz">Dr. Cutz</option>
                    <option value="Emilio Cuts">Emilio Cuts</option>
                    <option value="Kn0Barber">Kn0Barber</option>
                  </select>
                  {errors.barber && <span className="text-destructive text-xs mt-2 block">{errors.barber.message}</span>}
                </div>
                <div>
                  <label className={labelClass}>Select Service</label>
                  <select {...register("service")} className={inputClass}>
                    <option value="">Choose Service...</option>
                    <option value="Haircut">Classic Haircut</option>
                    <option value="Skin Fade">Skin Fade</option>
                    <option value="Beard Trim">Beard Trim</option>
                    <option value="Kids Haircut">Kids Haircut</option>
                    <option value="Shape Up">Shape Up</option>
                    <option value="Hot Towel Shave">Hot Towel Shave</option>
                    <option value="Combo">Hair + Beard Combo</option>
                  </select>
                  {errors.service && <span className="text-destructive text-xs mt-2 block">{errors.service.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className={labelClass}>Date</label>
                  <input {...register("date")} type="date" className={inputClass} />
                  {errors.date && <span className="text-destructive text-xs mt-2 block">{errors.date.message}</span>}
                </div>
                <div>
                  <label className={labelClass}>Time</label>
                  <input {...register("time")} type="time" className={inputClass} />
                  {errors.time && <span className="text-destructive text-xs mt-2 block">{errors.time.message}</span>}
                </div>
              </div>

              <div>
                <label className={labelClass}>Additional Notes</label>
                <textarea {...register("notes")} rows={3} className={`${inputClass} resize-none`} placeholder="Any specific requests?" />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-5 font-bold tracking-widest uppercase text-sm hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent" />
                    PROCESSING...
                  </>
                ) : (
                  "REQUEST APPOINTMENT"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
