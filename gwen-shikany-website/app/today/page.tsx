export default function Today() {
  return (
    <main className="min-h-screen">
      <div className="bg-gradient-to-r from-[#d4917b] to-[#e6a89a] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hobbies and Interests Today</h1>
          <p className="text-xl">Basketball, snacks, and staying connected</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg">
              Even today, Gwen enjoys staying connected to the things she loves, especially sports, good snacks, and 
              sharing those little discoveries with family. Whether it's watching a basketball game or calling family 
              members to recommend a new favorite treat, these small moments are part of what brings her joy.
            </p>
          </div>

          <div className="bg-[#f5f1e8] rounded-lg p-8 mb-8 border-l-4 border-[#9ca986]">
            <h3 className="text-2xl font-bold mb-4 text-[#2d2d2d]">A Love for Basketball</h3>
            <p className="text-lg mb-4">
              One of Gwen's favorite pastimes is watching basketball, especially games played by the Portland Trail Blazers. 
              She has followed the team for many years and still keeps up with how they are doing each season.
            </p>
            <p className="text-lg mb-4">
              Recently, Gwen has been especially excited about some of the newer players on the team. She appreciates 
              players who focus on teamwork and sharing the ball.
            </p>
            <p className="text-lg mb-6">
              One player she enjoys watching is Deni Avdija, whom she describes as a hardworking player who looks for 
              opportunities to involve the whole team.
            </p>
            <p className="text-lg mb-4">
              Like many fans in Portland, Gwen also jokes about one of the long-running frustrations of being a Blazers 
              supporter: the number of injured players.
            </p>
            <blockquote className="border-l-4 border-[#d4917b] pl-4 italic text-gray-700 text-lg">
              "Half the team is always out."
            </blockquote>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-[#6b7d5a]">Trader Joe's Finds</h3>
            <p className="text-lg mb-4">
              Another thing Gwen enjoys is discovering good snacks, especially from Trader Joe's.
            </p>
            <p className="text-lg mb-4">
              Whenever she finds something she likes, she often calls family members (including her grandchildren :) ) 
              to tell them about it and recommend they try it too. One favorite recommendation has been the Hold the Cone 
              waffle cone tips!
            </p>
            <p className="text-lg">
              Sharing those little discoveries has become part of her way of staying connected with family.
            </p>
          </div>

          <div className="bg-[#f5f1e8] rounded-lg p-8 mb-8 border-l-4 border-[#d4917b]">
            <h3 className="text-2xl font-bold mb-4 text-[#2d2d2d]">Favorite Foods</h3>
            <p className="text-lg mb-4">
              Gwen also has a soft spot for simple, familiar foods.
            </p>
            <p className="text-lg mb-6">
              One favorite she mentioned is the inexpensive tacos from Taco Bell, which she enjoys with Chuck every so often.
            </p>
            <p className="text-lg mb-4">
              Meals and snacks often become small moments of humor in the house as well. At one point during a call, 
              she told Chuck while he looked at an empty container:
            </p>
            <blockquote className="border-l-4 border-[#d4917b] pl-4 italic text-gray-700 text-lg">
              "Chuck, there's nothing there, you ate that. It's empty!"
            </blockquote>
          </div>
        </section>
      </div>
    </main>
  );
}
