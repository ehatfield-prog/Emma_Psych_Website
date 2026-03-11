import Link from "next/link";

export default function Home() {
  const sections = [
    { href: '/early-years', title: 'Early Years', description: 'Growing up in Great Falls, Montana' },
    { href: '/young-adulthood', title: 'Young Adulthood', description: 'Working, college, and life transitions' },
    { href: '/portland', title: 'Building Community in Portland', description: 'Finding a new home and church family' },
    { href: '/family', title: 'Family & Relationships', description: 'The heart of Gwen\'s life' },
    { href: '/marriage', title: 'Marriage', description: 'Life with Chuck and raising a family' },
    { href: '/cursillo', title: 'The Cursillo Experience', description: 'A life-changing spiritual retreat' },
    { href: '/today', title: 'Hobbies and Interests Today', description: 'Basketball, snacks, and staying connected' },
    { href: '/reflections', title: 'Reflections & Wisdom', description: 'Looking back on a meaningful life' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#9ca986] to-[#6b7d5a] text-white">
        <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              A LIFE IN STORIES
            </h1>
            <h2 className="text-3xl md:text-4xl mb-8 font-light">
              Gwen Shikany
            </h2>
            <div className="text-6xl mb-8">🙂</div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8 mb-12 border-l-4 border-[#d4917b]">
          <p className="text-lg leading-relaxed mb-4">
            <span className="font-semibold">Hey family and friends, thanks for visiting!</span>
          </p>
          <p className="text-lg leading-relaxed mb-4">
            This website shares the life stories and experiences of dear Gwen Shikany, gathered through my
            conversations with her as part of a Senior Partner project in Santa Clara University's Psychology of Aging course.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Over the past several weeks, I've had the opportunity to spend time calling with Grandma Gwen, listening to 
            her memories and learning about the people, experiences, and moments that have shaped her life, from her early 
            years and career to family life, challenges, and the hobbies and passions she enjoys today.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            This site was created to celebrate and preserve her stories so they can be shared with family, friends, and 
            future generations.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I'm incredibly grateful to Grandma Gwen for sharing her time, stories, and wisdom with me throughout this project. 
            I can't wait for you to enjoy reading about her through these pages!!
          </p>
          <p className="text-lg leading-relaxed font-medium">
            Love, Emma
          </p>
        </div>

        {/* Explore Her Story Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#6b7d5a]">
            EXPLORE HER STORY
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 border-t-4 border-[#9ca986] hover:border-[#d4917b]"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#2d2d2d] group-hover:text-[#d4917b] transition-colors">
                  {section.title}
                </h3>
                <p className="text-gray-600">
                  {section.description}
                </p>
                <div className="mt-4 text-[#9ca986] group-hover:text-[#d4917b] font-medium">
                  Read more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
