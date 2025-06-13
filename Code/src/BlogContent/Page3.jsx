import React from 'react'
import Slidecompo from "../components/Slidecompo";
import Section4 from '../Home/Section4'

const Page3 = () => {
    
  return (
    <>
    <div className="flex flex-col lg:grid lg:grid-cols-[25%_75%] min-h-screen bg-gray-50 gap-2">
  {/* Sidebar (optional – add content here or remove if unused) */}
  <aside className="bg-white p-0 order-2 lg:order-1 ">
    <Slidecompo/>
  </aside>

  {/* Main Blog Content */}
  <section className="flex flex-col py-6 px-4 sm:py-8 md:py-10 md:px-8 lg:px-12 mt-4 lg:mt-0 max-w-full lg:max-w-4xl order-1 lg:order-2">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#333] leading-snug tracking-wide text-center lg:text-left">
    Mastering Work-Life Balance: Tips For Modern Men
  </h1>

  <div className="leading-relaxed text-gray-700 text-base sm:text-lg whitespace-pre-line">
    <p className="mb-4">
      In today’s fast-paced and hyperconnected world, work-life balance has become more than just a buzzword—it’s a necessity. For modern men juggling demanding careers, personal relationships, and self-care, maintaining a sense of balance is crucial for mental health, productivity, and long-term happiness. Yet many struggle with knowing where to draw the line or how to create meaningful separation between work and personal life.
    </p>

    <hr className="my-6" />

    <p className="mb-4">
      The lines between professional and personal life have blurred, especially with the rise of remote work and the constant ping of digital notifications. Mastering work-life balance requires intentional habits, boundary-setting, and self-awareness. It’s not about working less—it’s about working smarter, prioritizing what truly matters, and carving space for rest, joy, and growth outside the 9-to-5.
    </p>

    <hr className="my-6" />

    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
      1. Set Clear Boundaries Between Work and Home
    </h2>
    <p className="mb-4">
      One of the most effective ways to restore balance is by setting physical and mental boundaries. Designate a specific workspace, even if you're working from home, and avoid checking emails outside of working hours. This separation trains your brain to associate different spaces with different tasks, helping you mentally log off at the end of the day. Communicate your work hours clearly with colleagues and family members to reduce conflicts and overstretching.
    </p>

    <hr className="my-6" />

    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
      2. Learn to Say No—And Mean It
    </h2>
    <p className="mb-4">
      Overcommitment is a major culprit in burnout. Many men feel obligated to say yes to every meeting, project, or social event out of fear of letting others down. But true balance comes from knowing your limits. Learn to say no without guilt. Respect your own time the way you respect others'. Declining something today often means you're preserving your energy for what truly aligns with your goals tomorrow.
    </p>

    <hr className="my-6" />

    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
      3. Make Time for Health, Hobbies, and Loved Ones
    </h2>
    <p className="mb-4">
      Life isn’t just about deadlines and deliverables. Prioritize regular exercise, nutritious meals, and mental health practices like journaling or meditation. Invest in hobbies that fuel your creativity and give you a break from screens—whether it's playing guitar, hiking, or cooking. Most importantly, make space for family and friends. Quality time with loved ones can reset your mind and remind you of life beyond the grind.
    </p>

    <hr className="my-6" />

    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
      4. Use Technology Wisely
    </h2>
    <p className="mb-4">
      Technology can either be your biggest asset or your worst distraction. Use tools like calendar blocks, productivity apps, and focus timers to enhance your efficiency during work hours. Equally important—use “Do Not Disturb” mode, screen time limits, or app blockers to unplug when needed. Be intentional with your usage so that tech serves you, not the other way around.
    </p>

    <hr className="my-6" />

    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
      5. Schedule Rest as You Would Work
    </h2>
    <p className="mb-4">
      Rest is not a reward—it’s a requirement. If you don’t schedule breaks, vacations, or even short walks during your workday, your body and mind will eventually demand them in the form of burnout or illness. Treat downtime with the same importance as meetings or deadlines. Whether it’s a weekend getaway, a daily nap, or an evening routine that helps you unwind, make rest a non-negotiable part of your calendar.
    </p>

    <hr className="my-6" />

    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
      6. Reflect and Recalibrate Regularly
    </h2>
    <p className="mb-4">
      Balance isn’t a one-time achievement—it’s a process. Take time weekly or monthly to reflect on how you’re feeling. Are you stretched too thin? Is your energy aligned with your priorities? Use tools like journaling or habit trackers to stay in tune with your well-being. Adjust your schedule, routines, or commitments as needed. Flexibility is key to staying balanced in a constantly changing world.
    </p>

    <hr className="my-6" />

    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
      7. Don’t Do It Alone—Seek Support
    </h2>
    <p className="mb-4">
      Trying to “handle everything” solo is a common trap. Work-life balance thrives in environments of shared responsibility. Don’t be afraid to delegate at work, ask for help at home, or speak to a mentor or therapist. Opening up about your struggles doesn’t make you weak—it makes you human. Surround yourself with people who encourage balance and respect your need for it.
    </p>
  </div>
</section>

</div>
<hr className="border-gray-100"/>
  <Section4/>
    </>
  )
}

export default Page3
