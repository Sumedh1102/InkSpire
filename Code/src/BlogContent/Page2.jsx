import React from 'react'
import Slidecompo from "../components/Slidecompo";
import Section4 from '../Home/Section4'

const Page2 = () => {
    
  return (
    <>
    <div className="flex flex-col lg:grid lg:grid-cols-[25%_75%] min-h-screen bg-gray-50 gap-2">
  {/* Sidebar (optional – add content here or remove if unused) */}
  <aside className="bg-white p-0 order-2 lg:order-1">
    <Slidecompo/>
  </aside>

  {/* Main Blog Content */}
  <section className="flex flex-col py-6 px-4 sm:py-8 md:py-10 md:px-8 lg:px-12 mt-4 lg:mt-0 max-w-full lg:max-w-4xl order-1 lg:order-2">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#333] leading-snug tracking-wide text-center lg:text-left">
    Top 7 Habits To Boost Men’s Mental Health
  </h1>

  <div className="leading-relaxed text-gray-700 text-base sm:text-lg whitespace-pre-line">
    <p className="mb-4">
      Men’s mental health is often overlooked due to outdated societal expectations, but building consistent habits can make a significant difference. By prioritizing mental well-being, men can enhance their emotional resilience, relationships, productivity, and overall quality of life.
    </p>

    <hr className="my-6" />

    <p className="mb-4">
      While there's no one-size-fits-all solution, incorporating healthy practices into daily routines can provide powerful results. These habits are simple yet transformative, and they don’t require drastic life changes—just small, consistent actions that add up over time.
    </p>

    <hr className="my-6" />

    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
      1. Regular Physical Activity
    </h2>
    <p className="mb-4">
      Exercise is not just for physical health—it’s a proven mood booster. Regular movement reduces stress, anxiety, and depression by releasing endorphins. Whether it’s weightlifting, running, yoga, or even a daily walk, staying active can greatly improve emotional balance.
    </p>

    <hr className="my-6" />

    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
      2. Prioritize Sleep Quality
    </h2>
    <p className="mb-4">
      Sleep is foundational for mental clarity and emotional regulation. Aim for 7–9 hours of quality sleep each night by following a consistent bedtime routine, limiting screen time before bed, and creating a calm, dark sleeping environment.
    </p>

    <hr className="my-6" />

    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
      3. Practice Mindfulness or Meditation
    </h2>
    <p className="mb-4">
      Even just 10 minutes of mindfulness or meditation a day can lower cortisol levels and promote a sense of calm. Apps like Headspace or Calm can guide you through breathing exercises, body scans, and mental relaxation.
    </p>

    <hr className="my-6" />

    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
      4. Stay Connected with Friends
    </h2>
    <p className="mb-4">
      Social connection is vital for mental health. Reach out to friends regularly, talk openly, and don’t be afraid to share what’s going on emotionally. Vulnerability isn’t weakness—it’s strength in disguise.
    </p>

    <hr className="my-6" />

    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
      5. Limit Alcohol and Substance Use
    </h2>
    <p className="mb-4">
      While alcohol or substances might offer temporary relief, they can worsen anxiety and depression over time. Moderation and awareness are key. If it becomes a coping mechanism, seek professional support without hesitation.
    </p>

    <hr className="my-6" />

    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
      6. Express Yourself Creatively
    </h2>
    <p className="mb-4">
      Writing, music, drawing, or any creative outlet helps release bottled-up emotions and reduce internal stress. You don’t need to be “good” at it—it’s about expression, not perfection.
    </p>

    <hr className="my-6" />

    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
      7. Seek Professional Help When Needed
    </h2>
    <p className="mb-4">
      There’s strength in asking for help. Speaking with a therapist or counselor can provide guidance, tools, and healing. Mental health professionals are trained to support without judgment—don’t hesitate to reach out.
    </p>
  </div>
</section>
</div>
<hr className="border-gray-100"/>
  <Section4/>
    </>
  )
}

export default Page2
