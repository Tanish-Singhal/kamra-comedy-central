import { Button } from "@/components/ui/button";
import { Newspaper, Award, MicVocal } from "lucide-react";

const AboutContent = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <img
            src="./kunal.png"
            alt="Kunal Kamra"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">About Kunal</h2>
          <p className="mb-4">
            Kunal Kamra is one of India's most recognized and controversial
            stand-up comedians, known for his sharp political satire and
            fearless commentary on social issues.
          </p>
          <p className="mb-4">
            Rising to fame with his YouTube series "Shut Up Ya Kunal," Kamra has
            established himself as a voice that questions authority and brings
            political discourse into mainstream comedy.
          </p>
          <p>
            His unique style combines wit, sarcasm, and incisive observations
            that both entertain and provoke thought among his audiences across
            India and beyond.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Career Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-xl border border-border shadow-md">
            <Award className="text-comedy-orange mb-4 h-8 w-8" />
            <h3 className="text-xl font-bold mb-2">Award Winning</h3>
            <p>
              Recipient of multiple comedy awards and recognized for his
              contribution to political satire in India.
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border shadow-md">
            <MicVocal className="text-comedy-orange mb-4 h-8 w-8" />
            <h3 className="text-xl font-bold mb-2">Viral Shows</h3>
            <p>
              Created the popular YouTube series "Shut Up Ya Kunal" featuring
              interviews with politicians and commentators.
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border shadow-md">
            <Newspaper className="text-comedy-orange mb-4 h-8 w-8" />
            <h3 className="text-xl font-bold mb-2">Media Presence</h3>
            <p>
              Featured in major publications and media outlets across India and
              internationally.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Comedy Style</h2>
        <p className="mb-4">
          Kunal's comedy is characterized by its directness and willingness to
          address politically sensitive topics. He combines personal anecdotes
          with observations about Indian politics, society, and media.
        </p>
        <p className="mb-4">
          Known for his deadpan delivery and satirical take on current events,
          Kamra has developed a distinctive voice in Indian comedy that
          resonates with audiences seeking honest commentary on political and
          social issues.
        </p>
        <p>
          His performances often challenge audience perspectives while
          maintaining a humorous approach that makes complex issues accessible
          and entertaining.
        </p>
      </div>

      <div className="bg-muted p-8 rounded-xl mb-16">
        <h2 className="text-3xl font-bold mb-4">Famous Quotes</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-comedy-orange pl-4">
            <p className="italic text-lg mb-2">
              "Democracy is a contact sport. If you don't engage with it, you
              lose by default."
            </p>
          </div>
          <div className="border-l-4 border-comedy-orange pl-4">
            <p className="italic text-lg mb-2">
              "Comedy is the last surviving art form where you say what you want
              and get away with it."
            </p>
          </div>
          <div className="border-l-4 border-comedy-orange pl-4">
            <p className="italic text-lg mb-2">
              "Politics is not rocket science, it's way more complicated."
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6 text-center">
          Book Kunal For Your Event
        </h2>
        <p className="text-center mb-8 max-w-2xl mx-auto">
          Interested in booking Kunal Kamra for a corporate event, college
          festival, or private show? Get in touch with his team for availability
          and rates.
        </p>
        <div className="flex justify-center">
          <a href="mailto:bookings@kunalkamra.com">
            <Button
              size="lg"
              className="bg-comedy-orange hover:bg-comedy-orange/90"
            >
              Contact for Bookings
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
